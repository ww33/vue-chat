(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-6f7d7d5d":"821e0e67"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-6f7d7d5d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-6f7d7d5d":"6c52e948"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-chat/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]),t["a"]=new a["a"].Store({})},1610:function(e,t,n){"use strict";var r=n("50b0"),a=n.n(r);a.a},"50b0":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("7694"),a=n.n(r);a.a},7694:function(e,t,n){},a8ac:function(e,t,n){},c734:function(e,t,n){"use strict";var r=n("a8ac"),a=n.n(r);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a,i,o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{app:"",height:"40"}},[n("v-spacer"),n("v-btn",{staticStyle:{"z-index":"1000000"},attrs:{color:"primary",dark:"",small:!1,fab:""},on:{click:function(t){e.fab=!e.fab}}},[e.fab?n("v-icon",[e._v("mdi-close")]):n("v-icon",[e._v("mdi-chevron-down")])],1),n("v-speed-dial",{staticClass:"v-speed-dial",attrs:{bottom:"",right:"",direction:"bottom"},scopedSlots:e._u([{key:"activator",fn:function(){},proxy:!0}]),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[n("v-btn",{attrs:{small:!1}},[n("v-icon",[e._v("mdi-play-box-outline")])],1),n("v-btn",{attrs:{small:!1}},[n("v-icon",[e._v("mdi-play-box-outline")])],1)],1)],1),n("v-content",[n("router-view")],1)],1)},c=[],l=(n("99af"),n("d4ec")),u=n("99de"),d=n("7e84"),f=n("257e"),v=n("262e"),h=n("ade3"),p=n("60a3"),y=(r=Object(p["a"])({components:{}}),r((i=function(e){function t(){var e,n;Object(l["a"])(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=Object(u["a"])(this,(e=Object(d["a"])(t)).call.apply(e,[this].concat(a))),Object(h["a"])(Object(f["a"])(n),"fab",!1),n}return Object(v["a"])(t,e),t}(p["c"]),a=i))||a),b=y,m=(n("5c0b"),n("2877")),g=n("6544"),I=n.n(g),k=n("7496"),w=n("40dc"),P=n("8336"),O=n("a75b"),j=n("132d"),S=n("2fa4"),E=n("c73b"),x=Object(m["a"])(b,s,c,!1,null,null,null),A=x.exports;I()(x,{VApp:k["a"],VAppBar:w["a"],VBtn:P["a"],VContent:O["a"],VIcon:j["a"],VSpacer:S["a"],VSpeedDial:E["a"]});n("d3b7");var V,_,C,T,D,N,R=n("8c4f"),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"not-found"},[n("h1",[e._v("404 - Not Found: "+e._s(e.$route.path))])])},Y=[],B=(n("1610"),{}),F=Object(m["a"])(B,L,Y,!1,null,null,null),$=F.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",[null==e.$route.query.userName?n("v-container",[n("p",[e._v("roomId:"+e._s(e.roomId))])]):e._e()],1)},U=[],q=n("6b7b"),z=n("63ae"),G=(n("f890"),V=Object(p["a"])({components:{}}),_=Object(p["b"])(),V((N=function(e){function t(){var e,n;Object(l["a"])(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=Object(u["a"])(this,(e=Object(d["a"])(t)).call.apply(e,[this].concat(a))),Object(q["a"])(Object(f["a"])(n),"roomId",D,Object(f["a"])(n)),n}return Object(v["a"])(t,e),t}(p["c"]),T=N,D=Object(z["a"])(T.prototype,"roomId",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=T))||C),M=G,J=n("a523"),K=n("0e8f"),W=Object(m["a"])(M,H,U,!1,null,null,null),Q=W.exports;I()(W,{VContainer:J["a"],VFlex:K["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"app-container"},[n("v-row",{class:{front:e.firstPlayerIsActive,rear:!e.firstPlayerIsActive}},[n("div",{ref:"player1",staticClass:"player1",attrs:{id:"ytPlayer1"}})]),n("v-row",{style:{rear:e.firstPlayerIsActive,front:!e.firstPlayerIsActive}},[n("div",{ref:"player2",staticClass:"player2",attrs:{id:"ytPlayer2"}})])],1)])},Z=[],ee=(n("7db0"),n("b64b"),n("ac1f"),n("5319"),n("bee2")),te=n("9ab4"),ne=(n("a4d3"),n("e01a"),n("d28b"),n("d81d"),n("a9e3"),n("8ba4"),n("e25e"),n("3ca3"),n("1276"),n("ddb0"),n("2b3d"),function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;Object(l["a"])(this,e),this.id=t,this.videoId=n,this.start=r,this.end=a,this.speed=i}),re=function(){function e(){Object(l["a"])(this,e),this.videos=[],this.currentIndex=0,this.defaultVideoId="xv9vcwaHcas"}return Object(ee["a"])(e,[{key:"first",value:function(){return this.videos.length>0?this.videos[0]:null}},{key:"next",value:function(){console.log("this.currentIndex",this.currentIndex);var e=this.videos.length>0?this.videos[this.currentIndex]:null,t=this.currentIndex+1;return this.currentIndex=t+1>this.videos.length?0:t,e}},{key:"firstVideoId",value:function(){return this.first()?this.first().videoId:this.defaultVideoId}},{key:"firstVideoIdForSecondPlayer",value:function(){var e=this.firstVideoId();if(e==this.defaultVideoId)return null;var t=!0,n=!1,r=void 0;try{for(var a,i=this.videos[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value,s=o.videoId;if(s!==e&&""!==s)return s}}catch(c){n=!0,r=c}finally{try{t||null==i["return"]||i["return"]()}finally{if(n)throw r}}return null}}],[{key:"fromString",value:function(t){var n=new e,r=new URLSearchParams(t),a=parseInt(r.get("a"));n.autoPlay=1===a;var i=r.get("v")||"E5i4rDc_GA8.0.91~E5i4rDc_GA8.147.276";return i.split("~").map((function(e,t){var r=t+1,a=e.split("."),i=a[0];if(!i){if(!(t>0))throw console.error("First videoId is empty"),"First videoId is empty";i=n.videos[t-1].videoId}var o=a[1]?parseInt(a[1]):0,s=a[2]?parseInt(a[2]):null;if(Number.isInteger(o)&&Number.isInteger(s)&&s<=o)throw console.error("endSeconds must be more startSeconds"),"endSeconds must be more startSeconds";n.videos.push(new ne(r,i,o,s))})),console.log(n),n}}]),e}(),ae=(n("c0b6"),n("4795"),{ERROR:-2,UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5,READY:6}),ie=function(){function e(t,n,r,a,i){var o=this;Object(l["a"])(this,e),this.YT=t,this.id=n,this.elementDom=r,this.eventHandler=a,this.config=i,this.player=null,this.endSeconds=null,this.currentVideoId="",this.interval=null,this.onStateChange=function(e){o.eventHandler({id:o.id,state:e.data})},this.onReady=function(e){o.eventHandler({id:o.id,state:ae.READY})},this.onError=function(e){o.eventHandler({id:o.id,state:ae.ERROR,info:e})},this.runCheckInterval=function(){o.interval||(o.interval=setInterval(o.checkEndSeconds.bind(o),250))};var s=this.getPlayerConfig(),c=i.videoId,u=i.autoplay;s.videoId=c,s.playerVars.autoplay=u,this.currentVideoId=c,this.player=new t.Player(r,s)}return Object(ee["a"])(e,[{key:"play",value:function(e){this.player.playVideo()}},{key:"seek",value:function(e){var t=e.end,n=e.start;e.videoId;t>0&&(this.endSeconds=t),this.player.seekTo(n),this.runCheckInterval()}},{key:"loadVideoById",value:function(e){e.end,e.start;var t=e.videoId;this.player.loadVideoById(t)}},{key:"stop",value:function(){this.player.pauseVideo()}},{key:"getPlayerConfig",value:function(){var e=window.innerWidth,t=e-27;return{videoId:this.currentVideoId,width:t,height:.78*t,host:"https://www.youtube.com",playerVars:{autoplay:!0,controls:1,showinfo:0,modestbranding:1,iv_load_policy:3,autohide:1},events:{onStateChange:this.onStateChange,onError:this.onError,onReady:this.onReady}}}},{key:"clearCheckInterval",value:function(){clearInterval(this.interval),this.interval=null}},{key:"checkEndSeconds",value:function(){var e=this.player.getCurrentTime();Number.isInteger(this.endSeconds)&&e>=this.endSeconds&&(this.endSeconds=null,this.clearCheckInterval(),this.eventHandler({id:this.id,state:ae.ENDED,info:e}))}}]),e}(),oe=function(e){function t(){var e;return Object(l["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.player1=null,e.player2=null,e.firstPlayerIsActive=!0,e.autoPlay=!1,e.loadYT=null,e.queryString=location.hash.replace("#","?"),e.videoList=re.fromString(e.queryString),e}return Object(v["a"])(t,e),Object(ee["a"])(t,[{key:"mounted",value:function(){var e=this;this.autoPlay=this.videoList.autoPlay,this.loadYT||(this.loadYT=new Promise((function(e){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),window.onYouTubeIframeAPIReady=function(){return e(window.YT)}}))),this.loadYT.then((function(t){e.player1=new ie(t,1,e.$refs.player1,e.onEvent,{videoId:e.videoList.firstVideoId(),autoPlay:e.autoPlay});var n=e.videoList.firstVideoIdForSecondPlayer();n&&(e.player2=new ie(t,2,e.$refs.player2,e.onEvent,{videoId:n,autoPlay:!1}))}))}},{key:"onEvent",value:function(e){var t,n=e.state,r=e.id,a=e.info;switch(n){case ae.READY:this.logState(r,n,a),1==r&&(t=this.videoList.next(),t.videoId===this.activePlayer.currentVideoId?this.activePlayer.seek(t):console.log(57624588857567));break;case ae.ENDED:this.logState(r,n,a),t=this.videoList.next(),t.videoId===this.activePlayer.currentVideoId||this.changePlayerActivity(),this.activePlayer.seek(t);break;default:}}},{key:"logState",value:function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log(e,Object.keys(ae).find((function(e){return ae[e]===t})))}},{key:"changePlayerActivity",value:function(){this.firstPlayerIsActive=!this.firstPlayerIsActive}},{key:"activePlayer",get:function(){return this.firstPlayerIsActive?this.player1:this.player2}},{key:"passivePlayer",get:function(){return this.firstPlayerIsActive?this.player2:this.player1}},{key:"marginLeft1",get:function(){return this.firstPlayerIsActive?"0px":"-2000px"}},{key:"marginLeft2",get:function(){return this.firstPlayerIsActive?"2000px":"0px"}},{key:"ytPlayer1",get:function(){return{"z-index":this.firstPlayerIsActive?10:1}}},{key:"ytPlayer2",get:function(){return{"z-index":this.firstPlayerIsActive?1:10}}}]),t}(p["c"]);oe=te["a"]([Object(p["a"])({components:{}})],oe);var se=oe,ce=se,le=(n("c734"),n("0fd9")),ue=Object(m["a"])(ce,X,Z,!1,null,null,null),de=ue.exports;I()(ue,{VRow:le["a"]}),o["a"].use(R["a"]);var fe=[{path:"/",name:"Youtube",component:de},{path:"/room/:roomId",name:"room",component:Q,props:!0},{path:"*",component:$},{path:"/about",name:"about",component:function(){return n.e("chunk-6f7d7d5d").then(n.bind(null,"f820"))}}],ve=new R["a"]({mode:"history",base:"/vue-chat/",routes:fe}),he=ve,pe=n("0613"),ye=n("f309"),be=n("2db4"),me=n("87f6"),ge=n.n(me);o["a"].use(ye["a"],{components:{VSnackbar:be["a"],VBtn:P["a"],VIcon:j["a"]}}),o["a"].use(ge.a,{x:"right",y:"top",multiLine:!0,timeout:5e3});var Ie=new ye["a"]({theme:{options:{customProperties:!0},dark:!0}}),ke=n("4eb5"),we=n.n(ke);o["a"].config.productionTip=!1,o["a"].use(we.a),new o["a"]({router:he,store:pe["a"],vuetify:Ie,render:function(e){return e(A)}}).$mount("#app")}});
//# sourceMappingURL=app.b917c834.js.map