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
                _context.next = 6;
                break;
              }

              setData("Enter minimum value");
              _context.next = 29;
              break;

            case 6:
              if (!(formData < props.minimumContribution)) {
                _context.next = 10;
                break;
              }

              setData("Enter minimum value");
              _context.next = 29;
              break;

            case 10:
              if (!(formData > props.minimumContribution)) {
                _context.next = 29;
                break;
              }

              _context.prev = 11;
              setLoad(true);
              setData("");
              _context.next = 16;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 16:
              accounts = _context.sent;
              _context.next = 19;
              return campaign.methods.contribute().send({
                from: accounts[0],
                value: value
              });

            case 19:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].replaceRoute("/campaigns/".concat(props.address));
              setLoad(false);
              _context.next = 29;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](11);
              setLoad(false);
              setData(_context.t0.message);
              console.log(_context.t0);

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[11, 24]]);
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
                value: formData,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NvbnRyaWJ1dGUuanMiXSwibmFtZXMiOlsiQ29udHJpYnV0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZGF0YSIsInNldERhdGEiLCJsb2FkIiwic2V0TG9hZCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInJlc3VsdCIsIlJvdXRlciIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNyQkMsUUFEcUI7QUFBQSxNQUNYQyxXQURXOztBQUFBLG1CQUVKRixzREFBUSxDQUFDLEVBQUQsQ0FGSjtBQUFBLE1BRXJCRyxJQUZxQjtBQUFBLE1BRWZDLE9BRmU7O0FBQUEsbUJBR0pKLHNEQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHckJLLElBSHFCO0FBQUEsTUFHZkMsT0FIZTs7QUFJNUIsTUFBTUMsUUFBUSxHQUFHQyxrRUFBUSxDQUFDVCxLQUFLLENBQUNVLE9BQVAsQ0FBekI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCVCxlQUFXLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRCxH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QkUscUVBQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUEsa0JBQVdULElBQUksaUJBQUkscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNEJELENBOUREOztHQUFNUCxVOztLQUFBQSxVO0FBZ0VTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy5mNDI0OGI5ZTQ3OWY4ZmNjNGUwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgSWNvbixcclxuICBHcmlkLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IE1lc3NhZ2VMb2FkZXIgZnJvbSBcIi4vTWVzc2FnZUxvYWRlclwiO1xyXG5cclxuY29uc3QgQ29udHJpYnV0ZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEZvcm1EYXRhKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLCBwcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhID4gcHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbik7XHJcbiAgICBpZiAoZm9ybURhdGEgPT09IFwiIFwiIHx8IGZvcm1EYXRhID09PSBudWxsKSB7XHJcbiAgICAgIHNldERhdGEoXCJFbnRlciBtaW5pbXVtIHZhbHVlXCIpO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtRGF0YSA8IHByb3BzLm1pbmltdW1Db250cmlidXRpb24pIHtcclxuICAgICAgc2V0RGF0YShcIkVudGVyIG1pbmltdW0gdmFsdWVcIik7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1EYXRhID4gcHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0RGF0YShcIlwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgICBzZXREYXRhKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEZvcm0gZXJyb3I9eyEhZGF0YX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29udHJpYnV0ZSB0byB0aGlzIENhbXBhaWduPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIndlaVwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGF9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgY29udGVudD17ZGF0YX0gaGVhZGVyPVwiT09QUyFcIiAvPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGZsb2F0ZWQ9XCJyaWdodFwiIGxvYWRpbmc9e2xvYWR9IG9uQ2xpY2s9e29uU3VibWl0fSBwcmltYXJ5PlxyXG4gICAgICAgICAgICAgICAgQ29udHJpYnV0ZSFcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDxHcmlkLlJvdz57bG9hZCAmJiA8TWVzc2FnZUxvYWRlciAvPn08L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==