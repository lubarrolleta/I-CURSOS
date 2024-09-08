(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const mt=(e,t)=>e===t,ne=Symbol("solid-proxy"),re={equals:mt};let Me=Xe;const M=1,oe=2,Be={owned:null,cleanups:null,context:null,owner:null},me={};var m=null;let be=null,bt=null,y=null,O=null,F=null,ae=0;function qe(e,t){const n=y,o=m,r=e.length===0,s=t===void 0?o:t,i=r?Be:{owned:null,cleanups:null,context:s?s.context:null,owner:s},l=r?e:()=>e(()=>k(()=>de(i)));m=i,y=null;try{return T(l,!0)}finally{y=n,m=o}}function R(e,t){t=t?Object.assign({},re,t):re;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=r=>(typeof r=="function"&&(r=r(n.value)),We(n,r));return[He.bind(n),o]}function Te(e,t,n){const o=fe(e,t,!0,M);K(o)}function U(e,t,n){const o=fe(e,t,!1,M);K(o)}function ee(e,t,n){Me=Et;const o=fe(e,t,!1,M);o.user=!0,F?F.push(o):K(o)}function C(e,t,n){n=n?Object.assign({},re,n):re;const o=fe(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,K(o),He.bind(o)}function yt(e){return e&&typeof e=="object"&&"then"in e}function wt(e,t,n){let o,r,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(o=!0,r=e,s={}):(o=e,r=t,s={});let i=null,l=me,a=!1,c="initialValue"in s,u=typeof o=="function"&&C(o);const f=new Set,[d,g]=(s.storage||R)(s.initialValue),[A,h]=R(void 0),[p,w]=R(void 0,{equals:!1}),[b,N]=R(c?"ready":"unresolved");function L(S,P,E,B){return i===S&&(i=null,B!==void 0&&(c=!0),(S===l||P===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(B,{value:P})),l=me,$(P,E)),P}function $(S,P){T(()=>{P===void 0&&g(()=>S),N(P!==void 0?"errored":c?"ready":"unresolved"),h(P);for(const E of f.keys())E.decrement();f.clear()},!1)}function I(){const S=At,P=d(),E=A();if(E!==void 0&&!i)throw E;return y&&!y.user&&S&&Te(()=>{p(),i&&(S.resolved||f.has(S)||(S.increment(),f.add(S)))}),P}function H(S=!0){if(S!==!1&&a)return;a=!1;const P=u?u():o;if(P==null||P===!1){L(i,k(d));return}const E=l!==me?l:k(()=>r(P,{value:d(),refetching:S}));return yt(E)?(i=E,"value"in E?(E.status==="success"?L(i,E.value,void 0,P):L(i,void 0,Ae(E.value),P),E):(a=!0,queueMicrotask(()=>a=!1),T(()=>{N(c?"refreshing":"pending"),w()},!1),E.then(B=>L(E,B,void 0,P),B=>L(E,void 0,Ae(B),P)))):(L(i,E,void 0,P),E)}return Object.defineProperties(I,{state:{get:()=>b()},error:{get:()=>A()},loading:{get(){const S=b();return S==="pending"||S==="refreshing"}},latest:{get(){if(!c)return I();const S=A();if(S&&!i)throw S;return d()}}}),u?Te(()=>H(!1)):H(!1),[I,{refetch:H,mutate:g}]}function vt(e){return T(e,!1)}function k(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function Oe(e,t,n){const o=Array.isArray(e);let r,s=n&&n.defer;return i=>{let l;if(o){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(s)return s=!1,i;const a=k(()=>t(l,r,i));return r=l,a}}function Ge(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function Ve(){return m}function ze(e,t){const n=m,o=y;m=e,y=null;try{return T(t,!0)}catch(r){ke(r)}finally{m=n,y=o}}function xt(e){const t=y,n=m;return Promise.resolve().then(()=>{y=t,m=n;let o;return T(e,!1),y=m=null,o?o.done:void 0})}function ce(e,t){const n=Symbol("context");return{id:n,Provider:Ct(n),defaultValue:e}}function ue(e){let t;return m&&m.context&&(t=m.context[e.id])!==void 0?t:e.defaultValue}function Ke(e){const t=C(e),n=C(()=>Se(t()));return n.toArray=()=>{const o=n();return Array.isArray(o)?o:o!=null?[o]:[]},n}let At;function He(){if(this.sources&&this.state)if(this.state===M)K(this);else{const e=O;O=null,T(()=>ie(this),!1),O=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function We(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],i=be&&be.running;i&&be.disposed.has(s),(i?!s.tState:!s.state)&&(s.pure?O.push(s):F.push(s),s.observers&&Ye(s)),i||(s.state=M)}if(O.length>1e6)throw O=[],new Error},!1)),t}function K(e){if(!e.fn)return;de(e);const t=ae;St(e,e.value,t)}function St(e,t,n){let o;const r=m,s=y;y=m=e;try{o=e.fn(t)}catch(i){return e.pure&&(e.state=M,e.owned&&e.owned.forEach(de),e.owned=null),e.updatedAt=n+1,ke(i)}finally{y=s,m=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?We(e,o):e.value=o,e.updatedAt=n)}function fe(e,t,n,o=M,r){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:n};return m===null||m!==Be&&(m.owned?m.owned.push(s):m.owned=[s]),s}function se(e){if(e.state===0)return;if(e.state===oe)return ie(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ae);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===M)K(e);else if(e.state===oe){const o=O;O=null,T(()=>ie(e,t[0]),!1),O=o}}function T(e,t){if(O)return e();let n=!1;t||(O=[]),F?n=!0:F=[],ae++;try{const o=e();return Pt(n),o}catch(o){n||(F=null),O=null,ke(o)}}function Pt(e){if(O&&(Xe(O),O=null),e)return;const t=F;F=null,t.length&&T(()=>Me(t),!1)}function Xe(e){for(let t=0;t<e.length;t++)se(e[t])}function Et(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:se(o)}for(t=0;t<n;t++)se(e[t])}function ie(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const r=o.state;r===M?o!==t&&(!o.updatedAt||o.updatedAt<ae)&&se(o):r===oe&&ie(o,t)}}}function Ye(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=oe,n.pure?O.push(n):F.push(n),n.observers&&Ye(n))}}function de(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),i=n.observerSlots.pop();o<r.length&&(s.sourceSlots[i]=o,r[o]=s,n.observerSlots[o]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)de(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ae(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ke(e,t=m){throw Ae(e)}function Se(e){if(typeof e=="function"&&!e.length)return Se(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=Se(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function Ct(e,t){return function(o){let r;return U(()=>r=k(()=>(m.context={...m.context,[e]:o.value},Ke(()=>o.children))),void 0),r}}let Lt=!1;function j(e,t){return k(()=>e(t||{}))}function J(){return!0}const Pe={get(e,t,n){return t===ne?n:e.get(t)},has(e,t){return t===ne?!0:e.has(t)},set:J,deleteProperty:J,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:J,deleteProperty:J}},ownKeys(e){return e.keys()}};function ye(e){return(e=typeof e=="function"?e():e)?e:{}}function Ot(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function we(...e){let t=!1;for(let i=0;i<e.length;i++){const l=e[i];t=t||!!l&&ne in l,e[i]=typeof l=="function"?(t=!0,C(l)):l}if(t)return new Proxy({get(i){for(let l=e.length-1;l>=0;l--){const a=ye(e[l])[i];if(a!==void 0)return a}},has(i){for(let l=e.length-1;l>=0;l--)if(i in ye(e[l]))return!0;return!1},keys(){const i=[];for(let l=0;l<e.length;l++)i.push(...Object.keys(ye(e[l])));return[...new Set(i)]}},Pe);const n={},o=Object.create(null);for(let i=e.length-1;i>=0;i--){const l=e[i];if(!l)continue;const a=Object.getOwnPropertyNames(l);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(l,u);if(!o[u])o[u]=f.get?{enumerable:!0,configurable:!0,get:Ot.bind(n[u]=[f.get.bind(l)])}:f.value!==void 0?f:void 0;else{const d=n[u];d&&(f.get?d.push(f.get.bind(l)):f.value!==void 0&&d.push(()=>f.value))}}}const r={},s=Object.keys(o);for(let i=s.length-1;i>=0;i--){const l=s[i],a=o[l];a&&a.get?Object.defineProperty(r,l,a):r[l]=a?a.value:void 0}return r}function Qe(e,...t){if(ne in e){const r=new Set(t.length>1?t.flat():t[0]),s=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},Pe));return s.push(new Proxy({get(i){return r.has(i)?void 0:e[i]},has(i){return r.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!r.has(i))}},Pe)),s}const n={},o=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,r),i=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let l=!1,a=0;for(const c of t)c.includes(r)&&(l=!0,i?o[a][r]=s.value:Object.defineProperty(o[a],r,s)),++a;l||(i?n[r]=s.value:Object.defineProperty(n,r,s))}return[...o,n]}const kt=e=>`Stale read from <${e}>.`;function Ze(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(o,r)=>t?o===r:!o==!r});return C(()=>{const o=n();if(o){const r=e.children;return typeof r=="function"&&r.length>0?k(()=>r(t?o:()=>{if(!k(n))throw kt("Show");return e.when})):r}return e.fallback},void 0,void 0)}const _t=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Rt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",..._t]),jt=new Set(["innerHTML","textContent","innerText","children"]),Tt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Nt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function $t(e,t){const n=Nt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const It=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Dt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ft={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ut(e,t,n){let o=n.length,r=t.length,s=o,i=0,l=0,a=t[r-1].nextSibling,c=null;for(;i<r||l<s;){if(t[i]===n[l]){i++,l++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===i){const u=s<o?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],u)}else if(s===l)for(;i<r;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],u),t[r]=n[s]}else{if(!c){c=new Map;let f=l;for(;f<s;)c.set(n[f],f++)}const u=c.get(t[i]);if(u!=null)if(l<u&&u<s){let f=i,d=1,g;for(;++f<r&&f<s&&!((g=c.get(t[f]))==null||g!==u+d);)d++;if(d>u-l){const A=t[i];for(;l<u;)e.insertBefore(n[l++],A)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Ne="_$DX_DELEGATE";function Mt(e,t,n,o={}){let r;return qe(s=>{r=s,t===document?e():nt(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{r(),t.textContent=""}}function he(e,t,n){let o;const r=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},s=()=>(o||(o=r())).cloneNode(!0);return s.cloneNode=s,s}function Je(e,t=window.document){const n=t[Ne]||(t[Ne]=new Set);for(let o=0,r=e.length;o<r;o++){const s=e[o];n.has(s)||(n.add(s),t.addEventListener(s,Wt))}}function Ee(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Bt(e,t,n,o){o==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,o)}function et(e,t){t==null?e.removeAttribute("class"):e.className=t}function qt(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n)}function Gt(e,t,n={}){const o=Object.keys(t||{}),r=Object.keys(n);let s,i;for(s=0,i=r.length;s<i;s++){const l=r[s];!l||l==="undefined"||t[l]||($e(e,l,!1),delete n[l])}for(s=0,i=o.length;s<i;s++){const l=o[s],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||($e(e,l,!0),n[l]=a)}return n}function Vt(e,t,n){if(!t)return n?Ee(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&o.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(o.setProperty(s,r),n[s]=r);return n}function tt(e,t={},n,o){const r={};return U(()=>r.children=Y(e,t.children,r.children)),U(()=>typeof t.ref=="function"&&zt(t.ref,e)),U(()=>Kt(e,t,n,!0,r,!0)),r}function zt(e,t,n){return k(()=>e(t,n))}function nt(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return Y(e,t,o,n);U(r=>Y(e,t(),r,n),o)}function Kt(e,t,n,o,r={},s=!1){t||(t={});for(const i in r)if(!(i in t)){if(i==="children")continue;r[i]=Ie(e,i,null,r[i],n,s)}for(const i in t){if(i==="children")continue;const l=t[i];r[i]=Ie(e,i,l,r[i],n,s)}}function Ht(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function $e(e,t,n){const o=t.trim().split(/\s+/);for(let r=0,s=o.length;r<s;r++)e.classList.toggle(o[r],n)}function Ie(e,t,n,o,r,s){let i,l,a,c,u;if(t==="style")return Vt(e,n,o);if(t==="classList")return Gt(e,n,o);if(n===o)return o;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);o&&e.removeEventListener(f,o),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);o&&e.removeEventListener(f,o,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),d=It.has(f);if(!d&&o){const g=Array.isArray(o)?o[0]:o;e.removeEventListener(f,g)}(d||n)&&(qt(e,f,n,d),d&&Je([f]))}else if(t.slice(0,5)==="attr:")Ee(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(a=jt.has(t))||!r&&((c=$t(t,e.tagName))||(l=Rt.has(t)))||(i=e.nodeName.includes("-")))u&&(t=t.slice(5),l=!0),t==="class"||t==="className"?et(e,n):i&&!l&&!a?e[Ht(t)]=n:e[c||t]=n;else{const f=r&&t.indexOf(":")>-1&&Ft[t.split(":")[0]];f?Bt(e,f,t,n):Ee(e,Tt[t]||t,n)}return n}function Wt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const o=n[t];if(o&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?o.call(n,r,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,o,r){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,i=o!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(i){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=z(e,n,o,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=z(e,n,o);else{if(s==="function")return U(()=>{let l=t();for(;typeof l=="function";)l=l();n=Y(e,l,n,o)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Ce(l,t,n,r))return U(()=>n=Y(e,l,n,o,!0)),()=>n;if(l.length===0){if(n=z(e,n,o),i)return n}else a?n.length===0?De(e,l,o):Ut(e,n,l):(n&&z(e),De(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=z(e,n,o,t);z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ce(e,t,n,o){let r=!1;for(let s=0,i=t.length;s<i;s++){let l=t[s],a=n&&n[e.length],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Ce(e,l,a)||r;else if(c==="function")if(o){for(;typeof l=="function";)l=l();r=Ce(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||r}else e.push(l),r=!0;else{const u=String(l);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return r}function De(e,t,n=null){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function z(e,t,n,o){if(n===void 0)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(r!==l){const a=l.parentNode===e;!s&&!i?a?e.replaceChild(r,l):e.insertBefore(r,n):a&&l.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}const Xt=!1,Yt="http://www.w3.org/2000/svg";function Qt(e,t=!1){return t?document.createElementNS(Yt,e):document.createElement(e)}function Zt(e){const[t,n]=Qe(e,["component"]),o=C(()=>t.component);return C(()=>{const r=o();switch(typeof r){case"function":return k(()=>r(n));case"string":const s=Dt.has(r),i=Qt(r,s);return tt(i,n,s),i}})}function rt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function o(r,s){if(n)return!(n=!1);const i={to:r,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:a=>{a&&(n=!0),l.navigate(r,{...s,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:o}}let Le;function _e(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Le=window.history.state._depth}_e();function Jt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function en(e,t){let n=!1;return()=>{const o=Le;_e();const r=o==null?null:Le-o;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const tn=/^(?:[a-z0-9]+:)?\/\//i,nn=/^\/+|(\/)\/+$/g,ot="http://sr";function X(e,t=!1){const n=e.replace(nn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function te(e,t,n){if(tn.test(t))return;const o=X(e),r=n&&X(n);let s="";return!r||t.startsWith("/")?s=o:r.toLowerCase().indexOf(o.toLowerCase())!==0?s=o+r:s=r,(s||"/")+X(t,!s)}function rn(e,t){if(e==null)throw new Error(t);return e}function on(e,t){return X(e).replace(/\/*(\*.*)?$/g,"")+X(t)}function st(e){const t={};return e.searchParams.forEach((n,o)=>{t[o]=n}),t}function sn(e,t,n){const[o,r]=e.split("/*",2),s=o.split("/").filter(Boolean),i=s.length;return l=>{const a=l.split("/").filter(Boolean),c=a.length-i;if(c<0||c>0&&r===void 0&&!t)return null;const u={path:i?"":"/",params:{}},f=d=>n===void 0?void 0:n[d];for(let d=0;d<i;d++){const g=s[d],A=a[d],h=g[0]===":",p=h?g.slice(1):g;if(h&&ve(A,f(p)))u.params[p]=A;else if(h||!ve(A,g))return null;u.path+=`/${A}`}if(r){const d=c?a.slice(-c).join("/"):"";if(ve(d,f(r)))u.params[r]=d;else return null}return u}}function ve(e,t){const n=o=>o.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function ln(e){const[t,n]=e.pattern.split("/*",2),o=t.split("/").filter(Boolean);return o.reduce((r,s)=>r+(s.startsWith(":")?2:3),o.length-(n===void 0?0:1))}function it(e){const t=new Map,n=Ve();return new Proxy({},{get(o,r){return t.has(r)||ze(n,()=>t.set(r,C(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function lt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),o=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(o);)r.push(n+=t[1]),o=o.slice(t[0].length);return lt(o).reduce((s,i)=>[...s,...r.map(l=>l+i)],[])}const an=100,at=ce(),ct=ce(),cn=()=>rn(ue(at),"<A> and 'use' router primitives can be only used inside a Route."),un=()=>cn().params;function fn(e,t=""){const{component:n,preload:o,load:r,children:s,info:i}=e,l=!s||Array.isArray(s)&&!s.length,a={key:e,component:n,preload:o||r,info:i};return ut(e.path).reduce((c,u)=>{for(const f of lt(u)){const d=on(t,f);let g=l?d:d.split("/*",1)[0];g=g.split("/").map(A=>A.startsWith(":")||A.startsWith("*")?A:encodeURIComponent(A)).join("/"),c.push({...a,originalPath:u,pattern:g,matcher:sn(g,!l,e.matchFilters)})}return c},[])}function dn(e,t=0){return{routes:e,score:ln(e[e.length-1])*1e4-t,matcher(n){const o=[];for(let r=e.length-1;r>=0;r--){const s=e[r],i=s.matcher(n);if(!i)return null;o.unshift({...i,route:s})}return o}}}function ut(e){return Array.isArray(e)?e:[e]}function ft(e,t="",n=[],o=[]){const r=ut(e);for(let s=0,i=r.length;s<i;s++){const l=r[s];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const a=fn(l,t);for(const c of a){n.push(c);const u=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!u)ft(l.children,c.pattern,n,o);else{const f=dn([...n],o.length);o.push(f)}n.pop()}}}return n.length?o:o.sort((s,i)=>i.score-s.score)}function xe(e,t){for(let n=0,o=e.length;n<o;n++){const r=e[n].matcher(t);if(r)return r}return[]}function hn(e,t){const n=new URL(ot),o=C(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),r=C(()=>o().pathname),s=C(()=>o().search,!0),i=C(()=>o().hash),l=()=>"";return{get pathname(){return r()},get search(){return s()},get hash(){return i()},get state(){return t()},get key(){return l()},query:it(Oe(s,()=>st(o())))}}let q;function pn(){return q}function gn(e,t,n,o={}){const{signal:[r,s],utils:i={}}=e,l=i.parsePath||(v=>v),a=i.renderPath||(v=>v),c=i.beforeLeave||rt(),u=te("",o.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&s({value:u,replace:!0,scroll:!1});const[f,d]=R(!1);let g;const A=(v,x)=>{x.value===h()&&x.state===w()||(g===void 0&&d(!0),q=v,g=x,xt(()=>{g===x&&(p(g.value),b(g.state),$[1]([]))}).finally(()=>{g===x&&vt(()=>{q=void 0,v==="navigate"&&B(g),d(!1),g=void 0})}))},[h,p]=R(r().value),[w,b]=R(r().state),N=hn(h,w),L=[],$=R([]),I=C(()=>typeof o.transformUrl=="function"?xe(t(),o.transformUrl(N.pathname)):xe(t(),N.pathname)),H=it(()=>{const v=I(),x={};for(let _=0;_<v.length;_++)Object.assign(x,v[_].params);return x}),S={pattern:u,path:()=>u,outlet:()=>null,resolvePath(v){return te(u,v)}};return U(Oe(r,v=>A("native",v),{defer:!0})),{base:S,location:N,params:H,isRouting:f,renderPath:a,parsePath:l,navigatorFactory:E,matches:I,beforeLeave:c,preloadRoute:gt,singleFlight:o.singleFlight===void 0?!0:o.singleFlight,submissions:$};function P(v,x,_){k(()=>{if(typeof x=="number"){x&&(i.go?i.go(x):console.warn("Router integration does not support relative routing"));return}const Q=!x||x[0]==="?",{replace:pe,resolve:V,scroll:ge,state:W}={replace:!1,resolve:!Q,scroll:!0,..._};let Re;const Z=V?v.resolvePath(x):te(Q&&(Re=r().value)&&Re.split("?")[0]||"",x);if(Z===void 0)throw new Error(`Path '${x}' is not a routable path`);if(L.length>=an)throw new Error("Too many redirects");const je=h();(Z!==je||W!==w())&&(Xt||c.confirm(Z,_)&&(L.push({value:je,replace:pe,scroll:ge,state:w()}),A("navigate",{value:Z,state:W})))})}function E(v){return v=v||ue(ct)||S,(x,_)=>P(v,x,_)}function B(v){const x=L[0];x&&(s({...v,replace:x.replace,scroll:x.scroll}),L.length=0)}function gt(v,x={}){const _=xe(t(),v.pathname),Q=q;q="preload";for(let pe in _){const{route:V,params:ge}=_[pe];V.component&&V.component.preload&&V.component.preload();const{preload:W}=V;x.preloadData&&W&&ze(n(),()=>W({params:ge,location:{pathname:v.pathname,search:v.search,hash:v.hash,query:st(v),state:null,key:""},intent:"preload"}))}q=Q}}function mn(e,t,n,o){const{base:r,location:s,params:i}=e,{pattern:l,component:a,preload:c}=o().route,u=C(()=>o().path);a&&a.preload&&a.preload();const f=c?c({params:i,location:s,intent:q||"initial"}):void 0;return{parent:t,pattern:l,path:u,outlet:()=>a?j(a,{params:i,location:s,data:f,get children(){return n()}}):n(),resolvePath(g){return te(r.path(),g,u())}}}const bn=e=>t=>{const{base:n}=t,o=Ke(()=>t.children),r=C(()=>ft(o(),t.base||""));let s;const i=gn(e,r,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),j(at.Provider,{value:i,get children(){return j(yn,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[C(()=>(s=Ve())&&null),j(wn,{routerState:i,get branches(){return r()}})]}})}})};function yn(e){const t=e.routerState.location,n=e.routerState.params,o=C(()=>e.preload&&k(()=>{e.preload({params:n,location:t,intent:pn()||"initial"})}));return j(Ze,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>j(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function wn(e){const t=[];let n;const o=C(Oe(e.routerState.matches,(r,s,i)=>{let l=s&&r.length===s.length;const a=[];for(let c=0,u=r.length;c<u;c++){const f=s&&s[c],d=r[c];i&&f&&d.route.key===f.route.key?a[c]=i[c]:(l=!1,t[c]&&t[c](),qe(g=>{t[c]=g,a[c]=mn(e.routerState,a[c-1]||e.routerState.base,Fe(()=>o()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(r.length).forEach(c=>c()),i&&l?i:(n=a[0],a)}));return Fe(()=>o()&&n)()}const Fe=e=>()=>j(Ze,{get when(){return e()},keyed:!0,children:t=>j(ct.Provider,{value:t,get children(){return t.outlet()}})});function vn([e,t],n,o){return[e,o?r=>t(o(r)):t]}function xn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function An(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=vn(R(n(e.get()),{equals:(r,s)=>r.value===s.value&&r.state===s.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&Ge(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),bn({signal:o,create:e.create,utils:e.utils})}function Sn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Pn(e,t){const n=xn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const En=new Map;function Cn(e=!0,t=!1,n="/_server",o){return r=>{const s=r.base.path(),i=r.navigatorFactory(r.base);let l={};function a(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function c(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const p=h.composedPath().find(I=>I instanceof Node&&I.nodeName.toUpperCase()==="A");if(!p||t&&!p.hasAttribute("link"))return;const w=a(p),b=w?p.href.baseVal:p.href;if((w?p.target.baseVal:p.target)||!b&&!p.hasAttribute("state"))return;const L=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||L&&L.includes("external"))return;const $=w?new URL(b,document.baseURI):new URL(b);if(!($.origin!==window.location.origin||s&&$.pathname&&!$.pathname.toLowerCase().startsWith(s.toLowerCase())))return[p,$]}function u(h){const p=c(h);if(!p)return;const[w,b]=p,N=r.parsePath(b.pathname+b.search+b.hash),L=w.getAttribute("state");h.preventDefault(),i(N,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:L&&JSON.parse(L)})}function f(h){const p=c(h);if(!p)return;const[w,b]=p;typeof o=="function"&&(b.pathname=o(b.pathname)),l[b.pathname]||r.preloadRoute(b,{preloadData:w.getAttribute("preload")!=="false"})}function d(h){const p=c(h);if(!p)return;const[w,b]=p;typeof o=="function"&&(b.pathname=o(b.pathname)),!l[b.pathname]&&(l[b.pathname]=setTimeout(()=>{r.preloadRoute(b,{preloadData:w.getAttribute("preload")!=="false"}),delete l[b.pathname]},200))}function g(h){const p=c(h);if(!p)return;const[,w]=p;typeof o=="function"&&(w.pathname=o(w.pathname)),l[w.pathname]&&(clearTimeout(l[w.pathname]),delete l[w.pathname])}function A(h){if(h.defaultPrevented)return;let p=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!p)return;if(!p.startsWith("https://action/")){const b=new URL(p,ot);if(p=r.parsePath(b.pathname+b.search),!p.startsWith(n))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=En.get(p);if(w){h.preventDefault();const b=new FormData(h.target,h.submitter);w.call({r,f:h.target},h.target.enctype==="multipart/form-data"?b:new URLSearchParams(b))}}Je(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",d),document.addEventListener("mouseout",g),document.addEventListener("focusin",f),document.addEventListener("touchstart",f)),document.addEventListener("submit",A),Ge(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",d),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",A)})}}function Ln(e){const t=()=>({value:window.location.pathname.replace(/^\/+/,"/")+window.location.search+window.location.hash,state:window.history.state}),n=rt();return An({get:t,set({value:o,replace:r,scroll:s,state:i}){r?window.history.replaceState(Jt(i),"",o):window.history.pushState(i,"",o),Pn(decodeURIComponent(window.location.hash.slice(1)),s),_e()},init:o=>Sn(window,"popstate",en(o,r=>{if(r&&r<0)return!n.confirm(r);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Cn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:o=>window.history.go(o),beforeLeave:n}})(e)}const On="_App_1kj2e_1",kn="_logo_1kj2e_5",_n="_main_1kj2e_10",Rn="_header_1kj2e_14",jn="_link_1kj2e_25",Tn={App:On,logo:kn,"logo-spin":"_logo-spin_1kj2e_1",main:_n,header:Rn,link:jn},Nn="ucQa5uXzYl8TRIWX",$n=async(e,t)=>{try{const n=async(r=1)=>{try{const s=`http://localhost:1337/api/afiliadoId/${e}?page=${r}`,l=await fetch(s,{method:"GET",headers:{"Content-Type":"application/json"},body:null});if(l.ok)return await l.json()}catch(s){console.error(s);return}},o=await n();if(o&&o.length!==0){let r=o,s=[...r.affiliations];for(t&&t(i=>({...i,productos:s,type:"afiliado"})),r.meta.current_page;r.meta.current_page<=r.meta.last_page;r.meta.current_page++){const i=r.meta.links.find(l=>l.label==="Next"||l.label==="Próximo");if(i.url&&(r=await n(new URL(i.url).searchParams.get("page")),s=[...s,...r.affiliations],t&&t(l=>({...l,productos:s,type:"afiliado"}))),r.meta.current_page==r.meta.last_page||!i.url)break}return r.products=s,r}else return[]}catch(n){return console.error(n,"error- getAfiliado"),!1}},In=async(e,t)=>{try{const n=async(r,s="1")=>{try{return await(await fetch(`https://s-checkout.builderall.com/api/ecommerce/${Nn}/items?tag=${r}&page=${s}`)).json()}catch{return null}},o=await n(e);if(o){let r=o,s=[...r.products];for(t&&t(i=>({...i,productos:s,type:"productor"})),r.meta.current_page;r.meta.current_page<=r.meta.last_page&&(r=await n("cursos",new URL(r.meta.links.find(i=>i.label==="Next").url).searchParams.get("page")),s=[...s,...r.products],t&&t(i=>({...i,productos:s,type:"productor"})),r.meta.current_page!=r.meta.last_page);r.meta.current_page++);return r.products=s,r}}catch(n){return console.error(n),!1}},dt=ce({cambio:{}}),Dn=()=>{const e=ue(dt);if(!e)throw console.log("no existe contexto"),new Error("no existe contexto");return e};let Fn={data:""},Un=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Fn,Mn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Bn=/\/\*[^]*?\*\/|  +/g,Ue=/\n+/g,G=(e,t)=>{let n="",o="",r="";for(let s in e){let i=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+i+";":o+=s[1]=="f"?G(i,s):s+"{"+G(i,s[1]=="k"?"":t)+"}":typeof i=="object"?o+=G(i,t?t.replace(/([^,])+/g,l=>s.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,l):l?l+" "+a:a)):s):i!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=G.p?G.p(s,i):s+":"+i+";")}return n+(t&&r?t+"{"+r+"}":r)+o},D={},ht=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+ht(e[n]);return t}return e},qn=(e,t,n,o,r)=>{let s=ht(e),i=D[s]||(D[s]=(a=>{let c=0,u=11;for(;c<a.length;)u=101*u+a.charCodeAt(c++)>>>0;return"go"+u})(s));if(!D[i]){let a=s!==e?e:(c=>{let u,f,d=[{}];for(;u=Mn.exec(c.replace(Bn,""));)u[4]?d.shift():u[3]?(f=u[3].replace(Ue," ").trim(),d.unshift(d[0][f]=d[0][f]||{})):d[0][u[1]]=u[2].replace(Ue," ").trim();return d[0]})(e);D[i]=G(r?{["@keyframes "+i]:a}:a,n?"":"."+i)}let l=n&&D.g?D.g:null;return n&&(D.g=D[i]),((a,c,u,f)=>{f?c.data=c.data.replace(f,a):c.data.indexOf(a)===-1&&(c.data=u?a+c.data:c.data+a)})(D[i],t,o,l),i},Gn=(e,t,n)=>e.reduce((o,r,s)=>{let i=t[s];if(i&&i.call){let l=i(n),a=l&&l.props&&l.props.className||/^go/.test(l)&&l;i=a?"."+a:l&&typeof l=="object"?l.props?"":G(l,""):l===!1?"":l}return o+r+(i??"")},"");function le(e){let t=this||{},n=e.call?e(t.p):e;return qn(n.unshift?n.raw?Gn(n,[].slice.call(arguments,1),t.p):n.reduce((o,r)=>Object.assign(o,r&&r.call?r(t.p):r),{}):n,Un(t.target),t.g,t.o,t.k)}le.bind({g:1});le.bind({k:1});const Vn=ce();function pt(e){let t=this||{};return(...n)=>{const o=r=>{const s=ue(Vn),i=we(r,{theme:s}),l=we(i,{get class(){const g=i.class,A="class"in i&&/^go[0-9]+/.test(g);let h=le.apply({target:t.target,o:A,p:i,g:t.g},n);return[g,h].filter(Boolean).join(" ")}}),[a,c]=Qe(l,["as","theme"]),u=c,f=a.as||e;let d;return typeof f=="function"?d=f(u):t.g==1?(d=document.createElement(f),tt(d,u)):d=Zt(we({component:f},u)),d};return o.class=r=>k(()=>le.apply({target:t.target,p:r,g:t.g},n)),o}}new Proxy(pt,{get(e,t){return e(t)}});function zn(){const e=pt.call({g:1},"div").apply(null,arguments);return function(n){return e(n),null}}const Kn=e=>zn`
         :root{ --bg-primero: #012E40; 
        --bg-segundo: #012626;
        --bg-tercero: #F29F05;
        --bg-cuarto: #F25C05;
        --bg-quinto: #F29472;
     }
     body, html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #141414 !important;
    color: #fff !important;
    cursor: default;
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif !important;
    font-size: 10px;
    line-height: 1.2;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
     div[data-tag="[I-CURSOS]"] {
    overflow: visible;
    position: static;
    min-height: 100vh;
    width: 100vw;
}
.mainView {
    /* min-height: 1000px; */
    position: relative;
    z-index: 0;
}
.lolomo.is-fullbleed {
    margin-top: -70px;
}
.lolomo {
    overflow-x: hidden;
}
.lolomo {
    overflow: hidden;
    padding: 0 0 50px;
    z-index: 0;
}
.visually-hidden {
    clip: rect(1px 1px 1px 1px)!important;
    clip: rect(1px,1px,1px,1px)!important;
    height: 1px!important;
    overflow: hidden!important;
    position: absolute!important;
    white-space: nowrap!important;
    width: 1px!important;
}
.volatile-billboard-animations-container {
    display: block;
    position: relative;
    z-index: 1;
}

