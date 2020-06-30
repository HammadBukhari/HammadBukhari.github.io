'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".firebase/hosting.YnVpbGRcd2Vi.cache": "bbe8fa773d3cb43080315f5b638779b3",
"assets/AssetManifest.json": "cb5e801b5f261e8921c8f2b84378010d",
"assets/assets/dark.png": "a75452b47ccbe5fce712f405c99db95d",
"assets/assets/facebook.png": "372bd69cd5b5ba9a2883d6713fd7bbcf",
"assets/assets/gmail.png": "ffdb72c751bd2f0cc098a1ebebe62dde",
"assets/assets/IMG_0792.jpg": "af8b773940d660d02e57a6674adf7035",
"assets/assets/linkedin.png": "dc579a42f24fd28c16e93239f83b3e42",
"assets/assets/me.jpg": "b1e26cedd2f553ac8af1fab451655930",
"assets/assets/r27.jpg": "a53f44d0b4c8ddd49a200132c176e4bc",
"assets/assets/r27.png": "828d8f4cfe3751b10150adceb63068d7",
"assets/assets/shajar%2520(1).png": "b541e167d4eb0ea9843b617b06c8297e",
"assets/assets/shajar%2520(10).png": "03d835d54690e26900c23291feb36cca",
"assets/assets/shajar%2520(11).png": "29cf44f12b228c502f313e004ff80a0f",
"assets/assets/shajar%2520(12).png": "1016e8de8ca91d51e4b9c06de9812420",
"assets/assets/shajar%2520(2).png": "04f465797007f212c5d4a975183433ca",
"assets/assets/shajar%2520(3).png": "9e822920ba2cd1f08de2fa3a4cdff7f7",
"assets/assets/shajar%2520(4).png": "c4ab4d32905dbf289cf65384cd60f645",
"assets/assets/shajar%2520(5).png": "363a630191841455fc0050706b437f58",
"assets/assets/shajar%2520(6).png": "ba390542f5a99d8a28eff31336a1df6b",
"assets/assets/shajar%2520(7).png": "59c9d305afaf5caa039230642d98c4c7",
"assets/assets/shajar%2520(8).png": "023f539fa72454404a20fb2b116cd821",
"assets/assets/shajar%2520(9).png": "897d30706c60b12316dccb40afb738b2",
"assets/assets/shajar.png": "97e6519ca13b71cc7618da7c97571154",
"assets/assets/shajar1.png": "589c7f006d72ecdef84a6c04471f9a88",
"assets/assets/shajar2.png": "1bb3906c9b0c18aa182d565647e57094",
"assets/assets/shajarRaw1.jpg": "66b9054fa21a1a2637a64e68cfdbe54c",
"assets/assets/shajarRaw2.png": "d9de9956ad4ac43849abfe290b3c1e70",
"assets/assets/shajarRaw3.jpg": "575b44016f12497dc0a12c2c30809c69",
"assets/assets/shajarRaw4.png": "57e339a7a77c4818883d457c04708cd2",
"assets/assets/shajarRaw5.jpg": "325d77c8e678aaf7068d73288956a416",
"assets/assets/upwork.png": "3db96e376fd7b6c03d35a2ab52cf3ecb",
"assets/assets/whatsapp.png": "03502a95568238b71ac373bdaacb7406",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "113d2d25ce439103ebc101f5122c897b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"build/web/index.html": "f0f9b566f9302b118edd61b22092a7d2",
"/": "2def70cdfb9efbc99017bc85e0c5e804",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "18500ee9b0fa2255ec701badcc73425d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2def70cdfb9efbc99017bc85e0c5e804",
"main.dart.js": "2d7437bf7846c3d0b0a883e797966351",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
