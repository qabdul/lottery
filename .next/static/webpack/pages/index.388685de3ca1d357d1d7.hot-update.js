webpackHotUpdate_N_E("pages/index",{

/***/ "./component/NoDataFound.jsx":
/*!***********************************!*\
  !*** ./component/NoDataFound.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\component\\NoDataFound.jsx",
    _this = undefined;



var NoDataFound = function NoDataFound() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: "Not Data Found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, _this);
};

_c = NoDataFound;
/* harmony default export */ __webpack_exports__["default"] = (NoDataFound);

var _c;

$RefreshReg$(_c, "NoDataFound");

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

/***/ }),

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
            children: props.result.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_NoDataFound__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 44
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L05vRGF0YUZvdW5kLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTm9EYXRhRm91bmQiLCJpbmRleCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImxlbmd0aCIsInJlbmRlckNhbXBhaWduIiwiaXRlbXMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiZ2V0SW5pdGlhbFByb3BzIiwiQ2FtcGFpZ25GYWN0b3J5IiwibWV0aG9kcyIsImdldENyZWF0ZWRDYW1wYWlnbkxpc3QiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O0tBQU1BLFc7QUFJU0EsMEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFDQTtBQUFBLHFFQUFDLHdEQUFEO0FBQVEsSUFBRSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDLE1BQXpCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixRQUFNQyxLQUFLLEdBQUdOLEtBQUssQ0FBQ0csTUFBTixDQUFhSSxHQUFiLENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUMxQyxhQUFPO0FBQ0xDLGNBQU0sRUFBRUQsT0FESDtBQUVMRSxtQkFBVyxlQUNULHFFQUFDLDRDQUFEO0FBQU0sWUFBRSx1QkFBZ0JGLE9BQWhCLENBQVI7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEc7QUFPTEcsYUFBSyxFQUFFLElBUEY7QUFRTEMsYUFBSyxFQUFFO0FBQUVDLHNCQUFZLEVBQUU7QUFBaEI7QUFSRixPQUFQO0FBVUQsS0FYYSxDQUFkO0FBWUEsd0JBQU8scUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksY0FBUSxNQUFwQjtBQUFxQixXQUFLLEVBQUVQO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBZEQ7O0FBZ0JBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMseURBQUQ7QUFBQSw2QkFDRSxxRUFBQyxzREFBRDtBQUFBLGdDQUNFLHFFQUFDLHNEQUFELENBQU0sR0FBTjtBQUFBLGtDQUNFLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLGtCQUFNLEVBQUUsRUFBckI7QUFBeUIsa0JBQU0sRUFBRSxDQUFqQztBQUFvQyxvQkFBUSxFQUFFLENBQTlDO0FBQUEsdUJBQ0csR0FESCxlQUVFLHFFQUFDLHdEQUFEO0FBQVEsZ0JBQUUsRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFhLGtCQUFNLEVBQUUsRUFBckI7QUFBeUIsa0JBQU0sRUFBRSxDQUFqQztBQUFvQyxvQkFBUSxFQUFFLENBQTlDO0FBQUEsbUNBQ0UscUVBQUMsNENBQUQ7QUFBTSxnQkFBRSxFQUFDLHdCQUFUO0FBQUEscUNBQ0UscUVBQUMsd0RBQUQ7QUFBUSx1QkFBTyxFQUFDLGlCQUFoQjtBQUFrQyx1QkFBTyxFQUFDLE9BQTFDO0FBQWtELHVCQUFPO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFZRSxxRUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQSxpQ0FDRSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBQSxzQkFDR04sS0FBSyxDQUFDRyxNQUFOLENBQWFDLE1BQWIsS0FBd0IsQ0FBeEIsZ0JBQTRCLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTVCLEdBQThDQyxjQUFjO0FBRC9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTBCRCxDQTdDRDs7QUErQ0FOLEtBQUssQ0FBQ2UsZUFBTjtBQUFBLHdUQUF3QixpQkFBT2QsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNEZSxpRUFBZSxDQUFDQyxPQUFoQixDQUF3QkMsc0JBQXhCLEdBQWlEQyxJQUFqRCxFQURDOztBQUFBO0FBQ2hCZixrQkFEZ0I7QUFBQSw2Q0FHZjtBQUFFQSxvQkFBTSxFQUFOQTtBQUFGLGFBSGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVKLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM4ODY4NWRlM2NhMWQzNTdkMWQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBOb0RhdGFGb3VuZCA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdj5Ob3QgRGF0YSBGb3VuZDwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vRGF0YUZvdW5kO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgQ2FtcGFpZ25GYWN0b3J5IGZyb20gXCIuLi9ldGhlcml1bS9DYW1wYWlnbkZhY3RvcnlcIjtcclxuPEhlYWRlciBhcz1cImgxXCI+Rmlyc3QgSGVhZGVyPC9IZWFkZXI+O1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEhlYWRlciwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcbmltcG9ydCBOb0RhdGFGb3VuZCBmcm9tIFwiLi4vY29tcG9uZW50L05vRGF0YUZvdW5kXCI7XHJcblxyXG5jb25zdCBpbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLnJlc3VsdC5sZW5ndGgpO1xyXG5cclxuICBjb25zdCByZW5kZXJDYW1wYWlnbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gcHJvcHMucmVzdWx0Lm1hcCgoYWRkcmVzcykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPExpbmsgdG89e2AvY2FtcGFpZ25zLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgPGE+VmlldyBDYW1wYWlnbjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApLFxyXG4gICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGNlbnRlcmVkIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezh9IGNvbXB1dGVyPXs4fT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgxXCI+T3BlbiBDYW1wYWlnbnM8L0hlYWRlcj5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17OH0gY29tcHV0ZXI9ezh9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhbXBhaWducy9uZXdjYW1wYWlnblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCIgZmxvYXRlZD1cInJpZ2h0XCIgcHJpbWFyeSAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICB7cHJvcHMucmVzdWx0Lmxlbmd0aCA9PT0gMCA/IDxOb0RhdGFGb3VuZCAvPiA6IHJlbmRlckNhbXBhaWduKCl9XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBDYW1wYWlnbkZhY3RvcnkubWV0aG9kcy5nZXRDcmVhdGVkQ2FtcGFpZ25MaXN0KCkuY2FsbCgpO1xyXG5cclxuICByZXR1cm4geyByZXN1bHQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9