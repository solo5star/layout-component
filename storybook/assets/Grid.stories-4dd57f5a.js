import{j as e,a as p,c as g}from"./cssLength-4c82a32d.js";import"./Container-7036940b.js";import"./Flex-738e7490.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var m="_1jxnlcr3",s={rows:"var(--_1jxnlcr0)",columns:"var(--_1jxnlcr1)",gap:"var(--_1jxnlcr2)"};const a=t=>{const{rows:n,columns:l,gap:u,...o}=t;return e.jsx("div",{...o,className:m,style:{...o.style,...p({[s.rows]:String((n&&`repeat(${n}, 1fr)`)??"initial"),[s.columns]:String((l&&`repeat(${l}, 1fr)`)??"initial"),[s.gap]:g(u??"initial")})}})};try{a.displayName="Grid",a.__docgenInfo={description:"",displayName:"Grid",props:{rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"number"}},columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"number"}}}}}catch{}const j={component:a,title:"Grid"},r={args:{rows:3,columns:2,gap:20,style:{width:"300px",height:"200px"},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{background:"red"}}),e.jsx("div",{style:{background:"orange"}}),e.jsx("div",{style:{background:"yellow"}}),e.jsx("div",{style:{background:"green"}}),e.jsx("div",{style:{background:"blue"}}),e.jsx("div",{style:{background:"purple"}})]})}};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const f=["Default"];export{r as Default,f as __namedExportsOrder,j as default};
//# sourceMappingURL=Grid.stories-4dd57f5a.js.map
