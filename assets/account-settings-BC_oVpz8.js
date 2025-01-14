import{r as b,o as v,e as z,w as l,b as e,u as o,a as n,a2 as w,V as G,D as p,ay as L,s as C,c as k,F as I,a7 as S,t as g,m as F}from"./index-B4pSw4wf.js";import{a as O}from"./avatar-1-_lkNM47U.js";import{a as r,V as A}from"./VRow-C-Gg8UjS.js";import{a as T,V}from"./VCard-B5ulSXYM.js";import{V as j}from"./VAvatar-Jqz06WG_.js";import{V as E}from"./VDivider-OlLTE_8x.js";import{V as U,a as _}from"./VForm-BfhdRQho.js";import{V as y}from"./VTextField-DLAifoiZ.js";import{b as M,a as B,V as Y}from"./VDataTable-CulWTFy5.js";import{V as W}from"./VTable-ChDyTjRy.js";import{V as $,a as H,b as K,c as R}from"./VTabs-x5Ayv_8k.js";/* empty css              */import"./createSimpleFunctional-uQfj9S63.js";import"./VImg-Bx82PtqS.js";import"./VField-CrLFdcaX.js";import"./index-fV3_6Pyu.js";import"./VList-DH1i3-SW.js";import"./ssrBoot-W6LRhmNQ.js";import"./VSlideGroup-D_21qzF8.js";const q={class:"d-flex flex-column justify-center gap-5"},J={class:"d-flex flex-wrap gap-2"},Z={__name:"AccountSettingsAccount",setup(N){const f={avatarImg:O,firstName:"john",lastName:"Doe",email:"johnDoe@example.com",org:"ThemeSelection",phone:"+1 (917) 543-9876",address:"123 Main St, New York, NY 10001",state:"New York",zip:"10001",country:"USA",language:"English",timezone:"(GMT-11:00) International Date Line West",currency:"USD"},c=b(),s=b(structuredClone(f)),d=b(!1),u=()=>{s.value=structuredClone(f)},m=x=>{const t=new FileReader,{files:a}=x.target;a&&a.length&&(t.readAsDataURL(a[0]),t.onload=()=>{typeof t.result=="string"&&(s.value.avatarImg=t.result)})},P=()=>{s.value.avatarImg=f.avatarImg},h=["(GMT-11:00) International Date Line West","(GMT-11:00) Midway Island","(GMT-10:00) Hawaii","(GMT-09:00) Alaska","(GMT-08:00) Pacific Time (US & Canada)","(GMT-08:00) Tijuana","(GMT-07:00) Arizona","(GMT-07:00) Chihuahua","(GMT-07:00) La Paz","(GMT-07:00) Mazatlan","(GMT-07:00) Mountain Time (US & Canada)","(GMT-06:00) Central America","(GMT-06:00) Central Time (US & Canada)","(GMT-06:00) Guadalajara","(GMT-06:00) Mexico City","(GMT-06:00) Monterrey","(GMT-06:00) Saskatchewan","(GMT-05:00) Bogota","(GMT-05:00) Eastern Time (US & Canada)","(GMT-05:00) Indiana (East)","(GMT-05:00) Lima","(GMT-05:00) Quito","(GMT-04:00) Atlantic Time (Canada)","(GMT-04:00) Caracas","(GMT-04:00) La Paz","(GMT-04:00) Santiago","(GMT-03:30) Newfoundland","(GMT-03:00) Brasilia","(GMT-03:00) Buenos Aires","(GMT-03:00) Georgetown","(GMT-03:00) Greenland","(GMT-02:00) Mid-Atlantic","(GMT-01:00) Azores","(GMT-01:00) Cape Verde Is.","(GMT+00:00) Casablanca","(GMT+00:00) Dublin","(GMT+00:00) Edinburgh","(GMT+00:00) Lisbon","(GMT+00:00) London"],D=["USD","EUR","GBP","AUD","BRL","CAD","CNY","CZK","DKK","HKD","HUF","INR"];return(x,t)=>(v(),z(A,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(T,{title:"Account Details"},{default:l(()=>[e(V,{class:"d-flex"},{default:l(()=>[e(j,{rounded:"lg",size:"100",class:"me-6",image:o(s).avatarImg},null,8,["image"]),n("form",q,[n("div",J,[e(w,{color:"primary",onClick:t[0]||(t[0]=a=>{var i;return(i=o(c))==null?void 0:i.click()})},{default:l(()=>[e(G,{icon:"ri-upload-cloud-line",class:"d-sm-none"}),t[14]||(t[14]=n("span",{class:"d-none d-sm-block"},"Upload new photo",-1))]),_:1}),n("input",{ref_key:"refInputEl",ref:c,type:"file",name:"file",accept:".jpeg,.png,.jpg,GIF",hidden:"",onInput:m},null,544),e(w,{type:"reset",color:"error",variant:"outlined",onClick:P},{default:l(()=>[t[15]||(t[15]=n("span",{class:"d-none d-sm-block"},"Reset",-1)),e(G,{icon:"ri-refresh-line",class:"d-sm-none"})]),_:1})]),t[16]||(t[16]=n("p",{class:"text-body-1 mb-0"}," Allowed JPG, GIF or PNG. Max size of 800K ",-1))])]),_:1}),e(E),e(V,null,{default:l(()=>[e(U,{class:"mt-6"},{default:l(()=>[e(A,null,{default:l(()=>[e(r,{md:"6",cols:"12"},{default:l(()=>[e(y,{modelValue:o(s).firstName,"onUpdate:modelValue":t[1]||(t[1]=a=>o(s).firstName=a),placeholder:"John",label:"First Name"},null,8,["modelValue"])]),_:1}),e(r,{md:"6",cols:"12"},{default:l(()=>[e(y,{modelValue:o(s).lastName,"onUpdate:modelValue":t[2]||(t[2]=a=>o(s).lastName=a),placeholder:"Doe",label:"Last Name"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(s).email,"onUpdate:modelValue":t[3]||(t[3]=a=>o(s).email=a),label:"E-mail",placeholder:"johndoe@gmail.com",type:"email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(s).org,"onUpdate:modelValue":t[4]||(t[4]=a=>o(s).org=a),label:"Organization",placeholder:"ThemeSelection"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(s).phone,"onUpdate:modelValue":t[5]||(t[5]=a=>o(s).phone=a),label:"Phone Number",placeholder:"+1 (917) 543-9876"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(s).address,"onUpdate:modelValue":t[6]||(t[6]=a=>o(s).address=a),label:"Address",placeholder:"123 Main St, New York, NY 10001"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(s).state,"onUpdate:modelValue":t[7]||(t[7]=a=>o(s).state=a),label:"State",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(s).zip,"onUpdate:modelValue":t[8]||(t[8]=a=>o(s).zip=a),label:"Zip Code",placeholder:"10001"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(M,{modelValue:o(s).country,"onUpdate:modelValue":t[9]||(t[9]=a=>o(s).country=a),label:"Country",items:["USA","Canada","UK","India","Australia"],placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(M,{modelValue:o(s).language,"onUpdate:modelValue":t[10]||(t[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","Arabic","Hindi","Urdu"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(M,{modelValue:o(s).timezone,"onUpdate:modelValue":t[11]||(t[11]=a=>o(s).timezone=a),label:"Timezone",placeholder:"Select Timezone",items:h,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(M,{modelValue:o(s).currency,"onUpdate:modelValue":t[12]||(t[12]=a=>o(s).currency=a),label:"Currency",placeholder:"Select Currency",items:D,"menu-props":{maxHeight:200}},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(w,null,{default:l(()=>t[17]||(t[17]=[p("Save changes")])),_:1}),e(w,{color:"secondary",variant:"outlined",type:"reset",onClick:L(u,["prevent"])},{default:l(()=>t[18]||(t[18]=[p(" Reset ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(T,{title:"Deactivate Account"},{default:l(()=>[e(V,null,{default:l(()=>[n("div",null,[e(_,{modelValue:o(d),"onUpdate:modelValue":t[13]||(t[13]=a=>C(d)?d.value=a:null),label:"I confirm my account deactivation"},null,8,["modelValue"])]),e(w,{disabled:!o(d),color:"error",class:"mt-3"},{default:l(()=>t[19]||(t[19]=[p(" Deactivate Account ")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1}))}},Q={class:"d-flex flex-wrap gap-4 mt-4"},X={__name:"AccountSettingsNotification",setup(N){const f=b([{type:"New for you",email:!0,browser:!0,app:!0},{type:"Account activity",email:!0,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!1},{type:"A new device is linked",email:!0,browser:!1,app:!1}]),c=b("Only when I'm online");return(s,d)=>(v(),z(T,{title:"Recent Devices"},{default:l(()=>[e(V,null,{default:l(()=>d[1]||(d[1]=[p(" We need permission from your browser to show notifications. "),n("a",{href:"javascript:void(0)"},"Request Permission",-1)])),_:1}),e(W,{class:"text-no-wrap"},{default:l(()=>[d[2]||(d[2]=n("thead",null,[n("tr",null,[n("th",{scope:"col"}," Type "),n("th",{scope:"col"}," EMAIL "),n("th",{scope:"col"}," BROWSER "),n("th",{scope:"col"}," App ")])],-1)),n("tbody",null,[(v(!0),k(I,null,S(o(f),u=>(v(),k("tr",{key:u.type},[n("td",null,g(u.type),1),n("td",null,[e(_,{modelValue:u.email,"onUpdate:modelValue":m=>u.email=m},null,8,["modelValue","onUpdate:modelValue"])]),n("td",null,[e(_,{modelValue:u.browser,"onUpdate:modelValue":m=>u.browser=m},null,8,["modelValue","onUpdate:modelValue"])]),n("td",null,[e(_,{modelValue:u.app,"onUpdate:modelValue":m=>u.app=m},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),e(E),e(V,null,{default:l(()=>[e(U,{onSubmit:L(()=>{},["prevent"])},{default:l(()=>[d[5]||(d[5]=n("p",{class:"text-base font-weight-medium"}," When should we send you notifications? ",-1)),e(A,null,{default:l(()=>[e(r,{cols:"12",sm:"6"},{default:l(()=>[e(M,{modelValue:o(c),"onUpdate:modelValue":d[0]||(d[0]=u=>C(c)?c.value=u:null),mandatory:"",items:["Only when I'm online","Anytime"]},null,8,["modelValue"])]),_:1})]),_:1}),n("div",Q,[e(w,{type:"submit"},{default:l(()=>d[3]||(d[3]=[p(" Save Changes ")])),_:1}),e(w,{color:"secondary",variant:"outlined",type:"reset"},{default:l(()=>d[4]||(d[4]=[p(" Reset ")])),_:1})])]),_:1})]),_:1})]),_:1}))}},ee={class:"d-flex flex-column gap-y-3"},le={class:"font-weight-medium"},ae={class:"d-flex align-center flex-wrap mb-3"},te={class:"text-h6 mb-0 me-3"},oe={class:"text-base font-weight-medium"},ne={class:"me-3"},se={class:"d-flex"},re={__name:"AccountSettingsSecurity",setup(N){const f=b(!1),c=b(!1),s=b(!1),d=b("12345678"),u=b("87654321"),m=b("87654321"),P=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"],h=[{name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",createdOn:"28 Apr 2021, 18:20 GTM+4:10",permission:"Full Access"},{name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",createdOn:"12 Feb 2021, 10:30 GTM+2:30",permission:"Read Only"},{name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",createdOn:"28 Dec 2020, 12:21 GTM+4:10",permission:"Full Access"}],D=[{title:"BROWSER",key:"browser"},{title:"DEVICE",key:"device"},{title:"LOCATION",key:"location"},{title:"RECENT ACTIVITY",key:"recentActivity"}],x=[{browser:"Chrome on Windows",device:"HP Spectre 360",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"ri-macbook-line",color:"primary"}},{browser:"Chrome on iPhone",device:"iPhone 12x",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"ri-android-line",color:"error"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"ri-smartphone-line",color:"success"}},{browser:"Chrome on macOS",device:"Apple iMac",location:"New York, NY",recentActivity:"28 Apr 2022, 18:20",deviceIcon:{icon:"ri-mac-line",color:"secondary"}},{browser:"Chrome on Windows",device:"HP Spectre 360",location:"Los Angeles, CA",recentActivity:"20 Apr 2022, 10:20",deviceIcon:{icon:"ri-macbook-line",color:"primary"}},{browser:"Chrome on Android",device:"Oneplus 9 Pro",location:"San Francisco, CA",recentActivity:"16 Apr 2022, 04:20",deviceIcon:{icon:"ri-android-line",color:"success"}}];return(t,a)=>(v(),z(A,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(T,{title:"Change Password"},{default:l(()=>[e(U,null,{default:l(()=>[e(V,null,{default:l(()=>[e(A,{class:"mb-3"},{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(d),"onUpdate:modelValue":a[0]||(a[0]=i=>C(d)?d.value=i:null),type:o(f)?"text":"password","append-inner-icon":o(f)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Current Password",placeholder:"············","onClick:appendInner":a[1]||(a[1]=i=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),e(A,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(u),"onUpdate:modelValue":a[2]||(a[2]=i=>C(u)?u.value=i:null),type:o(c)?"text":"password","append-inner-icon":o(c)?"ri-eye-off-line":"ri-eye-line",label:"New Password",autocomplete:"on",placeholder:"············","onClick:appendInner":a[3]||(a[3]=i=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(y,{modelValue:o(m),"onUpdate:modelValue":a[4]||(a[4]=i=>C(m)?m.value=i:null),type:o(s)?"text":"password","append-inner-icon":o(s)?"ri-eye-off-line":"ri-eye-line",autocomplete:"on",label:"Confirm New Password",placeholder:"············","onClick:appendInner":a[5]||(a[5]=i=>s.value=!o(s))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(V,null,{default:l(()=>[a[6]||(a[6]=n("p",{class:"text-base font-weight-medium mt-2"}," Password Requirements: ",-1)),n("ul",ee,[(v(),k(I,null,S(P,i=>n("li",{key:i,class:"d-flex"},[n("div",null,[e(G,{size:"7",icon:"ri-checkbox-blank-circle-fill",class:"me-3"})]),n("span",le,g(i),1)])),64))])]),_:1}),e(V,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(w,null,{default:l(()=>a[7]||(a[7]=[p("Save changes")])),_:1}),e(w,{type:"reset",color:"secondary",variant:"outlined"},{default:l(()=>a[8]||(a[8]=[p(" Reset ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(T,{title:"Two-steps verification"},{default:l(()=>[e(V,null,{default:l(()=>[a[10]||(a[10]=n("p",{class:"font-weight-semibold"}," Two factor authentication is not enabled yet. ",-1)),a[11]||(a[11]=n("p",null,[p(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),n("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more.")],-1)),e(w,null,{default:l(()=>a[9]||(a[9]=[p(" Enable two-factor authentication ")])),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(T,{title:"Create an API key"},{default:l(()=>[e(A,null,{default:l(()=>[e(r,{cols:"12",md:"5","order-md":"0",order:"1"},{default:l(()=>[e(V,null,{default:l(()=>[e(U,{onSubmit:L(()=>{},["prevent"])},{default:l(()=>[e(A,null,{default:l(()=>[e(r,{cols:"12"},{default:l(()=>[e(M,{label:"Choose the API key type you want to create",placeholder:"Select API key type",items:["Full Control","Modify","Read & Execute","List Folder Contents","Read Only","Read & Write"]})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(y,{label:"Name the API key",placeholder:"Name the API key"})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(w,{type:"submit",block:""},{default:l(()=>a[12]||(a[12]=[p(" Create Key ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(T,{title:"API Key List & Access"},{default:l(()=>[e(V,null,{default:l(()=>a[13]||(a[13]=[p(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")])),_:1}),e(V,{class:"d-flex flex-column gap-y-4"},{default:l(()=>[(v(),k(I,null,S(h,i=>n("div",{key:i.key,class:"bg-var-theme-background pa-4"},[n("div",ae,[n("h6",te,g(i.name),1),e(B,{color:"primary",size:"small"},{default:l(()=>[p(g(i.permission),1)]),_:2},1024)]),n("p",oe,[n("span",ne,g(i.key),1),e(G,{size:18,icon:"ri-file-copy-line",class:"cursor-pointer"})]),n("span",null,"Created on "+g(i.createdOn),1)])),64))]),_:1})]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(T,{title:"Recent Devices"},{default:l(()=>[e(Y,{headers:D,items:x,"hide-default-footer":"",class:"text-no-wrap"},{"item.browser":l(({item:i})=>[n("div",se,[e(G,{start:"",icon:i.deviceIcon.icon,color:i.deviceIcon.color},null,8,["icon","color"]),n("span",null,g(i.browser),1)])]),bottom:l(()=>a[14]||(a[14]=[])),_:1})]),_:1})]),_:1})]),_:1}))}},xe={__name:"account-settings",setup(N){const f=F(),c=b(f.params.tab),s=[{title:"Account",icon:"ri-group-line",tab:"account"},{title:"Security",icon:"ri-lock-line",tab:"security"},{title:"Notifications",icon:"ri-notification-3-line",tab:"notification"}];return(d,u)=>(v(),k("div",null,[e($,{modelValue:o(c),"onUpdate:modelValue":u[0]||(u[0]=m=>C(c)?c.value=m:null),"show-arrows":"",class:"v-tabs-pill"},{default:l(()=>[(v(),k(I,null,S(s,m=>e(K,{key:m.icon,value:m.tab},{default:l(()=>[e(G,{size:"20",start:"",icon:m.icon},null,8,["icon"]),p(" "+g(m.title),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(H,{modelValue:o(c),"onUpdate:modelValue":u[1]||(u[1]=m=>C(c)?c.value=m:null),class:"mt-5 disable-tab-transition",touch:!1},{default:l(()=>[e(R,{value:"account"},{default:l(()=>[e(Z)]),_:1}),e(R,{value:"security"},{default:l(()=>[e(re)]),_:1}),e(R,{value:"notification"},{default:l(()=>[e(X)]),_:1})]),_:1},8,["modelValue"])]))}};export{xe as default};
