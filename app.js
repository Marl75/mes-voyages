/* ============================================
   MES VOYAGES - Application
   Light Warm "Mini Vignettes" Theme
   ============================================ */

// ============================================
// CONFIGURATION
// ============================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBHwzRBffLsMpMOarwlQL5O44vVCNXYyS0",
  authDomain: "mes-voyages-acea0.firebaseapp.com",
  projectId: "mes-voyages-acea0",
  storageBucket: "mes-voyages-acea0.firebasestorage.app",
  messagingSenderId: "427321810486",
  appId: "1:427321810486:web:15b2e48476b191dc598297"
};

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org';

// ============================================
// INTERNATIONALIZATION
// ============================================

const I18N = {
  fr: {
    appTitle: 'Mes Voyages', appSubtitle: 'Planifiez vos prochaines aventures',
    emailPh: 'Email', passwordPh: 'Mot de passe',
    login: 'Se connecter', register: 'Créer un compte', or: 'ou',
    googleLogin: 'Continuer avec Google', demoMode: 'Explorer en mode démo',
    logout: 'Se déconnecter', langSwitch: 'English',
    searchPh: 'Rechercher…',
    filterAll: 'Tous', filterDone: 'Visités', filterPlanned: 'Planifiés', filterIdea: 'Idées',
    navMap: 'Carte', navList: 'Liste', navPlanning: 'Planning',
    newDest: 'Nouvelle destination', editTitle: 'Modifier',
    labelDest: 'Destination', labelCountry: 'Pays', labelStatus: 'Statut',
    labelNotes: 'Notes', labelTags: 'Tags', labelPhoto: 'Photo',
    labelTravelTime: 'Temps de trajet', labelBestMonths: 'Meilleurs mois', labelDates: 'Dates de voyage',
    destPh: 'Ex: Santorini', countryPh: 'Auto-détecté…', notesPh: 'Vos notes…',
    tagsPh: 'Ex: plage, culture, gastro', photoPh: 'URL de la photo ou recherche auto…',
    travelTimePh: 'Ex: 3h30', bestMonthsPh: 'Ex: avr–oct',
    statusIdea: '💡 Idée', statusPlanned: '📅 Planifié', statusDone: '✅ Visité',
    addDates: '+ Ajouter des dates', btnDelete: 'Supprimer', save: 'Enregistrer',
    edit: 'Modifier', cancel: 'Annuler',
    destinations: 'destinations', destination: 'destination', countries: 'pays',
    visited: 'visité', visitedP: 'visités', planned: 'planifié', plannedP: 'planifiés',
    noDestinations: 'Aucune destination.<br>Ajoutez votre première !', noResults: 'Aucun résultat.',
    statusLabelDone: 'Visité', statusLabelPlanned: 'Planifié', statusLabelIdea: 'Idée',
    detailTravel: '✈ Trajet', detailBestMonths: '☀ Meilleurs mois',
    upcoming: 'À venir', past: 'Passé', day: 'jour', days: 'jours',
    confirmDelete: 'Supprimer « {name} » ?',
    toastAccountCreated: 'Compte créé !', toastEnterName: 'Entrez un nom de destination',
    toastEnterNameFirst: "Entrez d'abord un nom de destination",
    toastModified: 'Destination modifiée', toastAdded: 'Destination ajoutée !',
    toastDeleted: 'Destination supprimée', toastPhotoFound: 'Photo trouvée !',
    toastNoPhoto: 'Aucune photo trouvée — collez une URL manuellement',
    toastSearchError: 'Erreur de recherche',
    toastMigrated: '{n} destination(s) récupérée(s) !', toastMigrationError: 'Erreur lors de la migration des données',
    errEmailAndPwd: 'Veuillez saisir votre email et mot de passe.',
    errEmail: 'Veuillez saisir votre email.', errPwd: 'Veuillez saisir votre mot de passe.',
    errEmailAndPwdReg: 'Veuillez saisir un email et un mot de passe.',
    errPwdReg: 'Veuillez choisir un mot de passe.',
    errPwdLength: 'Le mot de passe doit contenir au moins 6 caractères.',
    errNoAccount: 'Aucun compte avec cet email. Cliquez « Créer un compte » pour vous inscrire.',
    errWrongPwd: 'Mot de passe incorrect.',
    errAccountExists: 'Un compte existe déjà avec cet email. Cliquez « Se connecter ».',
    errInvalidCred: 'Email ou mot de passe incorrect.',
    errInvalidEmail: "L'adresse email n'est pas valide.",
    errTooMany: 'Trop de tentatives. Veuillez réessayer dans quelques minutes.',
    errPopupClosed: 'Connexion annulée.', errConnection: 'Erreur de connexion. Veuillez réessayer.',
    monthNames: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    monthFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    locale: 'fr-FR'
  },
  en: {
    appTitle: 'My Trips', appSubtitle: 'Plan your next adventures',
    emailPh: 'Email', passwordPh: 'Password',
    login: 'Log in', register: 'Create account', or: 'or',
    googleLogin: 'Continue with Google', demoMode: 'Explore in demo mode',
    logout: 'Log out', langSwitch: 'Français',
    searchPh: 'Search…',
    filterAll: 'All', filterDone: 'Visited', filterPlanned: 'Planned', filterIdea: 'Ideas',
    navMap: 'Map', navList: 'List', navPlanning: 'Timeline',
    newDest: 'New destination', editTitle: 'Edit',
    labelDest: 'Destination', labelCountry: 'Country', labelStatus: 'Status',
    labelNotes: 'Notes', labelTags: 'Tags', labelPhoto: 'Photo',
    labelTravelTime: 'Travel time', labelBestMonths: 'Best months', labelDates: 'Travel dates',
    destPh: 'e.g. Santorini', countryPh: 'Auto-detected…', notesPh: 'Your notes…',
    tagsPh: 'e.g. beach, culture, food', photoPh: 'Photo URL or auto search…',
    travelTimePh: 'e.g. 3h30', bestMonthsPh: 'e.g. Apr–Oct',
    statusIdea: '💡 Idea', statusPlanned: '📅 Planned', statusDone: '✅ Visited',
    addDates: '+ Add dates', btnDelete: 'Delete', save: 'Save',
    edit: 'Edit', cancel: 'Cancel',
    destinations: 'destinations', destination: 'destination', countries: 'countries',
    visited: 'visited', visitedP: 'visited', planned: 'planned', plannedP: 'planned',
    noDestinations: 'No destinations yet.<br>Add your first one!', noResults: 'No results.',
    statusLabelDone: 'Visited', statusLabelPlanned: 'Planned', statusLabelIdea: 'Idea',
    detailTravel: '✈ Travel time', detailBestMonths: '☀ Best months',
    upcoming: 'Upcoming', past: 'Past', day: 'day', days: 'days',
    confirmDelete: 'Delete "{name}"?',
    toastAccountCreated: 'Account created!', toastEnterName: 'Enter a destination name',
    toastEnterNameFirst: 'Enter a destination name first',
    toastModified: 'Destination updated', toastAdded: 'Destination added!',
    toastDeleted: 'Destination deleted', toastPhotoFound: 'Photo found!',
    toastNoPhoto: 'No photo found — paste a URL manually',
    toastSearchError: 'Search error',
    toastMigrated: '{n} destination(s) recovered!', toastMigrationError: 'Error migrating data',
    errEmailAndPwd: 'Please enter your email and password.',
    errEmail: 'Please enter your email.', errPwd: 'Please enter your password.',
    errEmailAndPwdReg: 'Please enter an email and password.',
    errPwdReg: 'Please choose a password.',
    errPwdLength: 'Password must be at least 6 characters.',
    errNoAccount: 'No account with this email. Click "Create account" to register.',
    errWrongPwd: 'Incorrect password.',
    errAccountExists: 'An account already exists with this email. Click "Log in".',
    errInvalidCred: 'Incorrect email or password.',
    errInvalidEmail: 'Invalid email address.',
    errTooMany: 'Too many attempts. Please try again in a few minutes.',
    errPopupClosed: 'Login cancelled.', errConnection: 'Connection error. Please try again.',
    monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    locale: 'en-US'
  }
};

