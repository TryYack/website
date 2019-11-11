webpackHotUpdate("static/development/pages/confirm_email.js",{

/***/ "./pages/confirm_email.js":
/*!********************************!*\
  !*** ./pages/confirm_email.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/joduplessis/Work/Weekday/website/pages/confirm_email.js";







var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_5___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API_URL = publicRuntimeConfig.API_URL;

function ConfirmEmail(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _props$router$query = props.router.query,
      email = _props$router$query.email,
      token = _props$router$query.token;
  console.log(email, token);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!router.query.token) return;
    setLoading(true);
    setError(false);

    try {
      var payload = atob(router.query.token);

      var _JSON$parse = JSON.parse(payload),
          _token = _JSON$parse.token,
          _email = _JSON$parse.email;

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(API_URL + '/auth/confirm', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: payload
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
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
  }, [router.query.token]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3405851190",
    __self: this
  }, "*{margin:0px;padding:0px;}.container{background:#f3f3f3;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.inner{background:white;position:relative;height:600px;width:500px;border-radius:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.logo{position:absolute;top:40px;left:40px;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:auto;}.logo .text{padding-left:5px;position:relative;bottom:2px;color:#007af5;font-size:22px;font-weight:400;font-family:'hk_groteskmedium',helvetica;}h1{color:#585858;font-size:50px;font-weight:300;margin-top:20px;font-family:'hk_groteskmedium',helvetica;}h2{color:#585858;font-size:20px;font-weight:400;margin-top:20px;font-family:'hk_groteskmedium',helvetica;}h2 a{color:#007af5;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvd2Vic2l0ZS9wYWdlcy9jb25maXJtX2VtYWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEeUIsQUFHc0IsQUFRUSxBQWFGLEFBYUMsQUFhRCxBQVVILEFBUUEsQUFRQSxXQXhFRixHQXlERyxBQVFBLEFBUU0sR0FwREgsQUEwQkEsQ0FiVCxDQTFCRSxJQVBiLElBa0NZLEVBdUJNLEFBUUEsQ0F6REosS0FhQyxBQTBCRixFQVpFLEtBMUJLLEdBaURGLEFBUUEsQ0FsQkYsRUExQkYsRUFjQyxVQTFCSixBQWFVLEFBMEJKLENBVTJCLEFBUUEsR0FNNUMsS0E5RFUsTUF1Q1EsRUF0Q0gsRUFZQSxZQTJCNkIsV0FTNUMsQUFRQSxzQkEvQnFCLFFBZXJCLG1CQXZDcUIsRUFZQSx3Q0FhUSxtREF4Qk4sRUFZQSxvREFhQSxzQkF4QkUsRUFZQSxvREFhSiw2Q0F4QnJCLEVBWXdCLDhDQWFKLGtCQUNwQixjQWJBIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvd2Vic2l0ZS9wYWdlcy9jb25maXJtX2VtYWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKClcbmNvbnN0IHsgQVBJX1VSTCB9ID0gcHVibGljUnVudGltZUNvbmZpZ1xuXG5mdW5jdGlvbiBDb25maXJtRW1haWwocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHsgcm91dGVyOiB7IHF1ZXJ5OiB7IGVtYWlsLCB0b2tlbiB9IH19ID0gcHJvcHM7XG5cbiAgY29uc29sZS5sb2coZW1haWwsIHRva2VuKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyb3V0ZXIucXVlcnkudG9rZW4pIHJldHVyblxuXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIHNldEVycm9yKGZhbHNlKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhdG9iKHJvdXRlci5xdWVyeS50b2tlbik7XG4gICAgICBjb25zdCB7IHRva2VuLCBlbWFpbCB9ID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcblxuICAgICAgZmV0Y2goQVBJX1VSTCArICcvYXV0aC9jb25maXJtJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgIHJlZmVycmVyOiAnbm8tcmVmZXJyZXInLFxuICAgICAgICBib2R5OiBwYXlsb2FkLFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAgICAgaWYgKCFkYXRhLnN1Y2Nlc3MpIHNldEVycm9yKHRydWUpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIucXVlcnkudG9rZW5dKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5uZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIC50ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgICAgY29sb3I6ICMwMDdhZjU7XG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdoa19ncm90ZXNrbWVkaXVtJywgaGVsdmV0aWNhO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiAjNTg1ODU4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdoa19ncm90ZXNrbWVkaXVtJywgaGVsdmV0aWNhO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGNvbG9yOiAjNTg1ODU4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdoa19ncm90ZXNrbWVkaXVtJywgaGVsdmV0aWNhO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDdhZjU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiBoZWlnaHQ9XCIyMFwiIGFsdD1cIldlZWtkYXlcIi8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICB3ZWVrZGF5XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtlcnJvciAmJiAhbG9hZGluZyAmJlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8cD48aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvY29uZmlybV9lbWFpbF9lcnJvci5wbmdcIiBoZWlnaHQ9XCIyMDBcIiAvPjwvcD5cbiAgICAgICAgICAgICAgPGgxPldob29wcyE8L2gxPlxuICAgICAgICAgICAgICA8aDI+U29tZXRoaW5nIGhhcyBnb25lIHdyb25nITwvaDI+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIH1cblxuICAgICAgICAgIHshZXJyb3IgJiYgIWxvYWRpbmcgJiZcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPHA+PGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2NvbmZpcm1fZW1haWxfY29uZmlybWVkLnBuZ1wiIGhlaWdodD1cIjE1MFwiIC8+PC9wPlxuICAgICAgICAgICAgICA8aDE+Q29uZ3JhdHVsYXRpb25zITwvaDE+XG4gICAgICAgICAgICAgIDxoMj5UaGlzIGVtYWlsIGFkZHJlc3MgaXMgbm93IGNvbmZpcm1lZCEgUGxlYXNlIDxhIGhyZWY9XCJodHRwczovL2FwcC53ZWVrZGF5LnNoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Y2xpY2sgaGVyZTwvYT4gdG8gbG9nIGluLjwvaDI+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENvbmZpcm1FbWFpbCk7XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/website/pages/confirm_email.js */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3405851190" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3405851190" + " " + "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3405851190" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/images/logo.png",
    height: "20",
    alt: "Weekday",
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3405851190" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "weekday")), error && !loading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/images/confirm_email_error.png",
    height: "200",
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Whoops!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Something has gone wrong!")), !error && !loading && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "../static/images/confirm_email_confirmed.png",
    height: "150",
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Congratulations!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "This email address is now confirmed! Please ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://app.weekday.sh",
    target: "_blank",
    className: "jsx-3405851190",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "click here"), " to log in.")))));
}

/* harmony default export */ __webpack_exports__["default"] = (withRouter(ConfirmEmail));

/***/ })

})
//# sourceMappingURL=confirm_email.js.39b963cd408c4b967c12.hot-update.js.map