import{d as h,y as g,b as o,i as w,c as _,e as s,w as e,f as t,C as l,u as n,g as d,E as k,bq as C,br as b,ac as p,m as y,h as f}from"./index-9df66b72.js";const x=f("div",{class:"card-header"},"组件方式判断权限",-1),A=f("div",{class:"card-header"},"函数方式判断权限",-1),B=f("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1),N=h({name:"PermissionButton"}),j=h({...N,setup(V){const c=g(()=>({width:"85vw",justifyContent:"start"}));return(z,D)=>{const m=o("el-tag"),a=o("el-button"),r=o("Auth"),i=o("el-card"),v=o("el-space"),u=w("auth");return _(),s(v,{direction:"vertical",size:"large"},{default:e(()=>[t(m,{style:l(n(c)),size:"large",effect:"dark"},{default:e(()=>[d(" 当前拥有的code列表："+k(n(C)()),1)]),_:1},8,["style"]),t(i,{shadow:"never",style:l(n(c))},{header:e(()=>[x]),default:e(()=>[t(r,{value:"btn_add"},{default:e(()=>[t(a,{type:"success"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_edit"]},{default:e(()=>[t(a,{type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})]),_:1}),t(r,{value:["btn_add","btn_edit","btn_delete"]},{default:e(()=>[t(a,{type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})]),_:1})]),_:1},8,["style"]),t(i,{shadow:"never",style:l(n(c))},{header:e(()=>[A]),default:e(()=>[n(b)("btn_add")?(_(),s(a,{key:0,type:"success"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})):p("",!0),n(b)(["btn_edit"])?(_(),s(a,{key:1,type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})):p("",!0),n(b)(["btn_add","btn_edit","btn_delete"])?(_(),s(a,{key:2,type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})):p("",!0)]),_:1},8,["style"]),t(i,{shadow:"never",style:l(n(c))},{header:e(()=>[B]),default:e(()=>[y((_(),s(a,{type:"success"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})),[[u,"btn_add"]]),y((_(),s(a,{type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})),[[u,["btn_edit"]]]),y((_(),s(a,{type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})),[[u,["btn_add","btn_edit","btn_delete"]]])]),_:1},8,["style"])]),_:1})}}});export{j as default};