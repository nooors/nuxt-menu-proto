(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{452:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var r=n(453),l=n(0),o=Object(l.i)("v-card__actions"),c=Object(l.i)("v-card__subtitle"),d=Object(l.i)("v-card__text"),f=Object(l.i)("v-card__title");r.a},476:function(t,e,n){"use strict";var r=n(501);e.a=r.a},481:function(t,e,n){"use strict";var r=n(2),l=(n(38),n(56),n(223),n(11),n(4),n(9),n(48),n(120),n(8),n(10),n(14),n(15),n(7)),o=n(85),c=n(103);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(o.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},541:function(t,e,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("83ff91dc",content,!0,{sourceMap:!1})},542:function(t,e,n){var r=n(19)(!1);r.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=r},550:function(t,e,n){"use strict";n.r(e);n(25);var r={layout:"default",data:function(){return{show2:!1,rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},name:function(t){return/^[a-zA-Z ]+/.test(t)||"Invalid name format"},email:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||"Invalid e-mail."},phone:function(t){return/^[0-9]{9}/.test(t)||"Invalid number."}},items:["Admin","User","Guest"],dataValues:{email:"",password:"",firstName:"",lastName:"",phone:"",rol:""}}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("Register",this.dataValues)}}},l=n(70),o=n(77),c=n.n(o),d=n(245),f=n(453),h=n(452),v=n(462),m=n(484),y=(n(8),n(10),n(11),n(14),n(15),n(80)),x=n(2),_=n(21),w=(n(23),n(38),n(4),n(64),n(32),n(29),n(183),n(9),n(42),n(541),n(476)),V=n(505),O=n(0),j=n(12),S=n(62);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=w.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(O.B)(t).every((function(t){return null!=t&&"object"===Object(_.a)(t)}))}}},computed:{classes:function(){return C(C({},w.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(O.s)(e,1024===this.base))},internalArrayValue:function(){return Object(O.B)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,r=void 0===n?"":n,l=e.size,o=void 0===l?0:l,c=t.truncateText(r);return t.showSize?"".concat(c," (").concat(Object(O.s)(o,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(j.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(O.j)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(V.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=w.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(S.b)(t.data.style,{display:"none"})),t},genInput:function(){var input=w.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:n,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=w.a.options.methods.genTextFieldSlot.call(this);return e.data.on=C(C({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(y.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),z=n(481),B=n(464),P=n(551),D=n(501),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login d-flex justify-center mt-12"},[n("v-card",{attrs:{shaped:"",elevation:"10"}},[n("v-card-title",[t._v("\n      Register\n    ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-form",{ref:"form"},[n("v-card-text",[n("v-row",{staticClass:"mx-2"},[n("v-col",[n("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":"mdi-account",rules:[t.rules.required,t.rules.name],type:"text",name:"input-1-1",hint:"characters and spaces only",label:"First Name",value:""},model:{value:t.dataValues.firstName,callback:function(e){t.$set(t.dataValues,"firstName",e)},expression:"dataValues.firstName"}})],1),t._v(" "),n("v-col",[n("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":"mdi-account",rules:[t.rules.required,t.rules.name],type:"text",name:"input-1-2",label:"Last Name",hint:"characters and spaces only",value:""},model:{value:t.dataValues.lastName,callback:function(e){t.$set(t.dataValues,"lastName",e)},expression:"dataValues.lastName"}})],1)],1),t._v(" "),n("v-row",{staticClass:"mx-2"},[n("v-col",[n("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":"mdi-at",rules:[t.rules.required,t.rules.email],name:"input-1-3",label:"e-mail",hint:"e-mail format",value:""},model:{value:t.dataValues.email,callback:function(e){t.$set(t.dataValues,"email",e)},expression:"dataValues.email"}})],1),t._v(" "),n("v-col",[n("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":"mdi-cellphone-basic",rules:[t.rules.required,t.rules.phone],type:"number",name:"input-1-4",label:"Phone number",hint:"9 numbers no space.",value:""},model:{value:t.dataValues.phone,callback:function(e){t.$set(t.dataValues,"phone",e)},expression:"dataValues.phone"}})],1)],1),t._v(" "),n("v-row",{staticClass:"mx-2"},[n("v-col",[n("v-select",{attrs:{items:t.items,name:"input 1-5",label:"Role","append-icon":"mdi-account-box-multiple",rules:[t.rules.required]},model:{value:t.dataValues.rol,callback:function(e){t.$set(t.dataValues,"rol",e)},expression:"dataValues.rol"}})],1),t._v(" "),n("v-col",[n("v-file-input",{staticClass:"input-group--focused",attrs:{"prepend-icon":"","append-icon":"mdi-camera",name:"input-10-2",label:"Photo",hint:"upload a profile photo",accept:"image/png, image/jpeg, image/bmp"}})],1)],1),t._v(" "),n("v-row",{staticClass:"mx-2"},[n("v-col",[n("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":t.show2?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show2?"text":"password",name:"input-10-2",label:"Password",hint:"At least 8 characters",value:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.dataValues.password,callback:function(e){t.$set(t.dataValues,"password",e)},expression:"dataValues.password"}})],1),t._v(" "),n("v-col",[n("v-text-field",{staticClass:"input-group--focused",attrs:{"append-icon":t.show2?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min],type:t.show2?"text":"password",name:"input-10-2",label:"Confim password",hint:"At least 8 characters",value:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.dataValues.password,callback:function(e){t.$set(t.dataValues,"password",e)},expression:"dataValues.password"}})],1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"d-flex justify-end"},[n("v-btn",{staticClass:"mr-3",attrs:{shaped:"",elevation:"10"},on:{click:t.submit}},[t._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCol:v.a,VDivider:m.a,VFileInput:k,VForm:z.a,VRow:B.a,VSelect:P.a,VTextField:D.a})}}]);