let currentLang = localStorage.getItem('mv-lang') || 'fr';

function t(key, params) {
  const str = I18N[currentLang]?.[key] || I18N.fr[key] || key;
  if (!params) return str;
  return Object.entries(params).reduce((s, [k, v]) => s.replace(`{${k}}`, v), str);
}

function getMonthNames() { return I18N[currentLang].monthNames; }
function getMonthFull() { return I18N[currentLang].monthFull; }
function getLocale() { return I18N[currentLang].locale; }

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  const langBtn = document.getElementById('lang-switch-btn');
  if (langBtn) langBtn.textContent = t('langSwitch');
  document.documentElement.lang = currentLang === 'fr' ? 'fr' : 'en';
}

function toggleLanguage() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('mv-lang', currentLang);
  applyTranslations();
  renderMonthBar();
  if (state.user) renderAll();
  document.getElementById('user-menu').classList.add('hidden');
}

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
  activeFilters: new Set(['done', 'planned', 'idea']),
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
let countriesLayer = null;
let countriesGeoJson = null;
let geocodeTimer = null;
let confirmCallback = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
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

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + '_mv_salt_2026');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function getLocalAccounts() {
  const raw = localStorage.getItem('mv-accounts');
  return raw ? JSON.parse(raw) : {};
}

