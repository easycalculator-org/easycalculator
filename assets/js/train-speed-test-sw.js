// install app 
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('train-speed-test-cache').then(function (cache) {
            return cache.addAll([
                '/train-speed-test/',
                '/assets/icons/icon-192.png',
                '/assets/icons/icon-512.png',
                // add other required assets here
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});