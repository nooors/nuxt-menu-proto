(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{563:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(17);r(64),r(8),r(10),r(11),r(4),r(14),r(9),r(15),r(102);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={data:function(){return{users:null}},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getUsers");case 2:case"end":return t.stop()}}),t)})))()},computed:{usersStore:function(){return this.$store.getters.getUsers}},watch:{usersStore:function(){this.users=this.$store.getters.getUsers.map((function(a){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},a)}))}}},O=f,l=r(70),component=Object(l.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Users")]),e._v(" "),r("pre",[e._v("  "+e._s(e.users)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);