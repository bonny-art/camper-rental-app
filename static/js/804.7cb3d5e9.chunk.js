"use strict";(self.webpackChunkcamper_rental_app=self.webpackChunkcamper_rental_app||[]).push([[804],{9804:function(n,e,t){t.r(e),t.d(e,{default:function(){return Sn}});var r,i,o,s,l,c,a,u,d,p,h,f,x,g,m,v,j,y,b,w,Z,k,S,C,E,F,O=t(9439),_=t(2940),I=t(2296),z=t(2791),A=t(4420),V=t(2997),L=t(168),P=t(225),M=P.Z.div(r||(r=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 57px;\n\n  width: 1312px;\n\n  padding-left: 424px;\n"]))),T=P.Z.div(i||(i=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: calc(100vh - 186px);\n"]))),N=P.Z.div(o||(o=(0,L.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),R=t(6094),q=t(2896),B=t(7169),$=t.n(B),D=t(8907),U=t(184),G=function(){return(0,U.jsx)($(),{color:D.r.colors.orange,size:25,"aria-label":"Loading Spinner","data-testid":"loader"})},K=function(){var n=(0,A.v9)(V.y$.selectFilteredCampers),e=(0,A.v9)(V.y$.selectIsLoading),t=(0,z.useState)(4),r=(0,O.Z)(t,2),i=r[0],o=r[1],s=n.slice(0,i);(0,z.useEffect)((function(){window.scrollTo(0,0)}),[s]),(0,z.useEffect)((function(){i>4&&setTimeout((function(){(0,R.MG)()}),500)}),[i]);var l=i<n.length;return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(M,{children:e?(0,U.jsx)(T,{children:(0,U.jsx)(G,{})}):(0,U.jsxs)(U.Fragment,{children:[s.length?(0,U.jsx)(I.k,{campers:s}):(0,U.jsx)(q.v,{children:"There are no campers for your request"}),(0,U.jsx)(N,{children:l&&(0,U.jsx)(_.z,{className:"load",onClick:function(){o((function(n){return n+4}))},children:"Load more"})})]})})})},W=t(3433),H=t(5561),J=P.Z.div(s||(s=(0,L.Z)(["\n  position: relative;\n\n  &:focus-visible {\n    outline: none;\n  }\n\n  svg {\n    position: absolute;\n\n    top: 18px;\n    left: 18px;\n\n    width: 18px;\n    height: 20px;\n    fill: transparent;\n    stroke: ",";\n  }\n\n  input {\n    border: none;\n    border-radius: 10px;\n    padding: 18px;\n    padding-left: 44px;\n    width: 360px;\n    height: 56px;\n\n    line-height: 1.25;\n\n    background: ",";\n\n    &:focus-visible {\n      outline: none;\n    }\n\n    &::placeholder {\n      line-height: 1.25;\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.lightGray}),(function(n){return n.theme.colors.blackTransp06})),Q=function(n){var e=n.suggestions,t=n.onLocationSelect,r=n.isCleared,i=n.setIsCleared,o=(n.icon,(0,z.useState)("")),s=(0,O.Z)(o,2),l=s[0],c=s[1];(0,z.useEffect)((function(){r&&(c(""),i(!1))}),[r,i]);return(0,U.jsxs)(J,{children:[(0,U.jsx)("input",{type:"text",list:"suggestions",onChange:function(n){var e=n.target.value;c(e),t(e)},value:l,placeholder:"City"}),(0,U.jsx)("datalist",{id:"suggestions",children:e.map((function(n,e){return(0,U.jsx)("option",{value:n},e)}))}),(0,U.jsx)("svg",{children:(0,U.jsx)("use",{href:"".concat(H.Z,"#map-pin")})})]})},X=P.Z.div(l||(l=(0,L.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 10px;\n  row-gap: 8px;\n\n  .ac {\n    width: 112px;\n\n    svg {\n      fill: ",";\n    }\n  }\n\n  .transmission {\n    width: 115px;\n\n    svg {\n      fill: transparent;\n      stroke: ",";\n    }\n  }\n\n  .kitchen {\n    width: 113px;\n\n    svg {\n      fill: transparent;\n      stroke: ",";\n    }\n  }\n\n  .tv {\n    width: 112px;\n\n    svg {\n      fill: transparent;\n      stroke: ",";\n    }\n  }\n\n  .shower {\n    width: 115px;\n\n    svg {\n      fill: transparent;\n      stroke: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black})),Y=P.Z.div(c||(c=(0,L.Z)(["\n  display: flex;\n  gap: 8px;\n  font-family: 'Roboto-Regular';\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.25;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n"]))),nn=P.Z.input(a||(a=(0,L.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),en=P.Z.label(u||(u=(0,L.Z)(["\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n"]))),tn=P.Z.span(d||(d=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid ",";\n  border-radius: 10px;\n\n  transition: border-color ",";\n\n  height: 95px;\n\n  cursor: pointer;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n\n  p {\n    font-family: 'Inter';\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.25;\n    text-align: center;\n    color: ",";\n  }\n\n  border-color: ",";\n"])),(function(n){return n.theme.colors.blackTransp02}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.black}),(function(n){var e=n.theme;return n.isSelected&&e.colors.orange})),rn=P.Z.svg(p||(p=(0,L.Z)(["\n  width: 40px;\n  height: 28px;\n"]))),on=function(n){var e=n.onEquipmentChange,t=n.isCleared,r=n.setIsCleared,i=(0,z.useState)([]),o=(0,O.Z)(i,2),s=o[0],l=o[1],c=(0,z.useState)([]),a=(0,O.Z)(c,2),u=a[0],d=a[1];(0,z.useEffect)((function(){(s.length!==u.length||!s.every((function(n){return u.includes(n)})))&&(e(s),d(s))}),[s,u,e]),(0,z.useEffect)((function(){t&&(l([]),d([]),r(!1))}),[t,r]);return(0,U.jsx)(X,{children:["AC","Automatic","Kitchen","TV","Shower/WC"].map((function(n){return(0,U.jsxs)(Y,{children:[(0,U.jsx)(nn,{type:"checkbox",id:n,checked:s.includes(n),onChange:function(){return function(n){l((function(e){return e.includes(n)?e.filter((function(e){return e!==n})):[].concat((0,W.Z)(e),[n])}))}(n)}}),(0,U.jsx)(en,{htmlFor:n,children:(0,U.jsxs)(tn,{className:(0,R.yB)(n),isSelected:s.includes(n),children:[(0,U.jsx)(rn,{children:(0,U.jsx)("use",{href:"".concat(H.Z,"#").concat((0,R.yB)(n))})}),(0,U.jsx)("p",{children:n})]})})]},n)}))})},sn=P.Z.form(h||(h=(0,L.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),ln=P.Z.div(f||(f=(0,L.Z)(["\n  display: flex;\n  gap: 8px;\n  font-family: 'Roboto-Regular';\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.25;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n\n  .van {\n    width: 100px;\n  }\n\n  .fully-integrated {\n    width: 128px;\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n\n  .alcove {\n    width: 112px;\n  }\n"]))),cn=P.Z.input(x||(x=(0,L.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),an=P.Z.label(g||(g=(0,L.Z)(["\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n"]))),un=P.Z.span(m||(m=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  justify-content: center;\n  align-items: center;\n\n  border: 1px solid ",";\n  border-radius: 10px;\n\n  transition: border-color ",";\n\n  height: 95px;\n\n  cursor: pointer;\n\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE10+/Edge */\n  user-select: none; /* Standard */\n\n  p {\n    font-family: 'Inter';\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.25;\n    text-align: center;\n    color: ",";\n  }\n\n  border-color: ",";\n"])),(function(n){return n.theme.colors.blackTransp02}),(function(n){return n.theme.animation.transition}),(function(n){return n.theme.colors.black}),(function(n){var e=n.theme;return n.isSelected&&e.colors.orange})),dn=P.Z.svg(v||(v=(0,L.Z)(["\n  width: 40px;\n  height: 28px;\n"]))),pn=function(n){var e=n.onTypeChange,t=n.isCleared,r=n.setIsCleared,i=(0,z.useState)(""),o=(0,O.Z)(i,2),s=o[0],l=o[1];(0,z.useEffect)((function(){t&&(l(""),r(!1))}),[t,r]);var c=function(n){l(n.target.value),e(n.target.value)};return(0,U.jsxs)(sn,{children:[(0,U.jsxs)(ln,{children:[(0,U.jsx)(cn,{id:"van",type:"radio",value:"Van",name:"typeFilter",onChange:c,checked:"Van"===s}),(0,U.jsx)(an,{htmlFor:"van",children:(0,U.jsxs)(un,{className:"van",isSelected:"Van"===s,children:[(0,U.jsx)(dn,{children:(0,U.jsx)("use",{href:"".concat(H.Z,"#camper-van")})}),(0,U.jsx)("p",{children:"Van"})]})})]}),(0,U.jsxs)(ln,{children:[(0,U.jsx)(cn,{id:"fully-integrated",type:"radio",value:"Fully Integrated",name:"typeFilter",onChange:c,checked:"Fully Integrated"===s}),(0,U.jsx)(an,{htmlFor:"fully-integrated",children:(0,U.jsxs)(un,{className:"fully-integrated",isSelected:"Fully Integrated"===s,children:[(0,U.jsx)(dn,{children:(0,U.jsx)("use",{href:"".concat(H.Z,"#camper-fully-integrated")})}),(0,U.jsx)("p",{children:"Fully Integrated"})]})})]}),(0,U.jsxs)(ln,{children:[(0,U.jsx)(cn,{id:"alcove",type:"radio",value:"Alcove",name:"typeFilter",onChange:c,checked:"Alcove"===s}),(0,U.jsx)(an,{htmlFor:"alcove",children:(0,U.jsxs)(un,{className:"alcove",isSelected:"Alcove"===s,children:[(0,U.jsx)(dn,{children:(0,U.jsx)("use",{href:"".concat(H.Z,"#camper-alcove")})}),(0,U.jsx)("p",{children:"Alcove"})]})})]})]})},hn=P.Z.div(j||(j=(0,L.Z)(["\n  position: fixed;\n\n  width: 380px;\n\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border-radius: 7px;\n  }\n"])),(function(n){return n.theme.colors.scrollbar})),fn=P.Z.div(y||(y=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 64px;\n\n  width: 360px;\n  height: calc(100vh - 254px);\n"]))),xn=P.Z.div(b||(b=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n"]))),gn=P.Z.div(w||(w=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  h3 {\n    font-weight: 500;\n    font-size: 16px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.blackTransp06})),mn=P.Z.div(Z||(Z=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n\n  h3 {\n    font-weight: 500;\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.gray})),vn=P.Z.div(k||(k=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),jn=P.Z.div(S||(S=(0,L.Z)(["\n  height: 48px;\n\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.colors.filterLine})),yn=P.Z.div(C||(C=(0,L.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),bn=function(){var n=(0,A.I0)(),e=(0,A.v9)(V.y$.selectUniqueLocations),t=(0,z.useState)(""),r=(0,O.Z)(t,2),i=r[0],o=r[1],s=(0,z.useState)([]),l=(0,O.Z)(s,2),c=l[0],a=l[1],u=(0,z.useState)(""),d=(0,O.Z)(u,2),p=d[0],h=d[1],f=(0,z.useState)(!1),x=(0,O.Z)(f,2),g=x[0],m=x[1],v=function(e){if("search"===e){var t={location:i,equipment:c,type:(0,R.yB)(p)};n(V.hC.setFiltersAction(t))}else"clear"===e&&(o(""),a([]),h(""),n(V.hC.clearFiltersAction()),m(!0))};return(0,U.jsx)(hn,{children:(0,U.jsxs)(fn,{children:[(0,U.jsxs)(xn,{children:[(0,U.jsxs)(gn,{children:[(0,U.jsx)("h3",{children:"Location"}),(0,U.jsx)(Q,{suggestions:e,onLocationSelect:function(n){o(n)},isCleared:g,setIsCleared:m})]}),(0,U.jsxs)(mn,{children:[(0,U.jsx)("h3",{children:"Filters"}),(0,U.jsxs)(vn,{children:[(0,U.jsx)(jn,{children:(0,U.jsx)("h4",{children:"Vehicle equipment"})}),(0,U.jsx)(on,{onEquipmentChange:function(n){a((0,W.Z)(n))},isCleared:g,setIsCleared:m})]})]}),(0,U.jsxs)(vn,{children:[(0,U.jsx)(jn,{children:(0,U.jsx)("h4",{children:"Vehicle type"})}),(0,U.jsx)(pn,{onTypeChange:function(n){h(n)},isCleared:g,setIsCleared:m})]})]}),(0,U.jsxs)(yn,{children:[(0,U.jsx)(_.z,{className:"form",onClick:function(){return v("search")},children:"Search"}),(0,U.jsx)(_.z,{className:"clear",onClick:function(){return v("clear")},children:"Clear"})]})]})})},wn=P.Z.div(E||(E=(0,L.Z)(["\n  padding: 114px 0 57px;\n"]))),Zn=P.Z.div(F||(F=(0,L.Z)(["\n  width: 1352px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),kn=function(){return(0,U.jsx)(wn,{children:(0,U.jsxs)(Zn,{children:[(0,U.jsx)(bn,{}),(0,U.jsx)(K,{})]})})},Sn=function(){var n=(0,A.I0)();return(0,z.useEffect)((function(){n(V.hC.getCampersAction())}),[n]),(0,U.jsx)(kn,{})}},7169:function(n,e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(e,t);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,i)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),s=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&i(e,n,t);return o(e,n),e},l=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};Object.defineProperty(e,"__esModule",{value:!0});var c=s(t(2791)),a=t(8945),u=(0,t(7074).createAnimation)("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");e.default=function(n){var e=n.loading,t=void 0===e||e,i=n.color,o=void 0===i?"#000000":i,s=n.speedMultiplier,d=void 0===s?1:s,p=n.cssOverride,h=void 0===p?{}:p,f=n.size,x=void 0===f?15:f,g=n.margin,m=void 0===g?2:g,v=l(n,["loading","color","speedMultiplier","cssOverride","size","margin"]),j=r({display:"inherit"},h),y=function(n){return{display:"inline-block",backgroundColor:o,width:(0,a.cssValue)(x),height:(0,a.cssValue)(x),margin:(0,a.cssValue)(m),borderRadius:"100%",animation:"".concat(u," ").concat(.7/d,"s ").concat(n%2?"0s":"".concat(.35/d,"s")," infinite linear"),animationFillMode:"both"}};return t?c.createElement("span",r({style:j},v),c.createElement("span",{style:y(1)}),c.createElement("span",{style:y(2)}),c.createElement("span",{style:y(3)})):null}},7074:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(n,e,t){var r="react-spinners-".concat(n,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,s="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return o&&o.insertRule(s,0),r}},8945:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(n.match(/[^0-9]*$/)||"").toString();return t[i]?{value:e,unit:i}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(n){var e=r(n);return"".concat(e.value).concat(e.unit)}}}]);
//# sourceMappingURL=804.7cb3d5e9.chunk.js.map