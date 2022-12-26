import{p as Q}from"./propTypes-d4134fbf.js";import{n as Kt,S as Et,g as Jt}from"./index-b73e8dcb.js";import{d as Yt}from"./refresh-right-6177e75c.js";import{h as jt,r as Bt,a as pt,w as $t,D as L,y as Qt,a6 as Gt,u as U,a3 as qt,F as Wt,I as Xt}from"./runtime-core.esm-bundler-f67957fc.js";var Y={},Zt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},It={},M={};let dt;const xt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};M.getSymbolTotalCodewords=function(e){return xt[e]};M.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};M.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');dt=e};M.isKanjiModeEnabled=function(){return typeof dt<"u"};M.toSJIS=function(e){return dt(e)};var Z={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+i)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,o){if(t.isValid(r))return r;try{return e(r)}catch{return o}}})(Z);function St(){this.buffer=[],this.length=0}St.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let i=0;i<e;i++)this.putBit((t>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var te=St;function j(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}j.prototype.set=function(t,e,i,r){const o=t*this.size+e;this.data[o]=i,r&&(this.reservedBit[o]=!0)};j.prototype.get=function(t,e){return this.data[t*this.size+e]};j.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i};j.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var ee=j,Nt={};(function(t){const e=M.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=e(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,c=[n-7];for(let a=1;a<o-1;a++)c[a]=c[a-1]-s;return c.push(6),c.reverse()},t.getPositions=function(r){const o=[],n=t.getRowColCoords(r),s=n.length;for(let c=0;c<s;c++)for(let a=0;a<s;a++)c===0&&a===0||c===0&&a===s-1||c===s-1&&a===0||o.push([n[c],n[a]]);return o}})(Nt);var Mt={};const ne=M.getSymbolSize,bt=7;Mt.getPositions=function(e){const i=ne(e);return[[0,0],[i-bt,0],[0,i-bt]]};var Pt={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const n=o.size;let s=0,c=0,a=0,f=null,d=null;for(let p=0;p<n;p++){c=a=0,f=d=null;for(let C=0;C<n;C++){let w=o.get(p,C);w===f?c++:(c>=5&&(s+=e.N1+(c-5)),f=w,c=1),w=o.get(C,p),w===d?a++:(a>=5&&(s+=e.N1+(a-5)),d=w,a=1)}c>=5&&(s+=e.N1+(c-5)),a>=5&&(s+=e.N1+(a-5))}return s},t.getPenaltyN2=function(o){const n=o.size;let s=0;for(let c=0;c<n-1;c++)for(let a=0;a<n-1;a++){const f=o.get(c,a)+o.get(c,a+1)+o.get(c+1,a)+o.get(c+1,a+1);(f===4||f===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const n=o.size;let s=0,c=0,a=0;for(let f=0;f<n;f++){c=a=0;for(let d=0;d<n;d++)c=c<<1&2047|o.get(f,d),d>=10&&(c===1488||c===93)&&s++,a=a<<1&2047|o.get(d,f),d>=10&&(a===1488||a===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let a=0;a<s;a++)n+=o.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*e.N4};function i(r,o,n){switch(r){case t.Patterns.PATTERN000:return(o+n)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return n%3===0;case t.Patterns.PATTERN011:return(o+n)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case t.Patterns.PATTERN101:return o*n%2+o*n%3===0;case t.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case t.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(o,n){const s=n.size;for(let c=0;c<s;c++)for(let a=0;a<s;a++)n.isReserved(a,c)||n.xor(a,c,i(o,a,c))},t.getBestMask=function(o,n){const s=Object.keys(t.Patterns).length;let c=0,a=1/0;for(let f=0;f<s;f++){n(f),t.applyMask(f,o);const d=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(f,o),d<a&&(a=d,c=f)}return c}})(Pt);var x={};const v=Z,G=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];x.getBlocksCount=function(e,i){switch(i){case v.L:return G[(e-1)*4+0];case v.M:return G[(e-1)*4+1];case v.Q:return G[(e-1)*4+2];case v.H:return G[(e-1)*4+3];default:return}};x.getTotalCodewordsCount=function(e,i){switch(i){case v.L:return q[(e-1)*4+0];case v.M:return q[(e-1)*4+1];case v.Q:return q[(e-1)*4+2];case v.H:return q[(e-1)*4+3];default:return}};var Rt={},tt={};const K=new Uint8Array(512),W=new Uint8Array(256);(function(){let e=1;for(let i=0;i<255;i++)K[i]=e,W[e]=i,e<<=1,e&256&&(e^=285);for(let i=255;i<512;i++)K[i]=K[i-255]})();tt.log=function(e){if(e<1)throw new Error("log("+e+")");return W[e]};tt.exp=function(e){return K[e]};tt.mul=function(e,i){return e===0||i===0?0:K[W[e]+W[i]]};(function(t){const e=tt;t.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let c=0;c<o.length;c++)n[s+c]^=e.mul(r[s],o[c]);return n},t.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let a=0;a<o.length;a++)n[a]^=e.mul(o[a],s);let c=0;for(;c<n.length&&n[c]===0;)c++;n=n.slice(c)}return n},t.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=t.mul(o,new Uint8Array([1,e.exp(n)]));return o}})(Rt);const Lt=Rt;function gt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}gt.prototype.initialize=function(e){this.degree=e,this.genPoly=Lt.generateECPolynomial(this.degree)};gt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(e.length+this.degree);i.set(e);const r=Lt.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var oe=gt,vt={},D={},ht={};ht.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var P={};const Dt="[0-9]+",re="[A-Z $%*+\\-./:]+";let J="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";J=J.replace(/u/g,"\\u");const ie="(?:(?![A-Z0-9 $%*+\\-./:]|"+J+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(J,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(ie,"g");P.NUMERIC=new RegExp(Dt,"g");P.ALPHANUMERIC=new RegExp(re,"g");const se=new RegExp("^"+J+"$"),ae=new RegExp("^"+Dt+"$"),ce=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(e){return se.test(e)};P.testNumeric=function(e){return ae.test(e)};P.testAlphanumeric=function(e){return ce.test(e)};(function(t){const e=ht,i=P;t.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return i.testNumeric(n)?t.NUMERIC:i.testAlphanumeric(n)?t.ALPHANUMERIC:i.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(n,s){if(t.isValid(n))return n;try{return r(n)}catch{return s}}})(D);(function(t){const e=M,i=x,r=Z,o=D,n=ht,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,c=e.getBCHDigit(s);function a(C,w,y){for(let u=1;u<=40;u++)if(w<=t.getCapacity(u,y,C))return u}function f(C,w){return o.getCharCountIndicator(C,w)+4}function d(C,w){let y=0;return C.forEach(function(u){const E=f(u.mode,w);y+=E+u.getBitsLength()}),y}function p(C,w){for(let y=1;y<=40;y++)if(d(C,y)<=t.getCapacity(y,w,o.MIXED))return y}t.from=function(w,y){return n.isValid(w)?parseInt(w,10):y},t.getCapacity=function(w,y,u){if(!n.isValid(w))throw new Error("Invalid QR Code version");typeof u>"u"&&(u=o.BYTE);const E=e.getSymbolTotalCodewords(w),l=i.getTotalCodewordsCount(w,y),m=(E-l)*8;if(u===o.MIXED)return m;const h=m-f(u,w);switch(u){case o.NUMERIC:return Math.floor(h/10*3);case o.ALPHANUMERIC:return Math.floor(h/11*2);case o.KANJI:return Math.floor(h/13);case o.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(w,y){let u;const E=r.from(y,r.M);if(Array.isArray(w)){if(w.length>1)return p(w,E);if(w.length===0)return 1;u=w[0]}else u=w;return a(u.mode,u.getLength(),E)},t.getEncodedBits=function(w){if(!n.isValid(w)||w<7)throw new Error("Invalid QR Code version");let y=w<<12;for(;e.getBCHDigit(y)-c>=0;)y^=s<<e.getBCHDigit(y)-c;return w<<12|y}})(vt);var Ut={};const at=M,_t=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,ue=1<<14|1<<12|1<<10|1<<4|1<<1,At=at.getBCHDigit(_t);Ut.getEncodedBits=function(e,i){const r=e.bit<<3|i;let o=r<<10;for(;at.getBCHDigit(o)-At>=0;)o^=_t<<at.getBCHDigit(o)-At;return(r<<10|o)^ue};var Ft={};const le=D;function F(t){this.mode=le.NUMERIC,this.data=t.toString()}F.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),e.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),e.put(o,n*3+1))};var fe=F;const de=D,nt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function k(t){this.mode=de.ALPHANUMERIC,this.data=t}k.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(e){let i;for(i=0;i+2<=this.data.length;i+=2){let r=nt.indexOf(this.data[i])*45;r+=nt.indexOf(this.data[i+1]),e.put(r,11)}this.data.length%2&&e.put(nt.indexOf(this.data[i]),6)};var ge=k,he=function(e){for(var i=[],r=e.length,o=0;o<r;o++){var n=e.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const we=he,me=D;function z(t){this.mode=me.BYTE,typeof t=="string"&&(t=we(t)),this.data=new Uint8Array(t)}z.getBitsLength=function(e){return e*8};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)};var Ce=z;const ye=D,Ee=M;function H(t){this.mode=ye.KANJI,this.data=t}H.getBitsLength=function(e){return e*13};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=Ee.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),t.put(i,13)}};var Be=H,ct={},pe={get exports(){return ct},set exports(t){ct=t}};(function(t){var e={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var c=e.PriorityQueue.make();c.push(r,0);for(var a,f,d,p,C,w,y,u,E;!c.empty();){a=c.pop(),f=a.value,p=a.cost,C=i[f]||{};for(d in C)C.hasOwnProperty(d)&&(w=C[d],y=p+w,u=s[d],E=typeof s[d]>"u",(E||u>y)&&(s[d]=y,c.push(d,y),n[d]=f))}if(typeof o<"u"&&typeof s[o]>"u"){var l=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(l)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=e.single_source_shortest_paths(i,r,o);return e.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=e.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(pe);(function(t){const e=D,i=fe,r=ge,o=Ce,n=Be,s=P,c=M,a=ct;function f(l){return unescape(encodeURIComponent(l)).length}function d(l,m,h){const g=[];let B;for(;(B=l.exec(h))!==null;)g.push({data:B[0],index:B.index,mode:m,length:B[0].length});return g}function p(l){const m=d(s.NUMERIC,e.NUMERIC,l),h=d(s.ALPHANUMERIC,e.ALPHANUMERIC,l);let g,B;return c.isKanjiModeEnabled()?(g=d(s.BYTE,e.BYTE,l),B=d(s.KANJI,e.KANJI,l)):(g=d(s.BYTE_KANJI,e.BYTE,l),B=[]),m.concat(h,g,B).sort(function(A,N){return A.index-N.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function C(l,m){switch(m){case e.NUMERIC:return i.getBitsLength(l);case e.ALPHANUMERIC:return r.getBitsLength(l);case e.KANJI:return n.getBitsLength(l);case e.BYTE:return o.getBitsLength(l)}}function w(l){return l.reduce(function(m,h){const g=m.length-1>=0?m[m.length-1]:null;return g&&g.mode===h.mode?(m[m.length-1].data+=h.data,m):(m.push(h),m)},[])}function y(l){const m=[];for(let h=0;h<l.length;h++){const g=l[h];switch(g.mode){case e.NUMERIC:m.push([g,{data:g.data,mode:e.ALPHANUMERIC,length:g.length},{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.ALPHANUMERIC:m.push([g,{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.KANJI:m.push([g,{data:g.data,mode:e.BYTE,length:f(g.data)}]);break;case e.BYTE:m.push([{data:g.data,mode:e.BYTE,length:f(g.data)}])}}return m}function u(l,m){const h={},g={start:{}};let B=["start"];for(let b=0;b<l.length;b++){const A=l[b],N=[];for(let S=0;S<A.length;S++){const I=A[S],R=""+b+S;N.push(R),h[R]={node:I,lastCount:0},g[R]={};for(let _=0;_<B.length;_++){const T=B[_];h[T]&&h[T].node.mode===I.mode?(g[T][R]=C(h[T].lastCount+I.length,I.mode)-C(h[T].lastCount,I.mode),h[T].lastCount+=I.length):(h[T]&&(h[T].lastCount=I.length),g[T][R]=C(I.length,I.mode)+4+e.getCharCountIndicator(I.mode,m))}}B=N}for(let b=0;b<B.length;b++)g[B[b]].end=0;return{map:g,table:h}}function E(l,m){let h;const g=e.getBestModeForData(l);if(h=e.from(m,g),h!==e.BYTE&&h.bit<g.bit)throw new Error('"'+l+'" cannot be encoded with mode '+e.toString(h)+`.
 Suggested mode is: `+e.toString(g));switch(h===e.KANJI&&!c.isKanjiModeEnabled()&&(h=e.BYTE),h){case e.NUMERIC:return new i(l);case e.ALPHANUMERIC:return new r(l);case e.KANJI:return new n(l);case e.BYTE:return new o(l)}}t.fromArray=function(m){return m.reduce(function(h,g){return typeof g=="string"?h.push(E(g,null)):g.data&&h.push(E(g.data,g.mode)),h},[])},t.fromString=function(m,h){const g=p(m,c.isKanjiModeEnabled()),B=y(g),b=u(B,h),A=a.find_path(b.map,"start","end"),N=[];for(let S=1;S<A.length-1;S++)N.push(b.table[A[S]].node);return t.fromArray(w(N))},t.rawSplit=function(m){return t.fromArray(p(m,c.isKanjiModeEnabled()))}})(Ft);const et=M,ot=Z,be=te,Ae=ee,Te=Nt,Ie=Mt,ut=Pt,lt=x,Se=oe,X=vt,Ne=Ut,Me=D,rt=Ft;function Pe(t,e){const i=t.size,r=Ie.getPositions(e);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let c=-1;c<=7;c++)if(!(n+c<=-1||i<=n+c))for(let a=-1;a<=7;a++)s+a<=-1||i<=s+a||(c>=0&&c<=6&&(a===0||a===6)||a>=0&&a<=6&&(c===0||c===6)||c>=2&&c<=4&&a>=2&&a<=4?t.set(n+c,s+a,!0,!0):t.set(n+c,s+a,!1,!0))}}function Re(t){const e=t.size;for(let i=8;i<e-8;i++){const r=i%2===0;t.set(i,6,r,!0),t.set(6,i,r,!0)}}function Le(t,e){const i=Te.getPositions(e);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?t.set(o+s,n+c,!0,!0):t.set(o+s,n+c,!1,!0)}}function ve(t,e){const i=t.size,r=X.getEncodedBits(e);let o,n,s;for(let c=0;c<18;c++)o=Math.floor(c/3),n=c%3+i-8-3,s=(r>>c&1)===1,t.set(o,n,s,!0),t.set(n,o,s,!0)}function it(t,e,i){const r=t.size,o=Ne.getEncodedBits(e,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?t.set(n,8,s,!0):n<8?t.set(n+1,8,s,!0):t.set(r-15+n,8,s,!0),n<8?t.set(8,r-n-1,s,!0):n<9?t.set(8,15-n-1+1,s,!0):t.set(8,15-n-1,s,!0);t.set(r-8,8,1,!0)}function De(t,e){const i=t.size;let r=-1,o=i-1,n=7,s=0;for(let c=i-1;c>0;c-=2)for(c===6&&c--;;){for(let a=0;a<2;a++)if(!t.isReserved(o,c-a)){let f=!1;s<e.length&&(f=(e[s]>>>n&1)===1),t.set(o,c-a,f),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Ue(t,e,i){const r=new be;i.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),Me.getCharCountIndicator(a.mode,t)),a.write(r)});const o=et.getSymbolTotalCodewords(t),n=lt.getTotalCodewordsCount(t,e),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const c=(s-r.getLengthInBits())/8;for(let a=0;a<c;a++)r.put(a%2?17:236,8);return _e(r,t,e)}function _e(t,e,i){const r=et.getSymbolTotalCodewords(e),o=lt.getTotalCodewordsCount(e,i),n=r-o,s=lt.getBlocksCount(e,i),c=r%s,a=s-c,f=Math.floor(r/s),d=Math.floor(n/s),p=d+1,C=f-d,w=new Se(C);let y=0;const u=new Array(s),E=new Array(s);let l=0;const m=new Uint8Array(t.buffer);for(let A=0;A<s;A++){const N=A<a?d:p;u[A]=m.slice(y,y+N),E[A]=w.encode(u[A]),y+=N,l=Math.max(l,N)}const h=new Uint8Array(r);let g=0,B,b;for(B=0;B<l;B++)for(b=0;b<s;b++)B<u[b].length&&(h[g++]=u[b][B]);for(B=0;B<C;B++)for(b=0;b<s;b++)h[g++]=E[b][B];return h}function Fe(t,e,i,r){let o;if(Array.isArray(t))o=rt.fromArray(t);else if(typeof t=="string"){let f=e;if(!f){const d=rt.rawSplit(t);f=X.getBestVersionForData(d,i)}o=rt.fromString(t,f||40)}else throw new Error("Invalid data");const n=X.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=n;else if(e<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Ue(e,i,o),c=et.getSymbolSize(e),a=new Ae(c);return Pe(a,e),Re(a),Le(a,e),it(a,i,0),e>=7&&ve(a,e),De(a,s),isNaN(r)&&(r=ut.getBestMask(a,it.bind(null,a,i))),ut.applyMask(r,a),it(a,i,r),{modules:a,version:e,errorCorrectionLevel:i,maskPattern:r,segments:o}}It.create=function(e,i){if(typeof e>"u"||e==="")throw new Error("No input text");let r=ot.M,o,n;return typeof i<"u"&&(r=ot.from(i.errorCorrectionLevel,ot.M),o=X.from(i.version),n=ut.from(i.maskPattern),i.toSJISFunc&&et.setToSJISFunction(i.toSJISFunc)),Fe(e,o,r,n)};var kt={},wt={};(function(t){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},t.getImageWidth=function(r,o){const n=t.getScale(r,o);return Math.floor((r+o.margin*2)*n)},t.qrToImageData=function(r,o,n){const s=o.modules.size,c=o.modules.data,a=t.getScale(s,n),f=Math.floor((s+n.margin*2)*a),d=n.margin*a,p=[n.color.light,n.color.dark];for(let C=0;C<f;C++)for(let w=0;w<f;w++){let y=(C*f+w)*4,u=n.color.light;if(C>=d&&w>=d&&C<f-d&&w<f-d){const E=Math.floor((C-d)/a),l=Math.floor((w-d)/a);u=p[c[E*s+l]?1:0]}r[y++]=u.r,r[y++]=u.g,r[y++]=u.b,r[y]=u.a}}})(wt);(function(t){const e=wt;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(n,s,c){let a=c,f=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(f=r()),a=e.getOptions(a);const d=e.getImageWidth(n.modules.size,a),p=f.getContext("2d"),C=p.createImageData(d,d);return e.qrToImageData(C.data,n,a),i(p,f,d),p.putImageData(C,0,0),f},t.renderToDataURL=function(n,s,c){let a=c;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const f=t.render(n,s,a),d=a.type||"image/png",p=a.rendererOpts||{};return f.toDataURL(d,p.quality)}})(kt);var zt={};const ke=wt;function Tt(t,e){const i=t.a/255,r=e+'="'+t.hex+'"';return i<1?r+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function st(t,e,i){let r=t+e;return typeof i<"u"&&(r+=" "+i),r}function ze(t,e,i){let r="",o=0,n=!1,s=0;for(let c=0;c<t.length;c++){const a=Math.floor(c%e),f=Math.floor(c/e);!a&&!n&&(n=!0),t[c]?(s++,c>0&&a>0&&t[c-1]||(r+=n?st("M",a+i,.5+f+i):st("m",o,0),o=0,n=!1),a+1<e&&t[c+1]||(r+=st("h",s),s=0)):o++}return r}zt.render=function(e,i,r){const o=ke.getOptions(i),n=e.modules.size,s=e.modules.data,c=n+o.margin*2,a=o.color.light.a?"<path "+Tt(o.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",f="<path "+Tt(o.color.dark,"stroke")+' d="'+ze(s,n,o.margin)+'"/>',d='viewBox="0 0 '+c+" "+c+'"',C='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+a+f+`</svg>
