(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{601:function(t,e,r){"use strict";r.r(e);var n=r(2),c=r(13);r(65),r(11),r(9),r(8),r(4),r(15),r(10),r(16),r(103);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={layout:"default",data:function(){return{products:[]}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getFamilies");case 2:case"end":return e.stop()}}),e)})))()},computed:{productsStore:function(){return this.$store.getters.getFamilies}},watch:{productsStore:function(){this.products=this.$store.getters.getFamilies.map((function(a){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},a)}))}}},l=f,O=r(71),component=Object(O.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("pre",[t._v("          "+t._s(t.products)+"\n      ")])])}),[],!1,null,null,null);e.default=component.exports}}]);