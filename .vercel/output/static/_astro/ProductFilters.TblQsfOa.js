import{u as i,j as s}from"./AppStore.tf01cuJY.js";import{r as o}from"./index.120yQdpc.js";function u({label:a,query:t}){const[n,e]=o.useState(!1),{filtersQuery:r,addFilterQuery:d,removeFilterQuery:p}=i(l=>l),h=()=>{e(!n)};return o.useEffect(()=>{console.log(`Checkbox ${a}: ${n}`),n?d(r,t):p(t,r)},[n]),o.useEffect(()=>{const l=new URLSearchParams(window.location.search),c=l.has("type")&&l.get("type")?.includes(t);c&&e(c)},[]),s.jsxs("div",{className:`
			w-full p-2 flex items-center gap-2 
			${n?"bg-secondary_light":"bg-transparent"}
		`,children:[s.jsx("input",{onChange:h,type:"checkbox",id:a,className:"hidden"}),s.jsx("label",{className:"w-full cursor-pointer",htmlFor:a,children:a})]})}function f({categories:a}){const{filtersQuery:t}=i(e=>e),n=()=>{const e=new URLSearchParams(window.location.search);!e.has("type")&&t.length>0?(e.append("type",t.join(",")),window.location.search=e):t.length===0?window.location.search="":(e.delete("type"),e.append("type",t.join(",")),console.log("New query:",e.get("type")),window.location.search=e)};return s.jsxs("aside",{className:`\r
            hidden py-3 px-5 sm:flex w-[250px] lg:min-w-[300px] \r
            flex-col items-start gap-8`,children:[s.jsxs("div",{className:"flex w-full flex-col",children:[s.jsx("p",{className:"font-bold text-lg mb-2",children:"Productos"}),s.jsx("div",{className:"flex flex-col items-start gap-2",children:a.map(e=>s.jsx(u,{label:e.name,query:e.name.toLowerCase()},e.name))})]}),s.jsx("button",{type:"button",className:`\r
                w-full px-4 py-2 bg-secondary_light rounded-full\r
                hover:bg-secondary\r
            `,onClick:n,children:"Filtrar"})]})}export{f as default};
