webpackHotUpdate_N_E("pages/campaigns/requests/newrequests",{

/***/ "./pages/campaigns/requests/newrequests.js":
/*!*************************************************!*\
  !*** ./pages/campaigns/requests/newrequests.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/Layout */ "./component/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../etherium/Campaign */ "./etherium/Campaign.js");





var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\pages\\campaigns\\requests\\newrequests.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var newrequests = function newrequests(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    description: "",
    value: "",
    address: ""
  }),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      load = _useState3[0],
      setLoad = _useState3[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;

    switch (name) {
      case "description":
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          description: value
        }));
        break;

      case "value":
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          value: value
        }));
        break;

      case "address":
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          address: value
        }));
        break;

      default:
        break;
    }
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var campaign, accounts, result;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_9__["default"])(props.address);
              _context.prev = 1;
              setLoad(true);
              setData("");
              _context.next = 6;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return campaign.methods.createRequests(formData.description, formData.value, formData.address).send({
                from: accounts[0]
              });

            case 9:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].pushRoute("/campaigns/".concat(props.address, "/requests"));
              setLoad(false);
              _context.next = 19;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              setLoad(false);
              setData(_context.t0.message);
              console.log(_context.t0);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 14]]);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
      as: "h3",
      children: "Create a Request"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      to: "/campaigns/".concat(props.address, "/requests"),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          primary: true,
          children: "Back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      error: !!data,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          label: "Wei",
          labelPosition: "right",
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.description,
          name: "description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Value "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.value,
          name: "value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Recipeint "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.address,
          name: "address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"], {
        error: true,
        content: data,
        header: "OOPS!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        loading: load,
        onClick: onSubmit,
        primary: true,
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(newrequests, "J/Vc2/bkYSp1dwlv8i3+fe/3uVU=");

newrequests.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(props) {
    var address;
    return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            address = props.query.address;
            return _context2.abrupt("return", {
              address: address
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (newrequests);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ld3JlcXVlc3RzLmpzIl0sIm5hbWVzIjpbIm5ld3JlcXVlc3RzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJhZGRyZXNzIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImRhdGEiLCJzZXREYXRhIiwibG9hZCIsInNldExvYWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsIm9uU3VibWl0IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3RzIiwic2VuZCIsImZyb20iLCJyZXN1bHQiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQztBQUN2Q0MsZUFBVyxFQUFFLEVBRDBCO0FBRXZDQyxTQUFLLEVBQUUsRUFGZ0M7QUFHdkNDLFdBQU8sRUFBRTtBQUg4QixHQUFELENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUFBLG1CQU1MTCxzREFBUSxDQUFDLEVBQUQsQ0FOSDtBQUFBLE1BTXRCTSxJQU5zQjtBQUFBLE1BTWhCQyxPQU5nQjs7QUFBQSxtQkFPTFAsc0RBQVEsQ0FBQyxLQUFELENBUEg7QUFBQSxNQU90QlEsSUFQc0I7QUFBQSxNQU9oQkMsT0FQZ0I7O0FBUTdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENB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Q2lDLEtBQU4sQ0FBWTdCLE9BREE7QUFBQSw4Q0FHckI7QUFDTEEscUJBQU8sRUFBUEE7QUFESyxhQUhxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRZUwsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ld3JlcXVlc3RzLmYyMDk2YjYyMzFlMzgzODFiNjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWFkZXIsIEJ1dHRvbiwgRm9ybSwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uLy4uL2V0aGVyaXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlc1wiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcblxyXG5jb25zdCBuZXdyZXF1ZXN0cyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZGVzY3JpcHRpb246IHZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidmFsdWVcIjpcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJhZGRyZXNzXCI6XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgYWRkcmVzczogdmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLmFkZHJlc3MpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgIHNldERhdGEoXCJcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kc1xyXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0cyhmb3JtRGF0YS5kZXNjcmlwdGlvbiwgZm9ybURhdGEudmFsdWUsIGZvcm1EYXRhLmFkZHJlc3MpXHJcbiAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKGAvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcclxuXHJcbiAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIHNldERhdGEoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyIGFzPVwiaDNcIj5DcmVhdGUgYSBSZXF1ZXN0PC9IZWFkZXI+XHJcbiAgICAgIDxMaW5rIHRvPXtgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnk9e3RydWV9PkJhY2s8L0J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPEZvcm0gZXJyb3I9eyEhZGF0YX0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiV2VpXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlZhbHVlIDwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS52YWx1ZX1cclxuICAgICAgICAgICAgbmFtZT1cInZhbHVlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlJlY2lwZWludCA8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuYWRkcmVzc31cclxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgY29udGVudD17ZGF0YX0gaGVhZGVyPVwiT09QUyFcIiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWR9IG9uQ2xpY2s9e29uU3VibWl0fSBwcmltYXJ5PlxyXG4gICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5uZXdyZXF1ZXN0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZHJlc3MsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld3JlcXVlc3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9