import{m as r}from"./message-f30a3f13.js";import{t as p}from"./data-955e149f.js";import{D as t,a3 as a,F as o,B as n}from"./runtime-core.esm-bundler-f67957fc.js";import"./index-b73e8dcb.js";import"./vue.runtime.esm-bundler-15821c71.js";import"./runtime-dom.esm-bundler-27100288.js";import"./index-55aa1cbf.js";import"./style-d07f47fb.js";import"./index-8fa82d75.js";import"./index-2a665169.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";function $(){const i=[{label:"日期",prop:"date",cellRenderer:({row:e})=>t("div",{style:"display: flex; align-items: center"},[t(a("iconify-icon-online"),{icon:"ep:timer"},null),t("span",{style:"margin-left: 10px"},[e.date])])},{label:"姓名",prop:"name",cellRenderer:({row:e})=>t(a("el-popover"),{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:()=>t(o,null,[t("div",null,[n("name: "),e.name]),t("div",null,[n("address: "),e.address])]),reference:()=>t(a("el-tag"),null,{default:()=>[e.name]})})},{label:"地址",prop:"address"},{label:"操作",cellRenderer:({index:e,row:l})=>t(o,null,[t(a("el-button"),{size:"small",onClick:()=>s(e+1,l)},{default:()=>[n("Edit")]}),t(a("el-button"),{size:"small",type:"danger",onClick:()=>m(e+1,l)},{default:()=>[n("Delete")]})])}],s=(e,l)=>{r(`您编辑了第 ${e} 行，数据为：${JSON.stringify(l)}`,{type:"success"})},m=(e,l)=>{r(`您删除了第 ${e} 行，数据为：${JSON.stringify(l)}`)};return{columns:i,tableData:p}}export{$ as useColumns};
