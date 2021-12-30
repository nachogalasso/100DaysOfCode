const CACHE_NAME = "v1_cache_Movie_finder";
const urlsToCache = [
    "./",
    "./?umt_source=web_app_manifest",
    "/docs/vueJS/07_movie_api/assets/icons/16px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/32px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/48px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/64px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/128px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/144px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/192px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/256px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/512px_icon.png",
    "/docs/vueJS/07_movie_api/assets/icons/1024px_icon.png",
    "https://unpkg.com/vue@next",
    "/docs/vueJS/07_movie_api/js/main.js",
    "/docs/vueJS/07_movie_api/js/mountapp.js",
    "/docs/vueJS/07_movie_api/style.css",
    "/docs/vueJS/07_movie_api/manifest.json",
    "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap"
]

// Ahora vamos a tomar los eventos, conviene hacerlo con JS nativo en vez de utilizar VUE. Esto es para que puedo operar el serviceWorker. Esto se compone de 3 pasos: 1.install, 2.activate y 3.fetch.

// Aquí se instala
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsToCache).then(
                () => skipWaiting()
            ).catch(
                err => console.log(err)
            )
        )
    )
})

// Ahora se comprueba y verifica el estado del cache (recordar que con self estamos referenciando al propio SW)
self.addEventListener('activate', e => {
    const cacheWhiteList = [CACHE_NAME]

    e.waitUntil(
        caches.keys().then(
            cacheNames => {
                return Promise.all(
                    cacheNames.map(
                        cacheName => {
                            if(cacheWhiteList.indexOf(cacheName) === -1) {
                                return cache.delete(cacheName)
                            }
                        }
                    )
                )
            }
        ).then(
            () => clients.claim()
        )
    )
})

// Ahora con fetch podemos descargar toda la info
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(
            res => {
                if(res) {
                    return res
                }

                return fetch(e.request)

            }
        ) // .catch()
    )
})