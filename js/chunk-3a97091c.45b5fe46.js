(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a97091c"],{"7f7f":function(t,e,n){var r=n("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in a||n("9e1e")&&r(a,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},ac6a:function(t,e,n){for(var r=n("cadf"),a=n("0d58"),i=n("2aba"),o=n("7726"),s=n("32e9"),c=n("84f2"),v=n("2b4c"),d=v("iterator"),h=v("toStringTag"),l=c.Array,u={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=a(u),_=0;_<p.length;_++){var f,L=p[_],g=u[L],m=o[L],S=m&&m.prototype;if(S&&(S[d]||s(S,d,l),S[h]||s(S,h,L),c[L]=l,g))for(f in r)S[f]||i(S,f,r[f],!0)}},d724:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Report della conservazione")]),n("hr"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.list,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(t.changeAdminName(e.origin_id)))]),n("td",[t._v(t._s(e.da_v))]),n("td",[t._v(t._s(e.ver))]),n("td",[t._v(t._s(e.error))]),n("td",[t._v(t._s(e.cons))]),n("td",[t._v(t._s(e.pdv))]),n("td",[t._v(t._s(t.getTotal(e)))]),n("td",[t._v(t._s(t.getPercent(e)))]),n("td",[n("a",{on:{click:function(n){return t.update(e.origin_id)}}},[n("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])])})),0),t._m(1)])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("origine / stato versamento")]),n("th",[t._v("da conservare")]),n("th",[t._v("versato")]),n("th",[t._v("scartato")]),n("th",[t._v("conservato")]),n("th",[t._v("conservato pdv")]),n("th",[t._v("totale conservato")]),n("th",[t._v("conservato %")]),n("th",[t._v("op")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tfoot",[n("th",[t._v("origine / stato versamento")]),n("th",[t._v("da conservare")]),n("th",[t._v("versato")]),n("th",[t._v("scartato")]),n("th",[t._v("conservato")]),n("th",[t._v("conservato pdv")]),n("th",[t._v("totale conservato")]),n("th",[t._v("conservato %")]),n("th",[t._v("op")])])}],i=(n("7f7f"),n("ac6a"),{data:function(){return{list:[],adminList:[]}},mounted:function(){this.getList(),this.getAdmin()},methods:{getList:function(){var t=this;this.$store.dispatch("loading"),this.axios.get(this.apiURL+"/retention/report2").then((function(e){t.list=e.data,t.list.push(t.getAllTot(e.data)),t.$store.dispatch("loaded")}))},getAdmin:function(){var t=this;this.$store.dispatch("loading"),this.axios.get(this.apiURL+"/retention/admin").then((function(e){t.adminList=e.data,t.$store.dispatch("loaded")}))},changeAdminName:function(t){var e="";return this.adminList.forEach((function(n){n.id===parseInt(t)&&(e=t+" - "+n.name)})),""==e?t:e},getTotal:function(t){var e=0,n=0;return n=parseInt(t.da_v)+parseInt(t.ver)+parseInt(t.error)+parseInt(t.cons)+parseInt(t.pdv),e=parseInt(t.cons)+parseInt(t.pdv),e+"/"+n},getPercent:function(t){var e=0,n=0;return n=parseInt(t.da_v)+parseInt(t.ver)+parseInt(t.error)+parseInt(t.cons)+parseInt(t.pdv),e=parseInt(t.cons)+parseInt(t.pdv),0==e&&0==n?"0.00%":(e/n*100).toFixed(2)+"%"},getAllTot:function(t){var e={da_v:0,ver:0,error:0,cons:0,pdv:0};t.forEach((function(t){t.forEach((function(t){e.da_v+=t.da_v,e.ver+=t.ver,e.error+=t.error,e.cons+=t.cons,e.pdv+=t.pdv}))}))},update:function(t){window.open("https://archicons.archivium-srl.it/ArchiHub/procedures/varie/retention/report.php?origin_id="+t,"_blank")}}}),o=i,s=n("2877"),c=Object(s["a"])(o,r,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3a97091c.45b5fe46.js.map