function saveLocalAccounts(accounts) {
  localStorage.setItem('mv-accounts', JSON.stringify(accounts));
}

async function loginUser() {
  clearAuthError();
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  const password = document.getElementById('auth-password').value;

  if (!email && !password) return showAuthError(t('errEmailAndPwd'), ['auth-email', 'auth-password']);
  if (!email) return showAuthError(t('errEmail'), ['auth-email']);
  if (!password) return showAuthError(t('errPwd'), ['auth-password']);

  if (state.firebaseReady) {
    try {
      const cred = await firebase.auth().signInWithEmailAndPassword(email, password);
      enterApp({
        uid: cred.user.uid,
        email: cred.user.email,
        name: cred.user.displayName || email.split('@')[0]
      });
    } catch (err) {
      const e = getFirebaseError(err.code);
      showAuthError(e.msg, e.fields);
    }
  } else {
    const accounts = getLocalAccounts();
    const account = accounts[email];
    if (!account) return showAuthError(t('errNoAccount'), ['auth-email']);
    const hash = await hashPassword(password);
    if (account.passwordHash !== hash) return showAuthError(t('errWrongPwd'), ['auth-password']);
    enterApp({ uid: account.uid, email, name: account.name });
  }
}

async function registerUser() {
  clearAuthError();
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  const password = document.getElementById('auth-password').value;

  if (!email && !password) return showAuthError(t('errEmailAndPwdReg'), ['auth-email', 'auth-password']);
  if (!email) return showAuthError(t('errEmail'), ['auth-email']);
  if (!password) return showAuthError(t('errPwdReg'), ['auth-password']);
  if (password.length < 6) return showAuthError(t('errPwdLength'), ['auth-password']);

  if (state.firebaseReady) {
    try {
      const cred = await firebase.auth().createUserWithEmailAndPassword(email, password);
      enterApp({
        uid: cred.user.uid,
        email: cred.user.email,
        name: email.split('@')[0]
      });
    } catch (err) {
      const e = getFirebaseError(err.code);
      showAuthError(e.msg, e.fields);
    }
  } else {
    const accounts = getLocalAccounts();
    if (accounts[email]) return showAuthError(t('errAccountExists'), ['auth-email']);
    const uid = 'local-' + Date.now();
    const name = email.split('@')[0];
    const passwordHash = await hashPassword(password);
    accounts[email] = { uid, name, passwordHash };
    saveLocalAccounts(accounts);
    enterApp({ uid, email, name });
    showToast(t('toastAccountCreated'));
  }
}

async function loginGoogle() {
  clearAuthError();
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
      const e = getFirebaseError(err.code);
      showAuthError(e.msg, e.fields);
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
  state.editingId = null;
  state.detailId = null;
  state.activeFilters = new Set(['done', 'planned', 'idea']);
  state.currentMonth = null;
  state.searchQuery = '';
  localStorage.removeItem('mv-user');
  document.getElementById('app').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('user-menu').classList.add('hidden');
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-password').value = '';
  document.getElementById('search-input').value = '';
  if (countriesLayer) renderMapCountries();
  if (markersLayer) markersLayer.clearLayers();
}

