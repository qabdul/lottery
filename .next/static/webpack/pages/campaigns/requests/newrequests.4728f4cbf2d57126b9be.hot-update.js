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
      return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const campaign = Campaign(props.query.address);
              console.log(props.query); // try {
              //   setLoad(true);
              //   setData("");
              //   const accounts = await web3.eth.getAccounts();
              //   const result = await Campaign.methods
              //     .createRequests(formData.description, formData.value, formData.address)
              //     .send({
              //       from: accounts[0],
              //     });
              //   Router.pushRoute(`/campaigns/${props.query.address}/requests`);
              //   setLoad(false);
              // } catch (error) {
              //   setLoad(false);
              //   setData(error.message);
              //   console.log(error);
              // }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      error: !!data,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
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
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Value "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.value,
          name: "value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Recipeint "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.address,
          name: "address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"], {
        error: true,
        content: data,
        header: "OOPS!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        loading: load,
        onClick: onSubmit,
        primary: true,
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ld3JlcXVlc3RzLmpzIl0sIm5hbWVzIjpbIm5ld3JlcXVlc3RzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJhZGRyZXNzIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImRhdGEiLCJzZXREYXRhIiwibG9hZCIsInNldExvYWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQztBQUN2Q0MsZUFBVyxFQUFFLEVBRDBCO0FBRXZDQyxTQUFLLEVBQUUsRUFGZ0M7QUFHdkNDLFdBQU8sRUFBRTtBQUg4QixHQUFELENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUFBLG1CQU1MTCxzREFBUSxDQUFDLEVBQUQsQ0FOSDtBQUFBLE1BTXRCTSxJQU5zQjtBQUFBLE1BTWhCQyxPQU5nQjs7QUFBQSxtQkFPTFAsc0RBQVEsQ0FBQyxLQUFELENBUEg7QUFBQSxNQU90QlEsSUFQc0I7QUFBQSxNQU9oQkMsT0FQZ0I7O0FBUTdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUFBLG9CQUNGQSxDQUFDLENBQUNDLE1BREE7QUFBQSxRQUNsQlYsS0FEa0IsYUFDbEJBLEtBRGtCO0FBQUEsUUFDWFcsSUFEVyxhQUNYQSxJQURXOztBQUcxQixZQUFRQSxJQUFSO0FBQ0UsV0FBSyxhQUFMO0FBQ0VSLG1CQUFXLGlDQUFNRCxRQUFOO0FBQWdCSCxx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ZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3cmVxdWVzdHMuNDcyOGY0Y2JmMmQ1NzEyNmI5YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuXHJcbmNvbnN0IG5ld3JlcXVlc3RzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBkZXNjcmlwdGlvbjogdmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ2YWx1ZVwiOlxyXG4gICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImFkZHJlc3NcIjpcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBhZGRyZXNzOiB2YWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5xdWVyeSk7XHJcblxyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgc2V0TG9hZCh0cnVlKTtcclxuICAgIC8vICAgc2V0RGF0YShcIlwiKTtcclxuICAgIC8vICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCBDYW1wYWlnbi5tZXRob2RzXHJcbiAgICAvLyAgICAgLmNyZWF0ZVJlcXVlc3RzKGZvcm1EYXRhLmRlc2NyaXB0aW9uLCBmb3JtRGF0YS52YWx1ZSwgZm9ybURhdGEuYWRkcmVzcylcclxuICAgIC8vICAgICAuc2VuZCh7XHJcbiAgICAvLyAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgIFJvdXRlci5wdXNoUm91dGUoYC9jYW1wYWlnbnMvJHtwcm9wcy5xdWVyeS5hZGRyZXNzfS9yZXF1ZXN0c2ApO1xyXG5cclxuICAgIC8vICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICBzZXRMb2FkKGZhbHNlKTtcclxuICAgIC8vICAgc2V0RGF0YShlcnJvci5tZXNzYWdlKTtcclxuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkZXIgYXM9XCJoM1wiPkNyZWF0ZSBhIFJlcXVlc3Q8L0hlYWRlcj5cclxuICAgICAgPEZvcm0gZXJyb3I9eyEhZGF0YX0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiV2VpXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlZhbHVlIDwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS52YWx1ZX1cclxuICAgICAgICAgICAgbmFtZT1cInZhbHVlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlJlY2lwZWludCA8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuYWRkcmVzc31cclxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgY29udGVudD17ZGF0YX0gaGVhZGVyPVwiT09QUyFcIiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWR9IG9uQ2xpY2s9e29uU3VibWl0fSBwcmltYXJ5PlxyXG4gICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdyZXF1ZXN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==