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
    var value = e.target.value;
    setValue(value);
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var accounts, result;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(value, props.minimumContribution);
              console.log(value > props.minimumContribution);

              if (!(value === " " || value === null)) {
                _context.next = 6;
                break;
              }

              setData("Enter minimum value");
              _context.next = 25;
              break;

            case 6:
              if (!(value > minimumValue)) {
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
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
                label: "wei",
                labelPosition: "right",
                onChange: function onChange(e) {
                  return handleChange(e);
                },
                value: value,
                type: "number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
              error: true,
              content: data,
              header: "OOPS!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              floated: "right",
              loading: load,
              onClick: onSubmit,
              primary: true,
              children: "Contribute!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
        children: load && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MessageLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NvbnRyaWJ1dGUuanMiXSwibmFtZXMiOlsiQ29udHJpYnV0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImRhdGEiLCJzZXREYXRhIiwibG9hZCIsInNldExvYWQiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwiYWRkcmVzcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwibWluaW11bVZhbHVlIiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwicmVzdWx0IiwiUm91dGVyIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxFQUROO0FBQUEsTUFDckJDLEtBRHFCO0FBQUEsTUFDZEMsUUFEYzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxFQUFELENBRlo7QUFBQSxNQUVyQkcsUUFGcUI7QUFBQSxNQUVYQyxXQUZXOztBQUFBLG1CQUdKSixzREFBUSxDQUFDLEVBQUQsQ0FISjtBQUFBLE1BR3JCSyxJQUhxQjtBQUFBLE1BR2ZDLE9BSGU7O0FBQUEsbUJBSUpOLHNEQUFRLENBQUMsS0FBRCxDQUpKO0FBQUEsTUFJckJPLElBSnFCO0FBQUEsTUFJZkMsT0FKZTs7QUFLNUIsTUFBTUMsUUFBUSxHQUFHQyxrRUFBUSxDQUFDWCxLQUFLLENBQUNZLE9BQVAsQ0FBekI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFH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LGVBc0JFLHFFQUFDLHNEQUFELENBQU0sR0FBTjtBQUFBLGtCQUFXUixJQUFJLGlCQUFJLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTRCRCxDQTlERDs7R0FBTVQsVTs7S0FBQUEsVTtBQWdFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuYzJlYTIyZWI4MWIyODQ2NTNhZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBNZXNzYWdlLFxyXG4gIEljb24sXHJcbiAgR3JpZCxcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcml1bS9DYW1wYWlnblwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcbmltcG9ydCBNZXNzYWdlTG9hZGVyIGZyb20gXCIuL01lc3NhZ2VMb2FkZXJcIjtcclxuXHJcbmNvbnN0IENvbnRyaWJ1dGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSwgcHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbik7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSA+IHByb3BzLm1pbmltdW1Db250cmlidXRpb24pO1xyXG4gICAgaWYgKHZhbHVlID09PSBcIiBcIiB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICBzZXREYXRhKFwiRW50ZXIgbWluaW11bSB2YWx1ZVwiKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPiBtaW5pbXVtVmFsdWUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICAgIHNldERhdGEoXCJcIik7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9YCk7XHJcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgICAgc2V0RGF0YShlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxGb3JtIGVycm9yPXshIWRhdGF9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbnRyaWJ1dGUgdG8gdGhpcyBDYW1wYWlnbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGNvbnRlbnQ9e2RhdGF9IGhlYWRlcj1cIk9PUFMhXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBmbG9hdGVkPVwicmlnaHRcIiBsb2FkaW5nPXtsb2FkfSBvbkNsaWNrPXtvblN1Ym1pdH0gcHJpbWFyeT5cclxuICAgICAgICAgICAgICAgIENvbnRyaWJ1dGUhXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+e2xvYWQgJiYgPE1lc3NhZ2VMb2FkZXIgLz59PC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=