function toggleUserMenu() {
  const menu = document.getElementById('user-menu');
  menu.classList.toggle('hidden');
}

function showAuthError(message, highlightFields) {
  const el = document.getElementById('auth-error');
  el.textContent = message;
  el.classList.remove('hidden');

  if (highlightFields) {
    highlightFields.forEach(id => {
      document.getElementById(id)?.classList.add('error');
    });
  }

  const form = document.querySelector('.auth-form');
  form.classList.remove('shake');
  void form.offsetWidth;
  form.classList.add('shake');
}

function clearAuthError() {
  document.getElementById('auth-error').classList.add('hidden');
  document.getElementById('auth-email').classList.remove('error');
  document.getElementById('auth-password').classList.remove('error');
}

function getFirebaseError(code) {
  const errors = {
    'auth/user-not-found': { msg: t('errNoAccount'), fields: ['auth-email'] },
    'auth/wrong-password': { msg: t('errWrongPwd'), fields: ['auth-password'] },
    'auth/invalid-credential': { msg: t('errInvalidCred'), fields: ['auth-email', 'auth-password'] },
    'auth/email-already-in-use': { msg: t('errAccountExists'), fields: ['auth-email'] },
    'auth/weak-password': { msg: t('errPwdLength'), fields: ['auth-password'] },
    'auth/invalid-email': { msg: t('errInvalidEmail'), fields: ['auth-email'] },
    'auth/too-many-requests': { msg: t('errTooMany'), fields: [] },
    'auth/popup-closed-by-user': { msg: t('errPopupClosed'), fields: [] }
  };
  return errors[code] || { msg: t('errConnection'), fields: [] };
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
        if (state.destinations.length === 0) {
          const migrated = migrateLocalData();
          if (migrated) return;
          if (loadDemo) { injectDemoData(); return; }
        }
        renderAll();
      });
  } else {
    const saved = localStorage.getItem(getStorageKey());
    state.destinations = saved ? JSON.parse(saved) : [];
    if (state.destinations.length === 0 || loadDemo) {
      injectDemoData();
    } else {
      renderAll();
    }
  }
}

