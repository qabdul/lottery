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
        name: "recycle",
        loading: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), "Please don't refresh the page!."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        icon: true,
        success: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "spinner",
          loading: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"].Content, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"].Header, {
            children: "It might take 40 secs to processed your request"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this), "Your transaction is being processed, please wait..."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = ModalPopUp;
/* harmony default export */ __webpack_exports__["default"] = (ModalPopUp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L01vZGFsUG9wVXAuanN4Il0sIm5hbWVzIjpbIk1vZGFsUG9wVXAiLCJwcm9wcyIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLHNCQUNFLHFFQUFDLHVEQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFQSxLQUFLLENBQUNDLElBQXpCO0FBQStCLFFBQUksRUFBQyxPQUFwQztBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQVEsVUFBSSxNQUFaO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFxQixlQUFPO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLHVEQUFELENBQU8sT0FBUDtBQUFBLDZCQUNFLHFFQUFDLHlEQUFEO0FBQVMsWUFBSSxNQUFiO0FBQWMsZUFBTyxNQUFyQjtBQUFBLGdDQUNFLHFFQUFDLHNEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBcUIsaUJBQU87QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLHlEQUFELENBQVMsT0FBVDtBQUFBLGtDQUNFLHFFQUFDLHlEQUFELENBQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBNUJEOztLQUFNRixVO0FBOEJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuMTVjNjRjY2NmOTRlYzExOGMyMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBIZWFkZXIsIEljb24sIE1vZGFsLCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5jb25zdCBNb2RhbFBvcFVwID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbCBiYXNpYyBvcGVuPXtwcm9wcy5vcGVufSBzaXplPVwic21hbGxcIj5cclxuICAgICAgPEhlYWRlciBpY29uPlxyXG4gICAgICAgIDxJY29uIG5hbWU9XCJyZWN5Y2xlXCIgbG9hZGluZyAvPlxyXG4gICAgICAgIFBsZWFzZSBkb24ndCByZWZyZXNoIHRoZSBwYWdlIS5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgIDxNZXNzYWdlIGljb24gc3VjY2Vzcz5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJzcGlubmVyXCIgbG9hZGluZyAvPlxyXG4gICAgICAgICAgPE1lc3NhZ2UuQ29udGVudD5cclxuICAgICAgICAgICAgPE1lc3NhZ2UuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIEl0IG1pZ2h0IHRha2UgNDAgc2VjcyB0byBwcm9jZXNzZWQgeW91ciByZXF1ZXN0XHJcbiAgICAgICAgICAgIDwvTWVzc2FnZS5IZWFkZXI+XHJcbiAgICAgICAgICAgIFlvdXIgdHJhbnNhY3Rpb24gaXMgYmVpbmcgcHJvY2Vzc2VkLCBwbGVhc2Ugd2FpdC4uLlxyXG4gICAgICAgICAgPC9NZXNzYWdlLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICA8L01vZGFsLkNvbnRlbnQ+XHJcbiAgICAgIHsvKiA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yPVwicmVkXCIgaW52ZXJ0ZWQgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cInJlbW92ZVwiIC8+IE5vXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgaW52ZXJ0ZWQgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cImNoZWNrbWFya1wiIC8+IFllc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L01vZGFsLkFjdGlvbnM+ICovfVxyXG4gICAgPC9Nb2RhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxQb3BVcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==