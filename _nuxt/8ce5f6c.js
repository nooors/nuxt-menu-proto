(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{color:"warning"}},computed:{avatar:function(){if(this.$store.getters.getUser.email)return{name:this.$store.getters.getUser.email.charAt(0).toUpperCase(),email:this.$store.getters.getUser.email,user:this.$store.getters.getUser.user,role:this.$store.getters.getUser.role}}}},o=n(70),c=n(77),l=n.n(c),m=n(213),d=n(245),v=n(214),f=n(135),h=n(455),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-menu",{attrs:{"offset-y":"",rounded:"b-xl"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-avatar",{attrs:{color:e.color}},[e._v("\n          "+e._s(e.avatar.name)+"\n        ")])],1)]}}])},[e._v(" "),n("v-list",[n("v-list-item",[e._v(" Email: "+e._s(e.avatar.email)+" ")]),e._v(" "),n("v-list-item",[e._v(" User: "+e._s(e.avatar.user)+" ")]),e._v(" "),n("v-list-item",[e._v(" Role: "+e._s(e.avatar.role)+" ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAvatar:m.a,VBtn:d.a,VList:v.a,VListItem:f.a,VMenu:h.a})},280:function(e,t,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("dc093880",content,!0,{sourceMap:!1})},288:function(e,t,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("6add68a7",content,!0,{sourceMap:!1})},290:function(e,t,n){"use strict";n.r(t),t.default=function(){return{authenticate:!1,Users:null,menu:null,languages:["Español","Català","English"],languageSelected:0,isLogged:!1,products:[],families:[],familyId:null,ptypes:[],ptypeId:null,departments:[],token:null,user:null}}},307:function(e,t,n){"use strict";var r={name:"authenticate",methods:{checkTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},o=n(70),c=n(77),l=n.n(c),m=n(461),d=n(453),v=n(462),f=n(469),h=n(212),x=n(463),y=n(464),k=n(451),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-theme-provider",{attrs:{root:""}},[n("v-main",{staticClass:"d-flex justify-center align-center"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"d-flex justify-center"},[n("v-card",{staticClass:"py-4 px-6",attrs:{elevation:"10",shaped:""}},[n("button",{staticClass:"v-btn v-btn--icon v-btn--round theme--light v-size--default",attrs:{type:"button","aria-label":"invert-example-colors"},on:{click:e.checkTheme}},[n("v-icon",[e._v("\n                  mdi-invert-colors\n                ")])],1),e._v(" "),n("nuxt")],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VApp:m.a,VCard:d.a,VCol:v.a,VContainer:f.a,VIcon:h.a,VMain:x.a,VRow:y.a,VThemeProvider:k.a})},308:function(e,t,n){"use strict";var r={components:{TheAvatar:n(217).default},name:"DefaultLayout",middleware:"auth",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-earth",title:"Languages",to:"/Languages"},{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-family-tree",title:"Families",to:"/Families"},{icon:"mdi-chart-tree",title:"Departments",to:"/Departments"},{icon:"mdi-pasta",title:"Products",to:"/Products"},{icon:"mdi-silverware ",title:"Daily-menu",to:"/DailyMenu"},{icon:"mdi-palette",title:"Colors",to:"/Colors"},{icon:"mdi-set-none",title:"Product Types",to:"/PTypes"}],miniVariant:!1,right:!0,title:"Menu-Nuxt",dark:!0}},computed:{isLogged:function(){console.log("isLogged");var e=this.$store.getters.getIsLogged;return console.log(e),e}},created:function(){this.isLogged&&this.items.push({icon:"mdi-account-plus-outline",title:"Register",to:"/Register"},{icon:"mdi-logout ",title:"Log Out",to:"/LogOut"},{icon:"mdi-vuetify ",title:"Pruebas",to:"/ComponentTester"},{icon:"mdi-account-outline",title:"Users",to:"/Users"})}},o=(n(400),n(70)),c=n(77),l=n.n(c),m=n(461),d=n(467),v=n(465),f=n(245),h=n(469),x=n(212),y=n(214),k=n(135),w=n(216),_=n(81),$=n(463),T=n(470),j=n(466),R=n(468),I=n(304),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-navigation-drawer",{attrs:{"mini-variant":e.miniVariant,clipped:e.clipped,fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",e._l(e.items,(function(t,i){return n("v-list-item",{key:i,attrs:{to:t.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.title)}})],1)],1)})),1)],1),e._v(" "),n("v-app-bar",{attrs:{"clipped-left":e.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.miniVariant=!e.miniVariant}}},[n("v-icon",[e._v("mdi-"+e._s("chevron-"+(e.miniVariant?"right":"left")))])],1),e._v(" "),n("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),e._v(" "),n("v-spacer"),e._v(" "),e.isLogged?n("the-avatar"):e._e(),e._v(" "),n("v-icon",{attrs:{left:"",dark:""}}),n("v-switch",{attrs:{"prepend-icon":"mdi-invert-colors"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),e._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1)],1)}),[],!1,null,"ba7133a2",null);t.a=component.exports;l()(component,{TheAvatar:n(217).default}),l()(component,{VApp:m.a,VAppBar:d.a,VAppBarNavIcon:v.a,VBtn:f.a,VContainer:h.a,VIcon:x.a,VList:y.a,VListItem:k.a,VListItemAction:w.a,VListItemContent:_.a,VListItemTitle:_.b,VMain:$.a,VNavigationDrawer:T.a,VSpacer:j.a,VSwitch:R.a,VToolbarTitle:I.a})},316:function(e,t,n){n(317),e.exports=n(318)},341:function(e,t,n){"use strict";n.r(t),t.default=function(e){var t=e.store,n=e.redirect;if(!t.state.isLogged)return n("/Login")}},348:function(e,t,n){"use strict";n(280)},349:function(e,t,n){var r=n(19)(!1);r.push([e.i,"h1[data-v-35e10596]{font-size:20px}",""]),e.exports=r},400:function(e,t,n){"use strict";n(288)},401:function(e,t,n){var r=n(19)(!1);r.push([e.i,"html[data-v-ba7133a2]{overflow-y:auto}",""]),e.exports=r},430:function(e,t,n){"use strict";n.r(t);n(290);t.default={getMenu:function(e){return e.menu},getUser:function(){return{user:localStorage.getItem("user"),role:localStorage.getItem("role"),email:localStorage.getItem("email")}},getUsers:function(e){return e.Users},getLanguages:function(e){return e.languages},getLanguageSelected:function(e){return e.languageSelected},getIsLogged:function(e){return e.isLogged},getProducts:function(e){return e.products},getFamilies:function(e){return e.families},getFamilyById:function(e){return e.familyId},getPtypes:function(e){return e.ptypes},getPtypeById:function(e){return e.ptypeId},getDepartments:function(e){return e.departments},getToken:function(){return localStorage.getItem("token")}}},431:function(e,t,n){"use strict";n.r(t),t.default={setUser:function(e,t){e.user=t,localStorage.setItem("user",t.User),localStorage.setItem("role",t.Admin),localStorage.setItem("email",t.email)},setUsers:function(e,t){e.Users=t},setMenu:function(e,t){e.menu=t},setLanguage:function(e,t){e.languageSelected=t},isLogged:function(e,t){e.isLogged=!0,localStorage.setItem("token",t),e.token=t},logOut:function(e){e.isLogged=!1,e.token="",e.urer=null,localStorage.clear()},setAuthenticate:function(e){e.authenticate=!0},removeAuthenticate:function(e){e.authenticate=!1},setProducts:function(e,t){e.products=t},setFamilies:function(e,t){e.families=t},setFamilyId:function(e,t){e.familyId=t},setPtypes:function(e,t){e.ptypes=t},setPtypeId:function(e,t){e.ptypeId=t},setDepartments:function(e,t){e.departments=t}}},450:function(e,t,n){"use strict";n.r(t);var r,o=n(2),c=n(17),l=(n(29),n(32),n(102),n(25),n(68),n(60),n(86),n(64),n(42),n(4),n(72),"https://menuproto.ddns.net/api/");t.default=(r={Register:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.$post(l,e);case 3:r=n.sent,console.log(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},login:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,r.prev=1,r.next=4,n.$axios.$post("".concat(l,"Accounts/login"),t);case 4:c=r.sent,d=c.token,v=void 0,f=void 0,v=d.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),f=decodeURIComponent(atob(v).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")),m=JSON.parse(f),o("isLogged",c.token),o("setUser",m),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),alert(r.t0);case 13:case"end":return r.stop()}var d,v,f}),r,null,[[1,10]])})))()},logOut:function(e){(0,e.commit)("LogOut")},getMenu:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,t.$axios.$get("".concat(l,"menu"));case 4:o=n.sent,r("setMenu",o),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getUsers:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,o=e.getters,alert("getting users"),n.prev=2,n.next=5,t.$axios.$get("".concat(l,"Accounts"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 5:c=n.sent,r("setUsers",c),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},getProducts:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,o=e.getters,n.prev=1,n.next=4,t.$axios.$get("".concat(l,"Products"),{headers:{"Content-Type":"application/json",Athorization:"Bearer ".concat(o.getToken)}});case 4:c=n.sent,r("setProducts",c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getFamilies:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,o=e.getters,n.prev=1,n.next=4,t.$axios.$get("".concat(l,"Families"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:c=n.sent,r("setFamilies",c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getFamilyById:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,c=e.getters,r.prev=1,r.next=4,n.$axios.$get("".concat(l,"Families/").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.getToken)}});case 4:m=r.sent,o("setFamilyId",m),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},addFamily:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.getters,c=e.dispatch,r.prev=1,r.next=4,n.$axios.$post("".concat(l,"Families"),{name:t},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:m=r.sent,console.log(m),c("getFamilies"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},updateFamily:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.getters,c=e.dispatch,r.prev=1,r.next=4,n.$axios.$put("".concat(l,"Families"),{id:t.id,name:t.name},{headers:{"Const-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:m=r.sent,console.log(m),c("getFamilies"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},deleteFamily:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.getters,c=e.dispatch,r.prev=1,r.next=4,n.$axios.delete("".concat(l,"Families/?Id=").concat(t),{headers:{"Const-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:m=r.sent,c("getFamilies"),console.log(m),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},getPtypes:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,o=e.getters,n.prev=1,n.next=4,t.$axios.$get("".concat(l,"PTypes"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:c=n.sent,r("setPtypes",c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getPtypeId:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.commit,c=e.getters,r.prev=1,r.next=4,n.$axios.$get("".concat(l,"PTypes/").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.getToken)}});case 4:m=r.sent,o("setPtypeId",m),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},addPtypes:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.getters,c=e.dispatch,r.prev=1,r.next=4,n.$axios.$post("".concat(l,"Ptypes"),{name:t},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:m=r.sent,console.log(m),c("getPtypes"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()},updatePtypes:function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.getters,c=e.dispatch,r.prev=1,r.next=4,n.$axios.$put("".concat(l,"PTypes"),{id:t.id,name:t.name},{headers:{"Const-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:m=r.sent,console.log(m),c("getPtypes"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}},Object(o.a)(r,"deleteFamily",(function(e,t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var o,c,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.getters,c=e.dispatch,r.prev=1,r.next=4,n.$axios.delete("".concat(l,"PTypes/?Id=").concat(t),{headers:{"Const-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:m=r.sent,c("getPtypes"),console.log(m),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()})),Object(o.a)(r,"getDepartments",(function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.commit,o=e.getters,n.prev=1,n.next=4,t.$axios.$get("".concat(l,"Departments"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.getToken)}});case 4:c=n.sent,r("setDepartments",c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()})),Object(o.a)(r,"setLanguage",(function(e,t){(0,e.commit)("setLanguage",t)})),r)},96:function(e,t,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(348),n(70)),c=n(77),l=n.n(c),m=n(461),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[404===e.error.statusCode?n("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):n("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),n("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);t.a=component.exports;l()(component,{VApp:m.a})}},[[316,33,4,34]]]);