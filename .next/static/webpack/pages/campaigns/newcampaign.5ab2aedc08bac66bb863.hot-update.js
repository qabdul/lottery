webpackHotUpdate_N_E("pages/campaigns/newcampaign",{

/***/ "./pages/campaigns/newcampaign.js":
/*!****************************************!*\
  !*** ./pages/campaigns/newcampaign.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var mocha_lib_runner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mocha/lib/runner */ "./node_modules/mocha/lib/runner.js");
/* harmony import */ var mocha_lib_runner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mocha_lib_runner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/Layout */ "./component/Layout.js");
/* harmony import */ var _etherium_CampaignFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../etherium/CampaignFactory */ "./etherium/CampaignFactory.js");
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\pages\\campaigns\\newcampaign.js",
    _this = undefined,
    _s = $RefreshSig$();









var newcampaign = function newcampaign() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      load = _useState3[0],
      setLoad = _useState3[1];

  var handleChange = function handleChange(e) {
    var value = e.target.value;

    if (!isNaN(value)) {
      console.log(value);
      setValue(value);
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
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_8__["default"].eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return _etherium_CampaignFactory__WEBPACK_IMPORTED_MODULE_7__["default"].methods.createCampaign(value).send({
                from: accounts[0]
              });

            case 8:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute("/");
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Header"], {
      as: "h3",
      children: "Create a Campaign"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      error: !!data,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Minimum Contribution"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          type: "number",
          label: "Wei",
          labelPosition: "right",
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Message"], {
        error: true,
        content: data,
        header: "OOPS!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        loading: load,
        onClick: onSubmit,
        primary: true,
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Message"], {
      icon: true,
      success: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
        name: "circle notched",
        loading: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Message"].Content, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Message"].Header, {
          children: "It might take 40 secs to processed your request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), "Your transaction is being procssed......please wait"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_s(newcampaign, "OlzWKbBmy+LrmIf0Af+BkU4ZqLE=");

/* harmony default export */ __webpack_exports__["default"] = (newcampaign);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ld2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIm5ld2NhbXBhaWduIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkIiwic2V0TG9hZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpc05hTiIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiQ2FtcGFpZ25GYWN0b3J5IiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJyZXN1bHQiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxFQURWO0FBQUEsTUFDakJDLEtBRGlCO0FBQUEsTUFDVkMsUUFEVTs7QUFBQSxtQkFFQUYsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVqQkcsSUFGaUI7QUFBQSxNQUVYQyxPQUZXOztBQUFBLG1CQUdBSixzREFBUSxDQUFDLEtBQUQsQ0FIUjtBQUFBLE1BR2pCSyxJQUhpQjtBQUFBLE1BR1hDLE9BSFc7O0FBSXhCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUFBLFFBQ2xCUCxLQURrQixHQUNSTyxDQUFDLENBQUNDLE1BRE0sQ0FDbEJSLEtBRGtCOztBQUUxQixRQUFJLENBQUNTLEtBQUssQ0FBQ1QsS0FBRCxDQUFWLEVBQW1CO0FBQ2pCVSxhQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNBQyxjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFNWSxRQUFRO0FBQUEsMFRBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFYlAscUJBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUYscUJBQU8sQ0FBQyxFQUFELENBQVA7QUFIYTtBQUFBLHFCQUlVVSxzREFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFKVjs7QUFBQTtBQUlQQyxzQkFKTztBQUFBO0FBQUEscUJBS1FDLGlFQUFlLENBQUNDLE9BQWhCLENBQXdCQyxjQUF4QixDQUF1Q25CLEtBQXZDLEVBQThDb0IsSUFBOUMsQ0FBbUQ7QUFDdEVDLG9CQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBRHdELGVBQW5ELENBTFI7O0FBQUE7QUFLUE0sb0JBTE87QUFTYkMsNERBQU0sQ0FBQ0MsU0FBUCxDQUFpQixHQUFqQjtBQUVBbkIscUJBQU8sQ0FBQyxLQUFELENBQVA7QUFYYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWFiQSxxQkFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBRixxQkFBTyxDQUFDLFlBQU1zQixPQUFQLENBQVA7QUFDQWYscUJBQU8sQ0FBQ0MsR0FBUjs7QUFmYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSQyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBa0JBLHNCQUNFLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFBUSxRQUFFLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsc0RBQUQ7QUFBTSxXQUFLLEVBQUUsQ0FBQyxDQUFDVixJQUFmO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyx1REFBRDtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsZUFBSyxFQUFDLEtBRlI7QUFHRSx1QkFBYSxFQUFDLE9BSGhCO0FBSUUsa0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLG1CQUFPRCxZQUFZLENBQUNDLENBQUQsQ0FBbkI7QUFBQSxXQUpaO0FBS0UsZUFBSyxFQUFFUDtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFXRSxxRUFBQyx5REFBRDtBQUFTLGFBQUssTUFBZDtBQUFlLGVBQU8sRUFBRUUsSUFBeEI7QUFBOEIsY0FBTSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixlQWFFLHFFQUFDLHdEQUFEO0FBQVEsZUFBTyxFQUFFRSxJQUFqQjtBQUF1QixlQUFPLEVBQUVRLFFBQWhDO0FBQTBDLGVBQU8sTUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQW1CRSxxRUFBQyx5REFBRDtBQUFTLFVBQUksTUFBYjtBQUFjLGFBQU8sTUFBckI7QUFBQSw4QkFDRSxxRUFBQyxzREFBRDtBQUFNLFlBQUksRUFBQyxnQkFBWDtBQUE0QixlQUFPO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHlEQUFELENBQVMsT0FBVDtBQUFBLGdDQUNFLHFFQUFDLHlEQUFELENBQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0E3REQ7O0dBQU1kLFc7O0FBK0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvbmV3Y2FtcGFpZ24uNWFiMmFlZGMwOGJhYzY2YmI4NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uIH0gZnJvbSBcIm1vY2hhL2xpYi9ydW5uZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBQcm9ncmVzcyxcclxuICBJY29uLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSBcIi4uLy4uL2V0aGVyaXVtL0NhbXBhaWduRmFjdG9yeVwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBuZXdjYW1wYWlnbiA9ICgpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgc2V0RGF0YShcIlwiKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBDYW1wYWlnbkZhY3RvcnkubWV0aG9kcy5jcmVhdGVDYW1wYWlnbih2YWx1ZSkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUm91dGVyLnB1c2hSb3V0ZShcIi9cIik7XHJcblxyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgICBzZXREYXRhKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlciBhcz1cImgzXCI+Q3JlYXRlIGEgQ2FtcGFpZ248L0hlYWRlcj5cclxuICAgICAgPEZvcm0gZXJyb3I9eyEhZGF0YX0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIldlaVwiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtkYXRhfSBoZWFkZXI9XCJPT1BTIVwiIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZH0gb25DbGljaz17b25TdWJtaXR9IHByaW1hcnk+XHJcbiAgICAgICAgICBDcmVhdGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8TWVzc2FnZSBpY29uIHN1Y2Nlc3M+XHJcbiAgICAgICAgPEljb24gbmFtZT1cImNpcmNsZSBub3RjaGVkXCIgbG9hZGluZyAvPlxyXG4gICAgICAgIDxNZXNzYWdlLkNvbnRlbnQ+XHJcbiAgICAgICAgICA8TWVzc2FnZS5IZWFkZXI+XHJcbiAgICAgICAgICAgIEl0IG1pZ2h0IHRha2UgNDAgc2VjcyB0byBwcm9jZXNzZWQgeW91ciByZXF1ZXN0XHJcbiAgICAgICAgICA8L01lc3NhZ2UuSGVhZGVyPlxyXG4gICAgICAgICAgWW91ciB0cmFuc2FjdGlvbiBpcyBiZWluZyBwcm9jc3NlZC4uLi4uLnBsZWFzZSB3YWl0XHJcbiAgICAgICAgPC9NZXNzYWdlLkNvbnRlbnQ+XHJcbiAgICAgIDwvTWVzc2FnZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdjYW1wYWlnbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==