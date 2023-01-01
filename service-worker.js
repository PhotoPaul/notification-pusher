self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/notification-pusher/',
          '/notification-pusher/index.html',
          '/notification-pusher/manifest.webmanifest',
          '/notification-pusher/192.png',
          '/notification-pusher/512.png'
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
  
  self.addEventListener('sync', event => {
    if (event.tag === 'my-sync-tag') {
      event.waitUntil(
        // Perform sync logic here
      );
    }
  });
  
  self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
      // Perform notification click logic here
    );
  });
  