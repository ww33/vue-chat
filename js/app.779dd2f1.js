(function(t){function e(e){for(var s,a,r=e[0],c=e[1],l=e[2],p=0,v=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&v.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},o=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-chat/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var s=n("27fb"),i=n.n(s);i.a},"27fb":function(t,e,n){},"5d17":function(t,e,n){"use strict";var s=n("e9ba"),i=n.n(s);i.a},afe4:function(t,e,n){"use strict";var s=n("d147"),i=n.n(s);i.a},b1d3:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Vue100vh",[n("v-app",[n("v-app-bar",{staticClass:"elevation-1",attrs:{fixed:"",color:t.mainColor,dark:""}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showBtnBack,expression:"showBtnBack"}],staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-toolbar-title",[n("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))])],1),n("v-spacer")],1),n("v-content",[n("v-card",{staticClass:"overflow-hidden"},[n("router-view")],1)],1),t.error?[n("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeError}},[t._v("\n        "+t._s(t.error)+"\n        "),n("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e(),t.message?[n("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeMessage}},[t._v("\n        "+t._s(t.message)+"\n        "),n("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeMessage(e)}}},[t._v("Close")])],1)]:t._e()],2)],1)},o=[],a=n("d225"),r=n("b0b4"),c=n("308d"),l=n("6bb5"),u=n("4e2b"),p=n("9ab4"),v=n("60a3"),d=n("6fc5"),m=n("2f62");s["default"].use(m["a"]);var h=new m["a"].Store({}),f=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t._error="",t._message="",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"setError",value:function(t){this._error=t}},{key:"clearError",value:function(){this._error=""}},{key:"setMessage",value:function(t){this._message=t}},{key:"clearMessage",value:function(){this._message=""}},{key:"test",value:function(t){console.log("alerts test",t)}},{key:"error",get:function(){return this._error}},{key:"message",get:function(){return this._message}}]),e}(d["d"]);Object(p["a"])([d["c"]],f.prototype,"setError",null),Object(p["a"])([d["c"]],f.prototype,"clearError",null),Object(p["a"])([d["c"]],f.prototype,"setMessage",null),Object(p["a"])([d["c"]],f.prototype,"clearMessage",null),Object(p["a"])([Object(d["a"])({rawError:!0})],f.prototype,"test",null),f=Object(p["a"])([Object(d["b"])({dynamic:!0,store:h,name:"alerts"})],f);var b=Object(d["e"])(f),g=function(){var t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(t=!0),t},_=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mobile=g(),t.packageVersion=Object({NODE_ENV:"production",BASE_URL:"/vue-chat/"}).PACKAGE_VERSION||"0",t.timeBuild=Object({NODE_ENV:"production",BASE_URL:"/vue-chat/"}).TIME_OF_BUILD||"",t._vk_settings={vk_app_id:"",vk_user_id:"",vk_platform:""},t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"setVkSettings",value:function(t){this._vk_settings=t}},{key:"isMobile",get:function(){return this.mobile}},{key:"appVersion",get:function(){return this.packageVersion}},{key:"timeOfBuild",get:function(){return this.timeBuild}},{key:"vkSettings",get:function(){return this._vk_settings}},{key:"appUrl",get:function(){return"/app".concat(this._vk_settings.vk_app_id,"_").concat(this._vk_settings.vk_user_id)}}]),e}(d["d"]);Object(p["a"])([d["c"]],_.prototype,"setVkSettings",null),_=Object(p["a"])([Object(d["b"])({dynamic:!0,store:h,name:"app"})],_);var y=Object(d["e"])(_),x=n("7618"),k=null,O={},j=0,C=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t._isConnected=!1,t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"SET_IS_CONNECTED",value:function(t){this._isConnected=t}},{key:"Init",value:function(t){var e=this,n=t.eventListener;n.onopen=function(t){k=t.target,e.context.commit("SET_IS_CONNECTED",!0)},n.onclose=function(t){e.context.commit("SET_IS_CONNECTED",!1)},n.onmessage=function(t){var n=t.data,s=void 0;if("object"===Object(x["a"])(n))s=n;else{if("{"!==n.charAt(0))return console.log(n),!1;try{s=JSON.parse(n)}catch(i){return console.error(i),!1}}s.hasOwnProperty("result")?s.hasOwnProperty("id")?e.onResponse(s):e.onResponseWithoutId(s):s.hasOwnProperty("error")?e.onResponseError(s):console.log("strange response",s)}}},{key:"sendText",value:function(t){this.isConnected&&k&&k.send(t)}},{key:"sendObject",value:function(t){this.isConnected&&k&&k.sendObj(t)}},{key:"serverMethod",value:function(t){var e=this,n=t.params;return j+=1,t["jsonrpc"]="2.0",t["id"]=j,new Promise((function(s,i){try{e.isConnected?(k.sendObj(t),O[j]={params:n,resolve:s,reject:i}):i({code:-1,message:"WebSocket not connected"})}catch(o){i(o)}}))}},{key:"onResponse",value:function(t){var e=O[t.id];if(e&&e.resolve)try{e.resolve(t),delete O[t.id]}catch(n){console.error(n)}else console.error("onResponse wrong id",t.id)}},{key:"onResponseError",value:function(t){console.log("onResponseError",t)}},{key:"onResponseWithoutId",value:function(t){console.log("onResponseWithoutId",t)}},{key:"test",value:function(t){O[t].resolve("хуясе!")}},{key:"isConnected",get:function(){return this._isConnected}}]),e}(d["d"]);Object(p["a"])([d["c"]],C.prototype,"SET_IS_CONNECTED",null),Object(p["a"])([Object(d["a"])({rawError:!0})],C.prototype,"Init",null),Object(p["a"])([Object(d["a"])({rawError:!0})],C.prototype,"sendText",null),Object(p["a"])([Object(d["a"])({rawError:!0})],C.prototype,"sendObject",null),Object(p["a"])([Object(d["a"])({rawError:!0})],C.prototype,"serverMethod",null),Object(p["a"])([Object(d["a"])({rawError:!0})],C.prototype,"onResponse",null),Object(p["a"])([Object(d["a"])({rawError:!0})],C.prototype,"onResponseError",null),Object(p["a"])([Object(d["a"])({rawError:!0})],C.prototype,"onResponseWithoutId",null),Object(p["a"])([Object(d["a"])({rawError:!0})],C.prototype,"test",null),C=Object(p["a"])([Object(d["b"])({dynamic:!0,store:h,name:"websocket"})],C);var w=Object(d["e"])(C),q="orange",E=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=q,t.title="0.1.22",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"initApp",value:function(){var t=this.$route.query,e=t.vk_app_id,n=void 0===e?"vk_app_id":e,s=t.vk_user_id,i=void 0===s?"12345678":s,o=t.vk_platform,a=void 0===o?"desktop_web":o;y.setVkSettings({vk_app_id:n,vk_user_id:i,vk_platform:a}),w.Init({eventListener:this.$options.sockets})}},{key:"created",value:function(){this.initApp()}},{key:"websocketHandler",value:function(){}},{key:"closeError",value:function(){b.clearError()}},{key:"closeMessage",value:function(){b.clearMessage()}},{key:"info",get:function(){return y.vkSettings.vk_platform}},{key:"error",get:function(){return b.error}},{key:"message",get:function(){return b.message}},{key:"showBtnBack",get:function(){return console.log("this.$route.path",this.$route.path),!("/"===this.$route.path||this.$route.path===y.appUrl)}}]),e}(v["c"]);E=Object(p["a"])([v["a"]],E);var I=E,S=I,T=(n("034f"),n("2877")),z=Object(T["a"])(S,i,o,!1,null,null,null),M=z.exports,P=(n("5363"),n("ce5b")),A=n.n(P),R=(n("bf40"),n("8c4f")),B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"elevation-1",attrs:{color:t.mainColor,prominent:"",height:"350px",dark:"",src:t.avatar,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-5","scroll-threshold":"200","shrink-on-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var s=e.props;return[n("v-img",t._b({},"v-img",s,!1))]}}])},[n("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-toolbar-title",{},[t._v(t._s(t.title))]),n("div",{staticClass:"flex-grow-1"}),n("Menu",{attrs:{options:t.options}})],1),n("v-sheet",{staticClass:"overflow-y-auto orange lighten-5",attrs:{id:"scrolling-techniques-5","max-height":"600"}},[n("v-container",{staticClass:"px-0",staticStyle:{"min-height":"1500px"}},[n("v-list",{staticClass:"py-0",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Mute notification")])],1),n("v-list-item-action",{staticClass:"ml-3"},[n("v-switch",{on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}})],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Custom notifications")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Media visibility")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1 pr-3",attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Encryption")]),n("v-list-item-subtitle",[t._v("Messages to this chat and calls are secured with end-to-end encryption. Tap to\n                verify.\n              ")])],1),n("v-list-item-action",{staticClass:"ml-3 mt-9"},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-lock")])],1)],1)],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Test status")]),n("v-list-item-subtitle",[t._v("30 July 2018")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1 pr-0",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("+27 22 452 51571")]),n("v-list-item-subtitle",[t._v("Mobile")])],1),n("v-list-item-action",{staticClass:"d-flex flex-row mb-5"},[n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(e){return e.stopPropagation(),t.$router.push("chat")},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{staticClass:"flip-icon orange--text"},[t._v("mdi-android-messages")])],1),n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-phone")])],1),n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-video")])],1)],1)],1)],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",{staticClass:"red--text text--darken-2"},[n("v-list-item-title",[n("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-cancel")]),t._v("\n                Block\n              ")],1)],1)],1),n("v-divider")],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",{staticClass:"red--text text--darken-2"},[n("v-list-item-title",[n("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-thumb-down")]),t._v("\n                Report contact\n              ")],1)],1)],1),n("v-divider")],1)],1)],1)],1)],1)},N=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{left:"",bottom:"",transition:"scroll-x-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[n("v-btn",t._g({attrs:{icon:""}},s),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",{staticClass:"py-0"},t._l(t.options,(function(e){return n("v-list-item",{key:e,on:{click:function(){}}},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)},V=[],D=function(t){function e(){return Object(a["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(v["c"]);Object(p["a"])([Object(v["b"])({default:function(){return[]}})],D.prototype,"options",void 0),D=Object(p["a"])([v["a"]],D);var H=D,W=H,L=Object(T["a"])(W,$,V,!1,null,null,null),U=L.exports,Y=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=q,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["Share","Edit","View in address book","Verify security code"],t}return Object(u["a"])(e,t),e}(v["c"]);Y=Object(p["a"])([Object(v["a"])({components:{Menu:U}})],Y);var J=Y,F=J,G=Object(T["a"])(F,B,N,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ChatTopBar"),n("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"","max-height":"600"}},[n("v-container",{staticClass:"pa-0 pt-2 grey lighten-2 back subtitle-2",staticStyle:{height:"90vh"}},[t._l(t.messages,(function(e,s){return["incoming"===e.direction?n("v-card",{key:s,staticClass:"left mx-3 mb-1 px-2 py-1 float-left",class:{"chat-bubble mt-1":t.firstDirection(e,s)},attrs:{"min-width":"50%","max-width":"80%"}},[n("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),n("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[n("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")])])]):"outgoing"===e.direction?n("v-card",{key:s,staticClass:"right mx-3 mb-1 px-2 py-1 float-right orange lighten-3",class:{"chat-bubble mt-1":t.firstDirection(e,s)},attrs:{"min-width":"50%","max-width":"80%"}},[n("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),n("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[n("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")]),"received"===e.status?n("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"grey lighten-0"}},[t._v("mdi-check-all")]):"read"===e.status?n("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"blue lighten-2"}},[t._v("mdi-check-all")]):t._e()],1)]):t._e()]})),n("ChatBox")],2)],1)],1)},X=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"elevation-1",attrs:{color:t.mainColor,dark:"",height:"64"}},[n("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-avatar",[n("v-img",{attrs:{"aspect-ratio":"1",width:"45","max-width":"45",height:"45",src:t.avatar}})],1),n("v-toolbar-title",[n("v-list-item",{staticClass:"pl-2 pr-0",attrs:{"two-line":""},on:{click:function(e){return t.$router.push("profile")}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))]),n("v-list-item-subtitle",{staticClass:"caption white--text"},[t._v(t._s(t.time))])],1)],1)],1),n("v-spacer"),n("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[n("v-icon",[t._v("mdi-video")])],1),n("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[n("v-icon",[t._v("mdi-phone")])],1),n("Menu",{attrs:{options:t.options}})],1)},tt=[],et=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=q,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["View contact","Media","Search","Mute notifications","Wallpaper","More"],t}return Object(u["a"])(e,t),e}(v["c"]);et=Object(p["a"])([Object(v["a"])({components:{Menu:U}})],et);var nt=et,st=nt,it=Object(T["a"])(st,Z,tt,!1,null,null,null),ot=it.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chatbox-container"},[n("v-container",{staticClass:"px-2 py-1",attrs:{justify:"center"}},[n("v-layout",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"10"}},[n("div",{staticClass:"white elevation-1",staticStyle:{"border-radius":"50px",height:"48px"}},[n("v-container",{staticClass:"px-1",attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{size:"28"}},[t._v("mdi-emoticon-outline")])],1),n("div",[n("v-textarea",{staticClass:"mt-0",staticStyle:{"max-width":"160px"},attrs:{rows:"1",solo:"",flat:"",placeholder:"Type a message"}})],1),n("div",{staticClass:"ml-0"},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"lean-left-icon grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-paperclip")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-camera")])],1)],1)],1)],1)],1)]),n("v-col",{staticClass:"pl-2",attrs:{cols:"2"}},[n("v-btn",{attrs:{color:t.mainColor,dark:"",fab:"",height:"48px",width:"48px","min-width":"48px"},on:{click:function(e){return t.sendMessage()}}},[n("v-icon",{attrs:{size:"24"}},[t._v(t._s(t.sendIcon))])],1)],1)],1)],1)],1)],1)},rt=[],ct=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=q,t.sendIcon="mdi-send",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"sendMessage",value:function(){this.sendIcon="mdi-microphone"==this.sendIcon?"mdi-send":"mdi-microphone"}}]),e}(v["c"]);ct=Object(p["a"])([v["a"]],ct);var lt=ct,ut=lt,pt=(n("afe4"),Object(T["a"])(ut,at,rt,!1,null,null,null)),vt=pt.exports,dt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.messages=[{direction:"incoming",text:"We should be able to get there on time right?",time:"8:10pm"},{direction:"incoming",text:"I mean, surely? It can't happen again",time:"8:11pm"},{direction:"outgoing",text:"Don't hold up your breathe. Todd always takes years to get ready. It will be fine either way.",status:"received/read",time:"8:18pm"},{direction:"outgoing",text:"We are going to be fine.",status:"read",time:"8:19pm"},{direction:"outgoing",text:":)",status:"read",time:"8:20pm"},{direction:"incoming",text:"Almost here?",time:"9:00pm"},{direction:"incoming",text:"Is that your car in the street?",time:"9:02pm"},{direction:"outgoing",text:"Yea.",status:"received",time:"9:03pm"}],t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"firstDirection",value:function(t,e){if(0==e)return!0;var n=t.direction!=this.messages[e-1].direction;return n}}]),e}(v["c"]);dt=Object(p["a"])([Object(v["a"])({components:{ChatTopBar:ot,ChatBox:vt}})],dt);var mt=dt,ht=mt,ft=(n("d475"),Object(T["a"])(ht,Q,X,!1,null,"14b4c9d0",null)),bt=ft.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"questionBox",attrs:{id:"app"}},[n("transition",{attrs:{duration:{enter:500,leave:300},"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in"}},[t.questionIndex<t.quiz.questions.length?n("div",{key:t.questionIndex,staticClass:"questionContainer"},[n("header",[n("h1",{staticClass:"title is-6"},[t._v("VueQuiz")]),n("div",{staticClass:"progressContainer"},[n("progress",{staticClass:"progress is-info is-small",attrs:{max:"100"},domProps:{value:t.questionIndex/t.quiz.questions.length*100}},[t._v("\n              "+t._s(t.questionIndex/t.quiz.questions.length*100)+"%\n            ")]),n("p",[t._v(t._s(t.questionIndex/t.quiz.questions.length*100)+"% complete")])])]),n("h2",{staticClass:"titleContainer title"},[t._v(t._s(t.quiz.questions[t.questionIndex].text))]),n("div",{staticClass:"optionContainer"},t._l(t.quiz.questions[t.questionIndex].responses,(function(e,s){return n("div",{key:s,staticClass:"option",class:{"is-selected":t.userResponses[t.questionIndex]==s},on:{click:function(e){return t.selectOption(s)}}},[t._v("\n            "+t._s(t._f("charIndex")(s))+". "+t._s(e.text)+"\n          ")])})),0),n("footer",{staticClass:"questionFooter"},[n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("a",{staticClass:"button",attrs:{disabled:t.questionIndex<1},on:{click:function(e){return t.prev()}}},[t._v("Back")]),n("a",{staticClass:"button",on:{click:t.test1}},[t._v("test1")]),n("a",{staticClass:"button",on:{click:t.test2}},[t._v("test2")]),n("a",{staticClass:"button",class:null==t.userResponses[t.questionIndex]?"":"is-active",attrs:{disabled:t.questionIndex>=t.quiz.questions.length},on:{click:function(e){return t.next()}}},[t._v("\n              "+t._s(null==t.userResponses[t.questionIndex]?"Skip":"Next")+"\n            ")])])])]):t._e(),t.questionIndex>=t.quiz.questions.length?n("div",{key:t.questionIndex,staticClass:"quizCompleted has-text-centered"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa",class:t.score()>3?"fa-check-circle-o is-active":"fa-times-circle"})]),n("h2",{staticClass:"title"},[t._v("\n          You did "+t._s(t.score()>7?"an amazing":t.score()<4?"a poor":"a good")+" job!\n        ")]),n("p",{staticClass:"subtitle"},[t._v("\n          Total score: "+t._s(t.score())+" / "+t._s(t.quiz.questions.length)+"\n        ")]),n("br"),n("a",{staticClass:"button",on:{click:function(e){return t.restart()}}},[t._v("restart "),n("i",{staticClass:"fa fa-refresh"})])]):t._e()])],1)])},_t=[],yt=(n("6c7b"),{user:"Dave",questions:[{text:"What is the full form of HTTP?",responses:[{text:"Hyper text transfer package"},{text:"Hyper text transfer protocol",correct:!0},{text:"Hyphenation text test program"},{text:"None of the above"}]},{text:"HTML document start and end with which tag pairs?",responses:[{text:"HTML",correct:!0},{text:"WEB"},{text:"HEAD"},{text:"BODY"}]},{text:"Which tag is used to create body text in HTML?",responses:[{text:"HEAD"},{text:"BODY",correct:!0},{text:"TITLE"},{text:"TEXT"}]},{text:"Outlook Express is _________",responses:[{text:"E-Mail Client",correct:!0},{text:"Browser"},{text:"Search Engine"},{text:"None of the above"}]},{text:"What is a search engine?",responses:[{text:"A hardware component "},{text:"A machinery engine that search data"},{text:"A web site that searches anything",correct:!0},{text:"A program that searches engines"}]},{text:"What does the .com domain represents?",responses:[{text:"Network"},{text:"Education"},{text:"Commercial",correct:!0},{text:"None of the above"}]},{text:"In Satellite based communication, VSAT stands for? ",responses:[{text:" Very Small Aperture Terminal",correct:!0},{text:"Varying Size Aperture Terminal "},{text:"Very Small Analog Terminal"},{text:"None of the above"}]},{text:"What is the full form of TCP/IP? ",responses:[{text:"Telephone call protocol / international protocol"},{text:"Transmission control protocol / internet protocol",correct:!0},{text:"Transport control protocol / internet protocol "},{text:"None of the above"}]},{text:"What is the full form of HTML?",responses:[{text:"Hyper text marking language"},{text:"Hyphenation text markup language "},{text:"Hyper text markup language",correct:!0},{text:"Hyphenation test marking language"}]},{text:'"Yahoo", "Infoseek" and "Lycos" are _________?',responses:[{text:"Browsers "},{text:"Search Engines",correct:!0},{text:"News Group"},{text:"None of the above"}]}]}),xt=Array(yt.questions.length).fill(null),kt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.quiz=yt,t.questionIndex=0,t.userResponses=xt,t.isActive=!1,t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"test1",value:function(){w.serverMethod({method:"dummy.squared",params:11}).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)}))}},{key:"test2",value:function(){w.serverMethod({method:"test",params:22}).then((function(t){console.log("test2",t)})).catch((function(t){return console.error(t)}))}},{key:"restart",value:function(){this.questionIndex=0,this.userResponses=Array(this.quiz.questions.length).fill(null)}},{key:"selectOption",value:function(t){v["c"].set(this.userResponses,this.questionIndex,t)}},{key:"next",value:function(){this.questionIndex<this.quiz.questions.length&&this.questionIndex++}},{key:"prev",value:function(){this.quiz.questions.length>0&&this.questionIndex--}},{key:"score",value:function(){for(var t=0,e=0;e<this.userResponses.length;e++)"undefined"!==typeof this.quiz.questions[e].responses[this.userResponses[e]]&&this.quiz.questions[e].responses[this.userResponses[e]].correct&&(t+=1);return t}},{key:"isConnected",get:function(){return w.isConnected}}]),e}(v["c"]);kt=Object(p["a"])([Object(v["a"])({filters:{charIndex:function(t){return String.fromCharCode(97+t)}}})],kt);var Ot=kt,jt=Ot,Ct=(n("5d17"),Object(T["a"])(jt,gt,_t,!1,null,null,null)),wt=Ct.exports,qt=[{path:"/",name:"start",component:wt},{path:"/profile",name:"profile",component:K},{path:"/chat",name:"chat",component:bt},{path:"*",component:wt}],Et=n("b408"),It=n.n(Et);s["default"].config.productionTip=!1,s["default"].config.silent=!0,s["default"].use(It.a,"wss://echo.websocket.org",{reconnection:!0,reconnectionAttempts:500,reconnectionDelay:1e3,format:"json"}),s["default"].use(A.a),s["default"].use(R["a"]);var St=new R["a"]({routes:qt,mode:"history"});new s["default"]({router:St,store:h,vuetify:new A.a({icons:{iconfont:"mdi"}}),render:function(t){return t(M)}}).$mount("#app")},d147:function(t,e,n){},d475:function(t,e,n){"use strict";var s=n("b1d3"),i=n.n(s);i.a},e9ba:function(t,e,n){}});
//# sourceMappingURL=app.779dd2f1.js.map