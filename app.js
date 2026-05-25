/* ============================================
   MES VOYAGES - Application
   Light Warm "Mini Vignettes" Theme
   ============================================ */

// ============================================
// CONFIGURATION
// ============================================

const FIREBASE_CONFIG = {
  // REPLACE with your Firebase config from console.firebase.google.com
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org';

const MONTH_NAMES = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
const MONTH_FULL = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const DEMO_DESTINATIONS = [
  {
    id: 'demo-1', name: 'Santorini', country: 'Grèce', countryCode: 'gr',
    lat: 36.3932, lng: 25.4615, status: 'done',
    notes: "Villages blancs perchés sur la caldeira, couchers de soleil à Oia, plages volcaniques noires.",
    tags: ['plage', 'romantique', 'photogénique'],
    flightTime: '3h30', bestMonths: 'mai–oct',
    photoUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
    trips: [{ start: '2024-09-10', end: '2024-09-17' }]
  },
  {
    id: 'demo-2', name: 'Kyoto', country: 'Japon', countryCode: 'jp',
    lat: 35.0116, lng: 135.7681, status: 'done',
    notes: "Temples dorés, bambouseraie d'Arashiyama, quartier des geishas à Gion.",
    tags: ['culture', 'temples', 'gastronomie'],
    flightTime: '12h', bestMonths: 'mar–mai, oct–nov',
    photoUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    trips: [{ start: '2025-03-25', end: '2025-04-05' }]
  },
  {
    id: 'demo-3', name: 'Marrakech', country: 'Maroc', countryCode: 'ma',
    lat: 31.6295, lng: -7.9811, status: 'planned',
    notes: "Médina, Jardin Majorelle, souks colorés, riads traditionnels.",
    tags: ['culture', 'gastronomie', 'artisanat'],
    flightTime: '3h15', bestMonths: 'mar–mai, sept–nov',
    photoUrl: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b',
    trips: [{ start: '2026-10-15', end: '2026-10-22' }]
  },
  {
    id: 'demo-4', name: 'Lisbonne', country: 'Portugal', countryCode: 'pt',
    lat: 38.7223, lng: -9.1393, status: 'idea',
    notes: "Tramway 28, pastéis de nata, quartier de l'Alfama, azulejos.",
    tags: ['ville', 'gastronomie', 'abordable'],
    flightTime: '2h30', bestMonths: 'avr–oct',
    photoUrl: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a',
    trips: []
  },
  {
    id: 'demo-5', name: 'Cinque Terre', country: 'Italie', countryCode: 'it',
    lat: 44.1461, lng: 9.6439, status: 'planned',
    notes: "Randonnée entre les cinq villages colorés, pesto frais, baignade.",
    tags: ['randonnée', 'plage', 'photogénique'],
    flightTime: '2h', bestMonths: 'mai–sept',
    photoUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
    trips: [{ start: '2026-06-01', end: '2026-06-07' }]
  },
  {
    id: 'demo-6', name: 'Tokyo', country: 'Japon', countryCode: 'jp',
    lat: 35.6762, lng: 139.6503, status: 'done',
    notes: "Shibuya, Akihabara, Tsukiji, Shinjuku. Contraste tradition/modernité.",
    tags: ['ville', 'gastronomie', 'culture'],
    flightTime: '12h', bestMonths: 'mar–mai, oct–nov',
    photoUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    trips: [{ start: '2025-04-06', end: '2025-04-12' }]
  },
  {
    id: 'demo-7', name: 'Amalfi', country: 'Italie', countryCode: 'it',
    lat: 40.6333, lng: 14.6029, status: 'idea',
    notes: "Positano, Ravello, limoncello, routes vertigineuses.",
    tags: ['plage', 'romantique', 'gastronomie'],
    flightTime: '2h15', bestMonths: 'mai–sept',
    photoUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882',
    trips: []
  },
  {
    id: 'demo-8', name: 'Reykjavik', country: 'Islande', countryCode: 'is',
    lat: 64.1466, lng: -21.9426, status: 'planned',
    notes: "Aurores boréales, Blue Lagoon, cercle d'or, cascades spectaculaires.",
    tags: ['nature', 'aventure', 'unique'],
    flightTime: '3h45', bestMonths: 'juin–août',
    photoUrl: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927',
    trips: [{ start: '2026-12-20', end: '2026-12-30' }]
  }
];

// ============================================
// STATE
// ============================================

const state = {
  user: null,
  destinations: [],
  currentView: 'list',
  currentFilter: 'all',
  currentMonth: null,
  searchQuery: '',
  planningYear: new Date().getFullYear(),
  editingId: null,
  selectedStatus: 'planned',
  detailId: null,
  firebaseReady: false,
  // Temp data for modal editing
  _editLat: null,
  _editLng: null,
  _editCountryCode: null,
  _editPhotoUrl: null
};

let mainMap = null;
let markersLayer = null;
let geocodeTimer = null;
let confirmCallback = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  checkAutoLogin();
  renderMonthBar();

  // Enter key on password field triggers login
  document.getElementById('auth-password').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loginUser();
  });
});

