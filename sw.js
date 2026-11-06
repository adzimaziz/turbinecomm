// Paper 1 deck - offline cache. Rebuilt by build_pwa.py; the version changes with the deck.
const CACHE = 'paper1-1eeddbc090be';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('paper1-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function keep(req, res) {
  if (res.ok && new URL(req.url).origin === location.origin) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}

// The deck page: network first, so an online open always shows the latest push;
// no network (or slower than 4 s at the venue) falls back to the cached copy.
function page(req) {
  const cached = () => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html'));
  const net = fetch(req).then((res) => keep(req, res));
  const slow = new Promise((resolve) => setTimeout(resolve, 4000)).then(cached);
  return Promise.race([net, slow]).then((res) => res || net).catch(() => cached());
}

// everything else (manifest, icons, other files): cache first
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (e.request.mode === 'navigate') { e.respondWith(page(e.request)); return; }
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => keep(e.request, res)))
  );
});
