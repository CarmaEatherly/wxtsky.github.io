import{K as i}from"./index-97b4f576.js";import{c as r}from"./index-e0045e8b.js";const s=new i("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),m=new i("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),f=function(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:o}=a,n=`${o}-fade`,t=e?"&":"";return[r(n,s,m,a.motionDurationMid,e),{[`
        ${t}${n}-enter,
        ${t}${n}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${t}${n}-leave`]:{animationTimingFunction:"linear"}}]};export{f as i};
