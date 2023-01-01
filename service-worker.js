self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('v1').then(cache => {
        return cache.addAll([
          '/notification-pusher/',
          '/notification-pusher/index.html',
          '/notification-pusher/manifest.json',
          '/notification-pusher/css/style.css',
          '/notification-pusher/js/app.js',
          '/notification-pusher/images/icon.png'
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
  