import{m as l}from"./message-f30a3f13.js";import{b as e}from"./data-926632d9.js";import{r as m,J as s}from"./runtime-core.esm-bundler-f67957fc.js";import"./index-b73e8dcb.js";import"./vue.runtime.esm-bundler-15821c71.js";import"./runtime-dom.esm-bundler-27100288.js";import"./index-55aa1cbf.js";import"./style-d07f47fb.js";import"./index-8fa82d75.js";import"./index-2a665169.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";function x(o){const t=m(""),a=[{label:"ID",prop:"id",width:80},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],p=s({pageSize:5,currentPage:1,layout:"prev, pager, next",total:e.length,background:!0,small:!0});function i({row:{name:r}}){return{cursor:"pointer",background:r===t.value?"#f5f7fa":""}}function n(r){t.value=r.name,o.value.blur(),l(`当前选中行的数据为：${JSON.stringify(r)}`,{type:"success"})}return{columns:a,pagination:p,selectValue:t,tableDataEdit:e,rowStyle:i,onRowClick:n}}export{x as useColumns};
