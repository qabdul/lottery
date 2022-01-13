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
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../etherium/Campaign */ "./etherium/Campaign.js");
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\component\\RequestRow.jsx",
    _this = undefined,
    _s = $RefreshSig$();







var RequestRow = function RequestRow(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      desible = _useState[0],
      setDesible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      load = _useState2[0],
      setLoad = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      data = _useState3[0],
      setData = _useState3[1];

  var approveRequest = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var campaign, accounts;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoad(true);
              setData("");
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__["default"])(props.address);
              _context.next = 6;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return campaign.methods.approveRequests(props.id).send({
                from: accounts[0]
              });

            case 9:
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].replaceRoute("/campaigns/".concat(props.address, "/requests"));
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setLoad(false);
              setData(_context.t0.message);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function approveRequest() {
      return _ref.apply(this, arguments);
    };
  }();

  var finalizeRequest = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var campaign, accounts;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setLoad(true);
              setData("");
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__["default"])(props.address);
              _context2.next = 6;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 6:
              accounts = _context2.sent;
              _context2.next = 9;
              return campaign.methods.finalizeRequest(props.id).send({
                from: accounts[0]
              });

            case 9:
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].replaceRoute("/campaigns/".concat(props.address, "/requests"));
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setLoad(false);
              setData(_context2.t0.message);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function finalizeRequest() {
      return _ref2.apply(this, arguments);
    };
  }();

  var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.id + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.recipient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: "".concat(props.request.approvalCount, "/").concat(props.total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "green",
        loading: load,
        onClick: approveRequest,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "teal",
        onClick: finalizeRequest,
        children: "Finalize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(RequestRow, "eiS7MDeRNhUgY0QJjed0iuSw3+g=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1JlcXVlc3RSb3cuanN4Il0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJwcm9wcyIsInVzZVN0YXRlIiwiZGVzaWJsZSIsInNldERlc2libGUiLCJsb2FkIiwic2V0TG9hZCIsImRhdGEiLCJzZXREYXRhIiwiYXBwcm92ZVJlcXVlc3QiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwiYWRkcmVzcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0cyIsImlkIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiVGFibGUiLCJDZWxsIiwicmVxdWVzdCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLElBQUQsQ0FEVjtBQUFBLE1BQ3JCQyxPQURxQjtBQUFBLE1BQ1pDLFVBRFk7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsS0FBRCxDQUZKO0FBQUEsTUFFckJHLElBRnFCO0FBQUEsTUFFZkMsT0FGZTs7QUFBQSxtQkFHSkosc0RBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUdyQkssSUFIcUI7QUFBQSxNQUdmQyxPQUhlOztBQUs1QixNQUFNQyxjQUFjO0FBQUEsMFRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFbkJILHFCQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FFLHFCQUFPLENBQUMsRUFBRCxDQUFQO0FBQ01FLHNCQUphLEdBSUZD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O0FBQUEsYUFORixlQVdFLHFFQUFDLElBQUQ7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxNQUFkO0FBQXFCLGVBQU8sRUFBRWdCLGVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBekREOztHQUFNekIsVTs7S0FBQUEsVTtBQTJEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLmRiMjZhYWU4ZWQ3MDgzM2RiMTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IFJlcXVlc3RSb3cgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZGVzaWJsZSwgc2V0RGVzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBhcHByb3ZlUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgIHNldERhdGEoXCJcIik7XHJcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdHMocHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzYCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgc2V0RGF0YShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmaW5hbGl6ZVJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICBzZXREYXRhKFwiXCIpO1xyXG4gICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLmFkZHJlc3MpO1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZmluYWxpemVSZXF1ZXN0KHByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgfSk7XHJcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIHNldERhdGEoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um93PlxyXG4gICAgICA8Q2VsbD57cHJvcHMuaWQgKyAxfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC52YWx1ZX08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntgJHtwcm9wcy5yZXF1ZXN0LmFwcHJvdmFsQ291bnR9LyR7cHJvcHMudG90YWx9YH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGxvYWRpbmc9e2xvYWR9IG9uQ2xpY2s9e2FwcHJvdmVSZXF1ZXN0fT5cclxuICAgICAgICAgIEFwcHJvdmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DZWxsPlxyXG4gICAgICA8Q2VsbD5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwidGVhbFwiIG9uQ2xpY2s9e2ZpbmFsaXplUmVxdWVzdH0+XHJcbiAgICAgICAgICBGaW5hbGl6ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NlbGw+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==