/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        result = wait - timeSinceLastCall;\n\n    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = debounce;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash.debounce/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fallbackData = [\n  {\n    image: \"2018_02_stand-up\",\n    url: \"2018/02/stand-up\",\n    hed: \"The Structure of Stand-Up Comedy\"\n  },\n  {\n    image: \"2018_04_birthday-paradox\",\n    url: \"2018/04/birthday-paradox\",\n    hed: \"The Birthday Paradox Experiment\"\n  },\n  {\n    image: \"2018_11_boy-bands\",\n    url: \"2018/11/boy-bands\",\n    hed: \"Internet Boy Band Database\"\n  },\n  {\n    image: \"2018_08_pockets\",\n    url: \"2018/08/pockets\",\n    hed: \"Women’s Pockets are Inferior\"\n  }\n];\n\nlet storyData = null;\n\nfunction loadJS(src, cb) {\n  const ref = document.getElementsByTagName(\"script\")[0];\n  const script = document.createElement(\"script\");\n  script.src = src;\n  script.async = true;\n  ref.parentNode.insertBefore(script, ref);\n\n  if (cb && typeof cb === \"function\") {\n    script.onload = cb;\n  }\n\n  return script;\n}\n\nfunction loadStories(cb) {\n  const request = new XMLHttpRequest();\n  const v = Date.now();\n  const url = `https://pudding.cool/assets/data/stories.json?v=${v}`;\n  request.open(\"GET\", url, true);\n\n  request.onload = () => {\n    if (request.status >= 200 && request.status < 400) {\n      const data = JSON.parse(request.responseText);\n      cb(data);\n    } else cb(fallbackData);\n  };\n\n  request.onerror = () => cb(fallbackData);\n\n  request.send();\n}\n\nfunction createLink(d) {\n  return `\n\t<a class='footer-recirc__article' href='https://pudding.cool/${d.url}' target='_blank' rel='noopener'>\n\t\t<img class='article__img' src='https://pudding.cool/common/assets/thumbnails/640/${d.image}.jpg' alt='${d.hed}'>\n\t\t<p class='article__headline'>${d.hed}</p>\n\t</a>\n\t`;\n}\n\nfunction recircHTML() {\n  const url = window.location.href;\n  const html = storyData\n    .filter(d => !url.includes(d.url))\n    .slice(0, 4)\n    .map(createLink)\n    .join(\"\");\n\n  d3.select(\".pudding-footer .footer-recirc__articles\").html(html);\n}\n\nfunction init() {\n  loadStories(data => {\n    storyData = data;\n\n    recircHTML();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ init });\n\n\n//# sourceURL=webpack:///./src/js/footer.js?");

/***/ }),

/***/ "./src/js/graphic.js":
/*!***************************!*\
  !*** ./src/js/graphic.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global d3 */\nfunction resize() {}\n\nfunction init() {\n  console.log('Make something awesome!');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ init, resize });\n\n\n//# sourceURL=webpack:///./src/js/graphic.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.debounce */ \"./node_modules/lodash.debounce/index.js\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_is_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-mobile */ \"./src/js/utils/is-mobile.js\");\n/* harmony import */ var _utils_link_fix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/link-fix */ \"./src/js/utils/link-fix.js\");\n/* harmony import */ var _utils_modal_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/modal-a11y */ \"./src/js/utils/modal-a11y.js\");\n/* harmony import */ var _graphic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphic */ \"./src/js/graphic.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\n/* harmony import */ var _takeAGuessBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./takeAGuessBar */ \"./src/js/takeAGuessBar.js\");\n/* global d3 */\n\n\n\n\n\n\n\n\nconst $body = d3.select('body');\nlet previousWidth = 0;\n\nfunction resize() {\n  // only do resize on width changes, not height\n  // (remove the conditional if you want to trigger on height change)\n  const width = $body.node().offsetWidth;\n  if (previousWidth !== width) {\n    previousWidth = width;\n    _graphic__WEBPACK_IMPORTED_MODULE_4__[\"default\"].resize();\n  }\n}\n\nfunction setupStickyHeader() {\n  const $header = $body.select('header');\n  if ($header.classed('is-sticky')) {\n    const $menu = $body.select('#slide__menu');\n    const $toggle = $body.select('.header__toggle');\n\n    Object(_utils_modal_a11y__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($toggle, $toggle, $header, $menu, 'a, button, .logo', true);\n  }\n}\n\nfunction init() {\n  // adds rel=\"noopener\" to all target=\"_blank\" links\n  Object(_utils_link_fix__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  // add mobile class to body tag\n  $body.classed('is-mobile', _utils_is_mobile__WEBPACK_IMPORTED_MODULE_1__[\"default\"].any());\n  // setup resize event\n  window.addEventListener('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(resize, 150));\n  // setup sticky header menu\n  setupStickyHeader();\n  // kick off graphic code\n  _graphic__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n  // load footer stories\n  _footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"].init();\n  _takeAGuessBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init();\n}\n\ninit();\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/takeAGuessBar.js":
