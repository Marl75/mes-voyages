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
    login: 'Se connecter', register: 'Créer un compte', or: 'ou', forgot: 'Mot de passe oublié ?',
    googleLogin: 'Continuer avec Google',
    logout: 'Se déconnecter', langSwitch: 'English',
    searchPh: 'Rechercher…',
    filterAll: 'Tous', filterDone: 'Visités', filterPlanned: 'Planifiés', filterIdea: 'Idées',
    navMap: 'Carte', navList: 'Liste', navPlanning: 'Planning', navStats: 'Stats',
    modeTrips: 'Mes voyages', modeBest: 'Idéal pour partir',
    sortLabel: 'Trier', sortCountry: 'Par pays', sortDate: 'Par date',
    sectionUpcoming: 'À venir', sectionPast: 'Passés', sectionUndated: 'Sans date',
    noBestMonth: 'Aucune destination idéale en {month}.<br>Renseignez les « Meilleurs mois » de vos destinations.',
    nextTrip: 'Prochain voyage', nowTravelling: 'En ce moment',
    inDays: 'dans {n} jours', tomorrow: 'demain', ongoingDay: 'jour {n} sur {total}',
    allYear: "Toute l'année",
    statCountry: 'pays visité', statCountries: 'pays visités', statWorld: '{pct} % du monde',
    statVisited: 'destination visitée', statVisitedP: 'destinations visitées', statOf: 'sur {n} au total',
    statDaysYear: 'jours de voyage en {year}', statDaysPlanned: '+ {n} prévus d’ici fin d’année',
    statUpcoming: 'voyage à venir', statUpcomingP: 'voyages à venir', statIdeas: '{n} idée(s) en réserve',
    statDaysPerYear: 'Jours de voyage par an', statVisitedCountries: 'Pays visités', statWishCountries: 'Pays à découvrir',
    newDest: 'Nouvelle destination', editTitle: 'Modifier',
    labelDest: 'Destination', labelCountry: 'Pays', labelStatus: 'Statut',
    labelNotes: 'Notes', labelTags: 'Tags', labelPhoto: 'Photo',
    labelTravelTime: 'Temps de trajet', labelBestMonths: 'Meilleurs mois', labelDates: 'Dates de voyage',
    destPh: 'Ex: Santorini', countryPh: 'Auto-détecté…', notesPh: 'Vos notes…',
    tagsPh: 'Ex: plage, culture, gastro', photoPh: 'URL de la photo ou recherche auto…',
    travelTimePh: 'Ex: 3h30',
    statusIdea: '💡 Idée', statusPlanned: '📅 Planifié', statusDone: '✅ Visité',
    addDates: '+ Ajouter des dates', btnDelete: 'Supprimer', save: 'Enregistrer',
    edit: 'Modifier', cancel: 'Annuler',
    addDest: 'Ajouter', account: 'Compte', close: 'Fermer', searchPhoto: 'Rechercher une photo',
    prevYear: 'Année précédente', nextYear: 'Année suivante', removeDates: 'Retirer ces dates',
    destinations: 'destinations', destination: 'destination', countries: 'pays',
    visited: 'visité', visitedP: 'visités', planned: 'planifié', plannedP: 'planifiés',
    noDestinations: 'Aucune destination.<br>Ajoutez votre première !', noResults: 'Aucun résultat.',
    statusLabelDone: 'Visité', statusLabelPlanned: 'Planifié', statusLabelIdea: 'Idée',
    detailTravel: '✈ Trajet', detailBestMonths: '☀ Meilleurs mois',
    upcoming: 'À venir', past: 'Passé', day: 'jour', days: 'jours', dayShort: 'j', otherCountry: 'Autres',
    confirmDelete: 'Supprimer « {name} » ?',
    toastAccountCreated: 'Compte créé !', toastEnterName: 'Entrez un nom de destination',
    toastEnterNameFirst: "Entrez d'abord un nom de destination",
    toastModified: 'Destination modifiée', toastAdded: 'Destination ajoutée !',
    toastDeleted: 'Destination supprimée', toastPhotoFound: 'Photo trouvée !',
    toastNoPhoto: 'Aucune photo trouvée — collez une URL manuellement',
    toastSearchError: 'Erreur de recherche',
    toastSaveError: "Erreur lors de l'enregistrement", toastDeleteError: 'Erreur lors de la suppression',
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
    errResetEmail: 'Saisissez votre email ci-dessus, puis cliquez à nouveau « Mot de passe oublié ? ».',
    resetSent: 'Email de réinitialisation envoyé ! Vérifiez votre boîte de réception (et les spams).',
    monthNames: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
    monthFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    locale: 'fr-FR'
  },
  en: {
    appTitle: 'My Trips', appSubtitle: 'Plan your next adventures',
    emailPh: 'Email', passwordPh: 'Password',
    login: 'Log in', register: 'Create account', or: 'or', forgot: 'Forgot password?',
    googleLogin: 'Continue with Google',
    logout: 'Log out', langSwitch: 'Français',
    searchPh: 'Search…',
    filterAll: 'All', filterDone: 'Visited', filterPlanned: 'Planned', filterIdea: 'Ideas',
    navMap: 'Map', navList: 'List', navPlanning: 'Timeline', navStats: 'Stats',
    modeTrips: 'My trips', modeBest: 'Best time to go',
    sortLabel: 'Sort', sortCountry: 'By country', sortDate: 'By date',
    sectionUpcoming: 'Upcoming', sectionPast: 'Past', sectionUndated: 'No dates',
    noBestMonth: 'No destination is ideal in {month}.<br>Fill in the "Best months" of your destinations.',
    nextTrip: 'Next trip', nowTravelling: 'Travelling now',
    inDays: 'in {n} days', tomorrow: 'tomorrow', ongoingDay: 'day {n} of {total}',
    allYear: 'All year',
    statCountry: 'country visited', statCountries: 'countries visited', statWorld: '{pct}% of the world',
    statVisited: 'destination visited', statVisitedP: 'destinations visited', statOf: 'out of {n}',
    statDaysYear: 'travel days in {year}', statDaysPlanned: '+ {n} planned by year end',
    statUpcoming: 'upcoming trip', statUpcomingP: 'upcoming trips', statIdeas: '{n} idea(s) in store',
    statDaysPerYear: 'Travel days per year', statVisitedCountries: 'Countries visited', statWishCountries: 'Countries to discover',
    newDest: 'New destination', editTitle: 'Edit',
    labelDest: 'Destination', labelCountry: 'Country', labelStatus: 'Status',
    labelNotes: 'Notes', labelTags: 'Tags', labelPhoto: 'Photo',
    labelTravelTime: 'Travel time', labelBestMonths: 'Best months', labelDates: 'Travel dates',
    destPh: 'e.g. Santorini', countryPh: 'Auto-detected…', notesPh: 'Your notes…',
    tagsPh: 'e.g. beach, culture, food', photoPh: 'Photo URL or auto search…',
    travelTimePh: 'e.g. 3h30',
    statusIdea: '💡 Idea', statusPlanned: '📅 Planned', statusDone: '✅ Visited',
    addDates: '+ Add dates', btnDelete: 'Delete', save: 'Save',
    edit: 'Edit', cancel: 'Cancel',
    addDest: 'Add', account: 'Account', close: 'Close', searchPhoto: 'Search for a photo',
    prevYear: 'Previous year', nextYear: 'Next year', removeDates: 'Remove these dates',
    destinations: 'destinations', destination: 'destination', countries: 'countries',
    visited: 'visited', visitedP: 'visited', planned: 'planned', plannedP: 'planned',
    noDestinations: 'No destinations yet.<br>Add your first one!', noResults: 'No results.',
    statusLabelDone: 'Visited', statusLabelPlanned: 'Planned', statusLabelIdea: 'Idea',
    detailTravel: '✈ Travel time', detailBestMonths: '☀ Best months',
    upcoming: 'Upcoming', past: 'Past', day: 'day', days: 'days', dayShort: 'd', otherCountry: 'Other',
    confirmDelete: 'Delete "{name}"?',
    toastAccountCreated: 'Account created!', toastEnterName: 'Enter a destination name',
    toastEnterNameFirst: 'Enter a destination name first',
    toastModified: 'Destination updated', toastAdded: 'Destination added!',
    toastDeleted: 'Destination deleted', toastPhotoFound: 'Photo found!',
    toastNoPhoto: 'No photo found — paste a URL manually',
    toastSearchError: 'Search error',
    toastSaveError: 'Error while saving', toastDeleteError: 'Error while deleting',
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
    errResetEmail: 'Enter your email above, then click "Forgot password?" again.',
    resetSent: 'Password reset email sent! Check your inbox (and spam).',
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
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const label = t(el.getAttribute('data-i18n-aria'));
    el.setAttribute('aria-label', label);
    if (el.hasAttribute('title')) el.title = label;
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

// ============================================
// STATE
// ============================================

const state = {
  user: null,
  destinations: [],
  currentView: 'list',
  activeFilters: new Set(['done', 'planned', 'idea']),
  currentMonth: null,
  monthMode: 'trips',
  filterYear: new Date().getFullYear(),
  sortMode: (() => { try { return localStorage.getItem('mv-sort') || 'country'; } catch (e) { return 'country'; } })(),
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
  _editPhotoUrl: null,
  _editGeoName: null,
  _editBestMonths: new Set()
};

let mainMap = null;
let markersLayer = null;
let countriesLayer = null;
let countriesGeoJson = null;
let geocodeTimer = null;
let confirmCallback = null;
let unsubscribeDestinations = null;
let migrationInProgress = false;

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
      // Keep data available offline; fails harmlessly with several tabs open
      firebase.firestore().enablePersistence({ synchronizeTabs: true })
        .catch(err => console.warn('Firestore persistence unavailable:', err.code));
      state.firebaseReady = true;
    } catch (e) {
      console.warn('Firebase init failed, using local storage', e);
    }
  }
}

