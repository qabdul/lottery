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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      data = _useState[0],
      setData = _useState[1];

  console.log(props.requests.length + " requests");

  var renderRows = function renderRows() {
    return props.requests.map(function (request, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_RequestRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
        request: request,
        address: props.address,
        id: index,
        total: props.totalApprovers
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      children: "All the Request Created for this Campaign"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
                lineNumber: 38,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
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
                lineNumber: 46,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
                  lineNumber: 58,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Amount"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Recepient"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Approval Count"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Approve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Finalize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Body, {
              children: renderRows()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), props.requests.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_NoDataFound__WEBPACK_IMPORTED_MODULE_5__["default"], {
            message: "Not Data Found, Please click on create Request button to create new one"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(index, "DAAZLWZOtcOkOUmpqHDtv+XFdDk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwicHJvcHMiLCJIZWFkZXIiLCJUYWJsZSIsIkJvZHkiLCJIZWFkZXJDZWxsIiwiQ2VsbCIsIlJvdyIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdHMiLCJsZW5ndGgiLCJyZW5kZXJSb3dzIiwibWFwIiwicmVxdWVzdCIsImFkZHJlc3MiLCJ0b3RhbEFwcHJvdmVycyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ2ZDLE1BRGUsR0FDeUJDLHVEQUR6QixDQUNmRCxNQURlO0FBQUEsTUFDUEUsSUFETyxHQUN5QkQsdURBRHpCLENBQ1BDLElBRE87QUFBQSxNQUNEQyxVQURDLEdBQ3lCRix1REFEekIsQ0FDREUsVUFEQztBQUFBLE1BQ1dDLElBRFgsR0FDeUJILHVEQUR6QixDQUNXRyxJQURYO0FBQUEsTUFDaUJDLEdBRGpCLEdBQ3lCSix1REFEekIsQ0FDaUJJLEdBRGpCOztBQUFBLGtCQUVDQyxzREFBUSxDQUFDLEtBQUQsQ0FGVDtBQUFBLE1BRWhCQyxJQUZnQjtBQUFBLE1BRVZDLE9BRlU7O0FBR3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBSyxDQUFD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QWMsRUFBZEE7QUFKSyxhQWZlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCZW5CLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy5lY2FmOWQyZjc5ZDRiMTFiNmZmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IE5vRGF0YUZvdW5kIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvTm9EYXRhRm91bmRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlc1wiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvUmVxdWVzdFJvd1wiO1xyXG5cclxuY29uc3QgaW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IEhlYWRlciwgQm9keSwgSGVhZGVyQ2VsbCwgQ2VsbCwgUm93IH0gPSBUYWJsZTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMucmVxdWVzdHMubGVuZ3RoICsgXCIgcmVxdWVzdHNcIik7XHJcblxyXG4gIGNvbnN0IHJlbmRlclJvd3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZXF1ZXN0Um93XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cclxuICAgICAgICAgIGFkZHJlc3M9e3Byb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICB0b3RhbD17cHJvcHMudG90YWxBcHByb3ZlcnN9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+QWxsIHRoZSBSZXF1ZXN0IENyZWF0ZWQgZm9yIHRoaXMgQ2FtcGFpZ248L2gzPlxyXG4gICAgICA8R3JpZD5cclxuICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk9e3RydWV9IGZsb2F0ZWQ9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgdG89e2AvY2FtcGFpZ25zLyR7cHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk9e3RydWV9IGZsb2F0ZWQ9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICBDcmVhdGUgUmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5SZWNlcGllbnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5GaW5hbGl6ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxUYWJsZS5Cb2R5PntyZW5kZXJSb3dzKCl9PC9UYWJsZS5Cb2R5PlxyXG4gICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICB7cHJvcHMucmVxdWVzdHMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgIDxOb0RhdGFGb3VuZCBtZXNzYWdlPVwiTm90IERhdGEgRm91bmQsIFBsZWFzZSBjbGljayBvbiBjcmVhdGUgUmVxdWVzdCBidXR0b24gdG8gY3JlYXRlIG5ldyBvbmVcIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgY29uc3QgcmVxdWVzdHNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICBjb25zdCB0b3RhbEFwcHJvdmVycyA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBBcnJheShwYXJzZUludChyZXF1ZXN0c0NvdW50KSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgIH0pXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhyZXF1ZXN0cyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRyZXNzLFxyXG4gICAgcmVxdWVzdHMsXHJcbiAgICByZXF1ZXN0c0NvdW50LFxyXG4gICAgdG90YWxBcHByb3ZlcnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9