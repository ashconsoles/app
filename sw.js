self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

/* ⚠️ DO NOT CACHE ANYTHING */
self.addEventListener("fetch", () => {});