// ESC key to close modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!document.getElementById('confirm-overlay').classList.contains('hidden')) {
      confirmCancel();
    } else if (!document.getElementById('detail-overlay').classList.contains('hidden')) {
      closeDetail();
    } else if (!document.getElementById('modal-overlay').classList.contains('hidden')) {
      closeModal();
    }
  }
});

// Close user menu on outside click
document.addEventListener('click', (e) => {
  const menu = document.getElementById('user-menu');
  const btn = document.getElementById('user-avatar-btn');
  if (menu && !menu.classList.contains('hidden') && !menu.contains(e.target) && e.target !== btn) {
    menu.classList.add('hidden');
  }
});

function initFirebase() {
  if (FIREBASE_CONFIG.apiKey) {
    try {
      firebase.initializeApp(FIREBASE_CONFIG);
      state.firebaseReady = true;
    } catch (e) {
      console.warn('Firebase init failed, using local storage', e);
    }
  }
}

function checkAutoLogin() {
  if (state.firebaseReady) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        enterApp({
          uid: user.uid,
          email: user.email,
          name: user.displayName || user.email.split('@')[0]
        });
      }
    });
  } else {
    const saved = localStorage.getItem('mv-user');
    if (saved) {
      enterApp(JSON.parse(saved));
    }
  }
}

// ============================================
// AUTH
// ============================================

async function loginUser() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if (!email || !password) return showToast('Veuillez remplir tous les champs');

  if (state.firebaseReady) {
    try {
      const cred = await firebase.auth().signInWithEmailAndPassword(email, password);
      enterApp({
        uid: cred.user.uid,
        email: cred.user.email,
        name: cred.user.displayName || email.split('@')[0]
      });
    } catch (err) {
      showToast(getFirebaseError(err.code));
    }
  } else {
    enterApp({ uid: 'local-' + Date.now(), email, name: email.split('@')[0] });
  }
}

async function registerUser() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if (!email || !password) return showToast('Veuillez remplir tous les champs');

  if (state.firebaseReady) {
    try {
      const cred = await firebase.auth().createUserWithEmailAndPassword(email, password);
      enterApp({
        uid: cred.user.uid,
        email: cred.user.email,
        name: email.split('@')[0]
      });
    } catch (err) {
      showToast(getFirebaseError(err.code));
    }
  } else {
    enterApp({ uid: 'local-' + Date.now(), email, name: email.split('@')[0] });
  }
}

async function loginGoogle() {
  if (state.firebaseReady) {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const cred = await firebase.auth().signInWithPopup(provider);
      enterApp({
        uid: cred.user.uid,
        email: cred.user.email,
        name: cred.user.displayName || cred.user.email.split('@')[0]
      });
    } catch (err) {
      showToast(getFirebaseError(err.code));
    }
  } else {
    enterApp({ uid: 'local-google-' + Date.now(), email: 'demo@mesvoyages.app', name: 'Voyageur' });
  }
}

function loginDemo() {
  enterApp({ uid: 'demo', email: 'demo@mesvoyages.app', name: 'Voyageur' }, true);
}

function enterApp(user, loadDemo = false) {
  state.user = user;
  localStorage.setItem('mv-user', JSON.stringify(user));

  // Update UI
  const initial = (user.name || user.email || 'U')[0].toUpperCase();
  document.getElementById('user-avatar-btn').textContent = initial;
  document.getElementById('user-menu-email').textContent = user.email;

  // Show app
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  // Load data
  loadDestinations(loadDemo);

  // Init map lazily
  setTimeout(() => initMap(), 300);
}

function logout() {
  if (state.firebaseReady) firebase.auth().signOut();
  state.user = null;
  state.destinations = [];
  localStorage.removeItem('mv-user');
  document.getElementById('app').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('user-menu').classList.add('hidden');
}

function toggleUserMenu() {
  const menu = document.getElementById('user-menu');
  menu.classList.toggle('hidden');
}

function getFirebaseError(code) {
  const errors = {
    'auth/user-not-found': 'Aucun compte avec cet email',
    'auth/wrong-password': 'Mot de passe incorrect',
    'auth/email-already-in-use': 'Cet email est déjà utilisé',
    'auth/weak-password': 'Mot de passe : 6 caractères minimum',
    'auth/invalid-email': 'Email invalide',
    'auth/popup-closed-by-user': 'Connexion annulée'
  };
  return errors[code] || 'Erreur de connexion';
}

