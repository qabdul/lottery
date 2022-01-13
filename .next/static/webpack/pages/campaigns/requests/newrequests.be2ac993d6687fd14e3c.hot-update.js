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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/campaigns/".concat(props.address, "/requests"),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
            primary: true,
            floated: "left",
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
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
          lineNumber: 71,
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
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Value "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.value,
          name: "value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Recipeint "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
          onChange: function onChange(e) {
            return handleChange(e);
          },
          value: formData.address,
          name: "address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"], {
        error: true,
        content: data,
        header: "OOPS!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        loading: load,
        onClick: onSubmit,
        primary: true,
        children: "Create"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ld3JlcXVlc3RzLmpzIl0sIm5hbWVzIjpbIm5ld3JlcXVlc3RzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJhZGRyZXNzIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImRhdGEiLCJzZXREYXRhIiwibG9hZCIsInNldExvYWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsIm9uU3VibWl0IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3RzIiwic2VuZCIsImZyb20iLCJyZXN1bHQiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQztBQUN2Q0MsZUFBVyxFQUFFLEVBRDBCO0FBRXZDQyxTQUFLLEVBQUUsRUFGZ0M7QUFHdkNDLFdBQU8sRUFBRTtBQUg4QixHQUFELENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUFBLG1CQU1MTCxzREFBUSxDQUFDLEVBQUQsQ0FOSDtBQUFBLE1BTXRCTSxJQU5zQjtBQUFBLE1BTWhCQyxPQU5nQjs7QUFBQSxtQkFPTFAsc0RBQVEsQ0FBQyxLQUFELENBUEg7QUFBQSxNQU90QlEsSUFQc0I7QUFBQSxNQU9oQkMsT0FQZ0I7O0FBUTdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENB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LEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RCSSxtQkFEc0IsR0FDWkosS0FBSyxDQUFDaUMsS0FBTixDQUFZN0IsT0FEQTtBQUFBLDhDQUdyQjtBQUNMQSxxQkFBTyxFQUFQQTtBQURLLGFBSHFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFlTCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3cmVxdWVzdHMuYmUyYWM5OTNkNjY4N2ZkMTRlM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuXHJcbmNvbnN0IG5ld3JlcXVlc3RzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBkZXNjcmlwdGlvbjogdmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ2YWx1ZVwiOlxyXG4gICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImFkZHJlc3NcIjpcclxuICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBhZGRyZXNzOiB2YWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMuYWRkcmVzcyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZCh0cnVlKTtcclxuICAgICAgc2V0RGF0YShcIlwiKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzXHJcbiAgICAgICAgLmNyZWF0ZVJlcXVlc3RzKGZvcm1EYXRhLmRlc2NyaXB0aW9uLCBmb3JtRGF0YS52YWx1ZSwgZm9ybURhdGEuYWRkcmVzcylcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2ApO1xyXG5cclxuICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRMb2FkKGZhbHNlKTtcclxuICAgICAgc2V0RGF0YShlcnJvci5tZXNzYWdlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkZXIgYXM9XCJoM1wiPkNyZWF0ZSBhIFJlcXVlc3Q8L0hlYWRlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayB0bz17YC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PXt0cnVlfSBmbG9hdGVkPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvcm0gZXJyb3I9eyEhZGF0YX0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiV2VpXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlZhbHVlIDwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS52YWx1ZX1cclxuICAgICAgICAgICAgbmFtZT1cInZhbHVlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlJlY2lwZWludCA8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuYWRkcmVzc31cclxuICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgY29udGVudD17ZGF0YX0gaGVhZGVyPVwiT09QUyFcIiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWR9IG9uQ2xpY2s9e29uU3VibWl0fSBwcmltYXJ5PlxyXG4gICAgICAgICAgQ3JlYXRlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5uZXdyZXF1ZXN0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZHJlc3MsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ld3JlcXVlc3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9