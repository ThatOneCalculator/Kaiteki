'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "3d207c80129d9c56e05666c72b4a3ae2",
"version.json": "a9c38837cf7157343a06ce5c0e767510",
"icons/monochrome_icon_x72.png": "8f1ca974aadfea0b34b94e113cb04597",
"icons/monochrome_icon_x48.png": "8f1ca974aadfea0b34b94e113cb04597",
"icons/icon_x512.png": "ce0508068793596479df2fc4e338712c",
"icons/icon_x192.png": "3085b1c8c1d08ac482565de303a22738",
"icons/monochrome_icon_x32.png": "ca91d9b5fb6bc17b0eb67226e6b9a687",
"icons/monochrome_icon_x96.png": "8f1ca974aadfea0b34b94e113cb04597",
"icons/monochrome_icon_x16.png": "8f1ca974aadfea0b34b94e113cb04597",
"icons/maskable_icon_x48.png": "4bda4d5ecea5b43562372aad1ba2b530",
"icons/monochrome_icon_x24.png": "b6ac4820cf0b09d32d3a63ace7fee4e8",
"icons/maskable_icon_x128.png": "dd5ebd10a295714d02cdaafbb1f3882b",
"icons/maskable_icon_x384.png": "f065531615967472a29cc5bfdaf9c924",
"icons/maskable_icon.png": "4c58c4d4f9d4f294aa165e975157afdf",
"icons/monochrome_icon_x128.png": "aeb2bd1474a1ebe5f05ebf609b4f1dbb",
"icons/maskable_icon_x192.png": "49bee1a37609da4e2c39e4f441f36356",
"icons/maskable_icon_x72.png": "a821bc87035601e8badb96d7916f409d",
"icons/monochrome_icon_x64.png": "0478e59e704c1fe98f20da9b6e1dfac2",
"icons/maskable_icon_x96.png": "29a96f6de5782f2dd09d2830e6153085",
"icons/maskable_icon_x512.png": "e030d41438f8435de4e5f53e43759ae7",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"favicon.png": "4d0f0dd24e16e8faf0f281ac7a6184c7",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"index.html": "6f3865f8628edde6c91004bc8d290c1b",
"/": "6f3865f8628edde6c91004bc8d290c1b",
"main.dart.js": "562cc373a1f5cf98cd29af4871469bc4",
"splash/img/dark-4x.png": "e59018022124942f1935edbdd21e2d96",
"splash/img/dark-1x.png": "2a0e4d0435c38a7c60130bb09f40e6e4",
"splash/img/dark-2x.png": "31a9d7f328ae850a329d0bdb09d7865a",
"splash/img/light-1x.png": "2a0e4d0435c38a7c60130bb09f40e6e4",
"splash/img/light-3x.png": "4facfa005c287d38ee368869f27aed9b",
"splash/img/dark-3x.png": "4facfa005c287d38ee368869f27aed9b",
"splash/img/light-2x.png": "31a9d7f328ae850a329d0bdb09d7865a",
"splash/img/light-4x.png": "e59018022124942f1935edbdd21e2d96",
"splash/style.css": "a475ea2712e1d2e823cce293984d17cd",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"assets/NOTICES": "8f013e27753ccd10e9934fedc7008e51",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/mdi/fonts/materialdesignicons-webfont.ttf": "3e722fd57a6db80ee119f0e2c230ccff",
"assets/shaders/ink_sparkle.frag": "83c076d55fdbf5e6f73f29c79926992c",
"assets/FontManifest.json": "2ee1ba824c53a9a789ecf52dbe725a55",
"assets/AssetManifest.json": "2326488103dd5675ce0969a0ffca2247",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/2.0x/pleroma.png": "d68faf44e5fcbf434fa350859bcd38f2",
"assets/assets/icons/2.0x/mastodon.png": "d0e6b22c135c34c6272348b1a911b88d",
"assets/assets/icons/2.0x/misskey.png": "818ba1a5b1ec7057f336cd1e884681bd",
"assets/assets/icons/pleroma.png": "e42f18d80d5ba7dfe059a32862cd9931",
"assets/assets/icons/4.0x/pleroma.png": "78a367aaa31973cf637ae1ef46c2619d",
"assets/assets/icons/4.0x/mastodon.png": "3fcf81eda3eecef6405722bd5404f2eb",
"assets/assets/icons/4.0x/misskey.png": "a3e092106e38ccd20fd6f923c96011d8",
"assets/assets/icons/3.0x/pleroma.png": "b14729e9d1259f27c959a81684b89ddc",
"assets/assets/icons/3.0x/mastodon.png": "d5f1d89766fbe52179fdcf2555ce38a7",
"assets/assets/icons/3.0x/misskey.png": "d9a8263b576f83a86858928c0f90fe6b",
"assets/assets/icons/mastodon.png": "ef0b1e7ef3f21fbf2687fd4fde361878",
"assets/assets/icons/twitter.png": "0f5c5092dbbf198d4f8c4f0c838b9df7",
"assets/assets/icons/husky.png": "6e0caa82979cead1222db0418c2159e1",
"assets/assets/icons/misskey.png": "391919b01109e067373dd59f6903f856",
"assets/assets/instances.json": "1e3c7327339b6eb05f286b6821bf03c0",
"assets/assets/icon.png": "e04dce73ab46eab84142c7e84f39f671",
"assets/assets/credits.json": "1a11d991673cfb597ddae30ecfc1da81",
"assets/assets/fonts/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/assets/fonts/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"assets/assets/oauth-success.html": "2eae47cadd2aaa96b32d6a46844b969d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
