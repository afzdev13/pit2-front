(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{698:function(e,r,t){Promise.resolve().then(t.bind(t,4561))},7626:function(e,r,t){"use strict";t.d(r,{z:function(){return l}});var s=t(7437);let l=e=>{let{action:r,text:t,secundary:l}=e;return(0,s.jsx)("div",{className:"bg-".concat(l?"red-600":"cyan-500"," flex rounded py-4 px-8 cursor-pointer items-center justify-center text-center"),onClick:r,children:t})}},7085:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var s=t(7437);let l=e=>{let{children:r,className:t,style:l}=e;return(0,s.jsx)("div",{className:"bg-teal-50 rounded py-16 px-12 items-center justify-between ".concat(t),style:l,children:r})}},8309:function(e,r,t){"use strict";t.r(r),t.d(r,{UserIcon:function(){return o}});var s=t(7437),l=t(3946),n=t(7626),c=t(1396),a=t.n(c);let i=()=>{var e,r;let{user:t}=(0,l.a)();return(0,s.jsxs)("div",{className:"flex flex-row gap-20",children:[(null==t?void 0:null===(r=t.userRole)||void 0===r?void 0:null===(e=r.Role)||void 0===e?void 0:e.name)==="ADMIN"&&(0,s.jsx)(n.z,{text:(0,s.jsx)(a(),{href:"/users",children:"Usuarios"})}),(0,s.jsx)(n.z,{text:(0,s.jsx)(a(),{href:"/items",children:"Items"})}),(0,s.jsx)(n.z,{text:(0,s.jsx)(a(),{href:"/orders",children:"Pedidos"})})]})},o=()=>{var e,r;let{user:t}=(0,l.a)();return(0,s.jsxs)("div",{className:"flex flex-row gap-20",children:[["ADMIN","EMPLOYE"].includes((null==t?void 0:null===(r=t.userRole)||void 0===r?void 0:null===(e=r.Role)||void 0===e?void 0:e.name)||"")&&(0,s.jsx)(i,{}),(0,s.jsxs)("div",{children:[t?(0,s.jsxs)("h1",{className:"text-white",children:["Bem vindo ",t.name]}):null,(0,s.jsx)(n.z,{text:(0,s.jsx)(a(),{href:"/login",children:t?"Sair":"Entrar"})})]})]})}},3946:function(e,r,t){"use strict";t.d(r,{a:function(){return a}});var s=t(3890),l=t(7665);let n=(0,l.cn)(void 0),c=(0,l.cn)(e=>e(n),(e,r,t)=>r(n,t)),a=()=>{let[e,r]=(0,s.KO)(c);return{user:e,setUser:r}}},4561:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var s=t(7437),l=t(2265),n=t(7085),c=t(8309),a=t(7626),i=t(7131);function o(){let[e,r]=(0,l.useState)(""),[t,o]=(0,l.useState)(""),[u,d]=(0,l.useState)(0),x=async()=>{try{await i.h.post("/items",{name:e,description:t,value:u}),alert("Item salvo"),r(""),o(""),d(0)}catch(e){console.log({err:e})}};return(0,s.jsxs)("main",{className:"flex min-h-screen flex-col items-center gap-8 p-24 ",children:[(0,s.jsxs)("div",{className:"w-full flex row justify-between",children:[(0,s.jsx)("h1",{children:"Restaurante PIT2"}),(0,s.jsx)(c.UserIcon,{})]}),(0,s.jsxs)(n.Z,{className:"flex flex-col w-full gap-8 text-black",children:[(0,s.jsx)("p",{children:"Criar item"}),(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsx)("p",{children:"Nome:"}),(0,s.jsx)("input",{value:e,className:"border-color-black border-2",onChange:e=>r(e.target.value)})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsx)("p",{children:"Descri\xe7\xe3o:"}),(0,s.jsx)("textarea",{value:t,className:"border-color-black border-2",onChange:e=>o(e.target.value)})]}),(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsx)("p",{children:"Valor:"}),(0,s.jsx)("input",{value:u,className:"border-color-black border-2",type:"number",onChange:e=>d(parseFloat(e.target.value))})]}),(0,s.jsx)(a.z,{text:"Salvar",action:()=>x()})]})]})}},7131:function(e,r,t){"use strict";t.d(r,{h:function(){return l}});var s=t(2173);let l=s.Z.create({baseURL:"http://18.224.94.36:3000"});l.interceptors.request.use(async e=>e)}},function(e){e.O(0,[580,180,971,472,744],function(){return e(e.s=698)}),_N_E=e.O()}]);