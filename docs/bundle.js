!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),u=Object.prototype.toString,d=Math.max,f=Math.min,p=function(){return l.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=r.test(e);return a||i.test(e)?s(e.slice(2),a?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,i,s,a,c,l=0,u=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,l=t,s=e.apply(i,n)}function m(e){return l=e,a=setTimeout(w,t),u?g(e):s}function _(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=i}function w(){var e=p();if(_(e))return x(e);a=setTimeout(w,function(e){var n=t-(e-c);return v?f(n,i-(e-l)):n}(e))}function x(e){return a=void 0,b&&o?g(e):(o=r=void 0,s)}function k(){var e=p(),n=_(e);if(o=arguments,r=this,c=e,n){if(void 0===a)return m(c);if(v)return a=setTimeout(w,t),g(c)}return void 0===a&&(a=setTimeout(w,t)),s}return t=h(t)||0,y(n)&&(u=!!n.leading,i=(v="maxWait"in n)?d(h(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),k.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},k.flush=function(){return void 0===a?s:x(p())},k}}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);const i={android:()=>navigator.userAgent.match(/Android/i),blackberry:()=>navigator.userAgent.match(/BlackBerry/i),ios:()=>navigator.userAgent.match(/iPhone|iPad|iPod/i),opera:()=>navigator.userAgent.match(/Opera Mini/i),windows:()=>navigator.userAgent.match(/IEMobile/i),any:()=>i.android()||i.blackberry()||i.ios()||i.opera()||i.windows()};var s=i;function a(){(function(e,t=document){return[...t.querySelectorAll(e)]})("[target='_blank']").forEach(e=>e.setAttribute("rel","noopener"))}const c='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',l=d3.select("body");function u(e,t,n){const o=e.classed("is-visible");t.attr("aria-expanded",!o),e.classed("is-active",!o),e.classed("is-visible",!o),l.classed("modal-open",!o),!0===n&&(o?t.html(()=>c):t.html(()=>'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'))}var d={init:function(){console.log("Make something awesome!")},resize:function(){}};const f=[{image:"2018_02_stand-up",url:"2018/02/stand-up",hed:"The Structure of Stand-Up Comedy"},{image:"2018_04_birthday-paradox",url:"2018/04/birthday-paradox",hed:"The Birthday Paradox Experiment"},{image:"2018_11_boy-bands",url:"2018/11/boy-bands",hed:"Internet Boy Band Database"},{image:"2018_08_pockets",url:"2018/08/pockets",hed:"Women’s Pockets are Inferior"}];let p=null;function y(e){return`\n\t<a class='footer-recirc__article' href='https://pudding.cool/${e.url}' target='_blank' rel='noopener'>\n\t\t<img class='article__img' src='https://pudding.cool/common/assets/thumbnails/640/${e.image}.jpg' alt='${e.hed}'>\n\t\t<p class='article__headline'>${e.hed}</p>\n\t</a>\n\t`}var h={init:function(){!function(e){const t=new XMLHttpRequest,n="https://pudding.cool/assets/data/stories.json?v="+Date.now();t.open("GET",n,!0),t.onload=()=>{if(t.status>=200&&t.status<400){const n=JSON.parse(t.responseText);e(n)}else e(f)},t.onerror=()=>e(f),t.send()}(e=>{p=e,function(){const e=window.location.href,t=p.filter(t=>!e.includes(t.url)).slice(0,4).map(y).join("");d3.select(".pudding-footer .footer-recirc__articles").html(t)}()})}};d3.select("#bar-nervous"),document.getElementById("bar-talk");const v=document.querySelectorAll(".hopecovid__bars__container");var b={init:function(){for(let e=0;e<v.length;++e)v[e].addEventListener("mousemove",t=>{const n=v[e].querySelector(".hopecovid__bars__container__bar"),o=v[e].querySelector("p.reader"),r=t.pageX-n.offsetLeft;t.pageY,n.offsetTop;let i=Math.round(100*r/n.offsetWidth);i>=100?i="100%":i<=0?i="0%":i+="%",o.innerHTML=i+" of the days",o.style.left=i,n.querySelector("span.tick").style.left=i,n.querySelector("span.tick").style.opacity=1}),v[e].addEventListener("click",t=>{let n,o,r;const i=v[e].querySelector(".hopecovid__bars__container__bar"),s=v[e].querySelector("p.reader"),a=v[e].querySelector("p.answer"),c=t.pageX-i.offsetLeft;t.pageY,i.offsetTop;let l=Math.round(100*c/i.offsetWidth);l>=100?l="100%":l<=0?l="0%":l+="%",0==e?(n=50,o="progess-animation-nervous",r=`According to HOPE COVID-19 study, \n                most of its pregnant participants were bothered\n                by nervousness and anxiety for ${n}% or more of the days.`):(n=87,o="progess-animation-talk",r=`According to HOPE COVID-19 study,\n                ${n}% of the pregnant participants often \n                meet or talk with family or friends`),s.innerHTML=`Your answer: ${l} of the days`,a.innerHTML=r,s.style.left=l,i.querySelector("span.tick").style.left=l,i.querySelector("span.tick").style.opacity=1,i.querySelector("span.bar").classList.add(o),v[e].style.pointerEvents="none"})}};const g=d3.select("body");let m=0;function _(){const e=g.node().offsetWidth;m!==e&&(m=e,d.resize())}function w(){const e=g.select("header");if(e.classed("is-sticky")){const t=g.select("#slide__menu"),n=g.select(".header__toggle");!function(e,t,n,o,r,i){const s=n.selectAll(r).nodes(),a=s[0],l=s[s.length-1];e.on("click",()=>u(o,e,i)),t.on("click",()=>u(o,t,i)),n.on("keydown",t=>{const n=t.code,r=o.classed("is-visible");"Escape"===n&&!0===r&&(e.attr("aria-expanded",!1),e.node().focus(),o.classed("is-active",!1),o.classed("is-visible",!1),!0===i&&e.html(()=>c))}),d3.select(a).on("keydown",e=>{if(o.classed("is-visible")){const t=e.code,n=e.shiftKey;"Tab"===t&&!0===n&&(e.preventDefault(),l.focus())}}),d3.select(l).on("keydown",e=>{if(o.classed("is-visible")){const t=e.code,n=e.shiftKey;"Tab"===t&&!1===n&&(e.preventDefault(),a.focus())}})}(n,n,e,t,"a, button, .logo",!0)}}a(),g.classed("is-mobile",s.any()),window.addEventListener("resize",r()(_,150)),w(),d.init(),h.init(),b.init()}]);