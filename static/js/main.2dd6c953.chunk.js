(this["webpackJsonpper-site"]=this["webpackJsonpper-site"]||[]).push([[0],{30:function(e,t,A){},48:function(e,t,A){},49:function(e,t,A){},59:function(e,t,A){"use strict";A.r(t);var c=A(1),s=A.n(c),i=A(36),n=A.n(i),a=(A(48),A(8)),r=(A(49),A(30),A.p,A.p,A(2)),j=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),A=(t[0],t[1]);Object(c.useEffect)((function(){var e;A((e=2,Math.floor(Math.random()*Math.floor(e))))}),[]);return Object(r.jsx)("div",{className:"Page-body",children:Object(r.jsxs)("div",{className:"Page-content-container",children:[Object(r.jsxs)("div",{className:"Page-title-container",children:[Object(r.jsxs)("h1",{className:"Page-title",children:["DANIEL ",Object(r.jsx)("br",{})," DANIEL "]}),Object(r.jsxs)("h1",{className:"Page-title",children:["VEGERA ",Object(r.jsx)("br",{})," VEGERA "]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:"Front-end mobile and web developer."}),Object(r.jsx)("br",{}),Object(r.jsxs)("p",{children:["links => ","(",Object(r.jsx)("a",{className:"Page-link",href:"https://github.com/yungrazr",children:"github"}),", ",Object(r.jsx)("a",{className:"Page-link",href:"https://www.linkedin.com/in/daniel-vegera/",children:"linkedin"}),")"]}),Object(r.jsxs)("p",{children:["email => ","hello@dvegera.dev"]}),Object(r.jsx)("h1",{className:"Page-title2",children:"DANIEL VEGERA"})]})})},h=(A.p,A.p,function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),A=(t[0],t[1]);Object(c.useEffect)((function(){var e;A((e=2,Math.floor(Math.random()*Math.floor(e))))}),[]);return Object(r.jsx)("div",{className:"Page-body",children:Object(r.jsxs)("div",{className:"Page-content-container",children:[Object(r.jsx)("div",{className:"Page-title-container",children:Object(r.jsxs)("h1",{className:"Page-title",children:["WEB-SYNTH",Object(r.jsx)("br",{}),"WEB-SYNTH"]})}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:"A 3x oscillator polyphonic synthesizer using Web Audio API, written in React."}),Object(r.jsxs)("p",{children:["links => ","(",Object(r.jsx)("a",{className:"Page-link",href:"https://github.com/yungrazr/web-synth",children:"github"}),", ",Object(r.jsx)("a",{className:"Page-link",href:"https://dvegera.dev/web-synth/",children:"live"}),")"]}),Object(r.jsx)("h1",{className:"Page-title2",children:"WEB-SYNTH"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"Page-title-container",children:Object(r.jsxs)("h1",{className:"Page-title",children:["TAPTAP-TEMPO",Object(r.jsx)("br",{}),"TAPTAP-TEMPO"]})}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:"A simple BPM tapper and metronome application built using Flutter for web and mobile."}),Object(r.jsxs)("p",{children:["links => ","(",Object(r.jsx)("a",{className:"Page-link",href:"https://github.com/yungrazr/taptap-tempo",children:"github"}),", ",Object(r.jsx)("a",{className:"Page-link",href:"https://dvegera.dev/taptap-tempo/",children:"live"}),")"]}),Object(r.jsx)("h1",{className:"Page-title2",children:"TAPTAP-TEMPO"})]})})}),l=A(0),g=A(3),o=function(){var e=[],t=function(){function t(e,A,c){Object(l.a)(this,t),this.timeout=0,this.toRotate=A,this.el=e,this.loopNum=0,this.period=parseInt(c,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1}return Object(g.a)(t,[{key:"tick",value:function(){var t=this.loopNum%this.toRotate.length,A=this.toRotate[t];this.isDeleting?this.txt=A.substring(0,this.txt.length-1):this.txt=A.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var c=this,s=150-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==A?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),e.push(setTimeout((function(){c.tick()}),s))}}]),t}();return Object(c.useEffect)((function(){return function(){for(var e=document.getElementsByClassName("typewrite"),A=0;A<e.length;A++){var c=e[A].getAttribute("data-type"),s=e[A].getAttribute("data-period");c&&new t(e[A],JSON.parse(c),s)}}(),function(){for(var t in e)clearTimeout(t)}}),[]),Object(r.jsx)("div",{className:"Page-body",children:Object(r.jsx)("div",{className:"Page-content-container",children:Object(r.jsx)("div",{className:"Typewriter-container",children:Object(r.jsx)("h1",{href:"",className:"typewrite","data-period":"2000","data-type":'[ "Work in progress."]',children:Object(r.jsx)("span",{className:"wrap"})})})})})},b=A(5),d=A(4),x=A(16),B=A(42),O=A(39),I=A(43),p=A(41),u=A(44);function m(e){var t=Object(c.useRef)(),A=Object(x.d)().viewport,s=A.width,i=A.height;return Object(x.c)((function(){t.current.rotation.x=t.current.rotation.y+=.001})),Object(r.jsxs)("mesh",Object(b.a)(Object(b.a)({},e),{},{ref:t,children:[s<3?Object(r.jsx)("boxBufferGeometry",{args:[6*i,6*i,6*i]}):Object(r.jsx)("boxBufferGeometry",{args:[4*s,4*s,4*s]}),Object(r.jsx)("meshStandardMaterial",{color:"white"})]}))}function E(){var e=Object(c.useRef)(),t=Object(x.d)(),A=t.scene,s=t.gl,i=(t.size,t.camera),n=Object(c.useMemo)((function(){return new d.Vector2(512,512)}),[]);return Object(x.c)((function(){return e.current.render()}),1),Object(r.jsxs)("effectComposer",{ref:e,args:[s],children:[Object(r.jsx)("renderPass",{attachArray:"passes",scene:A,camera:i}),Object(r.jsx)("unrealBloomPass",{attachArray:"passes",args:[n,2,1,0]}),Object(r.jsx)("filmPass",{args:[.4,.2,100,!0],attachArray:"passes",renderToScreen:!0})]})}Object(x.b)({EffectComposer:p.a,FilmPass:B.a,RenderPass:O.a,GlitchPass:I.a,UnrealBloomPass:u.a});var w=function(){return Object(r.jsxs)(x.a,{camera:{fov:100,position:[0,0,1]},children:[Object(r.jsx)("directionalLight",{color:"yellow",intensity:1,position:[0,0,100]}),Object(r.jsx)(m,{position:[0,0,-20]}),Object(r.jsx)(E,{})]})},C=A(15),N=A(10),k="data:image/png;base64,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",R="data:image/png;base64,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";var f=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),A=t[0],s=t[1],i=["App",A&&"App--inverted"].filter(Boolean);return Object(r.jsx)(C.a,{basename:"/",children:Object(r.jsxs)("div",{className:i.join(" "),id:"App",children:[Object(r.jsx)(w,{classname:"Three-canvas"}),Object(r.jsxs)(N.c,{children:[Object(r.jsxs)(N.a,{path:"/about",children:[Object(r.jsxs)("div",{className:"App-header",children:[Object(r.jsx)("h1",{className:"App-category-title",children:Object(r.jsx)(C.b,{to:"/",children:"Home"})}),Object(r.jsx)("h1",{className:"App-category-title",children:Object(r.jsx)(C.b,{to:"/projects",children:"Projects"})}),Object(r.jsx)("h1",{className:"App-category-title-clicked",children:"About"}),Object(r.jsx)("div",{className:"App-invert",children:Object(r.jsx)("img",{src:A?k:R,onClick:function(){return s(!A)}})})]}),Object(r.jsx)("div",{className:"App-body",children:Object(r.jsx)(j,{})})]}),Object(r.jsxs)(N.a,{path:"/projects",children:[Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("h1",{className:"App-category-title",children:Object(r.jsx)(C.b,{to:"/",children:"Home"})}),Object(r.jsx)("h1",{className:"App-category-title-clicked",children:"Projects"}),Object(r.jsx)("h1",{className:"App-category-title",children:Object(r.jsx)(C.b,{to:"/about",children:"About"})}),Object(r.jsx)("div",{className:"App-invert",children:Object(r.jsx)("img",{src:A?k:R,onClick:function(){return s(!A)}})})]}),Object(r.jsx)("div",{className:"App-body",children:Object(r.jsx)(h,{})})]}),Object(r.jsxs)(N.a,{exact:!0,path:"/",children:[Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("h1",{className:"App-category-title-clicked",children:"Home"}),Object(r.jsx)("h1",{className:"App-category-title",children:Object(r.jsx)(C.b,{to:"/projects",children:"Projects"})}),Object(r.jsx)("h1",{className:"App-category-title",children:Object(r.jsx)(C.b,{to:"/about",children:"About"})}),Object(r.jsx)("div",{className:"App-invert",children:Object(r.jsx)("img",{src:A?k:R,onClick:function(){return s(!A)}})})]}),Object(r.jsx)("div",{className:"App-body",children:Object(r.jsx)(o,{})})]})]}),Object(r.jsx)("div",{className:"App-footer",children:Object(r.jsx)("h1",{className:"App-category-title",children:"\xa9 2021"})})]})})},P=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,60)).then((function(t){var A=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;A(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),P()}},[[59,1,2]]]);
//# sourceMappingURL=main.2dd6c953.chunk.js.map