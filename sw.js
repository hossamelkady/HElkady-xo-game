const C='HElkady-xo-game-v1';const A=["./", "index.html", "manifest.json", "icon.svg", "style.css", "logic.js", "app.js"];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