// ============================================
// DATA LAYER
// ============================================

function loadDestinations(loadDemo = false) {
  if (state.firebaseReady && state.user && state.user.uid !== 'demo') {
    const db = firebase.firestore();
    db.collection('users').doc(state.user.uid).collection('destinations')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        state.destinations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (state.destinations.length === 0 && loadDemo) {
          injectDemoData();
        } else {
          renderAll();
        }
      });
  } else {
    const saved = localStorage.getItem('mv-destinations');
    state.destinations = saved ? JSON.parse(saved) : [];
    if (state.destinations.length === 0 || loadDemo) {
      injectDemoData();
    } else {
      renderAll();
    }
  }
}

function injectDemoData() {
  DEMO_DESTINATIONS.forEach(demo => {
    const exists = state.destinations.some(d => d.id === demo.id || d.name === demo.name);
    if (!exists) state.destinations.push({ ...demo });
  });
  saveToStorage();
  renderAll();
}

function saveDest(dest) {
  if (state.firebaseReady && state.user && state.user.uid !== 'demo') {
    const db = firebase.firestore();
    const col = db.collection('users').doc(state.user.uid).collection('destinations');
    if (dest.id && !dest.id.startsWith('demo-') && !dest.id.startsWith('local-')) {
      return col.doc(dest.id).update({ ...dest, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
    } else {
      const { id, ...data } = dest;
      return col.add({ ...data, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    }
  } else {
    if (!dest.id) dest.id = 'local-' + Date.now();
    const idx = state.destinations.findIndex(d => d.id === dest.id);
    if (idx >= 0) {
      state.destinations[idx] = dest;
    } else {
      state.destinations.unshift(dest);
    }
    saveToStorage();
    renderAll();
    return Promise.resolve();
  }
}

function deleteDest(id) {
  if (state.firebaseReady && state.user && state.user.uid !== 'demo') {
    return firebase.firestore()
      .collection('users').doc(state.user.uid)
      .collection('destinations').doc(id).delete();
  } else {
    state.destinations = state.destinations.filter(d => d.id !== id);
    saveToStorage();
    renderAll();
    return Promise.resolve();
  }
}

function saveToStorage() {
  localStorage.setItem('mv-destinations', JSON.stringify(state.destinations));
}

// ============================================
// VIEW SWITCHING
// ============================================

function switchView(view) {
  state.currentView = view;

  // Update bottom nav
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.view === view);
  });

  // Show/hide views
  document.querySelectorAll('.view').forEach(v => {
    v.classList.toggle('hidden', v.id !== `view-${view}`);
  });

  if (view === 'map') {
    if (mainMap) {
      setTimeout(() => {
        mainMap.invalidateSize();
        fitMapToMarkers();
      }, 150);
    } else {
      setTimeout(() => initMap(), 100);
    }
  }
  if (view === 'list') renderList();
  if (view === 'planning') renderPlanning();
}

// ============================================
// FILTERING & SEARCH
// ============================================

function setFilter(filter) {
  state.currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderList();
}

function onSearch() {
  state.searchQuery = document.getElementById('search-input').value.toLowerCase().trim();
  renderList();
}

function setMonthFilter(month) {
  state.currentMonth = (state.currentMonth === month) ? null : month;
  document.querySelectorAll('.month-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.month) === state.currentMonth);
  });
  renderList();
}

function getFilteredDestinations() {
  let list = [...state.destinations];

  // Status filter
  if (state.currentFilter !== 'all') {
    list = list.filter(d => d.status === state.currentFilter);
  }

  // Month filter
  if (state.currentMonth !== null) {
    list = list.filter(d => {
      if (!d.trips || d.trips.length === 0) return false;
      return d.trips.some(t => {
        const s = new Date(t.start + 'T00:00:00');
        const e = t.end ? new Date(t.end + 'T00:00:00') : s;
        // Check all months the trip spans
        const cur = new Date(s);
        while (cur <= e) {
          if (cur.getMonth() === state.currentMonth) return true;
          cur.setMonth(cur.getMonth() + 1, 1);
        }
        return false;
      });
    });
  }

  // Search
  if (state.searchQuery) {
    list = list.filter(d => {
      const haystack = [d.name, d.country, d.notes, ...(d.tags || []), d.flightTime, d.bestMonths].join(' ').toLowerCase();
      return haystack.includes(state.searchQuery);
    });
  }

  return list;
}

// ============================================
// MONTH BAR
// ============================================

