import{b as o}from"./data-ff839b93.js";import{r as u,a5 as i}from"./index-9df66b72.js";function h(r,l){const n=u([]),c=[{type:"selection",align:"left"},{label:"ID",prop:"id",width:80},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],s=i({pageSize:10,currentPage:1,layout:"prev, pager, next",total:o.length,background:!0,small:!0});return{columns:c,pagination:s,selectValue:n,tableDataEdit:o,onSure:()=>{r.value.blur()},onClear:()=>{const{clearSelection:e}=l.value.getTableRef();e()},removeTag:e=>{const{toggleRowSelection:a}=l.value.getTableRef();a(o.filter(t=>t.name===e)[0],!1)},handleSelectionChange:e=>{const a=[];e.forEach(t=>{a.push(t.name)}),n.value=a}}}export{h as useColumns};