/*!*********************************!*\
  !*** ./src/js/takeAGuessBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst $barNervous = d3.select('#bar-nervous');\nconst $barTalk = document.getElementById('bar-talk');\nconst $barContainers = document.querySelectorAll('.hopecovid__bars__container');\n\nfunction init() {\n    for (let i = 0; i < $barContainers.length; ++i) {\n        $barContainers[i]\n            .addEventListener('mousemove', e => {\n                const $bar = $barContainers[i].querySelector('.hopecovid__bars__container__bar')\n                const $readerText = $barContainers[i].querySelector('p.reader')\n\n                const x = e.pageX - $bar.offsetLeft, // or e.offsetX (less support, though)\n                    y = e.pageY - $bar.offsetTop; // or e.offsetY\n                let clickedValue = Math.round(x * 100 / $bar.offsetWidth)\n                if (clickedValue >= 100) {\n                    clickedValue = '100%'\n                } else if (clickedValue <= 0) {\n                    clickedValue = '0%'\n                } else {\n                    clickedValue = clickedValue + '%'\n                }\n\n                $readerText.innerHTML = clickedValue + \" of the days\";\n                $readerText.style.left = clickedValue;\n                $bar.querySelector('span.tick').style.left = clickedValue;\n                $bar.querySelector('span.tick').style.opacity = 1;\n            })\n        $barContainers[i].addEventListener('click', e => {\n            let barValue, barClass, answerText;\n\n            const $bar = $barContainers[i].querySelector('.hopecovid__bars__container__bar')\n            const $readerText = $barContainers[i].querySelector('p.reader')\n            const $answerText = $barContainers[i].querySelector('p.answer')\n            const x = e.pageX - $bar.offsetLeft, // or e.offsetX (less support, though)\n                y = e.pageY - $bar.offsetTop; // or e.offsetY\n            let clickedValue = Math.round(x * 100 / $bar.offsetWidth)\n\n            if (clickedValue >= 100) {\n                clickedValue = '100%'\n            } else if (clickedValue <= 0) {\n                clickedValue = '0%'\n            } else {\n                clickedValue = clickedValue + '%'\n            }\n\n            if (i == 0) {\n                barValue = 50;\n                barClass = 'progess-animation-nervous';\n                answerText = `According to HOPE COVID-19 study, \n                most of its pregnant participants were bothered\n                by nervousness and anxiety for ${barValue}% or more of the days.`\n            } else {\n                barValue = 87;\n                barClass = 'progess-animation-talk';\n                answerText = `According to HOPE COVID-19 study,\n                ${barValue}% of the pregnant participants often \n                meet or talk with family or friends`\n            }\n            $readerText.innerHTML = `Your answer: ${clickedValue} of the days`\n            $answerText.innerHTML = answerText;\n\n            $readerText.style.left = clickedValue;\n            $bar.querySelector('span.tick').style.left = clickedValue;\n            $bar.querySelector('span.tick').style.opacity = 1;\n            $bar.querySelector('span.bar').classList.add(barClass);\n\n            $barContainers[i].style.pointerEvents = \"none\";\n\n        })\n    }\n\n    // const $bar = $barContainers[i].querySelector('.hopecovid__bars__container__bar')\n    // const $text = $barContainers[i].querySelector('p')\n    // $text.innerHTML = clickedValue\n    // $barTalk.addEventListener('click', e => {\n    //     console.log($barTalk.offsetLeft)\n    //     const x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)\n    //         y = e.pageY - this.offsetTop, // or e.offsetY\n    //         clickedValue = x * this.max / this.offsetWidth\n\n    // })\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    init\n});\n\n//# sourceURL=webpack:///./src/js/takeAGuessBar.js?");

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/*! exports provided: select, selectAll, find, removeClass, addClass, hasClass, jumpTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectAll\", function() { return selectAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return find; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jumpTo\", function() { return jumpTo; });\n// DOM helper functions\n\n// public\nfunction select(selector) {\n  return document.querySelector(selector);\n}\n\nfunction selectAll(selector, parent = document) {\n  return [...parent.querySelectorAll(selector)];\n}\n\nfunction find(el, selector) {\n  return [...el.querySelectorAll(selector)];\n}\n\nfunction removeClass(el, className) {\n  if (el.classList) el.classList.remove(className);\n  else\n    el.className = el.className.replace(\n      new RegExp(`(^|\\\\b)${className.split(' ').join('|')}(\\\\b|$)`, 'gi'),\n      ' '\n    );\n}\n\nfunction addClass(el, className) {\n  if (el.classList) el.classList.add(className);\n  else el.className = `${el.className} ${className}`;\n}\n\nfunction hasClass(el, className) {\n  if (el.classList) return el.classList.contains(className);\n  return new RegExp(`(^| )${className}( |$)`, 'gi').test(el.className);\n}\n\nfunction jumpTo(el, offset) {\n  offset = offset || 0;\n  const top = el.getBoundingClientRect().top + offset;\n  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n  const destY = scrollTop + top;\n  window.scrollTo(0, destY);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/utils/dom.js?");

/***/ }),

