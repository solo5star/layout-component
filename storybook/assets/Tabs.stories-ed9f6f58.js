import{j as t}from"./vanilla-extract-dynamic.esm-ddec3cfa.js";import{T as w,a as l,b as f}from"./Tab-80592c3d.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";const W={component:w,title:"Tabs"},a={args:{children:["red","orange","yellow","green","blue","purple"].map(r=>t.jsx(l,{button:r,style:{width:"100%",height:"100px",background:r}},r))}},o={args:{children:Array(30).fill(void 0).map((r,e)=>t.jsx(l,{button:`Tab ${e+1}`,style:{width:"100%",height:"100px",background:`hsl(${e*12}, 100%, 50%)`}}))}},n={args:{wrap:!0,children:Array(30).fill(void 0).map((r,e)=>t.jsx(l,{button:`Tab ${e+1}`,style:{width:"100%",height:"100px",background:`hsl(${e*12}, 100%, 50%)`}},e))}},k=r=>t.jsx(f,{as:"button",startIcon:"📌",style:{borderBottomWidth:"6px",...r.active?{borderColor:"orange"}:{borderColor:"transparent"}},...r}),s={args:{children:["red","orange","yellow","green","blue","purple"].map(r=>t.jsx(l,{button:t.jsx(k,{children:r}),style:{width:"100%",height:"100px",background:r}},r))}};var u,d,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: ["red", "orange", "yellow", "green", "blue", "purple"].map(color => <Tab key={color} button={color} style={{
      width: "100%",
      height: "100px",
      background: color
    }} />)
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,b;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: Array(30).fill(undefined).map((_, index) => <Tab button={\`Tab \${index + 1}\`} style={{
      width: "100%",
      height: "100px",
      background: \`hsl(\${index * 12}, 100%, 50%)\`
    }} />)
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,m,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    wrap: true,
    children: Array(30).fill(undefined).map((_, index) => <Tab key={index} button={\`Tab \${index + 1}\`} style={{
      width: "100%",
      height: "100px",
      background: \`hsl(\${index * 12}, 100%, 50%)\`
    }} />)
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,T,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: ["red", "orange", "yellow", "green", "blue", "purple"].map(color => <Tab key={color} button={<CustomTabButton>{color}</CustomTabButton>} style={{
      width: "100%",
      height: "100px",
      background: color
    }} />)
  }
}`,...(y=(T=s.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const S=["Default","TabButtonsWithScroll","TabButtonsWithWrap","CustomTabButtons"];export{s as CustomTabButtons,a as Default,o as TabButtonsWithScroll,n as TabButtonsWithWrap,S as __namedExportsOrder,W as default};
//# sourceMappingURL=Tabs.stories-ed9f6f58.js.map
