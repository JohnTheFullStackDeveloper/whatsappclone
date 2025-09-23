(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dp={exports:{}},ll={},hp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var us=Symbol.for("react.element"),Ky=Symbol.for("react.portal"),qy=Symbol.for("react.fragment"),Qy=Symbol.for("react.strict_mode"),Yy=Symbol.for("react.profiler"),Xy=Symbol.for("react.provider"),Jy=Symbol.for("react.context"),Zy=Symbol.for("react.forward_ref"),ev=Symbol.for("react.suspense"),tv=Symbol.for("react.memo"),nv=Symbol.for("react.lazy"),bd=Symbol.iterator;function rv(t){return t===null||typeof t!="object"?null:(t=bd&&t[bd]||t["@@iterator"],typeof t=="function"?t:null)}var fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pp=Object.assign,mp={};function Wr(t,e,n){this.props=t,this.context=e,this.refs=mp,this.updater=n||fp}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gp(){}gp.prototype=Wr.prototype;function Kc(t,e,n){this.props=t,this.context=e,this.refs=mp,this.updater=n||fp}var qc=Kc.prototype=new gp;qc.constructor=Kc;pp(qc,Wr.prototype);qc.isPureReactComponent=!0;var Fd=Array.isArray,_p=Object.prototype.hasOwnProperty,Qc={current:null},yp={key:!0,ref:!0,__self:!0,__source:!0};function vp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_p.call(e,r)&&!yp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:us,type:t,key:s,ref:o,props:i,_owner:Qc.current}}function iv(t,e){return{$$typeof:us,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yc(t){return typeof t=="object"&&t!==null&&t.$$typeof===us}function sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ud=/\/+/g;function Vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sv(""+t.key):e.toString(36)}function Qs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case us:case Ky:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vl(o,0):r,Fd(i)?(n="",t!=null&&(n=t.replace(Ud,"$&/")+"/"),Qs(i,e,n,"",function(c){return c})):i!=null&&(Yc(i)&&(i=iv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ud,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Vl(s,l);o+=Qs(s,e,n,a,i)}else if(a=rv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Vl(s,l++),o+=Qs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Rs(t,e,n){if(t==null)return t;var r=[],i=0;return Qs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ov(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},Ys={transition:null},lv={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Ys,ReactCurrentOwner:Qc};function wp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Rs,forEach:function(t,e,n){Rs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Rs(t,function(){e++}),e},toArray:function(t){return Rs(t,function(e){return e})||[]},only:function(t){if(!Yc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Wr;U.Fragment=qy;U.Profiler=Yy;U.PureComponent=Kc;U.StrictMode=Qy;U.Suspense=ev;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lv;U.act=wp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)_p.call(e,a)&&!yp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:us,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Jy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xy,_context:t},t.Consumer=t};U.createElement=vp;U.createFactory=function(t){var e=vp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Zy,render:t}};U.isValidElement=Yc;U.lazy=function(t){return{$$typeof:nv,_payload:{_status:-1,_result:t},_init:ov}};U.memo=function(t,e){return{$$typeof:tv,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=Ys.transition;Ys.transition={};try{t()}finally{Ys.transition=e}};U.unstable_act=wp;U.useCallback=function(t,e){return Pe.current.useCallback(t,e)};U.useContext=function(t){return Pe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};U.useEffect=function(t,e){return Pe.current.useEffect(t,e)};U.useId=function(){return Pe.current.useId()};U.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Pe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};U.useRef=function(t){return Pe.current.useRef(t)};U.useState=function(t){return Pe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Pe.current.useTransition()};U.version="18.3.1";hp.exports=U;var V=hp.exports;const av=Gy(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv=V,uv=Symbol.for("react.element"),dv=Symbol.for("react.fragment"),hv=Object.prototype.hasOwnProperty,fv=cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pv={key:!0,ref:!0,__self:!0,__source:!0};function Ep(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hv.call(e,r)&&!pv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uv,type:t,key:s,ref:o,props:i,_owner:fv.current}}ll.Fragment=dv;ll.jsx=Ep;ll.jsxs=Ep;dp.exports=ll;var _=dp.exports,Cp={exports:{}},Ge={},Sp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var L=N.length;N.push(O);e:for(;0<L;){var re=L-1>>>1,de=N[re];if(0<i(de,O))N[re]=O,N[L]=de,L=re;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],L=N.pop();if(L!==O){N[0]=L;e:for(var re=0,de=N.length,Ns=de>>>1;re<Ns;){var Tn=2*(re+1)-1,zl=N[Tn],kn=Tn+1,xs=N[kn];if(0>i(zl,L))kn<de&&0>i(xs,zl)?(N[re]=xs,N[kn]=L,re=kn):(N[re]=zl,N[Tn]=L,re=Tn);else if(kn<de&&0>i(xs,L))N[re]=xs,N[kn]=L,re=kn;else break e}}return O}function i(N,O){var L=N.sortIndex-O.sortIndex;return L!==0?L:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,h=null,u=3,g=!1,y=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=N)r(c),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(c)}}function w(N){if(v=!1,p(N),!y)if(n(a)!==null)y=!0,Ul(I);else{var O=n(c);O!==null&&jl(w,O.startTime-N)}}function I(N,O){y=!1,v&&(v=!1,m(P),P=-1),g=!0;var L=u;try{for(p(O),h=n(a);h!==null&&(!(h.expirationTime>O)||N&&!et());){var re=h.callback;if(typeof re=="function"){h.callback=null,u=h.priorityLevel;var de=re(h.expirationTime<=O);O=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(a)&&r(a),p(O)}else r(a);h=n(a)}if(h!==null)var Ns=!0;else{var Tn=n(c);Tn!==null&&jl(w,Tn.startTime-O),Ns=!1}return Ns}finally{h=null,u=L,g=!1}}var S=!1,x=null,P=-1,D=5,j=-1;function et(){return!(t.unstable_now()-j<D)}function Xr(){if(x!==null){var N=t.unstable_now();j=N;var O=!0;try{O=x(!0,N)}finally{O?Jr():(S=!1,x=null)}}else S=!1}var Jr;if(typeof f=="function")Jr=function(){f(Xr)};else if(typeof MessageChannel<"u"){var Md=new MessageChannel,$y=Md.port2;Md.port1.onmessage=Xr,Jr=function(){$y.postMessage(null)}}else Jr=function(){R(Xr,0)};function Ul(N){x=N,S||(S=!0,Jr())}function jl(N,O){P=R(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Ul(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var L=u;u=O;try{return N()}finally{u=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=u;u=N;try{return O()}finally{u=L}},t.unstable_scheduleCallback=function(N,O,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,N){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=L+de,N={id:d++,callback:O,priorityLevel:N,startTime:L,expirationTime:de,sortIndex:-1},L>re?(N.sortIndex=L,e(c,N),n(a)===null&&N===n(c)&&(v?(m(P),P=-1):v=!0,jl(w,L-re))):(N.sortIndex=de,e(a,N),y||g||(y=!0,Ul(I))),N},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(N){var O=u;return function(){var L=u;u=O;try{return N.apply(this,arguments)}finally{u=L}}}})(Ip);Sp.exports=Ip;var mv=Sp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv=V,$e=mv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tp=new Set,bi={};function Jn(t,e){Rr(t,e),Rr(t+"Capture",e)}function Rr(t,e){for(bi[t]=e,t=0;t<e.length;t++)Tp.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,_v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jd={},zd={};function yv(t){return Aa.call(zd,t)?!0:Aa.call(jd,t)?!1:_v.test(t)?zd[t]=!0:(jd[t]=!0,!1)}function vv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wv(t,e,n,r){if(e===null||typeof e>"u"||vv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xc=/[\-:]([a-z])/g;function Jc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xc,Jc);ve[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xc,Jc);ve[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xc,Jc);ve[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zc(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wv(e,n,i,r)&&(n=null),r||i===null?yv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ps=Symbol.for("react.element"),ir=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),eu=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),tu=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),La=Symbol.for("react.suspense_list"),nu=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),xp=Symbol.for("react.offscreen"),Vd=Symbol.iterator;function Zr(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Wl;function hi(t){if(Wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||""}return`
`+Wl+t}var Hl=!1;function Bl(t,e){if(!t||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hi(t):""}function Ev(t){switch(t.tag){case 5:return hi(t.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return t=Bl(t.type,!1),t;case 11:return t=Bl(t.type.render,!1),t;case 1:return t=Bl(t.type,!0),t;default:return""}}function Ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sr:return"Fragment";case ir:return"Portal";case Oa:return"Profiler";case eu:return"StrictMode";case Da:return"Suspense";case La:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Np:return(t.displayName||"Context")+".Consumer";case kp:return(t._context.displayName||"Context")+".Provider";case tu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nu:return e=t.displayName||null,e!==null?e:Ma(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return Ma(t(e))}catch{}}return null}function Cv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ma(e);case 8:return e===eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sv(t){var e=Rp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function As(t){t._valueTracker||(t._valueTracker=Sv(t))}function Pp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Rp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ba(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ap(t,e){e=e.checked,e!=null&&Zc(t,"checked",e,!1)}function Fa(t,e){Ap(t,e);var n=gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ua(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ua(t,e.type,gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ua(t,e,n){(e!=="number"||fo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fi=Array.isArray;function yr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ja(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(fi(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gn(n)}}function Op(t,e){var n=gn(e.value),r=gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $d(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Os,Lp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Os=Os||document.createElement("div"),Os.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Os.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iv=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(t){Iv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_i[e]=_i[t]})});function Mp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_i.hasOwnProperty(t)&&_i[t]?(""+e).trim():e+"px"}function bp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Tv=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(t,e){if(e){if(Tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Wa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ba=null,vr=null,wr=null;function Gd(t){if(t=fs(t)){if(typeof Ba!="function")throw Error(E(280));var e=t.stateNode;e&&(e=hl(e),Ba(t.stateNode,t.type,e))}}function Fp(t){vr?wr?wr.push(t):wr=[t]:vr=t}function Up(){if(vr){var t=vr,e=wr;if(wr=vr=null,Gd(t),e)for(t=0;t<e.length;t++)Gd(e[t])}}function jp(t,e){return t(e)}function zp(){}var $l=!1;function Vp(t,e,n){if($l)return t(e,n);$l=!0;try{return jp(t,e,n)}finally{$l=!1,(vr!==null||wr!==null)&&(zp(),Up())}}function Ui(t,e){var n=t.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var $a=!1;if(At)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){$a=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{$a=!1}function kv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var yi=!1,po=null,mo=!1,Ga=null,Nv={onError:function(t){yi=!0,po=t}};function xv(t,e,n,r,i,s,o,l,a){yi=!1,po=null,kv.apply(Nv,arguments)}function Rv(t,e,n,r,i,s,o,l,a){if(xv.apply(this,arguments),yi){if(yi){var c=po;yi=!1,po=null}else throw Error(E(198));mo||(mo=!0,Ga=c)}}function Zn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kd(t){if(Zn(t)!==t)throw Error(E(188))}function Pv(t){var e=t.alternate;if(!e){if(e=Zn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kd(i),t;if(s===r)return Kd(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Hp(t){return t=Pv(t),t!==null?Bp(t):null}function Bp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Bp(t);if(e!==null)return e;t=t.sibling}return null}var $p=$e.unstable_scheduleCallback,qd=$e.unstable_cancelCallback,Av=$e.unstable_shouldYield,Ov=$e.unstable_requestPaint,ie=$e.unstable_now,Dv=$e.unstable_getCurrentPriorityLevel,iu=$e.unstable_ImmediatePriority,Gp=$e.unstable_UserBlockingPriority,go=$e.unstable_NormalPriority,Lv=$e.unstable_LowPriority,Kp=$e.unstable_IdlePriority,al=null,yt=null;function Mv(t){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(al,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Uv,bv=Math.log,Fv=Math.LN2;function Uv(t){return t>>>=0,t===0?32:31-(bv(t)/Fv|0)|0}var Ds=64,Ls=4194304;function pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _o(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=pi(l):(s&=o,s!==0&&(r=pi(s)))}else o=n&~i,o!==0?r=pi(o):s!==0&&(r=pi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function jv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=jv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ka(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qp(){var t=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),t}function Gl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ds(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function Vv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function su(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function Qp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yp,ou,Xp,Jp,Zp,qa=!1,Ms=[],tn=null,nn=null,rn=null,ji=new Map,zi=new Map,Kt=[],Wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(t,e){switch(t){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(e.pointerId)}}function ti(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fs(e),e!==null&&ou(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Hv(t,e,n,r,i){switch(e){case"focusin":return tn=ti(tn,t,e,n,r,i),!0;case"dragenter":return nn=ti(nn,t,e,n,r,i),!0;case"mouseover":return rn=ti(rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ji.set(s,ti(ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zi.set(s,ti(zi.get(s)||null,t,e,n,r,i)),!0}return!1}function em(t){var e=An(t.target);if(e!==null){var n=Zn(e);if(n!==null){if(e=n.tag,e===13){if(e=Wp(n),e!==null){t.blockedOn=e,Zp(t.priority,function(){Xp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return e=fs(n),e!==null&&ou(e),t.blockedOn=n,!1;e.shift()}return!0}function Yd(t,e,n){Xs(t)&&n.delete(e)}function Bv(){qa=!1,tn!==null&&Xs(tn)&&(tn=null),nn!==null&&Xs(nn)&&(nn=null),rn!==null&&Xs(rn)&&(rn=null),ji.forEach(Yd),zi.forEach(Yd)}function ni(t,e){t.blockedOn===e&&(t.blockedOn=null,qa||(qa=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Bv)))}function Vi(t){function e(i){return ni(i,t)}if(0<Ms.length){ni(Ms[0],t);for(var n=1;n<Ms.length;n++){var r=Ms[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tn!==null&&ni(tn,t),nn!==null&&ni(nn,t),rn!==null&&ni(rn,t),ji.forEach(e),zi.forEach(e),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)em(n),n.blockedOn===null&&Kt.shift()}var Er=jt.ReactCurrentBatchConfig,yo=!0;function $v(t,e,n,r){var i=H,s=Er.transition;Er.transition=null;try{H=1,lu(t,e,n,r)}finally{H=i,Er.transition=s}}function Gv(t,e,n,r){var i=H,s=Er.transition;Er.transition=null;try{H=4,lu(t,e,n,r)}finally{H=i,Er.transition=s}}function lu(t,e,n,r){if(yo){var i=Qa(t,e,n,r);if(i===null)na(t,e,r,vo,n),Qd(t,r);else if(Hv(i,t,e,n,r))r.stopPropagation();else if(Qd(t,r),e&4&&-1<Wv.indexOf(t)){for(;i!==null;){var s=fs(i);if(s!==null&&Yp(s),s=Qa(t,e,n,r),s===null&&na(t,e,r,vo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else na(t,e,r,null,n)}}var vo=null;function Qa(t,e,n,r){if(vo=null,t=ru(r),t=An(t),t!==null)if(e=Zn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vo=t,null}function tm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dv()){case iu:return 1;case Gp:return 4;case go:case Lv:return 16;case Kp:return 536870912;default:return 16}default:return 16}}var Zt=null,au=null,Js=null;function nm(){if(Js)return Js;var t,e=au,n=e.length,r,i="value"in Zt?Zt.value:Zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Js=i.slice(t,1<r?1-r:void 0)}function Zs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bs(){return!0}function Xd(){return!1}function Ke(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bs:Xd,this.isPropagationStopped=Xd,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),e}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=Ke(Hr),hs=ee({},Hr,{view:0,detail:0}),Kv=Ke(hs),Kl,ql,ri,cl=ee({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ri&&(ri&&t.type==="mousemove"?(Kl=t.screenX-ri.screenX,ql=t.screenY-ri.screenY):ql=Kl=0,ri=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),Jd=Ke(cl),qv=ee({},cl,{dataTransfer:0}),Qv=Ke(qv),Yv=ee({},hs,{relatedTarget:0}),Ql=Ke(Yv),Xv=ee({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=Ke(Xv),Zv=ee({},Hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e0=Ke(Zv),t0=ee({},Hr,{data:0}),Zd=Ke(t0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i0[t])?!!e[t]:!1}function uu(){return s0}var o0=ee({},hs,{key:function(t){if(t.key){var e=n0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(t){return t.type==="keypress"?Zs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l0=Ke(o0),a0=ee({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=Ke(a0),c0=ee({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),u0=Ke(c0),d0=ee({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),h0=Ke(d0),f0=ee({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=Ke(f0),m0=[9,13,27,32],du=At&&"CompositionEvent"in window,vi=null;At&&"documentMode"in document&&(vi=document.documentMode);var g0=At&&"TextEvent"in window&&!vi,rm=At&&(!du||vi&&8<vi&&11>=vi),th=" ",nh=!1;function im(t,e){switch(t){case"keyup":return m0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function _0(t,e){switch(t){case"compositionend":return sm(e);case"keypress":return e.which!==32?null:(nh=!0,th);case"textInput":return t=e.data,t===th&&nh?null:t;default:return null}}function y0(t,e){if(or)return t==="compositionend"||!du&&im(t,e)?(t=nm(),Js=au=Zt=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rm&&e.locale!=="ko"?null:e.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v0[t.type]:e==="textarea"}function om(t,e,n,r){Fp(r),e=wo(e,"onChange"),0<e.length&&(n=new cu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wi=null,Wi=null;function w0(t){_m(t,0)}function ul(t){var e=cr(t);if(Pp(e))return t}function E0(t,e){if(t==="change")return e}var lm=!1;if(At){var Yl;if(At){var Xl="oninput"in document;if(!Xl){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),Xl=typeof ih.oninput=="function"}Yl=Xl}else Yl=!1;lm=Yl&&(!document.documentMode||9<document.documentMode)}function sh(){wi&&(wi.detachEvent("onpropertychange",am),Wi=wi=null)}function am(t){if(t.propertyName==="value"&&ul(Wi)){var e=[];om(e,Wi,t,ru(t)),Vp(w0,e)}}function C0(t,e,n){t==="focusin"?(sh(),wi=e,Wi=n,wi.attachEvent("onpropertychange",am)):t==="focusout"&&sh()}function S0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(Wi)}function I0(t,e){if(t==="click")return ul(e)}function T0(t,e){if(t==="input"||t==="change")return ul(e)}function k0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:k0;function Hi(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lh(t,e){var n=oh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oh(n)}}function cm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function um(){for(var t=window,e=fo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fo(t.document)}return e}function hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function N0(t){var e=um(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cm(n.ownerDocument.documentElement,n)){if(r!==null&&hu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lh(n,s);var o=lh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x0=At&&"documentMode"in document&&11>=document.documentMode,lr=null,Ya=null,Ei=null,Xa=!1;function ah(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||lr==null||lr!==fo(r)||(r=lr,"selectionStart"in r&&hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ei&&Hi(Ei,r)||(Ei=r,r=wo(Ya,"onSelect"),0<r.length&&(e=new cu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=lr)))}function Fs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ar={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},Jl={},dm={};At&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function dl(t){if(Jl[t])return Jl[t];if(!ar[t])return t;var e=ar[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dm)return Jl[t]=e[n];return t}var hm=dl("animationend"),fm=dl("animationiteration"),pm=dl("animationstart"),mm=dl("transitionend"),gm=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(t,e){gm.set(t,e),Jn(e,[t])}for(var Zl=0;Zl<ch.length;Zl++){var ea=ch[Zl],R0=ea.toLowerCase(),P0=ea[0].toUpperCase()+ea.slice(1);En(R0,"on"+P0)}En(hm,"onAnimationEnd");En(fm,"onAnimationIteration");En(pm,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(mm,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function uh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Rv(r,e,void 0,t),t.currentTarget=null}function _m(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;uh(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;uh(i,l,c),s=a}}}if(mo)throw t=Ga,mo=!1,Ga=null,t}function q(t,e){var n=e[nc];n===void 0&&(n=e[nc]=new Set);var r=t+"__bubble";n.has(r)||(ym(e,t,2,!1),n.add(r))}function ta(t,e,n){var r=0;e&&(r|=4),ym(n,t,r,e)}var Us="_reactListening"+Math.random().toString(36).slice(2);function Bi(t){if(!t[Us]){t[Us]=!0,Tp.forEach(function(n){n!=="selectionchange"&&(A0.has(n)||ta(n,!1,t),ta(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Us]||(e[Us]=!0,ta("selectionchange",!1,e))}}function ym(t,e,n,r){switch(tm(e)){case 1:var i=$v;break;case 4:i=Gv;break;default:i=lu}n=i.bind(null,e,n,t),i=void 0,!$a||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function na(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=An(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Vp(function(){var c=s,d=ru(n),h=[];e:{var u=gm.get(t);if(u!==void 0){var g=cu,y=t;switch(t){case"keypress":if(Zs(n)===0)break e;case"keydown":case"keyup":g=l0;break;case"focusin":y="focus",g=Ql;break;case"focusout":y="blur",g=Ql;break;case"beforeblur":case"afterblur":g=Ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=u0;break;case hm:case fm:case pm:g=Jv;break;case mm:g=h0;break;case"scroll":g=Kv;break;case"wheel":g=p0;break;case"copy":case"cut":case"paste":g=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=eh}var v=(e&4)!==0,R=!v&&t==="scroll",m=v?u!==null?u+"Capture":null:u;v=[];for(var f=c,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,m!==null&&(w=Ui(f,m),w!=null&&v.push($i(f,w,p)))),R)break;f=f.return}0<v.length&&(u=new g(u,y,null,n,d),h.push({event:u,listeners:v}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",u&&n!==Ha&&(y=n.relatedTarget||n.fromElement)&&(An(y)||y[Ot]))break e;if((g||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?An(y):null,y!==null&&(R=Zn(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(v=Jd,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=eh,w="onPointerLeave",m="onPointerEnter",f="pointer"),R=g==null?u:cr(g),p=y==null?u:cr(y),u=new v(w,f+"leave",g,n,d),u.target=R,u.relatedTarget=p,w=null,An(d)===c&&(v=new v(m,f+"enter",y,n,d),v.target=p,v.relatedTarget=R,w=v),R=w,g&&y)t:{for(v=g,m=y,f=0,p=v;p;p=nr(p))f++;for(p=0,w=m;w;w=nr(w))p++;for(;0<f-p;)v=nr(v),f--;for(;0<p-f;)m=nr(m),p--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=nr(v),m=nr(m)}v=null}else v=null;g!==null&&dh(h,u,g,v,!1),y!==null&&R!==null&&dh(h,R,y,v,!0)}}e:{if(u=c?cr(c):window,g=u.nodeName&&u.nodeName.toLowerCase(),g==="select"||g==="input"&&u.type==="file")var I=E0;else if(rh(u))if(lm)I=T0;else{I=S0;var S=C0}else(g=u.nodeName)&&g.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(I=I0);if(I&&(I=I(t,c))){om(h,I,n,d);break e}S&&S(t,u,c),t==="focusout"&&(S=u._wrapperState)&&S.controlled&&u.type==="number"&&Ua(u,"number",u.value)}switch(S=c?cr(c):window,t){case"focusin":(rh(S)||S.contentEditable==="true")&&(lr=S,Ya=c,Ei=null);break;case"focusout":Ei=Ya=lr=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,ah(h,n,d);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":ah(h,n,d)}var x;if(du)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else or?im(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(rm&&n.locale!=="ko"&&(or||P!=="onCompositionStart"?P==="onCompositionEnd"&&or&&(x=nm()):(Zt=d,au="value"in Zt?Zt.value:Zt.textContent,or=!0)),S=wo(c,P),0<S.length&&(P=new Zd(P,t,null,n,d),h.push({event:P,listeners:S}),x?P.data=x:(x=sm(n),x!==null&&(P.data=x)))),(x=g0?_0(t,n):y0(t,n))&&(c=wo(c,"onBeforeInput"),0<c.length&&(d=new Zd("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=x))}_m(h,e)})}function $i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ui(t,n),s!=null&&r.unshift($i(t,s,i)),s=Ui(t,e),s!=null&&r.push($i(t,s,i))),t=t.return}return r}function nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Ui(n,s),a!=null&&o.unshift($i(n,a,l))):i||(a=Ui(n,s),a!=null&&o.push($i(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var O0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function hh(t){return(typeof t=="string"?t:""+t).replace(O0,`
`).replace(D0,"")}function js(t,e,n){if(e=hh(e),hh(t)!==e&&n)throw Error(E(425))}function Eo(){}var Ja=null,Za=null;function ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tc=typeof setTimeout=="function"?setTimeout:void 0,L0=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,M0=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(t){return fh.resolve(null).then(t).catch(b0)}:tc;function b0(t){setTimeout(function(){throw t})}function ra(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vi(e)}function sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ph(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),_t="__reactFiber$"+Br,Gi="__reactProps$"+Br,Ot="__reactContainer$"+Br,nc="__reactEvents$"+Br,F0="__reactListeners$"+Br,U0="__reactHandles$"+Br;function An(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ph(t);t!==null;){if(n=t[_t])return n;t=ph(t)}return e}t=n,n=t.parentNode}return null}function fs(t){return t=t[_t]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function hl(t){return t[Gi]||null}var rc=[],ur=-1;function Cn(t){return{current:t}}function Y(t){0>ur||(t.current=rc[ur],rc[ur]=null,ur--)}function K(t,e){ur++,rc[ur]=t.current,t.current=e}var _n={},Ie=Cn(_n),Me=Cn(!1),Vn=_n;function Pr(t,e){var n=t.type.contextTypes;if(!n)return _n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function Co(){Y(Me),Y(Ie)}function mh(t,e,n){if(Ie.current!==_n)throw Error(E(168));K(Ie,e),K(Me,n)}function vm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Cv(t)||"Unknown",i));return ee({},n,r)}function So(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,Vn=Ie.current,K(Ie,t),K(Me,Me.current),!0}function gh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=vm(t,e,Vn),r.__reactInternalMemoizedMergedChildContext=t,Y(Me),Y(Ie),K(Ie,t)):Y(Me),K(Me,n)}var St=null,fl=!1,ia=!1;function wm(t){St===null?St=[t]:St.push(t)}function j0(t){fl=!0,wm(t)}function Sn(){if(!ia&&St!==null){ia=!0;var t=0,e=H;try{var n=St;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,fl=!1}catch(i){throw St!==null&&(St=St.slice(t+1)),$p(iu,Sn),i}finally{H=e,ia=!1}}return null}var dr=[],hr=0,Io=null,To=0,qe=[],Qe=0,Wn=null,It=1,Tt="";function Nn(t,e){dr[hr++]=To,dr[hr++]=Io,Io=t,To=e}function Em(t,e,n){qe[Qe++]=It,qe[Qe++]=Tt,qe[Qe++]=Wn,Wn=t;var r=It;t=Tt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,It=1<<32-ut(e)+i|n<<i|r,Tt=s+t}else It=1<<s|n<<i|r,Tt=t}function fu(t){t.return!==null&&(Nn(t,1),Em(t,1,0))}function pu(t){for(;t===Io;)Io=dr[--hr],dr[hr]=null,To=dr[--hr],dr[hr]=null;for(;t===Wn;)Wn=qe[--Qe],qe[Qe]=null,Tt=qe[--Qe],qe[Qe]=null,It=qe[--Qe],qe[Qe]=null}var He=null,We=null,X=!1,it=null;function Cm(t,e){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _h(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,He=t,We=sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,He=t,We=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wn!==null?{id:It,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,He=t,We=null,!0):!1;default:return!1}}function ic(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sc(t){if(X){var e=We;if(e){var n=e;if(!_h(t,e)){if(ic(t))throw Error(E(418));e=sn(n.nextSibling);var r=He;e&&_h(t,e)?Cm(r,n):(t.flags=t.flags&-4097|2,X=!1,He=t)}}else{if(ic(t))throw Error(E(418));t.flags=t.flags&-4097|2,X=!1,He=t}}}function yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;He=t}function zs(t){if(t!==He)return!1;if(!X)return yh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ec(t.type,t.memoizedProps)),e&&(e=We)){if(ic(t))throw Sm(),Error(E(418));for(;e;)Cm(t,e),e=sn(e.nextSibling)}if(yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){We=sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}We=null}}else We=He?sn(t.stateNode.nextSibling):null;return!0}function Sm(){for(var t=We;t;)t=sn(t.nextSibling)}function Ar(){We=He=null,X=!1}function mu(t){it===null?it=[t]:it.push(t)}var z0=jt.ReactCurrentBatchConfig;function ii(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Vs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vh(t){var e=t._init;return e(t._payload)}function Im(t){function e(m,f){if(t){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=cn(m,f),m.index=0,m.sibling=null,m}function s(m,f,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=2,f):p):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,p,w){return f===null||f.tag!==6?(f=da(p,m.mode,w),f.return=m,f):(f=i(f,p),f.return=m,f)}function a(m,f,p,w){var I=p.type;return I===sr?d(m,f,p.props.children,w,p.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===$t&&vh(I)===f.type)?(w=i(f,p.props),w.ref=ii(m,f,p),w.return=m,w):(w=oo(p.type,p.key,p.props,null,m.mode,w),w.ref=ii(m,f,p),w.return=m,w)}function c(m,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=ha(p,m.mode,w),f.return=m,f):(f=i(f,p.children||[]),f.return=m,f)}function d(m,f,p,w,I){return f===null||f.tag!==7?(f=Un(p,m.mode,w,I),f.return=m,f):(f=i(f,p),f.return=m,f)}function h(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=da(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ps:return p=oo(f.type,f.key,f.props,null,m.mode,p),p.ref=ii(m,null,f),p.return=m,p;case ir:return f=ha(f,m.mode,p),f.return=m,f;case $t:var w=f._init;return h(m,w(f._payload),p)}if(fi(f)||Zr(f))return f=Un(f,m.mode,p,null),f.return=m,f;Vs(m,f)}return null}function u(m,f,p,w){var I=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return I!==null?null:l(m,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ps:return p.key===I?a(m,f,p,w):null;case ir:return p.key===I?c(m,f,p,w):null;case $t:return I=p._init,u(m,f,I(p._payload),w)}if(fi(p)||Zr(p))return I!==null?null:d(m,f,p,w,null);Vs(m,p)}return null}function g(m,f,p,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(p)||null,l(f,m,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ps:return m=m.get(w.key===null?p:w.key)||null,a(f,m,w,I);case ir:return m=m.get(w.key===null?p:w.key)||null,c(f,m,w,I);case $t:var S=w._init;return g(m,f,p,S(w._payload),I)}if(fi(w)||Zr(w))return m=m.get(p)||null,d(f,m,w,I,null);Vs(f,w)}return null}function y(m,f,p,w){for(var I=null,S=null,x=f,P=f=0,D=null;x!==null&&P<p.length;P++){x.index>P?(D=x,x=null):D=x.sibling;var j=u(m,x,p[P],w);if(j===null){x===null&&(x=D);break}t&&x&&j.alternate===null&&e(m,x),f=s(j,f,P),S===null?I=j:S.sibling=j,S=j,x=D}if(P===p.length)return n(m,x),X&&Nn(m,P),I;if(x===null){for(;P<p.length;P++)x=h(m,p[P],w),x!==null&&(f=s(x,f,P),S===null?I=x:S.sibling=x,S=x);return X&&Nn(m,P),I}for(x=r(m,x);P<p.length;P++)D=g(x,m,P,p[P],w),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?P:D.key),f=s(D,f,P),S===null?I=D:S.sibling=D,S=D);return t&&x.forEach(function(et){return e(m,et)}),X&&Nn(m,P),I}function v(m,f,p,w){var I=Zr(p);if(typeof I!="function")throw Error(E(150));if(p=I.call(p),p==null)throw Error(E(151));for(var S=I=null,x=f,P=f=0,D=null,j=p.next();x!==null&&!j.done;P++,j=p.next()){x.index>P?(D=x,x=null):D=x.sibling;var et=u(m,x,j.value,w);if(et===null){x===null&&(x=D);break}t&&x&&et.alternate===null&&e(m,x),f=s(et,f,P),S===null?I=et:S.sibling=et,S=et,x=D}if(j.done)return n(m,x),X&&Nn(m,P),I;if(x===null){for(;!j.done;P++,j=p.next())j=h(m,j.value,w),j!==null&&(f=s(j,f,P),S===null?I=j:S.sibling=j,S=j);return X&&Nn(m,P),I}for(x=r(m,x);!j.done;P++,j=p.next())j=g(x,m,P,j.value,w),j!==null&&(t&&j.alternate!==null&&x.delete(j.key===null?P:j.key),f=s(j,f,P),S===null?I=j:S.sibling=j,S=j);return t&&x.forEach(function(Xr){return e(m,Xr)}),X&&Nn(m,P),I}function R(m,f,p,w){if(typeof p=="object"&&p!==null&&p.type===sr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ps:e:{for(var I=p.key,S=f;S!==null;){if(S.key===I){if(I=p.type,I===sr){if(S.tag===7){n(m,S.sibling),f=i(S,p.props.children),f.return=m,m=f;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===$t&&vh(I)===S.type){n(m,S.sibling),f=i(S,p.props),f.ref=ii(m,S,p),f.return=m,m=f;break e}n(m,S);break}else e(m,S);S=S.sibling}p.type===sr?(f=Un(p.props.children,m.mode,w,p.key),f.return=m,m=f):(w=oo(p.type,p.key,p.props,null,m.mode,w),w.ref=ii(m,f,p),w.return=m,m=w)}return o(m);case ir:e:{for(S=p.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(m,f.sibling),f=i(f,p.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=ha(p,m.mode,w),f.return=m,m=f}return o(m);case $t:return S=p._init,R(m,f,S(p._payload),w)}if(fi(p))return y(m,f,p,w);if(Zr(p))return v(m,f,p,w);Vs(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,p),f.return=m,m=f):(n(m,f),f=da(p,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return R}var Or=Im(!0),Tm=Im(!1),ko=Cn(null),No=null,fr=null,gu=null;function _u(){gu=fr=No=null}function yu(t){var e=ko.current;Y(ko),t._currentValue=e}function oc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cr(t,e){No=t,gu=fr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(gu!==t)if(t={context:t,memoizedValue:e,next:null},fr===null){if(No===null)throw Error(E(308));fr=t,No.dependencies={lanes:0,firstContext:t}}else fr=fr.next=t;return e}var On=null;function vu(t){On===null?On=[t]:On.push(t)}function km(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gt=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function on(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,vu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function eo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,su(t,n)}}function wh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xo(t,e,n,r){var i=t.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,d=c=a=null,l=s;do{var u=l.lane,g=l.eventTime;if((r&u)===u){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,v=l;switch(u=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,u);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,u=typeof y=="function"?y.call(g,h,u):y,u==null)break e;h=ee({},h,u);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,u=i.effects,u===null?i.effects=[l]:u.push(l))}else g={eventTime:g,lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=g,a=h):d=d.next=g,o|=u;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;u=l,l=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(!0);if(d===null&&(a=h),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Bn|=o,t.lanes=o,t.memoizedState=h}}function Eh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ps={},vt=Cn(ps),Ki=Cn(ps),qi=Cn(ps);function Dn(t){if(t===ps)throw Error(E(174));return t}function Eu(t,e){switch(K(qi,e),K(Ki,t),K(vt,ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:za(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=za(e,t)}Y(vt),K(vt,e)}function Dr(){Y(vt),Y(Ki),Y(qi)}function xm(t){Dn(qi.current);var e=Dn(vt.current),n=za(e,t.type);e!==n&&(K(Ki,t),K(vt,n))}function Cu(t){Ki.current===t&&(Y(vt),Y(Ki))}var J=Cn(0);function Ro(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sa=[];function Su(){for(var t=0;t<sa.length;t++)sa[t]._workInProgressVersionPrimary=null;sa.length=0}var to=jt.ReactCurrentDispatcher,oa=jt.ReactCurrentBatchConfig,Hn=0,Z=null,le=null,fe=null,Po=!1,Ci=!1,Qi=0,V0=0;function we(){throw Error(E(321))}function Iu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function Tu(t,e,n,r,i,s){if(Hn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,to.current=t===null||t.memoizedState===null?$0:G0,t=n(r,i),Ci){s=0;do{if(Ci=!1,Qi=0,25<=s)throw Error(E(301));s+=1,fe=le=null,e.updateQueue=null,to.current=K0,t=n(r,i)}while(Ci)}if(to.current=Ao,e=le!==null&&le.next!==null,Hn=0,fe=le=Z=null,Po=!1,e)throw Error(E(300));return t}function ku(){var t=Qi!==0;return Qi=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?Z.memoizedState=fe=t:fe=fe.next=t,fe}function Ze(){if(le===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=fe===null?Z.memoizedState:fe.next;if(e!==null)fe=e,le=t;else{if(t===null)throw Error(E(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},fe===null?Z.memoizedState=fe=t:fe=fe.next=t}return fe}function Yi(t,e){return typeof e=="function"?e(t):e}function la(t){var e=Ze(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var d=c.lane;if((Hn&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,Z.lanes|=d,Bn|=d}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,ft(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Bn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function aa(t){var e=Ze(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ft(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Rm(){}function Pm(t,e){var n=Z,r=Ze(),i=e(),s=!ft(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,Nu(Dm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Xi(9,Om.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(E(349));Hn&30||Am(n,e,i)}return i}function Am(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Om(t,e,n,r){e.value=n,e.getSnapshot=r,Lm(e)&&Mm(t)}function Dm(t,e,n){return n(function(){Lm(e)&&Mm(t)})}function Lm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function Mm(t){var e=Dt(t,1);e!==null&&dt(e,t,1,-1)}function Ch(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},e.queue=t,t=t.dispatch=B0.bind(null,Z,t),[e.memoizedState,t]}function Xi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bm(){return Ze().memoizedState}function no(t,e,n,r){var i=gt();Z.flags|=t,i.memoizedState=Xi(1|e,n,void 0,r===void 0?null:r)}function pl(t,e,n,r){var i=Ze();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&Iu(r,o.deps)){i.memoizedState=Xi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=Xi(1|e,n,s,r)}function Sh(t,e){return no(8390656,8,t,e)}function Nu(t,e){return pl(2048,8,t,e)}function Fm(t,e){return pl(4,2,t,e)}function Um(t,e){return pl(4,4,t,e)}function jm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zm(t,e,n){return n=n!=null?n.concat([t]):null,pl(4,4,jm.bind(null,e,t),n)}function xu(){}function Vm(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Iu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wm(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Iu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hm(t,e,n){return Hn&21?(ft(n,e)||(n=qp(),Z.lanes|=n,Bn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function W0(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=oa.transition;oa.transition={};try{t(!1),e()}finally{H=n,oa.transition=r}}function Bm(){return Ze().memoizedState}function H0(t,e,n){var r=an(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$m(t))Gm(e,n);else if(n=km(t,e,n,r),n!==null){var i=xe();dt(n,t,r,i),Km(n,e,r)}}function B0(t,e,n){var r=an(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($m(t))Gm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ft(l,o)){var a=e.interleaved;a===null?(i.next=i,vu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=km(t,e,i,r),n!==null&&(i=xe(),dt(n,t,r,i),Km(n,e,r))}}function $m(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function Gm(t,e){Ci=Po=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Km(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,su(t,n)}}var Ao={readContext:Je,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},$0={readContext:Je,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:Sh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,no(4194308,4,jm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return no(4194308,4,t,e)},useInsertionEffect:function(t,e){return no(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=H0.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:Ch,useDebugValue:xu,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=Ch(!1),e=t[0];return t=W0.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=gt();if(X){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ge===null)throw Error(E(349));Hn&30||Am(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sh(Dm.bind(null,r,s,t),[t]),r.flags|=2048,Xi(9,Om.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=ge.identifierPrefix;if(X){var n=Tt,r=It;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=V0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G0={readContext:Je,useCallback:Vm,useContext:Je,useEffect:Nu,useImperativeHandle:zm,useInsertionEffect:Fm,useLayoutEffect:Um,useMemo:Wm,useReducer:la,useRef:bm,useState:function(){return la(Yi)},useDebugValue:xu,useDeferredValue:function(t){var e=Ze();return Hm(e,le.memoizedState,t)},useTransition:function(){var t=la(Yi)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Rm,useSyncExternalStore:Pm,useId:Bm,unstable_isNewReconciler:!1},K0={readContext:Je,useCallback:Vm,useContext:Je,useEffect:Nu,useImperativeHandle:zm,useInsertionEffect:Fm,useLayoutEffect:Um,useMemo:Wm,useReducer:aa,useRef:bm,useState:function(){return aa(Yi)},useDebugValue:xu,useDeferredValue:function(t){var e=Ze();return le===null?e.memoizedState=t:Hm(e,le.memoizedState,t)},useTransition:function(){var t=aa(Yi)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Rm,useSyncExternalStore:Pm,useId:Bm,unstable_isNewReconciler:!1};function nt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ml={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=an(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=on(t,s,i),e!==null&&(dt(e,t,i,r),eo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=an(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=on(t,s,i),e!==null&&(dt(e,t,i,r),eo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=an(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=on(t,i,r),e!==null&&(dt(e,t,r,n),eo(e,t,r))}};function Ih(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hi(n,r)||!Hi(i,s):!0}function qm(t,e,n){var r=!1,i=_n,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=be(e)?Vn:Ie.current,r=e.contextTypes,s=(r=r!=null)?Pr(t,i):_n),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ml,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Th(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ml.enqueueReplaceState(e,e.state,null)}function ac(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=be(e)?Vn:Ie.current,i.context=Pr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ml.enqueueReplaceState(i,i.state,null),xo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lr(t,e){try{var n="",r=e;do n+=Ev(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ca(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var q0=typeof WeakMap=="function"?WeakMap:Map;function Qm(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Do||(Do=!0,vc=r),cc(t,e)},n}function Ym(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){cc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cc(t,e),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new q0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=aw.bind(null,t,e,n),e.then(t,t))}function Nh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,on(n,e,1))),n.lanes|=1),t)}var Q0=jt.ReactCurrentOwner,De=!1;function ke(t,e,n,r){e.child=t===null?Tm(e,null,n,r):Or(e,t.child,n,r)}function Rh(t,e,n,r,i){n=n.render;var s=e.ref;return Cr(e,i),r=Tu(t,e,n,r,s,i),n=ku(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(X&&n&&fu(e),e.flags|=1,ke(t,e,r,i),e.child)}function Ph(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xm(t,e,s,r,i)):(t=oo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(o,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return uc(t,e,n,r,i)}function Jm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(mr,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(mr,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(mr,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(mr,Ve),Ve|=r;return ke(t,e,i,n),e.child}function Zm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uc(t,e,n,r,i){var s=be(n)?Vn:Ie.current;return s=Pr(e,s),Cr(e,i),n=Tu(t,e,n,r,s,i),r=ku(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(X&&r&&fu(e),e.flags|=1,ke(t,e,n,i),e.child)}function Ah(t,e,n,r,i){if(be(n)){var s=!0;So(e)}else s=!1;if(Cr(e,i),e.stateNode===null)ro(t,e),qm(e,n,r),ac(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Je(c):(c=be(n)?Vn:Ie.current,c=Pr(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Th(e,o,r,c),Gt=!1;var u=e.memoizedState;o.state=u,xo(e,r,o,i),a=e.memoizedState,l!==r||u!==a||Me.current||Gt?(typeof d=="function"&&(lc(e,n,d,r),a=e.memoizedState),(l=Gt||Ih(e,n,l,r,u,a,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Nm(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:nt(e.type,l),o.props=c,h=e.pendingProps,u=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=be(n)?Vn:Ie.current,a=Pr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||u!==a)&&Th(e,o,r,a),Gt=!1,u=e.memoizedState,o.state=u,xo(e,r,o,i);var y=e.memoizedState;l!==h||u!==y||Me.current||Gt?(typeof g=="function"&&(lc(e,n,g,r),y=e.memoizedState),(c=Gt||Ih(e,n,c,r,u,y,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),r=!1)}return dc(t,e,n,r,s,i)}function dc(t,e,n,r,i,s){Zm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gh(e,n,!1),Lt(t,e,s);r=e.stateNode,Q0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Or(e,t.child,null,s),e.child=Or(e,null,l,s)):ke(t,e,l,s),e.memoizedState=r.state,i&&gh(e,n,!0),e.child}function eg(t){var e=t.stateNode;e.pendingContext?mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mh(t,e.context,!1),Eu(t,e.containerInfo)}function Oh(t,e,n,r,i){return Ar(),mu(i),e.flags|=256,ke(t,e,n,r),e.child}var hc={dehydrated:null,treeContext:null,retryLane:0};function fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function tg(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(J,i&1),t===null)return sc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,r,0,null),t=Un(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fc(n),e.memoizedState=hc,t):Ru(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Y0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cn(l,s):(s=Un(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hc,r}return s=t.child,t=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ru(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ws(t,e,n,r){return r!==null&&mu(r),Or(e,t.child,null,n),t=Ru(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ca(Error(E(422))),Ws(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yl({mode:"visible",children:r.children},i,0,null),s=Un(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Or(e,t.child,null,o),e.child.memoizedState=fc(o),e.memoizedState=hc,s);if(!(e.mode&1))return Ws(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=ca(s,r,void 0),Ws(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),dt(r,t,i,-1))}return Mu(),r=ca(Error(E(421))),Ws(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,We=sn(i.nextSibling),He=e,X=!0,it=null,t!==null&&(qe[Qe++]=It,qe[Qe++]=Tt,qe[Qe++]=Wn,It=t.id,Tt=t.overflow,Wn=e),e=Ru(e,r.children),e.flags|=4096,e)}function Dh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),oc(t.return,e,n)}function ua(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ng(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ke(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dh(t,n,e);else if(t.tag===19)Dh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ro(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ua(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ro(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ua(e,!0,n,null,s);break;case"together":ua(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ro(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X0(t,e,n){switch(e.tag){case 3:eg(e),Ar();break;case 5:xm(e);break;case 1:be(e.type)&&So(e);break;case 4:Eu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(ko,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?tg(t,e,n):(K(J,J.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ng(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,Jm(t,e,n)}return Lt(t,e,n)}var rg,pc,ig,sg;rg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pc=function(){};ig=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dn(vt.current);var s=null;switch(n){case"input":i=ba(t,i),r=ba(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=ja(t,i),r=ja(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Eo)}Va(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bi.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sg=function(t,e,n,r){n!==r&&(e.flags|=4)};function si(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function J0(t,e,n){var r=e.pendingProps;switch(pu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return be(e.type)&&Co(),Ee(e),null;case 3:return r=e.stateNode,Dr(),Y(Me),Y(Ie),Su(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(Cc(it),it=null))),pc(t,e),Ee(e),null;case 5:Cu(e);var i=Dn(qi.current);if(n=e.type,t!==null&&e.stateNode!=null)ig(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ee(e),null}if(t=Dn(vt.current),zs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[Gi]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<mi.length;i++)q(mi[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Wd(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Bd(r,s),q("invalid",r)}Va(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&js(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&js(r.textContent,l,t),i=["children",""+l]):bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":As(r),Hd(r,s,!0);break;case"textarea":As(r),$d(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Eo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[Gi]=r,rg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wa(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<mi.length;i++)q(mi[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":Wd(t,r),i=ba(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),q("invalid",t);break;case"textarea":Bd(t,r),i=ja(t,r),q("invalid",t);break;default:i=r}Va(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?bp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fi(t,a):typeof a=="number"&&Fi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&Zc(t,s,a,o))}switch(n){case"input":As(t),Hd(t,r,!1);break;case"textarea":As(t),$d(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yr(t,!!r.multiple,s,!1):r.defaultValue!=null&&yr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)sg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Dn(qi.current),Dn(vt.current),zs(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=He,t!==null))switch(t.tag){case 3:js(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&js(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Ee(e),null;case 13:if(Y(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&We!==null&&e.mode&1&&!(e.flags&128))Sm(),Ar(),e.flags|=98560,s=!1;else if(s=zs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[_t]=e}else Ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else it!==null&&(Cc(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?ue===0&&(ue=3):Mu())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Dr(),pc(t,e),t===null&&Bi(e.stateNode.containerInfo),Ee(e),null;case 10:return yu(e.type._context),Ee(e),null;case 17:return be(e.type)&&Co(),Ee(e),null;case 19:if(Y(J),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)si(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ro(t),o!==null){for(e.flags|=128,si(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Mr&&(e.flags|=128,r=!0,si(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ro(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),si(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Ee(e),null}else 2*ie()-s.renderingStartTime>Mr&&n!==1073741824&&(e.flags|=128,r=!0,si(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=J.current,K(J,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Lu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function Z0(t,e){switch(pu(e),e.tag){case 1:return be(e.type)&&Co(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Dr(),Y(Me),Y(Ie),Su(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cu(e),null;case 13:if(Y(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(J),null;case 4:return Dr(),null;case 10:return yu(e.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var Hs=!1,Ce=!1,ew=typeof WeakSet=="function"?WeakSet:Set,T=null;function pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function mc(t,e,n){try{n()}catch(r){te(t,e,r)}}var Lh=!1;function tw(t,e){if(Ja=yo,t=um(),hu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)u=h,h=g;for(;;){if(h===t)break t;if(u===n&&++c===i&&(l=o),u===s&&++d===r&&(a=o),(g=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:t,selectionRange:n},yo=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,R=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:nt(e.type,v),R);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){te(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return y=Lh,Lh=!1,y}function Si(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mc(e,n,s)}i=i.next}while(i!==r)}}function gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function og(t){var e=t.alternate;e!==null&&(t.alternate=null,og(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[Gi],delete e[nc],delete e[F0],delete e[U0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lg(t){return t.tag===5||t.tag===3||t.tag===4}function Mh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Eo));else if(r!==4&&(t=t.child,t!==null))for(_c(t,e,n),t=t.sibling;t!==null;)_c(t,e,n),t=t.sibling}function yc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yc(t,e,n),t=t.sibling;t!==null;)yc(t,e,n),t=t.sibling}var _e=null,rt=!1;function Ht(t,e,n){for(n=n.child;n!==null;)ag(t,e,n),n=n.sibling}function ag(t,e,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Ce||pr(n,e);case 6:var r=_e,i=rt;_e=null,Ht(t,e,n),_e=r,rt=i,_e!==null&&(rt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(rt?(t=_e,n=n.stateNode,t.nodeType===8?ra(t.parentNode,n):t.nodeType===1&&ra(t,n),Vi(t)):ra(_e,n.stateNode));break;case 4:r=_e,i=rt,_e=n.stateNode.containerInfo,rt=!0,Ht(t,e,n),_e=r,rt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mc(n,e,o),i=i.next}while(i!==r)}Ht(t,e,n);break;case 1:if(!Ce&&(pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}Ht(t,e,n);break;case 21:Ht(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Ht(t,e,n),Ce=r):Ht(t,e,n);break;default:Ht(t,e,n)}}function bh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ew),e.forEach(function(r){var i=uw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,rt=!1;break e;case 3:_e=l.stateNode.containerInfo,rt=!0;break e;case 4:_e=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(_e===null)throw Error(E(160));ag(s,o,i),_e=null,rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cg(e,t),e=e.sibling}function cg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),mt(t),r&4){try{Si(3,t,t.return),gl(3,t)}catch(v){te(t,t.return,v)}try{Si(5,t,t.return)}catch(v){te(t,t.return,v)}}break;case 1:tt(e,t),mt(t),r&512&&n!==null&&pr(n,n.return);break;case 5:if(tt(e,t),mt(t),r&512&&n!==null&&pr(n,n.return),t.flags&32){var i=t.stateNode;try{Fi(i,"")}catch(v){te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ap(i,s),Wa(l,o);var c=Wa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],h=a[o+1];d==="style"?bp(i,h):d==="dangerouslySetInnerHTML"?Lp(i,h):d==="children"?Fi(i,h):Zc(i,d,h,c)}switch(l){case"input":Fa(i,s);break;case"textarea":Op(i,s);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?yr(i,!!s.multiple,g,!1):u!==!!s.multiple&&(s.defaultValue!=null?yr(i,!!s.multiple,s.defaultValue,!0):yr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gi]=s}catch(v){te(t,t.return,v)}}break;case 6:if(tt(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){te(t,t.return,v)}}break;case 3:if(tt(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vi(e.containerInfo)}catch(v){te(t,t.return,v)}break;case 4:tt(e,t),mt(t);break;case 13:tt(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ou=ie())),r&4&&bh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(c=Ce)||d,tt(e,t),Ce=c):tt(e,t),mt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(h=T=d;T!==null;){switch(u=T,g=u.child,u.tag){case 0:case 11:case 14:case 15:Si(4,u,u.return);break;case 1:pr(u,u.return);var y=u.stateNode;if(typeof y.componentWillUnmount=="function"){r=u,n=u.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:pr(u,u.return);break;case 22:if(u.memoizedState!==null){Uh(h);continue}}g!==null?(g.return=u,T=g):Uh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Mp("display",o))}catch(v){te(t,t.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){te(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tt(e,t),mt(t),r&4&&bh(t);break;case 21:break;default:tt(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=Mh(t);yc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Mh(t);_c(t,l,o);break;default:throw Error(E(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nw(t,e,n){T=t,ug(t)}function ug(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Hs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=Hs;var c=Ce;if(Hs=o,(Ce=a)&&!c)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?jh(i):a!==null?(a.return=o,T=a):jh(i);for(;s!==null;)T=s,ug(s),s=s.sibling;T=i,Hs=l,Ce=c}Fh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):Fh(t)}}function Fh(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Eh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Eh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Vi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||e.flags&512&&gc(e)}catch(u){te(e,e.return,u)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Uh(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function jh(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gl(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{gc(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{gc(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var rw=Math.ceil,Oo=jt.ReactCurrentDispatcher,Pu=jt.ReactCurrentOwner,Xe=jt.ReactCurrentBatchConfig,z=0,ge=null,oe=null,ye=0,Ve=0,mr=Cn(0),ue=0,Ji=null,Bn=0,_l=0,Au=0,Ii=null,Oe=null,Ou=0,Mr=1/0,Ct=null,Do=!1,vc=null,ln=null,Bs=!1,en=null,Lo=0,Ti=0,wc=null,io=-1,so=0;function xe(){return z&6?ie():io!==-1?io:io=ie()}function an(t){return t.mode&1?z&2&&ye!==0?ye&-ye:z0.transition!==null?(so===0&&(so=qp()),so):(t=H,t!==0||(t=window.event,t=t===void 0?16:tm(t.type)),t):1}function dt(t,e,n,r){if(50<Ti)throw Ti=0,wc=null,Error(E(185));ds(t,n,r),(!(z&2)||t!==ge)&&(t===ge&&(!(z&2)&&(_l|=n),ue===4&&qt(t,ye)),Fe(t,r),n===1&&z===0&&!(e.mode&1)&&(Mr=ie()+500,fl&&Sn()))}function Fe(t,e){var n=t.callbackNode;zv(t,e);var r=_o(t,t===ge?ye:0);if(r===0)n!==null&&qd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qd(n),e===1)t.tag===0?j0(zh.bind(null,t)):wm(zh.bind(null,t)),M0(function(){!(z&6)&&Sn()}),n=null;else{switch(Qp(r)){case 1:n=iu;break;case 4:n=Gp;break;case 16:n=go;break;case 536870912:n=Kp;break;default:n=go}n=yg(n,dg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dg(t,e){if(io=-1,so=0,z&6)throw Error(E(327));var n=t.callbackNode;if(Sr()&&t.callbackNode!==n)return null;var r=_o(t,t===ge?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mo(t,r);else{e=r;var i=z;z|=2;var s=fg();(ge!==t||ye!==e)&&(Ct=null,Mr=ie()+500,Fn(t,e));do try{ow();break}catch(l){hg(t,l)}while(!0);_u(),Oo.current=s,z=i,oe!==null?e=0:(ge=null,ye=0,e=ue)}if(e!==0){if(e===2&&(i=Ka(t),i!==0&&(r=i,e=Ec(t,i))),e===1)throw n=Ji,Fn(t,0),qt(t,r),Fe(t,ie()),n;if(e===6)qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!iw(i)&&(e=Mo(t,r),e===2&&(s=Ka(t),s!==0&&(r=s,e=Ec(t,s))),e===1))throw n=Ji,Fn(t,0),qt(t,r),Fe(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:xn(t,Oe,Ct);break;case 3:if(qt(t,r),(r&130023424)===r&&(e=Ou+500-ie(),10<e)){if(_o(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tc(xn.bind(null,t,Oe,Ct),e);break}xn(t,Oe,Ct);break;case 4:if(qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rw(r/1960))-r,10<r){t.timeoutHandle=tc(xn.bind(null,t,Oe,Ct),r);break}xn(t,Oe,Ct);break;case 5:xn(t,Oe,Ct);break;default:throw Error(E(329))}}}return Fe(t,ie()),t.callbackNode===n?dg.bind(null,t):null}function Ec(t,e){var n=Ii;return t.current.memoizedState.isDehydrated&&(Fn(t,e).flags|=256),t=Mo(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&Cc(e)),t}function Cc(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function iw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qt(t,e){for(e&=~Au,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function zh(t){if(z&6)throw Error(E(327));Sr();var e=_o(t,0);if(!(e&1))return Fe(t,ie()),null;var n=Mo(t,e);if(t.tag!==0&&n===2){var r=Ka(t);r!==0&&(e=r,n=Ec(t,r))}if(n===1)throw n=Ji,Fn(t,0),qt(t,e),Fe(t,ie()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xn(t,Oe,Ct),Fe(t,ie()),null}function Du(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Mr=ie()+500,fl&&Sn())}}function $n(t){en!==null&&en.tag===0&&!(z&6)&&Sr();var e=z;z|=1;var n=Xe.transition,r=H;try{if(Xe.transition=null,H=1,t)return t()}finally{H=r,Xe.transition=n,z=e,!(z&6)&&Sn()}}function Lu(){Ve=mr.current,Y(mr)}function Fn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,L0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(pu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:Dr(),Y(Me),Y(Ie),Su();break;case 5:Cu(r);break;case 4:Dr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:yu(r.type._context);break;case 22:case 23:Lu()}n=n.return}if(ge=t,oe=t=cn(t.current,null),ye=Ve=e,ue=0,Ji=null,Au=_l=Bn=0,Oe=Ii=null,On!==null){for(e=0;e<On.length;e++)if(n=On[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return t}function hg(t,e){do{var n=oe;try{if(_u(),to.current=Ao,Po){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(Hn=0,fe=le=Z=null,Ci=!1,Qi=0,Pu.current=null,n===null||n.return===null){ue=1,Ji=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Nh(o);if(g!==null){g.flags&=-257,xh(g,o,l,s,e),g.mode&1&&kh(s,c,e),e=g,a=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(a),e.updateQueue=v}else y.add(a);break e}else{if(!(e&1)){kh(s,c,e),Mu();break e}a=Error(E(426))}}else if(X&&l.mode&1){var R=Nh(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),xh(R,o,l,s,e),mu(Lr(a,l));break e}}s=a=Lr(a,l),ue!==4&&(ue=2),Ii===null?Ii=[s]:Ii.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Qm(s,a,e);wh(s,m);break e;case 1:l=a;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ln===null||!ln.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Ym(s,l,e);wh(s,w);break e}}s=s.return}while(s!==null)}mg(n)}catch(I){e=I,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function fg(){var t=Oo.current;return Oo.current=Ao,t===null?Ao:t}function Mu(){(ue===0||ue===3||ue===2)&&(ue=4),ge===null||!(Bn&268435455)&&!(_l&268435455)||qt(ge,ye)}function Mo(t,e){var n=z;z|=2;var r=fg();(ge!==t||ye!==e)&&(Ct=null,Fn(t,e));do try{sw();break}catch(i){hg(t,i)}while(!0);if(_u(),z=n,Oo.current=r,oe!==null)throw Error(E(261));return ge=null,ye=0,ue}function sw(){for(;oe!==null;)pg(oe)}function ow(){for(;oe!==null&&!Av();)pg(oe)}function pg(t){var e=_g(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?mg(t):oe=e,Pu.current=null}function mg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Z0(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,oe=null;return}}else if(n=J0(n,e,Ve),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ue===0&&(ue=5)}function xn(t,e,n){var r=H,i=Xe.transition;try{Xe.transition=null,H=1,lw(t,e,n,r)}finally{Xe.transition=i,H=r}return null}function lw(t,e,n,r){do Sr();while(en!==null);if(z&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vv(t,s),t===ge&&(oe=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bs||(Bs=!0,yg(go,function(){return Sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=H;H=1;var l=z;z|=4,Pu.current=null,tw(t,n),cg(n,t),N0(Za),yo=!!Ja,Za=Ja=null,t.current=n,nw(n),Ov(),z=l,H=o,Xe.transition=s}else t.current=n;if(Bs&&(Bs=!1,en=t,Lo=i),s=t.pendingLanes,s===0&&(ln=null),Mv(n.stateNode),Fe(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,t=vc,vc=null,t;return Lo&1&&t.tag!==0&&Sr(),s=t.pendingLanes,s&1?t===wc?Ti++:(Ti=0,wc=t):Ti=0,Sn(),null}function Sr(){if(en!==null){var t=Qp(Lo),e=Xe.transition,n=H;try{if(Xe.transition=null,H=16>t?16:t,en===null)var r=!1;else{if(t=en,en=null,Lo=0,z&6)throw Error(E(331));var i=z;for(z|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(T=c;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Si(8,d,s)}var h=d.child;if(h!==null)h.return=d,T=h;else for(;T!==null;){d=T;var u=d.sibling,g=d.return;if(og(d),d===c){T=null;break}if(u!==null){u.return=g,T=u;break}T=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Si(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,T=m;break e}T=s.return}}var f=t.current;for(T=f;T!==null;){o=T;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,T=p;else e:for(o=f;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gl(9,l)}}catch(I){te(l,l.return,I)}if(l===o){T=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,T=w;break e}T=l.return}}if(z=i,Sn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(al,t)}catch{}r=!0}return r}finally{H=n,Xe.transition=e}}return!1}function Vh(t,e,n){e=Lr(n,e),e=Qm(t,e,1),t=on(t,e,1),e=xe(),t!==null&&(ds(t,1,e),Fe(t,e))}function te(t,e,n){if(t.tag===3)Vh(t,t,n);else for(;e!==null;){if(e.tag===3){Vh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){t=Lr(n,t),t=Ym(e,t,1),e=on(e,t,1),t=xe(),e!==null&&(ds(e,1,t),Fe(e,t));break}}e=e.return}}function aw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(ue===4||ue===3&&(ye&130023424)===ye&&500>ie()-Ou?Fn(t,0):Au|=n),Fe(t,e)}function gg(t,e){e===0&&(t.mode&1?(e=Ls,Ls<<=1,!(Ls&130023424)&&(Ls=4194304)):e=1);var n=xe();t=Dt(t,e),t!==null&&(ds(t,e,n),Fe(t,n))}function cw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gg(t,n)}function uw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),gg(t,n)}var _g;_g=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,X0(t,e,n);De=!!(t.flags&131072)}else De=!1,X&&e.flags&1048576&&Em(e,To,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ro(t,e),t=e.pendingProps;var i=Pr(e,Ie.current);Cr(e,n),i=Tu(null,e,r,t,i,n);var s=ku();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(r)?(s=!0,So(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wu(e),i.updater=ml,e.stateNode=i,i._reactInternals=e,ac(e,r,t,n),e=dc(null,e,r,!0,s,n)):(e.tag=0,X&&s&&fu(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ro(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hw(r),t=nt(r,t),i){case 0:e=uc(null,e,r,t,n);break e;case 1:e=Ah(null,e,r,t,n);break e;case 11:e=Rh(null,e,r,t,n);break e;case 14:e=Ph(null,e,r,nt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),uc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Ah(t,e,r,i,n);case 3:e:{if(eg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Nm(t,e),xo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Lr(Error(E(423)),e),e=Oh(t,e,r,n,i);break e}else if(r!==i){i=Lr(Error(E(424)),e),e=Oh(t,e,r,n,i);break e}else for(We=sn(e.stateNode.containerInfo.firstChild),He=e,X=!0,it=null,n=Tm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){e=Lt(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return xm(e),t===null&&sc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ec(r,i)?o=null:s!==null&&ec(r,s)&&(e.flags|=32),Zm(t,e),ke(t,e,o,n),e.child;case 6:return t===null&&sc(e),null;case 13:return tg(t,e,n);case 4:return Eu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Or(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Rh(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(ko,r._currentValue),r._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===i.children&&!Me.current){e=Lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),oc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),oc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cr(e,n),i=Je(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),Ph(t,e,r,i,n);case 15:return Xm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),ro(t,e),e.tag=1,be(r)?(t=!0,So(e)):t=!1,Cr(e,n),qm(e,r,i),ac(e,r,i,n),dc(null,e,r,!0,t,n);case 19:return ng(t,e,n);case 22:return Jm(t,e,n)}throw Error(E(156,e.tag))};function yg(t,e){return $p(t,e)}function dw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(t,e,n,r){return new dw(t,e,n,r)}function bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hw(t){if(typeof t=="function")return bu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tu)return 11;if(t===nu)return 14}return 2}function cn(t,e){var n=t.alternate;return n===null?(n=Ye(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case sr:return Un(n.children,i,s,e);case eu:o=8,i|=8;break;case Oa:return t=Ye(12,n,e,i|2),t.elementType=Oa,t.lanes=s,t;case Da:return t=Ye(13,n,e,i),t.elementType=Da,t.lanes=s,t;case La:return t=Ye(19,n,e,i),t.elementType=La,t.lanes=s,t;case xp:return yl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kp:o=10;break e;case Np:o=9;break e;case tu:o=11;break e;case nu:o=14;break e;case $t:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ye(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Un(t,e,n,r){return t=Ye(7,t,r,e),t.lanes=n,t}function yl(t,e,n,r){return t=Ye(22,t,r,e),t.elementType=xp,t.lanes=n,t.stateNode={isHidden:!1},t}function da(t,e,n){return t=Ye(6,t,null,e),t.lanes=n,t}function ha(t,e,n){return e=Ye(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fu(t,e,n,r,i,s,o,l,a){return t=new fw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ye(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wu(s),t}function pw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vg(t){if(!t)return _n;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(be(n))return vm(t,n,e)}return e}function wg(t,e,n,r,i,s,o,l,a){return t=Fu(n,r,!0,t,i,s,o,l,a),t.context=vg(null),n=t.current,r=xe(),i=an(n),s=Rt(r,i),s.callback=e??null,on(n,s,i),t.current.lanes=i,ds(t,i,r),Fe(t,r),t}function vl(t,e,n,r){var i=e.current,s=xe(),o=an(i);return n=vg(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=on(i,e,o),t!==null&&(dt(t,i,o,s),eo(t,i,o)),o}function bo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uu(t,e){Wh(t,e),(t=t.alternate)&&Wh(t,e)}function mw(){return null}var Eg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ju(t){this._internalRoot=t}wl.prototype.render=ju.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));vl(t,e,null,null)};wl.prototype.unmount=ju.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$n(function(){vl(null,t,null,null)}),e[Ot]=null}};function wl(t){this._internalRoot=t}wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kt.length&&e!==0&&e<Kt[n].priority;n++);Kt.splice(n,0,t),n===0&&em(t)}};function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function gw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bo(o);s.call(c)}}var o=wg(e,r,t,0,null,!1,!1,"",Hh);return t._reactRootContainer=o,t[Ot]=o.current,Bi(t.nodeType===8?t.parentNode:t),$n(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=bo(a);l.call(c)}}var a=Fu(t,0,!1,null,null,!1,!1,"",Hh);return t._reactRootContainer=a,t[Ot]=a.current,Bi(t.nodeType===8?t.parentNode:t),$n(function(){vl(e,a,n,r)}),a}function Cl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=bo(o);l.call(a)}}vl(e,o,t,i)}else o=gw(n,e,t,i,r);return bo(o)}Yp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pi(e.pendingLanes);n!==0&&(su(e,n|1),Fe(e,ie()),!(z&6)&&(Mr=ie()+500,Sn()))}break;case 13:$n(function(){var r=Dt(t,1);if(r!==null){var i=xe();dt(r,t,1,i)}}),Uu(t,1)}};ou=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=xe();dt(e,t,134217728,n)}Uu(t,134217728)}};Xp=function(t){if(t.tag===13){var e=an(t),n=Dt(t,e);if(n!==null){var r=xe();dt(n,t,e,r)}Uu(t,e)}};Jp=function(){return H};Zp=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Ba=function(t,e,n){switch(e){case"input":if(Fa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hl(r);if(!i)throw Error(E(90));Pp(r),Fa(r,i)}}}break;case"textarea":Op(t,n);break;case"select":e=n.value,e!=null&&yr(t,!!n.multiple,e,!1)}};jp=Du;zp=$n;var _w={usingClientEntryPoint:!1,Events:[fs,cr,hl,Fp,Up,Du]},oi={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hp(t),t===null?null:t.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance||mw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{al=$s.inject(yw),yt=$s}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_w;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(e))throw Error(E(200));return pw(t,e,null,n)};Ge.createRoot=function(t,e){if(!zu(t))throw Error(E(299));var n=!1,r="",i=Eg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fu(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,Bi(t.nodeType===8?t.parentNode:t),new ju(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Hp(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return $n(t)};Ge.hydrate=function(t,e,n){if(!El(e))throw Error(E(200));return Cl(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!zu(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Eg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wg(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,Bi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wl(e)};Ge.render=function(t,e,n){if(!El(e))throw Error(E(200));return Cl(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!El(t))throw Error(E(40));return t._reactRootContainer?($n(function(){Cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};Ge.unstable_batchedUpdates=Du;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!El(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Cl(t,e,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function Cg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cg)}catch(t){console.error(t)}}Cg(),Cp.exports=Ge;var vw=Cp.exports,Sg,Bh=vw;Sg=Bh.createRoot,Bh.hydrateRoot;const ww=()=>{};var $h={};/**
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
 */const Ig={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw $r(e)},$r=function(t){return new Error("Firebase Database ("+Ig.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Tg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ew=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,h=(s&3)<<4|l>>4;let u=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(u=64)),r.push(n[d],n[h],n[u],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||h==null)throw new Cw;const u=s<<2|l>>4;if(r.push(u),c!==64){const g=l<<4&240|c>>2;if(r.push(g),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kg=function(t){const e=Tg(t);return Vu.encodeByteArray(e,!0)},Fo=function(t){return kg(t).replace(/\./g,"")},Uo=function(t){try{return Vu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sw(t){return Ng(void 0,t)}function Ng(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Iw(n)||(t[n]=Ng(t[n],e[n]));return t}function Iw(t){return t!=="__proto__"}/**
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
 */function Tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kw=()=>Tw().__FIREBASE_DEFAULTS__,Nw=()=>{if(typeof process>"u"||typeof $h>"u")return;const t=$h.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uo(t[1]);return e&&JSON.parse(e)},Wu=()=>{try{return ww()||kw()||Nw()||xw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xg=t=>{var e,n;return(n=(e=Wu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Rw=t=>{const e=xg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rg=()=>{var t;return(t=Wu())==null?void 0:t.config},Pg=t=>{var e;return(e=Wu())==null?void 0:e[`_${t}`]};/**
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
 */class Sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Gr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ag(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Pw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Fo(JSON.stringify(n)),Fo(JSON.stringify(o)),""].join(".")}const ki={};function Aw(){const t={prod:[],emulator:[]};for(const e of Object.keys(ki))ki[e]?t.emulator.push(e):t.prod.push(e);return t}function Ow(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gh=!1;function Og(t,e){if(typeof window>"u"||typeof document>"u"||!Gr(window.location.host)||ki[t]===e||ki[t]||Gh)return;ki[t]=e;function n(u){return`__firebase__banner__${u}`}const r="__firebase__banner",s=Aw().prod.length>0;function o(){const u=document.getElementById(r);u&&u.remove()}function l(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function a(u,g){u.setAttribute("width","24"),u.setAttribute("id",g),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Gh=!0,o()},u}function d(u,g){u.setAttribute("id",g),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=Ow(r),g=n("text"),y=document.getElementById(g)||document.createElement("span"),v=n("learnmore"),R=document.getElementById(v)||document.createElement("a"),m=n("preprendIcon"),f=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const p=u.element;l(p),d(R,v);const w=c();a(f,m),p.append(f,y,R,w),document.body.appendChild(p)}s?(y.innerText="Preview backend disconnected.",f.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(f.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Dw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mw(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lg(){return Ig.NODE_ADMIN===!0}function bw(){try{return typeof indexedDB=="object"}catch{return!1}}function Fw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Uw="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Uw,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new In(i,l,r)}}function jw(t,e){return t.replace(zw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zw=/\{\$([^}]+)}/g;/**
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
 */function Zi(t){return JSON.parse(t)}function ae(t){return JSON.stringify(t)}/**
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
 */const Mg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zi(Uo(s[0])||""),n=Zi(Uo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Vw=function(t){const e=Mg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ww=function(t){const e=Mg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function br(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Sc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Gn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kh(s)&&Kh(o)){if(!Gn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kh(t){return t!==null&&typeof t=="object"}/**
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
 */function er(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Hw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const u=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):h<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const u=(i<<5|i>>>27)+c+a+d+r[h]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Bw(t,e){const n=new $w(t,e);return n.subscribe.bind(n)}class $w{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fa),i.error===void 0&&(i.error=fa),i.complete===void 0&&(i.complete=fa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fa(){}function Bu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Kw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Il=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class qw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Sl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yw(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qw(t){return t===Rn?void 0:t}function Yw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const Jw={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Zw=B.INFO,e1={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},t1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=e1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $u{constructor(e){this.name=e,this._logLevel=Zw,this._logHandler=t1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const n1=(t,e)=>e.some(n=>t instanceof n);let qh,Qh;function r1(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function i1(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bg=new WeakMap,Ic=new WeakMap,Fg=new WeakMap,pa=new WeakMap,Gu=new WeakMap;function s1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bg.set(n,t)}).catch(()=>{}),Gu.set(e,t),e}function o1(t){if(Ic.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let Tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l1(t){Tc=t(Tc)}function a1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ma(this),e,...n);return Fg.set(r,e.sort?e.sort():[e]),un(r)}:i1().includes(t)?function(...e){return t.apply(ma(this),e),un(bg.get(this))}:function(...e){return un(t.apply(ma(this),e))}}function c1(t){return typeof t=="function"?a1(t):(t instanceof IDBTransaction&&o1(t),n1(t,r1())?new Proxy(t,Tc):t)}function un(t){if(t instanceof IDBRequest)return s1(t);if(pa.has(t))return pa.get(t);const e=c1(t);return e!==t&&(pa.set(t,e),Gu.set(e,t)),e}const ma=t=>Gu.get(t);function u1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=un(o);return r&&o.addEventListener("upgradeneeded",a=>{r(un(o.result),a.oldVersion,a.newVersion,un(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const d1=["get","getKey","getAll","getAllKeys","count"],h1=["put","add","delete","clear"],ga=new Map;function Yh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=h1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||d1.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return ga.set(e,s),s}l1(t=>({...t,get:(e,n,r)=>Yh(e,n)||t.get(e,n,r),has:(e,n)=>!!Yh(e,n)||t.has(e,n)}));/**
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
 */class f1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kc="@firebase/app",Xh="0.14.2";/**
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
 */const Mt=new $u("@firebase/app"),m1="@firebase/app-compat",g1="@firebase/analytics-compat",_1="@firebase/analytics",y1="@firebase/app-check-compat",v1="@firebase/app-check",w1="@firebase/auth",E1="@firebase/auth-compat",C1="@firebase/database",S1="@firebase/data-connect",I1="@firebase/database-compat",T1="@firebase/functions",k1="@firebase/functions-compat",N1="@firebase/installations",x1="@firebase/installations-compat",R1="@firebase/messaging",P1="@firebase/messaging-compat",A1="@firebase/performance",O1="@firebase/performance-compat",D1="@firebase/remote-config",L1="@firebase/remote-config-compat",M1="@firebase/storage",b1="@firebase/storage-compat",F1="@firebase/firestore",U1="@firebase/ai",j1="@firebase/firestore-compat",z1="firebase",V1="12.2.0";/**
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
 */const Nc="[DEFAULT]",W1={[kc]:"fire-core",[m1]:"fire-core-compat",[_1]:"fire-analytics",[g1]:"fire-analytics-compat",[v1]:"fire-app-check",[y1]:"fire-app-check-compat",[w1]:"fire-auth",[E1]:"fire-auth-compat",[C1]:"fire-rtdb",[S1]:"fire-data-connect",[I1]:"fire-rtdb-compat",[T1]:"fire-fn",[k1]:"fire-fn-compat",[N1]:"fire-iid",[x1]:"fire-iid-compat",[R1]:"fire-fcm",[P1]:"fire-fcm-compat",[A1]:"fire-perf",[O1]:"fire-perf-compat",[D1]:"fire-rc",[L1]:"fire-rc-compat",[M1]:"fire-gcs",[b1]:"fire-gcs-compat",[F1]:"fire-fst",[j1]:"fire-fst-compat",[U1]:"fire-vertex","fire-js":"fire-js",[z1]:"fire-js-all"};/**
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
 */const zo=new Map,H1=new Map,xc=new Map;function Jh(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(xc.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,t);for(const n of zo.values())Jh(n,t);for(const n of H1.values())Jh(n,t);return!0}function Ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function st(t){return t==null?!1:t.settings!==void 0}/**
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
 */const B1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new ms("app","Firebase",B1);/**
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
 */class $1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
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
 */const Kr=V1;function Ug(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Nc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=Rg()),!n)throw dn.create("no-options");const s=zo.get(i);if(s){if(Gn(n,s.options)&&Gn(r,s.config))return s;throw dn.create("duplicate-app",{appName:i})}const o=new Xw(i);for(const a of xc.values())o.addComponent(a);const l=new $1(n,r,o);return zo.set(i,l),l}function jg(t=Nc){const e=zo.get(t);if(!e&&t===Nc&&Rg())return Ug();if(!e)throw dn.create("no-app",{appName:t});return e}function hn(t,e,n){let r=W1[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(o.join(" "));return}Fr(new Kn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const G1="firebase-heartbeat-database",K1=1,es="firebase-heartbeat-store";let _a=null;function zg(){return _a||(_a=u1(G1,K1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(es)}catch(n){console.warn(n)}}}}).catch(t=>{throw dn.create("idb-open",{originalErrorMessage:t.message})})),_a}async function q1(t){try{const n=(await zg()).transaction(es),r=await n.objectStore(es).get(Vg(t));return await n.done,r}catch(e){if(e instanceof In)Mt.warn(e.message);else{const n=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(n.message)}}}async function Zh(t,e){try{const r=(await zg()).transaction(es,"readwrite");await r.objectStore(es).put(e,Vg(t)),await r.done}catch(n){if(n instanceof In)Mt.warn(n.message);else{const r=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(r.message)}}}function Vg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Q1=1024,Y1=30;class X1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Z1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ef();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Y1){const o=eE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ef(),{heartbeatsToSend:r,unsentEntries:i}=J1(this._heartbeatsCache.heartbeats),s=Fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mt.warn(n),""}}}function ef(){return new Date().toISOString().substring(0,10)}function J1(t,e=Q1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Z1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bw()?Fw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await q1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tf(t){return Fo(JSON.stringify({version:2,heartbeats:t})).length}function eE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function tE(t){Fr(new Kn("platform-logger",e=>new f1(e),"PRIVATE")),Fr(new Kn("heartbeat",e=>new X1(e),"PRIVATE")),hn(kc,Xh,t),hn(kc,Xh,"esm2020"),hn("fire-js","")}tE("");function Wg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nE=Wg,Hg=new ms("auth","Firebase",Wg());/**
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
 */const Vo=new $u("@firebase/auth");function rE(t,...e){Vo.logLevel<=B.WARN&&Vo.warn(`Auth (${Kr}): ${t}`,...e)}function lo(t,...e){Vo.logLevel<=B.ERROR&&Vo.error(`Auth (${Kr}): ${t}`,...e)}/**
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
 */function bt(t,...e){throw qu(t,...e)}function Be(t,...e){return qu(t,...e)}function Bg(t,e,n){const r={...nE(),[e]:n};return new ms("auth","Firebase",r).create(e,{appName:t.name})}function fn(t){return Bg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hg.create(t,...e)}function k(t,e,...n){if(!t)throw qu(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lo(e),new Error(e)}function Ft(t,e){t||kt(e)}/**
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
 */function Rc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function $g(){return nf()==="http:"||nf()==="https:"}function nf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function iE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($g()||Lw()||"connection"in navigator)?navigator.onLine:!0}function sE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Hu()||Dg()}get(){return iE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qu(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aE=new gs(3e4,6e4);function Et(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function pt(t,e,n,r,i={}){return Kg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=er({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:a,...s};return Dw()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Gr(t.emulatorConfig.host)&&(c.credentials="include"),Gg.fetch()(await qg(t,t.config.apiHost,n,l),c)})}async function Kg(t,e,n){t._canInitEmulator=!1;const r={...oE,...e};try{const i=new uE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw gi(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw gi(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bg(t,d,c);bt(t,d)}}catch(i){if(i instanceof In)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function Tl(t,e,n,r,i={}){const s=await pt(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function qg(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Qu(t.config,i):`${t.config.apiScheme}://${i}`;return lE.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function cE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),aE.get())})}}function gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Be(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function rf(t){return t!==void 0&&t.getResponse!==void 0}function sf(t){return t!==void 0&&t.enterprise!==void 0}class Qg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function dE(t){return(await pt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Yg(t,e){return pt(t,"GET","/v2/recaptchaConfig",Et(t,e))}/**
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
 */async function hE(t,e){return pt(t,"POST","/v1/accounts:delete",e)}async function Wo(t,e){return pt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fE(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=Yu(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ni(ya(i.auth_time)),issuedAtTime:Ni(ya(i.iat)),expirationTime:Ni(ya(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ya(t){return Number(t)*1e3}function Yu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uo(n);return i?JSON.parse(i):(lo("Failed to decode base64 JWT payload"),null)}catch(i){return lo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function of(t){const e=Yu(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&pE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(t){var h;const e=t.auth,n=await t.getIdToken(),r=await ts(t,Wo(e,{idToken:n}));k(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?Xg(i.providerUserInfo):[],o=_E(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?a:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Pc(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function gE(t){const e=Te(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _E(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function yE(t,e){const n=await Kg(t,{},async()=>{const r=er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await qg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Gr(t.emulatorConfig.host)&&(a.credentials="include"),Gg.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vE(t,e){return pt(t,"POST","/v2/accounts:revokeToken",Et(t,e))}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):of(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){k(e.length!==0,"internal-error");const n=of(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ir;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Bt(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new mE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ts(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fE(this,e)}reload(){return gE(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(fn(this.auth));const e=await this.getIdToken();return await ts(this,hE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:g,providerData:y,stsTokenManager:v}=n;k(h&&v,e,"internal-error");const R=Ir.fromJSON(this.name,v);k(typeof h=="string",e,"internal-error"),Bt(r,e.name),Bt(i,e.name),k(typeof u=="boolean",e,"internal-error"),k(typeof g=="boolean",e,"internal-error"),Bt(s,e.name),Bt(o,e.name),Bt(l,e.name),Bt(a,e.name),Bt(c,e.name),Bt(d,e.name);const m=new lt({uid:h,auth:e,email:i,emailVerified:u,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:R,createdAt:c,lastLoginAt:d});return y&&Array.isArray(y)&&(m.providerData=y.map(f=>({...f}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ir;i.updateFromServerResponse(n);const s=new lt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ho(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];k(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Xg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ir;l.updateFromIdToken(r);const a=new lt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
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
 */const lf=new Map;function Nt(t){Ft(t instanceof Function,"Expected a class definition");let e=lf.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lf.set(t,e),e)}/**
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
 */class Jg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jg.type="NONE";const af=Jg;/**
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
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class Tr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ao(this.userKey,i.apiKey,s),this.fullPersistenceKey=ao("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wo(this.auth,{idToken:e}).catch(()=>{});return n?lt._fromGetAccountInfoResponse(this.auth,n,e):null}return lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Tr(Nt(af),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Nt(af);const o=ao(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let h;if(typeof d=="string"){const u=await Wo(e,{idToken:d}).catch(()=>{});if(!u)break;h=await lt._fromGetAccountInfoResponse(e,u,d)}else h=lt._fromJSON(e,d);c!==s&&(l=h),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Tr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Tr(s,e,r))}}/**
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
 */function cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(n_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(i_(e))return"Blackberry";if(s_(e))return"Webos";if(e_(e))return"Safari";if((e.includes("chrome/")||t_(e))&&!e.includes("edge/"))return"Chrome";if(r_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zg(t=Re()){return/firefox\//i.test(t)}function e_(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function t_(t=Re()){return/crios\//i.test(t)}function n_(t=Re()){return/iemobile/i.test(t)}function r_(t=Re()){return/android/i.test(t)}function i_(t=Re()){return/blackberry/i.test(t)}function s_(t=Re()){return/webos/i.test(t)}function Xu(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wE(t=Re()){var e;return Xu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function EE(){return Mw()&&document.documentMode===10}function o_(t=Re()){return Xu(t)||r_(t)||s_(t)||i_(t)||/windows phone/i.test(t)||n_(t)}/**
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
 */function l_(t,e=[]){let n;switch(t){case"Browser":n=cf(Re());break;case"Worker":n=`${cf(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
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
 */class CE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SE(t,e={}){return pt(t,"GET","/v2/passwordPolicy",Et(t,e))}/**
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
 */const IE=6;class TE{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??IE,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class kE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uf(this),this.idTokenSubscription=new uf(this),this.beforeStateQueue=new CE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wo(this,{idToken:e}),r=await lt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(st(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(fn(this));const n=e?Te(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SE(this),n=new TE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(st(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&rE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Vt(t){return Te(t)}class uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bw(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _s={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NE(t){_s=t}function Ju(t){return _s.loadJS(t)}function xE(){return _s.recaptchaV2Script}function RE(){return _s.recaptchaEnterpriseScript}function PE(){return _s.gapiScript}function a_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const AE=500,OE=6e4,Gs=1e12;class DE{constructor(e){this.auth=e,this.counter=Gs,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new bE(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Gs;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Gs;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Gs;return(r=this._widgets.get(n))==null||r.execute(),""}}class LE{constructor(){this.enterprise=new ME}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ME{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bE{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=FE(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},OE)},AE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function FE(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const UE="recaptcha-enterprise",xi="NO_RECAPTCHA";class c_{constructor(e){this.type=UE,this.auth=Vt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Yg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Qg(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;sf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xi)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new LE().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&sf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=RE();a.length!==0&&(a+=l),Ju(a).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function va(t,e,n,r=!1,i=!1){const s=new c_(t);let o;if(i)o=xi;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function wa(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("PHONE_PROVIDER")){const o=await va(t,e,n);return r(t,o).catch(async l=>{var a;if(((a=t._getRecaptchaConfig())==null?void 0:a.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const c=await va(t,e,n,!1,!0);return r(t,c)}return Promise.reject(l)})}else{const o=await va(t,e,n,!1,!0);return r(t,o)}}async function jE(t){const e=Vt(t),n=await Yg(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Qg(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new c_(e).verify()}/**
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
 */function zE(t,e){const n=Ku(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gn(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function VE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WE(t,e,n){const r=Vt(t);k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=u_(e),{host:o,port:l}=HE(e),a=l===null?"":`:${l}`,c={url:`${s}//${o}${a}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){k(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),k(Gn(c,r.config.emulator)&&Gn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Gr(o)?(Ag(`${s}//${o}${a}`),Og("Auth",!0)):BE()}function u_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HE(t){const e=u_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:df(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:df(o)}}}function df(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
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
 */async function kr(t,e){return Tl(t,"POST","/v1/accounts:signInWithIdp",Et(t,e))}/**
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
 */const $E="http://localhost";class qn extends Zu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new qn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kr(e,n)}buildRequest(){const e={requestUri:$E,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=er(n)}return e}}/**
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
 */async function hf(t,e){return pt(t,"POST","/v1/accounts:sendVerificationCode",Et(t,e))}async function GE(t,e){return Tl(t,"POST","/v1/accounts:signInWithPhoneNumber",Et(t,e))}async function KE(t,e){const n=await Tl(t,"POST","/v1/accounts:signInWithPhoneNumber",Et(t,e));if(n.temporaryProof)throw gi(t,"account-exists-with-different-credential",n);return n}const qE={USER_NOT_FOUND:"user-not-found"};async function QE(t,e){const n={...e,operation:"REAUTH"};return Tl(t,"POST","/v1/accounts:signInWithPhoneNumber",Et(t,n),qE)}/**
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
 */class jn extends Zu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new jn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new jn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return GE(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return KE(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return QE(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new jn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */class d_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ys extends d_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends ys{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Xt extends ys{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
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
 */class Jt extends ys{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
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
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await lt._fromIdTokenResponse(e,r,i),o=ff(r);return new Ur({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ff(r);return new Ur({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ff(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bo extends In{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bo(e,n,r,i)}}function h_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(t,s,e,r):s})}async function YE(t,e,n=!1){const r=await ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ur._forOperation(t,"link",r)}/**
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
 */async function XE(t,e,n=!1){const{auth:r}=t;if(st(r.app))return Promise.reject(fn(r));const i="reauthenticate";try{const s=await ts(t,h_(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=Yu(s.idToken);k(o,r,"internal-error");const{sub:l}=o;return k(t.uid===l,r,"user-mismatch"),Ur._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
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
 */async function f_(t,e,n=!1){if(st(t.app))return Promise.reject(fn(t));const r="signIn",i=await h_(t,r,e),s=await Ur._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function p_(t,e){return f_(Vt(t),e)}function JE(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function ZE(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function eC(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function tC(t){return Te(t).signOut()}/**
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
 */function pf(t,e){return pt(t,"POST","/v2/accounts/mfaEnrollment:start",Et(t,e))}const $o="__sak";/**
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
 */class m_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nC=1e3,rC=10;class g_ extends m_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=o_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}g_.type="LOCAL";const iC=g_;/**
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
 */class __ extends m_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}__.type="SESSION";const y_=__;/**
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
 */function sC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await sC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
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
 */function ed(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class oC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=ed("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(u.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function se(){return window}function lC(t){se().location.href=t}/**
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
 */function td(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function aC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function uC(){return td()?self:null}/**
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
 */const v_="firebaseLocalStorageDb",dC=1,Go="firebaseLocalStorage",w_="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function hC(){const t=indexedDB.deleteDatabase(v_);return new vs(t).toPromise()}function Ac(){const t=indexedDB.open(v_,dC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:w_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await hC(),e(await Ac()))})})}async function mf(t,e,n){const r=Nl(t,!0).put({[w_]:e,value:n});return new vs(r).toPromise()}async function fC(t,e){const n=Nl(t,!1).get(e),r=await new vs(n).toPromise();return r===void 0?null:r.value}function gf(t,e){const n=Nl(t,!0).delete(e);return new vs(n).toPromise()}const pC=800,mC=3;class E_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(uC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await aC(),!this.activeServiceWorker)return;this.sender=new oC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await mf(e,$o,"1"),await gf(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nl(i,!1).getAll();return new vs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E_.type="LOCAL";const gC=E_;/**
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
 */function _f(t,e){return pt(t,"POST","/v2/accounts/mfaSignIn:start",Et(t,e))}/**
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
 */const Ea=a_("rcb"),_C=new gs(3e4,6e4);class yC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=se().grecaptcha)!=null&&e.render)}load(e,n=""){return k(vC(n),e,"argument-error"),this.shouldResolveImmediately(n)&&rf(se().grecaptcha)?Promise.resolve(se().grecaptcha):new Promise((r,i)=>{const s=se().setTimeout(()=>{i(Be(e,"network-request-failed"))},_C.get());se()[Ea]=()=>{se().clearTimeout(s),delete se()[Ea];const l=se().grecaptcha;if(!l||!rf(l)){i(Be(e,"internal-error"));return}const a=l.render;l.render=(c,d)=>{const h=a(c,d);return this.counter++,h},this.hostLanguage=n,r(l)};const o=`${xE()}?${er({onload:Ea,render:"explicit",hl:n})}`;Ju(o).catch(()=>{clearTimeout(s),i(Be(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=se().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function vC(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class wC{async load(e){return new DE(e)}clearedOneInstance(){}}/**
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
 */const Ri="recaptcha",EC={theme:"light",type:"image"};class CC{constructor(e,n,r={...EC}){this.parameters=r,this.type=Ri,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Vt(e),this.isInvisible=this.parameters.size==="invisible",k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wC:new yC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=se()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k($g()&&!td(),this.auth,"internal-error"),await SC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await dE(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function SC(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class IC{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=jn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function TC(t,e,n){if(st(t.app))return Promise.reject(fn(t));const r=Vt(t),i=await C_(r,e,Te(n));return new IC(i,s=>p_(r,s))}async function C_(t,e,n){var r;if(!t._getRecaptchaConfig())try{await jE(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){k(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await wa(t,o,"mfaSmsEnrollment",async(d,h)=>{if(h.phoneEnrollmentInfo.captchaResponse===xi){k((n==null?void 0:n.type)===Ri,d,"argument-error");const u=await Ca(d,h,n);return pf(d,u)}return pf(d,h)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{k(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;k(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await wa(t,l,"mfaSmsSignIn",async(h,u)=>{if(u.phoneSignInInfo.captchaResponse===xi){k((n==null?void 0:n.type)===Ri,h,"argument-error");const g=await Ca(h,u,n);return _f(h,g)}return _f(h,u)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await wa(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===xi){k((n==null?void 0:n.type)===Ri,c,"argument-error");const h=await Ca(c,d,n);return hf(c,h)}return hf(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function Ca(t,e,n){k(n.type===Ri,t,"argument-error");const r=await n.verify();k(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,a=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:a}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */class zn{constructor(e){this.providerId=zn.PROVIDER_ID,this.auth=Vt(e)}verifyPhoneNumber(e,n){return C_(this.auth,e,Te(n))}static credential(e,n){return jn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return zn.credentialFromTaggedObject(n)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?jn._fromTokenResponse(n,r):null}}zn.PROVIDER_ID="phone";zn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function kC(t,e){return e?Nt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nd extends Zu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NC(t){return f_(t.auth,new nd(t),t.bypassAuthState)}function xC(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),XE(n,new nd(t),t.bypassAuthState)}async function RC(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),YE(n,new nd(t),t.bypassAuthState)}/**
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
 */class S_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NC;case"linkViaPopup":case"linkViaRedirect":return RC;case"reauthViaPopup":case"reauthViaRedirect":return xC;default:bt(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PC=new gs(2e3,1e4);class gr extends S_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PC.get())};e()}}gr.currentPopupAction=null;/**
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
 */const AC="pendingRedirect",co=new Map;class OC extends S_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const r=await DC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DC(t,e){const n=bC(e),r=MC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LC(t,e){co.set(t._key(),e)}function MC(t){return Nt(t._redirectPersistence)}function bC(t){return ao(AC,t.config.apiKey,t.name)}async function FC(t,e,n=!1){if(st(t.app))return Promise.reject(fn(t));const r=Vt(t),i=kC(r,e),o=await new OC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const UC=10*60*1e3;class jC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UC&&this.cachedEventUids.clear(),this.cachedEventUids.has(yf(e))}saveEventToCache(e){this.cachedEventUids.add(yf(e)),this.lastProcessedEventTime=Date.now()}}function yf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I_(t);default:return!1}}/**
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
 */async function VC(t,e={}){return pt(t,"GET","/v1/projects",e)}/**
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
 */const WC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HC=/^https?/;async function BC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VC(t);for(const n of e)try{if($C(n))return}catch{}bt(t,"unauthorized-domain")}function $C(t){const e=Rc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!HC.test(n))return!1;if(WC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const GC=new gs(3e4,6e4);function vf(){const t=se().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KC(t){return new Promise((e,n)=>{var i,s,o;function r(){vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vf(),n(Be(t,"network-request-failed"))},timeout:GC.get()})}if((s=(i=se().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=se().gapi)!=null&&o.load)r();else{const l=a_("iframefcb");return se()[l]=()=>{gapi.load?r():n(Be(t,"network-request-failed"))},Ju(`${PE()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw uo=null,e})}let uo=null;function qC(t){return uo=uo||KC(t),uo}/**
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
 */const QC=new gs(5e3,15e3),YC="__/auth/iframe",XC="emulator/auth/iframe",JC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eS(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qu(e,XC):`https://${t.config.authDomain}/${YC}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=ZC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${er(r).slice(1)}`}async function tS(t){const e=await qC(t),n=se().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:eS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),l=se().setTimeout(()=>{s(o)},QC.get());function a(){se().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const nS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rS=500,iS=600,sS="_blank",oS="http://localhost";class wf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lS(t,e,n,r=rS,i=iS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...nS,width:r.toString(),height:i.toString(),top:s,left:o},c=Re().toLowerCase();n&&(l=t_(c)?sS:n),Zg(c)&&(e=e||oS,a.scrollbars="yes");const d=Object.entries(a).reduce((u,[g,y])=>`${u}${g}=${y},`,"");if(wE(c)&&l!=="_self")return aS(e||"",l),new wf(null);const h=window.open(e||"",l,d);k(h,t,"popup-blocked");try{h.focus()}catch{}return new wf(h)}function aS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cS="__/auth/handler",uS="emulator/auth/handler",dS=encodeURIComponent("fac");async function Ef(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof d_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof ys){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${dS}=${encodeURIComponent(a)}`:"";return`${hS(t)}?${er(l).slice(1)}${c}`}function hS({config:t}){return t.emulator?Qu(t,uS):`https://${t.authDomain}/${cS}`}/**
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
 */const Sa="webStorageSupport";class fS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y_,this._completeRedirectFn=FC,this._overrideRedirectResult=LC}async _openPopup(e,n,r,i){var o;Ft((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ef(e,n,r,Rc(),i);return lS(e,s,ed())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ef(e,n,r,Rc(),i);return lC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tS(e),r=new jC(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sa,{type:Sa},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Sa];s!==void 0&&n(!!s),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return o_()||e_()||Xu()}}const pS=fS;var Cf="@firebase/auth",Sf="1.11.0";/**
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
 */class mS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _S(t){Fr(new Kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l_(t)},c=new kE(r,i,s,a);return VE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new Kn("auth-internal",e=>{const n=Vt(e.getProvider("auth").getImmediate());return(r=>new mS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Cf,Sf,gS(t)),hn(Cf,Sf,"esm2020")}/**
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
 */const yS=5*60,vS=Pg("authIdTokenMaxAge")||yS;let If=null;const wS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vS)return;const i=n==null?void 0:n.token;If!==i&&(If=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ES(t=jg()){const e=Ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zE(t,{popupRedirectResolver:pS,persistence:[gC,iC,y_]}),r=Pg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=wS(s.toString());ZE(n,o,()=>o(n.currentUser)),JE(n,l=>o(l))}}const i=xg("auth");return i&&WE(n,`http://${i}`),n}function CS(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}NE({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Be("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",CS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_S("Browser");var SS="firebase",IS="12.2.1";/**
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
 */hn(SS,IS,"app");var Tf={};const kf="@firebase/database",Nf="1.1.0";/**
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
 */let T_="";function TS(t){T_=t}/**
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
 */class kS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class NS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const k_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new kS(e)}}catch{}return new NS},Ln=k_("localStorage"),xS=k_("sessionStorage");/**
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
 */const Nr=new $u("@firebase/database"),RS=function(){let t=1;return function(){return t++}}(),N_=function(t){const e=Kw(t),n=new Hw;n.update(e);const r=n.digest();return Vu.encodeByteArray(r)},ws=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ws.apply(null,r):typeof r=="object"?e+=ae(r):e+=r,e+=" "}return e};let Pi=null,xf=!0;const PS=function(t,e){C(!e,"Can't turn on custom loggers persistently."),Nr.logLevel=B.VERBOSE,Pi=Nr.log.bind(Nr)},Se=function(...t){if(xf===!0&&(xf=!1,Pi===null&&xS.get("logging_enabled")===!0&&PS()),Pi){const e=ws.apply(null,t);Pi(e)}},Es=function(t){return function(...e){Se(t,...e)}},Oc=function(...t){const e="FIREBASE INTERNAL ERROR: "+ws(...t);Nr.error(e)},Ut=function(...t){const e=`FIREBASE FATAL ERROR: ${ws(...t)}`;throw Nr.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+ws(...t);Nr.warn(e)},AS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},OS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jr="[MIN_NAME]",Qn="[MAX_NAME]",qr=function(t,e){if(t===e)return 0;if(t===jr||e===Qn)return-1;if(e===jr||t===Qn)return 1;{const n=Rf(t),r=Rf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},DS=function(t,e){return t===e?0:t<e?-1:1},li=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ae(e))},rd=function(t){if(typeof t!="object"||t===null)return ae(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ae(e[r]),n+=":",n+=rd(t[e[r]]);return n+="}",n},R_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const P_=function(t){C(!x_(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(a=0;a<64;a+=8){let u=parseInt(d.substr(a,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},LS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const FS=new RegExp("^-?(0*)\\d{1,10}$"),US=-2147483648,jS=2147483647,Rf=function(t){if(FS.test(t)){const e=Number(t);if(e>=US&&e<=jS)return e}return null},Qr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},zS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ai=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class VS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,st(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class WS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class ho{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ho.OWNER="owner";/**
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
 */const id="5",A_="v",O_="s",D_="r",L_="f",M_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,b_="ls",F_="p",Dc="ac",U_="websocket",j_="long_polling";/**
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
 */class z_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function V_(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===U_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===j_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HS(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class BS{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sw(this.counters_)}}/**
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
 */const Ia={},Ta={};function sd(t){const e=t.toString();return Ia[e]||(Ia[e]=new BS),Ia[e]}function $S(t,e){const n=t.toString();return Ta[n]||(Ta[n]=e()),Ta[n]}/**
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
 */class GS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Qr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pf="start",KS="close",qS="pLPCommand",QS="pRTLPCB",W_="id",H_="pw",B_="ser",YS="cb",XS="seg",JS="ts",ZS="d",eI="dframe",$_=1870,G_=30,tI=$_-G_,nI=25e3,rI=3e4;class _r{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=sd(n),this.urlFn=a=>(this.appCheckToken&&(a[Dc]=this.appCheckToken),V_(n,j_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new GS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rI)),OS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new od((...s)=>{const[o,l,a,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pf)this.id=l,this.password=a;else if(o===KS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Pf]="t",r[B_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[YS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[A_]=id,this.transportSessionId&&(r[O_]=this.transportSessionId),this.lastSessionId&&(r[b_]=this.lastSessionId),this.applicationId&&(r[F_]=this.applicationId),this.appCheckToken&&(r[Dc]=this.appCheckToken),typeof location<"u"&&location.hostname&&M_.test(location.hostname)&&(r[D_]=L_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_r.forceAllow_=!0}static forceDisallow(){_r.forceDisallow_=!0}static isAvailable(){return _r.forceAllow_?!0:!_r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LS()&&!MS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kg(n),i=R_(r,tI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[eI]="t",r[W_]=e,r[H_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class od{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=RS(),window[qS+this.uniqueCallbackIdentifier]=e,window[QS+this.uniqueCallbackIdentifier]=n,this.myIFrame=od.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[W_]=this.myID,e[H_]=this.myPW,e[B_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+G_+r.length<=$_;){const o=this.pendingSegs.shift();r=r+"&"+XS+i+"="+o.seg+"&"+JS+i+"="+o.ts+"&"+ZS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(nI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const iI=16384,sI=45e3;let Ko=null;typeof MozWebSocket<"u"?Ko=MozWebSocket:typeof WebSocket<"u"&&(Ko=WebSocket);class ot{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=sd(n),this.connURL=ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[A_]=id,typeof location<"u"&&location.hostname&&M_.test(location.hostname)&&(o[D_]=L_),n&&(o[O_]=n),r&&(o[b_]=r),i&&(o[Dc]=i),s&&(o[F_]=s),V_(e,U_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ln.set("previous_websocket_failure",!0);try{let r;Lg(),this.mySock=new Ko(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ko!==null&&!ot.forceDisallow_}static previouslyFailed(){return Ln.isInMemoryStorage||Ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=R_(n,iI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
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
 */class ns{static get ALL_TRANSPORTS(){return[_r,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ot&&ot.isAvailable();let r=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ot];else{const i=this.transports_=[];for(const s of ns.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ns.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ns.globalTransportInitialized_=!1;/**
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
 */const oI=6e4,lI=5e3,aI=10*1024,cI=100*1024,ka="t",Af="d",uI="s",Of="r",dI="e",Df="o",Lf="a",Mf="n",bf="p",hI="h";class fI{constructor(e,n,r,i,s,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new ns(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ka in e){const n=e[ka];n===Lf?this.upgradeIfSecondaryHealthy_():n===Of?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Df&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=li("t",e),r=li("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=li("t",e),r=li("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=li(ka,e);if(Af in e){const r=e[Af];if(n===hI){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Mf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uI?this.onConnectionShutdown_(r):n===Of?this.onReset_(r):n===dI?Oc("Server Error: "+r):n===Df?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Oc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),id!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class K_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class q_{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class qo extends q_{static getInstance(){return new qo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ff=32,Uf=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function W(){return new $("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function Q_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Y_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function X_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Ne(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ld(t,e){if(yn(t)!==yn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function at(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(yn(t)>yn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class mI{constructor(e,n){this.errorPrefix_=n,this.parts_=Y_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Il(this.parts_[r]);J_(this)}}function gI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Il(e),J_(t)}function _I(t){const e=t.parts_.pop();t.byteLength_-=Il(e),t.parts_.length>0&&(t.byteLength_-=1)}function J_(t){if(t.byteLength_>Uf)throw new Error(t.errorPrefix_+"has a key path longer than "+Uf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ff)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ff+") or object contains a cycle "+Pn(t))}function Pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ad extends q_{static getInstance(){return new ad}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ai=1e3,yI=60*5*1e3,jf=30*1e3,vI=1.3,wI=3e4,EI="server_kill",zf=3;class Pt extends K_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Pt.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ai,this.maxReconnectDelay_=yI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Lg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ae(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Sl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;Pt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=br(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ww(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Vw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Oc("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wI&&(this.reconnectDelay_=ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(h){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,l=new fI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ue(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(EI)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ue(h),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sc(this.interruptReasons_)&&(this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>rd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zf&&(this.reconnectDelay_=jf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+T_.replace(/\./g,"-")]=1,Hu()?e["framework.cordova"]=1:Dg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qo.getInstance().currentlyOnline();return Sc(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
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
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
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
 */class xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(jr,e),i=new b(jr,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
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
 */let Ks;class Z_ extends xl{static get __EMPTY_NODE(){return Ks}static set __EMPTY_NODE(e){Ks=e}compare(e,n){return qr(e.name,n.name)}isDefinedOn(e){throw $r("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Qn,Ks)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,Ks)}toString(){return".key"}}const xr=new Z_;/**
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
 */class qs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pe.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pe.RED=!0;pe.BLACK=!1;class CI{copy(e,n,r,i,s){return this}insert(e,n,r){return new pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qs(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new CI;/**
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
 */function SI(t,e){return qr(t.name,e.name)}function cd(t,e){return qr(t,e)}/**
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
 */let Lc;function II(t){Lc=t}const ey=function(t){return typeof t=="number"?"number:"+P_(t):"string:"+t},ty=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else C(t===Lc||t.isEmpty(),"priority of unexpected type.");C(t===Lc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vf;class he{static set __childrenNodeConstructor(e){Vf=e}static get __childrenNodeConstructor(){return Vf}constructor(e,n=he.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ty(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new he(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:M(e)===".priority"?this.priorityNode_:he.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:he.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||yn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,he.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ey(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=P_(this.value_):e+=this.value_,this.lazyHash_=N_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===he.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof he.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=he.VALUE_TYPE_ORDER.indexOf(n),s=he.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}he.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ny,ry;function TI(t){ny=t}function kI(t){ry=t}class NI extends xl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?qr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Qn,new he("[PRIORITY-POST]",ry))}makePost(e,n){const r=ny(e);return new b(n,new he("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new NI;/**
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
 */const xI=Math.log(2);class RI{constructor(e){const n=s=>parseInt(Math.log(s)/xI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qo=function(t,e,n,r){t.sort(e);const i=function(a,c){const d=c-a;let h,u;if(d===0)return null;if(d===1)return h=t[a],u=n?n(h):h,new pe(u,h.node,pe.BLACK,null,null);{const g=parseInt(d/2,10)+a,y=i(a,g),v=i(g+1,c);return h=t[g],u=n?n(h):h,new pe(u,h.node,pe.BLACK,y,v)}},s=function(a){let c=null,d=null,h=t.length;const u=function(y,v){const R=h-y,m=h;h-=y;const f=i(R+1,m),p=t[R],w=n?n(p):p;g(new pe(w,p.node,v,null,f))},g=function(y){c?(c.left=y,c=y):(d=y,c=y)};for(let y=0;y<a.count;++y){const v=a.nextBitIsOne(),R=Math.pow(2,a.count-(y+1));v?u(R,pe.BLACK):(u(R,pe.BLACK),u(R,pe.RED))}return d},o=new RI(t.length),l=s(o);return new Le(r||e,l)};/**
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
 */let Na;const rr={};class xt{static get Default(){return C(rr&&ne,"ChildrenNode.ts has not been loaded"),Na=Na||new xt({".priority":rr},{".priority":ne}),Na}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==xr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Qo(r,e.getCompare()):l=rr;const a=e.toString(),c={...this.indexSet_};c[a]=e;const d={...this.indexes_};return d[a]=l,new xt(d,c)}addToIndexes(e,n){const r=jo(this.indexes_,(i,s)=>{const o=br(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===rr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Qo(l,o.getCompare())}else return rr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new xt(r,this.indexSet_)}removeFromIndexes(e,n){const r=jo(this.indexes_,i=>{if(i===rr)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new xt(r,this.indexSet_)}}/**
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
 */let ci;class A{static get EMPTY_NODE(){return ci||(ci=new A(new Le(cd),null,xt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ty(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ci}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ci:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ci:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{C(M(e)!==".priority"||yn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ey(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":N_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cs?-1:0}withIndex(e){if(e===xr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xr?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PI extends A{constructor(){super(new Le(cd),A.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Cs=new PI;Object.defineProperties(b,{MIN:{value:new b(jr,A.EMPTY_NODE)},MAX:{value:new b(Qn,Cs)}});Z_.__EMPTY_NODE=A.EMPTY_NODE;he.__childrenNodeConstructor=A;II(Cs);kI(Cs);/**
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
 */const AI=!0;function me(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new he(n,me(e))}if(!(t instanceof Array)&&AI){const n=[];let r=!1;if(je(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=Qo(n,SI,o=>o.name,cd);if(r){const o=Qo(n,ne.getCompare());return new A(s,me(e),new xt({".priority":o},{".priority":ne}))}else return new A(s,me(e),xt.Default)}else{let n=A.EMPTY_NODE;return je(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}TI(me);/**
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
 */class OI extends xl{constructor(e){super(),this.indexPath_=e,C(!F(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?qr(e.name,n.name):s}makePost(e,n){const r=me(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Cs);return new b(Qn,e)}toString(){return Y_(this.indexPath_,0).join("/")}}/**
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
 */class DI extends xl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?qr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=me(e);return new b(n,r)}toString(){return".value"}}const LI=new DI;/**
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
 */function iy(t){return{type:"value",snapshotNode:t}}function zr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function MI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ud{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(rs(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(zr(n,r)):o.trackChildChange(is(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(rs(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(is(i,s,o))}else r.trackChildChange(zr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ss{constructor(e){this.indexedFilter_=new ud(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class bI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,g)=>h(g,u)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new b(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||l.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const g=u==null?1:o(u,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(is(n,r,h)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(rs(n,h));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(s!=null&&s.trackChildChange(zr(u.name,u.node)),v.updateImmediateChild(u.name,u.node)):v}}else return r.isEmpty()?e:d&&o(c,a)>=0?(s!=null&&(s.trackChildChange(rs(c.name,c.node)),s.trackChildChange(zr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,A.EMPTY_NODE)):e}}/**
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
 */class dd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new dd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function FI(t){return t.loadsAllData()?new ud(t.getIndex()):t.hasLimit()?new bI(t):new ss(t)}function Wf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===LI?n="$value":t.index_===xr?n="$key":(C(t.index_ instanceof OI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ae(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ae(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ae(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ae(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
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
 */class Yo extends K_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Yo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Wf(e._queryParams);this.restRequest_(s+".json",a,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(s,h,!1,r),br(this.listens_,o)===l){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,n){const r=Yo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Wf(e._queryParams),r=e._path.toString(),i=new Sl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+er(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zi(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class UI{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Xo(){return{value:null,children:new Map}}function sy(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Xo());const i=t.children.get(r);e=G(e),sy(i,e,n)}}function Mc(t,e,n){t.value!==null?n(e,t.value):jI(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Mc(i,s,n)})}function jI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class zI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Bf=10*1e3,VI=30*1e3,WI=5*60*1e3;class HI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zI(e);const r=Bf+(VI-Bf)*Math.random();Ai(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*WI))}}/**
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
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function oy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Jo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=oy()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new Jo(W(),n,this.revert)}}else return C(M(this.path)===e,"operationForChild called for unrelated child."),new Jo(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class os{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new os(this.source,W()):new os(this.source,G(this.path))}}/**
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
 */class Yn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return F(this.path)?new Yn(this.source,W(),this.snap.getImmediateChild(e)):new Yn(this.source,G(this.path),this.snap)}}/**
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
 */class ls{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Yn(this.source,W(),n.value):new ls(this.source,W(),n)}else return C(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ls(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class vn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class BI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $I(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(MI(o.childName,o.snapshotNode))}),ui(t,i,"child_removed",e,r,n),ui(t,i,"child_added",e,r,n),ui(t,i,"child_moved",s,r,n),ui(t,i,"child_changed",e,r,n),ui(t,i,"value",e,r,n),i}function ui(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>KI(t,l,a)),o.forEach(l=>{const a=GI(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function GI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function KI(t,e,n){if(e.childName==null||n.childName==null)throw $r("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Rl(t,e){return{eventCache:t,serverCache:e}}function Oi(t,e,n,r){return Rl(new vn(e,n,r),t.serverCache)}function ly(t,e,n,r){return Rl(t.eventCache,new vn(e,n,r))}function Zo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let xa;const qI=()=>(xa||(xa=new Le(DS)),xa);class Q{static fromObject(e){let n=new Q(null);return je(e,(r,i)=>{n=n.set(new $(r),i)}),n}constructor(e,n=qI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:W(),value:this.value};if(F(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ce(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new Q(null)}}set(e,n){if(F(e))return new Q(n,this.children);{const r=M(e),s=(this.children.get(r)||new Q(null)).set(G(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(F(e))return n;{const r=M(e),s=(this.children.get(r)||new Q(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(W(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,W(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,W(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ce(n,i),r):new Q(null)}}foreach(e){this.foreach_(W(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ht{constructor(e){this.writeTree_=e}static empty(){return new ht(new Q(null))}}function Di(t,e,n){if(F(e))return new ht(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ne(i,e);return s=s.updateChild(o,n),new ht(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ht(s)}}}function $f(t,e,n){let r=t;return je(n,(i,s)=>{r=Di(r,ce(e,i),s)}),r}function Gf(t,e){if(F(e))return ht.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ht(n)}}function bc(t,e){return tr(t,e)!=null}function tr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function Kf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function pn(t,e){if(F(e))return t;{const n=tr(t,e);return n!=null?new ht(new Q(n)):new ht(t.writeTree_.subtree(e))}}function Fc(t){return t.writeTree_.isEmpty()}function Vr(t,e){return ay(W(),t.writeTree_,e)}function ay(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ay(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
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
 */function Pl(t,e){return hy(e,t)}function QI(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Di(t.visibleWrites,e,n)),t.lastWriteId=r}function YI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function XI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&JI(l,r.path)?i=!1:at(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return ZI(t),!0;if(r.snap)t.visibleWrites=Gf(t.visibleWrites,r.path);else{const l=r.children;je(l,a=>{t.visibleWrites=Gf(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function JI(t,e){if(t.snap)return at(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&at(ce(t.path,n),e))return!0;return!1}function ZI(t){t.visibleWrites=cy(t.allWrites,eT,W()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eT(t){return t.visible}function cy(t,e,n){let r=ht.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)at(n,o)?(l=Ne(n,o),r=Di(r,l,s.snap)):at(o,n)&&(l=Ne(o,n),r=Di(r,W(),s.snap.getChild(l)));else if(s.children){if(at(n,o))l=Ne(n,o),r=$f(r,l,s.children);else if(at(o,n))if(l=Ne(o,n),F(l))r=$f(r,W(),s.children);else{const a=br(s.children,M(l));if(a){const c=a.getChild(G(l));r=Di(r,W(),c)}}}else throw $r("WriteRecord should have .snap or .children")}}return r}function uy(t,e,n,r,i){if(!r&&!i){const s=tr(t.visibleWrites,e);if(s!=null)return s;{const o=pn(t.visibleWrites,e);if(Fc(o))return n;if(n==null&&!bc(o,W()))return null;{const l=n||A.EMPTY_NODE;return Vr(o,l)}}}else{const s=pn(t.visibleWrites,e);if(!i&&Fc(s))return n;if(!i&&n==null&&!bc(s,W()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(at(c.path,e)||at(e,c.path))},l=cy(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Vr(l,a)}}}function tT(t,e,n){let r=A.EMPTY_NODE;const i=tr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pn(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=Vr(pn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),Kf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pn(t.visibleWrites,e);return Kf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function nT(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(bc(t.visibleWrites,s))return null;{const o=pn(t.visibleWrites,s);return Fc(o)?i.getChild(n):Vr(o,i.getChild(n))}}function rT(t,e,n,r){const i=ce(e,n),s=tr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pn(t.visibleWrites,i);return Vr(o,r.getNode().getImmediateChild(n))}else return null}function iT(t,e){return tr(t.visibleWrites,e)}function sT(t,e,n,r,i,s,o){let l;const a=pn(t.visibleWrites,e),c=tr(a,W());if(c!=null)l=c;else if(n!=null)l=Vr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],h=o.getCompare(),u=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=u.getNext();for(;g&&d.length<i;)h(g,r)!==0&&d.push(g),g=u.getNext();return d}else return[]}function oT(){return{visibleWrites:ht.empty(),allWrites:[],lastWriteId:-1}}function el(t,e,n,r){return uy(t.writeTree,t.treePath,e,n,r)}function pd(t,e){return tT(t.writeTree,t.treePath,e)}function qf(t,e,n,r){return nT(t.writeTree,t.treePath,e,n,r)}function tl(t,e){return iT(t.writeTree,ce(t.treePath,e))}function lT(t,e,n,r,i,s){return sT(t.writeTree,t.treePath,e,n,r,i,s)}function md(t,e,n){return rT(t.writeTree,t.treePath,e,n)}function dy(t,e){return hy(ce(t.treePath,e),t.writeTree)}function hy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class aT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,is(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,rs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,zr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,is(r,e.snapshotNode,i.oldSnap));else throw $r("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class cT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fy=new cT;class gd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return md(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xn(this.viewCache_),s=lT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function uT(t){return{filter:t}}function dT(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hT(t,e,n,r,i){const s=new aT;let o,l;if(n.type===ct.OVERWRITE){const c=n;c.source.fromUser?o=Uc(t,e,c.path,c.snap,r,i,s):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=nl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===ct.MERGE){const c=n;c.source.fromUser?o=pT(t,e,c.path,c.children,r,i,s):(C(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=jc(t,e,c.path,c.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const c=n;c.revert?o=_T(t,e,c.path,r,i,s):o=mT(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=gT(t,e,n.path,r,s);else throw $r("Unknown operation type: "+n.type);const a=s.getChanges();return fT(e,o,a),{viewCache:o,changes:a}}function fT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Zo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(iy(Zo(e)))}}function py(t,e,n,r,i,s){const o=e.eventCache;if(tl(r,n)!=null)return e;{let l,a;if(F(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xn(e),d=c instanceof A?c:A.EMPTY_NODE,h=pd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const c=el(r,Xn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=M(n);if(c===".priority"){C(yn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const h=qf(r,n,d,a);h!=null?l=t.filter.updatePriority(d,h):l=o.getNode()}else{const d=G(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const u=qf(r,n,o.getNode(),a);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=md(r,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,d,i,s):l=o.getNode()}}return Oi(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function nl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);c=d.updateFullNode(a.getNode(),g,null)}else{const g=M(n);if(!a.isCompleteForPath(n)&&yn(n)>1)return e;const y=G(n),R=a.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?c=d.updatePriority(a.getNode(),R):c=d.updateChild(a.getNode(),g,R,y,fy,null)}const h=ly(e,c,a.isFullyInitialized()||F(n),d.filtersNodes()),u=new gd(i,h,s);return py(t,h,n,i,u,l)}function Uc(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const d=new gd(i,e,s);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Oi(e,c,!0,t.filter.filtersNodes());else{const h=M(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=Oi(e,c,l.isFullyInitialized(),l.isFiltered());else{const u=G(n),g=l.getNode().getImmediateChild(h);let y;if(F(u))y=r;else{const v=d.getCompleteChild(h);v!=null?Q_(u)===".priority"&&v.getChild(X_(u)).isEmpty()?y=v:y=v.updateChild(u,r):y=A.EMPTY_NODE}if(g.equals(y))a=e;else{const v=t.filter.updateChild(l.getNode(),h,y,u,d,o);a=Oi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Qf(t,e){return t.eventCache.isCompleteForChild(e)}function pT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const d=ce(n,a);Qf(e,M(d))&&(l=Uc(t,l,d,c,i,s,o))}),r.foreach((a,c)=>{const d=ce(n,a);Qf(e,M(d))||(l=Uc(t,l,d,c,i,s,o))}),l}function Yf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function jc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;F(n)?c=r:c=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),y=Yf(t,g,u);a=nl(t,a,new $(h),y,i,s,o,l)}}),c.children.inorderTraversal((h,u)=>{const g=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!g){const y=e.serverCache.getNode().getImmediateChild(h),v=Yf(t,y,u);a=nl(t,a,new $(h),v,i,s,o,l)}}),a}function mT(t,e,n,r,i,s,o){if(tl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return nl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let c=new Q(null);return a.getNode().forEachChild(xr,(d,h)=>{c=c.set(new $(d),h)}),jc(t,e,n,c,i,s,l,o)}else return e}else{let c=new Q(null);return r.foreach((d,h)=>{const u=ce(n,d);a.isCompleteForPath(u)&&(c=c.set(d,a.getNode().getChild(u)))}),jc(t,e,n,c,i,s,l,o)}}function gT(t,e,n,r,i){const s=e.serverCache,o=ly(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return py(t,o,n,r,fy,i)}function _T(t,e,n,r,i,s){let o;if(tl(r,n)!=null)return e;{const l=new gd(r,e,i),a=e.eventCache.getNode();let c;if(F(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=el(r,Xn(e));else{const h=e.serverCache.getNode();C(h instanceof A,"serverChildren would be complete if leaf node"),d=pd(r,h)}d=d,c=t.filter.updateFullNode(a,d,s)}else{const d=M(n);let h=md(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=a.getImmediateChild(d)),h!=null?c=t.filter.updateChild(a,d,h,G(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,A.EMPTY_NODE,G(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=el(r,Xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||tl(r,W())!=null,Oi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class yT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ud(r.getIndex()),s=FI(r);this.processor_=uT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new vn(a,o.isFullyInitialized(),i.filtersNodes()),h=new vn(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Rl(h,d),this.eventGenerator_=new BI(this.query_)}get query(){return this.query_}}function vT(t){return t.viewCache_.serverCache.getNode()}function wT(t){return Zo(t.viewCache_)}function ET(t,e){const n=Xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function Xf(t){return t.eventRegistrations_.length===0}function CT(t,e){t.eventRegistrations_.push(e)}function Jf(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Zf(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(C(Xn(t.viewCache_),"We should always have a full cache before handling merges"),C(Zo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=hT(t.processor_,i,e,n,r);return dT(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,my(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ST(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(zr(s,o))}),n.isFullyInitialized()&&r.push(iy(n.getNode())),my(t,r,n.getNode(),e)}function my(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $I(t.eventGenerator_,e,n,i)}/**
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
 */let rl;class gy{constructor(){this.views=new Map}}function IT(t){C(!rl,"__referenceConstructor has already been defined"),rl=t}function TT(){return C(rl,"Reference.ts has not been loaded"),rl}function kT(t){return t.views.size===0}function _d(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),Zf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Zf(o,e,n,r));return s}}function _y(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=el(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=pd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const c=Rl(new vn(l,a,!1),new vn(r,i,!1));return new yT(e,c)}return o}function NT(t,e,n,r,i,s){const o=_y(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CT(o,n),ST(o,n)}function xT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=wn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Jf(c,n,r)),Xf(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Jf(a,n,r)),Xf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!wn(t)&&s.push(new(TT())(e._repo,e._path)),{removed:s,events:o}}function yy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function mn(t,e){let n=null;for(const r of t.views.values())n=n||ET(r,e);return n}function vy(t,e){if(e._queryParams.loadsAllData())return Al(t);{const r=e._queryIdentifier;return t.views.get(r)}}function wy(t,e){return vy(t,e)!=null}function wn(t){return Al(t)!=null}function Al(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let il;function RT(t){C(!il,"__referenceConstructor has already been defined"),il=t}function PT(){return C(il,"Reference.ts has not been loaded"),il}let AT=1;class ep{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=oT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ey(t,e,n,r,i){return QI(t.pendingWriteTree_,e,n,r,i),i?Is(t,new Yn(oy(),e,n)):[]}function Mn(t,e,n=!1){const r=YI(t.pendingWriteTree_,e);if(XI(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(W(),!0):je(r.children,o=>{s=s.set(new $(o),!0)}),Is(t,new Jo(r.path,s,n))}else return[]}function Ss(t,e,n){return Is(t,new Yn(hd(),e,n))}function OT(t,e,n){const r=Q.fromObject(n);return Is(t,new ls(hd(),e,r))}function DT(t,e){return Is(t,new os(hd(),e))}function LT(t,e,n){const r=vd(t,n);if(r){const i=wd(r),s=i.path,o=i.queryId,l=Ne(s,e),a=new os(fd(o),l);return Ed(t,s,a)}else return[]}function sl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||wy(o,e))){const a=xT(o,e,n,r);kT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(u,g)=>wn(g));if(d&&!h){const u=t.syncPointTree_.subtree(s);if(!u.isEmpty()){const g=FT(u);for(let y=0;y<g.length;++y){const v=g[y],R=v.query,m=Ty(t,v);t.listenProvider_.startListening(Li(R),as(t,R),m.hashFn,m.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Li(e),null):c.forEach(u=>{const g=t.queryToTagMap.get(Ol(u));t.listenProvider_.stopListening(Li(u),g)}))}UT(t,c)}return l}function Cy(t,e,n,r){const i=vd(t,r);if(i!=null){const s=wd(i),o=s.path,l=s.queryId,a=Ne(o,e),c=new Yn(fd(l),a,n);return Ed(t,o,c)}else return[]}function MT(t,e,n,r){const i=vd(t,r);if(i){const s=wd(i),o=s.path,l=s.queryId,a=Ne(o,e),c=Q.fromObject(n),d=new ls(fd(l),a,c);return Ed(t,o,d)}else return[]}function zc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(u,g)=>{const y=Ne(u,i);s=s||mn(g,y),o=o||wn(g)});let l=t.syncPointTree_.get(i);l?(o=o||wn(l),s=s||mn(l,W())):(l=new gy,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const v=mn(y,W());v&&(s=s.updateImmediateChild(g,v))}));const c=wy(l,e);if(!c&&!e._queryParams.loadsAllData()){const u=Ol(e);C(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const g=jT();t.queryToTagMap.set(u,g),t.tagToQueryMap.set(g,u)}const d=Pl(t.pendingWriteTree_,i);let h=NT(l,e,n,d,s,a);if(!c&&!o&&!r){const u=vy(l,e);h=h.concat(zT(t,e,u))}return h}function yd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ne(o,e),c=mn(l,a);if(c)return c});return uy(i,e,s,n,!0)}function bT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=Ne(c,n);r=r||mn(d,h)});let i=t.syncPointTree_.get(n);i?r=r||mn(i,W()):(i=new gy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new vn(r,!0,!1):null,l=Pl(t.pendingWriteTree_,e._path),a=_y(i,e,l,s?o.getNode():A.EMPTY_NODE,s);return wT(a)}function Is(t,e){return Sy(e,t.syncPointTree_,null,Pl(t.pendingWriteTree_,W()))}function Sy(t,e,n,r){if(F(t.path))return Iy(t,e,n,r);{const i=e.get(W());n==null&&i!=null&&(n=mn(i,W()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=dy(r,o);s=s.concat(Sy(l,a,c,d))}return i&&(s=s.concat(_d(i,t,r,n))),s}}function Iy(t,e,n,r){const i=e.get(W());n==null&&i!=null&&(n=mn(i,W()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=dy(r,o),d=t.operationForChild(o);d&&(s=s.concat(Iy(d,l,a,c)))}),i&&(s=s.concat(_d(i,t,r,n))),s}function Ty(t,e){const n=e.query,r=as(t,n);return{hashFn:()=>(vT(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?LT(t,n._path,r):DT(t,n._path);{const s=bS(i,n);return sl(t,n,null,s)}}}}function as(t,e){const n=Ol(e);return t.queryToTagMap.get(n)}function Ol(t){return t._path.toString()+"$"+t._queryIdentifier}function vd(t,e){return t.tagToQueryMap.get(e)}function wd(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function Ed(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=Pl(t.pendingWriteTree_,e);return _d(r,n,i,null)}function FT(t){return t.fold((e,n,r)=>{if(n&&wn(n))return[Al(n)];{let i=[];return n&&(i=yy(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function Li(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PT())(t._repo,t._path):t}function UT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ol(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function jT(){return AT++}function zT(t,e,n){const r=e._path,i=as(t,e),s=Ty(t,n),o=t.listenProvider_.startListening(Li(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!wn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,h)=>{if(!F(c)&&d&&wn(d))return[Al(d).query];{let u=[];return d&&(u=u.concat(yy(d).map(g=>g.query))),je(h,(g,y)=>{u=u.concat(y)}),u}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(Li(d),as(t,d))}}return o}/**
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
 */class Cd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cd(n)}node(){return this.node_}}class Sd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new Sd(this.syncTree_,n)}node(){return yd(this.syncTree_,this.path_)}}const VT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},tp=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HT(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},HT=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},BT=function(t,e,n,r){return Id(e,new Sd(n,t),r)},ky=function(t,e,n){return Id(t,new Cd(e),n)};function Id(t,e,n){const r=t.getPriority().val(),i=tp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=tp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new he(l,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new he(i))),o.forEachChild(ne,(l,a)=>{const c=Id(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class Td{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function kd(t,e){let n=e instanceof $?e:new $(e),r=t,i=M(n);for(;i!==null;){const s=br(r.node.children,i)||{children:{},childCount:0};r=new Td(i,r,s),n=G(n),i=M(n)}return r}function Yr(t){return t.node.value}function Ny(t,e){t.node.value=e,Vc(t)}function xy(t){return t.node.childCount>0}function $T(t){return Yr(t)===void 0&&!xy(t)}function Dl(t,e){je(t.node.children,(n,r)=>{e(new Td(n,t,r))})}function Ry(t,e,n,r){n&&!r&&e(t),Dl(t,i=>{Ry(i,e,!0,r)}),n&&r&&e(t)}function GT(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ts(t){return new $(t.parent===null?t.name:Ts(t.parent)+"/"+t.name)}function Vc(t){t.parent!==null&&KT(t.parent,t.name,t)}function KT(t,e,n){const r=$T(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Vc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Vc(t))}/**
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
 */const qT=/[\[\].#$\/\u0000-\u001F\u007F]/,QT=/[\[\].#$\u0000-\u001F\u007F]/,Ra=10*1024*1024,Py=function(t){return typeof t=="string"&&t.length!==0&&!qT.test(t)},Ay=function(t){return typeof t=="string"&&t.length!==0&&!QT.test(t)},YT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ay(t)},XT=function(t,e,n,r){Nd(Bu(t,"value"),e,n)},Nd=function(t,e,n){const r=n instanceof $?new mI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pn(r)+" with contents = "+e.toString());if(x_(e))throw new Error(t+"contains "+e.toString()+" "+Pn(r));if(typeof e=="string"&&e.length>Ra/3&&Il(e)>Ra)throw new Error(t+"contains a string greater than "+Ra+" utf8 bytes "+Pn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Py(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gI(r,o),Nd(t,l,r),_I(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pn(r)+" in addition to actual children.")}},Oy=function(t,e,n,r){if(!Ay(n))throw new Error(Bu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},JT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Oy(t,e,n)},ZT=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ek=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Py(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!YT(n))throw new Error(Bu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class tk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ld(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dy(t,e,n){xd(t,n),Ly(t,r=>ld(r,e))}function wt(t,e,n){xd(t,n),Ly(t,r=>at(r,e)||at(e,r))}function Ly(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(nk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Pi&&Se("event: "+n.toString()),Qr(r)}}}/**
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
 */const rk="repo_interrupt",ik=25;class sk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xo(),this.transactionQueueTree_=new Td,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ok(t,e,n){if(t.stats_=sd(t.repoInfo_),t.forceRestClient_||zS())t.server_=new Yo(t.repoInfo_,(r,i,s,o)=>{np(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>rp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pt(t.repoInfo_,e,(r,i,s,o)=>{np(t,r,i,s,o)},r=>{rp(t,r)},r=>{ak(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$S(t.repoInfo_,()=>new HI(t.stats_,t.server_)),t.infoData_=new UI,t.infoSyncTree_=new ep({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ss(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Pd(t,"connected",!1),t.serverSyncTree_=new ep({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);wt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lk(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Rd(t){return VT({timestamp:lk(t)})}function np(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=jo(n,c=>me(c));o=MT(t.serverSyncTree_,s,a,i)}else{const a=me(n);o=Cy(t.serverSyncTree_,s,a,i)}else if(r){const a=jo(n,c=>me(c));o=OT(t.serverSyncTree_,s,a)}else{const a=me(n);o=Ss(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ml(t,s)),wt(t.eventQueue_,l,o)}function rp(t,e){Pd(t,"connected",e),e===!1&&dk(t)}function ak(t,e){je(e,(n,r)=>{Pd(t,n,r)})}function Pd(t,e,n){const r=new $("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=Ss(t.infoSyncTree_,r,i);wt(t.eventQueue_,r,s)}function My(t){return t.nextWriteId_++}function ck(t,e,n){const r=bT(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=me(i).withIndex(e._queryParams.getIndex());zc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ss(t.serverSyncTree_,e._path,s);else{const l=as(t.serverSyncTree_,e);o=Cy(t.serverSyncTree_,e._path,s,l)}return wt(t.eventQueue_,e._path,o),sl(t.serverSyncTree_,e,n,null,!0),s},i=>(Ll(t,"get for query "+ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function uk(t,e,n,r,i){Ll(t,"set",{path:e.toString(),value:n,priority:r});const s=Rd(t),o=me(n,r),l=yd(t.serverSyncTree_,e),a=ky(o,l,s),c=My(t),d=Ey(t.serverSyncTree_,e,a,c,!0);xd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(u,g)=>{const y=u==="ok";y||Ue("set at "+e+" failed: "+u);const v=Mn(t.serverSyncTree_,c,!y);wt(t.eventQueue_,e,v),mk(t,i,u,g)});const h=zy(t,e);Ml(t,h),wt(t.eventQueue_,h,[])}function dk(t){Ll(t,"onDisconnectEvents");const e=Rd(t),n=Xo();Mc(t.onDisconnect_,W(),(i,s)=>{const o=BT(i,s,t.serverSyncTree_,e);sy(n,i,o)});let r=[];Mc(n,W(),(i,s)=>{r=r.concat(Ss(t.serverSyncTree_,i,s));const o=zy(t,i);Ml(t,o)}),t.onDisconnect_=Xo(),wt(t.eventQueue_,W(),r)}function hk(t,e,n){let r;M(e._path)===".info"?r=zc(t.infoSyncTree_,e,n):r=zc(t.serverSyncTree_,e,n),Dy(t.eventQueue_,e._path,r)}function fk(t,e,n){let r;M(e._path)===".info"?r=sl(t.infoSyncTree_,e,n):r=sl(t.serverSyncTree_,e,n),Dy(t.eventQueue_,e._path,r)}function pk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rk)}function Ll(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function mk(t,e,n,r){e&&Qr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function by(t,e,n){return yd(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Ad(t,e=t.transactionQueueTree_){if(e||bl(t,e),Yr(e)){const n=Uy(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gk(t,Ts(e),n)}else xy(e)&&Dl(e,n=>{Ad(t,n)})}function gk(t,e,n){const r=n.map(c=>c.currentWriteId),i=by(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];C(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Ne(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ll(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<n.length;u++)n[u].status=2,d=d.concat(Mn(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&h.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();bl(t,kd(t.transactionQueueTree_,e)),Ad(t,t.transactionQueueTree_),wt(t.eventQueue_,e,d);for(let u=0;u<h.length;u++)Qr(h[u])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ue("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ml(t,e)}},o)}function Ml(t,e){const n=Fy(t,e),r=Ts(n),i=Uy(t,n);return _k(t,i,r),r}function _k(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ne(n,a.path);let d=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,h=a.abortReason,i=i.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ik)d=!0,h="maxretry",i=i.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0));else{const u=by(t,a.path,o);a.currentInputSnapshot=u;const g=e[l].update(u.val());if(g!==void 0){Nd("transaction failed: Data returned ",g,a.path);let y=me(g);typeof g=="object"&&g!=null&&zt(g,".priority")||(y=y.updatePriority(u.getPriority()));const R=a.currentWriteId,m=Rd(t),f=ky(y,u,m);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=f,a.currentWriteId=My(t),o.splice(o.indexOf(R),1),i=i.concat(Ey(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Mn(t.serverSyncTree_,R,!0))}else d=!0,h="nodata",i=i.concat(Mn(t.serverSyncTree_,a.currentWriteId,!0))}wt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(u){setTimeout(u,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}bl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Qr(r[l]);Ad(t,t.transactionQueueTree_)}function Fy(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Yr(r)===void 0;)r=kd(r,n),e=G(e),n=M(e);return r}function Uy(t,e){const n=[];return jy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function jy(t,e,n){const r=Yr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Dl(e,i=>{jy(t,i,n)})}function bl(t,e){const n=Yr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Ny(e,n.length>0?n:void 0)}Dl(e,r=>{bl(t,r)})}function zy(t,e){const n=Ts(Fy(t,e)),r=kd(t.transactionQueueTree_,e);return GT(r,i=>{Pa(t,i)}),Pa(t,r),Ry(r,i=>{Pa(t,i)}),n}function Pa(t,e){const n=Yr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Mn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Ny(e,void 0):n.length=s+1,wt(t.eventQueue_,Ts(e),i);for(let o=0;o<r.length;o++)Qr(r[o])}}/**
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
 */function yk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const ip=function(t,e){const n=wk(t),r=n.namespace;n.domain==="firebase.com"&&Ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||AS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new z_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},wk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(i=yk(t.substring(d,h)));const u=vk(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in u&&(s=u.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class Ek{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class Ck{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Vy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Od{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:Q_(this._path)}get ref(){return new Wt(this._repo,this._path)}get _queryIdentifier(){const e=Hf(this._queryParams),n=rd(e);return n==="{}"?"default":n}get _queryObject(){return Hf(this._queryParams)}isEqual(e){if(e=Te(e),!(e instanceof Od))return!1;const n=this._repo===e._repo,r=ld(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pI(this._path)}}class Wt extends Od{constructor(e,n){super(e,n,new dd,!1)}get parent(){const e=X_(this._path);return e===null?null:new Wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=ol(this.ref,e);return new cs(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cs(i,ol(this.ref,r),ne)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dd(t,e){return t=Te(t),t._checkNotDeleted("ref"),e!==void 0?ol(t._root,e):t._root}function ol(t,e){return t=Te(t),M(t._path)===null?JT("child","path",e):Oy("child","path",e),new Wt(t._repo,ce(t._path,e))}function Sk(t,e){t=Te(t),ZT("set",t._path),XT("set",e,t._path);const n=new Sl;return uk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ik(t){t=Te(t);const e=new Vy(()=>{}),n=new Fl(e);return ck(t._repo,t,n).then(r=>new cs(r,new Wt(t._repo,t._path),t._queryParams.getIndex()))}class Fl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Ek("value",this,new cs(e.snapshotNode,new Wt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ck(this,e,n):null}matches(e){return e instanceof Fl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Tk(t,e,n,r,i){const s=new Vy(n,void 0),o=new Fl(s);return hk(t._repo,t,o),()=>fk(t._repo,t,o)}function kk(t,e,n,r){return Tk(t,"value",e)}IT(Wt);RT(Wt);/**
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
 */const Nk="FIREBASE_DATABASE_EMULATOR_HOST",Wc={};let xk=!1;function Rk(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Gr(s);t.repoInfo_=new z_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Pk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ip(s,i),l=o.repoInfo,a;typeof process<"u"&&Tf&&(a=Tf[Nk]),a?(s=`http://${a}?ns=${l.namespace}`,o=ip(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new WS(t.name,t.options,e);ek("Invalid Firebase Database URL",o),F(o.path)||Ut("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Ok(l,t,c,new VS(t,n));return new Dk(d,t)}function Ak(t,e){const n=Wc[e];(!n||n[t.key]!==t)&&Ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pk(t),delete n[t.key]}function Ok(t,e,n,r){let i=Wc[e.name];i||(i={},Wc[e.name]=i);let s=i[t.toURLString()];return s&&Ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sk(t,xk,n,r),i[t.toURLString()]=s,s}class Dk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ok(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wt(this._repo,W())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ak(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ut("Cannot call "+e+" on a deleted database.")}}function Lk(t=jg(),e){const n=Ku(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Rw("database");r&&Mk(n,...r)}return n}function Mk(t,e,n,r={}){t=Te(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Gn(r,s.repoInfo_.emulatorOptions))return;Ut("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ho(ho.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Pw(r.mockUserToken,t.app.options.projectId);o=new ho(l)}Gr(e)&&(Ag(e),Og("Database",!0)),Rk(s,i,r,o)}/**
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
 */function bk(t){TS(Kr),Fr(new Kn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Pk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),hn(kf,Nf,t),hn(kf,Nf,"esm2020")}Pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bk();const Fk={apiKey:"AIzaSyBAzXQ94NQAv8fM9d4Nxhq3X4v_Wh2qVXY",authDomain:"whatsappclone-9c705.firebaseapp.com",databaseURL:"https://whatsappclone-9c705-default-rtdb.firebaseio.com",projectId:"whatsappclone-9c705",storageBucket:"whatsappclone-9c705.firebasestorage.app",messagingSenderId:"595013903203",appId:"1:595013903203:web:0f7abadf35ac97e04b2956"},Wy=Ug(Fk),di=ES(Wy),Ld=Lk(Wy),Hc=async(t,e)=>{try{await Sk(Dd(Ld,t),e)}catch(n){throw console.error(`Error setting data at ${t}:`,n),n}},sp=async(t,e)=>{console.log("getting"+t);try{const n=await Ik(ol(Dd(Ld),t));return n.exists()?e=="undefined"?n.val():n:null}catch(n){throw console.error(`Error getting data from ${t}:`,n),n}},bn={"chat-1":[{id:"msg-1",senderId:"user-1",content:"Hey! How are you doing?",timestamp:new Date(Date.now()-36e5),type:"text",status:"read"},{id:"msg-2",senderId:"current-user",content:"Hi Alice! I'm doing great, thanks for asking. How about you?",timestamp:new Date(Date.now()-33e5),type:"text",status:"read"},{id:"msg-3",senderId:"user-1",content:"I'm good too! Just finished a great project at work.",timestamp:new Date(Date.now()-3e6),type:"text",status:"read"},{id:"msg-4",senderId:"current-user",content:"That's awesome! Congratulations! 🎉",timestamp:new Date(Date.now()-18e5),type:"text",status:"read"}],"chat-2":[{id:"msg-5",senderId:"user-2",content:"Want to grab coffee later?",timestamp:new Date(Date.now()-72e5),type:"text",status:"read"},{id:"msg-6",senderId:"current-user",content:"Sure! What time works for you?",timestamp:new Date(Date.now()-69e5),type:"text",status:"delivered"}],"chat-random":[{id:"msg-random-1",senderId:"random-user-1",content:"Hi there! I was randomly matched with you. How's your day going?",timestamp:new Date(Date.now()-12e5),type:"text",status:"delivered"},{id:"msg-random-2",senderId:"current-user",content:"Hey! That's cool. My day is going well, thanks! Where are you from?",timestamp:new Date(Date.now()-9e5),type:"text",status:"sent"}],"chat-ai":[{id:"msg-ai-1",senderId:"ai-assistant",content:"Hello! I'm your AI assistant. How can I help you today?",timestamp:new Date(Date.now()-6e5),type:"text",status:"delivered"},{id:"msg-ai-2",senderId:"current-user",content:"Hi! Can you help me with some creative writing ideas?",timestamp:new Date(Date.now()-3e5),type:"text",status:"read"},{id:"msg-ai-3",senderId:"ai-assistant",content:"Absolutely! I'd be happy to help. What genre or type of writing are you interested in? Fiction, poetry, technical writing, or something else?",timestamp:new Date(Date.now()-6e4),type:"text",status:"delivered"}]},Mi=[{id:"chat-random",type:"random",participants:["current-user","random-user-1"],name:"Random Chat",avatar:"https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",lastMessage:bn["chat-random"][bn["chat-random"].length-1],unreadCount:1,isOnline:!0,lastSeen:new Date},{id:"chat-ai",type:"ai",participants:["current-user","ai-assistant"],name:"AI Assistant",avatar:"https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",lastMessage:bn["chat-ai"][bn["chat-ai"].length-1],unreadCount:1,isOnline:!0,lastSeen:new Date}],Hy=V.createContext(void 0),ks=()=>{const t=V.useContext(Hy);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},Uk=({children:t})=>{const[e,n]=V.useState(null),[r,i]=V.useState(!0),[s,o]=V.useState(null),[l,a]=V.useState(!0),[c,d]=V.useState(null),[h,u]=V.useState(null),[g,y]=V.useState("");V.useEffect(()=>{(()=>{if(!h){const S=new CC(di,"recaptcha-container",{size:"invisible",callback:()=>{},"expired-callback":()=>{d("reCAPTCHA expired. Please try again.")}});u(S)}})();let w;const I=eC(di,async S=>{if(o(S),S){const x=await sp(`users/${S.uid}`,"undefined");await Hc("users/"+S.uid+"/lastSeen","online");const P=await sp("users","undefined");Mi.splice(2,Mi.length-2),Object.values(P).forEach(D=>{if(D.id!=S.uid){D.type="user",D.participants=["current-user",D.id],D.lastSeen=="online"?(D.isOnline=!0,D.lastSeen=new Date):(D.isOnline=!1,D.lastSeen=new Date(Date.now()-3e5));try{D.lastMessage=bn[D.id][bn[D.id].length-1],D.unreadCount=2}catch{D.lastMessage={},D.unreadCount=0}D.avatar="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",Mi.push(D)}}),i(!1),n({id:S.uid,name:x.name||"",phone:S.phoneNumber||x.phone||"",avatar:x.avatar||"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",isOnline:!0,lastSeen:new Date})}else i(!1);a(!1)});return()=>{I();try{w()}catch{}h&&h.clear()}},[h]);const f={user:e,firebaseUser:s,sendVerificationCode:async p=>{try{if(d(null),a(!0),!h)throw new Error("reCAPTCHA not initialized");const w=p.startsWith("+")?p:`+91${p}`,I=await TC(di,w,h);return y(I.verificationId),I}catch(w){throw console.error("Error sending verification code:",w),w.code==="auth/invalid-phone-number"?d("Invalid phone number format"):w.code==="auth/too-many-requests"?d("Too many requests. Please try again later."):w.code==="auth/quota-exceeded"?d("SMS quota exceeded. Please try again later."):d("Failed to send verification code. Please try again."),w}finally{a(!1)}},verifyCode:async(p,w,I)=>{try{d(null),a(!0);const S=zn.credential(g,w);await p_(di,S)}catch(S){throw console.error("Error verifying code:",S),S.code==="auth/invalid-verification-code"?d("Invalid verification code"):S.code==="auth/code-expired"?d("Verification code has expired"):d("Failed to verify code. Please try again."),S}finally{a(!1)}},logout:async()=>{try{d(null),await tC(di),n(null),o(null)}catch(p){throw console.error("Error signing out:",p),d("Failed to sign out"),p}},userLoading:r,isLoading:l,error:c};return _.jsxs(Hy.Provider,{value:f,children:[t,_.jsx("div",{id:"recaptcha-container"})]})},jk=()=>{const[t,e]=V.useState(Mi),[n,r]=V.useState(bn),[i,s]=V.useState(null),{user:o}=ks();V.useEffect(()=>{if(!o)return;const d=kk(Dd(Ld,`msg/${o==null?void 0:o.id}`),h=>{r({}),h.forEach(u=>{Object.entries(u.val()).forEach(g=>{r(y=>({...y,[u.key]:[...y[u.key]||[],g[1]]}))})})});return()=>d()},[o]);const l=V.useCallback((d,h)=>{const u={id:`msg-${Date.now()}`,senderId:(o==null?void 0:o.id)||"current-user",content:h,timestamp:new Date,type:"text",status:"sent"};if(!(u.id=="chat-random"||u.id=="chat-ai")){Hc(`msg/${o==null?void 0:o.id}/${d}/${u.id}`,u),Hc(`msg/${d}/${o==null?void 0:o.id}/${u.id}`,u),console.log(o==null?void 0:o.id),console.log(d);return}r(g=>({...g,[d]:[...g[d]||[],u]})),e(g=>g.map(y=>y.id===d?{...y,lastMessage:u}:y)),(i==null?void 0:i.type)==="ai"&&setTimeout(()=>{const g={id:`msg-ai-${Date.now()}`,senderId:"ai-assistant",content:zk(h),timestamp:new Date,type:"text",status:"delivered"};r(y=>({...y,[d]:[...y[d]||[],g]})),e(y=>y.map(v=>v.id===d?{...v,lastMessage:g}:v))},1e3+Math.random()*2e3),(i==null?void 0:i.type)==="random"&&setTimeout(()=>{const g=["That's interesting! Tell me more.","I completely agree with you!","Wow, I never thought about it that way.","Thanks for sharing that with me.","What do you think about this topic?","I've had similar experiences too!","That sounds really cool!"],y={id:`msg-random-${Date.now()}`,senderId:"random-user-1",content:g[Math.floor(Math.random()*g.length)],timestamp:new Date,type:"text",status:"delivered"};r(v=>({...v,[d]:[...v[d]||[],y]})),e(v=>v.map(R=>R.id===d?{...R,lastMessage:y}:R))},2e3+Math.random()*3e3)},[i,o]),a=V.useCallback(()=>{const d=t.find(u=>u.type==="random");if(d){s(d);return}const h={id:`chat-random-${Date.now()}`,type:"random",participants:["current-user",`random-user-${Date.now()}`],name:"Random User",avatar:"https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",lastMessage:{id:"initial-random",senderId:"system",content:"You are now connected with a random user!",timestamp:new Date,type:"text",status:"delivered"},unreadCount:0,isOnline:!0,lastSeen:new Date};e(u=>[h,...u]),r(u=>({...u,[h.id]:[{id:"welcome-random",senderId:"system",content:"You are now connected with a random user! Say hello! 👋",timestamp:new Date,type:"text",status:"delivered"}]})),s(h)},[t]),c=V.useCallback(()=>{const d=t.find(u=>u.type==="ai");if(d){s(d);return}const h=Mi.find(u=>u.type==="ai");h&&(s(h),t.find(g=>g.id===h.id)||e(g=>[h,...g]))},[t]);return{chats:t,messages:i?n[i.id]||[]:[],selectedChat:i,setSelectedChat:s,sendMessage:l,startRandomChat:a,startAIChat:c}},zk=t=>{const e=["That's a great question! Let me think about that...","I understand what you're saying. Here's my perspective:","Interesting! Based on what you've shared, I'd suggest:","I'm here to help! Here's what I think about that:","Thanks for sharing that with me. My thoughts are:","That's a fascinating topic! From my understanding:"],n=t.toLowerCase();return n.includes("creative")||n.includes("writing")?"For creative writing, I'd suggest starting with character development or an interesting 'what if' scenario. Would you like specific prompts or techniques?":n.includes("help")||n.includes("problem")?"I'd be happy to help you work through that! Can you tell me more details about what you're facing?":n.includes("hello")||n.includes("hi")?"Hello! It's great to chat with you. How can I assist you today?":e[Math.floor(Math.random()*e.length)]+" What specific aspect would you like to explore further?"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ze=(t,e)=>{const n=V.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:a,...c},d)=>V.createElement("svg",{ref:d,...Vk,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Wk(t)}`,l].join(" "),...c},[...e.map(([h,u])=>V.createElement(h,u)),...Array.isArray(a)?a:[a]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=ze("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=ze("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=ze("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=ze("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=ze("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=ze("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ze("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=ze("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=ze("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=ze("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=ze("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=ze("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=ze("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=ze("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]),Xk=()=>{const[t,e]=V.useState(""),[n,r]=V.useState(""),[i,s]=V.useState(""),[o,l]=V.useState("phone"),[a,c]=V.useState(null),{sendVerificationCode:d,verifyCode:h,isLoading:u,error:g}=ks(),y=async p=>{if(p.preventDefault(),t.length>=10)try{const w=await d(t);c(w),l("verification")}catch{}},v=p=>{p.preventDefault(),n.trim()&&l("verification")},R=async p=>{if(p.preventDefault(),i.length===6&&a)try{await h(a,i,n.trim())}catch{}},m=p=>p,f=()=>{l("phone")};return _.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4",children:_.jsxs("div",{className:"max-w-md w-full",children:[_.jsxs("div",{className:"text-center mb-8",children:[_.jsx("div",{className:"bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg",children:_.jsx($c,{className:"text-white w-10 h-10"})}),_.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"WhatsApp Clone"}),_.jsx("p",{className:"text-gray-600",children:"Connect with friends, strangers, and AI"})]}),_.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8",children:[_.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm text-center",children:[_.jsx($c,{className:"w-8 h-8 text-green-500 mx-auto mb-2"}),_.jsx("p",{className:"text-xs text-gray-600",children:"Personal Chats"})]}),_.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm text-center",children:[_.jsx(Gc,{className:"w-8 h-8 text-blue-500 mx-auto mb-2"}),_.jsx("p",{className:"text-xs text-gray-600",children:"Random Chats"})]}),_.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm text-center",children:[_.jsx(Bc,{className:"w-8 h-8 text-purple-500 mx-auto mb-2"}),_.jsx("p",{className:"text-xs text-gray-600",children:"AI Assistant"})]})]}),_.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[g&&_.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded-lg",children:_.jsx("p",{className:"text-red-600 text-sm",children:g})}),o==="phone"&&_.jsxs("form",{onSubmit:y,children:[_.jsxs("div",{className:"mb-6",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Welcome!"}),_.jsx("p",{className:"text-gray-600",children:"Enter your phone number to get started"})]}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),_.jsxs("div",{className:"relative",children:[_.jsx(By,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),_.jsx("input",{id:"phone",type:"tel",value:m(t),onChange:p=>e(p.target.value.replace(/\D/g,"")),placeholder:"(555) 123-4567",className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200",required:!0,disabled:u})]}),_.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:[_.jsx(lp,{className:"w-3 h-3 inline mr-1"}),"We'll send you a verification code via SMS"]})]}),_.jsx("button",{type:"submit",disabled:t.length<10||u,className:"w-full bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:u?_.jsxs(_.Fragment,{children:[_.jsx(op,{className:"w-4 h-4 animate-spin"}),"Sending Code..."]}):"Send Verification Code"})]}),o==="name"&&_.jsxs("form",{onSubmit:v,children:[_.jsxs("div",{className:"mb-6",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Almost there!"}),_.jsx("p",{className:"text-gray-600",children:"What should we call you?"})]}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Name"}),_.jsx("input",{id:"name",type:"text",value:n,onChange:p=>r(p.target.value),placeholder:"Enter your name",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200",required:!0,disabled:u})]}),_.jsxs("div",{className:"flex gap-3",children:[_.jsx("button",{type:"button",onClick:f,disabled:u,className:"flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50",children:"Back"}),_.jsx("button",{type:"submit",disabled:!n.trim()||u,className:"flex-1 bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",children:"Continue"})]})]}),o==="verification"&&_.jsxs("form",{onSubmit:R,children:[_.jsxs("div",{className:"mb-6",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Verify Your Phone"}),_.jsxs("p",{className:"text-gray-600",children:["Enter the 6-digit code sent to ",m(t)]})]}),_.jsxs("div",{className:"mb-6",children:[_.jsx("label",{htmlFor:"code",className:"block text-sm font-medium text-gray-700 mb-2",children:"Verification Code"}),_.jsx("input",{id:"code",type:"text",value:i,onChange:p=>s(p.target.value.replace(/\D/g,"").slice(0,6)),placeholder:"123456",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-center text-2xl tracking-widest",required:!0,disabled:u,maxLength:6}),_.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:["Didn't receive the code?",_.jsx("button",{type:"button",className:"text-green-600 hover:text-green-700 ml-1",onClick:()=>l("phone"),children:"Try again"})]})]}),_.jsxs("div",{className:"flex gap-3",children:[_.jsx("button",{type:"button",onClick:f,disabled:u,className:"flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50",children:"Back"}),_.jsx("button",{type:"submit",disabled:i.length!==6||u,className:"flex-1 bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:u?_.jsxs(_.Fragment,{children:[_.jsx(op,{className:"w-4 h-4 animate-spin"}),"Verifying..."]}):"Verify & Continue"})]})]})]}),_.jsx("div",{className:"text-center mt-6",children:_.jsxs("p",{className:"text-xs text-gray-500",children:[_.jsx(lp,{className:"w-3 h-3 inline mr-1"}),"Secured by Firebase Authentication"]})})]})})},ap=({chats:t,selectedChat:e,onSelectChat:n,onStartRandomChat:r,onStartAIChat:i})=>{const{logout:s,user:o}=ks(),l=async()=>{try{await s()}catch(d){console.error("Logout failed:",d)}},a=d=>{const u=new Date().getTime()-d.getTime();return u<6e4?"now":u<36e5?`${Math.floor(u/6e4)}m`:u<864e5?`${Math.floor(u/36e5)}h`:`${Math.floor(u/864e5)}d`},c=d=>{switch(d){case"random":return _.jsx(Gc,{className:"w-4 h-4 text-blue-500"});case"ai":return _.jsx(Bc,{className:"w-4 h-4 text-purple-500"});default:return null}};return _.jsxs("div",{className:"bg-white border-r border-gray-200 flex flex-col h-full",children:[_.jsxs("div",{className:"p-4 border-b border-gray-200",children:[_.jsxs("div",{className:"flex items-center justify-between mb-4",children:[_.jsx("div",{className:"flex items-center gap-3",children:_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("img",{src:o==null?void 0:o.avatar,alt:o==null?void 0:o.name,className:"w-8 h-8 rounded-full object-cover"}),_.jsxs("div",{children:[_.jsx("h1",{className:"text-xl font-bold text-gray-900",children:"Chats"}),_.jsx("p",{className:"text-xs text-gray-500",children:o==null?void 0:o.name})]})]})}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200",children:_.jsx(qk,{className:"w-5 h-5"})}),_.jsx("button",{onClick:l,className:"p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-all duration-200",title:"Logout",children:_.jsx(Bk,{className:"w-5 h-5"})})]})]}),_.jsxs("div",{className:"relative",children:[_.jsx(Gk,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"}),_.jsx("input",{type:"text",placeholder:"Search chats...",className:"w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"})]})]}),_.jsx("div",{className:"p-4 border-b border-gray-100",children:_.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[_.jsxs("button",{onClick:r,className:"flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-all duration-200",children:[_.jsx(Gc,{className:"w-4 h-4"}),_.jsx("span",{className:"text-sm font-medium",children:"Random Chat"})]}),_.jsxs("button",{onClick:i,className:"flex items-center gap-2 p-3 bg-purple-50 text-purple-700 rounded-xl hover:bg-purple-100 transition-all duration-200",children:[_.jsx(Bc,{className:"w-4 h-4"}),_.jsx("span",{className:"text-sm font-medium",children:"AI Assistant"})]})]})}),_.jsx("div",{className:"flex-1 overflow-y-auto",children:t.map(d=>_.jsx("div",{onClick:()=>n(d),className:`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${(e==null?void 0:e.id)===d.id?"bg-green-50 border-r-4 border-r-green-500":""}`,children:_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsxs("div",{className:"relative",children:[_.jsx("img",{src:d.avatar,alt:d.name,className:"w-12 h-12 rounded-full object-cover"}),d.isOnline&&_.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"})]}),_.jsxs("div",{className:"flex-1 min-w-0",children:[_.jsxs("div",{className:"flex items-center justify-between mb-1",children:[_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("h3",{className:"font-semibold text-gray-900 truncate",children:d.name}),c(d.type)]}),_.jsx("span",{className:"text-xs text-gray-500",children:a(d.lastMessage.timestamp||new Date)})]}),_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("p",{className:"text-sm text-gray-600 truncate",children:[d.lastMessage.senderId==="current-user"&&"✓ ",d.lastMessage.content]}),d.unreadCount>0&&_.jsx("span",{className:"bg-green-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center",children:d.unreadCount})]})]})]})},d.id))})]})},cp=({chat:t,messages:e,onSendMessage:n,onBack:r})=>{const[i,s]=V.useState(""),o=V.useRef(null),{user:l}=ks();V.useEffect(()=>{var u;(u=o.current)==null||u.scrollIntoView({behavior:"smooth"})},[e]);const a=u=>{u.preventDefault(),i.trim()&&(n(i.trim()),s(""))},c=u=>(u=new Date(parseInt(u)),u.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),d=u=>{switch(u){case"sent":return"✓";case"delivered":return"✓✓";case"read":return"✓✓";default:return""}},h=u=>{switch(u){case"random":return"text-blue-600";case"ai":return"text-purple-600";default:return"text-green-600"}};return _.jsxs("div",{className:"flex flex-col h-full bg-gray-50",children:[_.jsx("div",{className:"bg-white border-b border-gray-200 p-4",children:_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsx("button",{onClick:r,className:"md:hidden p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200",children:_.jsx(Hk,{className:"w-5 h-5"})}),_.jsxs("div",{className:"relative",children:[_.jsx("img",{src:t.avatar,alt:t.name,className:"w-10 h-10 rounded-full object-cover"}),t.isOnline&&_.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"})]}),_.jsxs("div",{className:"flex-1",children:[_.jsx("h2",{className:`font-semibold ${h(t.type)}`,children:t.name}),_.jsx("p",{className:"text-sm text-gray-500",children:t.isOnline?"Online":`Last seen ${c(t.lastSeen)}`})]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200",children:_.jsx(By,{className:"w-5 h-5"})}),_.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200",children:_.jsx(Yk,{className:"w-5 h-5"})}),_.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200",children:_.jsx($k,{className:"w-5 h-5"})})]})]})}),_.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[e.map(u=>_.jsx("div",{className:`flex ${u.senderId==="current-user"||u.senderId===(l==null?void 0:l.id)?"justify-end":"justify-start"}`,children:_.jsxs("div",{className:`max-w-[70%] p-3 rounded-2xl shadow-sm ${u.senderId==="current-user"||u.senderId===(l==null?void 0:l.id)?"bg-green-500 text-white rounded-br-md":"bg-white text-gray-900 rounded-bl-md"}`,children:[_.jsx("p",{className:"text-sm leading-relaxed",children:u.content}),_.jsxs("div",{className:`flex items-center justify-end gap-1 mt-1 text-xs ${u.senderId==="current-user"||u.senderId===(l==null?void 0:l.id)?"text-green-100":"text-gray-500"}`,children:[_.jsx("span",{children:c(u.id.split("-")[1])}),(u.senderId==="current-user"||u.senderId===(l==null?void 0:l.id))&&_.jsx("span",{className:`${u.status==="read"?"text-blue-200":""}`,children:d(u.status)})]})]})},u.id)),_.jsx("div",{ref:o})]}),_.jsx("div",{className:"bg-white border-t border-gray-200 p-4",children:_.jsxs("form",{onSubmit:a,className:"flex items-center gap-3",children:[_.jsx("button",{type:"button",className:"p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all duration-200",children:_.jsx(Qk,{className:"w-5 h-5"})}),_.jsx("input",{type:"text",value:i,onChange:u=>s(u.target.value),placeholder:"Type a message...",className:"flex-1 px-4 py-2 bg-gray-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"}),_.jsx("button",{type:"submit",disabled:!i.trim(),className:"p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex align-center justify-center",children:_.jsx(Kk,{className:"w-5 h-5"})})]})})]})},up=()=>_.jsx("div",{className:"flex-1 flex items-center justify-center bg-gray-50 p-8",children:_.jsxs("div",{className:"text-center",children:[_.jsx("div",{className:"bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",children:_.jsx($c,{className:"text-green-600 w-10 h-10"})}),_.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Welcome to WhatsApp Clone"}),_.jsx("p",{className:"text-gray-600 max-w-md",children:"Select a chat to start messaging, or create a new conversation with friends, random users, or our AI assistant."})]})}),Jk=()=>{const{user:t,userLoading:e}=ks(),{chats:n,messages:r,selectedChat:i,setSelectedChat:s,sendMessage:o,startRandomChat:l,startAIChat:a}=jk(),[c,d]=av.useState(!0),h=R=>{s(R),d(!1)},u=()=>{l(),d(!1)},g=()=>{a(),d(!1)},y=()=>{d(!0)},v=R=>{i&&o(i.id,R)};return e?_.jsx("div",{children:"Loading..."}):t?_.jsxs("div",{className:"h-screen bg-gray-100 flex",children:[_.jsx("div",{className:"md:hidden w-full flex",children:c?_.jsx("div",{className:"w-full",children:_.jsx(ap,{chats:n,selectedChat:i,onSelectChat:h,onStartRandomChat:u,onStartAIChat:g})}):i?_.jsx("div",{className:"w-full",children:_.jsx(cp,{chat:i,messages:r,onSendMessage:v,onBack:y})}):_.jsx(up,{})}),_.jsxs("div",{className:"hidden md:flex w-full",children:[_.jsx("div",{className:"w-1/3 min-w-[350px]",children:_.jsx(ap,{chats:n,selectedChat:i,onSelectChat:s,onStartRandomChat:u,onStartAIChat:g})}),_.jsx("div",{className:"flex-1",children:i?_.jsx(cp,{chat:i,messages:r,onSendMessage:v,onBack:y}):_.jsx(up,{})})]})]}):_.jsx(Xk,{})};function Zk(){return _.jsx(Uk,{children:_.jsx(Jk,{})})}Sg(document.getElementById("root")).render(_.jsx(V.StrictMode,{children:_.jsx(Zk,{})}));