`;return typeof r=="function"&&r(null,C),C};const He=Zt,ft=It,Ht=kt,Ve=zt;function mt(t,e,i,r,o){const n=[].slice.call(arguments,1),s=n.length,c=typeof n[s-1]=="function";if(!c&&!He())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=e,e=r=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=e,e=r=void 0):s===2&&!e.getContext&&(r=i,i=e,e=void 0),new Promise(function(a,f){try{const d=ft.create(i,r);a(t(d,e,r))}catch(d){f(d)}})}try{const a=ft.create(i,r);o(null,t(a,e,r))}catch(a){o(a)}}Y.create=ft.create;Y.toCanvas=mt.bind(null,Ht.render);Y.toDataURL=mt.bind(null,Ht.renderToDataURL);Y.toString=mt.bind(null,function(t,e,i){return Ve.render(t,i)});const Oe={tag:Q.string.validate(t=>["canvas","img"].includes(t)).def("canvas"),text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:Q.number.def(200),logo:{type:[String,Object],default:()=>""},disabled:Q.bool.def(!1),disabledText:Q.string.def("")},Ke=jt({name:"ReQrcode",props:Oe,emits:["done","click","disabled-click"],setup(t,{emit:e}){const{toCanvas:i,toDataURL:r}=Y,o=Bt(!0),n=Bt(null),s=pt(()=>String(t.text)),c=pt(()=>({width:t.width+"px",height:t.width+"px"})),a=async()=>{await Xt();const u=Kt(t.options||{});if(t.tag==="canvas"){u.errorCorrectionLevel=u.errorCorrectionLevel||p(U(s));const E=await d(U(s),u);u.scale=t.width===0?void 0:t.width/E*4;const l=await i(U(n),U(s),u);if(t.logo){const m=await f(l);e("done",m),o.value=!1}else e("done",l.toDataURL()),o.value=!1}else{const E=await r(s.value,{errorCorrectionLevel:"H",width:t.width,...u});U(n).src=E,e("done",E),o.value=!1}};$t(()=>s.value,u=>{u&&a()},{deep:!0,immediate:!0});const f=u=>{const E=u.width,l=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},Et(t.logo)?{}:t.logo),{logoSize:m=.15,bgColor:h="#ffffff",borderSize:g=.05,crossOrigin:B="anonymous",borderRadius:b=8,logoRadius:A=0}=l,N=Et(t.logo)?t.logo:t.logo.src,S=E*m,I=E*(1-m)/2,R=E*(m+g),_=E*(1-m-g)/2,T=u.getContext("2d");if(!T)return;C(T)(_,_,R,R,b),T.fillStyle=h,T.fill();const V=new Image;(B||A)&&V.setAttribute("crossOrigin",B),V.src=N;const Vt=O=>{T.drawImage(O,I,I,S,S)},Ot=O=>{const $=document.createElement("canvas");$.width=I+S,$.height=I+S;const Ct=$.getContext("2d");if(!Ct||!T||(Ct.drawImage(O,I,I,S,S),C(T)(I,I,S,S,A),!T))return;const yt=T.createPattern($,"no-repeat");yt&&(T.fillStyle=yt,T.fill())};return new Promise(O=>{V.onload=()=>{A?Ot(V):Vt(V),O(u.toDataURL())}})},d=async(u,E)=>{const l=document.createElement("canvas");return await i(l,u,E),l.width},p=u=>u.length>36?"M":u.length>16?"Q":"H",C=u=>(E,l,m,h,g)=>{const B=Math.min(m,h);return g>B/2&&(g=B/2),u.beginPath(),u.moveTo(E+g,l),u.arcTo(E+m,l,E+m,l+h,g),u.arcTo(E+m,l+h,E,l+h,g),u.arcTo(E,l+h,E,l,g),u.arcTo(E,l,E+m,l,g),u.closePath(),u},w=()=>{e("click")},y=()=>{e("disabled-click")};return()=>L(Wt,null,[Qt(L("div",{class:"qrcode relative inline-block",style:U(c)},[t.tag==="canvas"?L("canvas",{ref:n,onClick:w},null):L("img",{ref:n,onClick:w},null),t.disabled&&L("div",{class:"qrcode--disabled absolute top-0 left-0 flex w-full h-full items-center justify-center",onClick:y},[L("div",{class:"absolute top-[50%] left-[50%] font-bold"},[L(qt("iconify-icon-offline"),{class:"cursor-pointer",icon:Yt,width:"30",color:"var(--el-color-primary)"},null),L("div",null,[t.disabledText])])])]),[[Gt("loading"),U(o)]])])}}),Qe=Jt(Ke);export{Qe as R};
