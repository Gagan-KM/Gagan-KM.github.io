'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d4740ee8e42807c718e54ffb859f9f19",
"assets/AssetManifest.bin.json": "6cef68735a18090b8ea83b97953a4d8e",
"assets/AssetManifest.json": "5bef0a396131577ff6db19d5bd30c62c",
"assets/assets/line.png": "50c295964ed314248e60a88a51f33eee",
"assets/assets/lleft.png": "544a834902df4faa60240b87bb3cd4c4",
"assets/assets/lright.png": "43d0ae737b59d92884ad02e07356d40b",
"assets/assets/na.png": "6ab30470a8c58fac0b1ae4c1af3ea49f",
"assets/assets/profilePic.jpg": "312d680244e2f77da18f274700e762d5",
"assets/assets/square.png": "32c79b2828f4043a32542bb303d5b853",
"assets/assets/svg/appLogo.png": "7df7d2690ea72b34c624b25dfaec2644",
"assets/assets/svg/externalLink.svg": "1790fffa6c0b0eb87d7e90470cc80b86",
"assets/assets/svg/folder.svg": "46a545a4289ba140f5b90613ceccd879",
"assets/assets/svg/github.svg": "c0e94df08ad3d521af33fa4ad69e2162",
"assets/assets/svg/instagram.svg": "0f51da178eff1d87826480d0e5db970b",
"assets/assets/svg/linkedIn.svg": "c408ef7fbd143d9052cd195819076f90",
"assets/assets/svg/logo.jpg": "d468657306150a8a93a765a6f815fecb",
"assets/assets/svg/profilePic.png": "c9e636df77cc1f34a713d01294cd4b9d",
"assets/assets/svg/profilepicture.jpg": "312d680244e2f77da18f274700e762d5",
"assets/assets/svg/stackoverflow.svg": "ec181e798c8b9fe73dcf64d47926667a",
"assets/assets/svg/tetris.svg": "aed2bed354a99caef2018d99af16b1d5",
"assets/assets/svg/tetrisLogo.svg": "331417e7b94c0fe0633ee1a44e8ea92e",
"assets/assets/svg/twitter.svg": "d278ea034ebbe0c01e76739232fa2a3e",
"assets/FontManifest.json": "59f84c52c2aa8d0981f214455827673e",
"assets/fonts/MaterialIcons-Regular.otf": "645e32c060026bbaeee583021b4576a5",
"assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/NOTICES": "8a51f3c9b0296c19e54fc042128ea4e7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d7b92395a6ec502e8fa77a8c45a10671",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4984d35a63a1845b6baf5e2bb914bb16",
"icons/android-icon-144x144.png": "b5a48af070f5300f4d243ea46ec51070",
"icons/android-icon-192x192.png": "eef6818ccc76007bc19889123ea109ff",
"icons/android-icon-36x36.png": "97fddde43d95dcb0f7198df0290f0ef8",
"icons/android-icon-48x48.png": "c9fb200a24a89d792f90e8b261cd8ca3",
"icons/android-icon-72x72.png": "6da68852f7028aa48b8b70ba55dfefde",
"icons/android-icon-96x96.png": "c579f8f3e23abd9f5e6c1ef7f7cd9bb9",
"icons/apple-icon-114x114.png": "f7e0b581da8ab30e9c3f72777af2cd1c",
"icons/apple-icon-120x120.png": "0524a5a0988e6b5d1da93524b8367897",
"icons/apple-icon-144x144.png": "b5a48af070f5300f4d243ea46ec51070",
"icons/apple-icon-152x152.png": "1e806f71360050ac8da71d354133ad71",
"icons/apple-icon-180x180.png": "3322f05ad4f76dc18fa67c9ef46e2cd3",
"icons/apple-icon-57x57.png": "6f4016850f9f244d1194e513a5b94d95",
"icons/apple-icon-60x60.png": "21c0c9df904a52563bb2a4d7404336ba",
"icons/apple-icon-72x72.png": "6da68852f7028aa48b8b70ba55dfefde",
"icons/apple-icon-76x76.png": "415af589f62f1b8ca78773d9256f63b6",
"icons/apple-icon-precomposed.png": "1cc667e26ddc791e2838eeb673463166",
"icons/apple-icon.png": "1cc667e26ddc791e2838eeb673463166",
"icons/favicon-16x16.png": "d7b92395a6ec502e8fa77a8c45a10671",
"icons/favicon-32x32.png": "5be85aa48085c43bf5563ac88413a8cb",
"icons/favicon-96x96.png": "4af6da443a456293f82d0de48a2315ca",
"icons/favicon.ico": "29fce6af89ea4a496397a61fffac1797",
"icons/icons8-j-key-stickers-16.png": "408617023566b59726fdc7098e1a8d6e",
"icons/icons8-j-key-stickers-32.png": "891b9524f208ba2296f3f3debc4e21fb",
"icons/icons8-j-key-stickers-96.png": "5deca21cdd01d18c79005b3a24bf4b5f",
"icons/ms-icon-144x144.png": "41287e8f327e450be735855b1495e94f",
"icons/ms-icon-150x150.png": "dff72e05bb35dfd56b263b0eef42f20f",
"icons/ms-icon-310x310.png": "53e7602ba9391a60a30d540a41aa83c0",
"icons/ms-icon-70x70.png": "a3342fe44afab33b0fd78895a2403266",
"index.html": "0fc9aa669b479c9f007a9b04e1a29ff8",
"/": "0fc9aa669b479c9f007a9b04e1a29ff8",
"main.dart.js": "6676008bb8b659683d82a72556404bcd",
"manifest.json": "ee139c6bf19ec9d8cc29081480ad5fc4",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
