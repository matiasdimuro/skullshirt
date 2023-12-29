import{r as x,g as j,R as $}from"./index.120yQdpc.js";var b={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=x,I=Symbol.for("react.element"),P=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,q=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function w(t,e,r){var n,o={},u=null,s=null;r!==void 0&&(u=""+r),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)T.call(e,n)&&!V.hasOwnProperty(n)&&(o[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:I,type:t,key:u,ref:s,props:o,_owner:q.current}}v.Fragment=P;v.jsx=w;v.jsxs=w;b.exports=v;var ae=b.exports;const _=t=>{let e;const r=new Set,n=(i,p)=>{const c=typeof i=="function"?i(e):i;if(!Object.is(c,e)){const d=e;e=p??(typeof c!="object"||c===null)?c:Object.assign({},e,c),r.forEach(E=>E(e,d))}},o=()=>e,l={setState:n,getState:o,subscribe:i=>(r.add(i),()=>r.delete(i)),destroy:()=>{r.clear()}};return e=t(n,o,l),l},W=t=>t?_(t):_;var D={exports:{}},O={},g={exports:{}},F={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=x;function k(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var L=typeof Object.is=="function"?Object.is:k,C=S.useState,U=S.useEffect,B=S.useLayoutEffect,N=S.useDebugValue;function Q(t,e){var r=e(),n=C({inst:{value:r,getSnapshot:e}}),o=n[0].inst,u=n[1];return B(function(){o.value=r,o.getSnapshot=e,m(o)&&u({inst:o})},[t,r,e]),U(function(){return m(o)&&u({inst:o}),t(function(){m(o)&&u({inst:o})})},[t]),N(r),r}function m(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!L(t,r)}catch{return!0}}function M(t,e){return e()}var z=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?M:Q;F.useSyncExternalStore=S.useSyncExternalStore!==void 0?S.useSyncExternalStore:z;g.exports=F;var X=g.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=x,H=X;function J(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Y=typeof Object.is=="function"?Object.is:J,G=H.useSyncExternalStore,K=y.useRef,Z=y.useEffect,ee=y.useMemo,te=y.useDebugValue;O.useSyncExternalStoreWithSelector=function(t,e,r,n,o){var u=K(null);if(u.current===null){var s={hasValue:!1,value:null};u.current=s}else s=u.current;u=ee(function(){function i(a){if(!p){if(p=!0,c=a,a=n(a),o!==void 0&&s.hasValue){var f=s.value;if(o(f,a))return d=f}return d=a}if(f=d,Y(c,a))return f;var h=n(a);return o!==void 0&&o(f,h)?f:(c=a,d=h)}var p=!1,c,d,E=r===void 0?null:r;return[function(){return i(e())},E===null?void 0:function(){return i(E())}]},[e,r,n,o]);var l=G(t,u[0],u[1]);return Z(function(){s.hasValue=!0,s.value=l},[l]),te(l),l};D.exports=O;var re=D.exports;const ne=j(re),{useDebugValue:oe}=$,{useSyncExternalStoreWithSelector:ue}=ne;function se(t,e=t.getState,r){const n=ue(t.subscribe,t.getState,t.getServerState||t.getState,e,r);return oe(n),n}const R=t=>{const e=typeof t=="function"?W(t):t,r=(n,o)=>se(e,n,o);return Object.assign(r,e),r},ie=t=>t?R(t):R,le=ie(t=>({isNavbarHidden:!0,setIsNavbarHidden:e=>t({isNavbarHidden:e}),filtersQuery:[],addFilterQuery:(e,r)=>{e.push(r),t({filtersQuery:e})},removeFilterQuery:(e,r)=>{const n=r.filter(o=>o!==e);t({filtersQuery:n})},setFiltersQuery:e=>t({filtersQuery:e})}));export{ae as j,le as u};
