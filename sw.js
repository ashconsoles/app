self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

/* ✅ LET NETWORK WORK NORMALLY */
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
