'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6013fd6a8ed1092765173712b0543ed4",
"index.html": "1bc36b23fb11e3fed566f50122e106b7",
"/": "1bc36b23fb11e3fed566f50122e106b7",
"main.dart.js": "4632fb36e8e767d52ebfb2b0574505a0",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dee042bd8cca72b1616c2359e5ea699c",
".git/config": "ecd7b1e43b54c5e68d04b8fe93f45e39",
".git/objects/0d/eaa50c8d70ca6029b8fe790088b5599fee62d8": "40c9cedf6b03af9f59559cbd5e473ff9",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/309a99804b4ede3b0510eef241cb6074ba9530": "b6c1d5fbabf0f26d63e2e8f93483665e",
".git/objects/95/3c574926c4c0c1e5dc54305dd04ffa8cdff40e": "98784751c56de5017fb5e4aca0569dd9",
".git/objects/95/f81ccb5b5f6b6cfe8aec7410c810c8e6e6fdac": "55116a2590ab88e07b7f3ea9dcb5ae45",
".git/objects/59/adab82ce288aa6c8ea9317461e04be41b8843b": "5d56cae7cd48eedda1900039cc1e16fb",
".git/objects/92/f30c4a8cc13774a9884b6c0b04bb9b0e13e0dd": "090eaa1496d8df6b114250e4ced0889d",
".git/objects/92/e0ca9dc3b792bd1ffca688b8a783520ad913e0": "27b1d13196a2849466aeba9769d86af1",
".git/objects/66/6ff5bb0fd85e05c300ef0a281a80b35f10a0fd": "b7cfcb20207eff11a7af7863728882b9",
".git/objects/66/cc6febbddf3e129f9d241af7dedd938eec2178": "0dfc5663850fde4bdbbb847826431ae9",
".git/objects/50/243398553effcaee0ada7485b0cf3fa13450fc": "95994b3bc8ddb6aee807bc969997cd6a",
".git/objects/68/eef2d200c23775bd378b0bec40c93c69f9ee5c": "e0403fcb98dfcd3e7195d3ab754e5041",
".git/objects/57/f10afd6816a61518fe37d4cb284c654b6957ec": "7eb76d57bdb132df866b3c0e5f43708c",
".git/objects/04/df979e6636ecff3622fa0b22298b0e07250e0a": "d52cd354ea00963675493579c8e0ed04",
".git/objects/04/1676dfc2aee3d53b605acbaa7e9ebb6b5f0b53": "7edfc09b237911012bd1111e43ec78ce",
".git/objects/6a/b1fa50560793c4f5b0a72a118deead278cdeec": "02a4b4c484bc9bfb8a8011effcac865c",
".git/objects/6a/427b2697bf556f7ec8c26d4e35d551686eba61": "053d8477e5ab7e403d9041d4f8011050",
".git/objects/6a/8620e0c58422170b0bacb650e9c41b49878851": "903cb5d96c8e3638737c0f92f014c6f4",
".git/objects/32/daba593c4a7e57b2988f9c6deb7182d513d5b4": "bf39c38165cee58fc2bd819e38c68d1f",
".git/objects/35/6d693475cdb98c15c08b659a404fee247fb9c0": "d7a9f16fcbcf53f45b9cfc9b574350c5",
".git/objects/56/15ee50d387dc30d44d196d85892efd859c1084": "d2a44172c79be8dd5b51693f520999c9",
".git/objects/3d/ff6975bdd789d86158e9626245599eb588250f": "b4058bbb70f22f445f2c728ce5304c97",
".git/objects/67/ca297132d34b49a5aec4074a482d8339d6e396": "b6f20f830b5cbbb9aeebfcf4fbe17183",
".git/objects/34/156da95ef966610ab7205016c4d1770c9e195d": "bf944f712e0b1ed49fc081fe7c99e724",
".git/objects/b5/50b8cf893fbe249a966a1b7f78b31a002aeeb2": "da0859f64b0256844c4066a0df581bd9",
".git/objects/b2/cea75524301057fb578274e7e18a078bf9d088": "8cffa3868befb2127cb0893d4e27e1f5",
".git/objects/ac/6e76ad54449a7066460802f32f60d7dac487d4": "c6a9dfa2bc1bcede75f4f3615e8ee895",
".git/objects/bb/39de26b386350b1bd7adf725961a0975356cb4": "b172104619397887f5a08c3395d856b4",
".git/objects/d0/cf1a37f7858ec25e9c7d6d36073a857f4b391b": "7e37e21b0c41486bf93ead4feb2dd3ca",
".git/objects/da/6f6e8edaf832a53292b2bbb5f333608e4d551b": "668aa3db994c9b15caf33f27bc47fad3",
".git/objects/a5/a723ac9a4959bcff10cfae49317ef9b38b1e29": "a7c3c71166829cc48f3e1ac2bf0b3150",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/554a6a851666da8f1d6b41f4747140f10e13de": "d9bdd1e8213daaaae0780e071b918725",
".git/objects/ae/2b83f8d37228c1d1c3631efe224e2942e991b9": "b7bb1ff23a199ac811d8781fec7fa645",
".git/objects/d8/ba023c29baa3550734c904e23f10aaccfdebd8": "5c4e8659fe3e3547a5f84e3ef5f487ac",
".git/objects/d8/e451fe5c22e6df8b489920b28eb5db4d6e5761": "27cd17ced2217f2cde7ea1e0db2c06b7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/a4674060edc67b151f16ea91bcbc146e98f349": "f3edb88769b462f359772a9b072f80aa",
".git/objects/f3/f0c5d53f0970e6d0bb83d81ed99e560d9679d9": "6fa96f45008b703d2d52163358574f3e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/5516201b157b5b5ab9fac3d370694037002050": "7e3df640536705bca4091bd1d3183572",
".git/objects/f5/4c8ad37466d970b9675d4d107d0bfcb2623bec": "29785598d809fc0a0c46d1fd6808a980",
".git/objects/cf/b5afda700a1d3c5ac46c6d47a44c699b43df68": "1d1a4e3224f1d878e209248bbbd3420b",
".git/objects/c1/3ca965f42ffb4605f64a1e827a138b59cd3416": "414233d75e2c823dce81f781198df96e",
".git/objects/ec/fe3940d8c2665e86a4f795335c49b61bd2ff0c": "8573ffcdcfeff0ccbd3a915859889775",
".git/objects/ec/27d1fcd8665bd86c85612850305636033f5c7a": "7c02cd35e19a50452fab82ac18f76397",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/db4beabe273202ab9d34d3865cdca2748661a5": "6d43ca269afb5b35513e9a5bb65199f6",
".git/objects/18/cf71e6272edb566ed2ec351e801bf40760e9a5": "4e24dfce19ea53c451007d997317dd6b",
".git/objects/18/8286a3434e7b0bb190787920a4c9d82f09f71e": "fc5758ff09045b0a3f7002f6538389f8",
".git/objects/27/233c2aa9155348c8646d147823f97820570c45": "f495444cd4ae250930d63ee7b5b59da9",
".git/objects/27/9ffbd93b85c56c6d648a02296708e2e10f89f8": "1bd823ffa75250db97b0c9aaa7611c09",
".git/objects/27/a33e76508b8330c9a84fbf75ebdb1b61fbc133": "fc44746896562ed0b45eb251443061e3",
".git/objects/11/609640f516c60dfcbb82f4d0578e8e04c73e85": "c97b60056459c613a09dbba4801add2a",
".git/objects/11/af46936186cca9820436b6a762bcbeee5763b8": "62a529e666d54fa10de01ad4cec9c188",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/87/4c83ae4817114b83e303ba9264367080677ced": "54790710146a81f5277984f33c6f0c94",
".git/objects/28/cc2469bc48831431b35deb96291f3fccc3ef0a": "45bc8796ebf14f3d7c02f4495a37fc1e",
".git/objects/28/70c3448e34574a30b75b617e222b01b7eec517": "4b887b16cf9dfddff19cf0fcf8e905c7",
".git/objects/17/4dc7311b3cb3f8b6b1899754e61203e06886b8": "f17751aa2af1efef421b367e2f0f5aa7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/3778e1dcd7e0a27771be4cd4a79c39309ad46b": "c003e0f43513316825de234cdda45b68",
".git/objects/10/0327bbaae8f9cc22826e9703dced6fa7478cc4": "27642b320a9da520dc631ef4a85fc5ad",
".git/objects/10/b27e77f21d41291af43cf9cc86e7db48e851a9": "a227e6dde09a9d80992f96322caddb59",
".git/objects/4c/7b5143096af4bb09b4f0764a250a6a08a17d33": "ca3c3dca9d4dfad33d3ebec6f22b91b6",
".git/objects/4d/7c581e62923b81c4f835bd3863f161316969ff": "e0c177addfa64873247d02005bd85438",
".git/objects/75/68260686aa47ac9e5ac0cfa4302e4277880807": "beb983f6efad32e3335f1cb24594188f",
".git/objects/86/50bdacb7f24d31208271e9dfa9bd203b6e8e65": "d508a1098a3d8984eecd1f210d422111",
".git/objects/2a/2dd0849a410d360d3ff139e11095d44f5cf5cc": "898c755d22952316f2725af09d5d5826",
".git/objects/2f/bcbdf9a4f6a53af4c35b99e8416e58aebff9f7": "69503a27b5c559e03880bab852188648",
".git/objects/43/6dc4696e31dd6a0bd43fbbf975a63fcf0e6d99": "7ff31282d7e9add4b0f739842c7bc0e5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/8c1445f0d06067b8a6f158aa9660a1d3abeb30": "1a6ed52e1ae522b45f22534d8f0bb706",
".git/objects/9a/905d2bfb183b90a6f8013f1e080816268a2b60": "4f64e5d0e9fe31813652714350bcc000",
".git/objects/91/9f85b56e182784728b3dcef2fc55a9911c581f": "1fae0776c806228cd1070eb4c0ba12c1",
".git/objects/3a/da95ddc02df2d813894718d895ebeb9fea1039": "d510b95940f29b1f8242e6ec14af608f",
".git/objects/54/82edeec969ec786c56e20850dab15b7f7c989e": "6d02c961c2e4afe8d024c02344f81697",
".git/objects/98/9c57bc2d85ddae695c33cb5efdbca1d11bc582": "28e5c82ec8de5c29a03d58029917836c",
".git/objects/98/390b3d14743f2488b747f2256bedcfe7aff4b8": "af7b5e63f096f7020ab5cdd812e64ae2",
".git/objects/53/b4a7809e3f3acdd33553c7c933907b6381f52b": "aa2cffee63ae35ad50dd13eaf0c33a61",
".git/objects/30/011f3ab071240e7af714a64958e64c2bff786f": "1df9b99ecbfb5981353e80d80696f1a7",
".git/objects/37/261a959eede4605eff13f7a59d0882af0ab58a": "3aaec9ef52a1d924ec08e3852a92a028",
".git/objects/08/6be6b7bfdf1d8b4de5b28f1aba28700d0a42c8": "9728aa4dea2a1524945ff40c70e51bac",
".git/objects/6d/ac2cab48b3f1b7d291f3c806e2b8d3536ff2dd": "c3eb014f61ffd85526ccc9061f68295d",
".git/objects/39/258ed4d44b32e92398d91dece3f151da5b07ca": "d32bb3f7ae269719fada3a8b15b15a08",
".git/objects/99/4ae9a85274859ce98b13b44b20d4e03d635e58": "2ce48276e51ad7cf1ad722131ff5f6ad",
".git/objects/55/43a32cd173ff028f7ef86b359fd5e98498f5f8": "7b28edb423bb0ef6d678ad4abf569b7e",
".git/objects/0f/5a12739e58ed7e84558dfc2bf3f1ac98f983f1": "337f64a9411277901f50c5ee435ccb46",
".git/objects/0a/ca2bea47cd17d42d931d31f94f2672b13a20fa": "8bb6414fcd419a44ada706a545dec9ac",
".git/objects/64/dac11152221f73b3da5ac07f5c54a60cd254e8": "a95d340691bcd3dd1dd6467917bf5034",
".git/objects/ba/59303e7eabd356191d989370cdd24266eaccb1": "a129b8736d99bc343d92833904b56793",
".git/objects/a0/3f69aaec5cc74359f42d2cc45281667f44063e": "df142e7a1cb69c55292cccd4d65e8383",
".git/objects/a0/b40caffedd430f3fb390100be2540fbde2fe91": "f0aea3f80acd2d3d2559f65d1ee5b56a",
".git/objects/a7/9212aa973873569a8f6fdeff743904e560b0a8": "6db1d1d0d672b7ae76a7d590a59567b9",
".git/objects/b1/aeb036ab4ed1a0479fbe4f46c3d53c2236644e": "b387fea93e6216d91f47b2f17c607c54",
".git/objects/dc/8157f977240afc26b7d9d9875780a4c0cdfd90": "a99c29e00e58b1d2764272316396755e",
".git/objects/d5/c2b69eb4b2cd000af3d9cb730b459afaa063e9": "4a85180b544c55b95e8b1789f1f81378",
".git/objects/aa/ac48cbc7e32f50bf249d246ebcf57d03210a67": "5c2954f81ed68cc96f65ded85bb17ff7",
".git/objects/aa/4395d7b9694851066572642907e0a139b7a1c2": "f5e5788930285536365ae64c425d584e",
".git/objects/af/61e7e8273eefc670b591b7329f211dfdedef74": "00684f7237d76cde54ee2d0f9933aa83",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/95abffed5e2ff1dc2cf78d1768c6944cebfd4e": "306e1a61766406412fe60327622be89a",
".git/objects/db/67189bd34c3315635cbf82924fe287e5a9f13b": "462e45dafc47b388e78860e93ae066b5",
".git/objects/a8/ce6f581c7ee4975a3b44c34a9755f5f5623b98": "120ef2084f37148a91044337512ea66d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/190522a9707e5a5c11a3de42677d4c9c2e2cc3": "53d340d877f3e219cdfeb2f101f17c9b",
".git/objects/c4/df11795804c6c249bc689949190945030cf844": "be3e5763f292355e72577696e307bd55",
".git/objects/e1/060ab456953fdf94744540cd3bd7d89c232b1f": "423101e64658d0a26b6619d50f17d640",
".git/objects/e1/f16b9f0671acfb25e9fbd24a7ae57c0e029262": "c7c868276ff8505845a792b60cf548c7",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/4b910e49274e935e8ead5469ee4aeaf0116e72": "6e24ea06d9e67297bf333dd5ded8acb2",
".git/objects/c2/47692ecc0894c248e30c6ed04d523cb4168d62": "fa03fdfadfd3be2c6ca8b86589869fa0",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/fab5c7996947acfe6813f441e3563d364d8847": "7902ceb63d5a285f56033732b3cceb46",
".git/objects/e7/0923085ba6446c57e0a7b974ea1ab3a2efa7ac": "417bce2d53aedbf071205f3a57dc324d",
".git/objects/cb/ec2ee77a1ff23d6c748dc98ef811464825b87f": "e51f6f012f9bd0542ee0b09759c67b12",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/be618061d6c0c6cbbbe519e03274c30324da32": "582fd2ee843ad58ff0522168011d36c9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1b/bcc3299aca978010a05920760a27b98664854b": "9671c5f71808ade55a99f6b284d1e1ea",
".git/objects/77/d9c2cb4cdb882fc498bec5352b391fe504cd52": "1f4f62b3eabaf0249790a1f480ca5d2c",
".git/objects/77/61aa516f4ea7c25d744d1245c67f727b83bfbf": "3dd1b08093fe18871354a77b31af59c1",
".git/objects/48/553f66d757ca2886a44a7ac807c256884252c5": "0d109f180e3280e0d7de710b77700f6a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/2cc9a382bcfbf9ace0d082ac8d1350510f7fe0": "9bf3dea0e07658ad26f8be16d14ab7fe",
".git/objects/8d/1b2e58da9d9a7a9f5a5173dca3203525e60c03": "07abaa5ae7487499fcfa83074b50852f",
".git/objects/15/2b9cacbdd6b6a54c429e31be415bee788303b8": "939290218b05486ff55cd3a7f6f68af5",
".git/objects/15/e67ebb720b0566df28918abcd7aea1097bbbd1": "a72b07dd9255a987555e03077cd158ba",
".git/objects/12/340dcfea3be34ae3227ab7f5f52fc5a0db897e": "2c868d60fbb0ec04b2cb56246aabf6cb",
".git/objects/8c/6edf4aca8a0dd8045d8f4735eaf292827fc50f": "4d9987844093a684b4c3dc0fa3bcd9c3",
".git/objects/1d/bdb459efc76b82a77570afe07e6574bb3684fc": "18a0e80b66f75dcbf97f65c55a159bac",
".git/objects/76/cc400b8580e24daa79a95da9103e7ecc3e10b1": "3683fdbb6ec9340ad07c9eba564e72b5",
".git/objects/76/7a60b5c65e67efea5501936e77b8ff0aa573c5": "59c9d52598706c498b78f6056a43464c",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/262689a18db87b9afb65f8db0d44a6747b6163": "7fbaf0c791417a5c9fc0222088733114",
".git/objects/2e/1aac423082664271c4f83341e13ff7d3e84ae2": "14d8973e34ab8cf689e80bc0bf84492c",
".git/objects/8b/92f1359346ba9d3680046a503026b84f053612": "4611b06cfc3a3239400daf52d17e486c",
".git/objects/7f/bef46cc4d0de759b97a05b14d7cd10f1820128": "45f04119283bed0a31f1570c61ed8fe3",
".git/objects/7a/e0677b7a08704a75a08d578b676d2a56506fee": "7eba54a297290268f72bbaf658b02e8a",
".git/objects/7a/735c258aef7155ae20f188332779f587bee1fd": "4b34f52bb1fe5b3513d72a13534aaac6",
".git/objects/8e/aa02d9991af494eed0460e9b7b763bcd87ae7f": "ed2ce9963763f69923f01aeaf56abfaa",
".git/objects/8e/a3ae0a9d44093673e9f1aa63f4bec98aa0e12e": "1d703ab23a57207f241ecefa4d752d46",
".git/objects/22/a65e8ecbd2509f682e8826770c69ceaf02a024": "aa344372b5620498519052b55b934ed3",
".git/objects/25/109d153179e979bdd22b1beb77f3edf5e8eefc": "4aaefcf7a0a0671ca2c2fb0f35fc2866",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "32ab7931337ed9c2d3d087d64095ea1a",
".git/logs/refs/heads/main": "7b89c257fe2d5b6c44d75948cf6f58a4",
".git/logs/refs/remotes/origin/main": "e70bffc170159bd26092d3d929acc90a",
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
".git/refs/heads/main": "c3977ad3a9e67a4a4bd0cb1c5e9041a2",
".git/refs/remotes/origin/main": "c3977ad3a9e67a4a4bd0cb1c5e9041a2",
".git/index": "bf2883d3262c620e23709e39a9117d4f",
".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
"assets/images/world.png": "ada31aca781d1901fdecd948c7f8adc0",
"assets/images/russia.png": "8fe59663c1cb91c8eb24e4803865b1d1",
"assets/images/hungary.png": "4f7eb81189819376397386eb86e3b534",
"assets/images/poland.png": "e0260c7e76ea5009a17509a780e078dd",
"assets/images/cypriot.png": "0da0a9b47fa37ab123787144ed7f0424",
"assets/images/ukraine.png": "2c552ecee060a18e5d50b7093f9534ea",
"assets/images/byelorussia.png": "930945b3498b6166c31da3e411b0f3ee",
"assets/images/armenia.png": "44507fdeaeca1a54590ac94195911b74",
"assets/images/usa.png": "c9f2469adf68e4710c9a07a7b63d66de",
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
"assets/images/canada.png": "118147b77ae26bc08fdb1cabfbc7141a",
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
"assets/AssetManifest.json": "93c469558f33ecdc6db3a5bc3b872f89",
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
