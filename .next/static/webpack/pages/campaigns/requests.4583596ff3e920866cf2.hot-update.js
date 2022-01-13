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
    props.requests.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_RequestRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
        request: item,
        address: props.address
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 14
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      children: "Requests!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), props.requestsCount, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      to: "/campaigns/".concat(props.address, "/requests/new"),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          primary: true,
          children: "Create Request"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Header, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Row, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Recepient"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Approval Count"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Body, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Row, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Cell, {
            children: "Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwicHJvcHMiLCJIZWFkZXIiLCJUYWJsZSIsIkJvZHkiLCJIZWFkZXJDZWxsIiwiQ2VsbCIsIlJvdyIsInJlbmRlclJvdyIsInJlcXVlc3RzIiwibWFwIiwiaXRlbSIsImFkZHJlc3MiLCJyZXF1ZXN0c0NvdW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZkMsTUFEZSxHQUN5QkMsdURBRHpCLENBQ2ZELE1BRGU7QUFBQSxNQUNQRSxJQURPLEdBQ3lCRCx1REFEekIsQ0FDUEMsSUFETztBQUFBLE1BQ0RDLFVBREMsR0FDeUJGLHVEQUR6QixDQUNERSxVQURDO0FBQUEsTUFDV0MsSUFEWCxHQUN5QkgsdURBRHpCLENBQ1dHLElBRFg7QUFBQSxNQUNpQkMsR0FEakIsR0FDeUJKLHVEQUR6QixDQUNpQkksR0FEakI7O0FBR3ZCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJQLFNBQUssQ0FBQ1EsUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUNDLElBQUQsRUFBT1gsS0FBUCxFQUFpQjtBQUNsQywwQkFBTyxxRUFBQyw2REFBRDtBQUFZLGVBQU8sRUFBRVcsSUFBckI7QUFBdUMsZUFBTyxFQUFFVixLQUFLLENBQUNXO0FBQXRELFNBQWdDWixL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QUE7QUFBQTtBQUFBO0FBQUE7O0FBcUJlYixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuNDU4MzU5NmZmM2U5MjA4NjZjZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzXCI7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi9ldGhlcml1bS93ZWIzXCI7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vQ2FtcGFpZ25cIjtcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9SZXF1ZXN0Um93XCI7XHJcblxyXG5jb25zdCBpbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgSGVhZGVyLCBCb2R5LCBIZWFkZXJDZWxsLCBDZWxsLCBSb3cgfSA9IFRhYmxlO1xyXG5cclxuICBjb25zdCByZW5kZXJSb3cgPSAoKSA9PiB7XHJcbiAgICBwcm9wcy5yZXF1ZXN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiA8UmVxdWVzdFJvdyByZXF1ZXN0PXtpdGVtfSBrZXk9e2luZGV4fSBhZGRyZXNzPXtwcm9wcy5hZGRyZXNzfSAvPjtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMz5SZXF1ZXN0cyE8L2gzPlxyXG5cclxuICAgICAge3Byb3BzLnJlcXVlc3RzQ291bnR9XHJcbiAgICAgIDxMaW5rIHRvPXtgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PXt0cnVlfT5DcmVhdGUgUmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8VGFibGU+XHJcbiAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjZXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICA8Qm9keT5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDZWxsPkRhdGE8L0NlbGw+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0JvZHk+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuaW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XHJcbiAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICBjb25zdCByZXF1ZXN0c0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpO1xyXG5cclxuICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdHNDb3VudCkpXHJcbiAgICAgIC5maWxsKClcclxuICAgICAgLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICB9KVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2cocmVxdWVzdHMpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRkcmVzcyxcclxuICAgIHJlcXVlc3RzLFxyXG4gICAgcmVxdWVzdHNDb3VudCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=