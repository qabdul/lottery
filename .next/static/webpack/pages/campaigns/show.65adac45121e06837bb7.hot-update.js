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

              console.log(formData);
              _context.prev = 14;
              setLoad(true);
              setData("");
              _context.next = 19;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 19:
              accounts = _context.sent;
              _context.next = 22;
              return campaign.methods.contribute().send({
                from: accounts[0],
                value: formData
              });

            case 22:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].replaceRoute("/campaigns/".concat(props.address));
              setLoad(false);
              _context.next = 31;
              break;

            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](14);
              setLoad(false);
              setData(_context.t0.message);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[14, 27]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NvbnRyaWJ1dGUuanMiXSwibmFtZXMiOlsiQ29udHJpYnV0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZGF0YSIsInNldERhdGEiLCJsb2FkIiwic2V0TG9hZCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInJlc3VsdCIsIlJvdXRlciIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNyQkMsUUFEcUI7QUFBQSxNQUNYQyxXQURXOztBQUFBLG1CQUVKRixzREFBUSxDQUFDLEVBQUQsQ0FGSjtBQUFBLE1BRXJCRyxJQUZxQjtBQUFBLE1BRWZDLE9BRmU7O0FBQUEsbUJBR0pKLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHckJLLElBSHFCO0FBQUEsTUFHZkMsT0FIZTs7QUFJNUIsTUFBTUMsUUFBUSxHQUFHQyxrRUFBUSxDQUFDVCxLQUFLLENBQUNVLE9BQVAsQ0FBekI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCVCxlQUFXLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxH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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXNCRSxxRUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQSxrQkFBV1QsSUFBSSxpQkFBSSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE0QkQsQ0FoRUQ7O0dBQU1QLFU7O0tBQUFBLFU7QUFrRVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9zaG93LjY1YWRhYzQ1MTIxZTA2ODM3YmI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBIZWFkZXIsXHJcbiAgQnV0dG9uLFxyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgTWVzc2FnZSxcclxuICBJY29uLFxyXG4gIEdyaWQsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyaXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5pbXBvcnQgTWVzc2FnZUxvYWRlciBmcm9tIFwiLi9NZXNzYWdlTG9hZGVyXCI7XHJcblxyXG5jb25zdCBDb250cmlidXRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEsIHByb3BzLm1pbmltdW1Db250cmlidXRpb24pO1xyXG4gICAgY29uc29sZS5sb2coZm9ybURhdGEgPiBwcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uKTtcclxuICAgIGlmIChmb3JtRGF0YSA9PT0gXCIgXCIgfHwgZm9ybURhdGEgPT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICBzZXREYXRhKFwiRW50ZXIgbWluaW11bSB2YWx1ZVwiKTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybURhdGEgPCBwcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgc2V0RGF0YShcIkVudGVyIG1pbmltdW0gdmFsdWVcIik7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1EYXRhID49IHByb3BzLm1pbmltdW1Db250cmlidXRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0RGF0YShcIlwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgIHZhbHVlOiBmb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgICBzZXREYXRhKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8Rm9ybSBlcnJvcj17ISFkYXRhfT5cclxuICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Db250cmlidXRlIHRvIHRoaXMgQ2FtcGFpZ248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtkYXRhfSBoZWFkZXI9XCJPT1BTIVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxCdXR0b24gZmxvYXRlZD1cInJpZ2h0XCIgbG9hZGluZz17bG9hZH0gb25DbGljaz17b25TdWJtaXR9IHByaW1hcnk+XHJcbiAgICAgICAgICAgICAgICBDb250cmlidXRlIVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93Pntsb2FkICYmIDxNZXNzYWdlTG9hZGVyIC8+fTwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9