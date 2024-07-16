"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/app/dashboard/page",{

/***/ "(app-pages-browser)/./src/lib/validations.ts":
/*!********************************!*\
  !*** ./src/lib/validations.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   petFormZodValidation: function() { return /* binding */ petFormZodValidation; },\n/* harmony export */   petIdValidation: function() { return /* binding */ petIdValidation; }\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n\nconst petIdValidation = zod__WEBPACK_IMPORTED_MODULE_0__.z.string().cuid();\nconst petFormZodValidation = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(3, \"Too small name\").max(100),\n    ownerName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().min(3, \"Too small owner name\").max(100),\n    imageUrl: zod__WEBPACK_IMPORTED_MODULE_0__.z.union([\n        zod__WEBPACK_IMPORTED_MODULE_0__.z.literal(\"\"),\n        zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().url({\n            message: \"Invalid URL\"\n        })\n    ]),\n    age: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce.number().int().positive(),\n    notes: zod__WEBPACK_IMPORTED_MODULE_0__.z.union([\n        zod__WEBPACK_IMPORTED_MODULE_0__.z.literal(\"\"),\n        zod__WEBPACK_IMPORTED_MODULE_0__.z.string().trim().max(1000)\n    ])\n})// Default image URL но они не работают в Server actions\n.transform((data)=>({\n        ...data,\n        imageUrl: data.imageUrl || \"https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png\"\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvdmFsaWRhdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRWpCLE1BQU1DLGtCQUFrQkQsa0NBQUNBLENBQUNFLE1BQU0sR0FBR0MsSUFBSSxHQUFHO0FBRTFDLE1BQU1DLHVCQUF1Qkosa0NBQUNBLENBQ2xDSyxNQUFNLENBQUM7SUFDTkMsTUFBTU4sa0NBQUNBLENBQUNFLE1BQU0sR0FBR0ssSUFBSSxHQUFHQyxHQUFHLENBQUMsR0FBRyxrQkFBa0JDLEdBQUcsQ0FBQztJQUNyREMsV0FBV1Ysa0NBQUNBLENBQUNFLE1BQU0sR0FBR0ssSUFBSSxHQUFHQyxHQUFHLENBQUMsR0FBRyx3QkFBd0JDLEdBQUcsQ0FBQztJQUNoRUUsVUFBVVgsa0NBQUNBLENBQUNZLEtBQUssQ0FBQztRQUNoQlosa0NBQUNBLENBQUNhLE9BQU8sQ0FBQztRQUNWYixrQ0FBQ0EsQ0FBQ0UsTUFBTSxHQUFHSyxJQUFJLEdBQUdPLEdBQUcsQ0FBQztZQUFFQyxTQUFTO1FBQWM7S0FDaEQ7SUFDREMsS0FBS2hCLGtDQUFDQSxDQUFDaUIsTUFBTSxDQUFDQyxNQUFNLEdBQUdDLEdBQUcsR0FBR0MsUUFBUTtJQUNyQ0MsT0FBT3JCLGtDQUFDQSxDQUFDWSxLQUFLLENBQUM7UUFBQ1osa0NBQUNBLENBQUNhLE9BQU8sQ0FBQztRQUFLYixrQ0FBQ0EsQ0FBQ0UsTUFBTSxHQUFHSyxJQUFJLEdBQUdFLEdBQUcsQ0FBQztLQUFNO0FBQzdELEVBQ0Esd0RBQXdEO0NBQ3ZEYSxTQUFTLENBQUMsQ0FBQ0MsT0FBVTtRQUNwQixHQUFHQSxJQUFJO1FBQ1BaLFVBQ0VZLEtBQUtaLFFBQVEsSUFDYjtJQUNKLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi92YWxpZGF0aW9ucy50cz80MzJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGV0SWRWYWxpZGF0aW9uID0gei5zdHJpbmcoKS5jdWlkKCk7XHJcblxyXG5leHBvcnQgY29uc3QgcGV0Rm9ybVpvZFZhbGlkYXRpb24gPSB6XHJcbiAgLm9iamVjdCh7XHJcbiAgICBuYW1lOiB6LnN0cmluZygpLnRyaW0oKS5taW4oMywgXCJUb28gc21hbGwgbmFtZVwiKS5tYXgoMTAwKSxcclxuICAgIG93bmVyTmFtZTogei5zdHJpbmcoKS50cmltKCkubWluKDMsIFwiVG9vIHNtYWxsIG93bmVyIG5hbWVcIikubWF4KDEwMCksXHJcbiAgICBpbWFnZVVybDogei51bmlvbihbXHJcbiAgICAgIHoubGl0ZXJhbChcIlwiKSxcclxuICAgICAgei5zdHJpbmcoKS50cmltKCkudXJsKHsgbWVzc2FnZTogXCJJbnZhbGlkIFVSTFwiIH0pLFxyXG4gICAgXSksXHJcbiAgICBhZ2U6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKCksXHJcbiAgICBub3Rlczogei51bmlvbihbei5saXRlcmFsKFwiXCIpLCB6LnN0cmluZygpLnRyaW0oKS5tYXgoMTAwMCldKSxcclxuICB9KVxyXG4gIC8vIERlZmF1bHQgaW1hZ2UgVVJMINC90L4g0L7QvdC4INC90LUg0YDQsNCx0L7RgtCw0Y7RgiDQsiBTZXJ2ZXIgYWN0aW9uc1xyXG4gIC50cmFuc2Zvcm0oKGRhdGEpID0+ICh7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgaW1hZ2VVcmw6XHJcbiAgICAgIGRhdGEuaW1hZ2VVcmwgfHxcclxuICAgICAgXCJodHRwczovL2J5dGVncmFkLmNvbS9jb3Vyc2UtYXNzZXRzL3JlYWN0LW5leHRqcy9wZXQtcGxhY2Vob2xkZXIucG5nXCIsXHJcbiAgfSkpO1xyXG5cclxuLy/Rh9GC0L4g0LEg0L3QtSDRgtC40L/QuNC30LjRgNC+0LLQsNGC0Ywg0LTQstCw0LbQtNGWINC80L7QttC90L4g0L3QsNGB0LvQtdC00L7QstCw0YLRjCDRgtC40L8g0LjQtyDRgdGF0LXQvNGWINC30L7QtNCwXHJcbmV4cG9ydCB0eXBlIFRVc2VGb3JtID0gei5pbmZlcjx0eXBlb2YgcGV0Rm9ybVpvZFZhbGlkYXRpb24+O1xyXG4iXSwibmFtZXMiOlsieiIsInBldElkVmFsaWRhdGlvbiIsInN0cmluZyIsImN1aWQiLCJwZXRGb3JtWm9kVmFsaWRhdGlvbiIsIm9iamVjdCIsIm5hbWUiLCJ0cmltIiwibWluIiwibWF4Iiwib3duZXJOYW1lIiwiaW1hZ2VVcmwiLCJ1bmlvbiIsImxpdGVyYWwiLCJ1cmwiLCJtZXNzYWdlIiwiYWdlIiwiY29lcmNlIiwibnVtYmVyIiwiaW50IiwicG9zaXRpdmUiLCJub3RlcyIsInRyYW5zZm9ybSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/validations.ts\n"));

/***/ })

});