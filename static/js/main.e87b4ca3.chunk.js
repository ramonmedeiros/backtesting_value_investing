(this.webpackJsonpvisualise_fundamentals=this.webpackJsonpvisualise_fundamentals||[]).push([[0],{355:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(68),i=n(19),r=n(16),o=n(356),d=n(357),s=n(189),u=n(190),j=n(41),h=n(74),f=n(193),b=window.location.origin;function l(t,e,n){return fetch("".concat(b,"/data/").concat(t,"/").concat(n,"/").concat(e,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}function O(t,e){return l(t,e,"info").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))}var m=n(18),v=n(12);var x=n(362);var p=n(70);Object(a.render)(Object(v.jsx)(p.a,{children:Object(v.jsxs)(m.c,{children:[Object(v.jsx)(m.a,{exact:!0,path:"/dividends/:market/:id",component:function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1],b=Object(c.useState)("$"),x=Object(r.a)(b,2),p=x[0],y=x[1],k=Object(m.f)();return Object(c.useEffect)((function(){var t,e;(t=k.market,e=k.id,l(t,e,"dividends").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))).then((function(t){var e,n=t,c=[],r=Object(i.a)(n);try{for(r.s();!(e=r.n()).done;){var o=e.value,d=new Date(o.Date);c.push({x:d.toLocaleDateString(),y:o.Dividends})}}catch(s){r.e(s)}finally{r.f()}a(c)})),O(k.market,k.id).then((function(t){y(t.currency)}))}),[k.id,k.market]),Object(v.jsx)("div",{style:{width:800,height:600},children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(d.a,{width:500,height:300,data:n,margin:{top:5,right:30,left:20,bottom:5},children:[Object(v.jsx)(s.a,{dataKey:"x"}),Object(v.jsx)(u.a,{tickFormatter:function(t){return"".concat(p," ").concat(t)}}),Object(v.jsx)(j.a,{}),Object(v.jsx)(h.a,{}),Object(v.jsx)(f.a,{type:"monotone",dataKey:"y",name:"Dividends",stroke:"#8884d8",dot:!1})]})})})}}),Object(v.jsx)(m.a,{exact:!0,path:"/price/:market/:id",component:function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1],b=Object(c.useState)("$"),x=Object(r.a)(b,2),p=x[0],y=x[1],k=Object(m.f)();return Object(c.useEffect)((function(){var t,e;(t=k.market,e=k.id,l(t,e,"prices").then((function(t){if(null!=t)return t})).catch((function(t){console.log(t)}))).then((function(t){var e,n=t,c=[],r=Object(i.a)(n);try{for(r.s();!(e=r.n()).done;){var o=e.value,d=new Date(o.Date);c.push({x:d.toLocaleDateString(),y:o.Close})}}catch(s){r.e(s)}finally{r.f()}a(c)})),O(k.market,k.id).then((function(t){y(t.currency)}))}),[k.id,k.market]),Object(v.jsx)("div",{style:{width:800,height:600},children:Object(v.jsx)(o.a,{children:Object(v.jsxs)(d.a,{width:800,height:600,data:n,margin:{top:5,right:30,left:20,bottom:5},children:[Object(v.jsx)(s.a,{dataKey:"x"}),Object(v.jsx)(u.a,{tickFormatter:function(t){return"".concat(p," ").concat(t)}}),Object(v.jsx)(j.a,{}),Object(v.jsx)(h.a,{}),Object(v.jsx)(f.a,{type:"monotone",dataKey:"y",name:"Historical Price",stroke:"#8884d8",dot:!1})]})})})}}),Object(v.jsx)(m.a,{exact:!0,path:"/market/:market",component:function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(m.f)();return Object(c.useEffect)((function(){var t;(t=i.market,fetch("".concat(b,"/data/").concat(t,"/dividendsRate"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))).then((function(t){var e=t.map((function(t){var e=Number((100*t.dividendRate).toFixed(2));return{name:"".concat(t.ticker," ").concat(e,"%"),dividends:e}}));a(e.sort((function(t,e){var n=t.dividends,c=e.dividends;return n>c?-1:n<c?1:0})))}))}),[i.market]),Object(v.jsx)("div",{style:{width:800,height:600},children:Object(v.jsx)(o.a,{width:"100%",height:"100%",children:Object(v.jsx)(x.a,{width:400,height:200,data:n,dataKey:"dividends",aspectRatio:4/3,stroke:"#fff",fill:"#8884d8"})})})}})]})}),document.getElementById("root"))}},[[355,1,2]]]);
//# sourceMappingURL=main.e87b4ca3.chunk.js.map