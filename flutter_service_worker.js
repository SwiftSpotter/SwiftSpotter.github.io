'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6232ff9433e5426253eaa55ca206efc0",
".git/config": "74c4d93a8657af8d876b585c615b772e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e6a071903e1502575a448a1fad94b420",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "74eb32892221bdf25fb125921d67187a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8be8f54f5a4a95fcb12a90607f07e7d",
".git/logs/refs/heads/main": "f7eba8d10857ca07a0477c896d162340",
".git/logs/refs/remotes/origin/main": "5a25e62b7ae5f97cfb5bdfc8af934141",
".git/objects/00/72827abc09bb0a1f22309088624fe346e3dfcc": "6366ac261fabd94493d3f524bd9fd5c0",
".git/objects/02/66702363c67343f4d00b29c0522b55bf893578": "e1ee20fe34f17f842cc522b0153c4bcb",
".git/objects/06/5699acaa6c0a020d3d348ba079da3abafb1eec": "825e478be9823ccb82786f33fe51cda0",
".git/objects/0a/29a9c48d96093dcc65df0c5c8405bc91829f8b": "928c6f0554e46eff3b3187151b38b863",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/3fe64a6c65d6cc460b7f3e32f9e5423af7f3d0": "1e206599fab11a249a121fdf700e236f",
".git/objects/14/3ad8877e0a1f68c83bfa504f27958494b229af": "ad719bc65fb45f8ab6222760eff3cf7b",
".git/objects/18/90e806981f765943e0d4c1d7a3ddb81e99ba2a": "c82b44d6e6b45056f528b4f64d784728",
".git/objects/19/98c8cb6454db2a99e270fb9ee4b1e766b4259c": "ca397eafb79f12c456994b1e4a0d5300",
".git/objects/1d/319b1f3cabb694c9206be8aa71ec23d9fa6914": "0badb481496cec32f2df37a73c485618",
".git/objects/1e/8c73eb27467e4dd0cff2b444bce2fee8409ebf": "385e4d76410bbea7e937592bfda91533",
".git/objects/1f/7304b6287a7c19f79a09366e9a0b58d714aa19": "153e6cab84f23cd18596a9f11283a8a4",
".git/objects/22/ae65466909ba3f4589b580f803636bf2d59783": "c2a60dd3babfe1382ffdabd569b61ec2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/def9c35a06710cac0b0add2991f0c041cbe96e": "8254fa4001790772c4e76ac434c446f4",
".git/objects/2d/40073889791c9ebc34ee20c4c80308a0b1f35f": "0160009c5fc9b7d7e14495200ac0a506",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/35/38ba2882b8009dd95e42fffd3b6683fc8e6e2f": "af96d21e6820c754f04b914493030417",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/d4c1b44e6212be3e3dc5518e812e96e64b0d67": "7bb42afa4e7ff85793dbc2f731bf187d",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5c/14b4567828b8875d280a755ef93459f79de80f": "bc07b9babfed5cf8d50be72330872323",
".git/objects/5e/04fb5099d50524789e17c6ebc34d1389b4fca2": "93971b5c7b86be6de4aa45132cf3cd69",
".git/objects/67/f53d58a88cc0ff88a05c0a97316ed5a3e3800e": "5fc6309d55dcecf9c5e8dba79dc7b5a6",
".git/objects/69/c89e1ff7b6045f1e75cf94c8f032f038ff72e6": "5834b8290051837c73c4e2eaa3f5d4f3",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/72/3cad59267320872340ec51cac814e83fd97ae7": "eb0b2265a31d07ce01975b459c1c7f66",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/137f10296da76bbf0ea274a90fa96f5d93a117": "83dcac9243e5eed57235910a3e8827e2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/d9b8f15edcdf8ee6c631f8ecfa0687df827ced": "a97193778e5d92089945e2107b3c30f0",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/88/2b9e17ee39af99b559d311a3d0573f3a6d345c": "85d5ad243d07472b53c8be3ff5890458",
".git/objects/8c/1f30bfe5ba2f9f92c35a5f3a0bdc9bac707e92": "f538a921c5f1f645ba24b2d6b58f1b06",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/98/ecff684a7787ef07a766c02cdea44938c72f67": "c649466331e211e1843cf9a1567302e8",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9e/32e84c18dbf48a6e7ccd78ca0e2ff9e3889286": "cbadc4ba73ac95f93a49edf0b722921d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/39c0a5f23fca1d1a3d7cd535cfbe343e4611a5": "635ebcec391faf4de5dd9282c5987c56",
".git/objects/a7/de4d64af6cda3cf4f7b8c337f73cb6fd389003": "7fdf9535018663fae4f90404fcf94c14",
".git/objects/a8/eec589da49216b1121049030e29324c88aa0f1": "80f9a6a3ea43b14dbee14862cd6e654d",
".git/objects/c5/39f23f262a58ac198af15368af25507c188a5e": "b57ae5df13b9e5b8a5e3c524410e5853",
".git/objects/c9/b780c5be4cc4473cc862d909becd6e9aa2a4d4": "523c80fcce5c7683418b4e4b0ee4f15c",
".git/objects/d7/632fa2b509d8852d4024c74c42dcf1e51996ed": "63e007949cf3c87fc62f1f4829c856fe",
".git/objects/d9/281fd00227ff002a43a975f3486e9143b9769c": "25f89bd2d12a9295cb76a1406c47c31f",
".git/objects/e4/ab7f2c0fc917cca5797b3f456132f8c402906f": "1dc572d69f7cb24e6336f4a8afda1e25",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/0d215436e94fc430fa7dcdd36960c4176474cf": "e6fb5f7868dcbc66d5fb6adcb8cd6d4a",
".git/objects/f4/ffcbd486f78cb12fce064070db733e09990e60": "7924d00223a2cb7a85c74b3de9bb50f8",
".git/objects/fe/f9aaf6f1e1ea14036ca51a0e16dd3bf046b4e7": "8a3bcffac8c42c6083ef15e53c1a4c62",
".git/refs/heads/main": "95ba69bfe08698317eabde7b2dd8e88c",
".git/refs/remotes/origin/main": "95ba69bfe08698317eabde7b2dd8e88c",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1473a12a49006d4521e06ff1f180199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "8fa2155358070dd158ce17bc831da947",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "4c58b595dea97df505045909e32787d2",
"icons/Icon-512.png": "9654f830b8cf7cd0028b0152a7b6a73b",
"icons/Icon-maskable-192.png": "47bee18ca285d004e352bad0d5ce0965",
"icons/Icon-maskable-512.ico": "01976d3d317a88aaef145677b03f88c0",
"index.html": "ee49337f03f2ae851d34ff08207e9143",
"/": "ee49337f03f2ae851d34ff08207e9143",
"main.dart.js": "5e862f4147274ac6f7181b3d7d2240d7",
"manifest.json": "91fbbfb95786bc7498cb23be31a215f3",
"version.json": "736414446c09f5e85642090fc18c2739"
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
