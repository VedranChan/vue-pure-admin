import{b as a}from"./data-926632d9.js";import{r as i,J as p}from"./runtime-core.esm-bundler-f67957fc.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-b73e8dcb.js";import"./vue.runtime.esm-bundler-15821c71.js";import"./runtime-dom.esm-bundler-27100288.js";function w(n,l){const r=i([]),c=[{type:"selection",align:"left"},{label:"ID",prop:"id",width:80},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],s=p({pageSize:10,currentPage:1,layout:"prev, pager, next",total:a.length,background:!0,small:!0});return{columns:c,pagination:s,selectValue:r,tableDataEdit:a,onSure:()=>{n.value.blur()},onClear:()=>{const{clearSelection:e}=l.value.getTableRef();e()},removeTag:e=>{const{toggleRowSelection:t}=l.value.getTableRef();t(a.filter(o=>o.name===e)[0],!1)},handleSelectionChange:e=>{const t=[];e.forEach(o=>{t.push(o.name)}),r.value=t}}}export{w as useColumns};
