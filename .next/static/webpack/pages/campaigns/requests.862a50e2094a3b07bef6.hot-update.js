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
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__["default"])(props.address);
              _context.next = 3;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequests(props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__["default"])(props.address);
              _context2.next = 3;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(props.id).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function finalizeRequest() {
      return _ref2.apply(this, arguments);
    };
  }();

  console.log(props);
  var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Row,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Table"].Cell;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.id + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.recipient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: "".concat(props.request.approvalCount, "/").concat(props.total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "green",
        onClick: approveRequest,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "teal",
        onClick: finalizeRequest,
        children: "Finalize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1JlcXVlc3RSb3cuanN4Il0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJwcm9wcyIsInVzZVN0YXRlIiwiZGVzaWJsZSIsInNldERlc2libGUiLCJsb2FkIiwic2V0TG9hZCIsImRhdGEiLCJzZXREYXRhIiwiYXBwcm92ZVJlcXVlc3QiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwiYWRkcmVzcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0cyIsImlkIiwic2VuZCIsImZyb20iLCJmaW5hbGl6ZVJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwiUm93IiwiVGFibGUiLCJDZWxsIiwicmVxdWVzdCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50IiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsSUFBRCxDQURWO0FBQUEsTUFDckJDLE9BRHFCO0FBQUEsTUFDWkMsVUFEWTs7QUFBQSxtQkFFSkYsc0RBQVEsQ0FBQyxLQUFELENBRko7QUFBQSxNQUVyQkcsSUFGcUI7QUFBQSxNQUVmQyxPQUZlOztBQUFBLG1CQUdKSixzREFBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BR3JCSyxJQUhxQjtBQUFBLE1BR2ZDLE9BSGU7O0FBSTVCLE1BQU1DLGNBQWM7QUFBQSwwVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkMsc0JBRGUsR0FDSkMsa0VBQVEsQ0FBQ1YsS0FBSyxDQUFDVyxPQUFQLENBREo7QUFBQTtBQUFBLHFCQUVFQyxzREFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFGRjs7QUFBQTtBQUVmQyxzQkFGZTtBQUFBO0FBQUEscUJBR2ZOLFFBQVEsQ0FBQ08sT0FBVCxDQUFpQkMsZUFBakIsQ0FBaUNqQixLQUFLLENBQUNrQixFQUF2QyxFQUEyQ0MsSUFBM0MsQ0FBZ0Q7QUFDcERDLG9CQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBRHNDLGVBQWhELENBSGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZFAsY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFRQSxNQUFNYSxlQUFlO0FBQUEsMlRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCWixzQkFEZ0IsR0FDTEMsa0VBQVEsQ0FBQ1YsS0FBSyxDQUFDVyxPQUFQLENBREg7QUFBQTtBQUFBLHFCQUVDQyxzREFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFGRDs7QUFBQTtBQUVoQkMsc0JBRmdCO0FBQUE7QUFBQSxxQkFHaEJOLFFBQVEsQ0FBQ08sT0FBVCxDQUFpQkssZUFBakIsQ0FBaUNyQixLQUFLLENBQUNrQixFQUF2QyxFQUEyQ0MsSUFBM0MsQ0FBZ0Q7QUFDcERDLG9CQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBRHNDLGVBQWhELENBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWZNLGVBQWU7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBT0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdkIsS0FBWjtBQW5CNEIsTUFvQnBCd0IsR0FwQm9CLEdBb0JOQyx1REFwQk0sQ0FvQnBCRCxHQXBCb0I7QUFBQSxNQW9CZkUsSUFwQmUsR0FvQk5ELHVEQXBCTSxDQW9CZkMsSUFwQmU7QUFxQjVCLHNCQUNFLHFFQUFDLEdBQUQ7QUFBQSw0QkFDRSxxRUFBQyxJQUFEO0FBQUEsZ0JBQU8xQixLQUFLLENBQUNrQixFQUFOLEdBQVc7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsSUFBRDtBQUFBLGdCQUFPbEIsS0FBSyxDQUFDMkIsT0FBTixDQUFjQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyxJQUFEO0FBQUEsZ0JBQU81QixLQUFLLENBQUMyQixPQUFOLENBQWNFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLHFFQUFDLElBQUQ7QUFBQSxnQkFBTzdCLEtBQUssQ0FBQzJCLE9BQU4sQ0FBY0c7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsSUFBRDtBQUFBLDBCQUFVOUIsS0FBSyxDQUFDMkIsT0FBTixDQUFjSSxhQUF4QixjQUF5Qy9CLEtBQUssQ0FBQ2dDLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUUscUVBQUMsSUFBRDtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsYUFBSyxFQUFDLE9BQWQ7QUFBc0IsZUFBTyxFQUFFeEIsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFXRSxxRUFBQyxJQUFEO0FBQUEsNkJBQ0UscUVBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUMsTUFBZDtBQUFxQixlQUFPLEVBQUVhLGVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBeENEOztHQUFNdEIsVTs7S0FBQUEsVTtBQTBDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjg2MmE1MGUyMDk0YTNiMDdiZWY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcblxyXG5jb25zdCBSZXF1ZXN0Um93ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2Rlc2libGUsIHNldERlc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBhcHByb3ZlUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0cyhwcm9wcy5pZCkuc2VuZCh7XHJcbiAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluYWxpemVSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZmluYWxpemVSZXF1ZXN0KHByb3BzLmlkKS5zZW5kKHtcclxuICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3c+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5pZCArIDF9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LnZhbHVlfTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QucmVjaXBpZW50fTwvQ2VsbD5cclxuICAgICAgPENlbGw+e2Ake3Byb3BzLnJlcXVlc3QuYXBwcm92YWxDb3VudH0vJHtwcm9wcy50b3RhbH1gfTwvQ2VsbD5cclxuICAgICAgPENlbGw+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgb25DbGljaz17YXBwcm92ZVJlcXVlc3R9PlxyXG4gICAgICAgICAgQXBwcm92ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NlbGw+XHJcbiAgICAgIDxDZWxsPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJ0ZWFsXCIgb25DbGljaz17ZmluYWxpemVSZXF1ZXN0fT5cclxuICAgICAgICAgIEZpbmFsaXplXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9