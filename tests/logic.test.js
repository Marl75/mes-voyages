/* Tests for logic.js — run with `node tests/logic.test.js` or open tests/index.html */

const L = typeof require !== 'undefined' ? require('../logic.js') : window;

const results = [];
function test(name, fn) {
  try {
    fn();
    results.push({ name, ok: true });
  } catch (err) {
    results.push({ name, ok: false, error: err.message });
  }
}
function eq(actual, expected) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a !== e) throw new Error(`expected ${e}, got ${a}`);
}

const FR = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
const dest = (name, extra = {}) => ({ id: name, name, status: 'idea', trips: [], ...extra });

// ---------- Dates ----------

test('todayStr uses the local date', () => {
  eq(L.todayStr(new Date(2026, 8, 29, 0, 30)), '2026-09-29');
  eq(L.todayStr(new Date(2026, 0, 1, 23, 59)), '2026-01-01');
});

test('getDaysBetween counts first and last day', () => {
  eq(L.getDaysBetween('2024-09-10', '2024-09-17'), 8);
  eq(L.getDaysBetween('2026-05-01', '2026-05-01'), 1);
  eq(L.getDaysBetween('2026-12-30', '2027-01-02'), 4);
});

test('getDaysBetween is not shifted by daylight saving time', () => {
  eq(L.getDaysBetween('2026-03-28', '2026-03-30'), 3);
  eq(L.getDaysBetween('2026-10-24', '2026-10-26'), 3);
});

test('tripOverlapsMonth checks the year', () => {
  const trip = { start: '2025-03-10', end: '2025-03-15' };
  eq(L.tripOverlapsMonth(trip, 2025, 2), true);
  eq(L.tripOverlapsMonth(trip, 2026, 2), false);
  eq(L.tripOverlapsMonth(trip, 2025, 3), false);
});

test('tripOverlapsMonth handles trips across months and years', () => {
  const trip = { start: '2026-12-20', end: '2027-01-05' };
  eq(L.tripOverlapsMonth(trip, 2026, 11), true);
  eq(L.tripOverlapsMonth(trip, 2027, 0), true);
  eq(L.tripOverlapsMonth(trip, 2026, 0), false);
  eq(L.tripOverlapsMonth({ start: '2026-01-31' }, 2026, 0), true);
  eq(L.tripOverlapsMonth({ start: '2026-01-31' }, 2026, 1), false);
});

test('monthsWithTrips only returns months of the given year', () => {
  const dests = [dest('A', { trips: [{ start: '2026-12-20', end: '2027-01-05' }, { start: '2025-06-01', end: '2025-06-03' }] })];
  eq([...L.monthsWithTrips(dests, 2026)], [11]);
  eq([...L.monthsWithTrips(dests, 2027)], [0]);
});

// ---------- Best months ----------

test('parseBestMonths reads the old French text', () => {
  eq(L.parseBestMonths('avr–oct'), [3, 4, 5, 6, 7, 8, 9]);
  eq(L.parseBestMonths('mar–mai, oct–nov'), [2, 3, 4, 9, 10]);
  eq(L.parseBestMonths('juin–août'), [5, 6, 7]);
  eq(L.parseBestMonths('mai–sept'), [4, 5, 6, 7, 8]);
  eq(L.parseBestMonths('Juillet'), [6]);
  eq(L.parseBestMonths('avril à juin'), [3, 4, 5]);
});

test('parseBestMonths reads English and ranges over new year', () => {
  eq(L.parseBestMonths('Apr–Oct'), [3, 4, 5, 6, 7, 8, 9]);
  eq(L.parseBestMonths('Nov to Feb'), [0, 1, 10, 11]);
  eq(L.parseBestMonths('déc-fév'), [0, 1, 11]);
});

test('parseBestMonths keeps arrays and ignores junk', () => {
  eq(L.parseBestMonths([5, 3, 3, 12, -1]), [3, 5]);
  eq(L.parseBestMonths(''), []);
  eq(L.parseBestMonths(undefined), []);
  eq(L.parseBestMonths('toute saison'), []);
});

test('formatBestMonths builds compact ranges', () => {
  eq(L.formatBestMonths([3, 4, 5, 6, 7, 8, 9], FR, 'Toute l’année'), 'Avr–Oct');
  eq(L.formatBestMonths([2, 3, 4, 9, 10], FR, 'x'), 'Mar–Mai, Oct–Nov');
  eq(L.formatBestMonths([10, 11, 0, 1], FR, 'x'), 'Nov–Fév');
  eq(L.formatBestMonths([4], FR, 'x'), 'Mai');
  eq(L.formatBestMonths([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], FR, 'Toute l’année'), 'Toute l’année');
  eq(L.formatBestMonths([], FR, 'x'), '');
  eq(L.formatBestMonths('avr–oct', FR, 'x'), 'Avr–Oct');
});

// ---------- Filtering ----------

const ALL = new Set(['done', 'planned', 'idea']);
const sample = [
  dest('Lisbonne', { status: 'idea', country: 'Portugal', bestMonths: [3, 4, 5, 6, 7, 8, 9], tags: ['ville'] }),
  dest('Kyoto', { status: 'done', country: 'Japon', bestMonths: 'mar–mai, oct–nov', trips: [{ start: '2025-03-25', end: '2025-04-05' }] }),
  dest('Marrakech', { status: 'planned', country: 'Maroc', trips: [{ start: '2026-03-15', end: '2026-03-22' }] }),
  dest('Reykjavik', { status: 'planned', trips: [{ start: '2026-12-20', end: '2027-01-02' }] })
];
const names = list => list.map(d => d.name);

