if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>n(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-d6430d1c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"settleup.golf"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.5cf39bf2.css",revision:null},{url:"/css/chunk-vendors.8e65e459.css",revision:null},{url:"/fonts/Inter-italic.var.958a0b97.woff2",revision:null},{url:"/fonts/Inter-roman.var.b2129c00.woff2",revision:null},{url:"/index.html",revision:"28330c9ad97103df8c4b96d0304be611"},{url:"/js/about.f7221e34.js",revision:null},{url:"/js/app.5df814dd.js",revision:null},{url:"/js/chunk-vendors.fc749ab4.js",revision:null},{url:"/manifest.json",revision:"7e163c1e4e6710e2eee6f5c5ef9d8936"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