.volatile-billboard-animations-container .billboard-row {
    left: 0;
    position: relative;
    right: 0;
    top: 0;
}
.billboard-row {
    background-color: #000;
    margin-bottom: 20px;
    padding-bottom: 40%;
    position: relative;
    touch-action: pan-y;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.billboard-row .billboard {
    background-color: #000;
    height: 56.25vw;
    position: absolute;
    width: 100%;
    z-index: 0;
}
.billboard-row .billboard .billboard-motion {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.billboard-row .billboard .bottom-layer {
    z-index: 2;
}
.billboard-row .billboard .full-screen, .billboard-row .billboard .hero-image-wrapper {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.billboard-row .billboard .full-screen, .billboard-row .billboard .hero-image-wrapper {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.billboard-row .billboard .hero-image-wrapper .static-image {
    background-position: 50%;
    background-size: cover;
    bottom: 0;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    filter: alpha(opacity=100);
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
    width: 100%;
}
.billboard-row .billboard .hero-image-wrapper .image-layer {
    z-index: 5;
}
img {
    border: 0;
}
@media screen and (min-width: 841px) and (max-width: 1280px) and (orientation: landscape) {
    body, html {
        font-size: .85vw;
    }
}

    `();var Hn=he("<header>header"),Wn=he("<div>"),Xn=he("<footer>footer");function Yn(e){const t=un(),[n,o]=R({productos:[],type:t.afiliadoId?"afiliado":"productor"}),r=C(()=>({productos:n,setProductos:o})),[s,i]=R("cursos");return ee(()=>{console.log(t.afiliadoId)}),wt(t.afiliadoId?()=>$n(t.afiliadoId,o):()=>In(s(),o)),ee(()=>{}),ee(()=>{const l=document.querySelector('div[data-tag="[I-CURSOS]"],#root,#app');console.log(l)}),j(dt.Provider,{value:r,get children(){return[j(Kn,{memoData:r}),Hn(),(()=>{var l=Wn();return nt(l,()=>e.children),U(()=>et(l,Tn.main)),l})(),Xn()]}})}var Qn=he('<div class=mainView><div class="lolomo is-fullbleed"><h1 class=visually-hidden>i cursos</h1><div class=volatile-billboard-animations-container><div class=billboard-row><div class="billboard billboard-pane billboard-originals trailer-billboard"><div class="billboard-motion dismiss-mask"><div class="motion-background-component bottom-layer full-screen"><div class=hero-image-wrapper><img class="hero static-image image-layer"src="https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABes_NnBj3atXwD8PgPhfVR6YzTMHBs-7PCP-qiAEsLPfZ5uHv1Ft4664--TS9pZ9zQxe0YtsuImIlCt50UnAFxhxLGi-HlWUR0pm.webp?r=2a3"alt=""></div></div></div><div class=fill-container>');function Zn(){const e=Dn();console.log(e(),"context");const{productos:t}=e();return ee(()=>{console.log(t())}),Qn()}const Jn=[{path:"/i-cursos",component:Yn,children:[{path:["/","/:afiliadoId"],component:Zn}]}];setTimeout(()=>{const e=setInterval(()=>{const t=document.querySelector('div[data-tag="[I-CURSOS]"] div[element="PanelComponent"]');t&&(clearInterval(e),Mt(()=>j(Ln,{children:Jn}),t))},200)});
