'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "b70bb2b448854c389e3715e870eb3a23",
"assets/AssetManifest.smcbin": "5e7673e106c685c44113aa66e6580495",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "628e381667a11c557801a792527cf43e",
"assets/img/1.jpeg": "e6f4b95da19aabd8660e3b4e8bc1ca71",
"assets/img/123.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/img/2.jpeg": "b2f8290ee14d349f7f4af2ea05c1d786",
"assets/img/3.jpeg": "6bd1e6bc97df933129cc33d4a5c315a8",
"assets/img/4.jpeg": "de3e70404ea3b8f04e6419f471f1530b",
"assets/img/5.jpeg": "33af1a94965edd6bd3f07e206135b0e4",
"assets/img/6.jpeg": "6482ce7cfc1773ab9c02557cec64077b",
"assets/img/7.jpeg": "53f27315df3577c4fe3f030fd84f0978",
"assets/img/8.jpeg": "998db7f12b27f51a9eb980c04b5d3eb9",
"assets/img/9.jpeg": "b3cdc627f591ca29171e9d7015e8c392",
"assets/img/abc.jpeg": "a67fe7d0fc268efabecd485d20d902d6",
"assets/img/age.jpeg": "3263f2b1aa9755897aa3467b5cf88e02",
"assets/img/dra.jpeg": "4c84c8a92ecaed2c9df9928ce4aed6cc",
"assets/img/drawer.jpeg": "36d954e25d0b4526c66be25d42266fd7",
"assets/img/end.png": "75248923af3968379051e4737381219b",
"assets/img/fac.png": "e4da23704f27c9df07e6c21a13e28bfd",
"assets/img/fivver.png": "1c9763378bde41d4cfae2a85197b2ba3",
"assets/img/food.jfif": "8d58a285c28a895681fc57026223c9da",
"assets/img/food1.jpg": "92b8f8badb0c5e8c382023ddb853fd16",
"assets/img/gif.gif": "578715f94a5c3a7e6c277841ef9bddbc",
"assets/img/gif1.gif": "17f8ded2a1e965d36aa0a0c03505f2b5",
"assets/img/git.png": "859c70795793f8c0d90874b0de0ebb31",
"assets/img/gpt.jpg": "4ce8480de3f235a878541a7fdf0dd608",
"assets/img/hom.jpeg": "431ba8fc29ab29f5ce6a79dcd5cab7a4",
"assets/img/home%25203.jpeg": "f3243ff867e8964e768f9dcc8d4805bd",
"assets/img/home.jpeg": "10c9f9cfe688ded8011c8a61aeee69f8",
"assets/img/home1.jpeg": "ecb91c1d192eb990e4cdaf26bfe429ef",
"assets/img/insta.png": "407e60285c44463b5344819901d10f57",
"assets/img/lin.png": "0ea309c98a8916b507ca2aae736d1594",
"assets/img/link.png": "5a2851a21320065aad87d57c0d4269e9",
"assets/img/linkdin.png": "7e6cb680bd727b984046182a071b0241",
"assets/img/linkdinimg.png": "534c4e73586846452a957e4d7ff9192e",
"assets/img/login.jpeg": "a68124aa9711d5cdad011c86dcd38388",
"assets/img/naveed.jpeg": "5b1b34ca635100ca7e8b590de0f38084",
"assets/img/png.png": "ff596b53c80f7c500909f8c60fc98088",
"assets/img/robo.png": "6bfb3a1706758ab55aa0d894e1152a49",
"assets/img/signup.jpeg": "834a4ef79ac0a0eaf5680c89db91ec8e",
"assets/img/ui.jpg": "7a893eee0cc449c045bc18dd0d766fc3",
"assets/img/up.png": "3b60586122f76aa004703540c9fa253d",
"assets/img/vid.mp4": "162f323e431048db54c597dfa3213f84",
"assets/img/web.jpg": "1c76f985ca554cc58d51b9e9824d90f0",
"assets/img/whats.png": "60e6e1690d4e125bd58e9a16d7bd4c0b",
"assets/NOTICES": "3cd841a42c741f743304ac81842291ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "8bae2ce3a2ff0dc8f4d99cae8a1da306",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "64a31692c41a467ccce0eedfc18a0ffb",
"/": "64a31692c41a467ccce0eedfc18a0ffb",
"main.dart.js": "398d481dd5e252f78017ee1a6eed6282",
"manifest.json": "e5af8d66776775d7f5f5da397445c4e0",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
