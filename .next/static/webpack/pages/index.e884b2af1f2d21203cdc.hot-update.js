webpackHotUpdate_N_E("pages/index",{

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
            children: props.result.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_NoDataFound__WEBPACK_IMPORTED_MODULE_9__["default"], {
              message: " No Campaign Found, click on create button to start new campaign \uD83D\uDC4D "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
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
          lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJsZW5ndGgiLCJyZW5kZXJDYW1wYWlnbiIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImdldEluaXRpYWxQcm9wcyIsIkNhbXBhaWduRmFjdG9yeSIsIm1ldGhvZHMiLCJnZXRDcmVhdGVkQ2FtcGFpZ25MaXN0IiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQUEscUVBQUMsd0RBQUQ7QUFBUSxJQUFFLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsTUFBekI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQU1DLEtBQUssR0FBR04sS0FBSyxDQUFDRyxNQUFOLENBQWFJLEdBQWIsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzFDLGFBQU87QUFDTEMsY0FBTSxFQUFFRCxPQURIO0FBRUxFLG1CQUFXLGVBQ1QscUVBQUMsNENBQUQ7QUFBTSxZQUFFLHVCQUFnQkYsT0FBaEIsQ0FBUjtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRztBQU9MRyxhQUFLLEVBQUUsSUFQRjtBQVFMQyxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQjtBQVJGLE9BQVA7QUFVRCxLQVhhLENBQWQ7QUFZQSx3QkFBTyxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxjQUFRLE1BQXBCO0FBQXFCLFdBQUssRUFBRVA7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FkRDs7QUFnQkEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx5REFBRDtBQUFBLDZCQUNFLHFFQUFDLHNEQUFEO0FBQUEsZ0NBQ0UscUVBQUMsc0RBQUQsQ0FBTSxHQUFOO0FBQUEsa0NBQ0UscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsa0JBQU0sRUFBRSxFQUFyQjtBQUF5QixrQkFBTSxFQUFFLENBQWpDO0FBQW9DLG9CQUFRLEVBQUUsQ0FBOUM7QUFBQSx1QkFDRyxHQURILGVBRUUscUVBQUMsd0RBQUQ7QUFBUSxnQkFBRSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0UscUVBQUMsc0RBQUQsQ0FBTSxNQUFOO0FBQWEsa0JBQU0sRUFBRSxFQUFyQjtBQUF5QixrQkFBTSxFQUFFLENBQWpDO0FBQW9DLG9CQUFRLEVBQUUsQ0FBOUM7QUFBQSxtQ0FDRSxxRUFBQyw0Q0FBRDtBQUFNLGdCQUFFLEVBQUMsd0JBQVQ7QUFBQSxxQ0FDRSxxRUFBQyx3REFBRDtBQUFRLHVCQUFPLEVBQUMsaUJBQWhCO0FBQWtDLHVCQUFPLEVBQUMsT0FBMUM7QUFBa0QsdUJBQU87QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLHFFQUFDLHNEQUFELENBQU0sR0FBTjtBQUFBLGlDQUNFLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBLHNCQUNHTixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsTUFBYixHQUFzQixDQUF0QixnQkFDQyxxRUFBQyw4REFBRDtBQUFhLHFCQUFPLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxHQUdDQyxjQUFjO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQThCRCxDQWpERDs7QUFtREFOLEtBQUssQ0FBQ2UsZUFBTjtBQUFBLHdUQUF3QixpQkFBT2QsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNEZSxpRUFBZSxDQUFDQyxPQUFoQixDQUF3QkMsc0JBQXhCLEdBQWlEQyxJQUFqRCxFQURDOztBQUFBO0FBQ2hCZixrQkFEZ0I7QUFBQSw2Q0FHZjtBQUFFQSxvQkFBTSxFQUFOQTtBQUFGLGFBSGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVKLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4ODRiMmFmMWYyZDIxMjAzY2RjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJpdW0vd2ViM1wiO1xyXG5pbXBvcnQgQ2FtcGFpZ25GYWN0b3J5IGZyb20gXCIuLi9ldGhlcml1bS9DYW1wYWlnbkZhY3RvcnlcIjtcclxuPEhlYWRlciBhcz1cImgxXCI+Rmlyc3QgSGVhZGVyPC9IZWFkZXI+O1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIEhlYWRlciwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XHJcbmltcG9ydCBOb0RhdGFGb3VuZCBmcm9tIFwiLi4vY29tcG9uZW50L05vRGF0YUZvdW5kXCI7XHJcblxyXG5jb25zdCBpbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLnJlc3VsdC5sZW5ndGgpO1xyXG5cclxuICBjb25zdCByZW5kZXJDYW1wYWlnbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gcHJvcHMucmVzdWx0Lm1hcCgoYWRkcmVzcykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPExpbmsgdG89e2AvY2FtcGFpZ25zLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgPGE+VmlldyBDYW1wYWlnbjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApLFxyXG4gICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGNlbnRlcmVkIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBtb2JpbGU9ezE2fSB0YWJsZXQ9ezh9IGNvbXB1dGVyPXs4fT5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgxXCI+T3BlbiBDYW1wYWlnbnM8L0hlYWRlcj5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17OH0gY29tcHV0ZXI9ezh9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhbXBhaWducy9uZXdjYW1wYWlnblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCIgZmxvYXRlZD1cInJpZ2h0XCIgcHJpbWFyeSAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICB7cHJvcHMucmVzdWx0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8Tm9EYXRhRm91bmQgbWVzc2FnZT1cIiBObyBDYW1wYWlnbiBGb3VuZCwgY2xpY2sgb24gY3JlYXRlIGJ1dHRvbiB0byBzdGFydCBuZXcgY2FtcGFpZ24g8J+RjSBcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICByZW5kZXJDYW1wYWlnbigpXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcblxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IENhbXBhaWduRmFjdG9yeS5tZXRob2RzLmdldENyZWF0ZWRDYW1wYWlnbkxpc3QoKS5jYWxsKCk7XHJcblxyXG4gIHJldHVybiB7IHJlc3VsdCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=