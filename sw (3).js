self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mcd-photos-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './logo.png',
        './skip.png',
        './doordash.png',
        './uber.png',
        'https://cdn.tailwindcss.com',
        'https://unpkg.com/tesseract.js@4.0.2/dist/tesseract.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});