function checkAutoLogin() {
  // Leftovers of removed features (local accounts, demo mode)
  ['mv-accounts', 'mv-user', 'mv-destinations-demo'].forEach(k => localStorage.removeItem(k));
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
  }
}

// ============================================
// AUTH
// ============================================

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
    showAuthError(t('errConnection'), []);
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
    showAuthError(t('errConnection'), []);
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
    showAuthError(t('errConnection'), []);
  }
}

async function resetPassword() {
  clearAuthError();
  const email = document.getElementById('auth-email').value.trim().toLowerCase();
  if (!email) return showAuthError(t('errResetEmail'), ['auth-email']);

  if (state.firebaseReady) {
    try {
      firebase.auth().languageCode = currentLang;
      await firebase.auth().sendPasswordResetEmail(email);
      showAuthSuccess(t('resetSent'));
    } catch (err) {
      const e = getFirebaseError(err.code);
      showAuthError(e.msg, e.fields);
    }
  } else {
    showAuthError(t('errConnection'), []);
  }
}

function enterApp(user) {
  if (state.user && state.user.uid === user.uid) return;
  state.user = user;

  // Update UI
  const initial = (user.name || user.email || 'U')[0].toUpperCase();
  document.getElementById('user-avatar-btn').textContent = initial;
  document.getElementById('user-menu-email').textContent = user.email;

  // Show app
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  // Load data
  loadDestinations();

  // Init map lazily
  setTimeout(() => initMap(), 300);
}

