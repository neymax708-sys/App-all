self.addEventListener('install', (e) => {
  console.log('Elite Docs Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});

/* MONETAG */

self.options = {
  "domain": "3nbf4.com",
  "zoneId": 11001498
};

self.lary = "";

importScripts('https://3nbf4.com/act/files/service-worker.min.js?r=sw');
