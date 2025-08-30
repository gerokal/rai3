// Service Worker básico para PWA: cachea archivos estáticos y permite funcionamiento offline
const CACHE_NAME = 'rai3-pwa-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/assets/logo_rai.png',
  // Agrega aquí más rutas si es necesario
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
