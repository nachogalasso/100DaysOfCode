const CACHE_NAME = "v1_cache_contador_app_vue";
const urlsToCache = [
    "./",
    "./assets/img/16px_icon.png",
    "./assets/img/32px_icon.png",
    "./assets/img/64px_icon.png",
    "./assets/img/128px_icon.png",
    "./assets/img/256px_icon.png",
    "./assets/img/512px_icon.png",
    "./assets/img/1024px_icon.png",
    "https://unpkg.com/vue@next",
    "./js/main.js",
    "./js/mountApp.js",
    "./css/style.css",
    "100DaysOfCode/normalize.css"
]

/* const urlsToCache = [
    // cacheamos los iconos
    "/100DaysOfCode/vueJS/02_contador/assets/img/48px_icon.png",
    "/100DaysOfCode/vueJS/02_contador/assets/img/16px_icon.png",
    "/100DaysOfCode/vueJS/02_contador/assets/img/32px_icon.png",
    "/100DaysOfCode/vueJS/02_contador/assets/img/64px_icon.png",
    "/100DaysOfCode/vueJS/02_contador/assets/img/128px_icon.png",
    "/100DaysOfCode/vueJS/02_contador/assets/img/256px_icon.png",
    "/100DaysOfCode/vueJS/02_contador/assets/img/512px_icon.png",
    "/100DaysOfCode/vueJS/02_contador/assets/img/1024px_icon.png",
    // cacheamos los scripts, incluido el enlace de VUE
    "/100DaysOfCode/100DaysOfCode/vueJS/02_contador/main.js",
    "/100DaysOfCode/100DaysOfCode/vueJS/02_contador/js/mountApp.js",
    // Podemos cachear la hoja de estilo
    "/100DaysOfCode/100DaysOfCode/vueJS/02_contador/css/style.css",
    // Podemos cachear las fuentes o el normalize
    "/100DaysOfCode/100DaysOfCode/normalize.css"
] */


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