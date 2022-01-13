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
  console.log(props.result);

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
            lineNumber: 18,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this),
        fluid: true
      };
    });
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Group, {
      centered: true,
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
            computer: 4,
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
              as: "h1",
              children: "Open Campaigns"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], {
              to: "/campaigns/newcampaign",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                content: "Create Campaign",
                floated: "right",
                primary: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: renderCampaign()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJyZW5kZXJDYW1wYWlnbiIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJnZXRJbml0aWFsUHJvcHMiLCJDYW1wYWlnbkZhY3RvcnkiLCJtZXRob2RzIiwiZ2V0Q3JlYXRlZENhbXBhaWduTGlzdCIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQUEscUVBQUMsd0RBQUQ7QUFBUSxJQUFFLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFsQjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTUMsS0FBSyxHQUFHTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUcsR0FBYixDQUFpQixVQUFDQyxPQUFELEVBQWE7QUFDMUMsYUFBTztBQUNMQyxjQUFNLEVBQUVELE9BREg7QUFFTEUsbUJBQVcsZUFDVCxxRUFBQyw0Q0FBRDtBQUFNLFlBQUUsdUJBQWdCRixPQUFoQixDQUFSO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhHO0FBT0xHLGFBQUssRUFBRTtBQVBGLE9BQVA7QUFTRCxLQVZhLENBQWQ7QUFXQSx3QkFBTyxxRUFBQyxzREFBRCxDQUFNLEtBQU47QUFBWSxjQUFRLE1BQXBCO0FBQXFCLFdBQUssRUFBRUw7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FiRDs7QUFlQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLHlEQUFEO0FBQUEsNkJBQ0UscUVBQUMsc0RBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRCxDQUFNLEdBQU47QUFBQSxrQ0FDRSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBYSxrQkFBTSxFQUFFLEVBQXJCO0FBQXlCLGtCQUFNLEVBQUUsQ0FBakM7QUFBb0Msb0JBQVEsRUFBRSxDQUE5QztBQUFBLHVCQUNHLEdBREgsZUFFRSxxRUFBQyx3REFBRDtBQUFRLGdCQUFFLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSxxRUFBQyxzREFBRCxDQUFNLE1BQU47QUFBQSxtQ0FDRSxxRUFBQyw0Q0FBRDtBQUFNLGdCQUFFLEVBQUMsd0JBQVQ7QUFBQSxxQ0FDRSxxRUFBQyx3REFBRDtBQUFRLHVCQUFPLEVBQUMsaUJBQWhCO0FBQWtDLHVCQUFPLEVBQUMsT0FBMUM7QUFBa0QsdUJBQU87QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFO0FBQUEsb0JBQU1ELGNBQWM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFxQkQsQ0F2Q0Q7O0FBeUNBTCxLQUFLLENBQUNZLGVBQU47QUFBQSx3VEFBd0IsaUJBQU9YLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRFksaUVBQWUsQ0FBQ0MsT0FBaEIsQ0FBd0JDLHNCQUF4QixHQUFpREMsSUFBakQsRUFEQzs7QUFBQTtBQUNoQlosa0JBRGdCO0FBQUEsNkNBR2Y7QUFBRUEsb0JBQU0sRUFBTkE7QUFBRixhQUhlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lSixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMjg4NTFkYWQ1NmM1YTNlMjE2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyaXVtL3dlYjNcIjtcclxuaW1wb3J0IENhbXBhaWduRmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJpdW0vQ2FtcGFpZ25GYWN0b3J5XCI7XHJcbjxIZWFkZXIgYXM9XCJoMVwiPkZpcnN0IEhlYWRlcjwvSGVhZGVyPjtcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBIZWFkZXIsIEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xyXG5cclxuY29uc3QgaW5kZXggPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5yZXN1bHQpO1xyXG5cclxuICBjb25zdCByZW5kZXJDYW1wYWlnbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW1zID0gcHJvcHMucmVzdWx0Lm1hcCgoYWRkcmVzcykgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPExpbmsgdG89e2AvY2FtcGFpZ25zLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgPGE+VmlldyBDYW1wYWlnbjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApLFxyXG4gICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgY2VudGVyZWQgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIG1vYmlsZT17MTZ9IHRhYmxldD17OH0gY29tcHV0ZXI9ezR9PlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDFcIj5PcGVuIENhbXBhaWduczwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2FtcGFpZ25zL25ld2NhbXBhaWduXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIiBmbG9hdGVkPVwicmlnaHRcIiBwcmltYXJ5IC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuXHJcbiAgICAgICAgICA8ZGl2PntyZW5kZXJDYW1wYWlnbigpfTwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuaW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQ2FtcGFpZ25GYWN0b3J5Lm1ldGhvZHMuZ2V0Q3JlYXRlZENhbXBhaWduTGlzdCgpLmNhbGwoKTtcclxuXHJcbiAgcmV0dXJuIHsgcmVzdWx0IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==