/***/ "./src/js/utils/is-mobile.js":
/*!***********************************!*\
  !*** ./src/js/utils/is-mobile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// device sniffing for mobile\n\nconst isMobile = {\n\tandroid: () => navigator.userAgent.match(/Android/i),\n\n\tblackberry: () => navigator.userAgent.match(/BlackBerry/i),\n\n\tios: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),\n\n\topera: () => navigator.userAgent.match(/Opera Mini/i),\n\n\twindows: () => navigator.userAgent.match(/IEMobile/i),\n\n\tany: () => (\n\t\tisMobile.android() ||\n\t\tisMobile.blackberry() ||\n\t\tisMobile.ios() ||\n\t\tisMobile.opera() ||\n\t\tisMobile.windows()\n\t),\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isMobile);\n\n\n//# sourceURL=webpack:///./src/js/utils/is-mobile.js?");

/***/ }),

/***/ "./src/js/utils/link-fix.js":
/*!**********************************!*\
  !*** ./src/js/utils/link-fix.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return linkFix; });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/utils/dom.js\");\n\n/**\n * Fixes target blanks links\n */\n\nfunction linkFix() {\n  const links = Object(_dom__WEBPACK_IMPORTED_MODULE_0__[\"selectAll\"])(\"[target='_blank']\");\n  links.forEach(link => link.setAttribute(\"rel\", \"noopener\"));\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/link-fix.js?");

/***/ }),

