(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{2504:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Terrain2D/standard",function(){return l(9584)}])},4564:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{children:t}=e;return t},t.suspense=function(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,l(2648).Z)(l(7294));var r=l(2983)},7645:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=a.default,n={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=r({},n,e)),n=r({},n,t);let o=n.loader,u=()=>o().then(i);if(n.loadableGenerated&&delete(n=r({},n,n.loadableGenerated,{loader:u})).loadableGenerated,"boolean"==typeof n.ssr){if(!n.ssr)return delete n.ssr,s(u,n);delete n.ssr}return l(n)},t.noSSR=s;var r=l(6495).Z,n=l(2648).Z,o=(0,l(1598).Z)(l(7294)),a=n(l(4588)),u=n(l(4564));function i(e){return{default:e.default||e}}function s(e,t){delete t.webpack,delete t.modules;let l=o.lazy(e),r=t.loading,n=o.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>o.default.createElement(o.Suspense,{fallback:n},o.default.createElement(u.default,null,o.default.createElement(l,Object.assign({},e))))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,l(2648).Z)(l(7294));let n=r.default.createContext(null);t.LoadableContext=n},4588:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(6495).Z,n=(0,l(2648).Z)(l(7294)),o=l(3644);let a=[],u=[],i=!1;function s(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t);l.lazy=n.default.lazy(l.loader);let r=null;function a(){if(!r){let t=new d(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!i){let s=l.webpack?l.webpack():l.modules;s&&u.push(e=>{for(let t of s)if(-1!==e.indexOf(t))return a()})}function c(e){!function(){a();let e=n.default.useContext(o.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let t=n.default.createElement(l.loading,{isLoading:!0,pastDelay:!0,error:null});return n.default.createElement(n.default.Suspense,{fallback:t},n.default.createElement(l.lazy,e))}return c.preload=()=>a(),c.displayName="LoadableComponent",c}(s,e)}function f(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(a).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(i=!0,t());f(u,e).then(l,l)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},9584:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return O}});var r=l(5893),n=l(5152),o=l.n(n);let a=(e,t)=>{e.createCanvas(1e3,1e3).parent(t)},u=function(e,t,l){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=[];for(let o=0;o<r;o++)n.push([1e5*Math.random(),1e5*Math.random()]);return i((o,a)=>{let u=0;for(let i=1;i<=r;i++)u+=e.noise(n[i-1][0]+o/(t*(1/i)),n[i-1][1]+a/(l*(1/i)))/i;return u})},i=e=>(t,l)=>{let r=[];for(let n=0;n<l;n++){r.push([]);for(let o=0;o<t;o++)r[n].push(e(o,n))}return r},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c((l,r,n)=>l[n][r]*e[n][r]*t)},d=(e,t)=>l=>{let r=-1/0,n=1/0;l.forEach(e=>e.forEach(e=>{r<e&&(r=e),n>e&&(n=e)}));for(let o=0;o<l.length;o++)for(let a=0;a<l[0].length;a++)l[o][a]=(l[o][a]-n)/(r-n)*(t-e)+e;return l},c=e=>t=>{let l=[];for(let r=0;r<t.length;r++){l.push([]);for(let n=0;n<t[0].length;n++)l[r].push(e(t,n,r))}return l},f=e=>t=>{let l=[];for(let r=0;r<t.length;r++){l.push([]);for(let n=0;n<t[0].length;n++)l[r].push(e(t[r][n]))}return l},h=e=>f(t=>{for(let l=0;l<e.length;l++)if(e[l][0]>=t)return e[l][1](t);return color(0)}),p=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return r=>e((r-t)/(l-t))},_=e=>p(t=>e),b=(e,t,l,r,n)=>p(t=>{let l=e.red(r)+t*(e.red(n)-e.red(r)),o=e.green(r)+t*(e.green(n)-e.green(r)),a=e.blue(r)+t*(e.blue(n)-e.blue(r));return e.color(l,o,a)},t,l),m=e=>h([[.21,b(e,0,.1,e.color(0,50,90),e.color(0,104,196))],[.22,_(e.color(248,208,146))],[.55,b(e,.23,.55,e.color(104,159,56),e.color(34,98,37))],[.7,_(e.color(74,48,46))],[.8,_(e.color(108,103,96))],[1,_(e.color(225,230,250))]]),g=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return e=>(l,r)=>t.reduce((e,t)=>t(e),e(l,r))},y=e=>{let t=g(s(u(e,160,160)(e.width,e.height)),d(0,1))(u(e,40,40,5))(e.width,e.height);return m(e)(t)},w=e=>{let t=y(e);e.loadPixels();for(let l=0;l<e.height;l++)for(let r=0;r<e.width;r++)e.pixels[(l*e.width+r)*4]=e.red(t[l][r]),e.pixels[(l*e.width+r)*4+1]=e.green(t[l][r]),e.pixels[(l*e.width+r)*4+2]=e.blue(t[l][r]),e.pixels[(l*e.width+r)*4+3]=255;e.updatePixels(),e.noLoop()},E=o()(l.e(257).then(l.t.bind(l,4210,23)),{loadableGenerated:{webpack:()=>[4210]},ssr:!1}),v=()=>(0,r.jsx)(E,{setup:a,draw:w});var O=v},5152:function(e,t,l){e.exports=l(7645)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2504)}),_N_E=e.O()}]);