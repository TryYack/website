module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/features.js":
/*!********************************!*\
  !*** ./components/features.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Features; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/joduplessis/Work/Yack/website/components/features.js";


function Features(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1069835374",
    __self: this
  }, ".features.jsx-1069835374{background-color:#08111d;background-image:url(../static/images/pattern.png);background-size:1000px;background-repeat:no-repeat;background-position:center center;padding:50px;padding-bottom:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.features.jsx-1069835374 h1.jsx-1069835374{font-size:40px;width:40%;margin-right:auto;margin-left:auto;text-align:center;color:#EFF7FC;font-family:'hk_groteskmedium',helvetica;}.features.jsx-1069835374 h2.jsx-1069835374{font-size:20px;margin-top:20px;width:50%;margin-right:auto;margin-left:auto;font-family:'hk_grotesklight',helvetica;text-align:center;color:#EFF7FC;line-height:30px;}.features.jsx-1069835374 h3.jsx-1069835374{font-size:15px;margin-top:50px;width:50%;margin-right:auto;margin-left:auto;font-family:'hk_grotesklight',helvetica;text-align:center;color:#007AF5;line-height:25px;}.features.jsx-1069835374 img.jsx-1069835374{display:block;border-radius:10px;width:75%;margin-top:50px;box-shadow:0px 0px 100px 20px rgba(0,47,110,0.25);}@media only screen and (max-width:1000px){.hero.jsx-1069835374{background-image:none;}.features.jsx-1069835374 h1.jsx-1069835374{width:100%;}.features.jsx-1069835374 h2.jsx-1069835374{width:100%;}.features.jsx-1069835374 h3.jsx-1069835374{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9jb21wb25lbnRzL2ZlYXR1cmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtrQixBQUdvQyxBQWVWLEFBVUEsQUFZQSxBQVlELEFBU1UsQUFJWCxBQUlBLEFBSUEsV0FQYixBQUlBLEFBSUEsR0FyQm1CLENBbENULEFBVU0sQUFZQSxPQXFCaEIsR0ExRG1ELEFBZ0JqQyxNQVVSLEFBWUEsRUFZQSxRQXZCUSxBQVlBLEVBdEJELEFBa0NELGdCQXZCQyxBQVlBLEFBWWlDLENBbENoQyxnQkFqQkssQUE0QmtCLEFBWUEsRUF0QjNCLGNBQzRCLE9BbEJkLFVBbUQ5QixPQXZCb0IsQUFZQSxXQXZDZ0IsTUFrQnBDLENBVWdCLEFBWUEsY0FYRyxBQVlBLGFBeENKLElBNkJmLEFBWUEsU0F4Q3VCLHFCQUNSLDBFQUNTLDhFQUNDLG1HQUNGLDRFQUNGLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvam9kdXBsZXNzaXMvV29yay9ZYWNrL3dlYnNpdGUvY29tcG9uZW50cy9mZWF0dXJlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZXMocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mZWF0dXJlcyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MTExZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vc3RhdGljL2ltYWdlcy9wYXR0ZXJuLnBuZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlcyBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogI0VGRjdGQztcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2ttZWRpdW0nLCBoZWx2ZXRpY2E7XG4gICAgICAgIH1cblxuICAgICAgICAuZmVhdHVyZXMgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnaGtfZ3JvdGVza2xpZ2h0JywgaGVsdmV0aWNhO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogI0VGRjdGQztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWF0dXJlcyBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdoa19ncm90ZXNrbGlnaHQnLCBoZWx2ZXRpY2E7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjMDA3QUY1O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZlYXR1cmVzIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCAyMHB4IHJnYmEoMCw0NywxMTAsMC4yNSk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgIC5oZXJvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZlYXR1cmVzIGgxIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mZWF0dXJlcyBoMiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmVhdHVyZXMgaDMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIEVtcG93ZXIgeW91ciB0ZWFtXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBDaGFubmVscywgcHJpdmF0ZSBtZXNzYWdpbmcsIHNlY3VyaXR5LCB0ZWFtIG1hbmFnZW1lbnQsXG4gICAgICAgICAgbWFya2Rvd24gc3VwcG9ydCwgcmVwbGllcywgcmVhY3Rpb25zLCBhdHRhY2htZW50cywgYW4gYXBwIHN0b3JlIC0gaXQncyBhbGwgaGVyZS5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL3NjcmVlbnNob3QucG5nXCIgLz5cbiAgICAgICAgPGgzPlxuICAgICAgICAgIFdlIHBsYW4gb24gcm9sbGluZyBvdXQgZXZlbiBtb3JlIHRvb2xzIHRvIGtlZXAgeW91ciB0ZWFtIHByb2R1Y3RpdmUuXG4gICAgICAgICAgRm9yIG1vcmUgaW5mb3JtYXRpb24gLSBmb2xsb3cgdXMgb24gc29jaWFsIG1lZGlhIG9yIHNpZ24gdXAgdG8gb3VyIG1haWxpbmcgbGlzdCAmIHdlJ2xsIGxldCB5b3Uga25vdyBhcyBzb29uIGFzIHRoZXkncmUgYXZhaWxhYmxlLlxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Yack/website/components/features.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1069835374" + " " + "features",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1069835374",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Empower your team"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1069835374",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Channels, private messaging, security, team management, markdown support, replies, reactions, attachments, an app store - it's all here."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/images/screenshot.png",
    className: "jsx-1069835374",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1069835374",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "We plan on rolling out even more tools to keep your team productive. For more information - follow us on social media or sign up to our mailing list & we'll let you know as soon as they're available.")));
}

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/joduplessis/Work/Yack/website/components/footer.js";


function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1511469086",
    __self: this
  }, ".footer.jsx-1511469086{background-color:#0f1c2e;padding:50px;}.footer.jsx-1511469086 p.jsx-1511469086{font-size:15px;width:50%;margin-right:auto;margin-left:auto;font-family:'hk_grotesklight',helvetica;text-align:center;color:#8492A6;line-height:25px;}.footer.jsx-1511469086 ul.jsx-1511469086{list-style-type:none;margin:0px;padding:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1511469086 ul.jsx-1511469086 li.jsx-1511469086{list-style-type:none;margin:10px;padding:0px;}.footer.jsx-1511469086 ul.jsx-1511469086 li.jsx-1511469086 a.jsx-1511469086{-webkit-transition:opacity 0.25s linear;transition:opacity 0.25s linear;opacity:1;}.footer.jsx-1511469086 ul.jsx-1511469086 li.jsx-1511469086 a.jsx-1511469086:hover{opacity:0.75;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9jb21wb25lbnRzL2Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLa0IsQUFHb0MsQUFLVixBQVdNLEFBWUEsQUFNVyxBQUtuQixhQUNmLEVBbENZLE1BV0MsQUFZQyxJQTVCQyxBQU1LLE9BV04sQ0FZQSxLQTVCZCxLQU1tQixDQVdKLENBWWYsZUF0QjJDLFlBMEIvQixVQUNaLGtCQTFCb0Isa0JBQ0osQUFTSyxjQVJGLGlCQUNuQixzQ0FReUIsbUdBQ0YsNEVBQ0YsNkZBRXJCIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9jb21wb25lbnRzL2Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxYzJlO1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2tsaWdodCcsIGhlbHZldGljYTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM4NDkyQTY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB1bCBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHVsIGxpIGEge1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgbGluZWFyO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHVsIGxpIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgWWFjayAmY29weTsgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICAgICAgICA8L3A+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ZYWNrTGFic1wiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiLi4vc3RhdGljL2ljb25zL2dpdGh1Yi5zdmdcIiBib3JkZXI9XCIwXCIgaGVpZ2h0PVwiMjBcIiAvPjwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS95YWNraHFcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIi4uL3N0YXRpYy9pY29ucy90d2l0dGVyLnN2Z1wiIGJvcmRlcj1cIjBcIiBoZWlnaHQ9XCIyMFwiIC8+PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Yack/website/components/footer.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1511469086" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1511469086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Yack \xA9 All rights reserved"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1511469086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1511469086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/YackLabs",
    target: "_blank",
    className: "jsx-1511469086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/icons/github.svg",
    border: "0",
    height: "20",
    className: "jsx-1511469086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1511469086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/yackhq",
    target: "_blank",
    className: "jsx-1511469086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "../static/icons/twitter.svg",
    border: "0",
    height: "20",
    className: "jsx-1511469086",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))))));
}

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/joduplessis/Work/Yack/website/components/header.js";


function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1128050860",
    __self: this
  }, ".header.jsx-1128050860{padding-top:50px;padding-bottom:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;margin-right:auto;width:80%;}.header.jsx-1128050860 .logo.jsx-1128050860{position:relative;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:auto;-webkit-text-decoration:none !important;text-decoration:none !important;}.header.jsx-1128050860 .logo.jsx-1128050860 a.jsx-1128050860{-webkit-text-decoration:none !important;text-decoration:none !important;}.header.jsx-1128050860 .logo.jsx-1128050860 .text.jsx-1128050860{padding-left:5px;position:relative;bottom:2px;color:#007af5;font-size:22px;font-weight:400;font-family:'hk_groteskmedium',helvetica;-webkit-text-decoration:none !important;text-decoration:none !important;}.header.jsx-1128050860 .button.jsx-1128050860{color:#202529;background-color:white;font-size:16px;cursor:pointer;font-weight:400;font-family:'hk_grotesksemibold',helvetica;border-radius:5px;border:none;padding:15px 30px 15px 0px;position:relative;margin-left:5px;-webkit-transition:opacity 0.25s linear;transition:opacity 0.25s linear;opacity:1;-webkit-text-decoration:none;text-decoration:none;}.header.jsx-1128050860 .button.jsx-1128050860:hover{opacity:0.75;}.header.jsx-1128050860 .button.solid.jsx-1128050860{border:2px solid #202529;padding:15px 20px 15px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9jb21wb25lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLa0IsQUFHNEIsQUFhQyxBQVljLEFBSWYsQUFXSCxBQWlCRCxBQUlZLGFBSDNCLENBakJ5QixHQXhDSCxBQTZCRixDQWhCTCxPQWdEZSxNQS9DZixJQWdCRixFQTdCRSxBQXdDRSxTQVZELE1BV0MsQ0FvQmpCLE9BOUJpQixPQVdDLEtBbEJsQixHQVFrQixRQVc0QixRQVZGLGNBbkJ2QixNQWJBLGVBMkNELE1BVmMsWUFXcEIsWUFDZSxrQkEvQkEsTUFiSixHQTZDTCxrQkFDRixHQWJsQixhQWNrQyw4REE5Q1gsQUFhQSxVQWtDWCxVQUNXLGtEQUN2QixNQWhEcUIsQUFhQSw2RkFaRixBQWFDLGlCQVpBLENBYWMsaUJBWnRCLFVBQ1osNkNBWUEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvWWFjay93ZWJzaXRlL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIgLmxvZ28ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciAubG9nbyBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIgLmxvZ28gLnRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgICBjb2xvcjogIzAwN2FmNTtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2ttZWRpdW0nLCBoZWx2ZXRpY2E7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIC5idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiAjMjAyNTI5O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2tzZW1pYm9sZCcsIGhlbHZldGljYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGxpbmVhcjtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIgLmJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIgLmJ1dHRvbi5zb2xpZCB7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzIwMjUyOTtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly95YWNrLW1hcmtldGluZy5zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9sb2dvLnN2Z1wiIGhlaWdodD1cIjIwXCIgYWx0PVwiWWFja1wiLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgeWFja1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGEgaHJlZj1cIi90ZXJtc29mdXNlXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+VGVybXMgb2YgdXNlPC9hPlxuICAgICAgICA8YSBocmVmPVwiL3ByaXZhY3lwb2xpY3lcIiBjbGFzc05hbWU9XCJidXR0b25cIj5Qcml2YWN5IHBvbGljeTwvYT5cblxuICAgICAgICB7LypcbiAgICAgICAgICBGb3IgbGF0ZXI6XG4gICAgICAgICAgPGJ1dHRvbj5Ib21lPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj5Ub3VyPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj5QcmljaW5nPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj5EZXZlbG9wZXJzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj5TdXBwb3J0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzb2xpZFwiPlNpZ24gaW48L2J1dHRvbj5cbiAgICAgICAgKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Yack/website/components/header.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1128050860" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-1128050860" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://yack-marketing.s3-us-west-2.amazonaws.com/logo.svg",
    height: "20",
    alt: "Yack",
    className: "jsx-1128050860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1128050860" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "yack")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/termsofuse",
    className: "jsx-1128050860" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Terms of use"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/privacypolicy",
    className: "jsx-1128050860" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Privacy policy")));
}

/***/ }),

