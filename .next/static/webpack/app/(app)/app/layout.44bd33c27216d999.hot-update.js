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

/***/ "(app-pages-browser)/./src/app/context/PetsContext.tsx":
/*!*****************************************!*\
  !*** ./src/app/context/PetsContext.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PetsContext: function() { return /* binding */ PetsContext; },\n/* harmony export */   \"default\": function() { return /* binding */ PetsContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/actions */ \"(app-pages-browser)/./src/actions/actions.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ PetsContext,default auto */ \nvar _s = $RefreshSig$();\n\n\nconst PetsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nfunction PetsContextProvider(param) {\n    let { data: pets, children } = param;\n    _s();\n    // после revalidatePath(\"/app/dashboard\", \"layout\"); в actions.ts\n    //в Data приходят новіе данніе по запросу . Но посколько useState инициализируется один раз новіе данніе он не получает\n    // поєтому испольуем саму дату\n    // const [pets, setPetsData] = useState(data);\n    const [selectedPetId, setPetId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    function handleChangePetId(id) {\n        setPetId(id);\n    }\n    const selectedPet = pets.find((pet)=>pet.id === selectedPetId);\n    const numberOfPers = pets.length;\n    function handleCheckoutPet(id) {\n        const filteredWithNiPetArray = pets.filter((pet)=>pet.id !== id);\n        setPetsData(filteredWithNiPetArray);\n        setPetId(null);\n    }\n    function handleEditPet(petId, newPet) {\n        setPetsData((prev)=>prev.map((pet)=>pet.id === petId ? {\n                    ...newPet,\n                    id: petId\n                } : pet));\n    }\n    function handleAddPet(newPet) {\n        (0,_actions_actions__WEBPACK_IMPORTED_MODULE_1__.addPet)(newPet);\n    // setPetsData((prev) => [...prev, { ...newPet, id: Date.now().toString() }]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PetsContext.Provider, {\n        value: {\n            pets,\n            selectedPetId,\n            handleChangePetId,\n            selectedPet,\n            numberOfPers,\n            handleCheckoutPet,\n            handleAddPet,\n            handleEditPet\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Study\\\\petsoft\\\\src\\\\app\\\\context\\\\PetsContext.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(PetsContextProvider, \"8pjmDRfVIMa+/Vm4uIydwdYfxzs=\");\n_c = PetsContextProvider;\nvar _c;\n$RefreshReg$(_c, \"PetsContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGV4dC9QZXRzQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMkM7QUFFWTtBQWlCaEQsTUFBTUksNEJBQWNGLG9EQUFhQSxDQUFxQixNQUFNO0FBRXBELFNBQVNHLG9CQUFvQixLQUd0QjtRQUhzQixFQUMxQ0MsTUFBTUMsSUFBSSxFQUNWQyxRQUFRLEVBQ1ksR0FIc0I7O0lBSTFDLGlFQUFpRTtJQUNqRSx1SEFBdUg7SUFDdkgsOEJBQThCO0lBQzlCLDhDQUE4QztJQUM5QyxNQUFNLENBQUNDLGVBQWVDLFNBQVMsR0FBR1AsK0NBQVFBLENBQWdCO0lBRTFELFNBQVNRLGtCQUFrQkMsRUFBVTtRQUNuQ0YsU0FBU0U7SUFDWDtJQUNBLE1BQU1DLGNBQWNOLEtBQUtPLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJSCxFQUFFLEtBQUtIO0lBQ2xELE1BQU1PLGVBQWVULEtBQUtVLE1BQU07SUFFaEMsU0FBU0Msa0JBQWtCTixFQUFVO1FBQ25DLE1BQU1PLHlCQUF5QlosS0FBS2EsTUFBTSxDQUFDLENBQUNMLE1BQVFBLElBQUlILEVBQUUsS0FBS0E7UUFDL0RTLFlBQVlGO1FBQ1pULFNBQVM7SUFDWDtJQUNBLFNBQVNZLGNBQWNDLEtBQWEsRUFBRUMsTUFBd0I7UUFDNURILFlBQVksQ0FBQ0ksT0FDWEEsS0FBS0MsR0FBRyxDQUFDLENBQUNYLE1BQVNBLElBQUlILEVBQUUsS0FBS1csUUFBUTtvQkFBRSxHQUFHQyxNQUFNO29CQUFFWixJQUFJVztnQkFBTSxJQUFJUjtJQUVyRTtJQUNBLFNBQVNZLGFBQWFILE1BQXdCO1FBQzVDeEIsd0RBQU1BLENBQUN3QjtJQUNQLDhFQUE4RTtJQUNoRjtJQUNBLHFCQUNFLDhEQUFDcEIsWUFBWXdCLFFBQVE7UUFDbkJDLE9BQU87WUFDTHRCO1lBQ0FFO1lBQ0FFO1lBQ0FFO1lBQ0FHO1lBQ0FFO1lBQ0FTO1lBQ0FMO1FBQ0Y7a0JBRUNkOzs7Ozs7QUFHUDtHQTlDd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udGV4dC9QZXRzQ29udGV4dC50c3g/NGQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgYWRkUGV0IH0gZnJvbSBcIkAvYWN0aW9ucy9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFRQZXQsIFRSZWFjdE5vZGUgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFRQZXRzQ29udGV4dFByb3ZpZGUgPSB7XHJcbiAgZGF0YTogVFBldFtdO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn07XHJcbnR5cGUgVFBldHNDb250ZXggPSB7XHJcbiAgcGV0czogVFBldFtdO1xyXG4gIHNlbGVjdGVkUGV0SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgaGFuZGxlQ2hhbmdlUGV0SWQ6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUNoZWNrb3V0UGV0OiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICBoYW5kbGVBZGRQZXQ6IChuZXdQZXQ6IE9taXQ8VFBldCwgXCJpZFwiPikgPT4gdm9pZDtcclxuICBoYW5kbGVFZGl0UGV0OiAocGV0SWQ6IHN0cmluZywgbmV3UGV0OiBPbWl0PFRQZXQsIFwiaWRcIj4pID0+IHZvaWQ7XHJcbiAgc2VsZWN0ZWRQZXQ6IFRQZXQgfCB1bmRlZmluZWQ7XHJcbiAgbnVtYmVyT2ZQZXJzOiBudW1iZXI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGV0c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRQZXRzQ29udGV4IHwgbnVsbD4obnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXRzQ29udGV4dFByb3ZpZGVyKHtcclxuICBkYXRhOiBwZXRzLFxyXG4gIGNoaWxkcmVuLFxyXG59OiBUUGV0c0NvbnRleHRQcm92aWRlKSB7XHJcbiAgLy8g0L/QvtGB0LvQtSByZXZhbGlkYXRlUGF0aChcIi9hcHAvZGFzaGJvYXJkXCIsIFwibGF5b3V0XCIpOyDQsiBhY3Rpb25zLnRzXHJcbiAgLy/QsiBEYXRhINC/0YDQuNGF0L7QtNGP0YIg0L3QvtCy0ZbQtSDQtNCw0L3QvdGW0LUg0L/QviDQt9Cw0L/RgNC+0YHRgyAuINCd0L4g0L/QvtGB0LrQvtC70YzQutC+IHVzZVN0YXRlINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10YLRgdGPINC+0LTQuNC9INGA0LDQtyDQvdC+0LLRltC1INC00LDQvdC90ZbQtSDQvtC9INC90LUg0L/QvtC70YPRh9Cw0LXRglxyXG4gIC8vINC/0L7RlNGC0L7QvNGDINC40YHQv9C+0LvRjNGD0LXQvCDRgdCw0LzRgyDQtNCw0YLRg1xyXG4gIC8vIGNvbnN0IFtwZXRzLCBzZXRQZXRzRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQZXRJZCwgc2V0UGV0SWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVBldElkKGlkOiBzdHJpbmcpIHtcclxuICAgIHNldFBldElkKGlkKTtcclxuICB9XHJcbiAgY29uc3Qgc2VsZWN0ZWRQZXQgPSBwZXRzLmZpbmQoKHBldCkgPT4gcGV0LmlkID09PSBzZWxlY3RlZFBldElkKTtcclxuICBjb25zdCBudW1iZXJPZlBlcnMgPSBwZXRzLmxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tvdXRQZXQoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgZmlsdGVyZWRXaXRoTmlQZXRBcnJheSA9IHBldHMuZmlsdGVyKChwZXQpID0+IHBldC5pZCAhPT0gaWQpO1xyXG4gICAgc2V0UGV0c0RhdGEoZmlsdGVyZWRXaXRoTmlQZXRBcnJheSk7XHJcbiAgICBzZXRQZXRJZChudWxsKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaGFuZGxlRWRpdFBldChwZXRJZDogc3RyaW5nLCBuZXdQZXQ6IE9taXQ8VFBldCwgXCJpZFwiPikge1xyXG4gICAgc2V0UGV0c0RhdGEoKHByZXYpID0+XHJcbiAgICAgIHByZXYubWFwKChwZXQpID0+IChwZXQuaWQgPT09IHBldElkID8geyAuLi5uZXdQZXQsIGlkOiBwZXRJZCB9IDogcGV0KSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFBldChuZXdQZXQ6IE9taXQ8VFBldCwgXCJpZFwiPikge1xyXG4gICAgYWRkUGV0KG5ld1BldCk7XHJcbiAgICAvLyBzZXRQZXRzRGF0YSgocHJldikgPT4gWy4uLnByZXYsIHsgLi4ubmV3UGV0LCBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpIH1dKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxQZXRzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHBldHMsXHJcbiAgICAgICAgc2VsZWN0ZWRQZXRJZCxcclxuICAgICAgICBoYW5kbGVDaGFuZ2VQZXRJZCxcclxuICAgICAgICBzZWxlY3RlZFBldCxcclxuICAgICAgICBudW1iZXJPZlBlcnMsXHJcbiAgICAgICAgaGFuZGxlQ2hlY2tvdXRQZXQsXHJcbiAgICAgICAgaGFuZGxlQWRkUGV0LFxyXG4gICAgICAgIGhhbmRsZUVkaXRQZXQsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUGV0c0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYWRkUGV0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJQZXRzQ29udGV4dCIsIlBldHNDb250ZXh0UHJvdmlkZXIiLCJkYXRhIiwicGV0cyIsImNoaWxkcmVuIiwic2VsZWN0ZWRQZXRJZCIsInNldFBldElkIiwiaGFuZGxlQ2hhbmdlUGV0SWQiLCJpZCIsInNlbGVjdGVkUGV0IiwiZmluZCIsInBldCIsIm51bWJlck9mUGVycyIsImxlbmd0aCIsImhhbmRsZUNoZWNrb3V0UGV0IiwiZmlsdGVyZWRXaXRoTmlQZXRBcnJheSIsImZpbHRlciIsInNldFBldHNEYXRhIiwiaGFuZGxlRWRpdFBldCIsInBldElkIiwibmV3UGV0IiwicHJldiIsIm1hcCIsImhhbmRsZUFkZFBldCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/context/PetsContext.tsx\n"));

/***/ })

});