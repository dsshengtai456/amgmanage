(function(e){function t(t){for(var o,r,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function i(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-97990cd0":"3f35ee86"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-97990cd0":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="static/css/"+({}[e]||e)+"."+{"chunk-97990cd0":"0750517e"}[e]+".css",a=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ea":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var o={dsCoin:"0x8e30C1153470E203D0EdC7807c0E7386757157A1",lpStakeAddress:"0x05CE799D8149e81ee80a345919fC58183CA7779D",dsSwap:"0xF3ef42a2DCB75d180B2567d22048BEcd03422448"},r=56},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var o=n("5502");t["a"]=Object(o["a"])({state:{accounts:[],provider:null,locale:""},mutations:{updateAccount:function(e,t){e.accounts=t},updateProvider:function(e,t){e.provider=t},updateLocale:function(e,t){e.locale=t}},actions:{},modules:{}})},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("caad"),n("2532"),n("1276"),n("ac1f"),n("159b"),n("5319"),n("fb6a");var o=n("7a23"),r={class:"app-content"};function a(e,t,n,a,c,i){var u=Object(o["G"])("router-view");return Object(o["A"])(),Object(o["h"])("div",r,[Object(o["k"])(u,null,{default:Object(o["P"])((function(t){var n=t.Component;return[(Object(o["A"])(),Object(o["h"])(o["b"],null,[e.$route.meta.keepAlive?(Object(o["A"])(),Object(o["h"])(Object(o["I"])(n),{key:0})):Object(o["i"])("",!0)],1024)),e.$route.meta.keepAlive?Object(o["i"])("",!0):(Object(o["A"])(),Object(o["h"])(Object(o["I"])(n),{key:0}))]})),_:1})])}var c=n("1da1"),i=(n("96cf"),n("ee10")),u={name:"App",setup:function(){Object(o["x"])(Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].initWeb3();case 2:case"end":return e.stop()}}),e)})))),document.documentElement.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}),!1);var e=0;document.addEventListener("touchend",(function(t){var n=Date.now();n-e<=300&&t.preventDefault(),e=n}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}};n("6389");u.render=a;var s=u,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d=[{path:"/",name:"Index",component:function(){return n.e("chunk-97990cd0").then(n.bind(null,"1e4b"))},meta:{title:""}}],f=Object(l["a"])({history:Object(l["b"])(),routes:d});f.beforeEach((function(e){e.meta.title&&(document.title=e.meta.title)}));var p=f,m=n("4360"),b=n("b970"),h=(n("157a"),n("98b3")),g=n("79fa"),y=n("b9b9"),v=n.n(y);h["a"].set(0);var k="en";if(["tw","en"].includes(h["c"].get()))k=h["c"].get();else{var w="en";navigator.language.toLowerCase().includes("zh")&&(w="tw"),k=w}Object(g["b"])(k);var P=function(){history.length>0&&(history.state.back?p.go(-1):p.push({name:"Index"}))},A=function(e){if(!e||"0"===e)return{};var t=decodeURIComponent(e).split("&"),n={};return t.forEach((function(e){var t=e.split("=");1===t.length?n.id=t[0]:n[t[0]]=t[1]})),n},j=window.location.href.replace(/#/g,"").replace(/\?utm_source=tokenpocket/g,"");if(j.includes("?")){var O=j.slice(j.indexOf("?")+1,j.length),S=A(O);S.intro&&h["b"].set(S.intro)}var C=Object(o["g"])(s);C.config.globalProperties.$goBack=P,C.config.globalProperties.$dateformat=v.a,C.use(p).use(m["a"]).use(g["a"]).use(b["a"]).mount("#app")},5909:function(e,t,n){},6:function(e,t){},6389:function(e,t,n){"use strict";n("5909")},7:function(e,t){},"79fa":function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g}));var o=n("5530"),r=n("47e2"),a=n("98b3"),c=n("4360"),i=n("cb6e"),u=n("edd4"),s=n("3c69"),l=n("c6e7"),d=n.n(l),f=n("91f4"),p=n.n(f);function m(e){switch(e){case"tw":s["a"].use("zh-TW",d.a);break;case"en":s["a"].use("en-US",p.a);break}}function b(e){m(e)}var h=Object(r["a"])({locale:"en",messages:{tw:Object(o["a"])({},i),en:Object(o["a"])({},u)}}),g=function(e){h.global.locale=e,c["a"].commit("updateLocale",e),a["c"].set(e),b(e)}},8:function(e,t){},9:function(e,t){},"98b3":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var o=i("intro",localStorage),r=i("i18nextLng",localStorage),a=i("count",sessionStorage);function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:localStorage;try{n.setItem(e,t)}catch(o){}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:localStorage;return{get:function(){return t.getItem(e)},set:function(n){c(e,n,t)},remove:function(){t.removeItem(e)}}}},cb6e:function(e){e.exports=JSON.parse('{"兌換":"兌換","算力挖礦":"算力挖礦","解押成功":"解押成功","請先添加交易對":"請先添加交易對","請先激活礦工":"請先激活礦工","礦池":"礦池","申請上幣":"申請上幣","Swap":"Swap","加入我們":"加入我們","圖片大小不能超過":"圖片大小不能超過{key}","已啟動":"已啟動","未啟動":"未啟動","可領取":"可領取","挖礦":"挖礦","挖礦key":"{key}挖礦","領取":"領取","質押":"質押","已質押":"已質押{key}","累計挖礦":"累計挖礦","質押挖礦":"質押挖礦","激活礦工":"激活礦工","我的算力":"我的算力","请輸入要搜索的幣種":"请輸入要搜索的幣種","已銷毀":"已銷毀","總算力":"總算力","已抵押":"已抵押","項目介紹：":"項目介紹：","暫無更多數據":"暫無更多數據","餘額：":"餘額：{key}","餘額":"餘額","請輸入質押餘額":"請輸入質押餘額","預計需扣除":"預計需扣除","實際扣除數量以扣除時間的價格為準，請保證餘額充足":"實際扣除數量以扣除時間的價格為準，請保證餘額充足","授權":"授權","授權key":"授權{key}","提交":"提交","數量必須大於等於":"數量必須大於等於{key}","數量必須大於":"數量必須大於{key}","餘額不足":"餘額不足","凍結成功":"凍結成功","質押成功":"質押成功","啟動礦工":"啟動礦工","會員激活需要立刻支付key，支付成功後，可立即獲得power算力開啟質押挖礦":"會員激活需要立刻支付{key}，支付成功後，可立即獲得{power}算力開啟質押挖礦","一鍵激活":"一鍵激活","激活成功":"激活成功","挖礦記錄":"挖礦記錄","挖礦所得":"挖礦所得","領取時間":"領取時間","算力記錄":"算力記錄","質押數量":"質押數量","質押時間":"質押時間","沒有更多了":"沒有更多了","解押數量":"解押數量","解押時間":"解押時間","獲得算力":"獲得算力","上幣記錄":"上幣記錄","代幣：":"代幣：","上幣成功":"上幣成功","合約地址":"合約地址","項目詳情":"項目詳情","記錄":"記錄","上幣須知：":"上幣須知：","當前僅支持BSC鏈代幣，上幣前請先前往SWAP創建該代幣與USDT的流動性，創建成功後，支付key即上幣成功，並開放該代幣的的質押挖礦":"當前僅支持BSC鏈代幣，上幣前請先前往SWAP創建該代幣與USDT的流動性，創建成功後，支付{key}即上幣成功，並開放該代幣的的質押挖礦","代幣名字":"代幣名字","代幣圖標":"代幣圖標","我再想想":"我再想想","立即前往":"立即前往","請輸入不少於key字":"請輸入不少於{key}字","請輸入不多於key字":"請輸入不多於{key}字","請輸入項目名稱":"請輸入項目名稱","請輸入合約地址":"請輸入合約地址","請上傳圖標":"請上傳圖標","請輸入項目描述":"請輸入項目描述","申請成功":"申請成功","代幣錯誤":"代幣錯誤","可用":"可用","請輸入项目名称":"請輸入项目名称","請輸入代币合約地址":"請輸入代币合約地址","確定":"確定","請輸入要搜索的幣種":"請輸入要搜索的幣種","解押":"解押","最大":"最大","key_a總質押量key_b":"{key_a}總質押量：{key_b}","全網算力key":"全網算力：{key}","請輸入解押餘額":"請輸入解押餘額","錢包":"錢包","代幣合約":"代幣合約","開源情況":"開源情況","已開源":"已開源","總發行量":"總發行量","持幣地址":"持幣地址","流動資金池":"流動資金池","今日礦產":"今日礦產","礦池合約":"礦池合約","流通量":"流通量","黑洞地址":"黑洞地址","24小時成交數":"24小時成交數","24小時成交額":"24小時成交額","最新交易":"最新交易","刷新":"刷新","賣出":"賣出","買入":"買入","礦池信息":"礦池信息","複製成功":"複製成功","複製失敗，請手動長按複製":"複製失敗，請手動長按複製","連接錢包":"連接錢包","請先連接錢包":"請先連接錢包","暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開":"暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken, TokenPocket裏打開","請切換到幣安主網絡":"請切換到幣安主網絡","邀請人地址":"邀請人地址","複製":"複製","LP分紅":"LP分紅","平台LP總質押量":"平台LP總質押量","已領取":"已領取","已質押LP":"已質押LP","社區地址數量":"社區地址數量","社區總質押":"社區總質押","已領取的社區收益":"已領取的社區收益","待領取的社區收益":"待領取的社區收益","領取收益":"領取收益","保險基金池":"保險基金池","營銷地址":"營銷地址","AMG今日產量":"AMG今日產量","AMG已流通數量":"AMG已流通數量","AMG已銷毀數量":"AMG已銷毀數量","AMG未流通數量":"AMG未流通數量","領取成功":"領取成功","請輸入邀請地址":"請輸入邀請地址","請輸入正確的邀請地址":"請輸入正確的邀請地址","邀請人地址無效":"邀請人地址無效"}')},edd4:function(e){e.exports=JSON.parse('{"兌換":"Swap","算力挖礦":"Power Mining","解押成功":"Successfully decompressed","請先添加交易對":"Please add trading pair first","請先激活礦工":"Please activate the miner first","礦池":"Pool","申請上幣":"Apply to upload token","Swap":"Swap","加入我們":"Join us","圖片大小不能超過":"The picture size cannot exceed {key}","已啟動":"Activated","未啟動":"Inactivated","可領取":"Can receive","挖礦":"Mining","挖礦key":"{key} mining","領取":"Get","質押":"Pledge","已質押":"Pledged {key}","累計挖礦":"The cumulative dig","質押挖礦":"Pledge mining","激活礦工":"Activate miner","我的算力":"My computing power","请輸入要搜索的幣種":"Please enter the token to search","已銷毀":"Destroyed","總算力":"Total computing power","已抵押":"Pledged","項目介紹：":"Project introduction:","暫無更多數據":"No more data","餘額：":"Balance:{key}","餘額":"Balance","請輸入質押餘額":"Please enter the pledge balance","預計需扣除":"Expected to be deducted","實際扣除數量以扣除時間的價格為準，請保證餘額充足":"The actual deduction amount is subject to the price of the deduction time, please ensure that the balance is sufficient","授權":"Authorize","授權key":"Authorize {key}","提交":"Submit","數量必須大於等於":"Quantity must be greater than or equal to {key}","數量必須大於":"Quantity must be greater than {key}","餘額不足":"Insufficient balance","凍結成功":"Freeze succeeded","質押成功":"Pledge success","啟動礦工":"Start miner","會員激活需要立刻支付key，支付成功後，可立即獲得power算力開啟質押挖礦":"Members need to pay {key} immediately for activation. After successful payment, they can immediately get {power} computing power to start pledge mining","一鍵激活":"One click activation","激活成功":"Activation succeeded","挖礦記錄":"Mining records","挖礦所得":"Mining income","領取時間":"Collection time","算力記錄":"computing power records","質押數量":"Pledge amount","質押時間":"Pledge time","沒有更多了":"No more","解押數量":"Number of released charges","解押時間":"Release time","獲得算力":"Gain computing power","上幣記錄":"Token upload record","代幣：":"Token:","上幣成功":"Upload token succeeded","合約地址":"Contract address","項目詳情":"Project details","記錄":"Record","上幣須知：":"Instructions for uploading token:","當前僅支持BSC鏈代幣，上幣前請先前往SWAP創建該代幣與USDT的流動性，創建成功後，支付key即上幣成功，並開放該代幣的的質押挖礦":"Currently, only BSC chain tokens are supported. Please go to SWAP to create liquidity between the token. After the creation is successful, the upload successfully after paying {key}, and the pledge mining of the token will be opened.","代幣名字":"Token name","代幣圖標":"Token Icon","我再想想":"let me think again","立即前往":"Go now","請輸入不少於key字":"Please enter not less than {key} words","請輸入不多於key字":"Please enter not more than {key} words","請輸入項目名稱":"Please enter the project name","請輸入合約地址":"Please enter the contract address","請上傳圖標":"Please upload icon","請輸入項目描述":"Please enter a project description","申請成功":"Successful application","代幣錯誤":"Token error","可用":"Available ","請輸入项目名称":"Please enter the project name","請輸入代币合約地址":"Please enter the token contract address","確定":"Confirm","請輸入要搜索的幣種":"Please enter the currency you want to search","解押":"Sign","最大":"Max","key_a總質押量key_b":"Total {key_a} pledge amount: {key_b}","全網算力key":"Network computing power: {key}","請輸入解押餘額":"Please enter the release balance","錢包":"Wallet","代幣合約":"Token Contract","開源情況":"Open Source Situation","已開源":"Open Source","總發行量":"Total Circulation","持幣地址":"Coin holding address","流動資金池":"Liquidity Pool","今日礦產":"Today\'s Minerals","礦池合約":"Mining Pool Contract","流通量":"Circulation","黑洞地址":"Black Hole Address","24小時成交數":"24 hours of transactions","24小時成交額":"24-hour turnover","最新交易":"Latest Transaction","刷新":"Refresh","賣出":"Sell","買入":"Buy","礦池信息":"Pool information","複製成功":"Copy succeeded","複製失敗，請手動長按複製":"Copy failed, long press copy manually","連接錢包":"Connect wallet","請先連接錢包":"Please connect the wallet first","暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開":"The wallet plug-in is not detected yet, please install MetaMask wallet or open it in imtoken or TokenPocket","請切換到幣安主網絡":"Please switch to Binance Mainnet","邀請人地址":"Inviter\'s address","複製":"copy","LP分紅":"LP dig ","LP總質押量":"LP Total amount of pledge","已領取":"Have to receive","已質押LP":"Has pledged the LP","社區地址數量":"Number of community addresses","社區總質押":"General Community Pledge (LP)","已領取的社區收益":"Community benefits received","待領取的社區收益":"Community benefits to be collected","領取收益":"Get the benefits","保險基金池":"Insurance fund pool","營銷地址":"Technical Development ","AMG今日產量":"AMG production today","AMG已流通數量":"AMG quantity in circulation","AMG已銷毀數量":"AMG destroyed quantity","AMG未流通數量":"AMG uncirculated quantity","領取成功":"Receive success","請輸入邀請地址":"Please enter the invite address","請輸入正確的邀請地址":"Please enter the correct invitation address","邀請人地址無效":"Inviter address is invalid"}')},ee10:function(e,t,n){"use strict";var o=n("1da1"),r=(n("96cf"),n("d3b7"),n("a9e3"),n("25f0"),n("99e5")),a=n.n(r),c=n("4360"),i=n("d399"),u=n("79fa"),s=n("01ea"),l=n("98b3"),d={web3:{},t:u["a"].global.t,factoryContract:{},web3Provider:{},initWeb3:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return d.web3Provider=window.ethereum,d.web3=new a.a(d.web3Provider),e.prev=3,e.next=6,window.ethereum.enable();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),Promise.reject(e.t0);case 11:e.next=14;break;case 13:window.web3?(d.web3Provider=window.web3.currentProvider,d.web3=new a.a(d.web3Provider)):(t=l["a"].get()||0,Number(t)<5?(l["a"].set(Number(t)+1),setTimeout((function(){d.initWeb3()}),500)):Object(i["a"])(d.t("暫未檢測到錢包插件，請安裝MetaMask錢包，或在imtoken裡打開")));case 14:return e.next=16,d.web3.eth.net.getId();case 16:if(n=e.sent,n===s["b"]){e.next=20;break}return Object(i["a"])(d.t("請切換到幣安主網絡")),e.abrupt("return");case 20:c["a"].commit("updateProvider",d.web3),d.web3.eth.getAccounts().then((function(e){c["a"].commit("updateAccount",e)})),window.ethereum.on("accountsChanged",(function(e){c["a"].commit("updateAccount",e)})),d.web3Provider.on("chainChanged",(function(e){e!="0x".concat(s["b"].toString(16))?(c["a"].commit("updateAccount",[]),Object(i["a"])(d.t("請切換到幣安主網絡"))):(c["a"].commit("updateProvider",d.web3),d.web3.eth.getAccounts().then((function(e){c["a"].commit("updateAccount",e)})))}));case 24:case"end":return e.stop()}}),e,null,[[3,8]])})));function t(){return e.apply(this,arguments)}return t}()};t["a"]=d}});
//# sourceMappingURL=app.e483ec91.js.map