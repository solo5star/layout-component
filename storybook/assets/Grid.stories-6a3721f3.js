import{j as e,a as g,b as t}from"./asCssLength-5c3ca051.js";import"./Container-cf7daf66.js";import"./Flex-c551b370.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var y="djp4955",a={rows:"var(--djp4950)",columns:"var(--djp4951)",gap:"var(--djp4952)",rowGap:"var(--djp4953)",columnGap:"var(--djp4954)"};const n=o=>{const{as:m="div",rows:l,columns:i,gap:r,...d}=o;return e.jsx(m,{...d,className:y,style:{...d.style,...g({[a.rows]:String(typeof l=="number"&&`repeat(${l}, 1fr)`||"initial"),[a.columns]:String(typeof i=="number"&&`repeat(${i}, 1fr)`||"initial"),[a.gap]:t(typeof r=="number"&&r||"initial"),[a.rowGap]:t(typeof r=="object"&&"row"in r&&r.row||"initial"),[a.columnGap]:t(typeof r=="object"&&"column"in r&&r.column||"initial")})}})};try{n.displayName="Grid",n.__docgenInfo={description:"",displayName:"Grid",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string | number"}},columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"Gap"}}}}}catch{}const w={component:n,title:"Grid"},s={args:{rows:3,columns:2,gap:20,style:{width:"300px",height:"200px"},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{background:"red"}}),e.jsx("div",{style:{background:"orange"}}),e.jsx("div",{style:{background:"yellow"}}),e.jsx("div",{style:{background:"green"}}),e.jsx("div",{style:{background:"blue"}}),e.jsx("div",{style:{background:"purple"}})]})}};var p,u,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,w as default};
//# sourceMappingURL=Grid.stories-6a3721f3.js.map
