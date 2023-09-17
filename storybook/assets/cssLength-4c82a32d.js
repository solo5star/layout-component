import{r as y}from"./index-76fb7be0.js";var p={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=y,g=Symbol.for("react.element"),j=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,b=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,o){var t,i={},n=null,s=null;o!==void 0&&(n=""+o),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(s=r.ref);for(t in r)v.call(r,t)&&!x.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)i[t]===void 0&&(i[t]=r[t]);return{$$typeof:g,type:e,key:n,ref:s,props:i,_owner:b.current}}a.Fragment=j;a.jsx=u;a.jsxs=u;p.exports=a;var w=p.exports;function c(e){var r=e.match(/^var\((.*)\)$/);return r?r[1]:e}function h(e,r){var o=e;for(var t of r){if(!(t in o))throw new Error("Path ".concat(r.join(" -> ")," does not exist in object"));o=o[t]}return o}function l(e,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=e.constructor();for(var i in e){var n=e[i],s=[...o,i];typeof n=="string"||typeof n=="number"||n==null?t[i]=r(n,s):typeof n=="object"&&!Array.isArray(n)?t[i]=l(n,r,s):console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(n)?"Array":typeof n,'"'))}return t}function E(e,r){var o={};if(typeof r=="object"){var t=e;l(r,(s,f)=>{var m=h(t,f);o[c(m)]=String(s)})}else{var i=e;for(var n in i)o[c(n)]=i[n]}return Object.defineProperty(o,"toString",{value:function(){return Object.keys(this).map(f=>"".concat(f,":").concat(this[f])).join(";")},writable:!1}),o}const R=e=>typeof e=="number"?`${e}px`:e;export{E as a,R as c,w as j};
//# sourceMappingURL=cssLength-4c82a32d.js.map
