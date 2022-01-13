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








var newrequests = function newrequests() {
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
      var accounts, result;
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(formData.address, formData.value, formData.description);
              _context.prev = 1;
              setLoad(true);
              setData("");
              _context.next = 6;
              return _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 6:
              accounts = _context.sent;
              _context.next = 9;
              return _etherium_Campaign__WEBPACK_IMPORTED_MODULE_9__["default"].methods.createCampaign(value).send({
                from: accounts[0]
              });

            case 9:
              result = _context.sent;
              _routes__WEBPACK_IMPORTED_MODULE_8__["Router"].pushRoute("/");
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
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      error: !!data,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Value "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.value,
          name: "value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Recipeint "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.address,
          name: "address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"], {
        error: true,
        content: data,
        header: "OOPS!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        loading: load,
        onClick: onSubmit,
        primary: true,
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, _this);
};

_s(newrequests, "J/Vc2/bkYSp1dwlv8i3+fe/3uVU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ld3JlcXVlc3RzLmpzIl0sIm5hbWVzIjpbIm5ld3JlcXVlc3RzIiwidXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwiYWRkcmVzcyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJkYXRhIiwic2V0RGF0YSIsImxvYWQiLCJzZXRMb2FkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIkNhbXBhaWduIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJyZXN1bHQiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUM7QUFDdkNDLGVBQVcsRUFBRSxFQUQwQjtBQUV2Q0MsU0FBSyxFQUFFLEVBRmdDO0FBR3ZDQyxXQUFPLEVBQUU7QUFIOEIsR0FBRCxDQURoQjtBQUFBLE1BQ2pCQyxRQURpQjtBQUFBLE1BQ1BDLFdBRE87O0FBQUEsbUJBTUFMLHNEQUFRLENBQUMsRUFBRCxDQU5SO0FBQUEsTUFNakJNLElBTmlCO0FBQUEsTUFNWEMsT0FOVzs7QUFBQSxtQkFPQVAsc0RBQVEsQ0FBQyxLQUFELENBUFI7QUFBQSxNQU9qQlEsSUFQaUI7QUFBQSxNQU9YQyxPQVBXOztBQVF4QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFBQSxvQkFDRkEsQ0FBQyxDQUFDQyxNQURBO0FBQUEsUUFDbEJWLEtBRGtCLGFBQ2xC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QUVFLHFFQUFDLHVEQUFEO0FBQ0Usa0JBQVEsRUFBRSxrQkFBQ1MsQ0FBRDtBQUFBLG1CQUFPRCxZQUFZLENBQUNDLENBQUQsQ0FBbkI7QUFBQSxXQURaO0FBRUUsZUFBSyxFQUFFUCxRQUFRLENBQUNELE9BRmxCO0FBR0UsY0FBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkYsZUEyQkUscUVBQUMseURBQUQ7QUFBUyxhQUFLLE1BQWQ7QUFBZSxlQUFPLEVBQUVHLElBQXhCO0FBQThCLGNBQU0sRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGLGVBNkJFLHFFQUFDLHdEQUFEO0FBQVEsZUFBTyxFQUFFRSxJQUFqQjtBQUF1QixlQUFPLEVBQUVNLFFBQWhDO0FBQTBDLGVBQU8sTUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0FwRkQ7O0dBQU1mLFc7O0FBc0ZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3cmVxdWVzdHMuOTk3ZmY3M2M0MTAxMWVlMzg5ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuXHJcbmNvbnN0IG5ld3JlcXVlc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZGVzY3JpcHRpb246IHZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidmFsdWVcIjpcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJhZGRyZXNzXCI6XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgYWRkcmVzczogdmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS5hZGRyZXNzLCBmb3JtRGF0YS52YWx1ZSwgZm9ybURhdGEuZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgIHNldERhdGEoXCJcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQ2FtcGFpZ24ubWV0aG9kcy5jcmVhdGVDYW1wYWlnbih2YWx1ZSkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUm91dGVyLnB1c2hSb3V0ZShcIi9cIik7XHJcblxyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgICBzZXREYXRhKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWRlciBhcz1cImgzXCI+Q3JlYXRlIGEgUmVxdWVzdDwvSGVhZGVyPlxyXG4gICAgICA8Rm9ybSBlcnJvcj17ISFkYXRhfT5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJXZWlcIlxyXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+VmFsdWUgPC9sYWJlbD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnZhbHVlfVxyXG4gICAgICAgICAgICBuYW1lPVwidmFsdWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+UmVjaXBlaW50IDwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5hZGRyZXNzfVxyXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8TWVzc2FnZSBlcnJvciBjb250ZW50PXtkYXRhfSBoZWFkZXI9XCJPT1BTIVwiIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZH0gb25DbGljaz17b25TdWJtaXR9IHByaW1hcnk+XHJcbiAgICAgICAgICBDcmVhdGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld3JlcXVlc3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9