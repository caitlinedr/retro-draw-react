(this["webpackJsonpretro-draw-react"]=this["webpackJsonpretro-draw-react"]||[]).push([[0],{12:function(e,t,l){"use strict";l.r(t);var r=l(0),a=l.n(r),c=l(5),n=l.n(c),o=l(3),i=function(){return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"Retro Draw"))},u=function(e){var t=e.color,l=e.isActive,r=e.handleClick,c=!1;return c=l?"cell active":"cell",a.a.createElement("div",{className:c,style:{backgroundColor:t},onClick:r})},s=["red","orange","yellow","green","blue","purple","white","black"];function f(){for(var e=[],t=0;t<64;t++)e.push({color:null});return e}var m=function(e){var t=e.activeColor,l=e.setActiveColor;return a.a.createElement("div",{className:"palette"},s.map((function(e,r){return a.a.createElement(u,{key:"palette-"+r,color:e,isActive:t===e,handleClick:function(){return l(e)}})})))},v=l(6),E=function(e){var t=e.activeColor,l=e.cellList,r=e.setCellList;return a.a.createElement("div",{className:"grid"},l.map((function(e,c){return a.a.createElement(u,{key:c,color:e.color,handleClick:function(){var e=Object(v.a)(l);e[c].color=t,r(e)}})})))},p=function(e){var t=e.activeColor,l=e.cellList,r=e.setCellList;return a.a.createElement("div",{className:"action-panel"},a.a.createElement("button",{onClick:function(){var e=f();r(e)}},"clear all"),a.a.createElement("button",{onClick:function(){var e=f();e.forEach((function(e){return e.color=t})),r(e)}},"fill all"),a.a.createElement("button",{onClick:function(){var e=f();l.forEach((function(l,r){l.color?e[r].color=l.color:e[r].color=t})),r(e)}},"fill empty"))},C=function(){var e=Object(r.useState)(s[0]),t=Object(o.a)(e,2),l=t[0],c=t[1],n=Object(r.useState)([]),u=Object(o.a)(n,2),v=u[0],C=u[1];function d(e){!function(e){localStorage.setItem("cellList",JSON.stringify(e))}(e),C(e)}return Object(r.useEffect)((function(){return C(function(){var e=JSON.parse(localStorage.getItem("cellList"));return e||f()}())}),[]),a.a.createElement("div",{className:"app"},a.a.createElement(i,null),a.a.createElement(m,{activeColor:l,setActiveColor:c}),a.a.createElement(E,{activeColor:l,cellList:v,setCellList:d}),a.a.createElement(p,{activeColor:l,cellList:v,setCellList:d}))};n.a.render(a.a.createElement(C,null),document.getElementById("app"))},7:function(e,t,l){e.exports=l(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.4bde5f81.chunk.js.map