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
  var approveRequest = async(function () {});
  console.log(props);
  var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.id + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.recipient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: "".concat(props.request.approvalCount, "/").concat(props.total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "green",
        basic: true,
        onClick: approveRequest,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1JlcXVlc3RSb3cuanN4Il0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJwcm9wcyIsImFwcHJvdmVSZXF1ZXN0IiwiYXN5bmMiLCJjb25zb2xlIiwibG9nIiwiUm93IiwiVGFibGUiLCJDZWxsIiwiaWQiLCJyZXF1ZXN0IiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiLCJ0b3RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsTUFBTUMsY0FBYyxHQUFHQyxLQUFLLENBQUMsWUFBTSxDQUFFLENBQVQsQ0FBNUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFGNEIsTUFHcEJLLEdBSG9CLEdBR05DLHVEQUhNLENBR3BCRCxHQUhvQjtBQUFBLE1BR2ZFLElBSGUsR0FHTkQsdURBSE0sQ0FHZkMsSUFIZTtBQUk1QixzQkFDRSxxRUFBQyxHQUFEO0FBQUEsNEJBQ0UscUVBQUMsSUFBRDtBQUFBLGdCQUFPUCxLQUFLLENBQUNRLEVBQU4sR0FBVztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxJQUFEO0FBQUEsZ0JBQU9SLEtBQUssQ0FBQ1MsT0FBTixDQUFjQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyxJQUFEO0FBQUEsZ0JBQU9WLEtBQUssQ0FBQ1MsT0FBTixDQUFjRTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSxxRUFBQyxJQUFEO0FBQUEsZ0JBQU9YLEtBQUssQ0FBQ1MsT0FBTixDQUFjRztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSxxRUFBQyxJQUFEO0FBQUEsMEJBQVVaLEtBQUssQ0FBQ1MsT0FBTixDQUFjSSxhQUF4QixjQUF5Q2IsS0FBSyxDQUFDYyxLQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLHFFQUFDLElBQUQ7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxPQUFkO0FBQXNCLGFBQUssTUFBM0I7QUFBNEIsZUFBTyxFQUFFYixjQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBbEJEOztLQUFNRixVO0FBb0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuZDhlMzFmYzMzMWM3NjVjMDg5NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcblxyXG5jb25zdCBSZXF1ZXN0Um93ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgYXBwcm92ZVJlcXVlc3QgPSBhc3luYygoKSA9PiB7fSk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPENlbGw+e3Byb3BzLmlkICsgMX08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QudmFsdWV9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57YCR7cHJvcHMucmVxdWVzdC5hcHByb3ZhbENvdW50fS8ke3Byb3BzLnRvdGFsfWB9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXthcHByb3ZlUmVxdWVzdH0+XHJcbiAgICAgICAgICBBcHByb3ZlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9