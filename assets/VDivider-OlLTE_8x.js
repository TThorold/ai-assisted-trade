import{H as c,J as u,N as h,P as m,aj as g,T as y,x as f,A as _,av as s,W as b,b as r}from"./index-B4pSw4wf.js";const C=c({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...u(),...h()},"VDivider"),S=m()({name:"VDivider",props:C(),setup(e,l){let{attrs:i,slots:a}=l;const{themeClasses:n}=g(e),{textColorClasses:o,textColorStyles:v}=y(f(e,"color")),d=_(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=s(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),t});return b(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,o.value,e.class],style:[d.value,v.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null);return a.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[a.default()]),t]):t}),{}}});export{S as V};
