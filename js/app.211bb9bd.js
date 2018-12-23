(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)s=o[l],i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={app:0},i={app:0},a=[];function o(e){return c.p+"js/"+({analytics:"analytics",config:"config",filters:"filters","my-sells":"my-sells",new:"new"}[e]||e)+"."+{analytics:"6a7295a8",config:"003fafd3",filters:"6c757053","my-sells":"a494c0ab",new:"771b6c8f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={analytics:1,config:1,filters:1,"my-sells":1,new:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var r="css/"+({analytics:"analytics",config:"config",filters:"filters","my-sells":"my-sells",new:"new"}[e]||e)+"."+{analytics:"5a7de1fe",config:"751a9b05",filters:"df536adb","my-sells":"c1bae8d8",new:"478414ed"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete s[e],d.parentNode.removeChild(d),n(a)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){s[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=o(e),u=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}i[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"010f":function(e,t,n){},"17a3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jewel",style:e.cardStyle},[n("div",{staticClass:"image",style:e.imageStyle}),n("div",{staticClass:"info"},[n("h3",[e._v(e._s(e.jewel.name))]),n("p",[n("fa",{attrs:{icon:"hand-holding-usd","fixed-width":""}}),e._v(" R$"+e._s(e.jewel.value))],1),n("p",[n("fa",{attrs:{icon:"file-invoice-dollar","fixed-width":""}}),e._v(" R$"+e._s(e.jewel.cost))],1),n("p",[n("fa",{attrs:{icon:"tags","fixed-width":""}}),e._v(" "+e._s(e.category.name))],1),n("p",[n("fa",{attrs:{icon:"warehouse","fixed-width":""}}),e._v(" "+e._s(e.jewel.quantity))],1)])])},s=[],i=n("be94"),a=n("2f62"),o={props:{id:{type:String,required:!0}},computed:Object(i["a"])({},Object(a["c"])("jewels",{jewels:"all"}),Object(a["c"])("categories",{categories:"all"}),{jewel:function(){return this.jewels[this.id]},category:function(){return this.categories[this.jewel.category]},cardStyle:function(){return{opacity:this.jewel.quantity>0?1:.5}},imageStyle:function(){return{backgroundImage:"url('".concat(this.jewel.img,"')")}}})},c=o,u=(n("6da6"),n("2877")),l=Object(u["a"])(c,r,s,!1,null,"6973dada",null);l.options.__file="jewel-card.vue";t["a"]=l.exports},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("navigation-bar")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"home",attrs:{to:"/"}},[n("fa",{attrs:{icon:"gem",size:"2x","fixed-width":""}})],1),n("router-link",{staticClass:"my-sells",attrs:{to:"/my-sells"}},[n("fa",{attrs:{icon:"dollar-sign",size:"2x","fixed-width":""}})],1),n("router-link",{staticClass:"new-jewel",attrs:{to:{name:"NewJewel"}}},[n("fa",{attrs:{icon:"plus",size:"2x","fixed-width":""}})],1),n("router-link",{staticClass:"analytics",attrs:{to:"/analytics"}},[n("fa",{attrs:{icon:"chart-line",size:"2x","fixed-width":""}})],1),n("router-link",{staticClass:"config",attrs:{to:"/config"}},[n("fa",{attrs:{icon:"cog",size:"2x","fixed-width":""}})],1)],1)},o=[],c={},u=c,l=(n("9125"),n("d1e0"),n("2877")),f=Object(l["a"])(u,a,o,!1,null,"fc644246",null);f.options.__file="navigator.vue";var d=f.exports,m={components:{NavigationBar:d},data:function(){return{transitionName:""}}},j=m,b=(n("5c0b"),Object(l["a"])(j,s,i,!1,null,null,null));b.options.__file="App.vue";var p=b.exports,h=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Minhas jóias")]),n("jewel-list",{attrs:{jewels:e.jewels}})],1)},y=[],g=n("be94"),w=n("2f62"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jewel-list"},[n("div",{staticClass:"filter-bar"},[n("router-link",{attrs:{to:{name:"JewelsFilter"},tag:"button"}},[e._v("Filtrar")]),n("button",{on:{click:e.resetFilter}},[e._v("Limpar filtro")])],1),e.jewels.length>0?n("div",e._l(e.jewels,function(e){return n("router-link",{key:e,attrs:{to:{name:"NewSale",params:{uuid:e}},tag:"div"}},[n("jewel-card",{attrs:{id:e}})],1)})):n("p",[e._v("Nenhuma jóia para ser exibida :(")])])},k=[],x=n("17a3"),_={components:{JewelCard:x["a"]},props:{jewels:{type:Array,required:!0}},computed:Object(g["a"])({},Object(w["c"])("jewels",{allJewels:"all"})),methods:Object(g["a"])({},Object(w["b"])("jewels",{resetFilter:"resetFilter"}))},S=_,E=(n("b214"),Object(l["a"])(S,O,k,!1,null,"ef4c2c8a",null));E.options.__file="jewel-list.vue";var P=E.exports,C={components:{JewelList:P},computed:Object(g["a"])({},Object(w["c"])("jewels",{jewels:"filteredIds"}))},z=C,q=Object(l["a"])(z,v,y,!1,null,null,null);q.options.__file="Home.vue";var N=q.exports;r["a"].use(h["a"]);var A=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:N},{path:"/jewel-filter",name:"JewelsFilter",component:function(){return n.e("filters").then(n.bind(null,"d4c3"))}},{path:"/my-sells",name:"my-sells",component:function(){return n.e("my-sells").then(n.bind(null,"ad1b"))}},{path:"/new",name:"New",component:function(){return n.e("new").then(n.bind(null,"9d92"))},children:[{path:"jewel",name:"NewJewel",component:function(){return n.e("new").then(n.bind(null,"567b"))}},{path:"seller",name:"NewSeller",component:function(){return n.e("new").then(n.bind(null,"cd84"))}},{path:"category",name:"NewCategory",component:function(){return n.e("new").then(n.bind(null,"4e40"))}},{path:"sale/:uuid",name:"NewSale",component:function(){return n.e("new").then(n.bind(null,"2cfc"))}}]},{path:"/analytics",name:"analytics",component:function(){return n.e("analytics").then(n.bind(null,"41f2"))}},{path:"/config",name:"config",component:function(){return n.e("config").then(n.bind(null,"5984"))}}]}),I=n("bfa9"),F={ids:[],sales:{}},B=n("c64e"),T=n.n(B),M={create:function(e,t){var n=e.commit;t.uuid=T()(),n("jewels/reduceQuantity",{id:t.jewel,quantity:t.quantity},{root:!0}),n("add",t)},update:function(e,t){var n=e.commit;n("add",t)},delete:function(e,t){var n=e.commit;n("delete",t)},processIds:function(e,t){var n=e.commit;n("processIds",t)}},J={ids:function(e,t,n){return e.ids},all:function(e,t,n){return e.sales},set:function(e,t,n){return e.ids.map(function(t){return e.sales[t]})},root:function(e,t,n){return n},filteredIds:function(e,t,n){return t.ids}},R=(n("456d"),n("20d6"),n("ac6a"),{add:function(e,t){t.constructor!==Array?(-1===e.ids.indexOf(t.uuid)&&e.ids.push(t.uuid),r["a"].set(e.sales,t.uuid,t)):t.forEach(function(t){-1===e.ids.indexOf(t.uuid)&&e.ids.push(t.uuid),r["a"].set(e.sales,t.uuid,t)})},clean:function(e){e.ids=[],e.sales={}},delete:function(e,t){r["a"].delete(e.sales,t);var n=e.ids.findIndex(function(e){return e===t});e.ids.splice(n,1)},processIds:function(e){r["a"].set(e,"ids",Object.keys(e.sales))},reset:function(e){Object.keys(F).forEach(function(t){r["a"].set(e,t,F[t])})}}),$={namespaced:!0,state:F,actions:M,getters:J,mutations:R},L={ids:[],jewels:{},filter:{name:"",orderBy:"name",orderByAsc:!0,hideOutOfStock:!0}},U={create:function(e,t){var n=e.commit;t.uuid=T()(),n("add",t)},update:function(e,t){var n=e.commit;n("add",t)},delete:function(e,t){var n=e.commit;n("delete",t)},reduceQuantity:function(e,t){var n=e.commit;n("reduceQuantity",t)},setFilter:function(e,t){var n=e.commit;n("filter",t)},resetFilter:function(e){var t=e.commit;t("filter",{name:"",orderBy:"name",orderByAsc:!0,hideOutOfStock:!0})}},Y=(n("55dd"),n("6762"),n("2fdb"),n("7f7f"),n("2909")),D={ids:function(e,t,n){return e.ids},all:function(e,t,n){return e.jewels},set:function(e,t,n){return e.ids.map(function(t){return e.jewels[t]})},root:function(e,t,n){return n},filter:function(e,t,n){return e.filter},filteredIds:function(e,t,n){var r=Object(Y["a"])(t.ids);return e.filter.hideOutOfStock&&(r=r.filter(function(e){return t.all[e].quantity>0})),e.filter.name&&(r=r.filter(function(n){var r=t.all[n].name.toLowerCase();return r.includes(e.filter.name.toLowerCase())||r.similarity(e.filter.name)>.85})),e.filter.orderBy&&(r=r.sort(function(n,r){var s={},i={};return e.filter.orderByAsc?(s=t.all[n][e.filter.orderBy],i=t.all[r][e.filter.orderBy]):(s=t.all[r][e.filter.orderBy],i=t.all[n][e.filter.orderBy]),s>i?1:s<i?-1:0})),r}},Q={add:function(e,t){t.constructor!==Array?(-1===e.ids.indexOf(t.uuid)&&e.ids.push(t.uuid),r["a"].set(e.jewels,t.uuid,t)):t.forEach(function(t){-1===e.ids.indexOf(t.uuid)&&e.ids.push(t.uuid),r["a"].set(e.jewels,t.uuid,t)})},clean:function(e){e.ids=[],e.jewels={}},delete:function(e,t){r["a"].delete(e.jewels,t);var n=e.ids.findIndex(function(e){return e===t});e.ids.splice(n,1)},reduceQuantity:function(e,t){var n=e.jewels[t.uuid?t.uuid:t.id];n.quantity=n.quantity-t.quantity,n.quantity<0&&(n.quantity=0),r["a"].set(e.jewels,n.uuid,n)},filter:function(e,t){e.filter=t},reset:function(e){Object.keys(L).forEach(function(t){r["a"].set(e,t,L[t])})}},H={namespaced:!0,state:L,actions:U,getters:D,mutations:Q},G={namespaced:!0,state:{},getters:{persistence:function(){return localStorage.getItem("my-jewelry")}}},K={ids:[],sellers:{}},V={create:function(e,t){var n=e.commit;t.uuid=T()(),n("add",t)},update:function(e,t){var n=e.commit;n("add",t)},delete:function(e,t){var n=e.commit;n("delete",t)}},W={ids:function(e,t,n){return e.ids},all:function(e,t,n){return e.sellers},set:function(e,t,n){return e.ids.map(function(t){return e.sellers[t]})},root:function(e,t,n){return n}},X={add:function(e,t){t.constructor!==Array?(-1===e.ids.indexOf(t.uuid)&&e.ids.push(t.uuid),r["a"].set(e.sellers,t.uuid,t)):t.forEach(function(t){-1===e.ids.indexOf(t.uuid)&&e.ids.push(t.uuid),r["a"].set(e.sellers,t.uuid,t)})},clean:function(e){e.ids=[],e.jewels={}},delete:function(e,t){r["a"].delete(e.sellers,t);var n=e.ids.findIndex(function(e){return e===t});e.ids.splice(n,1)},reset:function(e){Object.keys(K).forEach(function(t){r["a"].set(e,t,K[t])})}},Z={namespaced:!0,state:K,actions:V,getters:W,mutations:X},ee={filter:{end:"",start:""}},te=n("c1df"),ne=n.n(te),re="YYYY-MM-DD",se={setFilter:function(e,t){var n=e.commit;n("filter",t)},filterNavActualYear:function(e){var t=e.commit,n={};n.end=ne()().format(re),n.start=ne()().startOf("year").format(re),t("filter",n)},filterNavPreviousYear:function(e){var t=e.commit,n=e.state,r={};r.start=ne()(n.filter.start,re).startOf("year").subtract(1,"year").format(re),r.end=ne()(r.start).endOf("year").format(re),t("filter",r)},filterNavPreviousMonth:function(e){var t=e.commit,n=e.state,r={};r.start=ne()(n.filter.start,re).startOf("month").subtract(1,"month").format(re),r.end=ne()(r.start).endOf("month").format(re),t("filter",r)},resetFilter:function(e){var t=e.commit,n={};n.end=ne()().format(re),n.start=ne()().startOf("month").format(re),t("filter",n)}},ie=(n("28a5"),{filter:function(e,t,n){return e.filter},filteredSalesIds:function(e,t,n){var r=ne()(e.filter.end),s=ne()(e.filter.start),i=function(e){return e.split("T")[0]};return e.filter.start||e.filter.end?!e.filter.start&&e.filter.end?n.sales.ids.filter(function(e){return ne()(i(n.sales.sales[e].date)).isSameOrBefore(r)}):e.filter.start&&!e.filter.end?n.sales.ids.filter(function(e){return ne()(i(n.sales.sales[e].date)).isSameOrAfter(s)}):n.sales.ids.filter(function(e){return ne()(i(n.sales.sales[e].date)).isBetween(s,r,null,"[]")}):n.sales.ids},filteredOwnSalesIds:function(e,t,n){return t.filteredSalesIds.filter(function(e){return!n.sales.sales[e].seller})},salesResume:function(e,t,n){var r={},s=t.filteredSalesIds.map(function(e){return n.sales.sales[e]});return r.netProfit=s.reduce(function(e,t){var n=1-t.commission/100;return e+(t.value*n-t.cost)},0).toFixed(2),r.grossProfit=s.reduce(function(e,t){return e+(t.value-t.cost)},0),r.quantity=s.reduce(function(e,t){return e+t.quantity},0),r.sellSum=s.reduce(function(e,t){return e+t.value},0),r.costSum=s.reduce(function(e,t){return e+t.cost},0),r.netProfitPct=(100*r.netProfit/r.costSum).toFixed(2),r.sellersCost=s.reduce(function(e,t){return e+t.value*(t.commission/100)},0).toFixed(2),r},ownSalesResume:function(e,t,n){var r={quantity:0,netProfit:0,grossProfit:0};return t.filteredOwnSalesIds.forEach(function(e){var t=n.sales.sales[e];r.quantity+=t.quantity,r.netProfit+=t.value*(1-t.commission/100)-t.cost,r.grossProfit+=t.value-t.cost}),r.netProfit=r.netProfit.toFixed(2),r},sellersResume:function(e,t,n){var r={};return t.filteredSalesIds.forEach(function(e){var t=n.sales.sales[e];t.seller&&(r[t.seller]||(r[t.seller]={toPay:0,quantity:0,netProfit:0,grossProfit:0}),r[t.seller].toPay+=t.value*(t.commission/100),r[t.seller].quantity+=t.quantity,r[t.seller].netProfit+=t.value*(1-t.commission/100)-t.cost,r[t.seller].grossProfit+=t.value-t.cost)}),Object.keys(r).forEach(function(e){r[e].toPay=r[e].toPay.toFixed(2),r[e].netProfit=r[e].netProfit.toFixed(2)}),r}}),ae={filter:function(e,t){e.filter=t},reset:function(e){Object.keys(ee).forEach(function(t){r["a"].set(e,t,ee[t])})}},oe={namespaced:!0,state:ee,actions:se,getters:ie,mutations:ae},ce={ids:[],categories:{}},ue={create:function(e,t){var n=e.commit;t.uuid=T()(),n("add",t)},update:function(e,t){var n=e.commit;n("add",t)},delete:function(e,t){var n=e.commit;n("delete",t)}},le={ids:function(e,t,n){return e.ids},all:function(e,t,n){return e.categories},set:function(e,t,n){return e.ids.map(function(t){return e.categories[t]})},root:function(e,t,n){return n}},fe={add:function(e,t){t.constructor!==Array?(-1===e.ids.indexOf(t.uuid)&&e.ids.push(t.uuid),r["a"].set(e.categories,t.uuid,t)):t.forEach(function(t){-1===e.ids.indexOf(t.uuid)&&e.ids.push(t.uuid),r["a"].set(e.categories,t.uuid,t)})},clean:function(e){e.ids=[],e.categories={}},delete:function(e,t){r["a"].delete(e.categories,t);var n=e.ids.findIndex(function(e){return e===t});e.ids.splice(n,1)},reset:function(e){Object.keys(ce).forEach(function(t){r["a"].set(e,t,ce[t])})}},de={namespaced:!0,state:ce,actions:ue,getters:le,mutations:fe};r["a"].use(w["a"]);var me=!1,je=new I["a"]({key:"my-jewelry",strictMode:me,storage:window.localStorage}),be=new w["a"].Store({strict:me,modules:{sales:$,jewels:H,sellers:Z,storage:G,analytics:oe,categories:de},plugins:[je.plugin],mutations:{RESTORE_MUTATION:je.RESTORE_MUTATION}}),pe=n("1dce"),he=n.n(pe),ve=n("ad3d"),ye=n("cb5b"),ge=n("c074"),we=n("f2d1"),Oe=n("b702");ye["a"].config={autoAddCss:!0},ye["a"].library.add(ge["a"]),ye["a"].library.add(we["a"]),ye["a"].library.add(Oe["a"]),r["a"].component("fa",ve["a"]);n("7514");function ke(e){if(!this.length&&!e.length)return 1;if(!this.length||!e.length)return 0;if(this.toUpperCase()===e.toUpperCase())return 1;if(1===this.length&&1===e.length)return 0;var t=Se(this),n=Se(e),r=t.length+n.length,s=0;return t.forEach(function(e){for(var t,r=0;t=n[r];r++)if(e===t){s++,n.splice(r,1);break}}),2*s/r}function xe(e){return Array.isArray(e)?e.reduce(function(e,t){return e.concat(xe(t))},[]):[e]}function _e(e){for(var t=[],n=0,r=e.length-1;n<r;n++)t[n]=e.substring(n,n+2);return t}function Se(e){var t=e.toUpperCase().split(" ").map(_e);return xe(t)}String.prototype.similarity=ke;var Ee=n("9483");Object(Ee["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("b751");r["a"].use(he.a),r["a"].config.productionTip=!1,r["a"].prototype.moment=ne.a,r["a"].prototype.emoji=function(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e))):String.fromCharCode(e)},new r["a"]({router:A,store:be,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(e,t,n){},"651b":function(e,t,n){},"6da6":function(e,t,n){"use strict";var r=n("010f"),s=n.n(r);s.a},9125:function(e,t,n){"use strict";var r=n("e38c"),s=n.n(r);s.a},b214:function(e,t,n){"use strict";var r=n("e16b"),s=n.n(r);s.a},b751:function(e,t,n){},d1e0:function(e,t,n){"use strict";var r=n("651b"),s=n.n(r);s.a},e16b:function(e,t,n){},e38c:function(e,t,n){}});
//# sourceMappingURL=app.211bb9bd.js.map