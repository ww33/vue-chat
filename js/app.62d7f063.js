(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],p=0,v=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&v.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-chat/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var i=n("27fb"),s=n.n(i);s.a},1177:function(t,e,n){},"27fb":function(t,e,n){},"699b":function(t,e,n){"use strict";var i=n("1177"),s=n.n(i);s.a},afe4:function(t,e,n){"use strict";var i=n("d147"),s=n.n(i);s.a},b1d3:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Vue100vh",[n("v-app",[n("v-app-bar",{staticClass:"elevation-1",attrs:{fixed:"",color:t.mainColor,dark:""}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showBtnBack,expression:"showBtnBack"}],staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-toolbar-title",[n("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))])],1),n("v-spacer")],1),n("v-content",[n("v-card",{staticClass:"overflow-hidden"},[n("router-view")],1)],1),t.error?[n("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeError}},[t._v("\n        "+t._s(t.error)+"\n        "),n("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e(),t.message?[n("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeMessage}},[t._v("\n        "+t._s(t.message)+"\n        "),n("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeMessage(e)}}},[t._v("Close")])],1)]:t._e()],2)],1)},r=[],a=(n("456d"),n("55dd"),n("ac6a"),n("f3e2"),n("d225")),o=n("b0b4"),c=n("308d"),l=n("6bb5"),u=n("4e2b"),p=n("9ab4"),v=n("60a3"),d=n("6fc5"),m=n("2f62");i["default"].use(m["a"]);var h=new m["a"].Store({}),f=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t._error="",t._message="",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"setError",value:function(t){this._error=t}},{key:"clearError",value:function(){this._error=""}},{key:"setMessage",value:function(t){this._message=t}},{key:"clearMessage",value:function(){this._message=""}},{key:"test",value:function(t){console.log("alerts test",t)}},{key:"error",get:function(){return this._error}},{key:"message",get:function(){return this._message}}]),e}(d["d"]);Object(p["a"])([d["c"]],f.prototype,"setError",null),Object(p["a"])([d["c"]],f.prototype,"clearError",null),Object(p["a"])([d["c"]],f.prototype,"setMessage",null),Object(p["a"])([d["c"]],f.prototype,"clearMessage",null),Object(p["a"])([Object(d["a"])({rawError:!0})],f.prototype,"test",null),f=Object(p["a"])([Object(d["b"])({dynamic:!0,store:h,name:"alerts"})],f);var b=Object(d["e"])(f),g=(n("96cf"),n("3b8d")),_=n("103f"),y=n("3bae"),x=n.n(y),k=n("bc3a"),O=n.n(k),j=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,[{key:"test",value:function(){var t="https://api.vk.com/method/friends.get?user_id=182023330&access_token=".concat(this.serviceKey,"&v=5.103"),e={headers:{"Access-Control-Allow-Origin":"*"}};O.a.get(t,e).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)}))}}]),t}(),w=function(){var t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(t=!0),t},C=R()?new _["VKMiniAppAPI"]:new _["VKMiniAppAPI"](x.a);C.initApp();var S,E=C,q=(new j,{vk_access_token_settings:"notify",vk_app_id:"7350550",vk_are_notifications_enabled:"0",vk_is_app_user:"1",vk_is_favorite:"0",vk_language:"ru",vk_platform:"desktop_web",vk_ref:"other",vk_user_id:"182023330"}),I=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mobile=w(),t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"init",value:function(t){q=t.vk_params,S=t.vk_sign}},{key:"paramsUserRegister",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.getUserInfo();case 2:return e=t.sent,t.abrupt("return",new Promise((function(t,n){var i={method:"auth.register_vk_bridge_user",params:{vk_params:q,vk_sign:S,viewer_id:e.id,nickname:"VK:"+e.id,profile:{first_name:e.first_name,last_name:e.last_name,city:e.city,country:e.country,sex:e.sex,photo_100:e.photo_100,photo_200:e.photo_200},vk_profile:{vk_platform:q.vk_platform}}};t(i)})));case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"paramsUserAuth",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){var n={method:"auth.auth_vk_bridge_user",params:{vk_params:q,vk_sign:S}};t(n)})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"isMobile",get:function(){return this.mobile}},{key:"vkSettings",get:function(){return q}}]),e}(d["d"]);Object(p["a"])([d["c"]],I.prototype,"init",null),Object(p["a"])([Object(d["a"])({rawError:!0})],I.prototype,"paramsUserRegister",null),Object(p["a"])([Object(d["a"])({rawError:!0})],I.prototype,"paramsUserAuth",null),I=Object(p["a"])([Object(d["b"])({dynamic:!0,store:h,name:"app"})],I);var T=Object(d["e"])(I);function R(){try{return window.self!==window.top}catch(t){return!0}}var z=n("7618"),A=null,M={},P=0,N=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t._isConnected=!1,t._isAuth=!1,t._isUserRegistered=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"SET_IS_CONNECTED",value:function(t){this._isConnected=t}},{key:"SET_IS_AUTH",value:function(t){this._isAuth=t}},{key:"SET_USER_REGISTERED",value:function(t){this._isUserRegistered=t,t?localStorage.setItem("userRegistered","1"):localStorage.removeItem("userRegistered")}},{key:"Init",value:function(t){var e=this,n=t.eventListener;n.onopen=function(t){e.context.commit("SET_IS_CONNECTED",!0),A=t.target,e.auth()},n.onclose=function(t){e.context.commit("SET_IS_CONNECTED",!1),e.context.commit("SET_IS_AUTH",!1)},n.onmessage=function(t){var n=t.data,i=void 0;if("object"===Object(z["a"])(n))i=n;else{if("string"!==typeof n||"{"!==n.charAt(0))return console.log(n),!1;try{i=JSON.parse(n)}catch(s){return console.error(s),!1}}i.hasOwnProperty("id")?e.onServerResponseById(i):e.onServerNotification(i)},n.onerror=function(t){console.log("onerror",t)}}},{key:"auth",value:function(){var t=this;return new Promise(function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(n,i){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.userRegistered){e.next=7;break}return e.next=3,T.paramsUserRegister();case 3:return s=e.sent,e.next=6,t.callServer(s).catch((function(t){console.error(t),i(t)}));case 6:t.context.commit("SET_USER_REGISTERED",!0);case 7:if(!t.userRegistered){e.next=17;break}return e.next=10,T.paramsUserAuth();case 10:return r=e.sent,e.next=13,t.callServer(r).catch((function(e){console.error(e),t.context.commit("SET_IS_AUTH",!1),i(e)}));case 13:t.context.commit("SET_IS_AUTH",!0),n(!0),e.next=19;break;case 17:console.log("WTF???????????"),i(!1);case 19:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"sendText",value:function(t){this.isConnected&&A&&A.send(t)}},{key:"sendObject",value:function(t){this.isConnected&&A&&A.sendObj(t)}},{key:"callServer",value:function(t){var e=this,n=t.params;return P+=1,t["jsonrpc"]="2.0",t["id"]=P,new Promise((function(i,s){try{e.isConnected?(A.sendObj(t),M[P]={params:n,resolve:i,reject:s}):s({code:-1,message:"WebSocket not auth"})}catch(r){s(r)}}))}},{key:"onServerResponseById",value:function(t){var e=t.id,n=t.error,i=t.result,s=M[e];if(s)try{void 0!==i?s["resolve"](i):void 0!==n?s["reject"](n):console.error("wrong response from server",t),delete M[e]}catch(r){console.error(r)}else console.error("onServerResponseById wrong id",t)}},{key:"onServerNotification",value:function(t){console.log("onServerNotification",t)}},{key:"isConnected",get:function(){return this._isConnected}},{key:"isAuth",get:function(){return this._isAuth}},{key:"userRegistered",get:function(){return this._isUserRegistered||localStorage.getItem("userRegistered")}}]),e}(d["d"]);Object(p["a"])([d["c"]],N.prototype,"SET_IS_CONNECTED",null),Object(p["a"])([d["c"]],N.prototype,"SET_IS_AUTH",null),Object(p["a"])([d["c"]],N.prototype,"SET_USER_REGISTERED",null),Object(p["a"])([Object(d["a"])({rawError:!0})],N.prototype,"Init",null),Object(p["a"])([Object(d["a"])({rawError:!0})],N.prototype,"auth",null),Object(p["a"])([Object(d["a"])({rawError:!0})],N.prototype,"sendText",null),Object(p["a"])([Object(d["a"])({rawError:!0})],N.prototype,"sendObject",null),Object(p["a"])([Object(d["a"])({rawError:!0})],N.prototype,"callServer",null),Object(p["a"])([Object(d["a"])({rawError:!0})],N.prototype,"onServerResponseById",null),Object(p["a"])([Object(d["a"])({rawError:!0})],N.prototype,"onServerNotification",null),N=Object(p["a"])([Object(d["b"])({dynamic:!0,store:h,name:"websocket"})],N);var B=Object(d["e"])(N),D="orange",H="/vue-chat/",U=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=D,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"initApp",value:function(){var t=this,e={};Object.keys(this.$route.query).sort().forEach((function(n){"vk_"===n.slice(0,3)&&(e[n]=t.$route.query[n])}));var n=this.$route.query.sign;console.log({vk_params:e,vk_sign:n}),T.init({vk_params:e,vk_sign:n}),B.Init({eventListener:this.$options.sockets})}},{key:"created",value:function(){this.initApp()}},{key:"websocketHandler",value:function(){}},{key:"closeError",value:function(){b.clearError()}},{key:"closeMessage",value:function(){b.clearMessage()}},{key:"title",get:function(){return"0.1.46 - "+(B.isAuth?"auth":"not auth")}},{key:"info",get:function(){return T.vkSettings.vk_platform}},{key:"error",get:function(){return b.error}},{key:"message",get:function(){return b.message}},{key:"showBtnBack",get:function(){return!("/"===this.$route.path||this.$route.path===H)}}]),e}(v["c"]);U=Object(p["a"])([v["a"]],U);var $=U,V=$,W=(n("034f"),n("2877")),L=Object(W["a"])(V,s,r,!1,null,null,null),Y=L.exports,G=(n("5363"),n("ce5b")),J=n.n(G),K=(n("bf40"),n("8c4f")),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"elevation-1",attrs:{color:t.mainColor,prominent:"",height:"350px",dark:"",src:t.avatar,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-5","scroll-threshold":"200","shrink-on-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var i=e.props;return[n("v-img",t._b({},"v-img",i,!1))]}}])},[n("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-toolbar-title",{},[t._v(t._s(t.title))]),n("div",{staticClass:"flex-grow-1"}),n("Menu",{attrs:{options:t.options}})],1),n("v-sheet",{staticClass:"overflow-y-auto orange lighten-5",attrs:{id:"scrolling-techniques-5","max-height":"600"}},[n("v-container",{staticClass:"px-0",staticStyle:{"min-height":"1500px"}},[n("v-list",{staticClass:"py-0",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Mute notification")])],1),n("v-list-item-action",{staticClass:"ml-3"},[n("v-switch",{on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}})],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Custom notifications")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Media visibility")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1 pr-3",attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Encryption")]),n("v-list-item-subtitle",[t._v("Messages to this chat and calls are secured with end-to-end encryption. Tap to\n                verify.\n              ")])],1),n("v-list-item-action",{staticClass:"ml-3 mt-9"},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-lock")])],1)],1)],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Test status")]),n("v-list-item-subtitle",[t._v("30 July 2018")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1 pr-0",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("+27 22 452 51571")]),n("v-list-item-subtitle",[t._v("Mobile")])],1),n("v-list-item-action",{staticClass:"d-flex flex-row mb-5"},[n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(e){return e.stopPropagation(),t.$router.push("chat")},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{staticClass:"flip-icon orange--text"},[t._v("mdi-android-messages")])],1),n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-phone")])],1),n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-video")])],1)],1)],1)],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",{staticClass:"red--text text--darken-2"},[n("v-list-item-title",[n("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-cancel")]),t._v("\n                Block\n              ")],1)],1)],1),n("v-divider")],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",{staticClass:"red--text text--darken-2"},[n("v-list-item-title",[n("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-thumb-down")]),t._v("\n                Report contact\n              ")],1)],1)],1),n("v-divider")],1)],1)],1)],1)],1)},Q=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{left:"",bottom:"",transition:"scroll-x-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{icon:""}},i),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",{staticClass:"py-0"},t._l(t.options,(function(e){return n("v-list-item",{key:e,on:{click:function(){}}},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)},Z=[],tt=function(t){function e(){return Object(a["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(v["c"]);Object(p["a"])([Object(v["b"])({default:function(){return[]}})],tt.prototype,"options",void 0),tt=Object(p["a"])([v["a"]],tt);var et=tt,nt=et,it=Object(W["a"])(nt,X,Z,!1,null,null,null),st=it.exports,rt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=D,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["Share","Edit","View in address book","Verify security code"],t}return Object(u["a"])(e,t),e}(v["c"]);rt=Object(p["a"])([Object(v["a"])({components:{Menu:st}})],rt);var at=rt,ot=at,ct=Object(W["a"])(ot,F,Q,!1,null,null,null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ChatTopBar"),n("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"","max-height":"600"}},[n("v-container",{staticClass:"pa-0 pt-2 grey lighten-2 back subtitle-2",staticStyle:{height:"90vh"}},[t._l(t.messages,(function(e,i){return["incoming"===e.direction?n("v-card",{key:i,staticClass:"left mx-3 mb-1 px-2 py-1 float-left",class:{"chat-bubble mt-1":t.firstDirection(e,i)},attrs:{"min-width":"50%","max-width":"80%"}},[n("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),n("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[n("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")])])]):"outgoing"===e.direction?n("v-card",{key:i,staticClass:"right mx-3 mb-1 px-2 py-1 float-right orange lighten-3",class:{"chat-bubble mt-1":t.firstDirection(e,i)},attrs:{"min-width":"50%","max-width":"80%"}},[n("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),n("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[n("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")]),"received"===e.status?n("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"grey lighten-0"}},[t._v("mdi-check-all")]):"read"===e.status?n("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"blue lighten-2"}},[t._v("mdi-check-all")]):t._e()],1)]):t._e()]})),n("ChatBox")],2)],1)],1)},pt=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"elevation-1",attrs:{color:t.mainColor,dark:"",height:"64"}},[n("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-avatar",[n("v-img",{attrs:{"aspect-ratio":"1",width:"45","max-width":"45",height:"45",src:t.avatar}})],1),n("v-toolbar-title",[n("v-list-item",{staticClass:"pl-2 pr-0",attrs:{"two-line":""},on:{click:function(e){return t.$router.push("profile")}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))]),n("v-list-item-subtitle",{staticClass:"caption white--text"},[t._v(t._s(t.time))])],1)],1)],1),n("v-spacer"),n("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[n("v-icon",[t._v("mdi-video")])],1),n("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[n("v-icon",[t._v("mdi-phone")])],1),n("Menu",{attrs:{options:t.options}})],1)},dt=[],mt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=D,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["View contact","Media","Search","Mute notifications","Wallpaper","More"],t}return Object(u["a"])(e,t),e}(v["c"]);mt=Object(p["a"])([Object(v["a"])({components:{Menu:st}})],mt);var ht=mt,ft=ht,bt=Object(W["a"])(ft,vt,dt,!1,null,null,null),gt=bt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chatbox-container"},[n("v-container",{staticClass:"px-2 py-1",attrs:{justify:"center"}},[n("v-layout",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"10"}},[n("div",{staticClass:"white elevation-1",staticStyle:{"border-radius":"50px",height:"48px"}},[n("v-container",{staticClass:"px-1",attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{size:"28"}},[t._v("mdi-emoticon-outline")])],1),n("div",[n("v-textarea",{staticClass:"mt-0",staticStyle:{"max-width":"160px"},attrs:{rows:"1",solo:"",flat:"",placeholder:"Type a message"}})],1),n("div",{staticClass:"ml-0"},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"lean-left-icon grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-paperclip")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-camera")])],1)],1)],1)],1)],1)]),n("v-col",{staticClass:"pl-2",attrs:{cols:"2"}},[n("v-btn",{attrs:{color:t.mainColor,dark:"",fab:"",height:"48px",width:"48px","min-width":"48px"},on:{click:function(e){return t.sendMessage()}}},[n("v-icon",{attrs:{size:"24"}},[t._v(t._s(t.sendIcon))])],1)],1)],1)],1)],1)],1)},yt=[],xt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=D,t.sendIcon="mdi-send",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"sendMessage",value:function(){this.sendIcon="mdi-microphone"==this.sendIcon?"mdi-send":"mdi-microphone"}}]),e}(v["c"]);xt=Object(p["a"])([v["a"]],xt);var kt=xt,Ot=kt,jt=(n("afe4"),Object(W["a"])(Ot,_t,yt,!1,null,null,null)),wt=jt.exports,Ct=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.messages=[{direction:"incoming",text:"We should be able to get there on time right?",time:"8:10pm"},{direction:"incoming",text:"I mean, surely? It can't happen again",time:"8:11pm"},{direction:"outgoing",text:"Don't hold up your breathe. Todd always takes years to get ready. It will be fine either way.",status:"received/read",time:"8:18pm"},{direction:"outgoing",text:"We are going to be fine.",status:"read",time:"8:19pm"},{direction:"outgoing",text:":)",status:"read",time:"8:20pm"},{direction:"incoming",text:"Almost here?",time:"9:00pm"},{direction:"incoming",text:"Is that your car in the street?",time:"9:02pm"},{direction:"outgoing",text:"Yea.",status:"received",time:"9:03pm"}],t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"firstDirection",value:function(t,e){if(0==e)return!0;var n=t.direction!=this.messages[e-1].direction;return n}}]),e}(v["c"]);Ct=Object(p["a"])([Object(v["a"])({components:{ChatTopBar:gt,ChatBox:wt}})],Ct);var St=Ct,Et=St,qt=(n("d475"),Object(W["a"])(Et,ut,pt,!1,null,"14b4c9d0",null)),It=qt.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"card",attrs:{id:"create"}},[n("v-speed-dial",{style:t.fabUsersStyle,attrs:{top:"",right:"",direction:"top"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{small:"",icon:!1,rounded:!0,fab:!0,color:t.red},on:{click:t.onTest}},[t._v("\n          test\n        ")])]},proxy:!0}])}),n("v-speed-dial",{staticClass:"v-speed-dial",attrs:{top:"",right:"",direction:"bottom"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"primary",dark:"",small:!0,fab:""},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onSpeedDial(e)}}},[t.fab?n("v-icon",[t._v("mdi-close")]):n("v-icon",[t._v("mdi-chevron-down")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-btn",{attrs:{to:"/quiz1",rounded:!0,small:t.isMobile}},[t._v("\n        Quiz 1\n      ")])],1)],1)],1)},Rt=[],zt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.isMobile=T.isMobile,t.fab=!0,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"onSpeedDial",value:function(){this.fab=!this.fab}},{key:"onTest",value:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:B.callServer({method:"user._get_all_user"}).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"fabUsersStyle",get:function(){var t=T.isMobile?30:50;return{position:"fixed",marginRight:"".concat(t,"px"),marginTop:"44px"}}}]),e}(v["c"]);zt=Object(p["a"])([v["a"]],zt);var At=zt,Mt=At,Pt=(n("f1bd"),Object(W["a"])(Mt,Tt,Rt,!1,null,"48dbe91e",null)),Nt=Pt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container2"},[n("div",{staticClass:"questionBox",attrs:{id:"app"}},[n("transition",{attrs:{duration:{enter:500,leave:300},"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in"}},[t.questionIndex<t.quiz.questions.length?n("div",{key:t.questionIndex,staticClass:"questionContainer"},[n("header",[n("h1",{staticClass:"title is-6"},[t._v("VueQuiz")]),n("div",{staticClass:"progressContainer"},[n("progress",{staticClass:"progress is-info is-small",attrs:{max:"100"},domProps:{value:t.questionIndex/t.quiz.questions.length*100}},[t._v("\n              "+t._s(t.questionIndex/t.quiz.questions.length*100)+"%\n            ")]),n("p",[t._v(t._s(t.questionIndex/t.quiz.questions.length*100)+"% complete")])])]),n("h2",{staticClass:"titleContainer title"},[t._v(t._s(t.quiz.questions[t.questionIndex].text))]),n("div",{staticClass:"optionContainer"},t._l(t.quiz.questions[t.questionIndex].responses,(function(e,i){return n("div",{key:i,staticClass:"option",class:{"is-selected":t.userResponses[t.questionIndex]==i},on:{click:function(e){return t.selectOption(i)}}},[t._v("\n            "+t._s(t._f("charIndex")(i))+". "+t._s(e.text)+"\n          ")])})),0),n("footer",{staticClass:"questionFooter"},[n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("a",{staticClass:"button",attrs:{disabled:t.questionIndex<1},on:{click:function(e){return t.prev()}}},[t._v("Back")]),n("a",{staticClass:"button",class:null==t.userResponses[t.questionIndex]?"":"is-active",attrs:{disabled:t.questionIndex>=t.quiz.questions.length},on:{click:function(e){return t.next()}}},[t._v("\n              "+t._s(null==t.userResponses[t.questionIndex]?"Skip":"Next")+"\n            ")])])])]):t._e(),t.questionIndex>=t.quiz.questions.length?n("div",{key:t.questionIndex,staticClass:"quizCompleted has-text-centered"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa",class:t.score()>3?"fa-check-circle-o is-active":"fa-times-circle"})]),n("h2",{staticClass:"title"},[t._v("\n          You did "+t._s(t.score()>7?"an amazing":t.score()<4?"a poor":"a good")+" job!\n        ")]),n("p",{staticClass:"subtitle"},[t._v("\n          Total score: "+t._s(t.score())+" / "+t._s(t.quiz.questions.length)+"\n        ")]),n("br"),n("a",{staticClass:"button",on:{click:function(e){return t.restart()}}},[t._v("restart "),n("i",{staticClass:"fa fa-refresh"})])]):t._e()])],1)])},Dt=[],Ht=(n("6c7b"),{user:"Dave",questions:[{text:"What is the full form of HTTP?",responses:[{text:"Hyper text transfer package"},{text:"Hyper text transfer protocol",correct:!0},{text:"Hyphenation text test program"},{text:"None of the above"}]},{text:"HTML document start and end with which tag pairs?",responses:[{text:"HTML",correct:!0},{text:"WEB"},{text:"HEAD"},{text:"BODY"}]},{text:"Which tag is used to create body text in HTML?",responses:[{text:"HEAD"},{text:"BODY",correct:!0},{text:"TITLE"},{text:"TEXT"}]},{text:"Outlook Express is _________",responses:[{text:"E-Mail Client",correct:!0},{text:"Browser"},{text:"Search Engine"},{text:"None of the above"}]},{text:"What is a search engine?",responses:[{text:"A hardware component "},{text:"A machinery engine that search data"},{text:"A web site that searches anything",correct:!0},{text:"A program that searches engines"}]},{text:"What does the .com domain represents?",responses:[{text:"Network"},{text:"Education"},{text:"Commercial",correct:!0},{text:"None of the above"}]},{text:"In Satellite based communication, VSAT stands for? ",responses:[{text:" Very Small Aperture Terminal",correct:!0},{text:"Varying Size Aperture Terminal "},{text:"Very Small Analog Terminal"},{text:"None of the above"}]},{text:"What is the full form of TCP/IP? ",responses:[{text:"Telephone call protocol / international protocol"},{text:"Transmission control protocol / internet protocol",correct:!0},{text:"Transport control protocol / internet protocol "},{text:"None of the above"}]},{text:"What is the full form of HTML?",responses:[{text:"Hyper text marking language"},{text:"Hyphenation text markup language "},{text:"Hyper text markup language",correct:!0},{text:"Hyphenation test marking language"}]},{text:'"Yahoo", "Infoseek" and "Lycos" are _________?',responses:[{text:"Browsers "},{text:"Search Engines",correct:!0},{text:"News Group"},{text:"None of the above"}]}]}),Ut=Array(Ht.questions.length).fill(null),$t=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.quiz=Ht,t.questionIndex=0,t.userResponses=Ut,t.isActive=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"restart",value:function(){this.questionIndex=0,this.userResponses=Array(this.quiz.questions.length).fill(null)}},{key:"selectOption",value:function(t){v["c"].set(this.userResponses,this.questionIndex,t)}},{key:"next",value:function(){this.questionIndex<this.quiz.questions.length&&this.questionIndex++}},{key:"prev",value:function(){this.quiz.questions.length>0&&this.questionIndex--}},{key:"score",value:function(){for(var t=0,e=0;e<this.userResponses.length;e++)"undefined"!==typeof this.quiz.questions[e].responses[this.userResponses[e]]&&this.quiz.questions[e].responses[this.userResponses[e]].correct&&(t+=1);return t}},{key:"isConnected",get:function(){return B.isConnected}}]),e}(v["c"]);$t=Object(p["a"])([Object(v["a"])({filters:{charIndex:function(t){return String.fromCharCode(97+t)}}})],$t);var Vt=$t,Wt=Vt,Lt=(n("699b"),Object(W["a"])(Wt,Bt,Dt,!1,null,"5a8da7f2",null)),Yt=Lt.exports,Gt=[{path:"/",name:"start",component:Nt},{path:"/profile",name:"profile",component:lt},{path:"/chat",name:"chat",component:It},{path:"/quiz1",name:"quiz1",component:Yt},{path:"*",component:Nt}],Jt=n("b408"),Kt=n.n(Jt);i["default"].config.productionTip=!1,i["default"].config.silent=!0,i["default"].use(Kt.a,"wss://meetup.inachi.eu:4430/ws",{reconnection:!0,reconnectionAttempts:500,reconnectionDelay:1e3,format:"json"}),i["default"].use(J.a),i["default"].use(K["a"]);var Ft=new K["a"]({routes:Gt,mode:"history"});new i["default"]({router:Ft,store:h,vuetify:new J.a({icons:{iconfont:"mdi"}}),render:function(t){return t(Y)}}).$mount("#app")},d147:function(t,e,n){},d475:function(t,e,n){"use strict";var i=n("b1d3"),s=n.n(i);s.a},e90c:function(t,e,n){},f1bd:function(t,e,n){"use strict";var i=n("e90c"),s=n.n(i);s.a}});
//# sourceMappingURL=app.62d7f063.js.map