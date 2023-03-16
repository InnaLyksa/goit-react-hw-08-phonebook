"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[157],{8157:function(e,t,o){o.r(t),o.d(t,{default:function(){return Y}});var n=o(2791),r=o(1087),a=o(7689),i=o(9434),s=o(3366),l=o(7462),c=o(8182),d=o(4419),p=o(6934),u=o(1402),v=o(4036),x=o(5527),h=o(5878),f=o(1217);function m(e){return(0,f.Z)("MuiAppBar",e)}(0,h.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var b=o(184),g=["className","color","enableColorOnDark","position"],Z=function(e,t){return e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")"):t},k=(0,p.ZP)(x.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["position".concat((0,v.Z)(o.position))],t["color".concat((0,v.Z)(o.color))]]}})((function(e){var t=e.theme,o=e.ownerState,n="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,l.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===o.position&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===o.position&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===o.position&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"static"===o.position&&{position:"static"},"relative"===o.position&&{position:"relative"},!t.vars&&(0,l.Z)({},"default"===o.color&&{backgroundColor:n,color:t.palette.getContrastText(n)},o.color&&"default"!==o.color&&"inherit"!==o.color&&"transparent"!==o.color&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},"inherit"===o.color&&{color:"inherit"},"dark"===t.palette.mode&&!o.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===o.color&&(0,l.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"})),t.vars&&(0,l.Z)({},"default"===o.color&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:Z(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:Z(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:Z(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:Z(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===o.color?"inherit":"var(--AppBar-color)"},"transparent"===o.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),w=n.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiAppBar"}),n=o.className,r=o.color,a=void 0===r?"primary":r,i=o.enableColorOnDark,p=void 0!==i&&i,x=o.position,h=void 0===x?"fixed":x,f=(0,s.Z)(o,g),Z=(0,l.Z)({},o,{color:a,position:h,enableColorOnDark:p}),w=function(e){var t=e.color,o=e.position,n=e.classes,r={root:["root","color".concat((0,v.Z)(t)),"position".concat((0,v.Z)(o))]};return(0,d.Z)(r,m,n)}(Z);return(0,b.jsx)(k,(0,l.Z)({square:!0,component:"header",ownerState:Z,elevation:4,className:(0,c.Z)(w.root,n,"fixed"===h&&"mui-fixed"),ref:t},f))})),j=o(4942);function S(e){return(0,f.Z)("MuiToolbar",e)}(0,h.Z)("MuiToolbar",["root","gutters","regular","dense"]);var C,y,B=["className","component","disableGutters","variant"],W=(0,p.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,l.Z)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&(0,j.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===o.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),G=n.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiToolbar"}),n=o.className,r=o.component,a=void 0===r?"div":r,i=o.disableGutters,p=void 0!==i&&i,v=o.variant,x=void 0===v?"regular":v,h=(0,s.Z)(o,B),f=(0,l.Z)({},o,{component:a,disableGutters:p,variant:x}),m=function(e){var t=e.classes,o={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,d.Z)(o,S,t)}(f);return(0,b.jsx)(W,(0,l.Z)({as:a,className:(0,c.Z)(m.root,n),ref:t,ownerState:f},h))})),z=o(890),A=o(4708),M=o(9164),R=o(168),O=o(7691),P=O.ZP.div(C||(C=(0,R.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  /* width: 150px; */\n"]))),T=(0,O.ZP)(r.OL)(y||(y=(0,R.Z)(["\n  color: inherit;\n  /* font-size: */\n  text-decoration: none;\n  &:hover {\n    color: white;\n    text-decoration: underline;\n  }\n  &.active {\n    color: white;\n    text-decoration: underline;\n  }\n"])));var I,D,L,N=function(){return(0,b.jsxs)(P,{children:[(0,b.jsx)(T,{to:"/register",children:"Register"}),(0,b.jsx)(T,{to:"/login",children:"LogIn"})]})},_=o(4217),F=o(9273),H=O.ZP.div(I||(I=(0,R.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  /* min-width: 300px; */\n"]))),Q=O.ZP.p(D||(D=(0,R.Z)(["\n  font-size: 14px;\n"]))),q=O.ZP.button(L||(L=(0,R.Z)(["\n  color: inherit;\n  font-size: 18px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: #fff;\n    text-decoration: underline;\n  }\n"])));var E,U,$=function(){var e=(0,i.v9)(_.dy),t=(0,i.I0)();return(0,b.jsxs)(H,{children:[(0,b.jsxs)(Q,{children:[" Welcome, ",e.name,"!"]}),(0,b.jsx)(q,{type:"button",color:"inherit",onClick:function(){t(F.Z.logoutUser())},children:"LogOut"})]})},J=O.ZP.nav(E||(E=(0,R.Z)(["\n  display: flex;\n  gap: 8px;\n\n  flex-direction: row;\n  align-items: center;\n  /* width: 180px; */\n"]))),K=(0,O.ZP)(r.OL)(U||(U=(0,R.Z)(["\n  /* color: inherit;\n  color: black; */\n  font-size: 24px;\n  text-decoration: none;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: white;\n    text-decoration: underline;\n  }\n  &.active {\n    color: white;\n    text-decoration: underline;\n  }\n"])));var V=function(){var e=(0,i.v9)(_.Qb);return(0,b.jsxs)(J,{children:[(0,b.jsx)(K,{to:"/",children:"Home"}),e&&(0,b.jsx)(K,{to:"/contacts",children:"My Contacts"})]})},X=o(2483);function Y(e){e.theme,e.changeTheme;var t=(0,i.v9)(_.Qb);return(0,b.jsxs)(n.Fragment,{children:[(0,b.jsx)(A.ZP,{}),(0,b.jsx)(w,{children:(0,b.jsxs)(G,{children:[(0,b.jsx)(r.OL,{to:"/"}),(0,b.jsx)(z.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:(0,b.jsx)(V,{})}),(0,b.jsx)("div",{children:t?(0,b.jsx)(z.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:(0,b.jsx)($,{})}):(0,b.jsx)(z.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:(0,b.jsx)(N,{})})})]})}),(0,b.jsx)(G,{}),(0,b.jsx)(M.Z,{children:(0,b.jsx)(n.Suspense,{fallback:(0,b.jsx)(X.a,{}),children:(0,b.jsx)(a.j3,{})})})]})}},9164:function(e,t,o){o.d(t,{Z:function(){return S}});var n=o(4942),r=o(3366),a=o(7462),i=o(2791),s=o(8182),l=o(7312),c=o(1217),d=o(4419),p=o(7078),u=o(3457),v=o(5080),x=o(184),h=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,v.Z)(),m=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["maxWidth".concat((0,l.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),b=function(e){return(0,p.Z)({props:e,name:"MuiContainer",defaultTheme:f})},g=function(e,t){var o=e.classes,n=e.fixed,r=e.disableGutters,a=e.maxWidth,i={root:["root",a&&"maxWidth".concat((0,l.Z)(String(a))),n&&"fixed",r&&"disableGutters"]};return(0,d.Z)(i,(function(e){return(0,c.Z)(t,e)}),o)};var Z=o(4036),k=o(6934),w=o(1402),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,o=void 0===t?m:t,l=e.useThemeProps,c=void 0===l?b:l,d=e.componentName,p=void 0===d?"MuiContainer":d,u=o((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,o){var n=o,r=t.breakpoints.values[n];return 0!==r&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(r).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({},"xs"===o.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),o.maxWidth&&"xs"!==o.maxWidth&&(0,n.Z)({},t.breakpoints.up(o.maxWidth),{maxWidth:"".concat(t.breakpoints.values[o.maxWidth]).concat(t.breakpoints.unit)}))})),v=i.forwardRef((function(e,t){var o=c(e),n=o.className,i=o.component,l=void 0===i?"div":i,d=o.disableGutters,v=void 0!==d&&d,f=o.fixed,m=void 0!==f&&f,b=o.maxWidth,Z=void 0===b?"lg":b,k=(0,r.Z)(o,h),w=(0,a.Z)({},o,{component:l,disableGutters:v,fixed:m,maxWidth:Z}),j=g(w,p);return(0,x.jsx)(u,(0,a.Z)({as:l,ownerState:w,className:(0,s.Z)(j.root,n),ref:t},k))}));return v}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiContainer"})}}),S=j},4708:function(e,t,o){var n=o(9439),r=o(7462),a=o(2791),i=o(1402),s=o(5502),l=o(184),c=function(e,t){return(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},d=function(e){return(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,i.Z)({props:e,name:"MuiCssBaseline"}),o=t.children,p=t.enableColorScheme,u=void 0!==p&&p;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(s.Z,{styles:function(e){return function(e){var t,o,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};a&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var o,r=(0,n.Z)(t,2),a=r[0],s=r[1];i[e.getColorSchemeSelector(a).replace(/\s*&/,"")]={colorScheme:null==(o=s.palette)?void 0:o.mode}}));var s=(0,r.Z)({html:c(e,a),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},d(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i),l=null==(t=e.components)||null==(o=t.MuiCssBaseline)?void 0:o.styleOverrides;return l&&(s=[s,l]),s}(e,u)}}),o]})}},3457:function(e,t,o){var n=(0,o(4046).ZP)();t.Z=n}}]);
//# sourceMappingURL=157.3a0527ac.chunk.js.map