webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _etherium_CampaignFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../etherium/CampaignFactory */ "./etherium/CampaignFactory.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_NoDataFound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/NoDataFound */ "./component/NoDataFound.jsx");





var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\pages\\index.js",
    _this = undefined;





/*#__PURE__*/
Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
  as: "h1",
  children: "First Header"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 1
}, undefined);






var index = function index(props) {
  console.log(props.result.length);

  var renderCampaign = function renderCampaign() {
    var items = props.result.map(function (address) {
      return {
        header: address,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          to: "/campaigns/".concat(address),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: "View Campaign"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this),
        fluid: true,
        style: {
          overflowWrap: "break-word"
        }
      };
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Group, {
      centered: true,
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
            mobile: 16,
            tablet: 8,
            computer: 8,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
              as: "h1",
              children: "Open Campaigns"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
            mobile: 16,
            tablet: 8,
            computer: 8,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
              to: "/campaigns/newcampaign",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                content: "Create Campaign",
                floated: "right",
                primary: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
            children: props.result.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_NoDataFound__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 42
            }, _this) : renderCampaign()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

index.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var result;
    return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _etherium_CampaignFactory__WEBPACK_IMPORTED_MODULE_5__["default"].methods.getCreatedCampaignList().call();

          case 2:
            result = _context.sent;
            return _context.abrupt("return", {
              result: result
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJsZW5ndGgiLCJyZW5kZXJDYW1wYWlnbiIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImdldEluaXRpYWxQcm9wcyIsIkNhbXBhaWduRmFjdG9yeSIsIm1ldGhvZHMiLCJnZXRDcmVhdGVkQ2FtcGFpZ25MaXN0IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQUEscUVBQUMsd0RBQUQ7QUFBUSxJQUFFLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsTUFBekI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQU1DLEtBQUssR0FBR04sS0FBSyxDQUFDRyxNQUFOLENBQWFJLEdBQWIsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzFDLGFBQU87QUFDTEMsY0FBTSxFQUFFRCxPQURIO0FBRUxFLG1CQUFXLGVBQ1QscUVBQUMsNENBQUQ7QUFBTSxZQUFFLHVCQUFnQkYsT0FBaEIsQ0FBUjtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRztBQU9MRyxhQUFLLEVBQUUsSUFQRjtBQVFMQyxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQjtBQVJGLE9BQVA7QUFVRCxLQVhhLENBQWQ7QUFZQSx3QkFBTyxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxjQUFRLE1BQXBCO0FBQXFCLFdBQUssRUFBRVA7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FkRDs7QUFnQkEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx5REFBRDtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUEsa0NBQ0UscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsa0JBQU0sRUFBRSxFQUFyQjtBQUF5QixrQkFBTSxFQUFFLENBQWpDO0FBQW9DLG9CQUFRLEVBQUUsQ0FBOUM7QUFBQSx1QkFDRyxHQURILGVBRUUscUVBQUMsd0RBQUQ7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0UscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsa0JBQU0sRUFBRSxFQUFyQjtBQUF5QixrQkFBTSxFQUFFLENBQWpDO0FBQW9DLG9CQUFRLEVBQUUsQ0FBOUM7QUFBQSxtQ0FDRSxxRUFBQyw0Q0FBRDtBQUFNLGdCQUFFLEVBQUMsd0JBQVQ7QUFBQSxxQ0FDRSxxRUFBQyx3REFBRDtBQUFRLHVCQUFPLEVBQUMsaUJBQWhCO0FBQWtDLHVCQUFPLEVBQUMsT0FBMUM7QUFBa0QsdUJBQU87QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLHFFQUFDLHNEQUFELENBQU0sR0FBTjtBQUFBLGlDQUNFLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBLHNCQUNHTixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsTUFBYixHQUFzQixDQUF0QixnQkFBMEIscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBMUIsR0FBNENDLGNBQWM7QUFEN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBMEJELENBN0NEOztBQStDQU4sS0FBSyxDQUFDZSxlQUFOO0FBQUEsd1RBQXdCLGlCQUFPZCxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0RlLGlFQUFlLENBQUNDLE9BQWhCLENBQXdCQyxzQkFBeEIsR0FBaURDLElBQWpELEVBREM7O0FBQUE7QUFDaEJmLGtCQURnQjtBQUFBLDZDQUdmO0FBQUVBLG9CQUFNLEVBQU5BO0FBQUYsYUFIZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZUosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzViZDY0MmQ4MWY4MmZhMTk5YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCBDYW1wYWlnbkZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyaXVtL0NhbXBhaWduRmFjdG9yeVwiO1xyXG48SGVhZGVyIGFzPVwiaDFcIj5GaXJzdCBIZWFkZXI8L0hlYWRlcj47XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgSGVhZGVyLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcclxuaW1wb3J0IE5vRGF0YUZvdW5kIGZyb20gXCIuLi9jb21wb25lbnQvTm9EYXRhRm91bmRcIjtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocHJvcHMucmVzdWx0Lmxlbmd0aCk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckNhbXBhaWduID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbXMgPSBwcm9wcy5yZXN1bHQubWFwKChhZGRyZXNzKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICA8TGluayB0bz17YC9jYW1wYWlnbnMvJHthZGRyZXNzfWB9PlxyXG4gICAgICAgICAgICA8YT5WaWV3IENhbXBhaWduPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgZmx1aWQ6IHRydWUsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgY2VudGVyZWQgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17OH0gY29tcHV0ZXI9ezh9PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDFcIj5PcGVuIENhbXBhaWduczwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXs4fSBjb21wdXRlcj17OH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2FtcGFpZ25zL25ld2NhbXBhaWduXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIiBmbG9hdGVkPVwicmlnaHRcIiBwcmltYXJ5IC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5yZXN1bHQubGVuZ3RoID4gMCA/IDxOb0RhdGFGb3VuZCAvPiA6IHJlbmRlckNhbXBhaWduKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBDYW1wYWlnbkZhY3RvcnkubWV0aG9kcy5nZXRDcmVhdGVkQ2FtcGFpZ25MaXN0KCkuY2FsbCgpO1xyXG5cclxuICByZXR1cm4geyByZXN1bHQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9