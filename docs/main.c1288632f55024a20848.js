!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){!function(t,n){var r=function(e,t,n){"use strict";var r,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var a=t.documentElement,o=e.HTMLPictureElement,s=e.addEventListener.bind(e),l=e.setTimeout,u=e.requestAnimationFrame||l,c=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},y=Array.prototype.forEach,h=function(e,t){return g[t]||(g[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),g[t].test(e.getAttribute("class")||"")&&g[t]},m=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},v=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},b=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&b(e,t),f.forEach((function(n){e[r](n,t)}))},p=function(e,n,i,a,o){var s=t.createEvent("Event");return i||(i={}),i.instance=r,s.initEvent(n,!a,!o),s.detail=i,e.dispatchEvent(s),s},z=function(t,n){var r;!o&&(r=e.picturefill||i.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=(ge=[],ye=[],he=ge,me=function(){var e=he;for(he=ge.length?ye:ge,de=!0,fe=!1;e.length;)e.shift()();de=!1},ve=function(e,n){de&&!n?e.apply(this,arguments):(he.push(e),fe||(fe=!0,(t.hidden?l:u)(me)))},ve._lsFlush=me,ve),_=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E((function(){e.apply(t,n)}))}},w=function(e){var t,r,i=function(){t=null,e()},a=function(){var e=n.now()-r;e<99?l(a,99-e):(c||i)(i)};return function(){r=n.now(),t||(t=l(a,99))}},M=(U=/^img$/i,G=/^iframe$/i,J="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),K=0,Q=0,V=-1,X=function(e){Q--,(!e||Q<0||!e.target)&&(Q=0)},Y=function(e){return null==I&&(I="hidden"==A(t.body,"visibility")),I||!("hidden"==A(e.parentNode,"visibility")&&"hidden"==A(e,"visibility"))},Z=function(e,n){var r,i=e,o=Y(e);for(D-=n,$+=n,q-=n,H+=n;o&&(i=i.offsetParent)&&i!=t.body&&i!=a;)(o=(A(i,"opacity")||1)>0)&&"visible"!=A(i,"overflow")&&(r=i.getBoundingClientRect(),o=H>r.left&&q<r.right&&$>r.top-1&&D<r.bottom+1);return o},ee=function(){var e,n,o,s,l,u,c,d,f,g,y,h,m=r.elements;if((B=i.loadMode)&&Q<8&&(e=m.length)){for(n=0,V++;n<e;n++)if(m[n]&&!m[n]._lazyRace)if(!J||r.prematureUnveil&&r.prematureUnveil(m[n]))se(m[n]);else if((d=m[n].getAttribute("data-expand"))&&(u=1*d)||(u=K),g||(g=!i.expand||i.expand<1?a.clientHeight>500&&a.clientWidth>500?500:370:i.expand,r._defEx=g,y=g*i.expFactor,h=i.hFac,I=null,K<y&&Q<1&&V>2&&B>2&&!t.hidden?(K=y,V=0):K=B>1&&V>1&&Q<6?g:0),f!==u&&(F=innerWidth+u*h,R=innerHeight+u,c=-1*u,f=u),o=m[n].getBoundingClientRect(),($=o.bottom)>=c&&(D=o.top)<=R&&(H=o.right)>=c*h&&(q=o.left)<=F&&($||H||q||D)&&(i.loadHidden||Y(m[n]))&&(P&&Q<3&&!d&&(B<3||V<4)||Z(m[n],u))){if(se(m[n]),l=!0,Q>9)break}else!l&&P&&!s&&Q<4&&V<4&&B>2&&(k[0]||i.preloadAfterLoad)&&(k[0]||!d&&($||H||q||D||"auto"!=m[n].getAttribute(i.sizesAttr)))&&(s=k[0]||m[n]);s&&!l&&se(s)}},te=function(e){var t,r=0,a=i.throttleDelay,o=i.ricTimeout,s=function(){t=!1,r=n.now(),e()},u=c&&o>49?function(){c(s,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:_((function(){l(s)}),!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=a-(n.now()-r))<0&&(i=0),e||i<9?u():l(u,i))}}(ee),ne=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(X(e),m(t,i.loadedClass),v(t,i.loadingClass),b(t,ie),p(t,"lazyloaded"))},re=_(ne),ie=function(e){re({target:e.target})},ae=function(e){var t,n=e.getAttribute(i.srcsetAttr);(t=i.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},oe=_((function(e,t,n,r,a){var o,s,u,c,f,g;(f=p(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?m(e,i.autosizesClass):e.setAttribute("sizes",r)),s=e.getAttribute(i.srcsetAttr),o=e.getAttribute(i.srcAttr),a&&(c=(u=e.parentNode)&&d.test(u.nodeName||"")),g=t.firesLoad||"src"in e&&(s||o||c),f={target:e},m(e,i.loadingClass),g&&(clearTimeout(W),W=l(X,2500),b(e,ie,!0)),c&&y.call(u.getElementsByTagName("source"),ae),s?e.setAttribute("srcset",s):o&&!c&&(G.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,o):e.src=o),a&&(s||c)&&z(e,{src:o})),e._lazyRace&&delete e._lazyRace,v(e,i.lazyClass),E((function(){var t=e.complete&&e.naturalWidth>1;g&&!t||(t&&m(e,"ls-is-cached"),ne(f),e._lazyCache=!0,l((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Q--}),!0)})),se=function(e){if(!e._lazyRace){var t,n=U.test(e.nodeName),r=n&&(e.getAttribute(i.sizesAttr)||e.getAttribute("sizes")),a="auto"==r;(!a&&P||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,i.errorClass)||!h(e,i.lazyClass))&&(t=p(e,"lazyunveilread").detail,a&&N.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Q++,oe(e,t,a,r,n))}},le=w((function(){i.loadMode=3,te()})),ue=function(){3==i.loadMode&&(i.loadMode=2),le()},ce=function(){P||(n.now()-j<999?l(ce,999):(P=!0,i.loadMode=3,te(),s("scroll",ue,!0)))},{_:function(){j=n.now(),r.elements=t.getElementsByClassName(i.lazyClass),k=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),s("scroll",te,!0),s("resize",te,!0),s("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&u((function(){n.forEach((function(e){e.complete&&se(e)}))}))}})),e.MutationObserver?new MutationObserver(te).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a.addEventListener("DOMNodeInserted",te,!0),a.addEventListener("DOMAttrModified",te,!0),setInterval(te,999)),s("hashchange",te,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,te,!0)})),/d$|^c/.test(t.readyState)?ce():(s("load",ce),t.addEventListener("DOMContentLoaded",te),l(ce,2e4)),r.elements.length?(ee(),E._lsFlush()):te()},checkElems:te,unveil:se,_aLSL:ue}),N=(L=_((function(e,t,n,r){var i,a,o;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),d.test(t.nodeName||""))for(a=0,o=(i=t.getElementsByTagName("source")).length;a<o;a++)i[a].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)})),T=function(e,t,n){var r,i=e.parentNode;i&&(n=C(e,i,n),(r=p(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&L(e,i,r,n))},O=w((function(){var e,t=S.length;if(t)for(e=0;e<t;e++)T(S[e])})),{_:function(){S=t.getElementsByClassName(i.autosizesClass),s("resize",O)},checkElems:O,updateElem:T}),x=function(){!x.i&&t.getElementsByClassName&&(x.i=!0,N._(),M._())};var S,L,T,O;var k,P,W,B,j,F,R,D,q,H,$,I,U,G,J,K,Q,V,X,Y,Z,ee,te,ne,re,ie,ae,oe,se,le,ue,ce;var de,fe,ge,ye,he,me,ve;return l((function(){i.init&&x()})),r={cfg:i,autoSizer:N,loader:M,init:x,uP:z,aC:m,rC:v,hC:h,fire:p,gW:C,rAF:E}}(t,t.document,Date);t.lazySizes=r,e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},function(e,t,n){"use strict";n.r(t);n(0),n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.btn=document.getElementById("btn"),this.color=document.querySelector(".color"),this.colors=["green","red","rgba(133,122,200)","#f15025","black","yellow","pink","grey","blue","grey","purple","orange","aqua"],this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;this.btn.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.randomNumber=Math.floor(Math.random()*this.colors.length),this.color.innerText=this.colors[this.randomNumber],document.body.style.backgroundColor=this.colors[this.randomNumber]}}])&&r(t.prototype,n),i&&r(t,i),e}())}]);