function renderMonthBar() {
  const bar = document.getElementById('month-bar');
  const now = new Date();
  bar.innerHTML = MONTH_NAMES.map((name, i) => {
    const isCurrent = i === now.getMonth();
    return `<button class="month-btn${isCurrent ? ' current' : ''}" data-month="${i}" onclick="setMonthFilter(${i})">${name}</button>`;
  }).join('');
}

function updateMonthBarTrips() {
  document.querySelectorAll('.month-btn').forEach(btn => {
    const m = parseInt(btn.dataset.month);
    const hasTrip = state.destinations.some(d =>
      (d.trips || []).some(t => {
        const s = new Date(t.start + 'T00:00:00');
        const e = t.end ? new Date(t.end + 'T00:00:00') : s;
        const cur = new Date(s);
        while (cur <= e) {
          if (cur.getMonth() === m) return true;
          cur.setMonth(cur.getMonth() + 1, 1);
        }
        return false;
      })
    );
    btn.classList.toggle('has-trip', hasTrip);
  });
}

// ============================================
// LIST RENDERING
// ============================================

function renderList() {
  const container = document.getElementById('list-content');
  const filtered = getFilteredDestinations();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="list-empty">
        <div class="list-empty-icon">🌍</div>
        <p>${state.destinations.length === 0 ? 'Aucune destination.<br>Ajoutez votre première !' : 'Aucun résultat.'}</p>
      </div>
    `;
    return;
  }

  // Group by country
  const countries = {};
  filtered.forEach(d => {
    const c = d.country || 'Autres';
    if (!countries[c]) countries[c] = { code: d.countryCode, dests: [] };
    countries[c].dests.push(d);
  });

  const sorted = Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0]));

  // Stats
  const doneCt = filtered.filter(d => d.status === 'done').length;
  const plannedCt = filtered.filter(d => d.status === 'planned').length;
  const countryCt = sorted.length;

  let html = `
    <div class="list-stats">
      <span><strong>${filtered.length}</strong> destination${filtered.length > 1 ? 's' : ''}</span>
      <span><strong>${countryCt}</strong> pays</span>
      <span><strong>${doneCt}</strong> visité${doneCt > 1 ? 's' : ''}</span>
      <span><strong>${plannedCt}</strong> planifié${plannedCt > 1 ? 's' : ''}</span>
    </div>
  `;

  sorted.forEach(([country, data]) => {
    html += `<div class="country-sep">${getFlag(data.code)} ${escapeHtml(country)}</div>`;
    data.dests.forEach(d => { html += renderDestRow(d); });
  });

  container.innerHTML = html;
}

function renderDestRow(d) {
  const status = d.status || 'idea';

  // Photo
  const photoStyle = d.photoUrl
    ? `background-image: url('${unsplashUrl(d.photoUrl, 'thumb')}')`
    : '';

  // Subtitle: tags + flight + best months
  const parts = [];
  if (d.tags && d.tags.length > 0) parts.push(d.tags.join(' · '));
  if (d.flightTime) parts.push('✈ ' + d.flightTime);
  if (d.bestMonths) parts.push('☀ ' + d.bestMonths);
  const sub = parts.join('  ·  ');

  // Date info
  let dateHtml = '';
  const today = todayStr();
  if (d.trips && d.trips.length > 0) {
    const futureTrips = d.trips.filter(t => t.start >= today).sort((a, b) => a.start.localeCompare(b.start));
    const pastTrips = d.trips.filter(t => t.start < today).sort((a, b) => b.start.localeCompare(a.start));
    const trip = futureTrips[0] || pastTrips[0];
    if (trip) {
      const dateClass = status === 'done' ? 'done' : (trip.start >= today ? 'planned' : 'done');
      const dateText = formatDateShort(trip.start) + (trip.end && trip.end !== trip.start ? ' → ' + formatDateShort(trip.end) : '');
      const days = getDaysBetween(trip.start, trip.end || trip.start);
      dateHtml = `
        <div class="dest-date ${dateClass}">${dateText}</div>
        <div class="dest-meta">${days}j</div>
      `;
    }
  } else {
    const labels = { done: 'Visité', planned: 'Planifié', idea: 'Idée' };
    dateHtml = `<div class="dest-date none">${labels[status] || 'Idée'}</div>`;
  }

  return `
    <div class="dest-row ${status}" onclick="showDetail('${d.id}')">
      <div class="dest-photo" ${photoStyle ? `style="${photoStyle}"` : ''}></div>
      <div class="dest-info">
        <div class="dest-name">${escapeHtml(d.name)}</div>
        ${sub ? `<div class="dest-sub">${escapeHtml(sub)}</div>` : ''}
      </div>
      <div class="dest-right">${dateHtml}</div>
    </div>
  `;
}

// ============================================
// MAP
// ============================================

function initMap() {
  if (mainMap) return;
  const el = document.getElementById('map');
  if (!el) return;

  mainMap = L.map('map', { zoomControl: true, attributionControl: false }).setView([35, 15], 3);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19, subdomains: 'abcd'
  }).addTo(mainMap);

  markersLayer = L.layerGroup().addTo(mainMap);
  renderMapMarkers();
}

function renderMapMarkers() {
  if (!mainMap || !markersLayer) return;
  markersLayer.clearLayers();

  state.destinations.forEach(dest => {
    if (!dest.lat || !dest.lng) return;

    const status = dest.status || 'idea';
    const initial = dest.name[0].toUpperCase();

    const icon = L.divIcon({
      className: '',
      html: `<div class="map-marker ${status}"><span>${initial}</span></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    const marker = L.marker([dest.lat, dest.lng], { icon }).addTo(markersLayer);

    let datesHtml = '';
    if (dest.trips && dest.trips.length > 0) {
      datesHtml = dest.trips.map(t =>
        `<div class="popup-date">${formatDateShort(t.start)}${t.end ? ' → ' + formatDateShort(t.end) : ''}</div>`
      ).join('');
    }

    marker.bindPopup(`
      <div class="map-popup">
        <div class="popup-name">${escapeHtml(dest.name)}</div>
        <div class="popup-country">${getFlag(dest.countryCode)} ${escapeHtml(dest.country || '')}</div>
        ${datesHtml}
      </div>
    `, { closeButton: false, maxWidth: 250 });

    marker.on('click', () => showDetail(dest.id));
  });
}

