(()=>{"use strict";var e,t,r,a,f,o={},c={};function n(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return o[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=o,n.c=c,e=[],n.O=(t,r,a,f)=>{if(!r){var o=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],f=e[b][2];for(var c=!0,d=0;d<r.length;d++)(!1&f||o>=f)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(c=!1,f<o&&(o=f));if(c){e.splice(b--,1);var i=a();void 0!==i&&(t=i)}}return t}f=f||0;for(var b=e.length;b>0&&e[b-1][2]>f;b--)e[b]=e[b-1];e[b]=[r,a,f]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var f=Object.create(null);n.r(f);var o={};t=t||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,n.d(f,o),f},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"assets/js/"+({48:"f3ed54a2",53:"935f2afb",80:"4d54d076",85:"1f391b9e",121:"55960ee5",131:"405ba789",138:"1851e398",141:"20cf82be",149:"628bcdb6",195:"c4f5d8e4",310:"b0ff248f",313:"a1b3c3cb",397:"15c10888",414:"393be207",433:"869dbe66",448:"5deb6c42",514:"1be78505",622:"c60c3733",636:"0e51008b",641:"a1795f3a",655:"66a4d3da",667:"5ac30b97",671:"0e384e19",715:"2c9cf6d7",751:"3720c009",763:"195559f9",768:"e646f313",918:"17896441",924:"df203c0f"}[e]||e)+"."+{48:"923a2a98",53:"f2e0307e",80:"1ff71be7",85:"6edc0540",121:"d8830094",131:"298205a8",138:"09d6524d",141:"f9351d95",149:"77b4c77b",195:"f88da953",310:"d7e86af5",313:"82086ec4",397:"64a38cfd",414:"606bffdd",433:"88ca66e2",448:"42785a92",514:"1b8a78cf",622:"7533d540",636:"03444758",641:"940fa642",655:"e66a04c3",666:"eea069a3",667:"a4c04760",671:"6575403e",715:"aa136e25",751:"e62a5fd6",763:"038217fb",768:"d130ba2c",918:"34a82730",924:"75b0a027",972:"70f0b643"}[e]+".js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},f="devmc-wiki:",n.l=(e,t,r,o)=>{if(a[e])a[e].push(t);else{var c,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+r){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",f+r),c.src=e),a[e]=[t];var l=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var f=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),f&&f.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/DevMC-Wiki/",n.gca=function(e){return e={17896441:"918",f3ed54a2:"48","935f2afb":"53","4d54d076":"80","1f391b9e":"85","55960ee5":"121","405ba789":"131","1851e398":"138","20cf82be":"141","628bcdb6":"149",c4f5d8e4:"195",b0ff248f:"310",a1b3c3cb:"313","15c10888":"397","393be207":"414","869dbe66":"433","5deb6c42":"448","1be78505":"514",c60c3733:"622","0e51008b":"636",a1795f3a:"641","66a4d3da":"655","5ac30b97":"667","0e384e19":"671","2c9cf6d7":"715","3720c009":"751","195559f9":"763",e646f313:"768",df203c0f:"924"}[e]||e,n.p+n.u(e)},(()=>{var e={303:0,532:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var f=new Promise(((r,f)=>a=e[t]=[r,f]));r.push(a[2]=f);var o=n.p+n.u(t),c=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var f=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+f+": "+o+")",c.name="ChunkLoadError",c.type=f,c.request=o,a[1](c)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,f,o=r[0],c=r[1],d=r[2],i=0;if(o.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(d)var b=d(n)}for(t&&t(r);i<o.length;i++)f=o[i],n.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return n.O(b)},r=self.webpackChunkdevmc_wiki=self.webpackChunkdevmc_wiki||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();