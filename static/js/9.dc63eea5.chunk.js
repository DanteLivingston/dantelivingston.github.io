(this["webpackJsonpdante-livingston"]=this["webpackJsonpdante-livingston"]||[]).push([[9],{46:function(e,t,i){"use strict";var a=i(1);t.a=function(e){var t=e.className,i=e.hasLink,c=e.height,s=void 0===c?"300":c,n=e.isRounded,r=e.keepAspectRatio,l=e.onClick,o=e.title,d=e.url;return Object(a.jsx)("img",{alt:o,title:o,src:d,className:"rounded shadow-md img-fluid w-100 ".concat(i?"has-link":""," ").concat(t||""," ").concat(n?"rounded-circle px-4":""),onClick:l,style:{objectFit:r?"cover":void 0,height:"".concat(s,"px")}})}},47:function(e,t,i){"use strict";var a=i(1);t.a=function(e){var t=e.children,i=e.includeLineBreak,c=void 0===i||i;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"h3",children:t}),c&&Object(a.jsx)("hr",{className:"border-secondary pb-2"})]})}},94:function(e,t,i){"use strict";i.r(t);var a=i(1),c=i(9),s=i(50),n=i(47),r=i(8),l=i(3),o=i(46),d=i(54),j=i(55),u=i(43),h=i(44),b=i(74),x=i.n(b),p=i(18),m=i(87),v=i(88),O=i(83),g=i(89),f=i(90),N=i(0);var k=function(e){var t,i=e.items,s=Object(N.useState)(0),n=Object(p.a)(s,2),r=n[0],l=n[1],d=Object(N.useState)(!1),j=Object(p.a)(d,2),u=j[0],h=j[1],b=function(){if(!u){var e=r===i.length-1?0:r+1;l(e)}},x=function(){if(!u){var e=0===r?i.length-1:r-1;l(e)}};return Object(a.jsxs)(m.a,{activeIndex:r,interval:1e4,next:b,previous:x,className:"shadow-md",pause:"hover",children:[Object(a.jsx)(v.a,{items:i,activeIndex:r,onClickHandler:function(e){u||l(e)}}),null===i||void 0===i||null===(t=i.filter((function(e){return"inspiration"!==e.type})))||void 0===t?void 0:t.map((function(e){var t;return Object(a.jsxs)(O.a,{onExiting:function(){return h(!0)},onExited:function(){return h(!1)},children:[Object(a.jsx)(c.b,{to:"/art-details/".concat(e.slug),children:Object(a.jsx)(o.a,{hasLink:!0,url:e.splashImageUrl||e.images[0].url,title:e.title,height:"400",keepAspectRatio:!0})}),Object(a.jsx)(g.a,{captionHeader:e.title,captionText:null!==(t=e.shortDescription)&&void 0!==t?t:""})]},e.slug)})),Object(a.jsx)(f.a,{direction:"prev",directionText:"Previous",onClickHandler:x}),Object(a.jsx)(f.a,{direction:"next",directionText:"Next",onClickHandler:b})]})};t.default=function(){var e,t=Object(l.f)(),i=x()(null!==(e=null===s.a||void 0===s.a?void 0:s.a.filter((function(e){var t=e.type;return"inspiration"!==t&&"tools"!==t})))&&void 0!==e?e:[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(n.a,{children:r.a.home}),Object(a.jsx)(k,{items:i}),Object(a.jsx)("hr",{className:"border-secondary my-4"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsxs)("div",{className:"card shadow-lg",children:[Object(a.jsx)(o.a,{className:"card-img-top",hasLink:!0,keepAspectRatio:!0,onClick:function(){return t.push("digital-art")},title:r.a.digitalDescription,url:d.a}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsxs)(c.b,{to:"/digital-art",children:[Object(a.jsx)(u.a,{style:{marginTop:"-5px"},className:"mr-2"}),r.a.digital]})}),Object(a.jsx)("p",{className:"card-text",children:r.a.digitalDescription})]})]})}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsxs)("div",{className:"card shadow-lg",children:[Object(a.jsx)(o.a,{className:"card-img-top",hasLink:!0,keepAspectRatio:!0,onClick:function(){return t.push("traditional-art")},title:r.a.traditionalDescription,url:j.a}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsxs)(c.b,{to:"/traditional-art",children:[Object(a.jsx)(h.a,{style:{marginTop:"-5px"},className:"mr-2"}),r.a.traditional]})}),Object(a.jsx)("p",{className:"card-text",children:r.a.traditionalDescription})]})]})})]})]})}}}]);
//# sourceMappingURL=9.dc63eea5.chunk.js.map