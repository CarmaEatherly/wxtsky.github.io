import{r as a,g as H,m as K,C as J,c as X}from"./index-97b4f576.js";import{u as Q}from"./useFlexGapSupport-26a8d4c6.js";import{u as U,r as v}from"./responsiveObserver-1a31f032.js";const Y=a.createContext({}),V=Y,Z=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},z=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},ee=(e,t)=>{const{componentCls:s,gridColumns:n}=e,r={};for(let o=n;o>=0;o--)o===0?(r[`${s}${t}-${o}`]={display:"none"},r[`${s}-push-${o}`]={insetInlineStart:"auto"},r[`${s}-pull-${o}`]={insetInlineEnd:"auto"},r[`${s}${t}-push-${o}`]={insetInlineStart:"auto"},r[`${s}${t}-pull-${o}`]={insetInlineEnd:"auto"},r[`${s}${t}-offset-${o}`]={marginInlineEnd:0},r[`${s}${t}-order-${o}`]={order:0}):(r[`${s}${t}-${o}`]={display:"block",flex:`0 0 ${o/n*100}%`,maxWidth:`${o/n*100}%`},r[`${s}${t}-push-${o}`]={insetInlineStart:`${o/n*100}%`},r[`${s}${t}-pull-${o}`]={insetInlineEnd:`${o/n*100}%`},r[`${s}${t}-offset-${o}`]={marginInlineStart:`${o/n*100}%`},r[`${s}${t}-order-${o}`]={order:o});return r},T=(e,t)=>ee(e,t),te=(e,t,s)=>({[`@media (min-width: ${t}px)`]:Object.assign({},T(e,s))}),ne=H("Grid",e=>[Z(e)]),re=H("Grid",e=>{const t=K(e,{gridColumns:24}),s={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[z(t),T(t,""),T(t,"-xs"),Object.keys(s).map(n=>te(t,s[n],n)).reduce((n,r)=>Object.assign(Object.assign({},n),r),{})]});var se=globalThis&&globalThis.__rest||function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};function oe(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const le=["xs","sm","md","lg","xl","xxl"],ie=a.forwardRef((e,t)=>{const{getPrefixCls:s,direction:n}=a.useContext(J),{gutter:r,wrap:o,supportFlexGap:$}=a.useContext(V),{prefixCls:g,span:d,order:m,offset:j,push:w,pull:C,className:G,children:R,flex:b,style:I}=e,h=se(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),i=s("col",g),[O,E]=re(i);let y={};le.forEach(f=>{let l={};const u=e[f];typeof u=="number"?l.span=u:typeof u=="object"&&(l=u||{}),delete h[f],y=Object.assign(Object.assign({},y),{[`${i}-${f}-${l.span}`]:l.span!==void 0,[`${i}-${f}-order-${l.order}`]:l.order||l.order===0,[`${i}-${f}-offset-${l.offset}`]:l.offset||l.offset===0,[`${i}-${f}-push-${l.push}`]:l.push||l.push===0,[`${i}-${f}-pull-${l.pull}`]:l.pull||l.pull===0,[`${i}-rtl`]:n==="rtl"})});const M=X(i,{[`${i}-${d}`]:d!==void 0,[`${i}-order-${m}`]:m,[`${i}-offset-${j}`]:j,[`${i}-push-${w}`]:w,[`${i}-pull-${C}`]:C},G,y,E),c={};if(r&&r[0]>0){const f=r[0]/2;c.paddingLeft=f,c.paddingRight=f}if(r&&r[1]>0&&!$){const f=r[1]/2;c.paddingTop=f,c.paddingBottom=f}return b&&(c.flex=oe(b),o===!1&&!c.minWidth&&(c.minWidth=0)),O(a.createElement("div",Object.assign({},h,{style:Object.assign(Object.assign({},c),I),className:M,ref:t}),R))}),de=ie;var ae=globalThis&&globalThis.__rest||function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};function B(e,t){const[s,n]=a.useState(typeof e=="string"?e:""),r=()=>{if(typeof e=="string"&&n(e),typeof e=="object")for(let o=0;o<v.length;o++){const $=v[o];if(!t[$])continue;const g=e[$];if(g!==void 0){n(g);return}}};return a.useEffect(()=>{r()},[JSON.stringify(e),t]),s}const ce=a.forwardRef((e,t)=>{const{prefixCls:s,justify:n,align:r,className:o,style:$,children:g,gutter:d=0,wrap:m}=e,j=ae(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:w,direction:C}=a.useContext(J),[G,R]=a.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[b,I]=a.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),h=B(r,b),i=B(n,b),O=Q(),E=a.useRef(d),y=U();a.useEffect(()=>{const S=y.subscribe(P=>{I(P);const p=E.current||0;(!Array.isArray(p)&&typeof p=="object"||Array.isArray(p)&&(typeof p[0]=="object"||typeof p[1]=="object"))&&R(P)});return()=>y.unsubscribe(S)},[]);const M=()=>{const S=[void 0,void 0];return(Array.isArray(d)?d:[d,void 0]).forEach((p,F)=>{if(typeof p=="object")for(let _=0;_<v.length;_++){const k=v[_];if(G[k]&&p[k]!==void 0){S[F]=p[k];break}}else S[F]=p}),S},c=w("row",s),[f,l]=ne(c),u=M(),D=X(c,{[`${c}-no-wrap`]:m===!1,[`${c}-${i}`]:i,[`${c}-${h}`]:h,[`${c}-rtl`]:C==="rtl"},o,l),x={},A=u[0]!=null&&u[0]>0?u[0]/-2:void 0,N=u[1]!=null&&u[1]>0?u[1]/-2:void 0;A&&(x.marginLeft=A,x.marginRight=A),O?[,x.rowGap]=u:N&&(x.marginTop=N,x.marginBottom=N);const[L,W]=u,q=a.useMemo(()=>({gutter:[L,W],wrap:m,supportFlexGap:O}),[L,W,m,O]);return f(a.createElement(V.Provider,{value:q},a.createElement("div",Object.assign({},j,{className:D,style:Object.assign(Object.assign({},x),$),ref:t}),g)))}),$e=ce;export{de as C,$e as R};
