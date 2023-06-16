(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Ma(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ce={},Qi=[],zt=()=>{},hE=()=>!1,fE=/^on[^a-z]/,Vr=t=>fE.test(t),Su=t=>t.startsWith("onUpdate:"),Oe=Object.assign,Ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dE=Object.prototype.hasOwnProperty,_e=(t,e)=>dE.call(t,e),X=Array.isArray,Zi=t=>ws(t)==="[object Map]",Ui=t=>ws(t)==="[object Set]",Tf=t=>ws(t)==="[object Date]",pE=t=>ws(t)==="[object RegExp]",ie=t=>typeof t=="function",Me=t=>typeof t=="string",pr=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Au=t=>Re(t)&&ie(t.then)&&ie(t.catch),Ig=Object.prototype.toString,ws=t=>Ig.call(t),gE=t=>ws(t).slice(8,-1),bg=t=>ws(t)==="[object Object]",xu=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zs=Ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mE=/-(\w)/g,yt=La(t=>t.replace(mE,(e,n)=>n?n.toUpperCase():"")),_E=/\B([A-Z])/g,Nt=La(t=>t.replace(_E,"-$1").toLowerCase()),Wr=La(t=>t.charAt(0).toUpperCase()+t.slice(1)),er=La(t=>t?`on${Wr(t)}`:""),us=(t,e)=>!Object.is(t,e),es=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Qo=t=>{const e=Me(t)?Number(t):NaN;return isNaN(e)?t:e};let Cf;const mc=()=>Cf||(Cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),yE="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",vE=Ma(yE);function zr(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Me(i)?bE(i):zr(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Me(t))return t;if(Re(t))return t}}const EE=/;(?![^(]*\))/g,wE=/:([^]+)/,IE=/\/\*[^]*?\*\//g;function bE(t){const e={};return t.replace(IE,"").split(EE).forEach(n=>{if(n){const i=n.split(wE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ft(t){let e="";if(Me(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const i=ft(t[n]);i&&(e+=i+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function TE(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Me(e)&&(t.class=ft(e)),n&&(t.style=zr(n)),t}const CE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",SE=Ma(CE);function Tg(t){return!!t||t===""}function RE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Qn(t[i],e[i]);return n}function Qn(t,e){if(t===e)return!0;let n=Tf(t),i=Tf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=pr(t),i=pr(e),n||i)return t===e;if(n=X(t),i=X(e),n||i)return n&&i?RE(t,e):!1;if(n=Re(t),i=Re(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Qn(t[o],e[o]))return!1}}return String(t)===String(e)}function Fa(t,e){return t.findIndex(n=>Qn(n,e))}const An=t=>Me(t)?t:t==null?"":X(t)||Re(t)&&(t.toString===Ig||!ie(t.toString))?JSON.stringify(t,Cg,2):String(t),Cg=(t,e)=>e&&e.__v_isRef?Cg(t,e.value):Zi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ui(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!X(e)&&!bg(e)?String(e):e;let wt;class Ou{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pu(t){return new Ou(t)}function Sg(t,e=wt){e&&e.active&&e.effects.push(t)}function ku(){return wt}function Rg(t){wt&&wt.cleanups.push(t)}const Nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ag=t=>(t.w&Zn)>0,xg=t=>(t.n&Zn)>0,AE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Zn},xE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Ag(s)&&!xg(s)?s.delete(t):e[n++]=s,s.w&=~Zn,s.n&=~Zn}e.length=n}},Zo=new WeakMap;let Ks=0,Zn=1;const _c=30;let Bt;const Ei=Symbol(""),yc=Symbol("");class Kr{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Sg(this,i)}run(){if(!this.active)return this.fn();let e=Bt,n=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Bt,Bt=this,Gn=!0,Zn=1<<++Ks,Ks<=_c?AE(this):Sf(this),this.fn()}finally{Ks<=_c&&xE(this),Zn=1<<--Ks,Bt=this.parent,Gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Bt===this?this.deferStop=!0:this.active&&(Sf(this),this.onStop&&this.onStop(),this.active=!1)}}function Sf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function OE(t,e){t.effect&&(t=t.effect.fn);const n=new Kr(t);e&&(Oe(n,e),e.scope&&Sg(n,e.scope)),(!e||!e.lazy)&&n.run();const i=n.run.bind(n);return i.effect=n,i}function PE(t){t.effect.stop()}let Gn=!0;const Og=[];function Is(){Og.push(Gn),Gn=!1}function bs(){const t=Og.pop();Gn=t===void 0?!0:t}function vt(t,e,n){if(Gn&&Bt){let i=Zo.get(t);i||Zo.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Nu()),Pg(s)}}function Pg(t,e){let n=!1;Ks<=_c?xg(t)||(t.n|=Zn,n=!Ag(t)):n=!t.has(Bt),n&&(t.add(Bt),Bt.deps.push(t))}function xn(t,e,n,i,s,r){const o=Zo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?xu(n)&&a.push(o.get("length")):(a.push(o.get(Ei)),Zi(t)&&a.push(o.get(yc)));break;case"delete":X(t)||(a.push(o.get(Ei)),Zi(t)&&a.push(o.get(yc)));break;case"set":Zi(t)&&a.push(o.get(Ei));break}if(a.length===1)a[0]&&vc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);vc(Nu(l))}}function vc(t,e){const n=X(t)?t:[...t];for(const i of n)i.computed&&Rf(i);for(const i of n)i.computed||Rf(i)}function Rf(t,e){(t!==Bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function kE(t,e){var n;return(n=Zo.get(t))==null?void 0:n.get(e)}const NE=Ma("__proto__,__v_isRef,__isVue"),kg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pr)),DE=Ua(),ME=Ua(!1,!0),LE=Ua(!0),FE=Ua(!0,!0),Af=UE();function UE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=de(this);for(let r=0,o=this.length;r<o;r++)vt(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(de)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Is();const i=de(this)[e].apply(this,n);return bs(),i}}),t}function jE(t){const e=de(this);return vt(e,"has",t),e.hasOwnProperty(t)}function Ua(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?jg:Ug:e?Fg:Lg).get(i))return i;const o=X(i);if(!t){if(o&&_e(Af,s))return Reflect.get(Af,s,r);if(s==="hasOwnProperty")return jE}const a=Reflect.get(i,s,r);return(pr(s)?kg.has(s):NE(s))||(t||vt(i,"get",s),e)?a:Ve(a)?o&&xu(s)?a:a.value:Re(a)?t?Mu(a):Ts(a):a}}const BE=Ng(),HE=Ng(!0);function Ng(t=!1){return function(n,i,s,r){let o=n[i];if(Ri(o)&&Ve(o)&&!Ve(s))return!1;if(!t&&(!gr(s)&&!Ri(s)&&(o=de(o),s=de(s)),!X(n)&&Ve(o)&&!Ve(s)))return o.value=s,!0;const a=X(n)&&xu(i)?Number(i)<n.length:_e(n,i),l=Reflect.set(n,i,s,r);return n===de(r)&&(a?us(s,o)&&xn(n,"set",i,s):xn(n,"add",i,s)),l}}function $E(t,e){const n=_e(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&xn(t,"delete",e,void 0),i}function VE(t,e){const n=Reflect.has(t,e);return(!pr(e)||!kg.has(e))&&vt(t,"has",e),n}function WE(t){return vt(t,"iterate",X(t)?"length":Ei),Reflect.ownKeys(t)}const Dg={get:DE,set:BE,deleteProperty:$E,has:VE,ownKeys:WE},Mg={get:LE,set(t,e){return!0},deleteProperty(t,e){return!0}},zE=Oe({},Dg,{get:ME,set:HE}),KE=Oe({},Mg,{get:FE}),Du=t=>t,ja=t=>Reflect.getPrototypeOf(t);function _o(t,e,n=!1,i=!1){t=t.__v_raw;const s=de(t),r=de(e);n||(e!==r&&vt(s,"get",e),vt(s,"get",r));const{has:o}=ja(s),a=i?Du:n?Fu:mr;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function yo(t,e=!1){const n=this.__v_raw,i=de(n),s=de(t);return e||(t!==s&&vt(i,"has",t),vt(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function vo(t,e=!1){return t=t.__v_raw,!e&&vt(de(t),"iterate",Ei),Reflect.get(t,"size",t)}function xf(t){t=de(t);const e=de(this);return ja(e).has.call(e,t)||(e.add(t),xn(e,"add",t,t)),this}function Of(t,e){e=de(e);const n=de(this),{has:i,get:s}=ja(n);let r=i.call(n,t);r||(t=de(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?us(e,o)&&xn(n,"set",t,e):xn(n,"add",t,e),this}function Pf(t){const e=de(this),{has:n,get:i}=ja(e);let s=n.call(e,t);s||(t=de(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&xn(e,"delete",t,void 0),r}function kf(){const t=de(this),e=t.size!==0,n=t.clear();return e&&xn(t,"clear",void 0,void 0),n}function Eo(t,e){return function(i,s){const r=this,o=r.__v_raw,a=de(o),l=e?Du:t?Fu:mr;return!t&&vt(a,"iterate",Ei),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function wo(t,e,n){return function(...i){const s=this.__v_raw,r=de(s),o=Zi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Du:e?Fu:mr;return!e&&vt(r,"iterate",l?yc:Ei),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ln(t){return function(...e){return t==="delete"?!1:this}}function GE(){const t={get(r){return _o(this,r)},get size(){return vo(this)},has:yo,add:xf,set:Of,delete:Pf,clear:kf,forEach:Eo(!1,!1)},e={get(r){return _o(this,r,!1,!0)},get size(){return vo(this)},has:yo,add:xf,set:Of,delete:Pf,clear:kf,forEach:Eo(!1,!0)},n={get(r){return _o(this,r,!0)},get size(){return vo(this,!0)},has(r){return yo.call(this,r,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:Eo(!0,!1)},i={get(r){return _o(this,r,!0,!0)},get size(){return vo(this,!0)},has(r){return yo.call(this,r,!0)},add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear"),forEach:Eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=wo(r,!1,!1),n[r]=wo(r,!0,!1),e[r]=wo(r,!1,!0),i[r]=wo(r,!0,!0)}),[t,n,e,i]}const[YE,XE,qE,JE]=GE();function Ba(t,e){const n=e?t?JE:qE:t?XE:YE;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(_e(n,s)&&s in i?n:i,s,r)}const QE={get:Ba(!1,!1)},ZE={get:Ba(!1,!0)},ew={get:Ba(!0,!1)},tw={get:Ba(!0,!0)},Lg=new WeakMap,Fg=new WeakMap,Ug=new WeakMap,jg=new WeakMap;function nw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iw(t){return t.__v_skip||!Object.isExtensible(t)?0:nw(gE(t))}function Ts(t){return Ri(t)?t:Ha(t,!1,Dg,QE,Lg)}function Bg(t){return Ha(t,!1,zE,ZE,Fg)}function Mu(t){return Ha(t,!0,Mg,ew,Ug)}function sw(t){return Ha(t,!0,KE,tw,jg)}function Ha(t,e,n,i,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=iw(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function wi(t){return Ri(t)?wi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ri(t){return!!(t&&t.__v_isReadonly)}function gr(t){return!!(t&&t.__v_isShallow)}function Lu(t){return wi(t)||Ri(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function $a(t){return qo(t,"__v_skip",!0),t}const mr=t=>Re(t)?Ts(t):t,Fu=t=>Re(t)?Mu(t):t;function Uu(t){Gn&&Bt&&(t=de(t),Pg(t.dep||(t.dep=Nu())))}function Va(t,e){t=de(t);const n=t.dep;n&&vc(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Ue(t){return $g(t,!1)}function Hg(t){return $g(t,!0)}function $g(t,e){return Ve(t)?t:new rw(t,e)}class rw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:mr(e)}get value(){return Uu(this),this._value}set value(e){const n=this.__v_isShallow||gr(e)||Ri(e);e=n?e:de(e),us(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:mr(e),Va(this))}}function ow(t){Va(t)}function ue(t){return Ve(t)?t.value:t}function aw(t){return ie(t)?t():ue(t)}const lw={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ve(s)&&!Ve(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function ju(t){return wi(t)?t:new Proxy(t,lw)}class cw{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:i}=e(()=>Uu(this),()=>Va(this));this._get=n,this._set=i}get value(){return this._get()}set value(e){this._set(e)}}function uw(t){return new cw(t)}function hw(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=Vg(t,n);return e}class fw{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kE(de(this._object),this._key)}}class dw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function pw(t,e,n){return Ve(t)?t:ie(t)?new dw(t):Re(t)&&arguments.length>1?Vg(t,e,n):Ue(t)}function Vg(t,e,n){const i=t[e];return Ve(i)?i:new fw(t,e,n)}class gw{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Kr(e,()=>{this._dirty||(this._dirty=!0,Va(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=de(this);return Uu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function mw(t,e,n=!1){let i,s;const r=ie(t);return r?(i=t,s=zt):(i=t.get,s=t.set),new gw(i,s,r||!s,n)}function _w(t,...e){}function yw(t,e){}function Sn(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){ji(r,e,n)}return s}function At(t,e,n,i){if(ie(t)){const r=Sn(t,e,n,i);return r&&Au(r)&&r.catch(o=>{ji(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(At(t[r],e,n,i));return s}function ji(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Sn(l,null,10,[t,o,a]);return}}vw(t,n,s,i)}function vw(t,e,n,i=!0){console.error(t)}let _r=!1,Ec=!1;const st=[];let en=0;const ts=[];let En=null,di=0;const Wg=Promise.resolve();let Bu=null;function Wa(t){const e=Bu||Wg;return t?e.then(this?t.bind(this):t):e}function Ew(t){let e=en+1,n=st.length;for(;e<n;){const i=e+n>>>1;yr(st[i])<t?e=i+1:n=i}return e}function za(t){(!st.length||!st.includes(t,_r&&t.allowRecurse?en+1:en))&&(t.id==null?st.push(t):st.splice(Ew(t.id),0,t),zg())}function zg(){!_r&&!Ec&&(Ec=!0,Bu=Wg.then(Kg))}function ww(t){const e=st.indexOf(t);e>en&&st.splice(e,1)}function Hu(t){X(t)?ts.push(...t):(!En||!En.includes(t,t.allowRecurse?di+1:di))&&ts.push(t),zg()}function Nf(t,e=_r?en+1:0){for(;e<st.length;e++){const n=st[e];n&&n.pre&&(st.splice(e,1),e--,n())}}function ea(t){if(ts.length){const e=[...new Set(ts)];if(ts.length=0,En){En.push(...e);return}for(En=e,En.sort((n,i)=>yr(n)-yr(i)),di=0;di<En.length;di++)En[di]();En=null,di=0}}const yr=t=>t.id==null?1/0:t.id,Iw=(t,e)=>{const n=yr(t)-yr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Kg(t){Ec=!1,_r=!0,st.sort(Iw);const e=zt;try{for(en=0;en<st.length;en++){const n=st[en];n&&n.active!==!1&&Sn(n,null,14)}}finally{en=0,st.length=0,ea(),_r=!1,Bu=null,(st.length||ts.length)&&Kg()}}let Gi,Io=[];function Gg(t,e){var n,i;Gi=t,Gi?(Gi.enabled=!0,Io.forEach(({event:s,args:r})=>Gi.emit(s,...r)),Io=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Gg(r,e)}),setTimeout(()=>{Gi||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Io=[])},3e3)):Io=[]}function bw(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ce;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ce;f&&(s=n.map(d=>Me(d)?d.trim():d)),h&&(s=n.map(Jo))}let a,l=i[a=er(e)]||i[a=er(yt(e))];!l&&r&&(l=i[a=er(Nt(e))]),l&&At(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,At(c,t,6,s)}}function Yg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=Yg(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Re(t)&&i.set(t,null),null):(X(r)?r.forEach(l=>o[l]=null):Oe(o,r),Re(t)&&i.set(t,o),o)}function Ka(t,e){return!t||!Vr(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,Nt(e))||_e(t,e))}let Ye=null,Ga=null;function vr(t){const e=Ye;return Ye=t,Ga=t&&t.type.__scopeId||null,e}function Cs(t){Ga=t}function Ss(){Ga=null}const Tw=t=>We;function We(t,e=Ye,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Rc(-1);const r=vr(e);let o;try{o=t(...s)}finally{vr(r),i._d&&Rc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ho(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:p,inheritAttrs:_}=t;let w,E;const m=vr(t);try{if(n.shapeFlag&4){const v=s||i;w=bt(u.call(v,v,h,r,d,f,p)),E=l}else{const v=e;w=bt(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),E=e.props?l:Sw(l)}}catch(v){sr.length=0,ji(v,t,1),w=Q(ot)}let T=w;if(E&&_!==!1){const v=Object.keys(E),{shapeFlag:C}=T;v.length&&C&7&&(o&&v.some(Su)&&(E=Rw(E,o)),T=un(T,E))}return n.dirs&&(T=un(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),w=T,vr(m),w}function Cw(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(ei(i)){if(i.type!==ot||i.children==="v-if"){if(e)return;e=i}}else return}return e}const Sw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vr(n))&&((e||(e={}))[n]=t[n]);return e},Rw=(t,e)=>{const n={};for(const i in t)(!Su(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Aw(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Df(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Ka(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Df(i,o,c):!0:!!o;return!1}function Df(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Ka(n,r))return!0}return!1}function $u({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xg=t=>t.__isSuspense,xw={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){t==null?Pw(e,n,i,s,r,o,a,l,c):kw(t,e,n,i,s,o,a,l,c)},hydrate:Nw,create:Vu,normalize:Dw},Ow=xw;function Er(t,e){const n=t.props&&t.props[e];ie(n)&&n()}function Pw(t,e,n,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,h=u("div"),f=t.suspense=Vu(t,s,i,e,h,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,h,null,i,f,r,o),f.deps>0?(Er(t,"onPending"),Er(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),ns(f,t.ssFallback)):f.resolve(!1,!0)}function kw(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,d=e.ssFallback,{activeBranch:p,pendingBranch:_,isInFallback:w,isHydrating:E}=h;if(_)h.pendingBranch=f,Ht(f,_)?(l(_,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():w&&(l(p,d,n,i,s,null,r,o,a),ns(h,d))):(h.pendingId++,E?(h.isHydrating=!1,h.activeBranch=_):c(_,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),w?(l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():(l(p,d,n,i,s,null,r,o,a),ns(h,d))):p&&Ht(f,p)?(l(p,f,n,i,s,h,r,o,a),h.resolve(!0)):(l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0&&h.resolve()));else if(p&&Ht(f,p))l(p,f,n,i,s,h,r,o,a),ns(h,f);else if(Er(e,"onPending"),h.pendingBranch=f,h.pendingId++,l(null,f,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:m,pendingId:T}=h;m>0?setTimeout(()=>{h.pendingId===T&&h.fallback(d)},m):m===0&&h.fallback(d)}}function Vu(t,e,n,i,s,r,o,a,l,c,u=!1){const{p:h,m:f,um:d,n:p,o:{parentNode:_,remove:w}}=c;let E;const m=Mw(t);m&&e!=null&&e.pendingBranch&&(E=e.pendingId,e.deps++);const T=t.props?Qo(t.props.timeout):void 0,v={vnode:t,parent:e,parentComponent:n,isSVG:o,container:i,hiddenContainer:s,anchor:r,deps:0,pendingId:0,timeout:typeof T=="number"?T:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(C=!1,S=!1){const{vnode:O,activeBranch:I,pendingBranch:P,pendingId:D,effects:K,parentComponent:U,container:q}=v;if(v.isHydrating)v.isHydrating=!1;else if(!C){const F=I&&P.transition&&P.transition.mode==="out-in";F&&(I.transition.afterLeave=()=>{D===v.pendingId&&f(P,q,A,0)});let{anchor:A}=v;I&&(A=p(I),d(I,U,v,!0)),F||f(P,q,A,0)}ns(v,P),v.pendingBranch=null,v.isInFallback=!1;let j=v.parent,le=!1;for(;j;){if(j.pendingBranch){j.effects.push(...K),le=!0;break}j=j.parent}le||Hu(K),v.effects=[],m&&e&&e.pendingBranch&&E===e.pendingId&&(e.deps--,e.deps===0&&!S&&e.resolve()),Er(O,"onResolve")},fallback(C){if(!v.pendingBranch)return;const{vnode:S,activeBranch:O,parentComponent:I,container:P,isSVG:D}=v;Er(S,"onFallback");const K=p(O),U=()=>{v.isInFallback&&(h(null,C,P,K,I,null,D,a,l),ns(v,C))},q=C.transition&&C.transition.mode==="out-in";q&&(O.transition.afterLeave=U),v.isInFallback=!0,d(O,I,null,!0),q||U()},move(C,S,O){v.activeBranch&&f(v.activeBranch,C,S,O),v.container=C},next(){return v.activeBranch&&p(v.activeBranch)},registerDep(C,S){const O=!!v.pendingBranch;O&&v.deps++;const I=C.vnode.el;C.asyncDep.catch(P=>{ji(P,C,0)}).then(P=>{if(C.isUnmounted||v.isUnmounted||v.pendingId!==C.suspenseId)return;C.asyncResolved=!0;const{vnode:D}=C;Ac(C,P,!1),I&&(D.el=I);const K=!I&&C.subTree.el;S(C,D,_(I||C.subTree.el),I?null:p(C.subTree),v,o,l),K&&w(K),$u(C,D.el),O&&--v.deps===0&&v.resolve()})},unmount(C,S){v.isUnmounted=!0,v.activeBranch&&d(v.activeBranch,n,C,S),v.pendingBranch&&d(v.pendingBranch,n,C,S)}};return v}function Nw(t,e,n,i,s,r,o,a,l){const c=e.suspense=Vu(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function Dw(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Mf(i?n.default:n),t.ssFallback=i?Mf(n.fallback):Q(ot)}function Mf(t){let e;if(ie(t)){const n=Oi&&t._c;n&&(t._d=!1,ye()),t=t(),n&&(t._d=!0,e=mt,Sm())}return X(t)&&(t=Cw(t)),t=bt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function qg(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Hu(t)}function ns(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,s=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=s,$u(i,s))}function Mw(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function Lw(t,e){return Gr(t,null,e)}function Jg(t,e){return Gr(t,null,{flush:"post"})}function Fw(t,e){return Gr(t,null,{flush:"sync"})}const bo={};function an(t,e,n){return Gr(t,e,n)}function Gr(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ce){var a;const l=ku()===((a=He)==null?void 0:a.scope)?He:null;let c,u=!1,h=!1;if(Ve(t)?(c=()=>t.value,u=gr(t)):wi(t)?(c=()=>t,i=!0):X(t)?(h=!0,u=t.some(v=>wi(v)||gr(v)),c=()=>t.map(v=>{if(Ve(v))return v.value;if(wi(v))return gi(v);if(ie(v))return Sn(v,l,2)})):ie(t)?e?c=()=>Sn(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),At(t,l,3,[d])}:c=zt,e&&i){const v=c;c=()=>gi(v())}let f,d=v=>{f=m.onStop=()=>{Sn(v,l,4)}},p;if(fs)if(d=zt,e?n&&At(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const v=Fm();p=v.__watcherHandles||(v.__watcherHandles=[])}else return zt;let _=h?new Array(t.length).fill(bo):bo;const w=()=>{if(m.active)if(e){const v=m.run();(i||u||(h?v.some((C,S)=>us(C,_[S])):us(v,_)))&&(f&&f(),At(e,l,3,[v,_===bo?void 0:h&&_[0]===bo?[]:_,d]),_=v)}else m.run()};w.allowRecurse=!!e;let E;s==="sync"?E=w:s==="post"?E=()=>Je(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),E=()=>za(w));const m=new Kr(c,E);e?n?w():_=m.run():s==="post"?Je(m.run.bind(m),l&&l.suspense):m.run();const T=()=>{m.stop(),l&&l.scope&&Ru(l.scope.effects,m)};return p&&p.push(T),T}function Uw(t,e,n){const i=this.proxy,s=Me(t)?t.includes(".")?Qg(i,t):()=>i[t]:t.bind(i,i);let r;ie(e)?r=e:(r=e.handler,n=e);const o=He;ti(this);const a=Gr(s,r.bind(i),n);return o?ti(o):Yn(),a}function Qg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function gi(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))gi(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)gi(t[n],e);else if(Ui(t)||Zi(t))t.forEach(n=>{gi(n,e)});else if(bg(t))for(const n in t)gi(t[n],e);return t}function Zg(t,e){const n=Ye;if(n===null)return t;const i=el(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ce]=e[r];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&gi(a),s.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Zt(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Is(),At(l,n,8,[t.el,a,t,e]),bs())}}function Wu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return si(()=>{t.isMounted=!0}),Ja(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],zu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},jw={name:"BaseTransition",props:zu,setup(t,{slots:e}){const n=gn(),i=Wu();let s;return()=>{const r=e.default&&Ya(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==ot){o=_;break}}const a=de(t),{mode:l}=a;if(i.isLeaving)return Dl(o);const c=Lf(o);if(!c)return Dl(o);const u=hs(c,a,i,n);Ai(c,u);const h=n.subTree,f=h&&Lf(h);let d=!1;const{getTransitionKey:p}=c.type;if(p){const _=p();s===void 0?s=_:_!==s&&(s=_,d=!0)}if(f&&f.type!==ot&&(!Ht(c,f)||d)){const _=hs(f,a,i,n);if(Ai(f,_),l==="out-in")return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Dl(o);l==="in-out"&&c.type!==ot&&(_.delayLeave=(w,E,m)=>{const T=tm(i,f);T[String(f.key)]=f,w._leaveCb=()=>{E(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return o}}},em=jw;function tm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function hs(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:_,onAppear:w,onAfterAppear:E,onAppearCancelled:m}=e,T=String(t.key),v=tm(n,t),C=(I,P)=>{I&&At(I,i,9,P)},S=(I,P)=>{const D=P[1];C(I,P),X(I)?I.every(K=>K.length<=1)&&D():I.length<=1&&D()},O={mode:r,persisted:o,beforeEnter(I){let P=a;if(!n.isMounted)if(s)P=_||a;else return;I._leaveCb&&I._leaveCb(!0);const D=v[T];D&&Ht(t,D)&&D.el._leaveCb&&D.el._leaveCb(),C(P,[I])},enter(I){let P=l,D=c,K=u;if(!n.isMounted)if(s)P=w||l,D=E||c,K=m||u;else return;let U=!1;const q=I._enterCb=j=>{U||(U=!0,j?C(K,[I]):C(D,[I]),O.delayedLeave&&O.delayedLeave(),I._enterCb=void 0)};P?S(P,[I,q]):q()},leave(I,P){const D=String(t.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return P();C(h,[I]);let K=!1;const U=I._leaveCb=q=>{K||(K=!0,P(),q?C(p,[I]):C(d,[I]),I._leaveCb=void 0,v[D]===t&&delete v[D])};v[D]=t,f?S(f,[I,U]):U()},clone(I){return hs(I,e,n,i)}};return O}function Dl(t){if(Yr(t))return t=un(t),t.children=null,t}function Lf(t){return Yr(t)?t.children?t.children[0]:void 0:t}function Ai(t,e){t.shapeFlag&6&&t.component?Ai(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ya(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ge?(o.patchFlag&128&&s++,i=i.concat(Ya(o.children,e,a))):(e||o.type!==ot)&&i.push(a!=null?un(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ut(t,e){return ie(t)?(()=>Oe({name:t.name},e,{setup:t}))():t}const Ii=t=>!!t.type.__asyncLoader;function Bw(t){ie(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const h=()=>(u++,l=null,f()),f=()=>{let d;return l||(d=l=e().catch(p=>{if(p=p instanceof Error?p:new Error(String(p)),a)return new Promise((_,w)=>{a(p,()=>_(h()),()=>w(p),u+1)});throw p}).then(p=>d!==l&&l?l:(p&&(p.__esModule||p[Symbol.toStringTag]==="Module")&&(p=p.default),c=p,p)))};return ut({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const d=He;if(c)return()=>Ml(c,d);const p=m=>{l=null,ji(m,d,13,!i)};if(o&&d.suspense||fs)return f().then(m=>()=>Ml(m,d)).catch(m=>(p(m),()=>i?Q(i,{error:m}):null));const _=Ue(!1),w=Ue(),E=Ue(!!s);return s&&setTimeout(()=>{E.value=!1},s),r!=null&&setTimeout(()=>{if(!_.value&&!w.value){const m=new Error(`Async component timed out after ${r}ms.`);p(m),w.value=m}},r),f().then(()=>{_.value=!0,d.parent&&Yr(d.parent.vnode)&&za(d.parent.update)}).catch(m=>{p(m),w.value=m}),()=>{if(_.value&&c)return Ml(c,d);if(w.value&&i)return Q(i,{error:w.value});if(n&&!E.value)return Q(n)}}})}function Ml(t,e){const{ref:n,props:i,children:s,ce:r}=e.vnode,o=Q(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const Yr=t=>t.type.__isKeepAlive,Hw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=gn(),i=n.ctx;if(!i.renderer)return()=>{const m=e.default&&e.default();return m&&m.length===1?m[0]:m};const s=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=i,f=h("div");i.activate=(m,T,v,C,S)=>{const O=m.component;c(m,T,v,0,a),l(O.vnode,m,T,v,O,a,C,m.slotScopeIds,S),Je(()=>{O.isDeactivated=!1,O.a&&es(O.a);const I=m.props&&m.props.onVnodeMounted;I&&pt(I,O.parent,m)},a)},i.deactivate=m=>{const T=m.component;c(m,f,null,1,a),Je(()=>{T.da&&es(T.da);const v=m.props&&m.props.onVnodeUnmounted;v&&pt(v,T.parent,m),T.isDeactivated=!0},a)};function d(m){Ll(m),u(m,n,a,!0)}function p(m){s.forEach((T,v)=>{const C=Oc(T.type);C&&(!m||!m(C))&&_(v)})}function _(m){const T=s.get(m);!o||!Ht(T,o)?d(T):o&&Ll(o),s.delete(m),r.delete(m)}an(()=>[t.include,t.exclude],([m,T])=>{m&&p(v=>Gs(m,v)),T&&p(v=>!Gs(T,v))},{flush:"post",deep:!0});let w=null;const E=()=>{w!=null&&s.set(w,Fl(n.subTree))};return si(E),qa(E),Ja(()=>{s.forEach(m=>{const{subTree:T,suspense:v}=n,C=Fl(T);if(m.type===C.type&&m.key===C.key){Ll(C);const S=C.component.da;S&&Je(S,v);return}d(m)})}),()=>{if(w=null,!e.default)return null;const m=e.default(),T=m[0];if(m.length>1)return o=null,m;if(!ei(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return o=null,T;let v=Fl(T);const C=v.type,S=Oc(Ii(v)?v.type.__asyncResolved||{}:C),{include:O,exclude:I,max:P}=t;if(O&&(!S||!Gs(O,S))||I&&S&&Gs(I,S))return o=v,T;const D=v.key==null?C:v.key,K=s.get(D);return v.el&&(v=un(v),T.shapeFlag&128&&(T.ssContent=v)),w=D,K?(v.el=K.el,v.component=K.component,v.transition&&Ai(v,v.transition),v.shapeFlag|=512,r.delete(D),r.add(D)):(r.add(D),P&&r.size>parseInt(P,10)&&_(r.values().next().value)),v.shapeFlag|=256,o=v,Xg(T.type)?T:v}}},$w=Hw;function Gs(t,e){return X(t)?t.some(n=>Gs(n,e)):Me(t)?t.split(",").includes(e):pE(t)?t.test(e):!1}function nm(t,e){sm(t,"a",e)}function im(t,e){sm(t,"da",e)}function sm(t,e,n=He){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xa(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Yr(s.parent.vnode)&&Vw(i,e,n,s),s=s.parent}}function Vw(t,e,n,i){const s=Xa(e,t,i,!0);Qa(()=>{Ru(i[e],s)},n)}function Ll(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Fl(t){return t.shapeFlag&128?t.ssContent:t}function Xa(t,e,n=He,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Is(),ti(n);const a=At(e,n,t,o);return Yn(),bs(),a});return i?s.unshift(r):s.push(r),r}}const Nn=t=>(e,n=He)=>(!fs||t==="sp")&&Xa(t,(...i)=>e(...i),n),rm=Nn("bm"),si=Nn("m"),om=Nn("bu"),qa=Nn("u"),Ja=Nn("bum"),Qa=Nn("um"),am=Nn("sp"),lm=Nn("rtg"),cm=Nn("rtc");function um(t,e=He){Xa("ec",t,e)}const Ku="components",Ww="directives";function Xr(t,e){return Gu(Ku,t,!0,e)||t}const hm=Symbol.for("v-ndc");function fm(t){return Me(t)?Gu(Ku,t,!1)||t:t||hm}function zw(t){return Gu(Ww,t)}function Gu(t,e,n=!0,i=!1){const s=Ye||He;if(s){const r=s.type;if(t===Ku){const a=Oc(r,!1);if(a&&(a===e||a===yt(e)||a===Wr(yt(e))))return r}const o=Ff(s[t]||r[t],e)||Ff(s.appContext[t],e);return!o&&i?r:o}}function Ff(t,e){return t&&(t[e]||t[yt(e)]||t[Wr(yt(e))])}function Kw(t,e,n,i){let s;const r=n&&n[i];if(X(t)||Me(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(Re(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function Gw(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(X(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return t}function Yw(t,e,n={},i,s){if(Ye.isCE||Ye.parent&&Ii(Ye.parent)&&Ye.parent.isCE)return e!=="default"&&(n.name=e),Q("slot",n,i&&i());let r=t[e];r&&r._c&&(r._d=!1),ye();const o=r&&dm(r(n)),a=Pi(Ge,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function dm(t){return t.some(e=>ei(e)?!(e.type===ot||e.type===Ge&&!dm(e.children)):!0)?t:null}function Xw(t,e){const n={};for(const i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:er(i)]=t[i];return n}const wc=t=>t?km(t)?el(t)||t.proxy:wc(t.parent):null,tr=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wc(t.parent),$root:t=>wc(t.root),$emit:t=>t.emit,$options:t=>Yu(t),$forceUpdate:t=>t.f||(t.f=()=>za(t.update)),$nextTick:t=>t.n||(t.n=Wa.bind(t.proxy)),$watch:t=>Uw.bind(t)}),Ul=(t,e)=>t!==Ce&&!t.__isScriptSetup&&_e(t,e),Ic={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ul(i,e))return o[e]=1,i[e];if(s!==Ce&&_e(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&_e(c,e))return o[e]=3,r[e];if(n!==Ce&&_e(n,e))return o[e]=4,n[e];bc&&(o[e]=0)}}const u=tr[e];let h,f;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&_e(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,_e(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ul(s,e)?(s[e]=n,!0):i!==Ce&&_e(i,e)?(i[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ce&&_e(t,o)||Ul(e,o)||(a=r[0])&&_e(a,o)||_e(i,o)||_e(tr,o)||_e(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},qw=Oe({},Ic,{get(t,e){if(e!==Symbol.unscopables)return Ic.get(t,e,t)},has(t,e){return e[0]!=="_"&&!vE(e)}});function Jw(){return null}function Qw(){return null}function Zw(t){}function eI(t){}function tI(){return null}function nI(){}function iI(t,e){return null}function sI(){return pm().slots}function rI(){return pm().attrs}function oI(t,e,n){const i=gn();if(n&&n.local){const s=Ue(t[e]);return an(()=>t[e],r=>s.value=r),an(s,r=>{r!==t[e]&&i.emit(`update:${e}`,r)}),s}else return{__v_isRef:!0,get value(){return t[e]},set value(s){i.emit(`update:${e}`,s)}}}function pm(){const t=gn();return t.setupContext||(t.setupContext=Mm(t))}function wr(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function aI(t,e){const n=wr(t);for(const i in e){if(i.startsWith("__skip"))continue;let s=n[i];s?X(s)||ie(s)?s=n[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=n[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function lI(t,e){return!t||!e?t||e:X(t)&&X(e)?t.concat(e):Oe({},wr(t),wr(e))}function cI(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function uI(t){const e=gn();let n=t();return Yn(),Au(n)&&(n=n.catch(i=>{throw ti(e),i})),[n,()=>ti(e)]}let bc=!0;function hI(t){const e=Yu(t),n=t.proxy,i=t.ctx;bc=!1,e.beforeCreate&&Uf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:p,activated:_,deactivated:w,beforeDestroy:E,beforeUnmount:m,destroyed:T,unmounted:v,render:C,renderTracked:S,renderTriggered:O,errorCaptured:I,serverPrefetch:P,expose:D,inheritAttrs:K,components:U,directives:q,filters:j}=e;if(c&&fI(c,i,null),o)for(const A in o){const L=o[A];ie(L)&&(i[A]=L.bind(n))}if(s){const A=s.call(n,n);Re(A)&&(t.data=Ts(A))}if(bc=!0,r)for(const A in r){const L=r[A],me=ie(L)?L.bind(n,n):ie(L.get)?L.get.bind(n,n):zt,ne=!ie(L)&&ie(L.set)?L.set.bind(n):zt,se=Tt({get:me,set:ne});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>se.value,set:Le=>se.value=Le})}if(a)for(const A in a)gm(a[A],i,n,A);if(l){const A=ie(l)?l.call(n):l;Reflect.ownKeys(A).forEach(L=>{nr(L,A[L])})}u&&Uf(u,t,"c");function F(A,L){X(L)?L.forEach(me=>A(me.bind(n))):L&&A(L.bind(n))}if(F(rm,h),F(si,f),F(om,d),F(qa,p),F(nm,_),F(im,w),F(um,I),F(cm,S),F(lm,O),F(Ja,m),F(Qa,v),F(am,P),X(D))if(D.length){const A=t.exposed||(t.exposed={});D.forEach(L=>{Object.defineProperty(A,L,{get:()=>n[L],set:me=>n[L]=me})})}else t.exposed||(t.exposed={});C&&t.render===zt&&(t.render=C),K!=null&&(t.inheritAttrs=K),U&&(t.components=U),q&&(t.directives=q)}function fI(t,e,n=zt){X(t)&&(t=Tc(t));for(const i in t){const s=t[i];let r;Re(s)?"default"in s?r=xt(s.from||i,s.default,!0):r=xt(s.from||i):r=xt(s),Ve(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Uf(t,e,n){At(X(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,i){const s=i.includes(".")?Qg(n,i):()=>n[i];if(Me(t)){const r=e[t];ie(r)&&an(s,r)}else if(ie(t))an(s,t.bind(n));else if(Re(t))if(X(t))t.forEach(r=>gm(r,e,n,i));else{const r=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(r)&&an(s,r,t)}}function Yu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ta(l,c,o,!0)),ta(l,e,o)),Re(e)&&r.set(e,l),l}function ta(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ta(t,r,n,!0),s&&s.forEach(o=>ta(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=dI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const dI={data:jf,props:Bf,emits:Bf,methods:Ys,computed:Ys,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Ys,directives:Ys,watch:gI,provide:jf,inject:pI};function jf(t,e){return e?t?function(){return Oe(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function pI(t,e){return Ys(Tc(t),Tc(e))}function Tc(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?Oe(Object.create(null),t,e):e}function Bf(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:Oe(Object.create(null),wr(t),wr(e??{})):e}function gI(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const i in e)n[i]=ht(t[i],e[i]);return n}function mm(){return{app:null,config:{isNativeTag:hE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mI=0;function _I(t,e){return function(i,s=null){ie(i)||(i=Oe({},i)),s!=null&&!Re(s)&&(s=null);const r=mm(),o=new Set;let a=!1;const l=r.app={_uid:mI++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:jm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ie(c.install)?(o.add(c),c.install(l,...u)):ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Q(i,s);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,el(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Ir=l;try{return c()}finally{Ir=null}}};return l}}let Ir=null;function nr(t,e){if(He){let n=He.provides;const i=He.parent&&He.parent.provides;i===n&&(n=He.provides=Object.create(i)),n[t]=e}}function xt(t,e,n=!1){const i=He||Ye;if(i||Ir){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ir._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(i&&i.proxy):e}}function yI(){return!!(He||Ye||Ir)}function vI(t,e,n,i=!1){const s={},r={};qo(r,Za,1),t.propsDefaults=Object.create(null),_m(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Bg(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function EI(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=de(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ka(t.emitsOptions,f))continue;const d=e[f];if(l)if(_e(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const p=yt(f);s[p]=Cc(l,a,p,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{_m(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!_e(e,h)&&((u=Nt(h))===h||!_e(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Cc(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!_e(e,h))&&(delete r[h],c=!0)}c&&xn(t,"set","$attrs")}function _m(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zs(l))continue;const c=e[l];let u;s&&_e(s,u=yt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ka(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=de(n),c=a||Ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Cc(s,l,h,c[h],t,!_e(c,h))}}return o}function Cc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(ti(s),i=c[n]=l.call(null,e),Yn())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Nt(n))&&(i=!0))}return i}function ym(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=h=>{l=!0;const[f,d]=ym(h,e,!0);Oe(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Re(t)&&i.set(t,Qi),Qi;if(X(r))for(let u=0;u<r.length;u++){const h=yt(r[u]);Hf(h)&&(o[h]=Ce)}else if(r)for(const u in r){const h=yt(u);if(Hf(h)){const f=r[u],d=o[h]=X(f)||ie(f)?{type:f}:Oe({},f);if(d){const p=Wf(Boolean,d.type),_=Wf(String,d.type);d[0]=p>-1,d[1]=_<0||p<_,(p>-1||_e(d,"default"))&&a.push(h)}}}const c=[o,a];return Re(t)&&i.set(t,c),c}function Hf(t){return t[0]!=="$"}function $f(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Vf(t,e){return $f(t)===$f(e)}function Wf(t,e){return X(e)?e.findIndex(n=>Vf(n,t)):ie(e)&&Vf(e,t)?0:-1}const vm=t=>t[0]==="_"||t==="$stable",Xu=t=>X(t)?t.map(bt):[bt(t)],wI=(t,e,n)=>{if(e._n)return e;const i=We((...s)=>Xu(e(...s)),n);return i._c=!1,i},Em=(t,e,n)=>{const i=t._ctx;for(const s in t){if(vm(s))continue;const r=t[s];if(ie(r))e[s]=wI(s,r,i);else if(r!=null){const o=Xu(r);e[s]=()=>o}}},wm=(t,e)=>{const n=Xu(e);t.slots.default=()=>n},II=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),qo(e,"_",n)):Em(e,t.slots={})}else t.slots={},e&&wm(t,e);qo(t.slots,Za,1)},bI=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ce;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Oe(s,e),!n&&a===1&&delete s._):(r=!e.$stable,Em(e,s)),o=e}else e&&(wm(t,e),o={default:1});if(r)for(const a in s)!vm(a)&&!(a in o)&&delete s[a]};function na(t,e,n,i,s=!1){if(X(t)){t.forEach((f,d)=>na(f,e&&(X(e)?e[d]:e),n,i,s));return}if(Ii(i)&&!s)return;const r=i.shapeFlag&4?el(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Me(c)?(u[c]=null,_e(h,c)&&(h[c]=null)):Ve(c)&&(c.value=null)),ie(l))Sn(l,a,12,[o,u]);else{const f=Me(l),d=Ve(l);if(f||d){const p=()=>{if(t.f){const _=f?_e(h,l)?h[l]:u[l]:l.value;s?X(_)&&Ru(_,r):X(_)?_.includes(r)||_.push(r):f?(u[l]=[r],_e(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,_e(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(p.id=-1,Je(p,n)):p()}}}let Fn=!1;const To=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Co=t=>t.nodeType===8;function TI(t){const{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(E,m)=>{if(!m.hasChildNodes()){n(null,E,m),ea(),m._vnode=E;return}Fn=!1,h(m.firstChild,E,null,null,null),ea(),m._vnode=E,Fn&&console.error("Hydration completed but contains mismatches.")},h=(E,m,T,v,C,S=!1)=>{const O=Co(E)&&E.data==="[",I=()=>_(E,m,T,v,C,O),{type:P,ref:D,shapeFlag:K,patchFlag:U}=m;let q=E.nodeType;m.el=E,U===-2&&(S=!1,m.dynamicChildren=null);let j=null;switch(P){case xi:q!==3?m.children===""?(l(m.el=s(""),o(E),E),j=E):j=I():(E.data!==m.children&&(Fn=!0,E.data=m.children),j=r(E));break;case ot:q!==8||O?j=I():j=r(E);break;case bi:if(O&&(E=r(E),q=E.nodeType),q===1||q===3){j=E;const le=!m.children.length;for(let F=0;F<m.staticCount;F++)le&&(m.children+=j.nodeType===1?j.outerHTML:j.data),F===m.staticCount-1&&(m.anchor=j),j=r(j);return O?r(j):j}else I();break;case Ge:O?j=p(E,m,T,v,C,S):j=I();break;default:if(K&1)q!==1||m.type.toLowerCase()!==E.tagName.toLowerCase()?j=I():j=f(E,m,T,v,C,S);else if(K&6){m.slotScopeIds=C;const le=o(E);if(e(m,le,null,T,v,To(le),S),j=O?w(E):r(E),j&&Co(j)&&j.data==="teleport end"&&(j=r(j)),Ii(m)){let F;O?(F=Q(Ge),F.anchor=j?j.previousSibling:le.lastChild):F=E.nodeType===3?Fe(""):Q("div"),F.el=E,m.component.subTree=F}}else K&64?q!==8?j=I():j=m.type.hydrate(E,m,T,v,C,S,t,d):K&128&&(j=m.type.hydrate(E,m,T,v,To(o(E)),C,S,t,h))}return D!=null&&na(D,null,v,m),j},f=(E,m,T,v,C,S)=>{S=S||!!m.dynamicChildren;const{type:O,props:I,patchFlag:P,shapeFlag:D,dirs:K}=m,U=O==="input"&&K||O==="option";if(U||P!==-1){if(K&&Zt(m,null,T,"created"),I)if(U||!S||P&48)for(const j in I)(U&&j.endsWith("value")||Vr(j)&&!Zs(j))&&i(E,j,null,I[j],!1,void 0,T);else I.onClick&&i(E,"onClick",null,I.onClick,!1,void 0,T);let q;if((q=I&&I.onVnodeBeforeMount)&&pt(q,T,m),K&&Zt(m,null,T,"beforeMount"),((q=I&&I.onVnodeMounted)||K)&&qg(()=>{q&&pt(q,T,m),K&&Zt(m,null,T,"mounted")},v),D&16&&!(I&&(I.innerHTML||I.textContent))){let j=d(E.firstChild,m,E,T,v,C,S);for(;j;){Fn=!0;const le=j;j=j.nextSibling,a(le)}}else D&8&&E.textContent!==m.children&&(Fn=!0,E.textContent=m.children)}return E.nextSibling},d=(E,m,T,v,C,S,O)=>{O=O||!!m.dynamicChildren;const I=m.children,P=I.length;for(let D=0;D<P;D++){const K=O?I[D]:I[D]=bt(I[D]);if(E)E=h(E,K,v,C,S,O);else{if(K.type===xi&&!K.children)continue;Fn=!0,n(null,K,T,null,v,C,To(T),S)}}return E},p=(E,m,T,v,C,S)=>{const{slotScopeIds:O}=m;O&&(C=C?C.concat(O):O);const I=o(E),P=d(r(E),m,I,T,v,C,S);return P&&Co(P)&&P.data==="]"?r(m.anchor=P):(Fn=!0,l(m.anchor=c("]"),I,P),P)},_=(E,m,T,v,C,S)=>{if(Fn=!0,m.el=null,S){const P=w(E);for(;;){const D=r(E);if(D&&D!==P)a(D);else break}}const O=r(E),I=o(E);return a(E),n(null,m,I,O,T,v,To(I),C),O},w=E=>{let m=0;for(;E;)if(E=r(E),E&&Co(E)&&(E.data==="["&&m++,E.data==="]")){if(m===0)return r(E);m--}return E};return[u,h]}const Je=qg;function Im(t){return Tm(t)}function bm(t){return Tm(t,TI)}function Tm(t,e){const n=mc();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=zt,insertStaticContent:p}=t,_=(g,y,b,R=null,k=null,N=null,G=!1,H=null,$=!!y.dynamicChildren)=>{if(g===y)return;g&&!Ht(g,y)&&(R=x(g),Le(g,k,N,!0),g=null),y.patchFlag===-2&&($=!1,y.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:J}=y;switch(M){case xi:w(g,y,b,R);break;case ot:E(g,y,b,R);break;case bi:g==null&&m(y,b,R,G);break;case Ge:U(g,y,b,R,k,N,G,H,$);break;default:J&1?C(g,y,b,R,k,N,G,H,$):J&6?q(g,y,b,R,k,N,G,H,$):(J&64||J&128)&&M.process(g,y,b,R,k,N,G,H,$,V)}ee!=null&&k&&na(ee,g&&g.ref,N,y||g,!y)},w=(g,y,b,R)=>{if(g==null)i(y.el=a(y.children),b,R);else{const k=y.el=g.el;y.children!==g.children&&c(k,y.children)}},E=(g,y,b,R)=>{g==null?i(y.el=l(y.children||""),b,R):y.el=g.el},m=(g,y,b,R)=>{[g.el,g.anchor]=p(g.children,y,b,R,g.el,g.anchor)},T=({el:g,anchor:y},b,R)=>{let k;for(;g&&g!==y;)k=f(g),i(g,b,R),g=k;i(y,b,R)},v=({el:g,anchor:y})=>{let b;for(;g&&g!==y;)b=f(g),s(g),g=b;s(y)},C=(g,y,b,R,k,N,G,H,$)=>{G=G||y.type==="svg",g==null?S(y,b,R,k,N,G,H,$):P(g,y,k,N,G,H,$)},S=(g,y,b,R,k,N,G,H)=>{let $,M;const{type:ee,props:J,shapeFlag:te,transition:oe,dirs:ce}=g;if($=g.el=o(g.type,N,J&&J.is,J),te&8?u($,g.children):te&16&&I(g.children,$,null,R,k,N&&ee!=="foreignObject",G,H),ce&&Zt(g,null,R,"created"),O($,g,g.scopeId,G,R),J){for(const Te in J)Te!=="value"&&!Zs(Te)&&r($,Te,null,J[Te],N,g.children,R,k,tt);"value"in J&&r($,"value",null,J.value),(M=J.onVnodeBeforeMount)&&pt(M,R,g)}ce&&Zt(g,null,R,"beforeMount");const Ae=(!k||k&&!k.pendingBranch)&&oe&&!oe.persisted;Ae&&oe.beforeEnter($),i($,y,b),((M=J&&J.onVnodeMounted)||Ae||ce)&&Je(()=>{M&&pt(M,R,g),Ae&&oe.enter($),ce&&Zt(g,null,R,"mounted")},k)},O=(g,y,b,R,k)=>{if(b&&d(g,b),R)for(let N=0;N<R.length;N++)d(g,R[N]);if(k){let N=k.subTree;if(y===N){const G=k.vnode;O(g,G,G.scopeId,G.slotScopeIds,k.parent)}}},I=(g,y,b,R,k,N,G,H,$=0)=>{for(let M=$;M<g.length;M++){const ee=g[M]=H?$n(g[M]):bt(g[M]);_(null,ee,y,b,R,k,N,G,H)}},P=(g,y,b,R,k,N,G)=>{const H=y.el=g.el;let{patchFlag:$,dynamicChildren:M,dirs:ee}=y;$|=g.patchFlag&16;const J=g.props||Ce,te=y.props||Ce;let oe;b&&ci(b,!1),(oe=te.onVnodeBeforeUpdate)&&pt(oe,b,y,g),ee&&Zt(y,g,b,"beforeUpdate"),b&&ci(b,!0);const ce=k&&y.type!=="foreignObject";if(M?D(g.dynamicChildren,M,H,b,R,ce,N):G||L(g,y,H,null,b,R,ce,N,!1),$>0){if($&16)K(H,y,J,te,b,R,k);else if($&2&&J.class!==te.class&&r(H,"class",null,te.class,k),$&4&&r(H,"style",J.style,te.style,k),$&8){const Ae=y.dynamicProps;for(let Te=0;Te<Ae.length;Te++){const Be=Ae[Te],jt=J[Be],Vi=te[Be];(Vi!==jt||Be==="value")&&r(H,Be,jt,Vi,k,g.children,b,R,tt)}}$&1&&g.children!==y.children&&u(H,y.children)}else!G&&M==null&&K(H,y,J,te,b,R,k);((oe=te.onVnodeUpdated)||ee)&&Je(()=>{oe&&pt(oe,b,y,g),ee&&Zt(y,g,b,"updated")},R)},D=(g,y,b,R,k,N,G)=>{for(let H=0;H<y.length;H++){const $=g[H],M=y[H],ee=$.el&&($.type===Ge||!Ht($,M)||$.shapeFlag&70)?h($.el):b;_($,M,ee,null,R,k,N,G,!0)}},K=(g,y,b,R,k,N,G)=>{if(b!==R){if(b!==Ce)for(const H in b)!Zs(H)&&!(H in R)&&r(g,H,b[H],null,G,y.children,k,N,tt);for(const H in R){if(Zs(H))continue;const $=R[H],M=b[H];$!==M&&H!=="value"&&r(g,H,M,$,G,y.children,k,N,tt)}"value"in R&&r(g,"value",b.value,R.value)}},U=(g,y,b,R,k,N,G,H,$)=>{const M=y.el=g?g.el:a(""),ee=y.anchor=g?g.anchor:a("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:oe}=y;oe&&(H=H?H.concat(oe):oe),g==null?(i(M,b,R),i(ee,b,R),I(y.children,b,ee,k,N,G,H,$)):J>0&&J&64&&te&&g.dynamicChildren?(D(g.dynamicChildren,te,b,k,N,G,H),(y.key!=null||k&&y===k.subTree)&&qu(g,y,!0)):L(g,y,b,ee,k,N,G,H,$)},q=(g,y,b,R,k,N,G,H,$)=>{y.slotScopeIds=H,g==null?y.shapeFlag&512?k.ctx.activate(y,b,R,G,$):j(y,b,R,k,N,G,$):le(g,y,$)},j=(g,y,b,R,k,N,G)=>{const H=g.component=Pm(g,R,k);if(Yr(g)&&(H.ctx.renderer=V),Nm(H),H.asyncDep){if(k&&k.registerDep(H,F),!g.el){const $=H.subTree=Q(ot);E(null,$,y,b)}return}F(H,g,y,b,k,N,G)},le=(g,y,b)=>{const R=y.component=g.component;if(Aw(g,y,b))if(R.asyncDep&&!R.asyncResolved){A(R,y,b);return}else R.next=y,ww(R.update),R.update();else y.el=g.el,R.vnode=y},F=(g,y,b,R,k,N,G)=>{const H=()=>{if(g.isMounted){let{next:ee,bu:J,u:te,parent:oe,vnode:ce}=g,Ae=ee,Te;ci(g,!1),ee?(ee.el=ce.el,A(g,ee,G)):ee=ce,J&&es(J),(Te=ee.props&&ee.props.onVnodeBeforeUpdate)&&pt(Te,oe,ee,ce),ci(g,!0);const Be=Ho(g),jt=g.subTree;g.subTree=Be,_(jt,Be,h(jt.el),x(jt),g,k,N),ee.el=Be.el,Ae===null&&$u(g,Be.el),te&&Je(te,k),(Te=ee.props&&ee.props.onVnodeUpdated)&&Je(()=>pt(Te,oe,ee,ce),k)}else{let ee;const{el:J,props:te}=y,{bm:oe,m:ce,parent:Ae}=g,Te=Ii(y);if(ci(g,!1),oe&&es(oe),!Te&&(ee=te&&te.onVnodeBeforeMount)&&pt(ee,Ae,y),ci(g,!0),J&&ve){const Be=()=>{g.subTree=Ho(g),ve(J,g.subTree,g,k,null)};Te?y.type.__asyncLoader().then(()=>!g.isUnmounted&&Be()):Be()}else{const Be=g.subTree=Ho(g);_(null,Be,b,R,g,k,N),y.el=Be.el}if(ce&&Je(ce,k),!Te&&(ee=te&&te.onVnodeMounted)){const Be=y;Je(()=>pt(ee,Ae,Be),k)}(y.shapeFlag&256||Ae&&Ii(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&g.a&&Je(g.a,k),g.isMounted=!0,y=b=R=null}},$=g.effect=new Kr(H,()=>za(M),g.scope),M=g.update=()=>$.run();M.id=g.uid,ci(g,!0),M()},A=(g,y,b)=>{y.component=g;const R=g.vnode.props;g.vnode=y,g.next=null,EI(g,y.props,R,b),bI(g,y.children,b),Is(),Nf(),bs()},L=(g,y,b,R,k,N,G,H,$=!1)=>{const M=g&&g.children,ee=g?g.shapeFlag:0,J=y.children,{patchFlag:te,shapeFlag:oe}=y;if(te>0){if(te&128){ne(M,J,b,R,k,N,G,H,$);return}else if(te&256){me(M,J,b,R,k,N,G,H,$);return}}oe&8?(ee&16&&tt(M,k,N),J!==M&&u(b,J)):ee&16?oe&16?ne(M,J,b,R,k,N,G,H,$):tt(M,k,N,!0):(ee&8&&u(b,""),oe&16&&I(J,b,R,k,N,G,H,$))},me=(g,y,b,R,k,N,G,H,$)=>{g=g||Qi,y=y||Qi;const M=g.length,ee=y.length,J=Math.min(M,ee);let te;for(te=0;te<J;te++){const oe=y[te]=$?$n(y[te]):bt(y[te]);_(g[te],oe,b,null,k,N,G,H,$)}M>ee?tt(g,k,N,!0,!1,J):I(y,b,R,k,N,G,H,$,J)},ne=(g,y,b,R,k,N,G,H,$)=>{let M=0;const ee=y.length;let J=g.length-1,te=ee-1;for(;M<=J&&M<=te;){const oe=g[M],ce=y[M]=$?$n(y[M]):bt(y[M]);if(Ht(oe,ce))_(oe,ce,b,null,k,N,G,H,$);else break;M++}for(;M<=J&&M<=te;){const oe=g[J],ce=y[te]=$?$n(y[te]):bt(y[te]);if(Ht(oe,ce))_(oe,ce,b,null,k,N,G,H,$);else break;J--,te--}if(M>J){if(M<=te){const oe=te+1,ce=oe<ee?y[oe].el:R;for(;M<=te;)_(null,y[M]=$?$n(y[M]):bt(y[M]),b,ce,k,N,G,H,$),M++}}else if(M>te)for(;M<=J;)Le(g[M],k,N,!0),M++;else{const oe=M,ce=M,Ae=new Map;for(M=ce;M<=te;M++){const Et=y[M]=$?$n(y[M]):bt(y[M]);Et.key!=null&&Ae.set(Et.key,M)}let Te,Be=0;const jt=te-ce+1;let Vi=!1,wf=0;const Ms=new Array(jt);for(M=0;M<jt;M++)Ms[M]=0;for(M=oe;M<=J;M++){const Et=g[M];if(Be>=jt){Le(Et,k,N,!0);continue}let Qt;if(Et.key!=null)Qt=Ae.get(Et.key);else for(Te=ce;Te<=te;Te++)if(Ms[Te-ce]===0&&Ht(Et,y[Te])){Qt=Te;break}Qt===void 0?Le(Et,k,N,!0):(Ms[Qt-ce]=M+1,Qt>=wf?wf=Qt:Vi=!0,_(Et,y[Qt],b,null,k,N,G,H,$),Be++)}const If=Vi?CI(Ms):Qi;for(Te=If.length-1,M=jt-1;M>=0;M--){const Et=ce+M,Qt=y[Et],bf=Et+1<ee?y[Et+1].el:R;Ms[M]===0?_(null,Qt,b,bf,k,N,G,H,$):Vi&&(Te<0||M!==If[Te]?se(Qt,b,bf,2):Te--)}}},se=(g,y,b,R,k=null)=>{const{el:N,type:G,transition:H,children:$,shapeFlag:M}=g;if(M&6){se(g.component.subTree,y,b,R);return}if(M&128){g.suspense.move(y,b,R);return}if(M&64){G.move(g,y,b,V);return}if(G===Ge){i(N,y,b);for(let J=0;J<$.length;J++)se($[J],y,b,R);i(g.anchor,y,b);return}if(G===bi){T(g,y,b);return}if(R!==2&&M&1&&H)if(R===0)H.beforeEnter(N),i(N,y,b),Je(()=>H.enter(N),k);else{const{leave:J,delayLeave:te,afterLeave:oe}=H,ce=()=>i(N,y,b),Ae=()=>{J(N,()=>{ce(),oe&&oe()})};te?te(N,ce,Ae):Ae()}else i(N,y,b)},Le=(g,y,b,R=!1,k=!1)=>{const{type:N,props:G,ref:H,children:$,dynamicChildren:M,shapeFlag:ee,patchFlag:J,dirs:te}=g;if(H!=null&&na(H,null,b,g,!0),ee&256){y.ctx.deactivate(g);return}const oe=ee&1&&te,ce=!Ii(g);let Ae;if(ce&&(Ae=G&&G.onVnodeBeforeUnmount)&&pt(Ae,y,g),ee&6)mo(g.component,b,R);else{if(ee&128){g.suspense.unmount(b,R);return}oe&&Zt(g,null,y,"beforeUnmount"),ee&64?g.type.remove(g,y,b,k,V,R):M&&(N!==Ge||J>0&&J&64)?tt(M,y,b,!1,!0):(N===Ge&&J&384||!k&&ee&16)&&tt($,y,b),R&&Ut(g)}(ce&&(Ae=G&&G.onVnodeUnmounted)||oe)&&Je(()=>{Ae&&pt(Ae,y,g),oe&&Zt(g,null,y,"unmounted")},b)},Ut=g=>{const{type:y,el:b,anchor:R,transition:k}=g;if(y===Ge){Mn(b,R);return}if(y===bi){v(g);return}const N=()=>{s(b),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(g.shapeFlag&1&&k&&!k.persisted){const{leave:G,delayLeave:H}=k,$=()=>G(b,N);H?H(g.el,N,$):$()}else N()},Mn=(g,y)=>{let b;for(;g!==y;)b=f(g),s(g),g=b;s(y)},mo=(g,y,b)=>{const{bum:R,scope:k,update:N,subTree:G,um:H}=g;R&&es(R),k.stop(),N&&(N.active=!1,Le(G,g,y,b)),H&&Je(H,y),Je(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},tt=(g,y,b,R=!1,k=!1,N=0)=>{for(let G=N;G<g.length;G++)Le(g[G],y,b,R,k)},x=g=>g.shapeFlag&6?x(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),Y=(g,y,b)=>{g==null?y._vnode&&Le(y._vnode,null,null,!0):_(y._vnode||null,g,y,null,null,null,b),Nf(),ea(),y._vnode=g},V={p:_,um:Le,m:se,r:Ut,mt:j,mc:I,pc:L,pbc:D,n:x,o:t};let Z,ve;return e&&([Z,ve]=e(V)),{render:Y,hydrate:Z,createApp:_I(Y,Z)}}function ci({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qu(t,e,n=!1){const i=t.children,s=e.children;if(X(i)&&X(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=$n(s[r]),a.el=o.el),n||qu(o,a)),a.type===xi&&(a.el=o.el)}}function CI(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const SI=t=>t.__isTeleport,ir=t=>t&&(t.disabled||t.disabled===""),zf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Sc=(t,e)=>{const n=t&&t.to;return Me(n)?e?e(n):null:n},RI={__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:p,createText:_,createComment:w}}=c,E=ir(e.props);let{shapeFlag:m,children:T,dynamicChildren:v}=e;if(t==null){const C=e.el=_(""),S=e.anchor=_("");d(C,n,i),d(S,n,i);const O=e.target=Sc(e.props,p),I=e.targetAnchor=_("");O&&(d(I,O),o=o||zf(O));const P=(D,K)=>{m&16&&u(T,D,K,s,r,o,a,l)};E?P(n,S):O&&P(O,I)}else{e.el=t.el;const C=e.anchor=t.anchor,S=e.target=t.target,O=e.targetAnchor=t.targetAnchor,I=ir(t.props),P=I?n:S,D=I?C:O;if(o=o||zf(S),v?(f(t.dynamicChildren,v,P,s,r,o,a),qu(t,e,!0)):l||h(t,e,P,D,s,r,o,a,!1),E)I||So(e,n,C,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const K=e.target=Sc(e.props,p);K&&So(e,K,null,c,0)}else I&&So(e,S,O,c,1)}Cm(e)},remove(t,e,n,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:h,props:f}=t;if(h&&r(u),(o||!ir(f))&&(r(c),a&16))for(let d=0;d<l.length;d++){const p=l[d];s(p,e,n,!0,!!p.dynamicChildren)}},move:So,hydrate:AI};function So(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&i(o,e,n),(!h||ir(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);h&&i(a,e,n)}function AI(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Sc(e.props,l);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(ir(e.props))e.anchor=c(o(t),e,a(t),n,i,s,r),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(h,e,u,n,i,s,r)}Cm(e)}return e.anchor&&o(e.anchor)}const xI=RI;function Cm(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ge=Symbol.for("v-fgt"),xi=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),bi=Symbol.for("v-stc"),sr=[];let mt=null;function ye(t=!1){sr.push(mt=t?null:[])}function Sm(){sr.pop(),mt=sr[sr.length-1]||null}let Oi=1;function Rc(t){Oi+=t}function Rm(t){return t.dynamicChildren=Oi>0?mt||Qi:null,Sm(),Oi>0&&mt&&mt.push(t),t}function xe(t,e,n,i,s,r){return Rm(B(t,e,n,i,s,r,!0))}function Pi(t,e,n,i,s){return Rm(Q(t,e,n,i,s,!0))}function ei(t){return t?t.__v_isVNode===!0:!1}function Ht(t,e){return t.type===e.type&&t.key===e.key}function OI(t){}const Za="__vInternal",Am=({key:t})=>t??null,$o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||Ve(t)||ie(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,i=0,s=null,r=t===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&$o(e),scopeId:Ga,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ye};return a?(Zu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Me(n)?8:16),Oi>0&&!o&&mt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mt.push(l),l}const Q=PI;function PI(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===hm)&&(t=ot),ei(t)){const a=un(t,e,!0);return n&&Zu(a,n),Oi>0&&!r&&mt&&(a.shapeFlag&6?mt[mt.indexOf(t)]=a:mt.push(a)),a.patchFlag|=-2,a}if(UI(t)&&(t=t.__vccOpts),e){e=xm(e);let{class:a,style:l}=e;a&&!Me(a)&&(e.class=ft(a)),Re(l)&&(Lu(l)&&!X(l)&&(l=Oe({},l)),e.style=zr(l))}const o=Me(t)?1:Xg(t)?128:SI(t)?64:Re(t)?4:ie(t)?2:0;return B(t,e,n,i,s,o,r,!0)}function xm(t){return t?Lu(t)||Za in t?Oe({},t):t:null}function un(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?Om(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Am(a),ref:e&&e.ref?n&&s?X(s)?s.concat($o(e)):[s,$o(e)]:$o(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Fe(t=" ",e=0){return Q(xi,null,t,e)}function Ju(t,e){const n=Q(bi,null,t);return n.staticCount=e,n}function Qu(t="",e=!1){return e?(ye(),Pi(ot,null,t)):Q(ot,null,t)}function bt(t){return t==null||typeof t=="boolean"?Q(ot):X(t)?Q(Ge,null,t.slice()):typeof t=="object"?$n(t):Q(xi,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function Zu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Zu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Za in e)?e._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),i&64?(n=16,e=[Fe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Om(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ft([e.class,i.class]));else if(s==="style")e.style=zr([e.style,i.style]);else if(Vr(s)){const r=e[s],o=i[s];o&&r!==o&&!(X(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function pt(t,e,n,i=null){At(t,e,7,[n,i])}const kI=mm();let NI=0;function Pm(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||kI,r={uid:NI++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ou(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ym(i,s),emitsOptions:Yg(i,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:i.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=bw.bind(null,r),t.ce&&t.ce(r),r}let He=null;const gn=()=>He||Ye;let eh,Wi,Kf="__VUE_INSTANCE_SETTERS__";(Wi=mc()[Kf])||(Wi=mc()[Kf]=[]),Wi.push(t=>He=t),eh=t=>{Wi.length>1?Wi.forEach(e=>e(t)):Wi[0](t)};const ti=t=>{eh(t),t.scope.on()},Yn=()=>{He&&He.scope.off(),eh(null)};function km(t){return t.vnode.shapeFlag&4}let fs=!1;function Nm(t,e=!1){fs=e;const{props:n,children:i}=t.vnode,s=km(t);vI(t,n,s,e),II(t,i);const r=s?DI(t,e):void 0;return fs=!1,r}function DI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=$a(new Proxy(t.ctx,Ic));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Mm(t):null;ti(t),Is();const r=Sn(i,t,0,[t.props,s]);if(bs(),Yn(),Au(r)){if(r.then(Yn,Yn),e)return r.then(o=>{Ac(t,o,e)}).catch(o=>{ji(o,t,0)});t.asyncDep=r}else Ac(t,r,e)}else Dm(t,e)}function Ac(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=ju(e)),Dm(t,n)}let ia,xc;function MI(t){ia=t,xc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,qw))}}const LI=()=>!ia;function Dm(t,e,n){const i=t.type;if(!t.render){if(!e&&ia&&!i.render){const s=i.template||Yu(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Oe(Oe({isCustomElement:r,delimiters:a},o),l);i.render=ia(s,c)}}t.render=i.render||zt,xc&&xc(t)}ti(t),Is(),hI(t),bs(),Yn()}function FI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}}))}function Mm(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return FI(t)},slots:t.slots,emit:t.emit,expose:e}}function el(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ju($a(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in tr)return tr[n](t)},has(e,n){return n in e||n in tr}}))}function Oc(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function UI(t){return ie(t)&&"__vccOpts"in t}const Tt=(t,e)=>mw(t,e,fs);function ds(t,e,n){const i=arguments.length;return i===2?Re(e)&&!X(e)?ei(e)?Q(t,null,[e]):Q(t,e):Q(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ei(n)&&(n=[n]),Q(t,e,n))}const Lm=Symbol.for("v-scx"),Fm=()=>xt(Lm);function jI(){}function BI(t,e,n,i){const s=n[i];if(s&&Um(s,t))return s;const r=e();return r.memo=t.slice(),n[i]=r}function Um(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(us(n[i],e[i]))return!1;return Oi>0&&mt&&mt.push(t),!0}const jm="3.3.4",HI={createComponentInstance:Pm,setupComponent:Nm,renderComponentRoot:Ho,setCurrentRenderingInstance:vr,isVNode:ei,normalizeVNode:bt},$I=HI,VI=null,WI=null,zI="http://www.w3.org/2000/svg",pi=typeof document<"u"?document:null,Gf=pi&&pi.createElement("template"),KI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?pi.createElementNS(zI,t):pi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>pi.createTextNode(t),createComment:t=>pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Gf.innerHTML=i?`<svg>${t}</svg>`:t;const a=Gf.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function GI(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function YI(t,e,n){const i=t.style,s=Me(n);if(n&&!s){if(e&&!Me(e))for(const r in e)n[r]==null&&Pc(i,r,"");for(const r in n)Pc(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Yf=/\s*!important$/;function Pc(t,e,n){if(X(n))n.forEach(i=>Pc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=XI(t,e);Yf.test(n)?t.setProperty(Nt(i),n.replace(Yf,""),"important"):t[i]=n}}const Xf=["Webkit","Moz","ms"],jl={};function XI(t,e){const n=jl[e];if(n)return n;let i=yt(e);if(i!=="filter"&&i in t)return jl[e]=i;i=Wr(i);for(let s=0;s<Xf.length;s++){const r=Xf[s]+i;if(r in t)return jl[e]=r}return e}const qf="http://www.w3.org/1999/xlink";function qI(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qf,e.slice(6,e.length)):t.setAttributeNS(qf,e,n);else{const r=SE(e);n==null||r&&!Tg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function JI(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Tg(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wn(t,e,n,i){t.addEventListener(e,n,i)}function QI(t,e,n,i){t.removeEventListener(e,n,i)}function ZI(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=eb(e);if(i){const c=r[e]=ib(i,s);wn(t,a,c,l)}else o&&(QI(t,a,o,l),r[e]=void 0)}}const Jf=/(?:Once|Passive|Capture)$/;function eb(t){let e;if(Jf.test(t)){e={};let i;for(;i=t.match(Jf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nt(t.slice(2)),e]}let Bl=0;const tb=Promise.resolve(),nb=()=>Bl||(tb.then(()=>Bl=0),Bl=Date.now());function ib(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;At(sb(i,n.value),e,5,[i])};return n.value=t,n.attached=nb(),n}function sb(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Qf=/^on[a-z]/,rb=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?GI(t,i,s):e==="style"?YI(t,n,i):Vr(e)?Su(e)||ZI(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ob(t,e,i,s))?JI(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),qI(t,e,i,s))};function ob(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Qf.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qf.test(e)&&Me(n)?!1:e in t}function Bm(t,e){const n=ut(t);class i extends tl{constructor(r){super(n,r,e)}}return i.def=n,i}const ab=t=>Bm(t,n_),lb=typeof HTMLElement<"u"?HTMLElement:class{};class tl extends lb{constructor(e,n={},i){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Wa(()=>{this._connected||(Dc(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}).observe(this,{attributes:!0});const e=(i,s=!1)=>{const{props:r,styles:o}=i;let a;if(r&&!X(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Qo(this._props[l])),(a||(a=Object.create(null)))[yt(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(i=>e(i,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,i=X(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of i.map(yt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r)}})}_setAttr(e){let n=this.getAttribute(e);const i=yt(e);this._numberProps&&this._numberProps[i]&&(n=Qo(n)),this._setProp(i,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),i&&(n===!0?this.setAttribute(Nt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Nt(e),n+""):n||this.removeAttribute(Nt(e))))}_update(){Dc(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Q(this._def,Oe({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const i=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{i(r,o),Nt(r)!==r&&i(Nt(r),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof tl){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const i=document.createElement("style");i.textContent=n,this.shadowRoot.appendChild(i)})}}function cb(t="$style"){{const e=gn();if(!e)return Ce;const n=e.type.__cssModules;if(!n)return Ce;const i=n[t];return i||Ce}}function ub(t){const e=gn();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Nc(r,s))},i=()=>{const s=t(e.proxy);kc(e.subTree,s),n(s)};Jg(i),si(()=>{const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),Qa(()=>s.disconnect())})}function kc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{kc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Nc(t.el,e);else if(t.type===Ge)t.children.forEach(n=>kc(n,e));else if(t.type===bi){let{el:n,anchor:i}=t;for(;n&&(Nc(n,e),n!==i);)n=n.nextSibling}}function Nc(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const Un="transition",Ls="animation",nl=(t,{slots:e})=>ds(em,$m(t),e);nl.displayName="Transition";const Hm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hb=nl.props=Oe({},zu,Hm),ui=(t,e=[])=>{X(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zf=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function $m(t){const e={};for(const U in t)U in Hm||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,p=fb(s),_=p&&p[0],w=p&&p[1],{onBeforeEnter:E,onEnter:m,onEnterCancelled:T,onLeave:v,onLeaveCancelled:C,onBeforeAppear:S=E,onAppear:O=m,onAppearCancelled:I=T}=e,P=(U,q,j)=>{Hn(U,q?u:a),Hn(U,q?c:o),j&&j()},D=(U,q)=>{U._isLeaving=!1,Hn(U,h),Hn(U,d),Hn(U,f),q&&q()},K=U=>(q,j)=>{const le=U?O:m,F=()=>P(q,U,j);ui(le,[q,F]),ed(()=>{Hn(q,U?l:r),vn(q,U?u:a),Zf(le)||td(q,i,_,F)})};return Oe(e,{onBeforeEnter(U){ui(E,[U]),vn(U,r),vn(U,o)},onBeforeAppear(U){ui(S,[U]),vn(U,l),vn(U,c)},onEnter:K(!1),onAppear:K(!0),onLeave(U,q){U._isLeaving=!0;const j=()=>D(U,q);vn(U,h),Wm(),vn(U,f),ed(()=>{U._isLeaving&&(Hn(U,h),vn(U,d),Zf(v)||td(U,i,w,j))}),ui(v,[U,j])},onEnterCancelled(U){P(U,!1),ui(T,[U])},onAppearCancelled(U){P(U,!0),ui(I,[U])},onLeaveCancelled(U){D(U),ui(C,[U])}})}function fb(t){if(t==null)return null;if(Re(t))return[Hl(t.enter),Hl(t.leave)];{const e=Hl(t);return[e,e]}}function Hl(t){return Qo(t)}function vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Hn(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ed(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let db=0;function td(t,e,n,i){const s=t._endId=++db,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Vm(t,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),r()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function Vm(t,e){const n=window.getComputedStyle(t),i=p=>(n[p]||"").split(", "),s=i(`${Un}Delay`),r=i(`${Un}Duration`),o=nd(s,r),a=i(`${Ls}Delay`),l=i(`${Ls}Duration`),c=nd(a,l);let u=null,h=0,f=0;e===Un?o>0&&(u=Un,h=o,f=r.length):e===Ls?c>0&&(u=Ls,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Un:Ls:null,f=u?u===Un?r.length:l.length:0);const d=u===Un&&/\b(transform|all)(,|$)/.test(i(`${Un}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function nd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>id(n)+id(t[i])))}function id(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Wm(){return document.body.offsetHeight}const zm=new WeakMap,Km=new WeakMap,Gm={name:"TransitionGroup",props:Oe({},hb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=gn(),i=Wu();let s,r;return qa(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!vb(s[0].el,n.vnode.el,o))return;s.forEach(mb),s.forEach(_b);const a=s.filter(yb);Wm(),a.forEach(l=>{const c=l.el,u=c.style;vn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,Hn(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=de(t),a=$m(o);let l=o.tag||Ge;s=r,r=e.default?Ya(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Ai(u,hs(u,a,i,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];Ai(u,hs(u,a,i,n)),zm.set(u,u.el.getBoundingClientRect())}return Q(l,null,r)}}},pb=t=>delete t.mode;Gm.props;const gb=Gm;function mb(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function _b(t){Km.set(t,t.el.getBoundingClientRect())}function yb(t){const e=zm.get(t),n=Km.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function vb(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:r}=Vm(i);return s.removeChild(i),r}const ni=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>es(e,n):e};function Eb(t){t.target.composing=!0}function sd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const br={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=ni(s);const r=i||s.props&&s.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Jo(a)),t._assign(a)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",Eb),wn(t,"compositionend",sd),wn(t,"change",sd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},r){if(t._assign=ni(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(s||t.type==="number")&&Jo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},th={deep:!0,created(t,e,n){t._assign=ni(n),wn(t,"change",()=>{const i=t._modelValue,s=ps(t),r=t.checked,o=t._assign;if(X(i)){const a=Fa(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ui(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Xm(t,r))})},mounted:rd,beforeUpdate(t,e,n){t._assign=ni(n),rd(t,e,n)}};function rd(t,{value:e,oldValue:n},i){t._modelValue=e,X(e)?t.checked=Fa(e,i.props.value)>-1:Ui(e)?t.checked=e.has(i.props.value):e!==n&&(t.checked=Qn(e,Xm(t,!0)))}const nh={created(t,{value:e},n){t.checked=Qn(e,n.props.value),t._assign=ni(n),wn(t,"change",()=>{t._assign(ps(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t._assign=ni(i),e!==n&&(t.checked=Qn(e,i.props.value))}},Ym={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Ui(e);wn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Jo(ps(o)):ps(o));t._assign(t.multiple?s?new Set(r):r:r[0])}),t._assign=ni(i)},mounted(t,{value:e}){od(t,e)},beforeUpdate(t,e,n){t._assign=ni(n)},updated(t,{value:e}){od(t,e)}};function od(t,e){const n=t.multiple;if(!(n&&!X(e)&&!Ui(e))){for(let i=0,s=t.options.length;i<s;i++){const r=t.options[i],o=ps(r);if(n)X(e)?r.selected=Fa(e,o)>-1:r.selected=e.has(o);else if(Qn(ps(r),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ps(t){return"_value"in t?t._value:t.value}function Xm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const qm={created(t,e,n){Ro(t,e,n,null,"created")},mounted(t,e,n){Ro(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){Ro(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){Ro(t,e,n,i,"updated")}};function Jm(t,e){switch(t){case"SELECT":return Ym;case"TEXTAREA":return br;default:switch(e){case"checkbox":return th;case"radio":return nh;default:return br}}}function Ro(t,e,n,i,s){const o=Jm(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}function wb(){br.getSSRProps=({value:t})=>({value:t}),nh.getSSRProps=({value:t},e)=>{if(e.props&&Qn(e.props.value,t))return{checked:!0}},th.getSSRProps=({value:t},e)=>{if(X(t)){if(e.props&&Fa(t,e.props.value)>-1)return{checked:!0}}else if(Ui(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},qm.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Jm(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const Ib=["ctrl","shift","alt","meta"],bb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ib.some(n=>t[`${n}Key`]&&!e.includes(n))},Tb=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=bb[e[s]];if(r&&r(n,e))return}return t(n,...i)},Cb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Sb=(t,e)=>n=>{if(!("key"in n))return;const i=Nt(n.key);if(e.some(s=>s===i||Cb[s]===i))return t(n)},Qm={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Fs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Fs(t,!0),i.enter(t)):i.leave(t,()=>{Fs(t,!1)}):Fs(t,e))},beforeUnmount(t,{value:e}){Fs(t,e)}};function Fs(t,e){t.style.display=e?t._vod:"none"}function Rb(){Qm.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Zm=Oe({patchProp:rb},KI);let rr,ad=!1;function e_(){return rr||(rr=Im(Zm))}function t_(){return rr=ad?rr:bm(Zm),ad=!0,rr}const Dc=(...t)=>{e_().render(...t)},n_=(...t)=>{t_().hydrate(...t)},i_=(...t)=>{const e=e_().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=s_(i);if(!s)return;const r=e._component;!ie(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Ab=(...t)=>{const e=t_().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=s_(i);if(s)return n(s,!0,s instanceof SVGElement)},e};function s_(t){return Me(t)?document.querySelector(t):t}let ld=!1;const xb=()=>{ld||(ld=!0,wb(),Rb())},Ob=()=>{},Pb=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:em,BaseTransitionPropsValidators:zu,Comment:ot,EffectScope:Ou,Fragment:Ge,KeepAlive:$w,ReactiveEffect:Kr,Static:bi,Suspense:Ow,Teleport:xI,Text:xi,Transition:nl,TransitionGroup:gb,VueElement:tl,assertNumber:yw,callWithAsyncErrorHandling:At,callWithErrorHandling:Sn,camelize:yt,capitalize:Wr,cloneVNode:un,compatUtils:WI,compile:Ob,computed:Tt,createApp:i_,createBlock:Pi,createCommentVNode:Qu,createElementBlock:xe,createElementVNode:B,createHydrationRenderer:bm,createPropsRestProxy:cI,createRenderer:Im,createSSRApp:Ab,createSlots:Gw,createStaticVNode:Ju,createTextVNode:Fe,createVNode:Q,customRef:uw,defineAsyncComponent:Bw,defineComponent:ut,defineCustomElement:Bm,defineEmits:Qw,defineExpose:Zw,defineModel:nI,defineOptions:eI,defineProps:Jw,defineSSRCustomElement:ab,defineSlots:tI,get devtools(){return Gi},effect:OE,effectScope:Pu,getCurrentInstance:gn,getCurrentScope:ku,getTransitionRawChildren:Ya,guardReactiveProps:xm,h:ds,handleError:ji,hasInjectionContext:yI,hydrate:n_,initCustomFormatter:jI,initDirectivesForSSR:xb,inject:xt,isMemoSame:Um,isProxy:Lu,isReactive:wi,isReadonly:Ri,isRef:Ve,isRuntimeOnly:LI,isShallow:gr,isVNode:ei,markRaw:$a,mergeDefaults:aI,mergeModels:lI,mergeProps:Om,nextTick:Wa,normalizeClass:ft,normalizeProps:TE,normalizeStyle:zr,onActivated:nm,onBeforeMount:rm,onBeforeUnmount:Ja,onBeforeUpdate:om,onDeactivated:im,onErrorCaptured:um,onMounted:si,onRenderTracked:cm,onRenderTriggered:lm,onScopeDispose:Rg,onServerPrefetch:am,onUnmounted:Qa,onUpdated:qa,openBlock:ye,popScopeId:Ss,provide:nr,proxyRefs:ju,pushScopeId:Cs,queuePostFlushCb:Hu,reactive:Ts,readonly:Mu,ref:Ue,registerRuntimeCompiler:MI,render:Dc,renderList:Kw,renderSlot:Yw,resolveComponent:Xr,resolveDirective:zw,resolveDynamicComponent:fm,resolveFilter:VI,resolveTransitionHooks:hs,setBlockTracking:Rc,setDevtoolsHook:Gg,setTransitionHooks:Ai,shallowReactive:Bg,shallowReadonly:sw,shallowRef:Hg,ssrContextKey:Lm,ssrUtils:$I,stop:PE,toDisplayString:An,toHandlerKey:er,toHandlers:Xw,toRaw:de,toRef:pw,toRefs:hw,toValue:aw,transformVNodeArgs:OI,triggerRef:ow,unref:ue,useAttrs:rI,useCssModule:cb,useCssVars:ub,useModel:oI,useSSRContext:Fm,useSlots:sI,useTransitionState:Wu,vModelCheckbox:th,vModelDynamic:qm,vModelRadio:nh,vModelSelect:Ym,vModelText:br,vShow:Qm,version:jm,warn:_w,watch:an,watchEffect:Lw,watchPostEffect:Jg,watchSyncEffect:Fw,withAsyncContext:uI,withCtx:We,withDefaults:iI,withDirectives:Zg,withKeys:Sb,withMemo:BI,withModifiers:Tb,withScopeId:Tw},Symbol.toStringTag,{value:"Module"}));var kb=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Nb=Symbol();var cd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(cd||(cd={}));function Db(){const t=Pu(!0),e=t.run(()=>Ue({}));let n=[],i=[];const s=$a({install(r){s._a=r,r.provide(Nb,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!kb?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=function(t,e){if(!t)throw Rs(e)},Rs=function(t){return new Error("Firebase Database ("+r_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Mb=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(n[u],n[h],n[f],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Lb;const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a_=function(t){const e=o_(t);return il.encodeByteArray(e,!0)},sa=function(t){return a_(t).replace(/\./g,"")},ra=function(t){try{return il.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){return l_(void 0,t)}function l_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ub(n)||(t[n]=l_(t[n],e[n]));return t}function Ub(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=()=>jb().__FIREBASE_DEFAULTS__,Hb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$b=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ra(t[1]);return e&&JSON.parse(e)},ih=()=>{try{return Bb()||Hb()||$b()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c_=t=>{var e,n;return(n=(e=ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vb=t=>{const e=c_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},u_=()=>{var t;return(t=ih())===null||t===void 0?void 0:t.config},h_=t=>{var e;return(e=ih())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sa(JSON.stringify(n)),sa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function zb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kb(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function d_(){return r_.NODE_ADMIN===!0}function p_(){try{return typeof indexedDB=="object"}catch{return!1}}function Gb(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="FirebaseError";class mn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Yb,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Xb(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mn(s,a,i)}}function Xb(t,e){return t.replace(qb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const qb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Cr(ra(r[0])||""),n=Cr(ra(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Jb=function(t){const e=g_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Qb=function(t){const e=g_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oa(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function aa(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ud(r)&&ud(o)){if(!aa(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ud(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)i[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function eT(t,e){const n=new tT(t,e);return n.subscribe.bind(n)}class tT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");nT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=$l),s.error===void 0&&(s.error=$l),s.complete===void 0&&(s.complete=$l);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $l(){}function m_(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,W(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sl=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Tr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oT(e))try{this.getOrInitializeService({instanceIdentifier:hi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hi){return this.instances.has(e)}getOptions(e=hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rT(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hi){return this.component?this.component.multipleInstances?e:hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rT(t){return t===hi?void 0:t}function oT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const lT={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},cT=Ee.INFO,uT={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},hT=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=uT[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qr{constructor(e){this.name=e,this._logLevel=cT,this._logHandler=hT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const fT=(t,e)=>e.some(n=>t instanceof n);let hd,fd;function dT(){return hd||(hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pT(){return fd||(fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const __=new WeakMap,Lc=new WeakMap,y_=new WeakMap,Vl=new WeakMap,rh=new WeakMap;function gT(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Xn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&__.set(n,t)}).catch(()=>{}),rh.set(e,t),e}function mT(t){if(Lc.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Lc.set(t,e)}let Fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _T(t){Fc=t(Fc)}function yT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Wl(this),e,...n);return y_.set(i,e.sort?e.sort():[e]),Xn(i)}:pT().includes(t)?function(...e){return t.apply(Wl(this),e),Xn(__.get(this))}:function(...e){return Xn(t.apply(Wl(this),e))}}function vT(t){return typeof t=="function"?yT(t):(t instanceof IDBTransaction&&mT(t),fT(t,dT())?new Proxy(t,Fc):t)}function Xn(t){if(t instanceof IDBRequest)return gT(t);if(Vl.has(t))return Vl.get(t);const e=vT(t);return e!==t&&(Vl.set(t,e),rh.set(e,t)),e}const Wl=t=>rh.get(t);function ET(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Xn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Xn(o.result),l.oldVersion,l.newVersion,Xn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wT=["get","getKey","getAll","getAllKeys","count"],IT=["put","add","delete","clear"],zl=new Map;function dd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zl.get(e))return zl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=IT.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||wT.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return zl.set(e,r),r}_T(t=>({...t,get:(e,n,i)=>dd(e,n)||t.get(e,n,i),has:(e,n)=>!!dd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TT(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function TT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",pd="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new qr("@firebase/app"),CT="@firebase/app-compat",ST="@firebase/analytics-compat",RT="@firebase/analytics",AT="@firebase/app-check-compat",xT="@firebase/app-check",OT="@firebase/auth",PT="@firebase/auth-compat",kT="@firebase/database",NT="@firebase/database-compat",DT="@firebase/functions",MT="@firebase/functions-compat",LT="@firebase/installations",FT="@firebase/installations-compat",UT="@firebase/messaging",jT="@firebase/messaging-compat",BT="@firebase/performance",HT="@firebase/performance-compat",$T="@firebase/remote-config",VT="@firebase/remote-config-compat",WT="@firebase/storage",zT="@firebase/storage-compat",KT="@firebase/firestore",GT="@firebase/firestore-compat",YT="firebase",XT="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="[DEFAULT]",qT={[Uc]:"fire-core",[CT]:"fire-core-compat",[RT]:"fire-analytics",[ST]:"fire-analytics-compat",[xT]:"fire-app-check",[AT]:"fire-app-check-compat",[OT]:"fire-auth",[PT]:"fire-auth-compat",[kT]:"fire-rtdb",[NT]:"fire-rtdb-compat",[DT]:"fire-fn",[MT]:"fire-fn-compat",[LT]:"fire-iid",[FT]:"fire-iid-compat",[UT]:"fire-fcm",[jT]:"fire-fcm-compat",[BT]:"fire-perf",[HT]:"fire-perf-compat",[$T]:"fire-rc",[VT]:"fire-rc-compat",[WT]:"fire-gcs",[zT]:"fire-gcs-compat",[KT]:"fire-fst",[GT]:"fire-fst-compat","fire-js":"fire-js",[YT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map,Bc=new Map;function JT(t,e){try{t.container.addComponent(e)}catch(n){ki.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(Bc.has(e))return ki.debug(`There were multiple attempts to register component ${e}.`),!1;Bc.set(e,t);for(const n of la.values())JT(n,t);return!0}function oh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qn=new As("app","Firebase",QT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=XT;function v_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:jc,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=u_()),!n)throw qn.create("no-options");const r=la.get(s);if(r){if(aa(n,r.options)&&aa(i,r.config))return r;throw qn.create("duplicate-app",{appName:s})}const o=new aT(s);for(const l of Bc.values())o.addComponent(l);const a=new ZT(n,i,o);return la.set(s,a),a}function ah(t=jc){const e=la.get(t);if(!e&&t===jc&&u_())return v_();if(!e)throw qn.create("no-app",{appName:t});return e}function Ot(t,e,n){var i;let s=(i=qT[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ki.warn(a.join(" "));return}hn(new Gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="firebase-heartbeat-database",tC=1,Sr="firebase-heartbeat-store";let Kl=null;function E_(){return Kl||(Kl=ET(eC,tC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sr)}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function nC(t){try{return await(await E_()).transaction(Sr).objectStore(Sr).get(w_(t))}catch(e){if(e instanceof mn)ki.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ki.warn(n.message)}}}async function gd(t,e){try{const i=(await E_()).transaction(Sr,"readwrite");await i.objectStore(Sr).put(e,w_(t)),await i.done}catch(n){if(n instanceof mn)ki.warn(n.message);else{const i=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ki.warn(i.message)}}}function w_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=1024,sC=30*24*60*60*1e3;class rC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=md();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=sC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=md(),{heartbeatsToSend:n,unsentEntries:i}=oC(this._heartbeatsCache.heartbeats),s=sa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function md(){return new Date().toISOString().substring(0,10)}function oC(t,e=iC){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),_d(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_d(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class aC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p_()?Gb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _d(t){return sa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){hn(new Gt("platform-logger",e=>new bT(e),"PRIVATE")),hn(new Gt("heartbeat",e=>new rC(e),"PRIVATE")),Ot(Uc,pd,t),Ot(Uc,pd,"esm2017"),Ot("fire-js","")}lC("");var cC="firebase",uC="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(cC,uC,"app");const yd="@firebase/database",vd="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I_="";function hC(t){I_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Cr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fC(e)}}catch{}return new dC},mi=b_("localStorage"),Hc=b_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new qr("@firebase/database"),pC=function(){let t=1;return function(){return t++}}(),T_=function(t){const e=iT(t),n=new Zb;n.update(e);const i=n.digest();return il.encodeByteArray(i)},Jr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Jr.apply(null,i):typeof i=="object"?e+=Ze(i):e+=i,e+=" "}return e};let Ti=null,Ed=!0;const gC=function(t,e){W(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(is.logLevel=Ee.VERBOSE,Ti=is.log.bind(is),e&&Hc.set("logging_enabled",!0)):typeof t=="function"?Ti=t:(Ti=null,Hc.remove("logging_enabled"))},nt=function(...t){if(Ed===!0&&(Ed=!1,Ti===null&&Hc.get("logging_enabled")===!0&&gC(!0)),Ti){const e=Jr.apply(null,t);Ti(e)}},Qr=function(t){return function(...e){nt(t,...e)}},$c=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jr(...t);is.error(e)},On=function(...t){const e=`FIREBASE FATAL ERROR: ${Jr(...t)}`;throw is.error(e),new Error(e)},Pt=function(...t){const e="FIREBASE WARNING: "+Jr(...t);is.warn(e)},mC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},C_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_C=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ms="[MIN_NAME]",Ni="[MAX_NAME]",Os=function(t,e){if(t===e)return 0;if(t===ms||e===Ni)return-1;if(e===ms||t===Ni)return 1;{const n=wd(t),i=wd(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},yC=function(t,e){return t===e?0:t<e?-1:1},Us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},lh=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ze(e[i]),n+=":",n+=lh(t[e[i]]);return n+="}",n},S_=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const R_=function(t){W(!C_(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},vC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},wC=new RegExp("^-?(0*)\\d{1,10}$"),IC=-2147483648,bC=2147483647,wd=function(t){if(wC.test(t)){const e=Number(t);if(e>=IC&&e<=bC)return e}return null},Zr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},TC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},or=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pt(e)}}class ss{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ss.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="5",A_="v",x_="s",O_="r",P_="f",k_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,N_="ls",D_="p",Vc="ac",M_="websocket",L_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function RC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function U_(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let i;if(e===M_)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===L_)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RC(t)&&(n.ns=t.namespace);const s=[];return Lt(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.counters_={}}incrementCounter(e,n=1){Dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Fb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl={},Yl={};function uh(t){const e=t.toString();return Gl[e]||(Gl[e]=new AC),Gl[e]}function xC(t,e){const n=t.toString();return Yl[n]||(Yl[n]=e()),Yl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Zr(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="start",PC="close",kC="pLPCommand",NC="pRTLPCB",j_="id",B_="pw",H_="ser",DC="cb",MC="seg",LC="ts",FC="d",UC="dframe",$_=1870,V_=30,jC=$_-V_,BC=25e3,HC=3e4;class Xi{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qr(e),this.stats_=uh(n),this.urlFn=l=>(this.appCheckToken&&(l[Vc]=this.appCheckToken),U_(n,L_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new OC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HC)),_C(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hh((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Id)this.id=a,this.password=l;else if(o===PC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Id]="t",i[H_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[DC]=this.scriptTagHolder.uniqueCallbackIdentifier),i[A_]=ch,this.transportSessionId&&(i[x_]=this.transportSessionId),this.lastSessionId&&(i[N_]=this.lastSessionId),this.applicationId&&(i[D_]=this.applicationId),this.appCheckToken&&(i[Vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&k_.test(location.hostname)&&(i[O_]=P_);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xi.forceAllow_=!0}static forceDisallow(){Xi.forceDisallow_=!0}static isAvailable(){return Xi.forceAllow_?!0:!Xi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vC()&&!EC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=a_(n),s=S_(i,jC);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[UC]="t",i[j_]=e,i[B_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hh{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pC(),window[kC+this.uniqueCallbackIdentifier]=e,window[NC+this.uniqueCallbackIdentifier]=n,this.myIFrame=hh.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){nt("frame writing exception"),a.stack&&nt(a.stack),nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[j_]=this.myID,e[B_]=this.myPW,e[H_]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+V_+i.length<=$_;){const o=this.pendingSegs.shift();i=i+"&"+MC+s+"="+o.seg+"&"+LC+s+"="+o.ts+"&"+FC+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(BC)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=16384,VC=45e3;let ca=null;typeof MozWebSocket<"u"?ca=MozWebSocket:typeof WebSocket<"u"&&(ca=WebSocket);class $t{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qr(this.connId),this.stats_=uh(n),this.connURL=$t.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[A_]=ch,typeof location<"u"&&location.hostname&&k_.test(location.hostname)&&(o[O_]=P_),n&&(o[x_]=n),i&&(o[N_]=i),s&&(o[Vc]=s),r&&(o[D_]=r),U_(e,M_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mi.set("previous_websocket_failure",!0);try{let i;d_(),this.mySock=new ca(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ca!==null&&!$t.forceDisallow_}static previouslyFailed(){return mi.isInMemoryStorage||mi.get("previous_websocket_failure")===!0}markConnectionHealthy(){mi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Cr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=S_(n,$C);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Xi,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$t&&$t.isAvailable();let i=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||Pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[$t];else{const s=this.transports_=[];for(const r of Rr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Rr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=6e4,zC=5e3,KC=10*1024,GC=100*1024,Xl="t",bd="d",YC="s",Td="r",XC="e",Cd="o",Sd="a",Rd="n",Ad="p",qC="h";class JC{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qr("c:"+this.id+":"),this.transportManager_=new Rr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=or(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xl in e){const n=e[Xl];n===Sd?this.upgradeIfSecondaryHealthy_():n===Td?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Cd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Us("t",e),i=Us("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ad,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Us("t",e),i=Us("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Us(Xl,e);if(bd in e){const i=e[bd];if(n===qC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Rd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YC?this.onConnectionShutdown_(i):n===Td?this.onReset_(i):n===XC?$c("Server Error: "+i):n===Cd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$c("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ch!==i&&Pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),or(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):or(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ad,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends z_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ua}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=32,Od=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new De("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ii(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new De(t.pieces_,e)}function K_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function QC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function G_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Y_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new De(e,0)}function $e(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof De)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new De(n,0)}function fe(t){return t.pieceNum_>=t.pieces_.length}function Mt(t,e){const n=he(t),i=he(e);if(n===null)return e;if(n===i)return Mt(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function X_(t,e){if(ii(t)!==ii(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Vt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ii(t)>ii(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ZC{constructor(e,n){this.errorPrefix_=n,this.parts_=G_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=sl(this.parts_[i]);q_(this)}}function eS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=sl(e),q_(t)}function tS(t){const e=t.parts_.pop();t.byteLength_-=sl(e),t.parts_.length>0&&(t.byteLength_-=1)}function q_(t){if(t.byteLength_>Od)throw new Error(t.errorPrefix_+"has a key path longer than "+Od+" bytes ("+t.byteLength_+").");if(t.parts_.length>xd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xd+") or object contains a cycle "+fi(t))}function fi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends z_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new fh}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=1e3,nS=60*5*1e3,Pd=30*1e3,iS=1.3,sS=3e4,rS="server_kill",kd=3;class Rn extends W_{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Rn.nextPersistentConnectionId_++,this.log_=Qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=js,this.maxReconnectDelay_=nS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!d_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ua.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(Ze(r)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Tr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Rn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dn(e,"w")){const i=gs(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Qb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Jb(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$c("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sS&&(this.reconnectDelay_=js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Rn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new JC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,d=>{Pt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(rS)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pt(h),l())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mc(this.interruptReasons_)&&(this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>lh(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new De(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kd&&(this.reconnectDelay_=Pd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+I_.replace(/\./g,"-")]=1,sh()?e["framework.cordova"]=1:f_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ua.getInstance().currentlyOnline();return Mc(this.interruptReasons_)&&e}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ge(ms,e),s=new ge(ms,n);return this.compare(i,s)!==0}minPost(){return ge.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;class J_ extends rl{static get __EMPTY_NODE(){return Ao}static set __EMPTY_NODE(e){Ao=e}compare(e,n){return Os(e.name,n.name)}isDefinedOn(e){throw Rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Ni,Ao)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,Ao)}toString(){return".key"}}const rs=new J_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Ke.RED,this.left=s??_t.EMPTY_NODE,this.right=r??_t.EMPTY_NODE}copy(e,n,i,s,r){return new Ke(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class oS{copy(e,n,i,s,r){return this}insert(e,n,i){return new Ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xo(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new oS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e){return Os(t.name,e.name)}function dh(t,e){return Os(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc;function lS(t){Wc=t}const Q_=function(t){return typeof t=="number"?"number:"+R_(t):"string:"+t},Z_=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dn(e,".sv"),"Priority must be a string or number.")}else W(t===Wc||t.isEmpty(),"priority of unexpected type.");W(t===Wc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nd;class ze{constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Z_(this.priorityNode_)}static set __childrenNodeConstructor(e){Nd=e}static get __childrenNodeConstructor(){return Nd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:he(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=he(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(W(i!==".priority"||ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Q_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=R_(this.value_):e+=this.value_,this.lazyHash_=T_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=ze.VALUE_TYPE_ORDER.indexOf(n),r=ze.VALUE_TYPE_ORDER.indexOf(i);return W(s>=0,"Unknown leaf type: "+n),W(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey,ty;function cS(t){ey=t}function uS(t){ty=t}class hS extends rl{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Os(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Ni,new ze("[PRIORITY-POST]",ty))}makePost(e,n){const i=ey(e);return new ge(n,new ze("[PRIORITY-POST]",i))}toString(){return".priority"}}const rt=new hS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=Math.log(2);class dS{constructor(e){const n=r=>parseInt(Math.log(r)/fS,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ha=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Ke(f,h.node,Ke.BLACK,null,null);{const d=parseInt(u/2,10)+l,p=s(l,d),_=s(d+1,c);return h=t[d],f=n?n(h):h,new Ke(f,h.node,Ke.BLACK,p,_)}},r=function(l){let c=null,u=null,h=t.length;const f=function(p,_){const w=h-p,E=h;h-=p;const m=s(w+1,E),T=t[w],v=n?n(T):T;d(new Ke(v,T.node,_,null,m))},d=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(p+1));_?f(w,Ke.BLACK):(f(w,Ke.BLACK),f(w,Ke.RED))}return u},o=new dS(t.length),a=r(o);return new _t(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;const zi={};class In{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(zi&&rt,"ChildrenNode.ts has not been loaded"),ql=ql||new In({".priority":zi},{".priority":rt}),ql}get(e){const n=gs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return Dn(this.indexSet_,e.toString())}addIndex(e,n){W(e!==rs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(ge.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ha(i,e.getCompare()):a=zi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new In(u,c)}addToIndexes(e,n){const i=oa(this.indexes_,(s,r)=>{const o=gs(this.indexSet_,r);if(W(o,"Missing index implementation for "+r),s===zi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ge.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ha(a,o.getCompare())}else return zi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ge(e.name,a))),l.insert(e,e.node)}});return new In(i,this.indexSet_)}removeFromIndexes(e,n){const i=oa(this.indexes_,s=>{if(s===zi)return s;{const r=n.get(e.name);return r?s.remove(new ge(e.name,r)):s}});return new In(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;class we{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Z_(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bs||(Bs=new we(new _t(dh),null,In.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bs}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bs:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ge(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Bs:this.priorityNode_;return new we(s,o,r)}}updateChild(e,n){const i=he(e);if(i===null)return n;{W(he(e)!==".priority"||ii(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ke(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(rt,(o,a)=>{n[o]=a.val(e),i++,r&&we.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Q_(this.getPriority().val())+":"),this.forEachChild(rt,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":T_(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new ge(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ge.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===eo?-1:0}withIndex(e){if(e===rs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===rs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(rt),s=n.getIterator(rt);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rs?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pS extends we{constructor(){super(new _t(dh),we.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const eo=new pS;Object.defineProperties(ge,{MIN:{value:new ge(ms,we.EMPTY_NODE)},MAX:{value:new ge(Ni,eo)}});J_.__EMPTY_NODE=we.EMPTY_NODE;ze.__childrenNodeConstructor=we;lS(eo);uS(eo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=!0;function it(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,it(e))}if(!(t instanceof Array)&&gS){const n=[];let i=!1;if(Lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=it(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ge(o,l)))}}),n.length===0)return we.EMPTY_NODE;const r=ha(n,aS,o=>o.name,dh);if(i){const o=ha(n,rt.getCompare());return new we(r,it(e),new In({".priority":o},{".priority":rt}))}else return new we(r,it(e),In.Default)}else{let n=we.EMPTY_NODE;return Lt(t,(i,s)=>{if(Dn(t,i)&&i.substring(0,1)!=="."){const r=it(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(it(e))}}cS(it);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS extends rl{constructor(e){super(),this.indexPath_=e,W(!fe(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Os(e.name,n.name):r}makePost(e,n){const i=it(e),s=we.EMPTY_NODE.updateChild(this.indexPath_,i);return new ge(n,s)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,eo);return new ge(Ni,e)}toString(){return G_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S extends rl{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Os(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const i=it(e);return new ge(n,i)}toString(){return".value"}}const yS=new _S;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){return{type:"value",snapshotNode:t}}function ES(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wS(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Dd(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function IS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ms}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ni}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rt}copy(){const e=new ph;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Md(t){const e={};if(t.isDefault())return e;let n;if(t.index_===rt?n="$priority":t.index_===yS?n="$value":t.index_===rs?n="$key":(W(t.index_ instanceof mS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ze(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ze(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ze(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ld(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==rt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends W_{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Qr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fa.getListenId_(e,i),a={};this.listens_[o]=a;const l=Md(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),gs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const i=fa.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Md(e._queryParams),i=e._path.toString(),s=new Tr;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Cr(a.responseText)}catch{Pt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Pt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){return{value:null,children:new Map}}function ny(t,e,n){if(fe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=he(e);t.children.has(i)||t.children.set(i,da());const s=t.children.get(i);e=ke(e),ny(s,e,n)}}function zc(t,e,n){t.value!==null?n(e,t.value):TS(t,(i,s)=>{const r=new De(e.toString()+"/"+i);zc(s,r,n)})}function TS(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Lt(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=10*1e3,SS=30*1e3,RS=5*60*1e3;class AS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new CS(e);const i=Fd+(SS-Fd)*Math.random();or(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Lt(e,(s,r)=>{r>0&&Dn(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),or(this.reportStats_.bind(this),Math.floor(Math.random()*2*RS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function iy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ry(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=sn.ACK_USER_WRITE,this.source=iy()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new pa(Se(),n,this.revert)}}else return W(he(this.path)===e,"operationForChild called for unrelated child."),new pa(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=sn.OVERWRITE}operationForChild(e){return fe(this.path)?new Di(this.source,Se(),this.snap.getImmediateChild(e)):new Di(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=sn.MERGE}operationForChild(e){if(fe(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new Di(this.source,Se(),n.value):new Ar(this.source,Se(),n)}else return W(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ar(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function xS(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(IS(o.childName,o.snapshotNode))}),Hs(t,s,"child_removed",e,i,n),Hs(t,s,"child_added",e,i,n),Hs(t,s,"child_moved",r,i,n),Hs(t,s,"child_changed",e,i,n),Hs(t,s,"value",e,i,n),s}function Hs(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>PS(t,a,l)),o.forEach(a=>{const l=OS(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function OS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function PS(t,e,n){if(e.childName==null||n.childName==null)throw Rs("Should only compare child_ events.");const i=new ge(e.childName,e.snapshotNode),s=new ge(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e){return{eventCache:t,serverCache:e}}function ar(t,e,n,i){return oy(new gh(e,n,i),t.serverCache)}function ay(t,e,n,i){return oy(t.eventCache,new gh(e,n,i))}function Kc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Mi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl;const kS=()=>(Jl||(Jl=new _t(yC)),Jl);class Pe{constructor(e,n=kS()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return Lt(e,(i,s)=>{n=n.set(new De(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(fe(e))return null;{const i=he(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ke(e),n);return r!=null?{path:$e(new De(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const n=he(e),i=this.children.get(n);return i!==null?i.subtree(ke(e)):new Pe(null)}}set(e,n){if(fe(e))return new Pe(n,this.children);{const i=he(e),r=(this.children.get(i)||new Pe(null)).set(ke(e),n),o=this.children.insert(i,r);return new Pe(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=he(e),i=this.children.get(n);if(i){const s=i.remove(ke(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new Pe(null):new Pe(this.value,r)}else return this}}get(e){if(fe(e))return this.value;{const n=he(e),i=this.children.get(n);return i?i.get(ke(e)):null}}setTree(e,n){if(fe(e))return n;{const i=he(e),r=(this.children.get(i)||new Pe(null)).setTree(ke(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Pe(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_($e(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(fe(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(ke(e),$e(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,i){if(fe(e))return this;{this.value&&i(n,this.value);const s=he(e),r=this.children.get(s);return r?r.foreachOnPath_(ke(e),$e(n,s),i):new Pe(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_($e(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.writeTree_=e}static empty(){return new Kt(new Pe(null))}}function lr(t,e,n){if(fe(e))return new Kt(new Pe(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Mt(s,e);return r=r.updateChild(o,n),new Kt(t.writeTree_.set(s,r))}else{const s=new Pe(n),r=t.writeTree_.setTree(e,s);return new Kt(r)}}}function Ud(t,e,n){let i=t;return Lt(n,(s,r)=>{i=lr(i,$e(e,s),r)}),i}function jd(t,e){if(fe(e))return Kt.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new Kt(n)}}function Gc(t,e){return Bi(t,e)!=null}function Bi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Mt(n.path,e)):null}function Bd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(rt,(i,s)=>{e.push(new ge(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new ge(i,s.value))}),e}function Jn(t,e){if(fe(e))return t;{const n=Bi(t,e);return n!=null?new Kt(new Pe(n)):new Kt(t.writeTree_.subtree(e))}}function Yc(t){return t.writeTree_.isEmpty()}function _s(t,e){return ly(Se(),t.writeTree_,e)}function ly(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(W(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=ly($e(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild($e(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t,e){return py(e,t)}function NS(t,e,n,i,s){W(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=lr(t.visibleWrites,e,n)),t.lastWriteId=i}function DS(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function MS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LS(a,i.path)?s=!1:Vt(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return FS(t),!0;if(i.snap)t.visibleWrites=jd(t.visibleWrites,i.path);else{const a=i.children;Lt(a,l=>{t.visibleWrites=jd(t.visibleWrites,$e(i.path,l))})}return!0}else return!1}function LS(t,e){if(t.snap)return Vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Vt($e(t.path,n),e))return!0;return!1}function FS(t){t.visibleWrites=uy(t.allWrites,US,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function US(t){return t.visible}function uy(t,e,n){let i=Kt.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Vt(n,o)?(a=Mt(n,o),i=lr(i,a,r.snap)):Vt(o,n)&&(a=Mt(o,n),i=lr(i,Se(),r.snap.getChild(a)));else if(r.children){if(Vt(n,o))a=Mt(n,o),i=Ud(i,a,r.children);else if(Vt(o,n))if(a=Mt(o,n),fe(a))i=Ud(i,Se(),r.children);else{const l=gs(r.children,he(a));if(l){const c=l.getChild(ke(a));i=lr(i,Se(),c)}}}else throw Rs("WriteRecord should have .snap or .children")}}return i}function hy(t,e,n,i,s){if(!i&&!s){const r=Bi(t.visibleWrites,e);if(r!=null)return r;{const o=Jn(t.visibleWrites,e);if(Yc(o))return n;if(n==null&&!Gc(o,Se()))return null;{const a=n||we.EMPTY_NODE;return _s(o,a)}}}else{const r=Jn(t.visibleWrites,e);if(!s&&Yc(r))return n;if(!s&&n==null&&!Gc(r,Se()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Vt(c.path,e)||Vt(e,c.path))},a=uy(t.allWrites,o,e),l=n||we.EMPTY_NODE;return _s(a,l)}}}function jS(t,e,n){let i=we.EMPTY_NODE;const s=Bi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(rt,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Jn(t.visibleWrites,e);return n.forEachChild(rt,(o,a)=>{const l=_s(Jn(r,new De(o)),a);i=i.updateImmediateChild(o,l)}),Bd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Jn(t.visibleWrites,e);return Bd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function BS(t,e,n,i,s){W(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=$e(e,n);if(Gc(t.visibleWrites,r))return null;{const o=Jn(t.visibleWrites,r);return Yc(o)?s.getChild(n):_s(o,s.getChild(n))}}function HS(t,e,n,i){const s=$e(e,n),r=Bi(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Jn(t.visibleWrites,s);return _s(o,i.getNode().getImmediateChild(n))}else return null}function $S(t,e){return Bi(t.visibleWrites,e)}function VS(t,e,n,i,s,r,o){let a;const l=Jn(t.visibleWrites,e),c=Bi(l,Se());if(c!=null)a=c;else if(n!=null)a=_s(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let d=f.getNext();for(;d&&u.length<s;)h(d,i)!==0&&u.push(d),d=f.getNext();return u}else return[]}function WS(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function Xc(t,e,n,i){return hy(t.writeTree,t.treePath,e,n,i)}function fy(t,e){return jS(t.writeTree,t.treePath,e)}function Hd(t,e,n,i){return BS(t.writeTree,t.treePath,e,n,i)}function ga(t,e){return $S(t.writeTree,$e(t.treePath,e))}function zS(t,e,n,i,s,r){return VS(t.writeTree,t.treePath,e,n,i,s,r)}function mh(t,e,n){return HS(t.writeTree,t.treePath,e,n)}function dy(t,e){return py($e(t.treePath,e),t.writeTree)}function py(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Dd(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,wS(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,ES(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Dd(i,e.snapshotNode,s.oldSnap));else throw Rs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const gy=new GS;class _h{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new gh(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mh(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Mi(this.viewCache_),r=zS(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function YS(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function XS(t,e,n,i,s){const r=new KS;let o,a;if(n.type===sn.OVERWRITE){const c=n;c.source.fromUser?o=qc(t,e,c.path,c.snap,i,s,r):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!fe(c.path),o=ma(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===sn.MERGE){const c=n;c.source.fromUser?o=JS(t,e,c.path,c.children,i,s,r):(W(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Jc(t,e,c.path,c.children,i,s,a,r))}else if(n.type===sn.ACK_USER_WRITE){const c=n;c.revert?o=eR(t,e,c.path,i,s,r):o=QS(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===sn.LISTEN_COMPLETE)o=ZS(t,e,n.path,i,r);else throw Rs("Unknown operation type: "+n.type);const l=r.getChanges();return qS(e,o,l),{viewCache:o,changes:l}}function qS(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Kc(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(vS(Kc(e)))}}function my(t,e,n,i,s,r){const o=e.eventCache;if(ga(i,n)!=null)return e;{let a,l;if(fe(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Mi(e),u=c instanceof we?c:we.EMPTY_NODE,h=fy(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Xc(i,Mi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=he(n);if(c===".priority"){W(ii(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Hd(i,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ke(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Hd(i,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=mh(i,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return ar(e,a,o.isFullyInitialized()||fe(n),t.filter.filtersNodes())}}function ma(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(fe(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),d,null)}else{const d=he(n);if(!l.isCompleteForPath(n)&&ii(n)>1)return e;const p=ke(n),w=l.getNode().getImmediateChild(d).updateChild(p,i);d===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),d,w,p,gy,null)}const h=ay(e,c,l.isFullyInitialized()||fe(n),u.filtersNodes()),f=new _h(s,h,r);return my(t,h,n,s,f,a)}function qc(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new _h(s,e,r);if(fe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ar(e,c,!0,t.filter.filtersNodes());else{const h=he(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ar(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ke(n),d=a.getNode().getImmediateChild(h);let p;if(fe(f))p=i;else{const _=u.getCompleteChild(h);_!=null?K_(f)===".priority"&&_.getChild(Y_(f)).isEmpty()?p=_:p=_.updateChild(f,i):p=we.EMPTY_NODE}if(d.equals(p))l=e;else{const _=t.filter.updateChild(a.getNode(),h,p,f,u,o);l=ar(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $d(t,e){return t.eventCache.isCompleteForChild(e)}function JS(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=$e(n,l);$d(e,he(u))&&(a=qc(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=$e(n,l);$d(e,he(u))||(a=qc(t,a,u,c,s,r,o))}),a}function Vd(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Jc(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;fe(n)?c=i:c=new Pe(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),p=Vd(t,d,f);l=ma(t,l,new De(h),p,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const p=e.serverCache.getNode().getImmediateChild(h),_=Vd(t,p,f);l=ma(t,l,new De(h),_,s,r,o,a)}}),l}function QS(t,e,n,i,s,r,o){if(ga(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(fe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ma(t,e,n,l.getNode().getChild(n),s,r,a,o);if(fe(n)){let c=new Pe(null);return l.getNode().forEachChild(rs,(u,h)=>{c=c.set(new De(u),h)}),Jc(t,e,n,c,s,r,a,o)}else return e}else{let c=new Pe(null);return i.foreach((u,h)=>{const f=$e(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Jc(t,e,n,c,s,r,a,o)}}function ZS(t,e,n,i,s){const r=e.serverCache,o=ay(e,r.getNode(),r.isFullyInitialized()||fe(n),r.isFiltered());return my(t,o,n,i,gy,s)}function eR(t,e,n,i,s,r){let o;if(ga(i,n)!=null)return e;{const a=new _h(i,e,s),l=e.eventCache.getNode();let c;if(fe(n)||he(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Xc(i,Mi(e));else{const h=e.serverCache.getNode();W(h instanceof we,"serverChildren would be complete if leaf node"),u=fy(i,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=he(n);let h=mh(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ke(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,we.EMPTY_NODE,ke(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Xc(i,Mi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ga(i,Se())!=null,ar(e,c,o,t.filter.filtersNodes())}}function tR(t,e){const n=Mi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!fe(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function Wd(t,e,n,i){e.type===sn.MERGE&&e.source.queryId!==null&&(W(Mi(t.viewCache_),"We should always have a full cache before handling merges"),W(Kc(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=XS(t.processor_,s,e,n,i);return YS(t.processor_,r.viewCache),W(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,nR(t,r.changes,r.viewCache.eventCache.getNode(),null)}function nR(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return xS(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zd;function iR(t){W(!zd,"__referenceConstructor has already been defined"),zd=t}function yh(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return W(r!=null,"SyncTree gave us an op for an invalid query."),Wd(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Wd(o,e,n,i));return r}}function vh(t,e){let n=null;for(const i of t.views.values())n=n||tR(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd;function sR(t){W(!Kd,"__referenceConstructor has already been defined"),Kd=t}class Gd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=WS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rR(t,e,n,i,s){return NS(t.pendingWriteTree_,e,n,i,s),s?al(t,new Di(iy(),e,n)):[]}function qi(t,e,n=!1){const i=DS(t.pendingWriteTree_,e);if(MS(t.pendingWriteTree_,e)){let r=new Pe(null);return i.snap!=null?r=r.set(Se(),!0):Lt(i.children,o=>{r=r.set(new De(o),!0)}),al(t,new pa(i.path,r,n))}else return[]}function ol(t,e,n){return al(t,new Di(sy(),e,n))}function oR(t,e,n){const i=Pe.fromObject(n);return al(t,new Ar(sy(),e,i))}function aR(t,e,n,i){const s=Ey(t,i);if(s!=null){const r=wy(s),o=r.path,a=r.queryId,l=Mt(o,e),c=new Di(ry(a),l,n);return Iy(t,o,c)}else return[]}function lR(t,e,n,i){const s=Ey(t,i);if(s){const r=wy(s),o=r.path,a=r.queryId,l=Mt(o,e),c=Pe.fromObject(n),u=new Ar(ry(a),l,c);return Iy(t,o,u)}else return[]}function _y(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Mt(o,e),c=vh(a,l);if(c)return c});return hy(s,e,r,n,!0)}function al(t,e){return yy(e,t.syncPointTree_,null,cy(t.pendingWriteTree_,Se()))}function yy(t,e,n,i){if(fe(t.path))return vy(t,e,n,i);{const s=e.get(Se());n==null&&s!=null&&(n=vh(s,Se()));let r=[];const o=he(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=dy(i,o);r=r.concat(yy(a,l,c,u))}return s&&(r=r.concat(yh(s,t,i,n))),r}}function vy(t,e,n,i){const s=e.get(Se());n==null&&s!=null&&(n=vh(s,Se()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=dy(i,o),u=t.operationForChild(o);u&&(r=r.concat(vy(u,a,l,c)))}),s&&(r=r.concat(yh(s,t,i,n))),r}function Ey(t,e){return t.tagToQueryMap.get(e)}function wy(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new De(t.substr(0,e))}}function Iy(t,e,n){const i=t.syncPointTree_.get(e);W(i,"Missing sync point for query tag that we're tracking");const s=cy(t.pendingWriteTree_,e);return yh(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Eh(n)}node(){return this.node_}}class wh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new wh(this.syncTree_,n)}node(){return _y(this.syncTree_,this.path_)}}const cR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yd=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return uR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hR(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},uR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},hR=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&W(!1,"Unexpected increment value: "+i);const s=e.node();if(W(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},fR=function(t,e,n,i){return Ih(e,new wh(n,t),i)},dR=function(t,e,n){return Ih(t,new Eh(e),n)};function Ih(t,e,n){const i=t.getPriority().val(),s=Yd(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Yd(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ze(a,it(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new ze(s))),o.forEachChild(rt,(a,l)=>{const c=Ih(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Th(t,e){let n=e instanceof De?e:new De(e),i=t,s=he(n);for(;s!==null;){const r=gs(i.node.children,s)||{children:{},childCount:0};i=new bh(s,i,r),n=ke(n),s=he(n)}return i}function Ps(t){return t.node.value}function by(t,e){t.node.value=e,Qc(t)}function Ty(t){return t.node.childCount>0}function pR(t){return Ps(t)===void 0&&!Ty(t)}function ll(t,e){Lt(t.node.children,(n,i)=>{e(new bh(n,t,i))})}function Cy(t,e,n,i){n&&!i&&e(t),ll(t,s=>{Cy(s,e,!0,i)}),n&&i&&e(t)}function gR(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function to(t){return new De(t.parent===null?t.name:to(t.parent)+"/"+t.name)}function Qc(t){t.parent!==null&&mR(t.parent,t.name,t)}function mR(t,e,n){const i=pR(n),s=Dn(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Qc(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Qc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/[\[\].#$\/\u0000-\u001F\u007F]/,yR=/[\[\].#$\u0000-\u001F\u007F]/,Ql=10*1024*1024,Sy=function(t){return typeof t=="string"&&t.length!==0&&!_R.test(t)},Ry=function(t){return typeof t=="string"&&t.length!==0&&!yR.test(t)},vR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ry(t)},Ay=function(t,e,n){const i=n instanceof De?new ZC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fi(i));if(typeof e=="function")throw new Error(t+"contains a function "+fi(i)+" with contents = "+e.toString());if(C_(e))throw new Error(t+"contains "+e.toString()+" "+fi(i));if(typeof e=="string"&&e.length>Ql/3&&sl(e)>Ql)throw new Error(t+"contains a string greater than "+Ql+" utf8 bytes "+fi(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Lt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Sy(o)))throw new Error(t+" contains an invalid key ("+o+") "+fi(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);eS(i,o),Ay(t,a,i),tS(i)}),s&&r)throw new Error(t+' contains ".value" child '+fi(i)+" in addition to actual children.")}},xy=function(t,e,n,i){if(!(i&&n===void 0)&&!Ry(n))throw new Error(m_(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ER=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xy(t,e,n,i)},wR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vR(n))throw new Error(m_(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bR(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!X_(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Hi(t,e,n){bR(t,n),TR(t,i=>Vt(i,e)||Vt(e,i))}function TR(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(CR(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ti&&nt("event: "+n.toString()),Zr(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="repo_interrupt",RR=25;class AR{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=da(),this.transactionQueueTree_=new bh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xR(t,e,n){if(t.stats_=uh(t.repoInfo_),t.forceRestClient_||TC())t.server_=new fa(t.repoInfo_,(i,s,r,o)=>{Xd(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Rn(t.repoInfo_,e,(i,s,r,o)=>{Xd(t,i,s,r,o)},i=>{qd(t,i)},i=>{PR(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=xC(t.repoInfo_,()=>new AS(t.stats_,t.server_)),t.infoData_=new bS,t.infoSyncTree_=new Gd({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=ol(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ch(t,"connected",!1),t.serverSyncTree_=new Gd({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Hi(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function OR(t){const n=t.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oy(t){return cR({timestamp:OR(t)})}function Xd(t,e,n,i,s){t.dataUpdateCount++;const r=new De(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=oa(n,c=>it(c));o=lR(t.serverSyncTree_,r,l,s)}else{const l=it(n);o=aR(t.serverSyncTree_,r,l,s)}else if(i){const l=oa(n,c=>it(c));o=oR(t.serverSyncTree_,r,l)}else{const l=it(n);o=ol(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Rh(t,r)),Hi(t.eventQueue_,a,o)}function qd(t,e){Ch(t,"connected",e),e===!1&&NR(t)}function PR(t,e){Lt(e,(n,i)=>{Ch(t,n,i)})}function Ch(t,e,n){const i=new De("/.info/"+e),s=it(n);t.infoData_.updateSnapshot(i,s);const r=ol(t.infoSyncTree_,i,s);Hi(t.eventQueue_,i,r)}function kR(t){return t.nextWriteId_++}function NR(t){Py(t,"onDisconnectEvents");const e=Oy(t),n=da();zc(t.onDisconnect_,Se(),(s,r)=>{const o=fR(s,r,t.serverSyncTree_,e);ny(n,s,o)});let i=[];zc(n,Se(),(s,r)=>{i=i.concat(ol(t.serverSyncTree_,s,r));const o=FR(t,s);Rh(t,o)}),t.onDisconnect_=da(),Hi(t.eventQueue_,Se(),i)}function DR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SR)}function Py(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),nt(n,...e)}function ky(t,e,n){return _y(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function Sh(t,e=t.transactionQueueTree_){if(e||cl(t,e),Ps(e)){const n=Dy(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&MR(t,to(e),n)}else Ty(e)&&ll(e,n=>{Sh(t,n)})}function MR(t,e,n){const i=n.map(c=>c.currentWriteId),s=ky(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];W(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Mt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Py(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(qi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();cl(t,Th(t.transactionQueueTree_,e)),Sh(t,t.transactionQueueTree_),Hi(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Zr(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Rh(t,e)}},o)}function Rh(t,e){const n=Ny(t,e),i=to(n),s=Dy(t,n);return LR(t,s,i),i}function LR(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Mt(n,l.path);let u=!1,h;if(W(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=RR)u=!0,h="maxretry",s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=ky(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Ay("transaction failed: Data returned ",d,l.path);let p=it(d);typeof d=="object"&&d!=null&&Dn(d,".priority")||(p=p.updatePriority(f.getPriority()));const w=l.currentWriteId,E=Oy(t),m=dR(p,f,E);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=m,l.currentWriteId=kR(t),o.splice(o.indexOf(w),1),s=s.concat(rR(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),s=s.concat(qi(t.serverSyncTree_,w,!0))}else u=!0,h="nodata",s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0))}Hi(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}cl(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Zr(i[a]);Sh(t,t.transactionQueueTree_)}function Ny(t,e){let n,i=t.transactionQueueTree_;for(n=he(e);n!==null&&Ps(i)===void 0;)i=Th(i,n),e=ke(e),n=he(e);return i}function Dy(t,e){const n=[];return My(t,e,n),n.sort((i,s)=>i.order-s.order),n}function My(t,e,n){const i=Ps(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);ll(e,s=>{My(t,s,n)})}function cl(t,e){const n=Ps(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,by(e,n.length>0?n:void 0)}ll(e,i=>{cl(t,i)})}function FR(t,e){const n=to(Ny(t,e)),i=Th(t.transactionQueueTree_,e);return gR(i,s=>{Zl(t,s)}),Zl(t,i),Cy(i,s=>{Zl(t,s)}),n}function Zl(t,e){const n=Ps(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(qi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?by(e,void 0):n.length=r+1,Hi(t.eventQueue_,to(e),s);for(let o=0;o<i.length;o++)Zr(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function jR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Jd=function(t,e){const n=BR(t),i=n.namespace;n.domain==="firebase.com"&&On(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&On("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mC();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new F_(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new De(n.pathString)}},BR=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=UR(t.substring(u,h)));const f=jR(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return fe(this._path)?null:K_(this._path)}get ref(){return new $i(this._repo,this._path)}get _queryIdentifier(){const e=Ld(this._queryParams),n=lh(e);return n==="{}"?"default":n}get _queryObject(){return Ld(this._queryParams)}isEqual(e){if(e=qt(e),!(e instanceof Ah))return!1;const n=this._repo===e._repo,i=X_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+QC(this._path)}}class $i extends Ah{constructor(e,n){super(e,n,new ph,!1)}get parent(){const e=Y_(this._path);return e===null?null:new $i(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function HR(t,e){return t=qt(t),t._checkNotDeleted("ref"),e!==void 0?$R(t._root,e):t._root}function $R(t,e){return t=qt(t),he(t._path)===null?ER("child","path",e,!1):xy("child","path",e,!1),new $i(t._repo,$e(t._path,e))}iR($i);sR($i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="FIREBASE_DATABASE_EMULATOR_HOST",Zc={};let WR=!1;function zR(t,e,n,i){t.repoInfo_=new F_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function KR(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||On("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Jd(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[VR]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Jd(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new ss(ss.OWNER):new SC(t.name,t.options,e);wR("Invalid Firebase Database URL",o),fe(o.path)||On("Database URL must point to the root of a Firebase Database (not including a child path).");const h=YR(a,t,u,new CC(t.name,n));return new XR(h,t)}function GR(t,e){const n=Zc[e];(!n||n[t.key]!==t)&&On(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DR(t),delete n[t.key]}function YR(t,e,n,i){let s=Zc[e.name];s||(s={},Zc[e.name]=s);let r=s[t.toURLString()];return r&&On("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new AR(t,WR,n,i),s[t.toURLString()]=r,r}class XR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $i(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(GR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&On("Cannot call "+e+" on a deleted database.")}}function qR(t=ah(),e){const n=oh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Vb("database");i&&JR(n,...i)}return n}function JR(t,e,n,i={}){t=qt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&On("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&On('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ss(ss.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Wb(i.mockUserToken,t.app.options.projectId);r=new ss(o)}zR(s,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){hC(ri),hn(new Gt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return KR(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Ot(yd,vd,t),Ot(yd,vd,"esm2017")}Rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};QR();const ZR={apiKey:"AIzaSyDYYjCiT7aQRoaiAjyDozSvo0lyeWbnfkU",authDomain:"nasa-api-fa1f5.firebaseapp.com",databaseURL:{}.VITE_DATABASE_URL,projectId:"nasa-api-fa1f5",storageBucket:{}.VITE_STORAGE_BUCKET,messagingSenderId:{}.VITE_MESSAGING_SENDER_ID,appId:"1:767458710881:web:fc6640dcc2f29420bf6120"},Ly=v_(ZR),eA=qR(Ly);HR(eA,"todos");function xh(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Fy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tA=Fy,Uy=new As("auth","Firebase",Fy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new qr("@firebase/auth");function nA(t,...e){_a.logLevel<=Ee.WARN&&_a.warn(`Auth (${ri}): ${t}`,...e)}function Vo(t,...e){_a.logLevel<=Ee.ERROR&&_a.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Oh(t,...e)}function ln(t,...e){return Oh(t,...e)}function jy(t,e,n){const i=Object.assign(Object.assign({},tA()),{[e]:n});return new As("auth","Firebase",i).create(e,{appName:t.name})}function iA(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&fn(t,"argument-error"),jy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oh(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Uy.create(t,...e)}function ae(t,e,...n){if(!t)throw Oh(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vo(e),new Error(e)}function Pn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sA(){return Qd()==="http:"||Qd()==="https:"}function Qd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sA()||zb()||"connection"in navigator)?navigator.onLine:!0}function oA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=sh()||f_()}get(){return rA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=new no(3e4,6e4);function Hy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function io(t,e,n,i,s={}){return $y(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),By.fetch()(Vy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function $y(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},aA),e);try{const s=new uA(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oo(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jy(t,u,c);fn(t,u)}}catch(s){if(s instanceof mn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function cA(t,e,n,i,s={}){const r=await io(t,e,n,i,s);return"mfaPendingCredential"in r&&fn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Vy(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Ph(t.config,s):`${t.config.apiScheme}://${s}`}class uA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ln(this.auth,"network-request-failed")),lA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=ln(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e){return io(t,"POST","/v1/accounts:delete",e)}async function fA(t,e){return io(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dA(t,e=!1){const n=qt(t),i=await n.getIdToken(e),s=kh(i);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:cr(ec(s.auth_time)),issuedAtTime:cr(ec(s.iat)),expirationTime:cr(ec(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ec(t){return Number(t)*1e3}function kh(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ra(n);return s?JSON.parse(s):(Vo("Failed to decode base64 JWT payload"),null)}catch(s){return Vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function pA(t){const e=kh(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof mn&&gA(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function gA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t){var e;const n=t.auth,i=await t.getIdToken(),s=await xr(t,fA(n,{idToken:i}));ae(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?vA(r.providerUserInfo):[],a=yA(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Wy(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function _A(t){const e=qt(t);await ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yA(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function vA(t){return t.map(e=>{var{providerId:n}=e,i=xh(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){const n=await $y(t,{},async()=>{const i=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Vy(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",By.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await EA(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Or;return i&&(ae(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(ae(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ci{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=xh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Wy(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await xr(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dA(this,e)}reload(){return _A(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ya(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xr(this,hA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:v,isAnonymous:C,providerData:S,stsTokenManager:O}=n;ae(T&&O,e,"internal-error");const I=Or.fromJSON(this.name,O);ae(typeof T=="string",e,"internal-error"),jn(h,e.name),jn(f,e.name),ae(typeof v=="boolean",e,"internal-error"),ae(typeof C=="boolean",e,"internal-error"),jn(d,e.name),jn(p,e.name),jn(_,e.name),jn(w,e.name),jn(E,e.name),jn(m,e.name);const P=new Ci({uid:T,auth:e,email:f,emailVerified:v,displayName:h,isAnonymous:C,photoURL:p,phoneNumber:d,tenantId:_,stsTokenManager:I,createdAt:E,lastLoginAt:m});return S&&Array.isArray(S)&&(P.providerData=S.map(D=>Object.assign({},D))),w&&(P._redirectEventId=w),P}static async _fromIdTokenResponse(e,n,i=!1){const s=new Or;s.updateFromServerResponse(n);const r=new Ci({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ya(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new Map;function Tn(t){Pn(t instanceof Function,"Expected a class definition");let e=Zd.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zy.type="NONE";const ep=zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Wo(this.userKey,s.apiKey,r),this.fullPersistenceKey=Wo("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new os(Tn(ep),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Tn(ep);const o=Wo(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ci._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new os(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new os(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ky(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qy(e))return"Blackberry";if(Jy(e))return"Webos";if(Nh(e))return"Safari";if((e.includes("chrome/")||Gy(e))&&!e.includes("edge/"))return"Chrome";if(Xy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ky(t=ct()){return/firefox\//i.test(t)}function Nh(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gy(t=ct()){return/crios\//i.test(t)}function Yy(t=ct()){return/iemobile/i.test(t)}function Xy(t=ct()){return/android/i.test(t)}function qy(t=ct()){return/blackberry/i.test(t)}function Jy(t=ct()){return/webos/i.test(t)}function ul(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wA(t=ct()){var e;return ul(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IA(){return Kb()&&document.documentMode===10}function Qy(t=ct()){return ul(t)||Xy(t)||Jy(t)||qy(t)||/windows phone/i.test(t)||Yy(t)}function bA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t,e=[]){let n;switch(t){case"Browser":n=tp(ct());break;case"Worker":n=`${tp(ct())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${i}`}async function ev(t,e){return io(t,"GET","/v2/recaptchaConfig",Hy(t,e))}function np(t){return t!==void 0&&t.enterprise!==void 0}class tv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nv(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=ln("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",TA().appendChild(i)})}function CA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SA="https://www.google.com/recaptcha/enterprise.js?render=",RA="recaptcha-enterprise",AA="NO_RECAPTCHA";class xA{constructor(e){this.type=RA,this.auth=so(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ev(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new tv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;np(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(AA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&np(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nv(SA+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ip(this),this.idTokenSubscription=new ip(this),this.beforeStateQueue=new OA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}async initializeRecaptchaConfig(){const e=await ev(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new tv(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new xA(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function so(t){return qt(t)}class ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=eT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t,e){const n=oh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(aa(r,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function NA(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function DA(t,e,n){const i=so(t);ae(i._canInitEmulator,i,"emulator-config-failed"),ae(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=iv(e),{host:o,port:a}=MA(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||LA()}function iv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MA(t){const e=iv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:sp(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:sp(o)}}}function sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return cA(t,"POST","/v1/accounts:signInWithIdp",Hy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="http://localhost";class Li extends sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=xh(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Li(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,as(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:FA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends Dh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ro{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return tn.credential(n,i)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends ro{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ro{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Kn.credential(n,i)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Ci._fromIdTokenResponse(e,i,s),o=rp(i);return new ys({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=rp(i);return new ys({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends mn{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,va.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new va(e,n,i,s)}}function rv(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?va._fromErrorAndOperation(t,r,e,i):r})}async function UA(t,e,n=!1){const i=await xr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ys._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await xr(t,rv(i,s,e,t),n);ae(r.idToken,i,"internal-error");const o=kh(r.idToken);ae(o,i,"internal-error");const{sub:a}=o;return ae(t.uid===a,i,"user-mismatch"),ys._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&fn(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e,n=!1){const i="signIn",s=await rv(t,i,e),r=await ys._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function ov(t,e,n,i){return qt(t).onIdTokenChanged(e,n,i)}function HA(t,e,n){return qt(t).beforeAuthStateChanged(e,n)}function $A(t){return qt(t).signOut()}const Ea="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ea,"1"),this.storage.removeItem(Ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(){const t=ct();return Nh(t)||ul(t)}const WA=1e3,zA=10;class lv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VA()&&bA(),this.fallbackToPolling=Qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);IA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zA):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const KA=lv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cv.type="SESSION";const uv=cv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new hl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await GA(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Mh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function XA(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function qA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QA(){return hv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="firebaseLocalStorageDb",ZA=1,wa="firebaseLocalStorage",dv="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fl(t,e){return t.transaction([wa],e?"readwrite":"readonly").objectStore(wa)}function ex(){const t=indexedDB.deleteDatabase(fv);return new oo(t).toPromise()}function tu(){const t=indexedDB.open(fv,ZA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(wa,{keyPath:dv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(wa)?e(i):(i.close(),await ex(),e(await tu()))})})}async function op(t,e,n){const i=fl(t,!0).put({[dv]:e,value:n});return new oo(i).toPromise()}async function tx(t,e){const n=fl(t,!1).get(e),i=await new oo(n).toPromise();return i===void 0?null:i.value}function ap(t,e){const n=fl(t,!0).delete(e);return new oo(n).toPromise()}const nx=800,ix=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>ix)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hl._getInstance(QA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qA(),!this.activeServiceWorker)return;this.sender=new YA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tu();return await op(e,Ea,"1"),await ap(e,Ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>op(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>tx(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=fl(s,!1).getAll();return new oo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const sx=pv;new no(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e){return e?Tn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rx(t){return BA(t.auth,new Lh(t),t.bypassAuthState)}function ox(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),jA(n,new Lh(t),t.bypassAuthState)}async function ax(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),UA(n,new Lh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rx;case"linkViaPopup":case"linkViaRedirect":return ax;case"reauthViaPopup":case"reauthViaRedirect":return ox;default:fn(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new no(2e3,1e4);async function cx(t,e,n){const i=so(t);iA(t,e,Dh);const s=gv(i,n);return new _i(i,"signInViaPopup",e,s).executeNotNull()}class _i extends mv{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Mh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lx.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="pendingRedirect",zo=new Map;class hx extends mv{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=zo.get(this.auth._key());if(!e){try{const i=await fx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}zo.set(this.auth._key(),e)}return this.bypassAuthState||zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fx(t,e){const n=gx(e),i=px(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function dx(t,e){zo.set(t._key(),e)}function px(t){return Tn(t._redirectPersistence)}function gx(t){return Wo(ux,t.config.apiKey,t.name)}async function mx(t,e,n=!1){const i=so(t),s=gv(i,e),o=await new hx(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=10*60*1e3;class yx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!_v(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_x&&this.cachedEventUids.clear(),this.cachedEventUids.has(lp(e))}saveEventToCache(e){this.cachedEventUids.add(lp(e)),this.lastProcessedEventTime=Date.now()}}function lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _v({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _v(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(t,e={}){return io(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ix=/^https?/;async function bx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ex(t);for(const n of e)try{if(Tx(n))return}catch{}fn(t,"unauthorized-domain")}function Tx(t){const e=eu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Ix.test(n))return!1;if(wx.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=new no(3e4,6e4);function cp(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sx(t){return new Promise((e,n)=>{var i,s,r;function o(){cp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cp(),n(ln(t,"network-request-failed"))},timeout:Cx.get()})}if(!((s=(i=cn().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=cn().gapi)===null||r===void 0)&&r.load)o();else{const a=CA("iframefcb");return cn()[a]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},nv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ko=null,e})}let Ko=null;function Rx(t){return Ko=Ko||Sx(t),Ko}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=new no(5e3,15e3),xx="__/auth/iframe",Ox="emulator/auth/iframe",Px={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nx(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,Ox):`https://${t.config.authDomain}/${xx}`,i={apiKey:e.apiKey,appName:t.name,v:ri},s=kx.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${xs(i).slice(1)}`}async function Dx(t){const e=await Rx(t),n=cn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:Nx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Px,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),a=cn().setTimeout(()=>{r(o)},Ax.get());function l(){cn().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lx=500,Fx=600,Ux="_blank",jx="http://localhost";class up{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bx(t,e,n,i=Lx,s=Fx){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Mx),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ct().toLowerCase();n&&(a=Gy(c)?Ux:n),Ky(c)&&(e=e||jx,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(wA(c)&&a!=="_self")return Hx(e||"",a),new up(null);const h=window.open(e||"",a,u);ae(h,t,"popup-blocked");try{h.focus()}catch{}return new up(h)}function Hx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="__/auth/handler",Vx="emulator/auth/handler",Wx=encodeURIComponent("fac");async function hp(t,e,n,i,s,r){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ri,eventId:s};if(e instanceof Dh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ro){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Wx}=${encodeURIComponent(l)}`:"";return`${zx(t)}?${xs(a).slice(1)}${c}`}function zx({config:t}){return t.emulator?Ph(t,Vx):`https://${t.authDomain}/${$x}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="webStorageSupport";class Kx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uv,this._completeRedirectFn=mx,this._overrideRedirectResult=dx}async _openPopup(e,n,i,s){var r;Pn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await hp(e,n,i,eu(),s);return Bx(e,o,Mh())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await hp(e,n,i,eu(),s);return XA(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Dx(e),i=new yx(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tc,{type:tc},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[tc];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qy()||Nh()||ul()}}const Gx=Kx;var fp="@firebase/auth",dp="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qx(t){hn(new Gt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zy(t)},c=new PA(i,s,r,l);return NA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),hn(new Gt("auth-internal",e=>{const n=so(e.getProvider("auth").getImmediate());return(i=>new Yx(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(fp,dp,Xx(t)),Ot(fp,dp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=5*60,Qx=h_("authIdTokenMaxAge")||Jx;let pp=null;const Zx=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Qx)return;const s=n==null?void 0:n.token;pp!==s&&(pp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fh(t=ah()){const e=oh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kA(t,{popupRedirectResolver:Gx,persistence:[sx,KA,uv]}),i=h_("authTokenSyncURL");if(i){const r=Zx(i);HA(n,r,()=>r(n.currentUser)),ov(n,o=>r(o))}const s=c_("auth");return s&&DA(n,`http://${s}`),n}qx("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new Map,t1={activated:!1,tokenObservers:[]};function Yt(t){return e1.get(t)||Object.assign({},t1)}const gp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n,i,s,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=s,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=s,s>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Tr,await i1(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Tr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function i1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ia=new As("appCheck","AppCheck",s1);function yv(t){if(!Yt(t).activated)throw Ia.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="firebase-app-check-database",o1=1,nu="firebase-app-check-store";let Po=null;function a1(){return Po||(Po=new Promise((t,e)=>{try{const n=indexedDB.open(r1,o1);n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;e(Ia.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(nu,{keyPath:"compositeKey"})}}}catch(n){e(Ia.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Po)}function l1(t,e){return c1(u1(t),e)}async function c1(t,e){const i=(await a1()).transaction(nu,"readwrite"),r=i.objectStore(nu).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},i.onerror=l=>{var c;a(Ia.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function u1(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new qr("@firebase/app-check");function mp(t,e){return p_()?l1(t,e).catch(n=>{iu.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1={error:"UNKNOWN_ERROR"};function f1(t){return il.encodeString(JSON.stringify(t),!1)}async function su(t,e=!1){const n=t.app;yv(n);const i=Yt(n);let s=i.token,r;if(s&&!Xs(s)&&(i.token=void 0,s=void 0),!s){const l=await i.cachedTokenPromise;l&&(Xs(l)?s=l:await mp(n,void 0))}if(!e&&s&&Xs(s))return{token:s.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),s=await Yt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?iu.warn(l.message):iu.error(l),r=l}let a;return s?r?Xs(s)?a={token:s.token,internalError:r}:a=yp(r):(a={token:s.token},i.token=s,await mp(n,s)):a=yp(r),o&&m1(n,a),a}async function d1(t){const e=t.app;yv(e);const{provider:n}=Yt(e);{const{token:i}=await n.getToken();return{token:i}}}function p1(t,e,n,i){const{app:s}=t,r=Yt(s),o={next:n,error:i,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Xs(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),_p(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>_p(t))}function vv(t,e){const n=Yt(t),i=n.tokenObservers.filter(s=>s.next!==e);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function _p(t){const{app:e}=t,n=Yt(e);let i=n.tokenRefresher;i||(i=g1(t),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function g1(t){const{app:e}=t;return new n1(async()=>{const n=Yt(e);let i;if(n.token?i=await su(t,!0):i=await su(t),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Yt(e);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,s),Math.max(0,i-Date.now())}else return 0},gp.RETRIAL_MIN_WAIT,gp.RETRIAL_MAX_WAIT)}function m1(t,e){const n=Yt(t).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function Xs(t){return t.expireTimeMillis-Date.now()>0}function yp(t){return{token:f1(h1),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Yt(this.app);for(const n of e)vv(this.app,n.next);return Promise.resolve()}}function y1(t,e){return new _1(t,e)}function v1(t){return{getToken:e=>su(t,e),getLimitedUseToken:()=>d1(t),addTokenListener:e=>p1(t,"INTERNAL",e),removeTokenListener:e=>vv(t.app,e)}}const E1="@firebase/app-check",w1="0.8.0",I1="app-check",vp="app-check-internal";function b1(){hn(new Gt(I1,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return y1(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(vp).initialize()})),hn(new Gt(vp,t=>{const e=t.getProvider("app-check").getImmediate();return v1(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ot(E1,w1)}b1();const Ev=Symbol("firebaseApp");function Uh(t){return gn()&&xt(Ev,null)||ah(t)}const T1=typeof window<"u",ko=new WeakMap;function C1(t,e){if(!ko.has(t)){const n=Pu(!0);ko.set(t,n);const{unmount:i}=e;e.unmount=()=>{i.call(e),n.stop(),ko.delete(t)}}return ko.get(t)}const wv=new WeakMap;function jh(t){return wv.get(Uh(t))}const No=new WeakMap;function S1(t){const e=Uh(t);if(!No.has(e)){let n;const s=[new Promise(r=>{n=r}),r=>{No.set(e,r),n(r.value)}];No.set(e,s)}return No.get(e)}function R1(t,e){const n=Fh(e);ov(n,i=>{const s=S1();t.value=i,Array.isArray(s)&&s[1](t)})}var A1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Bh=Bh||{},re=A1||self;function dl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ao(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function x1(t){return Object.prototype.hasOwnProperty.call(t,nc)&&t[nc]||(t[nc]=++O1)}var nc="closure_uid_"+(1e9*Math.random()>>>0),O1=0;function P1(t,e,n){return t.call.apply(t.bind,arguments)}function k1(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=P1:at=k1,at.apply(null,arguments)}function Do(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function oi(){this.s=this.s,this.o=this.o}var N1=0;oi.prototype.s=!1;oi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),N1!=0)&&x1(this)};oi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Iv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Hh(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ep(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(dl(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var D1=function(){if(!re.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{re.addEventListener("test",()=>{},e),re.removeEventListener("test",()=>{},e)}catch{}return t}();function Pr(t){return/^[\s\xa0]*$/.test(t)}function pl(){var t=re.navigator;return t&&(t=t.userAgent)?t:""}function nn(t){return pl().indexOf(t)!=-1}function $h(t){return $h[" "](t),t}$h[" "]=function(){};function M1(t,e){var n=AO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var L1=nn("Opera"),kr=nn("Trident")||nn("MSIE"),bv=nn("Edge"),ru=bv||kr,Tv=nn("Gecko")&&!(pl().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge"))&&!(nn("Trident")||nn("MSIE"))&&!nn("Edge"),F1=pl().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge");function Cv(){var t=re.document;return t?t.documentMode:void 0}e:{var wp="",ic=function(){var t=pl();if(Tv)return/rv:([^\);]+)(\)|;)/.exec(t);if(bv)return/Edge\/([\d\.]+)/.exec(t);if(kr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(F1)return/WebKit\/(\S+)/.exec(t);if(L1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ic&&(wp=ic?ic[1]:""),kr){var Ip=Cv();if(Ip!=null&&Ip>parseFloat(wp))break e}}re.document&&kr&&Cv();function Nr(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tv){e:{try{$h(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:U1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Nr.$.h.call(this)}}qe(Nr,lt);var U1={2:"touch",3:"pen",4:"mouse"};Nr.prototype.h=function(){Nr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lo="closure_listenable_"+(1e6*Math.random()|0),j1=0;function B1(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++j1,this.fa=this.ia=!1}function gl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Vh(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function H1(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Sv(t){const e={};for(const n in t)e[n]=t[n];return e}const bp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rv(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<bp.length;r++)n=bp[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ml(t){this.src=t,this.g={},this.h=0}ml.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=au(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new B1(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function ou(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Iv(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(gl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function au(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Wh="closure_lm_"+(1e6*Math.random()|0),sc={};function Av(t,e,n,i,s){if(i&&i.once)return Ov(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Av(t,e[r],n,i,s);return null}return n=Gh(n),t&&t[lo]?t.O(e,n,ao(i)?!!i.capture:!!i,s):xv(t,e,n,!1,i,s)}function xv(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=ao(s)?!!s.capture:!!s,a=Kh(t);if(a||(t[Wh]=a=new ml(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=$1(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)D1||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(kv(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $1(){function t(n){return e.call(t.src,t.listener,n)}const e=V1;return t}function Ov(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ov(t,e[r],n,i,s);return null}return n=Gh(n),t&&t[lo]?t.P(e,n,ao(i)?!!i.capture:!!i,s):xv(t,e,n,!0,i,s)}function Pv(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Pv(t,e[r],n,i,s);else i=ao(i)?!!i.capture:!!i,n=Gh(n),t&&t[lo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=au(r,n,i,s),-1<n&&(gl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=au(e,n,i,s)),(n=-1<t?e[t]:null)&&zh(n))}function zh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[lo])ou(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(kv(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Kh(e))?(ou(n,t),n.h==0&&(n.src=null,e[Wh]=null)):gl(t)}}}function kv(t){return t in sc?sc[t]:sc[t]="on"+t}function V1(t,e){if(t.fa)t=!0;else{e=new Nr(e,this);var n=t.listener,i=t.la||t.src;t.ia&&zh(t),t=n.call(i,e)}return t}function Kh(t){return t=t[Wh],t instanceof ml?t:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gh(t){return typeof t=="function"?t:(t[rc]||(t[rc]=function(e){return t.handleEvent(e)}),t[rc])}function Xe(){oi.call(this),this.i=new ml(this),this.S=this,this.J=null}qe(Xe,oi);Xe.prototype[lo]=!0;Xe.prototype.removeEventListener=function(t,e,n,i){Pv(this,t,e,n,i)};function et(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var s=e;e=new lt(i,t),Rv(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Mo(o,i,!0,e)&&s}if(o=e.g=t,s=Mo(o,i,!0,e)&&s,s=Mo(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Mo(o,i,!1,e)&&s}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)gl(n[i]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Xe.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Mo(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ou(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Yh=re.JSON.stringify;class W1{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function z1(){var t=Xh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class K1{constructor(){this.h=this.g=null}add(e,n){const i=Nv.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Nv=new W1(()=>new G1,t=>t.reset());class G1{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Y1(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function X1(t){re.setTimeout(()=>{throw t},0)}let Dr,Mr=!1,Xh=new K1,Dv=()=>{const t=re.Promise.resolve(void 0);Dr=()=>{t.then(q1)}};var q1=()=>{for(var t;t=z1();){try{t.h.call(t.g)}catch(n){X1(n)}var e=Nv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mr=!1};function _l(t,e){Xe.call(this),this.h=t||1,this.g=e||re,this.j=at(this.qb,this),this.l=Date.now()}qe(_l,Xe);z=_l.prototype;z.ga=!1;z.T=null;z.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(qh(this),this.start()))}};z.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}z.N=function(){_l.$.N.call(this),qh(this),delete this.g};function Jh(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:re.setTimeout(t,e||0)}function Mv(t){t.g=Jh(()=>{t.g=null,t.i&&(t.i=!1,Mv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class J1 extends oi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mv(this)}N(){super.N(),this.g&&(re.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(t){oi.call(this),this.h=t,this.g={}}qe(Lr,oi);var Tp=[];function Lv(t,e,n,i){Array.isArray(n)||(n&&(Tp[0]=n.toString()),n=Tp);for(var s=0;s<n.length;s++){var r=Av(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Fv(t){Vh(t.g,function(e,n){this.g.hasOwnProperty(n)&&zh(e)},t),t.g={}}Lr.prototype.N=function(){Lr.$.N.call(this),Fv(this)};Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yl(){this.g=!0}yl.prototype.Ea=function(){this.g=!1};function Q1(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Z1(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Ji(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tO(t,n)+(i?" "+i:"")})}function eO(t,e){t.info(function(){return"TIMEOUT: "+e})}yl.prototype.info=function(){};function tO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Yh(n)}catch{return e}}var ks={},Cp=null;function Qh(){return Cp=Cp||new Xe}ks.Ta="serverreachability";function Uv(t){lt.call(this,ks.Ta,t)}qe(Uv,lt);function Fr(t){const e=Qh();et(e,new Uv(e))}ks.STAT_EVENT="statevent";function jv(t,e){lt.call(this,ks.STAT_EVENT,t),this.stat=e}qe(jv,lt);function dt(t){const e=Qh();et(e,new jv(e,t))}ks.Ua="timingevent";function Bv(t,e){lt.call(this,ks.Ua,t),this.size=e}qe(Bv,lt);function co(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return re.setTimeout(function(){t()},e)}var Zh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nO={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ef(){}ef.prototype.h=null;function Sp(t){return t.h||(t.h=t.i())}function iO(){}var uo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tf(){lt.call(this,"d")}qe(tf,lt);function nf(){lt.call(this,"c")}qe(nf,lt);var lu;function vl(){}qe(vl,ef);vl.prototype.g=function(){return new XMLHttpRequest};vl.prototype.i=function(){return{}};lu=new vl;function ho(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Lr(this),this.P=sO,t=ru?125:void 0,this.V=new _l(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Hv}function Hv(){this.i=null,this.g="",this.h=!1}var sO=45e3,cu={},ba={};z=ho.prototype;z.setTimeout=function(t){this.P=t};function uu(t,e,n){t.L=1,t.v=wl(kn(e)),t.s=n,t.S=!0,$v(t,null)}function $v(t,e){t.G=Date.now(),fo(t),t.A=kn(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),qv(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Hv,t.g=_0(t.l,n?e:null,!t.s),0<t.O&&(t.M=new J1(at(t.Pa,t,t.g),t.O)),Lv(t.U,t.g,"readystatechange",t.nb),e=t.I?Sv(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Fr(),Q1(t.j,t.u,t.A,t.m,t.W,t.s)}z.nb=function(t){t=t.target;const e=this.M;e&&rn(t)==3?e.l():this.Pa(t)};z.Pa=function(t){try{if(t==this.g)e:{const u=rn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ru||this.g&&(this.h.h||this.g.ja()||Op(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Fr(3):Fr(2)),El(this);var n=this.g.da();this.ca=n;t:if(Vv(this)){var i=Op(this.g);t="";var s=i.length,r=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),ur(this);var o="";break t}this.h.i=new re.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Z1(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pr(a)){var c=a;break t}}c=null}if(n=c)Ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hu(this,n);else{this.i=!1,this.o=3,dt(12),yi(this),ur(this);break e}}this.S?(Wv(this,u,o),ru&&this.i&&u==3&&(Lv(this.U,this.V,"tick",this.mb),this.V.start())):(Ji(this.j,this.m,o,null),hu(this,o)),u==4&&yi(this),this.i&&!this.J&&(u==4?d0(this.l,this):(this.i=!1,fo(this)))}else CO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),yi(this),ur(this)}}}catch{}finally{}};function Vv(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Wv(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=rO(t,n),s==ba){e==4&&(t.o=4,dt(14),i=!1),Ji(t.j,t.m,null,"[Incomplete Response]");break}else if(s==cu){t.o=4,dt(15),Ji(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ji(t.j,t.m,s,null),hu(t,s);Vv(t)&&s!=ba&&s!=cu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),cf(e),e.M=!0,dt(11))):(Ji(t.j,t.m,n,"[Invalid Chunked Response]"),yi(t),ur(t))}z.mb=function(){if(this.g){var t=rn(this.g),e=this.g.ja();this.C<e.length&&(El(this),Wv(this,t,e),this.i&&t!=4&&fo(this))}};function rO(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ba:(n=Number(e.substring(n,i)),isNaN(n)?cu:(i+=1,i+n>e.length?ba:(e=e.slice(i,i+n),t.C=i+n,e)))}z.cancel=function(){this.J=!0,yi(this)};function fo(t){t.Y=Date.now()+t.P,zv(t,t.P)}function zv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=co(at(t.lb,t),e)}function El(t){t.B&&(re.clearTimeout(t.B),t.B=null)}z.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(eO(this.j,this.A),this.L!=2&&(Fr(),dt(17)),yi(this),this.o=2,ur(this)):zv(this,this.Y-t)};function ur(t){t.l.H==0||t.J||d0(t.l,t)}function yi(t){El(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,qh(t.V),Fv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function hu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||fu(n.i,t))){if(!t.K&&fu(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Sa(n),Cl(n);else break e;lf(n),dt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=co(at(n.ib,n),6e3));if(1>=Zv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vi(n,11)}else if((t.K||n.g==t)&&Sa(n),!Pr(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.i;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(sf(r,r.h),r.h=null))}if(i.F){const _=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.Da=_,Ne(i.I,i.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=m0(i,i.J?i.pa:null,i.Y),o.K){e0(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(El(a),fo(a)),i.g=o}else h0(i);0<n.j.length&&Sl(n)}else c[0]!="stop"&&c[0]!="close"||vi(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?vi(n,7):af(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Fr(4)}catch{}}function oO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dl(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function aO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Kv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=aO(t),i=oO(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Gv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Si(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Si){this.h=t.h,Ta(this,t.j),this.s=t.s,this.g=t.g,Ca(this,t.m),this.l=t.l;var e=t.i,n=new Ur;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Rp(this,n),this.o=t.o}else t&&(e=String(t).match(Gv))?(this.h=!1,Ta(this,e[1]||"",!0),this.s=qs(e[2]||""),this.g=qs(e[3]||"",!0),Ca(this,e[4]),this.l=qs(e[5]||"",!0),Rp(this,e[6]||"",!0),this.o=qs(e[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}Si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Js(e,Ap,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Js(e,Ap,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Js(n,n.charAt(0)=="/"?hO:uO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Js(n,dO)),t.join("")};function kn(t){return new Si(t)}function Ta(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ca(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Rp(t,e,n){e instanceof Ur?(t.i=e,pO(t.i,t.h)):(n||(e=Js(e,fO)),t.i=new Ur(e,t.h))}function Ne(t,e,n){t.i.set(e,n)}function wl(t){return Ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ap=/[#\/\?@]/g,uO=/[#\?:]/g,hO=/[#\?]/g,fO=/[#\?@]/g,dO=/#/g;function Ur(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ai(t){t.g||(t.g=new Map,t.h=0,t.i&&lO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=Ur.prototype;z.add=function(t,e){ai(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yv(t,e){ai(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Xv(t,e){return ai(t),e=Ns(t,e),t.g.has(e)}z.forEach=function(t,e){ai(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};z.ta=function(){ai(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};z.Z=function(t){ai(this);let e=[];if(typeof t=="string")Xv(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};z.set=function(t,e){return ai(this),this.i=null,t=Ns(this,t),Xv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function qv(t,e,n){Yv(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),Hh(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function pO(t,e){e&&!t.j&&(ai(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Yv(this,i),qv(this,s,n))},t)),t.j=e}var gO=class{constructor(t,e){this.g=t,this.map=e}};function Jv(t){this.l=t||mO,re.PerformanceNavigationTiming?(t=re.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(re.g&&re.g.Ka&&re.g.Ka()&&re.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mO=10;function Qv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zv(t){return t.h?1:t.g?t.g.size:0}function fu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function sf(t,e){t.g?t.g.add(e):t.h=e}function e0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Jv.prototype.cancel=function(){if(this.i=t0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function t0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Hh(t.i)}var _O=class{stringify(t){return re.JSON.stringify(t,void 0)}parse(t){return re.JSON.parse(t,void 0)}};function yO(){this.g=new _O}function vO(t,e,n){const i=n||"";try{Kv(t,function(s,r){let o=s;ao(s)&&(o=Yh(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function EO(t,e){const n=new yl;if(re.Image){const i=new Image;i.onload=Do(Lo,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Do(Lo,n,i,"TestLoadImage: error",!1,e),i.onabort=Do(Lo,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Do(Lo,n,i,"TestLoadImage: timeout",!1,e),re.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Lo(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Il(t){this.l=t.fc||null,this.j=t.ob||!1}qe(Il,ef);Il.prototype.g=function(){return new bl(this.l,this.j)};Il.prototype.i=function(t){return function(){return t}}({});function bl(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=rf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(bl,Xe);var rf=0;z=bl.prototype;z.open=function(t,e){if(this.readyState!=rf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jr(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||re).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,po(this)),this.readyState=rf};z.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof re.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;n0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function n0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}z.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?po(this):jr(this),this.readyState==3&&n0(this)}};z.Za=function(t){this.g&&(this.response=this.responseText=t,po(this))};z.Ya=function(t){this.g&&(this.response=t,po(this))};z.ka=function(){this.g&&po(this)};function po(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jr(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wO=re.JSON.parse;function je(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=i0,this.L=this.M=!1}qe(je,Xe);var i0="",IO=/^https?$/i,bO=["POST","PUT"];z=je.prototype;z.Oa=function(t){this.M=t};z.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():lu.g(),this.C=this.u?Sp(this.u):Sp(lu),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){xp(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=re.FormData&&t instanceof re.FormData,!(0<=Iv(bO,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{o0(this),0<this.B&&((this.L=TO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=Jh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){xp(this,r)}};function TO(t){return kr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}z.ua=function(){typeof Bh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function xp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,s0(t),Tl(t)}function s0(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Tl(this))};z.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tl(this,!0)),je.$.N.call(this)};z.La=function(){this.s||(this.G||this.v||this.l?r0(this):this.kb())};z.kb=function(){r0(this)};function r0(t){if(t.h&&typeof Bh<"u"&&(!t.C[1]||rn(t)!=4||t.da()!=2)){if(t.v&&rn(t)==4)Jh(t.La,0,t);else if(et(t,"readystatechange"),rn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(Gv)[1]||null;!s&&re.self&&re.self.location&&(s=re.self.location.protocol.slice(0,-1)),i=!IO.test(s?s.toLowerCase():"")}n=i}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var r=2<rn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",s0(t)}}finally{Tl(t)}}}}function Tl(t,e){if(t.g){o0(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=i}catch{}}}function o0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(re.clearTimeout(t.A),t.A=null)}z.isActive=function(){return!!this.g};function rn(t){return t.g?t.g.readyState:0}z.da=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}};z.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wO(e)}};function Op(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case i0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function CO(t){const e={};t=(t.g&&2<=rn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(Pr(t[i]))continue;var n=Y1(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}H1(e,function(i){return i.join(", ")})}z.Ia=function(){return this.m};z.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function a0(t){let e="";return Vh(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function of(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=a0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ne(t,e,n))}function $s(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function l0(t){this.Ga=0,this.j=[],this.l=new yl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$s("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$s("baseRetryDelayMs",5e3,t),this.hb=$s("retryDelaySeedMs",1e4,t),this.eb=$s("forwardChannelMaxRetries",2,t),this.xa=$s("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Jv(t&&t.concurrentRequestLimit),this.Ja=new yO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}z=l0.prototype;z.ra=8;z.H=1;function af(t){if(c0(t),t.H==3){var e=t.W++,n=kn(t.I);if(Ne(n,"SID",t.K),Ne(n,"RID",e),Ne(n,"TYPE","terminate"),go(t,n),e=new ho(t,t.l,e),e.L=2,e.v=wl(kn(n)),n=!1,re.navigator&&re.navigator.sendBeacon)try{n=re.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&re.Image&&(new Image().src=e.v,n=!0),n||(e.g=_0(e.l,null),e.g.ha(e.v)),e.G=Date.now(),fo(e)}g0(t)}function Cl(t){t.g&&(cf(t),t.g.cancel(),t.g=null)}function c0(t){Cl(t),t.u&&(re.clearTimeout(t.u),t.u=null),Sa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&re.clearTimeout(t.m),t.m=null)}function Sl(t){if(!Qv(t.i)&&!t.m){t.m=!0;var e=t.Na;Dr||Dv(),Mr||(Dr(),Mr=!0),Xh.add(e,t),t.C=0}}function SO(t,e){return Zv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=co(at(t.Na,t,e),p0(t,t.C)),t.C++,!0)}z.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ho(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Sv(r),Rv(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=u0(this,s,e),n=kn(this.I),Ne(n,"RID",t),Ne(n,"CVER",22),this.F&&Ne(n,"X-HTTP-Session-Id",this.F),go(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(a0(r)))+"&"+e:this.o&&of(n,this.o,r)),sf(this.i,s),this.bb&&Ne(n,"TYPE","init"),this.P?(Ne(n,"$req",e),Ne(n,"SID","null"),s.aa=!0,uu(s,n,null)):uu(s,n,e),this.H=2}}else this.H==3&&(t?Pp(this,t):this.j.length==0||Qv(this.i)||Pp(this))};function Pp(t,e){var n;e?n=e.m:n=t.W++;const i=kn(t.I);Ne(i,"SID",t.K),Ne(i,"RID",n),Ne(i,"AID",t.V),go(t,i),t.o&&t.s&&of(i,t.o,t.s),n=new ho(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=u0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),sf(t.i,n),uu(n,i,e)}function go(t,e){t.na&&Vh(t.na,function(n,i){Ne(e,i,n)}),t.h&&Kv({},function(n,i){Ne(e,i,n)})}function u0(t,e,n){n=Math.min(t.j.length,n);var i=t.h?at(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=r,0>c)r=Math.max(0,s[l].g-100),a=!1;else try{vO(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function h0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Dr||Dv(),Mr||(Dr(),Mr=!0),Xh.add(e,t),t.A=0}}function lf(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=co(at(t.Ma,t),p0(t,t.A)),t.A++,!0)}z.Ma=function(){if(this.u=null,f0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=co(at(this.jb,this),t)}};z.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dt(10),Cl(this),f0(this))};function cf(t){t.B!=null&&(re.clearTimeout(t.B),t.B=null)}function f0(t){t.g=new ho(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kn(t.wa);Ne(e,"RID","rpc"),Ne(e,"SID",t.K),Ne(e,"AID",t.V),Ne(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ne(e,"TO",t.qa),Ne(e,"TYPE","xmlhttp"),go(t,e),t.o&&t.s&&of(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=wl(kn(e)),n.s=null,n.S=!0,$v(n,t)}z.ib=function(){this.v!=null&&(this.v=null,Cl(this),lf(this),dt(19))};function Sa(t){t.v!=null&&(re.clearTimeout(t.v),t.v=null)}function d0(t,e){var n=null;if(t.g==e){Sa(t),cf(t),t.g=null;var i=2}else if(fu(t.i,e))n=e.F,e0(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Qh(),et(i,new Bv(i,n)),Sl(t)}else h0(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&SO(t,e)||i==2&&lf(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:vi(t,5);break;case 4:vi(t,10);break;case 3:vi(t,6);break;default:vi(t,2)}}}function p0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=at(t.pb,t);n||(n=new Si("//www.google.com/images/cleardot.gif"),re.location&&re.location.protocol=="http"||Ta(n,"https"),wl(n)),EO(n.toString(),i)}else dt(2);t.H=0,t.h&&t.h.za(e),g0(t),c0(t)}z.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dt(2)):(this.l.info("Failed to ping google.com"),dt(1))};function g0(t){if(t.H=0,t.ma=[],t.h){const e=t0(t.i);(e.length!=0||t.j.length!=0)&&(Ep(t.ma,e),Ep(t.ma,t.j),t.i.i.length=0,Hh(t.j),t.j.length=0),t.h.ya()}}function m0(t,e,n){var i=n instanceof Si?kn(n):new Si(n);if(i.g!="")e&&(i.g=e+"."+i.g),Ca(i,i.m);else{var s=re.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Si(null);i&&Ta(r,i),e&&(r.g=e),s&&Ca(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&Ne(i,n,e),Ne(i,"VER",t.ra),go(t,i),i}function _0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new je(new Il({ob:!0})):new je(t.va),e.Oa(t.J),e}z.isActive=function(){return!!this.h&&this.h.isActive(this)};function y0(){}z=y0.prototype;z.Ba=function(){};z.Aa=function(){};z.za=function(){};z.ya=function(){};z.isActive=function(){return!0};z.Va=function(){};function Ft(t,e){Xe.call(this),this.g=new l0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Pr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ds(this)}qe(Ft,Xe);Ft.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=m0(t,null,t.Y),Sl(t)};Ft.prototype.close=function(){af(this.g)};Ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yh(t),t=n);e.j.push(new gO(e.fb++,t)),e.H==3&&Sl(e)};Ft.prototype.N=function(){this.g.h=null,delete this.j,af(this.g),delete this.g,Ft.$.N.call(this)};function v0(t){tf.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe(v0,tf);function E0(){nf.call(this),this.status=1}qe(E0,nf);function Ds(t){this.g=t}qe(Ds,y0);Ds.prototype.Ba=function(){et(this.g,"a")};Ds.prototype.Aa=function(t){et(this.g,new v0(t))};Ds.prototype.za=function(t){et(this.g,new E0)};Ds.prototype.ya=function(){et(this.g,"b")};function RO(){this.blockSize=-1}function dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(dn,RO);dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function oc(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)oc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){oc(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){oc(this,i),s=0;break}}this.h=s,this.i+=e};dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function be(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var AO={};function uf(t){return-128<=t&&128>t?M1(t,function(e){return new be([e|0],0>e?-1:0)}):new be([t|0],0>t?-1:0)}function on(t){if(isNaN(t)||!isFinite(t))return ls;if(0>t)return Qe(on(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=du;return new be(e,0)}function w0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Qe(w0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=on(Math.pow(e,8)),i=ls,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=on(Math.pow(e,r)),i=i.R(r).add(on(o))):(i=i.R(n),i=i.add(on(o)))}return i}var du=4294967296,ls=uf(0),pu=uf(1),kp=uf(16777216);z=be.prototype;z.ea=function(){if(Dt(this))return-Qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:du+i)*e,e*=du}return t};z.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Cn(this))return"0";if(Dt(this))return"-"+Qe(this).toString(t);for(var e=on(Math.pow(t,6)),n=this,i="";;){var s=Aa(n,e).g;n=Ra(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Cn(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};z.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Dt(t){return t.h==-1}z.X=function(t){return t=Ra(this,t),Dt(t)?-1:Cn(t)?0:1};function Qe(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new be(n,~t.h).add(pu)}z.abs=function(){return Dt(this)?Qe(this):this};z.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new be(n,n[n.length-1]&-2147483648?-1:0)};function Ra(t,e){return t.add(Qe(e))}z.R=function(t){if(Cn(this)||Cn(t))return ls;if(Dt(this))return Dt(t)?Qe(this).R(Qe(t)):Qe(Qe(this).R(t));if(Dt(t))return Qe(this.R(Qe(t)));if(0>this.X(kp)&&0>t.X(kp))return on(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,Fo(n,2*i+2*s),n[2*i+2*s+1]+=r*l,Fo(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Fo(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Fo(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new be(n,0)};function Fo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Vs(t,e){this.g=t,this.h=e}function Aa(t,e){if(Cn(e))throw Error("division by zero");if(Cn(t))return new Vs(ls,ls);if(Dt(t))return e=Aa(Qe(t),e),new Vs(Qe(e.g),Qe(e.h));if(Dt(e))return e=Aa(t,Qe(e)),new Vs(Qe(e.g),e.h);if(30<t.g.length){if(Dt(t)||Dt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pu,i=e;0>=i.X(t);)n=Np(n),i=Np(i);var s=Ki(n,1),r=Ki(i,1);for(i=Ki(i,2),n=Ki(n,2);!Cn(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=Ki(i,1),n=Ki(n,1)}return e=Ra(t,s.R(e)),new Vs(s,e)}for(s=ls;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=on(n),o=r.R(e);Dt(o)||0<o.X(t);)n-=i,r=on(n),o=r.R(e);Cn(r)&&(r=pu),s=s.add(r),t=Ra(t,o)}return new Vs(s,t)}z.gb=function(t){return Aa(this,t).h};z.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new be(n,this.h&t.h)};z.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new be(n,this.h|t.h)};z.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new be(n,this.h^t.h)};function Np(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new be(n,t.h)}function Ki(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new be(s,t.h)}Ft.prototype.send=Ft.prototype.u;Ft.prototype.open=Ft.prototype.m;Ft.prototype.close=Ft.prototype.close;Zh.NO_ERROR=0;Zh.TIMEOUT=8;Zh.HTTP_ERROR=6;nO.COMPLETE="complete";iO.EventType=uo;uo.OPEN="a";uo.CLOSE="b";uo.ERROR="c";uo.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;dn.prototype.digest=dn.prototype.l;dn.prototype.reset=dn.prototype.reset;dn.prototype.update=dn.prototype.j;be.prototype.add=be.prototype.add;be.prototype.multiply=be.prototype.R;be.prototype.modulo=be.prototype.gb;be.prototype.compare=be.prototype.X;be.prototype.toNumber=be.prototype.ea;be.prototype.toString=be.prototype.toString;be.prototype.getBits=be.prototype.D;be.fromNumber=on;be.fromString=w0;var xO=be;const Dp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new qr("@firebase/firestore");function Rt(t,...e){if(xa.logLevel<=Ee.DEBUG){const n=e.map(I0);xa.debug(`Firestore (${Rl}): ${t}`,...n)}}function hf(t,...e){if(xa.logLevel<=Ee.ERROR){const n=e.map(I0);xa.error(`Firestore (${Rl}): ${t}`,...n)}}function I0(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t="Unexpected state"){const e=`FIRESTORE (${Rl}) INTERNAL ASSERTION FAILED: `+t;throw hf(e),new Error(e)}function gu(t,e){t||b0()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class St extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class kO{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new cs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new cs,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{Rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new cs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(gu(typeof i.accessToken=="string"),new OO(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return gu(e===null||typeof e=="string"),new gt(e)}}class NO{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class DO{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new NO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LO{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&Rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,Rt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):Rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(gu(typeof n.token=="string"),this.T=n.token,new MO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=FO(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function T0(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,i,s,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mp,pe;(pe=Mp||(Mp={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new xO([4294967295,4294967295],0);function ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&Rt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new ff(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new St(Ct.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function HO(t,e){if(hf("AsyncQueue",`${e}: ${t}`),T0(t))return new St(Ct.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=UO.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Rt("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Rt("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new St(Ct.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=HO(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Map;function VO(t,e,n,i){if(e===!0&&i===!0)throw new St(Ct.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new St(Ct.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new St(Ct.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=C0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new St(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new St(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new St(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class WO{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new St(Ct.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new St(Ct.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new PO;switch(n.type){case"firstParty":return new DO(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new St(Ct.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Lp.get(e);n&&(Rt("ComponentProvider","Removing Datastore"),Lp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new BO(this,"async_queue_retry"),this.Xc=()=>{const n=ac();n&&Rt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=ac();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new cs;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!T0(e))throw e;Rt("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw hf("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=ff.createAndSchedule(this,e,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&b0()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class KO extends WO{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new zO,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||GO(this),this._firestoreClient.terminate()}}function GO(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new jO(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,C0(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new $O(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){Rl=n})(ri),hn(new Gt("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new KO(new kO(n.getProvider("auth-internal")),new LO(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new St(Ct.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oa(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Ot(Dp,"3.12.1",t),Ot(Dp,"3.12.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="firebasestorage.googleapis.com",YO="storageBucket",XO=2*60*1e3,qO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends mn{constructor(e,n,i=0){super(lc(e),`Firebase Storage: ${n} (${lc(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_n.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pn||(pn={}));function lc(t){return"storage/"+t}function JO(){const t="An unknown error occurred, please check the error payload for server response.";return new _n(pn.UNKNOWN,t)}function QO(){return new _n(pn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZO(){return new _n(pn.CANCELED,"User canceled the upload/download.")}function eP(t){return new _n(pn.INVALID_URL,"Invalid URL '"+t+"'.")}function tP(t){return new _n(pn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Up(t){return new _n(pn.INVALID_ARGUMENT,t)}function R0(){return new _n(pn.APP_DELETED,"The Firebase app was deleted.")}function nP(t){return new _n(pn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(i.path==="")return i;throw tP(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(v){v.path_=decodeURIComponent(v.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),p={bucket:1,path:3},_=n===S0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",E=new RegExp(`^https?://${_}/${s}/${w}`,"i"),T=[{regex:a,indices:l,postModify:r},{regex:d,indices:p,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let v=0;v<T.length;v++){const C=T[v],S=C.regex.exec(e);if(S){const O=S[C.indices.bucket];let I=S[C.indices.path];I||(I=""),i=new Wt(O,I),C.postModify(i);break}}if(i==null)throw eP(e);return i}}class iP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,t(d,l())},w)}function f(){r&&clearTimeout(r)}function d(w,...E){if(c){f();return}if(w){f(),u.call(null,w,...E);return}if(l()||o){f(),u.call(null,w,...E);return}i<64&&(i*=2);let T;a===1?(a=2,T=0):T=(i+Math.random())*1e3,h(T)}let p=!1;function _(w){p||(p=!0,f(),!c&&(s!==null?(w||(a=2),clearTimeout(s),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function rP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){return t!==void 0}function jp(t,e,n,i){if(i<e)throw Up(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Up(`Invalid value for '${t}'. Expected ${n} or less.`)}function aP(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pa||(Pa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,i,s,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Uo(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Pa.NO_ERROR,l=r.getStatus();if(!a||lP(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Pa.ABORT;i(!1,new Uo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new Uo(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oP(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=JO();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?R0():ZO();o(l)}else{const l=QO();o(l)}};this.canceled_?n(!1,new Uo(!1,null,!0)):this.backoffId_=sP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uo{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function uP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pP(t,e,n,i,s,r,o=!0){const a=aP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return fP(c,e),uP(c,n),hP(c,r),dP(c,i),new cP(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ka(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mP(this._location.path)}get storage(){return this._service}get parent(){const e=gP(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new ka(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nP(e)}}function Bp(t,e){const n=e==null?void 0:e[YO];return n==null?null:Wt.makeFromBucketSpec(n,t)}class _P{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=S0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XO,this._maxUploadRetryTime=qO,this._requests=new Set,s!=null?this._bucket=Wt.makeFromBucketSpec(s,this._host):this._bucket=Bp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=Bp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){jp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){jp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ka(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new iP(R0());{const o=pP(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Hp="@firebase/storage",$p="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="storage";function vP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new _P(n,i,s,e,ri)}function EP(){hn(new Gt(yP,vP,"PUBLIC").setMultipleInstances(!0)),Ot(Hp,$p,""),Ot(Hp,$p,"esm2017")}EP();function wP(t){return(e,n)=>{const i=C1(e,n).run(()=>Ue(t));wv.set(e,i),R1(i,e)}}function A0(t){return T1?Fh(Uh(t)):null}function IP(t,{firebaseApp:e,modules:n=[]}){t.provide(Ev,e);for(const i of n)t.use(i.bind(null,e))}/*!
  * vue-router v4.2.1
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yi=typeof window<"u";function bP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function cc(t,e){const n={};for(const i in e){const s=e[i];n[i]=Xt(s)?s.map(t):t(s)}return n}const hr=()=>{},Xt=Array.isArray,TP=/\/$/,CP=t=>t.replace(TP,"");function uc(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=xP(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function SP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function RP(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&vs(e.matched[i],n.matched[s])&&x0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function x0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!AP(t[n],e[n]))return!1;return!0}function AP(t,e){return Xt(t)?Wp(t,e):Xt(e)?Wp(e,t):t===e}function Wp(t,e){return Xt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function xP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Br;(function(t){t.pop="pop",t.push="push"})(Br||(Br={}));var fr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fr||(fr={}));function OP(t){if(!t)if(Yi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),CP(t)}const PP=/^[^#]+#/;function kP(t,e){return t.replace(PP,"#")+e}function NP(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Al=()=>({left:window.pageXOffset,top:window.pageYOffset});function DP(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=NP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zp(t,e){return(history.state?history.state.position-e:-1)+t}const mu=new Map;function MP(t,e){mu.set(t,e)}function LP(t){const e=mu.get(t);return mu.delete(t),e}let FP=()=>location.protocol+"//"+location.host;function O0(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Vp(l,"")}return Vp(n,t)+i+s}function UP(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=O0(t,location),p=n.value,_=e.value;let w=0;if(f){if(n.value=d,e.value=f,o&&o===p){o=null;return}w=_?f.position-_.position:0}else i(d);s.forEach(E=>{E(n.value,p,{delta:w,type:Br.pop,direction:w?w>0?fr.forward:fr.back:fr.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const p=s.indexOf(f);p>-1&&s.splice(p,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ie({},f.state,{scroll:Al()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Kp(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Al():null}}function jP(t){const{history:e,location:n}=window,i={value:O0(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:FP()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ie({},e.state,Kp(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Ie({},s.value,e.state,{forward:l,scroll:Al()});r(u.current,u,!0);const h=Ie({},Kp(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function BP(t){t=OP(t);const e=jP(t),n=UP(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Ie({location:"",base:t,go:i,createHref:kP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function HP(t){return typeof t=="string"||t&&typeof t=="object"}function P0(t){return typeof t=="string"||typeof t=="symbol"}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},k0=Symbol("");var Gp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gp||(Gp={}));function Es(t,e){return Ie(new Error,{type:t,[k0]:!0},e)}function yn(t,e){return t instanceof Error&&k0 in t&&(e==null||!!(t.type&e))}const Yp="[^/]+?",$P={sensitive:!1,strict:!1,start:!0,end:!0},VP=/[.+*?^${}()[\]/\\]/g;function WP(t,e){const n=Ie({},$P,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(VP,"\\$&"),d+=40;else if(f.type===1){const{value:p,repeatable:_,optional:w,regexp:E}=f;r.push({name:p,repeatable:_,optional:w});const m=E||Yp;if(m!==Yp){d+=10;try{new RegExp(`(${m})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${p}" (${m}): `+v.message)}}let T=_?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;h||(T=w&&c.length<2?`(?:/${T})`:"/"+T),w&&(T+="?"),s+=T,d+=20,w&&(d+=-8),_&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",p=r[f-1];h[p.name]=d&&p.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:p,repeatable:_,optional:w}=d,E=p in c?c[p]:"";if(Xt(E)&&!_)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const m=Xt(E)?E.join("/"):E;if(!m)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${p}"`);u+=m}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function zP(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function KP(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=zP(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Xp(i))return 1;if(Xp(s))return-1}return s.length-i.length}function Xp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const GP={type:0,value:""},YP=/[a-zA-Z0-9_]/;function XP(t){if(!t)return[[]];if(t==="/")return[[GP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:YP.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function qP(t,e,n){const i=WP(XP(t.path),n),s=Ie(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function JP(t,e){const n=[],i=new Map;e=Qp({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,h,f){const d=!f,p=QP(u);p.aliasOf=f&&f.record;const _=Qp(e,u),w=[p];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of T)w.push(Ie({},p,{components:f?f.record.components:p.components,path:v,aliasOf:f?f.record:p}))}let E,m;for(const T of w){const{path:v}=T;if(h&&v[0]!=="/"){const C=h.record.path,S=C[C.length-1]==="/"?"":"/";T.path=h.record.path+(v&&S+v)}if(E=qP(T,h,_),f?f.alias.push(E):(m=m||E,m!==E&&m.alias.push(E),d&&u.name&&!Jp(E)&&o(u.name)),p.children){const C=p.children;for(let S=0;S<C.length;S++)r(C[S],E,f&&f.children[S])}f=f||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return m?()=>{o(m)}:hr}function o(u){if(P0(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&KP(u,n[h])>=0&&(u.record.path!==n[h].record.path||!N0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Jp(u)&&i.set(u.record.name,u)}function c(u,h){let f,d={},p,_;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Es(1,{location:u});_=f.record.name,d=Ie(qp(h.params,f.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&qp(u.params,f.keys.map(m=>m.name))),p=f.stringify(d)}else if("path"in u)p=u.path,f=n.find(m=>m.re.test(p)),f&&(d=f.parse(p),_=f.record.name);else{if(f=h.name?i.get(h.name):n.find(m=>m.re.test(h.path)),!f)throw Es(1,{location:u,currentLocation:h});_=f.record.name,d=Ie({},h.params,u.params),p=f.stringify(d)}const w=[];let E=f;for(;E;)w.unshift(E.record),E=E.parent;return{name:_,path:p,params:d,matched:w,meta:ek(w)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function qp(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function QP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ZP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ZP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Jp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ek(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Qp(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function N0(t,e){return e.children.some(n=>n===t||N0(t,n))}const D0=/#/g,tk=/&/g,nk=/\//g,ik=/=/g,sk=/\?/g,M0=/\+/g,rk=/%5B/g,ok=/%5D/g,L0=/%5E/g,ak=/%60/g,F0=/%7B/g,lk=/%7C/g,U0=/%7D/g,ck=/%20/g;function df(t){return encodeURI(""+t).replace(lk,"|").replace(rk,"[").replace(ok,"]")}function uk(t){return df(t).replace(F0,"{").replace(U0,"}").replace(L0,"^")}function _u(t){return df(t).replace(M0,"%2B").replace(ck,"+").replace(D0,"%23").replace(tk,"%26").replace(ak,"`").replace(F0,"{").replace(U0,"}").replace(L0,"^")}function hk(t){return _u(t).replace(ik,"%3D")}function fk(t){return df(t).replace(D0,"%23").replace(sk,"%3F")}function dk(t){return t==null?"":fk(t).replace(nk,"%2F")}function Na(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function pk(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(M0," "),o=r.indexOf("="),a=Na(o<0?r:r.slice(0,o)),l=o<0?null:Na(r.slice(o+1));if(a in e){let c=e[a];Xt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zp(t){let e="";for(let n in t){const i=t[n];if(n=hk(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(i)?i.map(r=>r&&_u(r)):[i&&_u(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function gk(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Xt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const mk=Symbol(""),eg=Symbol(""),xl=Symbol(""),pf=Symbol(""),yu=Symbol("");function Ws(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vn(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Es(4,{from:n,to:e})):h instanceof Error?a(h):HP(h)?a(Es(2,{from:e,to:h})):(r&&i.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(i&&i.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function hc(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(_k(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Vn(c,n,i,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=bP(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Vn(f,n,i,r,o)()}))}}return s}function _k(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tg(t){const e=xt(xl),n=xt(pf),i=Tt(()=>e.resolve(ue(t.to))),s=Tt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(vs.bind(null,u));if(f>-1)return f;const d=ng(l[c-2]);return c>1&&ng(u)===d&&h[h.length-1].path!==d?h.findIndex(vs.bind(null,l[c-2])):f}),r=Tt(()=>s.value>-1&&wk(n.params,i.value.params)),o=Tt(()=>s.value>-1&&s.value===n.matched.length-1&&x0(n.params,i.value.params));function a(l={}){return Ek(l)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(hr):Promise.resolve()}return{route:i,href:Tt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}const yk=ut({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tg,setup(t,{slots:e}){const n=Ts(tg(t)),{options:i}=xt(xl),s=Tt(()=>({[ig(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ig(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ds("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),vk=yk;function Ek(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wk(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Xt(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function ng(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ig=(t,e,n)=>t??e??n,Ik=ut({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=xt(yu),s=Tt(()=>t.route||i.value),r=xt(eg,0),o=Tt(()=>{let c=ue(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Tt(()=>s.value.matched[o.value]);nr(eg,Tt(()=>o.value+1)),nr(mk,a),nr(yu,s);const l=Ue();return an(()=>[l.value,a.value,t.name],([c,u,h],[f,d,p])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!vs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return sg(n.default,{Component:f,route:c});const d=h.props[u],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=ds(f,Ie({},p,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return sg(n.default,{Component:w,route:c})||w}}});function sg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const j0=Ik;function bk(t){const e=JP(t.routes,t),n=t.parseQuery||pk,i=t.stringifyQuery||Zp,s=t.history,r=Ws(),o=Ws(),a=Ws(),l=Hg(Bn);let c=Bn;Yi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cc.bind(null,x=>""+x),h=cc.bind(null,dk),f=cc.bind(null,Na);function d(x,Y){let V,Z;return P0(x)?(V=e.getRecordMatcher(x),Z=Y):Z=x,e.addRoute(Z,V)}function p(x){const Y=e.getRecordMatcher(x);Y&&e.removeRoute(Y)}function _(){return e.getRoutes().map(x=>x.record)}function w(x){return!!e.getRecordMatcher(x)}function E(x,Y){if(Y=Ie({},Y||l.value),typeof x=="string"){const b=uc(n,x,Y.path),R=e.resolve({path:b.path},Y),k=s.createHref(b.fullPath);return Ie(b,R,{params:f(R.params),hash:Na(b.hash),redirectedFrom:void 0,href:k})}let V;if("path"in x)V=Ie({},x,{path:uc(n,x.path,Y.path).path});else{const b=Ie({},x.params);for(const R in b)b[R]==null&&delete b[R];V=Ie({},x,{params:h(b)}),Y.params=h(Y.params)}const Z=e.resolve(V,Y),ve=x.hash||"";Z.params=u(f(Z.params));const g=SP(i,Ie({},x,{hash:uk(ve),path:Z.path})),y=s.createHref(g);return Ie({fullPath:g,hash:ve,query:i===Zp?gk(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:y})}function m(x){return typeof x=="string"?uc(n,x,l.value.path):Ie({},x)}function T(x,Y){if(c!==x)return Es(8,{from:Y,to:x})}function v(x){return O(x)}function C(x){return v(Ie(m(x),{replace:!0}))}function S(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:V}=Y;let Z=typeof V=="function"?V(x):V;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=m(Z):{path:Z},Z.params={}),Ie({query:x.query,hash:x.hash,params:"path"in Z?{}:x.params},Z)}}function O(x,Y){const V=c=E(x),Z=l.value,ve=x.state,g=x.force,y=x.replace===!0,b=S(V);if(b)return O(Ie(m(b),{state:typeof b=="object"?Ie({},ve,b.state):ve,force:g,replace:y}),Y||V);const R=V;R.redirectedFrom=Y;let k;return!g&&RP(i,Z,V)&&(k=Es(16,{to:R,from:Z}),se(Z,Z,!0,!1)),(k?Promise.resolve(k):D(R,Z)).catch(N=>yn(N)?yn(N,2)?N:ne(N):L(N,R,Z)).then(N=>{if(N){if(yn(N,2))return O(Ie({replace:y},m(N.to),{state:typeof N.to=="object"?Ie({},ve,N.to.state):ve,force:g}),Y||R)}else N=U(R,Z,!0,y,ve);return K(R,Z,N),N})}function I(x,Y){const V=T(x,Y);return V?Promise.reject(V):Promise.resolve()}function P(x){const Y=Mn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function D(x,Y){let V;const[Z,ve,g]=Tk(x,Y);V=hc(Z.reverse(),"beforeRouteLeave",x,Y);for(const b of Z)b.leaveGuards.forEach(R=>{V.push(Vn(R,x,Y))});const y=I.bind(null,x,Y);return V.push(y),tt(V).then(()=>{V=[];for(const b of r.list())V.push(Vn(b,x,Y));return V.push(y),tt(V)}).then(()=>{V=hc(ve,"beforeRouteUpdate",x,Y);for(const b of ve)b.updateGuards.forEach(R=>{V.push(Vn(R,x,Y))});return V.push(y),tt(V)}).then(()=>{V=[];for(const b of x.matched)if(b.beforeEnter&&!Y.matched.includes(b))if(Xt(b.beforeEnter))for(const R of b.beforeEnter)V.push(Vn(R,x,Y));else V.push(Vn(b.beforeEnter,x,Y));return V.push(y),tt(V)}).then(()=>(x.matched.forEach(b=>b.enterCallbacks={}),V=hc(g,"beforeRouteEnter",x,Y),V.push(y),tt(V))).then(()=>{V=[];for(const b of o.list())V.push(Vn(b,x,Y));return V.push(y),tt(V)}).catch(b=>yn(b,8)?b:Promise.reject(b))}function K(x,Y,V){for(const Z of a.list())P(()=>Z(x,Y,V))}function U(x,Y,V,Z,ve){const g=T(x,Y);if(g)return g;const y=Y===Bn,b=Yi?history.state:{};V&&(Z||y?s.replace(x.fullPath,Ie({scroll:y&&b&&b.scroll},ve)):s.push(x.fullPath,ve)),l.value=x,se(x,Y,V,y),ne()}let q;function j(){q||(q=s.listen((x,Y,V)=>{if(!mo.listening)return;const Z=E(x),ve=S(Z);if(ve){O(Ie(ve,{replace:!0}),Z).catch(hr);return}c=Z;const g=l.value;Yi&&MP(zp(g.fullPath,V.delta),Al()),D(Z,g).catch(y=>yn(y,12)?y:yn(y,2)?(O(y.to,Z).then(b=>{yn(b,20)&&!V.delta&&V.type===Br.pop&&s.go(-1,!1)}).catch(hr),Promise.reject()):(V.delta&&s.go(-V.delta,!1),L(y,Z,g))).then(y=>{y=y||U(Z,g,!1),y&&(V.delta&&!yn(y,8)?s.go(-V.delta,!1):V.type===Br.pop&&yn(y,20)&&s.go(-1,!1)),K(Z,g,y)}).catch(hr)}))}let le=Ws(),F=Ws(),A;function L(x,Y,V){ne(x);const Z=F.list();return Z.length?Z.forEach(ve=>ve(x,Y,V)):console.error(x),Promise.reject(x)}function me(){return A&&l.value!==Bn?Promise.resolve():new Promise((x,Y)=>{le.add([x,Y])})}function ne(x){return A||(A=!x,j(),le.list().forEach(([Y,V])=>x?V(x):Y()),le.reset()),x}function se(x,Y,V,Z){const{scrollBehavior:ve}=t;if(!Yi||!ve)return Promise.resolve();const g=!V&&LP(zp(x.fullPath,0))||(Z||!V)&&history.state&&history.state.scroll||null;return Wa().then(()=>ve(x,Y,g)).then(y=>y&&DP(y)).catch(y=>L(y,x,Y))}const Le=x=>s.go(x);let Ut;const Mn=new Set,mo={currentRoute:l,listening:!0,addRoute:d,removeRoute:p,hasRoute:w,getRoutes:_,resolve:E,options:t,push:v,replace:C,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:F.add,isReady:me,install(x){const Y=this;x.component("RouterLink",vk),x.component("RouterView",j0),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(l)}),Yi&&!Ut&&l.value===Bn&&(Ut=!0,v(s.location).catch(ve=>{}));const V={};for(const ve in Bn)V[ve]=Tt(()=>l.value[ve]);x.provide(xl,Y),x.provide(pf,Ts(V)),x.provide(yu,l);const Z=x.unmount;Mn.add(x),x.unmount=function(){Mn.delete(x),Mn.size<1&&(c=Bn,q&&q(),q=null,l.value=Bn,Ut=!1,A=!1),Z()}}};function tt(x){return x.reduce((Y,V)=>Y.then(()=>P(V)),Promise.resolve())}return mo}function Tk(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>vs(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vs(c,l))||s.push(l))}return[n,i,s]}function B0(){return xt(xl)}function Ck(){return xt(pf)}const dr=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ol=(t,e,n,i="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;i=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),l=s.pop(),c={provider:s.length>0?s[0]:i,prefix:l,name:a};return e&&!Go(c)?null:c}const r=s[0],o=r.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!Go(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:r};return e&&!Go(a,n)?null:a}return null},Go=(t,e)=>t?!!((t.provider===""||t.provider.match(dr))&&(e&&t.prefix===""||t.prefix.match(dr))&&t.name.match(dr)):!1,H0=Object.freeze({left:0,top:0,width:16,height:16}),Da=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Pl=Object.freeze({...H0,...Da}),vu=Object.freeze({...Pl,body:"",hidden:!1});function Sk(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function rg(t,e){const n=Sk(t,e);for(const i in vu)i in Da?i in t&&!(i in n)&&(n[i]=Da[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function Rk(t,e){const n=t.icons,i=t.aliases||Object.create(null),s=Object.create(null);function r(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=i[o]&&i[o].parent,l=a&&r(a);l&&(s[o]=[a].concat(l))}return s[o]}return(e||Object.keys(n).concat(Object.keys(i))).forEach(r),s}function Ak(t,e,n){const i=t.icons,s=t.aliases||Object.create(null);let r={};function o(a){r=rg(i[a]||s[a],r)}return o(e),n.forEach(o),rg(t,r)}function $0(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const i=Rk(t);for(const s in i){const r=i[s];r&&(e(s,Ak(t,s,r)),n.push(s))}return n}const xk={provider:"",aliases:{},not_found:{},...H0};function fc(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function V0(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!fc(t,xk))return null;const n=e.icons;for(const s in n){const r=n[s];if(!s.match(dr)||typeof r.body!="string"||!fc(r,vu))return null}const i=e.aliases||Object.create(null);for(const s in i){const r=i[s],o=r.parent;if(!s.match(dr)||typeof o!="string"||!n[o]&&!i[o]||!fc(r,vu))return null}return e}const og=Object.create(null);function Ok(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Fi(t,e){const n=og[t]||(og[t]=Object.create(null));return n[e]||(n[e]=Ok(t,e))}function gf(t,e){return V0(e)?$0(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function Pk(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Hr=!1;function W0(t){return typeof t=="boolean"&&(Hr=t),Hr}function kk(t){const e=typeof t=="string"?Ol(t,!0,Hr):t;if(e){const n=Fi(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Nk(t,e){const n=Ol(t,!0,Hr);if(!n)return!1;const i=Fi(n.provider,n.prefix);return Pk(i,n.name,e)}function Dk(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Hr&&!e&&!t.prefix){let s=!1;return V0(t)&&(t.prefix="",$0(t,(r,o)=>{o&&Nk(r,o)&&(s=!0)})),s}const n=t.prefix;if(!Go({provider:e,prefix:n,name:"a"}))return!1;const i=Fi(e,n);return!!gf(i,t)}const z0=Object.freeze({width:null,height:null}),K0=Object.freeze({...z0,...Da}),Mk=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Lk=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ag(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(Mk);if(i===null||!i.length)return t;const s=[];let r=i.shift(),o=Lk.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?s.push(r):s.push(Math.ceil(a*e*n)/n)}else s.push(r);if(r=i.shift(),r===void 0)return s.join("");o=!o}}const Fk=t=>t==="unset"||t==="undefined"||t==="none";function Uk(t,e){const n={...Pl,...t},i={...K0,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(p=>{const _=[],w=p.hFlip,E=p.vFlip;let m=p.rotate;w?E?m+=2:(_.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),_.push("scale(-1 1)"),s.top=s.left=0):E&&(_.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),_.push("scale(1 -1)"),s.top=s.left=0);let T;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:T=s.height/2+s.top,_.unshift("rotate(90 "+T.toString()+" "+T.toString()+")");break;case 2:_.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:T=s.width/2+s.left,_.unshift("rotate(-90 "+T.toString()+" "+T.toString()+")");break}m%2===1&&(s.left!==s.top&&(T=s.left,s.left=s.top,s.top=T),s.width!==s.height&&(T=s.width,s.width=s.height,s.height=T)),_.length&&(r='<g transform="'+_.join(" ")+'">'+r+"</g>")});const o=i.width,a=i.height,l=s.width,c=s.height;let u,h;o===null?(h=a===null?"1em":a==="auto"?c:a,u=ag(h,l/c)):(u=o==="auto"?l:o,h=a===null?ag(u,c/l):a==="auto"?c:a);const f={},d=(p,_)=>{Fk(_)||(f[p]=_.toString())};return d("width",u),d("height",h),f.viewBox=s.left.toString()+" "+s.top.toString()+" "+l.toString()+" "+c.toString(),{attributes:f,body:r}}const jk=/\sid="(\S+)"/g,Bk="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Hk=0;function $k(t,e=Bk){const n=[];let i;for(;i=jk.exec(t);)n.push(i[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const o=typeof e=="function"?e(r):e+(Hk++).toString(),a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Eu=Object.create(null);function Vk(t,e){Eu[t]=e}function wu(t){return Eu[t]||Eu[""]}function mf(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const _f=Object.create(null),zs=["https://api.simplesvg.com","https://api.unisvg.com"],Yo=[];for(;zs.length>0;)zs.length===1||Math.random()>.5?Yo.push(zs.shift()):Yo.push(zs.pop());_f[""]=mf({resources:["https://api.iconify.design"].concat(Yo)});function Wk(t,e){const n=mf(e);return n===null?!1:(_f[t]=n,!0)}function yf(t){return _f[t]}const zk=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let lg=zk();function Kk(t,e){const n=yf(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const r=e+".json?icons=";i=n.maxURL-s-n.path.length-r.length}return i}function Gk(t){return t===404}const Yk=(t,e,n)=>{const i=[],s=Kk(t,e),r="icons";let o={type:r,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,c)=>{a+=l.length+1,a>=s&&c>0&&(i.push(o),o={type:r,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function Xk(t){if(typeof t=="string"){const e=yf(t);if(e)return e.path}return"/"}const qk=(t,e,n)=>{if(!lg){n("abort",424);return}let i=Xk(e.provider);switch(e.type){case"icons":{const r=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});i+=r+".json?"+l.toString();break}case"custom":{const r=e.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let s=503;lg(t+i).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{n(Gk(o)?"abort":"next",o)});return}return s=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",s)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",s)})},Jk={prepare:Yk,send:qk};function Qk(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,r)=>s.provider!==r.provider?s.provider.localeCompare(r.provider):s.prefix!==r.prefix?s.prefix.localeCompare(r.prefix):s.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(s=>{if(i.name===s.name&&i.prefix===s.prefix&&i.provider===s.provider)return;i=s;const r=s.provider,o=s.prefix,a=s.name,l=n[r]||(n[r]=Object.create(null)),c=l[o]||(l[o]=Fi(r,o));let u;a in c.icons?u=e.loaded:o===""||c.missing.has(a)?u=e.missing:u=e.pending;const h={provider:r,prefix:o,name:a};u.push(h)}),e}function G0(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(s=>s.id!==e))})}function Zk(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,s=t.prefix;e.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==s)return!0;const c=l.name;if(t.icons[c])o.loaded.push({provider:i,prefix:s,name:c});else if(t.missing.has(c))o.missing.push({provider:i,prefix:s,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||G0([t],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let eN=0;function tN(t,e,n){const i=eN++,s=G0.bind(null,n,i);if(!e.pending.length)return s;const r={id:i,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),s}function nN(t,e=!0,n=!1){const i=[];return t.forEach(s=>{const r=typeof s=="string"?Ol(s,e,n):s;r&&i.push(r)}),i}var iN={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function sN(t,e,n,i){const s=t.resources.length,r=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let S=t.resources.slice(0);for(o=[];S.length>1;){const O=Math.floor(Math.random()*S.length);o.push(S[O]),S=S.slice(0,O).concat(S.slice(O+1))}o=o.concat(S)}else o=t.resources.slice(r).concat(t.resources.slice(0,r));const a=Date.now();let l="pending",c=0,u,h=null,f=[],d=[];typeof i=="function"&&d.push(i);function p(){h&&(clearTimeout(h),h=null)}function _(){l==="pending"&&(l="aborted"),p(),f.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),f=[]}function w(S,O){O&&(d=[]),typeof S=="function"&&d.push(S)}function E(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:w,abort:_}}function m(){l="failed",d.forEach(S=>{S(void 0,u)})}function T(){f.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),f=[]}function v(S,O,I){const P=O!=="success";switch(f=f.filter(D=>D!==S),l){case"pending":break;case"failed":if(P||!t.dataAfterTimeout)return;break;default:return}if(O==="abort"){u=I,m();return}if(P){u=I,f.length||(o.length?C():m());return}if(p(),T(),!t.random){const D=t.resources.indexOf(S.resource);D!==-1&&D!==t.index&&(t.index=D)}l="completed",d.forEach(D=>{D(I)})}function C(){if(l!=="pending")return;p();const S=o.shift();if(S===void 0){if(f.length){h=setTimeout(()=>{p(),l==="pending"&&(T(),m())},t.timeout);return}m();return}const O={status:"pending",resource:S,callback:(I,P)=>{v(O,I,P)}};f.push(O),c++,h=setTimeout(C,t.rotate),n(S,e,O.callback)}return setTimeout(C),E}function Y0(t){const e={...iN,...t};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function s(a,l,c){const u=sN(e,a,l,(h,f)=>{i(),c&&c(h,f)});return n.push(u),u}function r(a){return n.find(l=>a(l))||null}return{query:s,find:r,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:i}}function cg(){}const dc=Object.create(null);function rN(t){if(!dc[t]){const e=yf(t);if(!e)return;const n=Y0(e),i={config:e,redundancy:n};dc[t]=i}return dc[t]}function oN(t,e,n){let i,s;if(typeof t=="string"){const r=wu(t);if(!r)return n(void 0,424),cg;s=r.send;const o=rN(t);o&&(i=o.redundancy)}else{const r=mf(t);if(r){i=Y0(r);const o=t.resources?t.resources[0]:"",a=wu(o);a&&(s=a.send)}}return!i||!s?(n(void 0,424),cg):i.query(e,s,n)().abort}const ug="iconify2",$r="iconify",X0=$r+"-count",hg=$r+"-version",q0=36e5,aN=168;function Iu(t,e){try{return t.getItem(e)}catch{}}function vf(t,e,n){try{return t.setItem(e,n),!0}catch{}}function fg(t,e){try{t.removeItem(e)}catch{}}function bu(t,e){return vf(t,X0,e.toString())}function Tu(t){return parseInt(Iu(t,X0))||0}const kl={local:!0,session:!0},J0={local:new Set,session:new Set};let Ef=!1;function lN(t){Ef=t}let jo=typeof window>"u"?{}:window;function Q0(t){const e=t+"Storage";try{if(jo&&jo[e]&&typeof jo[e].length=="number")return jo[e]}catch{}kl[t]=!1}function Z0(t,e){const n=Q0(t);if(!n)return;const i=Iu(n,hg);if(i!==ug){if(i){const a=Tu(n);for(let l=0;l<a;l++)fg(n,$r+l.toString())}vf(n,hg,ug),bu(n,0);return}const s=Math.floor(Date.now()/q0)-aN,r=a=>{const l=$r+a.toString(),c=Iu(n,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>s&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}fg(n,l)}};let o=Tu(n);for(let a=o-1;a>=0;a--)r(a)||(a===o-1?(o--,bu(n,o)):J0[t].add(a))}function eE(){if(!Ef){lN(!0);for(const t in kl)Z0(t,e=>{const n=e.data,i=e.provider,s=n.prefix,r=Fi(i,s);if(!gf(r,n).length)return!1;const o=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function cN(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const i in kl)Z0(i,s=>{const r=s.data;return s.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===e});return!0}function uN(t,e){Ef||eE();function n(i){let s;if(!kl[i]||!(s=Q0(i)))return;const r=J0[i];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=Tu(s),!bu(s,o+1))return;const a={cached:Math.floor(Date.now()/q0),provider:t.provider,data:e};return vf(s,$r+o.toString(),JSON.stringify(a))}e.lastModified&&!cN(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function dg(){}function hN(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Zk(t)}))}function fN(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,s=t.iconsToLoad;delete t.iconsToLoad;let r;if(!s||!(r=wu(n)))return;r.prepare(n,i,s).forEach(a=>{oN(n,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=gf(t,l);if(!c.length)return;const u=t.pendingIcons;u&&c.forEach(h=>{u.delete(h)}),uN(t,l)}catch(c){console.error(c)}hN(t)})})}))}const dN=(t,e)=>{const n=nN(t,!0,W0()),i=Qk(n);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,dg)}),()=>{l=!1}}const s=Object.create(null),r=[];let o,a;return i.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,r.push(Fi(c,u));const h=s[c]||(s[c]=Object.create(null));h[u]||(h[u]=[])}),i.pending.forEach(l=>{const{provider:c,prefix:u,name:h}=l,f=Fi(c,u),d=f.pendingIcons||(f.pendingIcons=new Set);d.has(h)||(d.add(h),s[c][u].push(h))}),r.forEach(l=>{const{provider:c,prefix:u}=l;s[c][u].length&&fN(l,s[c][u])}),e?tN(e,i,r):dg};function pN(t,e){const n={...t};for(const i in e){const s=e[i],r=typeof s;i in z0?(s===null||s&&(r==="string"||r==="number"))&&(n[i]=s):r===typeof n[i]&&(n[i]=i==="rotate"?s%4:s)}return n}const gN=/[\s,]+/;function mN(t,e){e.split(gN).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function _N(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:i(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/s,r%1===0?i(r):0)}}return e}function yN(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function vN(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function EN(t){return"data:image/svg+xml,"+vN(t)}function wN(t){return'url("'+EN(t)+'")'}const pg={...K0,inline:!1},IN={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},bN={display:"inline-block"},Cu={backgroundColor:"currentColor"},tE={backgroundColor:"transparent"},gg={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},mg={webkitMask:Cu,mask:Cu,background:tE};for(const t in mg){const e=mg[t];for(const n in gg)e[t+n]=gg[n]}const Xo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Xo[t+"-flip"]=e,Xo[t.slice(0,1)+"-flip"]=e,Xo[t+"Flip"]=e});function _g(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const yg=(t,e)=>{const n=pN(pg,e),i={...IN},s=e.mode||"svg",r={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let _ in e){const w=e[_];if(w!==void 0)switch(_){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[_]=w===!0||w==="true"||w===1;break;case"flip":typeof w=="string"&&mN(n,w);break;case"color":r.color=w;break;case"rotate":typeof w=="string"?n[_]=_N(w):typeof w=="number"&&(n[_]=w);break;case"ariaHidden":case"aria-hidden":w!==!0&&w!=="true"&&delete i["aria-hidden"];break;default:{const E=Xo[_];E?(w===!0||w==="true"||w===1)&&(n[E]=!0):pg[_]===void 0&&(i[_]=w)}}}const l=Uk(t,n),c=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),s==="svg"){i.style={...r,...a},Object.assign(i,c);let _=0,w=e.id;return typeof w=="string"&&(w=w.replace(/-/g,"_")),i.innerHTML=$k(l.body,w?()=>w+"ID"+_++:"iconifyVue"),ds("svg",i)}const{body:u,width:h,height:f}=t,d=s==="mask"||(s==="bg"?!1:u.indexOf("currentColor")!==-1),p=yN(u,{...c,width:h+"",height:f+""});return i.style={...r,"--svg":wN(p),width:_g(c.width),height:_g(c.height),...bN,...d?Cu:tE,...a},ds("span",i)};W0(!0);Vk("",Jk);if(typeof document<"u"&&typeof window<"u"){eE();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Dk(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;Wk(n,s)||console.error(i)}catch{console.error(i)}}}}const TN={...Pl,body:""},It=ut({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=Ol(t,!1,!0))===null)return this.abortLoading(),null;const i=kk(n);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:t,abort:dN([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:i,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return yg(TN,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),yg({...Pl,...e.data},n)}});function CN(t){return ku()?(Rg(t),!0):!1}function nE(t){return typeof t=="function"?t():ue(t)}const iE=typeof window<"u",sE=()=>{},SN=RN();function RN(){var t;return iE&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Qs(t){var e;const n=nE(t);return(e=n==null?void 0:n.$el)!=null?e:n}const rE=iE?window:void 0;function pc(...t){let e,n,i,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,s]=t,e=rE):[e,n,i,s]=t,!e)return sE;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],o=()=>{r.forEach(u=>u()),r.length=0},a=(u,h,f,d)=>(u.addEventListener(h,f,d),()=>u.removeEventListener(h,f,d)),l=an(()=>[Qs(e),nE(s)],([u,h])=>{o(),u&&r.push(...n.flatMap(f=>i.map(d=>a(u,f,d,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return CN(c),c}let vg=!1;function AN(t,e,n={}){const{window:i=rE,ignore:s=[],capture:r=!0,detectIframe:o=!1}=n;if(!i)return;SN&&!vg&&(vg=!0,Array.from(i.document.body.children).forEach(f=>f.addEventListener("click",sE)));let a=!0;const l=f=>s.some(d=>{if(typeof d=="string")return Array.from(i.document.querySelectorAll(d)).some(p=>p===f.target||f.composedPath().includes(p));{const p=Qs(d);return p&&(f.target===p||f.composedPath().includes(p))}}),u=[pc(i,"click",f=>{const d=Qs(t);if(!(!d||d===f.target||f.composedPath().includes(d))){if(f.detail===0&&(a=!l(f)),!a){a=!0;return}e(f)}},{passive:!0,capture:r}),pc(i,"pointerdown",f=>{const d=Qs(t);d&&(a=!f.composedPath().includes(d)&&!l(f))},{passive:!0}),o&&pc(i,"blur",f=>{var d;const p=Qs(t);((d=i.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(p!=null&&p.contains(i.document.activeElement))&&e(f)})].filter(Boolean);return()=>u.forEach(f=>f())}function oE(){const t=Ue(!1);return{closeMenu:()=>t.value=!1,toggleMenu:()=>{t.value=!t.value},isMenuOpen:t}}const aE=t=>(Cs("data-v-1ead765c"),t=t(),Ss(),t),xN={id:"header",class:"bg-gray-800 sticky top-0 z-50"},ON={class:"flex shadow-2xl max-w-[90rem] mx-auto bg-opacity-1 sticky top-0 px-3 py-10 items-center h-[90px] justify-between md:justify-start z-10"},PN={class:"relative peer cursor-pointer text-gray-100"},kN={class:"rounded-lg absolute hidden peer-hover:flex hover:flex bg-gray-700 -bottom-12 shadow-lg py-2 text px-2 gap-2"},NN={key:0},DN={key:1},MN={class:"cursor-pointer"},LN={class:"md:order-3"},FN={class:"hidden md:flex justify-center w-full gap-5 font-michroma text-xl uppercase text-white"},UN={class:"z-50"},jN=aE(()=>B("small",null,"menu",-1)),BN={key:1,class:"cursor-pointer z-50 text-gray-100 md:hidden"},HN=aE(()=>B("small",null,"menu",-1)),$N=ut({__name:"TheNavbar",setup(t){const e=Fh(),{toggleMenu:n,closeMenu:i,isMenuOpen:s}=oE(),r=Ue(Ck()),o=B0();an(()=>o.currentRoute.value,u=>{s.value===!0&&i()});const a=()=>$A(e).then(()=>{console.log("UNLOGIN")}).catch(u=>{}),l=jh(),c=Ue(null);return AN(c,u=>{s.value===!0&&i()}),(u,h)=>{const f=Xr("RouterLink");return ye(),xe("header",xN,[B("div",ON,[B("div",null,[B("button",PN,[ue(l)?(ye(),Pi(ue(It),{key:1,icon:"carbon:user-avatar-filled",width:"48px"})):(ye(),Pi(ue(It),{key:0,icon:"game-icons:astronaut-helmet",width:"48px",color:""})),B("small",null,An(ue(l)?"user":"login"),1)]),B("div",kN,[ue(l)?(ye(),xe("ul",NN,[B("li",null,[Q(ue(It),{icon:"material-symbols:settings-outline",class:"inline"}),Fe(" Profile ")]),B("li",null,[Q(ue(It),{icon:"carbon:favorite",class:"inline"}),Fe(" Favorites ")]),B("li",{onClick:a},[Q(ue(It),{icon:"material-symbols:logout-rounded",class:"inline"}),Fe(" Sign out ")])])):(ye(),xe("ul",DN,[B("li",MN,[Q(f,{to:"login"},{default:We(()=>[Fe(" Sign In ")]),_:1})])]))])]),B("div",LN,[Q(f,{to:"/"},{default:We(()=>[Q(ue(It),{icon:"simple-icons:nasa",width:"80px"})]),_:1})]),B("ul",FN,[B("li",{class:ft([{"after:w-full":r.value.path==="/"},"text-teal-500 after:h-0.5 after:block after:w-0 after:bg-teal-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"])},[Q(f,{to:"/"},{default:We(()=>[Fe("HOME")]),_:1})],2),B("li",{class:ft([{"after:w-full":r.value.path==="/earth"},"text-pink-500 after:h-0.5 after:block after:w-0 after:bg-pink-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"])},[Q(f,{to:"/earth"},{default:We(()=>[Fe("EARTH")]),_:1})],2),B("li",{class:ft([{"after:w-full":r.value.path==="/epic"},"text-indigo-500 after:h-0.5 after:block after:w-0 after:bg-indigo-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"])},[Q(f,{to:"/epic"},{default:We(()=>[Fe("EPIC")]),_:1})],2),B("li",{class:ft([{"after:w-full":r.value.path==="/apod"},"text-yellow-400 after:h-0.5 after:block after:w-0 after:bg-yellow-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"])},[Q(f,{to:"/apod"},{default:We(()=>[Fe("Apod")]),_:1})],2)]),B("div",UN,[ue(s)?(ye(),xe("button",BN,[Q(ue(It),{class:"transition-opacity duration-500",icon:"material-symbols:close",height:"48px"}),HN])):(ye(),xe("button",{key:0,onClick:h[0]||(h[0]=(...d)=>ue(n)&&ue(n)(...d)),class:"cursor-pointer z-50 text-gray-100 md:hidden"},[Q(ue(It),{icon:"ri:menu-5-fill",class:"transition-opacity duration-500",height:"48px"}),jN]))]),B("ul",{ref_key:"menu",ref:c,class:ft([{"-right-full":!ue(s),"right-0":ue(s)},"md:hidden fixed z-40 flex gap-5 items-center justify-center flex-col top-0 bg-gray-800 h-full w-[70%] font-michroma fond-bold text-xl transition-all duration-500 ease-in-out uppercase"])},[B("li",{class:ft([{"after:w-full":r.value.path==="/"},"text-teal-500 after:h-0.5 after:block after:w-0 after:bg-teal-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"])},[Q(f,{to:"/"},{default:We(()=>[Fe("HOME")]),_:1})],2),B("li",{class:ft([{"after:w-full":r.value.path==="/earth"},"text-pink-500 after:h-0.5 after:block after:w-0 after:bg-pink-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"])},[Q(f,{to:"/earth"},{default:We(()=>[Fe("EARTH")]),_:1})],2),B("li",{class:ft([{"after:w-full":r.value.path==="/epic"},"text-indigo-500 after:h-0.5 after:block after:w-0 after:bg-indigo-500 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"])},[Q(f,{to:"/epic"},{default:We(()=>[Fe("EPIC")]),_:1})],2),B("li",{class:ft([{"after:w-full":r.value.path==="/apod"},"text-yellow-400 after:h-0.5 after:block after:w-0 after:bg-yellow-400 after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full"])},[Q(f,{to:"/apod"},{default:We(()=>[Fe("Apod")]),_:1})],2)],2)])])}}});const li=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},VN=li($N,[["__scopeId","data-v-1ead765c"]]),WN={class:"py-8 text-gray-500"},zN=B("h3",{class:"text-xl text-center"},"Image viewer made with Vue 3, TailwindCSS and Firebase",-1),KN={class:"flex items-center justify-center gap-5 mt-6"},GN={class:"text-white gap-5",href:"https://twitter.com/GerganovEmanuil"},YN={class:"text-white items-center gap-5 flex",href:"https://www.linkedin.com/in/emanuil-gerganov/"},XN={class:"text-white items-center gap-5 flex",href:"https://github.com/EmanuilGerganov"},qN=B("div",{class:"text-center pt-5 text-gray-00"},[B("span",{class:"text-sm tracking-wide"},[Fe("Copyright © Emanuil Gerganov "),B("span",{id:"year"}),Fe(" | All rights reserved")])],-1),JN=ut({__name:"TheFooter",setup(t){return(e,n)=>(ye(),xe("footer",null,[B("div",WN,[Q(ue(It),{class:"mx-auto h-auto",icon:"simple-icons:nasa",width:"100px"}),zN,B("div",KN,[B("a",GN,[Q(ue(It),{icon:"ant-design:twitter-circle-filled",width:"40px"})]),B("a",YN,[Q(ue(It),{icon:"logos:linkedin-icon",width:"40px"})]),B("a",XN,[Q(ue(It),{icon:"mdi:github",width:"40px"})])]),qN])]))}}),QN={class:"bg-gray-900 text-white"},ZN={class:"bg-gray-900 min-h-screen px-4 md:px-10 max-w-[90rem] mx-auto"},eD=ut({__name:"App",setup(t){const e=A0();return console.log("production","base"),console.log(e,"ATH"),(n,i)=>(ye(),xe("div",QN,[Q(VN),Q(ue(j0),{class:"font-montserrat"},{default:We(({Component:s})=>[Q(nl,{name:"fade",mode:"out-in"},{default:We(()=>[B("main",ZN,[(ye(),Pi(fm(s),{key:n.$route.path}))])]),_:2},1024)]),_:1}),Q(JN)]))}});const tD=li(eD,[["__scopeId","data-v-2037676b"]]),nD="modulepreload",iD=function(t){return"/"+t},Eg={},sD=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=iD(r),r in Eg)return;Eg[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":nD,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},rD="/assets/apod-37d4427b.webp",oD="/assets/epic-api-3e73b7f1.webp",aD="/assets/earth-api-f35b9bf6.webp",lD={class:"text-center"},gc=ut({__name:"PrimaryLinkButton",props:{text:{},color:{},link:{}},setup(t){const e=t;return(n,i)=>{const s=Xr("RouterLink");return ye(),xe("div",lD,[Q(s,{to:n.link},{default:We(()=>[B("button",{class:ft([e.color,"text-black italic ital py-3 px-6 rounded-full text-lg font-semibold transition duration-300"])},An(n.text),3)]),_:1},8,["to"])])}}}),Jt=t=>(Cs("data-v-0d5230c9"),t=t(),Ss(),t),cD={class:"mx-auto max-w-screen-xl py-10 md:py-20 lg:flex lg:h-1/4 lg:items-center"},uD={class:"mx-auto max-w-5xl text-center"},hD=Jt(()=>B("h1",{class:"font-michroma bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl leading-9 font-extrabold text-transparent sm:text-5xl sm:leading-[1.3]"},[Fe(" Welcome to NASA image viewer ! "),B("span",{class:"sm:block"})],-1)),fD=Jt(()=>B("p",{class:"mx-auto mt-6 max-w-xl sm:text-xl/relaxed"}," Explore the wonders of space and the beauty of our planet with NASA Image Viewer. This website allows you to dive into a vast collection of captivating images captured by NASA's satellites and telescopes. Create account today and save your favorite photos ! ",-1)),dD={class:"mt-8 flex flex-wrap justify-center gap-4"},pD=Jt(()=>B("img",{class:"aspect-[16/9] mx-auto rounded-xl",src:rD,alt:""},null,-1)),gD={class:"max-w-lg text-center mx-auto"},mD=Jt(()=>B("h2",{class:"font-michroma text-2xl text-yellow-400 font-bold text-center py-10"}," Astronomy Picture of the Day ",-1)),_D=Jt(()=>B("p",{class:"text-lg mb-6"}," Discover the Astronomy Picture of the Day, showcasing stunning imagery from the vast reaches of space. Each day, a new captivating image will be featured, offering a glimpse into the awe-inspiring wonders of our universe. ",-1)),yD={id:"epic"},vD={class:"flex flex-col items-center justify-center gap-10 lg:flex-row pt-10"},ED=Jt(()=>B("div",{class:"flex-[2] max-w-2xl w-full order-1 lg:order-2"},[B("img",{width:"700",height:"700",class:"rounded-xl w-full h-full",src:oD,alt:""})],-1)),wD={class:"flex-[1] order-2 lg:order-1"},ID=Jt(()=>B("h2",{class:"font-michroma text-2xl text-indigo-500 font-bold text-center py-10"}," Earth Polychromatic Imaging Camera ",-1)),bD=Jt(()=>B("p",{class:"text-lg mb-6"}," Explore the EPIC API section to view the most recent enhanced Earth image captured by NASA's DSCOVR satellite. Witness the dynamic changes occurring on Earth's surface, from swirling storms to dazzling city lights, as you delve into a gallery of visually stunning pictures. ",-1)),TD={id:"earth"},CD={class:"flex flex-col items-center justify-center gap-10 lg:flex-row pt-10"},SD=Jt(()=>B("div",{class:"flex-[2] max-w-2xl w-full"},[B("img",{width:"700",height:"700",class:"rounded-xl w-full h-full",src:aD,alt:""})],-1)),RD={class:"flex-[1]"},AD=Jt(()=>B("h2",{class:"font-michroma text-2xl text-pink-500 font-bold text-center py-10"}," Earth Polychromatic Imaging Camera ",-1)),xD=Jt(()=>B("p",{class:"text-lg mb-6"}," Experience the unique perspective of Earth from space with our Earth Images section. By leveraging NASA's Earth API and your current location, you'll be able to view a mesmerizing image of our planet as seen from above. See the intricate details of Earth's landscapes, weather patterns, and natural phenomena, reminding us of the fragile and remarkable nature of our home. ",-1)),OD=ut({__name:"HomeView",setup(t){return(e,n)=>{const i=Xr("RouterLink");return ye(),xe(Ge,null,[B("section",null,[B("div",cD,[B("div",uD,[hD,fD,B("div",dD,[Q(i,{to:"/login",class:"block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto",href:"/get-started"},{default:We(()=>[Fe(" LOGIN ")]),_:1}),Q(i,{class:"block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto",to:"/register"},{default:We(()=>[Fe(" REGISTER")]),_:1})])])])]),pD,B("div",gD,[mD,_D,Q(gc,{text:"GO TO APOD",link:"/apod",color:"bg-yellow-400"})]),B("section",yD,[B("div",vD,[ED,B("div",wD,[ID,bD,Q(gc,{text:"GO TO EPIC",link:"/epic",color:"bg-indigo-500"})])])]),B("section",TD,[B("div",CD,[SD,B("div",RD,[AD,xD,Q(gc,{text:"GO TO EARTH",link:"/earth",color:"bg-pink-600"})])])])],64)}}});const PD=li(OD,[["__scopeId","data-v-0d5230c9"]]),lE=t=>(Cs("data-v-e0c04bc5"),t=t(),Ss(),t),kD=lE(()=>B("h1",{class:"leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"}," Welcome to Earth Polychromatic Imaging Camera ",-1)),ND=lE(()=>B("h2",null,null,-1)),DD={class:"relative aspect-[1/1] max-w-2xl h-auto mx-auto"},MD={key:0,class:"skeleton-earth"},LD=["src"],FD={key:2,class:"text-xl text-center font-extralight"},UD={class:"py-5"},jD="https://epic.gsfc.nasa.gov/api/enhanced",BD=ut({__name:"EpicView",setup(t){const e=Ue(null);return Ue(null),si(async()=>{try{const s=(await(await fetch(jD)).json()).reduce((o,a)=>{const l=new Date(o.date),c=new Date(a.date);return l>c?o:a}),r=s.date.slice(0,10).replaceAll("-","/");console.log(s),e.value={date:s.date,caption:s.caption,image:s.image,url:`https://epic.gsfc.nasa.gov/archive/enhanced/${r}/png/${s.image}.png`}}catch(n){console.log(n)}}),(n,i)=>(ye(),xe("div",null,[kD,ND,B("div",DD,[e.value?(ye(),xe("img",{key:1,width:"1000",height:"1000",class:"w-full h-auto",src:e.value.url},null,8,LD)):(ye(),xe("div",MD)),e.value?(ye(),xe("div",FD,[B("h2",UD,An(e.value.caption),1),B("div",null,An(e.value.date),1)])):Qu("",!0)])]))}});const HD=li(BD,[["__scopeId","data-v-e0c04bc5"]]);var $D=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function VD(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function WD(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){if(this instanceof i){var s=[null];s.push.apply(s,arguments);var r=Function.bind.apply(e,s);return new r}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:function(){return t[i]}})}),n}var cE={exports:{}};const zD=WD(Pb);(function(t,e){(function(i,s){t.exports=s(zD)})(typeof self<"u"?self:$D,function(n){return function(i){var s={};function r(o){if(s[o])return s[o].exports;var a=s[o]={i:o,l:!1,exports:{}};return i[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=i,r.c=s,r.d=function(o,a,l){r.o(o,a)||Object.defineProperty(o,a,{enumerable:!0,get:l})},r.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,a){if(a&1&&(o=r(o)),a&8||a&4&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),a&2&&typeof o!="string")for(var c in o)r.d(l,c,function(u){return o[u]}.bind(null,c));return l},r.n=function(o){var a=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(a,"a",a),a},r.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)},r.p="",r(r.s="fb15")}({"00ee":function(i,s,r){var o=r("b622"),a=o("toStringTag"),l={};l[a]="z",i.exports=String(l)==="[object z]"},"0366":function(i,s,r){var o=r("1c0b");i.exports=function(a,l,c){if(o(a),l===void 0)return a;switch(c){case 0:return function(){return a.call(l)};case 1:return function(u){return a.call(l,u)};case 2:return function(u,h){return a.call(l,u,h)};case 3:return function(u,h,f){return a.call(l,u,h,f)}}return function(){return a.apply(l,arguments)}}},"06cf":function(i,s,r){var o=r("83ab"),a=r("d1e7"),l=r("5c6c"),c=r("fc6a"),u=r("c04e"),h=r("5135"),f=r("0cfb"),d=Object.getOwnPropertyDescriptor;s.f=o?d:function(_,w){if(_=c(_),w=u(w,!0),f)try{return d(_,w)}catch{}if(h(_,w))return l(!a.f.call(_,w),_[w])}},"0cfb":function(i,s,r){var o=r("83ab"),a=r("d039"),l=r("cc12");i.exports=!o&&!a(function(){return Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a!=7})},"1be4":function(i,s,r){var o=r("d066");i.exports=o("document","documentElement")},"1c0b":function(i,s){i.exports=function(r){if(typeof r!="function")throw TypeError(String(r)+" is not a function");return r}},"1d80":function(i,s){i.exports=function(r){if(r==null)throw TypeError("Can't call method on "+r);return r}},"1dde":function(i,s,r){var o=r("d039"),a=r("b622"),l=r("2d00"),c=a("species");i.exports=function(u){return l>=51||!o(function(){var h=[],f=h.constructor={};return f[c]=function(){return{foo:1}},h[u](Boolean).foo!==1})}},"23cb":function(i,s,r){var o=r("a691"),a=Math.max,l=Math.min;i.exports=function(c,u){var h=o(c);return h<0?a(h+u,0):l(h,u)}},"23e7":function(i,s,r){var o=r("da84"),a=r("06cf").f,l=r("9112"),c=r("6eeb"),u=r("ce4e"),h=r("e893"),f=r("94ca");i.exports=function(d,p){var _=d.target,w=d.global,E=d.stat,m,T,v,C,S,O;if(w?T=o:E?T=o[_]||u(_,{}):T=(o[_]||{}).prototype,T)for(v in p){if(S=p[v],d.noTargetGet?(O=a(T,v),C=O&&O.value):C=T[v],m=f(w?v:_+(E?".":"#")+v,d.forced),!m&&C!==void 0){if(typeof S==typeof C)continue;h(S,C)}(d.sham||C&&C.sham)&&l(S,"sham",!0),c(T,v,S,d)}}},"241c":function(i,s,r){var o=r("ca84"),a=r("7839"),l=a.concat("length","prototype");s.f=Object.getOwnPropertyNames||function(u){return o(u,l)}},"2d00":function(i,s,r){var o=r("da84"),a=r("342f"),l=o.process,c=l&&l.versions,u=c&&c.v8,h,f;u?(h=u.split("."),f=h[0]+h[1]):a&&(h=a.match(/Edge\/(\d+)/),(!h||h[1]>=74)&&(h=a.match(/Chrome\/(\d+)/),h&&(f=h[1]))),i.exports=f&&+f},"342f":function(i,s,r){var o=r("d066");i.exports=o("navigator","userAgent")||""},"37e8":function(i,s,r){var o=r("83ab"),a=r("9bf2"),l=r("825a"),c=r("df75");i.exports=o?Object.defineProperties:function(h,f){l(h);for(var d=c(f),p=d.length,_=0,w;p>_;)a.f(h,w=d[_++],f[w]);return h}},"3bbe":function(i,s,r){var o=r("861d");i.exports=function(a){if(!o(a)&&a!==null)throw TypeError("Can't set "+String(a)+" as a prototype");return a}},"428f":function(i,s,r){var o=r("da84");i.exports=o},"44ad":function(i,s,r){var o=r("d039"),a=r("c6b6"),l="".split;i.exports=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(c){return a(c)=="String"?l.call(c,""):Object(c)}:Object},4930:function(i,s,r){var o=r("d039");i.exports=!!Object.getOwnPropertySymbols&&!o(function(){return!String(Symbol())})},"4d64":function(i,s,r){var o=r("fc6a"),a=r("50c4"),l=r("23cb"),c=function(u){return function(h,f,d){var p=o(h),_=a(p.length),w=l(d,_),E;if(u&&f!=f){for(;_>w;)if(E=p[w++],E!=E)return!0}else for(;_>w;w++)if((u||w in p)&&p[w]===f)return u||w||0;return!u&&-1}};i.exports={includes:c(!0),indexOf:c(!1)}},"4de4":function(i,s,r){var o=r("23e7"),a=r("b727").filter,l=r("1dde"),c=r("ae40"),u=l("filter"),h=c("filter");o({target:"Array",proto:!0,forced:!u||!h},{filter:function(d){return a(this,d,arguments.length>1?arguments[1]:void 0)}})},"50c4":function(i,s,r){var o=r("a691"),a=Math.min;i.exports=function(l){return l>0?a(o(l),9007199254740991):0}},5135:function(i,s){var r={}.hasOwnProperty;i.exports=function(o,a){return r.call(o,a)}},5692:function(i,s,r){var o=r("c430"),a=r("c6cd");(i.exports=function(l,c){return a[l]||(a[l]=c!==void 0?c:{})})("versions",[]).push({version:"3.6.5",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(i,s,r){var o=r("d066"),a=r("241c"),l=r("7418"),c=r("825a");i.exports=o("Reflect","ownKeys")||function(h){var f=a.f(c(h)),d=l.f;return d?f.concat(d(h)):f}},5899:function(i,s){i.exports=`	
\v\f\r                　\u2028\u2029\uFEFF`},"58a8":function(i,s,r){var o=r("1d80"),a=r("5899"),l="["+a+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),h=function(f){return function(d){var p=String(o(d));return f&1&&(p=p.replace(c,"")),f&2&&(p=p.replace(u,"")),p}};i.exports={start:h(1),end:h(2),trim:h(3)}},"5c6c":function(i,s){i.exports=function(r,o){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:o}}},"652c":function(i,s,r){},"65f0":function(i,s,r){var o=r("861d"),a=r("e8b5"),l=r("b622"),c=l("species");i.exports=function(u,h){var f;return a(u)&&(f=u.constructor,typeof f=="function"&&(f===Array||a(f.prototype))?f=void 0:o(f)&&(f=f[c],f===null&&(f=void 0))),new(f===void 0?Array:f)(h===0?0:h)}},"69f3":function(i,s,r){var o=r("7f9a"),a=r("da84"),l=r("861d"),c=r("9112"),u=r("5135"),h=r("f772"),f=r("d012"),d=a.WeakMap,p,_,w,E=function(I){return w(I)?_(I):p(I,{})},m=function(I){return function(P){var D;if(!l(P)||(D=_(P)).type!==I)throw TypeError("Incompatible receiver, "+I+" required");return D}};if(o){var T=new d,v=T.get,C=T.has,S=T.set;p=function(I,P){return S.call(T,I,P),P},_=function(I){return v.call(T,I)||{}},w=function(I){return C.call(T,I)}}else{var O=h("state");f[O]=!0,p=function(I,P){return c(I,O,P),P},_=function(I){return u(I,O)?I[O]:{}},w=function(I){return u(I,O)}}i.exports={set:p,get:_,has:w,enforce:E,getterFor:m}},"6b0d":function(i,s,r){Object.defineProperty(s,"__esModule",{value:!0}),s.default=(o,a)=>{const l=o.__vccOpts||o;for(const[c,u]of a)l[c]=u;return l}},"6eeb":function(i,s,r){var o=r("da84"),a=r("9112"),l=r("5135"),c=r("ce4e"),u=r("8925"),h=r("69f3"),f=h.get,d=h.enforce,p=String(String).split("String");(i.exports=function(_,w,E,m){var T=m?!!m.unsafe:!1,v=m?!!m.enumerable:!1,C=m?!!m.noTargetGet:!1;if(typeof E=="function"&&(typeof w=="string"&&!l(E,"name")&&a(E,"name",w),d(E).source=p.join(typeof w=="string"?w:"")),_===o){v?_[w]=E:c(w,E);return}else T?!C&&_[w]&&(v=!0):delete _[w];v?_[w]=E:a(_,w,E)})(Function.prototype,"toString",function(){return typeof this=="function"&&f(this).source||u(this)})},7156:function(i,s,r){var o=r("861d"),a=r("d2bb");i.exports=function(l,c,u){var h,f;return a&&typeof(h=c.constructor)=="function"&&h!==u&&o(f=h.prototype)&&f!==u.prototype&&a(l,f),l}},7418:function(i,s){s.f=Object.getOwnPropertySymbols},7839:function(i,s){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7ae1":function(i,s,r){r("652c")},"7b0b":function(i,s,r){var o=r("1d80");i.exports=function(a){return Object(o(a))}},"7c73":function(i,s,r){var o=r("825a"),a=r("37e8"),l=r("7839"),c=r("d012"),u=r("1be4"),h=r("cc12"),f=r("f772"),d=">",p="<",_="prototype",w="script",E=f("IE_PROTO"),m=function(){},T=function(I){return p+w+d+I+p+"/"+w+d},v=function(I){I.write(T("")),I.close();var P=I.parentWindow.Object;return I=null,P},C=function(){var I=h("iframe"),P="java"+w+":",D;return I.style.display="none",u.appendChild(I),I.src=String(P),D=I.contentWindow.document,D.open(),D.write(T("document.F=Object")),D.close(),D.F},S,O=function(){try{S=document.domain&&new ActiveXObject("htmlfile")}catch{}O=S?v(S):C();for(var I=l.length;I--;)delete O[_][l[I]];return O()};c[E]=!0,i.exports=Object.create||function(P,D){var K;return P!==null?(m[_]=o(P),K=new m,m[_]=null,K[E]=P):K=O(),D===void 0?K:a(K,D)}},"7f9a":function(i,s,r){var o=r("da84"),a=r("8925"),l=o.WeakMap;i.exports=typeof l=="function"&&/native code/.test(a(l))},"825a":function(i,s,r){var o=r("861d");i.exports=function(a){if(!o(a))throw TypeError(String(a)+" is not an object");return a}},"83ab":function(i,s,r){var o=r("d039");i.exports=!o(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},8418:function(i,s,r){var o=r("c04e"),a=r("9bf2"),l=r("5c6c");i.exports=function(c,u,h){var f=o(u);f in c?a.f(c,f,l(0,h)):c[f]=h}},"861d":function(i,s){i.exports=function(r){return typeof r=="object"?r!==null:typeof r=="function"}},8875:function(i,s,r){var o,a,l;(function(c,u){a=[],o=u,l=typeof o=="function"?o.apply(s,a):o,l!==void 0&&(i.exports=l)})(typeof self<"u"?self:this,function(){function c(){var u=Object.getOwnPropertyDescriptor(document,"currentScript");if(!u&&"currentScript"in document&&document.currentScript||u&&u.get!==c&&document.currentScript)return document.currentScript;try{throw new Error}catch(S){var h=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,f=/@([^@]*):(\d+):(\d+)\s*$/ig,d=h.exec(S.stack)||f.exec(S.stack),p=d&&d[1]||!1,_=d&&d[2]||!1,w=document.location.href.replace(document.location.hash,""),E,m,T,v=document.getElementsByTagName("script");p===w&&(E=document.documentElement.outerHTML,m=new RegExp("(?:[^\\n]+?\\n){0,"+(_-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),T=E.replace(m,"$1").trim());for(var C=0;C<v.length;C++)if(v[C].readyState==="interactive"||v[C].src===p||p===w&&v[C].innerHTML&&v[C].innerHTML.trim()===T)return v[C];return null}}return c})},8925:function(i,s,r){var o=r("c6cd"),a=Function.toString;typeof o.inspectSource!="function"&&(o.inspectSource=function(l){return a.call(l)}),i.exports=o.inspectSource},"8bbf":function(i,s){i.exports=n},"90e3":function(i,s){var r=0,o=Math.random();i.exports=function(a){return"Symbol("+String(a===void 0?"":a)+")_"+(++r+o).toString(36)}},9112:function(i,s,r){var o=r("83ab"),a=r("9bf2"),l=r("5c6c");i.exports=o?function(c,u,h){return a.f(c,u,l(1,h))}:function(c,u,h){return c[u]=h,c}},"94ca":function(i,s,r){var o=r("d039"),a=/#|\.prototype\./,l=function(d,p){var _=u[c(d)];return _==f?!0:_==h?!1:typeof p=="function"?o(p):!!p},c=l.normalize=function(d){return String(d).replace(a,".").toLowerCase()},u=l.data={},h=l.NATIVE="N",f=l.POLYFILL="P";i.exports=l},"99af":function(i,s,r){var o=r("23e7"),a=r("d039"),l=r("e8b5"),c=r("861d"),u=r("7b0b"),h=r("50c4"),f=r("8418"),d=r("65f0"),p=r("1dde"),_=r("b622"),w=r("2d00"),E=_("isConcatSpreadable"),m=9007199254740991,T="Maximum allowed index exceeded",v=w>=51||!a(function(){var I=[];return I[E]=!1,I.concat()[0]!==I}),C=p("concat"),S=function(I){if(!c(I))return!1;var P=I[E];return P!==void 0?!!P:l(I)},O=!v||!C;o({target:"Array",proto:!0,forced:O},{concat:function(P){var D=u(this),K=d(D,0),U=0,q,j,le,F,A;for(q=-1,le=arguments.length;q<le;q++)if(A=q===-1?D:arguments[q],S(A)){if(F=h(A.length),U+F>m)throw TypeError(T);for(j=0;j<F;j++,U++)j in A&&f(K,U,A[j])}else{if(U>=m)throw TypeError(T);f(K,U++,A)}return K.length=U,K}})},"9bf2":function(i,s,r){var o=r("83ab"),a=r("0cfb"),l=r("825a"),c=r("c04e"),u=Object.defineProperty;s.f=o?u:function(f,d,p){if(l(f),d=c(d,!0),l(p),a)try{return u(f,d,p)}catch{}if("get"in p||"set"in p)throw TypeError("Accessors not supported");return"value"in p&&(f[d]=p.value),f}},a691:function(i,s){var r=Math.ceil,o=Math.floor;i.exports=function(a){return isNaN(a=+a)?0:(a>0?o:r)(a)}},a9e3:function(i,s,r){var o=r("83ab"),a=r("da84"),l=r("94ca"),c=r("6eeb"),u=r("5135"),h=r("c6b6"),f=r("7156"),d=r("c04e"),p=r("d039"),_=r("7c73"),w=r("241c").f,E=r("06cf").f,m=r("9bf2").f,T=r("58a8").trim,v="Number",C=a[v],S=C.prototype,O=h(_(S))==v,I=function(q){var j=d(q,!1),le,F,A,L,me,ne,se,Le;if(typeof j=="string"&&j.length>2){if(j=T(j),le=j.charCodeAt(0),le===43||le===45){if(F=j.charCodeAt(2),F===88||F===120)return NaN}else if(le===48){switch(j.charCodeAt(1)){case 66:case 98:A=2,L=49;break;case 79:case 111:A=8,L=55;break;default:return+j}for(me=j.slice(2),ne=me.length,se=0;se<ne;se++)if(Le=me.charCodeAt(se),Le<48||Le>L)return NaN;return parseInt(me,A)}}return+j};if(l(v,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var P=function(j){var le=arguments.length<1?0:j,F=this;return F instanceof P&&(O?p(function(){S.valueOf.call(F)}):h(F)!=v)?f(new C(I(le)),F,P):I(le)},D=o?w(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),K=0,U;D.length>K;K++)u(C,U=D[K])&&!u(P,U)&&m(P,U,E(C,U));P.prototype=S,S.constructor=P,c(a,v,P)}},ae40:function(i,s,r){var o=r("83ab"),a=r("d039"),l=r("5135"),c=Object.defineProperty,u={},h=function(f){throw f};i.exports=function(f,d){if(l(u,f))return u[f];d||(d={});var p=[][f],_=l(d,"ACCESSORS")?d.ACCESSORS:!1,w=l(d,0)?d[0]:h,E=l(d,1)?d[1]:void 0;return u[f]=!!p&&!a(function(){if(_&&!o)return!0;var m={length:-1};_?c(m,1,{enumerable:!0,get:h}):m[1]=1,p.call(m,w,E)})}},b041:function(i,s,r){var o=r("00ee"),a=r("f5df");i.exports=o?{}.toString:function(){return"[object "+a(this)+"]"}},b622:function(i,s,r){var o=r("da84"),a=r("5692"),l=r("5135"),c=r("90e3"),u=r("4930"),h=r("fdbf"),f=a("wks"),d=o.Symbol,p=h?d:d&&d.withoutSetter||c;i.exports=function(_){return l(f,_)||(u&&l(d,_)?f[_]=d[_]:f[_]=p("Symbol."+_)),f[_]}},b727:function(i,s,r){var o=r("0366"),a=r("44ad"),l=r("7b0b"),c=r("50c4"),u=r("65f0"),h=[].push,f=function(d){var p=d==1,_=d==2,w=d==3,E=d==4,m=d==6,T=d==5||m;return function(v,C,S,O){for(var I=l(v),P=a(I),D=o(C,S,3),K=c(P.length),U=0,q=O||u,j=p?q(v,K):_?q(v,0):void 0,le,F;K>U;U++)if((T||U in P)&&(le=P[U],F=D(le,U,I),d)){if(p)j[U]=F;else if(F)switch(d){case 3:return!0;case 5:return le;case 6:return U;case 2:h.call(j,le)}else if(E)return!1}return m?-1:w||E?E:j}};i.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},c04e:function(i,s,r){var o=r("861d");i.exports=function(a,l){if(!o(a))return a;var c,u;if(l&&typeof(c=a.toString)=="function"&&!o(u=c.call(a))||typeof(c=a.valueOf)=="function"&&!o(u=c.call(a))||!l&&typeof(c=a.toString)=="function"&&!o(u=c.call(a)))return u;throw TypeError("Can't convert object to primitive value")}},c430:function(i,s){i.exports=!1},c6b6:function(i,s){var r={}.toString;i.exports=function(o){return r.call(o).slice(8,-1)}},c6cd:function(i,s,r){var o=r("da84"),a=r("ce4e"),l="__core-js_shared__",c=o[l]||a(l,{});i.exports=c},c8ba:function(i,s){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch{typeof window=="object"&&(r=window)}i.exports=r},ca84:function(i,s,r){var o=r("5135"),a=r("fc6a"),l=r("4d64").indexOf,c=r("d012");i.exports=function(u,h){var f=a(u),d=0,p=[],_;for(_ in f)!o(c,_)&&o(f,_)&&p.push(_);for(;h.length>d;)o(f,_=h[d++])&&(~l(p,_)||p.push(_));return p}},cc12:function(i,s,r){var o=r("da84"),a=r("861d"),l=o.document,c=a(l)&&a(l.createElement);i.exports=function(u){return c?l.createElement(u):{}}},ce4e:function(i,s,r){var o=r("da84"),a=r("9112");i.exports=function(l,c){try{a(o,l,c)}catch{o[l]=c}return c}},d012:function(i,s){i.exports={}},d039:function(i,s){i.exports=function(r){try{return!!r()}catch{return!0}}},d066:function(i,s,r){var o=r("428f"),a=r("da84"),l=function(c){return typeof c=="function"?c:void 0};i.exports=function(c,u){return arguments.length<2?l(o[c])||l(a[c]):o[c]&&o[c][u]||a[c]&&a[c][u]}},d1e7:function(i,s,r){var o={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,l=a&&!o.call({1:2},1);s.f=l?function(u){var h=a(this,u);return!!h&&h.enumerable}:o},d2bb:function(i,s,r){var o=r("825a"),a=r("3bbe");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var l=!1,c={},u;try{u=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,u.call(c,[]),l=c instanceof Array}catch{}return function(f,d){return o(f),a(d),l?u.call(f,d):f.__proto__=d,f}}():void 0)},d3b7:function(i,s,r){var o=r("00ee"),a=r("6eeb"),l=r("b041");o||a(Object.prototype,"toString",l,{unsafe:!0})},da84:function(i,s,r){(function(o){var a=function(l){return l&&l.Math==Math&&l};i.exports=a(typeof globalThis=="object"&&globalThis)||a(typeof window=="object"&&window)||a(typeof self=="object"&&self)||a(typeof o=="object"&&o)||Function("return this")()}).call(this,r("c8ba"))},df75:function(i,s,r){var o=r("ca84"),a=r("7839");i.exports=Object.keys||function(c){return o(c,a)}},e893:function(i,s,r){var o=r("5135"),a=r("56ef"),l=r("06cf"),c=r("9bf2");i.exports=function(u,h){for(var f=a(h),d=c.f,p=l.f,_=0;_<f.length;_++){var w=f[_];o(u,w)||d(u,w,p(h,w))}}},e8b5:function(i,s,r){var o=r("c6b6");i.exports=Array.isArray||function(l){return o(l)=="Array"}},f5df:function(i,s,r){var o=r("00ee"),a=r("c6b6"),l=r("b622"),c=l("toStringTag"),u=a(function(){return arguments}())=="Arguments",h=function(f,d){try{return f[d]}catch{}};i.exports=o?a:function(f){var d,p,_;return f===void 0?"Undefined":f===null?"Null":typeof(p=h(d=Object(f),c))=="string"?p:u?a(d):(_=a(d))=="Object"&&typeof d.callee=="function"?"Arguments":_}},f772:function(i,s,r){var o=r("5692"),a=r("90e3"),l=o("keys");i.exports=function(c){return l[c]||(l[c]=a(c))}},fb15:function(i,s,r){if(r.r(s),r.d(s,"InnerImageZoom",function(){return j}),typeof window<"u"){var o=window.document.currentScript;{var a=r("8875");o=a(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:a})}var l=o&&o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);l&&(r.p=l[1])}function c(F,A,L){return A in F?Object.defineProperty(F,A,{value:L,enumerable:!0,configurable:!0,writable:!0}):F[A]=L,F}r("99af");var u=r("8bbf"),h={key:0},f=["srcSet","sizes","media","type"],d=["src","srcSet","sizes","alt"],p=["src","srcSet","sizes","alt"],_={class:"iiz__zoom-portal"},w=["src"],E=["src"],m={key:1,class:"iiz__btn iiz__hint"};function T(F,A,L,me,ne,se){var Le;return Object(u.openBlock)(),Object(u.createElementBlock)("figure",Object(u.mergeProps)({class:["iiz",(Le={},c(Le,L.className,L.className),c(Le,"iiz--drag",ne.currentMoveType==="drag"),Le)],ref:"img",style:{width:"".concat(L.width,"px")}},Object(u.toHandlers)({touchstart:ne.isZoomed?function(){}:se.handleTouchStart,click:se.handleClick,mouseenter:ne.isTouch?function(){}:se.handleMouseEnter,mousemove:ne.currentMoveType==="drag"||!ne.isZoomed?function(){}:se.handleMouseMove,mouseleave:ne.isTouch?function(){}:se.handleMouseLeave})),[Object(u.createElementVNode)("div",{style:Object(u.normalizeStyle)({paddingTop:se.createSpacer?"".concat(L.height/L.width*100,"%"):null})},[se.validSources?(Object(u.openBlock)(),Object(u.createElementBlock)("picture",h,[(Object(u.openBlock)(!0),Object(u.createElementBlock)(u.Fragment,null,Object(u.renderList)(se.validSources,function(Ut,Mn){return Object(u.openBlock)(),Object(u.createElementBlock)("source",{key:Mn,srcSet:Ut.srcSet,sizes:Ut.sizes,media:Ut.media,type:Ut.type},null,8,f)}),128)),Object(u.createElementVNode)("img",{class:Object(u.normalizeClass)(["iiz__img",{"iiz__img--hidden":ne.isZoomed,"iiz__img--abs":se.createSpacer}]),style:Object(u.normalizeStyle)({transition:"linear 0ms opacity ".concat(ne.isZoomed?L.fadeDuration:0,"ms, linear 0ms visibility ").concat(ne.isZoomed?L.fadeDuration:0,"ms")}),src:L.src,srcSet:L.srcSet,sizes:L.sizes,alt:L.alt},null,14,d)])):(Object(u.openBlock)(),Object(u.createElementBlock)("img",{key:1,class:Object(u.normalizeClass)(["iiz__img",{"iiz__img--hidden":ne.isZoomed,"iiz__img--abs":se.createSpacer}]),style:Object(u.normalizeStyle)({transition:"linear 0ms opacity ".concat(ne.isZoomed?L.fadeDuration:0,"ms, linear 0ms visibility ").concat(ne.isZoomed?L.fadeDuration:0,"ms")}),src:L.src,srcSet:L.srcSet,sizes:L.sizes,alt:L.alt},null,14,p))],4),ne.isActive?(Object(u.openBlock)(),Object(u.createElementBlock)(u.Fragment,{key:0},[ne.isFullscreen?(Object(u.openBlock)(),Object(u.createBlock)(u.Teleport,{key:0,to:"body"},[Object(u.createElementVNode)("div",_,[Object(u.createElementVNode)("img",Object(u.mergeProps)({class:["iiz__zoom-img",{"iiz__zoom-img--visible":ne.isZoomed}],alt:"",draggable:!1,style:{top:"".concat(ne.top,"px"),left:"".concat(ne.left,"px"),transition:"linear ".concat(ne.isFullscreen?0:L.fadeDuration,"ms opacity, linear ").concat(ne.isFullscreen?0:L.fadeDuration,"ms visibility")},src:L.zoomSrc||L.src},Object(u.toHandlers)({load:se.handleLoad,touchstart:se.handleDragStart,touchend:se.handleDragEnd,mousedown:se.handleDragStart,mouseup:se.handleDragEnd,click:se.handleClick})),null,16,w),ne.isTouch&&!L.hideCloseButton?(Object(u.openBlock)(),Object(u.createElementBlock)("button",{key:0,type:"button",class:Object(u.normalizeClass)(["iiz__btn iiz__close",{"iiz__close--visible":ne.isZoomed}]),"aria-label":"Zoom Out",style:Object(u.normalizeStyle)({transition:"linear ".concat(ne.isFullscreen?0:L.fadeDuration,"ms opacity, linear ").concat(ne.isFullscreen?0:L.fadeDuration,"ms visibility")}),onClick:A[0]||(A[0]=Object(u.withModifiers)(function(){return se.handleClose&&se.handleClose.apply(se,arguments)},["stop"]))},null,6)):Object(u.createCommentVNode)("",!0)])])):(Object(u.openBlock)(),Object(u.createElementBlock)(u.Fragment,{key:1},[Object(u.createElementVNode)("img",Object(u.mergeProps)({class:["iiz__zoom-img",{"iiz__zoom-img--visible":ne.isZoomed}],alt:"",draggable:!1,style:{top:"".concat(ne.top,"px"),left:"".concat(ne.left,"px"),transition:"linear ".concat(ne.isFullscreen?0:L.fadeDuration,"ms opacity, linear ").concat(ne.isFullscreen?0:L.fadeDuration,"ms visibility")},src:L.zoomSrc||L.src},Object(u.toHandlers)({load:se.handleLoad,touchstart:se.handleDragStart,touchend:se.handleDragEnd,mousedown:se.handleDragStart,mouseup:se.handleDragEnd})),null,16,E),ne.isTouch&&!L.hideCloseButton?(Object(u.openBlock)(),Object(u.createElementBlock)("button",{key:0,class:Object(u.normalizeClass)(["iiz__btn iiz__close",{"iiz__close--visible":ne.isZoomed}]),type:"button","aria-label":"Zoom Out",style:Object(u.normalizeStyle)({transition:"linear ".concat(ne.isFullscreen?0:L.fadeDuration,"ms opacity, linear ").concat(ne.isFullscreen?0:L.fadeDuration,"ms visibility")}),onClick:A[1]||(A[1]=Object(u.withModifiers)(function(){return se.handleClose&&se.handleClose.apply(se,arguments)},["stop"]))},null,6)):Object(u.createCommentVNode)("",!0)],64))],64)):Object(u.createCommentVNode)("",!0),!ne.isZoomed&&!L.hideHint?(Object(u.openBlock)(),Object(u.createElementBlock)("span",m)):Object(u.createCommentVNode)("",!0)],16)}r("a9e3"),r("4de4"),r("d3b7");var v={name:"InnerImageZoom",props:{moveType:{type:String,default:"pan"},zoomType:{type:String,default:"click"},src:{type:String,required:!0},srcSet:String,sizes:String,sources:Array,width:Number,height:Number,hasSpacer:Boolean,zoomSrc:String,zoomScale:{type:Number,default:1},zoomPreload:Boolean,alt:String,fadeDuration:{type:Number,default:150},fullscreenOnMobile:Boolean,mobileBreakpoint:{type:Number,default:640},hideHint:Boolean,hideCloseButton:Boolean,className:String,afterZoomIn:Function,afterZoomOut:Function},data:function(){return{isActive:this.zoomPreload||!1,isTouch:!1,isZoomed:!1,isFullscreen:!1,isDragging:!1,currentMoveType:this.moveType,left:0,top:0,imgProps:{}}},created:function(){this.setDefaults(),I(this.fullscreenOnMobile,this.mobileBreakpoint)&&(this.isActive=!1)},computed:{validSources:function(){return this.sources?this.sources.filter(function(A){return A.srcSet}):[]},createSpacer:function(){return this.width&&this.height&&this.hasSpacer}},methods:{handleMouseEnter:function(A){this.isActive=!0,this.zoomType==="hover"&&!this.isZoomed&&this.handleClick(A)},handleTouchStart:function(){this.isTouch=!0,this.isFullscreen=I(this.fullscreenOnMobile,this.mobileBreakpoint),this.currentMoveType="drag"},handleClick:function(A){if(this.isZoomed){this.isTouch?this.hideCloseButton&&this.handleClose():!this.isDragging&&this.zoomOut();return}this.isTouch&&(this.isActive=!0),this.imgProps.zoomImg?(this.handleLoad({target:this.imgProps.zoomImg}),this.zoomIn(A.pageX,A.pageY)):this.imgProps.onLoadCallback=this.zoomIn.bind(this,A.pageX,A.pageY)},handleLoad:function(A){var L=P(A.target,this.zoomScale);this.imgProps.zoomImg=A.target,this.imgProps.zoomImg.setAttribute("width",L.width),this.imgProps.zoomImg.setAttribute("height",L.height),this.imgProps.scaledDimensions=L,this.imgProps.bounds=C(this.$refs.img,!1),this.imgProps.ratios=O(this.imgProps.bounds,L),this.imgProps.onLoadCallback&&(this.imgProps.onLoadCallback(),this.imgProps.onLoadCallback=null)},handleMouseMove:function(A){var L=A.pageX-this.imgProps.offsets.x,me=A.pageY-this.imgProps.offsets.y;L=Math.max(Math.min(L,this.imgProps.bounds.width),0),me=Math.max(Math.min(me,this.imgProps.bounds.height),0),this.left=L*-this.imgProps.ratios.x,this.top=me*-this.imgProps.ratios.y},handleDragStart:function(A){this.imgProps.offsets=S(A.pageX||A.changedTouches[0].pageX,A.pageY||A.changedTouches[0].pageY,this.imgProps.zoomImg.offsetLeft,this.imgProps.zoomImg.offsetTop),this.imgProps.zoomImg.addEventListener(this.isTouch?"touchmove":"mousemove",this.handleDragMove,{passive:!0}),this.isTouch||(this.imgProps.eventPosition={x:A.pageX,y:A.pageY})},handleDragMove:function(A){var L=(A.pageX||A.changedTouches[0].pageX)-this.imgProps.offsets.x,me=(A.pageY||A.changedTouches[0].pageY)-this.imgProps.offsets.y;L=Math.max(Math.min(L,0),(this.imgProps.scaledDimensions.width-this.imgProps.bounds.width)*-1),me=Math.max(Math.min(me,0),(this.imgProps.scaledDimensions.height-this.imgProps.bounds.height)*-1),this.left=L,this.top=me},handleDragEnd:function(A){if(this.imgProps.zoomImg.removeEventListener(this.isTouch?"touchmove":"mousemove",this.handleDragMove),!this.isTouch){var L=Math.abs(A.pageX-this.imgProps.eventPosition.x),me=Math.abs(A.pageY-this.imgProps.eventPosition.y);this.isDragging=L>5||me>5}},handleMouseLeave:function(A){this.currentMoveType==="drag"&&this.isZoomed?this.handleDragEnd(A):this.handleClose()},handleClose:function(){var A=this;this.zoomOut(function(){setTimeout(function(){(A.zoomPreload&&A.isTouch||!A.zoomPreload)&&(A.isActive=!1,A.setDefaults()),A.isTouch=!1,A.isFullscreen=!1,A.currentMoveType=A.moveType},A.isFullscreen?0:A.fadeDuration)})},initialMove:function(A,L){this.imgProps.offsets=S(window.pageXOffset,window.pageYOffset,-this.imgProps.bounds.left,-this.imgProps.bounds.top),this.handleMouseMove({pageX:A,pageY:L})},initialDragMove:function(A,L){var me=(A-(window.pageXOffset+this.imgProps.bounds.left))*-this.imgProps.ratios.x,ne=(L-(window.pageYOffset+this.imgProps.bounds.top))*-this.imgProps.ratios.y;me=me+(this.isFullscreen?(window.innerWidth-this.imgProps.bounds.width)/2:0),ne=ne+(this.isFullscreen?(window.innerHeight-this.imgProps.bounds.height)/2:0),this.imgProps.bounds=C(this.$refs.img,this.isFullscreen),this.imgProps.offsets=S(0,0,0,0),this.handleDragMove({changedTouches:[{pageX:me,pageY:ne}],preventDefault:function(){},stopPropagation:function(){}})},zoomIn:function(A,L){var me=this.currentMoveType==="drag"?this.initialDragMove:this.initialMove;this.isZoomed=!0,me(A,L),this.afterZoomIn&&this.afterZoomIn()},zoomOut:function(A){this.isZoomed=!1,this.afterZoomOut&&this.afterZoomOut(),A&&A()},setDefaults:function(){this.imgProps.onLoadCallback=null,this.imgProps.zoomImg=null,this.imgProps.bounds={},this.imgProps.offsets={},this.imgProps.ratios={},this.imgProps.eventPosition={},this.imgProps.scaledDimensions={}}}};function C(F,A){return A?{width:window.innerWidth,height:window.innerHeight,left:0,top:0}:F.getBoundingClientRect()}function S(F,A,L,me){return{x:F-L,y:A-me}}function O(F,A){return{x:(A.width-F.width)/F.width,y:(A.height-F.height)/F.height}}function I(F,A){return F&&window.matchMedia&&window.matchMedia("(max-width: ".concat(A,"px)")).matches}function P(F,A){return{width:F.naturalWidth*A,height:F.naturalHeight*A}}r("7ae1");var D=r("6b0d"),K=r.n(D),q=K()(v,[["render",T],["__scopeId","data-v-d1255c78"]]),j=q,le=j;s.default=le},fc6a:function(i,s,r){var o=r("44ad"),a=r("1d80");i.exports=function(l){return o(a(l))}},fdbf:function(i,s,r){var o=r("4930");i.exports=o&&!Symbol.sham&&typeof Symbol.iterator=="symbol"}})})})(cE);var KD=cE.exports;const GD=VD(KD),YD=t=>(Cs("data-v-99afe209"),t=t(),Ss(),t),XD={class:"min-h-screen px-4 md:px-10 pt-16 max-w-[1400px] mx-auto"},qD=YD(()=>B("h1",{class:"leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"}," Welcome to Earth image of the day! ",-1)),JD={class:"relative aspect-[1/1] max-w-2xl h-auto mx-auto z-10"},QD={key:0,class:"skeleton-loader"},ZD=ut({__name:"EarthView",setup(t){const e=Ue(0),n=Ue(0),i=Ue("");return si(async()=>{try{if(navigator.geolocation){const u=await new Promise((h,f)=>{navigator.geolocation.getCurrentPosition(h,f)});e.value=u.coords.latitude,n.value=u.coords.longitude}else console.log("No navigator available");const s=new Date,r=String(s.getMonth()+1).padStart(2,"0"),o=String(s.getDate()).padStart(2,"0"),a="1wuupD57kD8FGBmzFaOzZMnsmCO1ZmYPfDpppVxl",c=await(await fetch(`https://api.nasa.gov/planetary/earth/assets?lat=${e.value}&lon=${n.value}&date=2021-${r}-${o}&&dim=0.10&api_key=${a}
`)).json();i.value=c.url}catch(s){console.log(s)}}),(s,r)=>(ye(),xe("div",XD,[qD,B("div",JD,[i.value?(ye(),Pi(ue(GD),{key:1,height:1e3,width:1e3,src:i.value},null,8,["src"])):(ye(),xe("div",QD))])]))}});const eM=li(ZD,[["__scopeId","data-v-99afe209"]]),uE=t=>(Cs("data-v-52e5bc9b"),t=t(),Ss(),t),tM={class:"text-white min-h-screen p-3 sm:p-10 max-w-[1400px] mx-auto"},nM=uE(()=>B("h1",{class:"leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"}," Welcome to Astronomy Picture of The Day ! ",-1)),iM={key:0,class:"skeleton-earth"},sM={key:1,class:"gap-10 h-auto mx-auto flex flex-col"},rM={key:0,class:"uppercase text-yellow-400 text-center font-bold text-xl"},oM={class:"max-w- xl:max-w-4xl mx-auto"},aM=["src"],lM=["src"],cM={class:"text-lg flex-[0] text-center"},uM=uE(()=>B("span",{class:"text-white font-lg"},"Pick a Date - get new image or video of the day ",-1)),hM=["max"],fM={class:"py-5 text-left font-extralight"},wg="https://api.nasa.gov/planetary/apod?api_key=",dM=ut({__name:"AstronomyPictureOFTheDayView",setup(t){const e="1wuupD57kD8FGBmzFaOzZMnsmCO1ZmYPfDpppVxl",n=Ue(""),i=new Date,s=i.getFullYear();let r=i.getMonth()+1,o=i.getDate();r<10&&(r="0"+r),o<10&&(o="0"+o);const a=`${s}-${r}-${o}`;n.value=a;const l=Ue(null),c=async()=>{const h=await(await fetch(`${wg}${e}&date=${n.value}`)).json();l.value=h};return si(async()=>{const h=await(await fetch(wg+e)).json();l.value=h}),(u,h)=>(ye(),xe("main",null,[B("div",tM,[nM,l.value?(ye(),xe("div",sM,[l.value.title?(ye(),xe("h2",rM,An(l.value.title),1)):Qu("",!0),B("div",oM,[l.value.media_type==="video"?(ye(),xe("iframe",{key:0,class:"h-full w-full aspect-video",src:l.value.url.substring(0,l.value.url.length-6),frameborder:"0"},null,8,aM)):(ye(),xe("img",{key:1,src:l.value.hdurl?l.value.hdurl:l.value.url,alt:""},null,8,lM))]),B("div",cM,[uM,Zg(B("input",{max:n.value,onChange:c,"onUpdate:modelValue":h[0]||(h[0]=f=>n.value=f),id:"indate",class:"mt-5 md:ml-5 rounded-full bg-indigo-500 ring-yellow-400 py-2.5 text-black px-5 text-xl font-bold cursor-pointer",type:"date"},null,40,hM),[[br,n.value]]),B("p",fM,An(l.value.explanation),1)])])):(ye(),xe("div",iM))])]))}});const pM=li(dM,[["__scopeId","data-v-52e5bc9b"]]),gM={};function mM(t,e){return ye(),xe("div")}const _M=li(gM,[["render",mM]]),yM={class:"text-white min-h-screen p-10 max-w-[1400px] mx-auto"},vM=B("h1",{class:"leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"}," User account ",-1),EM={class:"flex flex-col justify-center items-center text-"},wM=["src"],IM={class:"mt-10 flex justify-between items-end"},bM={class:"mt-5"},TM=B("div",{class:"mt-10"},[B("h2",{class:"text-xl md:text-2xl font-bold mb-8 text-center font-michroma"}," FAVORITE IMAGES ")],-1),CM=B("div",null,null,-1),SM=ut({__name:"UserView",setup(t){const{closeMenu:e}=oE();e();const n=jh();return(i,s)=>{const r=Xr("Login");return ye(),xe("div",yM,[vM,B("div",EM,[B("img",{src:ue(n).photoURL,alt:"user image",class:"h-[200px] w-[200px] rounded-full"},null,8,wM),B("div",IM,An(ue(n).displayName),1),B("div",bM,An(ue(n).email),1),TM]),CM,Q(r)])}}}),RM={},AM=Ju('<div><label for="">Email</label><input type="email"><label for="">Password</label><input type="password"><label for="">Repeat password</label><input type="password"></div>',1),xM=[AM];function OM(t,e){return ye(),xe("form",null,xM)}const PM=li(RM,[["render",OM]]),kM={class:"text-white min-h-screen p-10 max-w-[1400px] mx-auto"},NM=B("h1",{class:"leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-bold mb-8 text-center font-michroma"}," Login to your account ",-1),DM={class:"max-w-md flex flex-col bg-gray-800 items-center justify-center p-10 m-auto rounded-xl"},MM=Ju('<div class="relative w-full flex py-5 items-center"><div class="flex-grow border-t border-gray-400"></div><span class="flex-shrink mx-4 text-gray-400">or</span><div class="flex-grow border-t border-gray-400"></div></div><label for="" class="pb-2 self-start">Email</label><input placeholder="name@example.com" type="email" class="w-full mb-2 rounded-full bg-gray-700 px-6 py-1.5"><label for="" class="pb-2 self-start">Password</label><input placeholder="••••••••" type="password" class="mb-2 rounded-full w-full bg-gray-700 px-6 py-1.5"><small class="self-end justify-self-end text-sm font-extralight">Forgot Password ?</small><button class="mt-10 bg-teal-500 py-3 w-full px-6 text-xl font-bold rounded-lg"> LOGIN </button>',7),LM=ut({__name:"LoginView",setup(t){Ue(""),Ue("");const e=B0(),n=A0(),i=new tn,s=async()=>{try{const r=await cx(n,i),o=tn.credentialFromResult(r),a=o==null?void 0:o.accessToken;r.user&&e.push("/")}catch(r){console.log(r)}};return(r,o)=>(ye(),xe("div",kM,[NM,B("div",DM,[B("button",{onClick:s,class:"text-gray-400 flex mb-10 items-center justify-center gap-4 w-full rounded-full px-2 py-2 border-2 active:bg-gray-500 bg-gray-800 border-gray-600 hover:bg-gray-600 hover:border-gray-700"},[Q(ue(It),{icon:"flat-color-icons:google",width:"20px"}),Fe(" Sign in with Google ")]),MM])]))}}),Bo=(t,e,n)=>{const i=jh();console.log(i),n()},FM=bk({history:BP("/"),scrollBehavior(t,e,n){return{top:0}},routes:[{path:"/",name:"home",component:PD},{path:"/epic",name:"epic",component:HD},{path:"/apod",name:"apod",component:pM},{path:"/earth",name:"earth",component:eM},{path:"/user",name:"user",component:SM,beforeEnter:Bo},{path:"/login",name:"login",component:LM,beforeEnter:Bo},{path:"/register",name:"register",component:PM,beforeEnter:Bo},{path:"/create-account",name:"create-account",component:_M,beforeEnter:Bo},{path:"/about",name:"about",component:()=>sD(()=>import("./AboutView-49a335a5.js"),["assets/AboutView-49a335a5.js","assets/AboutView-4d995ba2.css"])}]}),Nl=i_(tD);Nl.use(Db());Nl.use(FM);Nl.use(IP,{firebaseApp:Ly,modules:[wP()]});Nl.mount("#app");export{li as _,B as a,xe as c,ye as o};
