"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/app/layout",{

/***/ "(app-pages-browser)/./src/components/header/appHeader.tsx":
/*!*********************************************!*\
  !*** ./src/components/header/appHeader.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AppHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo */ \"(app-pages-browser)/./src/components/logo.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst routes = [\n    {\n        label: \"DashBoard\",\n        path: \"/app/dashboard\"\n    },\n    {\n        label: \"Account\",\n        path: \"/app/account\"\n    }\n];\nfunction AppHeader() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex items-center justify-between  border-b-2 border-white/10 py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Study\\\\petsoft\\\\src\\\\components\\\\header\\\\appHeader.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \" flex  gap-6 text-xs\",\n                children: routes.map((route)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \" text-sm text-white/70 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: route.path,\n                            children: route.label\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Study\\\\petsoft\\\\src\\\\components\\\\header\\\\appHeader.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 15\n                        }, this)\n                    }, route.path, false, {\n                        fileName: \"C:\\\\Study\\\\petsoft\\\\src\\\\components\\\\header\\\\appHeader.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Study\\\\petsoft\\\\src\\\\components\\\\header\\\\appHeader.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Study\\\\petsoft\\\\src\\\\components\\\\header\\\\appHeader.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = AppHeader;\nvar _c;\n$RefreshReg$(_c, \"AppHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9hcHBIZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ0M7QUFDRTtBQUU3QixNQUFNRyxTQUFTO0lBQ2I7UUFDRUMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtDQUNEO0FBRWMsU0FBU0M7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUCw2Q0FBSUE7Ozs7OzBCQUNMLDhEQUFDUTtnQkFBR0QsV0FBVTswQkFDWEwsT0FBT08sR0FBRyxDQUFDLENBQUNDO29CQUNYLHFCQUNFLDhEQUFDQzt3QkFBR0osV0FBVTtrQ0FDWiw0RUFBQ04sa0RBQUlBOzRCQUFDVyxNQUFNRixNQUFNTixJQUFJO3NDQUFHTSxNQUFNUCxLQUFLOzs7Ozs7dUJBRE9PLE1BQU1OLElBQUk7Ozs7O2dCQUkzRDs7Ozs7Ozs7Ozs7O0FBSVI7S0Fmd0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9hcHBIZWFkZXIudHN4P2NmMDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2xvZ29cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiBcIkRhc2hCb2FyZFwiLFxyXG4gICAgcGF0aDogXCIvYXBwL2Rhc2hib2FyZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiQWNjb3VudFwiLFxyXG4gICAgcGF0aDogXCIvYXBwL2FjY291bnRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gIGJvcmRlci1iLTIgYm9yZGVyLXdoaXRlLzEwIHB5LTJcIj5cclxuICAgICAgPExvZ28gLz5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIiBmbGV4ICBnYXAtNiB0ZXh0LXhzXCI+XHJcbiAgICAgICAge3JvdXRlcy5tYXAoKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIHRleHQtc20gdGV4dC13aGl0ZS83MCBcIiBrZXk9e3JvdXRlLnBhdGh9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JvdXRlLnBhdGh9Pntyb3V0ZS5sYWJlbH08L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMb2dvIiwiTGluayIsInJvdXRlcyIsImxhYmVsIiwicGF0aCIsIkFwcEhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwicm91dGUiLCJsaSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/header/appHeader.tsx\n"));

/***/ })

});