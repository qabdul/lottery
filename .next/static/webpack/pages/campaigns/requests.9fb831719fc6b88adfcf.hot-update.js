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
    _this = undefined;










var index = function index(props) {
  var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Header,
      Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Body,
      HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].HeaderCell,
      Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Cell,
      Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Row;
  console.log(props.requestsCount);

  var renderRows = function renderRows() {
    return props.requests.map(function (request, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_RequestRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
        request: request,
        address: props.address,
        id: index,
        total: props.totalApprovers
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      children: "All the Request Created for this Campaign"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            to: "/campaigns/".concat(props.address, "/requests/new"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                primary: true,
                floated: "right",
                children: "Create Request"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
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
                  lineNumber: 49,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Amount"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Recepient"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Approval Count"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Approve"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                  children: "Finalize"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Table"].Body, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), props.requestsCount === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_NoDataFound__WEBPACK_IMPORTED_MODULE_5__["default"], {
            message: "Not Data Found, Please clcik on create Request button to create new one"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, _this) : ""]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwicHJvcHMiLCJIZWFkZXIiLCJUYWJsZSIsIkJvZHkiLCJIZWFkZXJDZWxsIiwiQ2VsbCIsIlJvdyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0c0NvdW50IiwicmVuZGVyUm93cyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImFkZHJlc3MiLCJ0b3RhbEFwcHJvdmVycyIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsImFwcHJvdmVyc0NvdW50IiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNmQyxNQURlLEdBQ3lCQyx1REFEekIsQ0FDZkQsTUFEZTtBQUFBLE1BQ1BFLElBRE8sR0FDeUJELHVEQUR6QixDQUNQQyxJQURPO0FBQUEsTUFDREMsVUFEQyxHQUN5QkYsdURBRHpCLENBQ0RFLFVBREM7QUFBQSxNQUNXQyxJQURYLEdBQ3lCSCx1REFEekIsQ0FDV0csSUFEWDtBQUFBLE1BQ2lCQyxHQURqQixHQUN5QkosdURBRHpCLENBQ2lCSSxHQURqQjtBQUV2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQUssQ0FBQ1MsYUFBbEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixXQUFPVixLQUFLLENBQUNXLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxPQUFELEVBQVVkLEtBQVYs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aEJiLHlCQUhnQjtBQUFBO0FBQUEsbUJBSU9TLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQkcsY0FBakIsR0FBa0NELElBQWxDLEVBSlA7O0FBQUE7QUFJaEJQLDBCQUpnQjtBQUFBO0FBQUEsbUJBTUNTLE9BQU8sQ0FBQ0MsR0FBUixDQUNyQkMsS0FBSyxDQUFDQyxRQUFRLENBQUNsQixhQUFELENBQVQsQ0FBTCxDQUNHbUIsSUFESCxHQUVHaEIsR0FGSCxDQUVPLFVBQUNpQixPQUFELEVBQVU5QixLQUFWLEVBQW9CO0FBQ3ZCLHFCQUFPbUIsUUFBUSxDQUFDRSxPQUFULENBQWlCVCxRQUFqQixDQUEwQlosS0FBMUIsRUFBaUN1QixJQUFqQyxFQUFQO0FBQ0QsYUFKSCxDQURxQixDQU5EOztBQUFBO0FBTWhCWCxvQkFOZ0I7QUFhdEJKLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBWjtBQWJzQiw2Q0FlZjtBQUNMRyxxQkFBTyxFQUFQQSxPQURLO0FBRUxILHNCQUFRLEVBQVJBLFFBRks7QUFHTEYsMkJBQWEsRUFBYkEsYUFISztBQUlMTSw0QkFBYyxFQUFkQTtBQUpLLGFBZmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBdUJlaEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjlmYjgzMTcxOWZjNmI4OGFkZmNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IE5vRGF0YUZvdW5kIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvTm9EYXRhRm91bmRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlc1wiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyaXVtL0NhbXBhaWduXCI7XHJcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnQvUmVxdWVzdFJvd1wiO1xyXG5cclxuY29uc3QgaW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IEhlYWRlciwgQm9keSwgSGVhZGVyQ2VsbCwgQ2VsbCwgUm93IH0gPSBUYWJsZTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5yZXF1ZXN0c0NvdW50KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUm93cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBwcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlcXVlc3RSb3dcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxyXG4gICAgICAgICAgYWRkcmVzcz17cHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgIHRvdGFsPXtwcm9wcy50b3RhbEFwcHJvdmVyc31cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgzPkFsbCB0aGUgUmVxdWVzdCBDcmVhdGVkIGZvciB0aGlzIENhbXBhaWduPC9oMz5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PXt0cnVlfSBmbG9hdGVkPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgQ3JlYXRlIFJlcXVlc3RcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjZXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICA8VGFibGUuQm9keT48L1RhYmxlLkJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIHtwcm9wcy5yZXF1ZXN0c0NvdW50ID09PSAwID8gKFxyXG4gICAgICAgICAgICAgIDxOb0RhdGFGb3VuZCBtZXNzYWdlPVwiTm90IERhdGEgRm91bmQsIFBsZWFzZSBjbGNpayBvbiBjcmVhdGUgUmVxdWVzdCBidXR0b24gdG8gY3JlYXRlIG5ldyBvbmVcIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xyXG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgY29uc3QgcmVxdWVzdHNDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICBjb25zdCB0b3RhbEFwcHJvdmVycyA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZXJzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBBcnJheShwYXJzZUludChyZXF1ZXN0c0NvdW50KSlcclxuICAgICAgLmZpbGwoKVxyXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgIH0pXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhyZXF1ZXN0cyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRyZXNzLFxyXG4gICAgcmVxdWVzdHMsXHJcbiAgICByZXF1ZXN0c0NvdW50LFxyXG4gICAgdG90YWxBcHByb3ZlcnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9