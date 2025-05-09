self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('wedding-site-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/images/cover.jpg', // Add more assets as needed
          '/images/icon-192x192.png',
          '/images/icon-512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  