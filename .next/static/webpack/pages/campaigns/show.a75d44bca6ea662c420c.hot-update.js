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
      description: "Manager will create requests and withdraw money for expenses.",
      meta: "Address of Manager",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }, {
      header: minimumContribution,
      description: "Minimum Contribution for this Campaign.",
      meta: "Minimum Contribution (wei)",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }, {
      header: requestCount,
      description: "A request tries to withdraw money from the contract to pay money to third party.Request must be approved by approvers (Who donate money to this campaign).",
      meta: "No of Request",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }, {
      header: approversCount,
      description: "No of people who have donated money to this Campaign.",
      meta: "No of Approvers",
      style: {
        overflowWrap: "break-word"
      },
      fluid: "true"
    }, {
      header: _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].utils.fromWei(balance, "ether"),
      description: "Total Balance, how much money is left in this campign.",
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          computer: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_9__["Link"], {
            to: "/campaigns/".concat(props.address, "/requests"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                primary: true,
                floated: "right",
                style: {
                  marginTop: "10px"
                },
                children: "View Requests"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          mobile: 16,
          tablet: 10,
          computer: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
            children: [" ", renderCards()]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          mobile: 16,
          tablet: 6,
          computer: 6,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Contribute__WEBPACK_IMPORTED_MODULE_8__["default"], {
            address: props.address
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsic2hvdyIsInByb3BzIiwicmVuZGVyQ2FyZHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJmbHVpZCIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJhZGRyZXNzIiwibWFyZ2luVG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBLFFBRXRCQyxtQkFGc0IsR0FPcEJGLEtBUG9CLENBRXRCRSxtQkFGc0I7QUFBQSxRQUd0QkMsT0FIc0IsR0FPcEJILEtBUG9CLENBR3RCRyxPQUhzQjtBQUFBLFFBSXRCQyxZQUpzQixHQU9wQkosS0FQb0IsQ0FJdEJJLFlBSnNCO0FBQUEsUUFLdEJDLGNBTHNCLEdBT3BCTCxLQVBvQixDQUt0QkssY0FMc0I7QUFBQSxRQU10QkMsT0FOc0IsR0FPcEJOLEtBUG9CLENBTXRCTSxPQU5zQjtBQVF4QixRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxZQUFNLEVBQUVGLE9BRFY7QUFFRUcsaUJBQVcsRUFDVCwrREFISjtBQUlFQyxVQUFJLEVBQUUsb0JBSlI7QUFLRUMsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7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SUFBSSxDQUFDb0IsZUFBTDtBQUFBLHdUQUF1QixpQkFBT25CLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZvQixvQkFEZSxHQUNKQyxrRUFBUSxDQUFDckIsS0FBSyxDQUFDc0IsS0FBTixDQUFZTCxPQUFiLENBREo7QUFBQTtBQUFBLG1CQUVBRyxRQUFRLENBQUNHLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFQUZBOztBQUFBO0FBRWZDLGtCQUZlO0FBQUEsNkNBR2Q7QUFDTHhCLGlDQUFtQixFQUFFd0IsTUFBTSxDQUFDLENBQUQsQ0FEdEI7QUFFTHZCLHFCQUFPLEVBQUV1QixNQUFNLENBQUMsQ0FBRCxDQUZWO0FBR0x0QiwwQkFBWSxFQUFFc0IsTUFBTSxDQUFDLENBQUQsQ0FIZjtBQUlMckIsNEJBQWMsRUFBRXFCLE1BQU0sQ0FBQyxDQUFELENBSmpCO0FBS0xwQixxQkFBTyxFQUFFb0IsTUFBTSxDQUFDLENBQUQsQ0FMVjtBQU1MVCxxQkFBTyxFQUFFakIsS0FBSyxDQUFDc0IsS0FBTixDQUFZTDtBQU5oQixhQUhjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFlbEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuYTc1ZDQ0YmNhNmVhNjYyYzQyMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgQ29udHJpYnV0ZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0NvbnRyaWJ1dGVcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcclxuXHJcbmNvbnN0IHNob3cgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgYmFsYW5jZSxcclxuICAgICAgcmVxdWVzdENvdW50LFxyXG4gICAgICBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgbWFuYWdlcixcclxuICAgIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJNYW5hZ2VyIHdpbGwgY3JlYXRlIHJlcXVlc3RzIGFuZCB3aXRoZHJhdyBtb25leSBmb3IgZXhwZW5zZXMuXCIsXHJcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIE1hbmFnZXJcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uIGZvciB0aGlzIENhbXBhaWduLlwiLFxyXG4gICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0Q291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdCB0byBwYXkgbW9uZXkgdG8gdGhpcmQgcGFydHkuUmVxdWVzdCBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVycyAoV2hvIGRvbmF0ZSBtb25leSB0byB0aGlzIGNhbXBhaWduKS5cIixcclxuICAgICAgICBtZXRhOiBcIk5vIG9mIFJlcXVlc3RcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJObyBvZiBwZW9wbGUgd2hvIGhhdmUgZG9uYXRlZCBtb25leSB0byB0aGlzIENhbXBhaWduLlwiLFxyXG4gICAgICAgIG1ldGE6IFwiTm8gb2YgQXBwcm92ZXJzXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICAgIGZsdWlkOiBcInRydWVcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsIFwiZXRoZXJcIiksXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVG90YWwgQmFsYW5jZSwgaG93IG11Y2ggbW9uZXkgaXMgbGVmdCBpbiB0aGlzIGNhbXBpZ24uXCIsXHJcbiAgICAgICAgbWV0YTogXCJDYW1wYWlnbiBCYWxhbmNlIGluIChldGhlcilcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q2FtcGFnaW4gRGV0YWlsczwvaDM+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBjb21wdXRlcj17MTB9PlxyXG4gICAgICAgICAgICA8TGluayB0bz17YC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQ9XCJyaWdodFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFZpZXcgUmVxdWVzdHNcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezEwfSBjb21wdXRlcj17MTB9PlxyXG4gICAgICAgICAgICA8PiB7cmVuZGVyQ2FyZHMoKX08Lz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXs2fSBjb21wdXRlcj17Nn0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPENvbnRyaWJ1dGUgYWRkcmVzcz17cHJvcHMuYWRkcmVzc30gLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbnNob3cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1pbmltdW1Db250cmlidXRpb246IHJlc3VsdFswXSxcclxuICAgIGJhbGFuY2U6IHJlc3VsdFsxXSxcclxuICAgIHJlcXVlc3RDb3VudDogcmVzdWx0WzJdLFxyXG4gICAgYXBwcm92ZXJzQ291bnQ6IHJlc3VsdFszXSxcclxuICAgIG1hbmFnZXI6IHJlc3VsdFs0XSxcclxuICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNob3c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=