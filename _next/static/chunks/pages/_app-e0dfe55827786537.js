(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8696)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,l=e.priority,s=void 0!==l&&l,h=e.loading,g=e.lazyRoot,x=void 0===g?null:g,O=e.lazyBoundary,L=void 0===O?"200px":O,E=e.className,I=e.quality,M=e.width,N=e.height,P=e.style,R=e.objectFit,T=e.objectPosition,B=e.onLoadingComplete,z=e.placeholder,H=void 0===z?"empty":z,D=e.blurDataURL,W=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(m.ImageConfigContext),q=u.useMemo((function(){var e=b||U||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[U]),F=W,K=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(K=F.layout),delete F.layout);var J=A;if("loader"in F){if(F.loader){var V=F.loader;J=function(e){e.config;var t=v(e,["config"]);return V(t)}}delete F.loader}var G="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var Y=j(t)?t.default:t;if(!Y.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Y)));if(D=D||Y.blurDataURL,G=Y.src,(!K||"fill"!==K)&&(N=N||Y.height,M=M||Y.width,!Y.height||!Y.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Y)))}t="string"===typeof t?t:G;var X=_(M),Z=_(N),$=_(I),Q=!s&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Q=!1);w.has(t)&&(Q=!1);var ee,te=i(u.useState(!1),2),ne=te[0],re=te[1],oe=i(p.useIntersection({rootRef:x,rootMargin:L,disabled:!Q}),3),ie=oe[0],ae=oe[1],ce=oe[2],le=!Q||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:T};0;0;var pe=Object.assign({},P,"raw"===K?{}:fe),me="blur"!==H||ne?{}:{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:T||"0% 0%"};if("fill"===K)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Z){var he=Z/X,ge=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===K?(se.display="block",se.position="relative",de=!0,ue.paddingTop=ge):"intrinsic"===K?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===K&&(se.display="inline-block",se.position="relative",se.width=X,se.height=Z)}else 0;var ye={src:k,srcSet:void 0,sizes:void 0};le&&(ye=S({config:q,src:t,unoptimized:c,layout:K,width:X,quality:$,sizes:n,loader:J}));var ve=t;0;var be;0;var we=(o(be={},"imagesrcset",ye.srcSet),o(be,"imagesizes",ye.sizes),be),ke=u.default.useLayoutEffect,xe=u.useRef(B),je=u.useRef(t);u.useEffect((function(){xe.current=B}),[B]),ke((function(){je.current!==t&&(ce(),je.current=t)}),[ce,t]);var Se=y({isLazy:Q,imgAttributes:ye,heightInt:Z,widthInt:X,qualityInt:$,layout:K,className:E,imgStyle:pe,blurStyle:me,loading:h,config:q,unoptimized:c,placeholder:H,loader:J,srcString:ve,onLoadingCompleteRef:xe,setBlurComplete:re,setIntersection:ie,isVisible:le},F);return u.default.createElement(u.default.Fragment,null,"raw"===K?u.default.createElement(C,Object.assign({},Se)):u.default.createElement("span",{style:se},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(C,Object.assign({},Se))),s?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},we))):null)};var l,s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(l=n(3121))&&l.__esModule?l:{default:l},f=n(139),p=n(9246),m=n(8730),h=(n(670),n(2700));function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){g(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}s={deviceSizes:[280,600,640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var b={deviceSizes:[280,600,640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},w=new Set,k=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(L(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(L(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(L(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function S(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,i=e.width,c=e.quality,l=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var o=e.deviceSizes,i=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(r);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:i.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,l),d=u.widths,f=u.kind,p=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:c,width:d[p]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(e,t,n,r,o,i){e&&e.src!==k&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&i(!0),null===o||void 0===o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var C=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,o=e.qualityInt,i=e.layout,a=e.className,c=e.imgStyle,l=e.blurStyle,s=e.isLazy,d=e.placeholder,f=e.loading,p=e.srcString,m=e.config,h=e.unoptimized,g=e.loader,b=e.onLoadingCompleteRef,w=e.setBlurComplete,k=e.setIntersection,x=e.onLoad,j=e.onError,_=(e.isVisible,v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},_,t,"raw"===i?{height:n,width:r}:{},{decoding:"async","data-nimg":i,className:a,style:y({},c,l),ref:u.useCallback((function(e){k(e),(null===e||void 0===e?void 0:e.complete)&&O(e,p,0,d,b,w)}),[k,p,i,d,b,w]),onLoad:function(e){O(e.currentTarget,p,0,d,b,w),x&&x(e)},onError:function(e){"blur"===d&&w(!0),j&&j(e)}})),(s||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},_,S({config:m,src:p,unoptimized:h,layout:i,width:r,quality:o,sizes:t.sizes,loader:g}),"raw"===i?{height:n,width:r}:{},{decoding:"async","data-nimg":i,style:c,className:a,loading:f||"lazy"}))))};function L(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},c=n(1003),l=n(880),s=n(9246);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;d[t+"%"+n+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,i=void 0===r?!0!==Boolean(!1):r,p=e.href,m=e.as,h=e.children,g=e.prefetch,y=e.passHref,v=e.replace,b=e.shallow,w=e.scroll,k=e.locale,x=e.onClick,j=e.onMouseEnter,S=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,i&&"string"===typeof n&&(n=a.default.createElement("a",null,n));var _,A=!1!==g,O=l.useRouter(),C=a.default.useMemo((function(){var e=o(c.resolveHref(O,p,!0),2),t=e[0],n=e[1];return{href:t,as:m?c.resolveHref(O,m):n||t}}),[O,p,m]),L=C.href,E=C.as,I=a.default.useRef(L),M=a.default.useRef(E);i&&(_=a.default.Children.only(n));var N=i?_&&"object"===typeof _&&_.ref:t,P=o(s.useIntersection({rootMargin:"200px"}),3),R=P[0],T=P[1],B=P[2],z=a.default.useCallback((function(e){M.current===E&&I.current===L||(B(),M.current=E,I.current=L),R(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[E,N,L,B,R]);a.default.useEffect((function(){var e=T&&A&&c.isLocalURL(L),t="undefined"!==typeof k?k:O&&O.locale,n=d[L+"%"+E+(t?"%"+t:"")];e&&!n&&f(O,L,E,{locale:t})}),[E,L,T,k,A,O]);var H={ref:z,onClick:function(e){i||"function"!==typeof x||x(e),i&&_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:a}))}(e,O,L,E,v,b,w,k)},onMouseEnter:function(e){i||"function"!==typeof j||j(e),i&&_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),c.isLocalURL(L)&&f(O,L,E,{priority:!0})}};if(!i||y||"a"===_.type&&!("href"in _.props)){var D="undefined"!==typeof k?k:O&&O.locale,W=O&&O.isLocaleDomain&&c.getDomainLocale(E,D,O&&O.locales,O&&O.domainLocales);H.href=W||c.addBasePath(c.addLocale(E,D,O&&O.defaultLocale))}return i?a.default.cloneElement(_,H):a.default.createElement("a",Object.assign({},S,H),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=i.useRef(),d=o(i.useState(!1),2),f=d[0],p=d[1],m=o(i.useState(t?t.current:null),2),h=m[0],g=m[1],y=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),s.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,f]),v=i.useCallback((function(){p(!1)}),[]);return i.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){t&&g(t.current)}),[t]),[y,f,v]};var i=n(7294),a=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8696:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r=n(5893),o=n(9008),i=n.n(o),a=n(7294),c=n(933),l=n.n(c),s=n(1664),u=n.n(s),d=n(1163),f=(0,a.memo)((function(e){var t="";return(0,d.useRouter)().pathname==="/".concat(e.linkAddress)&&(t+=" ".concat(l().activeLink)),(0,r.jsx)("div",{className:l().Navlink,children:(0,r.jsx)(u(),{href:"/".concat(e.linkAddress),children:(0,r.jsx)("a",{className:t,children:e.linkText})},e.linkText)})}));f.type.displayName="NAVLINK";var p=f,m=n(7971),h=n.n(m),g=(0,a.memo)((function(e){return(0,r.jsxs)("div",{className:h().Navbar,children:[(0,r.jsx)(p,{linkAddress:"experience",linkText:"Exp",navChangeFunction:e.navChangeFunction,contentType:e.contentType}),(0,r.jsx)(p,{linkAddress:"work",linkText:"Work",navChangeFunction:e.navChangeFunction,contentType:e.contentType}),(0,r.jsx)(p,{linkAddress:"else",linkText:"Else",navChangeFunction:e.navChangeFunction,contentType:e.contentType})]})}));g.type.displayName="NAVBAR";var y=g,v=n(6701),b=n(2443),w=n.n(b),k=(0,a.memo)((function(){var e=(0,a.useContext)(v._),t=e.theme,n=e.toggleTheme,o=(0,a.useRef)(),i="DARK"===(void 0===t?"dark":t).toUpperCase()?(0,r.jsx)("span",{role:"img","aria-hidden":"true",children:"\ud83c\udf1b"}):(0,r.jsx)("span",{role:"img","aria-hidden":"true",children:"\ud83c\udf1e"});return(0,r.jsxs)("div",{className:w().modeChangeButton,ref:o,role:"button",tabIndex:"0",onClick:n,onKeyDown:function(e){"13"!=e.keyCode&&"32"!=e.keyCode||o.current.click()},children:[(void 0===t?"dark":t).toUpperCase()," ",i]})}));k.type.displayName="MODE TOGGLER";var x=k,j=(0,a.memo)((function(){return(0,r.jsxs)("div",{className:w().Header,children:[(0,r.jsx)(x,{}),(0,r.jsx)(y,{})]})}));j.type.displayName="HEADER";var S=j,_=n(5675),A=n.n(_),O=n(1138),C=n(3028),L=n.n(C),E=(0,a.memo)((function(e){var t=(0,a.useContext)(v._).theme,n=O.Ff.split("-");n[1]=e.website+".svg";var o,i=n[0]+"-"+n[1],c=e.website+" link",l=e.link;return o=(0,r.jsx)("a",{href:l,rel:"noopener noreferrer",children:(0,r.jsx)(A(),{loader:function(e){return e.src},src:i,alt:c,width:21,height:21,quality:5,priority:!0})}),(0,r.jsx)("div",{className:"".concat(L().SocialMediaLink," ").concat(L()[t]),children:(0,r.jsx)("div",{className:L().MediaIconBox,children:o})})}));E.type.displayName="SOCIALMEDIALINK";var I=E,M=(0,a.memo)((function(){var e="mailto:"+O.su;return(0,r.jsxs)("div",{className:L().contactArea,children:[(0,r.jsxs)("div",{className:L().socialMediaBox,children:[(0,r.jsx)(I,{website:"linkedin",link:O.v7.linkedin}),(0,r.jsx)(I,{website:"instagram",link:O.v7.instagram}),(0,r.jsx)(I,{website:"github",link:O.v7.github})]}),(0,r.jsx)("div",{className:L().emailAndPhoneBox,children:(0,r.jsx)("p",{children:(0,r.jsx)("a",{href:e,children:O.su})})}),(0,r.jsx)("div",{className:L().copyrightBox,children:(0,r.jsx)("p",{children:" \xa9 Tushar Shahi"})})]})}));M.type.displayName="CONTACTAREA";var N=M,P=n(6912),R=n.n(P);function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=(0,a.memo)((function(e){var t=(0,d.useRouter)(),n=!0;window.innerWidth<768&&(n=!1);var o=null;e.aside&&(o={role:"complementary"});var i="".concat(R().SideBar);return"/"!==t.pathname&&(i+=" ".concat(R().sideBarCompressed)),(0,r.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){T(e,t,n[t])}))}return e}({className:i},o,{children:(0,r.jsxs)("div",{className:R().SideBarBox,children:[(0,r.jsxs)("div",{className:R().welcomeArea,children:[(0,r.jsx)("div",{className:R().displayPhotoArea,children:(0,r.jsx)(A(),{loader:function(e){return e.src},src:O.lE,alt:"Display Picture",width:180,height:175,priority:50})}),(0,r.jsx)("div",{className:R().textArea,children:(0,r.jsx)("h1",{children:"Hey! I am Tushar.\n  I like to code."})})]}),n&&(0,r.jsx)(N,{})]})}))}));B.type.displayName="SIDEBAR";var z=B,H=n(8069),D=n.n(H),W=(0,a.memo)((function(e){var t=e.children,n=(0,d.useRouter)(),o="",i=!1;"/"!==n.pathname&&(o+=" ".concat(D().shiftedMain)),window.innerWidth<768&&(i=!0);var a="/404"!==n.pathname;return(0,r.jsxs)("div",{children:[a&&(0,r.jsx)(S,{}),(0,r.jsxs)("div",{className:D().ContentWrapperBox,children:[a&&(0,r.jsx)(z,{}),(0,r.jsx)("main",{className:o,children:t})]}),a&&i&&(0,r.jsx)("div",{className:D().BottomContactBox,children:(0,r.jsx)(N,{})})]})}));W.type.displayName="LAYOUT";var U=W;n(5447);function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){q(e,t,n[t])}))}return e}var K=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,r.jsx)("meta",{name:"description",content:"Tushar Shahi portfolio. Includes experience, skillset and links to projects."}),(0,r.jsx)("meta",{property:"og:title",content:"Tushar Shahi"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:description",content:"Tushar Shahi portfolio. Includes experience, skillset and links to projects."}),(0,r.jsx)("meta",{property:"og:url",content:"https://https://tusharshahi.github.io/"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"%PUBLIC_URL%/logo192.png"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,r.jsx)("title",{children:"Tushar Shahi"})]}),(0,r.jsx)(v.H,{children:(0,r.jsx)(U,{children:(0,r.jsx)(t,F({},n))})})]})}},1138:function(e,t,n){"use strict";n.d(t,{Af:function(){return c},Ff:function(){return o},Fg:function(){return f},K5:function(){return S},L_:function(){return p},TV:function(){return v},X3:function(){return s},Xb:function(){return x},Y9:function(){return l},YK:function(){return j},bc:function(){return m},fq:function(){return u},i_:function(){return k},jV:function(){return g},je:function(){return y},lE:function(){return r},su:function(){return i},uD:function(){return b},v7:function(){return a},xR:function(){return w},y0:function(){return h}});var r="/images/displayPicture-experience-desktop.jpg",o="/images/icons/socialMediaIcon-instagram.svg",i="shahi.tushar8@gmail.com",a={linkedin:"https://www.linkedin.com/in/tushar-shahi/",instagram:"https://www.instagram.com/shahi_tushar/",github:"https://github.com/TusharShahi"},c="Software Engineer based out of Delhi who enjoys product development. Has experience working at an early stage startup as well as a Fortune 500 company.",l="Very comfortable with Javascript. Loves to automate.",s="In his freetime - reads, lifts.",u="Plays football for the chills and has a fondness for the hills.",d={javascript:{name:"Javascript",imageLink:"javaScript",link:"https://www.javascript.com/",color:"yellow"},node:{name:"NodeJs",imageLink:"nodejs",link:"https://nodejs.org/en/",color:"green"},typescript:{name:"TypeScript",imageLink:"typeScript",link:"https://www.typescriptlang.org/",color:"blue"},next:{name:"NextJS",imageLink:"next",link:"https://nextjs.org/",color:"yellow"},react:{name:"ReactJS",imageLink:"react",link:"https://reactjs.org/",color:"blue"},salesforce:{name:"Salesforce",imageLink:"salesforce",link:"https://developer.salesforce.com/",color:"blue"},html:{name:"HTML",imageLink:"html5",link:"https://html.com/",color:"red"},css:{name:"CSS",imageLink:"css3",link:"https://www.w3.org/Style/CSS/Overview.en.html",color:"blue"},mongo:{name:"Mongo",imageLink:"mongo",link:"https://www.mongodb.com/",color:"green"},es:{name:"ElasticSearch",imageLink:"elasticSearch",link:"https://www.elastic.co/",color:"blue"},cpp:{name:"C++",imageLink:"cplusplus",link:"https://www.cplusplus.com/",color:"red"},python:{name:"Python",imageLink:"python3",link:"https://www.python.org/",color:"blue"},git:{name:"Git",imageLink:"git",link:"https://git-scm.com/",color:"red"},vsc:{name:"VSCode",imageLink:"vsCode",link:"https://code.visualstudio.com/",color:"blue"},linux:{name:"Linux",imageLink:"linux",link:"https://www.linux.org/",color:"yellow"}},f={project:"flixRemote",description:"Chrome extension which lets you control Netflix using phone",mockup:"/images/work/desktop/flixremote-mockup.png",mockupPhone:"/images/work/phone/flixremote-mockup.png",link:"https://chrome.google.com/webstore/detail/flixremote-your-netflix-r/jkhffbfbokiincaebolhpcfdkhiipalh?hl=en",altMockupText:"FlixRemote Mockup",imgWidth:"160",imgHeight:"91"},p={project:"WorkForce",description:"Desktop application to manage work force at a college campus",mockup:"/images/work/desktop/workforce-mockup.png",mockupPhone:"/images/work/phone/workforce-mockup.png",link:"",altMockupText:"WorkForce Mockup",imgWidth:"160",imgHeight:"95"},m={project:"MRM Website",description:"Official Website for Mars Rover Manipal",mockup:"/images/work/desktop/mrmwebsite-mockup.png",mockupPhone:"/images/work/phone/mrmwebsite-mockup.png",link:"http://www.marsrovermanipal.com",altMockupText:"MRM Website Mockup",imgWidth:"160",imgHeight:"85"},h={project:"Emergency Zone",description:"Online biology based quiz game for college tech fest",mockup:"/images/work/desktop/emergencyzone-mockup.png",mockupPhone:"/images/work/phone/emergencyzone-mockup.png",link:"",altMockupText:"Emergency Zone Mockup",imgWidth:"160",imgHeight:"85"},g={companyLink:"https://pluang.com/",role:"Software Engineer",company:"Pluang",description:"Built CMS for product. Working in product's financial education team.",timePeriod:"October 2021 - ",skillsUsed:[d.next,d.node]},y={companyLink:"https://play.google.com/store/apps/details?id=com.shell.sitibv.myjiffylube&hl=en&gl=US",role:"Software Engineer",company:"Shell IT",description:"Pivotal in golive and updates of MyJiffyLube app. Responsible for front end development focusing on accessibility.",timePeriod:"July 2019 - October 2021",skillsUsed:[d.salesforce,d.javascript,d.css]},v={companyLink:"https://www.rankme.online/",role:"Software Engineering Intern",company:"Rank Me Online",description:"Built online review analysis tool. Enhanced existing product dashboard with more insightful data analysis features. Created influencer discovery platform from scratch. Mentored interns to successfully onboard them to the project.",timePeriod:"December 2018 - June 2019",skillsUsed:[d.es,d.mongo,d.typescript,d.python]},b={companyLink:"https://www.rankme.online/",role:"Software Engineering Intern",company:"Rank Me Online",description:"Built the new product dashboard of the B2B Online Reputation Management tool. The dashboard provided efficient searching, filtering, and aggregations of social media data.",timePeriod:"June 2018 - July 2018",skillsUsed:[d.es,d.typescript]},w={companyLink:"https://www.facebook.com/MarsRoverManipal/",company:"Mars Rover Manipal",description:"Handled finance, sponsorship, public relations, social media and other documentation. Ensured smooth working of the team. Mentored juniors to take on same role.",timePeriod:"November 2016 - July 2018"},k={companyLink:"https://www.facebook.com/TeachCodeforGood/",company:"Teach Code for Good",description:"Volunteered as an HTML and Python teacher in schools in proximity. Went on to design the curriculum for the same.",timePeriod:"November 2016 - December 2018"},x={web:[d.typescript,d.react,d.next,d.node,d.html,d.css],database:[d.mongo,d.es],core:[d.cpp],tools:[d.git,d.vsc,d.linux]},j={web:"Web Technologies",database:"Databases",core:"Core",tools:"Tools and Platforms"},S={dark:{background:"#222629",paraText:"#fff",headerText:"#fff",base:"#fff",pressed:"#c5c6c8",shade:"#2d3235"},light:{background:"#fffff",paraText:"#15202b",headerText:"#212121",base:"#212121",pressed:"#22303c",shade:"#f5f5f5"}}},6701:function(e,t,n){"use strict";n.d(t,{H:function(){return l},_:function(){return a}});var r=n(5893),o=n(7294),i=n(1138),a=(0,o.createContext)({theme:"",toggleTheme:null}),c=function(e){"undefined"!==typeof document&&["background","paraText","headerText","base","pressed","shade"].forEach((function(t){document.documentElement.style.setProperty("--".concat(t),i.K5[(void 0===e?"dark":e).toLowerCase()][t])}))},l=function(e){var t=(0,o.useState)("DARK"),n=t[0],i=t[1];(0,o.useEffect)((function(){var e=localStorage.getItem("themeSwitch");i(e||"DARK")}),[]),c(n);return(0,r.jsx)(a.Provider,{value:{theme:n,toggleTheme:function(){var e="DARK"===n?"LIGHT":"DARK";i(e),window&&localStorage.setItem("themeSwitch",e),c(e)}},children:e.children})}},2443:function(e){e.exports={Header:"Header_Header__8YIhU",modeChangeButton:"Header_modeChangeButton__zqiwZ",Navbar:"Header_Navbar__nqm5n",Navlink:"Header_Navlink__USm3_"}},7971:function(e){e.exports={Navbar:"Navbar_Navbar__RMIy0"}},933:function(e){e.exports={Navlink:"Navlink_Navlink__o5iTj",activeLink:"Navlink_activeLink__vGL8g"}},8069:function(e){e.exports={ContentWrapperBox:"Layout_ContentWrapperBox__LHMK5",shiftedMain:"Layout_shiftedMain__ydUwl"}},3028:function(e){e.exports={contactArea:"ContactArea_contactArea__48d9Y",socialMediaBox:"ContactArea_socialMediaBox__sqsXq",SocialMediaLink:"ContactArea_SocialMediaLink__8Y2IH",LIGHT:"ContactArea_LIGHT___pYEA",MediaIconBox:"ContactArea_MediaIconBox__mq4_3",emailAndPhoneBox:"ContactArea_emailAndPhoneBox__136Ao",copyrightBox:"ContactArea_copyrightBox__698ZY"}},6912:function(e){e.exports={SideBar:"Sidebar_SideBar__TQJnI",SideBarBox:"Sidebar_SideBarBox__z_VgF",sideBarBoxFullWidth:"Sidebar_sideBarBoxFullWidth__NE2aM",sideBarCompressed:"Sidebar_sideBarCompressed__aI1pb",displayPhotoArea:"Sidebar_displayPhotoArea__U_2C2",welcomeArea:"Sidebar_welcomeArea__qhCAO",nameSpan:"Sidebar_nameSpan__1ptrG"}},5447:function(){},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(880)}));var n=e.O();_N_E=n}]);