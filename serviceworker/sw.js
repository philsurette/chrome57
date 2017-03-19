console.log("RErunning new sw.js");
var CACHE_NAME = "demo-cache-v1";
var urlsToCache = [
    "/",
    "/main.js",
    "/index.html"
];
this.addEventListener('install', event => {
    console.log("sw install event "+event);
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        }
    ));
});

//Note: these events don't seem to be captured...
this.addEventListener('activate', event => {
    console.log("sw activated "+event);
});
this.addEventListener('fetch', event => {
    console.log("fetch event "+event);
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            console.log('fetched ${event.request}');
            if (response) {
                return response;
            }
            return fetch (event.request);
        })
    );
});
