webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
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
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_NoDataFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../component/NoDataFound */ "./component/NoDataFound.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../etherium/Campaign */ "./etherium/Campaign.js");
/* harmony import */ var _component_RequestRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../component/RequestRow */ "./component/RequestRow.jsx");
/* harmony import */ var _component_ErrorMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../component/ErrorMessage */ "./component/ErrorMessage.jsx");




var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\pages\\campaigns\\requests\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var index = function index(props) {
  _s();

  var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Header,
      Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Body,
      HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].HeaderCell,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Cell,
      Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Row;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      data = _useState[0],
      setData = _useState[1];

  console.log(props.requests.length + " requests");

  var setError = function setError(error) {
    setData(error);
  };

  var renderRows = function renderRows() {
    return props.requests.map(function (request, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_RequestRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
        request: request,
        address: props.address,
        id: index,
        total: props.totalApprovers,
        setError: setError
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      children: "All the Request Created for this Campaign"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            to: "/campaigns/".concat(props.address),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                primary: true,
                floated: "left",
                children: "Back"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            to: "/campaigns/".concat(props.address, "/requests/new"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                primary: true,
                floated: "right",
                children: "Create Request"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Header, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Row, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "ID"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Amount"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Recepient"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Approval Count"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Approve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Finalize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Body, {
              children: renderRows()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this), props.requests.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_NoDataFound__WEBPACK_IMPORTED_MODULE_5__["default"], {
            message: "Not Data Found, Please click on create Request button to create new one"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, _this) : "", data === "" ? "" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_ErrorMessage__WEBPACK_IMPORTED_MODULE_11__["default"], {
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(index, "avaWeDctHFwWP+lC5+N1mkv/uq8=");

index.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var address, campaign, requestsCount, totalApprovers, requests;
    return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            address = props.query.address;
            campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_9__["default"])(props.query.address);
            _context.next = 4;
            return campaign.methods.getRequestsCount().call();

          case 4:
            requestsCount = _context.sent;
            _context.next = 7;
            return campaign.methods.approversCount().call();

          case 7:
            totalApprovers = _context.sent;
            _context.next = 10;
            return Promise.all(Array(parseInt(requestsCount)).fill().map(function (element, index) {
              return campaign.methods.requests(index).call();
            }));

          case 10:
            requests = _context.sent;
            console.log(requests);
            return _context.abrupt("return", {
              address: address,
              requests: requests,
              requestsCount: requestsCount,
              totalApprovers: totalApprovers
            });

          case 13:
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwicHJvcHMiLCJIZWFkZXIiLCJUYWJsZSIsIkJvZHkiLCJIZWFkZXJDZWxsIiwiQ2VsbCIsIlJvdyIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdHMiLCJsZW5ndGgiLCJzZXRFcnJvciIsImVycm9yIiwicmVuZGVyUm93cyIsIm1hcCIsInJlcXVlc3QiLCJhZGRyZXNzIiwidG90YWxBcHByb3ZlcnMiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJQcm9taXNlIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNmQyxNQURlLEdBQ3lCQyx1REFEekIsQ0FDZkQsTUFEZTtBQUFBLE1BQ1BFLElBRE8sR0FDeUJELHVEQUR6QixDQUNQQyxJQURPO0FBQUEsTUFDREMsVUFEQyxHQUN5QkYsdURBRHpCLENBQ0RFLFVBREM7QUFBQSxNQUNXQyxJQURYLEdBQ3lCSCx1REFEekIsQ0FDV0csSUFEWDtBQUFBLE1BQ2lCQyxHQURqQixHQUN5QkosdURBRHpCLENBQ2lCSSxHQURqQjs7QUFBQSxrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUVoQkMsSUFGZ0I7QUFBQSxNQUVWQyxPQUZVOztBQUd2QkMsU0FBTyxD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QixxQkFBT3dCLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQmIsUUFBakIsQ0FBMEJiLEtBQTFCLEVBQWlDNEIsSUFBakMsRUFBUDtBQUNELGFBSkgsQ0FEcUIsQ0FORDs7QUFBQTtBQU1oQmYsb0JBTmdCO0FBYXRCRixtQkFBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVo7QUFic0IsNkNBZWY7QUFDTE8scUJBQU8sRUFBUEEsT0FESztBQUVMUCxzQkFBUSxFQUFSQSxRQUZLO0FBR0xnQiwyQkFBYSxFQUFiQSxhQUhLO0FBSUxSLDRCQUFjLEVBQWRBO0FBSkssYUFmZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1QmVyQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuNjU3ZWMwOTkwYTgzZDIzNzE4OTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCBOb0RhdGFGb3VuZCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L05vRGF0YUZvdW5kXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUsIEdyaWQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXNcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uLy4uL2V0aGVyaXVtL3dlYjNcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi8uLi9ldGhlcml1bS9DYW1wYWlnblwiO1xyXG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L1JlcXVlc3RSb3dcIjtcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L0Vycm9yTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgaW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IEhlYWRlciwgQm9keSwgSGVhZGVyQ2VsbCwgQ2VsbCwgUm93IH0gPSBUYWJsZTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5yZXF1ZXN0cy5sZW5ndGggKyBcIiByZXF1ZXN0c1wiKTtcclxuXHJcbiAgY29uc3Qgc2V0RXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgIHNldERhdGEoZXJyb3IpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclJvd3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Um93XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cclxuICAgICAgICAgIGFkZHJlc3M9e3Byb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICB0b3RhbD17cHJvcHMudG90YWxBcHByb3ZlcnN9XHJcbiAgICAgICAgICBzZXRFcnJvcj17c2V0RXJyb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+QWxsIHRoZSBSZXF1ZXN0IENyZWF0ZWQgZm9yIHRoaXMgQ2FtcGFpZ248L2gzPlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk9e3RydWV9IGZsb2F0ZWQ9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgdG89e2AvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk9e3RydWV9IGZsb2F0ZWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICBDcmVhdGUgUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5SZWNlcGllbnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5GaW5hbGl6ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxUYWJsZS5Cb2R5PntyZW5kZXJSb3dzKCl9PC9UYWJsZS5Cb2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICB7cHJvcHMucmVxdWVzdHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgIDxOb0RhdGFGb3VuZCBtZXNzYWdlPVwiTm90IERhdGEgRm91bmQsIFBsZWFzZSBjbGljayBvbiBjcmVhdGUgUmVxdWVzdCBidXR0b24gdG8gY3JlYXRlIG5ldyBvbmVcIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2RhdGEgPT09IFwiXCIgPyBcIlwiIDogPEVycm9yTWVzc2FnZSBkYXRhPXtkYXRhfSAvPn1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgY29uc3QgcmVxdWVzdHNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICBjb25zdCB0b3RhbEFwcHJvdmVycyA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBBcnJheShwYXJzZUludChyZXF1ZXN0c0NvdW50KSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgIH0pXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhyZXF1ZXN0cyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRyZXNzLFxyXG4gICAgcmVxdWVzdHMsXHJcbiAgICByZXF1ZXN0c0NvdW50LFxyXG4gICAgdG90YWxBcHByb3ZlcnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9