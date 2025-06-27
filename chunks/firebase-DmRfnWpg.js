var zc={};/**
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
 */const bl=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},nm=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,c=a?r[i+1]:0,u=i+2<r.length,d=u?r[i+2]:0,f=s>>2,p=(s&3)<<4|c>>4;let I=(c&15)<<2|d>>6,b=d&63;u||(b=64,a||(I=64)),n.push(t[f],t[p],t[I],t[b])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(bl(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):nm(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const d=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||d==null||p==null)throw new rm;const I=s<<2|c>>4;if(n.push(I),d!==64){const b=c<<4&240|d>>2;if(n.push(b),p!==64){const V=d<<6&192|p;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class rm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const im=function(r){const e=bl(r);return Pl.encodeByteArray(e,!0)},Fi=function(r){return im(r).replace(/\./g,"")},Sl=function(r){try{return Pl.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const om=()=>sm().__FIREBASE_DEFAULTS__,am=()=>{if(typeof process>"u"||typeof zc>"u")return;const r=zc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},cm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Sl(r[1]);return e&&JSON.parse(e)},as=()=>{try{return om()||am()||cm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Cl=r=>{var e,t;return(t=(e=as())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},um=r=>{const e=Cl(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Vl=()=>{var r;return(r=as())===null||r===void 0?void 0:r.config},Dl=r=>{var e;return(e=as())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class lm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function hm(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Fi(JSON.stringify(t)),Fi(JSON.stringify(a)),""].join(".")}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function fm(){var r;const e=(r=as())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function gm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _m(){const r=me();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function kl(){return!fm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xl(){try{return typeof indexedDB=="object"}catch{return!1}}function ym(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Im="FirebaseError";class at extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Im,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?vm(s,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new at(i,c,n)}}function vm(r,e){return r.replace(Em,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Em=/\{\$([^}]+)}/g;function Tm(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ui(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(Gc(s)&&Gc(a)){if(!Ui(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Gc(r){return r!==null&&typeof r=="object"}/**
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
 */function xr(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function wm(r,e){const t=new Am(r,e);return t.subscribe.bind(t)}class Am{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Rm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Zs),i.error===void 0&&(i.error=Zs),i.complete===void 0&&(i.complete=Zs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rm(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Zs(){}/**
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
 */function he(r){return r&&r._delegate?r._delegate:r}class Jt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class bm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new lm;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sm(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Pm(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pm(r){return r===Bt?void 0:r}function Sm(r){return r.instantiationMode==="EAGER"}/**
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
 */class Cm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const Vm={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Dm=H.INFO,km={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},xm=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=km[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bo{constructor(e){this.name=e,this._logLevel=Dm,this._logHandler=xm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Nm=(r,e)=>e.some(t=>r instanceof t);let $c,Kc;function Om(){return $c||($c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mm(){return Kc||(Kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nl=new WeakMap,ho=new WeakMap,Ol=new WeakMap,eo=new WeakMap,qo=new WeakMap;function Lm(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(wt(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Nl.set(t,r)}).catch(()=>{}),qo.set(e,r),e}function Fm(r){if(ho.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});ho.set(r,e)}let fo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ho.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ol.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Um(r){fo=r(fo)}function Bm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(to(this),e,...t);return Ol.set(n,e.sort?e.sort():[e]),wt(n)}:Mm().includes(r)?function(...e){return r.apply(to(this),e),wt(Nl.get(this))}:function(...e){return wt(r.apply(to(this),e))}}function qm(r){return typeof r=="function"?Bm(r):(r instanceof IDBTransaction&&Fm(r),Nm(r,Om())?new Proxy(r,fo):r)}function wt(r){if(r instanceof IDBRequest)return Lm(r);if(eo.has(r))return eo.get(r);const e=qm(r);return e!==r&&(eo.set(r,e),qo.set(e,r)),e}const to=r=>qo.get(r);function jm(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),c=wt(a);return n&&a.addEventListener("upgradeneeded",u=>{n(wt(a.result),u.oldVersion,u.newVersion,wt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const zm=["get","getKey","getAll","getAllKeys","count"],Gm=["put","add","delete","clear"],no=new Map;function Hc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(no.get(e))return no.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Gm.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||zm.includes(t)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return no.set(e,s),s}Um(r=>({...r,get:(e,t,n)=>Hc(e,t)||r.get(e,t,n),has:(e,t)=>!!Hc(e,t)||r.has(e,t)}));/**
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
 */class $m{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Km(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Km(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",Wc="0.10.17";/**
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
 */const rt=new Bo("@firebase/app"),Hm="@firebase/app-compat",Wm="@firebase/analytics-compat",Qm="@firebase/analytics",Jm="@firebase/app-check-compat",Xm="@firebase/app-check",Ym="@firebase/auth",Zm="@firebase/auth-compat",ep="@firebase/database",tp="@firebase/data-connect",np="@firebase/database-compat",rp="@firebase/functions",ip="@firebase/functions-compat",sp="@firebase/installations",op="@firebase/installations-compat",ap="@firebase/messaging",cp="@firebase/messaging-compat",up="@firebase/performance",lp="@firebase/performance-compat",hp="@firebase/remote-config",dp="@firebase/remote-config-compat",fp="@firebase/storage",mp="@firebase/storage-compat",pp="@firebase/firestore",gp="@firebase/vertexai",_p="@firebase/firestore-compat",yp="firebase",Ip="11.1.0";/**
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
 */const po="[DEFAULT]",vp={[mo]:"fire-core",[Hm]:"fire-core-compat",[Qm]:"fire-analytics",[Wm]:"fire-analytics-compat",[Xm]:"fire-app-check",[Jm]:"fire-app-check-compat",[Ym]:"fire-auth",[Zm]:"fire-auth-compat",[ep]:"fire-rtdb",[tp]:"fire-data-connect",[np]:"fire-rtdb-compat",[rp]:"fire-fn",[ip]:"fire-fn-compat",[sp]:"fire-iid",[op]:"fire-iid-compat",[ap]:"fire-fcm",[cp]:"fire-fcm-compat",[up]:"fire-perf",[lp]:"fire-perf-compat",[hp]:"fire-rc",[dp]:"fire-rc-compat",[fp]:"fire-gcs",[mp]:"fire-gcs-compat",[pp]:"fire-fst",[_p]:"fire-fst-compat",[gp]:"fire-vertex","fire-js":"fire-js",[yp]:"fire-js-all"};/**
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
 */const Bi=new Map,Ep=new Map,go=new Map;function Qc(r,e){try{r.container.addComponent(e)}catch(t){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Rn(r){const e=r.name;if(go.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;go.set(e,r);for(const t of Bi.values())Qc(t,r);for(const t of Ep.values())Qc(t,r);return!0}function jo(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ye(r){return r.settings!==void 0}/**
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
 */const Tp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new kr("app","Firebase",Tp);/**
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
 */class wp{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const Ln=Ip;function Ap(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:po,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(t||(t=Vl()),!t)throw At.create("no-options");const s=Bi.get(i);if(s){if(Ui(t,s.options)&&Ui(n,s.config))return s;throw At.create("duplicate-app",{appName:i})}const a=new Cm(i);for(const u of go.values())a.addComponent(u);const c=new wp(t,n,a);return Bi.set(i,c),c}function Ml(r=po){const e=Bi.get(r);if(!e&&r===po&&Vl())return Ap();if(!e)throw At.create("no-app",{appName:r});return e}function Rt(r,e,t){var n;let i=(n=vp[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rt.warn(c.join(" "));return}Rn(new Jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rp="firebase-heartbeat-database",bp=1,Er="firebase-heartbeat-store";let ro=null;function Ll(){return ro||(ro=jm(Rp,bp,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Er)}catch(t){console.warn(t)}}}}).catch(r=>{throw At.create("idb-open",{originalErrorMessage:r.message})})),ro}async function Pp(r){try{const t=(await Ll()).transaction(Er),n=await t.objectStore(Er).get(Fl(r));return await t.done,n}catch(e){if(e instanceof at)rt.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rt.warn(t.message)}}}async function Jc(r,e){try{const n=(await Ll()).transaction(Er,"readwrite");await n.objectStore(Er).put(e,Fl(r)),await n.done}catch(t){if(t instanceof at)rt.warn(t.message);else{const n=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rt.warn(n.message)}}}function Fl(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Sp=1024,Cp=30*24*60*60*1e3;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kp(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Cp}),this._storage.overwrite(this._heartbeatsCache))}catch(n){rt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xc(),{heartbeatsToSend:n,unsentEntries:i}=Dp(this._heartbeatsCache.heartbeats),s=Fi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return rt.warn(t),""}}}function Xc(){return new Date().toISOString().substring(0,10)}function Dp(r,e=Sp){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Yc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Yc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xl()?ym().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yc(r){return Fi(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function xp(r){Rn(new Jt("platform-logger",e=>new $m(e),"PRIVATE")),Rn(new Jt("heartbeat",e=>new Vp(e),"PRIVATE")),Rt(mo,Wc,r),Rt(mo,Wc,"esm2017"),Rt("fire-js","")}xp("");var Zc=function(){return Zc=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Zc.apply(this,arguments)};function zo(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function Wv(r,e,t){if(t||arguments.length===2)for(var n=0,i=e.length,s;n<i;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return r.concat(s||Array.prototype.slice.call(e))}function Ul(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Np=Ul,Bl=new kr("auth","Firebase",Ul());/**
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
 */const qi=new Bo("@firebase/auth");function Op(r,...e){qi.logLevel<=H.WARN&&qi.warn(`Auth (${Ln}): ${r}`,...e)}function Ai(r,...e){qi.logLevel<=H.ERROR&&qi.error(`Auth (${Ln}): ${r}`,...e)}/**
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
 */function He(r,...e){throw $o(r,...e)}function je(r,...e){return $o(r,...e)}function Go(r,e,t){const n=Object.assign(Object.assign({},Np()),{[e]:t});return new kr("auth","Firebase",n).create(e,{appName:r.name})}function Ht(r){return Go(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mp(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&He(r,"argument-error"),Go(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $o(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Bl.create(r,...e)}function j(r,e,...t){if(!r)throw $o(e,...t)}function Ze(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ai(e),new Error(e)}function it(r,e){r||Ze(e)}/**
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
 */function _o(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Lp(){return eu()==="http:"||eu()==="https:"}function eu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Fp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lp()||pm()||"connection"in navigator)?navigator.onLine:!0}function Up(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Nr{constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile=dm()||gm()}get(){return Fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ko(r,e){it(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ql{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qp=new Nr(3e4,6e4);function Ho(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Fn(r,e,t,n,i={}){return jl(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const c=xr(Object.assign({key:r.config.apiKey},a)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:u},s);return mm()||(d.referrerPolicy="no-referrer"),ql.fetch()(zl(r,r.config.apiHost,t,c),d)})}async function jl(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Bp),e);try{const i=new zp(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw gi(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw gi(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw gi(r,"user-disabled",a);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Go(r,f,d);He(r,f)}}catch(i){if(i instanceof at)throw i;He(r,"network-request-failed",{message:String(i)})}}async function jp(r,e,t,n,i={}){const s=await Fn(r,e,t,n,i);return"mfaPendingCredential"in s&&He(r,"multi-factor-auth-required",{_serverResponse:s}),s}function zl(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?Ko(r.config,i):`${r.config.apiScheme}://${i}`}class zp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(je(this.auth,"network-request-failed")),qp.get())})}}function gi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=je(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function Gp(r,e){return Fn(r,"POST","/v1/accounts:delete",e)}async function Gl(r,e){return Fn(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function pr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $p(r,e=!1){const t=he(r),n=await t.getIdToken(e),i=Wo(n);j(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:pr(io(i.auth_time)),issuedAtTime:pr(io(i.iat)),expirationTime:pr(io(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function io(r){return Number(r)*1e3}function Wo(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sl(t);return i?JSON.parse(i):(Ai("Failed to decode base64 JWT payload"),null)}catch(i){return Ai("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tu(r){const e=Wo(r);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Tr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof at&&Kp(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Kp({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Hp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ji(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Tr(r,Gl(t,{idToken:n}));j(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$l(s.providerUserInfo):[],c=Qp(r.providerData,a),u=r.isAnonymous,d=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new yo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function Wp(r){const e=he(r);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qp(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function $l(r){return r.map(e=>{var{providerId:t}=e,n=zo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Jp(r,e){const t=await jl(r,{},async()=>{const n=xr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=zl(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ql.fetch()(a,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xp(r,e){return Fn(r,"POST","/v2/accounts:revokeToken",Ho(r,e))}/**
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
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=tu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Jp(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new En;return n&&(j(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(j(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function mt(r,e){j(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class et{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=zo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $p(this,e)}reload(){return Wp(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ji(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(Ht(this.auth));const e=await this.getIdToken();return await Tr(this,Gp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,c,u,d,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,q=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:Q,isAnonymous:Z,providerData:K,stsTokenManager:v}=t;j(F&&v,e,"internal-error");const g=En.fromJSON(this.name,v);j(typeof F=="string",e,"internal-error"),mt(p,e.name),mt(I,e.name),j(typeof Q=="boolean",e,"internal-error"),j(typeof Z=="boolean",e,"internal-error"),mt(b,e.name),mt(V,e.name),mt(x,e.name),mt(D,e.name),mt(G,e.name),mt(q,e.name);const y=new et({uid:F,auth:e,email:I,emailVerified:Q,displayName:p,isAnonymous:Z,photoURL:V,phoneNumber:b,tenantId:x,stsTokenManager:g,createdAt:G,lastLoginAt:q});return K&&Array.isArray(K)&&(y.providerData=K.map(E=>Object.assign({},E))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new En;i.updateFromServerResponse(t);const s=new et({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ji(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];j(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$l(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new En;c.updateFromIdToken(n);const u=new et({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const nu=new Map;function tt(r){it(r instanceof Function,"Expected a class definition");let e=nu.get(r);return e?(it(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,nu.set(r,e),e)}/**
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
 */class Kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kl.type="NONE";const ru=Kl;/**
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
 */function Ri(r,e,t){return`firebase:${r}:${e}:${t}`}class Tn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Ri(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ri("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?et._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Tn(tt(ru),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||tt(ru);const a=Ri(n,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){const p=et._fromJSON(e,f);d!==s&&(c=p),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Tn(s,e,n):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Tn(s,e,n))}}/**
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
 */function iu(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yl(e))return"Blackberry";if(Zl(e))return"Webos";if(Wl(e))return"Safari";if((e.includes("chrome/")||Ql(e))&&!e.includes("edge/"))return"Chrome";if(Xl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Hl(r=me()){return/firefox\//i.test(r)}function Wl(r=me()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ql(r=me()){return/crios\//i.test(r)}function Jl(r=me()){return/iemobile/i.test(r)}function Xl(r=me()){return/android/i.test(r)}function Yl(r=me()){return/blackberry/i.test(r)}function Zl(r=me()){return/webos/i.test(r)}function Qo(r=me()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Yp(r=me()){var e;return Qo(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zp(){return _m()&&document.documentMode===10}function eh(r=me()){return Qo(r)||Xl(r)||Zl(r)||Yl(r)||/windows phone/i.test(r)||Jl(r)}/**
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
 */function th(r,e=[]){let t;switch(r){case"Browser":t=iu(me());break;case"Worker":t=`${iu(me())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ln}/${n}`}/**
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
 */class eg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function tg(r,e={}){return Fn(r,"GET","/v2/passwordPolicy",Ho(r,e))}/**
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
 */const ng=6;class rg{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ng,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ig{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new su(this),this.idTokenSubscription=new su(this),this.beforeStateQueue=new eg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gl(this,{idToken:e}),n=await et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ye(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Up()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ye(this.app))return Promise.reject(Ht(this));const t=e?he(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(Ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ye(this.app)?Promise.reject(Ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tg(this),t=new rg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Xp(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=th(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Op(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function cs(r){return he(r)}class su{constructor(e){this.auth=e,this.observer=null,this.addObserver=wm(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sg(r){Jo=r}function og(r){return Jo.loadJS(r)}function ag(){return Jo.gapiScript}function cg(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ug(r,e){const t=jo(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ui(s,e??{}))return i;He(i,"already-initialized")}return t.initialize({options:e})}function lg(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(tt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function hg(r,e,t){const n=cs(r);j(n._canInitEmulator,n,"emulator-config-failed"),j(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=nh(e),{host:a,port:c}=dg(e),u=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${a}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),fg()}function nh(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function dg(r){const e=nh(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:ou(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:ou(a)}}}function ou(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function fg(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class rh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}/**
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
 */async function wn(r,e){return jp(r,"POST","/v1/accounts:signInWithIdp",Ho(r,e))}/**
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
 */const mg="http://localhost";class Xt extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):He("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=zo(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Xt(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return wn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,wn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wn(e,t)}buildRequest(){const e={requestUri:mg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xr(t)}return e}}/**
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
 */class Xo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Or extends Xo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _t extends Or{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
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
 */class yt extends Or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return yt.credential(t,n)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
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
 */class It extends Or{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class vt extends Or{constructor(){super("twitter.com")}static credential(e,t){return Xt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vt.credential(t,n)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */class bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await et._fromIdTokenResponse(e,n,i),a=au(n);return new bn({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=au(n);return new bn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function au(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class zi extends at{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new zi(e,t,n,i)}}function ih(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(r,s,e,n):s})}async function pg(r,e,t=!1){const n=await Tr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return bn._forOperation(r,"link",n)}/**
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
 */async function gg(r,e,t=!1){const{auth:n}=r;if(Ye(n.app))return Promise.reject(Ht(n));const i="reauthenticate";try{const s=await Tr(r,ih(n,i,e,r),t);j(s.idToken,n,"internal-error");const a=Wo(s.idToken);j(a,n,"internal-error");const{sub:c}=a;return j(r.uid===c,n,"user-mismatch"),bn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&He(n,"user-mismatch"),s}}/**
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
 */async function _g(r,e,t=!1){if(Ye(r.app))return Promise.reject(Ht(r));const n="signIn",i=await ih(r,n,e),s=await bn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function yg(r,e,t,n){return he(r).onIdTokenChanged(e,t,n)}function Ig(r,e,t){return he(r).beforeAuthStateChanged(e,t)}function Qv(r,e,t,n){return he(r).onAuthStateChanged(e,t,n)}function Jv(r){return he(r).signOut()}const Gi="__sak";/**
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
 */class sh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gi,"1"),this.storage.removeItem(Gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vg=1e3,Eg=10;class oh extends sh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);Zp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Eg):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oh.type="LOCAL";const Tg=oh;/**
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
 */class ah extends sh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ah.type="SESSION";const ch=ah;/**
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
 */function wg(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new us(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),u=await wg(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}us.receivers=[];/**
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
 */function Yo(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Ag{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const d=Yo("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(p){const I=p;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(I.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ke(){return window}function Rg(r){Ke().location.href=r}/**
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
 */function uh(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function bg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pg(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Sg(){return uh()?self:null}/**
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
 */const lh="firebaseLocalStorageDb",Cg=1,$i="firebaseLocalStorage",hh="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ls(r,e){return r.transaction([$i],e?"readwrite":"readonly").objectStore($i)}function Vg(){const r=indexedDB.deleteDatabase(lh);return new Mr(r).toPromise()}function Io(){const r=indexedDB.open(lh,Cg);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore($i,{keyPath:hh})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains($i)?e(n):(n.close(),await Vg(),e(await Io()))})})}async function cu(r,e,t){const n=ls(r,!0).put({[hh]:e,value:t});return new Mr(n).toPromise()}async function Dg(r,e){const t=ls(r,!1).get(e),n=await new Mr(t).toPromise();return n===void 0?null:n.value}function uu(r,e){const t=ls(r,!0).delete(e);return new Mr(t).toPromise()}const kg=800,xg=3;class dh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Io(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>xg)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(Sg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bg(),!this.activeServiceWorker)return;this.sender=new Ag(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Io();return await cu(e,Gi,"1"),await uu(e,Gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>cu(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Dg(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>uu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ls(i,!1).getAll();return new Mr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dh.type="LOCAL";const Ng=dh;new Nr(3e4,6e4);/**
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
 */function fh(r,e){return e?tt(e):(j(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Zo extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Og(r){return _g(r.auth,new Zo(r),r.bypassAuthState)}function Mg(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),gg(t,new Zo(r),r.bypassAuthState)}async function Lg(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),pg(t,new Zo(r),r.bypassAuthState)}/**
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
 */class mh{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Og;case"linkViaPopup":case"linkViaRedirect":return Lg;case"reauthViaPopup":case"reauthViaRedirect":return Mg;default:He(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Fg=new Nr(2e3,1e4);async function Xv(r,e,t){if(Ye(r.app))return Promise.reject(je(r,"operation-not-supported-in-this-environment"));const n=cs(r);Mp(r,e,Xo);const i=fh(n,t);return new Kt(n,"signInViaPopup",e,i).executeNotNull()}class Kt extends mh{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=Yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fg.get())};e()}}Kt.currentPopupAction=null;/**
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
 */const Ug="pendingRedirect",bi=new Map;class Bg extends mh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const n=await qg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qg(r,e){const t=Gg(e),n=zg(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function jg(r,e){bi.set(r._key(),e)}function zg(r){return tt(r._redirectPersistence)}function Gg(r){return Ri(Ug,r.config.apiKey,r.name)}async function $g(r,e,t=!1){if(Ye(r.app))return Promise.reject(Ht(r));const n=cs(r),i=fh(n,e),a=await new Bg(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Kg=10*60*1e3;class Hg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ph(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(je(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kg&&this.cachedEventUids.clear(),this.cachedEventUids.has(lu(e))}saveEventToCache(e){this.cachedEventUids.add(lu(e)),this.lastProcessedEventTime=Date.now()}}function lu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ph({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wg(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ph(r);default:return!1}}/**
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
 */async function Qg(r,e={}){return Fn(r,"GET","/v1/projects",e)}/**
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
 */const Jg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xg=/^https?/;async function Yg(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Qg(r);for(const t of e)try{if(Zg(t))return}catch{}He(r,"unauthorized-domain")}function Zg(r){const e=_o(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Xg.test(t))return!1;if(Jg.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const e_=new Nr(3e4,6e4);function hu(){const r=Ke().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function t_(r){return new Promise((e,t)=>{var n,i,s;function a(){hu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hu(),t(je(r,"network-request-failed"))},timeout:e_.get()})}if(!((i=(n=Ke().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)a();else{const c=cg("iframefcb");return Ke()[c]=()=>{gapi.load?a():t(je(r,"network-request-failed"))},og(`${ag()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Pi=null,e})}let Pi=null;function n_(r){return Pi=Pi||t_(r),Pi}/**
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
 */const r_=new Nr(5e3,15e3),i_="__/auth/iframe",s_="emulator/auth/iframe",o_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},a_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c_(r){const e=r.config;j(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ko(e,s_):`https://${r.config.authDomain}/${i_}`,n={apiKey:e.apiKey,appName:r.name,v:Ln},i=a_.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${xr(n).slice(1)}`}async function u_(r){const e=await n_(r),t=Ke().gapi;return j(t,r,"internal-error"),e.open({where:document.body,url:c_(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o_,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=je(r,"network-request-failed"),c=Ke().setTimeout(()=>{s(a)},r_.get());function u(){Ke().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const l_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},h_=500,d_=600,f_="_blank",m_="http://localhost";class du{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p_(r,e,t,n=h_,i=d_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u=Object.assign(Object.assign({},l_),{width:n.toString(),height:i.toString(),top:s,left:a}),d=me().toLowerCase();t&&(c=Ql(d)?f_:t),Hl(d)&&(e=e||m_,u.scrollbars="yes");const f=Object.entries(u).reduce((I,[b,V])=>`${I}${b}=${V},`,"");if(Yp(d)&&c!=="_self")return g_(e||"",c),new du(null);const p=window.open(e||"",c,f);j(p,r,"popup-blocked");try{p.focus()}catch{}return new du(p)}function g_(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const __="__/auth/handler",y_="emulator/auth/handler",I_=encodeURIComponent("fac");async function fu(r,e,t,n,i,s){j(r.config.authDomain,r,"auth-domain-config-required"),j(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Ln,eventId:i};if(e instanceof Xo){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Tm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Or){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),d=u?`#${I_}=${encodeURIComponent(u)}`:"";return`${v_(r)}?${xr(c).slice(1)}${d}`}function v_({config:r}){return r.emulator?Ko(r,y_):`https://${r.authDomain}/${__}`}/**
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
 */const so="webStorageSupport";class E_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ch,this._completeRedirectFn=$g,this._overrideRedirectResult=jg}async _openPopup(e,t,n,i){var s;it((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await fu(e,t,n,_o(),i);return p_(e,a,Yo())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await fu(e,t,n,_o(),i);return Rg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(it(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await u_(e),n=new Hg(e);return t.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(so,{type:so},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[so];a!==void 0&&t(!!a),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eh()||Wl()||Qo()}}const T_=E_;var mu="@firebase/auth",pu="1.8.1";/**
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
 */class w_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A_(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R_(r){Rn(new Jt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:th(r)},d=new ig(n,i,s,u);return lg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Rn(new Jt("auth-internal",e=>{const t=cs(e.getProvider("auth").getImmediate());return(n=>new w_(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(mu,pu,A_(r)),Rt(mu,pu,"esm2017")}/**
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
 */const b_=5*60,P_=Dl("authIdTokenMaxAge")||b_;let gu=null;const S_=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>P_)return;const i=t==null?void 0:t.token;gu!==i&&(gu=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yv(r=Ml()){const e=jo(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ug(r,{popupRedirectResolver:T_,persistence:[Ng,Tg,ch]}),n=Dl("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=S_(s.toString());Ig(t,a,()=>a(t.currentUser)),yg(t,c=>a(c))}}const i=Cl("auth");return i&&hg(t,`http://${i}`),t}function C_(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}sg({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=je("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",C_().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R_("Browser");var V_="firebase",D_="11.1.0";/**
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
 */Rt(V_,D_,"app");var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,gh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function y(){}y.prototype=g.prototype,v.D=g.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(E,T,R){for(var _=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)_[Qe-2]=arguments[Qe];return g.prototype[T].apply(E,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,y){y||(y=0);var E=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)E[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;16>T;++T)E[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=v.g[0],y=v.g[1],T=v.g[2];var R=v.g[3],_=g+(R^y&(T^R))+E[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+E[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+E[2]+606105819&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+E[3]+3250441966&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+E[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+E[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+E[6]+2821735955&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+E[7]+4249261313&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+E[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+E[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+E[10]+4294925233&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+E[11]+2304563134&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(R^y&(T^R))+E[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(T^g&(y^T))+E[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=T+(y^R&(g^y))+E[14]+2792965006&4294967295,T=R+(_<<17&4294967295|_>>>15),_=y+(g^T&(R^g))+E[15]+1236535329&4294967295,y=T+(_<<22&4294967295|_>>>10),_=g+(T^R&(y^T))+E[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+E[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+E[11]+643717713&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+E[0]+3921069994&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+E[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+E[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+E[15]+3634488961&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+E[4]+3889429448&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+E[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+E[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+E[3]+4107603335&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+E[8]+1163531501&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(T^R&(y^T))+E[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^T&(g^y))+E[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=T+(g^y&(R^g))+E[7]+1735328473&4294967295,T=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(T^R))+E[12]+2368359562&4294967295,y=T+(_<<20&4294967295|_>>>12),_=g+(y^T^R)+E[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+E[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+E[11]+1839030562&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+E[14]+4259657740&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+E[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+E[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+E[7]+4139469664&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+E[10]+3200236656&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+E[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+E[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+E[3]+3572445317&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+E[6]+76029189&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(y^T^R)+E[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^T)+E[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=T+(R^g^y)+E[15]+530742520&4294967295,T=R+(_<<16&4294967295|_>>>16),_=y+(T^R^g)+E[2]+3299628645&4294967295,y=T+(_<<23&4294967295|_>>>9),_=g+(T^(y|~R))+E[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+E[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+E[14]+2878612391&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+E[5]+4237533241&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+E[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+E[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+E[10]+4293915773&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+E[1]+2240044497&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+E[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+E[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+E[6]+2734768916&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+E[13]+1309151649&4294967295,y=T+(_<<21&4294967295|_>>>11),_=g+(T^(y|~R))+E[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~T))+E[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=T+(g^(R|~y))+E[2]+718787259&4294967295,T=R+(_<<15&4294967295|_>>>17),_=y+(R^(T|~g))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+R&4294967295}n.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var y=g-this.blockSize,E=this.B,T=this.h,R=0;R<g;){if(T==0)for(;R<=y;)i(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<g;)if(E[T++]=v.charCodeAt(R++),T==this.blockSize){i(this,E),T=0;break}}else for(;R<g;)if(E[T++]=v[R++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=g},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var y=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=y&255,y/=256;for(this.u(v),v=Array(16),g=y=0;4>g;++g)for(var E=0;32>E;E+=8)v[y++]=this.g[g]>>>E&255;return v};function s(v,g){var y=c;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=g(v)}function a(v,g){this.h=g;for(var y=[],E=!0,T=v.length-1;0<=T;T--){var R=v[T]|0;E&&R==g||(y[T]=R,E=!1)}this.g=y}var c={};function u(v){return-128<=v&&128>v?s(v,function(g){return new a([g|0],0>g?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return D(d(-v));for(var g=[],y=1,E=0;v>=y;E++)g[E]=v/y|0,y*=4294967296;return new a(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return D(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),E=p,T=0;T<v.length;T+=8){var R=Math.min(8,v.length-T),_=parseInt(v.substring(T,T+R),g);8>R?(R=d(Math.pow(g,R)),E=E.j(R).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var p=u(0),I=u(1),b=u(16777216);r=a.prototype,r.m=function(){if(x(this))return-D(this).m();for(var v=0,g=1,y=0;y<this.g.length;y++){var E=this.i(y);v+=(0<=E?E:4294967296+E)*g,g*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(x(this))return"-"+D(this).toString(v);for(var g=d(Math.pow(v,6)),y=this,E="";;){var T=Q(y,g).g;y=G(y,T.j(g));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=T,V(y))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function x(v){return v.h==-1}r.l=function(v){return v=G(this,v),x(v)?-1:V(v)?0:1};function D(v){for(var g=v.g.length,y=[],E=0;E<g;E++)y[E]=~v.g[E];return new a(y,~v.h).add(I)}r.abs=function(){return x(this)?D(this):this},r.add=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],E=0,T=0;T<=g;T++){var R=E+(this.i(T)&65535)+(v.i(T)&65535),_=(R>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=_>>>16,R&=65535,_&=65535,y[T]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(v,g){return v.add(D(g))}r.j=function(v){if(V(this)||V(v))return p;if(x(this))return x(v)?D(this).j(D(v)):D(D(this).j(v));if(x(v))return D(this.j(D(v)));if(0>this.l(b)&&0>v.l(b))return d(this.m()*v.m());for(var g=this.g.length+v.g.length,y=[],E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<v.g.length;T++){var R=this.i(E)>>>16,_=this.i(E)&65535,Qe=v.i(T)>>>16,jn=v.i(T)&65535;y[2*E+2*T]+=_*jn,q(y,2*E+2*T),y[2*E+2*T+1]+=R*jn,q(y,2*E+2*T+1),y[2*E+2*T+1]+=_*Qe,q(y,2*E+2*T+1),y[2*E+2*T+2]+=R*Qe,q(y,2*E+2*T+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new a(y,0)};function q(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function F(v,g){this.g=v,this.h=g}function Q(v,g){if(V(g))throw Error("division by zero");if(V(v))return new F(p,p);if(x(v))return g=Q(D(v),g),new F(D(g.g),D(g.h));if(x(g))return g=Q(v,D(g)),new F(D(g.g),g.h);if(30<v.g.length){if(x(v)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=I,E=g;0>=E.l(v);)y=Z(y),E=Z(E);var T=K(y,1),R=K(E,1);for(E=K(E,2),y=K(y,2);!V(E);){var _=R.add(E);0>=_.l(v)&&(T=T.add(y),R=_),E=K(E,1),y=K(y,1)}return g=G(v,T.j(g)),new F(T,g)}for(T=p;0<=v.l(g);){for(y=Math.max(1,Math.floor(v.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(y),_=R.j(g);x(_)||0<_.l(v);)y-=E,R=d(y),_=R.j(g);V(R)&&(R=I),T=T.add(R),v=G(v,_)}return new F(T,v)}r.A=function(v){return Q(this,v).h},r.and=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)&v.i(E);return new a(y,this.h&v.h)},r.or=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)|v.i(E);return new a(y,this.h|v.h)},r.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)^v.i(E);return new a(y,this.h^v.h)};function Z(v){for(var g=v.g.length+1,y=[],E=0;E<g;E++)y[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(y,v.h)}function K(v,g){var y=g>>5;g%=32;for(var E=v.g.length-y,T=[],R=0;R<E;R++)T[R]=0<g?v.i(R+y)>>>g|v.i(R+y+1)<<32-g:v.i(R+y);return new a(T,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,gh=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Wt=a}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _h,lr,yh,Si,vo,Ih,vh,Eh;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof _i=="object"&&_i];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function i(o,l){if(l)e:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in h))break e;h=h[A]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,m=!1,A={next:function(){if(!m&&h<o.length){var P=h++;return{value:l(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function p(o,l,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function I(o,l,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,I.apply(null,arguments)}function b(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,A,P){for(var k=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)k[ne-2]=arguments[ne];return l.prototype[A].apply(m,k)}}function x(o){const l=o.length;if(0<l){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function D(o,l){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(u(m)){const A=o.length||0,P=m.length||0;o.length=A+P;for(let k=0;k<P;k++)o[A+k]=m[k]}else o.push(m)}}class G{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var Z=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function K(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function v(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)o[h]=m[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function T(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function R(o){c.setTimeout(()=>{throw o},0)}function _(){var o=Cs;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Qe{constructor(){this.h=this.g=null}add(l,h){const m=jn.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var jn=new G(()=>new Ef,o=>o.reset());class Ef{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let zn,Gn=!1,Cs=new Qe,za=()=>{const o=c.Promise.resolve(void 0);zn=()=>{o.then(Tf)}};var Tf=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var l=jn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Gn=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var wf=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function $n(o,l){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Z){e:{try{Q(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Af[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&$n.aa.h.call(this)}}V($n,Ee);var Af={2:"touch",3:"pen",4:"mouse"};$n.prototype.h=function(){$n.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xr="closure_listenable_"+(1e6*Math.random()|0),Rf=0;function bf(o,l,h,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=A,this.key=++Rf,this.da=this.fa=!1}function Yr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Zr(o){this.src=o,this.g={},this.h=0}Zr.prototype.add=function(o,l,h,m,A){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var k=Ds(o,l,m,A);return-1<k?(l=o[k],h||(l.fa=!1)):(l=new bf(l,this.src,P,!!m,A),l.fa=h,o.push(l)),l};function Vs(o,l){var h=l.type;if(h in o.g){var m=o.g[h],A=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(m,A,1),P&&(Yr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ds(o,l,h,m){for(var A=0;A<o.length;++A){var P=o[A];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==m)return A}return-1}var ks="closure_lm_"+(1e6*Math.random()|0),xs={};function Ga(o,l,h,m,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)Ga(o,l[P],h,m,A);return null}return h=Ha(h),o&&o[Xr]?o.K(l,h,d(m)?!!m.capture:!!m,A):Pf(o,l,h,!1,m,A)}function Pf(o,l,h,m,A,P){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,ne=Os(o);if(ne||(o[ks]=ne=new Zr(o)),h=ne.add(l,h,m,k,P),h.proxy)return h;if(m=Sf(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)wf||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(Ka(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Sf(){function o(h){return l.call(o.src,o.listener,h)}const l=Cf;return o}function $a(o,l,h,m,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)$a(o,l[P],h,m,A);else m=d(m)?!!m.capture:!!m,h=Ha(h),o&&o[Xr]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],h=Ds(P,h,m,A),-1<h&&(Yr(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Os(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ds(l,h,m,A)),(h=-1<o?l[o]:null)&&Ns(h))}function Ns(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Xr])Vs(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(Ka(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=Os(l))?(Vs(h,o),h.h==0&&(h.src=null,l[ks]=null)):Yr(o)}}}function Ka(o){return o in xs?xs[o]:xs[o]="on"+o}function Cf(o,l){if(o.da)o=!0;else{l=new $n(l,this);var h=o.listener,m=o.ha||o.src;o.fa&&Ns(o),o=h.call(m,l)}return o}function Os(o){return o=o[ks],o instanceof Zr?o:null}var Ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ha(o){return typeof o=="function"?o:(o[Ms]||(o[Ms]=function(l){return o.handleEvent(l)}),o[Ms])}function Te(){lt.call(this),this.i=new Zr(this),this.M=this,this.F=null}V(Te,lt),Te.prototype[Xr]=!0,Te.prototype.removeEventListener=function(o,l,h,m){$a(this,o,l,h,m)};function Ve(o,l){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new Ee(l,o);else if(l instanceof Ee)l.target=l.target||o;else{var A=l;l=new Ee(m,o),E(l,A)}if(A=!0,h)for(var P=h.length-1;0<=P;P--){var k=l.g=h[P];A=ei(k,m,!0,l)&&A}if(k=l.g=o,A=ei(k,m,!0,l)&&A,A=ei(k,m,!1,l)&&A,h)for(P=0;P<h.length;P++)k=l.g=h[P],A=ei(k,m,!1,l)&&A}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],m=0;m<h.length;m++)Yr(h[m]);delete o.g[l],o.h--}}this.F=null},Te.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},Te.prototype.L=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function ei(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var k=l[P];if(k&&!k.da&&k.capture==h){var ne=k.listener,ye=k.ha||k.src;k.fa&&Vs(o.i,k),A=ne.call(ye,m)!==!1&&A}}return A&&!m.defaultPrevented}function Wa(o,l,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Qa(o){o.g=Wa(()=>{o.g=null,o.i&&(o.i=!1,Qa(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Vf extends lt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Qa(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(o){lt.call(this),this.h=o,this.g={}}V(Kn,lt);var Ja=[];function Xa(o){K(o.g,function(l,h){this.g.hasOwnProperty(h)&&Ns(l)},o),o.g={}}Kn.prototype.N=function(){Kn.aa.N.call(this),Xa(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ls=c.JSON.stringify,Df=c.JSON.parse,kf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Fs(){}Fs.prototype.h=null;function Ya(o){return o.h||(o.h=o.i())}function Za(){}var Hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Us(){Ee.call(this,"d")}V(Us,Ee);function Bs(){Ee.call(this,"c")}V(Bs,Ee);var Ot={},ec=null;function ti(){return ec=ec||new Te}Ot.La="serverreachability";function tc(o){Ee.call(this,Ot.La,o)}V(tc,Ee);function Wn(o){const l=ti();Ve(l,new tc(l))}Ot.STAT_EVENT="statevent";function nc(o,l){Ee.call(this,Ot.STAT_EVENT,o),this.stat=l}V(nc,Ee);function De(o){const l=ti();Ve(l,new nc(l,o))}Ot.Ma="timingevent";function rc(o,l){Ee.call(this,Ot.Ma,o),this.size=l}V(rc,Ee);function Qn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Jn(){this.g=!0}Jn.prototype.xa=function(){this.g=!1};function xf(o,l,h,m,A,P){o.info(function(){if(o.g)if(P)for(var k="",ne=P.split("&"),ye=0;ye<ne.length;ye++){var X=ne[ye].split("=");if(1<X.length){var we=X[0];X=X[1];var Ae=we.split("_");k=2<=Ae.length&&Ae[1]=="type"?k+(we+"="+X+"&"):k+(we+"=redacted&")}}else k=null;else k=P;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+h+`
`+k})}function Nf(o,l,h,m,A,P,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+h+`
`+P+" "+k})}function cn(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Mf(o,h)+(m?" "+m:"")})}function Of(o,l){o.info(function(){return"TIMEOUT: "+l})}Jn.prototype.info=function(){};function Mf(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Ls(h)}catch{return l}}var ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ic={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qs;function ri(){}V(ri,Fs),ri.prototype.g=function(){return new XMLHttpRequest},ri.prototype.i=function(){return{}},qs=new ri;function ht(o,l,h,m){this.j=o,this.i=l,this.l=h,this.R=m||1,this.U=new Kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sc}function sc(){this.i=null,this.g="",this.h=!1}var oc={},js={};function zs(o,l,h){o.L=1,o.v=ai(Je(l)),o.m=h,o.P=!0,ac(o,null)}function ac(o,l){o.F=Date.now(),ii(o),o.A=Je(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Ec(h.i,"t",m),o.C=0,h=o.j.J,o.h=new sc,o.g=Uc(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Vf(I(o.Y,o,o.g),o.O)),l=o.U,h=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ja[0]=A.toString()),A=Ja);for(var P=0;P<A.length;P++){var k=Ga(h,A[P],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Wn(),xf(o.i,o.u,o.A,o.l,o.R,o.m)}ht.prototype.ca=function(o){o=o.target;const l=this.M;l&&Xe(o)==3?l.j():this.Y(o)},ht.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=Xe(this.g);var l=this.g.Ba();const hn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Sc(this.g)))){this.J||Ae!=4||l==7||(l==8||0>=hn?Wn(3):Wn(2)),Gs(this);var h=this.g.Z();this.X=h;t:if(cc(this)){var m=Sc(this.g);o="";var A=m.length,P=Xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mt(this),Xn(this);var k="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(P&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Nf(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,ye=this.g;if((ne=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(ne)){var X=ne;break t}}X=null}if(h=X)cn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$s(this,h);else{this.o=!1,this.s=3,De(12),Mt(this),Xn(this);break e}}if(this.P){h=!0;let qe;for(;!this.J&&this.C<k.length;)if(qe=Lf(this,k),qe==js){Ae==4&&(this.s=4,De(14),h=!1),cn(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==oc){this.s=4,De(15),cn(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else cn(this.i,this.l,qe,null),$s(this,qe);if(cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||k.length!=0||this.h.h||(this.s=1,De(16),h=!1),this.o=this.o&&h,!h)cn(this.i,this.l,k,"[Invalid Chunked Response]"),Mt(this),Xn(this);else if(0<k.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Xs(we),we.M=!0,De(11))}}else cn(this.i,this.l,k,null),$s(this,k);Ae==4&&Mt(this),this.o&&!this.J&&(Ae==4?Oc(this.j,this):(this.o=!1,ii(this)))}else em(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Mt(this),Xn(this)}}}catch{}finally{}};function cc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Lf(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?js:(h=Number(l.substring(h,m)),isNaN(h)?oc:(m+=1,m+h>l.length?js:(l=l.slice(m,m+h),o.C=m+h,l)))}ht.prototype.cancel=function(){this.J=!0,Mt(this)};function ii(o){o.S=Date.now()+o.I,uc(o,o.I)}function uc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Qn(I(o.ba,o),l)}function Gs(o){o.B&&(c.clearTimeout(o.B),o.B=null)}ht.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Of(this.i,this.A),this.L!=2&&(Wn(),De(17)),Mt(this),this.s=2,Xn(this)):uc(this,this.S-o)};function Xn(o){o.j.G==0||o.J||Oc(o.j,o)}function Mt(o){Gs(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Xa(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function $s(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Ks(h.h,o))){if(!o.K&&Ks(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)fi(h),hi(h);else break e;Js(h),De(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Qn(I(h.Za,h),6e3));if(1>=dc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ft(h,11)}else if((o.K||h.g==o)&&fi(h),!q(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let X=A[l];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const we=X[3];we!=null&&(h.la=we,h.j.info("VER="+h.la));const Ae=X[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const hn=X[5];hn!=null&&typeof hn=="number"&&0<hn&&(m=1.5*hn,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const qe=o.g;if(qe){const pi=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var P=m.h;P.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Hs(P,P.h),P.h=null))}if(m.D){const Ys=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ys&&(m.ya=Ys,re(m.I,m.D,Ys))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var k=o;if(m.qa=Fc(m,m.J?m.ia:null,m.W),k.K){fc(m.h,k);var ne=k,ye=m.L;ye&&(ne.I=ye),ne.B&&(Gs(ne),ii(ne)),m.g=k}else xc(m);0<h.i.length&&di(h)}else X[0]!="stop"&&X[0]!="close"||Ft(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Ft(h,7):Qs(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Wn(4)}catch{}}var Ff=class{constructor(o,l){this.g=o,this.map=l}};function lc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function dc(o){return o.h?1:o.g?o.g.size:0}function Ks(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Hs(o,l){o.g?o.g.add(l):o.h=l}function fc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}lc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function mc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return x(o.i)}function Uf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,m=0;m<h;m++)l.push(o[m]);return l}l=[],h=0;for(m in o)l[h++]=o[m];return l}function Bf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const m in o)l[h++]=m;return l}}}function pc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Bf(o),m=Uf(o),A=m.length,P=0;P<A;P++)l.call(void 0,m[P],h&&h[P],o)}var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qf(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),A=null;if(0<=m){var P=o[h].substring(0,m);A=o[h].substring(m+1)}else P=o[h];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Lt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Lt){this.h=o.h,si(this,o.j),this.o=o.o,this.g=o.g,oi(this,o.s),this.l=o.l;var l=o.i,h=new er;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),_c(this,h),this.m=o.m}else o&&(l=String(o).match(gc))?(this.h=!1,si(this,l[1]||"",!0),this.o=Yn(l[2]||""),this.g=Yn(l[3]||"",!0),oi(this,l[4]),this.l=Yn(l[5]||"",!0),_c(this,l[6]||"",!0),this.m=Yn(l[7]||"")):(this.h=!1,this.i=new er(null,this.h))}Lt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Zn(l,yc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Zn(l,yc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Zn(h,h.charAt(0)=="/"?Gf:zf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Zn(h,Kf)),o.join("")};function Je(o){return new Lt(o)}function si(o,l,h){o.j=h?Yn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function oi(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function _c(o,l,h){l instanceof er?(o.i=l,Hf(o.i,o.h)):(h||(l=Zn(l,$f)),o.i=new er(l,o.h))}function re(o,l,h){o.i.set(l,h)}function ai(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Yn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Zn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,jf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function jf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var yc=/[#\/\?@]/g,zf=/[#\?:]/g,Gf=/[#\?]/g,$f=/[#\?@]/g,Kf=/#/g;function er(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function dt(o){o.g||(o.g=new Map,o.h=0,o.i&&qf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=er.prototype,r.add=function(o,l){dt(this),this.i=null,o=un(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ic(o,l){dt(o),l=un(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function vc(o,l){return dt(o),l=un(o,l),o.g.has(l)}r.forEach=function(o,l){dt(this),this.g.forEach(function(h,m){h.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){dt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let m=0;m<l.length;m++){const A=o[m];for(let P=0;P<A.length;P++)h.push(l[m])}return h},r.V=function(o){dt(this);let l=[];if(typeof o=="string")vc(this,o)&&(l=l.concat(this.g.get(un(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return dt(this),this.i=null,o=un(this,o),vc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Ec(o,l,h){Ic(o,l),0<h.length&&(o.i=null,o.g.set(un(o,l),x(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var m=l[h];const P=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var A=P;k[m]!==""&&(A+="="+encodeURIComponent(String(k[m]))),o.push(A)}}return this.i=o.join("&")};function un(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Hf(o,l){l&&!o.j&&(dt(o),o.i=null,o.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(Ic(this,m),Ec(this,A,h))},o)),o.j=l}function Wf(o,l){const h=new Jn;if(c.Image){const m=new Image;m.onload=b(ft,h,"TestLoadImage: loaded",!0,l,m),m.onerror=b(ft,h,"TestLoadImage: error",!1,l,m),m.onabort=b(ft,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=b(ft,h,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Qf(o,l){const h=new Jn,m=new AbortController,A=setTimeout(()=>{m.abort(),ft(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(A),P.ok?ft(h,"TestPingServer: ok",!0,l):ft(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),ft(h,"TestPingServer: error",!1,l)})}function ft(o,l,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function Jf(){this.g=new kf}function Xf(o,l,h){const m=h||"";try{pc(o,function(A,P){let k=A;d(A)&&(k=Ls(A)),l.push(m+P+"="+encodeURIComponent(k))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function ci(o){this.l=o.Ub||null,this.j=o.eb||!1}V(ci,Fs),ci.prototype.g=function(){return new ui(this.l,this.j)},ci.prototype.i=function(o){return function(){return o}}({});function ui(o,l){Te.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ui,Te),r=ui.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,nr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?tr(this):nr(this),this.readyState==3&&Tc(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,tr(this))},r.Qa=function(o){this.g&&(this.response=o,tr(this))},r.ga=function(){this.g&&tr(this)};function tr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,nr(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function nr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wc(o){let l="";return K(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function Ws(o,l,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=wc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):re(o,l,h))}function ce(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ce,Te);var Yf=/^https?$/i,Zf=["POST","PUT"];r=ce.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qs.g(),this.v=this.o?Ya(this.o):Ya(qs),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Ac(this,P);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())h.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Zf,l,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,k]of h)this.g.setRequestHeader(P,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Ac(this,P)}};function Ac(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Rc(o),li(o)}function Rc(o){o.A||(o.A=!0,Ve(o,"complete"),Ve(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ve(this,"complete"),Ve(this,"abort"),li(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),li(this,!0)),ce.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?bc(this):this.bb())},r.bb=function(){bc(this)};function bc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xe(o)!=4||o.Z()!=2)){if(o.u&&Xe(o)==4)Wa(o.Ea,0,o);else if(Ve(o,"readystatechange"),Xe(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var m;if(m=k===0){var A=String(o.D).match(gc)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!Yf.test(A?A.toLowerCase():"")}h=m}if(h)Ve(o,"complete"),Ve(o,"success");else{o.m=6;try{var P=2<Xe(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Rc(o)}}finally{li(o)}}}}function li(o,l){if(o.g){Pc(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ve(o,"ready");try{h.onreadystatechange=m}catch{}}}function Pc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Xe(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Xe(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Df(l)}};function Sc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function em(o){const l={};o=(o.g&&2<=Xe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(q(o[m]))continue;var h=T(o[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[A]||[];l[A]=P,P.push(h)}v(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Cc(o){this.Aa=0,this.i=[],this.j=new Jn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,o),this.cb=rr("retryDelaySeedMs",1e4,o),this.Wa=rr("forwardChannelMaxRetries",2,o),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new lc(o&&o.concurrentRequestLimit),this.Da=new Jf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Cc.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,m){De(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Fc(this,null,this.W),di(this)};function Qs(o){if(Vc(o),o.G==3){var l=o.U++,h=Je(o.I);if(re(h,"SID",o.K),re(h,"RID",l),re(h,"TYPE","terminate"),ir(o,h),l=new ht(o,o.j,l),l.L=2,l.v=ai(Je(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Uc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ii(l)}Lc(o)}function hi(o){o.g&&(Xs(o),o.g.cancel(),o.g=null)}function Vc(o){hi(o),o.u&&(c.clearTimeout(o.u),o.u=null),fi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function di(o){if(!hc(o.h)&&!o.s){o.s=!0;var l=o.Ga;zn||za(),Gn||(zn(),Gn=!0),Cs.add(l,o),o.B=0}}function tm(o,l){return dc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Qn(I(o.Ga,o,l),Mc(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new ht(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=kc(this,A,l),h=Je(this.I),re(h,"RID",o),re(h,"CVER",22),this.D&&re(h,"X-HTTP-Session-Id",this.D),ir(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(wc(P)))+"&"+l:this.m&&Ws(h,this.m,P)),Hs(this.h,A),this.Ua&&re(h,"TYPE","init"),this.P?(re(h,"$req",l),re(h,"SID","null"),A.T=!0,zs(A,h,null)):zs(A,h,l),this.G=2}}else this.G==3&&(o?Dc(this,o):this.i.length==0||hc(this.h)||Dc(this))};function Dc(o,l){var h;l?h=l.l:h=o.U++;const m=Je(o.I);re(m,"SID",o.K),re(m,"RID",h),re(m,"AID",o.T),ir(o,m),o.m&&o.o&&Ws(m,o.m,o.o),h=new ht(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=kc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Hs(o.h,h),zs(h,m,l)}function ir(o,l){o.H&&K(o.H,function(h,m){re(l,m,h)}),o.l&&pc({},function(h,m){re(l,m,h)})}function kc(o,l,h){h=Math.min(o.i.length,h);var m=o.l?I(o.l.Na,o.l,o):null;e:{var A=o.i;let P=-1;for(;;){const k=["count="+h];P==-1?0<h?(P=A[0].g,k.push("ofs="+P)):P=0:k.push("ofs="+P);let ne=!0;for(let ye=0;ye<h;ye++){let X=A[ye].g;const we=A[ye].map;if(X-=P,0>X)P=Math.max(0,A[ye].g-100),ne=!1;else try{Xf(we,k,"req"+X+"_")}catch{m&&m(we)}}if(ne){m=k.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,m}function xc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;zn||za(),Gn||(zn(),Gn=!0),Cs.add(l,o),o.v=0}}function Js(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Qn(I(o.Fa,o),Mc(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Qn(I(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),hi(this),Nc(this))};function Xs(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Nc(o){o.g=new ht(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Je(o.qa);re(l,"RID","rpc"),re(l,"SID",o.K),re(l,"AID",o.T),re(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(l,"TO",o.ja),re(l,"TYPE","xmlhttp"),ir(o,l),o.m&&o.o&&Ws(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ai(Je(l)),h.m=null,h.P=!0,ac(h,o)}r.Za=function(){this.C!=null&&(this.C=null,hi(this),Js(this),De(19))};function fi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Oc(o,l){var h=null;if(o.g==l){fi(o),Xs(o),o.g=null;var m=2}else if(Ks(o.h,l))h=l.D,fc(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=ti(),Ve(m,new rc(m,h)),di(o)}else xc(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&tm(o,l)||m==2&&Js(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Ft(o,5);break;case 4:Ft(o,10);break;case 3:Ft(o,6);break;default:Ft(o,2)}}}function Mc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Ft(o,l){if(o.j.info("Error code "+l),l==2){var h=I(o.fb,o),m=o.Xa;const A=!m;m=new Lt(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||si(m,"https"),ai(m),A?Wf(m.toString(),h):Qf(m.toString(),h)}else De(2);o.G=0,o.l&&o.l.sa(l),Lc(o),Vc(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Lc(o){if(o.G=0,o.ka=[],o.l){const l=mc(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ka,l),D(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Fc(o,l,h){var m=h instanceof Lt?Je(h):new Lt(h);if(m.g!="")l&&(m.g=l+"."+m.g),oi(m,m.s);else{var A=c.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new Lt(null);m&&si(P,m),l&&(P.g=l),A&&oi(P,A),h&&(P.l=h),m=P}return h=o.D,l=o.ya,h&&l&&re(m,h,l),re(m,"VER",o.la),ir(o,m),m}function Uc(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ce(new ci({eb:h})):new ce(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bc(){}r=Bc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function mi(){}mi.prototype.g=function(o,l){return new Oe(o,l)};function Oe(o,l){Te.call(this),this.g=new Cc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!q(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new ln(this)}V(Oe,Te),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Qs(this.g)},Oe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ls(o),o=h);l.i.push(new Ff(l.Ya++,o)),l.G==3&&di(l)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Qs(this.g),delete this.g,Oe.aa.N.call(this)};function qc(o){Us.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}V(qc,Us);function jc(){Bs.call(this),this.status=1}V(jc,Bs);function ln(o){this.g=o}V(ln,Bc),ln.prototype.ua=function(){Ve(this.g,"a")},ln.prototype.ta=function(o){Ve(this.g,new qc(o))},ln.prototype.sa=function(o){Ve(this.g,new jc)},ln.prototype.ra=function(){Ve(this.g,"b")},mi.prototype.createWebChannel=mi.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,Eh=function(){return new mi},vh=function(){return ti()},Ih=Ot,vo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ni.NO_ERROR=0,ni.TIMEOUT=8,ni.HTTP_ERROR=6,Si=ni,ic.COMPLETE="complete",yh=ic,Za.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",Te.prototype.listen=Te.prototype.K,lr=Za,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,_h=ce}).apply(typeof _i<"u"?_i:typeof self<"u"?self:typeof window<"u"?window:{});const yu="@firebase/firestore";/**
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
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let Un="11.0.2";/**
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
 */const Yt=new Bo("@firebase/firestore");function gn(){return Yt.logLevel}function C(r,...e){if(Yt.logLevel<=H.DEBUG){const t=e.map(ea);Yt.debug(`Firestore (${Un}): ${r}`,...t)}}function ke(r,...e){if(Yt.logLevel<=H.ERROR){const t=e.map(ea);Yt.error(`Firestore (${Un}): ${r}`,...t)}}function Zt(r,...e){if(Yt.logLevel<=H.WARN){const t=e.map(ea);Yt.warn(`Firestore (${Un}): ${r}`,...t)}}function ea(r){if(typeof r=="string")return r;try{/**
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
 */function M(r="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+r;throw ke(e),new Error(e)}function L(r,e){r||M()}function B(r,e){return r}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Th{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}}class x_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N_{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0);let n=this.i;const i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let s=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ze,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ze)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Th(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string"),new Ie(e)}}class O_{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class M_{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new O_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){L(this.o===void 0);const n=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(L(typeof t.token=="string"),this.R=t.token,new L_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function U_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class wh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=U_(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function z(r,e){return r<e?-1:r>e?1:0}function Pn(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Ah(r){return r+"\0"}/**
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
 */class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ae(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ae(0,0))}static max(){return new U(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class wr{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(),n===void 0?n=e.length-t:n>e.length-t&&M(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return wr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wr?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Y extends wr{construct(e,t,n){return new Y(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const B_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends wr{construct(e,t,n){return new oe(e,t,n)}static isValidIdentifier(e){return B_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(s(),i++)}if(s(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(t)}static emptyPath(){return new oe([])}}/**
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
 */class Ki{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Eo(r){return r.fields.find(e=>e.kind===2)}function qt(r){return r.fields.filter(e=>e.kind!==2)}Ki.UNKNOWN_ID=-1;class Ci{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ar{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ar(0,Le.min())}}function q_(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new ae(t+1,0):new ae(t,n));return new Le(i,O.empty(),e)}function Rh(r){return new Le(r.readTime,r.key,-1)}class Le{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Le(U.min(),O.empty(),-1)}static max(){return new Le(U.max(),O.empty(),-1)}}function ta(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(r.documentKey,e.documentKey),t!==0?t:z(r.largestBatchId,e.largestBatchId))}/**
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
 */const bh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ph{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function on(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==bh)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,n)=>{t(e)})}static reject(e){return new w((t,n)=>{n(e)})}static waitFor(e){return new w((t,n)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>n(u))}),a=!0,s===i&&t()})}static or(e){let t=w.resolve(!1);for(const n of e)t=t.next(i=>i?w.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new w((n,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++c,c===s&&n(a)},f=>i(f))}})}static doWhile(e,t){return new w((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */class hs{static open(e,t,n,i){try{return new hs(t,e.transaction(i,n))}catch(s){throw new gr(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ze,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new gr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=na(n.target.error);this.V.reject(new gr(e,i))}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new z_(t)}}class bt{static delete(e){return C("SimpleDb","Removing database:",e),jt(window.indexedDB.deleteDatabase(e)).toPromise()}static p(){if(!xl())return!1;if(bt.S())return!0;const e=me(),t=bt.D(e),n=0<t&&t<10,i=Sh(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static S(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static C(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.F=n,bt.D(me())===12.2&&ke("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;t(a)},i.onblocked=()=>{n(new gr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?n(new N(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new N(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new gr(e,a))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.F.O(a,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(e);const c=hs.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next(d=>(c.g(),d)).catch(d=>(c.abort(d),w.reject(d))).toPromise();return u.catch(()=>{}),await c.m,u}catch(c){const u=c,d=u.name!=="FirebaseError"&&a<3;if(C("SimpleDb","Transaction failed with error:",u.message,"Retrying:",d),this.close(),!d)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Sh(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class j_{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return jt(this.B.delete())}}class gr extends N{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Dt(r){return r.name==="IndexedDbTransactionError"}class z_{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(C("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),jt(n)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),jt(this.store.add(e))}get(e){return jt(this.store.get(e)).next(t=>(t===void 0&&(t=null),C("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),jt(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),jt(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new w((a,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{a(u.target.result)}})}{const s=this.cursor(n),a=[];return this.W(s,(c,u)=>{a.push(u)}).next(()=>a)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w((i,s)=>{n.onerror=a=>{s(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}j(e,t){C("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,a,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new w((n,i)=>{t.onerror=s=>{const a=na(s.target.error);i(a)},t.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(c=>{c?a.continue():n()}):n()}})}W(e,t){const n=[];return new w((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const c=a.target.result;if(!c)return void i();const u=new j_(c),d=t(c.primaryKey,c.value,u);if(d instanceof w){const f=d.catch(p=>(u.done(),w.reject(p)));n.push(f)}u.isDone?i():u.K===null?c.continue():c.continue(u.K)}}).next(()=>w.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function jt(r){return new w((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=na(n.target.error);t(i)}})}let Iu=!1;function na(r){const e=bt.D(me());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Iu||(Iu=!0,setTimeout(()=>{throw n},0)),n}}return r}class G_{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){C("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Dt(t)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await on(t)}await this.X(6e4)})}}class $_{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return C("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,i).next(c=>{i-=c,n.add(a)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(i,s)).next(c=>(C("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>a.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const a=Rh(s);ta(a,n)>0&&(n=a)}),new Le(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ue{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ue.oe=-1;function ds(r){return r==null}function Rr(r){return r===0&&1/r==-1/0}function K_(r){return typeof r=="number"&&Number.isInteger(r)&&!Rr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Se(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=vu(e)),e=H_(r.get(t),e);return vu(e)}function H_(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function vu(r){return r+""}function Ge(r){const e=r.length;if(L(e>=2),e===2)return L(r.charAt(0)===""&&r.charAt(1)===""),Y.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const a=r.indexOf("",s);switch((a<0||a>t)&&M(),r.charAt(a+1)){case"":const c=r.substring(s,a);let u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,a),i+="\0";break;case"":i+=r.substring(s,a+1);break;default:M()}s=a+2}return new Y(n)}/**
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
 */const Eu=["userId","batchId"];/**
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
 */function Vi(r,e){return[r,Se(e)]}function Ch(r,e,t){return[r,Se(e),t]}const W_={},Q_=["prefixPath","collectionGroup","readTime","documentId"],J_=["prefixPath","collectionGroup","documentId"],X_=["collectionGroup","readTime","prefixPath","documentId"],Y_=["canonicalId","targetId"],Z_=["targetId","path"],ey=["path","targetId"],ty=["collectionId","parent"],ny=["indexId","uid"],ry=["uid","sequenceNumber"],iy=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],sy=["indexId","uid","orderedDocumentKey"],oy=["userId","collectionPath","documentId"],ay=["userId","collectionPath","largestBatchId"],cy=["userId","collectionGroup","largestBatchId"],Vh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],uy=[...Vh,"documentOverlays"],Dh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kh=Dh,ra=[...kh,"indexConfiguration","indexState","indexEntries"],ly=ra,hy=[...ra,"globals"];/**
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
 */class To extends Ph{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function pe(r,e){const t=B(r);return bt.C(t._e,e)}/**
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
 */function Tu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function kt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function xh(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class se{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yi(this.root,e,this.comparator,!0)}}class yi{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new ve(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,n,i,s){return this}insert(e,t,n){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class te{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wu(this.data.getIterator())}getIteratorFrom(e){return new wu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof te)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new te(this.comparator);return t.data=e,t}}class wu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function dn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ne{constructor(e){this.fields=e,e.sort(oe.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new te(oe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Nh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Nh("Invalid base64 string: "+s):s}}(e);return new de(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const dy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function st(r){if(L(!!r),typeof r=="string"){let e=0;const t=dy.exec(r);if(L(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ie(r.seconds),nanos:ie(r.nanos)}}function ie(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ot(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
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
 */function ia(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function fs(r){const e=r.mapValue.fields.__previous_value__;return ia(e)?fs(e):e}function br(r){const e=st(r.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class fy{constructor(e,t,n,i,s,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class en{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new en("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof en&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Di={nullValue:"NULL_VALUE"};function St(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ia(r)?4:Oh(r)?9007199254740991:ms(r)?10:11:M()}function We(r,e){if(r===e)return!0;const t=St(r);if(t!==St(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return br(r).isEqual(br(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=st(i.timestampValue),c=st(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return ot(i.bytesValue).isEqual(ot(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return ie(i.geoPointValue.latitude)===ie(s.geoPointValue.latitude)&&ie(i.geoPointValue.longitude)===ie(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ie(i.integerValue)===ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ie(i.doubleValue),c=ie(s.doubleValue);return a===c?Rr(a)===Rr(c):isNaN(a)&&isNaN(c)}return!1}(r,e);case 9:return Pn(r.arrayValue.values||[],e.arrayValue.values||[],We);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Tu(a)!==Tu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!We(a[u],c[u])))return!1;return!0}(r,e);default:return M()}}function Pr(r,e){return(r.values||[]).find(t=>We(t,e))!==void 0}function Ct(r,e){if(r===e)return 0;const t=St(r),n=St(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,e.booleanValue);case 2:return function(s,a){const c=ie(s.integerValue||s.doubleValue),u=ie(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,e);case 3:return Au(r.timestampValue,e.timestampValue);case 4:return Au(br(r),br(e));case 5:return z(r.stringValue,e.stringValue);case 6:return function(s,a){const c=ot(s),u=ot(a);return c.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=z(c[d],u[d]);if(f!==0)return f}return z(c.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const c=z(ie(s.latitude),ie(a.latitude));return c!==0?c:z(ie(s.longitude),ie(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Ru(r.arrayValue,e.arrayValue);case 10:return function(s,a){var c,u,d,f;const p=s.fields||{},I=a.fields||{},b=(c=p.value)===null||c===void 0?void 0:c.arrayValue,V=(u=I.value)===null||u===void 0?void 0:u.arrayValue,x=z(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Ru(b,V)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===Tt.mapValue&&a===Tt.mapValue)return 0;if(s===Tt.mapValue)return 1;if(a===Tt.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const I=z(u[p],f[p]);if(I!==0)return I;const b=Ct(c[u[p]],d[f[p]]);if(b!==0)return b}return z(u.length,f.length)}(r.mapValue,e.mapValue);default:throw M()}}function Au(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return z(r,e);const t=st(r),n=st(e),i=z(t.seconds,n.seconds);return i!==0?i:z(t.nanos,n.nanos)}function Ru(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=Ct(t[i],n[i]);if(s)return s}return z(t.length,n.length)}function Sn(r){return wo(r)}function wo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=st(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return ot(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return O.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=wo(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${wo(t.fields[a])}`;return i+"}"}(r.mapValue):M()}function ki(r){switch(St(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fs(r);return e?16+ki(e):16;case 5:return 2*r.stringValue.length;case 6:return ot(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+ki(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return kt(n.fields,(s,a)=>{i+=s.length+ki(a)}),i}(r.mapValue);default:throw M()}}function Sr(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ao(r){return!!r&&"integerValue"in r}function Cr(r){return!!r&&"arrayValue"in r}function bu(r){return!!r&&"nullValue"in r}function Pu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function xi(r){return!!r&&"mapValue"in r}function ms(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function _r(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return kt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=_r(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_r(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Oh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Mh={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function my(r){return"nullValue"in r?Di:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Sr(en.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ms(r)?Mh:{mapValue:{}}:M()}function py(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Sr(en.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Mh:"mapValue"in r?ms(r)?{mapValue:{}}:Tt:M()}function Su(r,e){const t=Ct(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Cu(r,e){const t=Ct(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!xi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_r(t)}setAll(e){let t=oe.emptyPath(),n={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}a?n[c.lastSegment()]=_r(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());xi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];xi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){kt(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Pe(_r(this.value))}}function Lh(r){const e=[];return kt(r.fields,(t,n)=>{const i=new oe([t]);if(xi(n)){const s=Lh(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ne(e)}/**
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
 */class ue{constructor(e,t,n,i,s,a,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ue(e,0,U.min(),U.min(),U.min(),Pe.empty(),0)}static newFoundDocument(e,t,n,i){return new ue(e,1,t,U.min(),n,i,0)}static newNoDocument(e,t){return new ue(e,2,t,U.min(),U.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new ue(e,3,t,U.min(),U.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cn{constructor(e,t){this.position=e,this.inclusive=t}}function Vu(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),t.key):n=Ct(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Du(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!We(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hi{constructor(e,t="asc"){this.field=e,this.dir=t}}function gy(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Fh{}class W extends Fh{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new _y(e,t,n):t==="array-contains"?new vy(e,n):t==="in"?new Gh(e,n):t==="not-in"?new Ey(e,n):t==="array-contains-any"?new Ty(e,n):new W(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new yy(e,n):new Iy(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ct(t,this.value)):t!==null&&St(this.value)===St(t)&&this.matchesComparison(Ct(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ee extends Fh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ee(e,t)}matches(e){return Vn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vn(r){return r.op==="and"}function Ro(r){return r.op==="or"}function sa(r){return Uh(r)&&Vn(r)}function Uh(r){for(const e of r.filters)if(e instanceof ee)return!1;return!0}function bo(r){if(r instanceof W)return r.field.canonicalString()+r.op.toString()+Sn(r.value);if(sa(r))return r.filters.map(e=>bo(e)).join(",");{const e=r.filters.map(t=>bo(t)).join(",");return`${r.op}(${e})`}}function Bh(r,e){return r instanceof W?function(n,i){return i instanceof W&&n.op===i.op&&n.field.isEqual(i.field)&&We(n.value,i.value)}(r,e):r instanceof ee?function(n,i){return i instanceof ee&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,c)=>s&&Bh(a,i.filters[c]),!0):!1}(r,e):void M()}function qh(r,e){const t=r.filters.concat(e);return ee.create(t,r.op)}function jh(r){return r instanceof W?function(t){return`${t.field.canonicalString()} ${t.op} ${Sn(t.value)}`}(r):r instanceof ee?function(t){return t.op.toString()+" {"+t.getFilters().map(jh).join(" ,")+"}"}(r):"Filter"}class _y extends W{constructor(e,t,n){super(e,t,n),this.key=O.fromName(n.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class yy extends W{constructor(e,t){super(e,"in",t),this.keys=zh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Iy extends W{constructor(e,t){super(e,"not-in",t),this.keys=zh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function zh(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>O.fromName(n.referenceValue))}class vy extends W{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cr(t)&&Pr(t.arrayValue,this.value)}}class Gh extends W{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pr(this.value.arrayValue,t)}}class Ey extends W{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Pr(this.value.arrayValue,t)}}class Ty extends W{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Pr(this.value.arrayValue,n))}}/**
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
 */class wy{constructor(e,t=null,n=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function Po(r,e=null,t=[],n=[],i=null,s=null,a=null){return new wy(r,e,t,n,i,s,a)}function tn(r){const e=B(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>bo(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),ds(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Sn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Sn(n)).join(",")),e.ue=t}return e.ue}function Lr(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!gy(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Bh(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Du(r.startAt,e.startAt)&&Du(r.endAt,e.endAt)}function Wi(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Qi(r,e){return r.filters.filter(t=>t instanceof W&&t.field.isEqual(e))}function ku(r,e,t){let n=Di,i=!0;for(const s of Qi(r,e)){let a=Di,c=!0;switch(s.op){case"<":case"<=":a=my(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,c=!1;break;case"!=":case"not-in":a=Di}Su({value:n,inclusive:i},{value:a,inclusive:c})<0&&(n=a,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Su({value:n,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}function xu(r,e,t){let n=Tt,i=!0;for(const s of Qi(r,e)){let a=Tt,c=!0;switch(s.op){case">=":case">":a=py(s.value),c=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,c=!1;break;case"!=":case"not-in":a=Tt}Cu({value:n,inclusive:i},{value:a,inclusive:c})>0&&(n=a,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Cu({value:n,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class Fr{constructor(e,t=null,n=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ay(r,e,t,n,i,s,a,c){return new Fr(r,e,t,n,i,s,a,c)}function Ur(r){return new Fr(r)}function Nu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function $h(r){return r.collectionGroup!==null}function yr(r){const e=B(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new te(oe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Hi(s,n))}),t.has(oe.keyField().canonicalString())||e.ce.push(new Hi(oe.keyField(),n))}return e.ce}function Be(r){const e=B(r);return e.le||(e.le=Ry(e,yr(r))),e.le}function Ry(r,e){if(r.limitType==="F")return Po(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Hi(i.field,s)});const t=r.endAt?new Cn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Cn(r.startAt.position,r.startAt.inclusive):null;return Po(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function So(r,e){const t=r.filters.concat([e]);return new Fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ji(r,e,t){return new Fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ps(r,e){return Lr(Be(r),Be(e))&&r.limitType===e.limitType}function Kh(r){return`${tn(Be(r))}|lt:${r.limitType}`}function _n(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>jh(i)).join(", ")}]`),ds(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Sn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Sn(i)).join(",")),`Target(${n})`}(Be(r))}; limitType=${r.limitType})`}function Br(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):O.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of yr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,c,u){const d=Vu(a,c,u);return a.inclusive?d<=0:d<0}(n.startAt,yr(n),i)||n.endAt&&!function(a,c,u){const d=Vu(a,c,u);return a.inclusive?d>=0:d>0}(n.endAt,yr(n),i))}(r,e)}function by(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Hh(r){return(e,t)=>{let n=!1;for(const i of yr(r)){const s=Py(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Py(r,e,t){const n=r.field.isKeyField()?O.comparator(e.key,t.key):function(s,a,c){const u=a.data.field(s),d=c.data.field(s);return u!==null&&d!==null?Ct(u,d):M()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
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
 */class ct{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){kt(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return xh(this.inner)}size(){return this.innerSize}}/**
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
 */const Sy=new se(O.comparator);function Me(){return Sy}const Wh=new se(O.comparator);function hr(...r){let e=Wh;for(const t of r)e=e.insert(t.key,t);return e}function Qh(r){let e=Wh;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function $e(){return Ir()}function Jh(){return Ir()}function Ir(){return new ct(r=>r.toString(),(r,e)=>r.isEqual(e))}const Cy=new se(O.comparator),Vy=new te(O.comparator);function $(...r){let e=Vy;for(const t of r)e=e.add(t);return e}const Dy=new te(z);function ky(){return Dy}/**
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
 */function oa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rr(e)?"-0":e}}function Xh(r){return{integerValue:""+r}}function xy(r,e){return K_(e)?Xh(e):oa(r,e)}/**
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
 */class gs{constructor(){this._=void 0}}function Ny(r,e,t){return r instanceof Dn?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ia(s)&&(s=fs(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):r instanceof kn?Zh(r,e):r instanceof xn?ed(r,e):function(i,s){const a=Yh(i,s),c=Ou(a)+Ou(i.Pe);return Ao(a)&&Ao(i.Pe)?Xh(c):oa(i.serializer,c)}(r,e)}function Oy(r,e,t){return r instanceof kn?Zh(r,e):r instanceof xn?ed(r,e):t}function Yh(r,e){return r instanceof Vr?function(n){return Ao(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Dn extends gs{}class kn extends gs{constructor(e){super(),this.elements=e}}function Zh(r,e){const t=td(e);for(const n of r.elements)t.some(i=>We(i,n))||t.push(n);return{arrayValue:{values:t}}}class xn extends gs{constructor(e){super(),this.elements=e}}function ed(r,e){let t=td(e);for(const n of r.elements)t=t.filter(i=>!We(i,n));return{arrayValue:{values:t}}}class Vr extends gs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ou(r){return ie(r.integerValue||r.doubleValue)}function td(r){return Cr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class nd{constructor(e,t){this.field=e,this.transform=t}}function My(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof kn&&i instanceof kn||n instanceof xn&&i instanceof xn?Pn(n.elements,i.elements,We):n instanceof Vr&&i instanceof Vr?We(n.Pe,i.Pe):n instanceof Dn&&i instanceof Dn}(r.transform,e.transform)}class Ly{constructor(e,t){this.version=e,this.transformResults=t}}class fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fe}static exists(e){return new fe(void 0,e)}static updateTime(e){return new fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ni(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class _s{}function rd(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new qr(r.key,fe.none()):new Bn(r.key,r.data,fe.none());{const t=r.data,n=Pe.empty();let i=new te(oe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new ut(r.key,n,new Ne(i.toArray()),fe.none())}}function Fy(r,e,t){r instanceof Bn?function(i,s,a){const c=i.value.clone(),u=Lu(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):r instanceof ut?function(i,s,a){if(!Ni(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Lu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(id(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function vr(r,e,t,n){return r instanceof Bn?function(s,a,c,u){if(!Ni(s.precondition,a))return c;const d=s.value.clone(),f=Fu(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof ut?function(s,a,c,u){if(!Ni(s.precondition,a))return c;const d=Fu(s.fieldTransforms,u,a),f=a.data;return f.setAll(id(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,a,c){return Ni(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,e,t)}function Uy(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Yh(n.transform,i||null);s!=null&&(t===null&&(t=Pe.empty()),t.set(n.field,s))}return t||null}function Mu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Pn(n,i,(s,a)=>My(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Bn extends _s{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ut extends _s{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function id(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Lu(r,e,t){const n=new Map;L(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,c=e.data.field(s.field);n.set(s.field,Oy(a,c,t[i]))}return n}function Fu(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,Ny(s,a,e))}return n}class qr extends _s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sd extends _s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aa{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Fy(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=vr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=vr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Jh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const u=rd(a,c);u!==null&&n.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&Pn(this.mutations,e.mutations,(t,n)=>Mu(t,n))&&Pn(this.baseMutations,e.baseMutations,(t,n)=>Mu(t,n))}}class ca{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){L(e.mutations.length===n.length);let i=function(){return Cy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new ca(e,t,n,i)}}/**
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
 */class ua{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class By{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var le,J;function qy(r){switch(r){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function od(r){if(r===void 0)return ke("GRPC error has no .code"),S.UNKNOWN;switch(r){case le.OK:return S.OK;case le.CANCELLED:return S.CANCELLED;case le.UNKNOWN:return S.UNKNOWN;case le.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case le.INTERNAL:return S.INTERNAL;case le.UNAVAILABLE:return S.UNAVAILABLE;case le.UNAUTHENTICATED:return S.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case le.NOT_FOUND:return S.NOT_FOUND;case le.ALREADY_EXISTS:return S.ALREADY_EXISTS;case le.PERMISSION_DENIED:return S.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case le.ABORTED:return S.ABORTED;case le.OUT_OF_RANGE:return S.OUT_OF_RANGE;case le.UNIMPLEMENTED:return S.UNIMPLEMENTED;case le.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(J=le||(le={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jy(){return new TextEncoder}/**
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
 */const zy=new Wt([4294967295,4294967295],0);function Uu(r){const e=jy().encode(r),t=new gh;return t.update(e),new Uint8Array(t.digest())}function Bu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wt([t,n],0),new Wt([i,s],0)]}class la{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new dr(`Invalid padding: ${t}`);if(n<0)throw new dr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new dr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new dr(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Wt.fromNumber(this.Te)}Ee(e,t,n){let i=e.add(t.multiply(Wt.fromNumber(n)));return i.compare(zy)===1&&(i=new Wt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Uu(e),[n,i]=Bu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);if(!this.de(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new la(s,i,t);return n.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=Uu(e),[n,i]=Bu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ys{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ys(U.min(),i,new se(z),Me(),$())}}class jr{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new jr(n,t,$(),$(),$())}}/**
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
 */class Oi{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class ad{constructor(e,t){this.targetId=e,this.me=t}}class cd{constructor(e,t,n=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class qu{constructor(){this.fe=0,this.ge=ju(),this.pe=de.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=$(),t=$(),n=$();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M()}}),new jr(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=ju()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gy{constructor(e){this.Le=e,this.Be=new Map,this.ke=Me(),this.qe=Ii(),this.Qe=Ii(),this.Ke=new se(z)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,n=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(Wi(s))if(n===0){const a=new O(s.path);this.We(t,a,ue.newNoDocument(a,U.min()))}else L(n===1);else{const a=this.Ze(t);if(a!==n){const c=this.Xe(e),u=c?this.et(c,e,a):1;if(u!==0){this.He(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=ot(n).toUint8Array()}catch(u){if(u instanceof Nh)return Zt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new la(a,i,s)}catch(u){return Zt(u instanceof dr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Te===0?null:c}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Ye(a);if(c){if(s.current&&Wi(c.target)){const u=new O(c.target.path);this.st(u).has(a)||this.ot(a,u)||this.We(a,u,ue.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let n=$();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const d=this.Ye(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new ys(e,t,this.Ke,this.ke,n);return this.ke=Me(),this.qe=Ii(),this.Qe=Ii(),this.Ke=new se(z),i}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new qu,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new te(z),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new te(z),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new qu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ii(){return new se(O.comparator)}function ju(){return new se(O.comparator)}const $y={asc:"ASCENDING",desc:"DESCENDING"},Ky={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hy={and:"AND",or:"OR"};class Wy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Co(r,e){return r.useProto3Json||ds(e)?e:{value:e}}function Nn(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ud(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Qy(r,e){return Nn(r,e.toTimestamp())}function xe(r){return L(!!r),U.fromTimestamp(function(t){const n=st(t);return new ae(n.seconds,n.nanos)}(r))}function ha(r,e){return Vo(r,e).canonicalString()}function Vo(r,e){const t=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function ld(r){const e=Y.fromString(r);return L(Id(e)),e}function Xi(r,e){return ha(r.databaseId,e.path)}function Qt(r,e){const t=ld(e);if(t.get(1)!==r.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new O(fd(t))}function hd(r,e){return ha(r.databaseId,e)}function dd(r){const e=ld(r);return e.length===4?Y.emptyPath():fd(e)}function Do(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function fd(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function zu(r,e,t){return{name:Xi(r,e),fields:t.value.mapValue.fields}}function Jy(r,e,t){const n=Qt(r,e.name),i=xe(e.updateTime),s=e.createTime?xe(e.createTime):U.min(),a=new Pe({mapValue:{fields:e.fields}}),c=ue.newFoundDocument(n,i,s,a);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Xy(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(L(f===void 0||typeof f=="string"),de.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),de.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const f=d.code===void 0?S.UNKNOWN:od(d.code);return new N(f,d.message||"")}(a);t=new cd(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Qt(r,n.document.name),s=xe(n.document.updateTime),a=n.document.createTime?xe(n.document.createTime):U.min(),c=new Pe({mapValue:{fields:n.document.fields}}),u=ue.newFoundDocument(i,s,a,c),d=n.targetIds||[],f=n.removedTargetIds||[];t=new Oi(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Qt(r,n.document),s=n.readTime?xe(n.readTime):U.min(),a=ue.newNoDocument(i,s),c=n.removedTargetIds||[];t=new Oi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Qt(r,n.document),s=n.removedTargetIds||[];t=new Oi([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new By(i,s),c=n.targetId;t=new ad(c,a)}}return t}function Yi(r,e){let t;if(e instanceof Bn)t={update:zu(r,e.key,e.value)};else if(e instanceof qr)t={delete:Xi(r,e.key)};else if(e instanceof ut)t={update:zu(r,e.key,e.data),updateMask:rI(e.fieldMask)};else{if(!(e instanceof sd))return M();t={verify:Xi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const c=a.transform;if(c instanceof Dn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof kn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Vr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw M()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Qy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(r,e.precondition)),t}function ko(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?fe.updateTime(xe(s.updateTime)):s.exists!==void 0?fe.exists(s.exists):fe.none()}(e.currentDocument):fe.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(a,c){let u=null;if("setToServerValue"in c)L(c.setToServerValue==="REQUEST_TIME"),u=new Dn;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new kn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new xn(f)}else"increment"in c?u=new Vr(a,c.increment):M();const d=oe.fromServerFormat(c.fieldPath);return new nd(d,u)}(r,i)):[];if(e.update){e.update.name;const i=Qt(r,e.update.name),s=new Pe({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(u){const d=u.fieldPaths||[];return new Ne(d.map(f=>oe.fromServerFormat(f)))}(e.updateMask);return new ut(i,s,a,t,n)}return new Bn(i,s,t,n)}if(e.delete){const i=Qt(r,e.delete);return new qr(i,t)}if(e.verify){const i=Qt(r,e.verify);return new sd(i,t)}return M()}function Yy(r,e){return r&&r.length>0?(L(e!==void 0),r.map(t=>function(i,s){let a=i.updateTime?xe(i.updateTime):xe(s);return a.isEqual(U.min())&&(a=xe(s)),new Ly(a,i.transformResults||[])}(t,e))):[]}function md(r,e){return{documents:[hd(r,e.path)]}}function pd(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=hd(r,i);const s=function(d){if(d.length!==0)return yd(ee.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(I){return{field:yn(I.field),direction:eI(I.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Co(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function gd(r){let e=dd(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){L(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const I=_d(p);return I instanceof ee&&sa(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(I=>function(V){return new Hi(In(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(p){let I;return I=typeof p=="object"?p.value:p,ds(I)?null:I}(t.limit));let u=null;t.startAt&&(u=function(p){const I=!!p.before,b=p.values||[];return new Cn(b,I)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const I=!p.before,b=p.values||[];return new Cn(b,I)}(t.endAt)),Ay(e,i,a,s,c,"F",u,d)}function Zy(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _d(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=In(t.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=In(t.unaryFilter.field);return W.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=In(t.unaryFilter.field);return W.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=In(t.unaryFilter.field);return W.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(t){return W.create(In(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ee.create(t.compositeFilter.filters.map(n=>_d(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(r):M()}function eI(r){return $y[r]}function tI(r){return Ky[r]}function nI(r){return Hy[r]}function yn(r){return{fieldPath:r.canonicalString()}}function In(r){return oe.fromServerFormat(r.fieldPath)}function yd(r){return r instanceof W?function(t){if(t.op==="=="){if(Pu(t.value))return{unaryFilter:{field:yn(t.field),op:"IS_NAN"}};if(bu(t.value))return{unaryFilter:{field:yn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pu(t.value))return{unaryFilter:{field:yn(t.field),op:"IS_NOT_NAN"}};if(bu(t.value))return{unaryFilter:{field:yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yn(t.field),op:tI(t.op),value:t.value}}}(r):r instanceof ee?function(t){const n=t.getFilters().map(i=>yd(i));return n.length===1?n[0]:{compositeFilter:{op:nI(t.op),filters:n}}}(r):M()}function rI(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Id(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class nt{constructor(e,t,n,i,s=U.min(),a=U.min(),c=de.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vd{constructor(e){this.ht=e}}function iI(r,e){let t;if(e.document)t=Jy(r.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=O.fromSegments(e.noDocument.path),i=rn(e.noDocument.readTime);t=ue.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const n=O.fromSegments(e.unknownDocument.path),i=rn(e.unknownDocument.version);t=ue.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ae(i[0],i[1]);return U.fromTimestamp(s)}(e.readTime)),t}function Gu(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Zi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,a){return{name:Xi(s,a.key),fields:a.data.value.mapValue.fields,updateTime:Nn(s,a.version.toTimestamp()),createTime:Nn(s,a.createTime.toTimestamp())}}(r.ht,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:nn(e.version)};else{if(!e.isUnknownDocument())return M();n.unknownDocument={path:t.path.toArray(),version:nn(e.version)}}return n}function Zi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function nn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function rn(r){const e=new ae(r.seconds,r.nanoseconds);return U.fromTimestamp(e)}function zt(r,e){const t=(e.baseMutations||[]).map(s=>ko(r.ht,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];a.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>ko(r.ht,s)),i=ae.fromMillis(e.localWriteTimeMs);return new aa(e.batchId,i,t,n)}function fr(r){const e=rn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?rn(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return L(s.documents.length===1),Be(Ur(dd(s.documents[0])))}(r.query):function(s){return Be(gd(s))}(r.query),new nt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,de.fromBase64String(r.resumeToken))}function Ed(r,e){const t=nn(e.snapshotVersion),n=nn(e.lastLimboFreeSnapshotVersion);let i;i=Wi(e.target)?md(r.ht,e.target):pd(r.ht,e.target).ct;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:tn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function Td(r){const e=gd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ji(e,e.limit,"L"):e}function oo(r,e){return new ua(e.largestBatchId,ko(r.ht,e.overlayMutation))}function $u(r,e){const t=e.path.lastSegment();return[r,Se(e.path.popLast()),t]}function Ku(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:nn(n.readTime),documentKey:Se(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class sI{getBundleMetadata(e,t){return Hu(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:rn(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Hu(e).put(function(i){return{bundleId:i.id,createTime:nn(xe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Wu(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:Td(s.bundledQuery),readTime:rn(s.readTime)}}(n)})}saveNamedQuery(e,t){return Wu(e).put(function(i){return{name:i.name,readTime:nn(xe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Hu(r){return pe(r,"bundles")}function Wu(r){return pe(r,"namedQueries")}/**
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
 */class Is{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const n=t.uid||"";return new Is(e,n)}getOverlay(e,t){return sr(e).get($u(this.userId,t)).next(n=>n?oo(this.serializer,n):null)}getOverlays(e,t){const n=$e();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,a)=>{const c=new ua(t,a);i.push(this.Tt(e,c))}),w.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(a=>i.add(Se(a.getCollectionPath())));const s=[];return i.forEach(a=>{const c=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);s.push(sr(e).j("collectionPathOverlayIndex",c))}),w.waitFor(s)}getOverlaysForCollection(e,t,n){const i=$e(),s=Se(t),a=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return sr(e).U("collectionPathOverlayIndex",a).next(c=>{for(const u of c){const d=oo(this.serializer,u);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=$e();let a;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return sr(e).J({index:"collectionGroupOverlayIndex",range:c},(u,d,f)=>{const p=oo(this.serializer,d);s.size()<i||p.largestBatchId===a?(s.set(p.getKey(),p),a=p.largestBatchId):f.done()}).next(()=>s)}Tt(e,t){return sr(e).put(function(i,s,a){const[c,u,d]=$u(s,a.mutation.key);return{userId:s,collectionPath:u,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Yi(i.ht,a.mutation)}}(this.serializer,this.userId,t))}}function sr(r){return pe(r,"documentOverlays")}/**
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
 */class oI{It(e){return pe(e,"globals")}getSessionToken(e){return this.It(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?de.fromUint8Array(n):de.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.It(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Gt{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(ie(e.integerValue));else if("doubleValue"in e){const n=ie(e.doubleValue);isNaN(n)?this.Rt(t,13):(this.Rt(t,15),Rr(n)?t.Vt(0):t.Vt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Rt(t,20),typeof n=="string"&&(n=st(n)),t.ft(`${n.seconds||""}`),t.Vt(n.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(ot(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Rt(t,45),t.Vt(n.latitude||0),t.Vt(n.longitude||0)}else"mapValue"in e?Oh(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):ms(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):M()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){const n=e.fields||{};this.Rt(t,55);for(const i of Object.keys(n))this.gt(i,t),this.dt(n[i],t)}bt(e,t){var n,i;const s=e.fields||{};this.Rt(t,53);const a="value",c=((i=(n=s[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(ie(c)),this.gt(a,t),this.dt(s[a],t)}vt(e,t){const n=e.values||[];this.Rt(t,50);for(const i of n)this.dt(i,t)}St(e,t){this.Rt(t,37),O.fromName(e).path.forEach(n=>{this.Rt(t,60),this.Ct(n,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}Gt.Ft=new Gt;function aI(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Qu(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const a=aI(255&n[s]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(e/8)}class cI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xt(n.value),n=t.next();this.Ot()}Nt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Lt(n.value),n=t.next();this.Bt()}kt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.xt(n);else if(n<2048)this.xt(960|n>>>6),this.xt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|n>>>12),this.xt(128|63&n>>>6),this.xt(128|63&n);else{const i=t.codePointAt(0);this.xt(240|i>>>18),this.xt(128|63&i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i)}}this.Ot()}qt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Lt(n);else if(n<2048)this.Lt(960|n>>>6),this.Lt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Lt(480|n>>>12),this.Lt(128|63&n>>>6),this.Lt(128|63&n);else{const i=t.codePointAt(0);this.Lt(240|i>>>18),this.Lt(128|63&i>>>12),this.Lt(128|63&i>>>6),this.Lt(128|63&i)}}this.Bt()}Qt(e){const t=this.Kt(e),n=Qu(t);this.$t(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ut(e){const t=this.Kt(e),n=Qu(t);this.$t(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(e){this.$t(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ht(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}xt(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Lt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===255?(this.jt(255),this.jt(0)):this.jt(e)}Ot(){this.Gt(0),this.Gt(1)}Bt(){this.jt(0),this.jt(1)}Gt(e){this.$t(1),this.buffer[this.position++]=e}jt(e){this.$t(1),this.buffer[this.position++]=~e}$t(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class uI{constructor(e){this.Jt=e}wt(e){this.Jt.Mt(e)}ft(e){this.Jt.kt(e)}Vt(e){this.Jt.Qt(e)}At(){this.Jt.Wt()}}class lI{constructor(e){this.Jt=e}wt(e){this.Jt.Nt(e)}ft(e){this.Jt.qt(e)}Vt(e){this.Jt.Ut(e)}At(){this.Jt.zt()}}class or{constructor(){this.Jt=new cI,this.Yt=new uI(this.Jt),this.Zt=new lI(this.Jt)}seed(e){this.Jt.seed(e)}Xt(e){return e===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
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
 */class $t{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}en(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new $t(this.indexId,this.documentKey,this.arrayValue,n)}}function pt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Ju(r.arrayValue,e.arrayValue),t!==0?t:(t=Ju(r.directionalValue,e.directionalValue),t!==0?t:O.comparator(r.documentKey,e.documentKey)))}function Ju(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Xu{constructor(e){this.tn=new te((t,n)=>oe.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.nn=e.orderBy,this.rn=[];for(const t of e.filters){const n=t;n.isInequality()?this.tn=this.tn.add(n):this.rn.push(n)}}get sn(){return this.tn.size>1}on(e){if(L(e.collectionGroup===this.collectionId),this.sn)return!1;const t=Eo(e);if(t!==void 0&&!this._n(t))return!1;const n=qt(e);let i=new Set,s=0,a=0;for(;s<n.length&&this._n(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.tn.size>0){const c=this.tn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=n[s];if(!this.an(c,u)||!this.un(this.nn[a++],u))return!1}++s}for(;s<n.length;++s){const c=n[s];if(a>=this.nn.length||!this.un(this.nn[a++],c))return!1}return!0}cn(){if(this.sn)return null;let e=new te(oe.comparator);const t=[];for(const n of this.rn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Ci(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Ci(n.field,0))}for(const n of this.nn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Ci(n.field,n.dir==="asc"?0:1)));return new Ki(Ki.UNKNOWN_ID,this.collectionId,t,Ar.empty())}_n(e){for(const t of this.rn)if(this.an(t,e))return!0;return!1}an(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}un(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function wd(r){var e,t;if(L(r instanceof W||r instanceof ee),r instanceof W){if(r instanceof Gh){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>W.create(r.field,"==",s)))||[];return ee.create(i,"or")}return r}const n=r.filters.map(i=>wd(i));return ee.create(n,r.op)}function hI(r){if(r.getFilters().length===0)return[];const e=Oo(wd(r));return L(Ad(e)),xo(e)||No(e)?[e]:e.getFilters()}function xo(r){return r instanceof W}function No(r){return r instanceof ee&&sa(r)}function Ad(r){return xo(r)||No(r)||function(t){if(t instanceof ee&&Ro(t)){for(const n of t.getFilters())if(!xo(n)&&!No(n))return!1;return!0}return!1}(r)}function Oo(r){if(L(r instanceof W||r instanceof ee),r instanceof W)return r;if(r.filters.length===1)return Oo(r.filters[0]);const e=r.filters.map(n=>Oo(n));let t=ee.create(e,r.op);return t=es(t),Ad(t)?t:(L(t instanceof ee),L(Vn(t)),L(t.filters.length>1),t.filters.reduce((n,i)=>da(n,i)))}function da(r,e){let t;return L(r instanceof W||r instanceof ee),L(e instanceof W||e instanceof ee),t=r instanceof W?e instanceof W?function(i,s){return ee.create([i,s],"and")}(r,e):Yu(r,e):e instanceof W?Yu(e,r):function(i,s){if(L(i.filters.length>0&&s.filters.length>0),Vn(i)&&Vn(s))return qh(i,s.getFilters());const a=Ro(i)?i:s,c=Ro(i)?s:i,u=a.filters.map(d=>da(d,c));return ee.create(u,"or")}(r,e),es(t)}function Yu(r,e){if(Vn(e))return qh(e,r.getFilters());{const t=e.filters.map(n=>da(r,n));return ee.create(t,"or")}}function es(r){if(L(r instanceof W||r instanceof ee),r instanceof W)return r;const e=r.getFilters();if(e.length===1)return es(e[0]);if(Uh(r))return r;const t=e.map(i=>es(i)),n=[];return t.forEach(i=>{i instanceof W?n.push(i):i instanceof ee&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:ee.create(n,r.op)}/**
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
 */class dI{constructor(){this.ln=new fa}addToCollectionParentIndex(e,t){return this.ln.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(Le.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(Le.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class fa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new te(Y.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new te(Y.comparator)).toArray()}}/**
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
 */const vi=new Uint8Array(0);class fI{constructor(e,t){this.databaseId=t,this.hn=new fa,this.Pn=new ct(n=>tn(n),(n,i)=>Lr(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.hn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.hn.add(t)});const s={collectionId:n,parent:Se(i)};return Zu(e).put(s)}return w.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Ah(t),""],!1,!0);return Zu(e).U(i).next(s=>{for(const a of s){if(a.collectionId!==t)break;n.push(Ge(a.parent))}return n})}addFieldIndex(e,t){const n=ar(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const a=mn(e);return s.next(c=>{a.put(Ku(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=ar(e),i=mn(e),s=fn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ar(e),n=fn(e),i=mn(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return w.forEach(this.Tn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new Xu(n).cn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=fn(e);let i=!0;const s=new Map;return w.forEach(this.Tn(t),a=>this.In(e,a).next(c=>{i&&(i=!!c),s.set(a,c)})).next(()=>{if(i){let a=$();const c=[];return w.forEach(s,(u,d)=>{C("IndexedDbIndexManager",`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(u)} to execute ${tn(t)}`);const f=function(F,Q){const Z=Eo(Q);if(Z===void 0)return null;for(const K of Qi(F,Z.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(d,u),p=function(F,Q){const Z=new Map;for(const K of qt(Q))for(const v of Qi(F,K.fieldPath))switch(v.op){case"==":case"in":Z.set(K.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return Z.set(K.fieldPath.canonicalString(),v.value),Array.from(Z.values())}return null}(d,u),I=function(F,Q){const Z=[];let K=!0;for(const v of qt(Q)){const g=v.kind===0?ku(F,v.fieldPath,F.startAt):xu(F,v.fieldPath,F.startAt);Z.push(g.value),K&&(K=g.inclusive)}return new Cn(Z,K)}(d,u),b=function(F,Q){const Z=[];let K=!0;for(const v of qt(Q)){const g=v.kind===0?xu(F,v.fieldPath,F.endAt):ku(F,v.fieldPath,F.endAt);Z.push(g.value),K&&(K=g.inclusive)}return new Cn(Z,K)}(d,u),V=this.En(u,d,I),x=this.En(u,d,b),D=this.dn(u,d,p),G=this.An(u.indexId,f,V,I.inclusive,x,b.inclusive,D);return w.forEach(G,q=>n.G(q,t.limit).next(F=>{F.forEach(Q=>{const Z=O.fromSegments(Q.documentKey);a.has(Z)||(a=a.add(Z),c.push(Z))})}))}).next(()=>c)}return w.resolve(null)})}Tn(e){let t=this.Pn.get(e);return t||(e.filters.length===0?t=[e]:t=hI(ee.create(e.filters,"and")).map(n=>Po(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Pn.set(e,t),t)}An(e,t,n,i,s,a,c){const u=(t!=null?t.length:1)*Math.max(n.length,s.length),d=u/(t!=null?t.length:1),f=[];for(let p=0;p<u;++p){const I=t?this.Rn(t[p/d]):vi,b=this.Vn(e,I,n[p%d],i),V=this.mn(e,I,s[p%d],a),x=c.map(D=>this.Vn(e,I,D,!0));f.push(...this.createRange(b,V,x))}return f}Vn(e,t,n,i){const s=new $t(e,O.empty(),t,n);return i?s:s.en()}mn(e,t,n,i){const s=new $t(e,O.empty(),t,n);return i?s.en():s}In(e,t){const n=new Xu(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const c of s)n.on(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a})}getIndexType(e,t){let n=2;const i=this.Tn(t);return w.forEach(i,s=>this.In(e,s).next(a=>{a?n!==0&&a.fields.length<function(u){let d=new te(oe.comparator),f=!1;for(const p of u.filters)for(const I of p.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?f=!0:d=d.add(I.field));for(const p of u.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&n===2?1:n)}fn(e,t){const n=new or;for(const i of qt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const a=n.Xt(i.kind);Gt.Ft.Et(s,a)}return n.Ht()}Rn(e){const t=new or;return Gt.Ft.Et(e,t.Xt(0)),t.Ht()}gn(e,t){const n=new or;return Gt.Ft.Et(Sr(this.databaseId,t),n.Xt(function(s){const a=qt(s);return a.length===0?0:a[a.length-1].kind}(e))),n.Ht()}dn(e,t,n){if(n===null)return[];let i=[];i.push(new or);let s=0;for(const a of qt(e)){const c=n[s++];for(const u of i)if(this.pn(t,a.fieldPath)&&Cr(c))i=this.yn(i,a,c);else{const d=u.Xt(a.kind);Gt.Ft.Et(c,d)}}return this.wn(i)}En(e,t,n){return this.dn(e,t,n.position)}wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ht();return t}yn(e,t,n){const i=[...e],s=[];for(const a of n.arrayValue.values||[])for(const c of i){const u=new or;u.seed(c.Ht()),Gt.Ft.Et(a,u.Xt(t.kind)),s.push(u)}return s}pn(e,t){return!!e.filters.find(n=>n instanceof W&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=ar(e),i=mn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const a=[];return w.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{a.push(function(f,p){const I=p?new Ar(p.sequenceNumber,new Le(rn(p.readTime),new O(Ge(p.documentKey)),p.largestBatchId)):Ar.empty(),b=f.fields.map(([V,x])=>new Ci(oe.fromServerFormat(V),x));return new Ki(f.indexId,f.collectionGroup,b,I)}(c,u))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=ar(e),s=mn(e);return this.Sn(e).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>w.forEach(c,u=>s.put(Ku(u.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,(i,s)=>{const a=n.get(i.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),w.forEach(c,u=>this.bn(e,i,u).next(d=>{const f=this.Dn(s,u);return d.isEqual(f)?w.resolve():this.vn(e,s,u,d,f)}))))})}Cn(e,t,n,i){return fn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Fn(e,t,n,i){return fn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}bn(e,t,n){const i=fn(e);let s=new te(pt);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},(a,c)=>{s=s.add(new $t(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}Dn(e,t){let n=new te(pt);const i=this.fn(t,e);if(i==null)return n;const s=Eo(t);if(s!=null){const a=e.data.field(s.fieldPath);if(Cr(a))for(const c of a.arrayValue.values||[])n=n.add(new $t(t.indexId,e.key,this.Rn(c),i))}else n=n.add(new $t(t.indexId,e.key,vi,i));return n}vn(e,t,n,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const a=[];return function(u,d,f,p,I){const b=u.getIterator(),V=d.getIterator();let x=dn(b),D=dn(V);for(;x||D;){let G=!1,q=!1;if(x&&D){const F=f(x,D);F<0?q=!0:F>0&&(G=!0)}else x!=null?q=!0:G=!0;G?(p(D),D=dn(V)):q?(I(x),x=dn(b)):(x=dn(b),D=dn(V))}}(i,s,pt,c=>{a.push(this.Cn(e,t,n,c))},c=>{a.push(this.Fn(e,t,n,c))}),w.waitFor(a)}Sn(e){let t=1;return mn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,c)=>pt(a,c)).filter((a,c,u)=>!c||pt(a,u[c-1])!==0);const i=[];i.push(e);for(const a of n){const c=pt(a,e),u=pt(a,t);if(c===0)i[0]=e.en();else if(c>0&&u<0)i.push(a),i.push(a.en());else if(u>0)break}i.push(t);const s=[];for(let a=0;a<i.length;a+=2){if(this.Mn(i[a],i[a+1]))return[];const c=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,vi,[]],u=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,vi,[]];s.push(IDBKeyRange.bound(c,u))}return s}Mn(e,t){return pt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(el)}getMinOffset(e,t){return w.mapArray(this.Tn(t),n=>this.In(e,n).next(i=>i||M())).next(el)}}function Zu(r){return pe(r,"collectionParents")}function fn(r){return pe(r,"indexEntries")}function ar(r){return pe(r,"indexConfiguration")}function mn(r){return pe(r,"indexState")}function el(r){L(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;ta(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Le(e.readTime,e.documentKey,t)}/**
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
 */const tl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class be{static withCacheSize(e){return new be(e,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Rd(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],a=IDBKeyRange.only(t.batchId);let c=0;const u=n.J({range:a},(f,p,I)=>(c++,I.delete()));s.push(u.next(()=>{L(c===1)}));const d=[];for(const f of t.mutations){const p=Ch(e,f.key.path,t.batchId);s.push(i.delete(p)),d.push(f.key)}return w.waitFor(s).next(()=>d)}function ts(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw M();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */be.DEFAULT_COLLECTION_PERCENTILE=10,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,be.DEFAULT=new be(41943040,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),be.DISABLED=new be(-1,0,0);class vs{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.xn={}}static Pt(e,t,n,i){L(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new vs(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return gt(e).J({index:"userMutationsIndex",range:n},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=vn(e),a=gt(e);return a.add({}).next(c=>{L(typeof c=="number");const u=new aa(c,t,n,i),d=function(b,V,x){const D=x.baseMutations.map(q=>Yi(b.ht,q)),G=x.mutations.map(q=>Yi(b.ht,q));return{userId:V,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:D,mutations:G}}(this.serializer,this.userId,u),f=[];let p=new te((I,b)=>z(I.canonicalString(),b.canonicalString()));for(const I of i){const b=Ch(this.userId,I.key.path,c);p=p.add(I.key.path.popLast()),f.push(a.put(d)),f.push(s.put(b,W_))}return p.forEach(I=>{f.push(this.indexManager.addToCollectionParentIndex(e,I))}),e.addOnCommittedListener(()=>{this.xn[c]=u.keys()}),w.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return gt(e).get(t).next(n=>n?(L(n.userId===this.userId),zt(this.serializer,n)):null)}On(e,t){return this.xn[t]?w.resolve(this.xn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.xn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return gt(e).J({index:"userMutationsIndex",range:i},(a,c,u)=>{c.userId===this.userId&&(L(c.batchId>=n),s=zt(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return gt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,a)=>{n=s.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return gt(e).U("userMutationsIndex",t).next(n=>n.map(i=>zt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Vi(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return vn(e).J({range:i},(a,c,u)=>{const[d,f,p]=a,I=Ge(f);if(d===this.userId&&t.path.isEqual(I))return gt(e).get(p).next(b=>{if(!b)throw M();L(b.userId===this.userId),s.push(zt(this.serializer,b))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new te(z);const i=[];return t.forEach(s=>{const a=Vi(this.userId,s.path),c=IDBKeyRange.lowerBound(a),u=vn(e).J({range:c},(d,f,p)=>{const[I,b,V]=d,x=Ge(b);I===this.userId&&s.path.isEqual(x)?n=n.add(V):p.done()});i.push(u)}),w.waitFor(i).next(()=>this.Nn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Vi(this.userId,n),a=IDBKeyRange.lowerBound(s);let c=new te(z);return vn(e).J({range:a},(u,d,f)=>{const[p,I,b]=u,V=Ge(I);p===this.userId&&n.isPrefixOf(V)?V.length===i&&(c=c.add(b)):f.done()}).next(()=>this.Nn(e,c))}Nn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(gt(e).get(s).next(a=>{if(a===null)throw M();L(a.userId===this.userId),n.push(zt(this.serializer,a))}))}),w.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return Rd(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Ln(t.batchId)}),w.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Ln(e){delete this.xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return vn(e).J({range:n},(s,a,c)=>{if(s[0]===this.userId){const u=Ge(s[1]);i.push(u)}else c.done()}).next(()=>{L(i.length===0)})})}containsKey(e,t){return bd(e,this.userId,t)}Bn(e){return Pd(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function bd(r,e,t){const n=Vi(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return vn(r).J({range:s,H:!0},(c,u,d)=>{const[f,p,I]=c;f===e&&p===i&&(a=!0),d.done()}).next(()=>a)}function gt(r){return pe(r,"mutations")}function vn(r){return pe(r,"documentMutations")}function Pd(r){return pe(r,"mutationQueues")}/**
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
 */class sn{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new sn(0)}static Qn(){return new sn(-1)}}/**
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
 */class mI{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Kn(e).next(t=>{const n=new sn(t.highestTargetId);return t.highestTargetId=n.next(),this.$n(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Kn(e).next(t=>U.fromTimestamp(new ae(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Kn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.$n(e,i)))}addTargetData(e,t){return this.Un(e,t).next(()=>this.Kn(e).next(n=>(n.targetCount+=1,this.Wn(t,n),this.$n(e,n))))}updateTargetData(e,t){return this.Un(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>pn(e).delete(t.targetId)).next(()=>this.Kn(e)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.$n(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return pn(e).J((a,c)=>{const u=fr(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,t){return pn(e).J((n,i)=>{const s=fr(i);t(s)})}Kn(e){return nl(e).get("targetGlobalKey").next(t=>(L(t!==null),t))}$n(e,t){return nl(e).put("targetGlobalKey",t)}Un(e,t){return pn(e).put(Ed(this.serializer,t))}Wn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Kn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=tn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return pn(e).J({range:i,index:"queryTargetsIndex"},(a,c,u)=>{const d=fr(c);Lr(t,d.target)&&(s=d,u.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=Et(e);return t.forEach(a=>{const c=Se(a.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,a))}),w.waitFor(i)}removeMatchingKeys(e,t,n){const i=Et(e);return w.forEach(t,s=>{const a=Se(s.path);return w.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=Et(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Et(e);let s=$();return i.J({range:n,H:!0},(a,c,u)=>{const d=Ge(a[1]),f=new O(d);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Se(t.path),i=IDBKeyRange.bound([n],[Ah(n)],!1,!0);let s=0;return Et(e).J({index:"documentTargetsIndex",H:!0,range:i},([a,c],u,d)=>{a!==0&&(s++,d.done())}).next(()=>s>0)}ut(e,t){return pn(e).get(t).next(n=>n?fr(n):null)}}function pn(r){return pe(r,"targets")}function nl(r){return pe(r,"targetGlobal")}function Et(r){return pe(r,"targetDocuments")}/**
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
 */function rl([r,e],[t,n]){const i=z(r,t);return i===0?z(e,n):i}class pI{constructor(e){this.Gn=e,this.buffer=new te(rl),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();rl(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sd{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dt(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await on(t)}await this.Yn(3e5)})}}class gI{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return w.resolve(Ue.oe);const n=new pI(t);return this.Zn.forEachTarget(e,i=>n.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>n.Hn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(tl)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tl):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,i,s,a,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(d=Date.now(),gn()<=H.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function Cd(r,e){return new gI(r,e)}/**
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
 */class _I{constructor(e,t){this.db=e,this.garbageCollector=Cd(this,t)}Xn(e){const t=this.nr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}er(e,t){return this.rr(e,(n,i)=>t(i))}addReference(e,t,n){return Ei(e,n)}removeReference(e,t,n){return Ei(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ei(e,t)}ir(e,t){return function(i,s){let a=!1;return Pd(i).Y(c=>bd(i,c,s).next(u=>(u&&(a=!0),w.resolve(!u)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.rr(e,(a,c)=>{if(c<=t){const u=this.ir(e,a).next(d=>{if(!d)return s++,n.getEntry(e,a).next(()=>(n.removeEntry(a,U.min()),Et(e).delete(function(p){return[0,Se(p.path)]}(a))))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ei(e,t)}rr(e,t){const n=Et(e);let i,s=Ue.oe;return n.J({index:"documentTargetsIndex"},([a,c],{path:u,sequenceNumber:d})=>{a===0?(s!==Ue.oe&&t(new O(Ge(i)),s),s=d,i=u):s=Ue.oe}).next(()=>{s!==Ue.oe&&t(new O(Ge(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ei(r,e){return Et(r).put(function(n,i){return{targetId:0,path:Se(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class Vd{constructor(){this.changes=new ct(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ut(e).put(n)}removeEntry(e,t,n){return Ut(e).delete(function(s,a){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Zi(a),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.sr(e,n)))}getEntry(e,t){let n=ue.newInvalidDocument(t);return Ut(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(cr(t))},(i,s)=>{n=this._r(t,s)}).next(()=>n)}ar(e,t){let n={size:0,document:ue.newInvalidDocument(t)};return Ut(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(cr(t))},(i,s)=>{n={document:this._r(t,s),size:ts(s)}}).next(()=>n)}getEntries(e,t){let n=Me();return this.ur(e,t,(i,s)=>{const a=this._r(i,s);n=n.insert(i,a)}).next(()=>n)}cr(e,t){let n=Me(),i=new se(O.comparator);return this.ur(e,t,(s,a)=>{const c=this._r(s,a);n=n.insert(s,c),i=i.insert(s,ts(a))}).next(()=>({documents:n,lr:i}))}ur(e,t,n){if(t.isEmpty())return w.resolve();let i=new te(ol);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(cr(i.first()),cr(i.last())),a=i.getIterator();let c=a.getNext();return Ut(e).J({index:"documentKeyIndex",range:s},(u,d,f)=>{const p=O.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&ol(c,p)<0;)n(c,null),c=a.getNext();c&&c.isEqual(p)&&(n(c,d),c=a.hasNext()?a.getNext():null),c?f.$(cr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const a=t.path,c=[a.popLast().toArray(),a.lastSegment(),Zi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ut(e).U(IDBKeyRange.bound(c,u,!0)).next(d=>{s==null||s.incrementDocumentReadCount(d.length);let f=Me();for(const p of d){const I=this._r(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);I.isFoundDocument()&&(Br(t,I)||i.has(I.key))&&(f=f.insert(I.key,I))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Me();const a=sl(t,n),c=sl(t,Le.max());return Ut(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,c,!0)},(u,d,f)=>{const p=this._r(O.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new II(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return il(e).get("remoteDocumentGlobalKey").next(t=>(L(!!t),t))}sr(e,t){return il(e).put("remoteDocumentGlobalKey",t)}_r(e,t){if(t){const n=iI(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return ue.newInvalidDocument(e)}}function Dd(r){return new yI(r)}class II extends Vd{constructor(e,t){super(),this.hr=e,this.trackRemovals=t,this.Pr=new ct(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new te((s,a)=>z(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const c=this.Pr.get(s);if(t.push(this.hr.removeEntry(e,s,c.readTime)),a.isValidDocument()){const u=Gu(this.hr.serializer,a);i=i.add(s.path.popLast());const d=ts(u);n+=d-c.size,t.push(this.hr.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){const u=Gu(this.hr.serializer,a.convertToNoDocument(U.min()));t.push(this.hr.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.hr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.hr.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.hr.ar(e,t).next(n=>(this.Pr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.hr.cr(e,t).next(({documents:n,lr:i})=>(i.forEach((s,a)=>{this.Pr.set(s,{size:a,readTime:n.get(s).readTime})}),n))}}function il(r){return pe(r,"remoteDocumentGlobal")}function Ut(r){return pe(r,"remoteDocumentsV14")}function cr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function sl(r,e){const t=e.documentKey.path.toArray();return[r,Zi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ol(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=z(t[s],n[s]),i)return i;return i=z(t.length,n.length),i||(i=z(t[t.length-2],n[n.length-2]),i||z(t[t.length-1],n[n.length-1]))}/**
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
 */class vI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kd{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&vr(n.mutation,i,Ne.empty(),ae.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,$()).next(()=>n))}getLocalViewOfDocuments(e,t,n=$()){const i=$e();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=hr();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=$e();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,$()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,n,i){let s=Me();const a=Ir(),c=function(){return Ir()}();return t.forEach((u,d)=>{const f=n.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ut)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),vr(f.mutation,d,f.mutation.getFieldMask(),ae.now())):a.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var p;return c.set(d,new vI(f,(p=a.get(d))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Ir();let i=new se((a,c)=>a-c),s=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=n.get(u)||Ne.empty();f=c.applyToLocalView(d,f),n.set(u,f);const p=(i.get(c.batchId)||$()).add(u);i=i.insert(c.batchId,p)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,p=Jh();f.forEach(I=>{if(!s.has(I)){const b=rd(t.get(I),n.get(I));b!==null&&p.set(I,b),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$h(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):w.resolve($e());let c=-1,u=s;return a.next(d=>w.forEach(d,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{u=u.insert(f,I)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,$())).next(f=>({batchId:c,changes:Qh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(n=>{let i=hr();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=hr();return this.indexManager.getCollectionParents(e,s).next(c=>w.forEach(c,u=>{const d=function(p,I){return new Fr(I,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next(f=>{f.forEach((p,I)=>{a=a.insert(p,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,ue.newInvalidDocument(f)))});let c=hr();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&vr(f.mutation,d,Ne.empty(),ae.now()),Br(t,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class EI{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return w.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:xe(i.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Td(i.bundledQuery),readTime:xe(i.readTime)}}(t)),w.resolve()}}/**
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
 */class TI{constructor(){this.overlays=new se(O.comparator),this.Er=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=$e();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.Tt(e,t,s)}),w.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Er.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const i=$e(),s=t.length+1,a=new O(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new se((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let f=s.get(d.largestBatchId);f===null&&(f=$e(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=$e(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return w.resolve(c)}Tt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new ua(t,n));let s=this.Er.get(t);s===void 0&&(s=$(),this.Er.set(t,s)),this.Er.set(t,s.add(n.key))}}/**
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
 */class wI{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
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
 */class ma{constructor(){this.dr=new te(ge.Ar),this.Rr=new te(ge.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const n=new ge(e,t);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.gr(new ge(e,t))}pr(e,t){e.forEach(n=>this.removeReference(n,t))}yr(e){const t=new O(new Y([])),n=new ge(t,e),i=new ge(t,e+1),s=[];return this.Rr.forEachInRange([n,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new O(new Y([])),n=new ge(t,e),i=new ge(t,e+1);let s=$();return this.Rr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ge(e,0),n=this.dr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ge{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return O.comparator(e.key,t.key)||z(e.br,t.br)}static Vr(e,t){return z(e.br,t.br)||O.comparator(e.key,t.key)}}/**
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
 */class AI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new te(ge.Ar)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new aa(s,t,n,i);this.mutationQueue.push(a);for(const c of i)this.vr=this.vr.add(new ge(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return w.resolve(a)}lookupMutationBatch(e,t){return w.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Fr(n),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ge(t,0),i=new ge(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([n,i],a=>{const c=this.Cr(a.br);s.push(c)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new te(z);return t.forEach(i=>{const s=new ge(i,0),a=new ge(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{n=n.add(c.br)})}),w.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;O.isDocumentKey(s)||(s=s.child(""));const a=new ge(new O(s),0);let c=new te(z);return this.vr.forEachWhile(u=>{const d=u.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.br)),!0)},a),w.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(n=>{const i=this.Cr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){L(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return w.forEach(t.mutations,i=>{const s=new ge(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=n})}Ln(e){}containsKey(e,t){const n=new ge(t,0),i=this.vr.firstAfterOrEqual(n);return w.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class RI{constructor(e){this.Nr=e,this.docs=function(){return new se(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ue.newInvalidDocument(t))}getEntries(e,t){let n=Me();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():ue.newInvalidDocument(i))}),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Me();const a=t.path,c=new O(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ta(Rh(f),n)<=0||(i.has(f.key)||Br(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,t,n,i){M()}Lr(e,t){return w.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new bI(this)}getSize(e){return w.resolve(this.size)}}class bI extends Vd{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(n)}),w.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class PI{constructor(e){this.persistence=e,this.Br=new ct(t=>tn(t),Lr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.kr=0,this.qr=new ma,this.targetCount=0,this.Qr=sn.qn()}forEachTarget(e,t){return this.Br.forEach((n,i)=>t(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),w.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new sn(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.Un(t),w.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.Br.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.qr.containsKey(t))}}/**
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
 */class pa{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Ue(0),this.Ur=!1,this.Ur=!0,this.Wr=new wI,this.referenceDelegate=e(this),this.Gr=new PI(this),this.indexManager=new dI,this.remoteDocumentCache=function(i){return new RI(i)}(n=>this.referenceDelegate.zr(n)),this.serializer=new vd(t),this.jr=new EI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new AI(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){C("MemoryPersistence","Starting transaction:",e);const i=new SI(this.$r.next());return this.referenceDelegate.Hr(),n(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return w.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class SI extends Ph{constructor(e){super(),this.currentSequenceNumber=e}}class Es{constructor(e){this.persistence=e,this.Zr=new ma,this.Xr=null}static ei(e){return new Es(e)}get ti(){if(this.Xr)return this.Xr;throw M()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),w.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.ti,n=>{const i=O.fromPath(n);return this.ni(e,i).next(s=>{s||t.removeEntry(i,U.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(n=>{n?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return w.or([()=>w.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class ns{constructor(e,t){this.persistence=e,this.ri=new ct(n=>Se(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Cd(this,t)}static ei(e,t){return new ns(e,t)}Hr(){}Jr(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}er(e,t){return w.forEach(this.ri,(n,i)=>this.ir(e,n,i).next(s=>s?w.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(n++,s.removeEntry(a,U.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),w.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ki(e.data.value)),t}ir(e,t,n){return w.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return w.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class CI{constructor(e){this.serializer=e}O(e,t,n,i){const s=new hs("createOrUpgrade",t);n<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Eu,{unique:!0}),u.createObjectStore("documentMutations")}(e),al(e),function(u){u.createObjectStore("remoteDocuments")}(e));let a=w.resolve();return n<3&&i>=3&&(n!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),al(e)),a=a.next(()=>function(u){const d=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(u,d){return d.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Eu,{unique:!0});const p=d.store("mutations"),I=f.map(b=>p.put(b));return w.waitFor(I)})}(e,s))),a=a.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(a=a.next(()=>this.ii(s))),n<6&&i>=6&&(a=a.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.si(s)))),n<7&&i>=7&&(a=a.next(()=>this.oi(s))),n<8&&i>=8&&(a=a.next(()=>this._i(e,s))),n<9&&i>=9&&(a=a.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(a=a.next(()=>this.ai(s))),n<11&&i>=11&&(a=a.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(a=a.next(()=>{(function(u){const d=u.createObjectStore("documentOverlays",{keyPath:oy});d.createIndex("collectionPathOverlayIndex",ay,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",cy,{unique:!1})})(e)})),n<13&&i>=13&&(a=a.next(()=>function(u){const d=u.createObjectStore("remoteDocumentsV14",{keyPath:Q_});d.createIndex("documentKeyIndex",J_),d.createIndex("collectionGroupIndex",X_)}(e)).next(()=>this.ui(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(a=a.next(()=>this.ci(e,s))),n<15&&i>=15&&(a=a.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:ny}).createIndex("sequenceNumberIndex",ry,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:iy}).createIndex("documentKeyIndex",sy,{unique:!1})}(e))),n<16&&i>=16&&(a=a.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),a}si(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=ts(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ii(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>w.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(c=>w.forEach(c,u=>{L(u.userId===s.userId);const d=zt(this.serializer,u);return Rd(e,s.userId,d).next(()=>{})}))}))}oi(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((a,c)=>{const u=new Y(a),d=function(p){return[0,Se(p)]}(u);s.push(t.get(d).next(f=>f?w.resolve():(p=>t.put({targetId:0,path:Se(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}_i(e,t){e.createObjectStore("collectionParents",{keyPath:ty});const n=t.store("collectionParents"),i=new fa,s=a=>{if(i.add(a)){const c=a.lastSegment(),u=a.popLast();return n.put({collectionId:c,parent:Se(u)})}};return t.store("remoteDocuments").J({H:!0},(a,c)=>{const u=new Y(a);return s(u.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([a,c,u],d)=>{const f=Ge(c);return s(f.popLast())}))}ai(e){const t=e.store("targets");return t.J((n,i)=>{const s=fr(i),a=Ed(this.serializer,s);return t.put(a)})}ui(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,a)=>{const c=t.store("remoteDocumentsV14"),u=function(p){return p.document?new O(Y.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):M()}(a).path.toArray(),d={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(c.put(d))}).next(()=>w.waitFor(i))}ci(e,t){const n=t.store("mutations"),i=Dd(this.serializer),s=new pa(Es.ei,this.serializer.ht);return n.U().next(a=>{const c=new Map;return a.forEach(u=>{var d;let f=(d=c.get(u.userId))!==null&&d!==void 0?d:$();zt(this.serializer,u).keys().forEach(p=>f=f.add(p)),c.set(u.userId,f)}),w.forEach(c,(u,d)=>{const f=new Ie(d),p=Is.Pt(this.serializer,f),I=s.getIndexManager(f),b=vs.Pt(f,this.serializer,I,s.referenceDelegate);return new kd(i,b,p,I).recalculateAndSaveOverlaysForDocumentKeys(new To(t,Ue.oe),u).next()})})}}function al(r){r.createObjectStore("targetDocuments",{keyPath:Z_}).createIndex("documentTargetsIndex",ey,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Y_,{unique:!0}),r.createObjectStore("targetGlobal")}const ao="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ga{constructor(e,t,n,i,s,a,c,u,d,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.li=s,this.window=a,this.document=c,this.hi=d,this.Pi=f,this.Ti=p,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.Ei=null,this.di=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=I=>Promise.resolve(),!ga.p())throw new N(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _I(this,i),this.Vi=t+"main",this.serializer=new vd(u),this.mi=new bt(this.Vi,this.Ti,new CI(this.serializer)),this.Wr=new oI,this.Gr=new mI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Dd(this.serializer),this.jr=new sI,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,f===!1&&ke("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(S.FAILED_PRECONDITION,ao);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Gr.getHighestSequenceNumber(e))}).then(e=>{this.$r=new Ue(e,this.hi)}).then(()=>{this.Ur=!0}).catch(e=>(this.mi&&this.mi.close(),Promise.reject(e)))}Si(e){return this.Ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.mi.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ti(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(e).next(t=>{t||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(e)).next(t=>this.isPrimary&&!t?this.vi(e).next(()=>!1):!!t&&this.Ci(e).next(()=>!0))).catch(e=>{if(Dt(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.li.enqueueRetryable(()=>this.Ri(e)),this.isPrimary=e})}bi(e){return ur(e).get("owner").next(t=>w.resolve(this.Fi(t)))}Mi(e){return Ti(e).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=pe(t,"clientMetadata");return n.U().next(i=>{const s=this.Ni(i,18e5),a=i.filter(c=>s.indexOf(c)===-1);return w.forEach(a,c=>n.delete(c.clientId)).next(()=>a)})}).catch(()=>[]);if(this.fi)for(const t of e)this.fi.removeItem(this.Li(t.clientId))}}wi(){this.di=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(e){return!!e&&e.ownerId===this.clientId}Di(e){return this.Pi?w.resolve(!0):ur(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)){if(this.Fi(t)&&this.networkEnabled)return!0;if(!this.Fi(t)){if(!t.allowTabSynchronization)throw new N(S.FAILED_PRECONDITION,ao);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ti(e).U().next(n=>this.Ni(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||a&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ur=!1,this.ki(),this.di&&(this.di.cancel(),this.di=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new To(e,Ue.oe);return this.vi(t).next(()=>this.Mi(t))}),this.mi.close(),this.Ki()}Ni(e,t){return e.filter(n=>this.Oi(n.updateTimeMs,t)&&!this.Bi(n.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>Ti(e).U().next(t=>this.Ni(t,18e5).map(n=>n.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(e,t){return vs.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new fI(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return Is.Pt(this.serializer,e)}getBundleCache(){return this.jr}runTransaction(e,t,n){C("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===17?hy:u===16?ly:u===15?ra:u===14?kh:u===13?Dh:u===12?uy:u===11?Vh:void M()}(this.Ti);let a;return this.mi.runTransaction(e,i,s,c=>(a=new To(c,this.$r?this.$r.next():Ue.oe),t==="readwrite-primary"?this.bi(a).next(u=>!!u||this.Di(a)).next(u=>{if(!u)throw ke(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new N(S.FAILED_PRECONDITION,bh);return n(a)}).next(u=>this.Ci(a).next(()=>u)):this.Ui(a).next(()=>n(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Ui(e){return ur(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)&&!this.Fi(t)&&!(this.Pi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new N(S.FAILED_PRECONDITION,ao)})}Ci(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ur(e).put("owner",t)}static p(){return bt.p()}vi(e){const t=ur(e);return t.get("owner").next(n=>this.Fi(n)?(C("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):w.resolve())}Oi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ke(`Detected an update time that is in the future: ${e} > ${n}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ei=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.Ei),this.inForeground=this.document.visibilityState==="visible")}qi(){this.Ei&&(this.document.removeEventListener("visibilitychange",this.Ei),this.Ei=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const t=/(?:Version|Mobile)\/1[456]/;kl()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Bi(e){var t;try{const n=((t=this.fi)===null||t===void 0?void 0:t.getItem(this.Li(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ke("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Li(this.clientId),String(Date.now()))}catch(e){ke("Failed to set zombie client id.",e)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Li(this.clientId))}catch{}}Li(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ur(r){return pe(r,"owner")}function Ti(r){return pe(r,"clientMetadata")}function VI(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class _a{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=i}static zi(e,t){let n=$(),i=$();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _a(e,t.fromCache,n,i)}}/**
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
 */class DI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xd{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return kl()?8:Sh(me())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new DI;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,n,i){return n.documentReadCount<this.Ji?(gn()<=H.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",_n(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),w.resolve()):(gn()<=H.DEBUG&&C("QueryEngine","Query:",_n(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(gn()<=H.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",_n(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):w.resolve())}Xi(e,t){if(Nu(t))return w.resolve(null);let n=Be(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ji(t,null,"F"),n=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=$(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,n).next(u=>{const d=this.rs(t,c);return this.ss(t,d,a,u.readTime)?this.Xi(e,Ji(t,null,"F")):this.os(e,d,t,u)}))})))}es(e,t,n,i){return Nu(t)||i.isEqual(U.min())?w.resolve(null):this.Zi.getDocuments(e,n).next(s=>{const a=this.rs(t,s);return this.ss(t,a,n,i)?w.resolve(null):(gn()<=H.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_n(t)),this.os(e,a,t,q_(i,-1)).next(c=>c))})}rs(e,t){let n=new te(Hh(e));return t.forEach((i,s)=>{Br(e,s)&&(n=n.add(s))}),n}ss(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,n){return gn()<=H.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",_n(t)),this.Zi.getDocumentsMatchingQuery(e,t,Le.min(),n)}os(e,t,n,i){return this.Zi.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class kI{constructor(e,t,n,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new se(z),this.cs=new ct(s=>tn(s),Lr),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kd(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Nd(r,e,t,n){return new kI(r,e,t,n)}async function Od(r,e){const t=B(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],c=[];let u=$();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:c}))})})}function xI(r,e){const t=B(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const p=d.batch,I=p.keys();let b=w.resolve();return I.forEach(V=>{b=b.next(()=>f.getEntry(u,V)).next(x=>{const D=d.docVersions.get(V);L(D!==null),x.version.compareTo(D)<0&&(p.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let u=$();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Md(r){const e=B(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function NI(r,e){const t=B(r),n=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const c=[];e.targetChanges.forEach((f,p)=>{const I=i.get(p);if(!I)return;c.push(t.Gr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Gr.addMatchingKeys(s,f.addedDocuments,p)));let b=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(de.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),i=i.insert(p,b),function(x,D,G){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,b,f)&&c.push(t.Gr.updateTargetData(s,b))});let u=Me(),d=$();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(OI(s,a,e.documentUpdates).next(f=>{u=f.Is,d=f.Es})),!n.isEqual(U.min())){const f=t.Gr.getLastRemoteSnapshotVersion(s).next(p=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(f)}return w.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.us=i,s))}function OI(r,e,t){let n=$(),i=$();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=Me();return t.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):C("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Is:a,Es:i}})}function MI(r,e){const t=B(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function LI(r,e){const t=B(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Gr.getTargetData(n,e).next(s=>s?(i=s,w.resolve(i)):t.Gr.allocateTargetId(n).next(a=>(i=new nt(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Gr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.us.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(n.targetId,n),t.cs.set(e,n.targetId)),n})}async function Mo(r,e,t){const n=B(r),i=n.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Dt(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.us=n.us.remove(e),n.cs.delete(i.target)}function cl(r,e,t){const n=B(r);let i=U.min(),s=$();return n.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const p=B(u),I=p.cs.get(f);return I!==void 0?w.resolve(p.us.get(I)):p.Gr.getTargetData(d,f)}(n,a,Be(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>n._s.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?s:$())).next(c=>(FI(n,by(e),c),{documents:c,ds:s})))}function FI(r,e,t){let n=r.ls.get(e)||U.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.ls.set(e,n)}class ul{constructor(){this.activeTargetIds=ky()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ld{constructor(){this._o=new ul,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new ul,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UI{uo(e){}shutdown(){}}/**
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
 */class ll{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wi=null;function co(){return wi===null?wi=function(){return 268435456+Math.round(2147483648*Math.random())}():wi++,"0x"+wi.toString(16)}/**
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
 */const BI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qI{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Re="WebChannelConnection";class jI extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,n,i,s,a){const c=co(),u=this.No(t,n.toUriEncodedString());C("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,s,a),this.Bo(t,u,d,i).then(f=>(C("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Zt("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}ko(t,n,i,s,a,c){return this.Oo(t,n,i,s,a)}Lo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,n){const i=BI[t];return`${this.Fo}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,n,i){const s=co();return new Promise((a,c)=>{const u=new _h;u.setWithCredentials(!0),u.listenOnce(yh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Si.NO_ERROR:const f=u.getResponseJson();C(Re,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Si.TIMEOUT:C(Re,`RPC '${e}' ${s} timed out`),c(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case Si.HTTP_ERROR:const p=u.getStatus();if(C(Re,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const b=I==null?void 0:I.error;if(b&&b.status&&b.message){const V=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN}(b.status);c(new N(V,b.message))}else c(new N(S.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new N(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{C(Re,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);C(Re,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,n,15)})}qo(e,t,n){const i=co(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Eh(),c=vh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=s.join("");C(Re,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=a.createWebChannel(f,u);let I=!1,b=!1;const V=new qI({Eo:D=>{b?C(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(I||(C(Re,`Opening RPC '${e}' stream ${i} transport.`),p.open(),I=!0),C(Re,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},Ao:()=>p.close()}),x=(D,G,q)=>{D.listen(G,F=>{try{q(F)}catch(Q){setTimeout(()=>{throw Q},0)}})};return x(p,lr.EventType.OPEN,()=>{b||(C(Re,`RPC '${e}' stream ${i} transport opened.`),V.So())}),x(p,lr.EventType.CLOSE,()=>{b||(b=!0,C(Re,`RPC '${e}' stream ${i} transport closed`),V.Do())}),x(p,lr.EventType.ERROR,D=>{b||(b=!0,Zt(Re,`RPC '${e}' stream ${i} transport errored:`,D),V.Do(new N(S.UNAVAILABLE,"The operation could not be completed")))}),x(p,lr.EventType.MESSAGE,D=>{var G;if(!b){const q=D.data[0];L(!!q);const F=q,Q=(F==null?void 0:F.error)||((G=F[0])===null||G===void 0?void 0:G.error);if(Q){C(Re,`RPC '${e}' stream ${i} received error:`,Q);const Z=Q.status;let K=function(y){const E=le[y];if(E!==void 0)return od(E)}(Z),v=Q.message;K===void 0&&(K=S.INTERNAL,v="Unknown error status: "+Z+" with message "+Q.message),b=!0,V.Do(new N(K,v)),p.close()}else C(Re,`RPC '${e}' stream ${i} received:`,q),V.vo(q)}}),x(c,Ih.STAT_EVENT,D=>{D.stat===vo.PROXY?C(Re,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===vo.NOPROXY&&C(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}/**
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
 */function zI(){return typeof window<"u"?window:null}function Mi(){return typeof document<"u"?document:null}/**
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
 */function Ts(r){return new Wy(r,!0)}/**
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
 */class Fd{constructor(e,t,n=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-n);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Ud{constructor(e,t,n,i,s,a,c,u){this.li=e,this.Yo=n,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Fd(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(ke(t.toString()),ke("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Xo===t&&this.I_(n,i)},n=>{e(()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(i)})})}I_(e,t){const n=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{n(()=>this.E_(i))}),this.stream.onMessage(i=>{n(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GI extends Ud{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Xy(this.serializer,e),n=function(s){if(!("targetChange"in s))return U.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?xe(a.readTime):U.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=Do(this.serializer),t.addTarget=function(s,a){let c;const u=a.target;if(c=Wi(u)?{documents:md(s,u)}:{query:pd(s,u).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ud(s,a.resumeToken);const d=Co(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=Nn(s,a.snapshotVersion.toTimestamp());const d=Co(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const n=Zy(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=Do(this.serializer),t.removeTarget=e,this.c_(t)}}class $I extends Ud{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return L(!!e.streamToken),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){L(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Yy(e.writeResults,e.commitTime),n=xe(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=Do(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Yi(this.serializer,n))};this.c_(t)}}/**
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
 */class KI extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Vo(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(S.UNKNOWN,s.toString())})}ko(e,t,n,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Vo(t,n),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class HI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ke(t),this.C_=!1):C("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class WI{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{n.enqueueAndForget(async()=>{xt(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=B(u);d.k_.add(4),await Gr(d),d.K_.set("Unknown"),d.k_.delete(4),await zr(d)}(this))})}),this.K_=new HI(n,i)}}async function zr(r){if(xt(r))for(const e of r.q_)await e(!0)}async function Gr(r){for(const e of r.q_)await e(!1)}function Bd(r,e){const t=B(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Ea(t)?va(t):qn(t).s_()&&Ia(t,e))}function ya(r,e){const t=B(r),n=qn(t);t.B_.delete(e),n.s_()&&qd(t,e),t.B_.size===0&&(n.s_()?n.a_():xt(t)&&t.K_.set("Unknown"))}function Ia(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qn(r).V_(e)}function qd(r,e){r.U_.xe(e),qn(r).m_(e)}function va(r){r.U_=new Gy({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),qn(r).start(),r.K_.F_()}function Ea(r){return xt(r)&&!qn(r).i_()&&r.B_.size>0}function xt(r){return B(r).k_.size===0}function jd(r){r.U_=void 0}async function QI(r){r.K_.set("Online")}async function JI(r){r.B_.forEach((e,t)=>{Ia(r,e)})}async function XI(r,e){jd(r),Ea(r)?(r.K_.O_(e),va(r)):r.K_.set("Unknown")}async function YI(r,e,t){if(r.K_.set("Online"),e instanceof cd&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(r,e)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await rs(r,n)}else if(e instanceof Oi?r.U_.$e(e):e instanceof ad?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(U.min()))try{const n=await Md(r.localStore);t.compareTo(n)>=0&&await function(s,a){const c=s.U_.it(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.B_.get(d);f&&s.B_.set(d,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const f=s.B_.get(u);if(!f)return;s.B_.set(u,f.withResumeToken(de.EMPTY_BYTE_STRING,f.snapshotVersion)),qd(s,u);const p=new nt(f.target,u,d,f.sequenceNumber);Ia(s,p)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){C("RemoteStore","Failed to raise snapshot:",n),await rs(r,n)}}async function rs(r,e,t){if(!Dt(e))throw e;r.k_.add(1),await Gr(r),r.K_.set("Offline"),t||(t=()=>Md(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await zr(r)})}function zd(r,e){return e().catch(t=>rs(r,t,e))}async function $r(r){const e=B(r),t=Vt(e);let n=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;ZI(e);)try{const i=await MI(e.localStore,n);if(i===null){e.L_.length===0&&t.a_();break}n=i.batchId,ev(e,i)}catch(i){await rs(e,i)}Gd(e)&&$d(e)}function ZI(r){return xt(r)&&r.L_.length<10}function ev(r,e){r.L_.push(e);const t=Vt(r);t.s_()&&t.f_&&t.g_(e.mutations)}function Gd(r){return xt(r)&&!Vt(r).i_()&&r.L_.length>0}function $d(r){Vt(r).start()}async function tv(r){Vt(r).w_()}async function nv(r){const e=Vt(r);for(const t of r.L_)e.g_(t.mutations)}async function rv(r,e,t){const n=r.L_.shift(),i=ca.from(n,e,t);await zd(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await $r(r)}async function iv(r,e){e&&Vt(r).f_&&await async function(n,i){if(function(a){return qy(a)&&a!==S.ABORTED}(i.code)){const s=n.L_.shift();Vt(n).__(),await zd(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $r(n)}}(r,e),Gd(r)&&$d(r)}async function hl(r,e){const t=B(r);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const n=xt(t);t.k_.add(3),await Gr(t),n&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await zr(t)}async function sv(r,e){const t=B(r);e?(t.k_.delete(2),await zr(t)):e||(t.k_.add(2),await Gr(t),t.K_.set("Unknown"))}function qn(r){return r.W_||(r.W_=function(t,n,i){const s=B(t);return s.b_(),new GI(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Ro:QI.bind(null,r),mo:JI.bind(null,r),po:XI.bind(null,r),R_:YI.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Ea(r)?va(r):r.K_.set("Unknown")):(await r.W_.stop(),jd(r))})),r.W_}function Vt(r){return r.G_||(r.G_=function(t,n,i){const s=B(t);return s.b_(),new $I(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:tv.bind(null,r),po:iv.bind(null,r),p_:nv.bind(null,r),y_:rv.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await $r(r)):(await r.G_.stop(),r.L_.length>0&&(C("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
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
 */class Ta{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,c=new Ta(e,t,a,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ws(r,e){if(ke("AsyncQueue",`${e}: ${r}`),Dt(r))return new N(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class An{static emptySet(e){return new An(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||O.comparator(t.key,n.key):(t,n)=>O.comparator(t.key,n.key),this.keyedMap=hr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof An)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new An;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class dl{constructor(){this.z_=new se(O.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?e.type!==0&&n.type===3?this.z_=this.z_.insert(t,e):e.type===3&&n.type!==1?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.z_=this.z_.remove(t):e.type===1&&n.type===2?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):M():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class On{constructor(e,t,n,i,s,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new On(e,t,An.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ps(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class ov{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class av{constructor(){this.queries=fl(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,n){const i=B(t),s=i.queries;i.queries=fl(),s.forEach((a,c)=>{for(const u of c.J_)u.onError(n)})})(this,new N(S.ABORTED,"Firestore shutting down"))}}function fl(){return new ct(r=>Kh(r),ps)}async function wa(r,e){const t=B(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(n=2):(s=new ov,n=e.Z_()?0:1);try{switch(n){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=ws(a,`Initialization of query '${_n(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&Ra(t)}async function Aa(r,e){const t=B(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function cv(r,e){const t=B(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.J_)c.ta(i)&&(n=!0);a.H_=i}}n&&Ra(t)}function uv(r,e,t){const n=B(r),i=n.queries.get(e);if(i)for(const s of i.J_)s.onError(t);n.queries.delete(e)}function Ra(r){r.X_.forEach(e=>{e.next()})}var Lo,ml;(ml=Lo||(Lo={})).na="default",ml.Cache="cache";class ba{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new On(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const n=t!=="Offline";return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=On.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Lo.Cache}}/**
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
 */class Kd{constructor(e){this.key=e}}class Hd{constructor(e){this.key=e}}class lv{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=$(),this.mutatedKeys=$(),this.Va=Hh(e),this.ma=new An(this.Va)}get fa(){return this.da}ga(e,t){const n=t?t.pa:new dl,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const I=i.get(f),b=Br(this.query,p)?p:null,V=!!I&&this.mutatedKeys.has(I.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;I&&b?I.data.isEqual(b.data)?V!==x&&(n.track({type:3,doc:b}),D=!0):this.ya(I,b)||(n.track({type:2,doc:b}),D=!0,(u&&this.Va(b,u)>0||d&&this.Va(b,d)<0)&&(c=!0)):!I&&b?(n.track({type:0,doc:b}),D=!0):I&&!b&&(n.track({type:1,doc:I}),D=!0,(u||d)&&(c=!0)),D&&(b?(a=a.add(b),s=x?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{ma:a,pa:n,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((f,p)=>function(b,V){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(b)-x(V)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(n),i=i!=null&&i;const c=t&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,d=u!==this.Aa;return this.Aa=u,a.length!==0||d?{snapshot:new On(this.query,e.ma,s,a,e.mutatedKeys,u===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new dl,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=$(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const t=[];return e.forEach(n=>{this.Ra.has(n)||t.push(new Hd(n))}),this.Ra.forEach(n=>{e.has(n)||t.push(new Kd(n))}),t}va(e){this.da=e.ds,this.Ra=$();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return On.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class hv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class dv{constructor(e){this.key=e,this.Fa=!1}}class fv{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new ct(c=>Kh(c),ps),this.Oa=new Map,this.Na=new Set,this.La=new se(O.comparator),this.Ba=new Map,this.ka=new ma,this.qa={},this.Qa=new Map,this.Ka=sn.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function mv(r,e,t=!0){const n=Zd(r);let i;const s=n.xa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await Wd(n,e,t,!0),i}async function pv(r,e){const t=Zd(r);await Wd(t,e,!0,!1)}async function Wd(r,e,t,n){const i=await LI(r.localStore,Be(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await gv(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&Bd(r.remoteStore,i),c}async function gv(r,e,t,n,i){r.Ua=(p,I,b)=>async function(x,D,G,q){let F=D.view.ga(G);F.ss&&(F=await cl(x.localStore,D.query,!1).then(({documents:v})=>D.view.ga(v,F)));const Q=q&&q.targetChanges.get(D.targetId),Z=q&&q.targetMismatches.get(D.targetId)!=null,K=D.view.applyChanges(F,x.isPrimaryClient,Q,Z);return gl(x,D.targetId,K.ba),K.snapshot}(r,p,I,b);const s=await cl(r.localStore,e,!0),a=new lv(e,s.ds),c=a.ga(s.documents),u=jr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),d=a.applyChanges(c,r.isPrimaryClient,u);gl(r,t,d.ba);const f=new hv(e,t,a);return r.xa.set(e,f),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),d.snapshot}async function _v(r,e,t){const n=B(r),i=n.xa.get(e),s=n.Oa.get(i.targetId);if(s.length>1)return n.Oa.set(i.targetId,s.filter(a=>!ps(a,e))),void n.xa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Mo(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&ya(n.remoteStore,i.targetId),Fo(n,i.targetId)}).catch(on)):(Fo(n,i.targetId),await Mo(n.localStore,i.targetId,!0))}async function yv(r,e){const t=B(r),n=t.xa.get(e),i=t.Oa.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ya(t.remoteStore,n.targetId))}async function Iv(r,e,t){const n=ef(r);try{const i=await function(a,c){const u=B(a),d=ae.now(),f=c.reduce((b,V)=>b.add(V.key),$());let p,I;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Me(),x=$();return u.hs.getEntries(b,f).next(D=>{V=D,V.forEach((G,q)=>{q.isValidDocument()||(x=x.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,V)).next(D=>{p=D;const G=[];for(const q of c){const F=Uy(q,p.get(q.key).overlayedDocument);F!=null&&G.push(new ut(q.key,F,Lh(F.value.mapValue),fe.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,G,c)}).next(D=>{I=D;const G=D.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(b,D.batchId,G)})}).then(()=>({batchId:I.batchId,changes:Qh(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.qa[a.currentUser.toKey()];d||(d=new se(z)),d=d.insert(c,u),a.qa[a.currentUser.toKey()]=d}(n,i.batchId,t),await Kr(n,i.changes),await $r(n.remoteStore)}catch(i){const s=ws(i,"Failed to persist write");t.reject(s)}}async function Qd(r,e){const t=B(r);try{const n=await NI(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ba.get(s);a&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?L(a.Fa):i.removedDocuments.size>0&&(L(a.Fa),a.Fa=!1))}),await Kr(t,n,e)}catch(n){await on(n)}}function pl(r,e,t){const n=B(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.xa.forEach((s,a)=>{const c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=B(a);u.onlineState=c;let d=!1;u.queries.forEach((f,p)=>{for(const I of p.J_)I.ea(c)&&(d=!0)}),d&&Ra(u)}(n.eventManager,e),i.length&&n.Ma.R_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function vv(r,e,t){const n=B(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Ba.get(e),s=i&&i.key;if(s){let a=new se(O.comparator);a=a.insert(s,ue.newNoDocument(s,U.min()));const c=$().add(s),u=new ys(U.min(),new Map,new se(z),a,c);await Qd(n,u),n.La=n.La.remove(s),n.Ba.delete(e),Pa(n)}else await Mo(n.localStore,e,!1).then(()=>Fo(n,e,t)).catch(on)}async function Ev(r,e){const t=B(r),n=e.batch.batchId;try{const i=await xI(t.localStore,e);Xd(t,n,null),Jd(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Kr(t,i)}catch(i){await on(i)}}async function Tv(r,e,t){const n=B(r);try{const i=await function(a,c){const u=B(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(p=>(L(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(n.localStore,e);Xd(n,e,t),Jd(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Kr(n,i)}catch(i){await on(i)}}async function wv(r,e){const t=B(r);xt(t.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const c=B(a);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>c.mutationQueue.getHighestUnacknowledgedBatchId(u))}(t.localStore);if(n===-1)return void e.resolve();const i=t.Qa.get(n)||[];i.push(e),t.Qa.set(n,i)}catch(n){const i=ws(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Jd(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Xd(r,e,t){const n=B(r);let i=n.qa[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.qa[n.currentUser.toKey()]=i}}function Fo(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Oa.get(e))r.xa.delete(n),t&&r.Ma.Wa(n,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(n=>{r.ka.containsKey(n)||Yd(r,n)})}function Yd(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(ya(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),Pa(r))}function gl(r,e,t){for(const n of t)n instanceof Kd?(r.ka.addReference(n.key,e),Av(r,n)):n instanceof Hd?(C("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,e),r.ka.containsKey(n.key)||Yd(r,n.key)):M()}function Av(r,e){const t=e.key,n=t.path.canonicalString();r.La.get(t)||r.Na.has(n)||(C("SyncEngine","New document in limbo: "+t),r.Na.add(n),Pa(r))}function Pa(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new O(Y.fromString(e)),n=r.Ka.next();r.Ba.set(n,new dv(t)),r.La=r.La.insert(t,n),Bd(r.remoteStore,new nt(Be(Ur(t.path)),n,"TargetPurposeLimboResolution",Ue.oe))}}async function Kr(r,e,t){const n=B(r),i=[],s=[],a=[];n.xa.isEmpty()||(n.xa.forEach((c,u)=>{a.push(n.Ua(u,e,t).then(d=>{var f;if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){i.push(d);const p=_a.zi(u.targetId,d);s.push(p)}}))}),await Promise.all(a),n.Ma.R_(i),await async function(u,d){const f=B(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>w.forEach(d,I=>w.forEach(I.Wi,b=>f.persistence.referenceDelegate.addReference(p,I.targetId,b)).next(()=>w.forEach(I.Gi,b=>f.persistence.referenceDelegate.removeReference(p,I.targetId,b)))))}catch(p){if(!Dt(p))throw p;C("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const I=p.targetId;if(!p.fromCache){const b=f.us.get(I),V=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(V);f.us=f.us.insert(I,x)}}}(n.localStore,s))}async function Rv(r,e){const t=B(r);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const n=await Od(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(u=>{u.reject(new N(S.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Kr(t,n.Ts)}}function bv(r,e){const t=B(r),n=t.Ba.get(e);if(n&&n.Fa)return $().add(n.key);{let i=$();const s=t.Oa.get(e);if(!s)return i;for(const a of s){const c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function Zd(r){const e=B(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vv.bind(null,e),e.Ma.R_=cv.bind(null,e.eventManager),e.Ma.Wa=uv.bind(null,e.eventManager),e}function ef(r){const e=B(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ev.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tv.bind(null,e),e}class Dr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ts(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Nd(this.persistence,new xd,e.initialUser,this.serializer)}ja(e){return new pa(Es.ei,this.serializer)}za(e){return new Ld}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Dr.provider={build:()=>new Dr};class Pv extends Dr{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){L(this.persistence.referenceDelegate instanceof ns);const n=this.persistence.referenceDelegate.garbageCollector;return new Sd(n,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new pa(n=>ns.ei(n,t),this.serializer)}}class Sv extends Dr{constructor(e,t,n){super(),this.Za=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Za.initialize(this,e),await ef(this.Za.syncEngine),await $r(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(e){return Nd(this.persistence,new xd,e.initialUser,this.serializer)}Ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Sd(n,e.asyncQueue,t)}Ya(e,t){const n=new $_(t,this.persistence);return new G_(e.asyncQueue,n)}ja(e){const t=VI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new ga(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,zI(),Mi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(e){return new Ld}}class is{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>pl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rv.bind(null,this.syncEngine),await sv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new av}()}createDatastore(e){const t=Ts(e.databaseInfo.databaseId),n=function(s){return new jI(s)}(e.databaseInfo);return function(s,a,c,u){return new KI(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,c){return new WI(n,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>pl(this.syncEngine,t,0),function(){return ll.p()?new ll:new UI}())}createSyncEngine(e,t){return function(i,s,a,c,u,d,f){const p=new fv(i,s,a,c,u,d);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=B(i);C("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Gr(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}is.provider={build:()=>new is};/**
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
 */class Sa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ke("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Cv{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=wh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{C("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(C("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ws(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function uo(r,e){r.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Od(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function _l(r,e){r.asyncQueue.verifyOperationInProgress();const t=await tf(r);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>hl(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>hl(e.remoteStore,i)),r._onlineComponents=e}async function tf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await uo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Zt("Error using user provided cache. Falling back to memory cache: "+t),await uo(r,new Dr)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await uo(r,new Pv(void 0));return r._offlineComponents}async function Ca(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await _l(r,r._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await _l(r,new is))),r._onlineComponents}function Vv(r){return tf(r).then(e=>e.persistence)}function Dv(r){return Ca(r).then(e=>e.remoteStore)}function nf(r){return Ca(r).then(e=>e.syncEngine)}async function ss(r){const e=await Ca(r),t=e.eventManager;return t.onListen=mv.bind(null,e.syncEngine),t.onUnlisten=_v.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yv.bind(null,e.syncEngine),t}function kv(r){return r.asyncQueue.enqueue(async()=>{const e=await Vv(r),t=await Dv(r);return e.setNetworkEnabled(!0),function(i){const s=B(i);return s.k_.delete(0),zr(s)}(t)})}function xv(r,e,t={}){const n=new ze;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,d){const f=new Sa({next:I=>{f.eu(),a.enqueueAndForget(()=>Aa(s,p));const b=I.docs.has(c);!b&&I.fromCache?d.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&u&&u.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new ba(Ur(c.path),f,{includeMetadataChanges:!0,ua:!0});return wa(s,p)}(await ss(r),r.asyncQueue,e,t,n)),n.promise}function Nv(r,e,t={}){const n=new ze;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,d){const f=new Sa({next:I=>{f.eu(),a.enqueueAndForget(()=>Aa(s,p)),I.fromCache&&u.source==="server"?d.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new ba(c,f,{includeMetadataChanges:!0,ua:!0});return wa(s,p)}(await ss(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function rf(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const yl=new Map;/**
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
 */function sf(r,e,t){if(!t)throw new N(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Ov(r,e,t,n){if(e===!0&&n===!0)throw new N(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Il(r){if(!O.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function vl(r){if(O.isDocumentKey(r))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function As(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M()}function _e(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=As(r);throw new N(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class El{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ov("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rf((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rs{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new k_;switch(n.type){case"firstParty":return new M_(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yl.get(t);n&&(C("ComponentProvider","Removing Datastore"),yl.delete(t),n.terminate())}(this),Promise.resolve()}}function Mv(r,e,t,n={}){var i;const s=(r=_e(r,Rs))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let c,u;if(typeof n.mockUserToken=="string")c=n.mockUserToken,u=Ie.MOCK_USER;else{c=hm(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ie(d)}r._authCredentials=new x_(new Th(c,u))}}/**
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
 */class Nt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Nt(this.firestore,e,this._query)}}class Ce{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}}class Pt extends Nt{constructor(e,t,n){super(e,t,Ur(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new O(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function nE(r,e,...t){if(r=he(r),sf("collection","path",e),r instanceof Rs){const n=Y.fromString(e,...t);return vl(n),new Pt(r,null,n)}{if(!(r instanceof Ce||r instanceof Pt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(e,...t));return vl(n),new Pt(r.firestore,null,n)}}function Lv(r,e,...t){if(r=he(r),arguments.length===1&&(e=wh.newId()),sf("doc","path",e),r instanceof Rs){const n=Y.fromString(e,...t);return Il(n),new Ce(r,null,new O(n))}{if(!(r instanceof Ce||r instanceof Pt))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(e,...t));return Il(n),new Ce(r.firestore,r instanceof Pt?r.converter:null,new O(n))}}/**
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
 */class Tl{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Fd(this,"async_queue_retry"),this.fu=()=>{const n=Mi();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=e;const t=Mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new ze;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Dt(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(n=>{this.Au=n,this.Ru=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw ke("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Ru=!1,n))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=Ta.createAndSchedule(this,e,t,n,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&M()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function wl(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class Fe extends Rs{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Tl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tl(e),this._firestoreClient=void 0,await e}}}function rE(r,e){const t=typeof r=="object"?r:Ml(),n=typeof r=="string"?r:"(default)",i=jo(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=um("firestore");s&&Mv(i,...s)}return i}function an(r){if(r._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||of(r),r._firestoreClient}function of(r){var e,t,n;const i=r._freezeSettings(),s=function(c,u,d,f){return new fy(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,rf(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Cv(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(r._componentsProvider))}function iE(r,e){Zt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Fv(r,is.provider,{build:n=>new Sv(n,t.cacheSizeBytes,void 0)}),Promise.resolve()}function Fv(r,e,t){if((r=_e(r,Fe))._firestoreClient||r._terminated)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new N(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},of(r)}function sE(r){return function(t){const n=new ze;return t.asyncQueue.enqueueAndForget(async()=>wv(await nf(t),n)),n.promise}(an(r=_e(r,Fe)))}function oE(r){return kv(an(r=_e(r,Fe)))}/**
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
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(de.fromBase64String(e))}catch(t){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mn(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Hr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class bs{constructor(e){this._methodName=e}}/**
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
 */class Va{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
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
 */class Da{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const Uv=/^__.*__$/;class Bv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bn(e,this.data,t,this.fieldTransforms)}}class af{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class ka{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ka(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:n,Nu:!1});return i.Lu(e),i}Bu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:n,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return os(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(cf(this.Mu)&&Uv.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class qv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ts(e)}$u(e,t,n,i=!1){return new ka({Mu:e,methodName:t,Ku:n,path:oe.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wr(r){const e=r._freezeSettings(),t=Ts(r._databaseId);return new qv(r._databaseId,!!e.ignoreUndefinedProperties,t)}function xa(r,e,t,n,i,s={}){const a=r.$u(s.merge||s.mergeFields?2:0,e,t,i);Oa("Data must be an object, but it was:",a,n);const c=hf(n,a);let u,d;if(s.merge)u=new Ne(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const I=Uo(e,p,t);if(!a.contains(I))throw new N(S.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);ff(f,I)||f.push(I)}u=new Ne(f),d=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=a.fieldTransforms;return new Bv(new Pe(c),u,d)}class Ps extends bs{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ps}}class Na extends bs{_toFieldTransform(e){return new nd(e.path,new Dn)}isEqual(e){return e instanceof Na}}function uf(r,e,t,n){const i=r.$u(1,e,t);Oa("Data must be an object, but it was:",i,n);const s=[],a=Pe.empty();kt(n,(u,d)=>{const f=Ma(e,u,t);d=he(d);const p=i.Bu(f);if(d instanceof Ps)s.push(f);else{const I=Qr(d,p);I!=null&&(s.push(f),a.set(f,I))}});const c=new Ne(s);return new af(a,c,i.fieldTransforms)}function lf(r,e,t,n,i,s){const a=r.$u(1,e,t),c=[Uo(e,n,t)],u=[i];if(s.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<s.length;I+=2)c.push(Uo(e,s[I])),u.push(s[I+1]);const d=[],f=Pe.empty();for(let I=c.length-1;I>=0;--I)if(!ff(d,c[I])){const b=c[I];let V=u[I];V=he(V);const x=a.Bu(b);if(V instanceof Ps)d.push(b);else{const D=Qr(V,x);D!=null&&(d.push(b),f.set(b,D))}}const p=new Ne(d);return new af(f,p,a.fieldTransforms)}function jv(r,e,t,n=!1){return Qr(t,r.$u(n?4:3,e))}function Qr(r,e){if(df(r=he(r)))return Oa("Unsupported field value:",e,r),hf(r,e);if(r instanceof bs)return function(n,i){if(!cf(i.Mu))throw i.qu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const c of n){let u=Qr(c,i.ku(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=he(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xy(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ae.fromDate(n);return{timestampValue:Nn(i.serializer,s)}}if(n instanceof ae){const s=new ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nn(i.serializer,s)}}if(n instanceof Va)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mn)return{bytesValue:ud(i.serializer,n._byteString)};if(n instanceof Ce){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ha(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Da)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.qu("VectorValues must only contain numeric values.");return oa(c.serializer,u)})}}}}}}(n,i);throw i.qu(`Unsupported field value: ${As(n)}`)}(r,e)}function hf(r,e){const t={};return xh(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kt(r,(n,i)=>{const s=Qr(i,e.Ou(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function df(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ae||r instanceof Va||r instanceof Mn||r instanceof Ce||r instanceof bs||r instanceof Da)}function Oa(r,e,t){if(!df(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=As(t);throw n==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+n)}}function Uo(r,e,t){if((e=he(e))instanceof Hr)return e._internalPath;if(typeof e=="string")return Ma(r,e);throw os("Field path arguments must be of type string or ",r,!1,void 0,t)}const zv=new RegExp("[~\\*/\\[\\]]");function Ma(r,e,t){if(e.search(zv)>=0)throw os(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hr(...e.split("."))._internalPath}catch{throw os(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function os(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${n}`),a&&(u+=` in document ${i}`),u+=")"),new N(S.INVALID_ARGUMENT,c+r+u)}function ff(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class mf{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(La("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gv extends mf{data(){return super.data()}}function La(r,e){return typeof e=="string"?Ma(r,e):e instanceof Hr?e._internalPath:e._delegate._internalPath}/**
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
 */function pf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fa{}class gf extends Fa{}function aE(r,e,...t){let n=[];e instanceof Fa&&n.push(e),n=n.concat(t),function(s){const a=s.filter(u=>u instanceof Ua).length,c=s.filter(u=>u instanceof Ss).length;if(a>1||a>0&&c>0)throw new N(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Ss extends gf{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ss(e,t,n)}_apply(e){const t=this._parse(e);return _f(e._query,t),new Nt(e.firestore,e.converter,So(e._query,t))}_parse(e){const t=Wr(e.firestore);return function(s,a,c,u,d,f,p){let I;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new N(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Rl(p,f);const b=[];for(const V of p)b.push(Al(u,s,V));I={arrayValue:{values:b}}}else I=Al(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Rl(p,f),I=jv(c,a,p,f==="in"||f==="not-in");return W.create(d,f,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cE(r,e,t){const n=e,i=La("where",r);return Ss._create(i,n,t)}class Ua extends Fa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ua(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:ee.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const u of c)_f(a,u),a=So(a,u)}(e._query,t),new Nt(e.firestore,e.converter,So(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ba extends gf{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ba(e,t,n)}_apply(e){return new Nt(e.firestore,e.converter,Ji(e._query,this._limit,this._limitType))}}function uE(r){return Ba._create("limit",r,"F")}function Al(r,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new N(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$h(e)&&t.indexOf("/")!==-1)throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Y.fromString(t));if(!O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Sr(r,new O(n))}if(t instanceof Ce)return Sr(r,t._key);throw new N(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${As(t)}.`)}function Rl(r,e){if(!Array.isArray(r)||r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _f(r,e){const t=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $v{convertValue(e,t="none"){switch(St(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return kt(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>ie(a.doubleValue));return new Da(s)}convertGeoPoint(e){return new Va(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=fs(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(br(e));default:return null}}convertTimestamp(e){const t=st(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Y.fromString(e);L(Id(n));const i=new en(n.get(1),n.get(3)),s=new O(n.popFirst(5));return i.isEqual(t)||ke(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function qa(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
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
 */class mr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yf extends mf{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(La("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Li extends yf{data(e={}){return super.data(e)}}class If{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new mr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Li(this._firestore,this._userDataWriter,n.key,n,new mr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new Li(i._firestore,i._userDataWriter,c.doc.key,c.doc,new mr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Li(i._firestore,i._userDataWriter,c.doc.key,c.doc,new mr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Kv(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Kv(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
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
 */function lE(r){r=_e(r,Ce);const e=_e(r.firestore,Fe);return xv(an(e),r._key).then(t=>vf(e,r,t))}class ja extends $v{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}}function hE(r){r=_e(r,Nt);const e=_e(r.firestore,Fe),t=an(e),n=new ja(e);return pf(r._query),Nv(t,r._query).then(i=>new If(e,n,r,i))}function dE(r,e,t){r=_e(r,Ce);const n=_e(r.firestore,Fe),i=qa(r.converter,e,t);return Jr(n,[xa(Wr(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,fe.none())])}function fE(r,e,t,...n){r=_e(r,Ce);const i=_e(r.firestore,Fe),s=Wr(i);let a;return a=typeof(e=he(e))=="string"||e instanceof Hr?lf(s,"updateDoc",r._key,e,t,n):uf(s,"updateDoc",r._key,e),Jr(i,[a.toMutation(r._key,fe.exists(!0))])}function mE(r){return Jr(_e(r.firestore,Fe),[new qr(r._key,fe.none())])}function pE(r,e){const t=_e(r.firestore,Fe),n=Lv(r),i=qa(r.converter,e);return Jr(t,[xa(Wr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,fe.exists(!1))]).then(()=>n)}function gE(r,...e){var t,n,i;r=he(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||wl(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(wl(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[a+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,d,f;if(r instanceof Ce)d=_e(r.firestore,Fe),f=Ur(r._key.path),u={next:p=>{e[a]&&e[a](vf(d,r,p))},error:e[a+1],complete:e[a+2]};else{const p=_e(r,Nt);d=_e(p.firestore,Fe),f=p._query;const I=new ja(d);u={next:b=>{e[a]&&e[a](new If(d,I,p,b))},error:e[a+1],complete:e[a+2]},pf(r._query)}return function(I,b,V,x){const D=new Sa(x),G=new ba(b,D,V);return I.asyncQueue.enqueueAndForget(async()=>wa(await ss(I),G)),()=>{D.eu(),I.asyncQueue.enqueueAndForget(async()=>Aa(await ss(I),G))}}(an(d),f,c,u)}function Jr(r,e){return function(n,i){const s=new ze;return n.asyncQueue.enqueueAndForget(async()=>Iv(await nf(n),i,s)),s.promise}(an(r),e)}function vf(r,e,t){const n=t.docs.get(e._key),i=new ja(r);return new yf(r,i,e._key,n,new mr(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class Hv{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Wr(e)}set(e,t,n){this._verifyNotCommitted();const i=lo(e,this._firestore),s=qa(i.converter,t,n),a=xa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,fe.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=lo(e,this._firestore);let a;return a=typeof(t=he(t))=="string"||t instanceof Hr?lf(this._dataReader,"WriteBatch.update",s._key,t,n,i):uf(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=lo(e,this._firestore);return this._mutations=this._mutations.concat(new qr(t._key,fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lo(r,e){if((r=he(r)).firestore!==e)throw new N(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function _E(){return new Na("serverTimestamp")}/**
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
 */function yE(r){return an(r=_e(r,Fe)),new Hv(r,e=>Jr(r,e))}(function(e,t=!0){(function(i){Un=i})(Ln),Rn(new Jt("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),c=new Fe(new N_(n.getProvider("auth-internal")),new F_(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new en(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Rt(yu,"4.7.5",e),Rt(yu,"4.7.5","esm2017")})();export{yt as G,ae as T,Zc as _,zo as a,Wv as b,rE as c,Jv as d,iE as e,Lv as f,Yv as g,gE as h,Ap as i,dE as j,_E as k,oE as l,lE as m,nE as n,Qv as o,hE as p,aE as q,cE as r,Xv as s,mE as t,pE as u,fE as v,sE as w,uE as x,yE as y};
