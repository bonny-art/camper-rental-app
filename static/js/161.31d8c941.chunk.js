"use strict";(self.webpackChunkcamper_rental_app=self.webpackChunkcamper_rental_app||[]).push([[161],{161:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var i=t(791),r=t(184),c=function(e){var n=e.children,t=e.onClick;return(0,r.jsx)("button",{type:"button",onClick:t,children:n})},s=t(567),a=t(420),l=t(997),u=function(e){var n=e.camperId,t=e.isInFavorite,i=(0,a.I0)();return(0,r.jsx)("button",{onClick:function(){i(t?l.hC.removeFromFavoriteItemsAction(n):l.hC.addToFavoriteItemsAction(n))},children:t?(0,r.jsx)(s.$0H,{}):(0,r.jsx)(s.BgW,{})})},o=function(e){var n=e.camper,t=n._id,i=n.name,s=n.price,o=n.rating,d=n.reviews,h=n.location,x=n.description,j=n.adults,f=n.transmission,v=n.engine,p=n.details,C=p.kitchen,m=p.airConditioner,g=p.beds,y=n.gallery,I=(0,a.v9)(l.y$.selectFavoriteItems).includes(t),F=C>0,k=m>0,S=h.split(", ").reverse().join(", ");return(0,r.jsxs)("li",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:y[0],alt:""})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:i}),(0,r.jsx)("p",{children:s}),(0,r.jsx)(u,{camperId:t,isInFavorite:I}),(0,r.jsx)("p",{children:"".concat(o,"(").concat(d.length," Reviews)")}),(0,r.jsx)("p",{children:S}),(0,r.jsx)("p",{children:x}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:"".concat(j," adults")}),(0,r.jsx)("div",{children:f}),(0,r.jsx)("div",{children:v}),F&&(0,r.jsx)("div",{children:"Kitchen"}),(0,r.jsx)("div",{children:"".concat(g," beds")}),k&&(0,r.jsx)("div",{children:"AC"})]}),(0,r.jsx)(c,{children:"Shoe more"})]})]},t)},d=function(e){var n=e.campers;return(0,r.jsx)("ul",{children:n.map((function(e){return(0,r.jsx)(o,{camper:e},e._id)}))})},h=function(){var e=(0,a.v9)(l.y$.selectCampers);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{campers:e}),(0,r.jsx)(c,{children:"Load more"})]})},x=t(433),j=t(439),f=function(e){var n=e.suggestions,t=e.onLocationSelect,c=e.isCleared,s=e.setIsCleared,a=(0,i.useState)([]),l=(0,j.Z)(a,2),u=l[0],o=l[1],d=(0,i.useState)(""),h=(0,j.Z)(d,2),x=h[0],f=h[1];(0,i.useEffect)((function(){c&&(f(""),s(!1))}),[c,s]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",onChange:function(e){var t=e.currentTarget.value;f(t);var i=n.filter((function(e){return e.toLowerCase().includes(t.toLowerCase())}));o(t?i:n)},onFocus:function(){o(n)},value:x}),(0,r.jsx)("ul",{children:u.map((function(e,n){return(0,r.jsx)("li",{onClick:function(){return function(e){f(e),o([]),t(e)}(e)},children:e},n)}))})]})},v=function(e){var n=e.onEquipmentChange,t=e.isCleared,c=e.setIsCleared,s=(0,i.useState)([]),a=(0,j.Z)(s,2),l=a[0],u=a[1],o=(0,i.useState)([]),d=(0,j.Z)(o,2),h=d[0],f=d[1];(0,i.useEffect)((function(){(l.length!==h.length||!l.every((function(e){return h.includes(e)})))&&(n(l),f(l))}),[l,h,n]),(0,i.useEffect)((function(){t&&(u([]),f([]),c(!1))}),[t,c]);return(0,r.jsx)("div",{children:["AC","Automatic","Kitchen","TV","Shower/WC"].map((function(e){return(0,r.jsxs)("label",{children:[e,(0,r.jsx)("input",{type:"checkbox",checked:l.includes(e),onChange:function(){return function(e){u((function(n){return n.includes(e)?n.filter((function(n){return n!==e})):[].concat((0,x.Z)(n),[e])}))}(e)}})]},e)}))})},p=function(e){var n=e.onTypeChange,t=e.isCleared,c=e.setIsCleared,s=(0,i.useState)(""),a=(0,j.Z)(s,2),l=a[0],u=a[1];(0,i.useEffect)((function(){t&&(u(""),c(!1))}),[t,c]);var o=function(e){u(e.target.value),n(e.target.value)};return(0,r.jsxs)("form",{children:[(0,r.jsxs)("label",{children:["Van",(0,r.jsx)("input",{type:"radio",value:"Van",name:"typeFilter",onChange:o,checked:"Van"===l})]}),(0,r.jsxs)("label",{children:["Fully Integrated",(0,r.jsx)("input",{type:"radio",value:"Fully Integrated",name:"typeFilter",onChange:o,checked:"Fully Integrated"===l})]}),(0,r.jsxs)("label",{children:["Alcove",(0,r.jsx)("input",{type:"radio",value:"Alcove",name:"typeFilter",onChange:o,checked:"Alcove"===l})]})]})},C=function(){var e=(0,a.I0)(),n=(0,a.v9)(l.y$.getUniqueLocations),t=(0,i.useState)(""),s=(0,j.Z)(t,2),u=s[0],o=s[1],d=(0,i.useState)([]),h=(0,j.Z)(d,2),C=h[0],m=h[1],g=(0,i.useState)(""),y=(0,j.Z)(g,2),I=y[0],F=y[1],k=(0,i.useState)(!1),S=(0,j.Z)(k,2),b=S[0],A=S[1],Z=function(n){if("search"===n){var t={location:u,equipment:C,type:I};e(l.hC.setFiltersAction(t))}else"clear"===n&&(o(""),m([]),F(""),e(l.hC.clearFiltersAction()),A(!0))};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"Location"}),(0,r.jsx)(f,{suggestions:n,onLocationSelect:function(e){o(e)},isCleared:b,setIsCleared:A})]}),(0,r.jsx)("h3",{children:"Filters"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"Vehicle equipment"}),(0,r.jsx)(v,{onEquipmentChange:function(e){m((0,x.Z)(e))},isCleared:b,setIsCleared:A})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"Vehicle type"}),(0,r.jsx)(p,{onTypeChange:function(e){F(e)},isCleared:b,setIsCleared:A})]}),(0,r.jsx)(c,{onClick:function(){return Z("search")},children:"Search"}),(0,r.jsx)(c,{onClick:function(){return Z("clear")},children:"Clear"})]})},m=function(){var e=(0,a.I0)();return(0,i.useEffect)((function(){e(l.hC.getCampersAction())}),[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{}),(0,r.jsx)(h,{})]})}}}]);
//# sourceMappingURL=161.31d8c941.chunk.js.map