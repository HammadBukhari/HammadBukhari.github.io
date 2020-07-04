'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".firebase/hosting.YnVpbGRcd2Vi.cache": "bbe8fa773d3cb43080315f5b638779b3",
".git/COMMIT_EDITMSG": "596d30fa8adcf7a8ef9fdaa78e3f069c",
".git/config": "d839fb61899f062091e61001bae1eabd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "161c2d3332230798ba5857a6712197db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfb19e0762be4781829df79ef568c637",
".git/logs/refs/heads/master": "cfb19e0762be4781829df79ef568c637",
".git/logs/refs/remotes/origin/master": "b271d83ef2cbcdac382140feb50f2a2e",
".git/objects/00/14ca0842e3b5bea2d8b1686d66c06333284168": "e4366fb393ee936d3b31a9b12cedfdf4",
".git/objects/02/d9c8835ee13900625f5697da8a477737276b70": "380e3fcd53bfca8288b33a5e759bb6c2",
".git/objects/04/bc1604cc762882e46cd58d8c0138cc1a001de0": "9825b46ed09983b776e2b0787c5f60a2",
".git/objects/05/33aefe76a57f5e88fb2c8d03502769331081c9": "26db4c1e30e8ff724a07755c9f9c941c",
".git/objects/0a/c6876fbbdc028c57bc35f81a9b3bb8d0414f21": "c6743baaeac5da9281efa5aa78c24898",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/d67ef2bf8e0782a8c0491ef961aa1f336d35b3": "0366a796aeec58895f3dec39f025f18c",
".git/objects/19/6b42cde6f48259c523e7bd246f36bc4af97770": "c9e79bb08956b9a9de22a020c9832fe9",
".git/objects/1e/8c6f38abdbb8c5c71500b5b04af5f109997bed": "3dfa54d7498d14771d21bd27df419ad1",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d7f1f1fc9e3bb77760a23b307c844d4cc751a1": "1c5ac58286a14ee6344b09da06a813fd",
".git/objects/21/97fd17ab11afa4aa2b1899fa1e0eaf4039cd8b": "b85d2dba1c97ab2ff58c504d1e952a72",
".git/objects/21/cb6eada471c5f01484c95ee0b1633cf4f2f44b": "678be5427e5f09745d4f3b6aba490a3e",
".git/objects/25/b024d1ad935c2229842bf649400af27e5b61fe": "15b80fcc27a66ed0f84292c14d15bfdd",
".git/objects/2b/e5ef49f1f8d6efa2066efe1a15abb949d52ded": "9f134f6bc55d837978a7992a2731caba",
".git/objects/2c/d0ca3111d0e0179cdb9270998bc7e273fc718e": "7aea0074753dbb2fac0fd6be109ea33a",
".git/objects/33/a3cd9725c5d6ee69ce6f54b7ff7c4d188bd040": "f08d18f923dc205bfc75c0b731a79985",
".git/objects/39/d9bfa328ee7a287fc1aacff059eb85b7cd10af": "74f1e53c6f6e57d15bce1aea98f64582",
".git/objects/3b/0fb4c12b09221777f9d3f0b57eb96fcb047853": "fd926e569413e9801d1348182ac2ea78",
".git/objects/3e/e09babfb458089c4f1987b9e6aa083559f07c5": "92b55e0c5a77d7446b8d2ee0c01fdb47",
".git/objects/3f/1e0f3dda844ff4ab6d0e1e2e7b1433aad19723": "d432d35852034f0c9b2bf7bab47e6005",
".git/objects/40/4acdc8d188284a164178562d36763842c9fbfb": "58620faaf722bb5d17faf7fd84c13fa9",
".git/objects/47/5ec11ddc1fd4d009925a2b765e8420514637a6": "491cdf3a3cf13b98d1f4ee79fd33e2bc",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4f/832533af28d54a90ffb562ff472fdde2c6c087": "980301e4338bbf261fa31bc4f49ac81a",
".git/objects/50/e22c0c8cf16777ca8fdda6fb6c06586869487d": "0ac27461d3780e30d704036d75418875",
".git/objects/54/11e8f4eb56079987554efc7a465e8e78a0a927": "1e4e6c3366ab41b6d0f7937ecf383ee4",
".git/objects/55/8e63e56b5267ca2a7fd7515ed14ec78e5ce335": "4e6dfd1ce3b50317d5e5b7b2379ff3fa",
".git/objects/57/8aee6dfdbe2a113c687dfe6c9ce8d57bf8310b": "4f7e07ccd740b5a287a7984ba1f348aa",
".git/objects/5e/708fdb1eccce45e573e0a4641f975f90a8031d": "fc574eca1ec557b7d5f2e21db6f6fd7f",
".git/objects/66/037326c171ff15c5c73bb30860864ed8381291": "7e019f3d11a5dfd956970811a0d13ecb",
".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/6a/00dcae932dadf0b7fdb691195e3d9ba86f217b": "b7084cc4cbfac98fb9054dbee1c9c5c2",
".git/objects/6d/9277b21a153de86d21ddd63c7ee214bfe4b60f": "04790f47bef3cf5264c7b5c5cad6138b",
".git/objects/7d/c01c060954ca9d9cf502833679128fb25974a3": "5876de662743570b5407aa65f3d0ecec",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/4d85b9c92e2089036430287e2cff49f13352d8": "1655d996ac934bd11378d0d5de42b864",
".git/objects/83/be1c6a0a125a07c8c07b29f2a6dd264e89446d": "447c6b27f11b04ce78ed65b9b3df9018",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/0b5a1f2b12ea7cd20d914ea8386c6cf0c8bce1": "a9f8aa99eb354df3d5723e4b17eb081b",
".git/objects/8f/6572bb2ee3a140d4fbe19b31dca6c1a7a493e4": "74205bce93034e4055e74972d90d3429",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/97/9e71cc117785e56963eb1f8808221da8a45b92": "cf9f2c0c4994818bdd54bc5454113bae",
".git/objects/98/2a09530aa6fbc8d1376f568c9e2ac40a2e8117": "5cbdf9b2884a5e5cac523f0325a0c0f4",
".git/objects/98/d1d16510be60017d9fa9056c8b5c1c116e0cea": "30dc49aaf6acbfe4b851084efb133c9f",
".git/objects/9d/4b31d30257f6d38d879030bc6f838fdc9f3b43": "13786abe0fef3c65b6320805af4c0057",
".git/objects/9d/a3da2c5c35fdb2e7d529395bba093d1363f215": "33cde25c653f73232d003951c1d36bd2",
".git/objects/a0/11988039659611c38ad696525a0c6cfd9eba6d": "3e780ab1be8676085513996f7b8f8d4c",
".git/objects/a5/3f47d4807c3416ad4c17042334307f90d777c5": "5895c86dd080c1e69d66a1049424eb73",
".git/objects/a6/877fa3a75db6509481b8ce5794ac31f272154d": "f05ec3ebecd22c042617872727e60633",
".git/objects/a8/3d49de6d863b5d18512bf8e18cbaf7e4bb2189": "baf207f8d1d87e5bd2548d5afae4cac6",
".git/objects/ac/22c3d34b45dffb3592c81bbccdf5e00856f927": "83c42ed2c85fa3ef82fa7a8ee3eb19aa",
".git/objects/ac/672d06b54e7007afd4dda0fbfcadeb298c2f8a": "19a2c3c50efa8e2b81e444cc4f696be2",
".git/objects/b4/99058b2e746a66ed123d65d30fa083f4303732": "4760da9526714d923181c7964e209661",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/8d5dc673787f886a27a6973c03b25a570d9100": "0a6d7d19c515e18f0099e99244c69330",
".git/objects/bd/55a9c23a9facaf9a6c624772ce9cdfc250e61e": "0a1a28c1cc93c61a2b7ea0365c2b5d19",
".git/objects/bf/5f0a69a7594574e8259b29ae63fbc115e9fa09": "63775d70024edc05011b49b08a3584b5",
".git/objects/c3/2499088f025677043d253200793fdae90755df": "46d20cab558abed0bbc8e5a024af0bbe",
".git/objects/c5/0b0d53335252aacf78443819acde83b22b1b0f": "2c4454d94c98905178bf2a9c84bae3bf",
".git/objects/ce/d6551c0f0c8fb625957a59e51d94719ffe144e": "d89f9040408cf6524dc83bdb67ad536d",
".git/objects/d3/e4bbf09455360a6134b09025de0be5d8f49852": "471fa001dab67c76819a112e798fdcb7",
".git/objects/d8/5ee9acaf7fb095572bf39a8c2aedcefc9a468e": "28c0374859a0e0dfaaacb4eff0502e90",
".git/objects/d9/af21ac0a28c8d3cbedaefd60a2311c2f8c646a": "4fd6ad21a686f86b2ad8d6b0e518dfb1",
".git/objects/da/5c78faf9b8d381d63670f6635e93e1a543ba66": "caf9b2bd8c21333bad210251e0cd64bd",
".git/objects/da/654f4526faf428cde878353f51261082e7f946": "2dbf34c264d7e50fc43ea12fb0c9fae7",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e3/cc1900749e230f2d9c20ee3bb346dc1d9bf7f0": "bb3b7ef8a7dfd03c0b87e1bb3a318537",
".git/objects/e4/04d10bf80a76c7df6dd50d9a9f180cd9fd2d8f": "6ad6fb5f03bb2e78cf793b6da17fa9b2",
".git/objects/ec/9890011b322fbd20878827feef0ecf5ac8c11e": "85836d4621c867e9fb0b15e7e927de7a",
".git/objects/ee/eadc3f3592c912f909913046aa45092b4f216d": "82d6587a24600cb397192358a1d5177f",
".git/objects/f3/b9ef5f4b6c3fcd4d4e5fe83d91e1048a6fa7ef": "0c72a861ff6290a2b33c38e7c26484c8",
".git/objects/f6/2685251bd58e2bf516c7835234d8a1120b7297": "c4a77cd8ffa672ec9f247e0de0c025a2",
".git/objects/f9/4d7c74d3178350b0b2427c3c7e90d030c4f4e9": "babf4aa2ba6200b81dbab08e0b97bd3e",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "0d4e3cb311037f0d266ea48811ff3db4",
".git/refs/remotes/origin/master": "0d4e3cb311037f0d266ea48811ff3db4",
"assets/AssetManifest.json": "3fa74915a47522c93a6a13e4aeda636f",
"assets/assets/dark.png": "a75452b47ccbe5fce712f405c99db95d",
"assets/assets/facebook.png": "372bd69cd5b5ba9a2883d6713fd7bbcf",
"assets/assets/gmail.png": "ffdb72c751bd2f0cc098a1ebebe62dde",
"assets/assets/IMG_0792.jpg": "af8b773940d660d02e57a6674adf7035",
"assets/assets/linkedin.png": "dc579a42f24fd28c16e93239f83b3e42",
"assets/assets/me.jpg": "b1e26cedd2f553ac8af1fab451655930",
"assets/assets/pic%2520(1).png": "8693db33cdce464a761f301b5690d592",
"assets/assets/pic%2520(2).png": "1e7c70dfc9a94eef1438adf8985a2695",
"assets/assets/pic%2520(3).png": "5d628d1db3fb1e892bae6a864fe74ed6",
"assets/assets/pic%2520(4).png": "97442b4b475f94066b3a79ca2b2bc069",
"assets/assets/pic%2520(5).png": "fbe08d1ae9e65a155cd90488050dab90",
"assets/assets/pic%2520(6).png": "952d1265ddccb40ec35d2040b9222921",
"assets/assets/pic%2520(7).png": "cd7f4caef3309bddb02551a873fc09a8",
"assets/assets/pic%2520(8).png": "d2e51175672a1995bda7cb51f87ef3a4",
"assets/assets/r27.png": "828d8f4cfe3751b10150adceb63068d7",
"assets/assets/shajar.png": "e301e241968402fcc9e63dbcf8b26501",
"assets/assets/upwork.png": "3db96e376fd7b6c03d35a2ab52cf3ecb",
"assets/assets/whatsapp.png": "03502a95568238b71ac373bdaacb7406",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "311d77fb8ac394889822b0c614692970",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"build/web/index.html": "f0f9b566f9302b118edd61b22092a7d2",
"/": "2def70cdfb9efbc99017bc85e0c5e804",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "18500ee9b0fa2255ec701badcc73425d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2def70cdfb9efbc99017bc85e0c5e804",
"main.dart.js": "f090b031a1459f67a0de184d121a7273",
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
