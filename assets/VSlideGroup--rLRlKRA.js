import{b as G}from"./index-CwF-kMLp.js";import{H as ee,I as D,J as te,bd as le,M as oe,aB as ne,P as se,aT as ae,l as ie,aD as re,z as b,A as g,aU as B,bH as ue,aZ as L,i as ce,W as fe,b as h,V as q,bv as ve}from"./index-ClzCYNjP.js";function de(l){let{selectedElement:n,containerElement:o,isRtl:i,isHorizontal:v}=l;const d=z(v,o),a=U(v,i,o),p=z(v,n),c=K(v,n),S=p*.4;return a>c?c-S:a+d<c+p?c-d+p+S:a}function pe(l){let{selectedElement:n,containerElement:o,isHorizontal:i}=l;const v=z(i,o),d=K(i,n),a=z(i,n);return d-v/2+a/2}function N(l,n){const o=l?"scrollWidth":"scrollHeight";return(n==null?void 0:n[o])||0}function he(l,n){const o=l?"clientWidth":"clientHeight";return(n==null?void 0:n[o])||0}function U(l,n,o){if(!o)return 0;const{scrollLeft:i,offsetWidth:v,scrollWidth:d}=o;return l?n?d-v+i:i:o.scrollTop}function z(l,n){const o=l?"offsetWidth":"offsetHeight";return(n==null?void 0:n[o])||0}function K(l,n){const o=l?"offsetLeft":"offsetTop";return(n==null?void 0:n[o])||0}const ge=Symbol.for("vuetify:v-slide-group"),Se=ee({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ge},nextIcon:{type:D,default:"$next"},prevIcon:{type:D,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...te(),...le({mobile:null}),...oe(),...ne({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),be=se()({name:"VSlideGroup",props:Se(),emits:{"update:modelValue":l=>!0},setup(l,n){let{slots:o}=n;const{isRtl:i}=ae(),{displayClasses:v,mobile:d}=ie(l),a=re(l,l.symbol),p=b(!1),c=b(0),S=b(0),_=b(0),r=g(()=>l.direction==="horizontal"),{resizeRef:u,contentRect:w}=B(),{resizeRef:f,contentRect:R}=B(),C=ue(),O=g(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),$=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[0]):-1),J=g(()=>a.selected.value.length?a.items.value.findIndex(e=>e.id===a.selected.value[a.selected.value.length-1]):-1);if(L){let e=-1;ce(()=>[a.selected.value,w.value,R.value,r.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(w.value&&R.value){const t=r.value?"width":"height";S.value=w.value[t],_.value=R.value[t],p.value=S.value+1<_.value}if($.value>=0&&f.el){const t=f.el.children[J.value];V(t,l.centerActive)}})})}const x=b(!1);function V(e,t){let s=0;t?s=pe({containerElement:u.el,isHorizontal:r.value,selectedElement:e}):s=de({containerElement:u.el,isHorizontal:r.value,isRtl:i.value,selectedElement:e}),H(s)}function H(e){if(!L||!u.el)return;const t=z(r.value,u.el),s=U(r.value,i.value,u.el);if(!(N(r.value,u.el)<=t||Math.abs(e-s)<16)){if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:W}=u.el;e=k-W-e}r.value?C.horizontal(e,O.value):C(e,O.value)}}function Q(e){const{scrollTop:t,scrollLeft:s}=e.target;c.value=r.value?s:t}function Z(e){if(x.value=!0,!(!p.value||!f.el)){for(const t of e.composedPath())for(const s of f.el.children)if(s===t){V(s);return}}}function j(e){x.value=!1}let E=!1;function X(e){var t;!E&&!x.value&&!(e.relatedTarget&&((t=f.el)!=null&&t.contains(e.relatedTarget)))&&m(),E=!1}function M(){E=!0}function Y(e){if(!f.el)return;function t(s){e.preventDefault(),m(s)}r.value?e.key==="ArrowRight"?t(i.value?"prev":"next"):e.key==="ArrowLeft"&&t(i.value?"next":"prev"):e.key==="ArrowDown"?t("next"):e.key==="ArrowUp"&&t("prev"),e.key==="Home"?t("first"):e.key==="End"&&t("last")}function m(e){var s,y;if(!f.el)return;let t;if(!e)t=ve(f.el)[0];else if(e==="next"){if(t=(s=f.el.querySelector(":focus"))==null?void 0:s.nextElementSibling,!t)return m("first")}else if(e==="prev"){if(t=(y=f.el.querySelector(":focus"))==null?void 0:y.previousElementSibling,!t)return m("last")}else e==="first"?t=f.el.firstElementChild:e==="last"&&(t=f.el.lastElementChild);t&&t.focus({preventScroll:!0})}function T(e){const t=r.value&&i.value?-1:1,s=(e==="prev"?-t:t)*S.value;let y=c.value+s;if(r.value&&i.value&&u.el){const{scrollWidth:k,offsetWidth:W}=u.el;y+=k-W}H(y)}const F=g(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),I=g(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return p.value||Math.abs(c.value)>0;case"mobile":return d.value||p.value||Math.abs(c.value)>0;default:return!d.value&&(p.value||Math.abs(c.value)>0)}}),P=g(()=>Math.abs(c.value)>1),A=g(()=>{if(!u.value)return!1;const e=N(r.value,u.el),t=he(r.value,u.el);return e-t-Math.abs(c.value)>1});return fe(()=>h(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":I.value,"v-slide-group--is-overflowing":p.value},v.value,l.class],style:l.style,tabindex:x.value||a.selected.value.length?-1:0,onFocus:X},{default:()=>{var e,t,s;return[I.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!P.value}],onMousedown:M,onClick:()=>P.value&&T("prev")},[((e=o.prev)==null?void 0:e.call(o,F.value))??h(G,null,{default:()=>[h(q,{icon:i.value?l.nextIcon:l.prevIcon},null)]})]),h("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:Q},[h("div",{ref:f,class:"v-slide-group__content",onFocusin:Z,onFocusout:j,onKeydown:Y},[(t=o.default)==null?void 0:t.call(o,F.value)])]),I.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!A.value}],onMousedown:M,onClick:()=>A.value&&T("next")},[((s=o.next)==null?void 0:s.call(o,F.value))??h(G,null,{default:()=>[h(q,{icon:i.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:T,scrollOffset:c,focus:m,hasPrev:P,hasNext:A}}});export{be as V,Se as m};
