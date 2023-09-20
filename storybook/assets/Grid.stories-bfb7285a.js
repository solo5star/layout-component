import{j as e,a as m,b as g}from"./asCssLength-5c3ca051.js";import"./Container-cf7daf66.js";import"./Flex-96fe213e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var y="djp4953",s={rows:"var(--djp4950)",columns:"var(--djp4951)",gap:"var(--djp4952)"};const a=t=>{const{as:u="div",rows:n,columns:l,gap:c,...o}=t;return e.jsx(u,{...o,className:y,style:{...o.style,...m({[s.rows]:String(typeof n=="number"&&`repeat(${n}, 1fr)`||"initial"),[s.columns]:String(typeof l=="number"&&`repeat(${l}, 1fr)`||"initial"),[s.gap]:g(c??"initial")})}})};try{a.displayName="Grid",a.__docgenInfo={description:"",displayName:"Grid",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string | number"}},columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}}}}}catch{}const _={component:a,title:"Grid"},r={args:{rows:3,columns:2,gap:20,style:{width:"300px",height:"200px"},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{background:"red"}}),e.jsx("div",{style:{background:"orange"}}),e.jsx("div",{style:{background:"yellow"}}),e.jsx("div",{style:{background:"green"}}),e.jsx("div",{style:{background:"blue"}}),e.jsx("div",{style:{background:"purple"}})]})}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    rows: 3,
    columns: 2,
    gap: 20,
    style: {
      width: '300px',
      height: '200px'
    },
    children: <>
        <div style={{
        background: "red"
      }} />
        <div style={{
        background: "orange"
      }} />
        <div style={{
        background: "yellow"
      }} />
        <div style={{
        background: "green"
      }} />
        <div style={{
        background: "blue"
      }} />
        <div style={{
        background: "purple"
      }} />
      </>
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,_ as default};
//# sourceMappingURL=Grid.stories-bfb7285a.js.map
