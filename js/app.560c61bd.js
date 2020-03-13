(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],v=0,p=[];v<r.length;v++)o=r[v],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-chat/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"034f":function(t,e,i){"use strict";var n=i("27fb"),s=i.n(n);s.a},"27fb":function(t,e,i){},afe4:function(t,e,i){"use strict";var n=i("d147"),s=i.n(n);s.a},b1d3:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Vue100vh",[i("v-app",[i("v-toolbar",{staticClass:"elevation-1",attrs:{color:t.mainColor,dark:"",height:"64"}},[i("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[i("v-icon",[t._v("mdi-arrow-left")])],1),i("v-toolbar-title",[i("v-list-item",{staticClass:"pl-2 pr-0",attrs:{"two-line":""},on:{click:function(e){return t.$router.push("profile")}}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))]),i("v-list-item-subtitle",{staticClass:"caption white--text"},[t._v(t._s(t.time))])],1)],1)],1),i("v-spacer")],1),i("v-app",[i("v-content",[i("v-card",{staticClass:"overflow-hidden"},[i("router-view")],1)],1)],1),t.error?[i("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeError}},[t._v("\n        "+t._s(t.error)+"\n        "),i("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e(),t.message?[i("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeMessage}},[t._v("\n        "+t._s(t.message)+"\n        "),i("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeMessage(e)}}},[t._v("Close")])],1)]:t._e()],2)],1)},a=[],o=i("d225"),r=i("b0b4"),c=i("308d"),l=i("6bb5"),u=i("4e2b"),v=i("9ab4"),p=i("60a3"),m=i("6fc5"),d=i("2f62");n["default"].use(d["a"]);var h=new d["a"].Store({}),f=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t._error="",t._message="",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"setError",value:function(t){this._error=t}},{key:"clearError",value:function(){this._error=""}},{key:"setMessage",value:function(t){this._message=t}},{key:"clearMessage",value:function(){this._message=""}},{key:"error",get:function(){return this._error}},{key:"message",get:function(){return this._message}}]),e}(m["d"]);Object(v["a"])([m["c"]],f.prototype,"setError",null),Object(v["a"])([m["c"]],f.prototype,"clearError",null),Object(v["a"])([m["c"]],f.prototype,"setMessage",null),Object(v["a"])([m["c"]],f.prototype,"clearMessage",null),f=Object(v["a"])([Object(m["b"])({dynamic:!0,store:h,name:"alerts"})],f);var b=Object(m["e"])(f),g=i("7618"),y=null,_=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t._isConnected=!1,t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"SET_IS_CONNECTED",value:function(t){this._isConnected=t}},{key:"Init",value:function(t){var e=this,i=t.eventListener,n=t.auth_key;i.onopen=function(t){y=t.target,console.log("data",t.target),e.context.commit("SET_IS_CONNECTED",!0)},i.onclose=function(t){console.log("onclose",t),e.context.commit("SET_IS_CONNECTED",!1)},i.onmessage=function(t){var e=t.data;if("object"===Object(g["a"])(e))console.log("object",e);else if("{"===e.charAt(0))try{console.log("string",JSON.parse(e))}catch(i){console.error(i)}else console.log(e)},console.log("auth_key",n)}},{key:"sendText",value:function(t){this.isConnected&&y&&y.send(t)}},{key:"sendObject",value:function(t){this.isConnected&&y&&y.sendObj(t)}},{key:"isConnected",get:function(){return this._isConnected}}]),e}(m["d"]);Object(v["a"])([m["c"]],_.prototype,"SET_IS_CONNECTED",null),Object(v["a"])([Object(m["a"])({rawError:!0})],_.prototype,"Init",null),Object(v["a"])([Object(m["a"])({rawError:!0})],_.prototype,"sendText",null),Object(v["a"])([Object(m["a"])({rawError:!0})],_.prototype,"sendObject",null),_=Object(v["a"])([Object(m["b"])({dynamic:!0,store:h,name:"websocket"})],_);var O=Object(m["e"])(_),j="orange",C=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=j,t.title="0.1.14",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){var t=this.$route.query.auth_key||"auth_key";O.Init({eventListener:this.$options.sockets,auth_key:t})}},{key:"websocketHandler",value:function(){}},{key:"closeError",value:function(){b.clearError()}},{key:"closeMessage",value:function(){b.clearMessage()}},{key:"error",get:function(){return b.error}},{key:"message",get:function(){return b.message}}]),e}(p["c"]);C=Object(v["a"])([p["a"]],C);var x=C,k=x,w=(i("034f"),i("2877")),E=Object(w["a"])(k,s,a,!1,null,null,null),M=E.exports,S=(i("5363"),i("ce5b")),T=i.n(S),P=(i("bf40"),i("8c4f")),$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{staticClass:"elevation-1",attrs:{color:t.mainColor,prominent:"",height:"350px",dark:"",src:t.avatar,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-5","scroll-threshold":"200","shrink-on-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[i("v-img",t._b({},"v-img",n,!1))]}}])},[i("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[i("v-icon",[t._v("mdi-arrow-left")])],1),i("v-toolbar-title",{},[t._v(t._s(t.title))]),i("div",{staticClass:"flex-grow-1"}),i("Menu",{attrs:{options:t.options}})],1),i("v-sheet",{staticClass:"overflow-y-auto orange lighten-5",attrs:{id:"scrolling-techniques-5","max-height":"600"}},[i("v-container",{staticClass:"px-0",staticStyle:{"min-height":"1500px"}},[i("v-list",{staticClass:"py-0",attrs:{flat:"",tile:""}},[i("v-list-item-group",[i("v-list-item",{staticClass:"py-1"},[i("v-list-item-content",[i("v-list-item-title",[t._v("Mute notification")])],1),i("v-list-item-action",{staticClass:"ml-3"},[i("v-switch",{on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}})],1)],1),i("v-divider"),i("v-list-item",{staticClass:"py-1"},[i("v-list-item-content",[i("v-list-item-title",[t._v("Custom notifications")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"py-1"},[i("v-list-item-content",[i("v-list-item-title",[t._v("Media visibility")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"py-1 pr-3",attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",[t._v("Encryption")]),i("v-list-item-subtitle",[t._v("Messages to this chat and calls are secured with end-to-end encryption. Tap to\n                verify.\n              ")])],1),i("v-list-item-action",{staticClass:"ml-3 mt-9"},[i("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-lock")])],1)],1)],1)],1),i("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[i("v-list-item-group",[i("v-list-item",{staticClass:"py-1",attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",[t._v("Test status")]),i("v-list-item-subtitle",[t._v("30 July 2018")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"py-1 pr-0",attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",[t._v("+27 22 452 51571")]),i("v-list-item-subtitle",[t._v("Mobile")])],1),i("v-list-item-action",{staticClass:"d-flex flex-row mb-5"},[i("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(e){return e.stopPropagation(),t.$router.push("chat")},touchstart:function(t){t.stopPropagation()}}},[i("v-icon",{staticClass:"flip-icon orange--text"},[t._v("mdi-android-messages")])],1),i("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[i("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-phone")])],1),i("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[i("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-video")])],1)],1)],1)],1)],1),i("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[i("v-list-item-group",[i("v-list-item",{staticClass:"py-1"},[i("v-list-item-content",{staticClass:"red--text text--darken-2"},[i("v-list-item-title",[i("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-cancel")]),t._v("\n                Block\n              ")],1)],1)],1),i("v-divider")],1)],1),i("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[i("v-list-item-group",[i("v-list-item",{staticClass:"py-1"},[i("v-list-item-content",{staticClass:"red--text text--darken-2"},[i("v-list-item-title",[i("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-thumb-down")]),t._v("\n                Report contact\n              ")],1)],1)],1),i("v-divider")],1)],1)],1)],1)],1)},I=[],N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{left:"",bottom:"",transition:"scroll-x-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g({attrs:{icon:""}},n),[i("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[i("v-list",{staticClass:"py-0"},t._l(t.options,(function(e){return i("v-list-item",{key:e,on:{click:function(){}}},[i("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)},D=[],z=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(p["c"]);Object(v["a"])([Object(p["b"])({default:function(){return[]}})],z.prototype,"options",void 0),z=Object(v["a"])([p["a"]],z);var B=z,J=B,V=Object(w["a"])(J,N,D,!1,null,null,null),q=V.exports,W=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=j,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["Share","Edit","View in address book","Verify security code"],t}return Object(u["a"])(e,t),e}(p["c"]);W=Object(v["a"])([Object(p["a"])({components:{Menu:q}})],W);var A=W,L=A,H=Object(w["a"])(L,$,I,!1,null,null,null),R=H.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ChatTopBar"),i("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"","max-height":"600"}},[i("v-container",{staticClass:"pa-0 pt-2 grey lighten-2 back subtitle-2",staticStyle:{height:"90vh"}},[t._l(t.messages,(function(e,n){return["incoming"===e.direction?i("v-card",{key:n,staticClass:"left mx-3 mb-1 px-2 py-1 float-left",class:{"chat-bubble mt-1":t.firstDirection(e,n)},attrs:{"min-width":"50%","max-width":"80%"}},[i("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),i("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[i("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")])])]):"outgoing"===e.direction?i("v-card",{key:n,staticClass:"right mx-3 mb-1 px-2 py-1 float-right orange lighten-3",class:{"chat-bubble mt-1":t.firstDirection(e,n)},attrs:{"min-width":"50%","max-width":"80%"}},[i("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),i("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[i("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")]),"received"===e.status?i("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"grey lighten-0"}},[t._v("mdi-check-all")]):"read"===e.status?i("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"blue lighten-2"}},[t._v("mdi-check-all")]):t._e()],1)]):t._e()]})),i("ChatBox")],2)],1)],1)},F=[],G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-toolbar",{staticClass:"elevation-1",attrs:{color:t.mainColor,dark:"",height:"64"}},[i("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[i("v-icon",[t._v("mdi-arrow-left")])],1),i("v-avatar",[i("v-img",{attrs:{"aspect-ratio":"1",width:"45","max-width":"45",height:"45",src:t.avatar}})],1),i("v-toolbar-title",[i("v-list-item",{staticClass:"pl-2 pr-0",attrs:{"two-line":""},on:{click:function(e){return t.$router.push("profile")}}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))]),i("v-list-item-subtitle",{staticClass:"caption white--text"},[t._v(t._s(t.time))])],1)],1)],1),i("v-spacer"),i("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[i("v-icon",[t._v("mdi-video")])],1),i("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[i("v-icon",[t._v("mdi-phone")])],1),i("Menu",{attrs:{options:t.options}})],1)},K=[],Q=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=j,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["View contact","Media","Search","Mute notifications","Wallpaper","More"],t}return Object(u["a"])(e,t),e}(p["c"]);Q=Object(v["a"])([Object(p["a"])({components:{Menu:q}})],Q);var U=Q,X=U,Z=Object(w["a"])(X,G,K,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chatbox-container"},[i("v-container",{staticClass:"px-2 py-1",attrs:{justify:"center"}},[i("v-layout",[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"10"}},[i("div",{staticClass:"white elevation-1",staticStyle:{"border-radius":"50px",height:"48px"}},[i("v-container",{staticClass:"px-1",attrs:{"fill-height":""}},[i("v-layout",{attrs:{"align-center":""}},[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{size:"28"}},[t._v("mdi-emoticon-outline")])],1),i("div",[i("v-textarea",{staticClass:"mt-0",staticStyle:{"max-width":"160px"},attrs:{rows:"1",solo:"",flat:"",placeholder:"Type a message"}})],1),i("div",{staticClass:"ml-0"},[i("v-btn",{attrs:{icon:""}},[i("v-icon",{staticClass:"lean-left-icon grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-paperclip")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",{staticClass:"grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-camera")])],1)],1)],1)],1)],1)]),i("v-col",{staticClass:"pl-2",attrs:{cols:"2"}},[i("v-btn",{attrs:{color:t.mainColor,dark:"",fab:"",height:"48px",width:"48px","min-width":"48px"},on:{click:function(e){return t.sendMessage()}}},[i("v-icon",{attrs:{size:"24"}},[t._v(t._s(t.sendIcon))])],1)],1)],1)],1)],1)],1)},it=[],nt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=j,t.sendIcon="mdi-send",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"sendMessage",value:function(){this.sendIcon="mdi-microphone"==this.sendIcon?"mdi-send":"mdi-microphone"}}]),e}(p["c"]);nt=Object(v["a"])([p["a"]],nt);var st=nt,at=st,ot=(i("afe4"),Object(w["a"])(at,et,it,!1,null,null,null)),rt=ot.exports,ct=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.messages=[{direction:"incoming",text:"We should be able to get there on time right?",time:"8:10pm"},{direction:"incoming",text:"I mean, surely? It can't happen again",time:"8:11pm"},{direction:"outgoing",text:"Don't hold up your breathe. Todd always takes years to get ready. It will be fine either way.",status:"received/read",time:"8:18pm"},{direction:"outgoing",text:"We are going to be fine.",status:"read",time:"8:19pm"},{direction:"outgoing",text:":)",status:"read",time:"8:20pm"},{direction:"incoming",text:"Almost here?",time:"9:00pm"},{direction:"incoming",text:"Is that your car in the street?",time:"9:02pm"},{direction:"outgoing",text:"Yea.",status:"received",time:"9:03pm"}],t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"firstDirection",value:function(t,e){if(0==e)return!0;var i=t.direction!=this.messages[e-1].direction;return i}}]),e}(p["c"]);ct=Object(v["a"])([Object(p["a"])({components:{ChatTopBar:tt,ChatBox:rt}})],ct);var lt=ct,ut=lt,vt=(i("d475"),Object(w["a"])(ut,Y,F,!1,null,"14b4c9d0",null)),pt=vt.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("strong",[t._v(t._s(t.isConnected))]),i("v-btn",{attrs:{small:"",disabled:!1},on:{click:t.test}},[t._v("Test\n  ")])],1)},dt=[],ht=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"test",value:function(){}},{key:"isConnected",get:function(){return O.isConnected}}]),e}(p["c"]);ht=Object(v["a"])([p["a"]],ht);var ft=ht,bt=ft,gt=Object(w["a"])(bt,mt,dt,!1,null,null,null),yt=gt.exports,_t=[{path:"/",name:"start",component:yt},{path:"/profile",name:"profile",component:R},{path:"/chat",name:"chat",component:pt},{path:"*",component:yt}];i("b408");n["default"].config.productionTip=!1,n["default"].config.silent=!0,n["default"].use(T.a),n["default"].use(P["a"]);var Ot=new P["a"]({routes:_t,mode:"history"});new n["default"]({router:Ot,store:h,vuetify:new T.a({icons:{iconfont:"mdi"}}),render:function(t){return t(M)}}).$mount("#app")},d147:function(t,e,i){},d475:function(t,e,i){"use strict";var n=i("b1d3"),s=i.n(n);s.a}});
//# sourceMappingURL=app.560c61bd.js.map