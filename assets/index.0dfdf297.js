import{u as B,_ as ie,E as P,a as X,r as pe,h as We,T as De,b as _e,i as Y,t as ae,c as Re,d as je,e as xe,f as $e,g as we,j as be,m as Ve,k as Fe,l as qe,n as Ge,w as Ke,o as Ce}from"./el-popper.c0f5227c.js";import{E as Ue,a as Je,b as Ze}from"./el-header.89021cb5.js";import{i as me,a as Qe,d as R,o as I,c as F,w as C,r as W,m as Pe,t as Xe,u as Ye,T as Be,b as m,e as le,f as E,g as Ie,h as ee,p as ge,j as ke,k as Oe,l as y,n as q,q as et,v as tt,F as G,s as Ee,x as nt,y as ot,z as st,A as at,B as te,C as D,D as K,E as ue,G as ye,H as ne,I as z,J as Se,_ as lt}from"./index.1279460f.js";const oe=function(e,o,...n){let t;o.includes("mouse")||o.includes("click")?t="MouseEvents":o.includes("key")?t="KeyboardEvent":t="HTMLEvents";const u=document.createEvent(t);return u.initEvent(o,...n),e.dispatchEvent(u),e},Me=e=>{const o=me(e)?e:[e],n=[];return o.forEach(t=>{me(t)?n.push(...Me(t)):Qe(t)&&me(t.children)?n.push(...Me(t.children)):n.push(t)}),n},ut=R({name:"ElCollapseTransition"}),it=R({...ut,setup(e){const o=B("collapse-transition"),n={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,u)=>(I(),F(Be,Pe({name:Ye(o).b()},Xe(n)),{default:C(()=>[W(t.$slots,"default")]),_:3},16,["name"]))}});var se=ie(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);se.install=e=>{e.component(se.name,se)};const rt=se;class ct{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",t=>{let u=!1;switch(t.code){case P.down:{this.gotoSubIndex(this.subIndex+1),u=!0;break}case P.up:{this.gotoSubIndex(this.subIndex-1),u=!0;break}case P.tab:{oe(o,"mouseleave");break}case P.enter:case P.space:{u=!0,t.currentTarget.click();break}}return u&&(t.preventDefault(),t.stopPropagation()),!1})})}}class dt{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new ct(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case P.down:{oe(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case P.up:{oe(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case P.tab:{oe(o.currentTarget,"mouseleave");break}case P.enter:case P.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}}class pt{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(t=>{t.nodeType===1&&new dt(t,o)})}}const mt=R({name:"ElMenuCollapseTransition",setup(){const e=B("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,t){X(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",t()},onAfterEnter(n){pe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),We(n,e.m("collapse"))?(pe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),X(n,e.m("collapse"))):(X(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),pe(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){X(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function vt(e,o,n,t,u,f){return I(),F(Be,Pe({mode:"out-in"},e.listeners),{default:C(()=>[W(e.$slots,"default")]),_:3},16)}var ft=ie(mt,[["render",vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Ne(e,o){const n=m(()=>{let u=e.parent;const f=[o.value];for(;u.type.name!=="ElMenu";)u.props.index&&f.unshift(u.props.index),u=u.parent;return f});return{parentMenu:m(()=>{let u=e.parent;for(;u&&!["ElMenu","ElSubMenu"].includes(u.type.name);)u=u.parent;return u}),indexPath:n}}function ht(e){return m(()=>{const n=e.backgroundColor;return n?new De(n).shade(20).toString():""})}const Ae=(e,o)=>{const n=B("menu");return m(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":ht(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},bt=_e({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:Y},expandOpenIcon:{type:Y},collapseCloseIcon:{type:Y},collapseOpenIcon:{type:Y}}),ve="ElSubMenu";var Te=R({name:ve,props:bt,setup(e,{slots:o,expose:n}){const t=Ee(),{indexPath:u,parentMenu:f}=Ne(t,m(()=>e.index)),r=B("menu"),v=B("sub-menu"),l=le("rootMenu");l||ae(ve,"can not inject root menu");const d=le(`subMenu:${f.value.uid}`);d||ae(ve,"can not inject sub menu");const p=E({}),h=E({});let M;const w=E(!1),U=E(),j=E(null),k=m(()=>a.value==="horizontal"&&S.value?"bottom-start":"right-start"),O=m(()=>a.value==="horizontal"&&S.value||a.value==="vertical"&&!l.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?$.value?e.expandOpenIcon:e.expandCloseIcon:Re:e.collapseCloseIcon&&e.collapseOpenIcon?$.value?e.collapseOpenIcon:e.collapseCloseIcon:je),S=m(()=>d.level===0),J=m(()=>e.popperAppendToBody===void 0?S.value:Boolean(e.popperAppendToBody)),re=m(()=>l.props.collapse?`${r.namespace.value}-zoom-in-left`:`${r.namespace.value}-zoom-in-top`),ce=m(()=>a.value==="horizontal"&&S.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),$=m(()=>l.openedMenus.includes(e.index)),H=m(()=>{let c=!1;return Object.values(p.value).forEach(b=>{b.active&&(c=!0)}),Object.values(h.value).forEach(b=>{b.active&&(c=!0)}),c}),Z=m(()=>l.props.backgroundColor||""),V=m(()=>l.props.activeTextColor||""),s=m(()=>l.props.textColor||""),a=m(()=>l.props.mode),i=Ie({index:e.index,indexPath:u,active:H}),_=m(()=>a.value!=="horizontal"?{color:s.value}:{borderBottomColor:H.value?l.props.activeTextColor?V.value:"":"transparent",color:H.value?V.value:s.value}),g=()=>{var c,b,x;return(x=(b=(c=j.value)==null?void 0:c.popperRef)==null?void 0:b.popperInstanceRef)==null?void 0:x.destroy()},N=c=>{c||g()},L=()=>{l.props.menuTrigger==="hover"&&l.props.mode==="horizontal"||l.props.collapse&&l.props.mode==="vertical"||e.disabled||l.handleSubMenuClick({index:e.index,indexPath:u.value,active:H.value})},A=(c,b=e.showTimeout)=>{var x;c.type!=="focus"&&(l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||e.disabled||(d.mouseInChild.value=!0,M==null||M(),{stop:M}=we(()=>{l.openMenu(e.index,u.value)},b),J.value&&((x=f.value.vnode.el)==null||x.dispatchEvent(new MouseEvent("mouseenter")))))},T=(c=!1)=>{var b,x;l.props.menuTrigger==="click"&&l.props.mode==="horizontal"||!l.props.collapse&&l.props.mode==="vertical"||(M==null||M(),d.mouseInChild.value=!1,{stop:M}=we(()=>!w.value&&l.closeMenu(e.index,u.value),e.hideTimeout),J.value&&c&&((b=t.parent)==null?void 0:b.type.name)==="ElSubMenu"&&((x=d.handleMouseleave)==null||x.call(d,!0)))};ee(()=>l.props.collapse,c=>N(Boolean(c)));{const c=x=>{h.value[x.index]=x},b=x=>{delete h.value[x.index]};ge(`subMenu:${t.uid}`,{addSubMenu:c,removeSubMenu:b,handleMouseleave:T,mouseInChild:w,level:d.level+1})}return n({opened:$}),ke(()=>{l.addSubMenu(i),d.addSubMenu(i)}),Oe(()=>{d.removeSubMenu(i),l.removeSubMenu(i)}),()=>{var c;const b=[(c=o.title)==null?void 0:c.call(o),y(xe,{class:v.e("icon-arrow"),style:{transform:$.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&l.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>q(O.value)?y(t.appContext.components[O.value]):y(O.value)})],x=Ae(l.props,d.level+1),Le=l.isMenuPopup?y($e,{ref:j,visible:$.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:k.value,teleported:J.value,fallbackPlacements:ce.value,transition:re.value,gpuAcceleration:!1},{content:()=>{var Q;return y("div",{class:[r.m(a.value),r.m("popup-container"),e.popperClass],onMouseenter:de=>A(de,100),onMouseleave:()=>T(!0),onFocus:de=>A(de,100)},[y("ul",{class:[r.b(),r.m("popup"),r.m(`popup-${k.value}`)],style:x.value},[(Q=o.default)==null?void 0:Q.call(o)])])},default:()=>y("div",{class:v.e("title"),style:[_.value,{backgroundColor:Z.value}],onClick:L},b)}):y(G,{},[y("div",{class:v.e("title"),style:[_.value,{backgroundColor:Z.value}],ref:U,onClick:L},b),y(rt,{},{default:()=>{var Q;return et(y("ul",{role:"menu",class:[r.b(),r.m("inline")],style:x.value},[(Q=o.default)==null?void 0:Q.call(o)]),[[tt,$.value]])}})]);return y("li",{class:[v.b(),v.is("active",H.value),v.is("opened",$.value),v.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:$.value,onMouseenter:A,onMouseleave:()=>T(!0),onFocus:A},[Le])}}});const gt=_e({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:be(Array),default:()=>Ve([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),fe=e=>Array.isArray(e)&&e.every(o=>q(o)),yt={close:(e,o)=>q(e)&&fe(o),open:(e,o)=>q(e)&&fe(o),select:(e,o,n,t)=>q(e)&&fe(o)&&ot(n)&&(t===void 0||t instanceof Promise)};var Mt=R({name:"ElMenu",props:gt,emits:yt,setup(e,{emit:o,slots:n,expose:t}){const u=Ee(),f=u.appContext.config.globalProperties.$router,r=E(),v=B("menu"),l=B("sub-menu"),d=E(-1),p=E(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),h=E(e.defaultActive),M=E({}),w=E({}),U=m(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),j=()=>{const s=h.value&&M.value[h.value];if(!s||e.mode==="horizontal"||e.collapse)return;s.indexPath.forEach(i=>{const _=w.value[i];_&&k(i,_.indexPath)})},k=(s,a)=>{p.value.includes(s)||(e.uniqueOpened&&(p.value=p.value.filter(i=>a.includes(i))),p.value.push(s),o("open",s,a))},O=(s,a)=>{const i=p.value.indexOf(s);i!==-1&&p.value.splice(i,1),o("close",s,a)},S=({index:s,indexPath:a})=>{p.value.includes(s)?O(s,a):k(s,a)},J=s=>{(e.mode==="horizontal"||e.collapse)&&(p.value=[]);const{index:a,indexPath:i}=s;if(!(a===void 0||i===void 0))if(e.router&&f){const _=s.route||a,g=f.push(_).then(N=>(N||(h.value=a),N));o("select",a,i,{index:a,indexPath:i,route:_},g)}else h.value=a,o("select",a,i,{index:a,indexPath:i})},re=s=>{const a=M.value,i=a[s]||h.value&&a[h.value]||a[e.defaultActive];i?h.value=i.index:h.value=s},ce=()=>{var s,a;if(!r.value)return-1;const i=Array.from((a=(s=r.value)==null?void 0:s.childNodes)!=null?a:[]).filter(c=>c.nodeName!=="#text"||c.nodeValue),_=64,g=Number.parseInt(getComputedStyle(r.value).paddingLeft,10),N=Number.parseInt(getComputedStyle(r.value).paddingRight,10),L=r.value.clientWidth-g-N;let A=0,T=0;return i.forEach((c,b)=>{A+=c.offsetWidth||0,A<=L-_&&(T=b+1)}),T===i.length?-1:T},$=(s,a=33.34)=>{let i;return()=>{i&&clearTimeout(i),i=setTimeout(()=>{s()},a)}};let H=!0;const Z=()=>{const s=()=>{d.value=-1,st(()=>{d.value=ce()})};H?s():$(s)(),H=!1};ee(()=>e.defaultActive,s=>{M.value[s]||(h.value=""),re(s)}),ee(()=>e.collapse,s=>{s&&(p.value=[])}),ee(M.value,j);let V;nt(()=>{e.mode==="horizontal"&&e.ellipsis?V=qe(r,Z).stop:V==null||V()});{const s=g=>{w.value[g.index]=g},a=g=>{delete w.value[g.index]};ge("rootMenu",Ie({props:e,openedMenus:p,items:M,subMenus:w,activeIndex:h,isMenuPopup:U,addMenuItem:g=>{M.value[g.index]=g},removeMenuItem:g=>{delete M.value[g.index]},addSubMenu:s,removeSubMenu:a,openMenu:k,closeMenu:O,handleMenuItemClick:J,handleSubMenuClick:S})),ge(`subMenu:${u.uid}`,{addSubMenu:s,removeSubMenu:a,mouseInChild:E(!1),level:0})}return ke(()=>{e.mode==="horizontal"&&new pt(u.vnode.el,v.namespace.value)}),t({open:a=>{const{indexPath:i}=w.value[a];i.forEach(_=>k(_,i))},close:O,handleResize:Z}),()=>{var s,a;let i=(a=(s=n.default)==null?void 0:s.call(n))!=null?a:[];const _=[];if(e.mode==="horizontal"&&r.value){const L=Me(i),A=d.value===-1?L:L.slice(0,d.value),T=d.value===-1?[]:L.slice(d.value);(T==null?void 0:T.length)&&e.ellipsis&&(i=A,_.push(y(Te,{index:"sub-menu-more",class:l.e("hide-arrow")},{title:()=>y(xe,{class:l.e("icon-more")},{default:()=>y(Fe)}),default:()=>T})))}const g=Ae(e,0),N=y("ul",{key:String(e.collapse),role:"menubar",ref:r,style:g.value,class:{[v.b()]:!0,[v.m(e.mode)]:!0,[v.m("collapse")]:e.collapse}},[...i,..._]);return e.collapseTransition&&e.mode==="vertical"?y(ft,()=>N):N}}});const _t=_e({index:{type:be([String,null]),default:null},route:{type:be([String,Object])},disabled:Boolean}),xt={click:e=>q(e.index)&&Array.isArray(e.indexPath)},he="ElMenuItem",Ct=R({name:he,components:{ElTooltip:$e},props:_t,emits:xt,setup(e,{emit:o}){const n=Ee(),t=le("rootMenu"),u=B("menu"),f=B("menu-item");t||ae(he,"can not inject root menu");const{parentMenu:r,indexPath:v}=Ne(n,at(e,"index")),l=le(`subMenu:${r.value.uid}`);l||ae(he,"can not inject sub menu");const d=m(()=>e.index===t.activeIndex),p=Ie({index:e.index,indexPath:v,active:d}),h=()=>{e.disabled||(t.handleMenuItemClick({index:e.index,indexPath:v.value,route:e.route}),o("click",p))};return ke(()=>{l.addSubMenu(p),t.addMenuItem(p)}),Oe(()=>{l.removeSubMenu(p),t.removeMenuItem(p)}),{Effect:Ge,parentMenu:r,rootMenu:t,active:d,nsMenu:u,nsMenuItem:f,handleClick:h}}});function It(e,o,n,t,u,f){const r=te("el-tooltip");return I(),D("li",{class:ue([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...v)=>e.handleClick&&e.handleClick(...v))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(I(),F(r,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:C(()=>[W(e.$slots,"title")]),default:C(()=>[K("div",{class:ue(e.nsMenu.be("tooltip","trigger"))},[W(e.$slots,"default")],2)]),_:3},8,["effect"])):(I(),D(G,{key:1},[W(e.$slots,"default"),W(e.$slots,"title")],64))],2)}var ze=ie(Ct,[["render",It],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const kt={title:String},Et="ElMenuItemGroup",Tt=R({name:Et,props:kt,setup(){return{ns:B("menu-item-group")}}});function wt(e,o,n,t,u,f){return I(),D("li",{class:ue(e.ns.b())},[K("div",{class:ue(e.ns.e("title"))},[e.$slots.title?W(e.$slots,"title",{key:1}):(I(),D(G,{key:0},[ye(ne(e.title),1)],64))],2),K("ul",null,[W(e.$slots,"default")])],2)}var He=ie(Tt,[["render",wt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const St=Ke(Mt,{MenuItem:ze,MenuItemGroup:He,SubMenu:Te}),$t=Ce(ze);Ce(He);const Pt=Ce(Te);const Bt={class:"layout"},Ot={class:"container"},Nt=R({__name:"index",setup(e){const o=[{title:"Web3",index:"/ethers",text:"Web3",children:[{title:"Ethers",index:"/ethers",text:"Ethers"}]}],n=(u,f)=>{console.log(u,f)},t=(u,f)=>{console.log(u,f)};return(u,f)=>{const r=Ue,v=te("location"),l=xe,d=$t,p=Pt,h=te("icon-menu"),M=St,w=Je,U=te("router-view"),j=Ze;return I(),D("div",Bt,[z(r,{class:"header"},{default:C(()=>[ye("Utils")]),_:1}),K("div",Ot,[z(w,{class:"aside"},{default:C(()=>[z(M,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",onOpen:n,onClose:t,router:""},{default:C(()=>[(I(),D(G,null,Se(o,(k,O)=>(I(),D(G,{key:O},[k.children&&k.children.length>0?(I(),F(p,{key:0,index:"1"},{title:C(()=>[z(l,null,{default:C(()=>[z(v)]),_:1}),K("span",null,ne(k.title),1)]),default:C(()=>[(I(!0),D(G,null,Se(k.children,S=>(I(),F(d,{index:S.index,key:S.title},{default:C(()=>[ye(ne(S.title),1)]),_:2},1032,["index"]))),128))]),_:2},1024)):(I(),F(d,{key:1,index:"2"},{default:C(()=>[z(l,null,{default:C(()=>[z(h)]),_:1}),K("span",null,ne(k.text),1)]),_:2},1024))],64))),64))]),_:1})]),_:1}),z(j,{style:{"padding-top":"0"}},{default:C(()=>[z(U)]),_:1})])])}}});const Lt=lt(Nt,[["__scopeId","data-v-5558383e"]]);export{Lt as default};
