self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return new Response("నెట్‌వర్క్ కనెక్షన్ ఇబ్బందిగా ఉంది, కానీ సాఫ్ట్‌వేర్ సురక్షితం.");
    })
  );
});