function logout() {
  if (unsubscribeDestinations) {
    unsubscribeDestinations();
    unsubscribeDestinations = null;
  }
  if (state.firebaseReady) firebase.auth().signOut();
  state.user = null;
  state.destinations = [];
  state.editingId = null;
  state.detailId = null;
  state.activeFilters = new Set(['done', 'planned', 'idea']);
  state.currentMonth = null;
  state.monthMode = 'trips';
  state.filterYear = new Date().getFullYear();
  state.searchQuery = '';
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

function showAuthSuccess(message) {
  const el = document.getElementById('auth-error');
  el.textContent = message;
  el.classList.add('success');
  el.classList.remove('hidden');
}

function clearAuthError() {
  document.getElementById('auth-error').classList.add('hidden');
  document.getElementById('auth-error').classList.remove('success');
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

function loadDestinations() {
  if (!state.firebaseReady || !state.user) return;
  if (unsubscribeDestinations) unsubscribeDestinations();
  const db = firebase.firestore();
  unsubscribeDestinations = db.collection('users').doc(state.user.uid).collection('destinations')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      state.destinations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (state.destinations.length === 0 && migrateLocalData()) return;
      renderAll();
    }, err => {
      console.warn('Firestore listen error:', err);
    });
}

function migrateLocalData() {
  if (!state.firebaseReady || !state.user) return false;
  if (migrationInProgress) return true;

  let localDests = [];

  // Demo data is never migrated into a real account
  const allKeys = Object.keys(localStorage)
    .filter(k => k.startsWith('mv-destinations') && k !== 'mv-destinations-demo');
  for (const key of allKeys) {
    try {
      const data = JSON.parse(localStorage.getItem(key));
      if (Array.isArray(data) && data.length > 0) {
        data.forEach(d => {
          if (String(d.id || '').startsWith('demo-')) return;
          if (!localDests.some(ld => ld.name === d.name)) localDests.push(d);
        });
      }
    } catch (e) { /* ignore */ }
  }

  if (localDests.length === 0) return false;
  migrationInProgress = true;

  const db = firebase.firestore();
  const col = db.collection('users').doc(state.user.uid).collection('destinations');
  const batch = db.batch();

  localDests.forEach(dest => {
    const { id, ...data } = dest;
    const ref = col.doc();
    batch.set(ref, { ...data, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
  });

  batch.commit().then(() => {
    // Remove migrated local copies so they don't come back later
    allKeys.forEach(k => localStorage.removeItem(k));
    showToast(t('toastMigrated', { n: localDests.length }));
  }).catch(err => {
    console.warn('Migration error:', err);
    showToast(t('toastMigrationError'));
  }).finally(() => {
    migrationInProgress = false;
  });

  return true;
}

function destinationsCollection() {
  return firebase.firestore().collection('users').doc(state.user.uid).collection('destinations');
}

function saveDest(dest) {
  if (!state.firebaseReady || !state.user) return Promise.reject(new Error('Not connected'));
  const { id, ...data } = dest;
  if (id) {
    return destinationsCollection().doc(id).update({ ...data, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
  }
  return destinationsCollection().add({ ...data, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
}

function deleteDest(id) {
  if (!state.firebaseReady || !state.user) return Promise.reject(new Error('Not connected'));
  return destinationsCollection().doc(id).delete();
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
  if (view === 'stats') renderStats();
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
  updateMonthBar();
  renderList();
}

// 'trips': trips taken that month of filterYear — 'best': destinations ideal that month
function setMonthMode(mode) {
  state.monthMode = mode;
  updateMonthBar();
  renderList();
}

function changeFilterYear(delta) {
  state.filterYear += delta;
  updateMonthBar();
  renderList();
}

function setSortMode(mode) {
  state.sortMode = mode;
  try { localStorage.setItem('mv-sort', mode); } catch (e) { /* ignore */ }
  renderList();
}

function getFilteredDestinations() {
  return filterDestinations(state.destinations, {
    statuses: state.activeFilters,
    month: state.currentMonth,
    monthMode: state.monthMode,
    year: state.filterYear,
    query: state.searchQuery,
    bestMonthsText: bestMonthsLabel
  });
}

// ============================================
// MONTH BAR
// ============================================

function renderMonthBar() {
  const bar = document.getElementById('month-bar');
  bar.innerHTML = getMonthNames().map((name, i) =>
    `<button class="month-btn" data-month="${i}" onclick="setMonthFilter(${i})" aria-pressed="false">${name}</button>`
  ).join('');
  updateMonthBar();
}

function updateMonthBar() {
  const now = new Date();
  const tripsMode = state.monthMode === 'trips';

  document.querySelectorAll('.month-controls .segment').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === state.monthMode);
  });
  document.getElementById('month-year').classList.toggle('hidden', !tripsMode);
  document.getElementById('filter-year').textContent = state.filterYear;

  // Months with something to show get a stronger color
  const highlighted = tripsMode
    ? monthsWithTrips(state.destinations, state.filterYear)
    : new Set(state.destinations.flatMap(d => parseBestMonths(d.bestMonths)));

  document.querySelectorAll('.month-btn').forEach(btn => {
    const m = parseInt(btn.dataset.month);
    const active = m === state.currentMonth;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active);
    btn.classList.toggle('has-trip', highlighted.has(m));
    btn.classList.toggle('current', m === now.getMonth() && (!tripsMode || state.filterYear === now.getFullYear()));
  });
}

// ============================================
// NEXT TRIP BANNER
// ============================================

function renderNextTrip() {
  const el = document.getElementById('next-trip');
  const next = getNextTrip(state.destinations, todayStr());
  if (!next) { el.innerHTML = ''; return; }

  const { dest, trip } = next;
  let when;
  if (next.ongoing) when = t('ongoingDay', { n: next.dayIndex, total: next.totalDays });
  else if (next.daysUntil === 1) when = t('tomorrow');
  else when = t('inDays', { n: next.daysUntil });

  const dates = formatDateShort(trip.start) + (trip.end && trip.end !== trip.start ? ' → ' + formatDateShort(trip.end) : '');
  const photo = dest.photoUrl ? `style="background-image: url('${cssUrl(unsplashUrl(dest.photoUrl, 'thumb'))}')"` : '';

  el.innerHTML = `
    <div class="next-trip ${next.ongoing ? 'ongoing' : ''}" role="button" tabindex="0"
         onclick="showDetail('${dest.id}')" onkeydown="onActivateKey(event, '${dest.id}')">
      <div class="dest-photo" ${photo}></div>
      <div class="next-trip-info">
        <div class="next-trip-label">${next.ongoing ? t('nowTravelling') : t('nextTrip')}</div>
        <div class="next-trip-name">${getFlag(dest.countryCode)} ${escapeHtml(dest.name)}</div>
        <div class="next-trip-dates">${dates}</div>
      </div>
      <div class="next-trip-when">${when}</div>
    </div>
  `;
}

// ============================================
// LIST RENDERING
// ============================================

function renderList() {
  renderNextTrip();
  const container = document.getElementById('list-content');
  const filtered = getFilteredDestinations();

  if (filtered.length === 0) {
    let message = t('noResults');
    if (state.destinations.length === 0) message = t('noDestinations');
    else if (state.currentMonth !== null && state.monthMode === 'best') {
      message = t('noBestMonth', { month: getMonthFull()[state.currentMonth].toLowerCase() });
    }
    container.innerHTML = `
      <div class="list-empty">
        <div class="list-empty-icon">🌍</div>
        <p>${message}</p>
      </div>
    `;
    return;
  }

  const countryCt = new Set(filtered.map(d => d.country || t('otherCountry'))).size;
  const doneCt = filtered.filter(d => d.status === 'done').length;
  const plannedCt = filtered.filter(d => d.status === 'planned').length;

  let html = `
    <div class="list-toolbar">
      <div class="list-stats">
        <span><strong>${filtered.length}</strong> ${filtered.length > 1 ? t('destinations') : t('destination')}</span>
        <span><strong>${countryCt}</strong> ${t('countries')}</span>
        <span><strong>${doneCt}</strong> ${doneCt > 1 ? t('visitedP') : t('visited')}</span>
        <span><strong>${plannedCt}</strong> ${plannedCt > 1 ? t('plannedP') : t('planned')}</span>
      </div>
      <div class="segmented small" role="group" aria-label="${t('sortLabel')}">
        <button class="segment ${state.sortMode === 'country' ? 'active' : ''}" onclick="setSortMode('country')">${t('sortCountry')}</button>
        <button class="segment ${state.sortMode === 'date' ? 'active' : ''}" onclick="setSortMode('date')">${t('sortDate')}</button>
      </div>
    </div>
  `;

  if (state.sortMode === 'date') {
    const groups = groupByDate(filtered, todayStr(), currentLang);
    [['upcoming', t('sectionUpcoming')], ['past', t('sectionPast')], ['undated', t('sectionUndated')]]
      .forEach(([key, label]) => {
        if (groups[key].length === 0) return;
        html += `<div class="country-sep">${label}</div>`;
        groups[key].forEach(d => { html += renderDestRow(d, true); });
      });
  } else {
    // Group by country, alphabetically
    const countries = {};
    filtered.forEach(d => {
      const c = d.country || t('otherCountry');
      if (!countries[c]) countries[c] = { code: d.countryCode, dests: [] };
      countries[c].dests.push(d);
    });
    Object.entries(countries)
      .sort((a, b) => a[0].localeCompare(b[0], currentLang))
      .forEach(([country, data]) => {
        html += `<div class="country-sep">${getFlag(data.code)} ${escapeHtml(country)}</div>`;
        data.dests
          .sort((a, b) => (a.name || '').localeCompare(b.name || '', currentLang))
          .forEach(d => { html += renderDestRow(d, false); });
      });
  }

  container.innerHTML = html;
}

function renderDestRow(d, showFlag) {
  const status = d.status || 'idea';

  const photoStyle = d.photoUrl
    ? `background-image: url('${cssUrl(unsplashUrl(d.photoUrl, 'thumb'))}')`
    : '';

  // Subtitle: tags + travel time + best months
  const parts = [];
  if (d.tags && d.tags.length > 0) parts.push(d.tags.join(' · '));
  if (d.flightTime) parts.push('✈ ' + d.flightTime);
  const best = bestMonthsLabel(d);
  if (best) parts.push('☀ ' + best);
  const sub = parts.join('  ·  ');

  // Date info: next trip, otherwise the latest one
  let dateHtml = '';
  const today = todayStr();
  if (d.trips && d.trips.length > 0) {
    const futureTrips = d.trips.filter(trip => (trip.end || trip.start) >= today).sort((a, b) => a.start.localeCompare(b.start));
    const pastTrips = d.trips.filter(trip => (trip.end || trip.start) < today).sort((a, b) => b.start.localeCompare(a.start));
    const trip = futureTrips[0] || pastTrips[0];
    const dateClass = futureTrips[0] ? 'planned' : 'done';
    const dateText = formatDateShort(trip.start) + (trip.end && trip.end !== trip.start ? ' → ' + formatDateShort(trip.end) : '');
    const year = trip.start.slice(0, 4) !== today.slice(0, 4) ? ` · ${trip.start.slice(0, 4)}` : '';
    const days = getDaysBetween(trip.start, trip.end || trip.start);
    dateHtml = `
      <div class="dest-date ${dateClass}">${dateText}</div>
      <div class="dest-meta">${days}${t('dayShort')}${year}</div>
    `;
  } else {
    const labels = { done: t('statusLabelDone'), planned: t('statusLabelPlanned'), idea: t('statusLabelIdea') };
    dateHtml = `<div class="dest-date none">${labels[status] || t('statusLabelIdea')}</div>`;
  }

  return `
    <div class="dest-row ${status}" role="button" tabindex="0" onclick="showDetail('${d.id}')" onkeydown="onActivateKey(event, '${d.id}')">
      <div class="dest-photo" ${photoStyle ? `style="${photoStyle}"` : ''}></div>
      <div class="dest-info">
        <div class="dest-name">${showFlag ? getFlag(d.countryCode) + ' ' : ''}${escapeHtml(d.name)}</div>
        ${sub ? `<div class="dest-sub">${escapeHtml(sub)}</div>` : ''}
      </div>
      <div class="dest-right">${dateHtml}</div>
    </div>
  `;
}

// ============================================
// STATS
// ============================================

function renderStats() {
  const container = document.getElementById('stats-content');
  if (state.destinations.length === 0) {
    container.innerHTML = `<div class="list-empty"><div class="list-empty-icon">📊</div><p>${t('noDestinations')}</p></div>`;
    return;
  }

  const s = computeStats(state.destinations, todayStr());
  const currentYear = new Date().getFullYear();

  const tile = (value, label, sub = '') => `
    <div class="stat-tile">
      <div class="stat-value">${value}</div>
      <div class="stat-label">${label}</div>
      ${sub ? `<div class="stat-sub">${sub}</div>` : ''}
    </div>
  `;

  // Days per year: from the first year with a trip (8 years max) to the current one
  const years = Object.keys(s.daysPerYear).map(Number);
  const firstYear = Math.max(Math.min(currentYear, ...years), currentYear - 7);
  const rows = [];
  for (let y = firstYear; y <= currentYear; y++) rows.push([y, s.daysPerYear[y] || 0]);
  const maxDays = Math.max(1, ...rows.map(([, d]) => d));
  const barsHtml = rows.map(([year, days]) => `
    <div class="stat-bar-row">
      <span class="stat-bar-year">${year}</span>
      <div class="stat-bar-track"><div class="stat-bar" style="width:${(days / maxDays * 100).toFixed(1)}%"></div></div>
      <span class="stat-bar-value">${days} ${days > 1 ? t('days') : t('day')}</span>
    </div>
  `).join('');

  const flags = codes => codes.length
    ? `<div class="stat-flags">${codes.map(c => `<span title="${escapeHtml(c.toUpperCase())}">${getFlag(c)}</span>`).join('')}</div>`
    : `<p class="stat-empty">—</p>`;

  const nbCountries = s.visitedCountries.length;
  container.innerHTML = `
    <div class="stats-grid">
      ${tile(nbCountries, nbCountries > 1 ? t('statCountries') : t('statCountry'), t('statWorld', { pct: s.worldPercent.toLocaleString(getLocale()) }))}
      ${tile(s.visitedCount, s.visitedCount > 1 ? t('statVisitedP') : t('statVisited'), t('statOf', { n: s.total }))}
      ${tile(s.daysThisYear, t('statDaysYear', { year: currentYear }), s.plannedDaysThisYear ? t('statDaysPlanned', { n: s.plannedDaysThisYear }) : '')}
      ${tile(s.upcomingTrips, s.upcomingTrips > 1 ? t('statUpcomingP') : t('statUpcoming'), t('statIdeas', { n: s.ideaCount }))}
    </div>

    <h3 class="stats-title">${t('statDaysPerYear')}</h3>
    <div class="stat-bars">${barsHtml}</div>

    <h3 class="stats-title">${t('statVisitedCountries')}</h3>
    ${flags(s.visitedCountries)}

    <h3 class="stats-title">${t('statWishCountries')}</h3>
    ${flags(s.wishCountries)}
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
             role="button" tabindex="0"
             onclick="showDetail('${t.dest.id}')"
             onkeydown="onActivateKey(event, '${t.dest.id}')"
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
        <div class="planning-month-label${isCurrent ? ' current' : ''}">${getMonthNames()[m]}</div>
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
  state._editGeoName = null;

  document.getElementById('modal-title').textContent = t('newDest');
  document.getElementById('dest-name').value = '';
  document.getElementById('dest-country').value = '';
  document.getElementById('dest-notes').value = '';
  document.getElementById('dest-tags').value = '';
  document.getElementById('dest-flight').value = '';
  state._editBestMonths = new Set();
  renderBestMonthChips();
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
  state._editGeoName = dest.name || '';

  document.getElementById('modal-title').textContent = t('editTitle');
  document.getElementById('dest-name').value = dest.name || '';
  document.getElementById('dest-country').value = dest.country || '';
  document.getElementById('dest-notes').value = dest.notes || '';
  document.getElementById('dest-tags').value = (dest.tags || []).join(', ');
  document.getElementById('dest-flight').value = dest.flightTime || '';
  state._editBestMonths = new Set(parseBestMonths(dest.bestMonths));
  renderBestMonthChips();
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
  state._editGeoName = null;
}

function setStatus(status) {
  state.selectedStatus = status;
  document.querySelectorAll('.status-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === status);
  });
}

function renderBestMonthChips() {
  const el = document.getElementById('dest-best-months');
  el.innerHTML = getMonthNames().map((name, i) => {
    const on = state._editBestMonths.has(i);
    return `<button type="button" class="month-chip${on ? ' active' : ''}" aria-pressed="${on}" onclick="toggleBestMonth(${i})">${name}</button>`;
  }).join('');
}

function toggleBestMonth(month) {
  if (state._editBestMonths.has(month)) state._editBestMonths.delete(month);
  else state._editBestMonths.add(month);
  renderBestMonthChips();
}

function addDateRow(startVal, endVal) {
  const container = document.getElementById('date-rows');
  const row = document.createElement('div');
  row.className = 'date-row';
  row.innerHTML = `
    <input type="date" class="date-start" value="${startVal || ''}">
    <span style="color:var(--text-muted);font-size:0.7rem;">→</span>
    <input type="date" class="date-end" value="${endVal || ''}">
    <button type="button" class="date-row-remove" onclick="this.parentElement.remove()" aria-label="${t('removeDates')}">✕</button>
  `;
  container.appendChild(row);
}

async function saveDestination() {
  const name = document.getElementById('dest-name').value.trim();
  if (!name) return showToast(t('toastEnterName'));

  // Coordinates belong to a previous name: discard them and geocode again
  if (state._editGeoName !== null && name !== state._editGeoName) {
    state._editLat = null;
    state._editLng = null;
    state._editCountryCode = null;
    document.getElementById('dest-country').value = '';
  }

  let lat = state._editLat || 0;
  let lng = state._editLng || 0;
  let country = document.getElementById('dest-country').value.trim();
  let countryCode = state._editCountryCode || '';
  let photoUrl = document.getElementById('dest-photo').value.trim() || state._editPhotoUrl || '';
  if (photoUrl && !/^https?:\/\//i.test(photoUrl)) photoUrl = '';

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
    bestMonths: [...state._editBestMonths].sort((a, b) => a - b),
    photoUrl,
    trips
  };

  const isEdit = !!state.editingId;
  // Firestore resolves only once the server acknowledges the write (never while
  // offline); the snapshot listener already shows the local change, so don't wait.
  saveDest(dest).catch(err => {
    console.warn('Save error:', err);
    showToast(t('toastSaveError'));
  });
  closeModal();
  showToast(isEdit ? t('toastModified') : t('toastAdded'));
}

function deleteDestination() {
  if (!state.editingId) return;
  const dest = state.destinations.find(d => d.id === state.editingId);
  const name = dest ? dest.name : '';
  const id = state.editingId;

  showConfirm(t('confirmDelete', { name }), () => {
    deleteDest(id).catch(err => {
      console.warn('Delete error:', err);
      showToast(t('toastDeleteError'));
    });
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

  const chosenName = parts[0] || r.display_name;
  document.getElementById('dest-name').value = chosenName;
  document.getElementById('dest-country').value = parts[parts.length - 1] || '';
  state._editLat = parseFloat(r.lat);
  state._editLng = parseFloat(r.lon);
  state._editCountryCode = null;
  state._editGeoName = chosenName;

  fetchCountryCode(r.lat, r.lon, chosenName);
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

async function fetchCountryCode(lat, lon, forName) {
  try {
    const res = await fetch(`${NOMINATIM_URL}/reverse?format=json&lat=${lat}&lon=${lon}&zoom=3&accept-language=fr`);
    const data = await res.json();
    if (state._editGeoName !== forName) return;
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
    preview.style.backgroundImage = `url('${cssUrl(url)}')`;
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
    ? `url('${cssUrl(unsplashUrl(dest.photoUrl, 'detail'))}')`
    : 'none';

  // Body content
  const status = dest.status || 'idea';
  const statusLabels = { done: t('statusDone'), planned: t('statusPlanned'), idea: t('statusIdea') };

  const tagsHtml = (dest.tags || []).map(tag =>
    `<span class="detail-tag">${escapeHtml(tag)}</span>`
  ).join('');

  let infoRows = '';
  if (dest.flightTime) {
    infoRows += `<div class="detail-info-row"><span class="detail-info-label">${t('detailTravel')}</span><span class="detail-info-value">${escapeHtml(dest.flightTime)}</span></div>`;
  }
  const best = bestMonthsLabel(dest);
  if (best) {
    infoRows += `<div class="detail-info-row"><span class="detail-info-label">${t('detailBestMonths')}</span><span class="detail-info-value">${escapeHtml(best)}</span></div>`;
  }

  let datesHtml = '';
  if (dest.trips && dest.trips.length > 0) {
    const today = todayStr();
    datesHtml = dest.trips.map(trip => {
      const isFuture = trip.start >= today;
      const start = formatDateLong(trip.start);
      const end = trip.end && trip.end !== trip.start ? ' → ' + formatDateLong(trip.end) : '';
      const days = getDaysBetween(trip.start, trip.end || trip.start);
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

// Enter / Space on a focusable row opens its detail
function onActivateKey(event, id) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showDetail(id);
  }
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
  renderStats();
  updateMonthBar();
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

// Dates, filtering, best months, next trip and stats helpers live in logic.js

function bestMonthsLabel(dest) {
  return formatBestMonths(dest.bestMonths, getMonthNames(), t('allYear'));
}

// Percent-encode characters that could break out of url('...') or a style attribute
function cssUrl(url) {
  return String(url || '').replace(/["'()\\\s<>]/g, c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'));
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
window.resetPassword = resetPassword;
window.logout = logout;
window.toggleUserMenu = toggleUserMenu;
window.switchView = switchView;
window.openAddModal = openAddModal;
window.closeModal = closeModal;
window.toggleFilter = toggleFilter;
window.onSearch = onSearch;
window.setMonthFilter = setMonthFilter;
window.setMonthMode = setMonthMode;
window.changeFilterYear = changeFilterYear;
window.setSortMode = setSortMode;
window.toggleBestMonth = toggleBestMonth;
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
window.onActivateKey = onActivateKey;
window.closeDetail = closeDetail;
window.editFromDetail = editFromDetail;
window.confirmOk = confirmOk;
window.confirmCancel = confirmCancel;
window.toggleLanguage = toggleLanguage;
