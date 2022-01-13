webpackHotUpdate_N_E("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
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
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Layout */ "./component/Layout.js");
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../etherium/Campaign */ "./etherium/Campaign.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _component_Contribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/Contribute */ "./component/Contribute.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\pages\\campaigns\\show.js",
    _this = undefined;









var show = function show(props) {
  var renderCards = function renderCards() {
    var minimumContribution = props.minimumContribution,
        balance = props.balance,
        requestCount = props.requestCount,
        approversCount = props.approversCount,
        manager = props.manager;
    var items = [{
      header: manager,
      description: "Manager will create Request and withdraw money for expenses",
      meta: "Address of Manager",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }, {
      header: minimumContribution,
      description: "You must atleast this much wei to campaign",
      meta: "Minimum Contribution(wei)",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }, {
      header: requestCount,
      description: "A request tries to withdraw money from contract.Request must be approved by approvers.",
      meta: "No of Request",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }, {
      header: approversCount,
      description: "No of people who have donated money to contract.",
      meta: "No of Approvers",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }, {
      header: _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].utils.fromWei(balance, "ether"),
      description: "Total Balance, how much money to campign to left",
      meta: "Campaign Balance in (ether)",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Group, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 12
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      children: "Campagin Details"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          mobile: 16,
          tablet: 10,
          computer: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
            children: [" ", renderCards()]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          mobile: 16,
          tablet: 6,
          computer: 6,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Contribute__WEBPACK_IMPORTED_MODULE_8__["default"], {
            address: props.address
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
            to: "/campaigns/".concat(props.address, "/requests"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                primary: true,
                style: {
                  marginTop: "10px"
                },
                children: "View Requests"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

show.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var campaign, result;
    return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_5__["default"])(props.query.address);
            _context.next = 3;
            return campaign.methods.getSummary().call();

          case 3:
            result = _context.sent;
            return _context.abrupt("return", {
              minimumContribution: result[0],
              balance: result[1],
              requestCount: result[2],
              approversCount: result[3],
              manager: result[4],
              address: props.query.address
            });

          case 5:
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

/* harmony default export */ __webpack_exports__["default"] = (show);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsic2hvdyIsInByb3BzIiwicmVuZGVyQ2FyZHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJmbHVpZCIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJhZGRyZXNzIiwibWFyZ2luVG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBLFFBRXRCQyxtQkFGc0IsR0FPcEJGLEtBUG9CLENBRXRCRSxtQkFGc0I7QUFBQSxRQUd0QkMsT0FIc0IsR0FPcEJILEtBUG9CLENBR3RCRyxPQUhzQjtBQUFBLFFBSXRCQyxZQUpzQixHQU9wQkosS0FQb0IsQ0FJdEJJLFlBSnNCO0FBQUEsUUFLdEJDLGNBTHNCLEdBT3BCTCxLQVBvQixDQUt0QkssY0FMc0I7QUFBQSxRQU10QkMsT0FOc0IsR0FPcEJOLEtBUG9CLENBTXRCTSxPQU5zQjtBQVF4QixRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxZQUFNLEVBQUVGLE9BRFY7QUFFRUcsaUJBQVcsRUFDVCw2REFISjtBQUlFQyxVQUFJLEVBQUUsb0JBSlI7QUFLRUMsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZvQixvQkFEZSxHQUNKQyxrRUFBUSxDQUFDckIsS0FBSyxDQUFDc0IsS0FBTixDQUFZTCxPQUFiLENBREo7QUFBQTtBQUFBLG1CQUVBRyxRQUFRLENBQUNHLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFQUZBOztBQUFBO0FBRWZDLGtCQUZlO0FBQUEsNkNBR2Q7QUFDTHhCLGlDQUFtQixFQUFFd0IsTUFBTSxDQUFDLENBQUQsQ0FEdEI7QUFFTHZCLHFCQUFPLEVBQUV1QixNQUFNLENBQUMsQ0FBRCxDQUZWO0FBR0x0QiwwQkFBWSxFQUFFc0IsTUFBTSxDQUFDLENBQUQsQ0FIZjtBQUlMckIsNEJBQWMsRUFBRXFCLE1BQU0sQ0FBQyxDQUFELENBSmpCO0FBS0xwQixxQkFBTyxFQUFFb0IsTUFBTSxDQUFDLENBQUQsQ0FMVjtBQU1MVCxxQkFBTyxFQUFFakIsS0FBSyxDQUFDc0IsS0FBTixDQUFZTDtBQU5oQixhQUhjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFlbEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuMzFmMDE4NTA3OWQ3NWMyNThjYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgQ29udHJpYnV0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0NvbnRyaWJ1dGVcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IHNob3cgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgYmFsYW5jZSxcclxuICAgICAgcmVxdWVzdENvdW50LFxyXG4gICAgICBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgbWFuYWdlcixcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJNYW5hZ2VyIHdpbGwgY3JlYXRlIFJlcXVlc3QgYW5kIHdpdGhkcmF3IG1vbmV5IGZvciBleHBlbnNlc1wiLFxyXG4gICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICAgIGZsdWlkOiBcInRydWVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3UgbXVzdCBhdGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gY2FtcGFpZ25cIixcclxuICAgICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uKHdlaSlcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0Q291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIGNvbnRyYWN0LlJlcXVlc3QgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMuXCIsXHJcbiAgICAgICAgbWV0YTogXCJObyBvZiBSZXF1ZXN0XCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICAgIGZsdWlkOiBcInRydWVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTm8gb2YgcGVvcGxlIHdobyBoYXZlIGRvbmF0ZWQgbW9uZXkgdG8gY29udHJhY3QuXCIsXHJcbiAgICAgICAgbWV0YTogXCJObyBvZiBBcHByb3ZlcnNcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgXCJldGhlclwiKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUb3RhbCBCYWxhbmNlLCBob3cgbXVjaCBtb25leSB0byBjYW1waWduIHRvIGxlZnRcIixcclxuICAgICAgICBtZXRhOiBcIkNhbXBhaWduIEJhbGFuY2UgaW4gKGV0aGVyKVwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgICBmbHVpZDogXCJ0cnVlXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5DYW1wYWdpbiBEZXRhaWxzPC9oMz5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17MTB9IGNvbXB1dGVyPXsxMH0+XHJcbiAgICAgICAgICAgIDw+IHtyZW5kZXJDYXJkcygpfTwvPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezZ9IGNvbXB1dGVyPXs2fT5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8Q29udHJpYnV0ZSBhZGRyZXNzPXtwcm9wcy5hZGRyZXNzfSAvPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgVmlldyBSZXF1ZXN0c1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5zaG93LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiByZXN1bHRbMF0sXHJcbiAgICBiYWxhbmNlOiByZXN1bHRbMV0sXHJcbiAgICByZXF1ZXN0Q291bnQ6IHJlc3VsdFsyXSxcclxuICAgIGFwcHJvdmVyc0NvdW50OiByZXN1bHRbM10sXHJcbiAgICBtYW5hZ2VyOiByZXN1bHRbNF0sXHJcbiAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9