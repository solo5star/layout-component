(()=>{"use strict";var e,t,r,o,a,n={},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=c,e=[],f.O=(t,r,o,a)=>{if(!r){var n=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,i=0;i<r.length;i++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(c=!1,a<n&&(n=a));if(c){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(a,n),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",217:"b68b0095",250:"a5a0abf9",329:"61b04d42",331:"69640406",414:"393be207",438:"4cd11585",446:"816c05f5",514:"1be78505",592:"common",621:"e1c1d333",817:"14eb3368",833:"0e41065e",918:"17896441"}[e]||e)+"."+{6:"05f32964",53:"c3b18849",85:"d633ed0e",217:"0b5238b0",250:"45d2f8f5",264:"ab4d5691",329:"f72e1f03",331:"72fe0416",414:"a8a51599",438:"ab8466cd",446:"0102c7b7",514:"4ead3c16",592:"b10cc4c5",621:"52a76860",817:"5c47c153",833:"ce1b5a56",918:"9b9940d2"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="@solo5star/layout-component-docs:",f.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var c,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){c=u;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",a+r),c.src=e),o[e]=[t];var s=(t,r)=>{c.onerror=c.onload=null,clearTimeout(b);var a=o[e];if(delete o[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),i&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/layout-component/docs/",f.gca=function(e){return e={17896441:"918",69640406:"331","935f2afb":"53","1f391b9e":"85",b68b0095:"217",a5a0abf9:"250","61b04d42":"329","393be207":"414","4cd11585":"438","816c05f5":"446","1be78505":"514",common:"592",e1c1d333:"621","14eb3368":"817","0e41065e":"833"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=f.p+f.u(t),c=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,o[1](c)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],c=r[1],i=r[2],d=0;if(n.some((t=>0!==e[t]))){for(o in c)f.o(c,o)&&(f.m[o]=c[o]);if(i)var l=i(f)}for(t&&t(r);d<n.length;d++)a=n[d],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(l)},r=self.webpackChunk_solo5star_layout_component_docs=self.webpackChunk_solo5star_layout_component_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();