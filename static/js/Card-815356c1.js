import{j as t,k as i,l as o,h as x,a as f,a3 as d,D as a,x as s,n as g,u as c,v as l,A as r,B as u,C as m}from"./runtime-core.esm-bundler-f67957fc.js";import{d as B}from"./more-2-fill-0341ae67.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const S={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-shop",viewBox:"0 0 16 16"},A=o("path",{fill:"currentColor",d:"M8 1a2.5 2.5 0 0 0-2.5 2.5V5h-2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2V3.5A2.5 2.5 0 0 0 8 1zm1.5 5v2h1V6H12v8H4V6h1.5v2h1V6h3zm0-1h-3V3.5a1.5 1.5 0 1 1 3 0V5z"},null,-1),N=[A];function j(e,n){return t(),i("svg",S,N)}const D={render:j},O={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-laptop",viewBox:"0 0 16 16"},E=o("path",{fill:"currentColor",d:"M2.5 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-11zm0-1h11V4h-11v7zM15 13H1v1h14v-1z"},null,-1),L=[E];function R(e,n){return t(),i("svg",O,L)}const T={render:R},q={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-service",viewBox:"0 0 16 16"},F=o("path",{fill:"currentColor",d:"M2.52 6.37a5.5 5.5 0 0 1 10.98.13v4c0 .05 0 .1-.02.15A4.5 4.5 0 0 1 9 14.7H8v-1h1a3.5 3.5 0 0 0 3.4-2.7h-1.9a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h1.93a4.5 4.5 0 0 0-8.86 0H5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-4c0-.04 0-.09.02-.13zM12.5 7H11v3h1.5V7zm-9 0v3H5V7H3.5z"},null,-1),G=[F];function J(e,n){return t(),i("svg",q,G)}const K={render:J},P={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-calendar",viewBox:"0 0 16 16"},Q=o("path",{fill:"currentColor",d:"M10 3H6V1.5H5V3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V1.5h-1V3zM5 5h1V4h4v1h1V4h2v2H3V4h2v1zM3 7h10v6H3V7z"},null,-1),U=[Q];function W(e,n){return t(),i("svg",P,U)}const X={render:W},Y={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-user-avatar",viewBox:"0 0 16 16"},Z=o("path",{fill:"currentColor",d:"M8 10.5c1.24 0 2.42.31 3.5.88v1.12h1v-1.14a.94.94 0 0 0-.49-.84 8.48 8.48 0 0 0-8.02 0 .94.94 0 0 0-.49.84v1.14h1v-1.12A7.47 7.47 0 0 1 8 10.5zM10.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"},null,-1),ee=o("path",{fill:"currentColor",d:"M2.5 1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11zm11 1v11h-11v-11h11z"},null,-1),te=[Z,ee];function oe(e,n){return t(),i("svg",Y,te)}const ce={render:oe},ne={class:"list-card-item_detail bg-bg_color"},ae={class:"list-card-item_detail--operation"},se={class:"list-card-item_detail--name text-text_color_primary"},de={class:"list-card-item_detail--desc text-text_color_regular"},ie=x({name:"ReCard"}),le=x({...ie,props:{product:{type:Object}},emits:["manage-product","delete-item"],setup(e,{emit:n}){const p=e,V=_=>{n("manage-product",_)},$=_=>{n("delete-item",_)},w=f(()=>["list-card-item",{"list-card-item__disabled":!p.product.isSetup}]),C=f(()=>["list-card-item_detail--logo",{"list-card-item_detail--logo__disabled":!p.product.isSetup}]);return(_,h)=>{const y=d("el-tag"),z=d("IconifyIconOffline"),v=d("el-dropdown-item"),k=d("el-dropdown-menu"),H=d("el-dropdown"),M=d("el-row");return t(),i("div",{class:g(c(w))},[o("div",ne,[a(M,{justify:"space-between"},{default:s(()=>[o("div",{class:g(c(C))},[e.product.type===1?(t(),l(c(D),{key:0})):r("",!0),e.product.type===2?(t(),l(c(X),{key:1})):r("",!0),e.product.type===3?(t(),l(c(K),{key:2})):r("",!0),e.product.type===4?(t(),l(c(ce),{key:3})):r("",!0),e.product.type===5?(t(),l(c(T),{key:4})):r("",!0)],2),o("div",ae,[a(y,{color:e.product.isSetup?"#00a870":"#eee",effect:"dark",class:"mx-1 list-card-item_detail--operation--tag"},{default:s(()=>[u(m(e.product.isSetup?"已启用":"已停用"),1)]),_:1},8,["color"]),a(H,{trigger:"click",disabled:!e.product.isSetup},{dropdown:s(()=>[a(k,{disabled:!e.product.isSetup},{default:s(()=>[a(v,{onClick:h[0]||(h[0]=b=>V(e.product))},{default:s(()=>[u(" 管理 ")]),_:1}),a(v,{onClick:h[1]||(h[1]=b=>$(e.product))},{default:s(()=>[u(" 删除 ")]),_:1})]),_:1},8,["disabled"])]),default:s(()=>[a(z,{icon:c(B),class:"text-[24px]"},null,8,["icon"])]),_:1},8,["disabled"])])]),_:1}),o("p",se,m(e.product.name),1),o("p",de,m(e.product.description),1)])],2)}}});const ue=I(le,[["__scopeId","data-v-d061c9a2"]]);export{ue as default};
