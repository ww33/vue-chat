(function(t){function e(e){for(var n,a,r=e[0],c=e[1],l=e[2],v=0,p=[];v<r.length;v++)a=r[v],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-chat/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"034f":function(t,e,s){"use strict";var n=s("27fb"),i=s.n(n);i.a},"27fb":function(t,e,s){},"5d17":function(t,e,s){"use strict";var n=s("e9ba"),i=s.n(n);i.a},afe4:function(t,e,s){"use strict";var n=s("d147"),i=s.n(n);i.a},b1d3:function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Vue100vh",[s("v-app",[s("v-toolbar",{staticClass:"elevation-1",staticStyle:{"margin-top":"45px"},attrs:{color:t.mainColor,dark:"",height:"54"}},[s("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[s("v-icon",[t._v("mdi-arrow-left")])],1),s("v-toolbar-title",[s("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))])],1),s("v-spacer")],1),s("v-app",[s("v-content",[s("v-card",{staticClass:"overflow-hidden"},[s("router-view")],1)],1)],1),t.error?[s("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeError}},[t._v("\n          "+t._s(t.error)+"\n          "),s("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e(),t.message?[s("v-snackbar",{attrs:{top:"",timeout:5e3,"multi-line":!0,color:"success",value:!0},on:{input:t.closeMessage}},[t._v("\n          "+t._s(t.message)+"\n          "),s("v-btn",{attrs:{text:"",dark:""},nativeOn:{click:function(e){return t.closeMessage(e)}}},[t._v("Close")])],1)]:t._e()],2)],1)},o=[],a=s("d225"),r=s("b0b4"),c=s("308d"),l=s("6bb5"),u=s("4e2b"),v=s("9ab4"),p=s("60a3"),d=s("6fc5"),h=s("2f62");n["default"].use(h["a"]);var m=new h["a"].Store({}),f=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t._error="",t._message="",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"setError",value:function(t){this._error=t}},{key:"clearError",value:function(){this._error=""}},{key:"setMessage",value:function(t){this._message=t}},{key:"clearMessage",value:function(){this._message=""}},{key:"error",get:function(){return this._error}},{key:"message",get:function(){return this._message}}]),e}(d["d"]);Object(v["a"])([d["c"]],f.prototype,"setError",null),Object(v["a"])([d["c"]],f.prototype,"clearError",null),Object(v["a"])([d["c"]],f.prototype,"setMessage",null),Object(v["a"])([d["c"]],f.prototype,"clearMessage",null),f=Object(v["a"])([Object(d["b"])({dynamic:!0,store:m,name:"alerts"})],f);var b=Object(d["e"])(f),g=s("7618"),x=null,y=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t._isConnected=!1,t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"SET_IS_CONNECTED",value:function(t){this._isConnected=t}},{key:"Init",value:function(t){var e=this,s=t.eventListener,n=t.auth_key;s.onopen=function(t){x=t.target,console.log("data",t.target),e.context.commit("SET_IS_CONNECTED",!0)},s.onclose=function(t){console.log("onclose",t),e.context.commit("SET_IS_CONNECTED",!1)},s.onmessage=function(t){var e=t.data;if("object"===Object(g["a"])(e))console.log("object",e);else if("{"===e.charAt(0))try{console.log("string",JSON.parse(e))}catch(s){console.error(s)}else console.log(e)},console.log("auth_key",n)}},{key:"sendText",value:function(t){this.isConnected&&x&&x.send(t)}},{key:"sendObject",value:function(t){this.isConnected&&x&&x.sendObj(t)}},{key:"isConnected",get:function(){return this._isConnected}}]),e}(d["d"]);Object(v["a"])([d["c"]],y.prototype,"SET_IS_CONNECTED",null),Object(v["a"])([Object(d["a"])({rawError:!0})],y.prototype,"Init",null),Object(v["a"])([Object(d["a"])({rawError:!0})],y.prototype,"sendText",null),Object(v["a"])([Object(d["a"])({rawError:!0})],y.prototype,"sendObject",null),y=Object(v["a"])([Object(d["b"])({dynamic:!0,store:m,name:"websocket"})],y);var _=Object(d["e"])(y),C="orange",O=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=C,t.title="0.1.16",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){var t=this.$route.query.auth_key||"auth_key";_.Init({eventListener:this.$options.sockets,auth_key:t})}},{key:"websocketHandler",value:function(){}},{key:"closeError",value:function(){b.clearError()}},{key:"closeMessage",value:function(){b.clearMessage()}},{key:"error",get:function(){return b.error}},{key:"message",get:function(){return b.message}}]),e}(p["c"]);O=Object(v["a"])([p["a"]],O);var j=O,k=j,w=(s("034f"),s("2877")),q=Object(w["a"])(k,i,o,!1,null,null,null),E=q.exports,I=(s("5363"),s("ce5b")),T=s.n(I),S=(s("bf40"),s("8c4f")),M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",{staticClass:"elevation-1",attrs:{color:t.mainColor,prominent:"",height:"350px",dark:"",src:t.avatar,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-5","scroll-threshold":"200","shrink-on-scroll":""},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[s("v-img",t._b({},"v-img",n,!1))]}}])},[s("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[s("v-icon",[t._v("mdi-arrow-left")])],1),s("v-toolbar-title",{},[t._v(t._s(t.title))]),s("div",{staticClass:"flex-grow-1"}),s("Menu",{attrs:{options:t.options}})],1),s("v-sheet",{staticClass:"overflow-y-auto orange lighten-5",attrs:{id:"scrolling-techniques-5","max-height":"600"}},[s("v-container",{staticClass:"px-0",staticStyle:{"min-height":"1500px"}},[s("v-list",{staticClass:"py-0",attrs:{flat:"",tile:""}},[s("v-list-item-group",[s("v-list-item",{staticClass:"py-1"},[s("v-list-item-content",[s("v-list-item-title",[t._v("Mute notification")])],1),s("v-list-item-action",{staticClass:"ml-3"},[s("v-switch",{on:{mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}})],1)],1),s("v-divider"),s("v-list-item",{staticClass:"py-1"},[s("v-list-item-content",[s("v-list-item-title",[t._v("Custom notifications")])],1)],1),s("v-divider"),s("v-list-item",{staticClass:"py-1"},[s("v-list-item-content",[s("v-list-item-title",[t._v("Media visibility")])],1)],1),s("v-divider"),s("v-list-item",{staticClass:"py-1 pr-3",attrs:{"three-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Encryption")]),s("v-list-item-subtitle",[t._v("Messages to this chat and calls are secured with end-to-end encryption. Tap to\n                verify.\n              ")])],1),s("v-list-item-action",{staticClass:"ml-3 mt-9"},[s("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-lock")])],1)],1)],1)],1),s("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[s("v-list-item-group",[s("v-list-item",{staticClass:"py-1",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("Test status")]),s("v-list-item-subtitle",[t._v("30 July 2018")])],1)],1),s("v-divider"),s("v-list-item",{staticClass:"py-1 pr-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[t._v("+27 22 452 51571")]),s("v-list-item-subtitle",[t._v("Mobile")])],1),s("v-list-item-action",{staticClass:"d-flex flex-row mb-5"},[s("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(e){return e.stopPropagation(),t.$router.push("chat")},touchstart:function(t){t.stopPropagation()}}},[s("v-icon",{staticClass:"flip-icon orange--text"},[t._v("mdi-android-messages")])],1),s("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[s("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-phone")])],1),s("v-btn",{staticClass:"mx-2",attrs:{icon:""},on:{click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[s("v-icon",{attrs:{color:t.mainColor}},[t._v("mdi-video")])],1)],1)],1)],1)],1),s("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[s("v-list-item-group",[s("v-list-item",{staticClass:"py-1"},[s("v-list-item-content",{staticClass:"red--text text--darken-2"},[s("v-list-item-title",[s("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-cancel")]),t._v("\n                Block\n              ")],1)],1)],1),s("v-divider")],1)],1),s("v-list",{staticClass:"py-0 mt-2",attrs:{flat:"",tile:""}},[s("v-list-item-group",[s("v-list-item",{staticClass:"py-1"},[s("v-list-item-content",{staticClass:"red--text text--darken-2"},[s("v-list-item-title",[s("v-icon",{staticClass:"red--text text--darken-2 pl-1 pr-5"},[t._v("mdi-thumb-down")]),t._v("\n                Report contact\n              ")],1)],1)],1),s("v-divider")],1)],1)],1)],1)],1)},z=[],P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-menu",{attrs:{left:"",bottom:"",transition:"scroll-x-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[s("v-btn",t._g({attrs:{icon:""}},n),[s("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[s("v-list",{staticClass:"py-0"},t._l(t.options,(function(e){return s("v-list-item",{key:e,on:{click:function(){}}},[s("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1)},N=[],A=function(t){function e(){return Object(a["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(p["c"]);Object(v["a"])([Object(p["b"])({default:function(){return[]}})],A.prototype,"options",void 0),A=Object(v["a"])([p["a"]],A);var H=A,$=H,D=Object(w["a"])($,P,N,!1,null,null,null),B=D.exports,R=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=C,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["Share","Edit","View in address book","Verify security code"],t}return Object(u["a"])(e,t),e}(p["c"]);R=Object(v["a"])([Object(p["a"])({components:{Menu:B}})],R);var W=R,V=W,L=Object(w["a"])(V,M,z,!1,null,null,null),Y=L.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ChatTopBar"),s("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"","max-height":"600"}},[s("v-container",{staticClass:"pa-0 pt-2 grey lighten-2 back subtitle-2",staticStyle:{height:"90vh"}},[t._l(t.messages,(function(e,n){return["incoming"===e.direction?s("v-card",{key:n,staticClass:"left mx-3 mb-1 px-2 py-1 float-left",class:{"chat-bubble mt-1":t.firstDirection(e,n)},attrs:{"min-width":"50%","max-width":"80%"}},[s("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),s("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[s("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")])])]):"outgoing"===e.direction?s("v-card",{key:n,staticClass:"right mx-3 mb-1 px-2 py-1 float-right orange lighten-3",class:{"chat-bubble mt-1":t.firstDirection(e,n)},attrs:{"min-width":"50%","max-width":"80%"}},[s("div",{staticClass:"hide-overflow"},[t._v("\n              "+t._s(e.text)+"\n            ")]),s("span",{staticClass:"float-right mt-1 pl-2",staticStyle:{height:"18px"}},[s("span",{staticClass:"caption grey--text text--darken-1"},[t._v(" "+t._s(e.time)+" ")]),"received"===e.status?s("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"grey lighten-0"}},[t._v("mdi-check-all")]):"read"===e.status?s("v-icon",{staticClass:"mt-n1",attrs:{size:"18",color:"blue lighten-2"}},[t._v("mdi-check-all")]):t._e()],1)]):t._e()]})),s("ChatBox")],2)],1)],1)},F=[],G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-toolbar",{staticClass:"elevation-1",attrs:{color:t.mainColor,dark:"",height:"64"}},[s("v-btn",{staticClass:"ml-n3",attrs:{icon:"",width:"32",height:"32"},on:{click:function(e){return t.$router.go(-1)}}},[s("v-icon",[t._v("mdi-arrow-left")])],1),s("v-avatar",[s("v-img",{attrs:{"aspect-ratio":"1",width:"45","max-width":"45",height:"45",src:t.avatar}})],1),s("v-toolbar-title",[s("v-list-item",{staticClass:"pl-2 pr-0",attrs:{"two-line":""},on:{click:function(e){return t.$router.push("profile")}}},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"title mb-1"},[t._v(t._s(t.title))]),s("v-list-item-subtitle",{staticClass:"caption white--text"},[t._v(t._s(t.time))])],1)],1)],1),s("v-spacer"),s("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[s("v-icon",[t._v("mdi-video")])],1),s("v-btn",{attrs:{icon:"",width:"40",height:"40"}},[s("v-icon",[t._v("mdi-phone")])],1),s("Menu",{attrs:{options:t.options}})],1)},Q=[],X=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=C,t.avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg",t.title="Emma",t.time="online",t.options=["View contact","Media","Search","Mute notifications","Wallpaper","More"],t}return Object(u["a"])(e,t),e}(p["c"]);X=Object(v["a"])([Object(p["a"])({components:{Menu:B}})],X);var K=X,U=K,Z=Object(w["a"])(U,G,Q,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chatbox-container"},[s("v-container",{staticClass:"px-2 py-1",attrs:{justify:"center"}},[s("v-layout",[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"10"}},[s("div",{staticClass:"white elevation-1",staticStyle:{"border-radius":"50px",height:"48px"}},[s("v-container",{staticClass:"px-1",attrs:{"fill-height":""}},[s("v-layout",{attrs:{"align-center":""}},[s("v-btn",{attrs:{icon:""}},[s("v-icon",{attrs:{size:"28"}},[t._v("mdi-emoticon-outline")])],1),s("div",[s("v-textarea",{staticClass:"mt-0",staticStyle:{"max-width":"160px"},attrs:{rows:"1",solo:"",flat:"",placeholder:"Type a message"}})],1),s("div",{staticClass:"ml-0"},[s("v-btn",{attrs:{icon:""}},[s("v-icon",{staticClass:"lean-left-icon grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-paperclip")])],1),s("v-btn",{attrs:{icon:""}},[s("v-icon",{staticClass:"grey--text text--darken-1",attrs:{size:"28"}},[t._v("mdi-camera")])],1)],1)],1)],1)],1)]),s("v-col",{staticClass:"pl-2",attrs:{cols:"2"}},[s("v-btn",{attrs:{color:t.mainColor,dark:"",fab:"",height:"48px",width:"48px","min-width":"48px"},on:{click:function(e){return t.sendMessage()}}},[s("v-icon",{attrs:{size:"24"}},[t._v(t._s(t.sendIcon))])],1)],1)],1)],1)],1)],1)},st=[],nt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.mainColor=C,t.sendIcon="mdi-send",t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"sendMessage",value:function(){this.sendIcon="mdi-microphone"==this.sendIcon?"mdi-send":"mdi-microphone"}}]),e}(p["c"]);nt=Object(v["a"])([p["a"]],nt);var it=nt,ot=it,at=(s("afe4"),Object(w["a"])(ot,et,st,!1,null,null,null)),rt=at.exports,ct=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.messages=[{direction:"incoming",text:"We should be able to get there on time right?",time:"8:10pm"},{direction:"incoming",text:"I mean, surely? It can't happen again",time:"8:11pm"},{direction:"outgoing",text:"Don't hold up your breathe. Todd always takes years to get ready. It will be fine either way.",status:"received/read",time:"8:18pm"},{direction:"outgoing",text:"We are going to be fine.",status:"read",time:"8:19pm"},{direction:"outgoing",text:":)",status:"read",time:"8:20pm"},{direction:"incoming",text:"Almost here?",time:"9:00pm"},{direction:"incoming",text:"Is that your car in the street?",time:"9:02pm"},{direction:"outgoing",text:"Yea.",status:"received",time:"9:03pm"}],t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"firstDirection",value:function(t,e){if(0==e)return!0;var s=t.direction!=this.messages[e-1].direction;return s}}]),e}(p["c"]);ct=Object(v["a"])([Object(p["a"])({components:{ChatTopBar:tt,ChatBox:rt}})],ct);var lt=ct,ut=lt,vt=(s("d475"),Object(w["a"])(ut,J,F,!1,null,"14b4c9d0",null)),pt=vt.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container"},[s("div",{staticClass:"questionBox",attrs:{id:"app"}},[s("transition",{attrs:{duration:{enter:500,leave:300},"enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut",mode:"out-in"}},[t.questionIndex<t.quiz.questions.length?s("div",{key:t.questionIndex,staticClass:"questionContainer"},[s("header",[s("h1",{staticClass:"title is-6"},[t._v("VueQuiz")]),s("div",{staticClass:"progressContainer"},[s("progress",{staticClass:"progress is-info is-small",attrs:{max:"100"},domProps:{value:t.questionIndex/t.quiz.questions.length*100}},[t._v(t._s(t.questionIndex/t.quiz.questions.length*100)+"%")]),s("p",[t._v(t._s(t.questionIndex/t.quiz.questions.length*100)+"% complete")])])]),s("h2",{staticClass:"titleContainer title"},[t._v(t._s(t.quiz.questions[t.questionIndex].text))]),s("div",{staticClass:"optionContainer"},t._l(t.quiz.questions[t.questionIndex].responses,(function(e,n){return s("div",{key:n,staticClass:"option",class:{"is-selected":t.userResponses[t.questionIndex]==n},on:{click:function(e){return t.selectOption(n)}}},[t._v("\n            "+t._s(t._f("charIndex")(n))+". "+t._s(e.text)+"\n          ")])})),0),s("footer",{staticClass:"questionFooter"},[s("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[s("a",{staticClass:"button",attrs:{disabled:t.questionIndex<1},on:{click:function(e){return t.prev()}}},[t._v("\n              Back\n            ")]),s("a",{staticClass:"button",class:null==t.userResponses[t.questionIndex]?"":"is-active",attrs:{disabled:t.questionIndex>=t.quiz.questions.length},on:{click:function(e){return t.next()}}},[t._v("\n              "+t._s(null==t.userResponses[t.questionIndex]?"Skip":"Next")+"\n            ")])])])]):t._e(),t.questionIndex>=t.quiz.questions.length?s("div",{key:t.questionIndex,staticClass:"quizCompleted has-text-centered"},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa",class:t.score()>3?"fa-check-circle-o is-active":"fa-times-circle"})]),s("h2",{staticClass:"title"},[t._v("\n          You did "+t._s(t.score()>7?"an amazing":t.score()<4?"a poor":"a good")+" job!\n        ")]),s("p",{staticClass:"subtitle"},[t._v("\n          Total score: "+t._s(t.score())+" / "+t._s(t.quiz.questions.length)+"\n        ")]),s("br"),s("a",{staticClass:"button",on:{click:function(e){return t.restart()}}},[t._v("restart "),s("i",{staticClass:"fa fa-refresh"})])]):t._e()])],1)])},ht=[],mt=(s("6c7b"),{user:"Dave",questions:[{text:"What is the full form of HTTP?",responses:[{text:"Hyper text transfer package"},{text:"Hyper text transfer protocol",correct:!0},{text:"Hyphenation text test program"},{text:"None of the above"}]},{text:"HTML document start and end with which tag pairs?",responses:[{text:"HTML",correct:!0},{text:"WEB"},{text:"HEAD"},{text:"BODY"}]},{text:"Which tag is used to create body text in HTML?",responses:[{text:"HEAD"},{text:"BODY",correct:!0},{text:"TITLE"},{text:"TEXT"}]},{text:"Outlook Express is _________",responses:[{text:"E-Mail Client",correct:!0},{text:"Browser"},{text:"Search Engine"},{text:"None of the above"}]},{text:"What is a search engine?",responses:[{text:"A hardware component "},{text:"A machinery engine that search data"},{text:"A web site that searches anything",correct:!0},{text:"A program that searches engines"}]},{text:"What does the .com domain represents?",responses:[{text:"Network"},{text:"Education"},{text:"Commercial",correct:!0},{text:"None of the above"}]},{text:"In Satellite based communication, VSAT stands for? ",responses:[{text:" Very Small Aperture Terminal",correct:!0},{text:"Varying Size Aperture Terminal "},{text:"Very Small Analog Terminal"},{text:"None of the above"}]},{text:"What is the full form of TCP/IP? ",responses:[{text:"Telephone call protocol / international protocol"},{text:"Transmission control protocol / internet protocol",correct:!0},{text:"Transport control protocol / internet protocol "},{text:"None of the above"}]},{text:"What is the full form of HTML?",responses:[{text:"Hyper text marking language"},{text:"Hyphenation text markup language "},{text:"Hyper text markup language",correct:!0},{text:"Hyphenation test marking language"}]},{text:'"Yahoo", "Infoseek" and "Lycos" are _________?',responses:[{text:"Browsers "},{text:"Search Engines",correct:!0},{text:"News Group"},{text:"None of the above"}]}]}),ft=Array(mt.questions.length).fill(null),bt=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.quiz=mt,t.questionIndex=0,t.userResponses=ft,t.isActive=!1,t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"test",value:function(){_.sendText("12345")}},{key:"restart",value:function(){this.questionIndex=0,this.userResponses=Array(this.quiz.questions.length).fill(null)}},{key:"selectOption",value:function(t){p["c"].set(this.userResponses,this.questionIndex,t)}},{key:"next",value:function(){this.questionIndex<this.quiz.questions.length&&this.questionIndex++}},{key:"prev",value:function(){this.quiz.questions.length>0&&this.questionIndex--}},{key:"score",value:function(){for(var t=0,e=0;e<this.userResponses.length;e++)"undefined"!==typeof this.quiz.questions[e].responses[this.userResponses[e]]&&this.quiz.questions[e].responses[this.userResponses[e]].correct&&(t+=1);return t}},{key:"isConnected",get:function(){return _.isConnected}}]),e}(p["c"]);bt=Object(v["a"])([Object(p["a"])({filters:{charIndex:function(t){return String.fromCharCode(97+t)}}})],bt);var gt=bt,xt=gt,yt=(s("5d17"),Object(w["a"])(xt,dt,ht,!1,null,null,null)),_t=yt.exports,Ct=[{path:"/",name:"start",component:_t},{path:"/profile",name:"profile",component:Y},{path:"/chat",name:"chat",component:pt},{path:"*",component:_t}],Ot=s("b408"),jt=s.n(Ot);n["default"].config.productionTip=!1,n["default"].config.silent=!0,n["default"].use(jt.a,"wss://echo.websocket.org",{reconnection:!0,reconnectionAttempts:500,reconnectionDelay:1e3,format:"json"}),n["default"].use(T.a),n["default"].use(S["a"]);var kt=new S["a"]({routes:Ct,mode:"history"});new n["default"]({router:kt,store:m,vuetify:new T.a({icons:{iconfont:"mdi"}}),render:function(t){return t(E)}}).$mount("#app")},d147:function(t,e,s){},d475:function(t,e,s){"use strict";var n=s("b1d3"),i=s.n(n);i.a},e9ba:function(t,e,s){}});
//# sourceMappingURL=app.6b5dd45c.js.map