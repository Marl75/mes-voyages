/* ============================================
   MES VOYAGES - Pure logic (no DOM, no Firebase)
   Shared by app.js and tests/logic.test.js
   ============================================ */

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const WORLD_COUNTRIES = 195;

// ============================================
// DATES
// ============================================

// "2026-03-14" → local midnight (avoids UTC shifts)
function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function toDateStr(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function todayStr(now = new Date()) {
  return toDateStr(now);
}

// Inclusive: 10 → 17 = 8 days
function getDaysBetween(start, end) {
  return Math.max(1, Math.round((parseDate(end) - parseDate(start)) / MS_PER_DAY) + 1);
}

function tripEnd(trip) {
  return trip.end || trip.start;
}

// Does the trip cover at least one day of month (0-11) in year?
function tripOverlapsMonth(trip, year, month) {
  const monthStart = toDateStr(new Date(year, month, 1));
  const monthEnd = toDateStr(new Date(year, month + 1, 0));
  return trip.start <= monthEnd && tripEnd(trip) >= monthStart;
}

// Months (0-11) of `year` covered by at least one trip
function monthsWithTrips(destinations, year) {
  const months = new Set();
  destinations.forEach(d => (d.trips || []).forEach(trip => {
    for (let m = 0; m < 12; m++) {
      if (tripOverlapsMonth(trip, year, m)) months.add(m);
    }
  }));
  return months;
}

// ============================================
// BEST MONTHS
// ============================================

// Short FR/EN month prefixes (accents stripped). "juin"/"juil" must be tested first.
const MONTH_PREFIXES = [
  ['juin', 5], ['juil', 6],
  ['jan', 0], ['fev', 1], ['feb', 1], ['mar', 2], ['avr', 3], ['apr', 3],
  ['mai', 4], ['may', 4], ['jun', 5], ['jul', 6], ['aou', 7], ['aug', 7],
  ['sep', 8], ['oct', 9], ['nov', 10], ['dec', 11]
];

function normalizeWord(word) {
  return word.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z]/g, '');
}

function monthFromWord(word) {
  const w = normalizeWord(word);
  if (w.length < 3) return null;
  const hit = MONTH_PREFIXES.find(([prefix]) => w.startsWith(prefix));
  return hit ? hit[1] : null;
}

function monthRange(from, to) {
  const months = [];
  let m = from;
  for (let i = 0; i < 12; i++) {
    months.push(m);
    if (m === to) break;
    m = (m + 1) % 12;
  }
  return months;
}

// Accepts the new format (array of 0-11) or the old free text
// ("avr–oct", "mar–mai, oct–nov", "Nov to Feb") → sorted unique months
function parseBestMonths(value) {
  if (Array.isArray(value)) {
    return [...new Set(value.filter(m => Number.isInteger(m) && m >= 0 && m < 12))].sort((a, b) => a - b);
  }
  if (!value || typeof value !== 'string') return [];

  const months = new Set();
  value.split(/[,;/+&]|\bet\b|\band\b/i).forEach(part => {
    const ends = part.split(/\s*[-–—]\s*|\s+(?:à|a|au|to)\s+/i)
      .map(monthFromWord)
      .filter(m => m !== null);
    if (ends.length === 1) months.add(ends[0]);
    if (ends.length >= 2) monthRange(ends[0], ends[ends.length - 1]).forEach(m => months.add(m));
  });
  return [...months].sort((a, b) => a - b);
}

// [3,4,5,6,7,8,9] → "Avr–Oct", [10,11,0,1] → "Nov–Fév", all 12 → allYearLabel
function formatBestMonths(value, monthNames, allYearLabel) {
  const months = parseBestMonths(value);
  if (months.length === 0) return '';
  if (months.length === 12) return allYearLabel;

  const set = new Set(months);
  // Start runs right after a gap so that Dec → Jan stays one run
  const start = months.find(m => !set.has((m + 11) % 12));
  const runs = [];
  let run = null;
  for (let i = 0; i < 12; i++) {
    const m = (start + i) % 12;
    if (set.has(m)) {
      if (run) run.to = m; else run = { from: m, to: m };
    } else if (run) {
      runs.push(run);
      run = null;
    }
  }
  if (run) runs.push(run);

  return runs
    .map(r => r.from === r.to ? monthNames[r.from] : `${monthNames[r.from]}–${monthNames[r.to]}`)
    .join(', ');
}

// ============================================
// FILTERING
// ============================================

