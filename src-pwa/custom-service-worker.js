/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
self.addEventListener('install', function (event) {
  self.skipWaiting()
  self.clients.claim()
})

self.addEventListener('fetch', function (event) {
  // console.log(event.request)
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          console.log('[CSW] fetch from cache : ' + event.request.url)
          return response
        }

        console.log('[CSW] fetch from internet : ' + event.request.url)
        return fetch(event.request).then(
          function (response) {
            if (!response || response.status !== 200) {
              console.log('[CSW] response not valid : ' + event.request.url)
              return response
            }

            var responseToCache = response.clone()

            console.log('[CSW] try caching : ' + event.request.url)
            caches.open('livelymom-sw')
              .then(function (cache) {
                cache.put(event.request, responseToCache)
                console.log('[CSW] caching : ' + event.request.url)
              })

            return response
          }
        )
      })
  )
})