const CACHE_NAME = "v1_cache_gradient_generator";
const urlsToCache = [
    "./",
    "./?umt_source=web_app_manifest",
    "/docs/vueJS/05_degradados/assets/img/icons/16px_icon.png",
    "/docs/vueJS/05_degradados/assets/img/icons/32px_icon.png",
    "/docs/vueJS/05_degradados/assets/img/icons/64px_icon.png",
    "/docs/vueJS/05_degradados/assets/img/icons/128px_icon.png",
    "/docs/vueJS/05_degradados/assets/img/icons/144px_icon.png",
    "/docs/vueJS/05_degradados/assets/img/icons/192px_icon.png",
    "/docs/vueJS/05_degradados/assets/img/icons/256px_icon.png",
    "/docs/vueJS/05_degradados/assets/img/icons/512px_icon.png",
    "/docs/vueJS/05_degradados/assets/img/icons/1024px_icon.png",
    "https://unpkg.com/vue@next",
    "/docs/vueJS/05_degradados/js/main.js",
    "/docs/vueJS/05_degradados/js/mountApp.js",
    "/docs/vueJS/05_degradados/style.css",
    "/docs/vueJS/05_degradados/manifest.json",
    "https://fonts.googleapis.com/css2?family=Oxygen:wght@300;700&display=swap"
]

// Ahora vamos a tomar los eventos, conviene hacerlo con JS nativo en vez de utilizar VUE. Esto es para que puedo operar el serviceWorker. Esto se compone de 3 pasos: 1.install, 2.activate y 3.fetch.

// Aquí instala
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

// Luego verifica y comprueba el estado del cache (con self. estamos referenciando al propio serviceWorker)
self.addEventListener('activate', e => {
    const cacheWhiteList = [CACHE_NAME]

    e.waitUntil(
        caches.keys().then(
            cacheNames => {
                return Promise.all(
                    cacheNames.map(
                        cacheName => {
                            if(cacheWhiteList.indexOf(cacheName) === -1) {
                                return caches.delete(cacheName)
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

// Ahora con fetch nos permite descargar todo
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(
            res => {
                if(res) {
                    return res
                }

                return fetch(e.request)

            }
        )
    )
})