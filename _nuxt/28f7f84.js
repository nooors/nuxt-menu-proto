(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{564:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(17);n(64),n(8),n(10),n(11),n(4),n(14),n(9),n(15),n(102);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={components:{ItemContentLayout:n(471).default},data:function(){return{item:{name:"Families",families:[]}}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getFamilies");case 2:case"end":return t.stop()}}),t)})))()},computed:{familiesStore:function(){return this.$store.getters.getFamilies}},watch:{familiesStore:function(){this.item.families=this.$store.getters.getFamilies.map((function(a){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},a)}))}},methods:{addNewFamily:function(e){alert("newFamily"),this.$store.dispatch("addFamily",e)},updateFamily:function(e,t){this.$store.dispatch("updateFamily",{id:e,name:t})},deleteFamily:function(e){this.item.families.length>0&&this.$store.dispatch("deleteFamily",e).catch((function(){console.log("dispatch-error")}))}}},m=l,f=n(70),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("item-content-layout",{attrs:{name:e.item.name,items:e.item.families},on:{addNewItem:e.addNewFamily,updateItem:e.updateFamily,deleteItem:e.deleteFamily}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ItemContentLayout:n(471).default})}}]);