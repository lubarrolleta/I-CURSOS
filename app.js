(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const jt={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return vt(this.context.count)},getNextContextId(){return vt(this.context.count++)}};function vt(t){const e=String(t),n=e.length-1;return jt.context.id+(n?String.fromCharCode(96+n):"")+e}const mn=(t,e)=>t===e,_e=Symbol("solid-proxy"),gn=Symbol("solid-track"),Re={equals:mn};let Mt=Ht;const J=1,$e=2,Dt={owned:null,cleanups:null,context:null,owner:null},qe={};var _=null;let Xe=null,bn=null,R=null,N=null,Z=null,De=0;function he(t,e){const n=R,r=_,o=t.length===0,i=e===void 0?r:e,s=o?Dt:{owned:null,cleanups:null,context:i?i.context:null,owner:i},a=o?t:()=>t(()=>I(()=>He(s)));_=s,R=null;try{return W(a,!0)}finally{R=n,_=r}}function P(t,e){e=e?Object.assign({},Re,e):Re;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),zt(n,o));return[It.bind(n),r]}function Ae(t,e,n){const r=ze(t,e,!0,J);be(r)}function H(t,e,n){const r=ze(t,e,!1,J);be(r)}function U(t,e,n){Mt=kn;const r=ze(t,e,!1,J);(!n||!n.render)&&(r.user=!0),Z?Z.push(r):be(r)}function $(t,e,n){n=n?Object.assign({},Re,n):Re;const r=ze(t,e,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,be(r),It.bind(r)}function wn(t){return t&&typeof t=="object"&&"then"in t}function yn(t,e,n){let r,o,i;arguments.length===2&&typeof e=="object"||arguments.length===1?(r=!0,o=t,i={}):(r=t,o=e,i={});let s=null,a=qe,l=!1,c="initialValue"in i,d=typeof r=="function"&&$(r);const u=new Set,[p,m]=(i.storage||P)(i.initialValue),[x,h]=P(void 0),[g,v]=P(void 0,{equals:!1}),[w,S]=P(c?"ready":"unresolved");function C(L,f,b,F){return s===L&&(s=null,F!==void 0&&(c=!0),(L===a||f===a)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(F,{value:f})),a=qe,O(f,b)),f}function O(L,f){W(()=>{f===void 0&&m(()=>L),S(f!==void 0?"errored":c?"ready":"unresolved"),h(f);for(const b of u.keys())b.decrement();u.clear()},!1)}function E(){const L=En,f=p(),b=x();if(b!==void 0&&!s)throw b;return R&&!R.user&&L&&Ae(()=>{g(),s&&(L.resolved||u.has(L)||(L.increment(),u.add(L)))}),f}function j(L=!0){if(L!==!1&&l)return;l=!1;const f=d?d():r;if(f==null||f===!1){C(s,I(p));return}const b=a!==qe?a:I(()=>o(f,{value:p(),refetching:L}));return wn(b)?(s=b,"value"in b?(b.status==="success"?C(s,b.value,void 0,f):C(s,void 0,rt(b.value),f),b):(l=!0,queueMicrotask(()=>l=!1),W(()=>{S(c?"refreshing":"pending"),v()},!1),b.then(F=>C(b,F,void 0,f),F=>C(b,void 0,rt(F),f)))):(C(s,b,void 0,f),b)}return Object.defineProperties(E,{state:{get:()=>w()},error:{get:()=>x()},loading:{get(){const L=w();return L==="pending"||L==="refreshing"}},latest:{get(){if(!c)return E();const L=x();if(L&&!s)throw L;return p()}}}),d?Ae(()=>j(!1)):j(!1),[E,{refetch:j,mutate:m}]}function vn(t){return W(t,!1)}function I(t){if(R===null)return t();const e=R;R=null;try{return t()}finally{R=e}}function me(t,e,n){const r=Array.isArray(t);let o,i=n&&n.defer;return s=>{let a;if(r){a=Array(t.length);for(let c=0;c<t.length;c++)a[c]=t[c]()}else a=t();if(i)return i=!1,s;const l=I(()=>e(a,o,s));return o=a,l}}function Nt(t){U(()=>I(t))}function Y(t){return _===null||(_.cleanups===null?_.cleanups=[t]:_.cleanups.push(t)),t}function Ne(){return _}function Ie(t,e){const n=_,r=R;_=t,R=null;try{return W(e,!0)}catch(o){pt(o)}finally{_=n,R=r}}function xn(t){const e=R,n=_;return Promise.resolve().then(()=>{R=e,_=n;let r;return W(t,!1),R=_=null,r?r.done:void 0})}function te(t,e){const n=Symbol("context");return{id:n,Provider:Sn(n),defaultValue:t}}function ee(t){let e;return _&&_.context&&(e=_.context[t.id])!==void 0?e:t.defaultValue}function ge(t){const e=$(t),n=$(()=>ot(e()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let En;function It(){if(this.sources&&this.state)if(this.state===J)be(this);else{const t=N;N=null,W(()=>Be(this),!1),N=t}if(R){const t=this.observers?this.observers.length:0;R.sources?(R.sources.push(this),R.sourceSlots.push(t)):(R.sources=[this],R.sourceSlots=[t]),this.observers?(this.observers.push(R),this.observerSlots.push(R.sources.length-1)):(this.observers=[R],this.observerSlots=[R.sources.length-1])}return this.value}function zt(t,e,n){let r=t.value;return(!t.comparator||!t.comparator(r,e))&&(t.value=e,t.observers&&t.observers.length&&W(()=>{for(let o=0;o<t.observers.length;o+=1){const i=t.observers[o],s=Xe&&Xe.running;s&&Xe.disposed.has(i),(s?!i.tState:!i.state)&&(i.pure?N.push(i):Z.push(i),i.observers&&Ut(i)),s||(i.state=J)}if(N.length>1e6)throw N=[],new Error},!1)),e}function be(t){if(!t.fn)return;He(t);const e=De;Cn(t,t.value,e)}function Cn(t,e,n){let r;const o=_,i=R;R=_=t;try{r=t.fn(e)}catch(s){return t.pure&&(t.state=J,t.owned&&t.owned.forEach(He),t.owned=null),t.updatedAt=n+1,pt(s)}finally{R=i,_=o}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?zt(t,r):t.value=r,t.updatedAt=n)}function ze(t,e,n,r=J,o){const i={fn:t,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:_,context:_?_.context:null,pure:n};return _===null||_!==Dt&&(_.owned?_.owned.push(i):_.owned=[i]),i}function Oe(t){if(t.state===0)return;if(t.state===$e)return Be(t);if(t.suspense&&I(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<De);)t.state&&e.push(t);for(let n=e.length-1;n>=0;n--)if(t=e[n],t.state===J)be(t);else if(t.state===$e){const r=N;N=null,W(()=>Be(t,e[0]),!1),N=r}}function W(t,e){if(N)return t();let n=!1;e||(N=[]),Z?n=!0:Z=[],De++;try{const r=t();return An(n),r}catch(r){n||(Z=null),N=null,pt(r)}}function An(t){if(N&&(Ht(N),N=null),t)return;const e=Z;Z=null,e.length&&W(()=>Mt(e),!1)}function Ht(t){for(let e=0;e<t.length;e++)Oe(t[e])}function kn(t){let e,n=0;for(e=0;e<t.length;e++){const r=t[e];r.user?t[n++]=r:Oe(r)}for(e=0;e<n;e++)Oe(t[e])}function Be(t,e){t.state=0;for(let n=0;n<t.sources.length;n+=1){const r=t.sources[n];if(r.sources){const o=r.state;o===J?r!==e&&(!r.updatedAt||r.updatedAt<De)&&Oe(r):o===$e&&Be(r,e)}}}function Ut(t){for(let e=0;e<t.observers.length;e+=1){const n=t.observers[e];n.state||(n.state=$e,n.pure?N.push(n):Z.push(n),n.observers&&Ut(n))}}function He(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),r=t.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),s=n.observerSlots.pop();r<o.length&&(i.sourceSlots[s]=r,o[r]=i,n.observerSlots[r]=s)}}if(t.owned){for(e=t.owned.length-1;e>=0;e--)He(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function rt(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function pt(t,e=_){throw rt(t)}function ot(t){if(typeof t=="function"&&!t.length)return ot(t());if(Array.isArray(t)){const e=[];for(let n=0;n<t.length;n++){const r=ot(t[n]);Array.isArray(r)?e.push.apply(e,r):e.push(r)}return e}return t}function Sn(t,e){return function(r){let o;return H(()=>o=I(()=>(_.context={..._.context,[t]:r.value},ge(()=>r.children))),void 0),o}}const Fn=Symbol("fallback");function xt(t){for(let e=0;e<t.length;e++)t[e]()}function Tn(t,e,n={}){let r=[],o=[],i=[],s=0,a=e.length>1?[]:null;return Y(()=>xt(i)),()=>{let l=t()||[],c=l.length,d,u;return l[gn],I(()=>{let m,x,h,g,v,w,S,C,O;if(c===0)s!==0&&(xt(i),i=[],r=[],o=[],s=0,a&&(a=[])),n.fallback&&(r=[Fn],o[0]=he(E=>(i[0]=E,n.fallback())),s=1);else if(s===0){for(o=new Array(c),u=0;u<c;u++)r[u]=l[u],o[u]=he(p);s=c}else{for(h=new Array(c),g=new Array(c),a&&(v=new Array(c)),w=0,S=Math.min(s,c);w<S&&r[w]===l[w];w++);for(S=s-1,C=c-1;S>=w&&C>=w&&r[S]===l[C];S--,C--)h[C]=o[S],g[C]=i[S],a&&(v[C]=a[S]);for(m=new Map,x=new Array(C+1),u=C;u>=w;u--)O=l[u],d=m.get(O),x[u]=d===void 0?-1:d,m.set(O,u);for(d=w;d<=S;d++)O=r[d],u=m.get(O),u!==void 0&&u!==-1?(h[u]=o[d],g[u]=i[d],a&&(v[u]=a[d]),u=x[u],m.set(O,u)):i[d]();for(u=w;u<c;u++)u in h?(o[u]=h[u],i[u]=g[u],a&&(a[u]=v[u],a[u](u))):o[u]=he(p);o=o.slice(0,s=c),r=l.slice(0)}return o});function p(m){if(i[u]=m,a){const[x,h]=P(u);return a[u]=h,e(l[u],x)}return e(l[u])}}}let Pn=!1;function A(t,e){return I(()=>t(e||{}))}function Fe(){return!0}const it={get(t,e,n){return e===_e?n:t.get(e)},has(t,e){return e===_e?!0:t.has(e)},set:Fe,deleteProperty:Fe,getOwnPropertyDescriptor(t,e){return{configurable:!0,enumerable:!0,get(){return t.get(e)},set:Fe,deleteProperty:Fe}},ownKeys(t){return t.keys()}};function Ke(t){return(t=typeof t=="function"?t():t)?t:{}}function Ln(){for(let t=0,e=this.length;t<e;++t){const n=this[t]();if(n!==void 0)return n}}function B(...t){let e=!1;for(let s=0;s<t.length;s++){const a=t[s];e=e||!!a&&_e in a,t[s]=typeof a=="function"?(e=!0,$(a)):a}if(e)return new Proxy({get(s){for(let a=t.length-1;a>=0;a--){const l=Ke(t[a])[s];if(l!==void 0)return l}},has(s){for(let a=t.length-1;a>=0;a--)if(s in Ke(t[a]))return!0;return!1},keys(){const s=[];for(let a=0;a<t.length;a++)s.push(...Object.keys(Ke(t[a])));return[...new Set(s)]}},it);const n={},r=Object.create(null);for(let s=t.length-1;s>=0;s--){const a=t[s];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let c=l.length-1;c>=0;c--){const d=l[c];if(d==="__proto__"||d==="constructor")continue;const u=Object.getOwnPropertyDescriptor(a,d);if(!r[d])r[d]=u.get?{enumerable:!0,configurable:!0,get:Ln.bind(n[d]=[u.get.bind(a)])}:u.value!==void 0?u:void 0;else{const p=n[d];p&&(u.get?p.push(u.get.bind(a)):u.value!==void 0&&p.push(()=>u.value))}}}const o={},i=Object.keys(r);for(let s=i.length-1;s>=0;s--){const a=i[s],l=r[a];l&&l.get?Object.defineProperty(o,a,l):o[a]=l?l.value:void 0}return o}function G(t,...e){if(_e in t){const o=new Set(e.length>1?e.flat():e[0]),i=e.map(s=>new Proxy({get(a){return s.includes(a)?t[a]:void 0},has(a){return s.includes(a)&&a in t},keys(){return s.filter(a=>a in t)}},it));return i.push(new Proxy({get(s){return o.has(s)?void 0:t[s]},has(s){return o.has(s)?!1:s in t},keys(){return Object.keys(t).filter(s=>!o.has(s))}},it)),i}const n={},r=e.map(()=>({}));for(const o of Object.getOwnPropertyNames(t)){const i=Object.getOwnPropertyDescriptor(t,o),s=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let a=!1,l=0;for(const c of e)c.includes(o)&&(a=!0,s?r[l][o]=i.value:Object.defineProperty(r[l],o,i)),++l;a||(s?n[o]=i.value:Object.defineProperty(n,o,i))}return[...r,n]}const _n=t=>`Stale read from <${t}>.`;function Rn(t){const e="fallback"in t&&{fallback:()=>t.fallback};return $(Tn(()=>t.each,t.children,e||void 0))}function we(t){const e=t.keyed,n=$(()=>t.when,void 0,{equals:(r,o)=>e?r===o:!r==!o});return $(()=>{const r=n();if(r){const o=t.children;return typeof o=="function"&&o.length>0?I(()=>o(e?r:()=>{if(!I(n))throw _n("Show");return t.when})):o}return t.fallback},void 0,void 0)}const $n=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],On=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...$n]),Bn=new Set(["innerHTML","textContent","innerText","children"]),jn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Mn=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Dn(t,e){const n=Mn[t];return typeof n=="object"?n[e]?n.$:void 0:n}const Nn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),In=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),zn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Hn(t,e,n){let r=n.length,o=e.length,i=r,s=0,a=0,l=e[o-1].nextSibling,c=null;for(;s<o||a<i;){if(e[s]===n[a]){s++,a++;continue}for(;e[o-1]===n[i-1];)o--,i--;if(o===s){const d=i<r?a?n[a-1].nextSibling:n[i-a]:l;for(;a<i;)t.insertBefore(n[a++],d)}else if(i===a)for(;s<o;)(!c||!c.has(e[s]))&&e[s].remove(),s++;else if(e[s]===n[i-1]&&n[a]===e[o-1]){const d=e[--o].nextSibling;t.insertBefore(n[a++],e[s++].nextSibling),t.insertBefore(n[--i],d),e[o]=n[i]}else{if(!c){c=new Map;let u=a;for(;u<i;)c.set(n[u],u++)}const d=c.get(e[s]);if(d!=null)if(a<d&&d<i){let u=s,p=1,m;for(;++u<o&&u<i&&!((m=c.get(e[u]))==null||m!==d+p);)p++;if(p>d-a){const x=e[s];for(;a<d;)t.insertBefore(n[a++],x)}else t.replaceChild(n[a++],e[s++])}else s++;else e[s++].remove()}}}const Et="_$DX_DELEGATE";function Un(t,e,n,r={}){let o;return he(i=>{o=i,e===document?t():V(e,t(),e.firstChild?null:void 0,n)},r.owner),()=>{o(),e.textContent=""}}function z(t,e,n){let r;const o=()=>{const s=document.createElement("template");return s.innerHTML=t,s.content.firstChild},i=()=>(r||(r=o())).cloneNode(!0);return i.cloneNode=i,i}function Vt(t,e=window.document){const n=e[Et]||(e[Et]=new Set);for(let r=0,o=t.length;r<o;r++){const i=t[r];n.has(i)||(n.add(i),e.addEventListener(i,Kn))}}function K(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function Vn(t,e,n,r){r==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,r)}function Ue(t,e){e==null?t.removeAttribute("class"):t.className=e}function Gn(t,e,n,r){if(r)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const o=n[0];t.addEventListener(e,n[0]=i=>o.call(t,n[1],i))}else t.addEventListener(e,n)}function Wn(t,e,n={}){const r=Object.keys(e||{}),o=Object.keys(n);let i,s;for(i=0,s=o.length;i<s;i++){const a=o[i];!a||a==="undefined"||e[a]||(Ct(t,a,!1),delete n[a])}for(i=0,s=r.length;i<s;i++){const a=r[i],l=!!e[a];!a||a==="undefined"||n[a]===l||!l||(Ct(t,a,!0),n[a]=l)}return n}function st(t,e,n){if(!e)return n?K(t,"style"):e;const r=t.style;if(typeof e=="string")return r.cssText=e;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),e||(e={});let o,i;for(i in n)e[i]==null&&r.removeProperty(i),delete n[i];for(i in e)o=e[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}function q(t,e={},n,r){const o={};return r||H(()=>o.children=ke(t,e.children,o.children)),H(()=>typeof e.ref=="function"&&at(e.ref,t)),H(()=>qn(t,e,n,!0,o,!0)),o}function at(t,e,n){return I(()=>t(e,n))}function V(t,e,n,r){if(n!==void 0&&!r&&(r=[]),typeof e!="function")return ke(t,e,r,n);H(o=>ke(t,e(),o,n),r)}function qn(t,e,n,r,o={},i=!1){e||(e={});for(const s in o)if(!(s in e)){if(s==="children")continue;o[s]=At(t,s,null,o[s],n,i)}for(const s in e){if(s==="children")continue;const a=e[s];o[s]=At(t,s,a,o[s],n,i)}}function Xn(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function Ct(t,e,n){const r=e.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)t.classList.toggle(r[o],n)}function At(t,e,n,r,o,i){let s,a,l,c,d;if(e==="style")return st(t,n,r);if(e==="classList")return Wn(t,n,r);if(n===r)return r;if(e==="ref")i||n(t);else if(e.slice(0,3)==="on:"){const u=e.slice(3);r&&t.removeEventListener(u,r),n&&t.addEventListener(u,n)}else if(e.slice(0,10)==="oncapture:"){const u=e.slice(10);r&&t.removeEventListener(u,r,!0),n&&t.addEventListener(u,n,!0)}else if(e.slice(0,2)==="on"){const u=e.slice(2).toLowerCase(),p=Nn.has(u);if(!p&&r){const m=Array.isArray(r)?r[0]:r;t.removeEventListener(u,m)}(p||n)&&(Gn(t,u,n,p),p&&Vt([u]))}else if(e.slice(0,5)==="attr:")K(t,e.slice(5),n);else if((d=e.slice(0,5)==="prop:")||(l=Bn.has(e))||!o&&((c=Dn(e,t.tagName))||(a=On.has(e)))||(s=t.nodeName.includes("-")))d&&(e=e.slice(5),a=!0),e==="class"||e==="className"?Ue(t,n):s&&!a&&!l?t[Xn(e)]=n:t[c||e]=n;else{const u=o&&e.indexOf(":")>-1&&zn[e.split(":")[0]];u?Vn(t,u,e,n):K(t,jn[e]||e,n)}return n}function Kn(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[e];if(r&&!n.disabled){const o=n[`${e}Data`];if(o!==void 0?r.call(n,o,t):r.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ke(t,e,n,r,o){for(;typeof n=="function";)n=n();if(e===n)return n;const i=typeof e,s=r!==void 0;if(t=s&&n[0]&&n[0].parentNode||t,i==="string"||i==="number"){if(i==="number"&&(e=e.toString(),e===n))return n;if(s){let a=n[0];a&&a.nodeType===3?a.data!==e&&(a.data=e):a=document.createTextNode(e),n=ce(t,n,r,a)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||i==="boolean")n=ce(t,n,r);else{if(i==="function")return H(()=>{let a=e();for(;typeof a=="function";)a=a();n=ke(t,a,n,r)}),()=>n;if(Array.isArray(e)){const a=[],l=n&&Array.isArray(n);if(lt(a,e,n,o))return H(()=>n=ke(t,a,n,r,!0)),()=>n;if(a.length===0){if(n=ce(t,n,r),s)return n}else l?n.length===0?kt(t,a,r):Hn(t,n,a):(n&&ce(t),kt(t,a));n=a}else if(e.nodeType){if(Array.isArray(n)){if(s)return n=ce(t,n,r,e);ce(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function lt(t,e,n,r){let o=!1;for(let i=0,s=e.length;i<s;i++){let a=e[i],l=n&&n[t.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)t.push(a);else if(Array.isArray(a))o=lt(t,a,l)||o;else if(c==="function")if(r){for(;typeof a=="function";)a=a();o=lt(t,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||o}else t.push(a),o=!0;else{const d=String(a);l&&l.nodeType===3&&l.data===d?t.push(l):t.push(document.createTextNode(d))}}return o}function kt(t,e,n=null){for(let r=0,o=e.length;r<o;r++)t.insertBefore(e[r],n)}function ce(t,e,n,r){if(n===void 0)return t.textContent="";const o=r||document.createTextNode("");if(e.length){let i=!1;for(let s=e.length-1;s>=0;s--){const a=e[s];if(o!==a){const l=a.parentNode===t;!i&&!s?l?t.replaceChild(o,a):t.insertBefore(o,n):l&&a.remove()}else i=!0}}else t.insertBefore(o,n);return[o]}const Zn=!1,Yn="http://www.w3.org/2000/svg";function Gt(t,e=!1){return e?document.createElementNS(Yn,t):document.createElement(t)}function Qn(t){const{useShadow:e}=t,n=document.createTextNode(""),r=()=>t.mount||document.body,o=Ne();let i,s=!!jt.context;return U(()=>{i||(i=Ie(o,()=>$(()=>t.children)));const a=r();if(a instanceof HTMLHeadElement){const[l,c]=P(!1),d=()=>c(!0);he(u=>V(a,()=>l()?u():i(),null)),Y(d)}else{const l=Gt(t.isSVG?"g":"div",t.isSVG),c=e&&l.attachShadow?l.attachShadow({mode:"open"}):l;Object.defineProperty(l,"_$host",{get(){return n.parentNode},configurable:!0}),V(c,i),a.appendChild(l),t.ref&&t.ref(l),Y(()=>a.removeChild(l))}},void 0,{render:!s}),n}function ht(t){const[e,n]=G(t,["component"]),r=$(()=>e.component);return $(()=>{const o=r();switch(typeof o){case"function":return I(()=>o(n));case"string":const i=In.has(o),s=Gt(o,i);return q(s,n,i),s}})}function Wt(){let t=new Set;function e(o){return t.add(o),()=>t.delete(o)}let n=!1;function r(o,i){if(n)return!(n=!1);const s={to:o,options:i,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const a of t)a.listener({...s,from:a.location,retry:l=>{l&&(n=!0),a.navigate(o,{...i,resolve:!1})}});return!s.defaultPrevented}return{subscribe:e,confirm:r}}let ct;function mt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ct=window.history.state._depth}mt();function Jn(t){return{...t,_depth:window.history.state&&window.history.state._depth}}function er(t,e){let n=!1;return()=>{const r=ct;mt();const o=r==null?null:ct-r;if(n){n=!1;return}o&&e(o)?(n=!0,window.history.go(-o)):t()}}const tr=/^(?:[a-z0-9]+:)?\/\//i,nr=/^\/+|(\/)\/+$/g,qt="http://sr";function Ce(t,e=!1){const n=t.replace(nr,"$1");return n?e||/^[?#]/.test(n)?n:"/"+n:""}function Le(t,e,n){if(tr.test(e))return;const r=Ce(t),o=n&&Ce(n);let i="";return!o||e.startsWith("/")?i=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+o:i=o,(i||"/")+Ce(e,!i)}function rr(t,e){if(t==null)throw new Error(e);return t}function or(t,e){return Ce(t).replace(/\/*(\*.*)?$/g,"")+Ce(e)}function Xt(t){const e={};return t.searchParams.forEach((n,r)=>{e[r]=n}),e}function ir(t,e,n){const[r,o]=t.split("/*",2),i=r.split("/").filter(Boolean),s=i.length;return a=>{const l=a.split("/").filter(Boolean),c=l.length-s;if(c<0||c>0&&o===void 0&&!e)return null;const d={path:s?"":"/",params:{}},u=p=>n===void 0?void 0:n[p];for(let p=0;p<s;p++){const m=i[p],x=l[p],h=m[0]===":",g=h?m.slice(1):m;if(h&&Ze(x,u(g)))d.params[g]=x;else if(h||!Ze(x,m))return null;d.path+=`/${x}`}if(o){const p=c?l.slice(-c).join("/"):"";if(Ze(p,u(o)))d.params[o]=p;else return null}return d}}function Ze(t,e){const n=r=>r.localeCompare(t,void 0,{sensitivity:"base"})===0;return e===void 0?!0:typeof e=="string"?n(e):typeof e=="function"?e(t):Array.isArray(e)?e.some(n):e instanceof RegExp?e.test(t):!1}function sr(t){const[e,n]=t.pattern.split("/*",2),r=e.split("/").filter(Boolean);return r.reduce((o,i)=>o+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Kt(t){const e=new Map,n=Ne();return new Proxy({},{get(r,o){return e.has(o)||Ie(n,()=>e.set(o,$(()=>t()[o]))),e.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(t())}})}function Zt(t){let e=/(\/?\:[^\/]+)\?/.exec(t);if(!e)return[t];let n=t.slice(0,e.index),r=t.slice(e.index+e[0].length);const o=[n,n+=e[1]];for(;e=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=e[1]),r=r.slice(e[0].length);return Zt(r).reduce((i,s)=>[...i,...o.map(a=>a+s)],[])}const ar=100,Yt=te(),Qt=te(),lr=()=>rr(ee(Yt),"<A> and 'use' router primitives can be only used inside a Route."),cr=()=>lr().params;function dr(t,e=""){const{component:n,preload:r,load:o,children:i,info:s}=t,a=!i||Array.isArray(i)&&!i.length,l={key:t,component:n,preload:r||o,info:s};return Jt(t.path).reduce((c,d)=>{for(const u of Zt(d)){const p=or(e,u);let m=a?p:p.split("/*",1)[0];m=m.split("/").map(x=>x.startsWith(":")||x.startsWith("*")?x:encodeURIComponent(x)).join("/"),c.push({...l,originalPath:d,pattern:m,matcher:ir(m,!a,t.matchFilters)})}return c},[])}function ur(t,e=0){return{routes:t,score:sr(t[t.length-1])*1e4-e,matcher(n){const r=[];for(let o=t.length-1;o>=0;o--){const i=t[o],s=i.matcher(n);if(!s)return null;r.unshift({...s,route:i})}return r}}}function Jt(t){return Array.isArray(t)?t:[t]}function en(t,e="",n=[],r=[]){const o=Jt(t);for(let i=0,s=o.length;i<s;i++){const a=o[i];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=dr(a,e);for(const c of l){n.push(c);const d=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!d)en(a.children,c.pattern,n,r);else{const u=ur([...n],r.length);r.push(u)}n.pop()}}}return n.length?r:r.sort((i,s)=>s.score-i.score)}function Ye(t,e){for(let n=0,r=t.length;n<r;n++){const o=t[n].matcher(e);if(o)return o}return[]}function fr(t,e){const n=new URL(qt),r=$(l=>{const c=t();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),l}},n,{equals:(l,c)=>l.href===c.href}),o=$(()=>r().pathname),i=$(()=>r().search,!0),s=$(()=>r().hash),a=()=>"";return{get pathname(){return o()},get search(){return i()},get hash(){return s()},get state(){return e()},get key(){return a()},query:Kt(me(i,()=>Xt(r())))}}let oe;function pr(){return oe}function hr(t,e,n,r={}){const{signal:[o,i],utils:s={}}=t,a=s.parsePath||(k=>k),l=s.renderPath||(k=>k),c=s.beforeLeave||Wt(),d=Le("",r.base||"");if(d===void 0)throw new Error(`${d} is not a valid base path`);d&&!o().value&&i({value:d,replace:!0,scroll:!1});const[u,p]=P(!1);let m;const x=(k,T)=>{T.value===h()&&T.state===v()||(m===void 0&&p(!0),oe=k,m=T,xn(()=>{m===T&&(g(m.value),w(m.state),O[1]([]))}).finally(()=>{m===T&&vn(()=>{oe=void 0,k==="navigate"&&F(m),p(!1),m=void 0})}))},[h,g]=P(o().value),[v,w]=P(o().state),S=fr(h,v),C=[],O=P([]),E=$(()=>typeof r.transformUrl=="function"?Ye(e(),r.transformUrl(S.pathname)):Ye(e(),S.pathname)),j=Kt(()=>{const k=E(),T={};for(let y=0;y<k.length;y++)Object.assign(T,k[y].params);return T}),L={pattern:d,path:()=>d,outlet:()=>null,resolvePath(k){return Le(d,k)}};return H(me(o,k=>x("native",k),{defer:!0})),{base:L,location:S,params:j,isRouting:u,renderPath:l,parsePath:a,navigatorFactory:b,matches:E,beforeLeave:c,preloadRoute:M,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:O};function f(k,T,y){I(()=>{if(typeof T=="number"){T&&(s.go?s.go(T):console.warn("Router integration does not support relative routing"));return}const D=!T||T[0]==="?",{replace:ae,resolve:le,scroll:We,state:ve}={replace:!1,resolve:!D,scroll:!0,...y};let wt;const Se=le?k.resolvePath(T):Le(D&&(wt=o().value)&&wt.split("?")[0]||"",T);if(Se===void 0)throw new Error(`Path '${T}' is not a routable path`);if(C.length>=ar)throw new Error("Too many redirects");const yt=h();(Se!==yt||ve!==v())&&(Zn||c.confirm(Se,y)&&(C.push({value:yt,replace:ae,scroll:We,state:v()}),x("navigate",{value:Se,state:ve})))})}function b(k){return k=k||ee(Qt)||L,(T,y)=>f(k,T,y)}function F(k){const T=C[0];T&&(i({...k,replace:T.replace,scroll:T.scroll}),C.length=0)}function M(k,T={}){const y=Ye(e(),k.pathname),D=oe;oe="preload";for(let ae in y){const{route:le,params:We}=y[ae];le.component&&le.component.preload&&le.component.preload();const{preload:ve}=le;T.preloadData&&ve&&Ie(n(),()=>ve({params:We,location:{pathname:k.pathname,search:k.search,hash:k.hash,query:Xt(k),state:null,key:""},intent:"preload"}))}oe=D}}function mr(t,e,n,r){const{base:o,location:i,params:s}=t,{pattern:a,component:l,preload:c}=r().route,d=$(()=>r().path);l&&l.preload&&l.preload();const u=c?c({params:s,location:i,intent:oe||"initial"}):void 0;return{parent:e,pattern:a,path:d,outlet:()=>l?A(l,{params:s,location:i,data:u,get children(){return n()}}):n(),resolvePath(m){return Le(o.path(),m,d())}}}const gr=t=>e=>{const{base:n}=e,r=ge(()=>e.children),o=$(()=>en(r(),e.base||""));let i;const s=hr(t,o,()=>i,{base:n,singleFlight:e.singleFlight,transformUrl:e.transformUrl});return t.create&&t.create(s),A(Yt.Provider,{value:s,get children(){return A(br,{routerState:s,get root(){return e.root},get preload(){return e.rootPreload||e.rootLoad},get children(){return[$(()=>(i=Ne())&&null),A(wr,{routerState:s,get branches(){return o()}})]}})}})};function br(t){const e=t.routerState.location,n=t.routerState.params,r=$(()=>t.preload&&I(()=>{t.preload({params:n,location:e,intent:pr()||"initial"})}));return A(we,{get when(){return t.root},keyed:!0,get fallback(){return t.children},children:o=>A(o,{params:n,location:e,get data(){return r()},get children(){return t.children}})})}function wr(t){const e=[];let n;const r=$(me(t.routerState.matches,(o,i,s)=>{let a=i&&o.length===i.length;const l=[];for(let c=0,d=o.length;c<d;c++){const u=i&&i[c],p=o[c];s&&u&&p.route.key===u.route.key?l[c]=s[c]:(a=!1,e[c]&&e[c](),he(m=>{e[c]=m,l[c]=mr(t.routerState,l[c-1]||t.routerState.base,St(()=>r()[c+1]),()=>t.routerState.matches()[c])}))}return e.splice(o.length).forEach(c=>c()),s&&a?s:(n=l[0],l)}));return St(()=>r()&&n)()}const St=t=>()=>A(we,{get when(){return t()},keyed:!0,children:e=>A(Qt.Provider,{value:e,get children(){return e.outlet()}})});function yr([t,e],n,r){return[t,r?o=>e(r(o)):e]}function vr(t){if(t==="#")return null;try{return document.querySelector(t)}catch{return null}}function xr(t){let e=!1;const n=o=>typeof o=="string"?{value:o}:o,r=yr(P(n(t.get()),{equals:(o,i)=>o.value===i.value&&o.state===i.state}),void 0,o=>(!e&&t.set(o),o));return t.init&&Y(t.init((o=t.get())=>{e=!0,r[1](n(o)),e=!1})),gr({signal:r,create:t.create,utils:t.utils})}function Er(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}function Cr(t,e){const n=vr(`#${t}`);n?n.scrollIntoView():e&&window.scrollTo(0,0)}const Ar=new Map;function kr(t=!0,e=!1,n="/_server",r){return o=>{const i=o.base.path(),s=o.navigatorFactory(o.base);let a={};function l(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function c(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const g=h.composedPath().find(E=>E instanceof Node&&E.nodeName.toUpperCase()==="A");if(!g||e&&!g.hasAttribute("link"))return;const v=l(g),w=v?g.href.baseVal:g.href;if((v?g.target.baseVal:g.target)||!w&&!g.hasAttribute("state"))return;const C=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||C&&C.includes("external"))return;const O=v?new URL(w,document.baseURI):new URL(w);if(!(O.origin!==window.location.origin||i&&O.pathname&&!O.pathname.toLowerCase().startsWith(i.toLowerCase())))return[g,O]}function d(h){const g=c(h);if(!g)return;const[v,w]=g,S=o.parsePath(w.pathname+w.search+w.hash),C=v.getAttribute("state");h.preventDefault(),s(S,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:C&&JSON.parse(C)})}function u(h){const g=c(h);if(!g)return;const[v,w]=g;typeof r=="function"&&(w.pathname=r(w.pathname)),a[w.pathname]||o.preloadRoute(w,{preloadData:v.getAttribute("preload")!=="false"})}function p(h){const g=c(h);if(!g)return;const[v,w]=g;typeof r=="function"&&(w.pathname=r(w.pathname)),!a[w.pathname]&&(a[w.pathname]=setTimeout(()=>{o.preloadRoute(w,{preloadData:v.getAttribute("preload")!=="false"}),delete a[w.pathname]},200))}function m(h){const g=c(h);if(!g)return;const[,v]=g;typeof r=="function"&&(v.pathname=r(v.pathname)),a[v.pathname]&&(clearTimeout(a[v.pathname]),delete a[v.pathname])}function x(h){if(h.defaultPrevented)return;let g=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!g)return;if(!g.startsWith("https://action/")){const w=new URL(g,qt);if(g=o.parsePath(w.pathname+w.search),!g.startsWith(n))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const v=Ar.get(g);if(v){h.preventDefault();const w=new FormData(h.target,h.submitter);v.call({r:o,f:h.target},h.target.enctype==="multipart/form-data"?w:new URLSearchParams(w))}}Vt(["click","submit"]),document.addEventListener("click",d),t&&(document.addEventListener("mouseover",p),document.addEventListener("mouseout",m),document.addEventListener("focusin",u),document.addEventListener("touchstart",u)),document.addEventListener("submit",x),Y(()=>{document.removeEventListener("click",d),t&&(document.removeEventListener("mouseover",p),document.removeEventListener("mouseout",m),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",x)})}}function Sr(t){const e=()=>({value:window.location.pathname.replace(/^\/+/,"/")+window.location.search+window.location.hash,state:window.history.state}),n=Wt();return xr({get:e,set({value:r,replace:o,scroll:i,state:s}){o?window.history.replaceState(Jn(s),"",r):window.history.pushState(s,"",r),Cr(decodeURIComponent(window.location.hash.slice(1)),i),mt()},init:r=>Er(window,"popstate",er(r,o=>{if(o&&o<0)return!n.confirm(o);{const i=e();return!n.confirm(i.value,{state:i.state})}})),create:kr(t.preload,t.explicitLinks,t.actionBase,t.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(t)}const Fr="_App_1kj2e_1",Tr="_logo_1kj2e_5",Pr="_main_1kj2e_10",Lr="_header_1kj2e_14",_r="_link_1kj2e_25",Rr={App:Fr,logo:Tr,"logo-spin":"_logo-spin_1kj2e_1",main:Pr,header:Lr,link:_r},$r="ucQa5uXzYl8TRIWX",Or=(t,e)=>{const n=/(https|data|http).*?>/g;return t.match(n)?.find(o=>o.includes(e)&&o)?.replace('">',"")?.replaceAll("amp;","")?.replace("autoplay=true","autoplay=false")?.replace("muted=false","muted=true")},Br=async(t,e)=>{try{const n=async(o=1)=>{try{const i=`http://localhost:1337/api/afiliadoId/${t}?page=${o}`,a=await fetch(i,{method:"GET",headers:{"Content-Type":"application/json"},body:null});if(a.ok)return await a.json()}catch(i){console.error(i);return}},r=await n();if(r&&r.length!==0){let o=r,i=[...o.affiliations];for(e&&e(s=>({...s,productos:i,type:"afiliado"})),o.meta.current_page;o.meta.current_page<=o.meta.last_page;o.meta.current_page++){const s=o.meta.links.find(a=>a.label==="Next"||a.label==="Próximo");if(s.url&&(o=await n(new URL(s.url).searchParams.get("page")),i=[...i,...o.affiliations],e&&e(a=>({...a,productos:i,type:"afiliado"}))),o.meta.current_page==o.meta.last_page||!s.url)break}return o.products=i,o}else return[]}catch(n){return console.error(n,"error- getAfiliado"),!1}},jr=async(t,e)=>{try{const n=async(o,i="1")=>{try{return await(await fetch(`https://s-checkout.builderall.com/api/ecommerce/${$r}/items?tag=${o}&page=${i}`)).json()}catch{return null}},r=await n(t);if(r){let o=r,i=[...o.products];for(e&&e(s=>({...s,productos:i,type:"productor"})),o.meta.current_page;o.meta.current_page<=o.meta.last_page&&(o=await n("cursos",new URL(o.meta.links.find(s=>s.label==="Next").url).searchParams.get("page")),i=[...i,...o.products],e&&e(s=>({...s,productos:i,type:"productor"})),o.meta.current_page!=o.meta.last_page);o.meta.current_page++);return o.products=i,o}}catch(n){return console.error(n),!1}},tn=te({cambio:{}}),nn=()=>{const t=ee(tn);if(!t)throw console.log("no existe contexto"),new Error("no existe contexto");return t};let Mr={data:""},Dr=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Mr,Nr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ir=/\/\*[^]*?\*\/|  +/g,Ft=/\n+/g,ie=(t,e)=>{let n="",r="",o="";for(let i in t){let s=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?ie(s,i):i+"{"+ie(s,i[1]=="k"?"":e)+"}":typeof s=="object"?r+=ie(s,e?e.replace(/([^,])+/g,a=>i.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=ie.p?ie.p(i,s):i+":"+s+";")}return n+(e&&o?e+"{"+o+"}":o)+r},X={},rn=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+rn(t[n]);return e}return t},zr=(t,e,n,r,o)=>{let i=rn(t),s=X[i]||(X[i]=(l=>{let c=0,d=11;for(;c<l.length;)d=101*d+l.charCodeAt(c++)>>>0;return"go"+d})(i));if(!X[s]){let l=i!==t?t:(c=>{let d,u,p=[{}];for(;d=Nr.exec(c.replace(Ir,""));)d[4]?p.shift():d[3]?(u=d[3].replace(Ft," ").trim(),p.unshift(p[0][u]=p[0][u]||{})):p[0][d[1]]=d[2].replace(Ft," ").trim();return p[0]})(t);X[s]=ie(o?{["@keyframes "+s]:l}:l,n?"":"."+s)}let a=n&&X.g?X.g:null;return n&&(X.g=X[s]),((l,c,d,u)=>{u?c.data=c.data.replace(u,l):c.data.indexOf(l)===-1&&(c.data=d?l+c.data:c.data+l)})(X[s],e,r,a),s},Hr=(t,e,n)=>t.reduce((r,o,i)=>{let s=e[i];if(s&&s.call){let a=s(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=l?"."+l:a&&typeof a=="object"?a.props?"":ie(a,""):a===!1?"":a}return r+o+(s??"")},"");function je(t){let e=this||{},n=t.call?t(e.p):t;return zr(n.unshift?n.raw?Hr(n,[].slice.call(arguments,1),e.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(e.p):o),{}):n,Dr(e.target),e.g,e.o,e.k)}je.bind({g:1});je.bind({k:1});const Ur=te();function on(t){let e=this||{};return(...n)=>{const r=o=>{const i=ee(Ur),s=B(o,{theme:i}),a=B(s,{get class(){const m=s.class,x="class"in s&&/^go[0-9]+/.test(m);let h=je.apply({target:e.target,o:x,p:s,g:e.g},n);return[m,h].filter(Boolean).join(" ")}}),[l,c]=G(a,["as","theme"]),d=c,u=l.as||t;let p;return typeof u=="function"?p=u(d):e.g==1?(p=document.createElement(u),q(p,d)):p=ht(B({component:u},d)),p};return r.class=o=>I(()=>je.apply({target:e.target,p:o,g:e.g},n)),r}}new Proxy(on,{get(t,e){return t(e)}});function Vr(){const t=on.call({g:1},"div").apply(null,arguments);return function(n){return t(n),null}}const Gr=t=>Vr`
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
.netflix-sans-font-loaded {
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
}
     /* div[data-tag="[I-CURSOS]"]  */
     div#app{
    overflow: visible;
    /* position: static; */
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

.billboard-row .billboard .billboard-pane, .billboard-row .billboard .fill-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.fill-container {
    height: 100%;
    width: 100%;
}

.billboard-row .billboard .info {
    bottom: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 4%;
    position: absolute;
    top: 0;
    width: 36%;
    z-index: 10;
}

.billboard-row .billboard .info .logo-and-text {
    transition: transform 1.5s cubic-bezier(.165,.84,.44,1);
    width: 100%;
}

.billboard-row .billboard .info .billboard-title {
    margin-bottom: 1.2vw;
    min-height: 13.2vw;
    position: relative;
}

.billboard-row .billboard .info .billboard-title .title-logo {
    transform-origin: bottom left;
    width: 100%;
}

.billboard-row .billboard .info .synopsis.no-supplemental {
    margin: .5vw 0 0;
}

.billboard-row .billboard .info .synopsis {
    color: #fff;
    font-size: 1.2vw;
    font-weight: 400;
    line-height: normal;
    margin-top: .1vw;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);
    width: 100%;
}
/* btns */
.billboard-row .billboard .info .billboard-links {
    display: flex;
    line-height: 88%;
    margin-top: 1.5vw;
    white-space: nowrap;
}

.billboard-row .billboard .button-layer {
    position: relative;
    z-index: 10;
}

.bigRowItem .forward-leaning, .billboard-links.forward-leaning {
    margin-top: 1vw;
}

.billboard-row .billboard .info .billboard-links>a, .billboard-row .billboard .info .billboard-links>button {
    flex-shrink: 0;
}

.billboard-row .billboard .info .billboard-links>a {
    align-items: center;
    display: flex;
    justify-content: center;
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
a {
    background-color: transparent;
}
a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
}
a {
    background-color: transparent;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
button {
    overflow: visible;
}
button, select {
    text-transform: none;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
.ltr-podnco {
    -webkit-box-align: center;
    align-items: center;
    appearance: none;
    border: 0px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    padding: 0.8rem;
    position: relative;
    user-select: none;
    will-change: background-color, color;
    word-break: break-word;
    white-space: nowrap;
}
.billboard-links button {
    margin-bottom: 1rem;
    margin-right: 1rem;
}
.ltr-podnco.color-primary {
    background-color: white;
    color: black;
}

.ltr-podnco.hasLabel {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
}

.ltr-podnco.hasIcon {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
}

.billboard-links .playLink button {
    margin-left: 0;
}

.ltr-podnco.hasLabel.hasIcon {
    padding-left: 2rem;
    padding-right: 2.4rem;
}


.ltr-1st24vv {
    line-height: 0;
}
.ltr-1npqywr {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
}
.ltr-1vh9doa {
    -webkit-font-smoothing: antialiased;
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
}

/* btn secundario */

.ltr-18ezbm2 {
    -webkit-box-align: center;
    align-items: center;
    appearance: none;
    border: 0px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    padding: 0.8rem;
    position: relative;
    user-select: none;
    will-change: background-color, color;
    word-break: break-word;
    white-space: nowrap;
}
.billboard-links button {
    margin-bottom: 1rem;
    margin-right: 1rem;
}
.ltr-18ezbm2.color-secondary {
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
}
.ltr-18ezbm2.hasLabel {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
}
.ltr-18ezbm2.hasIcon {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
}
.ltr-18ezbm2.hasLabel.hasIcon {
    padding-left: 2rem;
    padding-right: 2.4rem;
}
.billboard-row .billboard .info .billboard-links>a, .billboard-row .billboard .info .billboard-links>button {
    flex-shrink: 0;
}


.ltr-18ezbm2.color-secondary:not(:disabled):hover {
    background-color: rgba(109, 109, 110, 0.4);
}
.ltr-podnco.color-primary:not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.75);
}



/* populares */
.lolomoRow {
    z-index: 1;
}
.lolomoRow, .rowContainer {
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;
}
.lolomoRow {
    outline: 0;
    position: relative;
}
.lolomoRow.lolomoRow_title_card {
    box-sizing: border-box;
    margin: 3vw 0;
    padding: 0;
}

b, h1, h2, h3, h4, h5, h6, optgroup, strong {
    font-weight: 500;
}
.lolomoRow .rowHeader {
    line-height: 1.3;
    margin: 0;
}
.lolomoRow.lolomoRow_title_card .rowTitle {
    color: #e5e5e5;
    display: inline-block;
    font-size: 1.4vw;
    font-weight: 500;
    margin: 0 4% .5em;
    min-width: 6em;
    text-decoration: none;
}
.lolomoRow.lolomoRow_title_card .rowTitle .row-header-title {
    display: table-cell;
    font-size: 1.4vw;
    line-height: 1.25vw;
    vertical-align: bottom;
}
@media screen and (max-width: 800px) {
    .lolomoRow.lolomoRow_title_card .rowTitle .row-header-title {
        font-size: 12px;
    }
}
/* rowContainer rowContainer_title_card */
.lolomoRow, .rowContainer {
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;
}
.rowContainer {
    position: relative;
    z-index: 0;
}
.rowContainer .rowContent {
    box-sizing: border-box;
    padding: 0;
}
.rowContainer .rowContent .slider {
    z-index: 2;
}
.slider {
    margin: 0;
    padding: 0 4%;
    position: relative;
    touch-action: pan-y;
}
.slider .handle {
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 0;
    width: 4%;
    z-index: 20;
}
.slider .handle.active {
    cursor: pointer;
}
.slider .handle.handlePrev {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    left: -2px;
}
.rowContainer .rowContent .slider .handle {
    background: hsla(0,0%,8%,.5);
}

[class*=" icon-"], [class^=icon-] {
    speak: none;
    font-family: nf-icon;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 1;
    text-transform: none;
    transform: translateZ(0);
}
.slider .handle>.indicator-icon {
    align-self: center;
    display: none;
    font-size: 2.5vw;
    height: auto;
    transition: transform .1s ease-out 0s;
}
.slider .handle.handlePrev .indicator-icon {
    transform-origin: 55% 50%;
}
.slider .handle.handleNext {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    right: 0;
}
.slider .sliderMask {
    overflow-x: hidden;
    padding-bottom: 1px;
}
.slider .sliderMask.showPeek {
    overflow-x: visible;
}
.slider .sliderMask .sliderContent {
    white-space: nowrap;
}
/* card */
.slider .sliderMask .sliderContent .slider-item {
    box-sizing: border-box;
    display: inline-block;
    padding: 0 .2vw;
    position: relative;
    vertical-align: top;
    white-space: normal;
    z-index: 1;
}

@media screen and (min-width: 500px) and (max-width: 799px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 33.333333%;
    }
}
@media screen and (max-width: 499px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 50%;
    }
}
@media screen and (min-width: 800px) and (max-width: 1099px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 25%;
    }
}
@media screen and (min-width: 1100px) and (max-width: 1399px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 20%;
    }
}
@media screen and (min-width: 1400px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 16.66666667%;
    }
}
.slider .sliderMask .sliderContent .slider-item:first-child {
    padding-left: 0;
}
.title-card {
    position: relative;
    z-index: 1;
}
.title-card:not(.loadingTitle) {
    display: block;
}
.title-card .slider-refocus {
    display: block;
}
a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    /* &  */
}
.boxart-rounded {
    border-radius: .2vw;
}
.boxart-size-16x9 {
    padding: 28.125% 0;
}
.boxart-size-16x9, .boxart-size-32x9 {
    height: 0;
    overflow: hidden;
    position: relative;
    width: 100%;
}
img {
    border: 0;
}
.boxart-image-in-padded-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
}
.title-card .boxart-container img {
    cursor: pointer;
}
.fallback-text-container {
    background-color: #222;
    background-image: linear-gradient(transparent,#000);
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
}
.boxart-rounded .fallback-text-container {
    border-radius: 4px;
}
.fallback-text {
    bottom: 0;
    box-sizing: border-box;
    font-size: 1.5em;
    font-weight: 500;
    left: 8%;
    margin: 0;
    overflow: hidden;
    padding: 0 0 10%;
    position: absolute;
    right: 8%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
} */
@media screen and (min-width: 841px) and (max-width: 1280px) and (max-aspect-ratio: 4 / 3) {
    body, html {
        font-size: .75vw;
    }
}

@media screen and (min-width: 841px) and (max-width: 1280px) and (orientation: landscape) {
    body, html {
        font-size: .85vw;
    }
}

@media screen and (min-width: 841px) and (max-width: 1280px) and (orientation: landscape) {
    body, html {
        font-size: .85vw;
    }
}
@media screen and (min-width: 0) and (max-width: 480px) and (max-aspect-ratio: 4 / 3) {
    body, html {
        font-size: 1.5vw;
    }
}
@media screen and (min-width: 481px) and (max-width: 840px) and (max-aspect-ratio: 4 / 3) {
    body, html {
        font-size: 1vw;
    }
}
div[class="popover-arrow"]{
    display: none !important;
}

.popover{
    /* transition: all 0.3s ease; */
}
.scale-up-center {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-9-8 18:45:37
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-up-center
 * ----------------------------------------
 */
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
            /* width: 0px; */
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
            /* width: 430px; */
  }
}

    `();class Wr{#e=[{name:"jsBoostrappopper",to:"body",tag:"script",property:{id:"jsBoostrappopper",src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",integrity:"sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",crossorigin:"anonymous"},active:!1,priority:!0},{name:"SimpleCrypto",to:"body",tag:"script",property:{id:"SimpleCrypto",src:"https://cdn.jsdelivr.net/npm/simple-crypto-js@2.5.0/dist/SimpleCrypto.min.js"},active:!1,priority:!0},{name:"GoogleApis",to:"body",tag:"script",property:{id:"GoogleApis",src:"https://apis.google.com/js/api.js"},active:!1,priority:!0},{name:"html2pdf",to:"head",tag:"script",property:{id:"html2pdf",src:"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",integrity:"sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==",crossorigin:"anonymous",referrerpolicy:"no-referrer"},active:!1,priority:!1},{name:"jsPDF",to:"body",tag:"script",property:{src:"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",type:"module"},active:!1,priority:!1},{name:"html2canvas",to:"body",tag:"script",property:{src:"https://html2canvas.hertzen.com/dist/html2canvas.min.js"},active:!1,priority:!1},{name:"jsBoostrap",to:"body",tag:"script",property:{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",integrity:"sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+",crossorigin:"anonymous"},active:!1,priority:!1},{name:"cssBoostrap",to:"head",tag:"link",property:{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",crossorigin:"anonymous"},active:!0,priority:!1},{name:"bootstrap-icons",to:"head",tag:"link",property:{href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css",rel:"stylesheet"},active:!0,priority:!1},{name:"HTMX.org",to:"body",tag:"script",property:{src:"https://unpkg.com/htmx.org@1.9.6",integrity:"sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",crossorigin:"anonymous"},active:!1,priority:!1},{name:"numeral",to:"body",tag:"script",property:{src:"//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"},active:!0,priority:!1},{name:"Custom.css",to:"head",tag:"style",property:{},innerHTML:`
              :root{
                --bs-primary:linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%);
                --bs-btn-active-border-color :#fff; 
                --color-spinner : #ff1865;
                --bs-btn-bg : #fff !important;
                --primary : linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%);;
              }
              .form-control:focus,.btn:not(:disabled):not(.disabled):active:focus,select:focus {
    
                box-shadow: 0 0 0 0.25rem #ff18651f !important;
                border-color:#fff !important;
              }
              .titleOffCanvas{
                background :linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%) !important;
                background-clip: text !important;
                -webkit-background-clip: text;
                color: transparent;
                font-size: x-large;
                border-color : linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%) !important;
              }
              .btn-primary,.btn-primary-lappiz,.btn{
                font-weight: 700 !important;
                background :linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%) !important;
                border-color : linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%) !important;
              }
              h2[class="accordion-header"]{
                    position: sticky !important;
                    top: 0 !important;
                    z-index: 100 !important;
              }
              .sldt-active{
                z-index: 200000 !important;
              }
    
            `,active:!0,priority:!1},{name:"epayco",to:"body",tag:"script",property:{src:"https://checkout.epayco.co/checkout.js"},active:!1,priority:!1},{name:"bold",to:"head",tag:"script",property:{src:"https://checkout.bold.co/library/boldPaymentButton.js"},active:!1,priority:!1},{name:"wompi",to:"head",tag:"script",property:{src:"https://checkout.wompi.co/widget.js"},active:!1,priority:!1},{name:"highlight.css",to:"head",tag:"link",property:{href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css",rel:"stylesheet"},active:!0,priority:!1},{name:"highlight.js",to:"head",tag:"script",property:{src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"},active:!0,priority:!1},{name:"highlight.execute",to:"body",tag:"script",property:{},innerHTML:"hljs.highlightAll();",active:!1,priority:!1}];constructor(){}async addScript(e){console.log(e),this.#e[this.#e.findIndex(n=>n.name===e)].active=!0,await this.setScript(e)}async setScript(e){(e?this.#e.filter(r=>r.name===e):this.#e).forEach(r=>{const o=document.createElement(r.tag);Object.entries(r.property).forEach(([i,s])=>{o.setAttribute(i,s)}),o.setAttribute("cargado",!1),o.id=r.name,r.hasOwnProperty("innerHTML")&&(o.innerHTML=r.innerHTML,r.innerHTML),document[r.to].querySelector("#"+o.id)||(r.active&&document[r.to].append(o),r.active&&(o.onload=()=>{console.log("LOAD ..."+r.name),o.setAttribute("cargado",!0),r.enabled=!0}))})}}function sn(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=sn(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Q(...t){for(var e=0,n,r,o="";e<t.length;)(n=t[e++])&&(r=sn(n))&&(o&&(o+=" "),o+=r);return o}function qr(t,e,n){const r=e?e.split(" "):[],o=n?n.split(" "):[];t.classList?.remove(...r.filter(i=>o.indexOf(i)===-1)),t.classList?.add(...o.filter(i=>r.indexOf(i)===-1))}var Xr=Function.prototype.bind.call(Function.prototype.call,[].slice);function de(t,e){return Xr(t.querySelectorAll(e))}const ye=!!(typeof window<"u"&&window.document&&window.document.createElement);var dt=!1,ut=!1;try{var Qe={get passive(){return dt=!0},get once(){return ut=dt=!0}};ye&&(window.addEventListener("test",Qe,Qe),window.removeEventListener("test",Qe,!0))}catch{}function an(t,e,n,r){if(r&&typeof r!="boolean"&&!ut){var o=r.once,i=r.capture,s=n;!ut&&o&&(s=n.__once||function a(l){this.removeEventListener(e,a,i),n.call(this,l)},n.__once=s),t.addEventListener(e,s,dt?r:i)}t.addEventListener(e,n,r)}function Tt(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function ft(t,e,n,r){var o=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,o),n.__once&&t.removeEventListener(e,n.__once,o)}function Me(t,e,n,r){return an(t,e,n,r),function(){ft(t,e,n,r)}}function Ve(t){return t&&t.ownerDocument||document}const Kr="data-rr-ui-";function Zr(t){return`${Kr}${t}`}const Yr=te(ye?window:void 0);function ln(){return ee(Yr)}function Je(t){t===void 0&&(t=Ve());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function Qr(t){var e=Ve(t);return e&&e.defaultView||window}function Jr(t,e){return Qr(t).getComputedStyle(t,e)}var eo=/([A-Z])/g;function to(t){return t.replace(eo,"-$1").toLowerCase()}var no=/^ms-/;function Te(t){return to(t).replace(no,"-ms-")}var ro=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function oo(t){return!!(t&&ro.test(t))}function se(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Te(e))||Jr(t).getPropertyValue(Te(e));Object.keys(e).forEach(function(o){var i=e[o];!i&&i!==0?t.style.removeProperty(Te(o)):oo(o)?r+=o+"("+i+") ":n+=Te(o)+": "+i+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}function io(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const Pt=Zr("modal-open");class gt{handleContainerOverflow;isRTL;modals;state;ownerDocument;constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return io(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();e.style={overflow:o.style.overflow,[r]:o.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(se(o,r)||"0",10)+e.scrollBarWidth}px`),o.setAttribute(Pt,""),se(o,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(Pt),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Lt=(t,e)=>ye?t==null?(e||Ve()).body:(typeof t=="function"&&(t=t()),t?.nodeType&&t||null):null;function so(t){const e=ln(),[n,r]=P(Lt(t.ref,e?.document));return U(()=>{t.onResolved&&n()&&t.onResolved(n())}),U(()=>{const o=Lt(t.ref);o!==n()&&r(o)}),n}var cn=z("<div>");let et;function ao(t){return et||(et=new gt({ownerDocument:t?.document})),et}function lo(t){const e=ln(),n=t||ao(e),r={dialog:null,backdrop:null};return Object.assign(r,{add:()=>n.add(r),remove:()=>n.remove(r),isTopModal:()=>n.isTopModal(r),setDialogRef:o=>{r.dialog=o},setBackdropRef:o=>{r.backdrop=o}})}const co={show:!1,role:"dialog",backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,renderBackdrop:t=>(()=>{var e=cn();return q(e,t,!1,!1),e})(),onHide:()=>{}},uo=t=>{const[e,n]=G(B(co,t),["show","role","class","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered","ref"]),r=so({get ref(){return e.container}}),o=lo(e.manager),i=Ne(),[s,a]=P(!1);Nt(()=>a(!0)),Y(()=>a(!1));const[l,c]=P(!e.show);let d=null;e.ref?.(o),Ae(me(()=>e.show,(f,b)=>{ye&&!b&&f&&(d=Je())})),Ae(()=>{!e.transition&&!e.show&&!l()?c(!0):e.show&&l()&&c(!1)});const u=()=>{if(o.add(),v=Me(document,"keydown",h),g=Me(document,"focus",()=>setTimeout(m),!0),e.onShow&&e.onShow(),e.autoFocus){const f=Je(document);o.dialog&&f&&!Tt(o.dialog,f)&&(d=f,o.dialog.focus())}},p=()=>{o.remove(),v?.(),g?.(),e.restoreFocus&&(d?.focus?.(e.restoreFocusOptions),d=null)};U(()=>{!e.show||!r?.()||u()}),U(me(l,(f,b)=>{f&&!(b??f)&&p()})),Y(()=>{p()});const m=()=>{if(!e.enforceFocus||!s()||!o.isTopModal())return;const f=Je();o.dialog&&f&&!Tt(o.dialog,f)&&o.dialog.focus()},x=f=>{f.target===f.currentTarget&&(e.onBackdropClick?.(f),e.backdrop===!0&&e.onHide?.())},h=f=>{e.keyboard&&f.keyCode===27&&o.isTopModal()&&(e.onEscapeKeyDown?.(f),f.defaultPrevented||e.onHide?.())};let g,v;const w=(...f)=>{c(!0),e.onExited?.(...f)},S=$(()=>!!(e.show||e.transition&&!l())),C=B({get role(){return e.role},get ref(){return o.setDialogRef},get"aria-modal"(){return e.role==="dialog"?!0:void 0}},n,{get style(){return e.style},get class(){return e.class},tabIndex:-1}),O=()=>{const f=ge(()=>e.children);return f()?.setAttribute?.("role","document"),f};let E=()=>Ie(i,()=>e.renderDialog?e.renderDialog(C):(()=>{var f=cn();return q(f,C,!1,!0),V(f,O),f})());const j=()=>{const f=e.transition;return f?A(f,{appear:!0,unmountOnExit:!0,get in(){return!!e.show},get onExit(){return e.onExit},get onExiting(){return e.onExiting},onExited:w,get onEnter(){return e.onEnter},get onEntering(){return e.onEntering},get onEntered(){return e.onEntered},children:E}):E},L=()=>{let f=null;if(e.backdrop){const b=e.backdropTransition;f=e.renderBackdrop({ref:o.setBackdropRef,onClick:x}),b&&(f=A(b,{appear:!0,get in(){return!!e.show},children:f}))}return f};return A(we,{get when(){return $(()=>!!r())()&&S()},get children(){return A(Qn,{get mount(){return r()},get children(){return[A(L,{}),A(j,{})]}})}})},fo=Object.assign(uo,{Manager:gt}),_t=te(null);function tt(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}const xe="unmounted",ne="exited",re="entering",pe="entered",Rt="exiting";function ue(){}const po={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ue,onEntering:ue,onEntered:ue,onExit:ue,onExiting:ue,onExited:ue},ho=t=>{const[e,n]=G(B(po,t),["in","children","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);let r=ee(_t),o,i=r&&!r.isMounting?e.enter:e.appear,s,a=null;e.in?i?(s=ne,a=re):s=pe:e.unmountOnExit||e.mountOnEnter?s=xe:s=ne;const[l,c]=P(s);let d=null;const[u,p]=P(!1),m=$(()=>l()!==xe);Nt(()=>{g(!0,a),p(!0)});const x=$(()=>e.in);Ae(me(x,()=>{if(!u())return;const f=l();x()&&f===xe&&c(ne);let b=null;x()?f!==re&&f!==pe&&(b=re):(f===re||f===pe)&&(b=Rt),g(!1,b??ne)})),Y(()=>{S()});function h(){const{timeout:f}=e;let b,F,M;return typeof f=="number"?b=F=M=f:f!=null&&(b=f.exit,F=f.enter,M=f.appear!==void 0?f.appear:F),{exit:b,enter:F,appear:M}}function g(f=!1,b){b!==null?(S(),b===re?v(f):w()):e.unmountOnExit&&l()===ne&&c(xe)}function v(f){const{enter:b}=e,F=r?r.isMounting:f,[M,k]=e.nodeRef?[F]:[o,F],T=h(),y=F?T.appear:T.enter;if(!f&&!b){C(pe,()=>{e.onEntered(M)});return}e.onEnter(M,k),tt(()=>C(re,()=>{e.onEntering(M,k),E(y,()=>{C(pe,()=>{e.onEntered(M,k)})})}))}function w(){const{exit:f}=e,b=h(),F=e.nodeRef?void 0:o;if(!f){C(ne,()=>{e.onExited(F)});return}e.onExit(F),tt(()=>C(Rt,()=>{e.onExiting(F),E(b.exit,()=>{C(ne,()=>{e.onExited(F)}),e.unmountOnExit&&tt(()=>{c(xe)})})}))}function S(){d!==null&&(d?.cancel(),d=null)}function C(f,b){b=O(b),c(f),b()}function O(f){let b=!0;return d=(...F)=>{b&&(b=!1,d=null,f(...F))},d.cancel=()=>{b=!1},d}function E(f,b){O(b);const F=e.nodeRef?e.nodeRef:o,M=f==null&&!e.addEndListener;if(!F||M){d&&setTimeout(d,0);return}if(e.addEndListener){const[k,T]=e.nodeRef?[d]:[F,d];e.addEndListener(k,T)}f!=null&&d&&setTimeout(d,f)}let j;function L(){j||(j=ge(()=>e.children));const f=j();return typeof f=="function"?f(l(),n):f}return A(_t.Provider,{value:null,get children(){return A(we,{get when(){return m()},get children(){return L()}})}})},mo=["xxl","xl","lg","md","sm","xs"],dn=te({prefixes:{},breakpoints:mo});function Ge(t,e){const n=ee(dn);return t||n.prefixes[e]||e}function go(){const t=ee(dn);return()=>t.dir==="rtl"}function bo(t){t.offsetHeight}function wo(t,e,n,r){if(r===void 0&&(r=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent(e,n,r),t.dispatchEvent(o)}}function yo(t){var e=se(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function vo(t,e,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||wo(t,"transitionend",!0)},e+n),i=Me(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),i()}}function un(t,e,n,r){n==null&&(n=yo(t)||0);var o=vo(t,n,r),i=Me(t,"transitionend",e);return function(){o(),i()}}function $t(t,e){const n=se(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function xo(t,e){const n=$t(t,"transitionDuration"),r=$t(t,"transitionDelay"),o=un(t,i=>{i.target===t&&(o(),e(i))},n+r)}const Eo={},Co=t=>{const[e,n]=G(B(Eo,t),["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"]);let[r,o]=P();const i=d=>{o(d),e.childRef?.(d)};function s(d){return u=>{d&&r()&&d(r(),u)}}const a={get onEnter(){return s(e.onEnter)},get onEntering(){return s(e.onEntering)},get onEntered(){return s(e.onEntered)},get onExit(){return s(e.onExit)},get onExiting(){return s(e.onExiting)},get onExited(){return s(e.onExited)},get addEndListener(){return s(e.addEndListener)}},l=ge(()=>e.children);function c(){const d=l();return typeof d=="function"?(u,p)=>d(u,{...p,ref:i}):(i(d),d)}return A(ho,B(n,a,{get nodeRef(){return r()},get children(){return c()}}))},Ao={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ko={[re]:"show",[pe]:"show"},fn=t=>{const[e,n]=G(B(Ao,t),["class","children","transitionClasses"]),r=(s,a)=>{bo(s),n.onEnter?.(s,a)};let o,i;return A(Co,B({addEndListener:xo,onEnter:r},n,{children:(s,a)=>{o||(o=ge(()=>e.children));let l=o();for(;typeof l=="function";)l=l();a.ref(l);const c=Q("fade",e.class,ko?.[s],e.transitionClasses?.[s]);return qr(l,i,c),i=c,l}}))};var So=z("<button type=button>");const Fo={"aria-label":"Close"},To=t=>{const[e,n]=G(B(Fo,t),["class","variant"]);return(()=>{var r=So();return q(r,B({get class(){return Q("btn-close",e.variant&&`btn-close-${e.variant}`,e.class)}},n),!1,!1),r})()};var Po=z("<div>");const Lo=t=>e=>(()=>{var n=Po();return q(n,B(e,{get class(){return Q(e.class,t)}}),!1,!1),n})();function bt(t,{Component:e,defaultProps:n={}}={}){return o=>{const[i,s]=G(B({as:e},n,o),["class","bsPrefix","as"]),a=Ge(i.bsPrefix,t);return A(ht,B({get component(){return i.as||"div"},get class(){return Q(i.class,a)}},s))}}function _o(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Ro(t,e){t.classList?t.classList.add(e):_o(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function Ot(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function $o(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=Ot(t.className,e):t.setAttribute("class",Ot(t.className&&t.className.baseVal||"",e))}const fe={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Oo extends gt{adjustAndStore(e,n,r){const o=n.style[e];n.dataset[e]=o,se(n,{[e]:`${parseFloat(se(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],se(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Ro(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";de(n,fe.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,e.scrollBarWidth)),de(n,fe.STICKY_CONTENT).forEach(i=>this.adjustAndStore(o,i,-e.scrollBarWidth)),de(n,fe.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(o,i,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();$o(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";de(n,fe.FIXED_CONTENT).forEach(i=>this.restore(r,i)),de(n,fe.STICKY_CONTENT).forEach(i=>this.restore(o,i)),de(n,fe.NAVBAR_TOGGLER).forEach(i=>this.restore(o,i))}}let nt;function Bo(t){return nt||(nt=new Oo(t)),nt}var Pe;function Bt(t){if((!Pe&&Pe!==0||t)&&ye){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),Pe=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return Pe}const jo=bt("modal-body"),pn=te({onHide(){}});var Mo=z("<div><div>");const Do={},hn=t=>{const[e,n]=G(B(Do,t),["bsPrefix","class","contentClass","centered","size","fullscreen","children","scrollable"]),r=Ge(e.bsPrefix,"modal"),o=`${r}-dialog`,i=typeof e.fullscreen=="string"?`${r}-fullscreen-${e.fullscreen}`:`${r}-fullscreen`;return(()=>{var s=Mo(),a=s.firstChild;return q(s,B(n,{get class(){return Q(o,e.class,e.size&&`${r}-${e.size}`,e.centered&&`${o}-centered`,e.scrollable&&`${o}-scrollable`,e.fullscreen&&i)}}),!1,!0),V(a,()=>e.children),H(()=>Ue(a,Q(`${r}-content`,e.contentClass,e.contentClass))),s})()},No=bt("modal-footer");var Io=z("<div>");const zo={closeLabel:"Close",closeButton:!1},Ho=t=>{const[e,n]=G(B(zo,t),["closeLabel","closeVariant","closeButton","onHide","children"]),r=ee(pn),o=()=>{r?.onHide(),e.onHide?.()};return(()=>{var i=Io();return q(i,n,!1,!0),V(i,()=>e.children,null),V(i,(()=>{var s=$(()=>!!e.closeButton);return()=>s()&&A(To,{get"aria-label"(){return e.closeLabel},get variant(){return e.closeVariant},onClick:o})})(),null),i})()},Uo={closeLabel:"Close",closeButton:!1},Vo=t=>{const[e,n]=G(B(Uo,t),["bsPrefix","class"]),r=Ge(e.bsPrefix,"modal-header");return A(Ho,B(n,{get class(){return Q(e.class,r)}}))},Go=Lo("h4"),Wo=bt("modal-title",{Component:Go});var qo=z("<div>"),Xo=z("<div role=dialog>");const Ko={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:hn};function Zo(t){return A(fn,B(t,{timeout:void 0}))}function Yo(t){return A(fn,B(t,{timeout:void 0}))}const Qo=t=>{const[e,n]=G(B(Ko,t),["bsPrefix","class","style","dialogClass","contentClass","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClass","manager"]),[r,o]=P({}),[i,s]=P(!1);let a=!1,l=!1,c=null,d;const u=go(),p=y=>{d=y,n.ref?.(y)},m=Ge(e.bsPrefix,"modal"),x={get onHide(){return e.onHide}};function h(){return e.manager?e.manager:Bo({isRTL:u()})}function g(y){if(!ye)return;const D=h().getScrollbarWidth()>0,ae=y.scrollHeight>Ve(y).documentElement.clientHeight;o({paddingRight:D&&!ae?Bt():void 0,paddingLeft:!D&&ae?Bt():void 0})}const v=()=>{d&&g(d.dialog)};Y(()=>{ft(window,"resize",v),c?.()});const w=()=>{a=!0},S=y=>{a&&d&&y.target===d.dialog&&(l=!0),a=!1},C=()=>{s(!0),c=un(d.dialog,()=>{s(!1)})},O=y=>{y.target===y.currentTarget&&C()},E=y=>{if(e.backdrop==="static"){O(y);return}if(l||y.target!==y.currentTarget){l=!1;return}e.onHide?.()},j=y=>{!e.keyboard&&e.backdrop==="static"?(y.preventDefault(),C()):e.keyboard&&e.onEscapeKeyDown&&e.onEscapeKeyDown(y)},L=(y,...D)=>{y&&(y.style.display="block",g(y)),e.onEnter?.(y,...D)},f=(...y)=>{c?.(),e.onExit?.(...y)},b=(...y)=>{e.onEntering?.(...y),an(window,"resize",v)},F=y=>{y&&(y.style.display=""),e.onExited?.(y),ft(window,"resize",v)},M=y=>(()=>{var D=qo();return q(D,B(y,{get class(){return Q(`${m}-backdrop`,e.backdropClass,!e.animation&&"show")}}),!1,!1),D})(),k=()=>{let y={...e.style,...r()};return e.animation||(y.display="block"),y},T=y=>(()=>{var D=Xo();return q(D,B(y,{get style(){return k()},get class(){return Q(e.class,m,i()&&`${m}-static`)},get onClick(){return e.backdrop?E:void 0},onMouseUp:S,get"aria-labelledby"(){return e["aria-labelledby"]}}),!1,!0),V(D,A(ht,B({get component(){return e.dialogAs}},n,{onMouseDown:w,get class(){return e.dialogClass},get contentClass(){return e.contentClass},get children(){return e.children}}))),D})();return A(pn.Provider,{value:x,get children(){return A(fo,{get show(){return e.show},ref:p,get backdrop(){return e.backdrop},get container(){return e.container},keyboard:!0,get autoFocus(){return e.autoFocus},get enforceFocus(){return e.enforceFocus},get restoreFocus(){return e.restoreFocus},get restoreFocusOptions(){return e.restoreFocusOptions},onEscapeKeyDown:j,get onShow(){return e.onShow},get onHide(){return e.onHide},onEnter:L,onEntering:b,get onEntered(){return e.onEntered},onExit:f,get onExiting(){return e.onExiting},onExited:F,get manager(){return h()},get transition(){return e.animation?Zo:void 0},get backdropTransition(){return e.animation?Yo:void 0},renderBackdrop:M,renderDialog:T})}})},Ee=Object.assign(Qo,{Body:jo,Header:Vo,Title:Wo,Footer:No,Dialog:hn,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});function Jo(){const t=nn();console.log("ModalCustom");const{showModal:e,setShowMoal:n,title:r,setTitle:o,content:i,setContent:s,idModal:a,setIdModal:l,roleModal:c,setRoleModal:d,modalFooter:u,setModalFooter:p}=t().modal,[m,x]=P("xxl-down");return P(!0),A(Ee,{ref:h=>{const g=setInterval(()=>{const v=h.parentNode;v&&(clearInterval(g),console.log(v.parentNode.firstElementChild),v.parentNode.firstElementChild.style.zIndex="10000",v.style.zIndex="10000")},200)},style:"z-index: 10000;",get show(){return e()},get fullscreen(){return m()},onHide:()=>{n(null),l(null),p(null),d(null)},size:"xl",scrollable:!0,get children(){return[A(Ee.Header,{closeButton:!0,get children(){return A(Ee.Title,{class:"w-100 d-flex justify-content-between align-items-center",get children(){return r()}})}}),A(Ee.Body,{get id(){return"modal_"+a()},get children(){return i()}}),A(we,{get when(){return u()},get children(){return A(Ee.Footer,{get children(){return u()}})}})]}})}var ei=z("<header>header"),ti=z("<div>"),ni=z("<footer>footer");function ri(t){const e=cr(),[n,r]=P(!1),[o,i]=P(""),[s,a]=P(""),[l,c]=P(""),[d,u]=P(null),[p,m]=P(null),[x,h]=P({productos:[],type:e.afiliadoId?"afiliado":"productor"}),g=$(()=>({productos:x,setProductos:h,modal:{showModal:n,setShowMoal:r,title:o,setTitle:i,content:s,setContent:a,idModal:l,setIdModal:c,roleModal:d,setRoleModal:u,modalFooter:p,setModalFooter:m}})),[v,w]=P("cursos");return U(()=>{console.log(e.afiliadoId)}),yn(e.afiliadoId?()=>Br(e.afiliadoId,h):()=>jr(v(),h)),U(()=>{}),U(()=>{}),new Wr().setScript(),A(tn.Provider,{value:g,get children(){return[A(Jo,{}),A(Gr,{memoData:g}),ei(),(()=>{var S=ti();return V(S,()=>t.children),H(()=>Ue(S,Rr.main)),S})(),ni()]}})}var oi=z("<iframe frameborder=0 allowfullscreen=true>"),ii=z('<div class="slider-item slider-item-"><div><div class=title-card><div class=ptrack-content><a href=# tabindex=-1 class=slider-refocus><div class="boxart-size-16x9 boxart-container boxart-rounded"><img class="boxart-image boxart-image-in-padded-container"alt=""><div class=fallback-text-container aria-hidden=true><p class=fallback-text></p></div></div></a></div><div class=bob-container></div></div></div><div class=scale-up-center style="display:none;border-radius:.2vw;position:absolute;background:#141414 !important;width:100%;height:100%;top:0px;left:0px;z-index:2;box-sizing:border-box;/* transform-origin:0px;*/ top:0px;">');function si(t){const{producto:e,productos:n,i:r}=t,o={afiliado:p=>({img:p.versions[0].image.fullUrl,name:p.versions[0].name}),productor:p=>({img:p.versions[0].image.fullUrl,name:p.versions[0].name,video:Or(p.versions[0].description,"iframe.mediadelivery.net")})},[i,s]=P(!1),[a,l]=P(null);U(()=>{console.log()});let c;const[d,u]=P(null);return(()=>{var p=ii(),m=p.firstChild,x=m.firstChild,h=x.firstChild,g=h.firstChild,v=g.firstChild,w=v.firstChild,S=w.nextSibling,C=S.firstChild,O=m.nextSibling;return at(u,p),st(p,{"z-index":"0"}),m.addEventListener("mouseenter",()=>{let E=0;c=setInterval(()=>{E++;const j=document.querySelector(`div[id="modal-${r()}"]`);j?(clearInterval(c),setTimeout(()=>{j.style.display="block",d().style.zIndex="1",s(!0)},200)):console.log("no"),E===10&&clearInterval(c)},200)}),at(l,x),V(C,()=>o[n().type](e).name),O.addEventListener("mouseleave",()=>{console.log("no-hover");let E=0;c=setInterval(()=>{E++;const j=document.querySelector(`div[id="modal-${r()}"]`);j?(clearInterval(c),setTimeout(()=>{j.style.display="none",d().style.zIndex="0",s(!1)},200)):console.log("no"),E===10&&clearInterval(c)},200)}),V(O,A(we,{get when(){return i()},get children(){var E=oi();return st(E,{"aspect-ratio":"16/9"}),E.style.setProperty("width","100%"),H(()=>K(E,"src",o[n().type](e).video)),E}})),H(E=>{var j=`card-${r()}`,L=`title-card-container ltr-${r()}`,f=`title-card-1-${r()}`,b=o[n().type](e).name,F=o[n().type](e).img,M=`modal-${r()}`;return j!==E.e&&K(p,"id",E.e=j),L!==E.t&&Ue(m,E.t=L),f!==E.a&&K(x,"id",E.a=f),b!==E.o&&K(g,"aria-label",E.o=b),F!==E.i&&K(w,"src",E.i=F),M!==E.n&&K(O,"id",E.n=M),E},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),p})()}var ai=z('<div class=mainView><div class="lolomo is-fullbleed"><h1 class=visually-hidden>i cursos</h1><div class=volatile-billboard-animations-container><div class=billboard-row><div class="billboard billboard-pane billboard-originals trailer-billboard"><div class="billboard-motion dismiss-mask"><div class="motion-background-component bottom-layer full-screen"><div class=hero-image-wrapper><img class="hero static-image image-layer"src="https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABes_NnBj3atXwD8PgPhfVR6YzTMHBs-7PCP-qiAEsLPfZ5uHv1Ft4664--TS9pZ9zQxe0YtsuImIlCt50UnAFxhxLGi-HlWUR0pm.webp?r=2a3"alt=""></div></div></div><div class=fill-container><div class="info meta-layer"><div class="logo-and-text meta-layer"><div class=titleWrapper style="transform-origin:left bottom;transform:scale(1) translate3d(0px, 0px, 0px);transition-duration:1300ms;transition-delay:0ms;"><div class=billboard-title><img alt="The Sinner"class=title-logo src="https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABW4WXvauX1_OL4kWIP5zZvhxXqNlriXvoPazwr_BbtApZ7bqjAJ_mkLmNqVA2F6j0pIWTPFZG6TrKYvNPERwCAqHXICUJdOiy1nE_9rS4kOzkn0isyx2G02EGcUN_v5RTveaaDHCAQidAxzuZGjtXmGx2x7fQHiJ4EoLIGynOiN_wFcxE9cUZQ.webp?r=5b0"title="The Sinner"></div></div><div class=info-wrapper style="transform:translate3d(0px, 0px, 0px);transition-duration:1300ms;transition-delay:0ms;opacity:1;"><div class=info-wrapper-fade style=opacity:1;transition-duration:600ms;transition-delay:200ms;><div class=episode-title-container><div class=synopsis-fade-container><div class="synopsis no-supplemental"><div class=ptrack-content>Bill Pullman was nominated for a SAG Award for playing Harry Ambrose, a somber police detective who works to uncover the motives of unlikely criminals.</div></div></div></div></div></div><div class="billboard-links button-layer forward-leaning"><a href="/watch/80226546?trackId=254015180&amp;tctx=0%2C0%2C6daf96b9-5571-4512-a4b1-efa9f3d969ef-180704821%2CNES_49EF11BDCE6D670FF283500558837C-951BB306AEF2A8-14438BEB43_p_1725749354297%2CNES_49EF11BDCE6D670FF283500558837C_p_1725749354297%2C%2C%2C%2C%2CVideo%3A80175802%2C&amp;ad=true"class="visually-hidden ad-playlink"data-uia=play-button-a11y role=link aria-label="Play - start with Audio Description turned on"><span class=visually-hidden>&nbsp;</span></a><a href="/watch/80226546?trackId=254015180&amp;tctx=0%2C0%2C6daf96b9-5571-4512-a4b1-efa9f3d969ef-180704821%2CNES_49EF11BDCE6D670FF283500558837C-951BB306AEF2A8-14438BEB43_p_1725749354297%2CNES_49EF11BDCE6D670FF283500558837C_p_1725749354297%2C%2C%2C%2C%2CVideo%3A80175802%2C"class=" playLink isToolkit"data-uia=play-button role=link aria-label=Play><button class="color-primary hasLabel hasIcon ltr-podnco"tabindex=-1 type=button><div class=ltr-1st24vv><div class="medium ltr-iyulz3"role=presentation><svg xmlns=http://www.w3.org/2000/svg fill=none role=img viewBox="0 0 24 24"width=24 height=24 data-icon=PlayStandard aria-hidden=true><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"fill=currentColor></path></svg></div></div><div class=ltr-1npqywr style=width:1rem;></div><span class=ltr-1vh9doa>Play</span></button></a><button class="color-secondary hasLabel hasIcon ltr-18ezbm2"data-uia=billboard-more-info type=button><div class=ltr-1st24vv><div class="medium ltr-iyulz3"role=presentation><svg xmlns=http://www.w3.org/2000/svg fill=none role=img viewBox="0 0 24 24"width=24 height=24 data-icon=CircleIStandard aria-hidden=true><path fill-rule=evenodd clip-rule=evenodd d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"fill=currentColor></path></svg></div></div><div class=ltr-1npqywr style=width:1rem;></div><span class=ltr-1vh9doa>More Info</span></button></div></div></div></div></div></div></div><div class="lolomoRow lolomoRow_title_card ltr-0"><h2 class="rowHeader ltr-0"><a href=""class="rowTitle ltr-0"><div class=row-header-title>Populares</div></a></h2><div class="rowContainer rowContainer_title_card"id=row-1><div class=ptrack-container><div class="rowContent slider-hover-trigger-layer"><div class=slider><span class="handle handlePrev active"tabindex=0 role=button aria-label="See previous titles"><b class="indicator-icon icon-leftCaret"></b></span><div class="sliderMask showPeek"><div class="sliderContent row-with-x-columns"style="-webkit-transform:translate3d(0%, 0px, 0px);-ms-transform:translate3d(0%, 0px, 0px);transform:translate3d(0%, 0px, 0px)"></div></div><span class="handle handleNext active"tabindex=0 role=button aria-label="See more titles"><b class="indicator-icon icon-rightCaret">');function li(){const t=nn();console.log(t(),"context"),t().modal;const{productos:e}=t();return U(()=>{}),U(()=>{}),(()=>{var n=ai(),r=n.firstChild,o=r.firstChild,i=o.nextSibling,s=i.nextSibling,a=s.firstChild,l=a.nextSibling,c=l.firstChild,d=c.firstChild,u=d.firstChild,p=u.firstChild,m=p.nextSibling,x=m.firstChild;return V(x,A(Rn,{get each(){return $(()=>e().productos.length!==0)()&&e().productos},children:(h,g)=>A(si,{i:g,producto:h,productos:e})})),n})()}document.getElementById("app");const ci=[{path:"/i-cursos",component:ri,children:[{path:["/","/:afiliadoId"],component:li}]}];setTimeout(()=>{const t=setInterval(()=>{const e=document.querySelector("#app");e&&(clearInterval(t),e&&e.querySelector('div[id="editor-content"]').setAttribute("style","display: none !important;"),Un(()=>A(Sr,{children:ci}),e))},200)});
