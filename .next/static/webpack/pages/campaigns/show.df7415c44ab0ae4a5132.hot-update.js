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
      description: "Manager is the only entity who can create request and withdraw money.",
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
      }
    }, {
      header: requestCount,
      description: "A request tries to withdraw money from contract.Request must be approved by approvers.",
      meta: "No of Request",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: approversCount,
      description: "No of people who have donated money to contract.",
      meta: "No of Approvers",
      style: {
        overflowWrap: "break-word"
      }
    }, {
      header: _etherium_web3__WEBPACK_IMPORTED_MODULE_7__["default"].utils.fromWei(balance, "ether"),
      description: "Total Balance, how much money to campign to left",
      meta: "Campaign Balance in (ether)",
      style: {
        overflowWrap: "break-word"
      }
    }];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Group, {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 12
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      children: "Campagin Details"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          mobile: 16,
          tablet: 6,
          computer: 6,
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Contribute__WEBPACK_IMPORTED_MODULE_8__["default"], {
            address: props.address
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
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
                lineNumber: 75,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsic2hvdyIsInByb3BzIiwicmVuZGVyQ2FyZHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJmbHVpZCIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJhZGRyZXNzIiwibWFyZ2luVG9wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFDdEIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBLFFBRXRCQyxtQkFGc0IsR0FPcEJGLEtBUG9CLENBRXRCRSxtQkFGc0I7QUFBQSxRQUd0QkMsT0FIc0IsR0FPcEJILEtBUG9CLENBR3RCRyxPQUhzQjtBQUFBLFFBSXRCQyxZQUpzQixHQU9wQkosS0FQb0IsQ0FJdEJJLFlBSnNCO0FBQUEsUUFLdEJDLGNBTHNCLEdBT3BCTCxLQVBvQixDQUt0QkssY0FMc0I7QUFBQSxRQU10QkMsT0FOc0IsR0FPcEJOLEtBUG9CLENBTXRCTSxPQU5zQjtBQVF4QixRQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxZQUFNLEVBQUVGLE9BRFY7QUFFRUcsaUJBQVcsRUFDVCx1RUFISjtBQUlFQyxVQUFJLEVBQUUsb0JBSlI7QUFLRUMsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7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O0FBQUE7QUFBQSxtQkFFQUcsUUFBUSxDQUFDRyxPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsRUFGQTs7QUFBQTtBQUVmQyxrQkFGZTtBQUFBLDZDQUdkO0FBQ0x4QixpQ0FBbUIsRUFBRXdCLE1BQU0sQ0FBQyxDQUFELENBRHRCO0FBRUx2QixxQkFBTyxFQUFFdUIsTUFBTSxDQUFDLENBQUQsQ0FGVjtBQUdMdEIsMEJBQVksRUFBRXNCLE1BQU0sQ0FBQyxDQUFELENBSGY7QUFJTHJCLDRCQUFjLEVBQUVxQixNQUFNLENBQUMsQ0FBRCxDQUpqQjtBQUtMcEIscUJBQU8sRUFBRW9CLE1BQU0sQ0FBQyxDQUFELENBTFY7QUFNTFQscUJBQU8sRUFBRWpCLEtBQUssQ0FBQ3NCLEtBQU4sQ0FBWUw7QUFOaEIsYUFIYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhZWxCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9zaG93LmRmNzQxNWM0NGFiMGFlNGE1MTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9ldGhlcml1bS9DYW1wYWlnblwiO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyaXVtL3dlYjNcIjtcclxuaW1wb3J0IENvbnRyaWJ1dGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9Db250cmlidXRlXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vcm91dGVzXCI7XHJcblxyXG5jb25zdCBzaG93ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgIGJhbGFuY2UsXHJcbiAgICAgIHJlcXVlc3RDb3VudCxcclxuICAgICAgYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgIG1hbmFnZXIsXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiTWFuYWdlciBpcyB0aGUgb25seSBlbnRpdHkgd2hvIGNhbiBjcmVhdGUgcmVxdWVzdCBhbmQgd2l0aGRyYXcgbW9uZXkuXCIsXHJcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIE1hbmFnZXJcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgICAgZmx1aWQ6IFwidHJ1ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdSBtdXN0IGF0bGVhc3QgdGhpcyBtdWNoIHdlaSB0byBjYW1wYWlnblwiLFxyXG4gICAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24od2VpKVwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogcmVxdWVzdENvdW50LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgXCJBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSBjb250cmFjdC5SZXF1ZXN0IG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzLlwiLFxyXG4gICAgICAgIG1ldGE6IFwiTm8gb2YgUmVxdWVzdFwiLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTm8gb2YgcGVvcGxlIHdobyBoYXZlIGRvbmF0ZWQgbW9uZXkgdG8gY29udHJhY3QuXCIsXHJcbiAgICAgICAgbWV0YTogXCJObyBvZiBBcHByb3ZlcnNcIixcclxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRvdGFsIEJhbGFuY2UsIGhvdyBtdWNoIG1vbmV5IHRvIGNhbXBpZ24gdG8gbGVmdFwiLFxyXG4gICAgICAgIG1ldGE6IFwiQ2FtcGFpZ24gQmFsYW5jZSBpbiAoZXRoZXIpXCIsXHJcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q2FtcGFnaW4gRGV0YWlsczwvaDM+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezEwfSBjb21wdXRlcj17MTB9PlxyXG4gICAgICAgICAgICA8PiB7cmVuZGVyQ2FyZHMoKX08Lz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4gbW9iaWxlPXsxNn0gdGFibGV0PXs2fSBjb21wdXRlcj17Nn0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgPENvbnRyaWJ1dGUgYWRkcmVzcz17cHJvcHMuYWRkcmVzc30gLz5cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8TGluayB0bz17YC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFZpZXcgUmVxdWVzdHNcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuc2hvdy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICByZXR1cm4ge1xyXG4gICAgbWluaW11bUNvbnRyaWJ1dGlvbjogcmVzdWx0WzBdLFxyXG4gICAgYmFsYW5jZTogcmVzdWx0WzFdLFxyXG4gICAgcmVxdWVzdENvdW50OiByZXN1bHRbMl0sXHJcbiAgICBhcHByb3ZlcnNDb3VudDogcmVzdWx0WzNdLFxyXG4gICAgbWFuYWdlcjogcmVzdWx0WzRdLFxyXG4gICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvdztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==