/***/ "./components/hero.js":
/*!****************************!*\
  !*** ./components/hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/subscribe */ "./components/subscribe.js");
var _jsxFileName = "/Users/joduplessis/Work/Yack/website/components/hero.js";



function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2926171080",
    __self: this
  }, ".hero.jsx-2926171080{margin:0px;padding:0px;padding-bottom:50px;margin-left:auto;margin-right:auto;width:80%;background-color:white;background-image:url(../static/images/hero.jpg);background-size:55%;background-repeat:no-repeat;background-position:right top;}.hero.jsx-2926171080 h1.jsx-2926171080{font-size:80px;color:#202529;font-weight:900;font-family:'hk_groteskbold',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,'hk_groteskblack',helvetica;line-height:80px;}.hero.jsx-2926171080 h2.jsx-2926171080{margin-top:25px;font-size:25px;color:#202529;line-height:40px;font-weight:300;width:40%;font-family:'hk_grotesklight',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,'hk_grotesklight',helvetica;}.hero.jsx-2926171080 p.jsx-2926171080{font-size:14px;color:#808080;width:40%;font-family:'hk_grotesklight',helvetica;}@media only screen and (max-width:1000px){.hero.jsx-2926171080{background-image:none;}.hero.jsx-2926171080 h1.jsx-2926171080{font-size:50px;}.hero.jsx-2926171080 h2.jsx-2926171080{width:100%;}.hero.jsx-2926171080 p.jsx-2926171080{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9jb21wb25lbnRzL2hlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtCLEFBR3NCLEFBY0ksQUFRQyxBQVVELEFBUVMsQUFJUCxBQUlKLEFBSUEsV0FuREQsQUFnRFosQUFJQSxJQXRDYyxBQWtCQSxBQVlkLENBdEJlLE1Ba0JmLENBdkNvQixNQWNKLEFBa0JOLEVBVkksUUFXMkIsSUFoQ3hCLEVBY3VILEFBUXZILGVBckJDLEVBc0JGLGdCQXJCTixBQXNCQSxDQVNaLFNBOUJ5QixBQXNCa0gsdUJBckJ6RixnREFDNUIsY0FVSCxNQVRXLFdBVTlCLGlCQVRnQyxVQW1CaEMsb0JBbEJBIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9jb21wb25lbnRzL2hlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU3Vic2NyaWJlIGZyb20gJy4uL2NvbXBvbmVudHMvc3Vic2NyaWJlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9zdGF0aWMvaW1hZ2VzL2hlcm8uanBnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDU1JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgY29sb3I6ICMyMDI1Mjk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2tib2xkJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdoa19ncm90ZXNrYmxhY2snLCBoZWx2ZXRpY2E7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVybyBoMiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgY29sb3I6ICMyMDI1Mjk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnaGtfZ3JvdGVza2xpZ2h0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdoa19ncm90ZXNrbGlnaHQnLCBoZWx2ZXRpY2E7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVybyBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2tsaWdodCcsIGhlbHZldGljYTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVybyBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlcm8gaDIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlcm8gcCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIEEgaGFja2FibGUgdGVhbTxici8+XG4gICAgICAgICAgY29sbGFib3JhdGlvbjxici8+XG4gICAgICAgICAgcGxhdGZvcm1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgey8qXG4gICAgICAgICAgSWRlYTpcbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICBDb21tdW5pY2F0aW9uPGJyLz5cbiAgICAgICAgICAgICYgY29sbGFib3JhdGlvbjxici8+XG4gICAgICAgICAgICBmb3IgdGVhbXNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAqL31cbiAgICAgICAgPGgyPlxuICAgICAgICAgIFlhY2sgaXMgYSBtZXNzYWdpbmcgcGxhdGZvcm1cbiAgICAgICAgICB0aGF0IGhlbHBzIHlvdXIgdGVhbSBnZXQgdGhpbmdzIGRvbmUgLSBsaWtlIHRoZXlcbiAgICAgICAgICBoYWQgc3VwZXJwb3dlcnMuXG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPFN1YnNjcmliZSAvPlxuXG4gICAgICAgIDxwPlxuICAgICAgICAgIFlhY2sgaXMgY3VycmVudGx5IGluIGRldmVsb3BtZW50LCBidXQgd2UncmUgYWxtb3N0IHJlYWR5IHRvIGxhdW5jaC5cbiAgICAgICAgICBTaWduIHVwIHRvIG91ciBtYWlsaW5nIGFuZCB3ZeKAmWxsIGxldCB5b3Uga25vdyB3aGVuIHlvdSBjYW4gc2lnbiB1cC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Yack/website/components/hero.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2926171080" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2926171080",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "A hackable team", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2926171080",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), "collaboration", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2926171080",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), "platform"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2926171080",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Yack is a messaging platform that helps your team get things done - like they had superpowers."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_subscribe__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2926171080",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Yack is currently in development, but we're almost ready to launch. Sign up to our mailing and we\u2019ll let you know when you can sign up.")));
}

