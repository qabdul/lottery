webpackHotUpdate_N_E("pages/campaigns/show",{

/***/ "./component/Contribute.js":
/*!*********************************!*\
  !*** ./component/Contribute.js ***!
  \*********************************/
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
/* harmony import */ var _MessageLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessageLoader */ "./component/MessageLoader.jsx");





var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\component\\Contribute.js",
    _this = undefined,
    _s = $RefreshSig$();








var Contribute = function Contribute(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      data = _useState3[0],
      setData = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      load = _useState4[0],
      setLoad = _useState4[1];

  var campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__["default"])(props.address);

  var handleChange = function handleChange(e) {
    setFormData(e.target.value);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var accounts, result;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(formData, props.minimumContribution);
              console.log(formData > props.minimumContribution);

              if (!(formData === " " || formData === null)) {
                _context.next = 6;
                break;
              }

              setData("Enter minimum value");
              _context.next = 25;
              break;

            case 6:
              if (!(formData > minimumValue)) {
                _context.next = 25;
                break;
              }

              _context.prev = 7;
              setLoad(true);
              setData("");
              _context.next = 12;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 12:
              accounts = _context.sent;
              _context.next = 15;
              return campaign.methods.contribute().send({
                from: accounts[0],
                value: value
              });

            case 15:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].replaceRoute("/campaigns/".concat(props.address));
              setLoad(false);
              _context.next = 25;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](7);
              setLoad(false);
              setData(_context.t0.message);
              console.log(_context.t0);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 20]]);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
            error: !!data,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Contribute to this Campaign"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                label: "wei",
                labelPosition: "right",
                onChange: function onChange(e) {
                  return handleChange(e);
                },
                value: formData,
                type: "number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
              error: true,
              content: data,
              header: "OOPS!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              floated: "right",
              loading: load,
              onClick: onSubmit,
              primary: true,
              children: "Contribute!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
        children: load && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MessageLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Contribute, "d6c4epRJwi9AxJn8TVmJ61eyBsg=");

_c = Contribute;
/* harmony default export */ __webpack_exports__["default"] = (Contribute);

var _c;

$RefreshReg$(_c, "Contribute");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NvbnRyaWJ1dGUuanMiXSwibmFtZXMiOlsiQ29udHJpYnV0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImRhdGEiLCJzZXREYXRhIiwibG9hZCIsInNldExvYWQiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwiYWRkcmVzcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwibWluaW11bVZhbHVlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwicmVzdWx0IiwiUm91dGVyIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxFQUROO0FBQUEsTUFDckJDLEtBRHFCO0FBQUEsTUFDZEMsUUFEYzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUVyQkcsUUFGcUI7QUFBQSxNQUVYQyxXQUZXOztBQUFBLG1CQUdKSixzREFBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BR3JCSyxJQUhxQjtBQUFBLE1BR2ZDLE9BSGU7O0FBQUEsbUJBSUpOLHNEQUFRLENBQUMsS0FBRCxDQUpKO0FBQUEsTUFJckJPLElBSnFCO0FBQUEsTUFJZkMsT0FKZTs7QUFLNUIsTUFBTUMsUUFBUSxHQUFHQyxrRUFBUSxDQUFDWCxLQUFLLENBQUNZLE9BQVAsQ0FBekI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFH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a0JBQVdSLElBQUksaUJBQUkscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNEJELENBN0REOztHQUFNVCxVOztLQUFBQSxVO0FBK0RTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy5hMTZjMDhmYjFiOTRjNzVkZDc0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgSWNvbixcclxuICBHcmlkLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IE1lc3NhZ2VMb2FkZXIgZnJvbSBcIi4vTWVzc2FnZUxvYWRlclwiO1xyXG5cclxuY29uc3QgQ29udHJpYnV0ZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLmFkZHJlc3MpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSwgcHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbik7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSA+IHByb3BzLm1pbmltdW1Db250cmlidXRpb24pO1xyXG4gICAgaWYgKGZvcm1EYXRhID09PSBcIiBcIiB8fCBmb3JtRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICBzZXREYXRhKFwiRW50ZXIgbWluaW11bSB2YWx1ZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybURhdGEgPiBtaW5pbXVtVmFsdWUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICAgIHNldERhdGEoXCJcIik7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgICAgc2V0RGF0YShlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxGb3JtIGVycm9yPXshIWRhdGF9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbnRyaWJ1dGUgdG8gdGhpcyBDYW1wYWlnbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGNvbnRlbnQ9e2RhdGF9IGhlYWRlcj1cIk9PUFMhXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBmbG9hdGVkPVwicmlnaHRcIiBsb2FkaW5nPXtsb2FkfSBvbkNsaWNrPXtvblN1Ym1pdH0gcHJpbWFyeT5cclxuICAgICAgICAgICAgICAgIENvbnRyaWJ1dGUhXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+e2xvYWQgJiYgPE1lc3NhZ2VMb2FkZXIgLz59PC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=