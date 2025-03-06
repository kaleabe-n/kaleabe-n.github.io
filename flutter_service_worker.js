'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f8384ffcb74ccb83bcc71ba9aa81eddc",
"assets/AssetManifest.bin.json": "d8fb7aeec2f53b39b6211b05e2da57be",
"assets/AssetManifest.json": "2c758dc0541634d3b6082c9fcb651650",
"assets/assets/fonts/Jaro-Regular-VariableFont_opsz.ttf": "c7a597ee3c4e7296cdccf7efa328e91b",
"assets/assets/fonts/Rockwell-Extra-Bold-Regular.ttf": "d12864f9bb6e6fbfc3086390a99e3646",
"assets/assets/images/backend.png": "d82e6f936ccf41f745eb7ad7e351c11d",
"assets/assets/images/banner_background.png": "e3e11349135538ca01cb0ba04284e793",
"assets/assets/images/coffee_net/bookmarks.jpg": "c3e308d046b52ba22baadc253858cc41",
"assets/assets/images/coffee_net/dark_mode_about_us.jpg": "4b0b739ec8666fdc331cbbd7efef29cc",
"assets/assets/images/coffee_net/feedback_dark.jpg": "bff2b204a353a97238e70114b9749c03",
"assets/assets/images/coffee_net/homepage_no_data.jpg": "995f95e902e9e234e8f70dfd09447564",
"assets/assets/images/coffee_net/image_preview.jpg": "95009732cf5813ddc74431c373f4db58",
"assets/assets/images/coffee_net/image_preview_2.jpg": "c83cb14ae70f8c80cb729676cdabfb49",
"assets/assets/images/coffee_net/no_internet_dark.jpg": "3c016054a82aed7c24349ebd0437ab0a",
"assets/assets/images/coffee_net/reset_password_dark.jpg": "9d6b6fdb20566a061e2c46c0369d3b87",
"assets/assets/images/coffee_net/scan_result.jpg": "4e71587e3c2c460a2d411fc769c9b7e3",
"assets/assets/images/coffee_net/setting_dark.jpg": "e7bfcdbd619974c859fa639199f2348c",
"assets/assets/images/coffee_net/setting_light.jpg": "fb2ec2ee00d1f00de92459bd4e900759",
"assets/assets/images/coffee_net/signin.jpg": "0c43b3f28b96a56e63fec712b4633773",
"assets/assets/images/coffee_net/sign_up.jpg": "a8bbcf1c442685b0cdff7ee81857a695",
"assets/assets/images/coffee_net/splash.jpg": "897920288374f71dcba820dbd47190ed",
"assets/assets/images/coffee_net/sync_data_dark.jpg": "ea843806a3b675e8b746f3f4d14a9bae",
"assets/assets/images/coffee_net/upload.jpg": "0a07762eaefd033a4605d6d21ef4d37f",
"assets/assets/images/coffee_net/zoom_preview.jpg": "becca2f72f5a856876a59f45995abf26",
"assets/assets/images/Dark.png": "1dfa3f174aea9a2258064e1abbd1d1bc",
"assets/assets/images/dart.png": "1d4ed05a8bbd040f11b9c8fb1730eb2e",
"assets/assets/images/django.png": "f74061c17562c40855a2ae496efdbb44",
"assets/assets/images/docker.png": "a66463fda0894bb14a56be3ea6614deb",
"assets/assets/images/email.png": "b76b65affc43a93558a935c63c8a355c",
"assets/assets/images/facebook.png": "77dd345848be9c52cdd9a40feac63044",
"assets/assets/images/figma.png": "5b86094646d1b81cb73b5ca3a103b74b",
"assets/assets/images/flutter.png": "1c44c2931503559825d55851ebe65622",
"assets/assets/images/gada/donate.png": "6dd9bd890ffaa82736ca94aab0b076a7",
"assets/assets/images/gada/drawer.png": "56b3ee40153289255d3f7f0c72152fcd",
"assets/assets/images/gada/gada_logo.jpg": "85f4885f52a81bf3baf8ee6a26ae2af5",
"assets/assets/images/gada/homepage.png": "f3c786de9a9947974b7c54e05b076a05",
"assets/assets/images/gada/login.png": "095680667462ab03baf11e51ce12305b",
"assets/assets/images/gada/post_detail.png": "291117941ee38eb8b1becac0d4483641",
"assets/assets/images/gada/register.png": "71a781bc8e951c3a4e1131c5f69c3a6a",
"assets/assets/images/gada/thankyou.png": "4f67f7969d5d6c9794df80c5329ea32f",
"assets/assets/images/git.png": "9b5ae91db647cdd268e9836e994a44cf",
"assets/assets/images/github.png": "f11dbe800673aaf6d71902dca5827737",
"assets/assets/images/hatespeech/admin_posts.png": "186e5d1dde90f520f105291c110afd4e",
"assets/assets/images/hatespeech/dashboard.png": "bd81b8626cbd09a90f82fd54e9426b1e",
"assets/assets/images/hatespeech/posts.png": "3e6fe4aea94c1b2797c64881d9cdb1a7",
"assets/assets/images/hatespeech/signin.png": "5096157342122ffbdfb2bd1c591b9588",
"assets/assets/images/hatespeech/signup.png": "fd889130c94a3445fb3ac672dd29539e",
"assets/assets/images/hatespeech/users_admin.png": "67b7f9c5ae95ee62e0c324833d70cad0",
"assets/assets/images/instagram.png": "06c8d26fb930824c4eb1105ac2fcc3e1",
"assets/assets/images/js.png": "448d85894f1e9b1e764a4aa9884c6c29",
"assets/assets/images/legal_aid/chat.png": "214b1800168dfb9c3c302ddeaccf8892",
"assets/assets/images/legal_aid/homepage.png": "f94851f384b2160019aa254b048b1f8c",
"assets/assets/images/legal_aid/login.png": "006a8af88a1f4287de7902a24e745358",
"assets/assets/images/legal_aid/register.png": "19d02e27c0622916914d05e8f0b627d3",
"assets/assets/images/linkedin.png": "f1226f3d4ffb2ae02f4a8887daaca7ca",
"assets/assets/images/mobile.png": "a9031dfb891bfa68ac3631d2e8b90b74",
"assets/assets/images/next.png": "c51538510aac87410aea09cccb1a5ec7",
"assets/assets/images/photo.png": "9ec4e059eb085e2b6f1d71a8db9e81c7",
"assets/assets/images/python.png": "47d60aa461206d4abbf1ab2998006dfa",
"assets/assets/images/rateeat/discover.jpg": "8e8b5110e4332fb0c8029ac47b59033f",
"assets/assets/images/rateeat/discover_map.jpg": "2fc44f27720995d649d58b6bec0021ad",
"assets/assets/images/rateeat/discover_tags.jpg": "69aaab3ab191e3decf38017bca301a52",
"assets/assets/images/rateeat/feedback.jpg": "b23b243250aa447bbe385a6a7bf76db5",
"assets/assets/images/rateeat/followers.jpg": "ff3ddf6125ccc4f2651096d37a254597",
"assets/assets/images/rateeat/homepage.jpg": "ef5808afc80fae91581e011a9e60d36e",
"assets/assets/images/rateeat/leaderboard.jpg": "43a698d0f2a34dab2937ca27f28d960b",
"assets/assets/images/rateeat/login.jpg": "bceca8ea6ad15bf59858cbf7ba9f6a43",
"assets/assets/images/rateeat/notifications.jpg": "4efcb417d1d6c03ccca657859dace8c8",
"assets/assets/images/rateeat/order_amount.jpg": "7c9a61e6393573f85f6d9dda86ca94a7",
"assets/assets/images/rateeat/order_history.jpg": "ce2148f4e6d788e4a3509bbeda8dec83",
"assets/assets/images/rateeat/order_message.jpg": "285b692affe1e629915ac42d150d65fd",
"assets/assets/images/rateeat/order_payment_confirm.jpg": "6519dce60fef810e31485d3e9c0a6233",
"assets/assets/images/rateeat/order_status.jpg": "47ce1416b5033a3e19c8c25e39195033",
"assets/assets/images/rateeat/profile_favorites.jpg": "5955e9b24ada8af1ceced444e5e05884",
"assets/assets/images/rateeat/profile_reviews.jpg": "f224944a1250964c9b6b8b4ab86256b4",
"assets/assets/images/rateeat/quick_review_images.jpg": "b059aab33d2e2a43ce97fe5d2cb43a49",
"assets/assets/images/rateeat/rateeat_logo.png": "76716dbc5eeab39a5906f86572e74fa4",
"assets/assets/images/rateeat/restaurant_detail.jpg": "12da2ba73911590f6035f3a96b7d1792",
"assets/assets/images/rateeat/restaurant_detail_down.jpg": "930ce9b7bbb63df23db4ae8f31492dff",
"assets/assets/images/rateeat/search_items.jpg": "59248c734aabf930df197eb6f0dc7587",
"assets/assets/images/rateeat/search_restaurants.jpg": "9798b0164917ff90d81151406153ae3b",
"assets/assets/images/rateeat/settings.jpg": "ef4be92cb74bc9631d47f282852304ac",
"assets/assets/images/rateeat/splash.jpg": "e7e91e10ea04433ddac98048d78335c3",
"assets/assets/images/react.png": "03c74b0fb9a710532d317e98c576c72f",
"assets/assets/images/tailwind.png": "adb531e32fd25a8f936b70b423172d7b",
"assets/assets/images/telegram.png": "36e307b9e2301e87102aafcd445d2b94",
"assets/assets/images/ts.png": "1dfa3f174aea9a2258064e1abbd1d1bc",
"assets/assets/images/web.png": "6a7b6017950b1b6f329b24eee2373495",
"assets/FontManifest.json": "96fcbdac3b10a50372551cb5c3ef0e6b",
"assets/fonts/MaterialIcons-Regular.otf": "4ea977939aa5df05330a0ecd899fb4c8",
"assets/NOTICES": "9a3131a8f7567c80c19f960cf0f59cfd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_seo/assets/company_device.png": "4bcb758895d2e9fd8e28f0d791ce00b5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5c9cf1b60203cb55c5347f30e248f81b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5d40f9ec610c5f1cb7c259ba7348f405",
"/": "5d40f9ec610c5f1cb7c259ba7348f405",
"k.jpg": "4930f489bf28e3cac7c8c0593c7f6d26",
"main.dart.js": "c318a97453967b0d5ee10ba2712f157f",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
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
