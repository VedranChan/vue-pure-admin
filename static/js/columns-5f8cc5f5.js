import{r as n,G as _,y as i,f as t,m as r,aa as c,b2 as I,b as f,as as M}from"./index-9df66b72.js";import{b as O}from"./data-ff839b93.js";import{m as S}from"./message-56e2419f.js";import{d as V}from"./edit-pen-37b5ced2.js";import{d as j}from"./check-3815600c.js";function N(){const l=n({}),u=n({}),s=n(-1),v=n(_(O,!0)),p=i(()=>e=>{var a;return(a=l.value[e])==null?void 0:a.value}),o=i(()=>e=>{var a;return(a=u.value[e])==null?void 0:a.editing}),m=i(()=>(e,a=!1)=>["cursor-pointer","ml-2","transition","delay-100",a?["hover:scale-110","hover:text-red-500"]:o.value(e)&&["scale-150","text-red-500"]]),b=[{label:"ID（可编辑）",prop:"id",cellRenderer:({row:e,index:a})=>t("div",{class:"flex-bc w-full h-[32px]",onMouseenter:()=>s.value=a,onMouseleave:()=>d(a)},[r(t("p",null,[e.id]),[[c,!o.value(a)]]),t(I,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[r(t(f("el-input"),{modelValue:p.value(a),onInput:C=>h(C,a)},null),[[c,o.value(a)]])]}),r(t(f("iconify-icon-offline"),{icon:j,class:m.value(a),onClick:()=>y(a)},null),[[c,o.value(a)]]),r(t(f("iconify-icon-offline"),{icon:V,class:m.value(a,!0),onClick:()=>g(e,a)},null),[[c,s.value===a&&!o.value(a)]])])},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];function g({id:e},a){l.value[a]=Object.assign({},l.value[a],{value:e}),u.value[a]=Object.assign({},u.value[a],{editing:!0})}function d(e){var a;(a=l.value[e])!=null&&a.value?s.value=e:s.value=-1}function h(e,a){l.value[a].value=e}function y(e){v.value[e].id=l.value[e].value,S(`您编辑了第 ${e+1} 行，编辑后数据为：${JSON.stringify(v.value[e])}`,{type:"success"}),u.value[e]=Object.assign({},u.value[e],{editing:!1}),M().then(()=>l.value[e].value=null)}return{columns:b,dataList:v}}export{N as useColumns};
