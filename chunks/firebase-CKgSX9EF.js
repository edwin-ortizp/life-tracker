const Bp=()=>{};var $c={};/**
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
 */const zh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},jp=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],u=r[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},$h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,u=a?r[i+1]:0,c=i+2<r.length,h=c?r[i+2]:0,f=s>>2,p=(s&3)<<4|u>>4;let g=(u&15)<<2|h>>6,R=h&63;c||(R=64,a||(g=64)),n.push(t[f],t[p],t[g],t[R])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(zh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):jp(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],u=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||u==null||h==null||p==null)throw new qp;const g=s<<2|u>>4;if(n.push(g),h!==64){const R=u<<4&240|h>>2;if(n.push(R),p!==64){const C=h<<6&192|p;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class qp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zp=function(r){const e=zh(r);return $h.encodeByteArray(e,!0)},Is=function(r){return zp(r).replace(/\./g,"")},Gh=function(r){try{return $h.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $p=()=>Kh().__FIREBASE_DEFAULTS__,Gp=()=>{if(typeof process>"u"||typeof $c>"u")return;const r=$c.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Kp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Gh(r[1]);return e&&JSON.parse(e)},Ks=()=>{try{return Bp()||$p()||Gp()||Kp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Wh=r=>{var e,t;return(t=(e=Ks())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Wp=r=>{const e=Wh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Hh=()=>{var r;return(r=Ks())===null||r===void 0?void 0:r.config},Qh=r=>{var e;return(e=Ks())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Hp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function or(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xh(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function Qp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Is(JSON.stringify(t)),Is(JSON.stringify(a)),""].join(".")}const Br={};function Xp(){const r={prod:[],emulator:[]};for(const e of Object.keys(Br))Br[e]?r.emulator.push(e):r.prod.push(e);return r}function Jp(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Gc=!1;function Jh(r,e){if(typeof window>"u"||typeof document>"u"||!or(window.location.host)||Br[r]===e||Br[r]||Gc)return;Br[r]=e;function t(g){return`__firebase__banner__${g}`}const n="__firebase__banner",s=Xp().prod.length>0;function a(){const g=document.getElementById(n);g&&g.remove()}function u(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,R){g.setAttribute("width","24"),g.setAttribute("id",R),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Gc=!0,a()},g}function f(g,R){g.setAttribute("id",R),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Jp(n),R=t("text"),C=document.getElementById(R)||document.createElement("span"),k=t("learnmore"),D=document.getElementById(k)||document.createElement("a"),$=t("preprendIcon"),U=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const L=g.element;u(L),f(D,k);const W=h();c(U,$),L.append(U,C,D,W),document.body.appendChild(L)}s?(C.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Yh(){var r;const e=(r=Ks())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ng(){const r=_e();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Zh(){return!Yh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ed(){return!Yh()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function td(){try{return typeof indexedDB=="object"}catch{return!1}}function rg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const ig="FirebaseError";class gt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ig,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?sg(s,n):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new gt(i,u,n)}}function sg(r,e){return r.replace(og,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const og=/\{\$([^}]+)}/g;function ag(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function mn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(Kc(s)&&Kc(a)){if(!mn(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Kc(r){return r!==null&&typeof r=="object"}/**
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
 */function hi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ug(r,e){const t=new cg(r,e);return t.subscribe.bind(t)}class cg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");lg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=zo),i.error===void 0&&(i.error=zo),i.complete===void 0&&(i.complete=zo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function zo(){}/**
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
 */function fe(r){return r&&r._delegate?r._delegate:r}class pn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class hg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Hp;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fg(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);n===u&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:dg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dg(r){return r===Zt?void 0:r}function fg(r){return r.instantiationMode==="EAGER"}/**
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
 */class mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const pg={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},gg=H.INFO,_g={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},yg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=_g[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=gg,this._logHandler=yg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Ig=(r,e)=>e.some(t=>r instanceof t);let Wc,Hc;function vg(){return Wc||(Wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tg(){return Hc||(Hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nd=new WeakMap,ra=new WeakMap,rd=new WeakMap,$o=new WeakMap,La=new WeakMap;function Eg(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(Nt(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&nd.set(t,r)}).catch(()=>{}),La.set(e,r),e}function wg(r){if(ra.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});ra.set(r,e)}let ia={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ra.get(r);if(e==="objectStoreNames")return r.objectStoreNames||rd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ag(r){ia=r(ia)}function bg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Go(this),e,...t);return rd.set(n,e.sort?e.sort():[e]),Nt(n)}:Tg().includes(r)?function(...e){return r.apply(Go(this),e),Nt(nd.get(this))}:function(...e){return Nt(r.apply(Go(this),e))}}function Rg(r){return typeof r=="function"?bg(r):(r instanceof IDBTransaction&&wg(r),Ig(r,vg())?new Proxy(r,ia):r)}function Nt(r){if(r instanceof IDBRequest)return Eg(r);if($o.has(r))return $o.get(r);const e=Rg(r);return e!==r&&($o.set(r,e),La.set(e,r)),e}const Go=r=>La.get(r);function Pg(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),u=Nt(a);return n&&a.addEventListener("upgradeneeded",c=>{n(Nt(a.result),c.oldVersion,c.newVersion,Nt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const Sg=["get","getKey","getAll","getAllKeys","count"],Cg=["put","add","delete","clear"],Ko=new Map;function Qc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ko.get(e))return Ko.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Cg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Sg.includes(t)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),i&&c.done]))[0]};return Ko.set(e,s),s}Ag(r=>({...r,get:(e,t,n)=>Qc(e,t)||r.get(e,t,n),has:(e,t)=>!!Qc(e,t)||r.has(e,t)}));/**
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
 */class Vg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Dg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sa="@firebase/app",Xc="0.13.2";/**
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
 */const dt=new Ma("@firebase/app"),kg="@firebase/app-compat",Ng="@firebase/analytics-compat",xg="@firebase/analytics",Og="@firebase/app-check-compat",Mg="@firebase/app-check",Lg="@firebase/auth",Fg="@firebase/auth-compat",Ug="@firebase/database",Bg="@firebase/data-connect",jg="@firebase/database-compat",qg="@firebase/functions",zg="@firebase/functions-compat",$g="@firebase/installations",Gg="@firebase/installations-compat",Kg="@firebase/messaging",Wg="@firebase/messaging-compat",Hg="@firebase/performance",Qg="@firebase/performance-compat",Xg="@firebase/remote-config",Jg="@firebase/remote-config-compat",Yg="@firebase/storage",Zg="@firebase/storage-compat",e_="@firebase/firestore",t_="@firebase/ai",n_="@firebase/firestore-compat",r_="firebase",i_="11.10.0";/**
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
 */const oa="[DEFAULT]",s_={[sa]:"fire-core",[kg]:"fire-core-compat",[xg]:"fire-analytics",[Ng]:"fire-analytics-compat",[Mg]:"fire-app-check",[Og]:"fire-app-check-compat",[Lg]:"fire-auth",[Fg]:"fire-auth-compat",[Ug]:"fire-rtdb",[Bg]:"fire-data-connect",[jg]:"fire-rtdb-compat",[qg]:"fire-fn",[zg]:"fire-fn-compat",[$g]:"fire-iid",[Gg]:"fire-iid-compat",[Kg]:"fire-fcm",[Wg]:"fire-fcm-compat",[Hg]:"fire-perf",[Qg]:"fire-perf-compat",[Xg]:"fire-rc",[Jg]:"fire-rc-compat",[Yg]:"fire-gcs",[Zg]:"fire-gcs-compat",[e_]:"fire-fst",[n_]:"fire-fst-compat",[t_]:"fire-vertex","fire-js":"fire-js",[r_]:"fire-js-all"};/**
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
 */const vs=new Map,o_=new Map,aa=new Map;function Jc(r,e){try{r.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function $n(r){const e=r.name;if(aa.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,r);for(const t of vs.values())Jc(t,r);for(const t of o_.values())Jc(t,r);return!0}function Fa(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function We(r){return r==null?!1:r.settings!==void 0}/**
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
 */const a_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new li("app","Firebase",a_);/**
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
 */class u_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const ar=i_;function c_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:oa,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(t||(t=Hh()),!t)throw xt.create("no-options");const s=vs.get(i);if(s){if(mn(t,s.options)&&mn(n,s.config))return s;throw xt.create("duplicate-app",{appName:i})}const a=new mg(i);for(const c of aa.values())a.addComponent(c);const u=new u_(t,n,a);return vs.set(i,u),u}function id(r=oa){const e=vs.get(r);if(!e&&r===oa&&Hh())return c_();if(!e)throw xt.create("no-app",{appName:r});return e}function Ot(r,e,t){var n;let i=(n=s_[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(u.join(" "));return}$n(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const l_="firebase-heartbeat-database",h_=1,Xr="firebase-heartbeat-store";let Wo=null;function sd(){return Wo||(Wo=Pg(l_,h_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Xr)}catch(t){console.warn(t)}}}}).catch(r=>{throw xt.create("idb-open",{originalErrorMessage:r.message})})),Wo}async function d_(r){try{const t=(await sd()).transaction(Xr),n=await t.objectStore(Xr).get(od(r));return await t.done,n}catch(e){if(e instanceof gt)dt.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function Yc(r,e){try{const n=(await sd()).transaction(Xr,"readwrite");await n.objectStore(Xr).put(e,od(r)),await n.done}catch(t){if(t instanceof gt)dt.warn(t.message);else{const n=xt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}function od(r){return`${r.name}!${r.options.appId}`}/**
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
 */const f_=1024,m_=30;class p_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new __(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>m_){const a=y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){dt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zc(),{heartbeatsToSend:n,unsentEntries:i}=g_(this._heartbeatsCache.heartbeats),s=Is(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return dt.warn(t),""}}}function Zc(){return new Date().toISOString().substring(0,10)}function g_(r,e=f_){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),el(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),el(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class __{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return td()?rg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await d_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function el(r){return Is(JSON.stringify({version:2,heartbeats:r})).length}function y_(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function I_(r){$n(new pn("platform-logger",e=>new Vg(e),"PRIVATE")),$n(new pn("heartbeat",e=>new p_(e),"PRIVATE")),Ot(sa,Xc,r),Ot(sa,Xc,"esm2017"),Ot("fire-js","")}I_("");var tl=function(){return tl=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},tl.apply(this,arguments)};function Ua(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function zE(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,s;n<i;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return r.concat(s||Array.prototype.slice.call(e))}function ad(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v_=ad,ud=new li("auth","Firebase",ad());/**
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
 */const Ts=new Ma("@firebase/auth");function T_(r,...e){Ts.logLevel<=H.WARN&&Ts.warn(`Auth (${ar}): ${r}`,...e)}function rs(r,...e){Ts.logLevel<=H.ERROR&&Ts.error(`Auth (${ar}): ${r}`,...e)}/**
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
 */function rt(r,...e){throw ja(r,...e)}function Qe(r,...e){return ja(r,...e)}function Ba(r,e,t){const n=Object.assign(Object.assign({},v_()),{[e]:t});return new li("auth","Firebase",n).create(e,{appName:r.name})}function cn(r){return Ba(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function E_(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&rt(r,"argument-error"),Ba(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ja(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return ud.create(r,...e)}function z(r,e,...t){if(!r)throw ja(e,...t)}function ct(r){const e="INTERNAL ASSERTION FAILED: "+r;throw rs(e),new Error(e)}function ft(r,e){r||ct(e)}/**
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
 */function ua(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function w_(){return nl()==="http:"||nl()==="https:"}function nl(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function A_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w_()||eg()||"connection"in navigator)?navigator.onLine:!0}function b_(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class di{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Yp()||tg()}get(){return A_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qa(r,e){ft(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const R_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const P_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],S_=new di(3e4,6e4);function za(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ur(r,e,t,n,i={}){return ld(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const u=hi(Object.assign({key:r.config.apiKey},a)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:c},s);return Zp()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&or(r.emulatorConfig.host)&&(h.credentials="include"),cd.fetch()(await hd(r,r.config.apiHost,t,u),h)})}async function ld(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},R_),e);try{const i=new V_(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Qi(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[c,h]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(r,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Qi(r,"email-already-in-use",a);if(c==="USER_DISABLED")throw Qi(r,"user-disabled",a);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ba(r,f,h);rt(r,f)}}catch(i){if(i instanceof gt)throw i;rt(r,"network-request-failed",{message:String(i)})}}async function C_(r,e,t,n,i={}){const s=await ur(r,e,t,n,i);return"mfaPendingCredential"in s&&rt(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function hd(r,e,t,n){const i=`${e}${t}?${n}`,s=r,a=s.config.emulator?qa(r.config,i):`${r.config.apiScheme}://${i}`;return P_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class V_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Qe(this.auth,"network-request-failed")),S_.get())})}}function Qi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Qe(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function D_(r,e){return ur(r,"POST","/v1/accounts:delete",e)}async function Es(r,e){return ur(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function jr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function k_(r,e=!1){const t=fe(r),n=await t.getIdToken(e),i=$a(n);z(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:jr(Ho(i.auth_time)),issuedAtTime:jr(Ho(i.iat)),expirationTime:jr(Ho(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ho(r){return Number(r)*1e3}function $a(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gh(t);return i?JSON.parse(i):(rs("Failed to decode base64 JWT payload"),null)}catch(i){return rs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rl(r){const e=$a(r);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof gt&&N_(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function N_({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class x_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ca{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ws(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Jr(r,Es(t,{idToken:n}));z(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dd(s.providerUserInfo):[],u=M_(r.providerData,a),c=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(u!=null&&u.length),f=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new ca(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function O_(r){const e=fe(r);await ws(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M_(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function dd(r){return r.map(e=>{var{providerId:t}=e,n=Ua(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function L_(r,e){const t=await ld(r,{},async()=>{const n=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=await hd(r,i,"/v1/token",`key=${s}`),u=await r._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:u,body:n};return r.emulatorConfig&&or(r.emulatorConfig.host)&&(c.credentials="include"),cd.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function F_(r,e){return ur(r,"POST","/v2/accounts:revokeToken",za(r,e))}/**
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
 */class Bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=rl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await L_(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new Bn;return n&&(z(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function wt(r,e){z(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class He{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Ua(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new x_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ca(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Jr(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return k_(this,e)}reload(){return O_(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ws(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await Jr(this,D_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,u,c,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(u=t.tenantId)!==null&&u!==void 0?u:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:W,isAnonymous:Z,providerData:K,stsTokenManager:v}=t;z(L&&v,e,"internal-error");const _=Bn.fromJSON(this.name,v);z(typeof L=="string",e,"internal-error"),wt(p,e.name),wt(g,e.name),z(typeof W=="boolean",e,"internal-error"),z(typeof Z=="boolean",e,"internal-error"),wt(R,e.name),wt(C,e.name),wt(k,e.name),wt(D,e.name),wt($,e.name),wt(U,e.name);const I=new He({uid:L,auth:e,email:g,emailVerified:W,displayName:p,isAnonymous:Z,photoURL:C,phoneNumber:R,tenantId:k,stsTokenManager:_,createdAt:$,lastLoginAt:U});return K&&Array.isArray(K)&&(I.providerData=K.map(T=>Object.assign({},T))),D&&(I._redirectEventId=D),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new Bn;i.updateFromServerResponse(t);const s=new He({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ws(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Bn;u.updateFromIdToken(n);const c=new He({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ca(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const il=new Map;function lt(r){ft(r instanceof Function,"Expected a class definition");let e=il.get(r);return e?(ft(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,il.set(r,e),e)}/**
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
 */class fd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fd.type="NONE";const sl=fd;/**
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
 */function is(r,e,t){return`firebase:${r}:${e}:${t}`}class jn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=is(this.userKey,i.apiKey,s),this.fullPersistenceKey=is("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Es(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new jn(lt(sl),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||lt(sl);const a=is(n,e.config.apiKey,e.name);let u=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await Es(e,{idToken:f}).catch(()=>{});if(!g)break;p=await He._fromGetAccountInfoResponse(e,g,f)}else p=He._fromJSON(e,f);h!==s&&(u=p),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new jn(s,e,n):(s=c[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new jn(s,e,n))}}/**
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
 */function ol(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Id(e))return"Blackberry";if(vd(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||gd(e))&&!e.includes("edge/"))return"Chrome";if(yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function md(r=_e()){return/firefox\//i.test(r)}function pd(r=_e()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gd(r=_e()){return/crios\//i.test(r)}function _d(r=_e()){return/iemobile/i.test(r)}function yd(r=_e()){return/android/i.test(r)}function Id(r=_e()){return/blackberry/i.test(r)}function vd(r=_e()){return/webos/i.test(r)}function Ga(r=_e()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function U_(r=_e()){var e;return Ga(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function B_(){return ng()&&document.documentMode===10}function Td(r=_e()){return Ga(r)||yd(r)||vd(r)||Id(r)||/windows phone/i.test(r)||_d(r)}/**
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
 */function Ed(r,e=[]){let t;switch(r){case"Browser":t=ol(_e());break;case"Worker":t=`${ol(_e())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ar}/${n}`}/**
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
 */class j_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,u)=>{try{const c=e(s);a(c)}catch(c){u(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function q_(r,e={}){return ur(r,"GET","/v2/passwordPolicy",za(r,e))}/**
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
 */const z_=6;class $_{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:z_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class G_{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new al(this),this.idTokenSubscription=new al(this),this.beforeStateQueue=new j_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lt(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Es(this,{idToken:e}),n=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(We(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ws(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(cn(this));const t=e?fe(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await q_(this),t=new $_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await F_(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ed(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&T_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ws(r){return fe(r)}class al{constructor(e){this.auth=e,this.observer=null,this.addObserver=ug(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K_(r){Ka=r}function W_(r){return Ka.loadJS(r)}function H_(){return Ka.gapiScript}function Q_(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function X_(r,e){const t=Fa(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(mn(s,e??{}))return i;rt(i,"already-initialized")}return t.initialize({options:e})}function J_(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(lt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Y_(r,e,t){const n=Ws(r);z(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=wd(e),{host:a,port:u}=Z_(e),c=u===null?"":`:${u}`,h={url:`${s}//${a}${c}/`},f=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){z(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),z(mn(h,n.config.emulator)&&mn(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,or(a)?(Xh(`${s}//${a}${c}`),Jh("Auth",!0)):ey()}function wd(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Z_(r){const e=wd(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:ul(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:ul(a)}}}function ul(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ey(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ad{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
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
 */async function qn(r,e){return C_(r,"POST","/v1/accounts:signInWithIdp",za(r,e))}/**
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
 */const ty="http://localhost";class gn extends Ad{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Ua(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new gn(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return qn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,qn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qn(e,t)}buildRequest(){const e={requestUri:ty,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hi(t)}return e}}/**
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
 */class Wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fi extends Wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pt extends fi{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
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
 */class St extends fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return St.credential(t,n)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
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
 */class Ct extends fi{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
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
 */class Vt extends fi{constructor(){super("twitter.com")}static credential(e,t){return gn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Vt.credential(t,n)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await He._fromIdTokenResponse(e,n,i),a=cl(n);return new Gn({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=cl(n);return new Gn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function cl(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class As extends gt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,As.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new As(e,t,n,i)}}function bd(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?As._fromErrorAndOperation(r,s,e,n):s})}async function ny(r,e,t=!1){const n=await Jr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Gn._forOperation(r,"link",n)}/**
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
 */async function ry(r,e,t=!1){const{auth:n}=r;if(We(n.app))return Promise.reject(cn(n));const i="reauthenticate";try{const s=await Jr(r,bd(n,i,e,r),t);z(s.idToken,n,"internal-error");const a=$a(s.idToken);z(a,n,"internal-error");const{sub:u}=a;return z(r.uid===u,n,"user-mismatch"),Gn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(n,"user-mismatch"),s}}/**
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
 */async function iy(r,e,t=!1){if(We(r.app))return Promise.reject(cn(r));const n="signIn",i=await bd(r,n,e),s=await Gn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function sy(r,e,t,n){return fe(r).onIdTokenChanged(e,t,n)}function oy(r,e,t){return fe(r).beforeAuthStateChanged(e,t)}function $E(r,e,t,n){return fe(r).onAuthStateChanged(e,t,n)}function GE(r){return fe(r).signOut()}const bs="__sak";/**
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
 */class Rd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bs,"1"),this.storage.removeItem(bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ay=1e3,uy=10;class Pd extends Rd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);B_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uy):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pd.type="LOCAL";const cy=Pd;/**
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
 */class Sd extends Rd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sd.type="SESSION";const Cd=Sd;/**
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
 */function ly(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Hs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(a).map(async h=>h(t.origin,s)),c=await ly(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hs.receivers=[];/**
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
 */function Ha(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class hy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,c)=>{const h=Ha("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ze(){return window}function dy(r){Ze().location.href=r}/**
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
 */function Vd(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function fy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function my(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function py(){return Vd()?self:null}/**
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
 */const Dd="firebaseLocalStorageDb",gy=1,Rs="firebaseLocalStorage",kd="fbase_key";class mi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qs(r,e){return r.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function _y(){const r=indexedDB.deleteDatabase(Dd);return new mi(r).toPromise()}function la(){const r=indexedDB.open(Dd,gy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Rs,{keyPath:kd})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Rs)?e(n):(n.close(),await _y(),e(await la()))})})}async function ll(r,e,t){const n=Qs(r,!0).put({[kd]:e,value:t});return new mi(n).toPromise()}async function yy(r,e){const t=Qs(r,!1).get(e),n=await new mi(t).toPromise();return n===void 0?null:n.value}function hl(r,e){const t=Qs(r,!0).delete(e);return new mi(t).toPromise()}const Iy=800,vy=3;class Nd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await la(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>vy)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hs._getInstance(py()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fy(),!this.activeServiceWorker)return;this.sender=new hy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||my()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await la();return await ll(e,bs,"1"),await hl(e,bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ll(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>yy(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qs(i,!1).getAll();return new mi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Iy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nd.type="LOCAL";const Ty=Nd;new di(3e4,6e4);/**
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
 */function xd(r,e){return e?lt(e):(z(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Qa extends Ad{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ey(r){return iy(r.auth,new Qa(r),r.bypassAuthState)}function wy(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),ry(t,new Qa(r),r.bypassAuthState)}async function Ay(r){const{auth:e,user:t}=r;return z(t,e,"internal-error"),ny(t,new Qa(r),r.bypassAuthState)}/**
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
 */class Od{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ey;case"linkViaPopup":case"linkViaRedirect":return Ay;case"reauthViaPopup":case"reauthViaRedirect":return wy;default:rt(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const by=new di(2e3,1e4);async function KE(r,e,t){if(We(r.app))return Promise.reject(Qe(r,"operation-not-supported-in-this-environment"));const n=Ws(r);E_(r,e,Wa);const i=xd(n,t);return new an(n,"signInViaPopup",e,i).executeNotNull()}class an extends Od{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Ha();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,by.get())};e()}}an.currentPopupAction=null;/**
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
 */const Ry="pendingRedirect",ss=new Map;class Py extends Od{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ss.get(this.auth._key());if(!e){try{const n=await Sy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ss.set(this.auth._key(),e)}return this.bypassAuthState||ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sy(r,e){const t=Dy(e),n=Vy(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Cy(r,e){ss.set(r._key(),e)}function Vy(r){return lt(r._redirectPersistence)}function Dy(r){return is(Ry,r.config.apiKey,r.name)}async function ky(r,e,t=!1){if(We(r.app))return Promise.reject(cn(r));const n=Ws(r),i=xd(n,e),a=await new Py(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Ny=10*60*1e3;class xy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Oy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Md(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ny&&this.cachedEventUids.clear(),this.cachedEventUids.has(dl(e))}saveEventToCache(e){this.cachedEventUids.add(dl(e)),this.lastProcessedEventTime=Date.now()}}function dl(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Md({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Oy(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Md(r);default:return!1}}/**
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
 */async function My(r,e={}){return ur(r,"GET","/v1/projects",e)}/**
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
 */const Ly=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fy=/^https?/;async function Uy(r){if(r.config.emulator)return;const{authorizedDomains:e}=await My(r);for(const t of e)try{if(By(t))return}catch{}rt(r,"unauthorized-domain")}function By(r){const e=ua(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Fy.test(t))return!1;if(Ly.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const jy=new di(3e4,6e4);function fl(){const r=Ze().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function qy(r){return new Promise((e,t)=>{var n,i,s;function a(){fl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fl(),t(Qe(r,"network-request-failed"))},timeout:jy.get()})}if(!((i=(n=Ze().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ze().gapi)===null||s===void 0)&&s.load)a();else{const u=Q_("iframefcb");return Ze()[u]=()=>{gapi.load?a():t(Qe(r,"network-request-failed"))},W_(`${H_()}?onload=${u}`).catch(c=>t(c))}}).catch(e=>{throw os=null,e})}let os=null;function zy(r){return os=os||qy(r),os}/**
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
 */const $y=new di(5e3,15e3),Gy="__/auth/iframe",Ky="emulator/auth/iframe",Wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qy(r){const e=r.config;z(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?qa(e,Ky):`https://${r.config.authDomain}/${Gy}`,n={apiKey:e.apiKey,appName:r.name,v:ar},i=Hy.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${hi(n).slice(1)}`}async function Xy(r){const e=await zy(r),t=Ze().gapi;return z(t,r,"internal-error"),e.open({where:document.body,url:Qy(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wy,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=Qe(r,"network-request-failed"),u=Ze().setTimeout(()=>{s(a)},$y.get());function c(){Ze().clearTimeout(u),i(n)}n.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const Jy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yy=500,Zy=600,eI="_blank",tI="http://localhost";class ml{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nI(r,e,t,n=Yy,i=Zy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const c=Object.assign(Object.assign({},Jy),{width:n.toString(),height:i.toString(),top:s,left:a}),h=_e().toLowerCase();t&&(u=gd(h)?eI:t),md(h)&&(e=e||tI,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[R,C])=>`${g}${R}=${C},`,"");if(U_(h)&&u!=="_self")return rI(e||"",u),new ml(null);const p=window.open(e||"",u,f);z(p,r,"popup-blocked");try{p.focus()}catch{}return new ml(p)}function rI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const iI="__/auth/handler",sI="emulator/auth/handler",oI=encodeURIComponent("fac");async function pl(r,e,t,n,i,s){z(r.config.authDomain,r,"auth-domain-config-required"),z(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:ar,eventId:i};if(e instanceof Wa){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",ag(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof fi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const u=a;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const c=await r._getAppCheckToken(),h=c?`#${oI}=${encodeURIComponent(c)}`:"";return`${aI(r)}?${hi(u).slice(1)}${h}`}function aI({config:r}){return r.emulator?qa(r,sI):`https://${r.authDomain}/${iI}`}/**
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
 */const Qo="webStorageSupport";class uI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cd,this._completeRedirectFn=ky,this._overrideRedirectResult=Cy}async _openPopup(e,t,n,i){var s;ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await pl(e,t,n,ua(),i);return nI(e,a,Ha())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await pl(e,t,n,ua(),i);return dy(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ft(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Xy(e),n=new xy(e);return t.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qo,{type:Qo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qo];a!==void 0&&t(!!a),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Uy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Td()||pd()||Ga()}}const cI=uI;var gl="@firebase/auth",_l="1.10.8";/**
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
 */class lI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dI(r){$n(new pn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=n.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:u,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ed(r)},h=new G_(n,i,s,c);return J_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),$n(new pn("auth-internal",e=>{const t=Ws(e.getProvider("auth").getImmediate());return(n=>new lI(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(gl,_l,hI(r)),Ot(gl,_l,"esm2017")}/**
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
 */const fI=5*60,mI=Qh("authIdTokenMaxAge")||fI;let yl=null;const pI=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>mI)return;const i=t==null?void 0:t.token;yl!==i&&(yl=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WE(r=id()){const e=Fa(r,"auth");if(e.isInitialized())return e.getImmediate();const t=X_(r,{popupRedirectResolver:cI,persistence:[Ty,cy,Cd]}),n=Qh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=pI(s.toString());oy(t,a,()=>a(t.currentUser)),sy(t,u=>a(u))}}const i=Wh("auth");return i&&Y_(t,`http://${i}`),t}function gI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}K_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Qe("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",gI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dI("Browser");var _I="firebase",yI="11.10.0";/**
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
 */Ot(_I,yI,"app");var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mt,Ld;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function I(){}I.prototype=_.prototype,v.D=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(T,E,b){for(var y=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)y[ot-2]=arguments[ot];return _.prototype[E].apply(T,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var E=0;16>E;++E)T[E]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(E=0;16>E;++E)T[E]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],E=v.g[2];var b=v.g[3],y=_+(b^I&(E^b))+T[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=b+(E^_&(I^E))+T[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(I^b&(_^I))+T[2]+606105819&4294967295,E=b+(y<<17&4294967295|y>>>15),y=I+(_^E&(b^_))+T[3]+3250441966&4294967295,I=E+(y<<22&4294967295|y>>>10),y=_+(b^I&(E^b))+T[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(E^_&(I^E))+T[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(I^b&(_^I))+T[6]+2821735955&4294967295,E=b+(y<<17&4294967295|y>>>15),y=I+(_^E&(b^_))+T[7]+4249261313&4294967295,I=E+(y<<22&4294967295|y>>>10),y=_+(b^I&(E^b))+T[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(E^_&(I^E))+T[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(I^b&(_^I))+T[10]+4294925233&4294967295,E=b+(y<<17&4294967295|y>>>15),y=I+(_^E&(b^_))+T[11]+2304563134&4294967295,I=E+(y<<22&4294967295|y>>>10),y=_+(b^I&(E^b))+T[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(E^_&(I^E))+T[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=E+(I^b&(_^I))+T[14]+2792965006&4294967295,E=b+(y<<17&4294967295|y>>>15),y=I+(_^E&(b^_))+T[15]+1236535329&4294967295,I=E+(y<<22&4294967295|y>>>10),y=_+(E^b&(I^E))+T[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^E&(_^I))+T[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^I&(b^_))+T[11]+643717713&4294967295,E=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(E^b))+T[0]+3921069994&4294967295,I=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(I^E))+T[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^E&(_^I))+T[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^I&(b^_))+T[15]+3634488961&4294967295,E=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(E^b))+T[4]+3889429448&4294967295,I=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(I^E))+T[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^E&(_^I))+T[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^I&(b^_))+T[3]+4107603335&4294967295,E=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(E^b))+T[8]+1163531501&4294967295,I=E+(y<<20&4294967295|y>>>12),y=_+(E^b&(I^E))+T[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^E&(_^I))+T[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=E+(_^I&(b^_))+T[7]+1735328473&4294967295,E=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(E^b))+T[12]+2368359562&4294967295,I=E+(y<<20&4294967295|y>>>12),y=_+(I^E^b)+T[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^E)+T[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^I)+T[11]+1839030562&4294967295,E=b+(y<<16&4294967295|y>>>16),y=I+(E^b^_)+T[14]+4259657740&4294967295,I=E+(y<<23&4294967295|y>>>9),y=_+(I^E^b)+T[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^E)+T[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^I)+T[7]+4139469664&4294967295,E=b+(y<<16&4294967295|y>>>16),y=I+(E^b^_)+T[10]+3200236656&4294967295,I=E+(y<<23&4294967295|y>>>9),y=_+(I^E^b)+T[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^E)+T[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^I)+T[3]+3572445317&4294967295,E=b+(y<<16&4294967295|y>>>16),y=I+(E^b^_)+T[6]+76029189&4294967295,I=E+(y<<23&4294967295|y>>>9),y=_+(I^E^b)+T[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^E)+T[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=E+(b^_^I)+T[15]+530742520&4294967295,E=b+(y<<16&4294967295|y>>>16),y=I+(E^b^_)+T[2]+3299628645&4294967295,I=E+(y<<23&4294967295|y>>>9),y=_+(E^(I|~b))+T[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~E))+T[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~I))+T[14]+2878612391&4294967295,E=b+(y<<15&4294967295|y>>>17),y=I+(b^(E|~_))+T[5]+4237533241&4294967295,I=E+(y<<21&4294967295|y>>>11),y=_+(E^(I|~b))+T[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~E))+T[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~I))+T[10]+4293915773&4294967295,E=b+(y<<15&4294967295|y>>>17),y=I+(b^(E|~_))+T[1]+2240044497&4294967295,I=E+(y<<21&4294967295|y>>>11),y=_+(E^(I|~b))+T[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~E))+T[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~I))+T[6]+2734768916&4294967295,E=b+(y<<15&4294967295|y>>>17),y=I+(b^(E|~_))+T[13]+1309151649&4294967295,I=E+(y<<21&4294967295|y>>>11),y=_+(E^(I|~b))+T[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~E))+T[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=E+(_^(b|~I))+T[2]+718787259&4294967295,E=b+(y<<15&4294967295|y>>>17),y=I+(b^(E|~_))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+b&4294967295}n.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var I=_-this.blockSize,T=this.B,E=this.h,b=0;b<_;){if(E==0)for(;b<=I;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<_;)if(T[E++]=v.charCodeAt(b++),E==this.blockSize){i(this,T),E=0;break}}else for(;b<_;)if(T[E++]=v[b++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=_},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var I=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=I&255,I/=256;for(this.u(v),v=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)v[I++]=this.g[_]>>>T&255;return v};function s(v,_){var I=u;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function a(v,_){this.h=_;for(var I=[],T=!0,E=v.length-1;0<=E;E--){var b=v[E]|0;T&&b==_||(I[E]=b,T=!1)}this.g=I}var u={};function c(v){return-128<=v&&128>v?s(v,function(_){return new a([_|0],0>_?-1:0)}):new a([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return D(h(-v));for(var _=[],I=1,T=0;v>=I;T++)_[T]=v/I|0,I*=4294967296;return new a(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return D(f(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),T=p,E=0;E<v.length;E+=8){var b=Math.min(8,v.length-E),y=parseInt(v.substring(E,E+b),_);8>b?(b=h(Math.pow(_,b)),T=T.j(b).add(h(y))):(T=T.j(I),T=T.add(h(y)))}return T}var p=c(0),g=c(1),R=c(16777216);r=a.prototype,r.m=function(){if(k(this))return-D(this).m();for(var v=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);v+=(0<=T?T:4294967296+T)*_,_*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(k(this))return"-"+D(this).toString(v);for(var _=h(Math.pow(v,6)),I=this,T="";;){var E=W(I,_).g;I=$(I,E.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=E,C(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function k(v){return v.h==-1}r.l=function(v){return v=$(this,v),k(v)?-1:C(v)?0:1};function D(v){for(var _=v.g.length,I=[],T=0;T<_;T++)I[T]=~v.g[T];return new a(I,~v.h).add(g)}r.abs=function(){return k(this)?D(this):this},r.add=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],T=0,E=0;E<=_;E++){var b=T+(this.i(E)&65535)+(v.i(E)&65535),y=(b>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);T=y>>>16,b&=65535,y&=65535,I[E]=y<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function $(v,_){return v.add(D(_))}r.j=function(v){if(C(this)||C(v))return p;if(k(this))return k(v)?D(this).j(D(v)):D(D(this).j(v));if(k(v))return D(this.j(D(v)));if(0>this.l(R)&&0>v.l(R))return h(this.m()*v.m());for(var _=this.g.length+v.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<v.g.length;E++){var b=this.i(T)>>>16,y=this.i(T)&65535,ot=v.i(E)>>>16,fr=v.i(E)&65535;I[2*T+2*E]+=y*fr,U(I,2*T+2*E),I[2*T+2*E+1]+=b*fr,U(I,2*T+2*E+1),I[2*T+2*E+1]+=y*ot,U(I,2*T+2*E+1),I[2*T+2*E+2]+=b*ot,U(I,2*T+2*E+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new a(I,0)};function U(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function L(v,_){this.g=v,this.h=_}function W(v,_){if(C(_))throw Error("division by zero");if(C(v))return new L(p,p);if(k(v))return _=W(D(v),_),new L(D(_.g),D(_.h));if(k(_))return _=W(v,D(_)),new L(D(_.g),_.h);if(30<v.g.length){if(k(v)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,T=_;0>=T.l(v);)I=Z(I),T=Z(T);var E=K(I,1),b=K(T,1);for(T=K(T,2),I=K(I,2);!C(T);){var y=b.add(T);0>=y.l(v)&&(E=E.add(I),b=y),T=K(T,1),I=K(I,1)}return _=$(v,E.j(_)),new L(E,_)}for(E=p;0<=v.l(_);){for(I=Math.max(1,Math.floor(v.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(I),y=b.j(_);k(y)||0<y.l(v);)I-=T,b=h(I),y=b.j(_);C(b)&&(b=g),E=E.add(b),v=$(v,y)}return new L(E,v)}r.A=function(v){return W(this,v).h},r.and=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&v.i(T);return new a(I,this.h&v.h)},r.or=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|v.i(T);return new a(I,this.h|v.h)},r.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^v.i(T);return new a(I,this.h^v.h)};function Z(v){for(var _=v.g.length+1,I=[],T=0;T<_;T++)I[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(I,v.h)}function K(v,_){var I=_>>5;_%=32;for(var T=v.g.length-I,E=[],b=0;b<T;b++)E[b]=0<_?v.i(b+I)>>>_|v.i(b+I+1)<<32-_:v.i(b+I);return new a(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ld=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Mt=a}).apply(typeof Il<"u"?Il:typeof self<"u"?self:typeof window<"u"?window:{});var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fd,Or,Ud,as,ha,Bd,jd,qd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xi=="object"&&Xi];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(o,l){if(l)e:{var d=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function p(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function g(o,l,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function R(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,P){for(var x=Array(arguments.length-2),re=2;re<arguments.length;re++)x[re-2]=arguments[re];return l.prototype[A].apply(m,x)}}function k(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function D(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const A=o.length||0,P=m.length||0;o.length=A+P;for(let x=0;x<P;x++)o[A+x]=m[x]}else o.push(m)}}class ${constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var Z=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function K(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function v(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let P=0;P<I.length;P++)d=I[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function E(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){u.setTimeout(()=>{throw o},0)}function y(){var o=Io;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ot{constructor(){this.h=this.g=null}add(l,d){const m=fr.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var fr=new $(()=>new sp,o=>o.reset());class sp{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let mr,pr=!1,Io=new ot,$u=()=>{const o=u.Promise.resolve(void 0);mr=()=>{o.then(op)}};var op=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var l=fr;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}pr=!1};function It(){this.s=this.s,this.C=this.C}It.prototype.s=!1,It.prototype.ma=function(){this.s||(this.s=!0,this.N())},It.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var ap=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function gr(o,l){if(we.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Z){e:{try{W(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:up[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&gr.aa.h.call(this)}}C(gr,we);var up={2:"touch",3:"pen",4:"mouse"};gr.prototype.h=function(){gr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Vi="closure_listenable_"+(1e6*Math.random()|0),cp=0;function lp(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++cp,this.da=this.fa=!1}function Di(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ki(o){this.src=o,this.g={},this.h=0}ki.prototype.add=function(o,l,d,m,A){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var x=To(o,l,m,A);return-1<x?(l=o[x],d||(l.fa=!1)):(l=new lp(l,this.src,P,!!m,A),l.fa=d,o.push(l)),l};function vo(o,l){var d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(Di(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function To(o,l,d,m){for(var A=0;A<o.length;++A){var P=o[A];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return A}return-1}var Eo="closure_lm_"+(1e6*Math.random()|0),wo={};function Gu(o,l,d,m,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Gu(o,l[P],d,m,A);return null}return d=Hu(d),o&&o[Vi]?o.K(l,d,h(m)?!!m.capture:!1,A):hp(o,l,d,!1,m,A)}function hp(o,l,d,m,A,P){if(!l)throw Error("Invalid event type");var x=h(A)?!!A.capture:!!A,re=bo(o);if(re||(o[Eo]=re=new ki(o)),d=re.add(l,d,m,x,P),d.proxy)return d;if(m=dp(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)ap||(A=x),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(Wu(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function dp(){function o(d){return l.call(o.src,o.listener,d)}const l=fp;return o}function Ku(o,l,d,m,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)Ku(o,l[P],d,m,A);else m=h(m)?!!m.capture:!!m,d=Hu(d),o&&o[Vi]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=To(P,d,m,A),-1<d&&(Di(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=bo(o))&&(l=o.g[l.toString()],o=-1,l&&(o=To(l,d,m,A)),(d=-1<o?l[o]:null)&&Ao(d))}function Ao(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Vi])vo(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Wu(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=bo(l))?(vo(d,o),d.h==0&&(d.src=null,l[Eo]=null)):Di(o)}}}function Wu(o){return o in wo?wo[o]:wo[o]="on"+o}function fp(o,l){if(o.da)o=!0;else{l=new gr(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&Ao(o),o=d.call(m,l)}return o}function bo(o){return o=o[Eo],o instanceof ki?o:null}var Ro="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hu(o){return typeof o=="function"?o:(o[Ro]||(o[Ro]=function(l){return o.handleEvent(l)}),o[Ro])}function Ae(){It.call(this),this.i=new ki(this),this.M=this,this.F=null}C(Ae,It),Ae.prototype[Vi]=!0,Ae.prototype.removeEventListener=function(o,l,d,m){Ku(this,o,l,d,m)};function De(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new we(l,o);else if(l instanceof we)l.target=l.target||o;else{var A=l;l=new we(m,o),T(l,A)}if(A=!0,d)for(var P=d.length-1;0<=P;P--){var x=l.g=d[P];A=Ni(x,m,!0,l)&&A}if(x=l.g=o,A=Ni(x,m,!0,l)&&A,A=Ni(x,m,!1,l)&&A,d)for(P=0;P<d.length;P++)x=l.g=d[P],A=Ni(x,m,!1,l)&&A}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)Di(d[m]);delete o.g[l],o.h--}}this.F=null},Ae.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Ae.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function Ni(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var x=l[P];if(x&&!x.da&&x.capture==d){var re=x.listener,ve=x.ha||x.src;x.fa&&vo(o.i,x),A=re.call(ve,m)!==!1&&A}}return A&&!m.defaultPrevented}function Qu(o,l,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Xu(o){o.g=Qu(()=>{o.g=null,o.i&&(o.i=!1,Xu(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class mp extends It{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Xu(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _r(o){It.call(this),this.h=o,this.g={}}C(_r,It);var Ju=[];function Yu(o){K(o.g,function(l,d){this.g.hasOwnProperty(d)&&Ao(l)},o),o.g={}}_r.prototype.N=function(){_r.aa.N.call(this),Yu(this)},_r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Po=u.JSON.stringify,pp=u.JSON.parse,gp=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function So(){}So.prototype.h=null;function Zu(o){return o.h||(o.h=o.i())}function ec(){}var yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Co(){we.call(this,"d")}C(Co,we);function Vo(){we.call(this,"c")}C(Vo,we);var Ht={},tc=null;function xi(){return tc=tc||new Ae}Ht.La="serverreachability";function nc(o){we.call(this,Ht.La,o)}C(nc,we);function Ir(o){const l=xi();De(l,new nc(l))}Ht.STAT_EVENT="statevent";function rc(o,l){we.call(this,Ht.STAT_EVENT,o),this.stat=l}C(rc,we);function ke(o){const l=xi();De(l,new rc(l,o))}Ht.Ma="timingevent";function ic(o,l){we.call(this,Ht.Ma,o),this.size=l}C(ic,we);function vr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Tr(){this.g=!0}Tr.prototype.xa=function(){this.g=!1};function _p(o,l,d,m,A,P){o.info(function(){if(o.g)if(P)for(var x="",re=P.split("&"),ve=0;ve<re.length;ve++){var J=re[ve].split("=");if(1<J.length){var be=J[0];J=J[1];var Re=be.split("_");x=2<=Re.length&&Re[1]=="type"?x+(be+"="+J+"&"):x+(be+"=redacted&")}}else x=null;else x=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+x})}function yp(o,l,d,m,A,P,x){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+P+" "+x})}function bn(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+vp(o,d)+(m?" "+m:"")})}function Ip(o,l){o.info(function(){return"TIMEOUT: "+l})}Tr.prototype.info=function(){};function vp(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var x=1;x<A.length;x++)A[x]=""}}}}return Po(d)}catch{return l}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Do;function Mi(){}C(Mi,So),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Do=new Mi;function vt(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new _r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new oc}function oc(){this.i=null,this.g="",this.h=!1}var ac={},ko={};function No(o,l,d){o.L=1,o.v=Bi(at(l)),o.m=d,o.P=!0,uc(o,null)}function uc(o,l){o.F=Date.now(),Li(o),o.A=at(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Ec(d.i,"t",m),o.C=0,d=o.j.J,o.h=new oc,o.g=Bc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new mp(g(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ju[0]=A.toString()),A=Ju);for(var P=0;P<A.length;P++){var x=Gu(d,A[P],m||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Ir(),_p(o.i,o.u,o.A,o.l,o.R,o.m)}vt.prototype.ca=function(o){o=o.target;const l=this.M;l&&ut(o)==3?l.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{const Re=ut(this.g);var l=this.g.Ba();const Sn=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||Cc(this.g)))){this.J||Re!=4||l==7||(l==8||0>=Sn?Ir(3):Ir(2)),xo(this);var d=this.g.Z();this.X=d;t:if(cc(this)){var m=Cc(this.g);o="";var A=m.length,P=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Er(this);var x="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(P&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=d==200,yp(this.i,this.u,this.A,this.l,this.R,Re,d),this.o){if(this.T&&!this.K){t:{if(this.g){var re,ve=this.g;if((re=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(re)){var J=re;break t}}J=null}if(d=J)bn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oo(this,d);else{this.o=!1,this.s=3,ke(12),Qt(this),Er(this);break e}}if(this.P){d=!0;let Ge;for(;!this.J&&this.C<x.length;)if(Ge=Tp(this,x),Ge==ko){Re==4&&(this.s=4,ke(14),d=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==ac){this.s=4,ke(15),bn(this.i,this.l,x,"[Invalid Chunk]"),d=!1;break}else bn(this.i,this.l,Ge,null),Oo(this,Ge);if(cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||x.length!=0||this.h.h||(this.s=1,ke(16),d=!1),this.o=this.o&&d,!d)bn(this.i,this.l,x,"[Invalid Chunked Response]"),Qt(this),Er(this);else if(0<x.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),jo(be),be.M=!0,ke(11))}}else bn(this.i,this.l,x,null),Oo(this,x);Re==4&&Qt(this),this.o&&!this.J&&(Re==4?Mc(this.j,this):(this.o=!1,Li(this)))}else Fp(this.g),d==400&&0<x.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),Qt(this),Er(this)}}}catch{}finally{}};function cc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Tp(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?ko:(d=Number(l.substring(d,m)),isNaN(d)?ac:(m+=1,m+d>l.length?ko:(l=l.slice(m,m+d),o.C=m+d,l)))}vt.prototype.cancel=function(){this.J=!0,Qt(this)};function Li(o){o.S=Date.now()+o.I,lc(o,o.I)}function lc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=vr(g(o.ba,o),l)}function xo(o){o.B&&(u.clearTimeout(o.B),o.B=null)}vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ip(this.i,this.A),this.L!=2&&(Ir(),ke(17)),Qt(this),this.s=2,Er(this)):lc(this,this.S-o)};function Er(o){o.j.G==0||o.J||Mc(o.j,o)}function Qt(o){xo(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Yu(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Oo(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Mo(d.h,o))){if(!o.K&&Mo(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ki(d),$i(d);else break e;Bo(d),ke(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=vr(g(d.Za,d),6e3));if(1>=fc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jt(d,11)}else if((o.K||d.g==o)&&Ki(d),!U(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let J=A[l];if(d.T=J[0],J=J[1],d.G==2)if(J[0]=="c"){d.K=J[1],d.ia=J[2];const be=J[3];be!=null&&(d.la=be,d.j.info("VER="+d.la));const Re=J[4];Re!=null&&(d.Aa=Re,d.j.info("SVER="+d.Aa));const Sn=J[5];Sn!=null&&typeof Sn=="number"&&0<Sn&&(m=1.5*Sn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ge=o.g;if(Ge){const Hi=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var P=m.h;P.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Lo(P,P.h),P.h=null))}if(m.D){const qo=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(m.ya=qo,ie(m.I,m.D,qo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var x=o;if(m.qa=Uc(m,m.J?m.ia:null,m.W),x.K){mc(m.h,x);var re=x,ve=m.L;ve&&(re.I=ve),re.B&&(xo(re),Li(re)),m.g=x}else xc(m);0<d.i.length&&Gi(d)}else J[0]!="stop"&&J[0]!="close"||Jt(d,7);else d.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Jt(d,7):Uo(d):J[0]!="noop"&&d.l&&d.l.ta(J),d.v=0)}}Ir(4)}catch{}}var Ep=class{constructor(o,l){this.g=o,this.map=l}};function hc(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fc(o){return o.h?1:o.g?o.g.size:0}function Mo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Lo(o,l){o.g?o.g.add(l):o.h=l}function mc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}hc.prototype.cancel=function(){if(this.i=pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return k(o.i)}function wp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function Ap(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function gc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Ap(o),m=wp(o),A=m.length,P=0;P<A;P++)l.call(void 0,m[P],d&&d[P],o)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bp(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var P=o[d].substring(0,m);A=o[d].substring(m+1)}else P=o[d];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Xt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Xt){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var l=o.i,d=new br;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),yc(this,d),this.m=o.m}else o&&(l=String(o).match(_c))?(this.h=!1,Fi(this,l[1]||"",!0),this.o=wr(l[2]||""),this.g=wr(l[3]||"",!0),Ui(this,l[4]),this.l=wr(l[5]||"",!0),yc(this,l[6]||"",!0),this.m=wr(l[7]||"")):(this.h=!1,this.i=new br(null,this.h))}Xt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Ar(l,Ic,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Ar(l,Ic,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ar(d,d.charAt(0)=="/"?Sp:Pp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ar(d,Vp)),o.join("")};function at(o){return new Xt(o)}function Fi(o,l,d){o.j=d?wr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function yc(o,l,d){l instanceof br?(o.i=l,Dp(o.i,o.h)):(d||(l=Ar(l,Cp)),o.i=new br(l,o.h))}function ie(o,l,d){o.i.set(l,d)}function Bi(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function wr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ar(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Rp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Rp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ic=/[#\/\?@]/g,Pp=/[#\?:]/g,Sp=/[#\?]/g,Cp=/[#\?@]/g,Vp=/#/g;function br(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Tt(o){o.g||(o.g=new Map,o.h=0,o.i&&bp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=br.prototype,r.add=function(o,l){Tt(this),this.i=null,o=Rn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function vc(o,l){Tt(o),l=Rn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Tc(o,l){return Tt(o),l=Rn(o,l),o.g.has(l)}r.forEach=function(o,l){Tt(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){Tt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const A=o[m];for(let P=0;P<A.length;P++)d.push(l[m])}return d},r.V=function(o){Tt(this);let l=[];if(typeof o=="string")Tc(this,o)&&(l=l.concat(this.g.get(Rn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},r.set=function(o,l){return Tt(this),this.i=null,o=Rn(this,o),Tc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Ec(o,l,d){vc(o,l),0<d.length&&(o.i=null,o.g.set(Rn(o,l),k(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const P=encodeURIComponent(String(m)),x=this.V(m);for(m=0;m<x.length;m++){var A=P;x[m]!==""&&(A+="="+encodeURIComponent(String(x[m]))),o.push(A)}}return this.i=o.join("&")};function Rn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Dp(o,l){l&&!o.j&&(Tt(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(vc(this,m),Ec(this,A,d))},o)),o.j=l}function kp(o,l){const d=new Tr;if(u.Image){const m=new Image;m.onload=R(Et,d,"TestLoadImage: loaded",!0,l,m),m.onerror=R(Et,d,"TestLoadImage: error",!1,l,m),m.onabort=R(Et,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=R(Et,d,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Np(o,l){const d=new Tr,m=new AbortController,A=setTimeout(()=>{m.abort(),Et(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?Et(d,"TestPingServer: ok",!0,l):Et(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Et(d,"TestPingServer: error",!1,l)})}function Et(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function xp(){this.g=new gp}function Op(o,l,d){const m=d||"";try{gc(o,function(A,P){let x=A;h(A)&&(x=Po(A)),l.push(m+P+"="+encodeURIComponent(x))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function ji(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ji,So),ji.prototype.g=function(){return new qi(this.l,this.j)},ji.prototype.i=function(o){return function(){return o}}({});function qi(o,l){Ae.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(qi,Ae),r=qi.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Pr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Pr(this)),this.g&&(this.readyState=3,Pr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function wc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Rr(this):Pr(this),this.readyState==3&&wc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Rr(this))},r.Qa=function(o){this.g&&(this.response=o,Rr(this))},r.ga=function(){this.g&&Rr(this)};function Rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Pr(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Pr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ac(o){let l="";return K(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function Fo(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Ac(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ie(o,l,d))}function ue(o){Ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ue,Ae);var Mp=/^https?$/i,Lp=["POST","PUT"];r=ue.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Do.g(),this.v=this.o?Zu(this.o):Zu(Do),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){bc(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Lp,l,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of d)this.g.setRequestHeader(P,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){bc(this,P)}};function bc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Rc(o),zi(o)}function Rc(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),zi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),ue.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Pc(this):this.bb())},r.bb=function(){Pc(this)};function Pc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ut(o)!=4||o.Z()!=2)){if(o.u&&ut(o)==4)Qu(o.Ea,0,o);else if(De(o,"readystatechange"),ut(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=x===0){var A=String(o.D).match(_c)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Mp.test(A?A.toLowerCase():"")}d=m}if(d)De(o,"complete"),De(o,"success");else{o.m=6;try{var P=2<ut(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Rc(o)}}finally{zi(o)}}}}function zi(o,l){if(o.g){Sc(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||De(o,"ready");try{d.onreadystatechange=m}catch{}}}function Sc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function ut(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),pp(l)}};function Cc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Fp(o){const l={};o=(o.g&&2<=ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=E(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[A]||[];l[A]=P,P.push(d)}v(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Vc(o){this.Aa=0,this.i=[],this.j=new Tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sr("baseRetryDelayMs",5e3,o),this.cb=Sr("retryDelaySeedMs",1e4,o),this.Wa=Sr("forwardChannelMaxRetries",2,o),this.wa=Sr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new hc(o&&o.concurrentRequestLimit),this.Da=new xp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Vc.prototype,r.la=8,r.G=1,r.connect=function(o,l,d,m){ke(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Uc(this,null,this.W),Gi(this)};function Uo(o){if(Dc(o),o.G==3){var l=o.U++,d=at(o.I);if(ie(d,"SID",o.K),ie(d,"RID",l),ie(d,"TYPE","terminate"),Cr(o,d),l=new vt(o,o.j,l),l.L=2,l.v=Bi(at(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=Bc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Li(l)}Fc(o)}function $i(o){o.g&&(jo(o),o.g.cancel(),o.g=null)}function Dc(o){$i(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Gi(o){if(!dc(o.h)&&!o.s){o.s=!0;var l=o.Ga;mr||$u(),pr||(mr(),pr=!0),Io.add(l,o),o.B=0}}function Up(o,l){return fc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=vr(g(o.Ga,o,l),Lc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new vt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Nc(this,A,l),d=at(this.I),ie(d,"RID",o),ie(d,"CVER",22),this.D&&ie(d,"X-HTTP-Session-Id",this.D),Cr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Ac(P)))+"&"+l:this.m&&Fo(d,this.m,P)),Lo(this.h,A),this.Ua&&ie(d,"TYPE","init"),this.P?(ie(d,"$req",l),ie(d,"SID","null"),A.T=!0,No(A,d,null)):No(A,d,l),this.G=2}}else this.G==3&&(o?kc(this,o):this.i.length==0||dc(this.h)||kc(this))};function kc(o,l){var d;l?d=l.l:d=o.U++;const m=at(o.I);ie(m,"SID",o.K),ie(m,"RID",d),ie(m,"AID",o.T),Cr(o,m),o.m&&o.o&&Fo(m,o.m,o.o),d=new vt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Nc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Lo(o.h,d),No(d,m,l)}function Cr(o,l){o.H&&K(o.H,function(d,m){ie(l,m,d)}),o.l&&gc({},function(d,m){ie(l,m,d)})}function Nc(o,l,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var A=o.i;let P=-1;for(;;){const x=["count="+d];P==-1?0<d?(P=A[0].g,x.push("ofs="+P)):P=0:x.push("ofs="+P);let re=!0;for(let ve=0;ve<d;ve++){let J=A[ve].g;const be=A[ve].map;if(J-=P,0>J)P=Math.max(0,A[ve].g-100),re=!1;else try{Op(be,x,"req"+J+"_")}catch{m&&m(be)}}if(re){m=x.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function xc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;mr||$u(),pr||(mr(),pr=!0),Io.add(l,o),o.v=0}}function Bo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=vr(g(o.Fa,o),Lc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Oc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=vr(g(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),$i(this),Oc(this))};function jo(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Oc(o){o.g=new vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=at(o.qa);ie(l,"RID","rpc"),ie(l,"SID",o.K),ie(l,"AID",o.T),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(l,"TO",o.ja),ie(l,"TYPE","xmlhttp"),Cr(o,l),o.m&&o.o&&Fo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Bi(at(l)),d.m=null,d.P=!0,uc(d,o)}r.Za=function(){this.C!=null&&(this.C=null,$i(this),Bo(this),ke(19))};function Ki(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Mc(o,l){var d=null;if(o.g==l){Ki(o),jo(o),o.g=null;var m=2}else if(Mo(o.h,l))d=l.D,mc(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=xi(),De(m,new ic(m,d)),Gi(o)}else xc(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&Up(o,l)||m==2&&Bo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:Jt(o,5);break;case 4:Jt(o,10);break;case 3:Jt(o,6);break;default:Jt(o,2)}}}function Lc(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Jt(o,l){if(o.j.info("Error code "+l),l==2){var d=g(o.fb,o),m=o.Xa;const A=!m;m=new Xt(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Fi(m,"https"),Bi(m),A?kp(m.toString(),d):Np(m.toString(),d)}else ke(2);o.G=0,o.l&&o.l.sa(l),Fc(o),Dc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Fc(o){if(o.G=0,o.ka=[],o.l){const l=pc(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ka,l),D(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Uc(o,l,d){var m=d instanceof Xt?at(d):new Xt(d);if(m.g!="")l&&(m.g=l+"."+m.g),Ui(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new Xt(null);m&&Fi(P,m),l&&(P.g=l),A&&Ui(P,A),d&&(P.l=d),m=P}return d=o.D,l=o.ya,d&&l&&ie(m,d,l),ie(m,"VER",o.la),Cr(o,m),m}function Bc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ue(new ji({eb:d})):new ue(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function jc(){}r=jc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Wi(){}Wi.prototype.g=function(o,l){return new Le(o,l)};function Le(o,l){Ae.call(this),this.g=new Vc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!U(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Pn(this)}C(Le,Ae),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Uo(this.g)},Le.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Po(o),o=d);l.i.push(new Ep(l.Ya++,o)),l.G==3&&Gi(l)},Le.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,Le.aa.N.call(this)};function qc(o){Co.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(qc,Co);function zc(){Vo.call(this),this.status=1}C(zc,Vo);function Pn(o){this.g=o}C(Pn,jc),Pn.prototype.ua=function(){De(this.g,"a")},Pn.prototype.ta=function(o){De(this.g,new qc(o))},Pn.prototype.sa=function(o){De(this.g,new zc)},Pn.prototype.ra=function(){De(this.g,"b")},Wi.prototype.createWebChannel=Wi.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,qd=function(){return new Wi},jd=function(){return xi()},Bd=Ht,ha={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,as=Oi,sc.COMPLETE="complete",Ud=sc,ec.EventType=yr,yr.OPEN="a",yr.CLOSE="b",yr.ERROR="c",yr.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,Or=ec,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,Fd=ue}).apply(typeof Xi<"u"?Xi:typeof self<"u"?self:typeof window<"u"?window:{});const vl="@firebase/firestore",Tl="4.8.0";/**
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
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
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
 */let cr="11.10.0";/**
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
 */const _n=new Ma("@firebase/firestore");function On(){return _n.logLevel}function V(r,...e){if(_n.logLevel<=H.DEBUG){const t=e.map(Xa);_n.debug(`Firestore (${cr}): ${r}`,...t)}}function Ne(r,...e){if(_n.logLevel<=H.ERROR){const t=e.map(Xa);_n.error(`Firestore (${cr}): ${r}`,...t)}}function it(r,...e){if(_n.logLevel<=H.WARN){const t=e.map(Xa);_n.warn(`Firestore (${cr}): ${r}`,...t)}}function Xa(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,zd(r,n,t)}function zd(r,e,t){let n=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Ne(n),new Error(n)}function F(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||zd(e,i,n)}function j(r,e){return r}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ze{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class $d{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class II{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class vI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class TI{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){F(this.o===void 0,42304);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ze,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ze)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(F(typeof n.accessToken=="string",31837,{l:n}),new $d(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string",2055,{h:e}),new Te(e)}}class EI{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class wI{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new EI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class El{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){F(this.o===void 0,3512);const n=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new El(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(F(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new El(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function Gd(){return new TextEncoder}/**
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
 */class Ja{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=bI(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function q(r,e){return r<e?-1:r>e?1:0}function da(r,e){let t=0;for(;t<r.length&&t<e.length;){const n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return q(n,i);{const s=Gd(),a=RI(s.encode(wl(r,t)),s.encode(wl(e,t)));return a!==0?a:q(n,i)}}t+=n>65535?2:1}return q(r.length,e.length)}function wl(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function RI(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return q(r[t],e[t]);return q(r.length,e.length)}function Kn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Kd(r){return r+"\0"}/**
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
 */const Al="__name__";class Xe{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Xe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xe?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=Xe.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return q(e.length,t.length)}static compareSegments(e,t){const n=Xe.isNumericId(e),i=Xe.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?Xe.extractNumericId(e).compare(Xe.extractNumericId(t)):da(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mt.fromString(e.substring(4,e.length-2))}}class Y extends Xe{construct(e,t,n){return new Y(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const PI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends Xe{construct(e,t,n){return new ae(e,t,n)}static isValidIdentifier(e){return PI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Al}static keyField(){return new ae([Al])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(s(),i++)}if(s(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(Y.fromString(e))}static fromName(e){return new O(Y.fromString(e).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new Y(e.slice()))}}/**
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
 */function Wd(r,e,t){if(!t)throw new N(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function SI(r,e,t,n){if(e===!0&&n===!0)throw new N(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function bl(r){if(!O.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Rl(r){if(O.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Hd(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Xs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function ge(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xs(r);throw new N(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function de(r,e){const t={typeString:r};return e&&(t.value=e),t}function pi(r,e){if(!Hd(r))throw new N(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new N(S.INVALID_ARGUMENT,t);return!0}/**
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
 */const Pl=-62135596800,Sl=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Sl);return new ee(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pl)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Sl}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(pi(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:de("string",ee._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
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
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ee(0,0))}static max(){return new B(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yr=-1;class Ps{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function fa(r){return r.fields.find(e=>e.kind===2)}function en(r){return r.fields.filter(e=>e.kind!==2)}Ps.UNKNOWN_ID=-1;class us{constructor(e,t){this.fieldPath=e,this.kind=t}}class Zr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Zr(0,Be.min())}}function CI(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=B.fromTimestamp(n===1e9?new ee(t+1,0):new ee(t,n));return new Be(i,O.empty(),e)}function Qd(r){return new Be(r.readTime,r.key,Yr)}class Be{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Be(B.min(),O.empty(),Yr)}static max(){return new Be(B.max(),O.empty(),Yr)}}function Ya(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:q(r.largestBatchId,e.largestBatchId))}/**
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
 */const Xd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function An(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Xd)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,n)=>{t(e)})}static reject(e){return new w((t,n)=>{n(e)})}static waitFor(e){return new w((t,n)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},c=>n(c))}),a=!0,s===i&&t()})}static or(e){let t=w.resolve(!1);for(const n of e)t=t.next(i=>i?w.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new w((n,i)=>{const s=e.length,a=new Array(s);let u=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++u,u===s&&n(a)},f=>i(f))}})}static doWhile(e,t){return new w((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */const Fe="SimpleDb";class Js{static open(e,t,n,i){try{return new Js(t,e.transaction(i,n))}catch(s){throw new qr(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new ze,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new qr(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=Za(n.target.error);this.S.reject(new qr(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(V(Fe,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new DI(t)}}class et{static delete(e){return V(Fe,"Removing database:",e),nn(Kh().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!td())return!1;if(et.F())return!0;const e=_e(),t=et.M(e),n=0<t&&t<10,i=Yd(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,et.M(_e())===12.2&&Ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(V(Fe,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;t(a)},i.onblocked=()=>{n(new qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?n(new N(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new N(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new qr(e,a))},i.onupgradeneeded=s=>{V(Fe,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${a.version}`);this.B.q(a,i.transaction,s.oldVersion,this.version).next(()=>{V(Fe,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const n=t.target;this.L=n.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var n;t.newVersion===null&&(it('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,i){const s=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(e);const u=Js.open(this.db,e,s?"readonly":"readwrite",n),c=i(u).next(h=>(u.v(),h)).catch(h=>(u.abort(h),w.reject(h))).toPromise();return c.catch(()=>{}),await u.D,c}catch(u){const c=u,h=c.name!=="FirebaseError"&&a<3;if(V(Fe,"Transaction failed with error:",c.message,"Retrying:",h),this.close(),!h)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Yd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class VI{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return nn(this.$.delete())}}class qr extends N{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function zt(r){return r.name==="IndexedDbTransactionError"}class DI{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V(Fe,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(V(Fe,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),nn(n)}add(e){return V(Fe,"ADD",this.store.name,e,e),nn(this.store.add(e))}get(e){return nn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V(Fe,"GET",this.store.name,e,t),t))}delete(e){return V(Fe,"DELETE",this.store.name,e),nn(this.store.delete(e))}count(){return V(Fe,"COUNT",this.store.name),nn(this.store.count())}j(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new w((a,u)=>{s.onerror=c=>{u(c.target.error)},s.onsuccess=c=>{a(c.target.result)}})}{const s=this.cursor(n),a=[];return this.J(s,(u,c)=>{a.push(c)}).next(()=>a)}}H(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w((i,s)=>{n.onerror=a=>{s(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}Y(e,t){V(Fe,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const i=this.cursor(n);return this.J(i,(s,a,u)=>u.delete())}X(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.J(i,t)}ee(e){const t=this.cursor({});return new w((n,i)=>{t.onerror=s=>{const a=Za(s.target.error);i(a)},t.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}J(e,t){const n=[];return new w((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const u=a.target.result;if(!u)return void i();const c=new VI(u),h=t(u.primaryKey,u.value,c);if(h instanceof w){const f=h.catch(p=>(c.done(),w.reject(p)));n.push(f)}c.isDone?i():c.W===null?u.continue():u.continue(c.W)}}).next(()=>w.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function nn(r){return new w((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Za(n.target.error);t(i)}})}let Cl=!1;function Za(r){const e=et.M(_e());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Cl||(Cl=!0,setTimeout(()=>{throw n},0)),n}}return r}const zr="IndexBackfiller";class kI{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){V(zr,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.te.re();V(zr,`Documents written: ${t}`)}catch(t){zt(t)?V(zr,"Ignoring IndexedDB error during index backfill: ",t):await An(t)}await this.ne(6e4)})}}class NI{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){const n=new Set;let i=t,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return V(zr,`Processing collection: ${a}`),this.se(e,a,i).next(u=>{i-=u,n.add(a)});s=!1})).next(()=>t-i)}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.oe(i,s)).next(u=>(V(zr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u))).next(()=>a.size)}))}oe(e,t){let n=e;return t.changes.forEach((i,s)=>{const a=Qd(s);Ya(a,n)>0&&(n=a)}),new Be(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}qe.ue=-1;/**
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
 */const Lt=-1;function Ys(r){return r==null}function ei(r){return r===0&&1/r==-1/0}function xI(r){return typeof r=="number"&&Number.isInteger(r)&&!ei(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ss="";function Ve(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Vl(e)),e=OI(r.get(t),e);return Vl(e)}function OI(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case Ss:t+="";break;default:t+=s}}return t}function Vl(r){return r+Ss+""}function Je(r){const e=r.length;if(F(e>=2,64408,{path:r}),e===2)return F(r.charAt(0)===Ss&&r.charAt(1)==="",56145,{path:r}),Y.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const a=r.indexOf(Ss,s);switch((a<0||a>t)&&M(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(s,a);let c;i.length===0?c=u:(i+=u,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,a),i+="\0";break;case"":i+=r.substring(s,a+1);break;default:M(61167,{path:r})}s=a+2}return new Y(n)}/**
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
 */const tn="remoteDocuments",gi="owner",Cn="owner",ti="mutationQueues",MI="userId",Ke="mutations",Dl="batchId",un="userMutationsIndex",kl=["userId","batchId"];/**
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
 */function cs(r,e){return[r,Ve(e)]}function Zd(r,e,t){return[r,Ve(e),t]}const LI={},Wn="documentMutations",Cs="remoteDocumentsV14",FI=["prefixPath","collectionGroup","readTime","documentId"],ls="documentKeyIndex",UI=["prefixPath","collectionGroup","documentId"],ef="collectionGroupIndex",BI=["collectionGroup","readTime","prefixPath","documentId"],ni="remoteDocumentGlobal",ma="remoteDocumentGlobalKey",Hn="targets",tf="queryTargetsIndex",jI=["canonicalId","targetId"],Qn="targetDocuments",qI=["targetId","path"],eu="documentTargetsIndex",zI=["path","targetId"],Vs="targetGlobalKey",ln="targetGlobal",ri="collectionParents",$I=["collectionId","parent"],Xn="clientMetadata",GI="clientId",Zs="bundles",KI="bundleId",eo="namedQueries",WI="name",tu="indexConfiguration",HI="indexId",pa="collectionGroupIndex",QI="collectionGroup",$r="indexState",XI=["indexId","uid"],nf="sequenceNumberIndex",JI=["uid","sequenceNumber"],Gr="indexEntries",YI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],rf="documentKeyIndex",ZI=["indexId","uid","orderedDocumentKey"],to="documentOverlays",ev=["userId","collectionPath","documentId"],ga="collectionPathOverlayIndex",tv=["userId","collectionPath","largestBatchId"],sf="collectionGroupOverlayIndex",nv=["userId","collectionGroup","largestBatchId"],nu="globals",rv="name",of=[ti,Ke,Wn,tn,Hn,gi,ln,Qn,Xn,ni,ri,Zs,eo],iv=[...of,to],af=[ti,Ke,Wn,Cs,Hn,gi,ln,Qn,Xn,ni,ri,Zs,eo,to],uf=af,ru=[...uf,tu,$r,Gr],sv=ru,cf=[...ru,nu],ov=cf;/**
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
 */class _a extends Jd{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function ye(r,e){const t=j(r);return et.N(t.ce,e)}/**
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
 */function Nl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function $t(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function lf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Ee.RED,this.left=i??Ee.EMPTY,this.right=s??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Ee(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ee.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ne{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xl(this.data.getIterator())}getIteratorFrom(e){return new xl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ne(this.comparator);return t.data=e,t}}class xl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Oe{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Oe([])}unionWith(e){let t=new ne(ae.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class hf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hf("Invalid base64 string: "+s):s}}(e);return new me(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const av=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(r){if(F(!!r,39018),typeof r=="string"){let e=0;const t=av.exec(r);if(F(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:se(r.seconds),nanos:se(r.nanos)}}function se(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function pt(r){return typeof r=="string"?me.fromBase64String(r):me.fromUint8Array(r)}/**
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
 */const df="server_timestamp",ff="__type__",mf="__previous_value__",pf="__local_write_time__";function iu(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[ff])===null||t===void 0?void 0:t.stringValue)===df}function no(r){const e=r.mapValue.fields[mf];return iu(e)?no(e):e}function ii(r){const e=mt(r.mapValue.fields[pf].timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class uv{constructor(e,t,n,i,s,a,u,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Ds="(default)";class yn{constructor(e,t){this.projectId=e,this.database=t||Ds}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database===Ds}isEqual(e){return e instanceof yn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const su="__type__",gf="__max__",kt={mapValue:{fields:{__type__:{stringValue:gf}}}},ou="__vector__",Jn="value",hs={nullValue:"NULL_VALUE"};function Ut(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?iu(r)?4:_f(r)?9007199254740991:ro(r)?10:11:M(28295,{value:r})}function st(r,e){if(r===e)return!0;const t=Ut(r);if(t!==Ut(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ii(r).isEqual(ii(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=mt(i.timestampValue),u=mt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return pt(i.bytesValue).isEqual(pt(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return se(i.geoPointValue.latitude)===se(s.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return se(i.integerValue)===se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=se(i.doubleValue),u=se(s.doubleValue);return a===u?ei(a)===ei(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return Kn(r.arrayValue.values||[],e.arrayValue.values||[],st);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Nl(a)!==Nl(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!st(a[c],u[c])))return!1;return!0}(r,e);default:return M(52216,{left:r})}}function si(r,e){return(r.values||[]).find(t=>st(t,e))!==void 0}function Bt(r,e){if(r===e)return 0;const t=Ut(r),n=Ut(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,e.booleanValue);case 2:return function(s,a){const u=se(s.integerValue||s.doubleValue),c=se(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,e);case 3:return Ol(r.timestampValue,e.timestampValue);case 4:return Ol(ii(r),ii(e));case 5:return da(r.stringValue,e.stringValue);case 6:return function(s,a){const u=pt(s),c=pt(a);return u.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=q(u[h],c[h]);if(f!==0)return f}return q(u.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const u=q(se(s.latitude),se(a.latitude));return u!==0?u:q(se(s.longitude),se(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Ml(r.arrayValue,e.arrayValue);case 10:return function(s,a){var u,c,h,f;const p=s.fields||{},g=a.fields||{},R=(u=p[Jn])===null||u===void 0?void 0:u.arrayValue,C=(c=g[Jn])===null||c===void 0?void 0:c.arrayValue,k=q(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Ml(R,C)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===kt.mapValue&&a===kt.mapValue)return 0;if(s===kt.mapValue)return 1;if(a===kt.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=da(c[p],f[p]);if(g!==0)return g;const R=Bt(u[c[p]],h[f[p]]);if(R!==0)return R}return q(c.length,f.length)}(r.mapValue,e.mapValue);default:throw M(23264,{le:t})}}function Ol(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return q(r,e);const t=mt(r),n=mt(e),i=q(t.seconds,n.seconds);return i!==0?i:q(t.nanos,n.nanos)}function Ml(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Bt(t[i],n[i]);if(s)return s}return q(t.length,n.length)}function Yn(r){return ya(r)}function ya(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=mt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return pt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=ya(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${ya(t.fields[a])}`;return i+"}"}(r.mapValue):M(61005,{value:r})}function ds(r){switch(Ut(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=no(r);return e?16+ds(e):16;case 5:return 2*r.stringValue.length;case 6:return pt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+ds(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return $t(n.fields,(s,a)=>{i+=s.length+ds(a)}),i}(r.mapValue);default:throw M(13486,{value:r})}}function oi(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ia(r){return!!r&&"integerValue"in r}function ai(r){return!!r&&"arrayValue"in r}function Ll(r){return!!r&&"nullValue"in r}function Fl(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function fs(r){return!!r&&"mapValue"in r}function ro(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[su])===null||t===void 0?void 0:t.stringValue)===ou}function Kr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return $t(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Kr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function _f(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===gf}const yf={mapValue:{fields:{[su]:{stringValue:ou},[Jn]:{arrayValue:{}}}}};function cv(r){return"nullValue"in r?hs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?oi(yn.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ro(r)?yf:{mapValue:{}}:M(35942,{value:r})}function lv(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?oi(yn.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?yf:"mapValue"in r?ro(r)?{mapValue:{}}:kt:M(61959,{value:r})}function Ul(r,e){const t=Bt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Bl(r,e){const t=Bt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kr(t)}setAll(e){let t=ae.emptyPath(),n={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=u.popLast()}a?n[u.lastSegment()]=Kr(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];fs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){$t(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Ce(Kr(this.value))}}function If(r){const e=[];return $t(r.fields,(t,n)=>{const i=new ae([t]);if(fs(n)){const s=If(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Oe(e)}/**
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
 */class ce{constructor(e,t,n,i,s,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ce(e,0,B.min(),B.min(),B.min(),Ce.empty(),0)}static newFoundDocument(e,t,n,i){return new ce(e,1,t,B.min(),n,i,0)}static newNoDocument(e,t){return new ce(e,2,t,B.min(),B.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new ce(e,3,t,B.min(),B.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zn{constructor(e,t){this.position=e,this.inclusive=t}}function jl(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),t.key):n=Bt(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function ql(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!st(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ks{constructor(e,t="asc"){this.field=e,this.dir=t}}function hv(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class vf{}class Q extends vf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new dv(e,t,n):t==="array-contains"?new pv(e,n):t==="in"?new Rf(e,n):t==="not-in"?new gv(e,n):t==="array-contains-any"?new _v(e,n):new Q(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new fv(e,n):new mv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bt(t,this.value)):t!==null&&Ut(this.value)===Ut(t)&&this.matchesComparison(Bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends vf{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new te(e,t)}matches(e){return er(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function er(r){return r.op==="and"}function va(r){return r.op==="or"}function au(r){return Tf(r)&&er(r)}function Tf(r){for(const e of r.filters)if(e instanceof te)return!1;return!0}function Ta(r){if(r instanceof Q)return r.field.canonicalString()+r.op.toString()+Yn(r.value);if(au(r))return r.filters.map(e=>Ta(e)).join(",");{const e=r.filters.map(t=>Ta(t)).join(",");return`${r.op}(${e})`}}function Ef(r,e){return r instanceof Q?function(n,i){return i instanceof Q&&n.op===i.op&&n.field.isEqual(i.field)&&st(n.value,i.value)}(r,e):r instanceof te?function(n,i){return i instanceof te&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,u)=>s&&Ef(a,i.filters[u]),!0):!1}(r,e):void M(19439)}function wf(r,e){const t=r.filters.concat(e);return te.create(t,r.op)}function Af(r){return r instanceof Q?function(t){return`${t.field.canonicalString()} ${t.op} ${Yn(t.value)}`}(r):r instanceof te?function(t){return t.op.toString()+" {"+t.getFilters().map(Af).join(" ,")+"}"}(r):"Filter"}class dv extends Q{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class fv extends Q{constructor(e,t){super(e,"in",t),this.keys=bf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class mv extends Q{constructor(e,t){super(e,"not-in",t),this.keys=bf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bf(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class pv extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ai(t)&&si(t.arrayValue,this.value)}}class Rf extends Q{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&si(this.value.arrayValue,t)}}class gv extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!si(this.value.arrayValue,t)}}class _v extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ai(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>si(this.value.arrayValue,n))}}/**
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
 */class yv{constructor(e,t=null,n=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Pe=null}}function Ea(r,e=null,t=[],n=[],i=null,s=null,a=null){return new yv(r,e,t,n,i,s,a)}function In(r){const e=j(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ta(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ys(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Yn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Yn(n)).join(",")),e.Pe=t}return e.Pe}function _i(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!hv(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ef(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ql(r.startAt,e.startAt)&&ql(r.endAt,e.endAt)}function Ns(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function xs(r,e){return r.filters.filter(t=>t instanceof Q&&t.field.isEqual(e))}function zl(r,e,t){let n=hs,i=!0;for(const s of xs(r,e)){let a=hs,u=!0;switch(s.op){case"<":case"<=":a=cv(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,u=!1;break;case"!=":case"not-in":a=hs}Ul({value:n,inclusive:i},{value:a,inclusive:u})<0&&(n=a,i=u)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Ul({value:n,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}function $l(r,e,t){let n=kt,i=!0;for(const s of xs(r,e)){let a=kt,u=!0;switch(s.op){case">=":case">":a=lv(s.value),u=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,u=!1;break;case"!=":case"not-in":a=kt}Bl({value:n,inclusive:i},{value:a,inclusive:u})>0&&(n=a,i=u)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Bl({value:n,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class yi{constructor(e,t=null,n=[],i=[],s=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Iv(r,e,t,n,i,s,a,u){return new yi(r,e,t,n,i,s,a,u)}function Ii(r){return new yi(r)}function Gl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Pf(r){return r.collectionGroup!==null}function Wr(r){const e=j(r);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ne(ae.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new ks(s,n))}),t.has(ae.keyField().canonicalString())||e.Te.push(new ks(ae.keyField(),n))}return e.Te}function $e(r){const e=j(r);return e.Ie||(e.Ie=vv(e,Wr(r))),e.Ie}function vv(r,e){if(r.limitType==="F")return Ea(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ks(i.field,s)});const t=r.endAt?new Zn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Zn(r.startAt.position,r.startAt.inclusive):null;return Ea(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function wa(r,e){const t=r.filters.concat([e]);return new yi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Os(r,e,t){return new yi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function io(r,e){return _i($e(r),$e(e))&&r.limitType===e.limitType}function Sf(r){return`${In($e(r))}|lt:${r.limitType}`}function Mn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Af(i)).join(", ")}]`),Ys(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Yn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Yn(i)).join(",")),`Target(${n})`}($e(r))}; limitType=${r.limitType})`}function vi(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):O.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Wr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,u,c){const h=jl(a,u,c);return a.inclusive?h<=0:h<0}(n.startAt,Wr(n),i)||n.endAt&&!function(a,u,c){const h=jl(a,u,c);return a.inclusive?h>=0:h>0}(n.endAt,Wr(n),i))}(r,e)}function Tv(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Cf(r){return(e,t)=>{let n=!1;for(const i of Wr(r)){const s=Ev(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Ev(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(s,a,u){const c=a.data.field(s),h=u.data.field(s);return c!==null&&h!==null?Bt(c,h):M(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
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
 */class _t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$t(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return lf(this.inner)}size(){return this.innerSize}}/**
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
 */const wv=new oe(O.comparator);function Ue(){return wv}const Vf=new oe(O.comparator);function Mr(...r){let e=Vf;for(const t of r)e=e.insert(t.key,t);return e}function Df(r){let e=Vf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ye(){return Hr()}function kf(){return Hr()}function Hr(){return new _t(r=>r.toString(),(r,e)=>r.isEqual(e))}const Av=new oe(O.comparator),bv=new ne(O.comparator);function G(...r){let e=bv;for(const t of r)e=e.add(t);return e}const Rv=new ne(q);function Pv(){return Rv}/**
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
 */function uu(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ei(e)?"-0":e}}function Nf(r){return{integerValue:""+r}}function Sv(r,e){return xI(e)?Nf(e):uu(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this._=void 0}}function Cv(r,e,t){return r instanceof tr?function(i,s){const a={fields:{[ff]:{stringValue:df},[pf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&iu(s)&&(s=no(s)),s&&(a.fields[mf]=s),{mapValue:a}}(t,e):r instanceof nr?Of(r,e):r instanceof rr?Mf(r,e):function(i,s){const a=xf(i,s),u=Kl(a)+Kl(i.Ee);return Ia(a)&&Ia(i.Ee)?Nf(u):uu(i.serializer,u)}(r,e)}function Vv(r,e,t){return r instanceof nr?Of(r,e):r instanceof rr?Mf(r,e):t}function xf(r,e){return r instanceof ui?function(n){return Ia(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class tr extends so{}class nr extends so{constructor(e){super(),this.elements=e}}function Of(r,e){const t=Lf(e);for(const n of r.elements)t.some(i=>st(i,n))||t.push(n);return{arrayValue:{values:t}}}class rr extends so{constructor(e){super(),this.elements=e}}function Mf(r,e){let t=Lf(e);for(const n of r.elements)t=t.filter(i=>!st(i,n));return{arrayValue:{values:t}}}class ui extends so{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Kl(r){return se(r.integerValue||r.doubleValue)}function Lf(r){return ai(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Ff{constructor(e,t){this.field=e,this.transform=t}}function Dv(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof nr&&i instanceof nr||n instanceof rr&&i instanceof rr?Kn(n.elements,i.elements,st):n instanceof ui&&i instanceof ui?st(n.Ee,i.Ee):n instanceof tr&&i instanceof tr}(r.transform,e.transform)}class kv{constructor(e,t){this.version=e,this.transformResults=t}}class pe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pe}static exists(e){return new pe(void 0,e)}static updateTime(e){return new pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ms(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class oo{}function Uf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ti(r.key,pe.none()):new lr(r.key,r.data,pe.none());{const t=r.data,n=Ce.empty();let i=new ne(ae.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new yt(r.key,n,new Oe(i.toArray()),pe.none())}}function Nv(r,e,t){r instanceof lr?function(i,s,a){const u=i.value.clone(),c=Hl(i.fieldTransforms,s,a.transformResults);u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof yt?function(i,s,a){if(!ms(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=Hl(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Bf(i)),c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Qr(r,e,t,n){return r instanceof lr?function(s,a,u,c){if(!ms(s.precondition,a))return u;const h=s.value.clone(),f=Ql(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof yt?function(s,a,u,c){if(!ms(s.precondition,a))return u;const h=Ql(s.fieldTransforms,c,a),f=a.data;return f.setAll(Bf(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,a,u){return ms(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function xv(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=xf(n.transform,i||null);s!=null&&(t===null&&(t=Ce.empty()),t.set(n.field,s))}return t||null}function Wl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Kn(n,i,(s,a)=>Dv(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class lr extends oo{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yt extends oo{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Hl(r,e,t){const n=new Map;F(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,u=e.data.field(s.field);n.set(s.field,Vv(a,u,t[i]))}return n}function Ql(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,Cv(s,a,e))}return n}class Ti extends oo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jf extends oo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cu{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Nv(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=kf();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const c=Uf(a,u);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(t,n)=>Wl(t,n))&&Kn(this.baseMutations,e.baseMutations,(t,n)=>Wl(t,n))}}class lu{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){F(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let i=function(){return Av}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new lu(e,t,n,i)}}/**
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
 */class hu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ov{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,X;function Mv(r){switch(r){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function qf(r){if(r===void 0)return Ne("GRPC error has no .code"),S.UNKNOWN;switch(r){case he.OK:return S.OK;case he.CANCELLED:return S.CANCELLED;case he.UNKNOWN:return S.UNKNOWN;case he.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case he.INTERNAL:return S.INTERNAL;case he.UNAVAILABLE:return S.UNAVAILABLE;case he.UNAUTHENTICATED:return S.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case he.NOT_FOUND:return S.NOT_FOUND;case he.ALREADY_EXISTS:return S.ALREADY_EXISTS;case he.PERMISSION_DENIED:return S.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case he.ABORTED:return S.ABORTED;case he.OUT_OF_RANGE:return S.OUT_OF_RANGE;case he.UNIMPLEMENTED:return S.UNIMPLEMENTED;case he.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:r})}}(X=he||(he={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Lv=new Mt([4294967295,4294967295],0);function Xl(r){const e=Gd().encode(r),t=new Ld;return t.update(e),new Uint8Array(t.digest())}function Jl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mt([t,n],0),new Mt([i,s],0)]}class du{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Lr(`Invalid padding: ${t}`);if(n<0)throw new Lr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Lr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Lr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Mt.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(Mt.fromNumber(n)));return i.compare(Lv)===1&&(i=new Mt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Xl(e),[n,i]=Jl(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(n,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new du(s,i,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;const t=Xl(e),[n,i]=Jl(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(n,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ao{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Ei.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ao(B.min(),i,new oe(q),Ue(),G())}}class Ei{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ei(n,t,G(),G(),G())}}/**
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
 */class ps{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}}class zf{constructor(e,t){this.targetId=e,this.De=t}}class $f{constructor(e,t,n=me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Yl{constructor(){this.ve=0,this.Ce=Zl(),this.Fe=me.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=G(),t=G(),n=G();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:s})}}),new Ei(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Zl()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,F(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Fv{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ue(),this.je=Yi(),this.Je=Yi(),this.He=new oe(q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((n,i)=>{this.nt(i)&&t(i)})}it(e){const t=e.targetId,n=e.De.count,i=this.st(t);if(i){const s=i.target;if(Ns(s))if(n===0){const a=new O(s.path);this.Xe(t,a,ce.newNoDocument(a,B.min()))}else F(n===1,20013,{expectedCount:n});else{const a=this.ot(t);if(a!==n){const u=this._t(e),c=u?this.ut(u,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=pt(n).toUint8Array()}catch(c){if(c instanceof hf)return it("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new du(a,i,s)}catch(c){return it(c instanceof Lr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.fe===0?null:u}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,s,null),i++)}),i}Pt(e){const t=new Map;this.Ge.forEach((s,a)=>{const u=this.st(a);if(u){if(s.current&&Ns(u.target)){const c=new O(u.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,ce.newNoDocument(c,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}});let n=G();this.Je.forEach((s,a)=>{let u=!0;a.forEachWhile(c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(e));const i=new ao(e,t,this.He,this.ze,n);return this.ze=Ue(),this.je=Yi(),this.Je=Yi(),this.He=new oe(q),i}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Yl,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ne(q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ne(q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Yl),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Yi(){return new oe(O.comparator)}function Zl(){return new oe(O.comparator)}const Uv={asc:"ASCENDING",desc:"DESCENDING"},Bv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jv={and:"AND",or:"OR"};class qv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Aa(r,e){return r.useProto3Json||Ys(e)?e:{value:e}}function ir(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function zv(r,e){return ir(r,e.toTimestamp())}function xe(r){return F(!!r,49232),B.fromTimestamp(function(t){const n=mt(t);return new ee(n.seconds,n.nanos)}(r))}function fu(r,e){return ba(r,e).canonicalString()}function ba(r,e){const t=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Kf(r){const e=Y.fromString(r);return F(tm(e),10190,{key:e.toString()}),e}function Ms(r,e){return fu(r.databaseId,e.path)}function hn(r,e){const t=Kf(e);if(t.get(1)!==r.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(Qf(t))}function Wf(r,e){return fu(r.databaseId,e)}function Hf(r){const e=Kf(r);return e.length===4?Y.emptyPath():Qf(e)}function Ra(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Qf(r){return F(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function eh(r,e,t){return{name:Ms(r,e),fields:t.value.mapValue.fields}}function $v(r,e,t){const n=hn(r,e.name),i=xe(e.updateTime),s=e.createTime?xe(e.createTime):B.min(),a=new Ce({mapValue:{fields:e.fields}}),u=ce.newFoundDocument(n,i,s,a);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function Gv(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(F(f===void 0||typeof f=="string",58123),me.fromBase64String(f||"")):(F(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),me.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(h){const f=h.code===void 0?S.UNKNOWN:qf(h.code);return new N(f,h.message||"")}(a);t=new $f(n,i,s,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=hn(r,n.document.name),s=xe(n.document.updateTime),a=n.document.createTime?xe(n.document.createTime):B.min(),u=new Ce({mapValue:{fields:n.document.fields}}),c=ce.newFoundDocument(i,s,a,u),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ps(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=hn(r,n.document),s=n.readTime?xe(n.readTime):B.min(),a=ce.newNoDocument(i,s),u=n.removedTargetIds||[];t=new ps([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=hn(r,n.document),s=n.removedTargetIds||[];t=new ps([],s,i,null)}else{if(!("filter"in e))return M(11601,{At:e});{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new Ov(i,s),u=n.targetId;t=new zf(u,a)}}return t}function Ls(r,e){let t;if(e instanceof lr)t={update:eh(r,e.key,e.value)};else if(e instanceof Ti)t={delete:Ms(r,e.key)};else if(e instanceof yt)t={update:eh(r,e.key,e.data),updateMask:Jv(e.fieldMask)};else{if(!(e instanceof jf))return M(16599,{Rt:e.type});t={verify:Ms(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const u=a.transform;if(u instanceof tr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof rr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ui)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw M(20930,{transform:a.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:zv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M(27497)}(r,e.precondition)),t}function Pa(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?pe.updateTime(xe(s.updateTime)):s.exists!==void 0?pe.exists(s.exists):pe.none()}(e.currentDocument):pe.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(a,u){let c=null;if("setToServerValue"in u)F(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),c=new tr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new nr(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new rr(f)}else"increment"in u?c=new ui(a,u.increment):M(16584,{proto:u});const h=ae.fromServerFormat(u.fieldPath);return new Ff(h,c)}(r,i)):[];if(e.update){e.update.name;const i=hn(r,e.update.name),s=new Ce({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(c){const h=c.fieldPaths||[];return new Oe(h.map(f=>ae.fromServerFormat(f)))}(e.updateMask);return new yt(i,s,a,t,n)}return new lr(i,s,t,n)}if(e.delete){const i=hn(r,e.delete);return new Ti(i,t)}if(e.verify){const i=hn(r,e.verify);return new jf(i,t)}return M(1463,{proto:e})}function Kv(r,e){return r&&r.length>0?(F(e!==void 0,14353),r.map(t=>function(i,s){let a=i.updateTime?xe(i.updateTime):xe(s);return a.isEqual(B.min())&&(a=xe(s)),new kv(a,i.transformResults||[])}(t,e))):[]}function Xf(r,e){return{documents:[Wf(r,e.path)]}}function Jf(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Wf(r,i);const s=function(h){if(h.length!==0)return em(te.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Ln(g.field),direction:Hv(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Aa(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:i}}function Yf(r){let e=Hf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){F(n===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const g=Zf(p);return g instanceof te&&au(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(C){return new ks(Fn(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(t.orderBy));let u=null;t.limit&&(u=function(p){let g;return g=typeof p=="object"?p.value:p,Ys(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,R=p.values||[];return new Zn(R,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,R=p.values||[];return new Zn(R,g)}(t.endAt)),Iv(e,i,a,s,u,"F",c,h)}function Wv(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Fn(t.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Fn(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fn(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fn(t.unaryFilter.field);return Q.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(t){return Q.create(Fn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return te.create(t.compositeFilter.filters.map(n=>Zf(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(r):M(30097,{filter:r})}function Hv(r){return Uv[r]}function Qv(r){return Bv[r]}function Xv(r){return jv[r]}function Ln(r){return{fieldPath:r.canonicalString()}}function Fn(r){return ae.fromServerFormat(r.fieldPath)}function em(r){return r instanceof Q?function(t){if(t.op==="=="){if(Fl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(Ll(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Fl(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(Ll(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:Qv(t.op),value:t.value}}}(r):r instanceof te?function(t){const n=t.getFilters().map(i=>em(i));return n.length===1?n[0]:{compositeFilter:{op:Xv(t.op),filters:n}}}(r):M(54877,{filter:r})}function Jv(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tm(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ht{constructor(e,t,n,i,s=B.min(),a=B.min(),u=me.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nm{constructor(e){this.gt=e}}function Yv(r,e){let t;if(e.document)t=$v(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),i=Tn(e.noDocument.readTime);t=ce.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M(56709);{const n=O.fromSegments(e.unknownDocument.path),i=Tn(e.unknownDocument.version);t=ce.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ee(i[0],i[1]);return B.fromTimestamp(s)}(e.readTime)),t}function th(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Fs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,a){return{name:Ms(s,a.key),fields:a.data.value.mapValue.fields,updateTime:ir(s,a.version.toTimestamp()),createTime:ir(s,a.createTime.toTimestamp())}}(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:vn(e.version)};else{if(!e.isUnknownDocument())return M(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:vn(e.version)}}return n}function Fs(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function vn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Tn(r){const e=new ee(r.seconds,r.nanoseconds);return B.fromTimestamp(e)}function rn(r,e){const t=(e.baseMutations||[]).map(s=>Pa(r.gt,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const u=e.mutations[s+1];a.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Pa(r.gt,s)),i=ee.fromMillis(e.localWriteTimeMs);return new cu(e.batchId,i,t,n)}function Fr(r){const e=Tn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Tn(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){const a=s.documents.length;return F(a===1,1966,{count:a}),$e(Ii(Hf(s.documents[0])))}(r.query):function(s){return $e(Yf(s))}(r.query),new ht(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,me.fromBase64String(r.resumeToken))}function rm(r,e){const t=vn(e.snapshotVersion),n=vn(e.lastLimboFreeSnapshotVersion);let i;i=Ns(e.target)?Xf(r.gt,e.target):Jf(r.gt,e.target).Vt;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:In(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function im(r){const e=Yf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Os(e,e.limit,"L"):e}function Xo(r,e){return new hu(e.largestBatchId,Pa(r.gt,e.overlayMutation))}function nh(r,e){const t=e.path.lastSegment();return[r,Ve(e.path.popLast()),t]}function rh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:vn(n.readTime),documentKey:Ve(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Zv{getBundleMetadata(e,t){return ih(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:Tn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return ih(e).put(function(i){return{bundleId:i.id,createTime:vn(xe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return sh(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:im(s.bundledQuery),readTime:Tn(s.readTime)}}(n)})}saveNamedQuery(e,t){return sh(e).put(function(i){return{name:i.name,readTime:vn(xe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function ih(r){return ye(r,Zs)}function sh(r){return ye(r,eo)}/**
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
 */class uo{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new uo(e,n)}getOverlay(e,t){return Vr(e).get(nh(this.userId,t)).next(n=>n?Xo(this.serializer,n):null)}getOverlays(e,t){const n=Ye();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,a)=>{const u=new hu(t,a);i.push(this.wt(e,u))}),w.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(a=>i.add(Ve(a.getCollectionPath())));const s=[];return i.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);s.push(Vr(e).Y(ga,u))}),w.waitFor(s)}getOverlaysForCollection(e,t,n){const i=Ye(),s=Ve(t),a=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Vr(e).j(ga,a).next(u=>{for(const c of u){const h=Xo(this.serializer,c);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=Ye();let a;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Vr(e).X({index:sf,range:u},(c,h,f)=>{const p=Xo(this.serializer,h);s.size()<i||p.largestBatchId===a?(s.set(p.getKey(),p),a=p.largestBatchId):f.done()}).next(()=>s)}wt(e,t){return Vr(e).put(function(i,s,a){const[u,c,h]=nh(s,a.mutation.key);return{userId:s,collectionPath:c,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ls(i.gt,a.mutation)}}(this.serializer,this.userId,t))}}function Vr(r){return ye(r,to)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{St(e){return ye(e,nu)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?me.fromUint8Array(n):me.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class sn{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(se(e.integerValue));else if("doubleValue"in e){const n=se(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),ei(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),typeof n=="string"&&(n=mt(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(pt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?_f(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):ro(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):M(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const i of Object.keys(n))this.xt(i,t),this.Dt(n[i],t)}Lt(e,t){var n,i;const s=e.fields||{};this.Ct(t,53);const a=Jn,u=((i=(n=s[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(se(u)),this.xt(a,t),this.Dt(s[a],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const i of n)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),O.fromName(e).path.forEach(n=>{this.Ct(t,60),this.$t(n,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}sn.Ut=new sn;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=255;function tT(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function oh(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const a=tT(255&n[s]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(e/8)}class nT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){const t=this.Xt(e),n=oh(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){const t=this.Xt(e),n=oh(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(Dn),this.rn(255)}sn(){this._n(Dn),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===Dn?(this.rn(Dn),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Dn?(this._n(Dn),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class rT{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class iT{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Dr{constructor(){this.un=new nT,this.cn=new rT(this.un),this.ln=new iT(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class on{constructor(e,t,n,i){this.Pn=e,this.Tn=t,this.In=n,this.dn=i}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new on(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:gs(this.In),directionalValue:gs(this.dn),orderedDocumentKey:gs(t),documentKey:n.path.toArray()}}Rn(e,t,n){const i=this.An(e,t,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function At(r,e){let t=r.Pn-e.Pn;return t!==0?t:(t=ah(r.In,e.In),t!==0?t:(t=ah(r.dn,e.dn),t!==0?t:O.comparator(r.Tn,e.Tn)))}function ah(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function gs(r){return ed()?function(t){let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n}(r):r}function uh(r){return typeof r!="string"?r:function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(r)}class ch{constructor(e){this.Vn=new ne((t,n)=>ae.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(e){if(F(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=fa(e);if(t!==void 0&&!this.yn(t))return!1;const n=en(e);let i=new Set,s=0,a=0;for(;s<n.length&&this.yn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){const u=this.Vn.getIterator().getNext();if(!i.has(u.field.canonicalString())){const c=n[s];if(!this.wn(u,c)||!this.Sn(this.mn[a++],c))return!1}++s}for(;s<n.length;++s){const u=n[s];if(a>=this.mn.length||!this.Sn(this.mn[a++],u))return!1}return!0}bn(){if(this.gn)return null;let e=new ne(ae.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new us(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new us(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new us(n.field,n.dir==="asc"?0:1)));return new Ps(Ps.UNKNOWN_ID,this.collectionId,t,Zr.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function sm(r){var e,t;if(F(r instanceof Q||r instanceof te,20012),r instanceof Q){if(r instanceof Rf){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Q.create(r.field,"==",s)))||[];return te.create(i,"or")}return r}const n=r.filters.map(i=>sm(i));return te.create(n,r.op)}function sT(r){if(r.getFilters().length===0)return[];const e=Va(sm(r));return F(om(e),7391),Sa(e)||Ca(e)?[e]:e.getFilters()}function Sa(r){return r instanceof Q}function Ca(r){return r instanceof te&&au(r)}function om(r){return Sa(r)||Ca(r)||function(t){if(t instanceof te&&va(t)){for(const n of t.getFilters())if(!Sa(n)&&!Ca(n))return!1;return!0}return!1}(r)}function Va(r){if(F(r instanceof Q||r instanceof te,34018),r instanceof Q)return r;if(r.filters.length===1)return Va(r.filters[0]);const e=r.filters.map(n=>Va(n));let t=te.create(e,r.op);return t=Us(t),om(t)?t:(F(t instanceof te,64498),F(er(t),40251),F(t.filters.length>1,57927),t.filters.reduce((n,i)=>mu(n,i)))}function mu(r,e){let t;return F(r instanceof Q||r instanceof te,38388),F(e instanceof Q||e instanceof te,25473),t=r instanceof Q?e instanceof Q?function(i,s){return te.create([i,s],"and")}(r,e):lh(r,e):e instanceof Q?lh(e,r):function(i,s){if(F(i.filters.length>0&&s.filters.length>0,48005),er(i)&&er(s))return wf(i,s.getFilters());const a=va(i)?i:s,u=va(i)?s:i,c=a.filters.map(h=>mu(h,u));return te.create(c,"or")}(r,e),Us(t)}function lh(r,e){if(er(e))return wf(e,r.getFilters());{const t=e.filters.map(n=>mu(r,n));return te.create(t,"or")}}function Us(r){if(F(r instanceof Q||r instanceof te,11850),r instanceof Q)return r;const e=r.getFilters();if(e.length===1)return Us(e[0]);if(Tf(r))return r;const t=e.map(i=>Us(i)),n=[];return t.forEach(i=>{i instanceof Q?n.push(i):i instanceof te&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:te.create(n,r.op)}/**
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
 */class oT{constructor(){this.Dn=new pu}addToCollectionParentIndex(e,t){return this.Dn.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(Be.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(Be.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class pu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ne(Y.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ne(Y.comparator)).toArray()}}/**
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
 */const hh="IndexedDbIndexManager",Zi=new Uint8Array(0);class aT{constructor(e,t){this.databaseId=t,this.vn=new pu,this.Cn=new _t(n=>In(n),(n,i)=>_i(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const s={collectionId:n,parent:Ve(i)};return dh(e).put(s)}return w.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Kd(t),""],!1,!0);return dh(e).j(i).next(s=>{for(const a of s){if(a.collectionId!==t)break;n.push(Je(a.parent))}return n})}addFieldIndex(e,t){const n=kr(e),i=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const a=Nn(e);return s.next(u=>{a.put(rh(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=kr(e),i=Nn(e),s=kn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=kr(e),n=kn(e),i=Nn(e);return t.Y().next(()=>n.Y()).next(()=>i.Y())}createTargetIndexes(e,t){return w.forEach(this.Fn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new ch(n).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=kn(e);let i=!0;const s=new Map;return w.forEach(this.Fn(t),a=>this.Mn(e,a).next(u=>{i&&(i=!!u),s.set(a,u)})).next(()=>{if(i){let a=G();const u=[];return w.forEach(s,(c,h)=>{V(hh,`Using index ${function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`}(c)} to execute ${In(t)}`);const f=function(L,W){const Z=fa(W);if(Z===void 0)return null;for(const K of xs(L,Z.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(h,c),p=function(L,W){const Z=new Map;for(const K of en(W))for(const v of xs(L,K.fieldPath))switch(v.op){case"==":case"in":Z.set(K.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return Z.set(K.fieldPath.canonicalString(),v.value),Array.from(Z.values())}return null}(h,c),g=function(L,W){const Z=[];let K=!0;for(const v of en(W)){const _=v.kind===0?zl(L,v.fieldPath,L.startAt):$l(L,v.fieldPath,L.startAt);Z.push(_.value),K&&(K=_.inclusive)}return new Zn(Z,K)}(h,c),R=function(L,W){const Z=[];let K=!0;for(const v of en(W)){const _=v.kind===0?$l(L,v.fieldPath,L.endAt):zl(L,v.fieldPath,L.endAt);Z.push(_.value),K&&(K=_.inclusive)}return new Zn(Z,K)}(h,c),C=this.xn(c,h,g),k=this.xn(c,h,R),D=this.On(c,h,p),$=this.Nn(c.indexId,f,C,g.inclusive,k,R.inclusive,D);return w.forEach($,U=>n.H(U,t.limit).next(L=>{L.forEach(W=>{const Z=O.fromSegments(W.documentKey);a.has(Z)||(a=a.add(Z),u.push(Z))})}))}).next(()=>u)}return w.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=sT(te.create(e.filters,"and")).map(n=>Ea(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,n,i,s,a,u){const c=(t!=null?t.length:1)*Math.max(n.length,s.length),h=c/(t!=null?t.length:1),f=[];for(let p=0;p<c;++p){const g=t?this.Bn(t[p/h]):Zi,R=this.Ln(e,g,n[p%h],i),C=this.kn(e,g,s[p%h],a),k=u.map(D=>this.Ln(e,g,D,!0));f.push(...this.createRange(R,C,k))}return f}Ln(e,t,n,i){const s=new on(e,O.empty(),t,n);return i?s:s.En()}kn(e,t,n,i){const s=new on(e,O.empty(),t,n);return i?s.En():s}Mn(e,t){const n=new ch(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const u of s)n.pn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(e,t){let n=2;const i=this.Fn(t);return w.forEach(i,s=>this.Mn(e,s).next(a=>{a?n!==0&&a.fields.length<function(c){let h=new ne(ae.comparator),f=!1;for(const p of c.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:h=h.add(g.field));for(const p of c.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&n===2?1:n)}qn(e,t){const n=new Dr;for(const i of en(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const a=n.hn(i.kind);sn.Ut.bt(s,a)}return n.an()}Bn(e){const t=new Dr;return sn.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new Dr;return sn.Ut.bt(oi(this.databaseId,t),n.hn(function(s){const a=en(s);return a.length===0?0:a[a.length-1].kind}(e))),n.an()}On(e,t,n){if(n===null)return[];let i=[];i.push(new Dr);let s=0;for(const a of en(e)){const u=n[s++];for(const c of i)if(this.$n(t,a.fieldPath)&&ai(u))i=this.Un(i,a,u);else{const h=c.hn(a.kind);sn.Ut.bt(u,h)}}return this.Kn(i)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const i=[...e],s=[];for(const a of n.arrayValue.values||[])for(const u of i){const c=new Dr;c.seed(u.an()),sn.Ut.bt(a,c.hn(t.kind)),s.push(c)}return s}$n(e,t){return!!e.filters.find(n=>n instanceof Q&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=kr(e),i=Nn(e);return(t?n.j(pa,IDBKeyRange.bound(t,t)):n.j()).next(s=>{const a=[];return w.forEach(s,u=>i.get([u.indexId,this.uid]).next(c=>{a.push(function(f,p){const g=p?new Zr(p.sequenceNumber,new Be(Tn(p.readTime),new O(Je(p.documentKey)),p.largestBatchId)):Zr.empty(),R=f.fields.map(([C,k])=>new us(ae.fromServerFormat(C),k));return new Ps(f.indexId,f.collectionGroup,R,g)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:q(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=kr(e),s=Nn(e);return this.Wn(e).next(a=>i.j(pa,IDBKeyRange.bound(t,t)).next(u=>w.forEach(u,c=>s.put(rh(c.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,(i,s)=>{const a=n.get(i.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(u=>(n.set(i.collectionGroup,u),w.forEach(u,c=>this.Gn(e,i,c).next(h=>{const f=this.zn(s,c);return h.isEqual(f)?w.resolve():this.jn(e,s,c,h,f)}))))})}Jn(e,t,n,i){return kn(e).put(i.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,i){return kn(e).delete(i.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const i=kn(e);let s=new ne(At);return i.X({index:rf,range:IDBKeyRange.only([n.indexId,this.uid,gs(this.Qn(n,t))])},(a,u)=>{s=s.add(new on(n.indexId,t,uh(u.arrayValue),uh(u.directionalValue)))}).next(()=>s)}zn(e,t){let n=new ne(At);const i=this.qn(t,e);if(i==null)return n;const s=fa(t);if(s!=null){const a=e.data.field(s.fieldPath);if(ai(a))for(const u of a.arrayValue.values||[])n=n.add(new on(t.indexId,e.key,this.Bn(u),i))}else n=n.add(new on(t.indexId,e.key,Zi,i));return n}jn(e,t,n,i,s){V(hh,"Updating index entries for document '%s'",t.key);const a=[];return function(c,h,f,p,g){const R=c.getIterator(),C=h.getIterator();let k=Vn(R),D=Vn(C);for(;k||D;){let $=!1,U=!1;if(k&&D){const L=f(k,D);L<0?U=!0:L>0&&($=!0)}else k!=null?U=!0:$=!0;$?(p(D),D=Vn(C)):U?(g(k),k=Vn(R)):(k=Vn(R),D=Vn(C))}}(i,s,At,u=>{a.push(this.Jn(e,t,n,u))},u=>{a.push(this.Hn(e,t,n,u))}),w.waitFor(a)}Wn(e){let t=1;return Nn(e).X({index:nf,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,u)=>At(a,u)).filter((a,u,c)=>!u||At(a,c[u-1])!==0);const i=[];i.push(e);for(const a of n){const u=At(a,e),c=At(a,t);if(u===0)i[0]=e.En();else if(u>0&&c<0)i.push(a),i.push(a.En());else if(c>0)break}i.push(t);const s=[];for(let a=0;a<i.length;a+=2){if(this.Yn(i[a],i[a+1]))return[];const u=i[a].Rn(this.uid,Zi,O.empty()),c=i[a+1].Rn(this.uid,Zi,O.empty());s.push(IDBKeyRange.bound(u,c))}return s}Yn(e,t){return At(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fh)}getMinOffset(e,t){return w.mapArray(this.Fn(t),n=>this.Mn(e,n).next(i=>i||M(44426))).next(fh)}}function dh(r){return ye(r,ri)}function kn(r){return ye(r,Gr)}function kr(r){return ye(r,tu)}function Nn(r){return ye(r,$r)}function fh(r){F(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Ya(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Be(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},am=41943040;class Se{static withCacheSize(e){return new Se(e,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function um(r,e,t){const n=r.store(Ke),i=r.store(Wn),s=[],a=IDBKeyRange.only(t.batchId);let u=0;const c=n.X({range:a},(f,p,g)=>(u++,g.delete()));s.push(c.next(()=>{F(u===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const p=Zd(e,f.key.path,t.batchId);s.push(i.delete(p)),h.push(f.key)}return w.waitFor(s).next(()=>h)}function Bs(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw M(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Se.DEFAULT_COLLECTION_PERCENTILE=10,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Se.DEFAULT=new Se(am,Se.DEFAULT_COLLECTION_PERCENTILE,Se.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Se.DISABLED=new Se(-1,0,0);class co{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Zn={}}static yt(e,t,n,i){F(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new co(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return bt(e).X({index:un,range:n},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=Un(e),a=bt(e);return a.add({}).next(u=>{F(typeof u=="number",49019);const c=new cu(u,t,n,i),h=function(R,C,k){const D=k.baseMutations.map(U=>Ls(R.gt,U)),$=k.mutations.map(U=>Ls(R.gt,U));return{userId:C,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:D,mutations:$}}(this.serializer,this.userId,c),f=[];let p=new ne((g,R)=>q(g.canonicalString(),R.canonicalString()));for(const g of i){const R=Zd(this.userId,g.key.path,u);p=p.add(g.key.path.popLast()),f.push(a.put(h)),f.push(s.put(R,LI))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Zn[u]=c.keys()}),w.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return bt(e).get(t).next(n=>n?(F(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),rn(this.serializer,n)):null)}Xn(e,t){return this.Zn[t]?w.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return bt(e).X({index:un,range:i},(a,u,c)=>{u.userId===this.userId&&(F(u.batchId>=n,47524,{er:n}),s=rn(this.serializer,u)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Lt;return bt(e).X({index:un,range:t,reverse:!0},(i,s,a)=>{n=s.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Lt],[this.userId,Number.POSITIVE_INFINITY]);return bt(e).j(un,t).next(n=>n.map(i=>rn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=cs(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return Un(e).X({range:i},(a,u,c)=>{const[h,f,p]=a,g=Je(f);if(h===this.userId&&t.path.isEqual(g))return bt(e).get(p).next(R=>{if(!R)throw M(61480,{tr:a,batchId:p});F(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:p}),s.push(rn(this.serializer,R))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ne(q);const i=[];return t.forEach(s=>{const a=cs(this.userId,s.path),u=IDBKeyRange.lowerBound(a),c=Un(e).X({range:u},(h,f,p)=>{const[g,R,C]=h,k=Je(R);g===this.userId&&s.path.isEqual(k)?n=n.add(C):p.done()});i.push(c)}),w.waitFor(i).next(()=>this.nr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=cs(this.userId,n),a=IDBKeyRange.lowerBound(s);let u=new ne(q);return Un(e).X({range:a},(c,h,f)=>{const[p,g,R]=c,C=Je(g);p===this.userId&&n.isPrefixOf(C)?C.length===i&&(u=u.add(R)):f.done()}).next(()=>this.nr(e,u))}nr(e,t){const n=[],i=[];return t.forEach(s=>{i.push(bt(e).get(s).next(a=>{if(a===null)throw M(35274,{batchId:s});F(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:s}),n.push(rn(this.serializer,a))}))}),w.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return um(e.ce,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),w.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return Un(e).X({range:n},(s,a,u)=>{if(s[0]===this.userId){const c=Je(s[1]);i.push(c)}else u.done()}).next(()=>{F(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return cm(e,this.userId,t)}sr(e){return lm(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Lt,lastStreamToken:""})}}function cm(r,e,t){const n=cs(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return Un(r).X({range:s,Z:!0},(u,c,h)=>{const[f,p,g]=u;f===e&&p===i&&(a=!0),h.done()}).next(()=>a)}function bt(r){return ye(r,Ke)}function Un(r){return ye(r,Wn)}function lm(r){return ye(r,ti)}/**
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
 */class En{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new En(0)}static ur(){return new En(-1)}}/**
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
 */class uT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{const n=new En(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>B.fromTimestamp(new ee(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.cr(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>xn(e).delete(t.targetId)).next(()=>this.cr(e)).next(n=>(F(n.targetCount>0,8065),n.targetCount-=1,this.lr(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return xn(e).X((a,u)=>{const c=Fr(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,t){return xn(e).X((n,i)=>{const s=Fr(i);t(s)})}cr(e){return ph(e).get(Vs).next(t=>(F(t!==null,2888),t))}lr(e,t){return ph(e).put(Vs,t)}hr(e,t){return xn(e).put(rm(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=In(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return xn(e).X({range:i,index:tf},(a,u,c)=>{const h=Fr(u);_i(t,h.target)&&(s=h,c.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=Dt(e);return t.forEach(a=>{const u=Ve(a.path);i.push(s.put({targetId:n,path:u})),i.push(this.referenceDelegate.addReference(e,n,a))}),w.waitFor(i)}removeMatchingKeys(e,t,n){const i=Dt(e);return w.forEach(t,s=>{const a=Ve(s.path);return w.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=Dt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Dt(e);let s=G();return i.X({range:n,Z:!0},(a,u,c)=>{const h=Je(a[1]),f=new O(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Ve(t.path),i=IDBKeyRange.bound([n],[Kd(n)],!1,!0);let s=0;return Dt(e).X({index:eu,Z:!0,range:i},([a,u],c,h)=>{a!==0&&(s++,h.done())}).next(()=>s>0)}Et(e,t){return xn(e).get(t).next(n=>n?Fr(n):null)}}function xn(r){return ye(r,Hn)}function ph(r){return ye(r,ln)}function Dt(r){return ye(r,Qn)}/**
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
 */const gh="LruGarbageCollector",cT=1048576;function _h([r,e],[t,n]){const i=q(r,t);return i===0?q(e,n):i}class lT{constructor(e){this.Tr=e,this.buffer=new ne(_h),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();_h(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){V(gh,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zt(t)?V(gh,"Ignoring IndexedDB error during garbage collection: ",t):await An(t)}await this.Rr(3e5)})}}class hT{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return w.resolve(qe.ue);const n=new lT(t);return this.Vr.forEachTarget(e,i=>n.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>n.Er(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(mh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mh):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,s,a,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,u=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),On()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function dm(r,e){return new hT(r,e)}/**
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
 */class dT{constructor(e,t){this.db=e,this.garbageCollector=dm(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}yr(e){let t=0;return this.gr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(n,i)=>t(i))}addReference(e,t,n){return es(e,n)}removeReference(e,t,n){return es(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return es(e,t)}Sr(e,t){return function(i,s){let a=!1;return lm(i).ee(u=>cm(i,u,s).next(c=>(c&&(a=!0),w.resolve(!c)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.wr(e,(a,u)=>{if(u<=t){const c=this.Sr(e,a).next(h=>{if(!h)return s++,n.getEntry(e,a).next(()=>(n.removeEntry(a,B.min()),Dt(e).delete(function(p){return[0,Ve(p.path)]}(a))))});i.push(c)}}).next(()=>w.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return es(e,t)}wr(e,t){const n=Dt(e);let i,s=qe.ue;return n.X({index:eu},([a,u],{path:c,sequenceNumber:h})=>{a===0?(s!==qe.ue&&t(new O(Je(i)),s),s=h,i=c):s=qe.ue}).next(()=>{s!==qe.ue&&t(new O(Je(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function es(r,e){return Dt(r).put(function(n,i){return{targetId:0,path:Ve(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class fm{constructor(){this.changes=new _t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Yt(e).put(n)}removeEntry(e,t,n){return Yt(e).delete(function(s,a){const u=s.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Fs(a),u[u.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.br(e,n)))}getEntry(e,t){let n=ce.newInvalidDocument(t);return Yt(e).X({index:ls,range:IDBKeyRange.only(Nr(t))},(i,s)=>{n=this.Dr(t,s)}).next(()=>n)}vr(e,t){let n={size:0,document:ce.newInvalidDocument(t)};return Yt(e).X({index:ls,range:IDBKeyRange.only(Nr(t))},(i,s)=>{n={document:this.Dr(t,s),size:Bs(s)}}).next(()=>n)}getEntries(e,t){let n=Ue();return this.Cr(e,t,(i,s)=>{const a=this.Dr(i,s);n=n.insert(i,a)}).next(()=>n)}Fr(e,t){let n=Ue(),i=new oe(O.comparator);return this.Cr(e,t,(s,a)=>{const u=this.Dr(s,a);n=n.insert(s,u),i=i.insert(s,Bs(a))}).next(()=>({documents:n,Mr:i}))}Cr(e,t,n){if(t.isEmpty())return w.resolve();let i=new ne(vh);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Nr(i.first()),Nr(i.last())),a=i.getIterator();let u=a.getNext();return Yt(e).X({index:ls,range:s},(c,h,f)=>{const p=O.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;u&&vh(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,h),u=a.hasNext()?a.getNext():null),u?f.G(Nr(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const a=t.path,u=[a.popLast().toArray(),a.lastSegment(),Fs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yt(e).j(IDBKeyRange.bound(u,c,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=Ue();for(const p of h){const g=this.Dr(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(vi(t,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Ue();const a=Ih(t,n),u=Ih(t,Be.max());return Yt(e).X({index:ef,range:IDBKeyRange.bound(a,u,!0)},(c,h,f)=>{const p=this.Dr(O.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new mT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return yh(e).get(ma).next(t=>(F(!!t,20021),t))}br(e,t){return yh(e).put(ma,t)}Dr(e,t){if(t){const n=Yv(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ce.newInvalidDocument(e)}}function mm(r){return new fT(r)}class mT extends fm{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new _t(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ne((s,a)=>q(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const u=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,u.readTime)),a.isValidDocument()){const c=th(this.Or.serializer,a);i=i.add(s.path.popLast());const h=Bs(c);n+=h-u.size,t.push(this.Or.addEntry(e,s,c))}else if(n-=u.size,this.trackRemovals){const c=th(this.Or.serializer,a.convertToNoDocument(B.min()));t.push(this.Or.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Or.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(n=>(this.Nr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:n,Mr:i})=>(i.forEach((s,a)=>{this.Nr.set(s,{size:a,readTime:n.get(s).readTime})}),n))}}function yh(r){return ye(r,ni)}function Yt(r){return ye(r,Cs)}function Nr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ih(r,e){const t=e.documentKey.path.toArray();return[r,Fs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function vh(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=q(t[s],n[s]),i)return i;return i=q(t.length,n.length),i||(i=q(t[t.length-2],n[n.length-2]),i||q(t[t.length-1],n[n.length-1]))}/**
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
 *//**
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
 */class pT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class pm{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Qr(n.mutation,i,Oe.empty(),ee.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,G()).next(()=>n))}getLocalViewOfDocuments(e,t,n=G()){const i=Ye();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=Mr();return s.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Ye();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,G()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,i){let s=Ue();const a=Hr(),u=function(){return Hr()}();return t.forEach((c,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof yt)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Qr(f.mutation,h,f.mutation.getFieldMask(),ee.now())):a.set(h.key,Oe.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return u.set(h,new pT(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(e,t){const n=Hr();let i=new oe((a,u)=>a-u),s=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=n.get(c)||Oe.empty();f=u.applyToLocalView(h,f),n.set(c,f);const p=(i.get(u.batchId)||G()).add(c);i=i.insert(u.batchId,p)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,p=kf();f.forEach(g=>{if(!s.has(g)){const R=Uf(t.get(g),n.get(g));R!==null&&p.set(g,R),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):w.resolve(Ye());let u=Yr,c=s;return a.next(h=>w.forEach(h,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),s.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,G())).next(f=>({batchId:u,changes:Df(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let i=Mr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=Mr();return this.indexManager.getCollectionParents(e,s).next(u=>w.forEach(u,c=>{const h=function(p,g){return new yi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ce.newInvalidDocument(f)))});let u=Mr();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Qr(f.mutation,h,Oe.empty(),ee.now()),vi(t,h)&&(u=u.insert(c,h))}),u})}}/**
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
 */class gT{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return w.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:xe(i.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:im(i.bundledQuery),readTime:xe(i.readTime)}}(t)),w.resolve()}}/**
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
 */class _T{constructor(){this.overlays=new oe(O.comparator),this.kr=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ye();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.wt(e,t,s)}),w.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const i=Ye(),s=t.length+1,a=new O(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new oe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=Ye(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=Ye(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=i)););return w.resolve(u)}wt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new hu(t,n));let s=this.kr.get(t);s===void 0&&(s=G(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
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
 */class gu{constructor(){this.qr=new ne(Ie.Qr),this.$r=new ne(Ie.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Wr(new Ie(e,t))}Gr(e,t){e.forEach(n=>this.removeReference(n,t))}zr(e){const t=new O(new Y([])),n=new Ie(t,e),i=new Ie(t,e+1),s=[];return this.$r.forEachInRange([n,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new O(new Y([])),n=new Ie(t,e),i=new Ie(t,e+1);let s=G();return this.$r.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Ie(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return O.comparator(e.key,t.key)||q(e.Hr,t.Hr)}static Ur(e,t){return q(e.Hr,t.Hr)||O.comparator(e.key,t.key)}}/**
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
 */class IT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ne(Ie.Qr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cu(s,t,n,i);this.mutationQueue.push(a);for(const u of i)this.Yr=this.Yr.add(new Ie(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(e,t){return w.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?Lt:this.er-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),i=new Ie(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],a=>{const u=this.Zr(a.Hr);s.push(u)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ne(q);return t.forEach(i=>{const s=new Ie(i,0),a=new Ie(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],u=>{n=n.add(u.Hr)})}),w.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;O.isDocumentKey(s)||(s=s.child(""));const a=new Ie(new O(s),0);let u=new ne(q);return this.Yr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(u=u.add(c.Hr)),!0)},a),w.resolve(this.ei(u))}ei(e){const t=[];return e.forEach(n=>{const i=this.Zr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){F(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return w.forEach(t.mutations,i=>{const s=new Ie(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){const n=new Ie(t,0),i=this.Yr.firstAfterOrEqual(n);return w.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vT{constructor(e){this.ni=e,this.docs=function(){return new oe(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ce.newInvalidDocument(t))}getEntries(e,t){let n=Ue();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))}),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Ue();const a=t.path,u=new O(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ya(Qd(f),n)<=0||(i.has(f.key)||vi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,t,n,i){M(9500)}ri(e,t){return w.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new TT(this)}getSize(e){return w.resolve(this.size)}}class TT extends fm{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)}),w.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class ET{constructor(e){this.persistence=e,this.ii=new _t(t=>In(t),_i),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.si=0,this.oi=new gu,this.targetCount=0,this._i=En.ar()}forEachTarget(e,t){return this.ii.forEach((n,i)=>t(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),w.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new En(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.hr(t),w.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.oi.containsKey(t))}}/**
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
 */class _u{constructor(e,t){this.ai={},this.overlays={},this.ui=new qe(0),this.ci=!1,this.ci=!0,this.li=new yT,this.referenceDelegate=e(this),this.hi=new ET(this),this.indexManager=new oT,this.remoteDocumentCache=function(i){return new vT(i)}(n=>this.referenceDelegate.Pi(n)),this.serializer=new nm(t),this.Ti=new gT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _T,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new IT(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const i=new wT(this.ui.next());return this.referenceDelegate.Ii(),n(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return w.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}}class wT extends Jd{constructor(e){super(),this.currentSequenceNumber=e}}class lo{constructor(e){this.persistence=e,this.Ai=new gu,this.Ri=null}static Vi(e){return new lo(e)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),w.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.mi,n=>{const i=O.fromPath(n);return this.fi(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return w.or([()=>w.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class js{constructor(e,t){this.persistence=e,this.gi=new _t(n=>Ve(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=dm(this,t)}static Vi(e,t){return new js(e,t)}Ii(){}di(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}yr(e){let t=0;return this.gr(e,n=>{t++}).next(()=>t)}gr(e,t){return w.forEach(this.gi,(n,i)=>this.Sr(e,n,i).next(s=>s?w.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(n++,s.removeEntry(a,B.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),w.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ds(e.data.value)),t}Sr(e,t,n){return w.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return w.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class AT{constructor(e){this.serializer=e}q(e,t,n,i){const s=new Js("createOrUpgrade",t);n<1&&i>=1&&(function(c){c.createObjectStore(gi)}(e),function(c){c.createObjectStore(ti,{keyPath:MI}),c.createObjectStore(Ke,{keyPath:Dl,autoIncrement:!0}).createIndex(un,kl,{unique:!0}),c.createObjectStore(Wn)}(e),Th(e),function(c){c.createObjectStore(tn)}(e));let a=w.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore(Qn),c.deleteObjectStore(Hn),c.deleteObjectStore(ln)}(e),Th(e)),a=a.next(()=>function(c){const h=c.store(ln),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return h.put(Vs,f)}(s))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(c,h){return h.store(Ke).j().next(p=>{c.deleteObjectStore(Ke),c.createObjectStore(Ke,{keyPath:Dl,autoIncrement:!0}).createIndex(un,kl,{unique:!0});const g=h.store(Ke),R=p.map(C=>g.put(C));return w.waitFor(R)})}(e,s))),a=a.next(()=>{(function(c){c.createObjectStore(Xn,{keyPath:GI})})(e)})),n<5&&i>=5&&(a=a.next(()=>this.pi(s))),n<6&&i>=6&&(a=a.next(()=>(function(c){c.createObjectStore(ni)}(e),this.yi(s)))),n<7&&i>=7&&(a=a.next(()=>this.wi(s))),n<8&&i>=8&&(a=a.next(()=>this.Si(e,s))),n<9&&i>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(a=a.next(()=>this.bi(s))),n<11&&i>=11&&(a=a.next(()=>{(function(c){c.createObjectStore(Zs,{keyPath:KI})})(e),function(c){c.createObjectStore(eo,{keyPath:WI})}(e)})),n<12&&i>=12&&(a=a.next(()=>{(function(c){const h=c.createObjectStore(to,{keyPath:ev});h.createIndex(ga,tv,{unique:!1}),h.createIndex(sf,nv,{unique:!1})})(e)})),n<13&&i>=13&&(a=a.next(()=>function(c){const h=c.createObjectStore(Cs,{keyPath:FI});h.createIndex(ls,UI),h.createIndex(ef,BI)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(tn))),n<14&&i>=14&&(a=a.next(()=>this.Ci(e,s))),n<15&&i>=15&&(a=a.next(()=>function(c){c.createObjectStore(tu,{keyPath:HI,autoIncrement:!0}).createIndex(pa,QI,{unique:!1}),c.createObjectStore($r,{keyPath:XI}).createIndex(nf,JI,{unique:!1}),c.createObjectStore(Gr,{keyPath:YI}).createIndex(rf,ZI,{unique:!1})}(e))),n<16&&i>=16&&(a=a.next(()=>{t.objectStore($r).clear()}).next(()=>{t.objectStore(Gr).clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(c){c.createObjectStore(nu,{keyPath:rv})})(e)})),n<18&&i>=18&&ed()&&(a=a.next(()=>{t.objectStore($r).clear()}).next(()=>{t.objectStore(Gr).clear()})),a}yi(e){let t=0;return e.store(tn).X((n,i)=>{t+=Bs(i)}).next(()=>{const n={byteSize:t};return e.store(ni).put(ma,n)})}pi(e){const t=e.store(ti),n=e.store(Ke);return t.j().next(i=>w.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,Lt],[s.userId,s.lastAcknowledgedBatchId]);return n.j(un,a).next(u=>w.forEach(u,c=>{F(c.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const h=rn(this.serializer,c);return um(e,s.userId,h).next(()=>{})}))}))}wi(e){const t=e.store(Qn),n=e.store(tn);return e.store(ln).get(Vs).next(i=>{const s=[];return n.X((a,u)=>{const c=new Y(a),h=function(p){return[0,Ve(p)]}(c);s.push(t.get(h).next(f=>f?w.resolve():(p=>t.put({targetId:0,path:Ve(p),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(s))})}Si(e,t){e.createObjectStore(ri,{keyPath:$I});const n=t.store(ri),i=new pu,s=a=>{if(i.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Ve(c)})}};return t.store(tn).X({Z:!0},(a,u)=>{const c=new Y(a);return s(c.popLast())}).next(()=>t.store(Wn).X({Z:!0},([a,u,c],h)=>{const f=Je(u);return s(f.popLast())}))}bi(e){const t=e.store(Hn);return t.X((n,i)=>{const s=Fr(i),a=rm(this.serializer,s);return t.put(a)})}Di(e,t){const n=t.store(tn),i=[];return n.X((s,a)=>{const u=t.store(Cs),c=function(p){return p.document?new O(Y.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):M(36783)}(a).path.toArray(),h={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(u.put(h))}).next(()=>w.waitFor(i))}Ci(e,t){const n=t.store(Ke),i=mm(this.serializer),s=new _u(lo.Vi,this.serializer.gt);return n.j().next(a=>{const u=new Map;return a.forEach(c=>{var h;let f=(h=u.get(c.userId))!==null&&h!==void 0?h:G();rn(this.serializer,c).keys().forEach(p=>f=f.add(p)),u.set(c.userId,f)}),w.forEach(u,(c,h)=>{const f=new Te(h),p=uo.yt(this.serializer,f),g=s.getIndexManager(f),R=co.yt(f,this.serializer,g,s.referenceDelegate);return new pm(i,R,p,g).recalculateAndSaveOverlaysForDocumentKeys(new _a(t,qe.ue),c).next()})})}}function Th(r){r.createObjectStore(Qn,{keyPath:qI}).createIndex(eu,zI,{unique:!0}),r.createObjectStore(Hn,{keyPath:"targetId"}).createIndex(tf,jI,{unique:!0}),r.createObjectStore(ln)}const Rt="IndexedDbPersistence",Jo=18e5,Yo=5e3,Zo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",gm="main";class yu{constructor(e,t,n,i,s,a,u,c,h,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=s,this.window=a,this.document=u,this.Mi=h,this.xi=f,this.Oi=p,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=g=>Promise.resolve(),!yu.C())throw new N(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new dT(this,i),this.Qi=t+gm,this.serializer=new nm(c),this.$i=new et(this.Qi,this.Oi,new AT(this.serializer)),this.li=new eT,this.hi=new uT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=mm(this.serializer),this.Ti=new Zv,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&Ne(Rt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(S.FAILED_PRECONDITION,Zo);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new qe(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ts(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(zt(e))return V(Rt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V(Rt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return xr(e).get(Cn).next(t=>w.resolve(this.Xi(t)))}es(e){return ts(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Jo)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ye(t,Xn);return n.j().next(i=>{const s=this.rs(i,Jo),a=i.filter(u=>s.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?w.resolve(!0):xr(e).get(Cn).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Yo)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new N(S.FAILED_PRECONDITION,Zo);return!1}}return!(!this.networkEnabled||!this.inForeground)||ts(e).j().next(n=>this.rs(n,Yo).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,u=this.networkEnabled===i.networkEnabled;if(s||a&&u)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V(Rt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[gi,Xn],e=>{const t=new _a(e,qe.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(n=>this.ns(n.updateTimeMs,t)&&!this._s(n.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>ts(e).j().next(t=>this.rs(t,Jo).map(n=>n.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return co.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new aT(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return uo.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){V(Rt,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===18?ov:c===17?cf:c===16?sv:c===15?ru:c===14?uf:c===13?af:c===12?iv:c===11?of:void M(60245)}(this.Oi);let a;return this.$i.runTransaction(e,i,s,u=>(a=new _a(u,this.ui?this.ui.next():qe.ue),t==="readwrite-primary"?this.Ji(a).next(c=>!!c||this.Hi(a)).next(c=>{if(!c)throw Ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new N(S.FAILED_PRECONDITION,Xd);return n(a)}).next(c=>this.Zi(a).next(()=>c)):this.Ts(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ts(e){return xr(e).get(Cn).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Yo)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new N(S.FAILED_PRECONDITION,Zo)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xr(e).put(Cn,t)}static C(){return et.C()}Yi(e){const t=xr(e);return t.get(Cn).next(n=>this.Xi(n)?(V(Rt,"Releasing primary lease."),t.delete(Cn)):w.resolve())}ns(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Ne(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Zh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return V(Rt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Ne(Rt,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){Ne("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function xr(r){return ye(r,gi)}function ts(r){return ye(r,Xn)}function _m(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Iu{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=G(),i=G();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Iu(e,t.fromCache,n,i)}}/**
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
 */class bT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ym{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Zh()?8:Yd(_e())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.ps(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new bT;return this.ws(e,t,a).next(u=>{if(s.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>s.result)}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(On()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),w.resolve()):(On()<=H.DEBUG&&V("QueryEngine","Query:",Mn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(On()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$e(t))):w.resolve())}ps(e,t){if(Gl(t))return w.resolve(null);let n=$e(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Os(t,null,"F"),n=$e(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=G(...s);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(c=>{const h=this.bs(t,u);return this.Ds(t,h,a,c.readTime)?this.ps(e,Os(t,null,"F")):this.vs(e,h,t,c)}))})))}ys(e,t,n,i){return Gl(t)||i.isEqual(B.min())?w.resolve(null):this.gs.getDocuments(e,n).next(s=>{const a=this.bs(t,s);return this.Ds(t,a,n,i)?w.resolve(null):(On()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mn(t)),this.vs(e,a,t,CI(i,Yr)).next(u=>u))})}bs(e,t){let n=new ne(Cf(e));return t.forEach((i,s)=>{vi(e,s)&&(n=n.add(s))}),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,n){return On()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.gs.getDocumentsMatchingQuery(e,t,Be.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const vu="LocalStore",RT=3e8;class PT{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new oe(q),this.Ms=new _t(s=>In(s),_i),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pm(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Im(r,e,t,n){return new PT(r,e,t,n)}async function vm(r,e){const t=j(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],u=[];let c=G();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:u}))})})}function ST(r,e){const t=j(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const p=h.batch,g=p.keys();let R=w.resolve();return g.forEach(C=>{R=R.next(()=>f.getEntry(c,C)).next(k=>{const D=h.docVersions.get(C);F(D!==null,48541),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(c,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=G();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Tm(r){const e=j(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function CT(r,e){const t=j(r),n=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const u=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;u.push(t.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,p)));let R=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(me.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,n)),i=i.insert(p,R),function(k,D,$){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=RT?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,R,f)&&u.push(t.hi.updateTargetData(s,R))});let c=Ue(),h=G();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(VT(s,a,e.documentUpdates).next(f=>{c=f.Ls,h=f.ks})),!n.isEqual(B.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next(p=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n));u.push(f)}return w.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.Fs=i,s))}function VT(r,e,t){let n=G(),i=G();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=Ue();return t.forEach((u,c)=>{const h=s.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):V(vu,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{Ls:a,ks:i}})}function DT(r,e){const t=j(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Lt),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function kT(r,e){const t=j(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.hi.getTargetData(n,e).next(s=>s?(i=s,w.resolve(i)):t.hi.allocateTargetId(n).next(a=>(i=new ht(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n})}async function Da(r,e,t){const n=j(r),i=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!zt(a))throw a;V(vu,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function Eh(r,e,t){const n=j(r);let i=B.min(),s=G();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=j(c),g=p.Ms.get(f);return g!==void 0?w.resolve(p.Fs.get(g)):p.hi.getTargetData(h,f)}(n,a,$e(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,u.targetId).next(c=>{s=c})}).next(()=>n.Cs.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:G())).next(u=>(NT(n,Tv(e),u),{documents:u,qs:s})))}function NT(r,e,t){let n=r.xs.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.xs.set(e,n)}class wh{constructor(){this.activeTargetIds=Pv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Em{constructor(){this.Fo=new wh,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new wh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xT{xo(e){}shutdown(){}}/**
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
 */const Ah="ConnectivityMonitor";class bh{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(Ah,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){V(Ah,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ns=null;function ka(){return ns===null?ns=function(){return 268435456+Math.round(2147483648*Math.random())}():ns++,"0x"+ns.toString(16)}/**
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
 */const ea="RestConnection",OT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MT{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Ds?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,s){const a=ka(),u=this.Go(e,t.toUriEncodedString());V(ea,`Sending RPC '${e}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:h}=new URL(u),f=or(h);return this.jo(e,u,c,n,f).then(p=>(V(ea,`Received RPC '${e}' ${a}: `,p),p),p=>{throw it(ea,`RPC '${e}' ${a} failed with error: `,p,"url: ",u,"request:",n),p})}Jo(e,t,n,i,s,a){return this.Wo(e,t,n,i,s)}zo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),n&&n.headers.forEach((i,s)=>e[s]=i)}Go(e,t){const n=OT[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}/**
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
 */class LT{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Pe="WebChannelConnection";class FT extends MT{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,s){const a=ka();return new Promise((u,c)=>{const h=new Fd;h.setWithCredentials(!0),h.listenOnce(Ud.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case as.NO_ERROR:const p=h.getResponseJson();V(Pe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),u(p);break;case as.TIMEOUT:V(Pe,`RPC '${e}' ${a} timed out`),c(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case as.HTTP_ERROR:const g=h.getStatus();if(V(Pe,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const k=function($){const U=$.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(U)>=0?U:S.UNKNOWN}(C.status);c(new N(k,C.message))}else c(new N(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{V(Pe,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);V(Pe,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",f,n,15)})}P_(e,t,n){const i=ka(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=qd(),u=jd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=s.join("");V(Pe,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=a.createWebChannel(f,c);this.T_(p);let g=!1,R=!1;const C=new LT({Ho:D=>{R?V(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(V(Pe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),V(Pe,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},Yo:()=>p.close()}),k=(D,$,U)=>{D.listen($,L=>{try{U(L)}catch(W){setTimeout(()=>{throw W},0)}})};return k(p,Or.EventType.OPEN,()=>{R||(V(Pe,`RPC '${e}' stream ${i} transport opened.`),C.s_())}),k(p,Or.EventType.CLOSE,()=>{R||(R=!0,V(Pe,`RPC '${e}' stream ${i} transport closed`),C.__(),this.I_(p))}),k(p,Or.EventType.ERROR,D=>{R||(R=!0,it(Pe,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),C.__(new N(S.UNAVAILABLE,"The operation could not be completed")))}),k(p,Or.EventType.MESSAGE,D=>{var $;if(!R){const U=D.data[0];F(!!U,16349);const L=U,W=(L==null?void 0:L.error)||(($=L[0])===null||$===void 0?void 0:$.error);if(W){V(Pe,`RPC '${e}' stream ${i} received error:`,W);const Z=W.status;let K=function(I){const T=he[I];if(T!==void 0)return qf(T)}(Z),v=W.message;K===void 0&&(K=S.INTERNAL,v="Unknown error status: "+Z+" with message "+W.message),R=!0,C.__(new N(K,v)),p.close()}else V(Pe,`RPC '${e}' stream ${i} received:`,U),C.a_(U)}}),k(u,Bd.STAT_EVENT,D=>{D.stat===ha.PROXY?V(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===ha.NOPROXY&&V(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}/**
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
 *//**
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
 */function UT(){return typeof window<"u"?window:null}function _s(){return typeof document<"u"?document:null}/**
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
 */function ho(r){return new qv(r,!0)}/**
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
 */class wm{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Rh="PersistentStream";class Am{constructor(e,t,n,i,s,a,u,c){this.Fi=e,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new wm(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Ne(t.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.b_===t&&this.W_(n,i)},n=>{e(()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)})})}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{n(()=>this.G_(i))}),this.stream.onMessage(i=>{n(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return V(Rh,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(V(Rh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BT extends Am{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Gv(this.serializer,e),n=function(s){if(!("targetChange"in s))return B.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?xe(a.readTime):B.min()}(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=Ra(this.serializer),t.addTarget=function(s,a){let u;const c=a.target;if(u=Ns(c)?{documents:Xf(s,c)}:{query:Jf(s,c).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Gf(s,a.resumeToken);const h=Aa(s,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=ir(s,a.snapshotVersion.toTimestamp());const h=Aa(s,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const n=Wv(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=Ra(this.serializer),t.removeTarget=e,this.k_(t)}}class jT extends Am{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return F(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,F(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){F(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Kv(e.writeResults,e.commitTime),n=xe(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=Ra(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ls(this.serializer,n))};this.k_(t)}}/**
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
 */class qT{}class zT extends qT{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,ba(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(S.UNKNOWN,s.toString())})}Jo(e,t,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,ba(t,n),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class $T{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ne(t),this._a=!1):V("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const wn="RemoteStore";class GT{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{n.enqueueAndForget(async()=>{Gt(this)&&(V(wn,"Restarting streams for network reachability change."),await async function(c){const h=j(c);h.Ia.add(4),await hr(h),h.Aa.set("Unknown"),h.Ia.delete(4),await wi(h)}(this))})}),this.Aa=new $T(n,i)}}async function wi(r){if(Gt(r))for(const e of r.da)await e(!0)}async function hr(r){for(const e of r.da)await e(!1)}function bm(r,e){const t=j(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Au(t)?wu(t):dr(t).x_()&&Eu(t,e))}function Tu(r,e){const t=j(r),n=dr(t);t.Ta.delete(e),n.x_()&&Rm(t,e),t.Ta.size===0&&(n.x_()?n.B_():Gt(t)&&t.Aa.set("Unknown"))}function Eu(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dr(r).H_(e)}function Rm(r,e){r.Ra.$e(e),dr(r).Y_(e)}function wu(r){r.Ra=new Fv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),dr(r).start(),r.Aa.aa()}function Au(r){return Gt(r)&&!dr(r).M_()&&r.Ta.size>0}function Gt(r){return j(r).Ia.size===0}function Pm(r){r.Ra=void 0}async function KT(r){r.Aa.set("Online")}async function WT(r){r.Ta.forEach((e,t)=>{Eu(r,e)})}async function HT(r,e){Pm(r),Au(r)?(r.Aa.la(e),wu(r)):r.Aa.set("Unknown")}async function QT(r,e,t){if(r.Aa.set("Online"),e instanceof $f&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ta.delete(u),i.Ra.removeTarget(u))}(r,e)}catch(n){V(wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await qs(r,n)}else if(e instanceof ps?r.Ra.Ye(e):e instanceof zf?r.Ra.it(e):r.Ra.et(e),!t.isEqual(B.min()))try{const n=await Tm(r.localStore);t.compareTo(n)>=0&&await function(s,a){const u=s.Ra.Pt(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=s.Ta.get(c);if(!f)return;s.Ta.set(c,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),Rm(s,c);const p=new ht(f.target,c,h,f.sequenceNumber);Eu(s,p)}),s.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){V(wn,"Failed to raise snapshot:",n),await qs(r,n)}}async function qs(r,e,t){if(!zt(e))throw e;r.Ia.add(1),await hr(r),r.Aa.set("Offline"),t||(t=()=>Tm(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(wn,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await wi(r)})}function Sm(r,e){return e().catch(t=>qs(r,t,e))}async function Ai(r){const e=j(r),t=jt(e);let n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Lt;for(;XT(e);)try{const i=await DT(e.localStore,n);if(i===null){e.Pa.length===0&&t.B_();break}n=i.batchId,JT(e,i)}catch(i){await qs(e,i)}Cm(e)&&Vm(e)}function XT(r){return Gt(r)&&r.Pa.length<10}function JT(r,e){r.Pa.push(e);const t=jt(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Cm(r){return Gt(r)&&!jt(r).M_()&&r.Pa.length>0}function Vm(r){jt(r).start()}async function YT(r){jt(r).na()}async function ZT(r){const e=jt(r);for(const t of r.Pa)e.X_(t.mutations)}async function eE(r,e,t){const n=r.Pa.shift(),i=lu.from(n,e,t);await Sm(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Ai(r)}async function tE(r,e){e&&jt(r).Z_&&await async function(n,i){if(function(a){return Mv(a)&&a!==S.ABORTED}(i.code)){const s=n.Pa.shift();jt(n).N_(),await Sm(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ai(n)}}(r,e),Cm(r)&&Vm(r)}async function Ph(r,e){const t=j(r);t.asyncQueue.verifyOperationInProgress(),V(wn,"RemoteStore received new credentials");const n=Gt(t);t.Ia.add(3),await hr(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await wi(t)}async function nE(r,e){const t=j(r);e?(t.Ia.delete(2),await wi(t)):e||(t.Ia.add(2),await hr(t),t.Aa.set("Unknown"))}function dr(r){return r.Va||(r.Va=function(t,n,i){const s=j(t);return s.ia(),new BT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Zo:KT.bind(null,r),e_:WT.bind(null,r),n_:HT.bind(null,r),J_:QT.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),Au(r)?wu(r):r.Aa.set("Unknown")):(await r.Va.stop(),Pm(r))})),r.Va}function jt(r){return r.ma||(r.ma=function(t,n,i){const s=j(t);return s.ia(),new jT(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:YT.bind(null,r),n_:tE.bind(null,r),ea:ZT.bind(null,r),ta:eE.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await Ai(r)):(await r.ma.stop(),r.Pa.length>0&&(V(wn,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
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
 */class bu{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,u=new bu(e,t,a,i,s);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fo(r,e){if(Ne("AsyncQueue",`${e}: ${r}`),zt(r))return new N(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class zn{static emptySet(e){return new zn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=Mr(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new zn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Sh{constructor(){this.fa=new oe(O.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):M(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,n)=>{e.push(n)}),e}}class sr{constructor(e,t,n,i,s,a,u,c,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new sr(e,t,zn.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&io(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class rE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class iE{constructor(){this.queries=Ch(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){const i=j(t),s=i.queries;i.queries=Ch(),s.forEach((a,u)=>{for(const c of u.wa)c.onError(n)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function Ch(){return new _t(r=>Sf(r),io)}async function Ru(r,e){const t=j(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(n=2):(s=new rE,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=fo(a,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Su(t)}async function Pu(r,e){const t=j(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function sE(r,e){const t=j(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.wa)u.Ca(i)&&(n=!0);a.ya=i}}n&&Su(t)}function oE(r,e,t){const n=j(r),i=n.queries.get(e);if(i)for(const s of i.wa)s.onError(t);n.queries.delete(e)}function Su(r){r.Da.forEach(e=>{e.next()})}var Na,Vh;(Vh=Na||(Na={})).Fa="default",Vh.Cache="cache";class Cu{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new sr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Na.Cache}}/**
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
 */class Dm{constructor(e){this.key=e}}class km{constructor(e){this.key=e}}class aE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=G(),this.mutatedKeys=G(),this.Xa=Cf(e),this.eu=new zn(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new Sh,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),R=vi(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;g&&R?g.data.isEqual(R.data)?C!==k&&(n.track({type:3,doc:R}),D=!0):this.iu(g,R)||(n.track({type:2,doc:R}),D=!0,(c&&this.Xa(R,c)>0||h&&this.Xa(R,h)<0)&&(u=!0)):!g&&R?(n.track({type:0,doc:R}),D=!0):g&&!R&&(n.track({type:1,doc:g}),D=!0,(c||h)&&(u=!0)),D&&(R?(a=a.add(R),s=k?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{eu:a,ru:n,Ds:u,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,p)=>function(R,C){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:D})}};return k(R)-k(C)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(n),i=i!=null&&i;const u=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new sr(this.query,e.eu,s,a,e.mutatedKeys,c===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Sh,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=G(),this.eu.forEach(n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))});const t=[];return e.forEach(n=>{this.Za.has(n)||t.push(new km(n))}),this.Za.forEach(n=>{e.has(n)||t.push(new Dm(n))}),t}uu(e){this.Ha=e.qs,this.Za=G();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return sr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const mo="SyncEngine";class uE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class cE{constructor(e){this.key=e,this.lu=!1}}class lE{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new _t(u=>Sf(u),io),this.Tu=new Map,this.Iu=new Set,this.du=new oe(O.comparator),this.Eu=new Map,this.Au=new gu,this.Ru={},this.Vu=new Map,this.mu=En.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function hE(r,e,t=!0){const n=Fm(r);let i;const s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await Nm(n,e,t,!0),i}async function dE(r,e){const t=Fm(r);await Nm(t,e,!0,!1)}async function Nm(r,e,t,n){const i=await kT(r.localStore,$e(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t);let u;return n&&(u=await fE(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&bm(r.remoteStore,i),u}async function fE(r,e,t,n,i){r.gu=(p,g,R)=>async function(k,D,$,U){let L=D.view.nu($);L.Ds&&(L=await Eh(k.localStore,D.query,!1).then(({documents:v})=>D.view.nu(v,L)));const W=U&&U.targetChanges.get(D.targetId),Z=U&&U.targetMismatches.get(D.targetId)!=null,K=D.view.applyChanges(L,k.isPrimaryClient,W,Z);return kh(k,D.targetId,K._u),K.snapshot}(r,p,g,R);const s=await Eh(r.localStore,e,!0),a=new aE(e,s.qs),u=a.nu(s.documents),c=Ei.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=a.applyChanges(u,r.isPrimaryClient,c);kh(r,t,h._u);const f=new uE(e,t,a);return r.Pu.set(e,f),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),h.snapshot}async function mE(r,e,t){const n=j(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter(a=>!io(a,e))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Da(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Tu(n.remoteStore,i.targetId),xa(n,i.targetId)}).catch(An)):(xa(n,i.targetId),await Da(n.localStore,i.targetId,!0))}async function pE(r,e){const t=j(r),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Tu(t.remoteStore,n.targetId))}async function gE(r,e,t){const n=Um(r);try{const i=await function(a,u){const c=j(a),h=ee.now(),f=u.reduce((R,C)=>R.add(C.key),G());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=Ue(),k=G();return c.Os.getEntries(R,f).next(D=>{C=D,C.forEach(($,U)=>{U.isValidDocument()||(k=k.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,C)).next(D=>{p=D;const $=[];for(const U of u){const L=xv(U,p.get(U.key).overlayedDocument);L!=null&&$.push(new yt(U.key,L,If(L.value.mapValue),pe.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,$,u)}).next(D=>{g=D;const $=D.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(R,D.batchId,$)})}).then(()=>({batchId:g.batchId,changes:Df(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new oe(q)),h=h.insert(u,c),a.Ru[a.currentUser.toKey()]=h}(n,i.batchId,t),await bi(n,i.changes),await Ai(n.remoteStore)}catch(i){const s=fo(i,"Failed to persist write");t.reject(s)}}async function xm(r,e){const t=j(r);try{const n=await CT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Eu.get(s);a&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?F(a.lu,14607):i.removedDocuments.size>0&&(F(a.lu,42227),a.lu=!1))}),await bi(t,n,e)}catch(n){await An(n)}}function Dh(r,e,t){const n=j(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Pu.forEach((s,a)=>{const u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=j(a);c.onlineState=u;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.wa)g.va(u)&&(h=!0)}),h&&Su(c)}(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function _E(r,e,t){const n=j(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Eu.get(e),s=i&&i.key;if(s){let a=new oe(O.comparator);a=a.insert(s,ce.newNoDocument(s,B.min()));const u=G().add(s),c=new ao(B.min(),new Map,new oe(q),a,u);await xm(n,c),n.du=n.du.remove(s),n.Eu.delete(e),Vu(n)}else await Da(n.localStore,e,!1).then(()=>xa(n,e,t)).catch(An)}async function yE(r,e){const t=j(r),n=e.batch.batchId;try{const i=await ST(t.localStore,e);Mm(t,n,null),Om(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await bi(t,i)}catch(i){await An(i)}}async function IE(r,e,t){const n=j(r);try{const i=await function(a,u){const c=j(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(p=>(F(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(n.localStore,e);Mm(n,e,t),Om(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await bi(n,i)}catch(i){await An(i)}}async function vE(r,e){const t=j(r);Gt(t.remoteStore)||V(mo,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=j(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>u.mutationQueue.getHighestUnacknowledgedBatchId(c))}(t.localStore);if(n===Lt)return void e.resolve();const i=t.Vu.get(n)||[];i.push(e),t.Vu.set(n,i)}catch(n){const i=fo(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Om(r,e){(r.Vu.get(e)||[]).forEach(t=>{t.resolve()}),r.Vu.delete(e)}function Mm(r,e,t){const n=j(r);let i=n.Ru[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ru[n.currentUser.toKey()]=i}}function xa(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(n=>{r.Au.containsKey(n)||Lm(r,n)})}function Lm(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(Tu(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Vu(r))}function kh(r,e,t){for(const n of t)n instanceof Dm?(r.Au.addReference(n.key,e),TE(r,n)):n instanceof km?(V(mo,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||Lm(r,n.key)):M(19791,{yu:n})}function TE(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(V(mo,"New document in limbo: "+t),r.Iu.add(n),Vu(r))}function Vu(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new O(Y.fromString(e)),n=r.mu.next();r.Eu.set(n,new cE(t)),r.du=r.du.insert(t,n),bm(r.remoteStore,new ht($e(Ii(t.path)),n,"TargetPurposeLimboResolution",qe.ue))}}async function bi(r,e,t){const n=j(r),i=[],s=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach((u,c)=>{a.push(n.gu(c,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Iu.Es(c.targetId,h);s.push(p)}}))}),await Promise.all(a),n.hu.J_(i),await async function(c,h){const f=j(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>w.forEach(h,g=>w.forEach(g.Is,R=>f.persistence.referenceDelegate.addReference(p,g.targetId,R)).next(()=>w.forEach(g.ds,R=>f.persistence.referenceDelegate.removeReference(p,g.targetId,R)))))}catch(p){if(!zt(p))throw p;V(vu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const R=f.Fs.get(g),C=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,k)}}}(n.localStore,s))}async function EE(r,e){const t=j(r);if(!t.currentUser.isEqual(e)){V(mo,"User change. New user:",e.toKey());const n=await vm(t.localStore,e);t.currentUser=e,function(s,a){s.Vu.forEach(u=>{u.forEach(c=>{c.reject(new N(S.CANCELLED,a))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await bi(t,n.Bs)}}function wE(r,e){const t=j(r),n=t.Eu.get(e);if(n&&n.lu)return G().add(n.key);{let i=G();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const u=t.Pu.get(a);i=i.unionWith(u.view.tu)}return i}}function Fm(r){const e=j(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_E.bind(null,e),e.hu.J_=sE.bind(null,e.eventManager),e.hu.pu=oE.bind(null,e.eventManager),e}function Um(r){const e=j(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IE.bind(null,e),e}class ci{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ho(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Im(this.persistence,new ym,e.initialUser,this.serializer)}Du(e){return new _u(lo.Vi,this.serializer)}bu(e){return new Em}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ci.provider={build:()=>new ci};class AE extends ci{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){F(this.persistence.referenceDelegate instanceof js,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new hm(n,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Se.withCacheSize(this.cacheSizeBytes):Se.DEFAULT;return new _u(n=>js.Vi(n,t),this.serializer)}}class bE extends ci{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await Um(this.Mu.syncEngine),await Ai(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Im(this.persistence,new ym,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new hm(n,e.asyncQueue,t)}Fu(e,t){const n=new NI(t,this.persistence);return new kI(e.asyncQueue,n)}Du(e){const t=_m(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Se.withCacheSize(this.cacheSizeBytes):Se.DEFAULT;return new yu(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,UT(),_s(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new Em}}class zs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Dh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=EE.bind(null,this.syncEngine),await nE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iE}()}createDatastore(e){const t=ho(e.databaseInfo.databaseId),n=function(s){return new FT(s)}(e.databaseInfo);return function(s,a,u,c){return new zT(s,a,u,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,u){return new GT(n,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Dh(this.syncEngine,t,0),function(){return bh.C()?new bh:new xT}())}createSyncEngine(e,t){return function(i,s,a,u,c,h,f){const p=new lE(i,s,a,u,c,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=j(i);V(wn,"RemoteStore shutting down."),s.Ia.add(5),await hr(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zs.provider={build:()=>new zs};/**
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
 *//**
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
 */class Du{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const qt="FirestoreClient";class RE{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=Ja.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{V(qt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(V(qt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=fo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ta(r,e){r.asyncQueue.verifyOperationInProgress(),V(qt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await vm(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>{it("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{it("Terminating Firestore due to IndexedDb database deletion failed",i)})}),r._offlineComponents=e}async function Nh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Bm(r);V(qt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Ph(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Ph(e.remoteStore,i)),r._onlineComponents=e}async function Bm(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(qt,"Using user provided OfflineComponentProvider");try{await ta(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;it("Error using user provided cache. Falling back to memory cache: "+t),await ta(r,new ci)}}else V(qt,"Using default OfflineComponentProvider"),await ta(r,new AE(void 0));return r._offlineComponents}async function ku(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(qt,"Using user provided OnlineComponentProvider"),await Nh(r,r._uninitializedComponentsProvider._online)):(V(qt,"Using default OnlineComponentProvider"),await Nh(r,new zs))),r._onlineComponents}function jm(r){return Bm(r).then(e=>e.persistence)}function qm(r){return ku(r).then(e=>e.remoteStore)}function zm(r){return ku(r).then(e=>e.syncEngine)}async function $s(r){const e=await ku(r),t=e.eventManager;return t.onListen=hE.bind(null,e.syncEngine),t.onUnlisten=mE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pE.bind(null,e.syncEngine),t}function PE(r){return r.asyncQueue.enqueue(async()=>{const e=await jm(r),t=await qm(r);return e.setNetworkEnabled(!0),function(i){const s=j(i);return s.Ia.delete(0),wi(s)}(t)})}function SE(r){return r.asyncQueue.enqueue(async()=>{const e=await jm(r),t=await qm(r);return e.setNetworkEnabled(!1),async function(i){const s=j(i);s.Ia.add(0),await hr(s),s.Aa.set("Offline")}(t)})}function CE(r,e,t={}){const n=new ze;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new Du({next:g=>{f.Ou(),a.enqueueAndForget(()=>Pu(s,p));const R=g.docs.has(u);!R&&g.fromCache?h.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&g.fromCache&&c&&c.source==="server"?h.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Cu(Ii(u.path),f,{includeMetadataChanges:!0,ka:!0});return Ru(s,p)}(await $s(r),r.asyncQueue,e,t,n)),n.promise}function VE(r,e,t={}){const n=new ze;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new Du({next:g=>{f.Ou(),a.enqueueAndForget(()=>Pu(s,p)),g.fromCache&&c.source==="server"?h.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Cu(u,f,{includeMetadataChanges:!0,ka:!0});return Ru(s,p)}(await $s(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function $m(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const xh=new Map;/**
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
 */const Gm="firestore.googleapis.com",Oh=!0;class Mh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gm,this.ssl=Oh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Oh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=am;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cT)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$m((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class po{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new II;switch(n.type){case"firstParty":return new wI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=xh.get(t);n&&(V("ComponentProvider","Removing Datastore"),xh.delete(t),n.terminate())}(this),Promise.resolve()}}function DE(r,e,t,n={}){var i;r=ge(r,po);const s=or(e),a=r._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),c=`${e}:${t}`;s&&(Xh(`https://${c}`),Jh("Firestore",!0)),a.host!==Gm&&a.host!==c&&it("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:s,emulatorOptions:n});if(!mn(h,u)&&(r._setSettings(h),n.mockUserToken)){let f,p;if(typeof n.mockUserToken=="string")f=n.mockUserToken,p=Te.MOCK_USER;else{f=Qp(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Te(g)}r._authCredentials=new vI(new $d(f,p))}}/**
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
 */class Kt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Kt(this.firestore,e,this._query)}}class le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(pi(t,le._jsonSchema))return new le(e,n||null,new O(Y.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:de("string",le._jsonSchemaVersion),referencePath:de("string")};class Ft extends Kt{constructor(e,t,n){super(e,t,Ii(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new O(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function QE(r,e,...t){if(r=fe(r),Wd("collection","path",e),r instanceof po){const n=Y.fromString(e,...t);return Rl(n),new Ft(r,null,n)}{if(!(r instanceof le||r instanceof Ft))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(e,...t));return Rl(n),new Ft(r.firestore,null,n)}}function kE(r,e,...t){if(r=fe(r),arguments.length===1&&(e=Ja.newId()),Wd("doc","path",e),r instanceof po){const n=Y.fromString(e,...t);return bl(n),new le(r,null,new O(n))}{if(!(r instanceof le||r instanceof Ft))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(e,...t));return bl(n),new le(r.firestore,r instanceof Ft?r.converter:null,new O(n))}}/**
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
 */const Lh="AsyncQueue";class Fh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new wm(this,"async_queue_retry"),this.oc=()=>{const n=_s();n&&V(Lh,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;const t=_s();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=_s();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ze;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!zt(e))throw e;V(Lh,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(n=>{throw this.tc=n,this.nc=!1,Ne("INTERNAL UNHANDLED ERROR: ",Uh(n)),n}).then(n=>(this.nc=!1,n))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=bu.createAndSchedule(this,e,t,n,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:Uh(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Uh(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function Bh(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class Me extends po{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Fh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fh(e),this._firestoreClient=void 0,await e}}}function XE(r,e){const t=typeof r=="object"?r:id(),n=typeof r=="string"?r:Ds,i=Fa(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=Wp("firestore");s&&DE(i,...s)}return i}function Wt(r){if(r._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Km(r),r._firestoreClient}function Km(r){var e,t,n;const i=r._freezeSettings(),s=function(u,c,h,f){return new uv(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$m(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new RE(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function JE(r,e){it("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return NE(r,zs.provider,{build:n=>new bE(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function NE(r,e,t){if((r=ge(r,Me))._firestoreClient||r._terminated)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new N(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Km(r)}function YE(r){if(r._initialized&&!r._terminated)throw new N(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ze;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!et.C())return Promise.resolve();const i=n+gm;await et.delete(i)}(_m(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function ZE(r){return function(t){const n=new ze;return t.asyncQueue.enqueueAndForget(async()=>vE(await zm(t),n)),n.promise}(Wt(r=ge(r,Me)))}function ew(r){return PE(Wt(r=ge(r,Me)))}function tw(r){return SE(Wt(r=ge(r,Me)))}/**
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
 */class je{constructor(e){this._byteString=e}static fromBase64String(e){try{return new je(me.fromBase64String(e))}catch(t){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new je(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:je._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(pi(e,je._jsonSchema))return je.fromBase64String(e.bytes)}}je._jsonSchemaVersion="firestore/bytes/1.0",je._jsonSchema={type:de("string",je._jsonSchemaVersion),bytes:de("string")};/**
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
 */class Ri{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class go{constructor(e){this._methodName=e}}/**
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
 */class tt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tt._jsonSchemaVersion}}static fromJSON(e){if(pi(e,tt._jsonSchema))return new tt(e.latitude,e.longitude)}}tt._jsonSchemaVersion="firestore/geoPoint/1.0",tt._jsonSchema={type:de("string",tt._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(pi(e,nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new nt(e.vectorValues);throw new N(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nt._jsonSchemaVersion="firestore/vectorValue/1.0",nt._jsonSchema={type:de("string",nt._jsonSchemaVersion),vectorValues:de("object")};/**
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
 */const xE=/^__.*__$/;class OE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}}class Wm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new yt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class Nu{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Nu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.fc(e),i}gc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Gs(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Hm(this.Ec)&&xE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ME{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ho(e)}Dc(e,t,n,i=!1){return new Nu({Ec:e,methodName:t,bc:n,path:ae.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pi(r){const e=r._freezeSettings(),t=ho(r._databaseId);return new ME(r._databaseId,!!e.ignoreUndefinedProperties,t)}function xu(r,e,t,n,i,s={}){const a=r.Dc(s.merge||s.mergeFields?2:0,e,t,i);Mu("Data must be an object, but it was:",a,n);const u=Jm(n,a);let c,h;if(s.merge)c=new Oe(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Oa(e,p,t);if(!a.contains(g))throw new N(S.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Zm(f,g)||f.push(g)}c=new Oe(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new OE(new Ce(u),c,h)}class _o extends go{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _o}}class Ou extends go{_toFieldTransform(e){return new Ff(e.path,new tr)}isEqual(e){return e instanceof Ou}}function Qm(r,e,t,n){const i=r.Dc(1,e,t);Mu("Data must be an object, but it was:",i,n);const s=[],a=Ce.empty();$t(n,(c,h)=>{const f=Lu(e,c,t);h=fe(h);const p=i.gc(f);if(h instanceof _o)s.push(f);else{const g=Si(h,p);g!=null&&(s.push(f),a.set(f,g))}});const u=new Oe(s);return new Wm(a,u,i.fieldTransforms)}function Xm(r,e,t,n,i,s){const a=r.Dc(1,e,t),u=[Oa(e,n,t)],c=[i];if(s.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)u.push(Oa(e,s[g])),c.push(s[g+1]);const h=[],f=Ce.empty();for(let g=u.length-1;g>=0;--g)if(!Zm(h,u[g])){const R=u[g];let C=c[g];C=fe(C);const k=a.gc(R);if(C instanceof _o)h.push(R);else{const D=Si(C,k);D!=null&&(h.push(R),f.set(R,D))}}const p=new Oe(h);return new Wm(f,p,a.fieldTransforms)}function LE(r,e,t,n=!1){return Si(t,r.Dc(n?4:3,e))}function Si(r,e){if(Ym(r=fe(r)))return Mu("Unsupported field value:",e,r),Jm(r,e);if(r instanceof go)return function(n,i){if(!Hm(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const u of n){let c=Si(u,i.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Sv(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ee.fromDate(n);return{timestampValue:ir(i.serializer,s)}}if(n instanceof ee){const s=new ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ir(i.serializer,s)}}if(n instanceof tt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof je)return{bytesValue:Gf(i.serializer,n._byteString)};if(n instanceof le){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fu(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof nt)return function(a,u){return{mapValue:{fields:{[su]:{stringValue:ou},[Jn]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.wc("VectorValues must only contain numeric values.");return uu(u.serializer,h)})}}}}}}(n,i);throw i.wc(`Unsupported field value: ${Xs(n)}`)}(r,e)}function Jm(r,e){const t={};return lf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$t(r,(n,i)=>{const s=Si(i,e.Vc(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Ym(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ee||r instanceof tt||r instanceof je||r instanceof le||r instanceof go||r instanceof nt)}function Mu(r,e,t){if(!Ym(t)||!Hd(t)){const n=Xs(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function Oa(r,e,t){if((e=fe(e))instanceof Ri)return e._internalPath;if(typeof e=="string")return Lu(r,e);throw Gs("Field path arguments must be of type string or ",r,!1,void 0,t)}const FE=new RegExp("[~\\*/\\[\\]]");function Lu(r,e,t){if(e.search(FE)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Ri(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Gs(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new N(S.INVALID_ARGUMENT,u+r+c)}function Zm(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class ep{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class UE extends ep{data(){return super.data()}}function Fu(r,e){return typeof e=="string"?Lu(r,e):e instanceof Ri?e._internalPath:e._delegate._internalPath}/**
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
 */function tp(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class np extends Uu{}function nw(r,e,...t){let n=[];e instanceof Uu&&n.push(e),n=n.concat(t),function(s){const a=s.filter(c=>c instanceof Bu).length,u=s.filter(c=>c instanceof yo).length;if(a>1||a>0&&u>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class yo extends np{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new yo(e,t,n)}_apply(e){const t=this._parse(e);return rp(e._query,t),new Kt(e.firestore,e.converter,wa(e._query,t))}_parse(e){const t=Pi(e.firestore);return function(s,a,u,c,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){qh(p,f);const C=[];for(const k of p)C.push(jh(c,s,k));g={arrayValue:{values:C}}}else g=jh(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||qh(p,f),g=LE(u,a,p,f==="in"||f==="not-in");return Q.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rw(r,e,t){const n=e,i=Fu("where",r);return yo._create(i,n,t)}class Bu extends Uu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bu(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const u=s.getFlattenedFilters();for(const c of u)rp(a,c),a=wa(a,c)}(e._query,t),new Kt(e.firestore,e.converter,wa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ju extends np{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new ju(e,t,n)}_apply(e){return new Kt(e.firestore,e.converter,Os(e._query,this._limit,this._limitType))}}function iw(r){return ju._create("limit",r,"F")}function jh(r,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pf(e)&&t.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Y.fromString(t));if(!O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return oi(r,new O(n))}if(t instanceof le)return oi(r,t._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xs(t)}.`)}function qh(r,e){if(!Array.isArray(r)||r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rp(r,e){const t=function(i,s){for(const a of i)for(const u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class BE{convertValue(e,t="none"){switch(Ut(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return $t(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[Jn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>se(a.doubleValue));return new nt(s)}convertGeoPoint(e){return new tt(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=no(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ii(e));default:return null}}convertTimestamp(e){const t=mt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Y.fromString(e);F(tm(n),9688,{name:e});const i=new yn(n.get(1),n.get(3)),s=new O(n.popFirst(5));return i.isEqual(t)||Ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function qu(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class Ur{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dn extends ep{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ys(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Fu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=dn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}dn._jsonSchemaVersion="firestore/documentSnapshot/1.0",dn._jsonSchema={type:de("string",dn._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class ys extends dn{data(e={}){return super.data(e)}}class fn{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ur(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ys(this._firestore,this._userDataWriter,n.key,n,new Ur(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new ys(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ur(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new ys(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Ur(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:jE(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ja.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
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
 */function sw(r){r=ge(r,le);const e=ge(r.firestore,Me);return CE(Wt(e),r._key).then(t=>ip(e,r,t))}fn._jsonSchemaVersion="firestore/querySnapshot/1.0",fn._jsonSchema={type:de("string",fn._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};class zu extends BE{constructor(e){super(),this.firestore=e}convertBytes(e){return new je(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function ow(r){r=ge(r,Kt);const e=ge(r.firestore,Me),t=Wt(e),n=new zu(e);return tp(r._query),VE(t,r._query).then(i=>new fn(e,n,r,i))}function aw(r,e,t){r=ge(r,le);const n=ge(r.firestore,Me),i=qu(r.converter,e,t);return Ci(n,[xu(Pi(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,pe.none())])}function uw(r,e,t,...n){r=ge(r,le);const i=ge(r.firestore,Me),s=Pi(i);let a;return a=typeof(e=fe(e))=="string"||e instanceof Ri?Xm(s,"updateDoc",r._key,e,t,n):Qm(s,"updateDoc",r._key,e),Ci(i,[a.toMutation(r._key,pe.exists(!0))])}function cw(r){return Ci(ge(r.firestore,Me),[new Ti(r._key,pe.none())])}function lw(r,e){const t=ge(r.firestore,Me),n=kE(r),i=qu(r.converter,e);return Ci(t,[xu(Pi(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,pe.exists(!1))]).then(()=>n)}function hw(r,...e){var t,n,i;r=fe(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Bh(e[a])||(s=e[a++]);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Bh(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[a+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,h,f;if(r instanceof le)h=ge(r.firestore,Me),f=Ii(r._key.path),c={next:p=>{e[a]&&e[a](ip(h,r,p))},error:e[a+1],complete:e[a+2]};else{const p=ge(r,Kt);h=ge(p.firestore,Me),f=p._query;const g=new zu(h);c={next:R=>{e[a]&&e[a](new fn(h,g,p,R))},error:e[a+1],complete:e[a+2]},tp(r._query)}return function(g,R,C,k){const D=new Du(k),$=new Cu(R,D,C);return g.asyncQueue.enqueueAndForget(async()=>Ru(await $s(g),$)),()=>{D.Ou(),g.asyncQueue.enqueueAndForget(async()=>Pu(await $s(g),$))}}(Wt(h),f,u,c)}function Ci(r,e){return function(n,i){const s=new ze;return n.asyncQueue.enqueueAndForget(async()=>gE(await zm(n),i,s)),s.promise}(Wt(r),e)}function ip(r,e,t){const n=t.docs.get(e._key),i=new zu(r);return new dn(r,i,e._key,n,new Ur(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class qE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Pi(e)}set(e,t,n){this._verifyNotCommitted();const i=na(e,this._firestore),s=qu(i.converter,t,n),a=xu(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,pe.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=na(e,this._firestore);let a;return a=typeof(t=fe(t))=="string"||t instanceof Ri?Xm(this._dataReader,"WriteBatch.update",s._key,t,n,i):Qm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=na(e,this._firestore);return this._mutations=this._mutations.concat(new Ti(t._key,pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function na(r,e){if((r=fe(r)).firestore!==e)throw new N(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function dw(){return new Ou("serverTimestamp")}/**
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
 */function fw(r){return Wt(r=ge(r,Me)),new qE(r,e=>Ci(r,e))}(function(e,t=!0){(function(i){cr=i})(ar),$n(new pn("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),u=new Me(new TI(n.getProvider("auth-internal")),new AI(a,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Ot(vl,Tl,e),Ot(vl,Tl,"esm2017")})();export{fw as A,St as G,ee as T,tl as _,Ua as a,zE as b,XE as c,tw as d,JE as e,YE as f,WE as g,ew as h,c_ as i,KE as j,kE as k,sw as l,dw as m,aw as n,$E as o,QE as p,cw as q,nw as r,GE as s,rw as t,ow as u,lw as v,ZE as w,uw as x,hw as y,iw as z};
