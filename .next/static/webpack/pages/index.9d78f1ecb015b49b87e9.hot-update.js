webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _NamesQuery_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NamesQuery.graphql */ \"./pages/NamesQuery.graphql\");\n/* harmony import */ var _NamesQuery_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NamesQuery_graphql__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/oludcie/WebstormProjects/sapient/new/next-apollo-demo-final/sapient-client-typescript/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_NamesQuery_graphql__WEBPACK_IMPORTED_MODULE_3___default.a),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([data]),\n      names = _useState[0],\n      setNames = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (data) {\n      setNames(data);\n    }\n  }, []); // make sure all data is loaded\n\n  if (loading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"ui container center header\",\n      style: {\n        textAlign: 'center',\n        margin: '20px'\n      },\n      children: \"loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 12\n    }, _this);\n  } // check for errors\n\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \":( an error happened\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 12\n    }, _this);\n  } // if all good return data\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"ui container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"ui container center header\",\n      style: {\n        textAlign: 'center',\n        margin: '20px'\n      },\n      children: \"Names\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"ui four stackable cards\",\n        children: data.name.map(function (n) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"content\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"center aligned header\",\n                children: \" \"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"center aligned description\",\n                style: {\n                  color: '#8B0000'\n                },\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n                    children: n.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 31\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"extra content\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"center aligned author\",\n                style: {\n                  color: '#8B0000'\n                },\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\" \", n.address1]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 53,\n                    columnNumber: 32\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\" \", n.address2]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 54,\n                    columnNumber: 32\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\" \", n.city]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 55,\n                    columnNumber: 32\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 55,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\" \", n.country]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 56,\n                    columnNumber: 32\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\" \", n.zip_code]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 57,\n                    columnNumber: 32\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\" \", n.email]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 58,\n                    columnNumber: 32\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 58,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                  children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\" \", n.tel]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 59,\n                    columnNumber: 32\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 59,\n                  columnNumber: 25\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, _this)]\n          }, n.name, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"WklOHegPJsdmUGS0X3otBxzEOxg=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVF1ZXJ5IiwiUVVFUllfTkFNRVMiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlU3RhdGUiLCJuYW1lcyIsInNldE5hbWVzIiwidXNlRWZmZWN0IiwidGV4dEFsaWduIiwibWFyZ2luIiwibmFtZSIsIm1hcCIsIm4iLCJjb2xvciIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwiY291bnRyeSIsInppcF9jb2RlIiwiZW1haWwiLCJ0ZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBOztBQU9BLElBQU1BLElBQXNCLEdBQUcsU0FBekJBLElBQXlCLEdBQU07QUFBQTs7QUFBQSxrQkFFRkMsK0RBQVEsQ0FBQ0MsMERBQUQsQ0FGTjtBQUFBLE1BRTNCQyxJQUYyQixhQUUzQkEsSUFGMkI7QUFBQSxNQUVyQkMsT0FGcUIsYUFFckJBLE9BRnFCO0FBQUEsTUFFWkMsS0FGWSxhQUVaQSxLQUZZOztBQUFBLGtCQUlUQyxzREFBUSxDQUFDLENBQUNILElBQUQsQ0FBRCxDQUpDO0FBQUEsTUFJNUJJLEtBSjRCO0FBQUEsTUFJckJDLFFBSnFCOztBQU1uQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR04sSUFBSCxFQUFTO0FBQ1BLLGNBQVEsQ0FBQ0wsSUFBRCxDQUFSO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFULENBTm1DLENBYW5DOztBQUNBLE1BQUlDLE9BQUosRUFBYTtBQUNYLHdCQUFPO0FBQUcsZUFBUyxFQUFDLDRCQUFiO0FBQTBDLFdBQUssRUFBRTtBQUFDTSxpQkFBUyxFQUFFLFFBQVo7QUFBc0JDLGNBQU0sRUFBRTtBQUE5QixPQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FoQmtDLENBbUJuQzs7O0FBQ0EsTUFBSU4sS0FBSixFQUFXO0FBQ1Qsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBdEJrQyxDQXdCbkM7OztBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyw0QkFBZDtBQUEyQyxXQUFLLEVBQUU7QUFBQ0ssaUJBQVMsRUFBRSxRQUFaO0FBQXNCQyxjQUFNLEVBQUU7QUFBOUIsT0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsa0JBQ0dSLElBQUksQ0FBQ1MsSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQ0MsQ0FBRDtBQUFBLDhCQUNiO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLFNBQWY7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFLLHlCQUFTLEVBQUMsNEJBQWY7QUFBNEMscUJBQUssRUFBRTtBQUFFQyx1QkFBSyxFQUFFO0FBQVQsaUJBQW5EO0FBQUEsdUNBQ0k7QUFBQSx5Q0FBTTtBQUFBLDhCQUFJRCxDQUFDLENBQUNGO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU9JO0FBQUssdUJBQVMsRUFBQyxlQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLHVCQUFmO0FBQXVDLHFCQUFLLEVBQUU7QUFBRUcsdUJBQUssRUFBRTtBQUFULGlCQUE5QztBQUFBLHdDQUNJO0FBQUEsK0NBQU87QUFBQSxvQ0FBS0QsQ0FBQyxDQUFDRSxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFBLCtDQUFPO0FBQUEsb0NBQUtGLENBQUMsQ0FBQ0csUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLGVBR0k7QUFBQSwrQ0FBTztBQUFBLG9DQUFLSCxDQUFDLENBQUNJLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISixlQUlJO0FBQUEsK0NBQU87QUFBQSxvQ0FBS0osQ0FBQyxDQUFDSyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFLSTtBQUFBLCtDQUFPO0FBQUEsb0NBQUtMLENBQUMsQ0FBQ00sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKLGVBTUk7QUFBQSwrQ0FBTztBQUFBLG9DQUFLTixDQUFDLENBQUNPLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFOSixlQU9JO0FBQUEsK0NBQU87QUFBQSxvQ0FBS1AsQ0FBQyxDQUFDUSxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBLGFBQTJCUixDQUFDLENBQUNGLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGE7QUFBQSxTQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQXZERDs7R0FBTVosSTtVQUU2QkMsdUQ7OztLQUY3QkQsSTtBQXlEU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IFVzZXJzIGZyb20gJy4vdXNlcnMnO1xuXG5pbXBvcnQgUVVFUllfTkFNRVMgZnJvbSAnLi9OYW1lc1F1ZXJ5LmdyYXBocWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXG59XG5cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPFByb3BzPiA9ICgpID0+IHtcblxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShRVUVSWV9OQU1FUyk7XG5cbiAgY29uc3QgW25hbWVzLCBzZXROYW1lc10gPSB1c2VTdGF0ZShbZGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihkYXRhKSB7XG4gICAgICBzZXROYW1lcyhkYXRhKVxuICAgIH1cbiAgfSwgW10pXG4gXG5cbiAgLy8gbWFrZSBzdXJlIGFsbCBkYXRhIGlzIGxvYWRlZFxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJ1aSBjb250YWluZXIgY2VudGVyIGhlYWRlclwiIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMjBweCd9fT5sb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG5cbiAgLy8gY2hlY2sgZm9yIGVycm9yc1xuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPHA+OiggYW4gZXJyb3IgaGFwcGVuZWQ8L3A+O1xuICB9XG5cbiAgLy8gaWYgYWxsIGdvb2QgcmV0dXJuIGRhdGFcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInVpIGNvbnRhaW5lciBjZW50ZXIgaGVhZGVyXCIgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46ICcyMHB4J319Pk5hbWVzPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgZm91ciBzdGFja2FibGUgY2FyZHNcIj5cbiAgICAgICAgICB7ZGF0YS5uYW1lLm1hcCgobikgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIga2V5PXtuLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciBhbGlnbmVkIGhlYWRlclwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXIgYWxpZ25lZCBkZXNjcmlwdGlvblwiIHN0eWxlPXt7IGNvbG9yOiAnIzhCMDAwMCcsIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+e24ubmFtZX08L2I+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXIgYWxpZ25lZCBhdXRob3JcIiBzdHlsZT17eyBjb2xvcjogJyM4QjAwMDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDxwPiB7bi5hZGRyZXNzMX08L3A+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDxwPiB7bi5hZGRyZXNzMn08L3A+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDxwPiB7bi5jaXR5fTwvcD48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gPHA+IHtuLmNvdW50cnl9PC9wPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8cD4ge24uemlwX2NvZGV9PC9wPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8cD4ge24uZW1haWx9PC9wPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8cD4ge24udGVsfTwvcD48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})