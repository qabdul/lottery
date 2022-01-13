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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\component\\ModalPopUp.jsx",
    _this = undefined;




var ModalPopUp = function ModalPopUp(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    basic: true,
    open: props.open,
    size: "small",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      icon: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "archive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), "Archive Old Messages"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Your inbox is getting full, would you like us to enable automatic archiving of old messages?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        basic: true,
        color: "red",
        inverted: true,
        onClick: function onClick() {
          return setOpen(false);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "remove"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), " No"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "green",
        inverted: true,
        onClick: function onClick() {
          return setOpen(false);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "checkmark"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), " Yes"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = ModalPopUp;
/* harmony default export */ __webpack_exports__["default"] = (MoModalPopUp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L01vZGFsUG9wVXAuanN4Il0sIm5hbWVzIjpbIk1vZGFsUG9wVXAiLCJwcm9wcyIsIm9wZW4iLCJzZXRPcGVuIiwiTW9Nb2RhbFBvcFVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM1QixzQkFDRSxxRUFBQyx1REFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUF6QjtBQUErQixRQUFJLEVBQUMsT0FBcEM7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFRLFVBQUksTUFBWjtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UscUVBQUMsdURBQUQsQ0FBTyxPQUFQO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFXRSxxRUFBQyx1REFBRCxDQUFPLE9BQVA7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUFRLGFBQUssTUFBYjtBQUFjLGFBQUssRUFBQyxLQUFwQjtBQUEwQixnQkFBUSxNQUFsQztBQUFtQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLFNBQTVDO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsT0FBZDtBQUFzQixnQkFBUSxNQUE5QjtBQUErQixlQUFPLEVBQUU7QUFBQSxpQkFBTUEsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLFNBQXhDO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBdkJEOztLQUFNSCxVO0FBeUJTSSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuYTMwZDI1ZWExOGQzYTI1ZWI4OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBIZWFkZXIsIEljb24sIE1vZGFsIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5jb25zdCBNb2RhbFBvcFVwID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbCBiYXNpYyBvcGVuPXtwcm9wcy5vcGVufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgPEhlYWRlciBpY29uPlxyXG4gICAgICAgIDxJY29uIG5hbWU9XCJhcmNoaXZlXCIgLz5cclxuICAgICAgICBBcmNoaXZlIE9sZCBNZXNzYWdlc1xyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPE1vZGFsLkNvbnRlbnQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBZb3VyIGluYm94IGlzIGdldHRpbmcgZnVsbCwgd291bGQgeW91IGxpa2UgdXMgdG8gZW5hYmxlIGF1dG9tYXRpY1xyXG4gICAgICAgICAgYXJjaGl2aW5nIG9mIG9sZCBtZXNzYWdlcz9cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgPE1vZGFsLkFjdGlvbnM+XHJcbiAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvcj1cInJlZFwiIGludmVydGVkIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJyZW1vdmVcIiAvPiBOb1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGludmVydGVkIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVja21hcmtcIiAvPiBZZXNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9Nb2RhbFBvcFVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9