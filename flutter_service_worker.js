'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e56be1501ef4e155f38a3cb816a550b8",
".git/config": "f89f384a0849a9d476825dce357ebf5d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5e0a1f398b2398b6f7b06a0133796e53",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4a4ff7de8cf63704d2a27c5747aad577",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77a3db6bf5c50dc6e957e60abb2986cf",
".git/logs/refs/heads/master": "77a3db6bf5c50dc6e957e60abb2986cf",
".git/logs/refs/remotes/origin/gh-pages": "6a6680e0c9d84c0468e3d9040c182307",
".git/objects/86/d46361bf4af76043b226be456507fb262fd10d": "f6b5f35ac49ebbcff7b92c1cb88ffe84",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/08/737626542426fb24d4cdc5008af736f23c43e2": "f9d237f5605bb20797d563de2c11defb",
".git/objects/0b/2cec1c81ece425331e4527fefcda4cabf957b5": "cf9976e5b3601dce6adb61aa6d75ff35",
".git/objects/0d/626f7cdd3e6b5e45f51fb779741a199604835d": "454913e67376653bb147e5738a60b3f1",
".git/objects/0f/e8a16d87f7815b92b862dec10139fb1ca15b99": "1a7ce047c3d15c46c4b0c9186e26598a",
".git/objects/10/1324ab0606bc9adabbf9290d1396b1c4208e3d": "1b7b8a1468220fdd2ec1f18af246999f",
".git/objects/11/d4e3ee92547c322fea8eb6209ea946f7017600": "c12bc255ed236657381f0ed13997ad67",
".git/objects/17/ea6d32de689bf6235d8784548143ab934e11e3": "0de9ddd2c66279fedc8163b2c51f9e01",
".git/objects/1c/c5b6fd0eba925ea4dbabf9900a6cf2aa63f04d": "d906e098216e96753a4f13f4329fcdcd",
".git/objects/21/f62be258ac72c25eb3745c31f3badd0983df01": "114f3f7514a2e8c45febd133fead4770",
".git/objects/26/a49470ec2cd3324e49dfb8be55e3159d7875cc": "6db8157d8316bcb9f704b3ea8b110f8e",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/9b84d5df71e856ece29c4719cd381a1e81d1d0": "186b90ec16a048c4d745e88dcf817c42",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/211f72aa83755b6484a90f781a8e33c7444c1d": "5557e07605736cf235c61e6077b84eb9",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/865361527fa0918351093be7bff3ec91186507": "70ea27da15a6bdc933bc73ac0511420a",
".git/objects/67/af995ce4fdf4265678c948a78629b8fbde82b2": "347fd55d73d566d1b7a15653655f0172",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/80/8ba5f9f92bbefc1123cbb5277d8c6758bdcfd8": "ae8372801dd6c79fff3ee01ae88126a3",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/5fe9aacad26bf7ce934e501e2e5d65521a2c2f": "a09dceddd7fdbb6878958696c1364d67",
".git/objects/92/11e99d689f5a0711341ddabb9588ff058398d0": "13dbcf5d8b97f9c5d8705515be8ddb08",
".git/objects/a1/8141a171fa1ef27931b3d5053e1e4a567f369e": "80d74dd32176f1ce0446a85ef2abdfdb",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b3/53334129d89c7e30b43e31d2d963bbd8d59cd7": "f9e82cadc198efdf5a36a8c5e1865b6d",
".git/objects/bc/32d837d9899a418bf681203de215e36627c563": "09ed5b5a585613d2b3e2743951b7a3a1",
".git/objects/c9/b87b78e9c9acb2e7fb6709d9146b4a16d681c2": "155aa54ecaa779bdee0d8254f6f689fd",
".git/objects/cd/b762283c536be0d6ad09c54763f8181fbcd23a": "9aa2b9a065dc533b5d2e24b7913d4192",
".git/objects/d4/153cde0d34eead57c2264414543961b5cc31cf": "7f5f0edcb701290856dd96f7c3759aba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e4/6de92ffacb903f7a98fb6e7c8a01145e6ce42f": "a9d399a110d33fb7f2f5abe37a7246bf",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/261fad97af874aa541924aa34f17424c326b90": "78b8ea8b5dbd811d61af035f80a44804",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/e351d5bad141aefa23dadbc7545b4f61139c28": "91a3e389ac39cb17a21270d52ced2eda",
".git/objects/f6/913cc863b55d689f2c65740bc7cc2c3a6b1331": "7136c9e4c6c8c5ba85ff39e4fd9c984f",
".git/objects/f9/fd9fc6bf29d565099b291c3b69bc1c4cb4b021": "4e9e7ef1438cd56406d813870a3265f0",
".git/objects/fe/41dcbe778e8ce005e44d3f858e5de69fa976ce": "576f445139ad5b9c6717ff2518cfc879",
".git/refs/heads/master": "ff45bd66dfb0977094e0b03ff7a2e2f0",
".git/refs/remotes/origin/gh-pages": "b0ae3518350965158aa90ba420586076",
"assets/AssetManifest.bin": "950c9369d0701beeacf2c90aa0efda3a",
"assets/AssetManifest.bin.json": "a5993e5780cb9f475dbc91c7d6351951",
"assets/AssetManifest.json": "cb6377c98ea64e8ac096028b25d83d4a",
"assets/assets/images/myPhoto.png": "09a7a6c8778d7d42a0a595f74cf0df07",
"assets/download/FuadAbughaliCV.docx": "5ee6b951c59fa46db0e9a607f90eb881",
"assets/download/FuadAbughaliCV.pdf": "a1d645e7e404f9b0088bb32bb096049b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f8585cc24f68c8fbe6e5c80c2bf6a28e",
"assets/NOTICES": "06928e9ae76db17a493c47343ec9bb29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"download/FuadAbughaliCV.docx": "5ee6b951c59fa46db0e9a607f90eb881",
"download/FuadAbughaliCV.pdf": "a1d645e7e404f9b0088bb32bb096049b",
"download_setup.js": "3a00852a0630b9897398b80582e8bdea",
"favicon.png": "34fdb9f33c5a08e870035fbfd7d9f64a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "24f25999ce970e9ff4d8eb471532cdbe",
"icons/Icon-192.png": "7f125350c6f73b3cc1737dc285dc8377",
"icons/Icon-512.png": "d4c2d0d5226ab46e7559bda6d8d2885c",
"icons/Icon-maskable-192.png": "7f125350c6f73b3cc1737dc285dc8377",
"icons/Icon-maskable-512.png": "d4c2d0d5226ab46e7559bda6d8d2885c",
"index.html": "9cb18f4d6a1ee114feb25c3767e6d8cd",
"/": "9cb18f4d6a1ee114feb25c3767e6d8cd",
"main.dart.js": "a7d173b1138a3a31b0ad59d9ddff4d65",
"manifest.json": "d16a9313a43109efa139f7164b7e7444",
"version.json": "950184d1ad31ca8ed69e51f30f5a3837"};
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