function fitMapToMarkers() {
  if (!mainMap || !markersLayer) return;
  const bounds = markersLayer.getBounds();
  if (bounds.isValid()) {
    mainMap.fitBounds(bounds, { padding: [40, 40], maxZoom: 8 });
  }
}

// ============================================
// PLANNING
// ============================================

function changePlanningYear(delta) {
  state.planningYear += delta;
  renderPlanning();
}

function renderPlanning() {
  document.getElementById('planning-year').textContent = state.planningYear;
  const grid = document.getElementById('planning-grid');
  const legend = document.getElementById('planning-legend');

  const year = state.planningYear;
  const now = new Date();
  const currentMonth = now.getFullYear() === year ? now.getMonth() : -1;
  const currentDay = now.getDate();

  // Collect trips overlapping this year
  const tripsInYear = [];
  const destUsed = new Set();

  state.destinations.forEach(dest => {
    (dest.trips || []).forEach(trip => {
      const start = new Date(trip.start + 'T00:00:00');
      const end = trip.end ? new Date(trip.end + 'T00:00:00') : start;
      if (start.getFullYear() <= year && end.getFullYear() >= year) {
        tripsInYear.push({ dest, trip, start, end });
        destUsed.add(dest.id);
      }
    });
  });

  // Render 12 month rows
  let gridHtml = '';
  for (let m = 0; m < 12; m++) {
    const daysInMonth = new Date(year, m + 1, 0).getDate();
    const isCurrent = m === currentMonth;
    const monthStart = new Date(year, m, 1);
    const monthEnd = new Date(year, m, daysInMonth, 23, 59, 59);

    // Trips overlapping this month
    const monthTrips = tripsInYear.filter(t => t.start <= monthEnd && t.end >= monthStart);

    let blocksHtml = '';
    monthTrips.forEach(t => {
      const blockStart = t.start < monthStart ? 1 : t.start.getDate();
      const blockEnd = t.end > monthEnd ? daysInMonth : t.end.getDate();
      const left = ((blockStart - 1) / daysInMonth * 100).toFixed(1);
      const width = Math.max(((blockEnd - blockStart + 1) / daysInMonth * 100), 3).toFixed(1);
      const status = t.dest.status || 'idea';

      blocksHtml += `
        <div class="planning-trip-block ${status}"
             style="left:${left}%; width:${width}%"
             onclick="showDetail('${t.dest.id}')"
             title="${escapeHtml(t.dest.name)}: ${formatDateShort(t.trip.start)} → ${formatDateShort(t.trip.end || t.trip.start)}">
          ${escapeHtml(t.dest.name)}
        </div>
      `;
    });

    // Current date line
    let currentLine = '';
    if (isCurrent) {
      const linePos = ((currentDay - 0.5) / daysInMonth * 100).toFixed(1);
      currentLine = `<div class="planning-current-line" style="left:${linePos}%"></div>`;
    }

    gridHtml += `
      <div class="planning-month-row">
        <div class="planning-month-label${isCurrent ? ' current' : ''}">${MONTH_NAMES[m]}</div>
        <div class="planning-days-bar">
          ${currentLine}
          ${blocksHtml}
        </div>
      </div>
    `;
  }
  grid.innerHTML = gridHtml;

  // Legend
  const legendIds = [...destUsed];
  legend.innerHTML = legendIds.map(id => {
    const dest = state.destinations.find(d => d.id === id);
    if (!dest) return '';
    const status = dest.status || 'idea';
    return `
      <div class="planning-legend-item">
        <div class="planning-legend-dot ${status}"></div>
        <span>${escapeHtml(dest.name)}</span>
      </div>
    `;
  }).join('');
}

