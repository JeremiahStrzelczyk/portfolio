// Basic service worker with cache cleanup

// Install event - No cache management
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});

// Fetch event - Default network request handling
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});

// Activate event - Clear all existing caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
        console.log("Old caches cleared");
      })
  );
});

// const CACHE_NAME = 'v1';
// const urlsToCache = [
//   '/',                // Main entry point
//   '/index.html',      // HTML file
//   '/index.css',       // CSS file

//   // JavaScript files - Add the compiled JS files after build, e.g., main.chunk.js
//   // You may need to adjust these paths based on your build output
//   '/static/js/main.chunk.js',
//   '/static/js/0.chunk.js',

//   // Images and icons
//   '/favicon.ico',
//   '/logo192.png',
//   '/logo512.png',
//   '/manifest.json',

//   // Images in src/static/images
//   '/static/images/accommodations.webp',
//   '/static/images/classroom_welcome.webp',
//   '/static/images/communication.webp',
//   '/static/images/diagnostic_assessment.webp',
//   '/static/images/formative_assessment.webp',
//   '/static/images/instruction_guidance.webp',
//   '/static/images/self_reflection.webp',
//   '/static/images/standards_alignment.webp',
//   '/static/images/state_assessment.webp',
//   '/static/images/summative_assessment.webp',
// ];

// // Install event - Cache all specified files
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache) => {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// // Fetch event - Serve from cache, fallback to network
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         return response || fetch(event.request);
//       })
//   );
// });

// // Activate event - Clean up old caches
// self.addEventListener('activate', (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// // Listen for messages from the app (e.g., skipWaiting)
// self.addEventListener('message', (event) => {
//   if (event.data.action === 'skipWaiting') {
//     self.skipWaiting();
//   }
// });

// LAST VERSION THAT WAS SUPPOSED TO WORK
// const CACHE_NAME = "jeremiah-strzelczyk-newsletter-v3.01"; // Increment this version with each deployment
// const urlsToCache = [
//   "/",
//   "/manifest.json",
//   // Add any other static assets you want to cache
// ];

// // Install event - cache static assets
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
//   // Force the waiting service worker to become active immediately
//   self.skipWaiting();
// });

// // Activate event - clean up old caches and take control of the page
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches
//       .keys()
//       .then((cacheNames) => {
//         return Promise.all(
//           cacheNames.map((cacheName) => {
//             if (cacheName !== CACHE_NAME) {
//               console.log("Deleting old cache:", cacheName);
//               return caches.delete(cacheName);
//             }
//           })
//         );
//       })
//       .then(() => {
//         // Take control of the clients (open pages) immediately
//         return self.clients.claim();
//       })
//   );
// });

// // Fetch event - serve cached content when offline, otherwise fetch from network
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Return the cached response if found, otherwise fetch from network
//       return (
//         response ||
//         fetch(event.request).then((networkResponse) => {
//           // Check if we received a valid response
//           if (
//             !networkResponse ||
//             networkResponse.status !== 200 ||
//             networkResponse.type !== "basic"
//           ) {
//             return networkResponse;
//           }

//           // Clone the response for caching
//           const responseToCache = networkResponse.clone();

//           caches.open(CACHE_NAME).then((cache) => {
//             cache.put(event.request, responseToCache);
//           });

//           return networkResponse;
//         })
//       );
//     })
//   );
// });

/////////******************************************************* */
// ORIGINAL VERSION
// const CACHE_NAME = "jeremiah-strzelczyk-portfolio-v1";
// const urlsToCache = [
//   "/",
//   // "/index.html",
//   "/manifest.json",
//   // add any other assets you want to cache here
// ];

// this.addEventListener("install", (event) => {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Opened cache");
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// this.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });
