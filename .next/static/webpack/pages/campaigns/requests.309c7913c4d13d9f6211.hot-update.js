webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./component/ModalPopUp.jsx":
/*!**********************************!*\
  !*** ./component/ModalPopUp.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\component\\ModalPopUp.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var ModalPopUp = function ModalPopUp(props) {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    basic: true,
    onClose: function onClose() {
      return setOpen(false);
    },
    onOpen: function onOpen() {
      return setOpen(true);
    },
    open: props.open,
    size: "small",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      icon: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "archive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), "Archive Old Messages"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"].Content, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Your inbox is getting full, would you like us to enable automatic archiving of old messages?"
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
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_s(ModalPopUp, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");

_c = ModalPopUp;
/* harmony default export */ __webpack_exports__["default"] = (semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Modal"]);

var _c;

$RefreshReg$(_c, "ModalPopUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L01vZGFsUG9wVXAuanN4Il0sIm5hbWVzIjpbIk1vZGFsUG9wVXAiLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIk1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHdCQUNKQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURJO0FBQUE7QUFBQSxNQUNyQkMsSUFEcUI7QUFBQSxNQUNmQyxPQURlOztBQUU1QixzQkFDRSxxRUFBQyx1REFBRDtBQUNFLFNBQUssTUFEUDtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1BLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxLQUZYO0FBR0UsVUFBTSxFQUFFO0FBQUEsYUFBTUEsT0FBTyxDQUFDLElBQUQsQ0FBYjtBQUFBLEtBSFY7QUFJRSxRQUFJLEVBQUVKLEtBQUssQ0FBQ0csSUFKZDtBQUtFLFFBQUksRUFBQyxPQUxQO0FBQUEsNEJBT0UscUVBQUMsd0RBQUQ7QUFBUSxVQUFJLE1BQVo7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUFNLFlBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVdFLHFFQUFDLHVEQUFELENBQU8sT0FBUDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBOUJEOztHQUFNSixVOztLQUFBQSxVO0FBZ0NTTSxzSEFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuMzA5Yzc5MTNjNGQxM2Q5ZjYyMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBIZWFkZXIsIEljb24sIE1vZGFsIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5jb25zdCBNb2RhbFBvcFVwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgYmFzaWNcclxuICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgIG9uT3Blbj17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgb3Blbj17cHJvcHMub3Blbn1cclxuICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgID5cclxuICAgICAgPEhlYWRlciBpY29uPlxyXG4gICAgICAgIDxJY29uIG5hbWU9XCJhcmNoaXZlXCIgLz5cclxuICAgICAgICBBcmNoaXZlIE9sZCBNZXNzYWdlc1xyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBZb3VyIGluYm94IGlzIGdldHRpbmcgZnVsbCwgd291bGQgeW91IGxpa2UgdXMgdG8gZW5hYmxlIGF1dG9tYXRpY1xyXG4gICAgICAgICAgYXJjaGl2aW5nIG9mIG9sZCBtZXNzYWdlcz9cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgey8qIDxNb2RhbC5BY3Rpb25zPlxyXG4gICAgICAgIDxCdXR0b24gYmFzaWMgY29sb3I9XCJyZWRcIiBpbnZlcnRlZCBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwicmVtb3ZlXCIgLz4gTm9cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBpbnZlcnRlZCBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2ttYXJrXCIgLz4gWWVzXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWwuQWN0aW9ucz4gKi99XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==