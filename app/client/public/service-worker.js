const CACHE_NAME = "jeremiah-strzelczyk-portfolio-v1";
const urlsToCache = [
  "/",
  // "/index.html",
  "/manifest.json",
  // add any other assets you want to cache here
];

this.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
