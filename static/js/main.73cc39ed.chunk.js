(this.webpackJsonpvisualise_fundamentals=this.webpackJsonpvisualise_fundamentals||[]).push([[0],{331:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(225),r=c(136),o=c(14),i=c(15),s=c(18),j=c(192),u=c(337),b=c(339),d=c(340),f=c(338),l=window.location.origin;function O(t,e){return fetch("".concat(l,"/data/").concat(t,"/").concat(e,".json"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error("Error:",t)}))}var h=c(16),x=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),c=e[0],a=e[1],l=Object(n.useState)("$"),x=Object(i.a)(l,2),y=x[0],m=x[1],p=Object(s.f)();Object(n.useEffect)((function(){O(p.market,p.id).then((function(t){var e,c=t,n=c.dividends,r=[],i=Object(o.a)(n);try{for(i.s();!(e=i.n()).done;){var s=e.value,j=new Date(s.Date);r.push({x:j.toLocaleDateString(),y:s.Dividends})}}catch(u){i.e(u)}finally{i.f()}a(r),m(c.info.currency)}))}));return Object(h.jsxs)(u.a,{height:300,xScale:{type:"band"},yScale:{type:"linear"},children:[Object(h.jsx)(j.a,{verticalAnchor:"start",children:p.id}),Object(h.jsx)(b.a,{orientation:"bottom"}),Object(h.jsx)(b.a,{orientation:"left",tickFormat:function(t){return"".concat(y," ").concat(t)}}),Object(h.jsx)(d.a,{columns:!1,numTicks:3}),Object(h.jsx)(f.a,Object(r.a)({dataKey:"Line 1",data:c},{xAccessor:function(t){return t.x},yAccessor:function(t){return t.y}}))]})},y=function(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),c=e[0],a=e[1],l=Object(n.useState)("$"),x=Object(i.a)(l,2),y=x[0],m=x[1],p=Object(s.f)();Object(n.useEffect)((function(){O(p.market,p.id).then((function(t){var e,c=t,n=c.historical_price,r=[],i=Object(o.a)(n);try{for(i.s();!(e=i.n()).done;){var s=e.value,j=new Date(s.Date);r.push({x:j.toLocaleDateString(),y:s.Close})}}catch(u){i.e(u)}finally{i.f()}a(r),m(c.info.currency)}))}));return Object(h.jsxs)(u.a,{height:500,xScale:{type:"band"},yScale:{type:"linear"},children:[Object(h.jsx)(j.a,{verticalAnchor:"start",children:p.id}),Object(h.jsx)(b.a,{orientation:"bottom"}),Object(h.jsx)(b.a,{orientation:"left",tickFormat:function(t){return"".concat(y," ").concat(t)}}),Object(h.jsx)(d.a,{columns:!1,numTicks:3}),Object(h.jsx)(f.a,Object(r.a)({dataKey:"Line 1",data:c},{xAccessor:function(t){return t.x},yAccessor:function(t){return t.y}}))]})},m=c(134);Object(a.render)(Object(h.jsx)(m.a,{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/dividends/:market/:id",component:x}),Object(h.jsx)(s.a,{exact:!0,path:"/price/:market/:id",component:y})]})}),document.getElementById("root"))}},[[331,1,2]]]);
//# sourceMappingURL=main.73cc39ed.chunk.js.map