/***/ "./src/js/utils/modal-a11y.js":
/*!************************************!*\
  !*** ./src/js/utils/modal-a11y.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setup; });\n/**\n * Improves keyboard accessibility of modal windows\n * Modal windows are now completely keyboard accessible, but only when visible\n * Prevents tab accessing hidden modal content\n * Prevents tabbing out of modal window if open (but escape key can be used to close modal window at any time)\n * @param {selection} $openEl - selection of element that when clicked opens the modal\n * @param {selection} $closeEl - selection of element that when clicked closes the modal\n * @param {selection} $containerEl - selection of element that contains the modal and any other elements you may want to receive tab focus\n * @param {selection} $modalEl - selection of the modal itself\n * @param {string} focusable - comma separated list of classes, ids, or DOM elements that should receive focus in a modal\n * @param {boolean} hamburger - whether or not the toggle switch represents a hamburger menu (will swap icons if true)\n * @returns {array} array of unique values\n *\n * @example\n * import modalSetup from './utils/modal-a11y';\n * const $openEl = d3.select('.open')\n * const $closeEl = d3.select('.close')\n * const $containerEl = d3.select('.container')\n * const $modalEl = d3.select('.modal')\n * const focusable = 'a, .logo'\n * modalSetup($openEl, $closeEl, $containerEl, $modalEl, focusable, false)\n */\n\nconst hamburgerSVG = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-menu\"><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line></svg>`;\nconst xSVG = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg>`;\nconst $body = d3.select('body')\n\nfunction handleOpenClose($modalEl, $toggleEl, hamburger) {\n  // see if menu is already opened\n  const opened = $modalEl.classed('is-visible');\n\n  // update the aria attribute and the actual class of the nav\n  $toggleEl.attr('aria-expanded', !opened);\n  $modalEl.classed('is-active', !opened);\n  $modalEl.classed('is-visible', !opened);\n\n  // set an open class on the body to prevent scrolling \n  $body.classed('modal-open', !opened)\n\n  // if the hamburger argument is set to true, switch between hamburger & x icon\n  if (hamburger === true) {\n    if (opened) {\n      $toggleEl.html(() => hamburgerSVG);\n    } else $toggleEl.html(() => xSVG);\n  }\n}\n\nfunction setup(\n  $openEl,\n  $closeEl,\n  $containerEl,\n  $modalEl,\n  focusable,\n  hamburger\n) {\n\n  // find first and last focusable elements in the modal\n  const $focusableInModal = $containerEl.selectAll(focusable).nodes();\n  const $firstFocus = $focusableInModal[0];\n  const $lastFocus = $focusableInModal[$focusableInModal.length - 1];\n\n  // if you click on the element that triggers the modal to open\n  // open (or close) the modal\n  $openEl.on('click', () => handleOpenClose($modalEl, $openEl, hamburger));\n  $closeEl.on('click', () => handleOpenClose($modalEl, $closeEl, hamburger));\n\n  // listen for escape key press on the modal element\n  $containerEl.on('keydown', event => {\n    const pressed = event.code;\n    const opened = $modalEl.classed('is-visible');\n    if (pressed === 'Escape' && opened === true) {\n      // close menu\n      $openEl.attr('aria-expanded', false);\n      // switch focus back to element that opened the modal\n      $openEl.node().focus();\n      $modalEl.classed('is-active', false);\n      $modalEl.classed('is-visible', false);\n\n      if (hamburger === true) {\n        $openEl.html(() => hamburgerSVG);\n      }\n    }\n  });\n\n  // if focused on first focusable element when menu is open\n  // and moving up, go to last focusable element\n  // if on last focusable element and tab is pressed, go back to first\n  d3.select($firstFocus).on('keydown', event => {\n    const opened = $modalEl.classed('is-visible');\n    if (opened) {\n      const pressed = event.code;\n      const shift = event.shiftKey;\n\n      if (pressed === 'Tab' && shift === true) {\n        // prevent default behavior\n        event.preventDefault();\n\n        // focus on the last element\n        $lastFocus.focus();\n      }\n    }\n  });\n\n  d3.select($lastFocus).on('keydown', event => {\n    const opened = $modalEl.classed('is-visible');\n    if (opened) {\n      const pressed = event.code;\n      const shift = event.shiftKey;\n\n      // if tab is pressed on last element, go back to first\n      if (pressed === 'Tab' && shift === false) {\n        // prevent default behavior\n        event.preventDefault();\n\n        // focus on the first element\n        $firstFocus.focus();\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/utils/modal-a11y.js?");

/***/ })

/******/ });