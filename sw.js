const CACHE_NAME = 'mes-voyages-v18';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.origin === 'https://firestore.googleapis.com' ||
      url.origin === 'https://www.googleapis.com' ||
      url.origin === 'https://identitytoolkit.googleapis.com' ||
      url.origin === 'https://securetoken.googleapis.com' ||
      url.hostname === 'nominatim.openstreetmap.org' ||
      url.hostname.endsWith('.wikipedia.org') ||
      url.pathname.endsWith('manifest.json')) {
    return;
  }

  if (event.request.method !== 'GET') return;

  // App files: network first so updates arrive without bumping CACHE_NAME,
  // cache as offline fallback
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() =>
        caches.match(event.request).then(cached => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') return caches.match('./index.html');
        })
      )
    );
    return;
  }

  // Third-party libraries and tiles: cache first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Scripts/styles/fonts loaded by <script>/<link> come back opaque (no CORS):
        // cache them too so Firebase, Leaflet and topojson work offline
        const cacheable = response.ok ||
          (response.type === 'opaque' && ['script', 'style', 'font'].includes(event.request.destination));
        if (cacheable) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
