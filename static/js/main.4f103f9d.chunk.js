(this["webpackJsonpper-site"]=this["webpackJsonpper-site"]||[]).push([[0],{14:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(17),i=c.n(r),a=(c(25),c(20)),o=(c(26),c(14),c(1));var j=function(){return Object(o.jsx)("div",{className:"Page-body",children:"about"})};var l=function(){return Object(o.jsx)("div",{className:"Page-body",children:Object(o.jsxs)("div",{children:["projects",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"web-synth => ",Object(o.jsx)("a",{href:"https://yungrazr.github.io/web-synth/",children:"()"})]})})};function d(e){var t,c=document.getElementById("App").offsetWidth,n=document.getElementById("App").offsetHeight;e.preload=function(){t=e.loadImage("assets/cube.jpg")},e.setup=function(){e.createCanvas(c,n,e.WEBGL)},e.myCustomRedrawAccordingToNewPropsHandler=function(e){null!==e.rotation&&e.rotation*Math.PI/180},e.draw=function(){e.mouseX,window.innerWidth,e.mouseY,window.innerHeight;e.background(255),e.translate(0,0,-100),e.push(),e.rotateY(10*e.sin(.001*e.frameCount)),e.rotateX(10*e.sin(.001*e.frameCount)),console.log(e.rotation),e.texture(t),e.strokeWeight(0),e.stroke(255),e.box(window.innerWidth*e.sin(.001*e.frameCount),window.innerWidth*e.sin(.001*e.frameCount),window.innerWidth*e.sin(.001*e.frameCount)),e.pop()},e.windowResized=function(){c=document.getElementById("App").offsetWidth,n=document.getElementById("App").offsetHeight,e.resizeCanvas(c,n)}}var h=c(18),b=c.n(h),p=c(7),u=c(2);var m=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(o.jsx)(p.a,{basename:"/",children:Object(o.jsxs)("div",{className:"App",id:"App",style:c?{"-webkit-filter":"invert(100%)",filter:"invert(100%)"}:null,children:[Object(o.jsx)(b.a,{sketch:d}),Object(o.jsxs)(u.c,{children:[Object(o.jsxs)(u.a,{path:"/about",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h1",{className:"App-category-title",children:Object(o.jsx)(p.b,{to:"/",children:"Home"})}),Object(o.jsx)("h1",{className:"App-category-title",children:Object(o.jsx)(p.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("h1",{className:"App-category-title-clicked",children:"About"}),Object(o.jsx)("h1",{className:"App-invert",onClick:function(){return s(!c)},children:c?"Light":"Dark"})]}),Object(o.jsx)("div",{className:"App-body",children:Object(o.jsx)(j,{})})]}),Object(o.jsxs)(u.a,{path:"/projects",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h1",{className:"App-category-title",children:Object(o.jsx)(p.b,{to:"/",children:"Home"})}),Object(o.jsx)("h1",{className:"App-category-title-clicked",children:"Projects"}),Object(o.jsx)("h1",{className:"App-category-title",children:Object(o.jsx)(p.b,{to:"/about",children:"About"})}),Object(o.jsx)("h1",{className:"App-invert",onClick:function(){return s(!c)},children:c?"Light":"Dark"})]}),Object(o.jsx)("div",{className:"App-body",children:Object(o.jsx)(l,{})})]}),Object(o.jsxs)(u.a,{exact:!0,path:"/",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h1",{className:"App-category-title-clicked",children:"Home"}),Object(o.jsx)("h1",{className:"App-category-title",children:Object(o.jsx)(p.b,{to:"/projects",children:"Projects"})}),Object(o.jsx)("h1",{className:"App-category-title",children:Object(o.jsx)(p.b,{to:"/about",children:"About"})}),Object(o.jsx)("h1",{className:"App-invert",onClick:function(){return s(!c)},children:c?"Light":"Dark"})]}),Object(o.jsx)("div",{className:"App-body",children:Object(o.jsx)("div",{className:"Page-body",children:"work in progress"})})]})]}),Object(o.jsx)("footer",{className:"App-footer",children:Object(o.jsx)("h1",{className:"App-category-title",children:"\xa9 2021"})})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),x()}},[[33,1,2]]]);
//# sourceMappingURL=main.4f103f9d.chunk.js.map