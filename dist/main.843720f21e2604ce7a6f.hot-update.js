/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatepaymentwall"]("main",{

/***/ "./node_modules/rainbow-code/src/rainbow-node.js":
/*!*******************************************************!*\
  !*** ./node_modules/rainbow-code/src/rainbow-node.js ***!
  \*******************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #!/usr/bin/env node\\n| /* eslint-disable */\\n| var fs = require('fs');\");\n\n//# sourceURL=webpack://paymentwall/./node_modules/rainbow-code/src/rainbow-node.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n\r\n\r\nconsole.log('hi!');\r\nconst Initialize_TEXT = `import com.paymentwall.java.Base;\r\n\r\nBase.setAppKey(\"YOUR_APPLICATION_KEY\");\r\nBase.setSecretKey(\"YOUR_SECRET_KEY\");\r\nBase.setApiType(Base.API_GOODS);\r\n`;\r\nvar rainbow = __webpack_require__(/*! rainbow-code */ \"./node_modules/rainbow-code/src/rainbow-node.js\");\r\nvar highlighted = rainbow.colorSync('// So meta\\nrainbow.colorSync(\\'var helloWorld = true;\\');', 'javascript');\r\nconsole.log(highlighted);\r\n\r\nconst testText = document.querySelector('.test');\r\n\n\n//# sourceURL=webpack://paymentwall/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "a5df2b1a9fa628b25376"
/******/ 	})();
/******/ 	
/******/ }
);