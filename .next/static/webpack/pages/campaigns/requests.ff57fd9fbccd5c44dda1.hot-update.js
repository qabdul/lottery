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
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../etherium/Campaign */ "./etherium/Campaign.js");
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ModalPopUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModalPopUp */ "./component/ModalPopUp.jsx");





var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\component\\RequestRow.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var RequestRow = function RequestRow(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      desible = _useState[0],
      setDesible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      load = _useState2[0],
      setLoad = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      data = _useState3[0],
      setData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    approve: false,
    finalize: false
  }),
      compelete = _useState5[0],
      setComplete = _useState5[1];

  var approveRequest = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var campaign, accounts;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setOpen(true);
              setLoad(true);
              setData("");
              props.setError("");
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_6__["default"])(props.address);
              _context.next = 8;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 8:
              accounts = _context.sent;
              _context.next = 11;
              return campaign.methods.approveRequests(props.id).send({
                from: accounts[0]
              });

            case 11:
              _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].replaceRoute("/campaigns/".concat(props.address, "/requests"));
              setLoad(false);
              setOpen(false);
              setComplete(_objectSpread(_objectSpread({}, compelete), {}, {
                approve: true
              }));
              _context.next = 23;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              setOpen(false);
              setLoad(false);
              props.setError(_context.t0.message);
              setData(_context.t0.message);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }));

    return function approveRequest() {
      return _ref.apply(this, arguments);
    };
  }();

  var finalizeRequest = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var campaign, accounts;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setOpen(true);
              props.setError("");
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_6__["default"])(props.address);
              _context2.next = 6;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 6:
              accounts = _context2.sent;
              _context2.next = 9;
              return campaign.methods.finalizeRequest(props.id).send({
                from: accounts[0]
              });

            case 9:
              _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].replaceRoute("/campaigns/".concat(props.address, "/requests"));
              setOpen(false);
              setComplete(_objectSpread(_objectSpread({}, compelete), {}, {
                finalize: true
              }));
              _context2.next = 19;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setOpen(false);
              props.setError(_context2.t0.message);
              setData(_context2.t0.message);

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function finalizeRequest() {
      return _ref2.apply(this, arguments);
    };
  }();

  var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Row,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Cell;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ModalPopUp__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: open
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.id + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.recipient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: "".concat(props.request.approvalCount, "/").concat(props.total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "green",
        loading: load,
        onClick: approveRequest,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: compelete.finalize ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        name: "check",
        color: "green",
        size: "large"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "teal",
        onClick: finalizeRequest,
        children: "Finalize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s(RequestRow, "MaZpM43olFMT+Rg28C3kCG0ivHg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1JlcXVlc3RSb3cuanN4Il0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJwcm9wcyIsInVzZVN0YXRlIiwiZGVzaWJsZSIsInNldERlc2libGUiLCJsb2FkIiwic2V0TG9hZCIsImRhdGEiLCJzZXREYXRhIiwib3BlbiIsInNldE9wZW4iLCJhcHByb3ZlIiwiZmluYWxpemUiLCJjb21wZWxldGUiLCJzZXRDb21wbGV0ZSIsImFwcHJvdmVSZXF1ZXN0Iiwic2V0RXJyb3IiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwiYWRkcmVzcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0cyIsImlkIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiVGFibGUiLCJDZWxsIiwicmVxdWVzdCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLElBQUQsQ0FEVjtBQUFBLE1BQ3JCQyxPQURxQjtBQUFBLE1BQ1pDLFVBRFk7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsS0FBRCxDQUZKO0FBQUEsTUFFckJHLElBRnFCO0FBQUEsTUFFZkMsT0FGZTs7QUFBQSxtQkFHSkosc0RBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUdyQkssSUFIcUI7QUFBQSxNQUdmQyxPQUhlOztBQUFBLG1CQUlKTixzREFBUSxDQUFDLEtBQUQsQ0FKSjtBQUFBLE1BSXJC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QyxNQUFkO0FBQXFCLGVBQU8sRUFBRW9CLGVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBaEZEOztHQUFNaEMsVTs7S0FBQUEsVTtBQWtGU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLmZmNTdmZDlmYmNjZDVjNDRkZGExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IE1vZGFsUG9wVXAgZnJvbSBcIi4vTW9kYWxQb3BVcFwiO1xyXG5cclxuY29uc3QgUmVxdWVzdFJvdyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtkZXNpYmxlLCBzZXREZXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb21wZWxldGUsIHNldENvbXBsZXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGFwcHJvdmU6IGZhbHNlLFxyXG4gICAgZmluYWxpemU6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhcHByb3ZlUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgIHNldERhdGEoXCJcIik7XHJcbiAgICAgIHByb3BzLnNldEVycm9yKFwiXCIpO1xyXG4gICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLmFkZHJlc3MpO1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3RzKHByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgfSk7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApO1xyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgIHNldENvbXBsZXRlKHsgLi4uY29tcGVsZXRlLCBhcHByb3ZlOiB0cnVlIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgICBwcm9wcy5zZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgc2V0RGF0YShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5hbGl6ZVJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRPcGVuKHRydWUpO1xyXG5cclxuICAgICAgcHJvcHMuc2V0RXJyb3IoXCJcIik7XHJcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QocHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzYCk7XHJcblxyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgc2V0Q29tcGxldGUoeyAuLi5jb21wZWxldGUsIGZpbmFsaXplOiB0cnVlIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgIHByb3BzLnNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBzZXREYXRhKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3c+XHJcbiAgICAgIDxNb2RhbFBvcFVwIG9wZW49e29wZW59IC8+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5pZCArIDF9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LnZhbHVlfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cclxuICAgICAgPENlbGw+e2Ake3Byb3BzLnJlcXVlc3QuYXBwcm92YWxDb3VudH0vJHtwcm9wcy50b3RhbH1gfTwvQ2VsbD5cclxuICAgICAgPENlbGw+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgbG9hZGluZz17bG9hZH0gb25DbGljaz17YXBwcm92ZVJlcXVlc3R9PlxyXG4gICAgICAgICAgQXBwcm92ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NlbGw+XHJcbiAgICAgIDxDZWxsPlxyXG4gICAgICAgIHtjb21wZWxldGUuZmluYWxpemUgPyAoXHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwiY2hlY2tcIiBjb2xvcj1cImdyZWVuXCIgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRlYWxcIiBvbkNsaWNrPXtmaW5hbGl6ZVJlcXVlc3R9PlxyXG4gICAgICAgICAgICBGaW5hbGl6ZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DZWxsPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=