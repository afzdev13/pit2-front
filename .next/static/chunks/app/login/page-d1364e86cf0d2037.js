(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{359:function(e,t,n){Promise.resolve().then(n.bind(n,7355))},3946:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var s=n(3890),r=n(7665);let a=(0,r.cn)(void 0),o=(0,r.cn)(e=>e(a),(e,t,n)=>t(a,n)),l=()=>{let[e,t]=(0,s.KO)(o);return{user:e,setUser:t}}},7355:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(7437),r=n(6030),a=n(1396),o=n.n(a),l=n(2265),c=n(4033),i=n(3946),u=n(7131);function d(){let[e,t]=(0,l.useState)(""),[n,a]=(0,l.useState)(""),[d,m]=(0,l.useState)(!1),{setUser:f}=(0,i.a)(),g=(0,c.useRouter)(),h=async()=>{let{data:t}=await u.h.post("/login",{email:e,password:n});console.log({data:t}),m(!1),await f(t)},x=async e=>{e.preventDefault(),m(!0);try{await h(),g.push("/")}catch(e){m(!1),console.log({err:e})}};return(0,s.jsx)("div",{className:"relative flex flex-col items-center justify-center min-h-screen overflow-hidden",children:(0,s.jsxs)("div",{className:"w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold text-center text-gray-700",children:"Restaurante PIT2"}),(0,s.jsxs)("form",{className:"mt-6",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-800",children:"Email"}),(0,s.jsx)("input",{type:"email",className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40",onChange:e=>t(e.target.value)})]}),(0,s.jsxs)("div",{className:"mb-2",children:[(0,s.jsx)("label",{htmlFor:"password",className:"block text-sm font-semibold text-gray-800",children:"Senha"}),(0,s.jsx)("input",{type:"password",className:"block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40",onChange:e=>a(e.target.value)})]}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("button",{onClick:e=>x(e),className:"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:d?(0,s.jsx)(r.c,{color:"warning"}):"Login"})})]}),(0,s.jsxs)("p",{className:"mt-4 text-sm text-center text-gray-700",children:["Ainda n\xe3o tem conta?"," ",(0,s.jsx)(o(),{href:"/sign-in",className:"font-medium text-blue-600 hover:underline",children:"Cadastre-se"})]})]})})}},7131:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var s=n(2173);let r=s.Z.create({baseURL:"http://18.224.94.36:3000"});r.interceptors.request.use(async e=>e)}},function(e){e.O(0,[580,180,921,971,472,744],function(){return e(e.s=359)}),_N_E=e.O()}]);