test('filter by status', () => {
  eq(names(L.filterDestinations(sample, { statuses: new Set(['planned']) })), ['Marrakech', 'Reykjavik']);
  eq(names(L.filterDestinations(sample, { statuses: ALL })).length, 4);
});

test('month filter on trips only keeps the selected year', () => {
  eq(names(L.filterDestinations(sample, { statuses: ALL, month: 2, monthMode: 'trips', year: 2026 })), ['Marrakech']);
  eq(names(L.filterDestinations(sample, { statuses: ALL, month: 2, monthMode: 'trips', year: 2025 })), ['Kyoto']);
  eq(names(L.filterDestinations(sample, { statuses: ALL, month: 0, monthMode: 'trips', year: 2027 })), ['Reykjavik']);
});

test('month filter on best months ("where to go in March")', () => {
  eq(names(L.filterDestinations(sample, { statuses: ALL, month: 2, monthMode: 'best' })), ['Kyoto']);
  eq(names(L.filterDestinations(sample, { statuses: ALL, month: 4, monthMode: 'best' })), ['Lisbonne', 'Kyoto']);
  eq(names(L.filterDestinations(sample, { statuses: new Set(['idea']), month: 4, monthMode: 'best' })), ['Lisbonne']);
});

test('search looks in name, country, tags and best months', () => {
  eq(names(L.filterDestinations(sample, { statuses: ALL, query: 'maroc' })), ['Marrakech']);
  eq(names(L.filterDestinations(sample, { statuses: ALL, query: 'VILLE' })), ['Lisbonne']);
  const text = d => L.formatBestMonths(d.bestMonths, FR, '');
  eq(names(L.filterDestinations(sample, { statuses: ALL, query: 'avr–oct', bestMonthsText: text })), ['Lisbonne']);
});

// ---------- Next trip & date grouping ----------

test('getNextTrip returns the closest upcoming trip', () => {
  const next = L.getNextTrip(sample, '2026-03-01');
  eq(next.dest.name, 'Marrakech');
  eq(next.ongoing, false);
  eq(next.daysUntil, 14);
  eq(next.totalDays, 8);
});

test('getNextTrip prefers an ongoing trip', () => {
  const next = L.getNextTrip(sample, '2026-03-17');
  eq(next.dest.name, 'Marrakech');
  eq(next.ongoing, true);
  eq(next.dayIndex, 3);
});

test('getNextTrip: departure tomorrow, last day, nothing left', () => {
  eq(L.getNextTrip(sample, '2026-03-14').daysUntil, 1);
  eq(L.getNextTrip(sample, '2026-03-22').ongoing, true);
  eq(L.getNextTrip(sample, '2026-03-23').dest.name, 'Reykjavik');
  eq(L.getNextTrip(sample, '2027-02-01'), null);
});

test('groupByDate splits upcoming, past and undated', () => {
  const g = L.groupByDate(sample, '2026-09-29', 'fr');
  eq(names(g.upcoming), ['Reykjavik']);
  eq(names(g.past), ['Marrakech', 'Kyoto']);
  eq(names(g.undated), ['Lisbonne']);
});

// ---------- Stats ----------

test('stats count visited countries and days per year', () => {
  const dests = [
    dest('Kyoto', { status: 'done', countryCode: 'jp', trips: [{ start: '2025-03-25', end: '2025-04-05' }] }),
    dest('Tokyo', { status: 'done', countryCode: 'JP', trips: [{ start: '2025-04-06', end: '2025-04-12' }] }),
    dest('Marrakech', { status: 'planned', countryCode: 'ma', trips: [{ start: '2026-03-15', end: '2026-03-22' }] }),
    dest('Reykjavik', { status: 'planned', countryCode: 'is', trips: [{ start: '2026-12-30', end: '2027-01-02' }] }),
    dest('Lisbonne', { status: 'idea', countryCode: 'pt' })
  ];
  const s = L.computeStats(dests, '2026-09-29');
  eq(s.visitedCountries, ['jp', 'ma']);
  eq(s.wishCountries, ['is', 'pt']);
  eq(s.worldPercent, 1);
  eq(s.daysPerYear, { 2025: 19, 2026: 8 });
  eq(s.daysThisYear, 8);
  eq(s.plannedDaysThisYear, 2);
  eq(s.upcomingTrips, 1);
  eq([s.total, s.visitedCount, s.plannedCount, s.ideaCount], [5, 3, 2, 1]);
});

test('days per year stop at today for an ongoing trip', () => {
  const s = L.computeStats([dest('A', { trips: [{ start: '2026-09-25', end: '2026-10-05' }] })], '2026-09-29');
  eq(s.daysThisYear, 5);
  eq(s.plannedDaysThisYear, 6);
});

// ---------- Report ----------

const failed = results.filter(r => !r.ok);
if (typeof module !== 'undefined' && require.main === module) {
  results.forEach(r => console.log(`${r.ok ? '✓' : '✗'} ${r.name}${r.ok ? '' : '\n    ' + r.error}`));
  console.log(`\n${results.length - failed.length}/${results.length} tests passed`);
  process.exit(failed.length ? 1 : 0);
} else if (typeof window !== 'undefined') {
  window.testResults = results;
}
