(this["webpackJsonpdante-livingston"]=this["webpackJsonpdante-livingston"]||[]).push([[8],{46:function(e,t,i){"use strict";var s=i(1);t.a=function(e){var t=e.className,i=e.hasLink,c=e.height,n=void 0===c?"300":c,r=e.isRounded,a=e.keepAspectRatio,l=e.onClick,o=e.title,d=e.url;return Object(s.jsx)("img",{alt:o,title:o,src:d,className:"rounded shadow-md img-fluid w-100 ".concat(i?"has-link":""," ").concat(t||""," ").concat(r?"rounded-circle px-4":""),onClick:l,style:{objectFit:a?"cover":void 0,height:"".concat(n,"px")}})}},47:function(e,t,i){"use strict";var s=i(1);t.a=function(e){var t=e.children,i=e.includeLineBreak,c=void 0===i||i;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"h3",children:t}),c&&Object(s.jsx)("hr",{className:"border-secondary pb-2"})]})}},85:function(e,t,i){"use strict";i.r(t);var s=i(18),c=i(1),n=i(0),r=i(63),a=(i(73),i(3)),l=i(50),o=i(8),d=i(46),u=i(47);t.default=function(){var e,t,i,j,m=Object(a.h)().slug,b=Object(a.f)(),h=null===l.a||void 0===l.a?void 0:l.a.find((function(e){return e.slug===m}));h||b.push("/not-found");var v=Object(n.useState)(!1),p=Object(s.a)(v,2),x=p[0],O=p[1],g=Object(n.useState)(0),N=Object(s.a)(g,2),f=N[0],k=N[1],w=null===h||void 0===h||null===(e=h.images)||void 0===e?void 0:e.length;return h?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{children:h.title}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-4",children:["inspiration"===h.type&&Object(c.jsx)(d.a,{className:"inspiration"===h.type?"mt-4 mb-5":"",isRounded:!0,hasLink:!1,height:"300",keepAspectRatio:!0,title:h.title,url:h.splashImageUrl}),Object(c.jsx)("blockquote",{dangerouslySetInnerHTML:{__html:h.description}})]}),Object(c.jsxs)("div",{className:"col-8",children:[h.images&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{className:"text-center",children:o.a.images}),Object(c.jsx)("div",{className:"row",children:null===h||void 0===h||null===(t=h.images)||void 0===t?void 0:t.map((function(e,t){return Object(c.jsxs)("div",{className:"col-4 cursor-pointer",onClick:function(){k(t),O(!x)},children:[Object(c.jsx)(d.a,{hasLink:!0,height:"300",keepAspectRatio:!0,title:e.title,url:e.url}),Object(c.jsx)("h3",{className:"h5 mt-2 text-center",dangerouslySetInnerHTML:{__html:e.title}})]},t)}))})]}),h.videos&&Object(c.jsx)("div",{className:"row",children:null===h||void 0===h||null===(i=h.videos)||void 0===i?void 0:i.map((function(e,t){return Object(c.jsxs)("div",{className:"col-12",children:[!!h.images&&Object(c.jsx)("hr",{}),Object(c.jsx)("h2",{children:"Video"}),Object(c.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:Object(c.jsx)("iframe",{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"embed-responsive-item",clipboardWrite:"encrypted-media",frameborder:"0",src:e.url,title:e.title})})]},t)}))}),h.audios&&Object(c.jsx)("div",{className:"row",children:null===h||void 0===h||null===(j=h.audios)||void 0===j?void 0:j.map((function(e,t){return Object(c.jsxs)("div",{className:"col-12",children:[!!h.videos&&Object(c.jsx)("hr",{}),Object(c.jsx)("h2",{children:"Audio"}),Object(c.jsxs)("audio",{controls:!0,className:"w-100",children:[Object(c.jsx)("source",{src:e.url,type:"audio/mpeg"}),"Your browser does not support the audio element."]})]},t)}))})]})]}),"inspiration"===h.type&&Object(c.jsxs)("blockquote",{className:"blockquote text-center mt-3",children:[Object(c.jsx)("br",{}),Object(c.jsx)("strong",{className:"mt-3 mb-0 text-muted",children:o.a.inspirationDisclaimer})]}),x&&!!h.images&&Object(c.jsx)(r.a,{imageTitle:h.images[f].title,imageCaption:h.images[f].description,mainSrc:h.images[f].url,nextSrc:h.images[(f+1)%w].url,prevSrc:h.images[(f+w-1)%w].url,onCloseRequest:function(){return O(!x)},onMovePrevRequest:function(){return k((f+w-1)%w)},onMoveNextRequest:function(){return k((f+1)%w)}})]}):null}}}]);
//# sourceMappingURL=8.094cd891.chunk.js.map