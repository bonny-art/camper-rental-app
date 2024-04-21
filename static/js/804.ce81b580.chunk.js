"use strict";(self.webpackChunkcamper_rental_app=self.webpackChunkcamper_rental_app||[]).push([[804],{9804:function(n,e,t){t.r(e),t.d(e,{default:function(){return Zn}});var r,i,o,s,c,l,a,u,d,p,h,f,x,g,m,v,j,y,b,w,Z,k,S,C,E,F=t(9439),O=t(2940),_=t(9309),I=t(2791),z=t(4420),A=t(2997),V=t(168),L=t(225),P=L.Z.div(r||(r=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 57px;\n\n  width: 1312px;\n\n  padding-left: 424px;\n"]))),M=L.Z.div(i||(i=(0,V.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: calc(100vh - 186px);\n"]))),T=L.Z.div(o||(o=(0,V.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),N=t(6094),R=t(2896),q=t(7169),B=t.n(q),$=t(8907),D=t(184),U=function(){return(0,D.jsx)(B(),{color:$.r.colors.orange,size:25,"aria-label":"Loading Spinner","data-testid":"loader"})},G=function(){var n=(0,z.v9)(A.y$.selectFilteredCampers),e=(0,z.v9)(A.y$.selectIsLoading),t=(0,I.useState)(4),r=(0,F.Z)(t,2),i=r[0],o=r[1],s=n.slice(0,i);(0,I.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,I.useEffect)((function(){i>4&&setTimeout((function(){(0,N.MG)()}),500)}),[i]);var c=i<n.length;return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(P,{children:e?(0,D.jsx)(M,{children:(0,D.jsx)(U,{})}):(0,D.jsxs)(D.Fragment,{children:[s.length?(0,D.jsx)(_.k,{campers:s}):(0,D.jsx)(R.v,{children:"There are no campers for your request"}),(0,D.jsx)(T,{children:c&&(0,D.jsx)(O.z,{className:"load",onClick:function(){o((function(n){return n+4}))},children:"Load more"})})]})})})},K=t(3433),W=t(5561),H=L.Z.div(s||(s=(0,V.Z)(["\n  position: relative;\n\n  &:focus-visible {\n    outline: none;\n  }\n\n  svg {\n    position: absolute;\n\n    top: 18px;\n    left: 18px;\n\n    width: 18px;\n    height: 20px;\n    fill: ",";\n    stroke: ",";\n  }\n\n  input {\n    border: none;\n    border-radius: 10px;\n    padding: 18px;\n    padding-left: 44px;\n    width: 400px;\n    height: 56px;\n\n    line-height: 1.25;\n\n    background: ",";\n\n    &:focus-visible {\n      outline: none;\n    }\n\n    &::placeholder {\n      line-height: 1.25;\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.lightGray}),(function(n){return n.theme.colors.blackTransp06})),J=function(n){var e=n.suggestions,t=n.onLocationSelect,r=n.isCleared,i=n.setIsCleared,o=(n.icon,(0,I.useState)("")),s=(0,F.Z)(o,2),c=s[0],l=s[1];(0,I.useEffect)((function(){r&&(l(""),i(!1))}),[r,i]);return(0,D.jsxs)(H,{children:[(0,D.jsx)("input",{type:"text",list:"suggestions",onChange:function(n){var e=n.target.value;l(e),t(e)},value:c,placeholder:"City"}),(0,D.jsx)("datalist",{id:"suggestions",children:e.map((function(n,e){return(0,D.jsx)("option",{value:n},e)}))}),(0,D.jsx)("svg",{children:(0,D.jsx)("use",{href:"".concat(W.Z,"#map-pin")})})]})},Q=L.Z.div(c||(c=(0,V.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 10px;\n  row-gap: 8px;\n\n  .ac {\n    width: 112px;\n\n    svg {\n      fill: ",";\n    }\n  }\n\n  .transmission {\n    width: 115px;\n\n    svg {\n      fill: ",";\n      stroke: ",";\n    }\n  }\n\n  .kitchen {\n    width: 113px;\n\n    svg {\n      fill: ",";\n      stroke: ",";\n    }\n  }\n\n  .tv {\n    width: 112px;\n\n    svg {\n      fill: ",";\n      stroke: ",";\n    }\n  }\n\n  .shower {\n    width: 115px;\n\n    svg {\n      fill: ",";\n      stroke: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.black})),X=L.Z.div(l||(l=(0,V.Z)(["\n  display: flex;\n  gap: 8px;\n  font-family: 'Roboto-Regular';\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.25;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n"]))),Y=L.Z.input(a||(a=(0,V.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),nn=L.Z.label(u||(u=(0,V.Z)(["\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n"]))),en=L.Z.span(d||(d=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid ",";\n  border-radius: 10px;\n\n  transition: border-color ",";\n\n  height: 95px;\n\n  cursor: pointer;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n\n  p {\n    font-family: 'Inter';\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.25;\n    text-align: center;\n    color: ",";\n  }\n\n  border-color: ",";\n"])),(function(n){return n.theme.colors.blackTransp02}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.black}),(function(n){var e=n.theme;return n.isSelected&&e.colors.orange})),tn=L.Z.svg(p||(p=(0,V.Z)(["\n  width: 40px;\n  height: 28px;\n"]))),rn=function(n){var e=n.onEquipmentChange,t=n.isCleared,r=n.setIsCleared,i=(0,I.useState)([]),o=(0,F.Z)(i,2),s=o[0],c=o[1],l=(0,I.useState)([]),a=(0,F.Z)(l,2),u=a[0],d=a[1];(0,I.useEffect)((function(){(s.length!==u.length||!s.every((function(n){return u.includes(n)})))&&(e(s),d(s))}),[s,u,e]),(0,I.useEffect)((function(){t&&(c([]),d([]),r(!1))}),[t,r]);return(0,D.jsx)(Q,{children:["AC","Automatic","Kitchen","TV","Shower/WC"].map((function(n){return(0,D.jsxs)(X,{children:[(0,D.jsx)(Y,{type:"checkbox",id:n,checked:s.includes(n),onChange:function(){return function(n){c((function(e){return e.includes(n)?e.filter((function(e){return e!==n})):[].concat((0,K.Z)(e),[n])}))}(n)}}),(0,D.jsx)(nn,{htmlFor:n,children:(0,D.jsxs)(en,{className:(0,N.yB)(n),isSelected:s.includes(n),children:[(0,D.jsx)(tn,{children:(0,D.jsx)("use",{href:"".concat(W.Z,"#").concat((0,N.yB)(n))})}),(0,D.jsx)("p",{children:n})]})})]},n)}))})},on=L.Z.form(h||(h=(0,V.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),sn=L.Z.div(f||(f=(0,V.Z)(["\n  display: flex;\n  gap: 8px;\n  font-family: 'Roboto-Regular';\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.25;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n\n  .van {\n    width: 100px;\n  }\n\n  .fully-integrated {\n    width: 128px;\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n\n  .alcove {\n    width: 112px;\n  }\n"]))),cn=L.Z.input(x||(x=(0,V.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),ln=L.Z.label(g||(g=(0,V.Z)(["\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n"]))),an=L.Z.span(m||(m=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid ",";\n  border-radius: 10px;\n\n  transition: border-color ",";\n\n  height: 95px;\n\n  cursor: pointer;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n\n  p {\n    font-family: 'Inter';\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.25;\n    text-align: center;\n    color: ",";\n  }\n\n  border-color: ",";\n"])),(function(n){return n.theme.colors.blackTransp02}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.black}),(function(n){var e=n.theme;return n.isSelected&&e.colors.orange})),un=L.Z.svg(v||(v=(0,V.Z)(["\n  width: 40px;\n  height: 28px;\n"]))),dn=function(n){var e=n.onTypeChange,t=n.isCleared,r=n.setIsCleared,i=(0,I.useState)(""),o=(0,F.Z)(i,2),s=o[0],c=o[1];(0,I.useEffect)((function(){t&&(c(""),r(!1))}),[t,r]);var l=function(n){c(n.target.value),e(n.target.value)};return(0,D.jsxs)(on,{children:[(0,D.jsxs)(sn,{children:[(0,D.jsx)(cn,{id:"van",type:"radio",value:"Van",name:"typeFilter",onChange:l,checked:"Van"===s}),(0,D.jsx)(ln,{htmlFor:"van",children:(0,D.jsxs)(an,{className:"van",isSelected:"Van"===s,children:[(0,D.jsx)(un,{children:(0,D.jsx)("use",{href:"".concat(W.Z,"#camper-van")})}),(0,D.jsx)("p",{children:"Van"})]})})]}),(0,D.jsxs)(sn,{children:[(0,D.jsx)(cn,{id:"fully-integrated",type:"radio",value:"Fully Integrated",name:"typeFilter",onChange:l,checked:"Fully Integrated"===s}),(0,D.jsx)(ln,{htmlFor:"fully-integrated",children:(0,D.jsxs)(an,{className:"fully-integrated",isSelected:"Fully Integrated"===s,children:[(0,D.jsx)(un,{children:(0,D.jsx)("use",{href:"".concat(W.Z,"#camper-fully-integrated")})}),(0,D.jsx)("p",{children:"Fully Integrated"})]})})]}),(0,D.jsxs)(sn,{children:[(0,D.jsx)(cn,{id:"alcove",type:"radio",value:"Alcove",name:"typeFilter",onChange:l,checked:"Alcove"===s}),(0,D.jsx)(ln,{htmlFor:"alcove",children:(0,D.jsxs)(an,{className:"alcove",isSelected:"Alcove"===s,children:[(0,D.jsx)(un,{children:(0,D.jsx)("use",{href:"".concat(W.Z,"#camper-alcove")})}),(0,D.jsx)("p",{children:"Alcove"})]})})]})]})},pn=L.Z.div(j||(j=(0,V.Z)(["\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  gap: 64px;\n\n  width: 360px;\n"]))),hn=L.Z.div(y||(y=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n"]))),fn=L.Z.div(b||(b=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  h3 {\n    font-weight: 500;\n    font-size: 16px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.blackTransp06})),xn=L.Z.div(w||(w=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n\n  h3 {\n    font-weight: 500;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.gray})),gn=L.Z.div(Z||(Z=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),mn=L.Z.div(k||(k=(0,V.Z)(["\n  height: 48px;\n\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.colors.filterLine})),vn=L.Z.div(S||(S=(0,V.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),jn=function(){var n=(0,z.I0)(),e=(0,z.v9)(A.y$.selectUniqueLocations),t=(0,I.useState)(""),r=(0,F.Z)(t,2),i=r[0],o=r[1],s=(0,I.useState)([]),c=(0,F.Z)(s,2),l=c[0],a=c[1],u=(0,I.useState)(""),d=(0,F.Z)(u,2),p=d[0],h=d[1],f=(0,I.useState)(!1),x=(0,F.Z)(f,2),g=x[0],m=x[1],v=function(e){if("search"===e){var t={location:i,equipment:l,type:(0,N.yB)(p)};n(A.hC.setFiltersAction(t))}else"clear"===e&&(o(""),a([]),h(""),n(A.hC.clearFiltersAction()),m(!0))};return(0,D.jsxs)(pn,{children:[(0,D.jsxs)(hn,{children:[(0,D.jsxs)(fn,{children:[(0,D.jsx)("h3",{children:"Location"}),(0,D.jsx)(J,{suggestions:e,onLocationSelect:function(n){o(n)},isCleared:g,setIsCleared:m})]}),(0,D.jsxs)(xn,{children:[(0,D.jsx)("h3",{children:"Filters"}),(0,D.jsxs)(gn,{children:[(0,D.jsx)(mn,{children:(0,D.jsx)("h4",{children:"Vehicle equipment"})}),(0,D.jsx)(rn,{onEquipmentChange:function(n){a((0,K.Z)(n))},isCleared:g,setIsCleared:m})]})]}),(0,D.jsxs)(gn,{children:[(0,D.jsx)(mn,{children:(0,D.jsx)("h4",{children:"Vehicle type"})}),(0,D.jsx)(dn,{onTypeChange:function(n){h(n)},isCleared:g,setIsCleared:m})]})]}),(0,D.jsxs)(vn,{children:[(0,D.jsx)(O.z,{className:"form",onClick:function(){return v("search")},children:"Search"}),(0,D.jsx)(O.z,{className:"clear",onClick:function(){return v("clear")},children:"Clear"})]})]})},yn=L.Z.div(C||(C=(0,V.Z)(["\n  padding: 114px 0 57px;\n"]))),bn=L.Z.div(E||(E=(0,V.Z)(["\n  width: 1352px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),wn=function(){return(0,D.jsx)(yn,{children:(0,D.jsxs)(bn,{children:[(0,D.jsx)(jn,{}),(0,D.jsx)(G,{})]})})},Zn=function(){var n=(0,z.I0)();return(0,I.useEffect)((function(){n(A.hC.getCampersAction())}),[n]),(0,D.jsx)(wn,{})}},7169:function(n,e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(e,t);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,i)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),s=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&i(e,n,t);return o(e,n),e},c=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};Object.defineProperty(e,"__esModule",{value:!0});var l=s(t(2791)),a=t(8945),u=(0,t(7074).createAnimation)("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");e.default=function(n){var e=n.loading,t=void 0===e||e,i=n.color,o=void 0===i?"#000000":i,s=n.speedMultiplier,d=void 0===s?1:s,p=n.cssOverride,h=void 0===p?{}:p,f=n.size,x=void 0===f?15:f,g=n.margin,m=void 0===g?2:g,v=c(n,["loading","color","speedMultiplier","cssOverride","size","margin"]),j=r({display:"inherit"},h),y=function(n){return{display:"inline-block",backgroundColor:o,width:(0,a.cssValue)(x),height:(0,a.cssValue)(x),margin:(0,a.cssValue)(m),borderRadius:"100%",animation:"".concat(u," ").concat(.7/d,"s ").concat(n%2?"0s":"".concat(.35/d,"s")," infinite linear"),animationFillMode:"both"}};return t?l.createElement("span",r({style:j},v),l.createElement("span",{style:y(1)}),l.createElement("span",{style:y(2)}),l.createElement("span",{style:y(3)})):null}},7074:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,s="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return o&&o.insertRule(s,0),r}},8945:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(n.match(/[^0-9]*$/)||"").toString();return t[i]?{value:e,unit:i}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(n){var e=r(n);return"".concat(e.value).concat(e.unit)}}}]);
//# sourceMappingURL=804.ce81b580.chunk.js.map