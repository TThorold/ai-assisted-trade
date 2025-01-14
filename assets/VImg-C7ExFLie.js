import{H as W,J as F,ag as Q,P as $,al as Y,W as x,b as n,A as z,bR as A,L as Z,O as G,Q as K,x as X,R as p,a_ as ee,z as b,r as te,i as k,a3 as ne,a6 as re,k as ae,Z as O,ar as se,F as ie,$ as le,av as oe,_ as ue,Y as R}from"./index-DS-nB8Zo.js";function ce(e){return{aspectStyles:z(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const D=W({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...F(),...Q()},"VResponsive"),U=$()({name:"VResponsive",props:D(),setup(e,l){let{slots:i}=l;const{aspectStyles:r}=ce(e),{dimensionStyles:g}=Y(e);return x(()=>{var m;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[g.value,e.style]},[n("div",{class:"v-responsive__sizer",style:r.value},null),(m=i.additional)==null?void 0:m.call(i),i.default&&n("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});function ve(e,l){if(!A)return;const i=l.modifiers||{},r=l.value,{handler:g,options:m}=typeof r=="object"?r:{handler:r,options:{}},y=new IntersectionObserver(function(){var c;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const a=(c=e._observe)==null?void 0:c[l.instance.$.uid];if(!a)return;const s=d.some(f=>f.isIntersecting);g&&(!i.quiet||a.init)&&(!i.once||s||a.init)&&g(s,d,h),s&&i.once?E(e,l):a.init=!0},m);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:y},y.observe(e)}function E(e,l){var r;const i=(r=e._observe)==null?void 0:r[l.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const de={mounted:ve,unmounted:E},ge=W({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...D(),...F(),...Z(),...G()},"VImg"),fe=$()({name:"VImg",directives:{intersect:de},props:ge(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:i,slots:r}=l;const{backgroundColorClasses:g,backgroundColorStyles:m}=K(X(e,"color")),{roundedClasses:y}=p(e),d=ee("VImg"),h=b(""),a=te(),s=b(e.eager?"loading":"idle"),c=b(),f=b(),u=z(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=z(()=>u.value.aspect||c.value/f.value||0);k(()=>e.src,()=>{I(s.value!=="idle")}),k(S,(t,o)=>{!t&&o&&a.value&&_(a.value)}),ne(()=>I());function I(t){if(!(e.eager&&t)&&!(A&&!t&&!e.eager)){if(s.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,_(o,null)}u.value.src&&re(()=>{var o;i("loadstart",((o=a.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var v;if(!d.isUnmounted)if((v=a.value)!=null&&v.complete){if(a.value.naturalWidth||w(),s.value==="error")return;S.value||_(a.value,null),s.value==="loading"&&C()}else S.value||_(a.value),T()})})}}function C(){var t;d.isUnmounted||(T(),_(a.value),s.value="loaded",i("load",((t=a.value)==null?void 0:t.currentSrc)||u.value.src))}function w(){var t;d.isUnmounted||(s.value="error",i("error",((t=a.value)==null?void 0:t.currentSrc)||u.value.src))}function T(){const t=a.value;t&&(h.value=t.currentSrc||t.src)}let P=-1;ae(()=>{clearTimeout(P)});function _(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const v=()=>{if(clearTimeout(P),d.isUnmounted)return;const{naturalHeight:j,naturalWidth:N}=t;j||N?(c.value=N,f.value=j):!t.complete&&s.value==="loading"&&o!=null?P=window.setTimeout(v,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,f.value=1)};v()}const V=z(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),H=()=>{var v;if(!u.value.src||s.value==="idle")return null;const t=n("img",{class:["v-img__img",V.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:a,onLoad:C,onError:w},null),o=(v=r.sources)==null?void 0:v.call(r);return n(R,{transition:e.transition,appear:!0},{default:()=>[O(o?n("picture",{class:"v-img__picture"},[o,t]):t,[[ue,s.value==="loaded"]])]})},q=()=>n(R,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",V.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),L=()=>r.placeholder?n(R,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!r.error)&&n("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,M=()=>r.error?n(R,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&n("div",{class:"v-img__error"},[r.error()])]}):null,J=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=b(!1);{const t=k(S,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),t())})}return x(()=>{const t=U.filterProps(e);return O(n(U,le({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!B.value},g.value,y.value,e.class],style:[{width:oe(e.width==="auto"?c.value:e.width)},m.value,e.style]},t,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ie,null,[n(H,null,null),n(q,null,null),n(J,null,null),n(L,null,null),n(M,null,null)]),default:r.default}),[[se("intersect"),{handler:I,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:a,state:s,naturalWidth:c,naturalHeight:f}}});export{de as I,fe as V};
