import{S as p}from"./sortable.esm-679e0872.js";import{d as c}from"./index-b73e8dcb.js";import{a as i}from"./data-926632d9.js";import{r as m,D as t,a3 as u,I as d}from"./runtime-core.esm-bundler-f67957fc.js";import"./vue.runtime.esm-bundler-15821c71.js";import"./runtime-dom.esm-bundler-27100288.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";function k(){const e=m(c(i,!0)),a=o=>{o.preventDefault(),d(()=>{const r=document.querySelector(".el-table__body-wrapper tbody");p.create(r,{animation:300,handle:".drag-btn",onEnd:({newIndex:n,oldIndex:l})=>{const s=e.value.splice(l,1)[0];e.value.splice(n,0,s)}})})};return{columns:[{label:"ID",prop:"id",cellRenderer:({row:o})=>t("div",{class:"flex items-center"},[t(u("iconify-icon-online"),{icon:"icon-park-outline:drag",class:"drag-btn cursor-grab",onMouseenter:r=>a(r)},null),t("p",{class:"ml-[16px]"},[o.id])])},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],dataList:e}}export{k as useColumns};
