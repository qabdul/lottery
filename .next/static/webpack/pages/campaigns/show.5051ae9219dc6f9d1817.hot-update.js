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
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      load = _useState3[0],
      setLoad = _useState3[1];

  var campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__["default"])(props.address);

  var handleChange = function handleChange(e) {
    var value = e.target.value;

    if (!isNaN(value)) {
      setValue(value);
    }
  };

  var minimumValue = props.minimumContribution;

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var accounts, result;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(value, minimumValue);
              console.log("object");
              _context.prev = 2;
              setLoad(true);
              setData("");
              _context.next = 7;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 7:
              accounts = _context.sent;
              _context.next = 10;
              return campaign.methods.contribute().send({
                from: accounts[0],
                value: value
              });

            case 10:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].replaceRoute("/campaigns/".concat(props.address));
              setLoad(false);
              _context.next = 20;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              setLoad(false);
              setData(_context.t0.message);
              console.log(_context.t0);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15]]);
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
                value: value,
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

_s(Contribute, "OlzWKbBmy+LrmIf0Af+BkU4ZqLE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NvbnRyaWJ1dGUuanMiXSwibmFtZXMiOlsiQ29udHJpYnV0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkIiwic2V0TG9hZCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImlzTmFOIiwibWluaW11bVZhbHVlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInJlc3VsdCIsIlJvdXRlciIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsRUFETjtBQUFBLE1BQ3JCQyxLQURxQjtBQUFBLE1BQ2RDLFFBRGM7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFckJHLElBRnFCO0FBQUEsTUFFZkMsT0FGZTs7QUFBQSxtQkFHSkosc0RBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUdyQkssSUFIcUI7QUFBQSxNQUdmQyxPQUhlOztBQUk1QixNQUFNQyxRQUFRLEdBQUdDLGtFQUFRLENBQUNULEtBQUssQ0FBQ1UsT0FBUCxDQUF6Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFBQSxRQUNsQlYsS0FEa0IsR0FDUlUsQ0FBQyxDQUFDQyxNQURNLENBQ2xCWCxLQURrQjs7QUFF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RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy41MDUxYWU5MjE5ZGM2ZjlkMTgxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgSWNvbixcclxuICBHcmlkLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IE1lc3NhZ2VMb2FkZXIgZnJvbSBcIi4vTWVzc2FnZUxvYWRlclwiO1xyXG5cclxuY29uc3QgQ29udHJpYnV0ZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBtaW5pbXVtVmFsdWUgPSBwcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlLCBtaW5pbXVtVmFsdWUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwib2JqZWN0XCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgc2V0RGF0YShcIlwiKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgc2V0RGF0YShlcnJvci5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEZvcm0gZXJyb3I9eyEhZGF0YX0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Q29udHJpYnV0ZSB0byB0aGlzIENhbXBhaWduPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIndlaVwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgY29udGVudD17ZGF0YX0gaGVhZGVyPVwiT09QUyFcIiAvPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGZsb2F0ZWQ9XCJyaWdodFwiIGxvYWRpbmc9e2xvYWR9IG9uQ2xpY2s9e29uU3VibWl0fSBwcmltYXJ5PlxyXG4gICAgICAgICAgICAgICAgQ29udHJpYnV0ZSFcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDxHcmlkLlJvdz57bG9hZCAmJiA8TWVzc2FnZUxvYWRlciAvPn08L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==