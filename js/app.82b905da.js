(function(t){function e(e){for(var i,a,r=e[0],c=e[1],p=e[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"45d4":function(t,e,n){"use strict";var i=n("bd31"),o=n.n(i);o.a},"461a":function(t,e,n){"use strict";var i=n("7192"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"}),n("div",{staticClass:"left"},[n("div",[n("AddSnipets")],1),n("div",[n("DeleteComp")],1)]),n("div",{staticClass:"right"},[n("TestAxios")],1)])},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("h2",[t._v("World of snippets")]),n("div",[n("button",{staticClass:"btn1",on:{click:t.bringo}},[t._v("View Latest")]),n("button",{staticClass:"btn2",on:{click:t.bestvoted}},[t._v("View Best")])]),t._l(t.snipets,(function(e){return n("div",{key:e.id,staticClass:"lister"},[n("span",{attrs:{id:"snipId"}},[t._v(t._s(e.id))]),n("span",{attrs:{id:"snipTi"}},[t._v(t._s(e.title))]),n("p",{attrs:{id:"snipP"}},[t._v(t._s(e.content))]),n("button",{on:{click:function(n){return t.upvote(e.id)}}},[t._v("Up Vote")]),t._v(" "),n("button",{on:{click:function(n){return t.downvote(e.id)}}},[t._v("Down Vote")])])})),n("hr"),t._l(t.bestvotedData,(function(e){return n("div",{key:e.id,staticClass:"lister2"},[n("span",{attrs:{id:"snipId2"}},[t._v(t._s(e.id))]),n("span",{attrs:{id:"snipTi2"}},[t._v(t._s(e.title))]),n("p",{attrs:{id:"snipP2"}},[t._v(t._s(e.content))]),n("button",{on:{click:function(n){return t.upvote(e.id)}}},[t._v("Up Vote")]),t._v(" "),n("button",{on:{click:function(n){return t.downvote(e.id)}}},[t._v("Down Vote")])])})),n("span",{staticClass:"tat"})],2)},r=[],c=n("bc3a"),p=n.n(c),l=n("1157"),u=n.n(l),d={name:"TestAxios",methods:{bringo:function(){var t=this;p.a.get("https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest").then((function(e){return t.snipets=e.data})),u()(".lister2").hide(),u()(".lister").show().catch((function(t){console.log("Something is not working"+t)}))},bestvoted:function(){var t=this;p.a.get("https://www.forverkliga.se/JavaScript/api/api-snippets.php?best").then((function(e){return t.bestvotedData=e.data})),u()(".lister2").show(),u()(".lister").hide().catch((function(t){console.log("Something is not working"+t)}))},upvote:function(t){p.a.post("https://www.forverkliga.se/JavaScript/api/api-snippets.php?upvote&id="+t).then((function(t){console.log("Success",t),u()(".tat").fadeIn().text("up-voted success!").delay(2e3).fadeOut()})).catch((function(t){console.log("Something is not working"+t)}))},downvote:function(t){p.a.post("https://www.forverkliga.se/JavaScript/api/api-snippets.php?downvote&id="+t).then((function(t){console.log("Success",t),u()(".tat").fadeIn().text("down-voted success!").delay(2e3).fadeOut()})).catch((function(t){console.log("Something is not working"+t)}))}},data:function(){return{snipets:null,bestvotedData:null}}},f=d,v=(n("45d4"),n("2877")),h=Object(v["a"])(f,a,r,!1,null,"adb36be6",null),b=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x"},[n("p",{staticStyle:{"font-weight":"bold","padding-top":"30px"}},[t._v(" Add new snippet ")]),n("div",{staticClass:"form-area"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"imputTi",placeholder:"Snippet's Title",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{id:"inputCo",placeholder:"Snippet's Content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),n("button",{attrs:{id:"btnAdd"},on:{click:t.Addo}},[t._v("Add snippet")]),n("p",{staticClass:"resulto",staticStyle:{"font-weight":"bold"}})])},w=[],m={name:"AddSnipets",data:function(){return{title:"",content:""}},methods:{Addo:function(){p.a.post("https://www.forverkliga.se/JavaScript/api/api-snippets.php",{add:"",title:this.title,content:this.content}).then((function(t){console.log(t),"success"==t.data.status&&u()(".resulto").text("Snippet added successfuly!").css({color:"#42b983"})})).catch((function(t){console.log(t)}))}}},_=m,y=(n("cba4"),Object(v["a"])(_,g,w,!1,null,"023ddb76",null)),S=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m"},[n("p",{staticStyle:{"font-weight":"bold","margin-top":"70px","padding-top":"30px"}},[t._v(" Delete snippet ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{id:"inputId",placeholder:"Snippet's Id",type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),n("button",{attrs:{id:"btndel"},on:{click:t.del}},[t._v("Delete snippet")]),n("p",{staticClass:"result1",staticStyle:{"font-weight":"bold"}})])},k=[],C={name:"DeleteComp",data:function(){return{id:""}},methods:{del:function(){p.a.post("https://www.forverkliga.se/JavaScript/api/api-snippets.php",{delete:"",id:this.id}).then((function(t){console.log(t),"success"==t.data.status&&u()(".result1").text("Snippet deleted successfuly!").css({color:"#42b983"})})).catch((function(t){console.log(t)}))}}},O=C,j=(n("461a"),Object(v["a"])(O,x,k,!1,null,"07f4cc3b",null)),A=j.exports,P={name:"App",components:{TestAxios:b,AddSnipets:S,DeleteComp:A}},D=P,T=(n("034f"),Object(v["a"])(D,o,s,!1,null,null,null)),J=T.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(J)}}).$mount("#app")},7192:function(t,e,n){},"85ec":function(t,e,n){},ac81:function(t,e,n){},bd31:function(t,e,n){},cba4:function(t,e,n){"use strict";var i=n("ac81"),o=n.n(i);o.a}});
//# sourceMappingURL=app.82b905da.js.map