function migrateLocalData() {
  if (!state.firebaseReady || !state.user || state.user.uid === 'demo') return false;

  let localDests = [];

  const allKeys = Object.keys(localStorage).filter(k => k.startsWith('mv-destinations'));
  for (const key of allKeys) {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      if (Array.isArray(data) && data.length > 0) {
        data.forEach(d => {
          if (!localDests.some(ld => ld.name === d.name)) localDests.push(d);
        });
      }
    } catch (e) { /* ignore */ }
  }

  if (localDests.length === 0) return false;

  const db = firebase.firestore();
  const col = db.collection('users').doc(state.user.uid).collection('destinations');
  const batch = db.batch();

  localDests.forEach(dest => {
    const { id, ...data } = dest;
    const ref = col.doc();
    batch.set(ref, { ...data, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
  });

  batch.commit().then(() => {
    showToast(t('toastMigrated', { n: localDests.length }));
  }).catch(err => {
    console.warn('Migration error:', err);
    showToast(t('toastMigrationError'));
  });

  return true;
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

function getStorageKey() {
  return state.user ? 'mv-destinations-' + state.user.uid : 'mv-destinations';
}

function saveToStorage() {
  localStorage.setItem(getStorageKey(), JSON.stringify(state.destinations));
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

function toggleFilter(filter) {
  if (filter === 'all') {
    const allActive = state.activeFilters.size === 3;
    if (allActive) return;
    state.activeFilters = new Set(['done', 'planned', 'idea']);
  } else {
    if (state.activeFilters.has(filter)) {
      if (state.activeFilters.size > 1) state.activeFilters.delete(filter);
    } else {
      state.activeFilters.add(filter);
    }
  }
  updateFilterButtons();
  renderAll();
}

function updateFilterButtons() {
  const allActive = state.activeFilters.size === 3;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const f = btn.dataset.filter;
    if (f === 'all') {
      btn.classList.toggle('active', allActive);
    } else {
      btn.classList.toggle('active', state.activeFilters.has(f));
    }
  });
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
  if (state.activeFilters.size < 3) {
    list = list.filter(d => state.activeFilters.has(d.status || 'idea'));
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
  bar.innerHTML = getMonthNames().map((name, i) => {
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
        <p>${state.destinations.length === 0 ? t('noDestinations') : t('noResults')}</p>
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

  const sorted = Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0], currentLang));
  // Sort destinations within each country alphabetically
  sorted.forEach(([, data]) => {
    data.dests.sort((a, b) => (a.name || '').localeCompare(b.name || '', currentLang));
  });

  // Stats
  const doneCt = filtered.filter(d => d.status === 'done').length;
  const plannedCt = filtered.filter(d => d.status === 'planned').length;
  const countryCt = sorted.length;

  let html = `
    <div class="list-stats">
      <span><strong>${filtered.length}</strong> ${filtered.length > 1 ? t('destinations') : t('destination')}</span>
      <span><strong>${countryCt}</strong> ${t('countries')}</span>
      <span><strong>${doneCt}</strong> ${doneCt > 1 ? t('visitedP') : t('visited')}</span>
      <span><strong>${plannedCt}</strong> ${plannedCt > 1 ? t('plannedP') : t('planned')}</span>
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
    const labels = { done: t('statusLabelDone'), planned: t('statusLabelPlanned'), idea: t('statusLabelIdea') };
    dateHtml = `<div class="dest-date none">${labels[status] || t('statusLabelIdea')}</div>`;
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

const STATUS_COLORS = {
  done: { fill: '#22C55E', opacity: 0.45 },
  planned: { fill: '#E5A33B', opacity: 0.4 },
  idea: { fill: '#A0A0A0', opacity: 0.3 }
};
const STATUS_PRIORITY = { done: 3, planned: 2, idea: 1 };

const NUM_TO_A2 = {
  '004':'AF','008':'AL','012':'DZ','016':'AS','020':'AD','024':'AO','028':'AG','032':'AR','051':'AM',
  '036':'AU','040':'AT','031':'AZ','044':'BS','048':'BH','050':'BD','052':'BB','112':'BY','056':'BE',
  '084':'BZ','204':'BJ','064':'BT','068':'BO','070':'BA','072':'BW','076':'BR','096':'BN','100':'BG',
  '854':'BF','108':'BI','132':'CV','116':'KH','120':'CM','124':'CA','140':'CF','148':'TD','152':'CL',
  '156':'CN','170':'CO','174':'KM','178':'CG','180':'CD','188':'CR','384':'CI','191':'HR','192':'CU',
  '196':'CY','203':'CZ','208':'DK','262':'DJ','212':'DM','214':'DO','218':'EC','818':'EG','222':'SV',
  '226':'GQ','232':'ER','233':'EE','748':'SZ','231':'ET','242':'FJ','246':'FI','250':'FR','266':'GA',
  '270':'GM','268':'GE','276':'DE','288':'GH','300':'GR','308':'GD','320':'GT','324':'GN','624':'GW',
  '328':'GY','332':'HT','340':'HN','348':'HU','352':'IS','356':'IN','360':'ID','364':'IR','368':'IQ',
  '372':'IE','376':'IL','380':'IT','388':'JM','392':'JP','400':'JO','398':'KZ','404':'KE','296':'KI',
  '408':'KP','410':'KR','414':'KW','417':'KG','418':'LA','428':'LV','422':'LB','426':'LS','430':'LR',
  '434':'LY','438':'LI','440':'LT','442':'LU','807':'MK','450':'MG','454':'MW','458':'MY','462':'MV',
  '466':'ML','470':'MT','584':'MH','478':'MR','480':'MU','484':'MX','583':'FM','498':'MD','492':'MC',
  '496':'MN','499':'ME','504':'MA','508':'MZ','104':'MM','516':'NA','520':'NR','524':'NP','528':'NL',
  '554':'NZ','558':'NI','562':'NE','566':'NG','578':'NO','512':'OM','586':'PK','585':'PW','591':'PA',
  '598':'PG','600':'PY','604':'PE','608':'PH','616':'PL','620':'PT','634':'QA','642':'RO','643':'RU',
  '646':'RW','659':'KN','662':'LC','670':'VC','882':'WS','674':'SM','678':'ST','682':'SA','686':'SN',
  '688':'RS','690':'SC','694':'SL','702':'SG','703':'SK','705':'SI','090':'SB','706':'SO','710':'ZA',
  '728':'SS','724':'ES','144':'LK','729':'SD','740':'SR','752':'SE','756':'CH','760':'SY','158':'TW',
  '762':'TJ','834':'TZ','764':'TH','626':'TL','768':'TG','776':'TO','780':'TT','788':'TN','792':'TR',
  '795':'TM','798':'TV','800':'UG','804':'UA','784':'AE','826':'GB','840':'US','858':'UY','860':'UZ',
  '548':'VU','862':'VE','704':'VN','887':'YE','894':'ZM','716':'ZW','275':'PS','010':'AQ','-99':'XK'
};
const A2_TO_NUM = Object.fromEntries(Object.entries(NUM_TO_A2).map(([k, v]) => [v, k]));

function initMap() {
  if (mainMap) return;
  const el = document.getElementById('map');
  if (!el) return;

  mainMap = L.map('map', {
    zoomControl: true, attributionControl: false
  }).setView([30, 10], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19, subdomains: 'abcd'
  }).addTo(mainMap);

  mainMap.createPane('countriesPane');
  mainMap.getPane('countriesPane').style.pointerEvents = 'none';
  mainMap.getPane('countriesPane').style.zIndex = 250;
  countriesLayer = L.layerGroup().addTo(mainMap);
  markersLayer = L.layerGroup().addTo(mainMap);

  loadCountriesGeoJson();
}

async function loadCountriesGeoJson() {
  try {
    const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    const world = await res.json();
    countriesGeoJson = topojson.feature(world, world.objects.countries);
    renderMapCountries();
  } catch (err) {
    console.warn('GeoJSON load error:', err);
  }
}

function getCountryStatus() {
  const filtered = getFilteredDestinations();
  const countryMap = {};

  filtered.forEach(dest => {
    const a2 = (dest.countryCode || '').toUpperCase();
    const num = A2_TO_NUM[a2];
    if (!num) return;
    const status = dest.status || 'idea';
    const existing = countryMap[num];
    if (!existing || STATUS_PRIORITY[status] > STATUS_PRIORITY[existing.status]) {
      countryMap[num] = { status, dests: [...(existing?.dests || []), dest], a2 };
    } else {
      existing.dests.push(dest);
    }
  });

  return countryMap;
}

function renderMapCountries() {
  if (!mainMap || !countriesLayer) return;

  const countryMap = getCountryStatus();

  countriesLayer.clearLayers();
  if (countriesGeoJson) {
    countriesGeoJson.features.forEach(feature => {
      const num = String(feature.id);
      const match = countryMap[num];
      if (!match) return;
      const c = STATUS_COLORS[match.status];
      L.geoJSON(feature, {
        style: () => ({
          fillColor: c.fill, fillOpacity: c.opacity,
          weight: 0.5, color: '#ccc'
        }),
        pane: 'countriesPane',
        interactive: false
      }).addTo(countriesLayer);
    });
  }

  if (markersLayer) {
    markersLayer.clearLayers();
    const filtered = getFilteredDestinations();
    filtered.forEach(dest => {
      if (!dest.lat || !dest.lng) return;
      const statusColor = STATUS_COLORS[dest.status || 'idea'];
      const marker = L.circleMarker([dest.lat, dest.lng], {
        radius: 6, fillColor: statusColor.fill, fillOpacity: 0.9,
        weight: 2, color: '#fff'
      });
      marker.bindTooltip(`${getFlag((dest.countryCode || '').toLowerCase())} ${escapeHtml(dest.name)}`, {
        className: 'country-tooltip'
      });
      marker.on('click', () => showDetail(dest.id));
      marker.addTo(markersLayer);
    });
  }

  fitMapToCountries(countryMap);
}

function fitMapToCountries(countryMap) {
  if (!mainMap || !countriesLayer) return;
  if (Object.keys(countryMap).length === 0) return;

  const bounds = L.latLngBounds();
  countriesLayer.eachLayer(wrapper => {
    wrapper.eachLayer(layer => {
      if (layer.getBounds) {
        const b = layer.getBounds();
        if (b.isValid()) bounds.extend(b);
      }
    });
  });

  if (bounds.isValid()) {
    mainMap.fitBounds(bounds, { padding: [30, 30], maxZoom: 6 });
  }
}

function renderMapMarkers() {
  renderMapCountries();
}

function fitMapToMarkers() {
  const countryMap = getCountryStatus();
  fitMapToCountries(countryMap);
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

  // Day number headers
  let gridHtml = '<div class="planning-day-headers"><div class="planning-day-headers-spacer"></div><div class="planning-day-numbers">';
  [1, 5, 10, 15, 20, 25, 31].forEach(d => {
    gridHtml += `<span>${d}</span>`;
  });
  gridHtml += '</div></div>';

  // Render 12 month rows
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

      const dateLabel = `${blockStart}–${blockEnd}`;
      blocksHtml += `
        <div class="planning-trip-block ${status}"
             style="left:${left}%; width:${width}%"
             onclick="showDetail('${t.dest.id}')"
             title="${escapeHtml(t.dest.name)}: ${formatDateShort(t.trip.start)} → ${formatDateShort(t.trip.end || t.trip.start)}">
          ${escapeHtml(t.dest.name)}<span class="planning-trip-dates">${dateLabel}</span>
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
        <div class="planning-month-label${isCurrent ? ' current' : ''}">${getMonthFull()[m].substring(0, 3)}.</div>
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

  document.getElementById('modal-title').textContent = t('newDest');
  document.getElementById('dest-name').value = '';
  document.getElementById('dest-country').value = '';
  document.getElementById('dest-notes').value = '';
  document.getElementById('dest-tags').value = '';
  document.getElementById('dest-flight').value = '';
  document.getElementById('dest-best-months').value = '';
  document.getElementById('dest-photo').value = '';
  document.getElementById('photo-preview').classList.add('hidden');
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

  document.getElementById('modal-title').textContent = t('editTitle');
  document.getElementById('dest-name').value = dest.name || '';
  document.getElementById('dest-country').value = dest.country || '';
  document.getElementById('dest-notes').value = dest.notes || '';
  document.getElementById('dest-tags').value = (dest.tags || []).join(', ');
  document.getElementById('dest-flight').value = dest.flightTime || '';
  document.getElementById('dest-best-months').value = dest.bestMonths || '';
  document.getElementById('dest-photo').value = dest.photoUrl || '';
  updatePhotoPreview(dest.photoUrl || '');
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
  if (!name) return showToast(t('toastEnterName'));

  let lat = state._editLat || 0;
  let lng = state._editLng || 0;
  let country = document.getElementById('dest-country').value.trim();
  let countryCode = state._editCountryCode || '';
  let photoUrl = document.getElementById('dest-photo').value.trim() || state._editPhotoUrl || '';

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
  showToast(state.editingId ? t('toastModified') : t('toastAdded'));
}

function deleteDestination() {
  if (!state.editingId) return;
  const dest = state.destinations.find(d => d.id === state.editingId);
  const name = dest ? dest.name : 'cette destination';

  showConfirm(t('confirmDelete', { name }), async () => {
    await deleteDest(state.editingId);
    closeModal();
    closeDetail();
    showToast(t('toastDeleted'));
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
// PHOTO SEARCH
// ============================================

function onPhotoUrlInput() {
  const url = document.getElementById('dest-photo').value.trim();
  updatePhotoPreview(url);
  if (url) state._editPhotoUrl = url;
}

function updatePhotoPreview(url) {
  const preview = document.getElementById('photo-preview');
  if (url) {
    preview.style.backgroundImage = `url('${url}')`;
    preview.classList.remove('hidden');
  } else {
    preview.classList.add('hidden');
  }
}

function isSceneryPhoto(url) {
  if (!url) return false;
  const lower = url.toLowerCase();
  const rejects = ['flag', 'coat', 'blason', 'drapeau', 'banner', 'logo', 'emblem', 'escudo', 'wappen', 'arms_of', 'seal_of', 'icon', '.svg'];
  return !rejects.some(r => lower.includes(r));
}

async function fetchWikiPhoto(lang, query) {
  try {
    const res = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
    if (!res.ok) return null;
    const data = await res.json();
    const url = data.originalimage?.source || data.thumbnail?.source?.replace(/\/\d+px-/, '/800px-');
    return (url && isSceneryPhoto(url)) ? url : null;
  } catch { return null; }
}

async function searchPhoto() {
  const name = document.getElementById('dest-name').value.trim();
  if (!name) return showToast(t('toastEnterNameFirst'));

  const btn = document.querySelector('.photo-search-btn');
  btn.textContent = '⏳';

  try {
    let photoUrl =
      await fetchWikiPhoto('en', name) ||
      await fetchWikiPhoto('fr', name) ||
      await fetchWikiPhoto('en', name + ' city') ||
      await fetchWikiPhoto('fr', name + ' (ville)');

    if (photoUrl) {
      state._editPhotoUrl = photoUrl;
      document.getElementById('dest-photo').value = photoUrl;
      updatePhotoPreview(photoUrl);
      showToast(t('toastPhotoFound'));
    } else {
      showToast(t('toastNoPhoto'));
    }
  } catch (err) {
    console.warn('Photo search error:', err);
    showToast(t('toastSearchError'));
  } finally {
    btn.textContent = '🔍';
  }
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
  const statusLabels = { done: t('statusDone'), planned: t('statusPlanned'), idea: t('statusIdea') };

  const tagsHtml = (dest.tags || []).map(t =>
    `<span class="detail-tag">${escapeHtml(t)}</span>`
  ).join('');

  let infoRows = '';
  if (dest.flightTime) {
    infoRows += `<div class="detail-info-row"><span class="detail-info-label">${t('detailTravel')}</span><span class="detail-info-value">${escapeHtml(dest.flightTime)}</span></div>`;
  }
  if (dest.bestMonths) {
    infoRows += `<div class="detail-info-row"><span class="detail-info-label">${t('detailBestMonths')}</span><span class="detail-info-value">${escapeHtml(dest.bestMonths)}</span></div>`;
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
          <span class="detail-info-label">📅 ${isFuture ? t('upcoming') : t('past')}</span>
          <span class="detail-info-value">${start}${end}<br><small style="color:var(--text-muted);font-weight:400">${days} ${days > 1 ? t('days') : t('day')}</small></span>
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
  return d.toLocaleDateString(getLocale(), { day: 'numeric', month: 'short' });
}

function formatDateLong(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString(getLocale(), { day: 'numeric', month: 'long', year: 'numeric' });
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
window.clearAuthError = clearAuthError;
window.loginUser = loginUser;
window.registerUser = registerUser;
window.loginGoogle = loginGoogle;
window.loginDemo = loginDemo;
window.logout = logout;
window.toggleUserMenu = toggleUserMenu;
window.switchView = switchView;
window.openAddModal = openAddModal;
window.closeModal = closeModal;
window.toggleFilter = toggleFilter;
window.onSearch = onSearch;
window.setMonthFilter = setMonthFilter;
window.changePlanningYear = changePlanningYear;
window.onDestNameInput = onDestNameInput;
window.selectGeoSuggestion = selectGeoSuggestion;
window.setStatus = setStatus;
window.searchPhoto = searchPhoto;
window.onPhotoUrlInput = onPhotoUrlInput;
window.addDateRow = addDateRow;
window.saveDestination = saveDestination;
window.deleteDestination = deleteDestination;
window.showDetail = showDetail;
window.closeDetail = closeDetail;
window.editFromDetail = editFromDetail;
window.confirmOk = confirmOk;
window.confirmCancel = confirmCancel;
window.toggleLanguage = toggleLanguage;
