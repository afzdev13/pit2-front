(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{1130:function(e,t,r){Promise.resolve().then(r.bind(r,4781))},7626:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});var l=r(7437);let s=e=>{let{action:t,text:r,secundary:s}=e;return(0,l.jsx)("div",{className:"bg-".concat(s?"red-600":"cyan-500"," flex rounded py-4 px-8 cursor-pointer items-center justify-center text-center"),onClick:t,children:r})}},7085:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var l=r(7437);let s=e=>{let{children:t,className:r,style:s}=e;return(0,l.jsx)("div",{className:"bg-teal-50 rounded py-16 px-12 items-center justify-between ".concat(r),style:s,children:t})}},7131:function(e,t,r){"use strict";r.d(t,{h:function(){return s}});var l=r(2173);let s=l.Z.create({baseURL:"http://18.224.94.36:3000"});s.interceptors.request.use(async e=>e)},4781:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var l=r(7437),s=r(7085),a=r(2265),c=r(7131),n=r(7626);function o(){let[e,t]=(0,a.useState)(""),[r,o]=(0,a.useState)(""),[u,i]=(0,a.useState)(""),[d,f]=(0,a.useState)(""),[x,h]=(0,a.useState)([]),p=async()=>{try{let{data:e}=await c.h.get("/role");h(e)}catch(e){console.log({err:e})}},v=async()=>{try{var t;let{data:l}=await c.h.post("/users",{name:e,email:u,password:r,address:d});await c.h.post("/user-role",{userId:l,roleId:null===(t=x.filter(e=>"COSTUMER"===e.name)[0])||void 0===t?void 0:t.id}),alert("Usuario criado com sucesso")}catch(e){console.log({err:e})}};return(0,a.useEffect)(()=>{p()},[]),(0,l.jsxs)(s.Z,{className:"flex flex-col w-full gap-8 text-black",children:[(0,l.jsx)("p",{children:"Criar usu\xe1rio"}),(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsx)("p",{children:"Nome:"}),(0,l.jsx)("input",{value:e,className:"border-color-black border-2",onChange:e=>t(e.target.value)})]}),(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsx)("p",{children:"Email:"}),(0,l.jsx)("input",{type:"email",value:u,className:"border-color-black border-2",onChange:e=>i(e.target.value)})]}),(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsx)("p",{children:"Endereco:"}),(0,l.jsx)("input",{value:d,className:"border-color-black border-2",onChange:e=>f(e.target.value)})]}),(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsx)("p",{children:"Password:"}),(0,l.jsx)("input",{type:"password",value:r,className:"border-color-black border-2",onChange:e=>o(e.target.value)})]}),(0,l.jsx)(n.z,{text:"Salvar",action:()=>v()})]})}}},function(e){e.O(0,[580,971,472,744],function(){return e(e.s=1130)}),_N_E=e.O()}]);