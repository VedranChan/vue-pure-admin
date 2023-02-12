import{h as g}from"./hot-18a7c2fd.js";import{m as o,c as v}from"./message-d079beec.js";import{u as k}from"./hooks-57129334.js";import{d as y}from"./check-3815600c.js";import{h as f,a3 as a,j as $,v as c,x as t,D as n,u as s,B as r,a2 as u,l as d}from"./runtime-core.esm-bundler-1f6332ae.js";import"./index-e24b4c59.js";import"./vue.runtime.esm-bundler-7c6ab200.js";import"./runtime-dom.esm-bundler-7421a035.js";import"./index-cc9ef8a0.js";import"./isObject-8409f96c.js";import"./index-2a7d7e76.js";import"./index-5270accb.js";import"./index-e84875e6.js";const M=d("div",{class:"card-header"},[d("span",{class:"font-medium"}," Message提示 ")],-1),_=d("h4",{class:"mb-4"},"element-plus 的消息提示，点击弹出提示信息",-1),w=d("h4",{class:"mb-4"}," 类似 Ant Design 风格的消息提示，点击弹出提示信息（基于 ElMessage 样式改版，不会影响 ElMessage 原本样式，使用和打包大小成本极低并适配暗黑模式） ",-1),T=f({name:"Message"}),R=f({...T,setup(b){return(E,e)=>{const l=a("el-button"),p=a("el-space"),m=a("el-divider"),C=a("el-card");return $(),c(C,{shadow:"never"},{header:t(()=>[M]),default:t(()=>[_,n(p,{wrap:""},{default:t(()=>[n(l,{type:"info",onClick:e[0]||(e[0]=i=>s(o)("Info类型消息",{customClass:"el"}))},{default:t(()=>[r(" Info ")]),_:1}),n(l,{type:"success",onClick:e[1]||(e[1]=i=>s(o)("Success类型消息",{customClass:"el",type:"success"}))},{default:t(()=>[r(" Success ")]),_:1}),n(l,{type:"warning",onClick:e[2]||(e[2]=i=>s(o)("Warning类型消息",{customClass:"el",type:"warning"}))},{default:t(()=>[r(" Warning ")]),_:1}),n(l,{type:"danger",onClick:e[3]||(e[3]=i=>s(o)("Error类型消息",{customClass:"el",type:"error"}))},{default:t(()=>[r(" Error ")]),_:1}),n(l,{onClick:e[4]||(e[4]=i=>s(o)("可关闭消息",{customClass:"el",showClose:!0}))},{default:t(()=>[r(" 可关闭 ")]),_:1}),n(l,{onClick:e[5]||(e[5]=i=>s(o)("分组消息合并",{customClass:"el",type:"success",grouping:!0}))},{default:t(()=>[r(" 分组消息合并 ")]),_:1}),n(l,{onClick:e[6]||(e[6]=i=>s(o)("自定义消息图标",{customClass:"el",icon:s(k)(s(y))}))},{default:t(()=>[r(" 自定义图标 ")]),_:1}),n(l,{onClick:e[7]||(e[7]=i=>s(o)("3秒后关闭",{customClass:"el",duration:3e3,onClose:()=>s(o)("消息已关闭",{customClass:"el",type:"success"})}))},{default:t(()=>[r(" 自定义延时关闭时间并设置关闭后其他操作 ")]),_:1}),n(l,{onClick:e[8]||(e[8]=i=>s(o)(u("p",null,[u("span",null,"Message can be "),u("i",{style:"color: teal"},"VNode")]),{customClass:"el"}))},{default:t(()=>[r(" 自定义内容 ")]),_:1}),n(l,{onClick:e[9]||(e[9]=i=>s(o)("<strong>This is <i>HTML</i> string</strong>",{customClass:"el",dangerouslyUseHTMLString:!0}))},{default:t(()=>[r(" HTML 片段作为正文内容 ")]),_:1})]),_:1}),n(m),w,n(p,{wrap:""},{default:t(()=>[n(l,{type:"info",onClick:e[10]||(e[10]=i=>s(o)("Info类型消息"))},{default:t(()=>[r("Info")]),_:1}),n(l,{type:"success",onClick:e[11]||(e[11]=i=>s(o)("Success类型消息",{type:"success"}))},{default:t(()=>[r(" Success ")]),_:1}),n(l,{type:"warning",onClick:e[12]||(e[12]=i=>s(o)("Warning类型消息",{type:"warning"}))},{default:t(()=>[r(" Warning ")]),_:1}),n(l,{type:"danger",onClick:e[13]||(e[13]=i=>s(o)("Error类型消息",{type:"error"}))},{default:t(()=>[r(" Error ")]),_:1}),n(l,{onClick:e[14]||(e[14]=i=>s(o)("可关闭消息",{showClose:!0}))},{default:t(()=>[r(" 可关闭 ")]),_:1}),n(l,{onClick:e[15]||(e[15]=i=>s(o)("分组消息合并",{type:"success",grouping:!0}))},{default:t(()=>[r(" 分组消息合并 ")]),_:1}),n(l,{onClick:e[16]||(e[16]=i=>s(o)("自定义消息图标",{icon:s(g)}))},{default:t(()=>[r(" 自定义图标 ")]),_:1}),n(l,{onClick:e[17]||(e[17]=i=>s(o)("3秒后关闭",{duration:3e3,onClose:()=>s(o)("消息已关闭",{type:"success"})}))},{default:t(()=>[r(" 自定义延时关闭时间并设置关闭后其他操作 ")]),_:1}),n(l,{onClick:e[18]||(e[18]=i=>s(o)(u("p",null,[u("span",null,"Message can be "),u("i",{style:"color: teal"},"VNode")])))},{default:t(()=>[r(" 自定义内容 ")]),_:1}),n(l,{onClick:e[19]||(e[19]=i=>s(o)("<strong>This is <i>HTML</i> string</strong>",{dangerouslyUseHTMLString:!0}))},{default:t(()=>[r(" HTML 片段作为正文内容 ")]),_:1})]),_:1}),n(m),n(l,{onClick:s(v)},{default:t(()=>[r(" 关闭所有消息提示 ")]),_:1},8,["onClick"])]),_:1})}}});export{R as default};