// options: { statuses: Set, month: 0-11|null, monthMode: 'trips'|'best', year, query, bestMonthsText(d) }
function filterDestinations(destinations, options) {
  const { statuses, month = null, monthMode = 'trips', year, query = '', bestMonthsText } = options;
  let list = [...destinations];

  if (statuses && statuses.size < 3) {
    list = list.filter(d => statuses.has(d.status || 'idea'));
  }

  if (month !== null) {
    list = monthMode === 'best'
      ? list.filter(d => parseBestMonths(d.bestMonths).includes(month))
      : list.filter(d => (d.trips || []).some(trip => tripOverlapsMonth(trip, year, month)));
  }

  if (query) {
    const q = query.toLowerCase();
    list = list.filter(d => {
      const haystack = [
        d.name, d.country, d.notes, ...(d.tags || []), d.flightTime,
        bestMonthsText ? bestMonthsText(d) : ''
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }

  return list;
}

// ============================================
// NEXT TRIP & DATE SORT
// ============================================

// Ongoing trip first, otherwise the closest upcoming one
function getNextTrip(destinations, today) {
  let best = null;
  destinations.forEach(dest => (dest.trips || []).forEach(trip => {
    const end = tripEnd(trip);
    if (end < today) return;
    const ongoing = trip.start <= today;
    const candidate = {
      dest, trip, ongoing,
      daysUntil: ongoing ? 0 : getDaysBetween(today, trip.start) - 1,
      dayIndex: ongoing ? getDaysBetween(trip.start, today) : 0,
      totalDays: getDaysBetween(trip.start, end)
    };
    if (!best ||
        (candidate.ongoing && !best.ongoing) ||
        (candidate.ongoing === best.ongoing && trip.start < best.trip.start)) {
      best = candidate;
    }
  }));
  return best;
}

// Groups for the "by date" list: upcoming (soonest first), past (latest first), undated (by name)
function groupByDate(destinations, today, locale) {
  const upcoming = [];
  const past = [];
  const undated = [];

  destinations.forEach(dest => {
    const trips = dest.trips || [];
    if (trips.length === 0) return undated.push(dest);
    const next = trips.filter(t => tripEnd(t) >= today).sort((a, b) => a.start.localeCompare(b.start))[0];
    if (next) return upcoming.push({ dest, key: next.start });
    const last = [...trips].sort((a, b) => b.start.localeCompare(a.start))[0];
    past.push({ dest, key: last.start });
  });

  upcoming.sort((a, b) => a.key.localeCompare(b.key));
  past.sort((a, b) => b.key.localeCompare(a.key));
  undated.sort((a, b) => (a.name || '').localeCompare(b.name || '', locale));

  return {
    upcoming: upcoming.map(x => x.dest),
    past: past.map(x => x.dest),
    undated
  };
}

// ============================================
// STATISTICS
// ============================================

// A destination counts as visited if marked "Visité" or if one of its trips has started
function isVisited(dest, today) {
  return dest.status === 'done' || (dest.trips || []).some(t => t.start <= today);
}

// Days travelled per calendar year, only counting days up to today
function daysPerYear(destinations, today) {
  const result = {};
  destinations.forEach(dest => (dest.trips || []).forEach(trip => {
    if (trip.start > today) return;
    const end = tripEnd(trip) < today ? tripEnd(trip) : today;
    const startYear = parseDate(trip.start).getFullYear();
    const endYear = parseDate(end).getFullYear();
    for (let y = startYear; y <= endYear; y++) {
      const from = y === startYear ? trip.start : `${y}-01-01`;
      const to = y === endYear ? end : `${y}-12-31`;
      result[y] = (result[y] || 0) + getDaysBetween(from, to);
    }
  }));
  return result;
}

function computeStats(destinations, today) {
  const visited = destinations.filter(d => isVisited(d, today));
  const visitedCodes = new Set(visited.map(d => (d.countryCode || '').toLowerCase()).filter(Boolean));
  const wishCodes = new Set(
    destinations
      .filter(d => !isVisited(d, today))
      .map(d => (d.countryCode || '').toLowerCase())
      .filter(c => c && !visitedCodes.has(c))
  );
  const perYear = daysPerYear(destinations, today);
  const currentYear = parseDate(today).getFullYear();

  // Travel days still ahead this year (from tomorrow to Dec 31)
  const t = parseDate(today);
  const tomorrow = toDateStr(new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1));
  const yearEnd = `${currentYear}-12-31`;
  let plannedThisYear = 0;
  destinations.forEach(dest => (dest.trips || []).forEach(trip => {
    const from = trip.start > tomorrow ? trip.start : tomorrow;
    const to = tripEnd(trip) < yearEnd ? tripEnd(trip) : yearEnd;
    if (from <= to) plannedThisYear += getDaysBetween(from, to);
  }));

  return {
    total: destinations.length,
    visitedCount: visited.length,
    plannedCount: destinations.filter(d => d.status === 'planned').length,
    ideaCount: destinations.filter(d => (d.status || 'idea') === 'idea').length,
    visitedCountries: [...visitedCodes].sort(),
    wishCountries: [...wishCodes].sort(),
    worldPercent: Math.round(visitedCodes.size / WORLD_COUNTRIES * 1000) / 10,
    daysPerYear: perYear,
    daysThisYear: perYear[currentYear] || 0,
    plannedDaysThisYear: plannedThisYear,
    upcomingTrips: destinations.reduce((n, d) => n + (d.trips || []).filter(t => t.start > today).length, 0)
  };
}

if (typeof module !== 'undefined') {
  module.exports = {
    parseDate, toDateStr, todayStr, getDaysBetween, tripOverlapsMonth, monthsWithTrips,
    parseBestMonths, formatBestMonths, filterDestinations,
    getNextTrip, groupByDate, isVisited, daysPerYear, computeStats
  };
}
