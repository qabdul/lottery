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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      load = _useState3[0],
      setLoad = _useState3[1];

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
                _context.next = 7;
                break;
              }

              console.log(formData);
              setData("Enter minimum value");
              _context.next = 31;
              break;

            case 7:
              if (!(formData < props.minimumContribution)) {
                _context.next = 12;
                break;
              }

              console.log(formData);
              setData("Enter minimum value");
              _context.next = 31;
              break;

            case 12:
              if (!(formData >= props.minimumContribution)) {
                _context.next = 31;
                break;
              }

              _context.prev = 13;
              setLoad(true);
              setData("");
              _context.next = 18;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 18:
              accounts = _context.sent;
              _context.next = 21;
              return campaign.methods.contribute().send({
                from: accounts[0],
                value: formData
              });

            case 21:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].replaceRoute("/campaigns/".concat(props.address));
              setLoad(false);
              _context.next = 31;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](13);
              setLoad(false);
              setData(_context.t0.message);
              console.log(_context.t0);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[13, 26]]);
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
                lineNumber: 59,
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
                lineNumber: 60,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
              error: true,
              content: data,
              header: "OOPS!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              floated: "right",
              loading: load,
              onClick: onSubmit,
              primary: true,
              children: "Contribute!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
        children: load && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MessageLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Contribute, "xhcgvqiyRlpbES375Tr1TAOox0k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NvbnRyaWJ1dGUuanMiXSwibmFtZXMiOlsiQ29udHJpYnV0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZGF0YSIsInNldERhdGEiLCJsb2FkIiwic2V0TG9hZCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInJlc3VsdCIsIlJvdXRlciIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNyQkMsUUFEcUI7QUFBQSxNQUNYQyxXQURXOztBQUFBLG1CQUVKRixzREFBUSxDQUFDLEVBQUQsQ0FGSjtBQUFBLE1BRXJCRyxJQUZxQjtBQUFBLE1BRWZDLE9BRmU7O0FBQUEsbUJBR0pKLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHckJLLElBSHFCO0FBQUEsTUFHZkMsT0FIZTs7QUFJNUIsTUFBTUMsUUFBUSxHQUFHQyxrRUFBUSxDQUFDVCxLQUFLLENBQUNVLE9BQVAsQ0FBekI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCVCxlQUFXLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxH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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFzQkUscUVBQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUEsa0JBQVdULElBQUksaUJBQUkscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNEJELENBaEVEOztHQUFNUCxVOztLQUFBQSxVO0FBa0VTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy42M2Q2NGNlYTM2ZTMwMjUxN2FhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgSWNvbixcclxuICBHcmlkLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IE1lc3NhZ2VMb2FkZXIgZnJvbSBcIi4vTWVzc2FnZUxvYWRlclwiO1xyXG5cclxuY29uc3QgQ29udHJpYnV0ZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLCBwcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhID4gcHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbik7XHJcbiAgICBpZiAoZm9ybURhdGEgPT09IFwiIFwiIHx8IGZvcm1EYXRhID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgc2V0RGF0YShcIkVudGVyIG1pbmltdW0gdmFsdWVcIik7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1EYXRhIDwgcHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIHNldERhdGEoXCJFbnRlciBtaW5pbXVtIHZhbHVlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtRGF0YSA+PSBwcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgICBzZXREYXRhKFwiXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcclxuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICAgICAgdmFsdWU6IGZvcm1EYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfWApO1xyXG4gICAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgICAgIHNldERhdGEoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8Rm9ybSBlcnJvcj17ISFkYXRhfT5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db250cmlidXRlIHRvIHRoaXMgQ2FtcGFpZ248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtkYXRhfSBoZWFkZXI9XCJPT1BTIVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b24gZmxvYXRlZD1cInJpZ2h0XCIgbG9hZGluZz17bG9hZH0gb25DbGljaz17b25TdWJtaXR9IHByaW1hcnk+XHJcbiAgICAgICAgICAgICAgICBDb250cmlidXRlIVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93Pntsb2FkICYmIDxNZXNzYWdlTG9hZGVyIC8+fTwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9