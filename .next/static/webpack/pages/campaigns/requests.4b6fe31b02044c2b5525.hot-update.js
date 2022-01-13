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
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_6__["default"])(props.address);
              _context.next = 7;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 7:
              accounts = _context.sent;
              _context.next = 10;
              return campaign.methods.approveRequests(props.id).send({
                from: accounts[0]
              });

            case 10:
              _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].replaceRoute("/campaigns/".concat(props.address, "/requests"));
              setLoad(false);
              setOpen(false);
              setComplete(_objectSpread(_objectSpread({}, compelete), {}, {
                approve: true
              }));
              _context.next = 21;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              setOpen(false);
              setLoad(false);
              setData(_context.t0.message);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 16]]);
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
              setLoad(true);
              setData("");
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_6__["default"])(props.address);
              _context2.next = 7;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 7:
              accounts = _context2.sent;
              _context2.next = 10;
              return campaign.methods.finalizeRequest(props.id).send({
                from: accounts[0]
              });

            case 10:
              _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].replaceRoute("/campaigns/".concat(props.address, "/requests"));
              setLoad(false);
              setOpen(false);
              setComplete(_objectSpread(_objectSpread({}, compelete), {}, {
                finalize: true
              }));
              _context2.next = 21;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              setOpen(false);
              setLoad(false);
              setData(_context2.t0.message);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 16]]);
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
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.id + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.recipient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: "".concat(props.request.approvalCount, "/").concat(props.total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Step"].Group, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Step"], {
          completed: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            name: "credit card"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Step"].Content, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Step"].Title, {
              children: "Billing"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Step"].Description, {
              children: "Enter billing information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "green",
        loading: load,
        onClick: approveRequest,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "teal",
        onClick: finalizeRequest,
        children: "Finalize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1JlcXVlc3RSb3cuanN4Il0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJwcm9wcyIsInVzZVN0YXRlIiwiZGVzaWJsZSIsInNldERlc2libGUiLCJsb2FkIiwic2V0TG9hZCIsImRhdGEiLCJzZXREYXRhIiwib3BlbiIsInNldE9wZW4iLCJhcHByb3ZlIiwiZmluYWxpemUiLCJjb21wZWxldGUiLCJzZXRDb21wbGV0ZSIsImFwcHJvdmVSZXF1ZXN0IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdHMiLCJpZCIsInNlbmQiLCJmcm9tIiwiUm91dGVyIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsInRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxJQUFELENBRFY7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxVQURZOztBQUFBLG1CQUVKRixzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRXJCRyxJQUZxQjtBQUFBLE1BRWZDLE9BRmU7O0FBQUEsbUJBR0pKLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHckJLLElBSHFCO0FBQUEsTUFHZkMsT0FIZTs7QUFBQSxtQkFJSk4sc0RBQVEsQ0FBQyxLQUFELENBSko7QUFBQSxNQUlyQk8sSUFKcUI7QUFB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LGVBV0UscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsT0FBZDtBQUFzQixlQUFPLEVBQUVuQyxJQUEvQjtBQUFxQyxlQUFPLEVBQUVVLGNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFzQkUscUVBQUMsSUFBRDtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLE1BQWQ7QUFBcUIsZUFBTyxFQUFFZ0IsZUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBbkZEOztHQUFNL0IsVTs7S0FBQUEsVTtBQXFGU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjRiNmZlMzFiMDIwNDRjMmI1NTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiwgU3RlcCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IE1vZGFsUG9wVXAgZnJvbSBcIi4vTW9kYWxQb3BVcFwiO1xyXG5cclxuY29uc3QgUmVxdWVzdFJvdyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtkZXNpYmxlLCBzZXREZXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb21wZWxldGUsIHNldENvbXBsZXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGFwcHJvdmU6IGZhbHNlLFxyXG4gICAgZmluYWxpemU6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhcHByb3ZlUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgIHNldERhdGEoXCJcIik7XHJcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdHMocHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzYCk7XHJcbiAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgc2V0Q29tcGxldGUoeyAuLi5jb21wZWxldGUsIGFwcHJvdmU6IHRydWUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIHNldERhdGEoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluYWxpemVSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgc2V0RGF0YShcIlwiKTtcclxuICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmZpbmFsaXplUmVxdWVzdChwcm9wcy5pZCkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICBzZXRDb21wbGV0ZSh7IC4uLmNvbXBlbGV0ZSwgZmluYWxpemU6IHRydWUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIHNldERhdGEoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um93PlxyXG4gICAgICA8TW9kYWxQb3BVcCBvcGVuPXtvcGVufSAvPlxyXG4gICAgICA8Q2VsbD57cHJvcHMuaWQgKyAxfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC52YWx1ZX08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntgJHtwcm9wcy5yZXF1ZXN0LmFwcHJvdmFsQ291bnR9LyR7cHJvcHMudG90YWx9YH08L0NlbGw+XHJcbiAgICAgIDxDZWxsPlxyXG4gICAgICAgIDxTdGVwLkdyb3VwPlxyXG4gICAgICAgICAgPFN0ZXAgY29tcGxldGVkPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiY3JlZGl0IGNhcmRcIiAvPlxyXG4gICAgICAgICAgICA8U3RlcC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxTdGVwLlRpdGxlPkJpbGxpbmc8L1N0ZXAuVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFN0ZXAuRGVzY3JpcHRpb24+RW50ZXIgYmlsbGluZyBpbmZvcm1hdGlvbjwvU3RlcC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9TdGVwLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgPC9TdGVwLkdyb3VwPlxyXG5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBsb2FkaW5nPXtsb2FkfSBvbkNsaWNrPXthcHByb3ZlUmVxdWVzdH0+XHJcbiAgICAgICAgICBBcHByb3ZlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgICAgPENlbGw+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRlYWxcIiBvbkNsaWNrPXtmaW5hbGl6ZVJlcXVlc3R9PlxyXG4gICAgICAgICAgRmluYWxpemVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DZWxsPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=