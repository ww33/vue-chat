(function(t){function e(e){for(var r,o,a=e[0],c=e[1],l=e[2],p=0,v=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-chat/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("27fb"),i=n.n(r);i.a},1177:function(t,e,n){},"27fb":function(t,e,n){},"699b":function(t,e,n){"use strict";var r=n("1177"),i=n.n(r);i.a},a923:function(t,e,n){"use strict";var r=n("b260"),i=n.n(r);i.a},afe4:function(t,e,n){"use strict";var r=n("d147"),i=n.n(r);i.a},b1d3:function(t,e,n){},b260:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Vue100vh",[n("v-app",[n("v-app-bar",{staticClass:"elevation-1",attrs:{fixed:"",color:t.mainColor,dark:""}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showBtnBack,expression:"showBtnBack"}],staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-toolbar-title",[n("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))])],1),n("v-spacer")],1),n("v-content",[n("v-card",{staticClass:"overflow-hidden"},[n("router-view")],1)],1),t.error?[n("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeError}},[t._v("\n        "+t._s(t.error)+"\n        "),n("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e(),t.message?[n("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeMessage}},[t._v("\n        "+t._s(t.message)+"\n        "),n("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeMessage(e)}}},[t._v("Close")])],1)]:t._e()],2)],1)},s=[],o=(n("96cf"),n("3b8d")),a=n("d225"),c=n("b0b4"),l=n("308d"),u=n("6bb5"),p=n("4e2b"),v=n("9ab4"),d=n("60a3"),h=n("6fc5"),m=n("2f62");r["default"].use(m["a"]);var f=new m["a"].Store({}),g=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t._error="",t._message="",t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"setError",value:function(t){this._error=t}},{key:"clearError",value:function(){this._error=""}},{key:"setMessage",value:function(t){this._message=t}},{key:"clearMessage",value:function(){this._message=""}},{key:"test",value:function(t){console.log("alerts test",t)}},{key:"error",get:function(){return this._error}},{key:"message",get:function(){return this._message}}]),e}(h["d"]);Object(v["a"])([h["c"]],g.prototype,"setError",null),Object(v["a"])([h["c"]],g.prototype,"clearError",null),Object(v["a"])([h["c"]],g.prototype,"setMessage",null),Object(v["a"])([h["c"]],g.prototype,"clearMessage",null),Object(v["a"])([Object(h["a"])({rawError:!0})],g.prototype,"test",null),g=Object(v["a"])([Object(h["b"])({dynamic:!0,store:f,name:"alerts"})],g);var b=Object(h["e"])(g),y=(n("6b54"),n("87b3"),n("103f")),_=n("3bae"),x=n.n(_),k=function(){var t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(t=!0),t},w=(n("a481"),function(t){function e(t,e){return t<<e|t>>>32-e}function n(t,e){var n,r,i,s,o;return i=2147483648&t,s=2147483648&e,n=1073741824&t,r=1073741824&e,o=(1073741823&t)+(1073741823&e),n&r?2147483648^o^i^s:n|r?1073741824&o?3221225472^o^i^s:1073741824^o^i^s:o^i^s}function r(t,e,n){return t&e|~t&n}function i(t,e,n){return t&n|e&~n}function s(t,e,n){return t^e^n}function o(t,e,n){return e^(t|~n)}function a(t,i,s,o,a,c,l){return t=n(t,n(n(r(i,s,o),a),l)),n(e(t,c),i)}function c(t,r,s,o,a,c,l){return t=n(t,n(n(i(r,s,o),a),l)),n(e(t,c),r)}function l(t,r,i,o,a,c,l){return t=n(t,n(n(s(r,i,o),a),l)),n(e(t,c),r)}function u(t,r,i,s,a,c,l){return t=n(t,n(n(o(r,i,s),a),l)),n(e(t,c),r)}function p(t){var e,n=t.length,r=n+8,i=(r-r%64)/64,s=16*(i+1),o=Array(s-1),a=0,c=0;while(c<n)e=(c-c%4)/4,a=c%4*8,o[e]=o[e]|t.charCodeAt(c)<<a,c++;return e=(c-c%4)/4,a=c%4*8,o[e]=o[e]|128<<a,o[s-2]=n<<3,o[s-1]=n>>>29,o}function v(t){var e,n,r="",i="";for(n=0;n<=3;n++)e=t>>>8*n&255,i="0"+e.toString(16),r+=i.substr(i.length-2,2);return r}function d(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e+=String.fromCharCode(r):r>127&&r<2048?(e+=String.fromCharCode(r>>6|192),e+=String.fromCharCode(63&r|128)):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128),e+=String.fromCharCode(63&r|128))}return e}var h,m,f,g,b,y,_,x,k,w=Array(),O=7,j=12,C=17,q=22,S=5,E=9,I=14,R=20,z=4,M=11,T=16,A=23,P=6,N=10,$=15,B=21;for(t=d(t),w=p(t),y=1732584193,_=4023233417,x=2562383102,k=271733878,h=0;h<w.length;h+=16)m=y,f=_,g=x,b=k,y=a(y,_,x,k,w[h+0],O,3614090360),k=a(k,y,_,x,w[h+1],j,3905402710),x=a(x,k,y,_,w[h+2],C,606105819),_=a(_,x,k,y,w[h+3],q,3250441966),y=a(y,_,x,k,w[h+4],O,4118548399),k=a(k,y,_,x,w[h+5],j,1200080426),x=a(x,k,y,_,w[h+6],C,2821735955),_=a(_,x,k,y,w[h+7],q,4249261313),y=a(y,_,x,k,w[h+8],O,1770035416),k=a(k,y,_,x,w[h+9],j,2336552879),x=a(x,k,y,_,w[h+10],C,4294925233),_=a(_,x,k,y,w[h+11],q,2304563134),y=a(y,_,x,k,w[h+12],O,1804603682),k=a(k,y,_,x,w[h+13],j,4254626195),x=a(x,k,y,_,w[h+14],C,2792965006),_=a(_,x,k,y,w[h+15],q,1236535329),y=c(y,_,x,k,w[h+1],S,4129170786),k=c(k,y,_,x,w[h+6],E,3225465664),x=c(x,k,y,_,w[h+11],I,643717713),_=c(_,x,k,y,w[h+0],R,3921069994),y=c(y,_,x,k,w[h+5],S,3593408605),k=c(k,y,_,x,w[h+10],E,38016083),x=c(x,k,y,_,w[h+15],I,3634488961),_=c(_,x,k,y,w[h+4],R,3889429448),y=c(y,_,x,k,w[h+9],S,568446438),k=c(k,y,_,x,w[h+14],E,3275163606),x=c(x,k,y,_,w[h+3],I,4107603335),_=c(_,x,k,y,w[h+8],R,1163531501),y=c(y,_,x,k,w[h+13],S,2850285829),k=c(k,y,_,x,w[h+2],E,4243563512),x=c(x,k,y,_,w[h+7],I,1735328473),_=c(_,x,k,y,w[h+12],R,2368359562),y=l(y,_,x,k,w[h+5],z,4294588738),k=l(k,y,_,x,w[h+8],M,2272392833),x=l(x,k,y,_,w[h+11],T,1839030562),_=l(_,x,k,y,w[h+14],A,4259657740),y=l(y,_,x,k,w[h+1],z,2763975236),k=l(k,y,_,x,w[h+4],M,1272893353),x=l(x,k,y,_,w[h+7],T,4139469664),_=l(_,x,k,y,w[h+10],A,3200236656),y=l(y,_,x,k,w[h+13],z,681279174),k=l(k,y,_,x,w[h+0],M,3936430074),x=l(x,k,y,_,w[h+3],T,3572445317),_=l(_,x,k,y,w[h+6],A,76029189),y=l(y,_,x,k,w[h+9],z,3654602809),k=l(k,y,_,x,w[h+12],M,3873151461),x=l(x,k,y,_,w[h+15],T,530742520),_=l(_,x,k,y,w[h+2],A,3299628645),y=u(y,_,x,k,w[h+0],P,4096336452),k=u(k,y,_,x,w[h+7],N,1126891415),x=u(x,k,y,_,w[h+14],$,2878612391),_=u(_,x,k,y,w[h+5],B,4237533241),y=u(y,_,x,k,w[h+12],P,1700485571),k=u(k,y,_,x,w[h+3],N,2399980690),x=u(x,k,y,_,w[h+10],$,4293915773),_=u(_,x,k,y,w[h+1],B,2240044497),y=u(y,_,x,k,w[h+8],P,1873313359),k=u(k,y,_,x,w[h+15],N,4264355552),x=u(x,k,y,_,w[h+6],$,2734768916),_=u(_,x,k,y,w[h+13],B,1309151649),y=u(y,_,x,k,w[h+4],P,4149444226),k=u(k,y,_,x,w[h+11],N,3174756917),x=u(x,k,y,_,w[h+2],$,718787259),_=u(_,x,k,y,w[h+9],B,3951481745),y=n(y,m),_=n(_,f),x=n(x,g),k=n(k,b);var D=v(y)+v(_)+v(x)+v(k);return D.toLowerCase()}),O=E()?new y["VKMiniAppAPI"]:new y["VKMiniAppAPI"](x.a);O.initApp();var j=O,C="PswZKFiEQ8gS0vsa7nLa",q=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.mobile=k(),t.vk_app_id=7350550,t._vk_settings={vk_app_id:0,vk_user_id:0,vk_platform:"",viewer_id:-1},t._auth_key="",t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"setVkSettings",value:function(t){this._vk_settings=t}},{key:"setAuthKey",value:function(t){this._auth_key=t}},{key:"getParamsForRegister",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.getUserInfo();case 2:return e=t.sent,n=this.vk_app_id.toString()+"_"+e.id.toString()+"_"+C,console.log("tempStr",n),r=w(n),console.log("auth_key",r),this.context.commit("setAuthKey",r),t.abrupt("return",new Promise((function(t,n){var s={method:"auth.register_vk_bridge_user",params:{viewer_id:e.id,auth_key:r,nickname:"VK:"+e.id,profile:{first_name:e.first_name,last_name:e.last_name,city:e.city,country:e.country,sex:e.sex,photo_100:e.photo_100,photo_200:e.photo_200},vk_profile:{vk_platform:i.vkSettings.vk_platform}}};t(s)})));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getParamsForAuth",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.getUserInfo();case 2:return e=t.sent,n=w(this._vk_settings.vk_app_id+"_"+e.id+"_"+C),this.context.commit("setAuthKey",n),t.abrupt("return",new Promise((function(t,r){var i={method:"auth.auth_vk_bridge_user",params:{viewer_id:e.id,auth_key:n}};t(i)})));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"auth_key",get:function(){return this._auth_key}},{key:"isMobile",get:function(){return this.mobile}},{key:"vkSettings",get:function(){return this._vk_settings}},{key:"appUrl",get:function(){return"/app".concat(this._vk_settings.vk_app_id,"_").concat(this._vk_settings.vk_user_id)}}]),e}(h["d"]);Object(v["a"])([h["c"]],q.prototype,"setVkSettings",null),Object(v["a"])([h["c"]],q.prototype,"setAuthKey",null),Object(v["a"])([Object(h["a"])({rawError:!0})],q.prototype,"getParamsForRegister",null),Object(v["a"])([Object(h["a"])({rawError:!0})],q.prototype,"getParamsForAuth",null),q=Object(v["a"])([Object(h["b"])({dynamic:!0,store:f,name:"app"})],q);var S=Object(h["e"])(q);function E(){try{return window.self!==window.top}catch(t){return!0}}var I=n("7618"),R=null,z={},M=0,T=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t._isConnected=!1,t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"Init",value:function(t){var e=this,n=t.eventListener;n.onopen=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,R=n.target,e.context.commit("SET_IS_CONNECTED",!0),t.t0=e.userRegistered,t.t0){t.next=8;break}return t.next=7,e.registerUser();case 7:t.t0=t.sent;case 8:if(!t.t0){t.next=13;break}return t.next=11,e.authUser();case 11:r=t.sent,r&&console.log("авторизованы");case 13:t.next=18;break;case 15:t.prev=15,t.t1=t["catch"](0),console.error(t.t1);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}(),n.onclose=function(t){e.context.commit("SET_IS_CONNECTED",!1)},n.onmessage=function(t){console.log("onmessage",t);var n=t.data,r=void 0;if("object"===Object(I["a"])(n))r=n;else{if("{"!==n.charAt(0))return console.log(n),!1;try{r=JSON.parse(n)}catch(i){return console.error(i),!1}}r.hasOwnProperty("result")?r.hasOwnProperty("id")?e.onResponse(r):e.onResponseWithoutId(r):r.hasOwnProperty("error")?e.onResponseError(r):console.log("strange response",r)},n.onerror=function(t){e.isConnected&&console.log("onerror",t)}}},{key:"SET_IS_CONNECTED",value:function(t){this._isConnected=t}},{key:"sendText",value:function(t){this.isConnected&&R&&R.send(t)}},{key:"sendObject",value:function(t){this.isConnected&&R&&R.sendObj(t)}},{key:"serverMethod",value:function(t){var e=this,n=t.params;return M+=1,t["jsonrpc"]="2.0",t["id"]=M,new Promise((function(r,i){try{e.isConnected?(R.sendObj(t),console.log("WebSocket.sendObj",JSON.stringify(t)),z[M]={params:n,resolve:r,reject:i}):i({code:-1,message:"WebSocket not connected"})}catch(s){i(s)}}))}},{key:"onResponse",value:function(t){var e=z[t.id];if(e&&e.resolve)try{e.resolve(t),delete z[t.id]}catch(n){console.error(n)}else console.error("onResponse wrong id",t.id)}},{key:"onResponseError",value:function(t){console.log("onResponseError",JSON.stringify(t))}},{key:"onResponseWithoutId",value:function(t){console.log("onResponseWithoutId",t)}},{key:"registerUser",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.getParamsForRegister();case 3:e=t.sent,console.log("paramsForRegister",e),this.serverMethod(e).then((function(t){return console.log("registerUser",t),localStorage.setItem("userRegistered","1"),!0})).catch((function(t){return console.error("registerUser error",t),localStorage.removeItem("userRegistered"),!1})),t.next=12;break;case 8:return t.prev=8,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"authUser",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.getParamsForAuth();case 3:e=t.sent,this.serverMethod(e).then((function(t){return console.log("AuthUser",t),!0})).catch((function(t){return console.error("AuthUser error",t),!1})),t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"isConnected",get:function(){return this._isConnected}},{key:"userRegistered",get:function(){return localStorage.getItem("userRegistered")}}]),e}(h["d"]);Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"Init",null),Object(v["a"])([h["c"]],T.prototype,"SET_IS_CONNECTED",null),Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"sendText",null),Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"sendObject",null),Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"serverMethod",null),Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"onResponse",null),Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"onResponseError",null),Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"onResponseWithoutId",null),Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"registerUser",null),Object(v["a"])([Object(h["a"])({rawError:!0})],T.prototype,"authUser",null),T=Object(v["a"])([Object(h["b"])({dynamic:!0,store:f,name:"websocket"})],T);var A=Object(h["e"])(T),P="orange",N="/vue-chat/",$=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.mainColor=P,t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"initApp",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i,s,o,a,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("this.$route.query",JSON.stringify(this.$route.query)),console.log("this.$route.query.auth_key",this.$route.query.auth_key),e=this.$route.query,n=e.vk_app_id,r=void 0===n?"vk_app_id":n,i=e.vk_user_id,s=void 0===i?"12345678":i,o=e.vk_platform,a=void 0===o?"desktop_web":o,c=e.viewer_id,l=void 0===c?-1:c,S.setVkSettings({vk_app_id:r,vk_user_id:s,vk_platform:a,viewer_id:l}),A.Init({eventListener:this.$options.sockets});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.initApp()}},{key:"websocketHandler",value:function(){}},{key:"closeError",value:function(){b.clearError()}},{key:"closeMessage",value:function(){b.clearMessage()}},{key:"title",get:function(){return"0.1.33 - "+(A.isConnected?"connected":"disconnected")}},{key:"info",get:function(){return S.vkSettings.vk_platform}},{key:"error",get:function(){return b.error}},{key:"message",get:function(){return b.message}},{key:"showBtnBack",get:function(){return!("/"===this.$route.path||this.$route.path===N)}}]),e}(d["c"]);$=Object(v["a"])([d["a"]],$);var B=$,D=B,W=(n("034f"),n("2877")),H=Object(W["a"])(D,i,s,!1,null,null,null),U=H.exports,V=(n("5363"),n("ce5b")),L=n.n(V),F=(n("bf40"),n("8c4f")),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{staticClass:"elevation-1",attrs:{color:t.mainColor,prominent:"",height:"350px",dark:"",src:t.avatar,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-5","scroll-threshold":"200","shrink-on-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var r=e.props;return[n("v-img",t._b({},"v-img",r,!1))]}}])},[n("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-toolbar-title",{},[t._v(t._s(t.title))]),n("div",{staticClass:"flex-grow-1"}),n("Menu",{attrs:{options:t.options}})],1),n("v-sheet",{staticClass:"overflow-y-auto orange lighten-5",attrs:{id:"scrolling-techniques-5","max-height":"600"}},[n("v-container",{staticClass:"px-0",staticStyle:{"min-height":"1500px"}},[n("v-list",{staticClass:"py-0",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Mute notification")])],1),n("v-list-item-action",{staticClass:"ml-3"},[n("v-switch",{on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}})],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Custom notifications")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",[n("v-list-item-title",[t._v("Media visibility")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1 pr-3",attrs:{"three-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Encryption")]),n("v-list-item-subtitle",[t._v("Messages to this chat and calls are secured with end-to-end encryption. Tap to\n                verify.\n              ")])],1),n("v-list-item-action",{staticClass:"ml-3 mt-9"},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-lock")])],1)],1)],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Test status")]),n("v-list-item-subtitle",[t._v("30 July 2018")])],1)],1),n("v-divider"),n("v-list-item",{staticClass:"py-1 pr-0",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("+27 22 452 51571")]),n("v-list-item-subtitle",[t._v("Mobile")])],1),n("v-list-item-action",{staticClass:"d-flex flex-row mb-5"},[n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(e){return e.stopPropagation(),t.$router.push("chat")},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{staticClass:"flip-icon orange--text"},[t._v("mdi-android-messages")])],1),n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-phone")])],1),n("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[n("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-video")])],1)],1)],1)],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",{staticClass:"red--text text--darken-2"},[n("v-list-item-title",[n("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-cancel")]),t._v("\n                Block\n              ")],1)],1)],1),n("v-divider")],1)],1),n("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[n("v-list-item-group",[n("v-list-item",{staticClass:"py-1"},[n("v-list-item-content",{staticClass:"red--text text--darken-2"},[n("v-list-item-title",[n("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-thumb-down")]),t._v("\n                Report contact\n              ")],1)],1)],1),n("v-divider")],1)],1)],1)],1)],1)},J=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{left:"",bottom:"",transition:"scroll-x-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{icon:""}},r),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",{staticClass:"py-0"},t._l(t.options,(function(e){return n("v-list-item",{key:e,on:{click:function(){}}},[n("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)},Q=[],Z=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(p["a"])(e,t),e}(d["c"]);Object(v["a"])([Object(d["b"])({default:function(){return[]}})],Z.prototype,"options",void 0),Z=Object(v["a"])([d["a"]],Z);var G=Z,X=G,tt=Object(W["a"])(X,Y,Q,!1,null,null,null),et=tt.exports,nt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.mainColor=P,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["Share","Edit","View in address book","Verify security code"],t}return Object(p["a"])(e,t),e}(d["c"]);nt=Object(v["a"])([Object(d["a"])({components:{Menu:et}})],nt);var rt=nt,it=rt,st=Object(W["a"])(it,K,J,!1,null,null,null),ot=st.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ChatTopBar"),n("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"","max-height":"600"}},[n("v-container",{staticClass:"pa-0 pt-2 grey lighten-2 back subtitle-2",staticStyle:{height:"90vh"}},[t._l(t.messages,(function(e,r){return["incoming"===e.direction?n("v-card",{key:r,staticClass:"left mx-3 mb-1 px-2 py-1 float-left",class:{"chat-bubble mt-1":t.firstDirection(e,r)},attrs:{"min-width":"50%","max-width":"80%"}},[n("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),n("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[n("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")])])]):"outgoing"===e.direction?n("v-card",{key:r,staticClass:"right mx-3 mb-1 px-2 py-1 float-right orange lighten-3",class:{"chat-bubble mt-1":t.firstDirection(e,r)},attrs:{"min-width":"50%","max-width":"80%"}},[n("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),n("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[n("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")]),"received"===e.status?n("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"grey lighten-0"}},[t._v("mdi-check-all")]):"read"===e.status?n("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"blue lighten-2"}},[t._v("mdi-check-all")]):t._e()],1)]):t._e()]})),n("ChatBox")],2)],1)],1)},ct=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"elevation-1",attrs:{color:t.mainColor,dark:"",height:"64"}},[n("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),n("v-avatar",[n("v-img",{attrs:{"aspect-ratio":"1",width:"45","max-width":"45",height:"45",src:t.avatar}})],1),n("v-toolbar-title",[n("v-list-item",{staticClass:"pl-2 pr-0",attrs:{"two-line":""},on:{click:function(e){return t.$router.push("profile")}}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))]),n("v-list-item-subtitle",{staticClass:"caption white--text"},[t._v(t._s(t.time))])],1)],1)],1),n("v-spacer"),n("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[n("v-icon",[t._v("mdi-video")])],1),n("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[n("v-icon",[t._v("mdi-phone")])],1),n("Menu",{attrs:{options:t.options}})],1)},ut=[],pt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.mainColor=P,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["View contact","Media","Search","Mute notifications","Wallpaper","More"],t}return Object(p["a"])(e,t),e}(d["c"]);pt=Object(v["a"])([Object(d["a"])({components:{Menu:et}})],pt);var vt=pt,dt=vt,ht=Object(W["a"])(dt,lt,ut,!1,null,null,null),mt=ht.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chatbox-container"},[n("v-container",{staticClass:"px-2 py-1",attrs:{justify:"center"}},[n("v-layout",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"10"}},[n("div",{staticClass:"white elevation-1",staticStyle:{"border-radius":"50px",height:"48px"}},[n("v-container",{staticClass:"px-1",attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{size:"28"}},[t._v("mdi-emoticon-outline")])],1),n("div",[n("v-textarea",{staticClass:"mt-0",staticStyle:{"max-width":"160px"},attrs:{rows:"1",solo:"",flat:"",placeholder:"Type a message"}})],1),n("div",{staticClass:"ml-0"},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"lean-left-icon grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-paperclip")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",{staticClass:"grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-camera")])],1)],1)],1)],1)],1)]),n("v-col",{staticClass:"pl-2",attrs:{cols:"2"}},[n("v-btn",{attrs:{color:t.mainColor,dark:"",fab:"",height:"48px",width:"48px","min-width":"48px"},on:{click:function(e){return t.sendMessage()}}},[n("v-icon",{attrs:{size:"24"}},[t._v(t._s(t.sendIcon))])],1)],1)],1)],1)],1)],1)},gt=[],bt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.mainColor=P,t.sendIcon="mdi-send",t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"sendMessage",value:function(){this.sendIcon="mdi-microphone"==this.sendIcon?"mdi-send":"mdi-microphone"}}]),e}(d["c"]);bt=Object(v["a"])([d["a"]],bt);var yt=bt,_t=yt,xt=(n("afe4"),Object(W["a"])(_t,ft,gt,!1,null,null,null)),kt=xt.exports,wt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.messages=[{direction:"incoming",text:"We should be able to get there on time right?",time:"8:10pm"},{direction:"incoming",text:"I mean, surely? It can't happen again",time:"8:11pm"},{direction:"outgoing",text:"Don't hold up your breathe. Todd always takes years to get ready. It will be fine either way.",status:"received/read",time:"8:18pm"},{direction:"outgoing",text:"We are going to be fine.",status:"read",time:"8:19pm"},{direction:"outgoing",text:":)",status:"read",time:"8:20pm"},{direction:"incoming",text:"Almost here?",time:"9:00pm"},{direction:"incoming",text:"Is that your car in the street?",time:"9:02pm"},{direction:"outgoing",text:"Yea.",status:"received",time:"9:03pm"}],t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"firstDirection",value:function(t,e){if(0==e)return!0;var n=t.direction!=this.messages[e-1].direction;return n}}]),e}(d["c"]);wt=Object(v["a"])([Object(d["a"])({components:{ChatTopBar:mt,ChatBox:kt}})],wt);var Ot=wt,jt=Ot,Ct=(n("d475"),Object(W["a"])(jt,at,ct,!1,null,"14b4c9d0",null)),qt=Ct.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"card",attrs:{id:"create"}},[n("v-speed-dial",{style:t.fabUsersStyle,attrs:{top:"",right:"",direction:"top"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{small:"",icon:!1,rounded:!0,fab:!0,color:t.red},on:{click:t.onTest}},[t._v("\n          test\n        ")])]},proxy:!0}])}),n("v-speed-dial",{staticClass:"v-speed-dial",attrs:{top:"",right:"",direction:"bottom"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"primary",dark:"",small:!0,fab:""},nativeOn:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onSpeedDial(e)}}},[t.fab?n("v-icon",[t._v("mdi-close")]):n("v-icon",[t._v("mdi-chevron-down")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[n("v-btn",{attrs:{to:"/quiz1",rounded:!0,small:t.isMobile}},[t._v("\n        Quiz 1\n      ")])],1)],1)],1)},Et=[],It=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.isMobile=S.isMobile,t.fab=!0,t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"onSpeedDial",value:function(){this.fab=!this.fab}},{key:"onTest",value:function(){console.log(w("7350550_2314852_PswZKFiEQ8gS0vsa7nLa"))}},{key:"fabUsersStyle",get:function(){var t=S.isMobile?30:50;return{position:"fixed",marginRight:"".concat(t,"px"),marginTop:"44px"}}}]),e}(d["c"]);It=Object(v["a"])([d["a"]],It);var Rt=It,zt=Rt,Mt=(n("a923"),Object(W["a"])(zt,St,Et,!1,null,"51c6c274",null)),Tt=Mt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container2"},[n("div",{staticClass:"questionBox",attrs:{id:"app"}},[n("transition",{attrs:{duration:{enter:500,leave:300},"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in"}},[t.questionIndex<t.quiz.questions.length?n("div",{key:t.questionIndex,staticClass:"questionContainer"},[n("header",[n("h1",{staticClass:"title is-6"},[t._v("VueQuiz")]),n("div",{staticClass:"progressContainer"},[n("progress",{staticClass:"progress is-info is-small",attrs:{max:"100"},domProps:{value:t.questionIndex/t.quiz.questions.length*100}},[t._v("\n              "+t._s(t.questionIndex/t.quiz.questions.length*100)+"%\n            ")]),n("p",[t._v(t._s(t.questionIndex/t.quiz.questions.length*100)+"% complete")])])]),n("h2",{staticClass:"titleContainer title"},[t._v(t._s(t.quiz.questions[t.questionIndex].text))]),n("div",{staticClass:"optionContainer"},t._l(t.quiz.questions[t.questionIndex].responses,(function(e,r){return n("div",{key:r,staticClass:"option",class:{"is-selected":t.userResponses[t.questionIndex]==r},on:{click:function(e){return t.selectOption(r)}}},[t._v("\n            "+t._s(t._f("charIndex")(r))+". "+t._s(e.text)+"\n          ")])})),0),n("footer",{staticClass:"questionFooter"},[n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("a",{staticClass:"button",attrs:{disabled:t.questionIndex<1},on:{click:function(e){return t.prev()}}},[t._v("Back")]),n("a",{staticClass:"button",class:null==t.userResponses[t.questionIndex]?"":"is-active",attrs:{disabled:t.questionIndex>=t.quiz.questions.length},on:{click:function(e){return t.next()}}},[t._v("\n              "+t._s(null==t.userResponses[t.questionIndex]?"Skip":"Next")+"\n            ")])])])]):t._e(),t.questionIndex>=t.quiz.questions.length?n("div",{key:t.questionIndex,staticClass:"quizCompleted has-text-centered"},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa",class:t.score()>3?"fa-check-circle-o is-active":"fa-times-circle"})]),n("h2",{staticClass:"title"},[t._v("\n          You did "+t._s(t.score()>7?"an amazing":t.score()<4?"a poor":"a good")+" job!\n        ")]),n("p",{staticClass:"subtitle"},[t._v("\n          Total score: "+t._s(t.score())+" / "+t._s(t.quiz.questions.length)+"\n        ")]),n("br"),n("a",{staticClass:"button",on:{click:function(e){return t.restart()}}},[t._v("restart "),n("i",{staticClass:"fa fa-refresh"})])]):t._e()])],1)])},Pt=[],Nt=(n("6c7b"),{user:"Dave",questions:[{text:"What is the full form of HTTP?",responses:[{text:"Hyper text transfer package"},{text:"Hyper text transfer protocol",correct:!0},{text:"Hyphenation text test program"},{text:"None of the above"}]},{text:"HTML document start and end with which tag pairs?",responses:[{text:"HTML",correct:!0},{text:"WEB"},{text:"HEAD"},{text:"BODY"}]},{text:"Which tag is used to create body text in HTML?",responses:[{text:"HEAD"},{text:"BODY",correct:!0},{text:"TITLE"},{text:"TEXT"}]},{text:"Outlook Express is _________",responses:[{text:"E-Mail Client",correct:!0},{text:"Browser"},{text:"Search Engine"},{text:"None of the above"}]},{text:"What is a search engine?",responses:[{text:"A hardware component "},{text:"A machinery engine that search data"},{text:"A web site that searches anything",correct:!0},{text:"A program that searches engines"}]},{text:"What does the .com domain represents?",responses:[{text:"Network"},{text:"Education"},{text:"Commercial",correct:!0},{text:"None of the above"}]},{text:"In Satellite based communication, VSAT stands for? ",responses:[{text:" Very Small Aperture Terminal",correct:!0},{text:"Varying Size Aperture Terminal "},{text:"Very Small Analog Terminal"},{text:"None of the above"}]},{text:"What is the full form of TCP/IP? ",responses:[{text:"Telephone call protocol / international protocol"},{text:"Transmission control protocol / internet protocol",correct:!0},{text:"Transport control protocol / internet protocol "},{text:"None of the above"}]},{text:"What is the full form of HTML?",responses:[{text:"Hyper text marking language"},{text:"Hyphenation text markup language "},{text:"Hyper text markup language",correct:!0},{text:"Hyphenation test marking language"}]},{text:'"Yahoo", "Infoseek" and "Lycos" are _________?',responses:[{text:"Browsers "},{text:"Search Engines",correct:!0},{text:"News Group"},{text:"None of the above"}]}]}),$t=Array(Nt.questions.length).fill(null),Bt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.quiz=Nt,t.questionIndex=0,t.userResponses=$t,t.isActive=!1,t}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"restart",value:function(){this.questionIndex=0,this.userResponses=Array(this.quiz.questions.length).fill(null)}},{key:"selectOption",value:function(t){d["c"].set(this.userResponses,this.questionIndex,t)}},{key:"next",value:function(){this.questionIndex<this.quiz.questions.length&&this.questionIndex++}},{key:"prev",value:function(){this.quiz.questions.length>0&&this.questionIndex--}},{key:"score",value:function(){for(var t=0,e=0;e<this.userResponses.length;e++)"undefined"!==typeof this.quiz.questions[e].responses[this.userResponses[e]]&&this.quiz.questions[e].responses[this.userResponses[e]].correct&&(t+=1);return t}},{key:"isConnected",get:function(){return A.isConnected}}]),e}(d["c"]);Bt=Object(v["a"])([Object(d["a"])({filters:{charIndex:function(t){return String.fromCharCode(97+t)}}})],Bt);var Dt=Bt,Wt=Dt,Ht=(n("699b"),Object(W["a"])(Wt,At,Pt,!1,null,"5a8da7f2",null)),Ut=Ht.exports,Vt=[{path:"/",name:"start",component:Tt},{path:"/profile",name:"profile",component:ot},{path:"/chat",name:"chat",component:qt},{path:"/quiz1",name:"quiz1",component:Ut},{path:"*",component:Tt}],Lt=n("b408"),Ft=n.n(Lt);r["default"].config.productionTip=!1,r["default"].config.silent=!0,r["default"].use(Ft.a,"wss://meetup.inachi.eu:4430/ws",{reconnection:!0,reconnectionAttempts:500,reconnectionDelay:1e3,format:"json"}),r["default"].use(L.a),r["default"].use(F["a"]);var Kt=new F["a"]({routes:Vt,mode:"history"});new r["default"]({router:Kt,store:f,vuetify:new L.a({icons:{iconfont:"mdi"}}),render:function(t){return t(U)}}).$mount("#app")},d147:function(t,e,n){},d475:function(t,e,n){"use strict";var r=n("b1d3"),i=n.n(r);i.a}});
//# sourceMappingURL=app.732d80cc.js.map