// ============================================
// ADD / EDIT MODAL
// ============================================

function openAddModal() {
  state.editingId = null;
  state.selectedStatus = 'planned';
  state._editLat = null;
  state._editLng = null;
  state._editCountryCode = null;
  state._editPhotoUrl = null;

  document.getElementById('modal-title').textContent = 'Nouvelle destination';
  document.getElementById('dest-name').value = '';
  document.getElementById('dest-country').value = '';
  document.getElementById('dest-notes').value = '';
  document.getElementById('dest-tags').value = '';
  document.getElementById('dest-flight').value = '';
  document.getElementById('dest-best-months').value = '';
  document.getElementById('date-rows').innerHTML = '';
  document.getElementById('geocode-suggestions').classList.add('hidden');
  document.getElementById('modal-delete-btn').classList.add('hidden');

  // Reset status buttons
  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === 'planned');
  });

  document.getElementById('modal-overlay').classList.remove('hidden');
  setTimeout(() => document.getElementById('dest-name').focus(), 300);
}

function openEditModal(dest) {
  state.editingId = dest.id;
  state.selectedStatus = dest.status || 'planned';
  state._editLat = dest.lat;
  state._editLng = dest.lng;
  state._editCountryCode = dest.countryCode;
  state._editPhotoUrl = dest.photoUrl;

  document.getElementById('modal-title').textContent = 'Modifier';
  document.getElementById('dest-name').value = dest.name || '';
  document.getElementById('dest-country').value = dest.country || '';
  document.getElementById('dest-notes').value = dest.notes || '';
  document.getElementById('dest-tags').value = (dest.tags || []).join(', ');
  document.getElementById('dest-flight').value = dest.flightTime || '';
  document.getElementById('dest-best-months').value = dest.bestMonths || '';
  document.getElementById('geocode-suggestions').classList.add('hidden');
  document.getElementById('modal-delete-btn').classList.remove('hidden');

  // Status buttons
  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === state.selectedStatus);
  });

  // Date rows
  const container = document.getElementById('date-rows');
  container.innerHTML = '';
  (dest.trips || []).forEach(t => addDateRow(t.start, t.end));

  document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  state.editingId = null;
  state._editLat = null;
  state._editLng = null;
  state._editCountryCode = null;
  state._editPhotoUrl = null;
}

function setStatus(status) {
  state.selectedStatus = status;
  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === status);
  });
}

