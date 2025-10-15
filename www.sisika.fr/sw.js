self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("assets.html").then((cache) => {
            return cache.addAll([
                "./css/bootstrap.min.css",
                "css/font-awesome.min.css",
                "css/style.css",
                "images/app.png",
                "script.html",
                "sw.js",
                "../cdn.jsdelivr.net/gh/amine-amazou/ns-js%401.0.1/dist/NS.min.js",
                "icon.png",
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return res || fetch(event.request);
        })
    );
});