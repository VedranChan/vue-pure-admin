import{i as X,I as R}from"./runtime-core.esm-bundler-f67957fc.js";import{i as D}from"./index-8fa82d75.js";import{t as M,g as Y}from"./scroll-0e2146e6.js";import{o as $,i as v,r as U}from"./style-d07f47fb.js";var P=/\s/;function V(t){for(var e=t.length;e--&&P.test(t.charAt(e)););return e}var j=/^\s+/;function K(t){return t&&t.slice(0,V(t)+1).replace(j,"")}var A=0/0,q=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,G=/^0o[0-7]+$/i,J=parseInt;function H(t){if(typeof t=="number")return t;if($(t))return A;if(v(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=v(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=K(t);var n=z.test(t);return n||G.test(t)?J(t.slice(2),n?2:8):q.test(t)?A:+t}var Q=function(){return U.Date.now()};const x=Q;var Z="Expected a function",tt=Math.max,et=Math.min;function nt(t,e,n){var i,r,u,s,o,a,l=0,f=!1,m=!1,b=!0;if(typeof t!="function")throw new TypeError(Z);e=H(e)||0,v(n)&&(f=!!n.leading,m="maxWait"in n,u=m?tt(H(n.maxWait)||0,e):u,b="trailing"in n?!!n.trailing:b);function h(c){var g=i,T=r;return i=r=void 0,l=c,s=t.apply(T,g),s}function y(c){return l=c,o=setTimeout(E,e),f?h(c):s}function I(c){var g=c-a,T=c-l,L=e-g;return m?et(L,u-T):L}function p(c){var g=c-a,T=c-l;return a===void 0||g>=e||g<0||m&&T>=u}function E(){var c=x();if(p(c))return w(c);o=setTimeout(E,I(c))}function w(c){return o=void 0,b&&i?h(c):(i=r=void 0,s)}function B(){o!==void 0&&clearTimeout(o),l=0,i=a=r=o=void 0}function F(){return o===void 0?s:w(x())}function S(){var c=x(),g=p(c);if(i=arguments,r=this,a=c,g){if(o===void 0)return y(a);if(m)return clearTimeout(o),o=setTimeout(E,e),h(a)}return o===void 0&&(o=setTimeout(E,e)),s}return S.cancel=B,S.flush=F,S}var it="Expected a function";function _(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(it);return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),nt(t,e,{leading:i,maxWait:e,trailing:r})}const ht=(t,e)=>{if(!D||!t||!e)return!1;const n=t.getBoundingClientRect();let i;return e instanceof Element?i=e.getBoundingClientRect():i={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right},W=t=>{let e=0,n=t;for(;n;)e+=n.offsetTop,n=n.offsetParent;return e},rt=(t,e)=>Math.abs(W(t)-W(e)),bt=t=>{let e,n;return t.type==="touchend"?(n=t.changedTouches[0].clientY,e=t.changedTouches[0].clientX):t.type.startsWith("touch")?(n=t.touches[0].clientY,e=t.touches[0].clientX):(n=t.clientY,e=t.clientX),{clientX:e,clientY:n}},d="ElInfiniteScroll",ot=50,ct=200,st=0,at={delay:{type:Number,default:ct},distance:{type:Number,default:st},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},N=(t,e)=>Object.entries(at).reduce((n,[i,r])=>{var u,s;const{type:o,default:a}=r,l=t.getAttribute(`infinite-scroll-${i}`);let f=(s=(u=e[l])!=null?u:l)!=null?s:a;return f=f==="false"?!1:f,f=o(f),n[i]=Number.isNaN(f)?a:f,n},{}),k=t=>{const{observer:e}=t[d];e&&(e.disconnect(),delete t[d].observer)},lt=(t,e)=>{const{container:n,containerEl:i,instance:r,observer:u,lastScrollTop:s}=t[d],{disabled:o,distance:a}=N(t,r),{clientHeight:l,scrollHeight:f,scrollTop:m}=i,b=m-s;if(t[d].lastScrollTop=m,u||o||b<0)return;let h=!1;if(n===t)h=f-(l+m)<=a;else{const{clientTop:y,scrollHeight:I}=t,p=rt(t,i);h=m+l>=p+y+I-a}h&&e.call(r)};function C(t,e){const{containerEl:n,instance:i}=t[d],{disabled:r}=N(t,i);r||n.clientHeight===0||(n.scrollHeight<=n.clientHeight?e.call(i):k(t))}const ft={async mounted(t,e){const{instance:n,value:i}=e;X(i)||M(d,"'v-infinite-scroll' binding value must be a function"),await R();const{delay:r,immediate:u}=N(t,n),s=Y(t,!0),o=s===window?document.documentElement:s,a=_(lt.bind(null,t,i),r);if(s){if(t[d]={instance:n,container:s,containerEl:o,delay:r,cb:i,onScroll:a,lastScrollTop:o.scrollTop},u){const l=new MutationObserver(_(C.bind(null,t,i),ot));t[d].observer=l,l.observe(t,{childList:!0,subtree:!0}),C(t,i)}s.addEventListener("scroll",a)}},unmounted(t){const{container:e,onScroll:n}=t[d];e==null||e.removeEventListener("scroll",n),k(t)},async updated(t){t[d]||await R();const{containerEl:e,cb:n,observer:i}=t[d];e.clientHeight&&i&&C(t,n)}},O=ft;O.install=t=>{t.directive("InfiniteScroll",O)};const Tt=O;export{Tt as E,nt as d,bt as g,ht as i,_ as t};
