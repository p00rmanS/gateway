/* Offline support so the guide keeps working on weak restaurant Wi-Fi.
   - The page itself: network first, falling back to the cached copy when offline.
   - Everything else (CSS, JS, flags, icons, fonts, QR library): served from cache, refreshed in the background.
   When you deploy changes: raise the ?v= number in index.html, and set VERSION here to the same number. */
const VERSION = "v35";
const V = VERSION.slice(1); // must match the ?v= number in index.html
const CACHE = `guest-guide-${VERSION}`;

// Read the language list from the translations file, so new languages are cached automatically.
importScripts(`js/i18n.js?v=${V}`);
const FLAGS = Object.keys(self.I18N).map((k) => `assets/flags/${k}.svg`);
const PRECACHE = [
  "./",
  "index.html",
  `css/styles.css?v=${V}`,
  `js/boot.js?v=${V}`,
  `js/i18n.js?v=${V}`,
  `js/icons.js?v=${V}`,
  `js/app.js?v=${V}`,
  "manifest.webmanifest",
  "assets/icon.svg",
  "assets/icon-512.png",
  "assets/tripadvisor.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE)
        // Flags one by one, so a language without a flag image can't break the install
        .then(() => Promise.all(FLAGS.map((f) => cache.add(f).catch(() => {})))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("guest-guide-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  // Pages: try the network so updates show up, use the cache when offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put("index.html", copy));
          return res;
        })
        .catch(() => caches.match("index.html"))
    );
    return;
  }

  // Assets: cache first, refresh in the background (stale-while-revalidate).
  const url = new URL(req.url);
  if (url.origin === location.origin && url.pathname.endsWith("/announcement.json")) return; // always fresh from the network
  const cacheable = url.origin === location.origin
    || url.hostname === "fonts.googleapis.com"
    || url.hostname === "fonts.gstatic.com"
    || url.hostname === "cdnjs.cloudflare.com";
  if (!cacheable) return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req);
      const fresh = fetch(req)
        .then((res) => {
          if (res.ok || res.type === "opaque") cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || fresh;
    })
  );
});
