'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "628fa574c50a17c67a711a7d1fad56b5",
"index.html": "5441f87945bd225531ee2cfa3144f994",
"/": "5441f87945bd225531ee2cfa3144f994",
"main.dart.js": "06ebf00df91130caa13724a910ad7bc3",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d5d3211ac906f31154fe47bff003a4df",
"assets/AssetManifest.json": "d161e79a073efec0e7747944f252d285",
"assets/NOTICES": "c70a1c1284fdfc697b1bbf44b79a5c09",
"assets/FontManifest.json": "2c3aba7422b09e25b78549eb18a043a0",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/math_keyboard/fonts/CustomKeyIcons.ttf": "b0bace3f25c2bd05862680e5ad4c6b54",
"assets/packages/flutter_inappwebview_quill/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview_quill/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/sn_progress_dialog/images/cancel.png": "be94b63af32e39fabad56e2cab611b4b",
"assets/packages/sn_progress_dialog/images/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/packages/country_calling_code_picker/flags/che.png": "d44e6f4633f3a31c5b9362ee3f4a0108",
"assets/packages/country_calling_code_picker/flags/civ.png": "eb48d98bf2e6c5f7ee76d675bb87b322",
"assets/packages/country_calling_code_picker/flags/asm.png": "e97f26092908af1444f6c43a7f2b79fa",
"assets/packages/country_calling_code_picker/flags/qat.png": "3e3e61b453ea4758d2fbfc66ebb45a08",
"assets/packages/country_calling_code_picker/flags/gha.png": "7704b982e13de49c6c2d6ab36b4e2b63",
"assets/packages/country_calling_code_picker/flags/bvt.png": "dbdb9f8ac5d68206d2594c794cc40337",
"assets/packages/country_calling_code_picker/flags/phl.png": "0d0a3524a936051c844942be722123ad",
"assets/packages/country_calling_code_picker/flags/ggy.png": "e85196fff070146110f1b0248ecb2745",
"assets/packages/country_calling_code_picker/flags/blz.png": "b45b7b8986577fde99e5e45ade93b908",
"assets/packages/country_calling_code_picker/flags/blm.png": "25422782415b282a34fdcbacb33b5d2d",
"assets/packages/country_calling_code_picker/flags/khm.png": "f84f1d590e658107b07c467d3d3aad6e",
"assets/packages/country_calling_code_picker/flags/isr.png": "df890d0e43a14a93c1b5477a885d8a9c",
"assets/packages/country_calling_code_picker/flags/prt.png": "edba0baadd1ba7de1ffb4da0f178f883",
"assets/packages/country_calling_code_picker/flags/nzl.png": "836bd352344bc6cae216eb399284ee2f",
"assets/packages/country_calling_code_picker/flags/esh.png": "3fb86e5734f13adf07014f39c8b81a6f",
"assets/packages/country_calling_code_picker/flags/sur.png": "f67c7a9bed31d5df5813684a198a2d50",
"assets/packages/country_calling_code_picker/flags/swz.png": "7b261a4bcd414e1d2a3221775b9b20aa",
"assets/packages/country_calling_code_picker/flags/sle.png": "366f205ef6e9f4683e01d836731a5ffd",
"assets/packages/country_calling_code_picker/flags/sau.png": "70d94858c3038ac3623c273a3f215408",
"assets/packages/country_calling_code_picker/flags/svk.png": "afdcf56b8681539ed5db07855403d29d",
"assets/packages/country_calling_code_picker/flags/ven.png": "cf33a99e4f006817501dba105df3fb4a",
"assets/packages/country_calling_code_picker/flags/idn.png": "13d83641ab0410d67137ddfc113f988f",
"assets/packages/country_calling_code_picker/flags/ncl.png": "0490327003e80c67a54410e8d4158a0f",
"assets/packages/country_calling_code_picker/flags/pse.png": "3849363b230766e5d939bba6925c4378",
"assets/packages/country_calling_code_picker/flags/grl.png": "83d4e2e1bdf77b8c6b9c4f1d41fc6260",
"assets/packages/country_calling_code_picker/flags/egy.png": "af46dac212edcc1cd3cd91ba7c46ccdd",
"assets/packages/country_calling_code_picker/flags/syr.png": "8dbbffc2b525081c7ef9ab4d9c37d861",
"assets/packages/country_calling_code_picker/flags/flk.png": "4815dfb9ce0569e01cca267753091cf8",
"assets/packages/country_calling_code_picker/flags/cri.png": "3d750d2970ac13aaa40721d68f42457c",
"assets/packages/country_calling_code_picker/flags/cpv.png": "5f899343bf87b961eb14d8867c58db81",
"assets/packages/country_calling_code_picker/flags/aia.png": "bfeaa23e93cb0d509692e9270da7c68c",
"assets/packages/country_calling_code_picker/flags/mkd.png": "5df6906e82f1f8c4255dd37c598cb988",
"assets/packages/country_calling_code_picker/flags/mex.png": "6c6e7f803183e4eb8bb5d86790051a71",
"assets/packages/country_calling_code_picker/flags/mhl.png": "5ef95bae70ff566e440cbb39a7a0c96c",
"assets/packages/country_calling_code_picker/flags/svn.png": "fcfb3104092ef9ec9dffa7eeee768f9d",
"assets/packages/country_calling_code_picker/flags/hmd.png": "77f2e7ee2d97218ebfa17930dce31ba8",
"assets/packages/country_calling_code_picker/flags/bwa.png": "1bdd05578dc0f9f1dbd6c796c2edc268",
"assets/packages/country_calling_code_picker/flags/ltu.png": "93b6befaabd88449595682a8231d2c00",
"assets/packages/country_calling_code_picker/flags/irq.png": "033533dcabe60bea53bc4818b6afc5ee",
"assets/packages/country_calling_code_picker/flags/lbn.png": "acbaca76ba6c3c69c08d595f9687f2ef",
"assets/packages/country_calling_code_picker/flags/lby.png": "30352d56fa4ef01d060a2c19abd6a9da",
"assets/packages/country_calling_code_picker/flags/gib.png": "879c75052710a3b20121a522ca9327af",
"assets/packages/country_calling_code_picker/flags/dza.png": "a69c10dccfb7144bbc9c0ed34fc232c5",
"assets/packages/country_calling_code_picker/flags/mrt.png": "7a3f46aab6c61a816306f38c919e11a3",
"assets/packages/country_calling_code_picker/flags/vgb.png": "e660ba41b8a6f2bb26fcd849978494ca",
"assets/packages/country_calling_code_picker/flags/ago.png": "0a021aa386233a6a0634012526964713",
"assets/packages/country_calling_code_picker/flags/stp.png": "f3de3395128822611cf9914a10ae3859",
"assets/packages/country_calling_code_picker/flags/som.png": "b60a94c20fba00bb08ee97ea3b8c61ea",
"assets/packages/country_calling_code_picker/flags/slv.png": "110bf04c9526acd86157fd44f89cab11",
"assets/packages/country_calling_code_picker/flags/smr.png": "88c3a7ee8d0148dc8b5b2dc1f68e051f",
"assets/packages/country_calling_code_picker/flags/msr.png": "bfbe0a5369bd84f04252aefb794c9eb6",
"assets/packages/country_calling_code_picker/flags/btn.png": "9bb93973bd80fb494ec19b7ceaf73906",
"assets/packages/country_calling_code_picker/flags/ken.png": "88f1ce97e902e6e072473657977f78d5",
"assets/packages/country_calling_code_picker/flags/nld.png": "ffe75d56f7360956472f7f1807dc2498",
"assets/packages/country_calling_code_picker/flags/wlf.png": "c6ab4417eeed2098b7072a94ea9f6007",
"assets/packages/country_calling_code_picker/flags/eri.png": "45f75d722ad5fc35094d53df39bd5fe5",
"assets/packages/country_calling_code_picker/flags/syc.png": "29cdc895bd25f4129a42dd2cdcab686c",
"assets/packages/country_calling_code_picker/flags/slb.png": "5d52f2b8b4b30a8a1f5d50fe1254f35e",
"assets/packages/country_calling_code_picker/flags/arm.png": "9db5a093861b35bdb365902fb6b222cb",
"assets/packages/country_calling_code_picker/flags/maf.png": "a318d23e4fea530988e8cf7aa5cf9d5b",
"assets/packages/country_calling_code_picker/flags/vut.png": "d77623f401909c659209ee069cd1d139",
"assets/packages/country_calling_code_picker/flags/mmr.png": "a380a899645be150fe562254792ebce5",
"assets/packages/country_calling_code_picker/flags/sdn.png": "59a1b1252d40015d6c2864d0682c6f30",
"assets/packages/country_calling_code_picker/flags/moz.png": "8d061cb78ae08201c9486439f55594fa",
"assets/packages/country_calling_code_picker/flags/and.png": "0db09d038dcf38b2354f1d8ba76b977a",
"assets/packages/country_calling_code_picker/flags/tuv.png": "ad1800f4198ee6bbd4964ba7aaa0ec76",
"assets/packages/country_calling_code_picker/flags/gnb.png": "ddad04d24851749be07ac84bc0475f17",
"assets/packages/country_calling_code_picker/flags/usa.png": "9dccd8bbf59e3fbfe40e0e5e6bcac9c4",
"assets/packages/country_calling_code_picker/flags/pyf.png": "0d4d0fea078370e3bfec2d1c727d09fe",
"assets/packages/country_calling_code_picker/flags/npl.png": "357704329167475c1ea77252f5eaf155",
"assets/packages/country_calling_code_picker/flags/gtm.png": "cc64f14d924f41302dbcf90a2471b568",
"assets/packages/country_calling_code_picker/flags/mtq.png": "889434ebd4bb2b22fa13dd4dfb9deba0",
"assets/packages/country_calling_code_picker/flags/srb.png": "6db0b9672ff7489e8a7e32ef859b02a4",
"assets/packages/country_calling_code_picker/flags/ton.png": "713e97b946f076c069e5684482e0bf93",
"assets/packages/country_calling_code_picker/flags/dji.png": "14fe386216d32aa66415d6e3feef6e49",
"assets/packages/country_calling_code_picker/flags/mco.png": "974075e82842d952dcb6c44e8e361e88",
"assets/packages/country_calling_code_picker/flags/mar.png": "c198a6d35238225776ebb637e6bf8f6d",
"assets/packages/country_calling_code_picker/flags/shn.png": "236542c5c401fdd92ae88506e520f11a",
"assets/packages/country_calling_code_picker/flags/fro.png": "b5eb9a76d949d4ce6978ed25ea4646c9",
"assets/packages/country_calling_code_picker/flags/ssd.png": "e3aad65d0bd4cca98bd1c8f0734dd372",
"assets/packages/country_calling_code_picker/flags/myt.png": "66d194d51c512ff6c591d3c238fc8d36",
"assets/packages/country_calling_code_picker/flags/fji.png": "95a2df6c7c5da507537804fff80a8b63",
"assets/packages/country_calling_code_picker/flags/zwe.png": "6d6649684865d196e6285cd12ec5c094",
"assets/packages/country_calling_code_picker/flags/rus.png": "a4d200c25e0b52fceade0017f8eac7a7",
"assets/packages/country_calling_code_picker/flags/bhr.png": "4eb8c6f5b79eafa6059afe4f48cbe459",
"assets/packages/country_calling_code_picker/flags/ita.png": "386e416002ca741c8d025414e7f46f5f",
"assets/packages/country_calling_code_picker/flags/ukr.png": "851d1e6d2d549d2d037a02741791673b",
"assets/packages/country_calling_code_picker/flags/bhs.png": "29fade24bf6601fe8638e7dad830d9e0",
"assets/packages/country_calling_code_picker/flags/cym.png": "87b9295926a3dcc5620352dc28768f0a",
"assets/packages/country_calling_code_picker/flags/mwi.png": "ecb712b61ef8d6b91bc74837626f5ee5",
"assets/packages/country_calling_code_picker/flags/mlt.png": "dffc17b29cf76d36aa37e23763a5f74b",
"assets/packages/country_calling_code_picker/flags/hrv.png": "1c9c4fabf228cf5f08d985b0543a3927",
"assets/packages/country_calling_code_picker/flags/jey.png": "f967e0f27b45d745390f4ed09606aa93",
"assets/packages/country_calling_code_picker/flags/cod.png": "60b703060db810388780501f51680c5f",
"assets/packages/country_calling_code_picker/flags/sgs.png": "a588d9232a23a26a15d7b33b3596d910",
"assets/packages/country_calling_code_picker/flags/spm.png": "6961e743779da221fc17de2664430c07",
"assets/packages/country_calling_code_picker/flags/hkg.png": "ff16522077088e3294e5c6e7eb513970",
"assets/packages/country_calling_code_picker/flags/cze.png": "56e3674893a39f31a861a15fb106087c",
"assets/packages/country_calling_code_picker/flags/brn.png": "37fb71582de829255ab89a3a5729f2f4",
"assets/packages/country_calling_code_picker/flags/eth.png": "b62d6aac8dffb850d3cfa1ccb85e973f",
"assets/packages/country_calling_code_picker/flags/pcn.png": "7e49332f6bf6305666792b96856a1b77",
"assets/packages/country_calling_code_picker/flags/guy.png": "cb05e193d32e6d1ca09b9dab90f4b710",
"assets/packages/country_calling_code_picker/flags/nru.png": "c0a8ebd32710006ab1e62240fd9a5d90",
"assets/packages/country_calling_code_picker/flags/pol.png": "1a16f62ac0e4397b0ccb70042faf46a7",
"assets/packages/country_calling_code_picker/flags/plw.png": "92a62cb13405f05ee61325da82dd2e73",
"assets/packages/country_calling_code_picker/flags/jpn.png": "013523c5acbc480143ef03eb4197c468",
"assets/packages/country_calling_code_picker/flags/mus.png": "eed56e32aa04396f227421f4e57a8b77",
"assets/packages/country_calling_code_picker/flags/abw.png": "c57c8193f40cf63b02ddefc21b139738",
"assets/packages/country_calling_code_picker/flags/twn.png": "1a1fad8a41aff77b3f96679201757ed3",
"assets/packages/country_calling_code_picker/flags/can.png": "08d6b60bd214d5a88daad803c12655f9",
"assets/packages/country_calling_code_picker/flags/tls.png": "76c4df3980561dacb8e7b52e6bec0bd7",
"assets/packages/country_calling_code_picker/flags/mac.png": "95507c6896574475ebc11767e1892f53",
"assets/packages/country_calling_code_picker/flags/fsm.png": "4a5d33eabe04ab744663eeca1c2ddd2d",
"assets/packages/country_calling_code_picker/flags/cog.png": "b26299ac47576178b9b65ee8ae5f7b6a",
"assets/packages/country_calling_code_picker/flags/deu.png": "94a3db23f1d0539d0646ed4f1f713d66",
"assets/packages/country_calling_code_picker/flags/sgp.png": "a784c8536396f4848955bfd2f61013b6",
"assets/packages/country_calling_code_picker/flags/vat.png": "40ebda892355114966c600b2b6ea2f36",
"assets/packages/country_calling_code_picker/flags/nga.png": "c35e24338e7144f9add7a09ac3853e20",
"assets/packages/country_calling_code_picker/flags/gum.png": "3ff905619541fcd22647beff2fab1e84",
"assets/packages/country_calling_code_picker/flags/bes.png": "32a4e6792fe7bff3e92619e46f4edcff",
"assets/packages/country_calling_code_picker/flags/ecu.png": "cf9f2282a4636efd980489eba3a189dd",
"assets/packages/country_calling_code_picker/flags/uga.png": "ab024779afeb2f2920d64e464483cf6a",
"assets/packages/country_calling_code_picker/flags/lka.png": "001f61f99d4718b554a504eeb8082c63",
"assets/packages/country_calling_code_picker/flags/gbr.png": "73c3cbcddc091966bde35f446c96055d",
"assets/packages/country_calling_code_picker/flags/gnq.png": "5603a141e9f4f18504cb4eab343b7905",
"assets/packages/country_calling_code_picker/flags/mys.png": "1cb1a85e1ed042c443dbebab83944f3a",
"assets/packages/country_calling_code_picker/flags/tur.png": "22f10c2ef19152d17955a1b8fb33d2de",
"assets/packages/country_calling_code_picker/flags/vnm.png": "a61c8b3642e61d5a8c54d3c42eb106d3",
"assets/packages/country_calling_code_picker/flags/aze.png": "e1579fbff5c945abd40d755e50bb3e4a",
"assets/packages/country_calling_code_picker/flags/sen.png": "2e82ba838ccb1a75d424437c0f5c5b5e",
"assets/packages/country_calling_code_picker/flags/cok.png": "98bac5a590f87fe9b18c11e17d6c4656",
"assets/packages/country_calling_code_picker/flags/omn.png": "18eb107e024517da448544f930f76797",
"assets/packages/country_calling_code_picker/flags/bra.png": "8456a4639f62a18cfe0c7f8655b7c75c",
"assets/packages/country_calling_code_picker/flags/ner.png": "195c53a9328c3da8334a8ff5f1f81491",
"assets/packages/country_calling_code_picker/flags/ind.png": "74fb4d265341d42e8422a6584ab55396",
"assets/packages/country_calling_code_picker/flags/lie.png": "508bd2b649c262690b93c0d41fde6610",
"assets/packages/country_calling_code_picker/flags/png.png": "e828558961e130103a8d7ac5c97f2c3f",
"assets/packages/country_calling_code_picker/flags/cyp.png": "4438d0c7cd046ac53f8612a8de9c2529",
"assets/packages/country_calling_code_picker/flags/fin.png": "cf07cc15a112623c4f6fdf6f65efb44b",
"assets/packages/country_calling_code_picker/flags/tcd.png": "50af69bf9db863810c942e93c19edd2f",
"assets/packages/country_calling_code_picker/flags/mli.png": "0683cd775f941c28bfd7b2d9e8770a5b",
"assets/packages/country_calling_code_picker/flags/sjm.png": "dbdb9f8ac5d68206d2594c794cc40337",
"assets/packages/country_calling_code_picker/flags/aus.png": "77f2e7ee2d97218ebfa17930dce31ba8",
"assets/packages/country_calling_code_picker/flags/zmb.png": "07646c15260c4885d761162fd57bb738",
"assets/packages/country_calling_code_picker/flags/cck.png": "3384914cf2dc99c2e2cfa7ed41d279d7",
"assets/packages/country_calling_code_picker/flags/tto.png": "fe1eb7e34d44d795e5c2153128b5f91d",
"assets/packages/country_calling_code_picker/flags/brb.png": "5ead64a1f351b5b95b3c2cf659587af6",
"assets/packages/country_calling_code_picker/flags/iot.png": "b8b58395b45faa34769178f8c740d51b",
"assets/packages/country_calling_code_picker/flags/bih.png": "ebab19e5e3f1a9aa04126618afc17f2f",
"assets/packages/country_calling_code_picker/flags/rou.png": "8929eb91cc2e717a903fbeb00aebf303",
"assets/packages/country_calling_code_picker/flags/pak.png": "314926d92541e90daebc99c589c96cdf",
"assets/packages/country_calling_code_picker/flags/ury.png": "3f6e7796adf8c177b4bc56ad97cfae0d",
"assets/packages/country_calling_code_picker/flags/nfk.png": "5b9f96b0738662f9bf5a3a302eb5686d",
"assets/packages/country_calling_code_picker/flags/ata.png": "a8858d876c5f990108bbb108f6558e87",
"assets/packages/country_calling_code_picker/flags/com.png": "5c6a991942aea19f19c62ad8f0b4140d",
"assets/packages/country_calling_code_picker/flags/cmr.png": "1ba4e2ffd0c59138e980bce0bfa04e70",
"assets/packages/country_calling_code_picker/flags/caf.png": "ef912e1657e02fa67d774356bc986a82",
"assets/packages/country_calling_code_picker/flags/tun.png": "635faffc46bfa5ff8f865fd8c8d3159f",
"assets/packages/country_calling_code_picker/flags/tza.png": "d12c9145999df9b4eb0d2c64c5a26b0b",
"assets/packages/country_calling_code_picker/flags/gab.png": "1188189d37cee29fd44bc030b5c1385c",
"assets/packages/country_calling_code_picker/flags/imn.png": "97d3111637f30a869d0ee3587e2fa6f7",
"assets/packages/country_calling_code_picker/flags/ben.png": "7a8cb4ebc9e14bb5f18234e5c9752f84",
"assets/packages/country_calling_code_picker/flags/kos.png": "fdcca26afc5f017d24f5bddb003481f2",
"assets/packages/country_calling_code_picker/flags/kor.png": "347e3f67ab4b6117e42b8e12b369716f",
"assets/packages/country_calling_code_picker/flags/kna.png": "e2857f64bbd8c1597dcdc686427da6b4",
"assets/packages/country_calling_code_picker/flags/guf.png": "108f04a4998e93da5cd6e53a50a357e0",
"assets/packages/country_calling_code_picker/flags/wsm.png": "7a803133ad6451beea44281c4fc22d78",
"assets/packages/country_calling_code_picker/flags/kwt.png": "52bbfff669ffcfd810b6e3b07ce10c72",
"assets/packages/country_calling_code_picker/flags/pan.png": "f87bee4b7d9b9b3665717f656a368824",
"assets/packages/country_calling_code_picker/flags/rwa.png": "3b6a2b4c5534b2eeabfc9e45ec189d6e",
"assets/packages/country_calling_code_picker/flags/cxr.png": "35389c9b393d168bc333c2da4d031b2f",
"assets/packages/country_calling_code_picker/flags/cub.png": "a4fe95bfea0fbb0e34bccd1fe8aadc08",
"assets/packages/country_calling_code_picker/flags/alb.png": "5d3630f58937059269efdd952203f40c",
"assets/packages/country_calling_code_picker/flags/mnp.png": "ae24d1d0137f018602ac2b6b4c908359",
"assets/packages/country_calling_code_picker/flags/mng.png": "091a4443de228168a92b3ce1453ac236",
"assets/packages/country_calling_code_picker/flags/col.png": "928a9a409e581e74ab0c6c6a4638665c",
"assets/packages/country_calling_code_picker/flags/atf.png": "ff7ae5f4face0222fe9197200e8e0d88",
"assets/packages/country_calling_code_picker/flags/mne.png": "b71d8b3240d1a33cbadcad9837fcbe78",
"assets/packages/country_calling_code_picker/flags/cuw.png": "cbea59d1e09a24806409b0a23cb9041c",
"assets/packages/country_calling_code_picker/flags/gmb.png": "4d44046d66a964666f8315fd036f0981",
"assets/packages/country_calling_code_picker/flags/yem.png": "4bcf117adb59ccfcdac94353c79da8c8",
"assets/packages/country_calling_code_picker/flags/nic.png": "52eccf8a59c564198d9709bb00de71a1",
"assets/packages/country_calling_code_picker/flags/lso.png": "f690c75a370656e8ea48f3ec292a012f",
"assets/packages/country_calling_code_picker/flags/bdi.png": "f72d526cf2b8d5365358225ade59cfe5",
"assets/packages/country_calling_code_picker/flags/bgr.png": "f68718cbc8755f6352af306e384d4915",
"assets/packages/country_calling_code_picker/flags/bfa.png": "3b5d8e39c8a4267dfdbf1a1e41bfc824",
"assets/packages/country_calling_code_picker/flags/bgd.png": "cd8cbe6e8ef2ebfc86d73fc8bfc093cb",
"assets/packages/country_calling_code_picker/flags/bel.png": "acb49af404eb9679be5047aae0157475",
"assets/packages/country_calling_code_picker/flags/kaz.png": "bc6dcfc7fda8b5e4cd4d2599e25ae28e",
"assets/packages/country_calling_code_picker/flags/niu.png": "50a0921e32baf80eaa2c514af8060ae3",
"assets/packages/country_calling_code_picker/flags/glp.png": "827eac513c414bc10b29cbbfe4e9e959",
"assets/packages/country_calling_code_picker/flags/vct.png": "dbfbd63a6f46c5eeb6c16127e446fcc3",
"assets/packages/country_calling_code_picker/flags/ala.png": "cf5cf6fc9282503aed29f7b783091bca",
"assets/packages/country_calling_code_picker/flags/tca.png": "53168910b6b047a2c700339c66e82c73",
"assets/packages/country_calling_code_picker/flags/atg.png": "5ff70e9225a7a7a953f521de45863c4f",
"assets/packages/country_calling_code_picker/flags/fra.png": "a318d23e4fea530988e8cf7aa5cf9d5b",
"assets/packages/country_calling_code_picker/flags/zaf.png": "38737b75bbbd94c2865549a11bc40057",
"assets/packages/country_calling_code_picker/flags/aut.png": "57a8facf75e7b0f484ec6613eb20185c",
"assets/packages/country_calling_code_picker/flags/tha.png": "d39d3d0ca5fc7f6fd3d4e03f7fd3807e",
"assets/packages/country_calling_code_picker/flags/chl.png": "e70f0d73fd2d8513a34b433382ba8af0",
"assets/packages/country_calling_code_picker/flags/tkm.png": "073b37304c35b4f32cd31cd244ae910a",
"assets/packages/country_calling_code_picker/flags/hti.png": "a5e760a756b61a8ecf197736259ef07f",
"assets/packages/country_calling_code_picker/flags/swe.png": "7c17433894c167a65224a814bf09216c",
"assets/packages/country_calling_code_picker/flags/nor.png": "dbdb9f8ac5d68206d2594c794cc40337",
"assets/packages/country_calling_code_picker/flags/geo.png": "498638f192aa6a56d91587d4f97a6ff9",
"assets/packages/country_calling_code_picker/flags/prk.png": "bba4b51a730f15f8e6dbbc2f5f6a9829",
"assets/packages/country_calling_code_picker/flags/isl.png": "ef1b637ab33ba82b5649cd14fa9b343e",
"assets/packages/country_calling_code_picker/flags/blr.png": "5b05e797cc8c209070b8192c19d1b06f",
"assets/packages/country_calling_code_picker/flags/tgo.png": "5ca8348a187f61ac4a5f3a6f068ce269",
"assets/packages/country_calling_code_picker/flags/mda.png": "51017a6885ab1eedd620aae36be9104f",
"assets/packages/country_calling_code_picker/flags/dnk.png": "f6a6be8d88db90ed6958e2ca231021eb",
"assets/packages/country_calling_code_picker/flags/tkl.png": "4b5e1fd9bc8323ab5a028b55ff36b5c1",
"assets/packages/country_calling_code_picker/flags/mdv.png": "27d07854c646f5991e5fef895a74ddd6",
"assets/packages/country_calling_code_picker/flags/dom.png": "f02810f6e0bbc22bd6cb540400bfd521",
"assets/packages/country_calling_code_picker/flags/hun.png": "06a584530e4f21c2a291ac2f08d40de3",
"assets/packages/country_calling_code_picker/flags/hnd.png": "fdd8bf6ccba3ff6ad0df4e082d52a539",
"assets/packages/country_calling_code_picker/flags/nam.png": "d18363d4e916a31ccb778dceb26a7c27",
"assets/packages/country_calling_code_picker/flags/est.png": "0249dc8c30729ccc0e84ac23aeb227bf",
"assets/packages/country_calling_code_picker/flags/lao.png": "b82792a90b25c9f936d474b898917e71",
"assets/packages/country_calling_code_picker/flags/reu.png": "a318d23e4fea530988e8cf7aa5cf9d5b",
"assets/packages/country_calling_code_picker/flags/pri.png": "cdcd9119db789cf29f15f814542543a7",
"assets/packages/country_calling_code_picker/flags/bmu.png": "6115a3595b7027fde1ba5f9dcc9a1d3c",
"assets/packages/country_calling_code_picker/flags/grd.png": "e5473b8c438a2f964a7f1d4a203c768f",
"assets/packages/country_calling_code_picker/flags/gin.png": "6fb63a74fc0998f8e79507f3bdc776b7",
"assets/packages/country_calling_code_picker/flags/afg.png": "0005a1af5f7e362f1a6da1afa4b42474",
"assets/packages/country_calling_code_picker/flags/vir.png": "7ca3c745ccf5494aefd4fb9987dfdab7",
"assets/packages/country_calling_code_picker/flags/chn.png": "9cc597ef64ddbd396cff82ef14cb5d15",
"assets/packages/country_calling_code_picker/flags/tjk.png": "425ea7ad94d377677da610313cbf86ed",
"assets/packages/country_calling_code_picker/flags/lux.png": "f73e6d5e9f13596a2b58abff55ef5c13",
"assets/packages/country_calling_code_picker/flags/uzb.png": "2673747d1f0cb6dbd6ec897e2edbd5ae",
"assets/packages/country_calling_code_picker/flags/irn.png": "fc8f0cc6efeb0132904be687d56d747a",
"assets/packages/country_calling_code_picker/flags/kgz.png": "0901a0c5ebf03e45a5624133a2cf709a",
"assets/packages/country_calling_code_picker/flags/per.png": "23aff2caee7f0f9ab14573f4082934bd",
"assets/packages/country_calling_code_picker/flags/esp.png": "79c229a16fb9988ededf51cd945f141e",
"assets/packages/country_calling_code_picker/flags/sxm.png": "3e43e3c8724767a9b8fe4a7e5114c509",
"assets/packages/country_calling_code_picker/flags/dma.png": "d4f062d5c6395d9493c63a242ab8da6e",
"assets/packages/country_calling_code_picker/flags/arg.png": "3bb3447d54e802428c137dd156160acb",
"assets/packages/country_calling_code_picker/flags/jam.png": "d8f17b6c9310767ba860dc8093f19ca5",
"assets/packages/country_calling_code_picker/flags/mdg.png": "3ab542eb331283fb19646730272170e5",
"assets/packages/country_calling_code_picker/flags/are.png": "76afb78795d6aa62518cf1884c7e3c3e",
"assets/packages/country_calling_code_picker/flags/lca.png": "71d9b373b07964557500fd1d339c5385",
"assets/packages/country_calling_code_picker/flags/lbr.png": "d5654f5aacfd27997a6f4b9ff682dc1c",
"assets/packages/country_calling_code_picker/flags/grc.png": "7302c125501a68bf31a9ab363a484f6b",
"assets/packages/country_calling_code_picker/flags/pry.png": "a2a24ebb5646d098e7f401204746663c",
"assets/packages/country_calling_code_picker/flags/irl.png": "16e8b035c0ca8ee3365a82b837bc41eb",
"assets/packages/country_calling_code_picker/flags/kir.png": "321476970521ecbd29755b2c85077494",
"assets/packages/country_calling_code_picker/flags/umi.png": "9dccd8bbf59e3fbfe40e0e5e6bcac9c4",
"assets/packages/country_calling_code_picker/flags/bol.png": "27f4ece266cd8f3bd942d1d08e601f64",
"assets/packages/country_calling_code_picker/flags/lva.png": "d26769f4011230359ee65cff6d3e6a4c",
"assets/packages/country_calling_code_picker/flags/jor.png": "aaf6e014793f2e9229f45f210db20ca8",
"assets/packages/country_calling_code_picker/raw/country_codes.json": "09fcc0686b350a7c9fb20a3197043429",
"assets/packages/youtube_player_flutter_quill/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "92666cc97576adbea2e2d3061a953137",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/icons/Hospital.png": "41ec47cfb58417936bcad6a4bb453406",
"assets/assets/icons/wallet.png": "ca52f89523cdcad3cd50122676909e16",
"assets/assets/icons/Walk-in.png": "446c7a2af64bb2e16f5ee929744063c4",
"assets/assets/icons/Gallery.png": "3b34d1251577059b66e4294c766e4b7f",
"assets/assets/icons/Settings.png": "b36e582b83a3dc115bae6d0961bbaddb",
"assets/assets/icons/Banner.png": "373971cf7fa1247e836abeffa8e1ae0e",
"assets/assets/icons/City.png": "289a168315bbb3f2438733a17c0e6e6f",
"assets/assets/icons/Availability.png": "9ed976f0b80d6817c2818067fe3311d6",
"assets/assets/icons/timing.svg": "975d3fd29949b4c1818052dfd708a29e",
"assets/assets/icons/Services.png": "1a85443b6122e1e8dcef79f95ab81ac4",
"assets/assets/icons/Tickets.png": "3af447029fde08884c8ab04e8a4feab8",
"assets/assets/icons/Testimonial.png": "501462077159639baae41e025a4bbaf0",
"assets/assets/icons/booking.svg": "e5662e92571f879ce8da52c7468a4cff",
"assets/assets/icons/offline.png": "1918ccea5d7b8dc140bef1ae5fe28e8a",
"assets/assets/icons/ManageDate.png": "5f69e3ce8b65b4ff2093d74048920096",
"assets/assets/icons/Users.png": "73ad3a98b60c3653c50219870292f657",
"assets/assets/icons/Doctors.png": "d10d28e94b4a9bfb9da84a5131e525f2",
"assets/assets/icons/chat.svg": "a2f52ab65d52a60e3c62ae04ea02cf07",
"assets/assets/icons/Notifications.png": "bad8c7e8a604d5ec5fd9cf0dedb057bb",
"assets/assets/icons/Department.png": "143f223082af418ef49bb7568c5e803b",
"assets/assets/icons/dr.png": "7064d99ea96acadf6fa23882036acfd0",
"assets/assets/icons/Kiosk.png": "939f1c50710ec7eb7a8e179bec1dc437",
"assets/assets/icons/online.png": "42e7961b19c2da366312cc5a4ab1e6d6",
"assets/assets/icons/appointments.png": "b2b48470f413441f1d5c93c2a0e69f00",
"assets/assets/icons/error.svg": "55c4089b3adf17642dbda59aa0abb038",
"assets/assets/icons/Feedback.png": "20620e015a9d77c335529c2adef01d3b",
"assets/assets/icons/HealthBlog.png": "68b059d44b47fff7dd6c9438e9eae172",
"assets/assets/icons/nodata.svg": "1b5d3299e5fa5e6a9a6de038ae003d73",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
