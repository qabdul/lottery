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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _etherium_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../etherium/web3 */ "./etherium/web3.js");
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../etherium/Campaign */ "./etherium/Campaign.js");
/* harmony import */ var _component_RequestRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../component/RequestRow */ "./component/RequestRow.jsx");




var _jsxFileName = "C:\\Users\\AbdulQ\\Desktop\\lottery\\pages\\campaigns\\requests\\index.js",
    _this = undefined;









var index = function index(props) {
  var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Header,
      Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Body,
      HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].HeaderCell,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Cell,
      Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Row;

  var renderRow = function renderRow() {
    props.requests.map(function (item) {
      console.log(item);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      children: "Requests!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      to: "/campaigns/".concat(props.address, "/requests/new"),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          primary: true,
          children: "Create Request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Header, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Row, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Recepient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Approval Count"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"].Body, {
        children: renderRow()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

index.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
    var address, campaign, requestsCount, requests;
    return C_Users_AbdulQ_Desktop_lottery_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            address = props.query.address;
            campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_8__["default"])(props.query.address);
            _context.next = 4;
            return campaign.methods.getRequestsCount().call();

          case 4:
            requestsCount = _context.sent;
            _context.next = 7;
            return Promise.all(Array(parseInt(requestsCount)).fill().map(function (element, index) {
              return campaign.methods.requests(index).call();
            }));

          case 7:
            requests = _context.sent;
            console.log(requests);
            return _context.abrupt("return", {
              address: address,
              requests: requests,
              requestsCount: requestsCount
            });

          case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwicHJvcHMiLCJIZWFkZXIiLCJUYWJsZSIsIkJvZHkiLCJIZWFkZXJDZWxsIiwiQ2VsbCIsIlJvdyIsInJlbmRlclJvdyIsInJlcXVlc3RzIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwicmVxdWVzdHNDb3VudCIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZkMsTUFEZSxHQUN5QkMsdURBRHpCLENBQ2ZELE1BRGU7QUFBQSxNQUNQRSxJQURPLEdBQ3lCRCx1REFEekIsQ0FDUEMsSUFETztBQUFBLE1BQ0RDLFVBREMsR0FDeUJGLHVEQUR6QixDQUNERSxVQURDO0FBQUEsTUFDV0MsSUFEWCxHQUN5QkgsdURBRHpCLENBQ1dHLElBRFg7QUFBQSxNQUNpQkMsR0FEakIsR0FDeUJKLHVEQUR6QixDQUNpQkksR0FEakI7O0FBR3ZCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJQLFNBQUssQ0FBQ1EsUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUNDLElBQUQsRUFBVTtBQUMzQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFLQSxzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSxxRUFBQyw0Q0FBRDtBQUFNLFFBQUUsdUJBQWdCVixLQUFLLENBQUNhLE9BQXRCLGtCQUFSO0FBQUEsNkJBQ0U7QUFBQSxtQkFDRyxHQURILGVBRUUscUVBQUMsd0RBQUQ7QUFBUSxpQkFBTyxFQUFFLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQVNFLHFFQUFDLHVEQUFEO0FBQUEsOEJBQ0UscUVBQUMsTUFBRDtBQUFBLCtCQUNFLHFFQUFDLEdBQUQ7QUFBQSxrQ0FDRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0UscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBUUUscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFhRSxxRUFBQyx1REFBRCxDQUFPLElBQVA7QUFBQSxrQkFBYU4sU0FBUztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0FuQ0Q7O0FBcUNBUixLQUFLLENBQUNlLGVBQU47QUFBQSx3VEFBd0IsaUJBQU9kLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCYSxtQkFEZ0IsR0FDTmIsS0FBSyxDQUFDZSxLQUFOLENBQVlGLE9BRE47QUFFaEJHLG9CQUZnQixHQUVMQyxrRUFBUSxDQUFDakIsS0FBSyxDQUFDZSxLQUFOLENBQVlGLE9BQWIsQ0FGSDtBQUFBO0FBQUEsbUJBR01HLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkMsZ0JBQWpCLEdBQW9DQyxJQUFwQyxFQUhOOztBQUFBO0FBR2hCQyx5QkFIZ0I7QUFBQTtBQUFBLG1CQUtDQyxPQUFPLENBQUNDLEdBQVIsQ0FDckJDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDSixhQUFELENBQVQsQ0FBTCxDQUNHSyxJQURILEdBRUdqQixHQUZILENBRU8sVUFBQ2tCLE9BQUQsRUFBVTVCLEtBQVYsRUFBb0I7QUFDdkIscUJBQU9pQixRQUFRLENBQUNFLE9BQVQsQ0FBaUJWLFFBQWpCLENBQTBCVCxLQUExQixFQUFpQ3FCLElBQWpDLEVBQVA7QUFDRCxhQUpILENBRHFCLENBTEQ7O0FBQUE7QUFLaEJaLG9CQUxnQjtBQVl0QkcsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBWnNCLDZDQWNmO0FBQ0xLLHFCQUFPLEVBQVBBLE9BREs7QUFFTEwsc0JBQVEsRUFBUkEsUUFGSztBQUdMYSwyQkFBYSxFQUFiQTtBQUhLLGFBZGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBcUJldEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLmUwMjM3Y2FiOGM4OTIyOTMzYjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlc1wiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvUmVxdWVzdFJvd1wiO1xyXG5cclxuY29uc3QgaW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IEhlYWRlciwgQm9keSwgSGVhZGVyQ2VsbCwgQ2VsbCwgUm93IH0gPSBUYWJsZTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUm93ID0gKCkgPT4ge1xyXG4gICAgcHJvcHMucmVxdWVzdHMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgzPlJlcXVlc3RzITwvaDM+XHJcblxyXG4gICAgICA8TGluayB0bz17YC9jYW1wYWlnbnMvJHtwcm9wcy5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT17dHJ1ZX0+Q3JlYXRlIFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPFRhYmxlPlxyXG4gICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2VwaWVudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92YWwgQ291bnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPFRhYmxlLkJvZHk+e3JlbmRlclJvdygpfTwvVGFibGUuQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcclxuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gIGNvbnN0IHJlcXVlc3RzQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBBcnJheShwYXJzZUludChyZXF1ZXN0c0NvdW50KSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgIH0pXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhyZXF1ZXN0cyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRyZXNzLFxyXG4gICAgcmVxdWVzdHMsXHJcbiAgICByZXF1ZXN0c0NvdW50LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==