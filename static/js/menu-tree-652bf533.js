import{d as b}from"./index-b73e8dcb.js";import{a as z,b as H,c as u,d as M}from"./index-062b6f7d.js";import{u as N}from"./hooks-860700ae.js";import{h,r as s,a as T,a3 as o,j as w,v as B,x as n,l,B as d,D as i,u as e,C as I}from"./runtime-core.esm-bundler-f67957fc.js";import"./vue.runtime.esm-bundler-15821c71.js";import"./runtime-dom.esm-bundler-27100288.js";import"./vue-i18n.runtime.esm-bundler-4810931d.js";import"./_commonjsHelpers-042e6b4d.js";import"./hot-82cb8178.js";import"./index-5342a498.js";import"./multiTags-b39db4d3.js";import"./index-721c50c2.js";import"./axios-c0bebe37.js";import"./vue-router-048c6826.js";import"./index-8fa82d75.js";import"./index-7b35ad4d.js";const D={width:24,height:24,body:'<path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8v2h5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H8v6h5v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H7a1 1 0 0 1-1-1V8H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6zm9 16h-4v2h4v-2zm0-8h-4v2h4v-2zM9 4H5v2h4V4z"/>'},P=D,R={class:"card-header"},q={class:"font-medium"},S=h({name:"MenuTree"}),te=h({...S,setup(j){const p=s(""),_=s({value:"uniqueId",children:"children"}),m=s(),f=b(z().wholeMenus,!0),c=T(()=>M(f)),v=H(c.value),x=t=>{m.value.filter(t)},V=(t,a)=>u(a.meta.title).indexOf(t)!==-1;return(t,a)=>{const k=o("el-link"),y=o("el-input"),C=o("el-tree-v2"),g=o("el-card");return w(),B(g,null,{header:n(()=>[l("div",R,[l("span",q,[d(" 菜单树结构（采用element-plus的 "),i(k,{href:"https://element-plus.gitee.io/zh-CN/component/tree-v2.html",target:"_blank",icon:e(N)(e(P)),style:{"font-size":"16px",margin:"0 5px 4px 0"}},{default:n(()=>[d(" Tree V2 ")]),_:1},8,["icon"]),d(" 组件并支持国际化） ")])])]),default:n(()=>[i(y,{class:"mb-4",modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=r=>p.value=r),placeholder:"请输入关键字查找",clearable:"",onInput:x},null,8,["modelValue"]),i(C,{ref_key:"treeRef",ref:m,data:e(c),props:_.value,"show-checkbox":"",height:500,"filter-method":V,"default-expanded-keys":e(v)},{default:n(({data:r})=>[l("span",null,I(e(u)(r.meta.title)),1)]),_:1},8,["data","props","default-expanded-keys"])]),_:1})}}});export{te as default};