function addDateRow(startVal, endVal) {
  const container = document.getElementById('date-rows');
  const row = document.createElement('div');
  row.className = 'date-row';
  row.innerHTML = `
    <input type="date" class="date-start" value="${startVal || ''}">
    <span style="color:var(--text-muted);font-size:0.7rem;">→</span>
    <input type="date" class="date-end" value="${endVal || ''}">
    <button type="button" class="date-row-remove" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(row);
}

async function saveDestination() {
  const name = document.getElementById('dest-name').value.trim();
  if (!name) return showToast('Entrez un nom de destination');

  let lat = state._editLat || 0;
  let lng = state._editLng || 0;
  let country = document.getElementById('dest-country').value.trim();
  let countryCode = state._editCountryCode || '';
  let photoUrl = state._editPhotoUrl || '';

  // Auto-geocode if no coordinates
  if (!lat || !lng) {
    const geo = await geocode(name);
    if (geo) {
      lat = geo.lat;
      lng = geo.lng;
      country = country || geo.country;
      countryCode = countryCode || geo.countryCode;
    }
  }

  // Collect trips
  const trips = [];
  document.querySelectorAll('#date-rows .date-row').forEach(row => {
    const start = row.querySelector('.date-start').value;
    const end = row.querySelector('.date-end').value;
    if (start) trips.push({ start, end: end || start });
  });

  // Collect tags
  const tags = document.getElementById('dest-tags').value
    .split(',').map(t => t.trim().toLowerCase()).filter(Boolean);

  const dest = {
    id: state.editingId || null,
    name,
    country,
    countryCode,
    lat, lng,
    status: state.selectedStatus,
    notes: document.getElementById('dest-notes').value.trim(),
    tags,
    flightTime: document.getElementById('dest-flight').value.trim(),
    bestMonths: document.getElementById('dest-best-months').value.trim(),
    photoUrl,
    trips
  };

  await saveDest(dest);
  closeModal();
  showToast(state.editingId ? 'Destination modifiée' : 'Destination ajoutée !');
}

function deleteDestination() {
  if (!state.editingId) return;
  const dest = state.destinations.find(d => d.id === state.editingId);
  const name = dest ? dest.name : 'cette destination';

  showConfirm(`Supprimer « ${name} » ?`, async () => {
    await deleteDest(state.editingId);
    closeModal();
    closeDetail();
    showToast('Destination supprimée');
  });
}

// ============================================
// GEOCODING
// ============================================

function onDestNameInput() {
  clearTimeout(geocodeTimer);
  const q = document.getElementById('dest-name').value.trim();
  if (q.length < 3) {
    document.getElementById('geocode-suggestions').classList.add('hidden');
    return;
  }
  geocodeTimer = setTimeout(() => searchGeocode(q), 400);
}

async function searchGeocode(query) {
  const el = document.getElementById('geocode-suggestions');
  try {
    const res = await fetch(`${NOMINATIM_URL}/search?format=json&q=${encodeURIComponent(query)}&limit=5&accept-language=fr`);
    const results = await res.json();

    if (results.length === 0) { el.classList.add('hidden'); return; }

    el._results = results;
    el.innerHTML = results.map((r, i) => {
      const short = r.display_name.split(',').slice(0, 3).join(', ');
      return `<div class="suggestion-item" onclick="selectGeoSuggestion(${i})">${escapeHtml(short)}</div>`;
    }).join('');
    el.classList.remove('hidden');
  } catch (err) {
    console.warn('Geocode error:', err);
  }
}

function selectGeoSuggestion(idx) {
  const el = document.getElementById('geocode-suggestions');
  const results = el._results;
  if (!results || !results[idx]) return;

  const r = results[idx];
  const parts = r.display_name.split(',').map(p => p.trim());

  document.getElementById('dest-name').value = parts[0] || r.display_name;
  document.getElementById('dest-country').value = parts[parts.length - 1] || '';
  state._editLat = parseFloat(r.lat);
  state._editLng = parseFloat(r.lon);

  fetchCountryCode(r.lat, r.lon);
  el.classList.add('hidden');
}

async function geocode(query) {
  try {
    const res = await fetch(`${NOMINATIM_URL}/search?format=json&q=${encodeURIComponent(query)}&limit=1&accept-language=fr`);
    const results = await res.json();
    if (results.length > 0) {
      const r = results[0];
      const parts = r.display_name.split(',').map(p => p.trim());
      let cc = '';
      try {
        const rev = await fetch(`${NOMINATIM_URL}/reverse?format=json&lat=${r.lat}&lon=${r.lon}&zoom=3&accept-language=fr`);
        const revData = await rev.json();
        cc = revData.address?.country_code || '';
      } catch (e) { /* ignore */ }
      return {
        lat: parseFloat(r.lat),
        lng: parseFloat(r.lon),
        country: parts[parts.length - 1] || '',
        countryCode: cc
      };
    }
  } catch (err) {
    console.warn('Geocode error:', err);
  }
  return null;
}

async function fetchCountryCode(lat, lon) {
  try {
    const res = await fetch(`${NOMINATIM_URL}/reverse?format=json&lat=${lat}&lon=${lon}&zoom=3&accept-language=fr`);
    const data = await res.json();
    if (data.address?.country_code) {
      state._editCountryCode = data.address.country_code;
    }
  } catch (e) { /* ignore */ }
}

// ============================================
// DETAIL MODAL
// ============================================

function showDetail(id) {
  const dest = state.destinations.find(d => d.id === id);
  if (!dest) return;
  state.detailId = id;

  mainMap?.closePopup();

  // Photo
  const photoEl = document.getElementById('detail-photo');
  photoEl.style.backgroundImage = dest.photoUrl
    ? `url('${unsplashUrl(dest.photoUrl, 'detail')}')`
    : 'none';

  // Body content
  const status = dest.status || 'idea';
  const statusLabels = { done: '✅ Visité', planned: '📅 Planifié', idea: '💡 Idée' };

  const tagsHtml = (dest.tags || []).map(t =>
    `<span class="detail-tag">${escapeHtml(t)}</span>`
  ).join('');

  let infoRows = '';
  if (dest.flightTime) {
    infoRows += `<div class="detail-info-row"><span class="detail-info-label">✈ Vol</span><span class="detail-info-value">${escapeHtml(dest.flightTime)}</span></div>`;
  }
  if (dest.bestMonths) {
    infoRows += `<div class="detail-info-row"><span class="detail-info-label">☀ Meilleurs mois</span><span class="detail-info-value">${escapeHtml(dest.bestMonths)}</span></div>`;
  }

  let datesHtml = '';
  if (dest.trips && dest.trips.length > 0) {
    const today = todayStr();
    datesHtml = dest.trips.map(t => {
      const isFuture = t.start >= today;
      const start = formatDateLong(t.start);
      const end = t.end && t.end !== t.start ? ' → ' + formatDateLong(t.end) : '';
      const days = getDaysBetween(t.start, t.end || t.start);
      return `
        <div class="detail-info-row">
          <span class="detail-info-label">📅 ${isFuture ? 'À venir' : 'Passé'}</span>
          <span class="detail-info-value">${start}${end}<br><small style="color:var(--text-muted);font-weight:400">${days} jour${days > 1 ? 's' : ''}</small></span>
        </div>
      `;
    }).join('');
  }

  document.getElementById('detail-body').innerHTML = `
    <h2 class="detail-name">${escapeHtml(dest.name)}</h2>
    <div class="detail-country">${getFlag(dest.countryCode)} ${escapeHtml(dest.country || '')}</div>
    <div class="detail-status ${status}">${statusLabels[status] || statusLabels.idea}</div>
    ${tagsHtml ? `<div class="detail-tags">${tagsHtml}</div>` : ''}
    ${dest.notes ? `<div class="detail-notes">${escapeHtml(dest.notes)}</div>` : ''}
    ${infoRows}
    ${datesHtml}
  `;

  document.getElementById('detail-overlay').classList.remove('hidden');
}

function closeDetail() {
  document.getElementById('detail-overlay').classList.add('hidden');
  state.detailId = null;
}

function editFromDetail() {
  const dest = state.destinations.find(d => d.id === state.detailId);
  if (!dest) return;
  closeDetail();
  setTimeout(() => openEditModal(dest), 200);
}

// ============================================
// CONFIRM DIALOG
// ============================================

function showConfirm(message, callback) {
  confirmCallback = callback;
  document.getElementById('confirm-message').textContent = message;
  document.getElementById('confirm-overlay').classList.remove('hidden');
}

function confirmOk() {
  document.getElementById('confirm-overlay').classList.add('hidden');
  if (confirmCallback) confirmCallback();
  confirmCallback = null;
}

function confirmCancel() {
  document.getElementById('confirm-overlay').classList.add('hidden');
  confirmCallback = null;
}

// ============================================
// TOAST
// ============================================

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.add('hidden'), 2800);
}

// ============================================
// RENDER ALL
// ============================================

function renderAll() {
  renderList();
  renderMapMarkers();
  renderPlanning();
  updateMonthBarTrips();
}

// ============================================
// HELPERS
// ============================================

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function getFlag(countryCode) {
  if (!countryCode) return '🌍';
  const code = countryCode.toUpperCase();
  return [...code].map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join('') || '🌍';
}

function formatDateShort(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}

function formatDateLong(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function getDaysBetween(start, end) {
  const s = new Date(start + 'T00:00:00');
  const e = new Date(end + 'T00:00:00');
  return Math.max(1, Math.ceil((e - s) / (1000 * 60 * 60 * 24)));
}

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function unsplashUrl(url, size) {
  if (!url) return '';
  const base = url.split('?')[0];
  if (size === 'thumb') return base + '?w=100&h=100&fit=crop&auto=format&q=60';
  if (size === 'detail') return base + '?w=800&h=400&fit=crop&auto=format&q=80';
  return base;
}

// Expose functions globally for HTML onclick handlers
window.loginUser = loginUser;
window.registerUser = registerUser;
window.loginGoogle = loginGoogle;
window.loginDemo = loginDemo;
window.logout = logout;
window.toggleUserMenu = toggleUserMenu;
window.switchView = switchView;
window.openAddModal = openAddModal;
window.closeModal = closeModal;
window.setFilter = setFilter;
window.onSearch = onSearch;
window.setMonthFilter = setMonthFilter;
window.changePlanningYear = changePlanningYear;
window.onDestNameInput = onDestNameInput;
window.selectGeoSuggestion = selectGeoSuggestion;
window.setStatus = setStatus;
window.addDateRow = addDateRow;
window.saveDestination = saveDestination;
window.deleteDestination = deleteDestination;
window.showDetail = showDetail;
window.closeDetail = closeDetail;
window.editFromDetail = editFromDetail;
window.confirmOk = confirmOk;
window.confirmCancel = confirmCancel;
