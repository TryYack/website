webpackHotUpdate("static/development/pages/confirm.js",{

/***/ "./pages/confirm.js":
/*!**************************!*\
  !*** ./pages/confirm.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/joduplessis/Work/Yack/website/pages/confirm.js";







var _ref = next_config__WEBPACK_IMPORTED_MODULE_6___default()() || {},
    _ref$publicRuntimeCon = _ref.publicRuntimeConfig,
    publicRuntimeConfig = _ref$publicRuntimeCon === void 0 ? {} : _ref$publicRuntimeCon;

var CONFIRM_URL = publicRuntimeConfig.CONFIRM_URL;

function Confirm(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setLoading(true);
    setError(false);

    try {
      var _props$router$query = props.router.query,
          email = _props$router$query.email,
          token = _props$router$query.token;
      if (!email || !token) return;
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:8181/v1/account/email/confirmed', {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          email: email,
          token: token
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        console.log(data);
        setLoading(false);
        if (!data.success) setError(true);
      })["catch"](function (e) {
        setLoading(false);
        setError(true);
      });
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }, [props.router.query.email]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1155484904",
    __self: this
  }, "*{margin:0px;padding:0px;}.container{background:#f3f3f3;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.inner{background:white;position:relative;height:600px;width:500px;border-radius:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.logo{position:absolute;top:40px;left:40px;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:auto;}.logo .text{padding-left:5px;position:relative;bottom:2px;color:#007af5;font-size:22px;font-weight:400;font-family:'hk_groteskmedium',helvetica;}h1{color:#585858;font-size:50px;font-weight:300;margin-top:20px;text-align:center;font-family:'hk_groteskmedium',helvetica;}h2{color:#585858;font-size:20px;font-weight:400;padding-left:20px;padding-right:20px;text-align:center;margin-top:20px;font-family:'hk_groteskmedium',helvetica;}h2 a{color:#007af5;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1lhY2svd2Vic2l0ZS9wYWdlcy9jb25maXJtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEeUIsQUFHc0IsQUFRUSxBQWFGLEFBYUMsQUFhRCxBQVVILEFBU0EsQUFXQSxXQTVFRixHQXlERyxBQVNBLEFBV00sR0F4REgsQUEwQkEsQ0FiVCxDQTFCRSxJQVBiLElBa0NZLEVBdUJNLEFBU0EsQ0ExREosS0FhQyxBQTBCRixFQVpFLEtBMUJLLEdBaURGLEFBU0UsQ0FuQkosRUExQkYsRUFjQyxVQTFCSixBQWFVLEFBMEJKLENBVUcsRUFTQyxDQVNyQixLQWxFVSxNQXVDUSxFQXRDSCxFQVlBLEFBb0M2QixHQVN4QixTQWxCd0IsU0FtQjFCLGdCQUMwQixJQVY1QyxJQXhCcUIsUUFlckIsbUJBdkNxQixFQVlBLElBK0NyQixvQ0FsQzZCLG1EQXhCTixFQVlBLG9EQWFBLHNCQXhCRSxFQVlBLG9EQWFKLDZDQXhCckIsRUFZd0IsOENBYUosa0JBQ3BCLGNBYkEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvWWFjay93ZWJzaXRlL3BhZ2VzL2NvbmZpcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyA9IHt9IH0gPSBnZXRDb25maWcoKSB8fCB7fVxuY29uc3QgeyBDT05GSVJNX1VSTCB9ID0gcHVibGljUnVudGltZUNvbmZpZ1xuXG5mdW5jdGlvbiBDb25maXJtKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBzZXRFcnJvcihmYWxzZSlcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHJvdXRlcjogeyBxdWVyeTogeyBlbWFpbCwgdG9rZW4gfSB9fSA9IHByb3BzO1xuXG4gICAgICBpZiAoIWVtYWlsIHx8ICF0b2tlbikgcmV0dXJuXG5cbiAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgxODEvdjEvYWNjb3VudC9lbWFpbC9jb25maXJtZWQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgdG9rZW4gfSksXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcblxuICAgICAgICBpZiAoIWRhdGEuc3VjY2Vzcykgc2V0RXJyb3IodHJ1ZSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBzZXRFcnJvcih0cnVlKVxuICAgIH1cbiAgfSwgW3Byb3BzLnJvdXRlci5xdWVyeS5lbWFpbF0pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbm5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28gLnRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgICBjb2xvcjogIzAwN2FmNTtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2hrX2dyb3Rlc2ttZWRpdW0nLCBoZWx2ZXRpY2E7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgY29sb3I6ICM1ODU4NTg7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdoa19ncm90ZXNrbWVkaXVtJywgaGVsdmV0aWNhO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGNvbG9yOiAjNTg1ODU4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnaGtfZ3JvdGVza21lZGl1bScsIGhlbHZldGljYTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDA3YWY1O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgaGVpZ2h0PVwiMjBcIiBhbHQ9XCJZYWNrXCIvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgeWFja1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7ZXJyb3IgJiYgIWxvYWRpbmcgJiZcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPHA+PGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2NvbmZpcm1fZW1haWxfZXJyb3IucG5nXCIgaGVpZ2h0PVwiMjAwXCIgLz48L3A+XG4gICAgICAgICAgICAgIDxoMT5XaG9vcHMhPC9oMT5cbiAgICAgICAgICAgICAgPGgyPlNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZyE8L2gyPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7IWVycm9yICYmICFsb2FkaW5nICYmXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxwPjxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9jb25maXJtX2VtYWlsX2NvbmZpcm1lZC5wbmdcIiBoZWlnaHQ9XCIxNTBcIiAvPjwvcD5cbiAgICAgICAgICAgICAgPGgxPkNvbmdyYXR1bGF0aW9ucyE8L2gxPlxuICAgICAgICAgICAgICA8aDI+VGhpcyBlbWFpbCBhZGRyZXNzIGlzIG5vdyBjb25maXJtZWQhIFBsZWFzZSA8YSBocmVmPVwiaHR0cHM6Ly9hcHAueWFjay5jb1wiIHRhcmdldD1cIl9ibGFua1wiPmNsaWNrIGhlcmU8L2E+IHRvIGxvZyBpbi48L2gyPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDb25maXJtKTtcbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Yack/website/pages/confirm.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1155484904" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1155484904" + " " + "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1155484904" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "../static/images/logo.png",
    height: "20",
    alt: "Yack",
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1155484904" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "yack")), error && !loading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "../static/images/confirm_email_error.png",
    height: "200",
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Whoops!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Something has gone wrong!")), !error && !loading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "../static/images/confirm_email_confirmed.png",
    height: "150",
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Congratulations!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "This email address is now confirmed! Please ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://app.yack.co",
    target: "_blank",
    className: "jsx-1155484904",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "click here"), " to log in.")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Confirm));

/***/ })

})
//# sourceMappingURL=confirm.js.75bf584da7d6790dca39.hot-update.js.map