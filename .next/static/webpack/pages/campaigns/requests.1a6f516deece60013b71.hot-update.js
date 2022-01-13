webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./component/RequestRow.jsx":
/*!**********************************!*\
  !*** ./component/RequestRow.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../etherium/Campaign */ "./etherium/Campaign.js");


var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\component\\RequestRow.jsx",
    _this = undefined;





var RequestRow = function RequestRow(props) {
  var approveRequest = async(function () {
    var campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });
  console.log(props);
  var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.id + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.recipient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: "".concat(props.request.approvalCount, "/").concat(props.total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "green",
        basic: true,
        onClick: approveRequest,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = RequestRow;
/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

var _c;

$RefreshReg$(_c, "RequestRow");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1JlcXVlc3RSb3cuanN4Il0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJwcm9wcyIsImFwcHJvdmVSZXF1ZXN0IiwiYXN5bmMiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwiY29uc29sZSIsImxvZyIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsImlkIiwicmVxdWVzdCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLE1BQU1DLGNBQWMsR0FBR0MsS0FBSyxDQUFDLFlBQU07QUFDakMsUUFBTUMsUUFBUSxHQUFHQyxrRUFBUSxFQUF6QjtBQUNELEdBRjJCLENBQTVCO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaO0FBSjRCLE1BS3BCTyxHQUxvQixHQUtOQyx1REFMTSxDQUtwQkQsR0FMb0I7QUFBQSxNQUtmRSxJQUxlLEdBS05ELHVEQUxNLENBS2ZDLElBTGU7QUFNNUIsc0JBQ0UscUVBQUMsR0FBRDtBQUFBLDRCQUNFLHFFQUFDLElBQUQ7QUFBQSxnQkFBT1QsS0FBSyxDQUFDVSxFQUFOLEdBQVc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsSUFBRDtBQUFBLGdCQUFPVixLQUFLLENBQUNXLE9BQU4sQ0FBY0M7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UscUVBQUMsSUFBRDtBQUFBLGdCQUFPWixLQUFLLENBQUNXLE9BQU4sQ0FBY0U7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMsSUFBRDtBQUFBLGdCQUFPYixLQUFLLENBQUNXLE9BQU4sQ0FBY0c7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsSUFBRDtBQUFBLDBCQUFVZCxLQUFLLENBQUNXLE9BQU4sQ0FBY0ksYUFBeEIsY0FBeUNmLEtBQUssQ0FBQ2dCLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUUscUVBQUMsSUFBRDtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLE9BQWQ7QUFBc0IsYUFBSyxNQUEzQjtBQUE0QixlQUFPLEVBQUVmLGNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FwQkQ7O0tBQU1GLFU7QUFzQlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy4xYTZmNTE2ZGVlY2U2MDAxM2I3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuXHJcbmNvbnN0IFJlcXVlc3RSb3cgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBhcHByb3ZlUmVxdWVzdCA9IGFzeW5jKCgpID0+IHtcclxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oKTtcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um93PlxyXG4gICAgICA8Q2VsbD57cHJvcHMuaWQgKyAxfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC52YWx1ZX08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntgJHtwcm9wcy5yZXF1ZXN0LmFwcHJvdmFsQ291bnR9LyR7cHJvcHMudG90YWx9YH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e2FwcHJvdmVSZXF1ZXN0fT5cclxuICAgICAgICAgIEFwcHJvdmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DZWxsPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=