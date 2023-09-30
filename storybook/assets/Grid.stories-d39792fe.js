import{j as e,a as g}from"./vanilla-extract-dynamic.esm-ddec3cfa.js";import"./Container-35604936.js";import"./Flex-447ba663.js";import{a as t}from"./asCssLength-c8b70ba3.js";import"./Tab-77e0397a.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";var y="djp4955",a={rows:"var(--djp4950)",columns:"var(--djp4951)",gap:"var(--djp4952)",rowGap:"var(--djp4953)",columnGap:"var(--djp4954)"};const n=o=>{const{as:m="div",rows:i,columns:l,gap:r,...d}=o;return e.jsx(m,{...d,className:y,style:{...d.style,...g({[a.rows]:String(typeof i=="number"&&`repeat(${i}, 1fr)`||"initial"),[a.columns]:String(typeof l=="number"&&`repeat(${l}, 1fr)`||"initial"),[a.gap]:t(typeof r=="number"&&r||"initial"),[a.rowGap]:t(typeof r=="object"&&"row"in r&&r.row||"initial"),[a.columnGap]:t(typeof r=="object"&&"column"in r&&r.column||"initial")})}})};try{n.displayName="Grid",n.__docgenInfo={description:"",displayName:"Grid",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string | number"}},columns:{defaultValue:null,description:"",name:"columns",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"Gap"}}}}}catch{}const k={component:n,title:"Grid"},s={args:{rows:3,columns:2,gap:20,style:{width:"300px",height:"200px"},children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{background:"red"}}),e.jsx("div",{style:{background:"orange"}}),e.jsx("div",{style:{background:"yellow"}}),e.jsx("div",{style:{background:"green"}}),e.jsx("div",{style:{background:"blue"}}),e.jsx("div",{style:{background:"purple"}})]})}};var p,u,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const h=["Default"];export{s as Default,h as __namedExportsOrder,k as default};
//# sourceMappingURL=Grid.stories-d39792fe.js.map
