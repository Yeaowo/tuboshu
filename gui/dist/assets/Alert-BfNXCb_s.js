import{bO as O,bP as b,cq as u,bR as x,bV as i,cf as T,d9 as F,bU as V,M as N,a5 as l,cM as q,ar as D,cY as K,bW as U,bX as X,bZ as Y,b_ as E,ck as Z,q as $,cm as G,b$ as a,c0 as J,aS as Q,ca as oo,da as eo,db as ro,dc as no,dd as so}from"./index-CrBrltyU.js";const lo={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"};function to(r){const{lineHeight:o,borderRadius:d,fontWeightStrong:C,baseColor:t,dividerColor:v,actionColor:P,textColor1:g,textColor2:s,closeColorHover:h,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,infoColor:e,successColor:I,warningColor:z,errorColor:S,fontSize:R}=r;return Object.assign(Object.assign({},lo),{fontSize:R,lineHeight:o,titleFontWeight:C,borderRadius:d,border:`1px solid ${v}`,color:P,titleTextColor:g,iconColor:s,contentTextColor:s,closeBorderRadius:d,closeColorHover:h,closeColorPressed:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:n,borderInfo:`1px solid ${b(t,u(e,{alpha:.25}))}`,colorInfo:b(t,u(e,{alpha:.08})),titleTextColorInfo:g,iconColorInfo:e,contentTextColorInfo:s,closeColorHoverInfo:h,closeColorPressedInfo:f,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:n,borderSuccess:`1px solid ${b(t,u(I,{alpha:.25}))}`,colorSuccess:b(t,u(I,{alpha:.08})),titleTextColorSuccess:g,iconColorSuccess:I,contentTextColorSuccess:s,closeColorHoverSuccess:h,closeColorPressedSuccess:f,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:n,borderWarning:`1px solid ${b(t,u(z,{alpha:.33}))}`,colorWarning:b(t,u(z,{alpha:.08})),titleTextColorWarning:g,iconColorWarning:z,contentTextColorWarning:s,closeColorHoverWarning:h,closeColorPressedWarning:f,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:n,borderError:`1px solid ${b(t,u(S,{alpha:.25}))}`,colorError:b(t,u(S,{alpha:.08})),titleTextColorError:g,iconColorError:S,contentTextColorError:s,closeColorHoverError:h,closeColorPressedError:f,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:n})}const io={common:O,self:to},co=x("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[i("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),T("closable",[x("alert-body",[i("title",`
 padding-right: 24px;
 `)])]),i("icon",{color:"var(--n-icon-color)"}),x("alert-body",{padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),F({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),i("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),T("show-icon",[x("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),T("right-adjust",[x("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),x("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[V("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]),ao=Object.assign(Object.assign({},E.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ho=N({name:"Alert",inheritAttrs:!1,props:ao,slots:Object,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:d,inlineThemeDisabled:C,mergedRtlRef:t}=Y(r),v=E("Alert","-alert",co,io,r,o),P=Z("Alert",t,o),g=$(()=>{const{common:{cubicBezierEaseInOut:n},self:e}=v.value,{fontSize:I,borderRadius:z,titleFontWeight:S,lineHeight:R,iconSize:H,iconMargin:y,iconMarginRtl:_,closeIconSize:W,closeBorderRadius:w,closeSize:A,closeMargin:B,closeMarginRtl:M,padding:k}=e,{type:c}=r,{left:j,right:L}=G(y);return{"--n-bezier":n,"--n-color":e[a("color",c)],"--n-close-icon-size":W,"--n-close-border-radius":w,"--n-close-color-hover":e[a("closeColorHover",c)],"--n-close-color-pressed":e[a("closeColorPressed",c)],"--n-close-icon-color":e[a("closeIconColor",c)],"--n-close-icon-color-hover":e[a("closeIconColorHover",c)],"--n-close-icon-color-pressed":e[a("closeIconColorPressed",c)],"--n-icon-color":e[a("iconColor",c)],"--n-border":e[a("border",c)],"--n-title-text-color":e[a("titleTextColor",c)],"--n-content-text-color":e[a("contentTextColor",c)],"--n-line-height":R,"--n-border-radius":z,"--n-font-size":I,"--n-title-font-weight":S,"--n-icon-size":H,"--n-icon-margin":y,"--n-icon-margin-rtl":_,"--n-close-size":A,"--n-close-margin":B,"--n-close-margin-rtl":M,"--n-padding":k,"--n-icon-margin-left":j,"--n-icon-margin-right":L}}),s=C?J("alert",$(()=>r.type[0]),g,r):void 0,h=Q(!0),f=()=>{const{onAfterLeave:n,onAfterHide:e}=r;n&&n(),e&&e()};return{rtlEnabled:P,mergedClsPrefix:o,mergedBordered:d,visible:h,handleCloseClick:()=>{var n;Promise.resolve((n=r.onClose)===null||n===void 0?void 0:n.call(r)).then(e=>{e!==!1&&(h.value=!1)})},handleAfterLeave:()=>{f()},mergedTheme:v,cssVars:C?void 0:g,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),l(q,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:d}=this,C={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},D(this.$attrs,C)),this.closable&&l(K,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${o}-alert__border`}),this.showIcon&&l("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},U(d.icon,()=>[l(oo,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return l(so,null);case"info":return l(no,null);case"warning":return l(ro,null);case"error":return l(eo,null);default:return null}}})])),l("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},X(d.header,t=>{const v=t||this.title;return v?l("div",{class:`${o}-alert-body__title`},v):null}),d.default&&l("div",{class:`${o}-alert-body__content`},d))):null}})}});export{ho as _};