/***/ }),

/***/ "./components/subscribe.js":
/*!*********************************!*\
  !*** ./components/subscribe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Subscribe; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/joduplessis/Work/Yack/website/components/subscribe.js";



function Subscribe(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2184623495",
    __self: this
  }, ".subscribe{margin:0px;padding:0px;background:#FFFFFF;margin-top:30px;margin-bottom:30px;width:500px;position:relative;}@media only screen and (max-width:1000px){.subscribe{width:500px;}}.subscribe div{font-family:'hk_groteskmedium',helvetica;position:relative;}.subscribe input[type=\"email\"]{border:0px;padding:20px;height:75px;font-size:18px;color:#333;font-family:'hk_groteskmedium',helvetica;background:transparent;outline:none;width:500px;border:5px solid #F1F1F1;box-sizing:border-box;border-radius:40px;margin-top:10px;}.subscribe button{background:#F1F1F1;border-radius:0px 33px 33px 0px;width:150px;height:75px;border:none;font-size:18px;font-family:'hk_groteskmedium',helvetica;color:#0D0D0D;-webkit-transition:opacity 0.25s linear;transition:opacity 0.25s linear;opacity:1;cursor:pointer;position:relative;left:350px;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);outline:none;}.subscribe button:hover{opacity:0.75;}@media only screen and (max-width:500px){.subscribe,.subscribe input[type=\"email\"]{width:300px;}.subscribe button{left:150px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9jb21wb25lbnRzL3N1YnNjcmliZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNeUIsQUFHc0IsQUFXRyxBQUs0QixBQUsvQixBQWdCUSxBQWtCTixBQU1DLEFBSUQsV0FoRUQsQUFxQkMsQUE0Q2IsQ0F0REEsQUFrREEsQ0FORixNQWxCa0MsSUFwQ2IsQ0FxQlAsWUFDRyxLQVBHLENBZEYsU0FzQkwsQUFjQyxPQW5DTyxDQWNyQixHQVE0QyxDQWM5QixZQUNBLEVBcENBLFVBcUNHLEVBcENHLGFBcUN3QixDQWhCbkIsSUFwQnpCLG1CQXFCZSxhQUNELElBZUUsUUFkVyxNQWVPLG1CQWRWLHNCQUNILG1CQUNILFlBYU4sSUFaWixNQWFpQixlQUNHLGtCQUNQLFdBQ2lCLGdHQUNmLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvWWFjay93ZWJzaXRlL2NvbXBvbmVudHMvc3Vic2NyaWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tICdyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJzY3JpYmUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAuc3Vic2NyaWJlIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgLnN1YnNjcmliZSB7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZSBkaXYge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnaGtfZ3JvdGVza21lZGl1bScsIGhlbHZldGljYTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaWJlIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XG4gICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnaGtfZ3JvdGVza21lZGl1bScsIGhlbHZldGljYTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjRjFGMUYxO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZSBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDMzcHggMzNweCAwcHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnaGtfZ3JvdGVza21lZGl1bScsIGhlbHZldGljYTtcbiAgICAgICAgICBjb2xvcjogIzBEMEQwRDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGxpbmVhcjtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbGVmdDogMzUwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZSBidXR0b246aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgLnN1YnNjcmliZSxcbiAgICAgICAgICAuc3Vic2NyaWJlIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1YnNjcmliZSBidXR0b24ge1xuICAgICAgICAgICAgbGVmdDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaWJlXCI+XG4gICAgICAgIDxNYWlsY2hpbXBTdWJzY3JpYmVcbiAgICAgICAgICB1cmw9XCJodHRwczovL2pvZHVwbGVzc2lzLnVzMTkubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9ZTBmZjg4NjA4ZjY4MThiOWM3ZGIyMDRiYyZhbXA7aWQ9YWQyMThiZWExY1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Yack/website/components/subscribe.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2184623495" + " " + "subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2___default.a, {
    url: "https://joduplessis.us19.list-manage.com/subscribe/post?u=e0ff88608f6818b9c7db204bc&id=ad218bea1c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })));
}

/***/ }),

