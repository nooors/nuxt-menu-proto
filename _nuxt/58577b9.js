(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{596:function(e,t,r){"use strict";r.r(t);r(11),r(9),r(8),r(4),r(15),r(10),r(16);var n=r(2),c=r(13);r(65),r(29),r(103);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={data:function(){return{families:[],familiesArray:[]}},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getFamilies");case 2:case"end":return t.stop()}}),t)})))()},computed:{familiesStore:function(){return this.$store.getters.getFamilies}},watch:{familiesStore:function(){this.families=this.$store.getters.getFamilies.map((function(a){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},a)})),this.familiesArray=this.families.map((function(a){return a.name}))}}},l=f,m=r(71),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Array Test")]),e._v(" "),r("pre",[e._v("    "+e._s(e.families)+"\n")])])}),[],!1,null,null,null);t.default=component.exports}}]);