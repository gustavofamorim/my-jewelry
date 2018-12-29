(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["analytics"],{"0ef7":function(e,t,s){},"34fb":function(e,t,s){"use strict";var a=s("e793"),r=s.n(a);r.a},"41f2":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("h1",[e._v("Analytics")]),s("analytics-filter"),e.filteredIds.length>0?s("div",{staticClass:"resume"},[s("analytics-resume"),s("analytics-own-resume"),s("analytics-sellers-resume")],1):s("p",{staticClass:"no-sells"},[e._v("Nenhuma venda registrada no período escolhido :(")])],1)},r=[],n=s("be94"),i=s("2f62"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filter-container"},[s("p",[e._v("Filtro de dados")]),s("div",{staticClass:"filter"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.start,expression:"start"}],attrs:{type:"date"},domProps:{value:e.start},on:{change:e.updateFilter,input:function(t){t.target.composing||(e.start=t.target.value)}}}),s("p",[e._v("Até")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.end,expression:"end"}],attrs:{type:"date"},domProps:{value:e.end},on:{change:e.updateFilter,input:function(t){t.target.composing||(e.end=t.target.value)}}})]),s("div",{staticClass:"options"},[s("button",{on:{click:e.resetFilter}},[e._v("Este Mês")]),s("button",{on:{click:e.filterByPreviousMonth}},[e._v("Mês anterior")]),s("button",{on:{click:e.filterByActualYear}},[e._v("Este Ano")]),s("button",{on:{click:e.filterByPreviousYear}},[e._v("Ano Anterior")])])])},o=[],c=(s("cadf"),s("551c"),s("097d"),{data:function(){return{end:"",start:""}},watch:{filter:{deep:!0,handler:function(e){this.end=e.end,this.start=e.start}}},mounted:function(){this.filter.start||this.filter.end?(this.end=this.filter.end,this.start=this.filter.start):this.resetFilter()},computed:Object(n["a"])({},Object(i["c"])("analytics",{filter:"filter"})),methods:Object(n["a"])({},Object(i["b"])("analytics",{syncFilter:"setFilter",resetFilter:"resetFilter",filterByActualYear:"filterNavActualYear",filterByPreviousYear:"filterNavPreviousYear",filterByPreviousMonth:"filterNavPreviousMonth"}),{updateFilter:function(){this.syncFilter({end:this.end,start:this.start})}})}),u=c,d=(s("dd07"),s("2877")),f=Object(d["a"])(u,l,o,!1,null,"766064de",null);f.options.__file="analytics-filter.vue";var v=f.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[e._m(0),s("p",[e._v("Lucro Bruto: R$"+e._s(e.resume.grossProfit))]),s("p",[e._v("Lucro Líquido: R$"+e._s(e.resume.netProfit)+" ("+e._s(e.resume.netProfitPct)+"%)")]),s("p",[e._v("Quantidade de Jóias Vendidas: "+e._s(e.resume.quantity))]),s("p",[e._v("Total das Vendas: R$"+e._s(e.resume.sellSum))]),s("p",[e._v("Total dos Custos: R$"+e._s(e.resume.costSum))]),s("p",[e._v("Total das Comissões: R$"+e._s(e.resume.sellersCost))])])},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",[e._v("Resumo das vendas no período")])])}],p={computed:Object(n["a"])({},Object(i["c"])("analytics",{resume:"salesResume"}))},y=p,h=(s("34fb"),Object(d["a"])(y,m,_,!1,null,"4420515c",null));h.options.__file="analytics-allsels-resume.vue";var R=h.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card align-left"},[e._m(0),s("p",[e._v("Lucro Bruto Gerado: R$"+e._s(e.ownSalesResume.grossProfit))]),s("p",[e._v("Lucro Líquido Gerado: R$"+e._s(e.ownSalesResume.netProfit))]),s("p",[e._v("Quantidade de Jóias Vendidas: "+e._s(e.ownSalesResume.quantity))])])},g=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",[e._v("Resumo das Minhas Vendas")])])}],O={computed:Object(n["a"])({},Object(i["c"])("analytics",{ownSalesResume:"ownSalesResume"}))},j=O,w=(s("6965"),Object(d["a"])(j,b,g,!1,null,"7f10c018",null));w.options.__file="analytics-ownsells-resume.vue";var $=w.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.sellersResumeIds.length>0?s("div",{staticClass:"sellers-resume"},[e._m(0),e._l(e.sellersResumeIds,function(t){return s("div",{key:t,staticClass:"card"},[s("p",[s("strong",[e._v(e._s(e.sellers[t].name))])]),s("p",[e._v("A pagar: R$"+e._s(e.sellersResume[t].toPay))]),s("p",[e._v("Lucro Bruto Gerado: R$"+e._s(e.sellersResume[t].grossProfit))]),s("p",[e._v("Lucro Líquido Gerado: R$"+e._s(e.sellersResume[t].netProfit))]),s("p",[e._v("Quantidade de Jóias Vendidas: "+e._s(e.sellersResume[t].quantity))])])})],2):e._e()},A=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",[e._v("Resumo dos Vendedores")])])}],C=(s("ac6a"),s("456d"),{computed:Object(n["a"])({},Object(i["c"])("sellers",{sellers:"all"}),Object(i["c"])("analytics",{ownSalesResume:"ownSalesResume",sellersResume:"sellersResume"}),{sellersResumeIds:function(){return Object.keys(this.sellersResume)}})}),F=C,S=(s("7e51"),Object(d["a"])(F,P,A,!1,null,"c0a1f8fa",null));S.options.__file="analytics-sellers-resume.vue";var E=S.exports,B={components:{AnalyticsFilter:v,AnalyticsResume:R,AnalyticsOwnResume:$,AnalyticsSellersResume:E},computed:Object(n["a"])({},Object(i["c"])("analytics",{filteredIds:"filteredSalesIds"}))},L=B,k=(s("cf10"),Object(d["a"])(L,a,r,!1,null,"c27cd99e",null));k.options.__file="Analytics.vue";t["default"]=k.exports},6965:function(e,t,s){"use strict";var a=s("f2d5"),r=s.n(a);r.a},"7e51":function(e,t,s){"use strict";var a=s("a8b7"),r=s.n(a);r.a},"953d":function(e,t,s){},a8b7:function(e,t,s){},cf10:function(e,t,s){"use strict";var a=s("953d"),r=s.n(a);r.a},dd07:function(e,t,s){"use strict";var a=s("0ef7"),r=s.n(a);r.a},e793:function(e,t,s){},f2d5:function(e,t,s){}}]);
//# sourceMappingURL=analytics.cd984f01.js.map