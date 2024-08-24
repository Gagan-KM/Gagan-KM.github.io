'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "748ccb2c5597b221ca88fc80b7c75ce2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "287ae3c27e7304baccc6a4318bbac6b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb1ec73a67056f737f62ef2027d6a845",
".git/logs/refs/heads/main": "7c8abc8466fe07bb3e725d2ac32d54ea",
".git/logs/refs/remotes/origin/main": "3d1fe59f80a2f686c9f86cdc21af3922",
".git/objects/00/891320ccf759beb9d8fb60816d763becfb4b0c": "5b0f05a7ccd5c6d8227b5de5064beef4",
".git/objects/09/76a6c8740e2285cb173c3d97dcad64049efca4": "7f475febbcf29ac5abbcbe9e06c30b3d",
".git/objects/0c/1679c64e4b3dc427d7cfb42395a1ee1bb17c0d": "24e1f4049404d9364874dd567eaed86a",
".git/objects/0d/6c97b8f643ea91057b514ba49bf312cc09b45a": "e2e9aeda4840a009e7f6245e1570a4fd",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/9fe2d573d697c420778dd397960dc169f7acee": "c0a135fb44961b82f3173edd184c8034",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/8cc3c16974bbe250fe3ec7411f465f8517774b": "f1ab834780bd28b5bf2691daa475d2ab",
".git/objects/1b/4cb817cedcdb2d10ecb1f162f416058f778ae9": "27a54b4a30a53a7e37f3a00aba82e298",
".git/objects/1c/a2ed190640d806bed83ef4873ecde81c1be382": "494c1cd581aeafe7a954d25f975ce726",
".git/objects/1d/199633d2acebda017af15f2157042ff2404242": "8faa17d460f65065e46c2483d5f6c060",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/26/930cbe8520b2e28d20c8c5091debee50b6a296": "d895671f9203be10df6a078562fd7c88",
".git/objects/2b/fc10402abae0fa9cdcb1f647a6d1f8e45bed9e": "c6e0340d37f4a81dc17890d9d38e2bff",
".git/objects/33/b1959abed103882d1f07d54680a28951b28d03": "275b9698f6da2c409877995efa2c8889",
".git/objects/38/7422a3c6b392336b9061990456552a2a561e77": "058c0983cd6ce8b27e2a8e880606c0bc",
".git/objects/38/fe25ac8ec84b08de02a3aaa6e74016eadbdeb8": "68d5973f8656fa1948b9ca81329fb706",
".git/objects/39/6515a929f9e6cd3fb85bb68ee643eea646ce4f": "6d8d0ae22eca5b1c48efd5a59af988af",
".git/objects/40/b19e7155b265eebbdfbb0d8438403c1a317e19": "2c0756b902a38e6d8b1b9bc74de50a49",
".git/objects/47/a419053b7e9af1bdec0c4f27ee3423fa389579": "def7aaa5f5e882cedf5483ffca443482",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/7330d2cf8ccc307863e6df0268c34da62fd9ad": "47b04ebe16150bebde06d9bdc7676eeb",
".git/objects/56/625ed5904a734a801944a61f3a74aa79662326": "10c87e490c98b90522a8780ef1212453",
".git/objects/57/02121f11966d657cea55de26a95f8f2bf0aa73": "9790f2e53d20c3248e493a456222154b",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/61/197d39b97387dd66d8443940d1bc88ced920a1": "e3c703630e6fe6c6edf936e3b8f45602",
".git/objects/61/eb6f698c3669c9938d0a161befdfc24288e101": "a29c2e357d488fa89d2e5cfa4fd3025b",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/975f0ce6adc0b62cba05cbb8d938ee7d034aad": "4dbbf8e27ccbccb696e023dcb4fc4049",
".git/objects/69/c56225224dd7966c175a0fed779547813743b3": "e8560c7054a180fb8e473dc6544f2372",
".git/objects/6d/c37e99ba80d9b127d2e8952125a991a95af96b": "a062085e89aceddf820895fe280c2279",
".git/objects/71/0b4adc2ddd5af4c04ba21b9eba7e0aa307e56f": "e3273061c7213ec03b349cec6bf2b6f9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/0a18340cb6f9fa276c5528ac72839e1de8df77": "6c6a6a02da081912a70f0ea698b17fa6",
".git/objects/7a/35d5640753a79de0b5329636c5b5c9a95edd9d": "dae99cbf81dc0b904d3c8bd3036f1782",
".git/objects/7a/a9e3eacb3123be0276fba259b02e07b0726705": "df1e94f26084bac6346e98368345c788",
".git/objects/80/5e617854bda622cdf315c4811b1f9e2ddb0aac": "acd18c71da0afc32b76e2bbfb972a0f9",
".git/objects/83/5cda210065eead44a1a7d44bc21ce12e4f8711": "e54f241c16dc1e89199af02437a19b65",
".git/objects/85/fba2edba97af5515264a86ab0a4f62b2a02970": "ee5059e1fbd4a2f3a8222f57197ad6ff",
".git/objects/86/1c3093b377a427612eeb7a0a1ffa5c362c417d": "76553fcf6cda369a72460a997602f112",
".git/objects/88/49c409e0ac79c11d37028f38c2ef5a8c4599c0": "77b9d9623da5de9d3fedea2866d6cb12",
".git/objects/8d/3a25b06dd52e3e7a45578adc7f6fea7e5d876b": "8515dca6631397fda04a5d8cb481e138",
".git/objects/8e/9914e6209ff3c32865fed74d191964ae3809d1": "9aa59cf0cdea1345fbdf22921ea6baf8",
".git/objects/93/15a93a9f3dd2d653840f97b381d32f7c2a9a35": "c1c720e08a52d842423049e04cfaa0cd",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/faa03602bc141f3f81d5d668c6b9516d215515": "74f7413ea18d04f4741d3e9731bb5ffb",
".git/objects/9c/46ce80768b1e0015dcc70a0cf1a741b453e465": "493ae9d6fccfb6b04b1207c9a47e5207",
".git/objects/9d/37e77a2f4664afe07c7459683a75fd24eebb8a": "31fc62a5681ba11dba0c92f8c9732a2d",
".git/objects/9e/1d07993b9d64461f093b270a56079fc548af2f": "b715b1612f3ee64787a6944a4e10d6ef",
".git/objects/a8/47e78cca6b7c6f0bcc2e2f8aae0ba11920d83b": "ee27d46eadf381db9f55450f60b0b5f4",
".git/objects/b1/8b3a3e3280ec6f36b641ccce585b5e6aee5abc": "785a8c96b26b1d79be8345f4a2f24130",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/1972b5bb87be35521775fe7ce5ee7520a4c1bc": "98304ab63e08efa63b2681c3a30362c0",
".git/objects/b5/3091c3a5542601517f335a2a75e5cc7cd945f4": "d4ad1a9fa7d5dfc01e8555f78e27734c",
".git/objects/b9/7d9e4029afa65f059acbc0358a9121c25032aa": "c039a004eacb42d3f94ad7b8325e715f",
".git/objects/c8/617cdb05e592ee9ae3002bcd20a95f57f9aa4a": "0bcc359411f4e7fa8313720fbe1e7919",
".git/objects/c9/59d235a4247e39980282ea1b508a9e65a4c528": "4796c8ca258163446fb2937b2c97b647",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/e285cf8e405b7832b1db0703ee119cae369dc2": "e1af58d33d1285067b8969b28173e0df",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/2856463c0d3c7f95ce5e2c185ec0ef72515b9f": "0b6233802c98f299f64bc81ecd566298",
".git/objects/d3/41ac577e99e63eb1b4c67207d98ae08ddecaa8": "88321f9d9f55a694c9c9c3fac68e07bf",
".git/objects/d3/47d94c75d51acb84268a9ded882964cb2f2939": "c80b22a24cc1a04612afde36fb1f5e9d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/a85d01180bcb7740e691c7c9ef42f75dd4765c": "03382da7f5a500d5adcdfeb4a3de82ce",
".git/objects/e3/5f443778b02441dd66567ed014ecc574dbdcbd": "5809b07b802e44b894a90362a84a7dc9",
".git/objects/eb/36ee5b92b6cc744a1c856f92210d74a97989ee": "8fa8879a4368eaf4a3cefe7fc1bf0f92",
".git/objects/eb/a0530ce95391c1695421f1cfa7c0b862a19682": "3446f96343b2e47daf20e5df1fdaf2ab",
".git/objects/f1/935f71585cddf3af14394a2a7fc9ed6ae31ebe": "e6fe61443a4397c2823e21b98c552160",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/61c2a67f40a4514cd16a20ed7f07215c49de11": "65302c3cd397658b5769429f825e3394",
".git/objects/f2/e2e6ab3213b07da933dae74373fda701d4c384": "de6ddced38456eb958c0efe46e4bd981",
".git/objects/f5/b87f8e793f1602dbb402b7429b5fb5d5bf9064": "6ec7d004670fbe6491b6f84f5ed05e37",
".git/objects/f5/e355b9792a5da7ad02365e9bdaf751bd740c64": "46745289c3e05090f6856ef9bce0afb2",
".git/objects/f7/d9a208e09008127652af0058514b83771c89dc": "f79a5bd7b298474c21cacce8bb51b30f",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "57de0756673091145d30e5b28e971588",
".git/refs/remotes/origin/main": "57de0756673091145d30e5b28e971588",
"assets/AssetManifest.bin": "d4740ee8e42807c718e54ffb859f9f19",
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
"flutter_bootstrap.js": "9ae249cd22a10673546c6c976fd1e0f2",
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
"index.html": "e6027b184a05170b9801c7f60ccd97f1",
"/": "e6027b184a05170b9801c7f60ccd97f1",
"main.dart.js": "033fdd8856cb9b98f900ebed8a607bc7",
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
