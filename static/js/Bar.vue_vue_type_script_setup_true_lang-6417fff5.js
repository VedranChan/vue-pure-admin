import{z as i,e as o}from"./index-b73e8dcb.js";import{h as n,a as l,r as c,j as p,k as u}from"./runtime-core.esm-bundler-f67957fc.js";const f=n({__name:"Bar",setup(h){const{isDark:t}=i(),a=l(()=>t.value?"dark":"light"),e=c(null),{setOptions:r}=o(e,{theme:a});return r({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,top:"10px",bottom:"0",left:"0",right:"0"},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLabel:{interval:0},data:["open_issues","forks","watchers","star"],triggerEvent:!0}],yAxis:[{type:"value",triggerEvent:!0}],series:[{name:"GitHub信息",type:"bar",data:[1e3,1e4,2e4,66666]}],addTooltip:!0},{name:"click",callback:s=>{}}),(s,m)=>(p(),u("div",{ref_key:"barChartRef",ref:e,style:{width:"100%",height:"35vh"}},null,512))}});export{f as _};
