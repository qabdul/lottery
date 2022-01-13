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
          width: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsic2hvdyIsInByb3BzIiwicmVuZGVyQ2FyZHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJmbHVpZCIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJhZGRyZXNzIiwibWFyZ2luVG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBLFFBRXRCQyxtQkFGc0IsR0FPcEJGLEtBUG9CLENBRXRCRSxtQkFGc0I7QUFBQSxRQUd0QkMsT0FIc0IsR0FPcEJILEtBUG9CLENBR3RCRyxPQUhzQjtBQUFBLFFBSXRCQyxZQUpzQixHQU9wQkosS0FQb0IsQ0FJdEJJLFlBSnNCO0FBQUEsUUFLdEJDLGNBTHNCLEdBT3BCTCxLQVBvQixDQUt0QkssY0FMc0I7QUFBQSxRQU10QkMsT0FOc0IsR0FPcEJOLEtBUG9CLENBTXRCTSxPQU5zQjtBQVF4QixRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxZQUFNLEVBQUVGLE9BRFY7QUFFRUcsaUJBQVcsRUFDVCwrREFISjtBQUlFQyxVQUFJLEVBQUUsb0JBSlI7QUFLRUMsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7QUFBaEIsT0FMVDtBQU1FQyxXQUFLLEVBQUU7QUFOVCxLQURZLEVBU1o7QUFDRUwsWUFBTSxFQUFFTixtQkFEVjtBQUVFTyxpQkFBVyxFQUFFLHlDQUZmO0FBR0VDLFVBQUksRUFBRSw0QkFIUjtBQUlFQyxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRTtBQUFoQixPQUpUO0FBS0VDLFdBQUssRUFBRTtBQUxULEtBVFksRUFnQlo7QUFDRUwsWUFBTSxFQUFFSixZQURWO0FBRUVLLGlCQUFXLEVBQ1QsNEpBSEo7QUFJRUMsVUFBSSxFQUFFLGVBSlI7QUFLRUMsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7QUFBaEIsT0FMVDtBQU1FQyxXQUFLLEVBQUU7QUFOVCxLQWhCWSxFQXdCWjtBQUNFTCxZQUFNLEVBQUVILGNBRFY7QUFFRUksaUJBQVcsRUFBRSx1REFGZjtBQUdFQyxVQUFJLEVBQUUsaUJBSFI7QUFJRUMsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7QUFBaEIsT0FKVDtBQUtFQyxXQUFLLEVBQUU7QUFMVCxLQXhCWSxFQStCWjtBQUNFTCxZQUFNLEVBQUVNLHNEQUFJLENBQUNDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQmIsT0FBbkIsRUFBNEIsT0FBNUIsQ0FEVjtBQUVFTSxpQkFBVyxFQUFFLHdEQUZmO0FBR0VDLFVBQUksRUFBRSw2QkFIUjtBQUlFQyxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRTtBQUFoQixPQUpUO0FBS0VDLFdBQUssRUFBRTtBQUxULEtBL0JZLENBQWQ7QUF1Q0Esd0JBQU8scUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQVksV0FBSyxFQUFFTjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRCxHQWhERDs7QUFrREEsc0JBQ0UscUVBQUMseURBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsc0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQSwrQkFDRSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxlQUFLLEVBQUUsQ0FBcEI7QUFBQSxpQ0FDRSxxRUFBQyw0Q0FBRDtBQUFNLGNBQUUsdUJBQWdCUCxLQUFLLENBQUNpQixPQUF0QixjQUFSO0FBQUEsbUNBQ0U7QUFBQSx5QkFDRyxHQURILGVBRUUscUVBQUMsd0RBQUQ7QUFBUSx1QkFBTyxNQUFmO0FBQWdCLHVCQUFPLEVBQUMsT0FBeEI7QUFBZ0MscUJBQUssRUFBRTtBQUFFQywyQkFBUyxFQUFFO0FBQWIsaUJBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUUscUVBQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsZ0JBQU0sRUFBRSxFQUFyQjtBQUF5QixnQkFBTSxFQUFFLEVBQWpDO0FBQXFDLGtCQUFRLEVBQUUsRUFBL0M7QUFBQSxpQ0FDRTtBQUFBLDRCQUFJakIsV0FBVyxFQUFmO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsZ0JBQU0sRUFBRSxFQUFyQjtBQUF5QixnQkFBTSxFQUFFLENBQWpDO0FBQW9DLGtCQUFRLEVBQUUsQ0FBOUM7QUFBQSxxQkFDRyxHQURILGVBRUUscUVBQUMsNkRBQUQ7QUFBWSxtQkFBTyxFQUFFRCxLQUFLLENBQUNpQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQS9FRDs7QUFpRkFsQixJQUFJLENBQUNvQixlQUFMO0FBQUEsd1RBQXVCLGlCQUFPbkIsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZm9CLG9CQURlLEdBQ0pDLGtFQUFRLENBQUNyQixLQUFLLENBQUNzQixLQUFOLENBQVlMLE9BQWIsQ0FESjtBQUFBO0FBQUEsbUJBRUFHLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsVUFBakIsR0FBOEJDLElBQTlCLEVBRkE7O0FBQUE7QUFFZkMsa0JBRmU7QUFBQSw2Q0FHZDtBQUNMeEIsaUNBQW1CLEVBQUV3QixNQUFNLENBQUMsQ0FBRCxDQUR0QjtBQUVMdkIscUJBQU8sRUFBRXVCLE1BQU0sQ0FBQyxDQUFELENBRlY7QUFHTHRCLDBCQUFZLEVBQUVzQixNQUFNLENBQUMsQ0FBRCxDQUhmO0FBSUxyQiw0QkFBYyxFQUFFcUIsTUFBTSxDQUFDLENBQUQsQ0FKakI7QUFLTHBCLHFCQUFPLEVBQUVvQixNQUFNLENBQUMsQ0FBRCxDQUxWO0FBTUxULHFCQUFPLEVBQUVqQixLQUFLLENBQUNzQixLQUFOLENBQVlMO0FBTmhCLGFBSGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYWVsQixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy42YzNiNzEwODNmYjBhOGY0MWRiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCBDb250cmlidXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQ29udHJpYnV0ZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uL3JvdXRlc1wiO1xyXG5cclxuY29uc3Qgc2hvdyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICBiYWxhbmNlLFxyXG4gICAgICByZXF1ZXN0Q291bnQsXHJcbiAgICAgIGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICBtYW5hZ2VyLFxyXG4gICAgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBcIk1hbmFnZXIgd2lsbCBjcmVhdGUgcmVxdWVzdHMgYW5kIHdpdGhkcmF3IG1vbmV5IGZvciBleHBlbnNlcy5cIixcclxuICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgTWFuYWdlclwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgICBmbHVpZDogXCJ0cnVlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWluaW11bSBDb250cmlidXRpb24gZm9yIHRoaXMgQ2FtcGFpZ24uXCIsXHJcbiAgICAgICAgbWV0YTogXCJNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKVwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgICBmbHVpZDogXCJ0cnVlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHJlcXVlc3RDb3VudCxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0IHRvIHBheSBtb25leSB0byB0aGlyZCBwYXJ0eS5SZXF1ZXN0IG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzIChXaG8gZG9uYXRlIG1vbmV5IHRvIHRoaXMgY2FtcGFpZ24pLlwiLFxyXG4gICAgICAgIG1ldGE6IFwiTm8gb2YgUmVxdWVzdFwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgICBmbHVpZDogXCJ0cnVlXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk5vIG9mIHBlb3BsZSB3aG8gaGF2ZSBkb25hdGVkIG1vbmV5IHRvIHRoaXMgQ2FtcGFpZ24uXCIsXHJcbiAgICAgICAgbWV0YTogXCJObyBvZiBBcHByb3ZlcnNcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiB3ZWIzLnV0aWxzLmZyb21XZWkoYmFsYW5jZSwgXCJldGhlclwiKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUb3RhbCBCYWxhbmNlLCBob3cgbXVjaCBtb25leSBpcyBsZWZ0IGluIHRoaXMgY2FtcGlnbi5cIixcclxuICAgICAgICBtZXRhOiBcIkNhbXBhaWduIEJhbGFuY2UgaW4gKGV0aGVyKVwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgICBmbHVpZDogXCJ0cnVlXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5DYW1wYWdpbiBEZXRhaWxzPC9oMz5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cclxuICAgICAgICAgICAgPExpbmsgdG89e2AvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbG9hdGVkPVwicmlnaHRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBWaWV3IFJlcXVlc3RzXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXsxMH0gY29tcHV0ZXI9ezEwfT5cclxuICAgICAgICAgICAgPD4ge3JlbmRlckNhcmRzKCl9PC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17Nn0gY29tcHV0ZXI9ezZ9PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxDb250cmlidXRlIGFkZHJlc3M9e3Byb3BzLmFkZHJlc3N9IC8+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5zaG93LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiByZXN1bHRbMF0sXHJcbiAgICBiYWxhbmNlOiByZXN1bHRbMV0sXHJcbiAgICByZXF1ZXN0Q291bnQ6IHJlc3VsdFsyXSxcclxuICAgIGFwcHJvdmVyc0NvdW50OiByZXN1bHRbM10sXHJcbiAgICBtYW5hZ2VyOiByZXN1bHRbNF0sXHJcbiAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9