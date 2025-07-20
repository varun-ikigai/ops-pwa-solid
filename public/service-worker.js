self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
      caches.open('solid-pwa-v1').then(cache => cache.addAll([
        '/',
        '/index.html',
        // Add more assets as needed
      ]))
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });