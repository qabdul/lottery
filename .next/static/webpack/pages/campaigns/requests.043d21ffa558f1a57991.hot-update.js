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
              _context.next = 22;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              setOpen(false);
              setLoad(false);
              props.setError(_context.t0.message);
              setData(_context.t0.message);

            case 22:
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
              setData("");
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
              _context2.next = 18;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setOpen(false);
              setData(_context2.t0.message);

            case 18:
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
  console.log(data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ModalPopUp__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: open
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.id + 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: props.request.recipient
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: "".concat(props.request.approvalCount, "/").concat(props.total)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "green",
        loading: load,
        onClick: approveRequest,
        children: "Approve"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
      children: compelete.finalize ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        name: "check",
        color: "green",
        size: "large"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "teal",
        onClick: finalizeRequest,
        children: "Finalize"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1JlcXVlc3RSb3cuanN4Il0sIm5hbWVzIjpbIlJlcXVlc3RSb3ciLCJwcm9wcyIsInVzZVN0YXRlIiwiZGVzaWJsZSIsInNldERlc2libGUiLCJsb2FkIiwic2V0TG9hZCIsImRhdGEiLCJzZXREYXRhIiwib3BlbiIsInNldE9wZW4iLCJhcHByb3ZlIiwiZmluYWxpemUiLCJjb21wZWxldGUiLCJzZXRDb21wbGV0ZSIsImFwcHJvdmVSZXF1ZXN0IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdHMiLCJpZCIsInNlbmQiLCJmcm9tIiwiUm91dGVyIiwicmVwbGFjZVJvdXRlIiwic2V0RXJyb3IiLCJtZXNzYWdlIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiVGFibGUiLCJDZWxsIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsInRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxJQUFELENBRFY7QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxVQURZOztBQUFBLG1CQUVKRixzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRXJCRyxJQUZxQjtBQUFBLE1BRWZDLE9BRmU7O0FBQUEsbUJBR0pKLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHckJLLElBSHFCO0FBQUEsTUFHZkMsT0FIZTs7QUFBQSxtQkFJSk4sc0RBQVEsQ0FBQyxLQUFE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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0EvRUQ7O0dBQU1oQyxVOztLQUFBQSxVO0FBaUZTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuMDQzZDIxZmZhNTU4ZjFhNTc5OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyaXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5pbXBvcnQgTW9kYWxQb3BVcCBmcm9tIFwiLi9Nb2RhbFBvcFVwXCI7XHJcblxyXG5jb25zdCBSZXF1ZXN0Um93ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2Rlc2libGUsIHNldERlc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbXBlbGV0ZSwgc2V0Q29tcGxldGVdID0gdXNlU3RhdGUoe1xyXG4gICAgYXBwcm92ZTogZmFsc2UsXHJcbiAgICBmaW5hbGl6ZTogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFwcHJvdmVSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgc2V0RGF0YShcIlwiKTtcclxuICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0cyhwcm9wcy5pZCkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICBzZXRDb21wbGV0ZSh7IC4uLmNvbXBlbGV0ZSwgYXBwcm92ZTogdHJ1ZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgcHJvcHMuc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHNldERhdGEoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmluYWxpemVSZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuXHJcbiAgICAgIHNldERhdGEoXCJcIik7XHJcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QocHJvcHMuaWQpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzYCk7XHJcblxyXG4gICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgc2V0Q29tcGxldGUoeyAuLi5jb21wZWxldGUsIGZpbmFsaXplOiB0cnVlIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0T3BlbihmYWxzZSk7XHJcblxyXG4gICAgICBzZXREYXRhKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAgPE1vZGFsUG9wVXAgb3Blbj17b3Blbn0gLz5cclxuICAgICAgPENlbGw+e3Byb3BzLmlkICsgMX08L0NlbGw+XHJcbiAgICAgIDxDZWxsPntwcm9wcy5yZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cclxuICAgICAgPENlbGw+e3Byb3BzLnJlcXVlc3QudmFsdWV9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57cHJvcHMucmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD57YCR7cHJvcHMucmVxdWVzdC5hcHByb3ZhbENvdW50fS8ke3Byb3BzLnRvdGFsfWB9PC9DZWxsPlxyXG4gICAgICA8Q2VsbD5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBsb2FkaW5nPXtsb2FkfSBvbkNsaWNrPXthcHByb3ZlUmVxdWVzdH0+XHJcbiAgICAgICAgICBBcHByb3ZlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2VsbD5cclxuICAgICAgPENlbGw+XHJcbiAgICAgICAge2NvbXBlbGV0ZS5maW5hbGl6ZSA/IChcclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJjaGVja1wiIGNvbG9yPVwiZ3JlZW5cIiBzaXplPVwibGFyZ2VcIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwidGVhbFwiIG9uQ2xpY2s9e2ZpbmFsaXplUmVxdWVzdH0+XHJcbiAgICAgICAgICAgIEZpbmFsaXplXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NlbGw+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==