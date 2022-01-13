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
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/Layout */ "./component/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../etherium/Campaign */ "./etherium/Campaign.js");




var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\pages\\campaigns\\requests\\newrequests.js",
    _this = undefined,
    _s = $RefreshSig$();








var newrequests = function newrequests() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    description: "",
    value: "",
    address: ""
  }),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      load = _useState3[0],
      setLoad = _useState3[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name;

    switch (name) {
      case "description":
        break;

      default:
        break;
    }
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var accounts, result;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoad(true);
              setData("");
              _context.next = 5;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_6__["default"].eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return _etherium_Campaign__WEBPACK_IMPORTED_MODULE_8__["default"].methods.createCampaign(value).send({
                from: accounts[0]
              });

            case 8:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_7__["Router"].pushRoute("/");
              setLoad(false);
              _context.next = 18;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              setLoad(false);
              setData(_context.t0.message);
              console.log(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
      as: "h3",
      children: "Create a Request"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      error: !!data,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          label: "Wei",
          labelPosition: "right",
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: value.description,
          name: "description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Value "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: value.value,
          name: "value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Recipeint "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: value.address,
          name: "address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Message"], {
        error: true,
        content: data,
        header: "OOPS!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        loading: load,
        onClick: onSubmit,
        primary: true,
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(newrequests, "Hc/xQO47FWBpV73sHRQjDxMw/+A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ld3JlcXVlc3RzLmpzIl0sIm5hbWVzIjpbIm5ld3JlcXVlc3RzIiwidXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwiYWRkcmVzcyIsInNldFZhbHVlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkIiwic2V0TG9hZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwib25TdWJtaXQiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIkNhbXBhaWduIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJyZXN1bHQiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDO0FBQ2pDQyxlQUFXLEVBQUUsRUFEb0I7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsV0FBTyxFQUFFO0FBSHdCLEdBQUQsQ0FEVjtBQUFBLE1BQ2pCRCxLQURpQjtBQUFBLE1BQ1ZFLFFBRFU7O0FBQUEsbUJBTUFKLHNEQUFRLENBQUMsRUFBRCxDQU5SO0FBQUEsTUFNakJLLElBTmlCO0FBQUEsTUFNWEMsT0FOVzs7QUFBQSxtQkFPQU4sc0RBQVEsQ0FBQyxLQUFELENBUFI7QUFBQSxNQU9qQk8sSUFQaUI7QUFBQSxNQU9YQyxPQVBXOztBQVF4QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFBQSxvQkFDRkEsQ0FBQyxDQUFDQyxNQURBO0FBQUEsUUFDbEJULEtBRGtCLGFBQ2xCQSxLQURrQjtBQUFBLFFBQ1hVLElB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ZUFBTyxFQUFFRSxJQUFqQjtBQUF1QixlQUFPLEVBQUVNLFFBQWhDO0FBQTBDLGVBQU8sTUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0EzRUQ7O0dBQU1kLFc7O0FBNkVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3cmVxdWVzdHMuNDM5ZDUwNTQ3ZDRjMzdhNjBiM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuXHJcbmNvbnN0IG5ld3JlcXVlc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICBzZXREYXRhKFwiXCIpO1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IENhbXBhaWduLm1ldGhvZHMuY3JlYXRlQ2FtcGFpZ24odmFsdWUpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoXCIvXCIpO1xyXG5cclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgc2V0RGF0YShlcnJvci5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkZXIgYXM9XCJoM1wiPkNyZWF0ZSBhIFJlcXVlc3Q8L0hlYWRlcj5cclxuICAgICAgPEZvcm0gZXJyb3I9eyEhZGF0YX0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiV2VpXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlZhbHVlIDwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cclxuICAgICAgICAgICAgbmFtZT1cInZhbHVlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlJlY2lwZWludCA8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWUuYWRkcmVzc31cclxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgY29udGVudD17ZGF0YX0gaGVhZGVyPVwiT09QUyFcIiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWR9IG9uQ2xpY2s9e29uU3VibWl0fSBwcmltYXJ5PlxyXG4gICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdyZXF1ZXN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==