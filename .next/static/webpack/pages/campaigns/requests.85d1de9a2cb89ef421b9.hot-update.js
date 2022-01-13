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
/* harmony default export */ __webpack_exports__["default"] = (semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L01vZGFsUG9wVXAuanN4Il0sIm5hbWVzIjpbIk1vZGFsUG9wVXAiLCJwcm9wcyIsIm9wZW4iLCJzZXRPcGVuIiwiTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLHNCQUNFLHFFQUFDLHVEQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFQSxLQUFLLENBQUNDLElBQXpCO0FBQStCLFFBQUksRUFBQyxPQUFwQztBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQVEsVUFBSSxNQUFaO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSxxRUFBQyx1REFBRCxDQUFPLE9BQVA7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVdFLHFFQUFDLHVEQUFELENBQU8sT0FBUDtBQUFBLDhCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxNQUFiO0FBQWMsYUFBSyxFQUFDLEtBQXBCO0FBQTBCLGdCQUFRLE1BQWxDO0FBQW1DLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsU0FBNUM7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxPQUFkO0FBQXNCLGdCQUFRLE1BQTlCO0FBQStCLGVBQU8sRUFBRTtBQUFBLGlCQUFNQSxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsU0FBeEM7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUFNLGNBQUksRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F2QkQ7O0tBQU1ILFU7QUF5QlNJLHNIQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy44NWQxZGU5YTJjYjg5ZWY0MjFiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEhlYWRlciwgSWNvbiwgTW9kYWwgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmNvbnN0IE1vZGFsUG9wVXAgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsIGJhc2ljIG9wZW49e3Byb3BzLm9wZW59IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICA8SGVhZGVyIGljb24+XHJcbiAgICAgICAgPEljb24gbmFtZT1cImFyY2hpdmVcIiAvPlxyXG4gICAgICAgIEFyY2hpdmUgT2xkIE1lc3NhZ2VzXHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8TW9kYWwuQ29udGVudD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIFlvdXIgaW5ib3ggaXMgZ2V0dGluZyBmdWxsLCB3b3VsZCB5b3UgbGlrZSB1cyB0byBlbmFibGUgYXV0b21hdGljXHJcbiAgICAgICAgICBhcmNoaXZpbmcgb2Ygb2xkIG1lc3NhZ2VzP1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICA8TW9kYWwuQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yPVwicmVkXCIgaW52ZXJ0ZWQgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cInJlbW92ZVwiIC8+IE5vXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgaW52ZXJ0ZWQgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgPEljb24gbmFtZT1cImNoZWNrbWFya1wiIC8+IFllc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L01vZGFsLkFjdGlvbnM+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==