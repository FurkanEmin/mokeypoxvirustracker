'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6013fd6a8ed1092765173712b0543ed4",
"index.html": "554b64ef726e9dcf9266b9ae543a1899",
"/": "554b64ef726e9dcf9266b9ae543a1899",
"main.dart.js": "e2286d49cd2e80e42b0c5908fa8be2a4",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dee042bd8cca72b1616c2359e5ea699c",
".git/config": "ecd7b1e43b54c5e68d04b8fe93f45e39",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/3c574926c4c0c1e5dc54305dd04ffa8cdff40e": "98784751c56de5017fb5e4aca0569dd9",
".git/objects/92/f30c4a8cc13774a9884b6c0b04bb9b0e13e0dd": "090eaa1496d8df6b114250e4ced0889d",
".git/objects/50/243398553effcaee0ada7485b0cf3fa13450fc": "95994b3bc8ddb6aee807bc969997cd6a",
".git/objects/04/1676dfc2aee3d53b605acbaa7e9ebb6b5f0b53": "7edfc09b237911012bd1111e43ec78ce",
".git/objects/6a/b1fa50560793c4f5b0a72a118deead278cdeec": "02a4b4c484bc9bfb8a8011effcac865c",
".git/objects/6a/427b2697bf556f7ec8c26d4e35d551686eba61": "053d8477e5ab7e403d9041d4f8011050",
".git/objects/3d/ff6975bdd789d86158e9626245599eb588250f": "b4058bbb70f22f445f2c728ce5304c97",
".git/objects/d0/cf1a37f7858ec25e9c7d6d36073a857f4b391b": "7e37e21b0c41486bf93ead4feb2dd3ca",
".git/objects/da/6f6e8edaf832a53292b2bbb5f333608e4d551b": "668aa3db994c9b15caf33f27bc47fad3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/4c8ad37466d970b9675d4d107d0bfcb2623bec": "29785598d809fc0a0c46d1fd6808a980",
".git/objects/c1/3ca965f42ffb4605f64a1e827a138b59cd3416": "414233d75e2c823dce81f781198df96e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/db4beabe273202ab9d34d3865cdca2748661a5": "6d43ca269afb5b35513e9a5bb65199f6",
".git/objects/18/cf71e6272edb566ed2ec351e801bf40760e9a5": "4e24dfce19ea53c451007d997317dd6b",
".git/objects/11/609640f516c60dfcbb82f4d0578e8e04c73e85": "c97b60056459c613a09dbba4801add2a",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/87/4c83ae4817114b83e303ba9264367080677ced": "54790710146a81f5277984f33c6f0c94",
".git/objects/28/cc2469bc48831431b35deb96291f3fccc3ef0a": "45bc8796ebf14f3d7c02f4495a37fc1e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/3778e1dcd7e0a27771be4cd4a79c39309ad46b": "c003e0f43513316825de234cdda45b68",
".git/objects/4c/7b5143096af4bb09b4f0764a250a6a08a17d33": "ca3c3dca9d4dfad33d3ebec6f22b91b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/8c1445f0d06067b8a6f158aa9660a1d3abeb30": "1a6ed52e1ae522b45f22534d8f0bb706",
".git/objects/9a/905d2bfb183b90a6f8013f1e080816268a2b60": "4f64e5d0e9fe31813652714350bcc000",
".git/objects/91/9f85b56e182784728b3dcef2fc55a9911c581f": "1fae0776c806228cd1070eb4c0ba12c1",
".git/objects/98/390b3d14743f2488b747f2256bedcfe7aff4b8": "af7b5e63f096f7020ab5cdd812e64ae2",
".git/objects/37/261a959eede4605eff13f7a59d0882af0ab58a": "3aaec9ef52a1d924ec08e3852a92a028",
".git/objects/6d/ac2cab48b3f1b7d291f3c806e2b8d3536ff2dd": "c3eb014f61ffd85526ccc9061f68295d",
".git/objects/99/4ae9a85274859ce98b13b44b20d4e03d635e58": "2ce48276e51ad7cf1ad722131ff5f6ad",
".git/objects/55/43a32cd173ff028f7ef86b359fd5e98498f5f8": "7b28edb423bb0ef6d678ad4abf569b7e",
".git/objects/0f/5a12739e58ed7e84558dfc2bf3f1ac98f983f1": "337f64a9411277901f50c5ee435ccb46",
".git/objects/64/dac11152221f73b3da5ac07f5c54a60cd254e8": "a95d340691bcd3dd1dd6467917bf5034",
".git/objects/ba/59303e7eabd356191d989370cdd24266eaccb1": "a129b8736d99bc343d92833904b56793",
".git/objects/a0/3f69aaec5cc74359f42d2cc45281667f44063e": "df142e7a1cb69c55292cccd4d65e8383",
".git/objects/a7/9212aa973873569a8f6fdeff743904e560b0a8": "6db1d1d0d672b7ae76a7d590a59567b9",
".git/objects/aa/ac48cbc7e32f50bf249d246ebcf57d03210a67": "5c2954f81ed68cc96f65ded85bb17ff7",
".git/objects/aa/4395d7b9694851066572642907e0a139b7a1c2": "f5e5788930285536365ae64c425d584e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/060ab456953fdf94744540cd3bd7d89c232b1f": "423101e64658d0a26b6619d50f17d640",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/4b910e49274e935e8ead5469ee4aeaf0116e72": "6e24ea06d9e67297bf333dd5ded8acb2",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/0923085ba6446c57e0a7b974ea1ab3a2efa7ac": "417bce2d53aedbf071205f3a57dc324d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/bcc3299aca978010a05920760a27b98664854b": "9671c5f71808ade55a99f6b284d1e1ea",
".git/objects/77/61aa516f4ea7c25d744d1245c67f727b83bfbf": "3dd1b08093fe18871354a77b31af59c1",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/e67ebb720b0566df28918abcd7aea1097bbbd1": "a72b07dd9255a987555e03077cd158ba",
".git/objects/12/340dcfea3be34ae3227ab7f5f52fc5a0db897e": "2c868d60fbb0ec04b2cb56246aabf6cb",
".git/objects/1d/bdb459efc76b82a77570afe07e6574bb3684fc": "18a0e80b66f75dcbf97f65c55a159bac",
".git/objects/76/7a60b5c65e67efea5501936e77b8ff0aa573c5": "59c9d52598706c498b78f6056a43464c",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/262689a18db87b9afb65f8db0d44a6747b6163": "7fbaf0c791417a5c9fc0222088733114",
".git/objects/7a/e0677b7a08704a75a08d578b676d2a56506fee": "7eba54a297290268f72bbaf658b02e8a",
".git/objects/25/109d153179e979bdd22b1beb77f3edf5e8eefc": "4aaefcf7a0a0671ca2c2fb0f35fc2866",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dca845143268eb1ef5799a1517e59844",
".git/logs/refs/heads/main": "abf3f6b0173f445112ba1126b14f70c7",
".git/logs/refs/remotes/origin/main": "5d7ecf2ce560059979aa659afc5c1534",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/main": "3b61da380797e0184a2d287ede2008c7",
".git/refs/remotes/origin/main": "3b61da380797e0184a2d287ede2008c7",
".git/index": "a5808ace0b9f85ef733ed42d97429fb0",
".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
"assets/images/world.png": "ada31aca781d1901fdecd948c7f8adc0",
"assets/images/russia.png": "8fe59663c1cb91c8eb24e4803865b1d1",
"assets/images/hungary.png": "4f7eb81189819376397386eb86e3b534",
"assets/images/poland.png": "e0260c7e76ea5009a17509a780e078dd",
"assets/images/cypriot.png": "0da0a9b47fa37ab123787144ed7f0424",
"assets/images/ukraine.png": "2c552ecee060a18e5d50b7093f9534ea",
"assets/images/byelorussia.png": "930945b3498b6166c31da3e411b0f3ee",
"assets/images/armenia.png": "44507fdeaeca1a54590ac94195911b74",
"assets/images/monaco.png": "cf34af7df2be500a48874e575fb123ec",
"assets/images/czechia.png": "972f515714e3a4b7cd8e9d21a5c14960",
"assets/images/england.png": "8ee89d39492a46eeb81eb2575deb6961",
"assets/images/europe.png": "29d625fe09c122900096879bc130c38b",
"assets/images/sweden.png": "7d30fe15e3c4c32986db97c435b3196d",
"assets/images/moldova.png": "f64b149ded6dcce5cf083025843c8764",
"assets/images/belgium.png": "4b198ea6d9c9981e1363e9909295a426",
"assets/images/greece.png": "0ba6f2459f0b8a08a50093d19d2fb620",
"assets/images/andorra.png": "8fbac42ba898e04f135c30b2cceef16a",
"assets/images/esthonia.png": "46d478bcbecbc51a3c67173983ff3ead",
"assets/images/bosnia-herzegovina.png": "a49f3e8597002480c539b63ec54b64fa",
"assets/images/crotia.png": "5fbb8fd1f08d66b4fa45e5d6654d748f",
"assets/images/switzerland.png": "ec757892a3dcfd5ada141ee836eb1c86",
"assets/images/bulgaria.png": "078a772e2862093761cdf018b3e1c8d9",
"assets/images/azerbaijan.png": "5cd26278f0ee8e94320733000f9b64f2",
"assets/images/germany.png": "4912d1dc2d30092de20a71b0d3dff9d2",
"assets/images/sanmarino.png": "fa6ff93aefcaac836d58d4ed79e5bc3f",
"assets/images/austria.png": "cf437e8709e5fefb34a1e3a7ca710e4b",
"assets/images/latvia.png": "8b185308225f0dc337016aba03fc324f",
"assets/images/portugal.png": "173bc164b2930b81a35cd9897efc5007",
"assets/images/spain.png": "f1cd859b9b0c7f80f731d618bc487750",
"assets/images/luxembourg.png": "8494ae0004de158ba2690f431e589d50",
"assets/images/serbia.png": "6b8433e4ec94a304fbf8860a4b23db8f",
"assets/images/france.png": "cbd1ec1db84c90d1c1fca9f8d506e335",
"assets/images/italy.png": "9fc8cc03d9ee99438824e9fc3dd1a458",
"assets/images/liechtenstein.png": "89c1127498661d55e33ff1fe3b3e9dc4",
"assets/images/denmark.png": "915c474e0582eeae05bdfc548778de9c",
"assets/images/albania.png": "bfdfa4fe4992c5bc22792c445a30dce2",
"assets/images/netherlands.png": "466df31f22d3ee08eef680505c1d4793",
"assets/images/georgia.png": "7a740616ad1d3ac030fb5552a6a70bf9",
"assets/images/malta.png": "e9d7903cdec41c28a7f613c1941d022c",
"assets/images/ireland.png": "2606de1abbac860065d63f47ccecf567",
"assets/images/finland.png": "ae44471a4e9e5c0faa2ecd605dfe86a7",
"assets/images/romania.png": "a3a25de5b96967c5ef617d01843bb87e",
"assets/images/slovenia.png": "b61a8a14344fa698fbfa71cc26fca13b",
"assets/images/slovakia.png": "eb55ae1a717120fcc098679ad526c0b9",
"assets/images/norway.png": "f230061d71b1b521b720f64a844ee1fa",
"assets/AssetManifest.json": "bdae765d22f75d012fb9aa41dc64753d",
"assets/NOTICES": "69edea41433f689b741a94f0d333f57a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
