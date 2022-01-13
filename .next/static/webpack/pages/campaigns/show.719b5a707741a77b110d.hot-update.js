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
      console.log(value);
      setValue(value);
    }
  };

  console.log(props);

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var accounts, result;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(value, props.minimumContribution);

              if (!(value > props.minimumContribution)) {
                _context.next = 23;
                break;
              }

              console.log("object");
              _context.prev = 3;
              setLoad(true);
              setData("");
              _context.next = 8;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 8:
              accounts = _context.sent;
              _context.next = 11;
              return campaign.methods.contribute().send({
                from: accounts[0],
                value: value
              });

            case 11:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].replaceRoute("/campaigns/".concat(props.address));
              setLoad(false);
              _context.next = 21;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](3);
              setLoad(false);
              setData(_context.t0.message);
              console.log(_context.t0);

            case 21:
              _context.next = 24;
              break;

            case 23:
              setData("Enter MinimumContribuion of ".concat(props.minimumContribution));

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 16]]);
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
                lineNumber: 60,
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
                lineNumber: 61,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
              error: true,
              content: data,
              header: "OOPS!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              floated: "right",
              loading: load,
              onClick: onSubmit,
              primary: true,
              children: "Contribute!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Row, {
        children: load && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MessageLoader__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0NvbnRyaWJ1dGUuanMiXSwibmFtZXMiOlsiQ29udHJpYnV0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkIiwic2V0TG9hZCIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImlzTmFOIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInJlc3VsdCIsIlJvdXRlciIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsRUFETjtBQUFBLE1BQ3JCQyxLQURxQjtBQUFBLE1BQ2RDLFFBRGM7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFckJHLElBRnFCO0FBQUEsTUFFZkMsT0FGZTs7QUFBQSxtQkFHSkosc0RBQVEsQ0FBQyxLQUFELENBSEo7QUFBQSxNQUdyQkssSUFIcUI7QUFBQSxNQUdmQyxPQUhlOztBQUk1QixNQUFNQyxRQUFRLEdBQUdDLGtFQUFRLENBQUNULEtBQUssQ0FBQ1UsT0FBUCxDQUF6Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFBQSxRQUNsQlYsS0FEa0IsR0FDUlUsQ0FBQyxDQUFDQyxNQURNLENBQ2xCWCxLQURrQjs7QUFFMUIsUUFBSSxDQUFDWSxL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LElBQUksaUJBQUkscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNEJELENBakVEOztHQUFNUCxVOztLQUFBQSxVO0FBbUVTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy43MTliNWE3MDc3NDFhNzdiMTEwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgSWNvbixcclxuICBHcmlkLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IE1lc3NhZ2VMb2FkZXIgZnJvbSBcIi4vTWVzc2FnZUxvYWRlclwiO1xyXG5cclxuY29uc3QgQ29udHJpYnV0ZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5hZGRyZXNzKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgIHNldFZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSwgcHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbik7XHJcbiAgICBpZiAodmFsdWUgPiBwcm9wcy5taW5pbXVtQ29udHJpYnV0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwib2JqZWN0XCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgICAgc2V0RGF0YShcIlwiKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc31gKTtcclxuICAgICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgICBzZXREYXRhKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RGF0YShgRW50ZXIgTWluaW11bUNvbnRyaWJ1aW9uIG9mICR7cHJvcHMubWluaW11bUNvbnRyaWJ1dGlvbn1gKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxGb3JtIGVycm9yPXshIWRhdGF9PlxyXG4gICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvbnRyaWJ1dGUgdG8gdGhpcyBDYW1wYWlnbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGNvbnRlbnQ9e2RhdGF9IGhlYWRlcj1cIk9PUFMhXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBmbG9hdGVkPVwicmlnaHRcIiBsb2FkaW5nPXtsb2FkfSBvbkNsaWNrPXtvblN1Ym1pdH0gcHJpbWFyeT5cclxuICAgICAgICAgICAgICAgIENvbnRyaWJ1dGUhXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+e2xvYWQgJiYgPE1lc3NhZ2VMb2FkZXIgLz59PC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=