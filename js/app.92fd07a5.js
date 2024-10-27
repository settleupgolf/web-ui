(function(){"use strict";var e={5341:function(e,t,o){var n=o(9242),r=o(3852),a=o(3396);const l=(0,a._)("h1",null,"settleup",-1),u=(0,a._)("p",null,"a simple payout calculator for equal value dot wagers",-1),s=(0,a._)("p",null," enter the stakes for the value of each dot then enter the sum of each players dots on the front and back ",-1);function i(e,t){const o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,u,s,(0,a.Wm)(o)],64)}var c=o(89);const p={},d=(0,c.Z)(p,[["render",i]]);var f=d,h=o(2483);const m={class:"home"};function y(e,t,o,n,r,l){const u=(0,a.up)("HelloWorld");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(u)])}o(560);var g=o(7139);const b={class:"home"},v={class:"head-to-head-output"};function k(e,t,o,n,r,l){const u=(0,a.up)("stakes"),s=(0,a.up)("scores"),i=(0,a.up)("Button"),c=(0,a.up)("Rules");return(0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(u,{stakes:r.stakes,double:r.double,onStakes:t[0]||(t[0]=e=>r.stakes=e),onDouble:t[1]||(t[1]=e=>r.double=e)},null,8,["stakes","double"]),(0,a.Wm)(s,{players:r.players,onPlayerUpdated:l.onScoresChange},null,8,["players","onPlayerUpdated"]),(0,a.Wm)(i,{onClick:t[2]||(t[2]=e=>r.players.push({name:`Player ${r.players.length+1}`,front:0,back:0})),style:{"margin-bottom":"1rem"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Add Player ")])),_:1}),(0,a._)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.players,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.name,class:"head-to-head"},[(0,a._)("strong",null,(0,g.zw)(e.name),1),(0,a._)("table",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Object.entries(l.result[e.name]),(([t,o])=>((0,a.wg)(),(0,a.iD)("tr",{key:`${e.name}-${t}`},[(0,a._)("td",null,(0,g.zw)(t),1),(0,a._)("td",null,(0,g.zw)(o),1)])))),128))])])))),128))]),(0,a.Wm)(c)])}var w=o(9215);function P(e,t){return e.reduce(((o,n)=>{const r=e.filter((e=>e.name!==n.name));return o[n.name]=r.reduce(((e,o)=>{const r={front:n.front-o.front,back:n.back-o.back};t.double&&(r.back*=2);const a=(r.front+r.back)*t.stakes;return e[o.name]=a,e}),{}),o}),{})}const T={class:"scores"},_={class:"score-group"},O={class:"player-scores"};function W(e,t,o,n,r,l){const u=(0,a.up)("InputText"),s=(0,a.up)("InputGroupAddon"),i=(0,a.up)("InputNumber"),c=(0,a.up)("InputGroup");return(0,a.wg)(),(0,a.iD)("div",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.players,((t,o)=>((0,a.wg)(),(0,a.iD)("div",{key:o,class:"score-row"},[(0,a._)("div",_,[(0,a.Wm)(u,{modelValue:t.name,"onUpdate:modelValue":t=>e.$emit("player-updated",o,"name",t)},null,8,["modelValue","onUpdate:modelValue"]),(0,a._)("div",O,[(0,a.Wm)(c,{class:"scores-group--front"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Front")])),_:1}),(0,a.Wm)(i,{modelValue:t.front,onInput:t=>e.$emit("player-updated",o,"front",t.value)},null,8,["modelValue","onInput"])])),_:2},1024),(0,a.Wm)(c,{class:"score-group-back"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Back")])),_:1}),(0,a.Wm)(i,{modelValue:t.back,onInput:t=>e.$emit("player-updated",o,"back",t.value)},null,8,["modelValue","onInput"])])),_:2},1024)])])])))),128))])}var I=o(6824),A=o(4422),D=o(4912),S=o(7841),Z={name:"Scores",components:{InputGroup:I.Z,InputGroupAddon:A.Z,InputNumber:D.Z,InputText:S.Z},props:{players:{type:Array,required:!0}}};const j=(0,c.Z)(Z,[["render",W]]);var H=j;const V={class:"stakes"},x={class:"stakes--double"},C=(0,a._)("label",{for:"double"}," Double on the back ",-1);function G(e,t,o,n,r,l){const u=(0,a.up)("InputGroupAddon"),s=(0,a.up)("InputNumber"),i=(0,a.up)("InputGroup"),c=(0,a.up)("Checkbox");return(0,a.wg)(),(0,a.iD)("div",V,[(0,a.Wm)(i,{class:"stakes--value"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)("stakes")])),_:1}),(0,a.Wm)(s,{modelValue:o.stakes,onInput:t[0]||(t[0]=t=>e.$emit("stakes",t.value))},null,8,["modelValue"])])),_:1}),(0,a._)("div",x,[(0,a.Wm)(c,{modelValue:o.double,binary:!0,onChange:t[1]||(t[1]=t=>e.$emit("double",!o.double))},null,8,["modelValue"]),C])])}var E=o(1096),$={name:"Stakes",components:{Checkbox:E.Z,InputGroup:I.Z,InputGroupAddon:A.Z,InputNumber:D.Z},props:{double:{type:Boolean,default:!0},stakes:{type:Number,required:!0}}};const N=(0,c.Z)($,[["render",G]]);var U=N;const F=(0,a.uE)("<h3>Hammer: Official Game Rules Overview</h3><h4>Overview</h4><ul><li>Objective: Accumulate the most dots by the end of the round.</li><li> Game Format: Wolf format with opportunities for “hammering” to double the dot count. </li><li>Players: Typically 5 or more players, with an odd number preferred.</li></ul><h4>Setup and Order</h4><ol><li><strong>Order of Play:</strong><ul><li>Players flip a tee to determine the initial order.</li><li> The order set on the first tee box remains consistent throughout the entire round. </li></ul></li></ol><h4>Gameplay</h4><ol><li><strong>First Player Options:</strong><ul><li> The player teeing off first has three choices: <ol><li> Lone Wolf (3 dots): The player calls “wolf” before teeing off, choosing to play alone. </li><li> Wolf (2 dots): The player decides to go solo after seeing all other players’ tee shots. </li><li> Partner Up (1 dot): The player chooses a partner immediately after their tee shot. </li></ol></li><li> Note: A partner must be chosen right after their tee shot; selections cannot be made retrospectively. </li></ul></li><li><strong>The Hammer:</strong><ul><li> Definition: “Hammering” refers to doubling the current dot count after all players have taken their next shots. </li><li> The lead player, having decided to go wolf or partnered up, can hammer after any player has completed their shot. </li><li> Any player on the opposing team may also choose to hammer if they feel confident their team can outperform the wolf. </li></ul></li></ol><h4>Example Scenario</h4><ol><li><strong>Initial Hammer:</strong><ul><li>Five players are on a par-four hole.</li><li> The first player goes wolf after the initial tee shots, setting the dot count at 2. </li><li> Another player on the four-person team chooses to hammer, doubling the dot count to 4. </li></ul></li><li><strong>Approach Shot Hammer:</strong><ul><li> After the approach shots, the wolf hits a strong shot and hammers the dot count again, bringing it from 4 to 8. </li></ul></li><li><strong>Final Putt Hammer:</strong><ul><li>Approaching the green, assume:</li><li> The wolf player has a 6-foot putt for birdie. <ul><li> An opposing player has a 10-foot putt for birdie, with three teammates in for par. </li></ul></li><li> The opposing player makes their 10-foot putt, hammers, and raises the dot count to 16. </li><li> The wolf misses their putt, resulting in each player on the four-person team earning 16 dots. </li></ul></li></ol><h4>Scoring, Wagering, and Payouts</h4><ul><li><strong>Dot Value:</strong> Dots can have any agreed-upon dollar value but are typically set at $1 per dot. </li><li><strong>Payouts:</strong> At the end of the round, players settle up based on dot totals. </li><li> Each player pays out the difference in dot totals to opposing players. </li><li><strong>Example:</strong> If Player 1 has 30 dots and Player 2 has 42 dots, Player 1 would owe Player 2 $12 (42 - 30 = 12). </li></ul><p> The structured rules ensure fair, strategic play with a straightforward payout system for settling scores at the end of the round. </p>",12);function B(e,t,o,n,r,a){return F}var q={name:"Rules"};const M=(0,c.Z)(q,[["render",B]]);var R=M,Y={name:"Home",components:{Button:w.Z,Rules:R,Scores:H,Stakes:U},data(){return{stakes:10,double:!0,players:[{name:"Player One",front:0,back:0},{name:"Player Two",front:0,back:0},{name:"Player Three",front:0,back:0},{name:"Player Four",front:0,back:0}]}},computed:{result(){return P(this.players,{stakes:this.stakes,double:this.double})}},methods:{onScoresChange(e,t,o){this.players[e][t]=o}}};const z=(0,c.Z)(Y,[["render",k]]);var K=z,L={name:"HomeView",components:{HelloWorld:K}};const J=(0,c.Z)(L,[["render",y]]);var Q=J;const X=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,9793))}],ee=(0,h.p7)({history:(0,h.PO)("/"),routes:X});var te=ee,oe=o(65),ne=(0,oe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(f).use(ne).use(r.ZP).use(te).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],a=e[c][2];for(var u=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(u=!1,a<l&&(l=a));if(u){e.splice(c--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.aa757521.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="settleup.golf:";o.l=function(n,r,a,l){if(e[n])e[n].push(r);else{var u,s;if(void 0!==a)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var p=i[c];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){u=p;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",t+a),u.src=n),e[n]=[r];var d=function(t,o){u.onerror=u.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var l=o.p+o.u(t),u=new Error,s=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",u.name="ChunkLoadError",u.type=a,u.request=l,r[1](u)}};o.l(l,s,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,l=n[0],u=n[1],s=n[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(s)var c=s(o)}for(t&&t(n);i<l.length;i++)a=l[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunksettleup_golf"]=self["webpackChunksettleup_golf"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5341)}));n=o.O(n)})();
//# sourceMappingURL=app.92fd07a5.js.map