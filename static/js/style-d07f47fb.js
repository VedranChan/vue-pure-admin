import{Q as u,L as d,V as f,am as g}from"./runtime-core.esm-bundler-f67957fc.js";import{i as y,b as m}from"./index-8fa82d75.js";var j=typeof global=="object"&&global&&global.Object===Object&&global;const p=j;var S=typeof self=="object"&&self&&self.Object===Object&&self,O=p||S||Function("return this")();const T=O;var h=T.Symbol;const i=h;var l=Object.prototype,$=l.hasOwnProperty,N=l.toString,o=i?i.toStringTag:void 0;function w(t){var r=$.call(t,o),s=t[o];try{t[o]=void 0;var e=!0}catch{}var n=N.call(t);return e&&(r?t[o]=s:delete t[o]),n}var C=Object.prototype,E=C.toString;function L(t){return E.call(t)}var P="[object Null]",k="[object Undefined]",c=i?i.toStringTag:void 0;function A(t){return t==null?t===void 0?k:P:c&&c in Object(t)?w(t):L(t)}function G(t){return t!=null&&typeof t=="object"}var U="[object Symbol]";function Q(t){return typeof t=="symbol"||G(t)&&A(t)==U}function R(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}function x(t){return t==null}const _=t=>t===void 0,q=t=>!t&&t!==0||u(t)&&t.length===0||d(t)&&!Object.keys(t).length,v=t=>typeof Element>"u"?!1:t instanceof Element,B=t=>x(t),F=t=>f(t)?!Number.isNaN(Number(t)):!1,b=(t="")=>t.split(" ").filter(r=>!!r.trim()),D=(t,r)=>{if(!t||!r)return!1;if(r.includes(" "))throw new Error("className should not contain space.");return t.classList.contains(r)},H=(t,r)=>{!t||!r.trim()||t.classList.add(...b(r))},I=(t,r)=>{!t||!r.trim()||t.classList.remove(...b(r))},J=(t,r)=>{var s;if(!y||!t||!r)return"";let e=g(r);e==="float"&&(e="cssFloat");try{const n=t.style[e];if(n)return n;const a=(s=document.defaultView)==null?void 0:s.getComputedStyle(t,"");return a?a[e]:""}catch{return t.style[e]}};function K(t,r="px"){if(!t)return"";if(m(t)||F(t))return`${t}${r}`;if(f(t))return t}export{i as S,G as a,A as b,K as c,v as d,x as e,p as f,q as g,_ as h,R as i,D as j,H as k,I as l,J as m,B as n,Q as o,T as r};
