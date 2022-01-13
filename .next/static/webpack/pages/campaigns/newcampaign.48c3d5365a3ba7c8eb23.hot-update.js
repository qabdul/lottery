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
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      error: !!data,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Minimum Contribution"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
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
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Message"], {
        error: true,
        content: data,
        header: "OOPS!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        loading: load,
        onClick: onSubmit,
        primary: true,
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Segment"], {
        style: {
          width: "100%",
          height: "100vh"
        },
        loading: true,
        children: "Please wait... youe transaction is being processed.It may take up 40 secs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ld2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIm5ld2NhbXBhaWduIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkIiwic2V0TG9hZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpc05hTiIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiQ2FtcGFpZ25GYWN0b3J5IiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJyZXN1bHQiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLEVBRFY7QUFBQSxNQUNqQkMsS0FEaUI7QUFBQSxNQUNWQyxRQURVOztBQUFBLG1CQUVBRixzREFBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWpCRyxJQUZpQjtBQUFBLE1BRVhDLE9BRlc7O0FBQUEsbUJBR0FKLHNEQUFRLENBQUMsS0FBRCxDQUhSO0FBQUEsTUFHakJLLElBSGlCO0FBQUEsTUFHWEMsT0FIVzs7QUFJeEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQUEsUUFDbEJQLEtBRGtCLEdBQ1JPLENBQUMsQ0FBQ0MsTUFETSxDQUNsQlIsS0FEa0I7O0FBRTFCLFFBQUksQ0FBQ1MsS0FBSyxDQUFDVCxLQUFELENBQVYsRUFBbUI7QUFDakJVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0FDLGNBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQU1ZLFFBQVE7QUFBQSwwVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUViUCxxQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBRixxQkFBTyxDQUFDLEVBQUQsQ0FBUDtBQUhhO0FBQUEscUJBSVVVLHNEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUpWOztBQUFBO0FBSVBDLHNCQUpPO0FBQUE7QUFBQSxxQkFLUUMsaUVBQWUsQ0FBQ0MsT0FBaEIsQ0FBd0JDLGNBQXhCLENBQXVDbkIsS0FBdkMsRUFBOENvQixJQUE5QyxDQUFtRDtBQUN0RUMsb0JBQUksRUFBRUwsUUFBUSxDQUFDLENBQUQ7QUFEd0QsZUFBbkQsQ0FMUjs7QUFBQTtBQUtQTSxvQkFMTztBQVNiQyw0REFBTSxDQUFDQyxTQUFQLENBQWlCLEdBQWpCO0FBRUFuQixxQkFBTyxDQUFDLEtBQUQsQ0FBUDtBQVhhO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYWJBLHFCQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FGLHFCQUFPLENBQUMsWUFBTXNCLE9BQVAsQ0FBUDtBQUNBZixxQkFBTyxDQUFDQyxHQUFSOztBQWZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJDLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFrQkEsc0JBQ0UscUVBQUMseURBQUQ7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFRLFFBQUUsRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxzREFBRDtBQUFNLFdBQUssRUFBRSxDQUFDLENBQUNWLElBQWY7QUFBQSw4QkFDRSxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLHVEQUFEO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxlQUFLLEVBQUMsS0FGUjtBQUdFLHVCQUFhLEVBQUMsT0FIaEI7QUFJRSxrQkFBUSxFQUFFLGtCQUFDSyxDQUFEO0FBQUEsbUJBQU9ELFlBQVksQ0FBQ0MsQ0FBRCxDQUFuQjtBQUFBLFdBSlo7QUFLRSxlQUFLLEVBQUVQO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVdFLHFFQUFDLHlEQUFEO0FBQVMsYUFBSyxNQUFkO0FBQWUsZUFBTyxFQUFFRSxJQUF4QjtBQUE4QixjQUFNLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBYUUscUVBQUMsd0RBQUQ7QUFBUSxlQUFPLEVBQUVFLElBQWpCO0FBQXVCLGVBQU8sRUFBRVEsUUFBaEM7QUFBMEMsZUFBTyxNQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBZ0JFLHFFQUFDLHlEQUFEO0FBQVMsYUFBSyxFQUFFO0FBQUVjLGVBQUssRUFBRSxNQUFUO0FBQWlCQyxnQkFBTSxFQUFFO0FBQXpCLFNBQWhCO0FBQW9ELGVBQU8sTUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F4REQ7O0dBQU03QixXOztBQTBEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL25ld2NhbXBhaWduLjQ4YzNkNTM2NWEzYmE3YzhlYjIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbiB9IGZyb20gXCJtb2NoYS9saWIvcnVubmVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBNZXNzYWdlLFxyXG4gIFNlZ21lbnQsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IENhbXBhaWduRmFjdG9yeSBmcm9tIFwiLi4vLi4vZXRoZXJpdW0vQ2FtcGFpZ25GYWN0b3J5XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IG5ld2NhbXBhaWduID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICBzZXREYXRhKFwiXCIpO1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IENhbXBhaWduRmFjdG9yeS5tZXRob2RzLmNyZWF0ZUNhbXBhaWduKHZhbHVlKS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBSb3V0ZXIucHVzaFJvdXRlKFwiL1wiKTtcclxuXHJcbiAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgIHNldERhdGEoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGVyIGFzPVwiaDNcIj5DcmVhdGUgYSBDYW1wYWlnbjwvSGVhZGVyPlxyXG4gICAgICA8Rm9ybSBlcnJvcj17ISFkYXRhfT5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5NaW5pbXVtIENvbnRyaWJ1dGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiV2VpXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGNvbnRlbnQ9e2RhdGF9IGhlYWRlcj1cIk9PUFMhXCIgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtsb2FkfSBvbkNsaWNrPXtvblN1Ym1pdH0gcHJpbWFyeT5cclxuICAgICAgICAgIENyZWF0ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMHZoXCIgfX0gbG9hZGluZz5cclxuICAgICAgICAgIFBsZWFzZSB3YWl0Li4uIHlvdWUgdHJhbnNhY3Rpb24gaXMgYmVpbmcgcHJvY2Vzc2VkLkl0IG1heSB0YWtlIHVwIDQwXHJcbiAgICAgICAgICBzZWNzXHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3Y2FtcGFpZ247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=