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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./pages/termsofuse.js":
/*!*****************************!*\
  !*** ./pages/termsofuse.js ***!
  \*****************************/
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
var _jsxFileName = "/Users/joduplessis/Work/Yack/website/pages/termsofuse.js";







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
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{padding-top:50px;padding-bottom:30px;margin-left:auto;margin-right:auto;width:80%;}.container h1{font-size:80px;color:#202529;font-weight:900;font-family:'hk_groteskbold',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,'hk_groteskblack',helvetica;line-height:80px;margin-bottom:20px;}.container h2{margin-top:25px;font-size:25px;color:#202529;line-height:40px;font-weight:300;width:40%;font-family:'hk_grotesklight',-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,'hk_grotesklight',helvetica;}.container a{color:#10ACF3;}.container p,.container li{font-size:16px;color:#808080;font-family:'hk_grotesklight',helvetica;padding-bottom:10px;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9wYWdlcy90ZXJtc29mdXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCeUIsQUFHc0IsQUFLTSxBQUlBLEFBUUYsQUFTQyxBQVVGLEFBSUMsV0F2Q0gsR0FvQ2QsQ0FuQmdCLEFBdUJBLENBZEMsQ0FyQmpCLEFBSXNCLE1BUnRCLE1BaUJrQixBQXVCeUIsRUFkM0IsTUFqQkcsUUFTdUgsQUFTdkgsU0FqQkMsUUFrQkYsT0FhSSxHQTlCVixNQWtCQSxJQWpCWixNQWtCMkksQ0FZekgsZ0JBQ2xCLG9FQXhCbUIsaUJBQ0UsbUJBQ3JCLFFBVUEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvWWFjay93ZWJzaXRlL3BhZ2VzL3Rlcm1zb2Z1c2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgRmVhdHVyZXMgZnJvbSAnLi4vY29tcG9uZW50cy9mZWF0dXJlcydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXJtc09mVXNlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5ZYWNrIC0gR2l2ZSB5b3VyIHRlYW0gc3VwZXJwb3dlcnM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ZvbnQvc3R5bGVzaGVldC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgY29sb3I6ICMyMDI1Mjk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2tib2xkJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdoa19ncm90ZXNrYmxhY2snLCBoZWx2ZXRpY2E7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGNvbG9yOiAjMjAyNTI5O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2tsaWdodCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnaGtfZ3JvdGVza2xpZ2h0JywgaGVsdmV0aWNhO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciBhIHtcbiAgICAgICAgICBjb2xvcjogIzEwQUNGMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIgcCwgLmNvbnRhaW5lciBsaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiAjODA4MDgwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnaGtfZ3JvdGVza2xpZ2h0JywgaGVsdmV0aWNhO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPlRlcm1zIG9mIHVzZTwvaDE+XG5cbiAgICAgICAgPHA+VmVyc2lvbiAxLjA8L3A+XG5cbiAgICAgICAgPHA+VGhlIFlhY2sgd2Vic2l0ZSBsb2NhdGVkIGF0IDxhIGhyZWY9XCJodHRwczovL3lhY2suY29cIj5odHRwczovL3lhY2suY288L2E+IGlzIGEgY29weXJpZ2h0ZWQgd29yayBiZWxvbmdpbmcgdG8gWWFjay4gQ2VydGFpbiBmZWF0dXJlcyBvZiB0aGUgU2l0ZSBtYXkgYmUgc3ViamVjdCB0byBhZGRpdGlvbmFsIGd1aWRlbGluZXMsIHRlcm1zLCBvciBydWxlcywgd2hpY2ggd2lsbCBiZSBwb3N0ZWQgb24gdGhlIFNpdGUgaW4gY29ubmVjdGlvbiB3aXRoIHN1Y2ggZmVhdHVyZXMuPC9wPlxuXG4gICAgICAgIDxwPkFsbCBzdWNoIGFkZGl0aW9uYWwgdGVybXMsIGd1aWRlbGluZXMsIGFuZCBydWxlcyBhcmUgaW5jb3Jwb3JhdGVkIGJ5IHJlZmVyZW5jZSBpbnRvIHRoZXNlIFRlcm1zLjwvcD5cblxuICAgICAgICA8cD5UaGVzZSBUZXJtcyBvZiBVc2UgZGVzY3JpYmVkIHRoZSBsZWdhbGx5IGJpbmRpbmcgdGVybXMgYW5kIGNvbmRpdGlvbnMgdGhhdCBvdmVyc2VlIHlvdXIgdXNlIG9mIHRoZSBTaXRlLsKgQlkgTE9HR0lORyBJTlRPIFRIRSBTSVRFLCBZT1UgQVJFIEJFSU5HIENPTVBMSUFOVCBUSEFUIFRIRVNFIFRFUk1TIGFuZCB5b3UgcmVwcmVzZW50IHRoYXQgeW91IGhhdmUgdGhlIGF1dGhvcml0eSBhbmQgY2FwYWNpdHkgdG8gZW50ZXIgaW50byB0aGVzZSBUZXJtcy7CoFlPVSBTSE9VTEQgQkUgQVQgTEVBU1QgMTggWUVBUlMgT0YgQUdFIFRPIEFDQ0VTUyBUSEUgU0lURS4gSUYgWU9VIERJU0FHUkVFIFdJVEggQUxMIE9GIFRIRSBQUk9WSVNJT04gT0YgVEhFU0UgVEVSTVMsIERPIE5PVCBMT0cgSU5UTyBBTkQvT1IgVVNFIFRIRSBTSVRFLjwvcD5cblxuICAgICAgICA8cD5UaGVzZSB0ZXJtcyByZXF1aXJlIHRoZSB1c2Ugb2YgYXJiaXRyYXRpb24gU2VjdGlvbiAxMC4yIG9uIGFuIGluZGl2aWR1YWwgYmFzaXMgdG8gcmVzb2x2ZSBkaXNwdXRlcyBhbmQgYWxzbyBsaW1pdCB0aGUgcmVtZWRpZXMgYXZhaWxhYmxlIHRvIHlvdSBpbiB0aGUgZXZlbnQgb2YgYSBkaXNwdXRlLiBUaGVzZSBUZXJtcyBvZiBVc2Ugd2VyZSBjcmVhdGVkIHdpdGggdGhlIGhlbHAgb2YgdGhlIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZXJtc29mdXNlZ2VuZXJhdG9yLm5ldFwiPlRlcm1zIE9mIFVzZSBHZW5lcmF0b3I8L2E+IGFuZCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnByaXZhY3ktcG9saWN5LXNhbXBsZS5jb21cIj5Qcml2YWN5IFBvbGljeSBTYW1wbGU8L2E+LjwvcD5cblxuICAgICAgICA8aDI+QWNjZXNzIHRvIHRoZSBTaXRlPC9oMj5cblxuICAgICAgICA8cD48c3Ryb25nPlN1YmplY3QgdG8gdGhlc2UgVGVybXMuPC9zdHJvbmc+IENvbXBhbnkgZ3JhbnRzIHlvdSBhIG5vbi10cmFuc2ZlcmFibGUsIG5vbi1leGNsdXNpdmUsIHJldm9jYWJsZSwgbGltaXRlZCBsaWNlbnNlIHRvIGFjY2VzcyB0aGUgU2l0ZSBzb2xlbHkgZm9yIHlvdXIgb3duIHBlcnNvbmFsLCBub25jb21tZXJjaWFsIHVzZS48L3A+XG5cbiAgICAgICAgPHA+PHN0cm9uZz5DZXJ0YWluIFJlc3RyaWN0aW9ucy48L3N0cm9uZz4gVGhlIHJpZ2h0cyBhcHByb3ZlZCB0byB5b3UgaW4gdGhlc2UgVGVybXMgYXJlIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyByZXN0cmljdGlvbnM6IChhKSB5b3Ugc2hhbGwgbm90IHNlbGwsIHJlbnQsIGxlYXNlLCB0cmFuc2ZlciwgYXNzaWduLCBkaXN0cmlidXRlLCBob3N0LCBvciBvdGhlcndpc2UgY29tbWVyY2lhbGx5IGV4cGxvaXQgdGhlIFNpdGU7IChiKSB5b3Ugc2hhbGwgbm90IGNoYW5nZSwgbWFrZSBkZXJpdmF0aXZlIHdvcmtzIG9mLCBkaXNhc3NlbWJsZSwgcmV2ZXJzZSBjb21waWxlIG9yIHJldmVyc2UgZW5naW5lZXIgYW55IHBhcnQgb2YgdGhlIFNpdGU7IChjKSB5b3Ugc2hhbGwgbm90IGFjY2VzcyB0aGUgU2l0ZSBpbiBvcmRlciB0byBidWlsZCBhIHNpbWlsYXIgb3IgY29tcGV0aXRpdmUgd2Vic2l0ZTsgYW5kIChkKSBleGNlcHQgYXMgZXhwcmVzc2x5IHN0YXRlZCBoZXJlaW4sIG5vIHBhcnQgb2YgdGhlIFNpdGUgbWF5IGJlIGNvcGllZCwgcmVwcm9kdWNlZCwgZGlzdHJpYnV0ZWQsIHJlcHVibGlzaGVkLCBkb3dubG9hZGVkLCBkaXNwbGF5ZWQsIHBvc3RlZCBvciB0cmFuc21pdHRlZCBpbiBhbnkgZm9ybSBvciBieSBhbnkgbWVhbnMgdW5sZXNzIG90aGVyd2lzZSBpbmRpY2F0ZWQsIGFueSBmdXR1cmUgcmVsZWFzZSwgdXBkYXRlLCBvciBvdGhlciBhZGRpdGlvbiB0byBmdW5jdGlvbmFsaXR5IG9mIHRoZSBTaXRlIHNoYWxsIGJlIHN1YmplY3QgdG8gdGhlc2UgVGVybXMuwqAgQWxsIGNvcHlyaWdodCBhbmQgb3RoZXIgcHJvcHJpZXRhcnkgbm90aWNlcyBvbiB0aGUgU2l0ZSBtdXN0IGJlIHJldGFpbmVkIG9uIGFsbCBjb3BpZXMgdGhlcmVvZi48L3A+XG5cbiAgICAgICAgPHA+Q29tcGFueSByZXNlcnZlcyB0aGUgcmlnaHQgdG8gY2hhbmdlLCBzdXNwZW5kLCBvciBjZWFzZSB0aGUgU2l0ZSB3aXRoIG9yIHdpdGhvdXQgbm90aWNlIHRvIHlvdS7CoCBZb3UgYXBwcm92ZWQgdGhhdCBDb21wYW55IHdpbGwgbm90IGJlIGhlbGQgbGlhYmxlIHRvIHlvdSBvciBhbnkgdGhpcmQtcGFydHkgZm9yIGFueSBjaGFuZ2UsIGludGVycnVwdGlvbiwgb3IgdGVybWluYXRpb24gb2YgdGhlIFNpdGUgb3IgYW55IHBhcnQuPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+Tm8gU3VwcG9ydCBvciBNYWludGVuYW5jZS48L3N0cm9uZz4gWW91IGFncmVlIHRoYXQgQ29tcGFueSB3aWxsIGhhdmUgbm8gb2JsaWdhdGlvbiB0byBwcm92aWRlIHlvdSB3aXRoIGFueSBzdXBwb3J0IGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS48L3A+XG5cbiAgICAgICAgPHA+RXhjbHVkaW5nIGFueSBVc2VyIENvbnRlbnQgdGhhdCB5b3UgbWF5IHByb3ZpZGUsIHlvdSBhcmUgYXdhcmUgdGhhdCBhbGwgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodHMsIGluY2x1ZGluZyBjb3B5cmlnaHRzLCBwYXRlbnRzLCB0cmFkZW1hcmtzLCBhbmQgdHJhZGUgc2VjcmV0cywgaW4gdGhlIFNpdGUgYW5kIGl0cyBjb250ZW50IGFyZSBvd25lZCBieSBDb21wYW55IG9yIENvbXBhbnnigJlzIHN1cHBsaWVycy4gTm90ZSB0aGF0IHRoZXNlIFRlcm1zIGFuZCBhY2Nlc3MgdG8gdGhlIFNpdGUgZG8gbm90IGdpdmUgeW91IGFueSByaWdodHMsIHRpdGxlIG9yIGludGVyZXN0IGluIG9yIHRvIGFueSBpbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzLCBleGNlcHQgZm9yIHRoZSBsaW1pdGVkIGFjY2VzcyByaWdodHMgZXhwcmVzc2VkIGluIFNlY3Rpb24gMi4xLiBDb21wYW55IGFuZCBpdHMgc3VwcGxpZXJzIHJlc2VydmUgYWxsIHJpZ2h0cyBub3QgZ3JhbnRlZCBpbiB0aGVzZSBUZXJtcy48L3A+XG5cbiAgICAgICAgPGgyPlVzZXIgQ29udGVudDwvaDI+XG5cbiAgICAgICAgPHA+PHN0cm9uZz5Vc2VyIENvbnRlbnQuPC9zdHJvbmc+IFwiVXNlciBDb250ZW50XCIgbWVhbnMgYW55IGFuZCBhbGwgaW5mb3JtYXRpb24gYW5kIGNvbnRlbnQgdGhhdCBhIHVzZXIgc3VibWl0cyB0byB0aGUgU2l0ZS4gWW91IGFyZSBleGNsdXNpdmVseSByZXNwb25zaWJsZSBmb3IgeW91ciBVc2VyIENvbnRlbnQuIFlvdSBiZWFyIGFsbCByaXNrcyBhc3NvY2lhdGVkIHdpdGggdXNlIG9mIHlvdXIgVXNlciBDb250ZW50LsKgIFlvdSBoZXJlYnkgY2VydGlmeSB0aGF0IHlvdXIgVXNlciBDb250ZW50IGRvZXMgbm90IHZpb2xhdGUgb3VyIEFjY2VwdGFibGUgVXNlIFBvbGljeS7CoCBZb3UgbWF5IG5vdCByZXByZXNlbnQgb3IgaW1wbHkgdG8gb3RoZXJzIHRoYXQgeW91ciBVc2VyIENvbnRlbnQgaXMgaW4gYW55IHdheSBwcm92aWRlZCwgc3BvbnNvcmVkIG9yIGVuZG9yc2VkIGJ5IENvbXBhbnkuIEJlY2F1c2UgeW91IGFsb25lIGFyZSByZXNwb25zaWJsZSBmb3IgeW91ciBVc2VyIENvbnRlbnQsIHlvdSBtYXkgZXhwb3NlIHlvdXJzZWxmIHRvIGxpYWJpbGl0eS4gQ29tcGFueSBpcyBub3Qgb2JsaWdlZCB0byBiYWNrdXAgYW55IFVzZXIgQ29udGVudCB0aGF0IHlvdSBwb3N0OyBhbHNvLCB5b3VyIFVzZXIgQ29udGVudCBtYXkgYmUgZGVsZXRlZCBhdCBhbnkgdGltZSB3aXRob3V0IHByaW9yIG5vdGljZSB0byB5b3UuIFlvdSBhcmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBtYWtpbmcgeW91ciBvd24gYmFja3VwIGNvcGllcyBvZiB5b3VyIFVzZXIgQ29udGVudCBpZiB5b3UgZGVzaXJlLjwvcD5cblxuICAgICAgICA8cD5Zb3UgaGVyZWJ5IGdyYW50IHRvIENvbXBhbnkgYW4gaXJyZXZlcnNpYmxlLCBub25leGNsdXNpdmUsIHJveWFsdHktZnJlZSBhbmQgZnVsbHkgcGFpZCwgd29ybGR3aWRlIGxpY2Vuc2UgdG8gcmVwcm9kdWNlLCBkaXN0cmlidXRlLCBwdWJsaWNseSBkaXNwbGF5IGFuZCBwZXJmb3JtLCBwcmVwYXJlIGRlcml2YXRpdmUgd29ya3Mgb2YsIGluY29ycG9yYXRlIGludG8gb3RoZXIgd29ya3MsIGFuZCBvdGhlcndpc2UgdXNlIGFuZCBleHBsb2l0IHlvdXIgVXNlciBDb250ZW50LCBhbmQgdG8gZ3JhbnQgc3VibGljZW5zZXMgb2YgdGhlIGZvcmVnb2luZyByaWdodHMsIHNvbGVseSBmb3IgdGhlIHB1cnBvc2VzIG9mIGluY2x1ZGluZyB5b3VyIFVzZXIgQ29udGVudCBpbiB0aGUgU2l0ZS7CoCBZb3UgaGVyZWJ5IGlycmV2ZXJzaWJseSB3YWl2ZSBhbnkgY2xhaW1zIGFuZCBhc3NlcnRpb25zIG9mIG1vcmFsIHJpZ2h0cyBvciBhdHRyaWJ1dGlvbiB3aXRoIHJlc3BlY3QgdG8geW91ciBVc2VyIENvbnRlbnQuPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+QWNjZXB0YWJsZSBVc2UgUG9saWN5Ljwvc3Ryb25nPiBUaGUgZm9sbG93aW5nIHRlcm1zIGNvbnN0aXR1dGUgb3VyIFwiQWNjZXB0YWJsZSBVc2UgUG9saWN5XCI6XG4gICAgICAgIFlvdSBhZ3JlZSBub3QgdG8gdXNlIHRoZSBTaXRlIHRvIGNvbGxlY3QsIHVwbG9hZCwgdHJhbnNtaXQsIGRpc3BsYXksIG9yIGRpc3RyaWJ1dGUgYW55IFVzZXIgQ29udGVudCAoaSkgdGhhdCB2aW9sYXRlcyBhbnkgdGhpcmQtcGFydHkgcmlnaHQgb3IgYW55IGludGVsbGVjdHVhbCBwcm9wZXJ0eSBvciBwcm9wcmlldGFyeSByaWdodDsgKGlpKSB0aGF0IGlzIHVubGF3ZnVsLCBoYXJhc3NpbmcsIGFidXNpdmUsIHRvcnRpb3VzLCB0aHJlYXRlbmluZywgaGFybWZ1bCwgaW52YXNpdmUgb2YgYW5vdGhlcuKAmXMgcHJpdmFjeSwgdnVsZ2FyLCBkZWZhbWF0b3J5LCBmYWxzZSwgaW50ZW50aW9uYWxseSBtaXNsZWFkaW5nLCB0cmFkZSBsaWJlbG91cywgcG9ybm9ncmFwaGljLCBvYnNjZW5lLCBwYXRlbnRseSBvZmZlbnNpdmUsIHByb21vdGVzIHJhY2lzbSwgYmlnb3RyeSwgaGF0cmVkLCBvciBwaHlzaWNhbCBoYXJtIG9mIGFueSBraW5kIGFnYWluc3QgYW55IGdyb3VwIG9yIGluZGl2aWR1YWw7IChpaWkpIHRoYXQgaXMgaGFybWZ1bCB0byBtaW5vcnMgaW4gYW55IHdheTsgb3IgKGl2KSB0aGF0IGlzIGluIHZpb2xhdGlvbiBvZiBhbnkgbGF3LCByZWd1bGF0aW9uLCBvciBvYmxpZ2F0aW9ucyBvciByZXN0cmljdGlvbnMgaW1wb3NlZCBieSBhbnkgdGhpcmQgcGFydHkuPC9wPlxuXG4gICAgICAgIDxwPkluIGFkZGl0aW9uLCB5b3UgYWdyZWUgbm90IHRvOiAoaSkgdXBsb2FkLCB0cmFuc21pdCwgb3IgZGlzdHJpYnV0ZSB0byBvciB0aHJvdWdoIHRoZSBTaXRlIGFueSBzb2Z0d2FyZSBpbnRlbmRlZCB0byBkYW1hZ2Ugb3IgYWx0ZXIgYSBjb21wdXRlciBzeXN0ZW0gb3IgZGF0YTsgKGlpKSBzZW5kIHRocm91Z2ggdGhlIFNpdGUgdW5zb2xpY2l0ZWQgb3IgdW5hdXRob3JpemVkIGFkdmVydGlzaW5nLCBwcm9tb3Rpb25hbCBtYXRlcmlhbHMsIGp1bmsgbWFpbCwgc3BhbSwgY2hhaW4gbGV0dGVycywgcHlyYW1pZCBzY2hlbWVzLCBvciBhbnkgb3RoZXIgZm9ybSBvZiBkdXBsaWNhdGl2ZSBvciB1bnNvbGljaXRlZCBtZXNzYWdlczsgKGlpaSkgdXNlIHRoZSBTaXRlIHRvIGhhcnZlc3QsIGNvbGxlY3QsIGdhdGhlciBvciBhc3NlbWJsZSBpbmZvcm1hdGlvbiBvciBkYXRhIHJlZ2FyZGluZyBvdGhlciB1c2VycyB3aXRob3V0IHRoZWlyIGNvbnNlbnQ7IChpdikgaW50ZXJmZXJlIHdpdGgsIGRpc3J1cHQsIG9yIGNyZWF0ZSBhbiB1bmR1ZSBidXJkZW4gb24gc2VydmVycyBvciBuZXR3b3JrcyBjb25uZWN0ZWQgdG8gdGhlIFNpdGUsIG9yIHZpb2xhdGUgdGhlIHJlZ3VsYXRpb25zLCBwb2xpY2llcyBvciBwcm9jZWR1cmVzIG9mIHN1Y2ggbmV0d29ya3M7ICh2KSBhdHRlbXB0IHRvIGdhaW4gdW5hdXRob3JpemVkIGFjY2VzcyB0byB0aGUgU2l0ZSwgd2hldGhlciB0aHJvdWdoIHBhc3N3b3JkIG1pbmluZyBvciBhbnkgb3RoZXIgbWVhbnM7ICh2aSkgaGFyYXNzIG9yIGludGVyZmVyZSB3aXRoIGFueSBvdGhlciB1c2Vy4oCZcyB1c2UgYW5kIGVuam95bWVudCBvZiB0aGUgU2l0ZTsgb3IgKHZpKSB1c2Ugc29mdHdhcmUgb3IgYXV0b21hdGVkIGFnZW50cyBvciBzY3JpcHRzIHRvIHByb2R1Y2UgbXVsdGlwbGUgYWNjb3VudHMgb24gdGhlIFNpdGUsIG9yIHRvIGdlbmVyYXRlIGF1dG9tYXRlZCBzZWFyY2hlcywgcmVxdWVzdHMsIG9yIHF1ZXJpZXMgdG8gdGhlIFNpdGUuPC9wPlxuXG4gICAgICAgIDxwPldlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHJldmlldyBhbnkgVXNlciBDb250ZW50LCBhbmQgdG8gaW52ZXN0aWdhdGUgYW5kL29yIHRha2UgYXBwcm9wcmlhdGUgYWN0aW9uIGFnYWluc3QgeW91IGluIG91ciBzb2xlIGRpc2NyZXRpb24gaWYgeW91IHZpb2xhdGUgdGhlIEFjY2VwdGFibGUgVXNlIFBvbGljeSBvciBhbnkgb3RoZXIgcHJvdmlzaW9uIG9mIHRoZXNlIFRlcm1zIG9yIG90aGVyd2lzZSBjcmVhdGUgbGlhYmlsaXR5IGZvciB1cyBvciBhbnkgb3RoZXIgcGVyc29uLiBTdWNoIGFjdGlvbiBtYXkgaW5jbHVkZSByZW1vdmluZyBvciBtb2RpZnlpbmcgeW91ciBVc2VyIENvbnRlbnQsIHRlcm1pbmF0aW5nIHlvdXIgQWNjb3VudCBpbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA4LCBhbmQvb3IgcmVwb3J0aW5nIHlvdSB0byBsYXcgZW5mb3JjZW1lbnQgYXV0aG9yaXRpZXMuPC9wPlxuXG4gICAgICAgIDxwPklmIHlvdSBwcm92aWRlIENvbXBhbnkgd2l0aCBhbnkgZmVlZGJhY2sgb3Igc3VnZ2VzdGlvbnMgcmVnYXJkaW5nIHRoZSBTaXRlLCB5b3UgaGVyZWJ5IGFzc2lnbiB0byBDb21wYW55IGFsbCByaWdodHMgaW4gc3VjaCBGZWVkYmFjayBhbmQgYWdyZWUgdGhhdCBDb21wYW55IHNoYWxsIGhhdmUgdGhlIHJpZ2h0IHRvIHVzZSBhbmQgZnVsbHkgZXhwbG9pdCBzdWNoIEZlZWRiYWNrIGFuZCByZWxhdGVkIGluZm9ybWF0aW9uIGluIGFueSBtYW5uZXIgaXQgYmVsaWV2ZXMgYXBwcm9wcmlhdGUuwqAgQ29tcGFueSB3aWxsIHRyZWF0IGFueSBGZWVkYmFjayB5b3UgcHJvdmlkZSB0byBDb21wYW55IGFzIG5vbi1jb25maWRlbnRpYWwgYW5kIG5vbi1wcm9wcmlldGFyeS48L3A+XG5cbiAgICAgICAgPHA+WW91IGFncmVlIHRvIGluZGVtbmlmeSBhbmQgaG9sZCBDb21wYW55IGFuZCBpdHMgb2ZmaWNlcnMsIGVtcGxveWVlcywgYW5kIGFnZW50cyBoYXJtbGVzcywgaW5jbHVkaW5nIGNvc3RzIGFuZCBhdHRvcm5leXPigJkgZmVlcywgZnJvbSBhbnkgY2xhaW0gb3IgZGVtYW5kIG1hZGUgYnkgYW55IHRoaXJkLXBhcnR5IGR1ZSB0byBvciBhcmlzaW5nIG91dCBvZiAoYSkgeW91ciB1c2Ugb2YgdGhlIFNpdGUsIChiKSB5b3VyIHZpb2xhdGlvbiBvZiB0aGVzZSBUZXJtcywgKGMpIHlvdXIgdmlvbGF0aW9uIG9mIGFwcGxpY2FibGUgbGF3cyBvciByZWd1bGF0aW9ucyBvciAoZCkgeW91ciBVc2VyIENvbnRlbnQuwqAgQ29tcGFueSByZXNlcnZlcyB0aGUgcmlnaHQgdG8gYXNzdW1lIHRoZSBleGNsdXNpdmUgZGVmZW5zZSBhbmQgY29udHJvbCBvZiBhbnkgbWF0dGVyIGZvciB3aGljaCB5b3UgYXJlIHJlcXVpcmVkIHRvIGluZGVtbmlmeSB1cywgYW5kIHlvdSBhZ3JlZSB0byBjb29wZXJhdGUgd2l0aCBvdXIgZGVmZW5zZSBvZiB0aGVzZSBjbGFpbXMuwqAgWW91IGFncmVlIG5vdCB0byBzZXR0bGUgYW55IG1hdHRlciB3aXRob3V0IHRoZSBwcmlvciB3cml0dGVuIGNvbnNlbnQgb2YgQ29tcGFueS7CoCBDb21wYW55IHdpbGwgdXNlIHJlYXNvbmFibGUgZWZmb3J0cyB0byBub3RpZnkgeW91IG9mIGFueSBzdWNoIGNsYWltLCBhY3Rpb24gb3IgcHJvY2VlZGluZyB1cG9uIGJlY29taW5nIGF3YXJlIG9mIGl0LjwvcD5cblxuICAgICAgICA8aDI+VGhpcmQtUGFydHkgTGlua3MgJiBBZHM7IE90aGVyIFVzZXJzPC9oMj5cblxuICAgICAgICA8cD48c3Ryb25nPlRoaXJkLVBhcnR5IExpbmtzICYgQWRzLjwvc3Ryb25nPiBUaGUgU2l0ZSBtYXkgY29udGFpbiBsaW5rcyB0byB0aGlyZC1wYXJ0eSB3ZWJzaXRlcyBhbmQgc2VydmljZXMsIGFuZC9vciBkaXNwbGF5IGFkdmVydGlzZW1lbnRzIGZvciB0aGlyZC1wYXJ0aWVzLsKgIFN1Y2ggVGhpcmQtUGFydHkgTGlua3MgJiBBZHMgYXJlIG5vdCB1bmRlciB0aGUgY29udHJvbCBvZiBDb21wYW55LCBhbmQgQ29tcGFueSBpcyBub3QgcmVzcG9uc2libGUgZm9yIGFueSBUaGlyZC1QYXJ0eSBMaW5rcyAmIEFkcy7CoCBDb21wYW55IHByb3ZpZGVzIGFjY2VzcyB0byB0aGVzZSBUaGlyZC1QYXJ0eSBMaW5rcyAmIEFkcyBvbmx5IGFzIGEgY29udmVuaWVuY2UgdG8geW91LCBhbmQgZG9lcyBub3QgcmV2aWV3LCBhcHByb3ZlLCBtb25pdG9yLCBlbmRvcnNlLCB3YXJyYW50LCBvciBtYWtlIGFueSByZXByZXNlbnRhdGlvbnMgd2l0aCByZXNwZWN0IHRvIFRoaXJkLVBhcnR5IExpbmtzICYgQWRzLsKgIFlvdSB1c2UgYWxsIFRoaXJkLVBhcnR5IExpbmtzICYgQWRzIGF0IHlvdXIgb3duIHJpc2ssIGFuZCBzaG91bGQgYXBwbHkgYSBzdWl0YWJsZSBsZXZlbCBvZiBjYXV0aW9uIGFuZCBkaXNjcmV0aW9uIGluIGRvaW5nIHNvLiBXaGVuIHlvdSBjbGljayBvbiBhbnkgb2YgdGhlIFRoaXJkLVBhcnR5IExpbmtzICYgQWRzLCB0aGUgYXBwbGljYWJsZSB0aGlyZCBwYXJ0eeKAmXMgdGVybXMgYW5kIHBvbGljaWVzIGFwcGx5LCBpbmNsdWRpbmcgdGhlIHRoaXJkIHBhcnR54oCZcyBwcml2YWN5IGFuZCBkYXRhIGdhdGhlcmluZyBwcmFjdGljZXMuPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+T3RoZXIgVXNlcnMuPC9zdHJvbmc+IEVhY2ggU2l0ZSB1c2VyIGlzIHNvbGVseSByZXNwb25zaWJsZSBmb3IgYW55IGFuZCBhbGwgb2YgaXRzIG93biBVc2VyIENvbnRlbnQuwqAgQmVjYXVzZSB3ZSBkbyBub3QgY29udHJvbCBVc2VyIENvbnRlbnQsIHlvdSBhY2tub3dsZWRnZSBhbmQgYWdyZWUgdGhhdCB3ZSBhcmUgbm90IHJlc3BvbnNpYmxlIGZvciBhbnkgVXNlciBDb250ZW50LCB3aGV0aGVyIHByb3ZpZGVkIGJ5IHlvdSBvciBieSBvdGhlcnMuwqAgWW91IGFncmVlIHRoYXQgQ29tcGFueSB3aWxsIG5vdCBiZSByZXNwb25zaWJsZSBmb3IgYW55IGxvc3Mgb3IgZGFtYWdlIGluY3VycmVkIGFzIHRoZSByZXN1bHQgb2YgYW55IHN1Y2ggaW50ZXJhY3Rpb25zLsKgIElmIHRoZXJlIGlzIGEgZGlzcHV0ZSBiZXR3ZWVuIHlvdSBhbmQgYW55IFNpdGUgdXNlciwgd2UgYXJlIHVuZGVyIG5vIG9ibGlnYXRpb24gdG8gYmVjb21lIGludm9sdmVkLjwvcD5cblxuICAgICAgICA8cD5Zb3UgaGVyZWJ5IHJlbGVhc2UgYW5kIGZvcmV2ZXIgZGlzY2hhcmdlIHRoZSBDb21wYW55IGFuZCBvdXIgb2ZmaWNlcnMsIGVtcGxveWVlcywgYWdlbnRzLCBzdWNjZXNzb3JzLCBhbmQgYXNzaWducyBmcm9tLCBhbmQgaGVyZWJ5IHdhaXZlIGFuZCByZWxpbnF1aXNoLCBlYWNoIGFuZCBldmVyeSBwYXN0LCBwcmVzZW50IGFuZCBmdXR1cmUgZGlzcHV0ZSwgY2xhaW0sIGNvbnRyb3ZlcnN5LCBkZW1hbmQsIHJpZ2h0LCBvYmxpZ2F0aW9uLCBsaWFiaWxpdHksIGFjdGlvbiBhbmQgY2F1c2Ugb2YgYWN0aW9uIG9mIGV2ZXJ5IGtpbmQgYW5kIG5hdHVyZSwgdGhhdCBoYXMgYXJpc2VuIG9yIGFyaXNlcyBkaXJlY3RseSBvciBpbmRpcmVjdGx5IG91dCBvZiwgb3IgdGhhdCByZWxhdGVzIGRpcmVjdGx5IG9yIGluZGlyZWN0bHkgdG8sIHRoZSBTaXRlLiBJZiB5b3UgYXJlIGEgQ2FsaWZvcm5pYSByZXNpZGVudCwgeW91IGhlcmVieSB3YWl2ZSBDYWxpZm9ybmlhIGNpdmlsIGNvZGUgc2VjdGlvbiAxNTQyIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgZm9yZWdvaW5nLCB3aGljaCBzdGF0ZXM6IFwiYSBnZW5lcmFsIHJlbGVhc2UgZG9lcyBub3QgZXh0ZW5kIHRvIGNsYWltcyB3aGljaCB0aGUgY3JlZGl0b3IgZG9lcyBub3Qga25vdyBvciBzdXNwZWN0IHRvIGV4aXN0IGluIGhpcyBvciBoZXIgZmF2b3IgYXQgdGhlIHRpbWUgb2YgZXhlY3V0aW5nIHRoZSByZWxlYXNlLCB3aGljaCBpZiBrbm93biBieSBoaW0gb3IgaGVyIG11c3QgaGF2ZSBtYXRlcmlhbGx5IGFmZmVjdGVkIGhpcyBvciBoZXIgc2V0dGxlbWVudCB3aXRoIHRoZSBkZWJ0b3IuXCI8L3A+XG5cbiAgICAgICAgPHA+PHN0cm9uZz5Db29raWVzIGFuZCBXZWIgQmVhY29ucy48L3N0cm9uZz4gTGlrZSBhbnkgb3RoZXIgd2Vic2l0ZSwgWWFjayB1c2VzIOKAmGNvb2tpZXPigJkuIFRoZXNlIGNvb2tpZXMgYXJlIHVzZWQgdG8gc3RvcmUgaW5mb3JtYXRpb24gaW5jbHVkaW5nIHZpc2l0b3Jz4oCZIHByZWZlcmVuY2VzLCBhbmQgdGhlIHBhZ2VzIG9uIHRoZSB3ZWJzaXRlIHRoYXQgdGhlIHZpc2l0b3IgYWNjZXNzZWQgb3IgdmlzaXRlZC4gVGhlIGluZm9ybWF0aW9uIGlzIHVzZWQgdG8gb3B0aW1pemUgdGhlIHVzZXJz4oCZIGV4cGVyaWVuY2UgYnkgY3VzdG9taXppbmcgb3VyIHdlYiBwYWdlIGNvbnRlbnQgYmFzZWQgb24gdmlzaXRvcnPigJkgYnJvd3NlciB0eXBlIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi48L3A+XG5cbiAgICAgICAgPGgyPkRpc2NsYWltZXJzPC9oMj5cblxuICAgICAgICA8cD5UaGUgc2l0ZSBpcyBwcm92aWRlZCBvbiBhbiBcImFzLWlzXCIgYW5kIFwiYXMgYXZhaWxhYmxlXCIgYmFzaXMsIGFuZCBjb21wYW55IGFuZCBvdXIgc3VwcGxpZXJzIGV4cHJlc3NseSBkaXNjbGFpbSBhbnkgYW5kIGFsbCB3YXJyYW50aWVzIGFuZCBjb25kaXRpb25zIG9mIGFueSBraW5kLCB3aGV0aGVyIGV4cHJlc3MsIGltcGxpZWQsIG9yIHN0YXR1dG9yeSwgaW5jbHVkaW5nIGFsbCB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMgb2YgbWVyY2hhbnRhYmlsaXR5LCBmaXRuZXNzIGZvciBhIHBhcnRpY3VsYXIgcHVycG9zZSwgdGl0bGUsIHF1aWV0IGVuam95bWVudCwgYWNjdXJhY3ksIG9yIG5vbi1pbmZyaW5nZW1lbnQuwqAgV2UgYW5kIG91ciBzdXBwbGllcnMgbWFrZSBub3QgZ3VhcmFudGVlIHRoYXQgdGhlIHNpdGUgd2lsbCBtZWV0IHlvdXIgcmVxdWlyZW1lbnRzLCB3aWxsIGJlIGF2YWlsYWJsZSBvbiBhbiB1bmludGVycnVwdGVkLCB0aW1lbHksIHNlY3VyZSwgb3IgZXJyb3ItZnJlZSBiYXNpcywgb3Igd2lsbCBiZSBhY2N1cmF0ZSwgcmVsaWFibGUsIGZyZWUgb2YgdmlydXNlcyBvciBvdGhlciBoYXJtZnVsIGNvZGUsIGNvbXBsZXRlLCBsZWdhbCwgb3Igc2FmZS7CoCBJZiBhcHBsaWNhYmxlIGxhdyByZXF1aXJlcyBhbnkgd2FycmFudGllcyB3aXRoIHJlc3BlY3QgdG8gdGhlIHNpdGUsIGFsbCBzdWNoIHdhcnJhbnRpZXMgYXJlIGxpbWl0ZWQgaW4gZHVyYXRpb24gdG8gbmluZXR5ICg5MCkgZGF5cyBmcm9tIHRoZSBkYXRlIG9mIGZpcnN0IHVzZS48L3A+XG5cbiAgICAgICAgPHA+U29tZSBqdXJpc2RpY3Rpb25zIGRvIG5vdCBhbGxvdyB0aGUgZXhjbHVzaW9uIG9mIGltcGxpZWQgd2FycmFudGllcywgc28gdGhlIGFib3ZlIGV4Y2x1c2lvbiBtYXkgbm90IGFwcGx5IHRvIHlvdS7CoCBTb21lIGp1cmlzZGljdGlvbnMgZG8gbm90IGFsbG93IGxpbWl0YXRpb25zIG9uIGhvdyBsb25nIGFuIGltcGxpZWQgd2FycmFudHkgbGFzdHMsIHNvIHRoZSBhYm92ZSBsaW1pdGF0aW9uIG1heSBub3QgYXBwbHkgdG8geW91LjwvcD5cblxuICAgICAgICA8aDI+TGltaXRhdGlvbiBvbiBMaWFiaWxpdHk8L2gyPlxuXG4gICAgICAgIDxwPlRvIHRoZSBtYXhpbXVtIGV4dGVudCBwZXJtaXR0ZWQgYnkgbGF3LCBpbiBubyBldmVudCBzaGFsbCBjb21wYW55IG9yIG91ciBzdXBwbGllcnMgYmUgbGlhYmxlIHRvIHlvdSBvciBhbnkgdGhpcmQtcGFydHkgZm9yIGFueSBsb3N0IHByb2ZpdHMsIGxvc3QgZGF0YSwgY29zdHMgb2YgcHJvY3VyZW1lbnQgb2Ygc3Vic3RpdHV0ZSBwcm9kdWN0cywgb3IgYW55IGluZGlyZWN0LCBjb25zZXF1ZW50aWFsLCBleGVtcGxhcnksIGluY2lkZW50YWwsIHNwZWNpYWwgb3IgcHVuaXRpdmUgZGFtYWdlcyBhcmlzaW5nIGZyb20gb3IgcmVsYXRpbmcgdG8gdGhlc2UgdGVybXMgb3IgeW91ciB1c2Ugb2YsIG9yIGluY2FwYWJpbGl0eSB0byB1c2UgdGhlIHNpdGUgZXZlbiBpZiBjb21wYW55IGhhcyBiZWVuIGFkdmlzZWQgb2YgdGhlIHBvc3NpYmlsaXR5IG9mIHN1Y2ggZGFtYWdlcy7CoCBBY2Nlc3MgdG8gYW5kIHVzZSBvZiB0aGUgc2l0ZSBpcyBhdCB5b3VyIG93biBkaXNjcmV0aW9uIGFuZCByaXNrLCBhbmQgeW91IHdpbGwgYmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBhbnkgZGFtYWdlIHRvIHlvdXIgZGV2aWNlIG9yIGNvbXB1dGVyIHN5c3RlbSwgb3IgbG9zcyBvZiBkYXRhIHJlc3VsdGluZyB0aGVyZWZyb20uPC9wPlxuXG4gICAgICAgIDxwPlRvIHRoZSBtYXhpbXVtIGV4dGVudCBwZXJtaXR0ZWQgYnkgbGF3LCBub3R3aXRoc3RhbmRpbmcgYW55dGhpbmcgdG8gdGhlIGNvbnRyYXJ5IGNvbnRhaW5lZCBoZXJlaW4sIG91ciBsaWFiaWxpdHkgdG8geW91IGZvciBhbnkgZGFtYWdlcyBhcmlzaW5nIGZyb20gb3IgcmVsYXRlZCB0byB0aGlzIGFncmVlbWVudCwgd2lsbCBhdCBhbGwgdGltZXMgYmUgbGltaXRlZCB0byBhIG1heGltdW0gb2YgZmlmdHkgVS5TLiBkb2xsYXJzICh1LnMuICQ1MCkuIFRoZSBleGlzdGVuY2Ugb2YgbW9yZSB0aGFuIG9uZSBjbGFpbSB3aWxsIG5vdCBlbmxhcmdlIHRoaXMgbGltaXQuwqAgWW91IGFncmVlIHRoYXQgb3VyIHN1cHBsaWVycyB3aWxsIGhhdmUgbm8gbGlhYmlsaXR5IG9mIGFueSBraW5kIGFyaXNpbmcgZnJvbSBvciByZWxhdGluZyB0byB0aGlzIGFncmVlbWVudC48L3A+XG5cbiAgICAgICAgPHA+U29tZSBqdXJpc2RpY3Rpb25zIGRvIG5vdCBhbGxvdyB0aGUgbGltaXRhdGlvbiBvciBleGNsdXNpb24gb2YgbGlhYmlsaXR5IGZvciBpbmNpZGVudGFsIG9yIGNvbnNlcXVlbnRpYWwgZGFtYWdlcywgc28gdGhlIGFib3ZlIGxpbWl0YXRpb24gb3IgZXhjbHVzaW9uIG1heSBub3QgYXBwbHkgdG8geW91LjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPlRlcm0gYW5kIFRlcm1pbmF0aW9uLjwvc3Ryb25nPiBTdWJqZWN0IHRvIHRoaXMgU2VjdGlvbiwgdGhlc2UgVGVybXMgd2lsbCByZW1haW4gaW4gZnVsbCBmb3JjZSBhbmQgZWZmZWN0IHdoaWxlIHlvdSB1c2UgdGhlIFNpdGUuwqAgV2UgbWF5IHN1c3BlbmQgb3IgdGVybWluYXRlIHlvdXIgcmlnaHRzIHRvIHVzZSB0aGUgU2l0ZSBhdCBhbnkgdGltZSBmb3IgYW55IHJlYXNvbiBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCBpbmNsdWRpbmcgZm9yIGFueSB1c2Ugb2YgdGhlIFNpdGUgaW4gdmlvbGF0aW9uIG9mIHRoZXNlIFRlcm1zLsKgIFVwb24gdGVybWluYXRpb24gb2YgeW91ciByaWdodHMgdW5kZXIgdGhlc2UgVGVybXMsIHlvdXIgQWNjb3VudCBhbmQgcmlnaHQgdG8gYWNjZXNzIGFuZCB1c2UgdGhlIFNpdGUgd2lsbCB0ZXJtaW5hdGUgaW1tZWRpYXRlbHkuwqAgWW91IHVuZGVyc3RhbmQgdGhhdCBhbnkgdGVybWluYXRpb24gb2YgeW91ciBBY2NvdW50IG1heSBpbnZvbHZlIGRlbGV0aW9uIG9mIHlvdXIgVXNlciBDb250ZW50IGFzc29jaWF0ZWQgd2l0aCB5b3VyIEFjY291bnQgZnJvbSBvdXIgbGl2ZSBkYXRhYmFzZXMuwqAgQ29tcGFueSB3aWxsIG5vdCBoYXZlIGFueSBsaWFiaWxpdHkgd2hhdHNvZXZlciB0byB5b3UgZm9yIGFueSB0ZXJtaW5hdGlvbiBvZiB5b3VyIHJpZ2h0cyB1bmRlciB0aGVzZSBUZXJtcy7CoCBFdmVuIGFmdGVyIHlvdXIgcmlnaHRzIHVuZGVyIHRoZXNlIFRlcm1zIGFyZSB0ZXJtaW5hdGVkLCB0aGUgZm9sbG93aW5nIHByb3Zpc2lvbnMgb2YgdGhlc2UgVGVybXMgd2lsbCByZW1haW4gaW4gZWZmZWN0OiBTZWN0aW9ucyAyIHRocm91Z2ggMi41LCBTZWN0aW9uIDMgYW5kIFNlY3Rpb25zIDQgdGhyb3VnaCAxMC48L3A+XG5cbiAgICAgICAgPGgyPkNvcHlyaWdodCBQb2xpY3kuPC9oMj5cblxuICAgICAgICA8cD5Db21wYW55IHJlc3BlY3RzIHRoZSBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb2Ygb3RoZXJzIGFuZCBhc2tzIHRoYXQgdXNlcnMgb2Ygb3VyIFNpdGUgZG8gdGhlIHNhbWUuwqAgSW4gY29ubmVjdGlvbiB3aXRoIG91ciBTaXRlLCB3ZSBoYXZlIGFkb3B0ZWQgYW5kIGltcGxlbWVudGVkIGEgcG9saWN5IHJlc3BlY3RpbmcgY29weXJpZ2h0IGxhdyB0aGF0IHByb3ZpZGVzIGZvciB0aGUgcmVtb3ZhbCBvZiBhbnkgaW5mcmluZ2luZyBtYXRlcmlhbHMgYW5kIGZvciB0aGUgdGVybWluYXRpb24gb2YgdXNlcnMgb2Ygb3VyIG9ubGluZSBTaXRlIHdobyBhcmUgcmVwZWF0ZWQgaW5mcmluZ2VycyBvZiBpbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzLCBpbmNsdWRpbmcgY29weXJpZ2h0cy7CoCBJZiB5b3UgYmVsaWV2ZSB0aGF0IG9uZSBvZiBvdXIgdXNlcnMgaXMsIHRocm91Z2ggdGhlIHVzZSBvZiBvdXIgU2l0ZSwgdW5sYXdmdWxseSBpbmZyaW5naW5nIHRoZSBjb3B5cmlnaHQocykgaW4gYSB3b3JrLCBhbmQgd2lzaCB0byBoYXZlIHRoZSBhbGxlZ2VkbHkgaW5mcmluZ2luZyBtYXRlcmlhbCByZW1vdmVkLCB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIGluIHRoZSBmb3JtIG9mIGEgd3JpdHRlbiBub3RpZmljYXRpb24gKHB1cnN1YW50IHRvIDE3IFUuUy5DLiDCpyA1MTIoYykpIG11c3QgYmUgcHJvdmlkZWQgdG8gb3VyIGRlc2lnbmF0ZWQgQ29weXJpZ2h0IEFnZW50OjwvcD5cblxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+eW91ciBwaHlzaWNhbCBvciBlbGVjdHJvbmljIHNpZ25hdHVyZTs8L2xpPlxuICAgICAgICAgICAgPGxpPmlkZW50aWZpY2F0aW9uIG9mIHRoZSBjb3B5cmlnaHRlZCB3b3JrKHMpIHRoYXQgeW91IGNsYWltIHRvIGhhdmUgYmVlbiBpbmZyaW5nZWQ7PC9saT5cbiAgICAgICAgICAgIDxsaT5pZGVudGlmaWNhdGlvbiBvZiB0aGUgbWF0ZXJpYWwgb24gb3VyIHNlcnZpY2VzIHRoYXQgeW91IGNsYWltIGlzIGluZnJpbmdpbmcgYW5kIHRoYXQgeW91IHJlcXVlc3QgdXMgdG8gcmVtb3ZlOzwvbGk+XG4gICAgICAgICAgICA8bGk+c3VmZmljaWVudCBpbmZvcm1hdGlvbiB0byBwZXJtaXQgdXMgdG8gbG9jYXRlIHN1Y2ggbWF0ZXJpYWw7PC9saT5cbiAgICAgICAgICAgIDxsaT55b3VyIGFkZHJlc3MsIHRlbGVwaG9uZSBudW1iZXIsIGFuZCBlLW1haWwgYWRkcmVzczs8L2xpPlxuICAgICAgICAgICAgPGxpPmEgc3RhdGVtZW50IHRoYXQgeW91IGhhdmUgYSBnb29kIGZhaXRoIGJlbGllZiB0aGF0IHVzZSBvZiB0aGUgb2JqZWN0aW9uYWJsZSBtYXRlcmlhbCBpcyBub3QgYXV0aG9yaXplZCBieSB0aGUgY29weXJpZ2h0IG93bmVyLCBpdHMgYWdlbnQsIG9yIHVuZGVyIHRoZSBsYXc7IGFuZDwvbGk+XG4gICAgICAgICAgICA8bGk+YSBzdGF0ZW1lbnQgdGhhdCB0aGUgaW5mb3JtYXRpb24gaW4gdGhlIG5vdGlmaWNhdGlvbiBpcyBhY2N1cmF0ZSwgYW5kIHVuZGVyIHBlbmFsdHkgb2YgcGVyanVyeSwgdGhhdCB5b3UgYXJlIGVpdGhlciB0aGUgb3duZXIgb2YgdGhlIGNvcHlyaWdodCB0aGF0IGhhcyBhbGxlZ2VkbHkgYmVlbiBpbmZyaW5nZWQgb3IgdGhhdCB5b3UgYXJlIGF1dGhvcml6ZWQgdG8gYWN0IG9uIGJlaGFsZiBvZiB0aGUgY29weXJpZ2h0IG93bmVyLjwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHA+UGxlYXNlIG5vdGUgdGhhdCwgcHVyc3VhbnQgdG8gMTcgVS5TLkMuIMKnIDUxMihmKSwgYW55IG1pc3JlcHJlc2VudGF0aW9uIG9mIG1hdGVyaWFsIGZhY3QgaW4gYSB3cml0dGVuIG5vdGlmaWNhdGlvbiBhdXRvbWF0aWNhbGx5IHN1YmplY3RzIHRoZSBjb21wbGFpbmluZyBwYXJ0eSB0byBsaWFiaWxpdHkgZm9yIGFueSBkYW1hZ2VzLCBjb3N0cyBhbmQgYXR0b3JuZXnigJlzIGZlZXMgaW5jdXJyZWQgYnkgdXMgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSB3cml0dGVuIG5vdGlmaWNhdGlvbiBhbmQgYWxsZWdhdGlvbiBvZiBjb3B5cmlnaHQgaW5mcmluZ2VtZW50LjwvcD5cblxuICAgICAgICA8aDI+R2VuZXJhbDwvaDI+XG5cbiAgICAgICAgPHA+VGhlc2UgVGVybXMgYXJlIHN1YmplY3QgdG8gb2NjYXNpb25hbCByZXZpc2lvbiwgYW5kIGlmIHdlIG1ha2UgYW55IHN1YnN0YW50aWFsIGNoYW5nZXMsIHdlIG1heSBub3RpZnkgeW91IGJ5IHNlbmRpbmcgeW91IGFuIGUtbWFpbCB0byB0aGUgbGFzdCBlLW1haWwgYWRkcmVzcyB5b3UgcHJvdmlkZWQgdG8gdXMgYW5kL29yIGJ5IHByb21pbmVudGx5IHBvc3Rpbmcgbm90aWNlIG9mIHRoZSBjaGFuZ2VzIG9uIG91ciBTaXRlLsKgIFlvdSBhcmUgcmVzcG9uc2libGUgZm9yIHByb3ZpZGluZyB1cyB3aXRoIHlvdXIgbW9zdCBjdXJyZW50IGUtbWFpbCBhZGRyZXNzLsKgIEluIHRoZSBldmVudCB0aGF0IHRoZSBsYXN0IGUtbWFpbCBhZGRyZXNzIHRoYXQgeW91IGhhdmUgcHJvdmlkZWQgdXMgaXMgbm90IHZhbGlkIG91ciBkaXNwYXRjaCBvZiB0aGUgZS1tYWlsIGNvbnRhaW5pbmcgc3VjaCBub3RpY2Ugd2lsbCBub25ldGhlbGVzcyBjb25zdGl0dXRlIGVmZmVjdGl2ZSBub3RpY2Ugb2YgdGhlIGNoYW5nZXMgZGVzY3JpYmVkIGluIHRoZSBub3RpY2UuwqAgQW55IGNoYW5nZXMgdG8gdGhlc2UgVGVybXMgd2lsbCBiZSBlZmZlY3RpdmUgdXBvbiB0aGUgZWFybGllc3Qgb2YgdGhpcnR5ICgzMCkgY2FsZW5kYXIgZGF5cyBmb2xsb3dpbmcgb3VyIGRpc3BhdGNoIG9mIGFuIGUtbWFpbCBub3RpY2UgdG8geW91IG9yIHRoaXJ0eSAoMzApIGNhbGVuZGFyIGRheXMgZm9sbG93aW5nIG91ciBwb3N0aW5nIG9mIG5vdGljZSBvZiB0aGUgY2hhbmdlcyBvbiBvdXIgU2l0ZS7CoCBUaGVzZSBjaGFuZ2VzIHdpbGwgYmUgZWZmZWN0aXZlIGltbWVkaWF0ZWx5IGZvciBuZXcgdXNlcnMgb2Ygb3VyIFNpdGUuwqAgQ29udGludWVkIHVzZSBvZiBvdXIgU2l0ZSBmb2xsb3dpbmcgbm90aWNlIG9mIHN1Y2ggY2hhbmdlcyBzaGFsbCBpbmRpY2F0ZSB5b3VyIGFja25vd2xlZGdlbWVudCBvZiBzdWNoIGNoYW5nZXMgYW5kIGFncmVlbWVudCB0byBiZSBib3VuZCBieSB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2Ygc3VjaCBjaGFuZ2VzLlxuICAgICAgICBEaXNwdXRlIFJlc29sdXRpb24uIFBsZWFzZSByZWFkIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IGNhcmVmdWxseS4gSXQgaXMgcGFydCBvZiB5b3VyIGNvbnRyYWN0IHdpdGggQ29tcGFueSBhbmQgYWZmZWN0cyB5b3VyIHJpZ2h0cy7CoCBJdCBjb250YWlucyBwcm9jZWR1cmVzIGZvciBNQU5EQVRPUlkgQklORElORyBBUkJJVFJBVElPTiBBTkQgQSBDTEFTUyBBQ1RJT04gV0FJVkVSLjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPkFwcGxpY2FiaWxpdHkgb2YgQXJiaXRyYXRpb24gQWdyZWVtZW50Ljwvc3Ryb25nPiBBbGwgY2xhaW1zIGFuZCBkaXNwdXRlcyBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFRlcm1zIG9yIHRoZSB1c2Ugb2YgYW55IHByb2R1Y3Qgb3Igc2VydmljZSBwcm92aWRlZCBieSB0aGUgQ29tcGFueSB0aGF0IGNhbm5vdCBiZSByZXNvbHZlZCBpbmZvcm1hbGx5IG9yIGluIHNtYWxsIGNsYWltcyBjb3VydCBzaGFsbCBiZSByZXNvbHZlZCBieSBiaW5kaW5nIGFyYml0cmF0aW9uIG9uIGFuIGluZGl2aWR1YWwgYmFzaXMgdW5kZXIgdGhlIHRlcm1zIG9mIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50LsKgIFVubGVzcyBvdGhlcndpc2UgYWdyZWVkIHRvLCBhbGwgYXJiaXRyYXRpb24gcHJvY2VlZGluZ3Mgc2hhbGwgYmUgaGVsZCBpbiBFbmdsaXNoLsKgIFRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IGFwcGxpZXMgdG8geW91IGFuZCB0aGUgQ29tcGFueSwgYW5kIHRvIGFueSBzdWJzaWRpYXJpZXMsIGFmZmlsaWF0ZXMsIGFnZW50cywgZW1wbG95ZWVzLCBwcmVkZWNlc3NvcnMgaW4gaW50ZXJlc3QsIHN1Y2Nlc3NvcnMsIGFuZCBhc3NpZ25zLCBhcyB3ZWxsIGFzIGFsbCBhdXRob3JpemVkIG9yIHVuYXV0aG9yaXplZCB1c2VycyBvciBiZW5lZmljaWFyaWVzIG9mIHNlcnZpY2VzIG9yIGdvb2RzIHByb3ZpZGVkIHVuZGVyIHRoZSBUZXJtcy48L3A+XG5cbiAgICAgICAgPHA+PHN0cm9uZz5Ob3RpY2UgUmVxdWlyZW1lbnQgYW5kIEluZm9ybWFsIERpc3B1dGUgUmVzb2x1dGlvbi48L3N0cm9uZz4gQmVmb3JlIGVpdGhlciBwYXJ0eSBtYXkgc2VlayBhcmJpdHJhdGlvbiwgdGhlIHBhcnR5IG11c3QgZmlyc3Qgc2VuZCB0byB0aGUgb3RoZXIgcGFydHkgYSB3cml0dGVuIE5vdGljZSBvZiBEaXNwdXRlIGRlc2NyaWJpbmcgdGhlIG5hdHVyZSBhbmQgYmFzaXMgb2YgdGhlIGNsYWltIG9yIGRpc3B1dGUsIGFuZCB0aGUgcmVxdWVzdGVkIHJlbGllZi7CoCBBIE5vdGljZSB0byB0aGUgQ29tcGFueSBzaG91bGQgYmUgc2VudCB0bzogNjAgTWFyaW5lIERyaXZlLCBVbWhsYW5nYS4gQWZ0ZXIgdGhlIE5vdGljZSBpcyByZWNlaXZlZCwgeW91IGFuZCB0aGUgQ29tcGFueSBtYXkgYXR0ZW1wdCB0byByZXNvbHZlIHRoZSBjbGFpbSBvciBkaXNwdXRlIGluZm9ybWFsbHkuwqAgSWYgeW91IGFuZCB0aGUgQ29tcGFueSBkbyBub3QgcmVzb2x2ZSB0aGUgY2xhaW0gb3IgZGlzcHV0ZSB3aXRoaW4gdGhpcnR5ICgzMCkgZGF5cyBhZnRlciB0aGUgTm90aWNlIGlzIHJlY2VpdmVkLCBlaXRoZXIgcGFydHkgbWF5IGJlZ2luIGFuIGFyYml0cmF0aW9uIHByb2NlZWRpbmcuwqAgVGhlIGFtb3VudCBvZiBhbnkgc2V0dGxlbWVudCBvZmZlciBtYWRlIGJ5IGFueSBwYXJ0eSBtYXkgbm90IGJlIGRpc2Nsb3NlZCB0byB0aGUgYXJiaXRyYXRvciB1bnRpbCBhZnRlciB0aGUgYXJiaXRyYXRvciBoYXMgZGV0ZXJtaW5lZCB0aGUgYW1vdW50IG9mIHRoZSBhd2FyZCB0byB3aGljaCBlaXRoZXIgcGFydHkgaXMgZW50aXRsZWQuPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+QXJiaXRyYXRpb24gUnVsZXMuPC9zdHJvbmc+IEFyYml0cmF0aW9uIHNoYWxsIGJlIGluaXRpYXRlZCB0aHJvdWdoIHRoZSBBbWVyaWNhbiBBcmJpdHJhdGlvbiBBc3NvY2lhdGlvbiwgYW4gZXN0YWJsaXNoZWQgYWx0ZXJuYXRpdmUgZGlzcHV0ZSByZXNvbHV0aW9uIHByb3ZpZGVyIHRoYXQgb2ZmZXJzIGFyYml0cmF0aW9uIGFzIHNldCBmb3J0aCBpbiB0aGlzIHNlY3Rpb24uwqAgSWYgQUFBIGlzIG5vdCBhdmFpbGFibGUgdG8gYXJiaXRyYXRlLCB0aGUgcGFydGllcyBzaGFsbCBhZ3JlZSB0byBzZWxlY3QgYW4gYWx0ZXJuYXRpdmUgQURSIFByb3ZpZGVyLsKgIFRoZSBydWxlcyBvZiB0aGUgQURSIFByb3ZpZGVyIHNoYWxsIGdvdmVybiBhbGwgYXNwZWN0cyBvZiB0aGUgYXJiaXRyYXRpb24gZXhjZXB0IHRvIHRoZSBleHRlbnQgc3VjaCBydWxlcyBhcmUgaW4gY29uZmxpY3Qgd2l0aCB0aGUgVGVybXMuwqAgVGhlIEFBQSBDb25zdW1lciBBcmJpdHJhdGlvbiBSdWxlcyBnb3Zlcm5pbmcgdGhlIGFyYml0cmF0aW9uIGFyZSBhdmFpbGFibGUgb25saW5lIGF0IGFkci5vcmcgb3IgYnkgY2FsbGluZyB0aGUgQUFBIGF0IDEtODAwLTc3OC03ODc5LsKgIFRoZSBhcmJpdHJhdGlvbiBzaGFsbCBiZSBjb25kdWN0ZWQgYnkgYSBzaW5nbGUsIG5ldXRyYWwgYXJiaXRyYXRvci7CoCBBbnkgY2xhaW1zIG9yIGRpc3B1dGVzIHdoZXJlIHRoZSB0b3RhbCBhbW91bnQgb2YgdGhlIGF3YXJkIHNvdWdodCBpcyBsZXNzIHRoYW4gVGVuIFRob3VzYW5kIFUuUy4gRG9sbGFycyAoVVMgJDEwLDAwMC4wMCkgbWF5IGJlIHJlc29sdmVkIHRocm91Z2ggYmluZGluZyBub24tYXBwZWFyYW5jZS1iYXNlZCBhcmJpdHJhdGlvbiwgYXQgdGhlIG9wdGlvbiBvZiB0aGUgcGFydHkgc2Vla2luZyByZWxpZWYuwqAgRm9yIGNsYWltcyBvciBkaXNwdXRlcyB3aGVyZSB0aGUgdG90YWwgYW1vdW50IG9mIHRoZSBhd2FyZCBzb3VnaHQgaXMgVGVuIFRob3VzYW5kIFUuUy4gRG9sbGFycyAoVVMgJDEwLDAwMC4wMCkgb3IgbW9yZSwgdGhlIHJpZ2h0IHRvIGEgaGVhcmluZyB3aWxsIGJlIGRldGVybWluZWQgYnkgdGhlIEFyYml0cmF0aW9uIFJ1bGVzLsKgIEFueSBoZWFyaW5nIHdpbGwgYmUgaGVsZCBpbiBhIGxvY2F0aW9uIHdpdGhpbiAxMDAgbWlsZXMgb2YgeW91ciByZXNpZGVuY2UsIHVubGVzcyB5b3UgcmVzaWRlIG91dHNpZGUgb2YgdGhlIFVuaXRlZCBTdGF0ZXMsIGFuZCB1bmxlc3MgdGhlIHBhcnRpZXMgYWdyZWUgb3RoZXJ3aXNlLsKgIElmIHlvdSByZXNpZGUgb3V0c2lkZSBvZiB0aGUgVS5TLiwgdGhlIGFyYml0cmF0b3Igc2hhbGwgZ2l2ZSB0aGUgcGFydGllcyByZWFzb25hYmxlIG5vdGljZSBvZiB0aGUgZGF0ZSwgdGltZSBhbmQgcGxhY2Ugb2YgYW55IG9yYWwgaGVhcmluZ3MuIEFueSBqdWRnbWVudCBvbiB0aGUgYXdhcmQgcmVuZGVyZWQgYnkgdGhlIGFyYml0cmF0b3IgbWF5IGJlIGVudGVyZWQgaW4gYW55IGNvdXJ0IG9mIGNvbXBldGVudCBqdXJpc2RpY3Rpb24uwqAgSWYgdGhlIGFyYml0cmF0b3IgZ3JhbnRzIHlvdSBhbiBhd2FyZCB0aGF0IGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGFzdCBzZXR0bGVtZW50IG9mZmVyIHRoYXQgdGhlIENvbXBhbnkgbWFkZSB0byB5b3UgcHJpb3IgdG8gdGhlIGluaXRpYXRpb24gb2YgYXJiaXRyYXRpb24sIHRoZSBDb21wYW55IHdpbGwgcGF5IHlvdSB0aGUgZ3JlYXRlciBvZiB0aGUgYXdhcmQgb3IgJDIsNTAwLjAwLsKgIEVhY2ggcGFydHkgc2hhbGwgYmVhciBpdHMgb3duIGNvc3RzIGFuZCBkaXNidXJzZW1lbnRzIGFyaXNpbmcgb3V0IG9mIHRoZSBhcmJpdHJhdGlvbiBhbmQgc2hhbGwgcGF5IGFuIGVxdWFsIHNoYXJlIG9mIHRoZSBmZWVzIGFuZCBjb3N0cyBvZiB0aGUgQURSIFByb3ZpZGVyLjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPkFkZGl0aW9uYWwgUnVsZXMgZm9yIE5vbi1BcHBlYXJhbmNlIEJhc2VkIEFyYml0cmF0aW9uLjwvc3Ryb25nPiBJZiBub24tYXBwZWFyYW5jZSBiYXNlZCBhcmJpdHJhdGlvbiBpcyBlbGVjdGVkLCB0aGUgYXJiaXRyYXRpb24gc2hhbGwgYmUgY29uZHVjdGVkIGJ5IHRlbGVwaG9uZSwgb25saW5lIGFuZC9vciBiYXNlZCBzb2xlbHkgb24gd3JpdHRlbiBzdWJtaXNzaW9uczsgdGhlIHNwZWNpZmljIG1hbm5lciBzaGFsbCBiZSBjaG9zZW4gYnkgdGhlIHBhcnR5IGluaXRpYXRpbmcgdGhlIGFyYml0cmF0aW9uLsKgIFRoZSBhcmJpdHJhdGlvbiBzaGFsbCBub3QgaW52b2x2ZSBhbnkgcGVyc29uYWwgYXBwZWFyYW5jZSBieSB0aGUgcGFydGllcyBvciB3aXRuZXNzZXMgdW5sZXNzIG90aGVyd2lzZSBhZ3JlZWQgYnkgdGhlIHBhcnRpZXMuPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+VGltZSBMaW1pdHMuPC9zdHJvbmc+IElmIHlvdSBvciB0aGUgQ29tcGFueSBwdXJzdWVzIGFyYml0cmF0aW9uLCB0aGUgYXJiaXRyYXRpb24gYWN0aW9uIG11c3QgYmUgaW5pdGlhdGVkIGFuZC9vciBkZW1hbmRlZCB3aXRoaW4gdGhlIHN0YXR1dGUgb2YgbGltaXRhdGlvbnMgYW5kIHdpdGhpbiBhbnkgZGVhZGxpbmUgaW1wb3NlZCB1bmRlciB0aGUgQUFBIFJ1bGVzIGZvciB0aGUgcGVydGluZW50IGNsYWltLjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPkF1dGhvcml0eSBvZiBBcmJpdHJhdG9yLjwvc3Ryb25nPiBJZiBhcmJpdHJhdGlvbiBpcyBpbml0aWF0ZWQsIHRoZSBhcmJpdHJhdG9yIHdpbGwgZGVjaWRlIHRoZSByaWdodHMgYW5kIGxpYWJpbGl0aWVzIG9mIHlvdSBhbmQgdGhlIENvbXBhbnksIGFuZCB0aGUgZGlzcHV0ZSB3aWxsIG5vdCBiZSBjb25zb2xpZGF0ZWQgd2l0aCBhbnkgb3RoZXIgbWF0dGVycyBvciBqb2luZWQgd2l0aCBhbnkgb3RoZXIgY2FzZXMgb3IgcGFydGllcy7CoCBUaGUgYXJiaXRyYXRvciBzaGFsbCBoYXZlIHRoZSBhdXRob3JpdHkgdG8gZ3JhbnQgbW90aW9ucyBkaXNwb3NpdGl2ZSBvZiBhbGwgb3IgcGFydCBvZiBhbnkgY2xhaW0uwqAgVGhlIGFyYml0cmF0b3Igc2hhbGwgaGF2ZSB0aGUgYXV0aG9yaXR5IHRvIGF3YXJkIG1vbmV0YXJ5IGRhbWFnZXMsIGFuZCB0byBncmFudCBhbnkgbm9uLW1vbmV0YXJ5IHJlbWVkeSBvciByZWxpZWYgYXZhaWxhYmxlIHRvIGFuIGluZGl2aWR1YWwgdW5kZXIgYXBwbGljYWJsZSBsYXcsIHRoZSBBQUEgUnVsZXMsIGFuZCB0aGUgVGVybXMuwqAgVGhlIGFyYml0cmF0b3Igc2hhbGwgaXNzdWUgYSB3cml0dGVuIGF3YXJkIGFuZCBzdGF0ZW1lbnQgb2YgZGVjaXNpb24gZGVzY3JpYmluZyB0aGUgZXNzZW50aWFsIGZpbmRpbmdzIGFuZCBjb25jbHVzaW9ucyBvbiB3aGljaCB0aGUgYXdhcmQgaXMgYmFzZWQuwqAgVGhlIGFyYml0cmF0b3IgaGFzIHRoZSBzYW1lIGF1dGhvcml0eSB0byBhd2FyZCByZWxpZWYgb24gYW4gaW5kaXZpZHVhbCBiYXNpcyB0aGF0IGEganVkZ2UgaW4gYSBjb3VydCBvZiBsYXcgd291bGQgaGF2ZS7CoCBUaGUgYXdhcmQgb2YgdGhlIGFyYml0cmF0b3IgaXMgZmluYWwgYW5kIGJpbmRpbmcgdXBvbiB5b3UgYW5kIHRoZSBDb21wYW55LjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPldhaXZlciBvZiBKdXJ5IFRyaWFsLjwvc3Ryb25nPiBUSEUgUEFSVElFUyBIRVJFQlkgV0FJVkUgVEhFSVIgQ09OU1RJVFVUSU9OQUwgQU5EIFNUQVRVVE9SWSBSSUdIVFMgVE8gR08gVE8gQ09VUlQgQU5EIEhBVkUgQSBUUklBTCBJTiBGUk9OVCBPRiBBIEpVREdFIE9SIEEgSlVSWSwgaW5zdGVhZCBlbGVjdGluZyB0aGF0IGFsbCBjbGFpbXMgYW5kIGRpc3B1dGVzIHNoYWxsIGJlIHJlc29sdmVkIGJ5IGFyYml0cmF0aW9uIHVuZGVyIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50LsKgIEFyYml0cmF0aW9uIHByb2NlZHVyZXMgYXJlIHR5cGljYWxseSBtb3JlIGxpbWl0ZWQsIG1vcmUgZWZmaWNpZW50IGFuZCBsZXNzIGV4cGVuc2l2ZSB0aGFuIHJ1bGVzIGFwcGxpY2FibGUgaW4gYSBjb3VydCBhbmQgYXJlIHN1YmplY3QgdG8gdmVyeSBsaW1pdGVkIHJldmlldyBieSBhIGNvdXJ0LsKgIEluIHRoZSBldmVudCBhbnkgbGl0aWdhdGlvbiBzaG91bGQgYXJpc2UgYmV0d2VlbiB5b3UgYW5kIHRoZSBDb21wYW55IGluIGFueSBzdGF0ZSBvciBmZWRlcmFsIGNvdXJ0IGluIGEgc3VpdCB0byB2YWNhdGUgb3IgZW5mb3JjZSBhbiBhcmJpdHJhdGlvbiBhd2FyZCBvciBvdGhlcndpc2UsIFlPVSBBTkQgVEhFIENPTVBBTlkgV0FJVkUgQUxMIFJJR0hUUyBUTyBBIEpVUlkgVFJJQUwsIGluc3RlYWQgZWxlY3RpbmcgdGhhdCB0aGUgZGlzcHV0ZSBiZSByZXNvbHZlZCBieSBhIGp1ZGdlLjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPldhaXZlciBvZiBDbGFzcyBvciBDb25zb2xpZGF0ZWQgQWN0aW9ucy48L3N0cm9uZz4gQWxsIGNsYWltcyBhbmQgZGlzcHV0ZXMgd2l0aGluIHRoZSBzY29wZSBvZiB0aGlzIGFyYml0cmF0aW9uIGFncmVlbWVudCBtdXN0IGJlIGFyYml0cmF0ZWQgb3IgbGl0aWdhdGVkIG9uIGFuIGluZGl2aWR1YWwgYmFzaXMgYW5kIG5vdCBvbiBhIGNsYXNzIGJhc2lzLCBhbmQgY2xhaW1zIG9mIG1vcmUgdGhhbiBvbmUgY3VzdG9tZXIgb3IgdXNlciBjYW5ub3QgYmUgYXJiaXRyYXRlZCBvciBsaXRpZ2F0ZWQgam9pbnRseSBvciBjb25zb2xpZGF0ZWQgd2l0aCB0aG9zZSBvZiBhbnkgb3RoZXIgY3VzdG9tZXIgb3IgdXNlci48L3A+XG5cbiAgICAgICAgPHA+PHN0cm9uZz5Db25maWRlbnRpYWxpdHkuPC9zdHJvbmc+IEFsbCBhc3BlY3RzIG9mIHRoZSBhcmJpdHJhdGlvbiBwcm9jZWVkaW5nIHNoYWxsIGJlIHN0cmljdGx5IGNvbmZpZGVudGlhbC7CoCBUaGUgcGFydGllcyBhZ3JlZSB0byBtYWludGFpbiBjb25maWRlbnRpYWxpdHkgdW5sZXNzIG90aGVyd2lzZSByZXF1aXJlZCBieSBsYXcuwqAgVGhpcyBwYXJhZ3JhcGggc2hhbGwgbm90IHByZXZlbnQgYSBwYXJ0eSBmcm9tIHN1Ym1pdHRpbmcgdG8gYSBjb3VydCBvZiBsYXcgYW55IGluZm9ybWF0aW9uIG5lY2Vzc2FyeSB0byBlbmZvcmNlIHRoaXMgQWdyZWVtZW50LCB0byBlbmZvcmNlIGFuIGFyYml0cmF0aW9uIGF3YXJkLCBvciB0byBzZWVrIGluanVuY3RpdmUgb3IgZXF1aXRhYmxlIHJlbGllZi48L3A+XG5cbiAgICAgICAgPHA+PHN0cm9uZz5TZXZlcmFiaWxpdHkuPC9zdHJvbmc+IElmIGFueSBwYXJ0IG9yIHBhcnRzIG9mIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IGFyZSBmb3VuZCB1bmRlciB0aGUgbGF3IHRvIGJlIGludmFsaWQgb3IgdW5lbmZvcmNlYWJsZSBieSBhIGNvdXJ0IG9mIGNvbXBldGVudCBqdXJpc2RpY3Rpb24sIHRoZW4gc3VjaCBzcGVjaWZpYyBwYXJ0IG9yIHBhcnRzIHNoYWxsIGJlIG9mIG5vIGZvcmNlIGFuZCBlZmZlY3QgYW5kIHNoYWxsIGJlIHNldmVyZWQgYW5kIHRoZSByZW1haW5kZXIgb2YgdGhlIEFncmVlbWVudCBzaGFsbCBjb250aW51ZSBpbiBmdWxsIGZvcmNlIGFuZCBlZmZlY3QuPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+UmlnaHQgdG8gV2FpdmUuPC9zdHJvbmc+IEFueSBvciBhbGwgb2YgdGhlIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgc2V0IGZvcnRoIGluIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IG1heSBiZSB3YWl2ZWQgYnkgdGhlIHBhcnR5IGFnYWluc3Qgd2hvbSB0aGUgY2xhaW0gaXMgYXNzZXJ0ZWQuwqAgU3VjaCB3YWl2ZXIgc2hhbGwgbm90IHdhaXZlIG9yIGFmZmVjdCBhbnkgb3RoZXIgcG9ydGlvbiBvZiB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudC48L3A+XG5cbiAgICAgICAgPHA+PHN0cm9uZz5TdXJ2aXZhbCBvZiBBZ3JlZW1lbnQuPC9zdHJvbmc+IFRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50IHdpbGwgc3Vydml2ZSB0aGUgdGVybWluYXRpb24gb2YgeW91ciByZWxhdGlvbnNoaXAgd2l0aCBDb21wYW55LjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPlNtYWxsIENsYWltcyBDb3VydC48L3N0cm9uZz4gTm9uZXRoZWxlc3MgdGhlIGZvcmVnb2luZywgZWl0aGVyIHlvdSBvciB0aGUgQ29tcGFueSBtYXkgYnJpbmcgYW4gaW5kaXZpZHVhbCBhY3Rpb24gaW4gc21hbGwgY2xhaW1zIGNvdXJ0LjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPkVtZXJnZW5jeSBFcXVpdGFibGUgUmVsaWVmLjwvc3Ryb25nPiBBbnlob3cgdGhlIGZvcmVnb2luZywgZWl0aGVyIHBhcnR5IG1heSBzZWVrIGVtZXJnZW5jeSBlcXVpdGFibGUgcmVsaWVmIGJlZm9yZSBhIHN0YXRlIG9yIGZlZGVyYWwgY291cnQgaW4gb3JkZXIgdG8gbWFpbnRhaW4gdGhlIHN0YXR1cyBxdW8gcGVuZGluZyBhcmJpdHJhdGlvbi7CoCBBIHJlcXVlc3QgZm9yIGludGVyaW0gbWVhc3VyZXMgc2hhbGwgbm90IGJlIGRlZW1lZCBhIHdhaXZlciBvZiBhbnkgb3RoZXIgcmlnaHRzIG9yIG9ibGlnYXRpb25zIHVuZGVyIHRoaXMgQXJiaXRyYXRpb24gQWdyZWVtZW50LjwvcD5cblxuICAgICAgICA8cD48c3Ryb25nPkNsYWltcyBOb3QgU3ViamVjdCB0byBBcmJpdHJhdGlvbi48L3N0cm9uZz4gTm90d2l0aHN0YW5kaW5nIHRoZSBmb3JlZ29pbmcsIGNsYWltcyBvZiBkZWZhbWF0aW9uLCB2aW9sYXRpb24gb2YgdGhlIENvbXB1dGVyIEZyYXVkIGFuZCBBYnVzZSBBY3QsIGFuZCBpbmZyaW5nZW1lbnQgb3IgbWlzYXBwcm9wcmlhdGlvbiBvZiB0aGUgb3RoZXIgcGFydHnigJlzIHBhdGVudCwgY29weXJpZ2h0LCB0cmFkZW1hcmsgb3IgdHJhZGUgc2VjcmV0cyBzaGFsbCBub3QgYmUgc3ViamVjdCB0byB0aGlzIEFyYml0cmF0aW9uIEFncmVlbWVudC48L3A+XG5cbiAgICAgICAgPHA+SW4gYW55IGNpcmN1bXN0YW5jZXMgd2hlcmUgdGhlIGZvcmVnb2luZyBBcmJpdHJhdGlvbiBBZ3JlZW1lbnQgcGVybWl0cyB0aGUgcGFydGllcyB0byBsaXRpZ2F0ZSBpbiBjb3VydCwgdGhlIHBhcnRpZXMgaGVyZWJ5IGFncmVlIHRvIHN1Ym1pdCB0byB0aGUgcGVyc29uYWwganVyaXNkaWN0aW9uIG9mIHRoZSBjb3VydHMgbG9jYXRlZCB3aXRoaW4gTmV0aGVybGFuZHMgQ291bnR5LCBDYWxpZm9ybmlhLCBmb3Igc3VjaCBwdXJwb3Nlcy48L3A+XG5cbiAgICAgICAgPHA+VGhlIFNpdGUgbWF5IGJlIHN1YmplY3QgdG8gVS5TLiBleHBvcnQgY29udHJvbCBsYXdzIGFuZCBtYXkgYmUgc3ViamVjdCB0byBleHBvcnQgb3IgaW1wb3J0IHJlZ3VsYXRpb25zIGluIG90aGVyIGNvdW50cmllcy4gWW91IGFncmVlIG5vdCB0byBleHBvcnQsIHJlLWV4cG9ydCwgb3IgdHJhbnNmZXIsIGRpcmVjdGx5IG9yIGluZGlyZWN0bHksIGFueSBVLlMuIHRlY2huaWNhbCBkYXRhIGFjcXVpcmVkIGZyb20gQ29tcGFueSwgb3IgYW55IHByb2R1Y3RzIHV0aWxpemluZyBzdWNoIGRhdGEsIGluIHZpb2xhdGlvbiBvZiB0aGUgVW5pdGVkIFN0YXRlcyBleHBvcnQgbGF3cyBvciByZWd1bGF0aW9ucy48L3A+XG5cbiAgICAgICAgPHA+Q29tcGFueSBpcyBsb2NhdGVkIGF0IHRoZSBhZGRyZXNzIGluIFNlY3Rpb24gMTAuOC4gSWYgeW91IGFyZSBhIENhbGlmb3JuaWEgcmVzaWRlbnQsIHlvdSBtYXkgcmVwb3J0IGNvbXBsYWludHMgdG8gdGhlIENvbXBsYWludCBBc3Npc3RhbmNlIFVuaXQgb2YgdGhlIERpdmlzaW9uIG9mIENvbnN1bWVyIFByb2R1Y3Qgb2YgdGhlIENhbGlmb3JuaWEgRGVwYXJ0bWVudCBvZiBDb25zdW1lciBBZmZhaXJzIGJ5IGNvbnRhY3RpbmcgdGhlbSBpbiB3cml0aW5nIGF0IDQwMCBSIFN0cmVldCwgU2FjcmFtZW50bywgQ0EgOTU4MTQsIG9yIGJ5IHRlbGVwaG9uZSBhdCAoODAwKSA5NTItNTIxMC48L3A+XG5cbiAgICAgICAgPHA+PHN0cm9uZz5FbGVjdHJvbmljIENvbW11bmljYXRpb25zLjwvc3Ryb25nPiBUaGUgY29tbXVuaWNhdGlvbnMgYmV0d2VlbiB5b3UgYW5kIENvbXBhbnkgdXNlIGVsZWN0cm9uaWMgbWVhbnMsIHdoZXRoZXIgeW91IHVzZSB0aGUgU2l0ZSBvciBzZW5kIHVzIGVtYWlscywgb3Igd2hldGhlciBDb21wYW55IHBvc3RzIG5vdGljZXMgb24gdGhlIFNpdGUgb3IgY29tbXVuaWNhdGVzIHdpdGggeW91IHZpYSBlbWFpbC4gRm9yIGNvbnRyYWN0dWFsIHB1cnBvc2VzLCB5b3UgKGEpIGNvbnNlbnQgdG8gcmVjZWl2ZSBjb21tdW5pY2F0aW9ucyBmcm9tIENvbXBhbnkgaW4gYW4gZWxlY3Ryb25pYyBmb3JtOyBhbmQgKGIpIGFncmVlIHRoYXQgYWxsIHRlcm1zIGFuZCBjb25kaXRpb25zLCBhZ3JlZW1lbnRzLCBub3RpY2VzLCBkaXNjbG9zdXJlcywgYW5kIG90aGVyIGNvbW11bmljYXRpb25zIHRoYXQgQ29tcGFueSBwcm92aWRlcyB0byB5b3UgZWxlY3Ryb25pY2FsbHkgc2F0aXNmeSBhbnkgbGVnYWwgb2JsaWdhdGlvbiB0aGF0IHN1Y2ggY29tbXVuaWNhdGlvbnMgd291bGQgc2F0aXNmeSBpZiBpdCB3ZXJlIGJlIGluIGEgaGFyZCBjb3B5IHdyaXRpbmcuPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+RW50aXJlIFRlcm1zLjwvc3Ryb25nPiBUaGVzZSBUZXJtcyBjb25zdGl0dXRlIHRoZSBlbnRpcmUgYWdyZWVtZW50IGJldHdlZW4geW91IGFuZCB1cyByZWdhcmRpbmcgdGhlIHVzZSBvZiB0aGUgU2l0ZS4gT3VyIGZhaWx1cmUgdG8gZXhlcmNpc2Ugb3IgZW5mb3JjZSBhbnkgcmlnaHQgb3IgcHJvdmlzaW9uIG9mIHRoZXNlIFRlcm1zIHNoYWxsIG5vdCBvcGVyYXRlIGFzIGEgd2FpdmVyIG9mIHN1Y2ggcmlnaHQgb3IgcHJvdmlzaW9uLiBUaGUgc2VjdGlvbiB0aXRsZXMgaW4gdGhlc2UgVGVybXMgYXJlIGZvciBjb252ZW5pZW5jZSBvbmx5IGFuZCBoYXZlIG5vIGxlZ2FsIG9yIGNvbnRyYWN0dWFsIGVmZmVjdC4gVGhlIHdvcmQgXCJpbmNsdWRpbmdcIiBtZWFucyBcImluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cIi4gSWYgYW55IHByb3Zpc2lvbiBvZiB0aGVzZSBUZXJtcyBpcyBoZWxkIHRvIGJlIGludmFsaWQgb3IgdW5lbmZvcmNlYWJsZSwgdGhlIG90aGVyIHByb3Zpc2lvbnMgb2YgdGhlc2UgVGVybXMgd2lsbCBiZSB1bmltcGFpcmVkIGFuZCB0aGUgaW52YWxpZCBvciB1bmVuZm9yY2VhYmxlIHByb3Zpc2lvbiB3aWxsIGJlIGRlZW1lZCBtb2RpZmllZCBzbyB0aGF0IGl0IGlzIHZhbGlkIGFuZCBlbmZvcmNlYWJsZSB0byB0aGUgbWF4aW11bSBleHRlbnQgcGVybWl0dGVkIGJ5IGxhdy7CoCBZb3VyIHJlbGF0aW9uc2hpcCB0byBDb21wYW55IGlzIHRoYXQgb2YgYW4gaW5kZXBlbmRlbnQgY29udHJhY3RvciwgYW5kIG5laXRoZXIgcGFydHkgaXMgYW4gYWdlbnQgb3IgcGFydG5lciBvZiB0aGUgb3RoZXIuwqAgVGhlc2UgVGVybXMsIGFuZCB5b3VyIHJpZ2h0cyBhbmQgb2JsaWdhdGlvbnMgaGVyZWluLCBtYXkgbm90IGJlIGFzc2lnbmVkLCBzdWJjb250cmFjdGVkLCBkZWxlZ2F0ZWQsIG9yIG90aGVyd2lzZSB0cmFuc2ZlcnJlZCBieSB5b3Ugd2l0aG91dCBDb21wYW554oCZcyBwcmlvciB3cml0dGVuIGNvbnNlbnQsIGFuZCBhbnkgYXR0ZW1wdGVkIGFzc2lnbm1lbnQsIHN1YmNvbnRyYWN0LCBkZWxlZ2F0aW9uLCBvciB0cmFuc2ZlciBpbiB2aW9sYXRpb24gb2YgdGhlIGZvcmVnb2luZyB3aWxsIGJlIG51bGwgYW5kIHZvaWQuwqAgQ29tcGFueSBtYXkgZnJlZWx5IGFzc2lnbiB0aGVzZSBUZXJtcy7CoCBUaGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgc2V0IGZvcnRoIGluIHRoZXNlIFRlcm1zIHNoYWxsIGJlIGJpbmRpbmcgdXBvbiBhc3NpZ25lZXMuPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+WW91ciBQcml2YWN5Ljwvc3Ryb25nPiBQbGVhc2UgcmVhZCA8YSBocmVmPVwiaHR0cHM6Ly9wcml2YWN5cG9saWN5dGVtcGxhdGUubmV0L1wiPm91ciBQcml2YWN5IFBvbGljeTwvYT4uPC9wPlxuXG4gICAgICAgIDxwPjxzdHJvbmc+Q29weXJpZ2h0L1RyYWRlbWFyayBJbmZvcm1hdGlvbi48L3N0cm9uZz4gQ29weXJpZ2h0IMKpLiBBbGwgcmlnaHRzIHJlc2VydmVkLsKgIEFsbCB0cmFkZW1hcmtzLCBsb2dvcyBhbmQgc2VydmljZSBtYXJrcyBkaXNwbGF5ZWQgb24gdGhlIFNpdGUgYXJlIG91ciBwcm9wZXJ0eSBvciB0aGUgcHJvcGVydHkgb2Ygb3RoZXIgdGhpcmQtcGFydGllcy4gWW91IGFyZSBub3QgcGVybWl0dGVkIHRvIHVzZSB0aGVzZSBNYXJrcyB3aXRob3V0IG91ciBwcmlvciB3cml0dGVuIGNvbnNlbnQgb3IgdGhlIGNvbnNlbnQgb2Ygc3VjaCB0aGlyZCBwYXJ0eSB3aGljaCBtYXkgb3duIHRoZSBNYXJrcy48L3A+XG5cbiAgICAgICAgPGgyPkNvbnRhY3QgSW5mb3JtYXRpb248L2gyPlxuXG4gICAgICAgIDxwPkFkZHJlc3M6IDYwIE1hcmluZSBEcml2ZSwgVW1obGFuZ2E8L3A+XG4gICAgICAgIDxwPkVtYWlsOiBqby5kdXBsZXNzaXNAeWFjay5jbzwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Yack/website/pages/termsofuse.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, "Terms of use"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Version 1.0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "The Yack website located at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://yack.co",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "https://yack.co"), " is a copyrighted work belonging to Yack. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "All such additional terms, guidelines, and rules are incorporated by reference into these Terms."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "These Terms of Use described the legally binding terms and conditions that oversee your use of the Site.\xA0BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms.\xA0YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also limit the remedies available to you in the event of a dispute. These Terms of Use were created with the help of the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.termsofusegenerator.net",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Terms Of Use Generator"), " and the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.privacy-policy-sample.com",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Privacy Policy Sample"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Access to the Site"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Subject to these Terms."), " Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Certain Restrictions."), " The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms.\xA0 All copyright and other proprietary notices on the Site must be retained on all copies thereof."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Company reserves the right to change, suspend, or cease the Site with or without notice to you.\xA0 You approved that Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "No Support or Maintenance."), " You agree that Company will have no obligation to provide you with any support in connection with the Site."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company\u2019s suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "User Content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "User Content."), " \"User Content\" means any and all information and content that a user submits to the Site. You are exclusively responsible for your User Content. You bear all risks associated with use of your User Content.\xA0 You hereby certify that your User Content does not violate our Acceptable Use Policy.\xA0 You may not represent or imply to others that your User Content is in any way provided, sponsored or endorsed by Company. Because you alone are responsible for your User Content, you may expose yourself to liability. Company is not obliged to backup any User Content that you post; also, your User Content may be deleted at any time without prior notice to you. You are solely responsible for making your own backup copies of your User Content if you desire."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "You hereby grant to Company an irreversible, nonexclusive, royalty-free and fully paid, worldwide license to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use and exploit your User Content, and to grant sublicenses of the foregoing rights, solely for the purposes of including your User Content in the Site.\xA0 You hereby irreversibly waive any claims and assertions of moral rights or attribution with respect to your User Content."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Acceptable Use Policy."), " The following terms constitute our \"Acceptable Use Policy\": You agree not to use the Site to collect, upload, transmit, display, or distribute any User Content (i) that violates any third-party right or any intellectual property or proprietary right; (ii) that is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another\u2019s privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical harm of any kind against any group or individual; (iii) that is harmful to minors in any way; or (iv) that is in violation of any law, regulation, or obligations or restrictions imposed by any third party."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "In addition, you agree not to: (i) upload, transmit, or distribute to or through the Site any software intended to damage or alter a computer system or data; (ii) send through the Site unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of duplicative or unsolicited messages; (iii) use the Site to harvest, collect, gather or assemble information or data regarding other users without their consent; (iv) interfere with, disrupt, or create an undue burden on servers or networks connected to the Site, or violate the regulations, policies or procedures of such networks; (v) attempt to gain unauthorized access to the Site, whether through password mining or any other means; (vi) harass or interfere with any other user\u2019s use and enjoyment of the Site; or (vi) use software or automated agents or scripts to produce multiple accounts on the Site, or to generate automated searches, requests, or queries to the Site."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "We reserve the right to review any User Content, and to investigate and/or take appropriate action against you in our sole discretion if you violate the Acceptable Use Policy or any other provision of these Terms or otherwise create liability for us or any other person. Such action may include removing or modifying your User Content, terminating your Account in accordance with Section 8, and/or reporting you to law enforcement authorities."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "If you provide Company with any feedback or suggestions regarding the Site, you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it believes appropriate.\xA0 Company will treat any Feedback you provide to Company as non-confidential and non-proprietary."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "You agree to indemnify and hold Company and its officers, employees, and agents harmless, including costs and attorneys\u2019 fees, from any claim or demand made by any third-party due to or arising out of (a) your use of the Site, (b) your violation of these Terms, (c) your violation of applicable laws or regulations or (d) your User Content.\xA0 Company reserves the right to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims.\xA0 You agree not to settle any matter without the prior written consent of Company.\xA0 Company will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Third-Party Links & Ads; Other Users"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Third-Party Links & Ads."), " The Site may contain links to third-party websites and services, and/or display advertisements for third-parties.\xA0 Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads.\xA0 Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads.\xA0 You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party\u2019s terms and policies apply, including the third party\u2019s privacy and data gathering practices."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Other Users."), " Each Site user is solely responsible for any and all of its own User Content.\xA0 Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others.\xA0 You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions.\xA0 If there is a dispute between you and any Site user, we are under no obligation to become involved."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "You hereby release and forever discharge the Company and our officers, employees, agents, successors, and assigns from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site. If you are a California resident, you hereby waive California civil code section 1542 in connection with the foregoing, which states: \"a general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor.\""), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Cookies and Web Beacons."), " Like any other website, Yack uses \u2018cookies\u2019. These cookies are used to store information including visitors\u2019 preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users\u2019 experience by customizing our web page content based on visitors\u2019 browser type and/or other information."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Disclaimers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "The site is provided on an \"as-is\" and \"as available\" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement.\xA0 We and our suppliers make not guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe.\xA0 If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.\xA0 Some jurisdictions do not allow limitations on how long an implied warranty lasts, so the above limitation may not apply to you."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Limitation on Liability"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages.\xA0 Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to your device or computer system, or loss of data resulting therefrom."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "To the maximum extent permitted by law, notwithstanding anything to the contrary contained herein, our liability to you for any damages arising from or related to this agreement, will at all times be limited to a maximum of fifty U.S. dollars (u.s. $50). The existence of more than one claim will not enlarge this limit.\xA0 You agree that our suppliers will have no liability of any kind arising from or relating to this agreement."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Term and Termination."), " Subject to this Section, these Terms will remain in full force and effect while you use the Site.\xA0 We may suspend or terminate your rights to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms.\xA0 Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately.\xA0 You understand that any termination of your Account may involve deletion of your User Content associated with your Account from our live databases.\xA0 Company will not have any liability whatsoever to you for any termination of your rights under these Terms.\xA0 Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2 through 2.5, Section 3 and Sections 4 through 10."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Copyright Policy."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Company respects the intellectual property of others and asks that users of our Site do the same.\xA0 In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights.\xA0 If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. \xA7 512(c)) must be provided to our designated Copyright Agent:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "your physical or electronic signature;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "identification of the copyrighted work(s) that you claim to have been infringed;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "identification of the material on our services that you claim is infringing and that you request us to remove;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "sufficient information to permit us to locate such material;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "your address, telephone number, and e-mail address;"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "a statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "a statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Please note that, pursuant to 17 U.S.C. \xA7 512(f), any misrepresentation of material fact in a written notification automatically subjects the complaining party to liability for any damages, costs and attorney\u2019s fees incurred by us in connection with the written notification and allegation of copyright infringement."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "General"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on our Site.\xA0 You are responsible for providing us with your most current e-mail address.\xA0 In the event that the last e-mail address that you have provided us is not valid our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice.\xA0 Any changes to these Terms will be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on our Site.\xA0 These changes will be effective immediately for new users of our Site.\xA0 Continued use of our Site following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes. Dispute Resolution. Please read this Arbitration Agreement carefully. It is part of your contract with Company and affects your rights.\xA0 It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Applicability of Arbitration Agreement."), " All claims and disputes in connection with the Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.\xA0 Unless otherwise agreed to, all arbitration proceedings shall be held in English.\xA0 This Arbitration Agreement applies to you and the Company, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Notice Requirement and Informal Dispute Resolution."), " Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute describing the nature and basis of the claim or dispute, and the requested relief.\xA0 A Notice to the Company should be sent to: 60 Marine Drive, Umhlanga. After the Notice is received, you and the Company may attempt to resolve the claim or dispute informally.\xA0 If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding.\xA0 The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award to which either party is entitled."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Arbitration Rules."), " Arbitration shall be initiated through the American Arbitration Association, an established alternative dispute resolution provider that offers arbitration as set forth in this section.\xA0 If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider.\xA0 The rules of the ADR Provider shall govern all aspects of the arbitration except to the extent such rules are in conflict with the Terms.\xA0 The AAA Consumer Arbitration Rules governing the arbitration are available online at adr.org or by calling the AAA at 1-800-778-7879.\xA0 The arbitration shall be conducted by a single, neutral arbitrator.\xA0 Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief.\xA0 For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules.\xA0 Any hearing will be held in a location within 100 miles of your residence, unless you reside outside of the United States, and unless the parties agree otherwise.\xA0 If you reside outside of the U.S., the arbitrator shall give the parties reasonable notice of the date, time and place of any oral hearings. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.\xA0 If the arbitrator grants you an award that is greater than the last settlement offer that the Company made to you prior to the initiation of arbitration, the Company will pay you the greater of the award or $2,500.00.\xA0 Each party shall bear its own costs and disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR Provider."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Additional Rules for Non-Appearance Based Arbitration."), " If non-appearance based arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration.\xA0 The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise agreed by the parties."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Time Limits."), " If you or the Company pursues arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations and within any deadline imposed under the AAA Rules for the pertinent claim."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Authority of Arbitrator."), " If arbitration is initiated, the arbitrator will decide the rights and liabilities of you and the Company, and the dispute will not be consolidated with any other matters or joined with any other cases or parties.\xA0 The arbitrator shall have the authority to grant motions dispositive of all or part of any claim.\xA0 The arbitrator shall have the authority to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms.\xA0 The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based.\xA0 The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have.\xA0 The award of the arbitrator is final and binding upon you and the Company."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Waiver of Jury Trial."), " THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement.\xA0 Arbitration procedures are typically more limited, more efficient and less expensive than rules applicable in a court and are subject to very limited review by a court.\xA0 In the event any litigation should arise between you and the Company in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND THE COMPANY WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Waiver of Class or Consolidated Actions."), " All claims and disputes within the scope of this arbitration agreement must be arbitrated or litigated on an individual basis and not on a class basis, and claims of more than one customer or user cannot be arbitrated or litigated jointly or consolidated with those of any other customer or user."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Confidentiality."), " All aspects of the arbitration proceeding shall be strictly confidential.\xA0 The parties agree to maintain confidentiality unless otherwise required by law.\xA0 This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Severability."), " If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Right to Waive."), " Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party against whom the claim is asserted.\xA0 Such waiver shall not waive or affect any other portion of this Arbitration Agreement."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Survival of Agreement."), " This Arbitration Agreement will survive the termination of your relationship with Company."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Small Claims Court."), " Nonetheless the foregoing, either you or the Company may bring an individual action in small claims court."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Emergency Equitable Relief."), " Anyhow the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration.\xA0 A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Claims Not Subject to Arbitration."), " Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party\u2019s patent, copyright, trademark or trade secrets shall not be subject to this Arbitration Agreement."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Netherlands County, California, for such purposes."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "The Site may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, re-export, or transfer, directly or indirectly, any U.S. technical data acquired from Company, or any products utilizing such data, in violation of the United States export laws or regulations."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Company is located at the address in Section 10.8. If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Electronic Communications."), " The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be in a hard copy writing."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Entire Terms."), " These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word \"including\" means \"including without limitation\". If any provision of these Terms is held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.\xA0 Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other.\xA0 These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company\u2019s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.\xA0 Company may freely assign these Terms.\xA0 The terms and conditions set forth in these Terms shall be binding upon assignees."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Your Privacy."), " Please read ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://privacypolicytemplate.net/",
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "our Privacy Policy"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Copyright/Trademark Information."), " Copyright \xA9. All rights reserved.\xA0 All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Address: 60 Marine Drive, Umhlanga"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-371213600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Email: jo.duplessis@yack.co")));
}

/***/ }),

/***/ 6:
/*!***********************************!*\
  !*** multi ./pages/termsofuse.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joduplessis/Work/Yack/website/pages/termsofuse.js */"./pages/termsofuse.js");


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
//# sourceMappingURL=termsofuse.js.map