const CACHE_NAME = 'olympus-v18';
// Relative to the service worker's scope, so it works at /workout/ or any other path.
const ASSETS = [
  './',
  'index.html',
  'styles.css',
  'programs.js',
  'core_profile.js',
  'core.js',
  'tracker.js',
  'app.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png'
].map(p => new URL(p, self.registration.scope).href);

// Cache core assets on install
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

// Clean old caches on activate
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// Network-first: try network, fall back to cache. Only successful responses are cached,
// and lookups ignore the ?v= cache-busting query so offline loads still find the files.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true })
        .then(hit => hit || (e.request.mode === 'navigate' ? caches.match(ASSETS[0]) : undefined)))
  );
});
