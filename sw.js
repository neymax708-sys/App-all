self.addEventListener('install', (e) => {
  console.log('Elite Docs Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
