!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){t.exports=function(){"use strict";function t(t){return"scrollama__debug-offset--"+t}function e(e){!function(e){var n=e.id,o=e.offsetVal,r=e.stepClass,i=document.createElement("div");i.id=t(n),i.className="scrollama__debug-offset",i.style.position="fixed",i.style.left="0",i.style.width="100%",i.style.height="0",i.style.borderTop="2px dashed black",i.style.zIndex="9999";var s=document.createElement("p");s.innerHTML='".'+r+'" trigger: <span>'+o+"</span>",s.style.fontSize="12px",s.style.fontFamily="monospace",s.style.color="black",s.style.margin="0",s.style.padding="6px",i.appendChild(s),document.body.appendChild(i)}({id:e.id,offsetVal:e.offsetVal,stepClass:e.stepEl[0].className})}function n(t){var e=t.id,n=t.index,o=t.state,r="scrollama__debug-step--"+e+"-"+n,i=document.getElementById(r+"_above"),s=document.getElementById(r+"_below"),a="enter"===o?"block":"none";i&&(i.style.display=a),s&&(s.style.display=a)}return function(){var o=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],r={},i={},s=null,a=[],c=[],l=[],u=[],d=0,f=0,h=0,p=0,g=0,m=0,v=!1,y=!1,b=!1,_=!1,w=!1,x=!1,E="down",T="percent",k=[];function O(t){console.error("scrollama error: "+t)}function I(){r={stepEnter:function(){},stepExit:function(){},stepProgress:function(){}},i={}}function S(t){return t.getBoundingClientRect().top+window.pageYOffset-(document.body.clientTop||0)}function M(t){return+t.getAttribute("data-scrollama-index")}function R(){window.pageYOffset>g?E="down":window.pageYOffset<g&&(E="up"),g=window.pageYOffset}function L(t){i[t]&&i[t].forEach((function(t){return t.disconnect()}))}function A(){var e,n;h=window.innerHeight,e=document.body,n=document.documentElement,p=Math.max(e.scrollHeight,e.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight),f=d*("pixels"===T?1:h),v&&(c=a.map((function(t){return t.getBoundingClientRect().height})),l=a.map(S),y&&z()),b&&function(e){var n=e.id,o=e.offsetMargin,r=e.offsetVal,i="pixels"===e.format?"px":"",s=t(n),a=document.getElementById(s);a.style.top=o+"px",a.querySelector("span").innerText=""+r+i}({id:s,offsetMargin:f,offsetVal:d,format:T})}function B(t){if(t&&!y){if(!v)return O("scrollama error: enable() called before scroller was ready"),void(y=!1);z()}!t&&y&&o.forEach(L),y=t}function H(t,e){var n=M(t);void 0!==e&&(u[n].progress=e);var o={element:t,index:n,progress:u[n].progress};"enter"===u[n].state&&r.stepProgress(o)}function C(t,e){if("above"===e)for(var n=0;n<t;n+=1){var o=u[n];"enter"!==o.state&&"down"!==o.direction?(D(a[n],"down",!1),P(a[n],"down")):"enter"===o.state&&P(a[n],"down")}else if("below"===e)for(var r=u.length-1;r>t;r-=1){var i=u[r];"enter"===i.state&&P(a[r],"up"),"down"===i.direction&&(D(a[r],"up",!1),P(a[r],"up"))}}function D(t,e,o){void 0===o&&(o=!0);var i=M(t),a={element:t,index:i,direction:e};u[i].direction=e,u[i].state="enter",w&&o&&"down"===e&&C(i,"above"),w&&o&&"up"===e&&C(i,"below"),r.stepEnter&&!k[i]&&(r.stepEnter(a,u),b&&n({id:s,index:i,state:"enter"}),x&&(k[i]=!0)),_&&H(t)}function P(t,e){var o=M(t),i={element:t,index:o,direction:e};_&&("down"===e&&u[o].progress<1?H(t,1):"up"===e&&u[o].progress>0&&H(t,0)),u[o].direction=e,u[o].state="exit",r.stepExit(i,u),b&&n({id:s,index:o,state:"exit"})}function $(t){var e=t[0];R();var n=e.isIntersecting,o=e.boundingClientRect,r=e.target,i=o.top,s=o.bottom,a=i-f,c=s-f,l=M(r),d=u[l];n&&a<=0&&c>=0&&"down"===E&&"enter"!==d.state&&D(r,E),!n&&a>0&&"up"===E&&"enter"===d.state&&P(r,E)}function j(t){var e=t[0];R();var n=e.isIntersecting,o=e.boundingClientRect,r=e.target,i=o.top,s=o.bottom,a=i-f,c=s-f,l=M(r),d=u[l];n&&a<=0&&c>=0&&"up"===E&&"enter"!==d.state&&D(r,E),!n&&c<0&&"down"===E&&"enter"===d.state&&P(r,E)}function q(t){var e=t[0];R();var n=e.isIntersecting,o=e.target,r=M(o),i=u[r];n&&"down"===E&&"down"!==i.direction&&"enter"!==i.state&&(D(o,"down"),P(o,"down"))}function W(t){var e=t[0];R();var n=e.isIntersecting,o=e.target,r=M(o),i=u[r];n&&"up"===E&&"down"===i.direction&&"enter"!==i.state&&(D(o,"up"),P(o,"up"))}function F(t){var e=t[0];R();var n=e.isIntersecting,o=e.intersectionRatio,r=e.boundingClientRect,i=e.target,s=r.bottom;n&&s-f>=0&&H(i,+o)}function N(){i.stepProgress=a.map((function(t,e){var n=c[e]-f+"px 0px "+(-h+f)+"px 0px",o=function(t){for(var e=Math.ceil(t/m),n=[],o=1/e,r=0;r<e;r+=1)n.push(r*o);return n}(c[e]),r=new IntersectionObserver(F,{rootMargin:n,threshold:o});return r.observe(t),r}))}function z(){o.forEach(L),i.viewportAbove=a.map((function(t,e){var n=p-l[e],o=f-h-c[e],r=new IntersectionObserver(q,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(t),r})),i.viewportBelow=a.map((function(t,e){var n=-f-c[e],o=f-h+c[e]+p,r=new IntersectionObserver(W,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(t),r})),i.stepAbove=a.map((function(t,e){var n=-f+c[e],o=new IntersectionObserver($,{rootMargin:n+"px 0px "+(f-h)+"px 0px"});return o.observe(t),o})),i.stepBelow=a.map((function(t,e){var n=-f,o=f-h+c[e],r=new IntersectionObserver(j,{rootMargin:n+"px 0px "+o+"px 0px"});return r.observe(t),r})),_&&N()}function V(t){return!(!t||1!==t.nodeType)&&(function(t){var e=window.getComputedStyle(t);return("scroll"===e.overflowY||"auto"===e.overflowY)&&t.scrollHeight>t.clientHeight}(t)?t:V(t.parentNode))}var U={setup:function(t){var n=t.step,o=t.parent,r=t.offset;void 0===r&&(r=.5);var i=t.progress;void 0===i&&(i=!1);var c=t.threshold;void 0===c&&(c=4);var l=t.debug;void 0===l&&(l=!1);var f=t.order;void 0===f&&(f=!0);var h,p,g,y=t.once;if(void 0===y&&(y=!1),I(),p=(h="abcdefghijklmnopqrstuv").length,g=Date.now(),s=""+[0,0,0].map((function(t){return h[Math.floor(Math.random()*p)]})).join("")+g,!(a=function(t,e){return void 0===e&&(e=document),"string"==typeof t?Array.from(e.querySelectorAll(t)):t instanceof Element?[t]:t instanceof NodeList?Array.from(t):t instanceof Array?t:[]}(n,o)).length)return O("no step elements"),U;var E=a.reduce((function(t,e){return t||V(e.parentNode)}),!1);return E&&console.error("scrollama error: step elements cannot be children of a scrollable element. Remove any css on the parent element with overflow: scroll; or overflow: auto; on elements with fixed height.",E),b=l,_=i,w=f,x=y,U.offsetTrigger(r),m=Math.max(1,+c),v=!0,b&&e({id:s,stepEl:a,offsetVal:d}),a.forEach((function(t,e){return t.setAttribute("data-scrollama-index",e)})),u=a.map((function(){return{direction:null,state:null,progress:0}})),A(),U.enable(),U},resize:function(){return A(),U},enable:function(){return B(!0),U},disable:function(){return B(!1),U},destroy:function(){B(!1),I()},offsetTrigger:function(t){if(null===t)return d;if("number"==typeof t)T="percent",t>1&&O("offset value is greater than 1. Fallback to 1."),t<0&&O("offset value is lower than 0. Fallback to 0."),d=Math.min(Math.max(0,t),1);else if("string"==typeof t&&t.indexOf("px")>0){var e=+t.replace("px","");isNaN(e)?(O("offset value must be in 'px' format. Fallback to 0.5."),d=.5):(T="pixels",d=e)}else O("offset value does not include 'px'. Fallback to 0.5."),d=.5;return U},onStepEnter:function(t){return"function"==typeof t?r.stepEnter=t:O("onStepEnter requires a function"),U},onStepExit:function(t){return"function"==typeof t?r.stepExit=t:O("onStepExit requires a function"),U},onStepProgress:function(t){return"function"==typeof t?r.stepProgress=t:O("onStepProgress requires a function"),U}};return U}}()},function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,n=r(e);n;)n=r(e=n.ownerDocument);return e}(),e=[],n=null,o=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?d(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},s._resetCrossOriginUpdater=function(){n=null,o=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,s=null;this.POLL_INTERVAL?i=n.setInterval(o,this.POLL_INTERVAL):(a(n,"resize",o,!0),a(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(s=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),c(t,"resize",o,!0)),c(e,"scroll",o,!0),s&&s.disconnect()}));var l=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=l){var u=r(e);u&&this._monitorIntersections(u.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&(this.root.ownerDocument||this.root)||t;if(!this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var i=r(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}))){var i=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),i(),e!=o){var s=r(e);s&&this._unmonitorIntersections(s.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,s=l(r),a=this._rootContainsTarget(r),c=o.entry,u=t&&a&&this._computeTargetAndRootIntersection(r,s,e),d=null;this._rootContainsTarget(r)?n&&!this.root||(d=e):d={top:0,bottom:0,left:0,right:0,width:0,height:0};var f=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:d,intersectionRect:u});c?t&&a?this._hasCrossedThreshold(c,f)&&this._queuedEntries.push(f):c&&c.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var s,a,c,u,f,p,g,m,v=r,y=h(e),b=!1;!b&&y;){var _=null,w=1==y.nodeType?window.getComputedStyle(y):{};if("none"==w.display)return null;if(y==this.root||9==y.nodeType)if(b=!0,y==this.root||y==t)n&&!this.root?!o||0==o.width&&0==o.height?(y=null,_=null,v=null):_=o:_=i;else{var x=h(y),E=x&&l(x),T=x&&this._computeTargetAndRootIntersection(x,E,i);E&&T?(y=x,_=d(E,T)):(y=null,v=null)}else{var k=y.ownerDocument;y!=k.body&&y!=k.documentElement&&"visible"!=w.overflow&&(_=l(y))}if(_&&(s=_,a=v,c=void 0,u=void 0,f=void 0,p=void 0,g=void 0,m=void 0,c=Math.max(s.top,a.top),u=Math.min(s.bottom,a.bottom),f=Math.max(s.left,a.left),p=Math.min(s.right,a.right),m=u-c,v=(g=p-f)>=0&&m>=0&&{top:c,bottom:u,left:f,right:p,width:g,height:m}||null),!v)break;y=y&&h(y)}return v}},s.prototype._getRootRect=function(){var e;if(this.root&&!p(this.root))e=l(this.root);else{var n=p(this.root)?this.root:t,o=n.documentElement,r=n.body;e={top:0,left:0,right:o.clientWidth||r.clientWidth,width:o.clientWidth||r.clientWidth,bottom:o.clientHeight||r.clientHeight,height:o.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},s.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},s.prototype._rootIsInDom=function(){return!this.root||f(t,this.root)},s.prototype._rootContainsTarget=function(e){var n=this.root&&(this.root.ownerDocument||this.root)||t;return f(n,e)&&(!this.root||n==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=i}function r(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=u(t.rootBounds),this.boundingClientRect=u(t.boundingClientRect),this.intersectionRect=u(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var n,o,r,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType&&9!=i.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r||(r=setTimeout((function(){n(),r=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function l(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function u(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function d(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function f(t,e){for(var n=e;n;){if(n==t)return!0;n=h(n)}return!1}function h(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?r(e):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function p(t){return t&&9===t.nodeType}}()},function(t,e,n){!function(e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var r,i=!1,s=void 0!==e;s&&e.getComputedStyle?(r=n.createElement("div"),["","-webkit-","-moz-","-ms-"].some((function(t){try{r.style.position=t+"sticky"}catch(t){}return""!=r.style.position}))&&(i=!0)):i=!0;var a=!1,c="undefined"!=typeof ShadowRoot,l={top:null,left:null},u=[];function d(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function f(t){return parseFloat(t)||0}function h(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}var p=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!(e instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(u.some((function(t){return t._node===e})))throw new Error("Stickyfill is already applied to this node");this._node=e,this._stickyMode=null,this._active=!1,u.push(this),this.refresh()}return o(t,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var t=this._node,o=getComputedStyle(t),r={position:o.position,top:o.top,display:o.display,marginTop:o.marginTop,marginBottom:o.marginBottom,marginLeft:o.marginLeft,marginRight:o.marginRight,cssFloat:o.cssFloat};if(!isNaN(parseFloat(r.top))&&"table-cell"!=r.display&&"none"!=r.display){this._active=!0;var s=t.style.position;"sticky"!=o.position&&"-webkit-sticky"!=o.position||(t.style.position="static");var a=t.parentNode,l=c&&a instanceof ShadowRoot?a.host:a,u=t.getBoundingClientRect(),p=l.getBoundingClientRect(),g=getComputedStyle(l);this._parent={node:l,styles:{position:l.style.position},offsetHeight:l.offsetHeight},this._offsetToWindow={left:u.left,right:n.documentElement.clientWidth-u.right},this._offsetToParent={top:u.top-p.top-f(g.borderTopWidth),left:u.left-p.left-f(g.borderLeftWidth),right:-u.right+p.right-f(g.borderRightWidth)},this._styles={position:s,top:t.style.top,bottom:t.style.bottom,left:t.style.left,right:t.style.right,width:t.style.width,marginTop:t.style.marginTop,marginLeft:t.style.marginLeft,marginRight:t.style.marginRight};var m=f(r.top);this._limits={start:u.top+e.pageYOffset-m,end:p.top+e.pageYOffset+l.offsetHeight-f(g.borderBottomWidth)-t.offsetHeight-m-f(r.marginBottom)};var v=g.position;"absolute"!=v&&"relative"!=v&&(l.style.position="relative"),this._recalcPosition();var y=this._clone={};y.node=n.createElement("div"),d(y.node.style,{width:u.right-u.left+"px",height:u.bottom-u.top+"px",marginTop:r.marginTop,marginBottom:r.marginBottom,marginLeft:r.marginLeft,marginRight:r.marginRight,cssFloat:r.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),a.insertBefore(y.node,t),y.docOffsetTop=h(y.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var t=l.top<=this._limits.start?"start":l.top>=this._limits.end?"end":"middle";if(this._stickyMode!=t){switch(t){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=t}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(h(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var t=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,u.some((function(e){return e!==t&&e._parent&&e._parent.node===t._parent.node}))||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var t=this;this._deactivate(),u.some((function(e,n){if(e._node===t._node)return u.splice(n,1),!0})),this._removed=!0}}]),t}(),g={stickies:u,Sticky:p,forceSticky:function(){i=!1,m(),this.refreshAll()},addOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}for(var e=0;e<u.length;e++)if(u[e]._node===t)return u[e];return new p(t)},add:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length){for(var e=[],n=function(n){var o=t[n];return o instanceof HTMLElement?u.some((function(t){if(t._node===o)return e.push(t),!0}))?"continue":void e.push(new p(o)):(e.push(void 0),"continue")},o=0;o<t.length;o++)n(o);return e}},refreshAll:function(){u.forEach((function(t){return t.refresh()}))},removeOne:function(t){if(!(t instanceof HTMLElement)){if(!t.length||!t[0])return;t=t[0]}u.some((function(e){if(e._node===t)return e.remove(),!0}))},remove:function(t){if(t instanceof HTMLElement&&(t=[t]),t.length)for(var e=function(e){var n=t[e];u.some((function(t){if(t._node===n)return t.remove(),!0}))},n=0;n<t.length;n++)e(n)},removeAll:function(){for(;u.length;)u[0].remove()}};function m(){if(!a){a=!0,i(),e.addEventListener("scroll",i),e.addEventListener("resize",g.refreshAll),e.addEventListener("orientationchange",g.refreshAll);var t=void 0,o=void 0,r=void 0;"hidden"in n?(o="hidden",r="visibilitychange"):"webkitHidden"in n&&(o="webkitHidden",r="webkitvisibilitychange"),r?(n[o]||s(),n.addEventListener(r,(function(){n[o]?clearInterval(t):s()}))):s()}function i(){e.pageXOffset!=l.left?(l.top=e.pageYOffset,l.left=e.pageXOffset,g.refreshAll()):e.pageYOffset!=l.top&&(l.top=e.pageYOffset,l.left=e.pageXOffset,u.forEach((function(t){return t._recalcPosition()})))}function s(){t=setInterval((function(){u.forEach((function(t){return t._fastCheck()}))}),500)}}i||m(),t.exports?t.exports=g:s&&(e.Stickyfill=g)}(window,document)},function(t,e,n){(function(e){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),u=Object.prototype.toString,d=Math.max,f=Math.min,h=function(){return l.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==u.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var a=r.test(t);return a||i.test(t)?s(t.slice(2),a?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var o,r,i,s,a,c,l=0,u=!1,m=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,l=e,s=t.apply(i,n)}function b(t){return l=t,a=setTimeout(w,e),u?y(t):s}function _(t){var n=t-c;return void 0===c||n>=e||n<0||m&&t-l>=i}function w(){var t=h();if(_(t))return x(t);a=setTimeout(w,function(t){var n=e-(t-c);return m?f(n,i-(t-l)):n}(t))}function x(t){return a=void 0,v&&o?y(t):(o=r=void 0,s)}function E(){var t=h(),n=_(t);if(o=arguments,r=this,c=t,n){if(void 0===a)return b(c);if(m)return a=setTimeout(w,e),y(c)}return void 0===a&&(a=setTimeout(w,e)),s}return e=g(e)||0,p(n)&&(u=!!n.leading,i=(m="maxWait"in n)?d(g(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},E.flush=function(){return void 0===a?s:x(h())},E}}).call(this,n(4))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var o=n(3),r=n.n(o);const i={android:()=>navigator.userAgent.match(/Android/i),blackberry:()=>navigator.userAgent.match(/BlackBerry/i),ios:()=>navigator.userAgent.match(/iPhone|iPad|iPod/i),opera:()=>navigator.userAgent.match(/Opera Mini/i),windows:()=>navigator.userAgent.match(/IEMobile/i),any:()=>i.android()||i.blackberry()||i.ios()||i.opera()||i.windows()};var s=i;function a(){(function(t,e=document){return[...e.querySelectorAll(t)]})("[target='_blank']").forEach(t=>t.setAttribute("rel","noopener"))}const c='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',l=d3.select("body");function u(t,e,n){const o=t.classed("is-visible");e.attr("aria-expanded",!o),t.classed("is-active",!o),t.classed("is-visible",!o),l.classed("modal-open",!o),!0===n&&(o?e.html(()=>c):e.html(()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'))}var d={init:function(){console.log("Make something awesome!")},resize:function(){}};const f=[{image:"2018_02_stand-up",url:"2018/02/stand-up",hed:"The Structure of Stand-Up Comedy"},{image:"2018_04_birthday-paradox",url:"2018/04/birthday-paradox",hed:"The Birthday Paradox Experiment"},{image:"2018_11_boy-bands",url:"2018/11/boy-bands",hed:"Internet Boy Band Database"},{image:"2018_08_pockets",url:"2018/08/pockets",hed:"Women’s Pockets are Inferior"}];let h=null;function p(t){return`\n\t<a class='footer-recirc__article' href='https://pudding.cool/${t.url}' target='_blank' rel='noopener'>\n\t\t<img class='article__img' src='https://pudding.cool/common/assets/thumbnails/640/${t.image}.jpg' alt='${t.hed}'>\n\t\t<p class='article__headline'>${t.hed}</p>\n\t</a>\n\t`}var g={init:function(){!function(t){const e=new XMLHttpRequest,n="https://pudding.cool/assets/data/stories.json?v="+Date.now();e.open("GET",n,!0),e.onload=()=>{if(e.status>=200&&e.status<400){const n=JSON.parse(e.responseText);t(n)}else t(f)},e.onerror=()=>t(f),e.send()}(t=>{h=t,function(){const t=window.location.href,e=h.filter(e=>!t.includes(e.url)).slice(0,4).map(p).join("");d3.select(".pudding-footer .footer-recirc__articles").html(e)}()})}};d3.select("#bar-nervous"),document.getElementById("bar-talk");const m=document.querySelectorAll(".hopecovid__bars__container");var v={init:function(){for(let t=0;t<m.length;++t)m[t].addEventListener("mousemove",e=>{const n=m[t].querySelector(".hopecovid__bars__container__bar"),o=m[t].querySelector("p.reader"),r=e.pageX-n.offsetLeft;e.pageY,n.offsetTop;let i=Math.round(100*r/n.offsetWidth);i>=100?i="100%":i<=0?i="0%":i+="%",o.innerHTML=0==t?i+" of the days":i,o.style.left=i,n.querySelector("span.tick").style.left=i,n.querySelector("span.tick").style.opacity=1}),m[t].addEventListener("click",e=>{let n,o,r;const i=m[t].querySelector(".hopecovid__bars__container__bar"),s=m[t].querySelector("p.reader"),a=m[t].querySelector("p.answer"),c=e.pageX-i.offsetLeft;e.pageY,i.offsetTop;let l=Math.round(100*c/i.offsetWidth);l>=100?l="100%":l<=0?l="0%":l+="%",0==t?(n=50,o="progess-animation-nervous",r=`According to HOPE COVID-19 study, \n                most of its pregnant participants were bothered\n                by nervousness and anxiety for ${n}% or more of the days.`,s.innerHTML=`Your answer: ${l} of the days`):(n=87,o="progess-animation-talk",r=`According to HOPE COVID-19 study,\n                ${n}% of the pregnant participants often \n                meet or talk with family or friends`,s.innerHTML="Your answer: "+l),a.innerHTML=r,s.style.left=l,i.querySelector("span.tick").style.left=l,i.querySelector("span.tick").style.opacity=1,i.querySelector("span.bar").classList.add(o),m[t].style.pointerEvents="none"})}};function y(t){return new Promise((e,n)=>{const o=t.split(".").pop();"csv"===o?d3.csv("assets/data/"+t).then(e).catch(n):"json"===o?d3.json("assets/data/"+t).then(e).catch(n):n(new Error("unsupported file type for: "+t))})}function b(t){if("string"==typeof t)return y(t);const e=t.map(y);return Promise.all(e)}n(1);var _=n(0),w=n.n(_),x=n(2);const E=20,T=40,k=50,O=40;let I,S,M,R,L,A=window.innerHeight,B=window.innerWidth,H=0,C=0,D=B<=600;const P=d3.select(".reddit__container"),$=P.select(".scroll__graphic");var j=P.select(".tooltip");P.select(".scroll__text");const q=$.select("svg"),W=q.select(".vis"),F=W.select("#sentiment"),N=(W.select("#number"),q.select(".x-axis")),z=q.select(".y-axis"),V=d3.scaleTime(),U=d3.scaleLinear(),Y="30day_avg_sentiment";function X(){A=window.innerHeight,B=window.innerWidth,D=B<=600,H=$.node().offsetHeight,C=$.node().offsetWidth,I=C-O-T,S=H-E-k,q.attr("width",C).attr("height",H),W.attr("transform",`translate(${O}, ${E})`),V.range([0,I]),U.range([S,0]),function(){F.selectAll("*").remove(),W.selectAll("text").remove(),W.select(".mouse-over-effects").remove(),V.domain(d3.extent(L,t=>t.date)),U.domain([.05,d3.max(L,t=>t[Y])]);const t=d3.axisBottom(V).tickSizeOuter(0).ticks(5);M=N.attr("transform",`translate(${O}, ${E+S})`).call(t),R=z.attr("transform",`translate(${O+I}, ${E})`).call(d3.axisRight(U).tickSize(10).ticks(5)),R.selectAll(".tick text").attr("y",-10).attr("x",1),W.append("text").attr("class","label y-label").attr("transform",`translate(-${I}, 0)`).selectAll("tspan").data(["Sentiment","Score"]).enter().append("tspan").text(t=>t).attr("x",-35).attr("y",(t,e)=>-E/2+30*e);const e=d3.line().x(t=>V(t.date)).y(t=>U(t[Y])).curve(d3.curveMonotoneX);q.append("linearGradient").attr("id","line-gradient").attr("gradientUnits","userSpaceOnUse").attr("x1",V.range()[0]).attr("y1",U.range()[0]).attr("x2",V.range()[1]).attr("y2",U.range()[1]).selectAll("stop").data([{offset:"0%",color:"#0E4FB3"},{offset:"100%",color:"#EDB95A"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),F.append("path").datum(L).attr("d",e).attr("stroke","url(#line-gradient)").attr("fill","none").attr("stroke-width",3);const n=d3.bisector((function(t){return t.date})).left,o=W.append("g").attr("class","mouse-over-effects"),r=o.append("circle").attr("class","mouse-over-circle").attr("r",4),i=d3.timeFormat("%B %d, %Y"),s=d3.scaleLinear().domain([0,30]).range([0,100]);o.append("rect").attr("width",I).attr("height",S).attr("fill","none").attr("pointer-events","all").on("mousemove",(function(t){d3.selectAll(".bar-group").remove();const e=d3.pointer(t,this),o=V.invert(e[0]),a=n(L,o,1),c=L[a],l=V(c.date),u=U(c[Y]);r.attr("cx",l).attr("cy",u);const d=j.node().getBoundingClientRect().width;j.style("left",()=>I-l<50?l-30-d+"px":l+60+"px").style("top",u+"px"),j.select(".date").html(i(c.date)),j.select("#avg-sentiment").html(Math.round(100*c[Y])/100),j.select("#num-of-posts").html(c.counts);let f=c.most_common_bigrams.replace(/\s/g,"").replace("[","").replace("]","").replace("('","").replace("')","").split("),(");f=f.map(t=>t.replaceAll("(","").replaceAll(")","").replaceAll("'","").split(",")).slice(0,5);const h=j.select(".bars").selectAll(".bar-group").data(f).enter().append("div").attr("class","bar-group");h.append("div").append("span").html(t=>`${t[0]} ${t[1]}`),h.append("div").append("span").attr("class","bar").style("width",t=>s(t[2])+"%")})).on("mouseover",(function(){r.style("opacity",1),j.style("opacity",1).style("visibility","visible")})).on("mouseout",(function(){r.style("opacity",0),j.style("opacity",0).style("visibility","hidden")}))}()}w()();var G={init:function(){b("[final-rm-stwords]daily_posts_sentiment_since_2020_jan.csv").then(t=>{t.forEach(t=>{t["30day_avg_sentiment"]=+t["30day_avg_sentiment"],t.date=new Date(t.date)}),L=t.filter(t=>""!==t["30day_avg_sentiment"]&&t["30day_avg_sentiment"]>0),console.log(L),X(),x.add($.node())}).catch(console.error)},resize:X};n(2);const K=50,J=40,Q=50,Z=20;let tt,et,nt,ot,rt,it=window.innerHeight,st=window.innerWidth,at=0,ct=0,lt=st<=600;const ut=d3.select("#less-baby").select(".birth-rates-chart"),dt=ut.select("svg"),ft=dt.select("g.vis"),ht=d3.scaleTime(),pt=d3.scaleLinear();function gt(){it=window.innerHeight,st=window.innerWidth,lt=st<=600,at=ut.node().offsetHeight,ct=ut.node().offsetWidth,tt=ct-Z-J,et=at-K-Q,dt.attr("width",ct).attr("height",at),ft.attr("transform",`translate(${Z}, ${K})`),nt=lt?tt/3-10:tt/3-30,ot=lt?et/2-10:et/2-50,ht.range([0,nt]),pt.range([ot,0]),function(){ft.selectAll(".line-group").remove(),ht.domain([new Date("2019-03-01"),new Date("2021-02-02")]);const t=d3.axisBottom(ht).tickSizeOuter(0).ticks(2);dt.append("linearGradient").attr("id","line-gradient").attr("gradientUnits","userSpaceOnUse").attr("x1",ht.range()[0]).attr("y1",pt.range()[0]).attr("x2",ht.range()[1]).attr("y2",pt.range()[1]).selectAll("stop").data([{offset:"0%",color:"#0E4FB3"},{offset:"100%",color:"#EDB95A"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),new Set(rt.map(t=>t.State));const e=d3.group(rt,t=>t.State),n=ft.selectAll(".line-group").data(e).enter().append("g").attr("class","line-group").attr("transform",(t,e)=>{const n=e<=2?0:1;return e<=2?`translate(${e*tt/3+10*e}, ${n*et/2})`:`translate(${(e-3)*tt/3+10*(e-3)}, ${n*et/2+10})`});n.append("text").attr("class","label").append("tspan").text(t=>t[0]),n.append("g").attr("class","x-axis").attr("transform",`translate(0, ${ot})`).call(t),n.append("g").attr("id",t=>t[0]+"-y-axis").attr("class","y-axis").attr("transform","translate(-5, 0)").selectAll(".tick").select("text"),n.append("path").datum(t=>t[1]).attr("stroke-width",3).attr("d",t=>{pt.domain(d3.extent(t,t=>t.Count));const e=t[0].State;return d3.select(`#${e}-y-axis`).call(d3.axisLeft(pt).tickFormat(d3.formatPrefix(".1",1e5)).tickSize(5).ticks(2)),d3.line().x(t=>ht(t.date)).y(t=>pt(t.Count)).curve(d3.curveMonotoneX)(t)}).attr("stroke","rgb(0,0,0)").attr("fill","none").attr("stroke-width",2)}()}var mt={init:function(){b(["birth_rates/[final]all_states_births.csv","birth_rates/[final]all_states_yoybirths.csv"]).then(t=>{t[0].forEach(t=>{t.Count=+t.Count,t.date=new Date(""+t.time)}),t[1].forEach(t=>{t.birth_yoy=+t.birth_yoy,t.date=new Date(`${t.Year}-${t.month}`)}),rt=t[0],gt()}).catch(console.error)},resize:gt};const vt=50,yt=40,bt=50,_t=20;let wt,xt,Et,Tt,kt,Ot=window.innerHeight,It=window.innerWidth,St=0,Mt=0,Rt=It<=600;const Lt=d3.select("#less-baby").select(".disparity-bar-charts"),At=Lt.select("svg"),Bt=At.select(".vis"),Ht=Bt.select("#race"),Ct=Ht.select(".bars"),Dt=Ht.select(".x-axis"),Pt=Bt.select("#income"),$t=Pt.select(".bars"),jt=Pt.select(".x-axis"),qt=d3.scaleBand().paddingInner(.1).paddingOuter(.2),Wt=d3.scaleLinear();function Ft(){Ot=window.innerHeight,It=window.innerWidth,Rt=It<=600,St=Lt.node().offsetHeight,Mt=Lt.node().offsetWidth,wt=Mt-_t-yt,xt=St-vt-bt,At.attr("width",Mt).attr("height",St),Bt.attr("transform",`translate(${_t}, ${vt})`),Et=wt/2-10,qt.range([0,Et]),Wt.range([xt,0]),function(){Wt.domain([0,d3.max(Tt,t=>t.value)]),Dt.attr("transform",`translate(0, ${xt})`),Pt.attr("transform",`translate(${Et+10}, 0)`),jt.attr("transform",`translate(0, ${xt})`),qt.domain(["white","black","hispanic"]);const t=Ct.selectAll(".race-bar").data(Tt);t.enter().append("rect").attr("class","race-bar").merge(t).attr("x",t=>qt(t.race_ethinicity)).attr("y",t=>Wt(t.value)).attr("width",qt.bandwidth()).attr("height",t=>xt-Wt(t.value)).attr("fill","#EDB95A"),Dt.call(d3.axisBottom(qt).tickSizeOuter(0)),qt.domain(["lower_income","higher_income"]);const e=$t.selectAll(".income-bar").data(kt);e.enter().append("rect").attr("class","income-bar").merge(e).attr("x",t=>qt(t.income)).attr("y",t=>Wt(t.value)).attr("width",qt.bandwidth()).attr("height",t=>xt-Wt(t.value)).attr("fill","#1583DF"),jt.call(d3.axisBottom(qt).tickSizeOuter(0))}()}const Nt="percentag_women_report_want_delay_childbearing_or_have_fewer_kids";var zt={init:function(){b(["percentage_race_delay_pregnancy.csv","percentage_income_delay_pregnancy.csv"]).then(t=>{t[0].forEach(t=>{t.value=+t[Nt]}),t[1].forEach(t=>{t.value=+t[Nt]}),Tt=t[0],kt=t[1],Ft()}).catch(console.error)},resize:Ft};const Vt=document.querySelectorAll(".story__container"),Ut=Vt.length,Yt=document.querySelector(".button__next"),Xt=document.querySelector(".button__previous");let Gt=0;function Kt(){Vt[Gt].classList.remove("active"),Gt<Ut-1?Gt++:Gt=0,Vt[Gt].classList.add("active"),console.log(Gt)}function Jt(){Vt[Gt].classList.remove("active"),Gt>0?Gt-=1:Gt=Ut-1,Vt[Gt].classList.add("active"),console.log(Gt)}Vt[Gt].classList.add("active");var Qt={init:function(){Yt.addEventListener("click",Kt),Xt.addEventListener("click",Jt)}};const Zt=d3.select("body");let te=0;function ee(){const t=Zt.node().offsetWidth;te!==t&&(te=t,d.resize(),G.resize(),mt.resize(),zt.resize())}function ne(){const t=Zt.select("header");if(t.classed("is-sticky")){const e=Zt.select("#slide__menu"),n=Zt.select(".header__toggle");!function(t,e,n,o,r,i){const s=n.selectAll(r).nodes(),a=s[0],l=s[s.length-1];t.on("click",()=>u(o,t,i)),e.on("click",()=>u(o,e,i)),n.on("keydown",e=>{const n=e.code,r=o.classed("is-visible");"Escape"===n&&!0===r&&(t.attr("aria-expanded",!1),t.node().focus(),o.classed("is-active",!1),o.classed("is-visible",!1),!0===i&&t.html(()=>c))}),d3.select(a).on("keydown",t=>{if(o.classed("is-visible")){const e=t.code,n=t.shiftKey;"Tab"===e&&!0===n&&(t.preventDefault(),l.focus())}}),d3.select(l).on("keydown",t=>{if(o.classed("is-visible")){const e=t.code,n=t.shiftKey;"Tab"===e&&!1===n&&(t.preventDefault(),a.focus())}})}(n,n,t,e,"a, button, .logo",!0)}}a(),Zt.classed("is-mobile",s.any()),window.addEventListener("resize",r()(ee,150)),ne(),d.init(),g.init(),v.init(),G.init(),mt.init(),zt.init(),Qt.init()}]);