/***/ "./pages/privacypolicy.js":
/*!********************************!*\
  !*** ./pages/privacypolicy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TermsOfUse; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/features */ "./components/features.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hero */ "./components/hero.js");
var _jsxFileName = "/Users/joduplessis/Work/Yack/website/pages/privacypolicy.js";







function TermsOfUse(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Yack - Give your team superpowers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "/static/font/stylesheet.css",
    rel: "stylesheet",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "371213600",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{padding-top:50px;padding-bottom:30px;margin-left:auto;margin-right:auto;width:80%;}.container h1{font-size:80px;color:#202529;font-weight:900;font-family:'hk_groteskbold',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,'hk_groteskblack',helvetica;line-height:80px;margin-bottom:20px;}.container h2{margin-top:25px;font-size:25px;color:#202529;line-height:40px;font-weight:300;width:40%;font-family:'hk_grotesklight',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,'hk_grotesklight',helvetica;}.container a{color:#10ACF3;}.container p,.container li{font-size:16px;color:#808080;font-family:'hk_grotesklight',helvetica;padding-bottom:10px;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9wYWdlcy9wcml2YWN5cG9saWN5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCeUIsQUFHc0IsQUFLTSxBQUlBLEFBUUYsQUFTQyxBQVVGLEFBSUMsV0F2Q0gsR0FvQ2QsQ0FuQmdCLEFBdUJBLENBZEMsQ0FyQmpCLEFBSXNCLE1BUnRCLE1BaUJrQixBQXVCeUIsRUFkM0IsTUFqQkcsUUFTdUgsQUFTdkgsU0FqQkMsUUFrQkYsT0FhSSxHQTlCVixNQWtCQSxJQWpCWixNQWtCMkksQ0FZekgsZ0JBQ2xCLG9FQXhCbUIsaUJBQ0UsbUJBQ3JCLFFBVUEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvWWFjay93ZWJzaXRlL3BhZ2VzL3ByaXZhY3lwb2xpY3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRmVhdHVyZXMgZnJvbSAnLi4vY29tcG9uZW50cy9mZWF0dXJlcydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXJtc09mVXNlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5ZYWNrIC0gR2l2ZSB5b3VyIHRlYW0gc3VwZXJwb3dlcnM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ZvbnQvc3R5bGVzaGVldC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgY29sb3I6ICMyMDI1Mjk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2tib2xkJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdoa19ncm90ZXNrYmxhY2snLCBoZWx2ZXRpY2E7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMjAyNTI5O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2tsaWdodCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnaGtfZ3JvdGVza2xpZ2h0JywgaGVsdmV0aWNhO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciBhIHtcbiAgICAgICAgICBjb2xvcjogIzEwQUNGMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIgcCwgLmNvbnRhaW5lciBsaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnaGtfZ3JvdGVza2xpZ2h0JywgaGVsdmV0aWNhO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPlByaXZhY3kgcG9saWN5PC9oMT5cblxuICAgICAgICA8cD5BdCBZYWNrLCBhY2Nlc3NpYmxlIGZyb20gaHR0cHM6Ly95YWNrLmNvLCBvbmUgb2Ygb3VyIG1haW4gcHJpb3JpdGllcyBpcyB0aGUgcHJpdmFjeSBvZiBvdXIgdmlzaXRvcnMuIFRoaXMgUHJpdmFjeSBQb2xpY3kgZG9jdW1lbnQgY29udGFpbnMgdHlwZXMgb2YgaW5mb3JtYXRpb24gdGhhdCBpcyBjb2xsZWN0ZWQgYW5kIHJlY29yZGVkIGJ5IFlhY2sgYW5kIGhvdyB3ZSB1c2UgaXQuPC9wPlxuXG4gICAgICAgIDxwPklmIHlvdSBoYXZlIGFkZGl0aW9uYWwgcXVlc3Rpb25zIG9yIHJlcXVpcmUgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBvdXIgUHJpdmFjeSBQb2xpY3ksIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IHVzLjwvcD5cblxuICAgICAgICA8cD5UaGlzIFByaXZhY3kgUG9saWN5IGFwcGxpZXMgb25seSB0byBvdXIgb25saW5lIGFjdGl2aXRpZXMgYW5kIGlzIHZhbGlkIGZvciB2aXNpdG9ycyB0byBvdXIgd2Vic2l0ZSB3aXRoIHJlZ2FyZHMgdG8gdGhlIGluZm9ybWF0aW9uIHRoYXQgdGhleSBzaGFyZWQgYW5kL29yIGNvbGxlY3QgaW4gWWFjay4gVGhpcyBwb2xpY3kgaXMgbm90IGFwcGxpY2FibGUgdG8gYW55IGluZm9ybWF0aW9uIGNvbGxlY3RlZCBvZmZsaW5lIG9yIHZpYSBjaGFubmVscyBvdGhlciB0aGFuIHRoaXMgd2Vic2l0ZS48L3A+XG5cbiAgICAgICAgPGgyPkNvbnNlbnQ8L2gyPlxuXG4gICAgICAgIDxwPkJ5IHVzaW5nIG91ciB3ZWJzaXRlLCB5b3UgaGVyZWJ5IGNvbnNlbnQgdG8gb3VyIFByaXZhY3kgUG9saWN5IGFuZCBhZ3JlZSB0byBpdHMgdGVybXMuPC9wPlxuXG4gICAgICAgIDxoMj5JbmZvcm1hdGlvbiB3ZSBjb2xsZWN0PC9oMj5cblxuICAgICAgICA8cD5UaGUgcGVyc29uYWwgaW5mb3JtYXRpb24gdGhhdCB5b3UgYXJlIGFza2VkIHRvIHByb3ZpZGUsIGFuZCB0aGUgcmVhc29ucyB3aHkgeW91IGFyZSBhc2tlZCB0byBwcm92aWRlIGl0LCB3aWxsIGJlIG1hZGUgY2xlYXIgdG8geW91IGF0IHRoZSBwb2ludCB3ZSBhc2sgeW91IHRvIHByb3ZpZGUgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi48L3A+XG4gICAgICAgIDxwPklmIHlvdSBjb250YWN0IHVzIGRpcmVjdGx5LCB3ZSBtYXkgcmVjZWl2ZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHlvdSBzdWNoIGFzIHlvdXIgbmFtZSwgZW1haWwgYWRkcmVzcywgcGhvbmUgbnVtYmVyLCB0aGUgY29udGVudHMgb2YgdGhlIG1lc3NhZ2UgYW5kL29yIGF0dGFjaG1lbnRzIHlvdSBtYXkgc2VuZCB1cywgYW5kIGFueSBvdGhlciBpbmZvcm1hdGlvbiB5b3UgbWF5IGNob29zZSB0byBwcm92aWRlLjwvcD5cbiAgICAgICAgPHA+V2hlbiB5b3UgcmVnaXN0ZXIgZm9yIGFuIEFjY291bnQsIHdlIG1heSBhc2sgZm9yIHlvdXIgY29udGFjdCBpbmZvcm1hdGlvbiwgaW5jbHVkaW5nIGl0ZW1zIHN1Y2ggYXMgbmFtZSwgY29tcGFueSBuYW1lLCBhZGRyZXNzLCBlbWFpbCBhZGRyZXNzLCBhbmQgdGVsZXBob25lIG51bWJlci48L3A+XG5cbiAgICAgICAgPGgyPkhvdyB3ZSB1c2UgeW91ciBpbmZvcm1hdGlvbjwvaDI+XG5cbiAgICAgICAgPHA+V2UgdXNlIHRoZSBpbmZvcm1hdGlvbiB3ZSBjb2xsZWN0IGluIHZhcmlvdXMgd2F5cywgaW5jbHVkaW5nIHRvOjwvcD5cblxuICAgICAgICA8dWw+XG4gICAgICAgIDxsaT5Qcm92aWRlLCBvcGVyYXRlLCBhbmQgbWFpbnRhaW4gb3VyIHdlYnN0ZTwvbGk+XG4gICAgICAgIDxsaT5JbXByb3ZlLCBwZXJzb25hbGl6ZSwgYW5kIGV4cGFuZCBvdXIgd2Vic3RlPC9saT5cbiAgICAgICAgPGxpPlVuZGVyc3RhbmQgYW5kIGFuYWx5emUgaG93IHlvdSB1c2Ugb3VyIHdlYnN0ZTwvbGk+XG4gICAgICAgIDxsaT5EZXZlbG9wIG5ldyBwcm9kdWN0cywgc2VydmljZXMsIGZlYXR1cmVzLCBhbmQgZnVuY3Rpb25hbGl0eTwvbGk+XG4gICAgICAgIDxsaT5Db21tdW5pY2F0ZSB3aXRoIHlvdSwgZWl0aGVyIGRpcmVjdGx5IG9yIHRocm91Z2ggb25lIG9mIG91ciBwYXJ0bmVycywgaW5jbHVkaW5nIGZvciBjdXN0b21lciBzZXJ2aWNlLCB0byBwcm92aWRlIHlvdSB3aXRoIHVwZGF0ZXMgYW5kIG90aGVyIGluZm9ybWF0aW9uIHJlbGF0aW5nIHRvIHRoZSB3ZWJzdGUsIGFuZCBmb3IgbWFya2V0aW5nIGFuZCBwcm9tb3Rpb25hbCBwdXJwb3NlczwvbGk+XG4gICAgICAgIDxsaT5TZW5kIHlvdSBlbWFpbHM8L2xpPlxuICAgICAgICA8bGk+RmluZCBhbmQgcHJldmVudCBmcmF1ZDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPGgyPkxvZyBGaWxlczwvaDI+XG5cbiAgICAgICAgPHA+WWFjayBmb2xsb3dzIGEgc3RhbmRhcmQgcHJvY2VkdXJlIG9mIHVzaW5nIGxvZyBmaWxlcy4gVGhlc2UgZmlsZXMgbG9nIHZpc2l0b3JzIHdoZW4gdGhleSB2aXNpdCB3ZWJzaXRlcy4gQWxsIGhvc3RpbmcgY29tcGFuaWVzIGRvIHRoaXMgYW5kIGEgcGFydCBvZiBob3N0aW5nIHNlcnZpY2VzJyBhbmFseXRpY3MuIFRoZSBpbmZvcm1hdGlvbiBjb2xsZWN0ZWQgYnkgbG9nIGZpbGVzIGluY2x1ZGUgaW50ZXJuZXQgcHJvdG9jb2wgKElQKSBhZGRyZXNzZXMsIGJyb3dzZXIgdHlwZSwgSW50ZXJuZXQgU2VydmljZSBQcm92aWRlciAoSVNQKSwgZGF0ZSBhbmQgdGltZSBzdGFtcCwgcmVmZXJyaW5nL2V4aXQgcGFnZXMsIGFuZCBwb3NzaWJseSB0aGUgbnVtYmVyIG9mIGNsaWNrcy4gVGhlc2UgYXJlIG5vdCBsaW5rZWQgdG8gYW55IGluZm9ybWF0aW9uIHRoYXQgaXMgcGVyc29uYWxseSBpZGVudGlmaWFibGUuIFRoZSBwdXJwb3NlIG9mIHRoZSBpbmZvcm1hdGlvbiBpcyBmb3IgYW5hbHl6aW5nIHRyZW5kcywgYWRtaW5pc3RlcmluZyB0aGUgc2l0ZSwgdHJhY2tpbmcgdXNlcnMnIG1vdmVtZW50IG9uIHRoZSB3ZWJzaXRlLCBhbmQgZ2F0aGVyaW5nIGRlbW9ncmFwaGljIGluZm9ybWF0aW9uLiBPdXIgUHJpdmFjeSBQb2xpY3kgd2FzIGNyZWF0ZWQgd2l0aCB0aGUgaGVscCBvZiB0aGUgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnByaXZhY3lwb2xpY3lnZW5lcmF0b3IuaW5mb1wiPlByaXZhY3kgUG9saWN5IEdlbmVyYXRvcjwvYT4gYW5kIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly93d3cucHJpdmFjeXBvbGljeXRlbXBsYXRlLm5ldC9cIj5Qcml2YWN5IFBvbGljeSBUZW1wbGF0ZTwvYT4uPC9wPlxuXG4gICAgICAgIDxoMj5Db29raWVzIGFuZCBXZWIgQmVhY29uczwvaDI+XG5cbiAgICAgICAgPHA+TGlrZSBhbnkgb3RoZXIgd2Vic2l0ZSwgWWFjayB1c2VzICdjb29raWVzJy4gVGhlc2UgY29va2llcyBhcmUgdXNlZCB0byBzdG9yZSBpbmZvcm1hdGlvbiBpbmNsdWRpbmcgdmlzaXRvcnMnIHByZWZlcmVuY2VzLCBhbmQgdGhlIHBhZ2VzIG9uIHRoZSB3ZWJzaXRlIHRoYXQgdGhlIHZpc2l0b3IgYWNjZXNzZWQgb3IgdmlzaXRlZC4gVGhlIGluZm9ybWF0aW9uIGlzIHVzZWQgdG8gb3B0aW1pemUgdGhlIHVzZXJzJyBleHBlcmllbmNlIGJ5IGN1c3RvbWl6aW5nIG91ciB3ZWIgcGFnZSBjb250ZW50IGJhc2VkIG9uIHZpc2l0b3JzJyBicm93c2VyIHR5cGUgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLjwvcD5cblxuICAgICAgICA8cD5Gb3IgbW9yZSBnZW5lcmFsIGluZm9ybWF0aW9uIG9uIGNvb2tpZXMsIHBsZWFzZSByZWFkIDxhIGhyZWY9XCJodHRwczovL3d3dy5jb29raWVjb25zZW50LmNvbS93aGF0LWFyZS1jb29raWVzL1wiPlwiV2hhdCBBcmUgQ29va2llc1wiPC9hPi48L3A+XG5cbiAgICAgICAgPGgyPkFkdmVydGlzaW5nIFBhcnRuZXJzIFByaXZhY3kgUG9saWNpZXM8L2gyPlxuXG4gICAgICAgIDxwPllvdSBtYXkgY29uc3VsdCB0aGlzIGxpc3QgdG8gZmluZCB0aGUgUHJpdmFjeSBQb2xpY3kgZm9yIGVhY2ggb2YgdGhlIGFkdmVydGlzaW5nIHBhcnRuZXJzIG9mIFlhY2suPC9wPlxuXG4gICAgICAgIDxwPlRoaXJkLXBhcnR5IGFkIHNlcnZlcnMgb3IgYWQgbmV0d29ya3MgdXNlcyB0ZWNobm9sb2dpZXMgbGlrZSBjb29raWVzLCBKYXZhU2NyaXB0LCBvciBXZWIgQmVhY29ucyB0aGF0IGFyZSB1c2VkIGluIHRoZWlyIHJlc3BlY3RpdmUgYWR2ZXJ0aXNlbWVudHMgYW5kIGxpbmtzIHRoYXQgYXBwZWFyIG9uIFlhY2ssIHdoaWNoIGFyZSBzZW50IGRpcmVjdGx5IHRvIHVzZXJzJyBicm93c2VyLiBUaGV5IGF1dG9tYXRpY2FsbHkgcmVjZWl2ZSB5b3VyIElQIGFkZHJlc3Mgd2hlbiB0aGlzIG9jY3Vycy4gVGhlc2UgdGVjaG5vbG9naWVzIGFyZSB1c2VkIHRvIG1lYXN1cmUgdGhlIGVmZmVjdGl2ZW5lc3Mgb2YgdGhlaXIgYWR2ZXJ0aXNpbmcgY2FtcGFpZ25zIGFuZC9vciB0byBwZXJzb25hbGl6ZSB0aGUgYWR2ZXJ0aXNpbmcgY29udGVudCB0aGF0IHlvdSBzZWUgb24gd2Vic2l0ZXMgdGhhdCB5b3UgdmlzaXQuPC9wPlxuXG4gICAgICAgIDxwPk5vdGUgdGhhdCBZYWNrIGhhcyBubyBhY2Nlc3MgdG8gb3IgY29udHJvbCBvdmVyIHRoZXNlIGNvb2tpZXMgdGhhdCBhcmUgdXNlZCBieSB0aGlyZC1wYXJ0eSBhZHZlcnRpc2Vycy48L3A+XG5cbiAgICAgICAgPGgyPlRoaXJkIFBhcnR5IFByaXZhY3kgUG9saWNpZXM8L2gyPlxuXG4gICAgICAgIDxwPllhY2sncyBQcml2YWN5IFBvbGljeSBkb2VzIG5vdCBhcHBseSB0byBvdGhlciBhZHZlcnRpc2VycyBvciB3ZWJzaXRlcy4gVGh1cywgd2UgYXJlIGFkdmlzaW5nIHlvdSB0byBjb25zdWx0IHRoZSByZXNwZWN0aXZlIFByaXZhY3kgUG9saWNpZXMgb2YgdGhlc2UgdGhpcmQtcGFydHkgYWQgc2VydmVycyBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi4gSXQgbWF5IGluY2x1ZGUgdGhlaXIgcHJhY3RpY2VzIGFuZCBpbnN0cnVjdGlvbnMgYWJvdXQgaG93IHRvIG9wdC1vdXQgb2YgY2VydGFpbiBvcHRpb25zLiBZb3UgbWF5IGZpbmQgYSBjb21wbGV0ZSBsaXN0IG9mIHRoZXNlIFByaXZhY3kgUG9saWNpZXMgYW5kIHRoZWlyIGxpbmtzIGhlcmU6IFByaXZhY3kgUG9saWN5IExpbmtzLjwvcD5cblxuICAgICAgICA8cD5Zb3UgY2FuIGNob29zZSB0byBkaXNhYmxlIGNvb2tpZXMgdGhyb3VnaCB5b3VyIGluZGl2aWR1YWwgYnJvd3NlciBvcHRpb25zLiBUbyBrbm93IG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgY29va2llIG1hbmFnZW1lbnQgd2l0aCBzcGVjaWZpYyB3ZWIgYnJvd3NlcnMsIGl0IGNhbiBiZSBmb3VuZCBhdCB0aGUgYnJvd3NlcnMnIHJlc3BlY3RpdmUgd2Vic2l0ZXMuIFdoYXQgQXJlIENvb2tpZXM/PC9wPlxuXG4gICAgICAgIDxoMj5DQ1BBIFByaXZhY3kgUmlnaHRzIChEbyBOb3QgU2VsbCBNeSBQZXJzb25hbCBJbmZvcm1hdGlvbik8L2gyPlxuXG4gICAgICAgIDxwPlVuZGVyIHRoZSBDQ1BBLCBhbW9uZyBvdGhlciByaWdodHMsIENhbGlmb3JuaWEgY29uc3VtZXJzIGhhdmUgdGhlIHJpZ2h0IHRvOjwvcD5cbiAgICAgICAgPHA+UmVxdWVzdCB0aGF0IGEgYnVzaW5lc3MgdGhhdCBjb2xsZWN0cyBhIGNvbnN1bWVyJ3MgcGVyc29uYWwgZGF0YSBkaXNjbG9zZSB0aGUgY2F0ZWdvcmllcyBhbmQgc3BlY2lmaWMgcGllY2VzIG9mIHBlcnNvbmFsIGRhdGEgdGhhdCBhIGJ1c2luZXNzIGhhcyBjb2xsZWN0ZWQgYWJvdXQgY29uc3VtZXJzLjwvcD5cbiAgICAgICAgPHA+UmVxdWVzdCB0aGF0IGEgYnVzaW5lc3MgZGVsZXRlIGFueSBwZXJzb25hbCBkYXRhIGFib3V0IHRoZSBjb25zdW1lciB0aGF0IGEgYnVzaW5lc3MgaGFzIGNvbGxlY3RlZC48L3A+XG4gICAgICAgIDxwPlJlcXVlc3QgdGhhdCBhIGJ1c2luZXNzIHRoYXQgc2VsbHMgYSBjb25zdW1lcidzIHBlcnNvbmFsIGRhdGEsIG5vdCBzZWxsIHRoZSBjb25zdW1lcidzIHBlcnNvbmFsIGRhdGEuPC9wPlxuICAgICAgICA8cD5JZiB5b3UgbWFrZSBhIHJlcXVlc3QsIHdlIGhhdmUgb25lIG1vbnRoIHRvIHJlc3BvbmQgdG8geW91LiBJZiB5b3Ugd291bGQgbGlrZSB0byBleGVyY2lzZSBhbnkgb2YgdGhlc2UgcmlnaHRzLCBwbGVhc2UgY29udGFjdCB1cy48L3A+XG5cbiAgICAgICAgPGgyPkdEUFIgRGF0YSBQcm90ZWN0aW9uIFJpZ2h0czwvaDI+XG5cbiAgICAgICAgPHA+V2Ugd291bGQgbGlrZSB0byBtYWtlIHN1cmUgeW91IGFyZSBmdWxseSBhd2FyZSBvZiBhbGwgb2YgeW91ciBkYXRhIHByb3RlY3Rpb24gcmlnaHRzLiBFdmVyeSB1c2VyIGlzIGVudGl0bGVkIHRvIHRoZSBmb2xsb3dpbmc6PC9wPlxuICAgICAgICA8cD5UaGUgcmlnaHQgdG8gYWNjZXNzIOKAkyBZb3UgaGF2ZSB0aGUgcmlnaHQgdG8gcmVxdWVzdCBjb3BpZXMgb2YgeW91ciBwZXJzb25hbCBkYXRhLiBXZSBtYXkgY2hhcmdlIHlvdSBhIHNtYWxsIGZlZSBmb3IgdGhpcyBzZXJ2aWNlLjwvcD5cbiAgICAgICAgPHA+VGhlIHJpZ2h0IHRvIHJlY3RpZmljYXRpb24g4oCTIFlvdSBoYXZlIHRoZSByaWdodCB0byByZXF1ZXN0IHRoYXQgd2UgY29ycmVjdCBhbnkgaW5mb3JtYXRpb24geW91IGJlbGlldmUgaXMgaW5hY2N1cmF0ZS4gWW91IGFsc28gaGF2ZSB0aGUgcmlnaHQgdG8gcmVxdWVzdCB0aGF0IHdlIGNvbXBsZXRlIHRoZSBpbmZvcm1hdGlvbiB5b3UgYmVsaWV2ZSBpcyBpbmNvbXBsZXRlLjwvcD5cbiAgICAgICAgPHA+VGhlIHJpZ2h0IHRvIGVyYXN1cmUg4oCTIFlvdSBoYXZlIHRoZSByaWdodCB0byByZXF1ZXN0IHRoYXQgd2UgZXJhc2UgeW91ciBwZXJzb25hbCBkYXRhLCB1bmRlciBjZXJ0YWluIGNvbmRpdGlvbnMuPC9wPlxuICAgICAgICA8cD5UaGUgcmlnaHQgdG8gcmVzdHJpY3QgcHJvY2Vzc2luZyDigJMgWW91IGhhdmUgdGhlIHJpZ2h0IHRvIHJlcXVlc3QgdGhhdCB3ZSByZXN0cmljdCB0aGUgcHJvY2Vzc2luZyBvZiB5b3VyIHBlcnNvbmFsIGRhdGEsIHVuZGVyIGNlcnRhaW4gY29uZGl0aW9ucy48L3A+XG4gICAgICAgIDxwPlRoZSByaWdodCB0byBvYmplY3QgdG8gcHJvY2Vzc2luZyDigJMgWW91IGhhdmUgdGhlIHJpZ2h0IHRvIG9iamVjdCB0byBvdXIgcHJvY2Vzc2luZyBvZiB5b3VyIHBlcnNvbmFsIGRhdGEsIHVuZGVyIGNlcnRhaW4gY29uZGl0aW9ucy48L3A+XG4gICAgICAgIDxwPlRoZSByaWdodCB0byBkYXRhIHBvcnRhYmlsaXR5IOKAkyBZb3UgaGF2ZSB0aGUgcmlnaHQgdG8gcmVxdWVzdCB0aGF0IHdlIHRyYW5zZmVyIHRoZSBkYXRhIHRoYXQgd2UgaGF2ZSBjb2xsZWN0ZWQgdG8gYW5vdGhlciBvcmdhbml6YXRpb24sIG9yIGRpcmVjdGx5IHRvIHlvdSwgdW5kZXIgY2VydGFpbiBjb25kaXRpb25zLjwvcD5cbiAgICAgICAgPHA+SWYgeW91IG1ha2UgYSByZXF1ZXN0LCB3ZSBoYXZlIG9uZSBtb250aCB0byByZXNwb25kIHRvIHlvdS4gSWYgeW91IHdvdWxkIGxpa2UgdG8gZXhlcmNpc2UgYW55IG9mIHRoZXNlIHJpZ2h0cywgcGxlYXNlIGNvbnRhY3QgdXMuPC9wPlxuXG4gICAgICAgIDxoMj5DaGlsZHJlbidzIEluZm9ybWF0aW9uPC9oMj5cblxuICAgICAgICA8cD5Bbm90aGVyIHBhcnQgb2Ygb3VyIHByaW9yaXR5IGlzIGFkZGluZyBwcm90ZWN0aW9uIGZvciBjaGlsZHJlbiB3aGlsZSB1c2luZyB0aGUgaW50ZXJuZXQuIFdlIGVuY291cmFnZSBwYXJlbnRzIGFuZCBndWFyZGlhbnMgdG8gb2JzZXJ2ZSwgcGFydGljaXBhdGUgaW4sIGFuZC9vciBtb25pdG9yIGFuZCBndWlkZSB0aGVpciBvbmxpbmUgYWN0aXZpdHkuPC9wPlxuXG4gICAgICAgIDxwPllhY2sgZG9lcyBub3Qga25vd2luZ2x5IGNvbGxlY3QgYW55IFBlcnNvbmFsIElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMuIElmIHlvdSB0aGluayB0aGF0IHlvdXIgY2hpbGQgcHJvdmlkZWQgdGhpcyBraW5kIG9mIGluZm9ybWF0aW9uIG9uIG91ciB3ZWJzaXRlLCB3ZSBzdHJvbmdseSBlbmNvdXJhZ2UgeW91IHRvIGNvbnRhY3QgdXMgaW1tZWRpYXRlbHkgYW5kIHdlIHdpbGwgZG8gb3VyIGJlc3QgZWZmb3J0cyB0byBwcm9tcHRseSByZW1vdmUgc3VjaCBpbmZvcm1hdGlvbiBmcm9tIG91ciByZWNvcmRzLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Yack/website/pages/privacypolicy.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-371213600" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Privacy policy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "At Yack, accessible from https://yack.co, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Yack and how we use it."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Yack. This policy is not applicable to any information collected offline or via channels other than this website."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Consent"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "By using our website, you hereby consent to our Privacy Policy and agree to its terms."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Information we collect"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "How we use your information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "We use the information we collect in various ways, including to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Provide, operate, and maintain our webste"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Improve, personalize, and expand our webste"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Understand and analyze how you use our webste"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Develop new products, services, features, and functionality"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Send you emails"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Find and prevent fraud")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Log Files"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Yack follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.privacypolicygenerator.info",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Privacy Policy Generator"), " and the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.privacypolicytemplate.net/",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Privacy Policy Template"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Cookies and Web Beacons"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Like any other website, Yack uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "For more general information on cookies, please read ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.cookieconsent.com/what-are-cookies/",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "\"What Are Cookies\""), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Advertising Partners Privacy Policies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "You may consult this list to find the Privacy Policy for each of the advertising partners of Yack."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Yack, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Note that Yack has no access to or control over these cookies that are used by third-party advertisers."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Third Party Privacy Policies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Yack's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "CCPA Privacy Rights (Do Not Sell My Personal Information)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Under the CCPA, among other rights, California consumers have the right to:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Request that a business delete any personal data about the consumer that a business has collected."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Request that a business that sells a consumer's personal data, not sell the consumer's personal data."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "GDPR Data Protection Rights"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "The right to access \u2013 You have the right to request copies of your personal data. We may charge you a small fee for this service."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "The right to rectification \u2013 You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "The right to erasure \u2013 You have the right to request that we erase your personal data, under certain conditions."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "The right to restrict processing \u2013 You have the right to request that we restrict the processing of your personal data, under certain conditions."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "The right to object to processing \u2013 You have the right to object to our processing of your personal data, under certain conditions."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "The right to data portability \u2013 You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Children's Information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Yack does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.")));
}

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/privacypolicy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joduplessis/Work/Yack/website/pages/privacypolicy.js */"./pages/privacypolicy.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=privacypolicy.js.map