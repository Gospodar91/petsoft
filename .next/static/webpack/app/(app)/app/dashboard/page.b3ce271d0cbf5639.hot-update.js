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

/***/ "(app-pages-browser)/./src/app/context/PetsContext.tsx":
/*!*****************************************!*\
  !*** ./src/app/context/PetsContext.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PetsContext: function() { return /* binding */ PetsContext; },\n/* harmony export */   \"default\": function() { return /* binding */ PetsContextProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/actions */ \"(app-pages-browser)/./src/actions/actions.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* harmony import */ var _lib_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/validations */ \"(app-pages-browser)/./src/lib/validations.ts\");\n/* __next_internal_client_entry_do_not_use__ PetsContext,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst PetsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nfunction PetsContextProvider(param) {\n    let { data, children } = param;\n    _s();\n    // после revalidatePath(\"/app/dashboard\", \"layout\"); в actions.ts\n    //в Data приходят новіе данніе по запросу . Но посколько useState инициализируется один раз новіе данніе он не получает\n    // поєтому испольуем саму дату\n    // const [pets, setPetsData] = useState(data);\n    const [selectedPetId, setPetId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    /// оптимистичное обновление первій аргумент -(initialState) ,второй аргумент -функция\n    // Функця в качествет аргумента по сути имеет prevState для работы с ним .Второй-опитимичтичные данные которые нужно обновить UI\n    const [optimisticPets, setOptimisticPets] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useOptimistic)(data, (state, param)=>{\n        let { action, payload } = param;\n        switch(action){\n            case \"add\":\n                {\n                    return [\n                        ...state,\n                        payload\n                    ];\n                }\n            case \"remove\":\n                {\n                    return state.filter((pet)=>pet.id !== payload);\n                }\n            case \"edit\":\n                {\n                    return state.map((pet)=>{\n                        if (pet.id === payload.petId) {\n                            return {\n                                ...pet,\n                                ...payload.newPet\n                            };\n                        }\n                        return pet;\n                    });\n                }\n            default:\n                {\n                    return state;\n                }\n        }\n    });\n    async function handleAddPet(newPet) {\n        setOptimisticPets({\n            action: \"add\",\n            payload: newPet\n        });\n        const validatedPet = _lib_validations__WEBPACK_IMPORTED_MODULE_4__.petFormZodValidation.safeParse(newPet);\n        if (!validatedPet.success) {\n            return {\n                message: \"Something Wrong\"\n            };\n        }\n        //addPet(newPet) - Server action\n        const error = await (0,_actions_actions__WEBPACK_IMPORTED_MODULE_1__.addPet)(newPet);\n        if (error === null || error === void 0 ? void 0 : error.message) {\n            sonner__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);\n        }\n    }\n    function handleChangePetId(id) {\n        setPetId(id);\n    }\n    const selectedPet = optimisticPets.find((pet)=>pet.id === selectedPetId);\n    const numberOfPers = optimisticPets.length;\n    async function handleCheckoutPet(id) {\n        setOptimisticPets({\n            action: \"remove\",\n            payload: id\n        });\n        await (0,_actions_actions__WEBPACK_IMPORTED_MODULE_1__.deletePet)(id);\n        setPetId(null);\n    }\n    async function handleEditPet(petId, newPet) {\n        setOptimisticPets({\n            action: \"edit\",\n            payload: {\n                petId,\n                newPet\n            }\n        });\n        const error = await (0,_actions_actions__WEBPACK_IMPORTED_MODULE_1__.editPet)(petId, newPet);\n        if (error === null || error === void 0 ? void 0 : error.message) {\n            sonner__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PetsContext.Provider, {\n        value: {\n            pets: optimisticPets,\n            selectedPetId,\n            handleChangePetId,\n            selectedPet,\n            numberOfPers,\n            handleCheckoutPet,\n            handleAddPet,\n            handleEditPet\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Study\\\\petsoft\\\\src\\\\app\\\\context\\\\PetsContext.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_s(PetsContextProvider, \"396IJ32enEOiI0MggTX7bwgandk=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_2__.useOptimistic\n    ];\n});\n_c = PetsContextProvider;\nvar _c;\n$RefreshReg$(_c, \"PetsContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGV4dC9QZXRzQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrRDtBQUdPO0FBQ3ZDO0FBQzBCO0FBaUJsRCxNQUFNUyw0QkFBY0wsb0RBQWFBLENBQXFCLE1BQU07QUFFcEQsU0FBU00sb0JBQW9CLEtBR3RCO1FBSHNCLEVBQzFDQyxJQUFJLEVBQ0pDLFFBQVEsRUFDWSxHQUhzQjs7SUFJMUMsaUVBQWlFO0lBQ2pFLHVIQUF1SDtJQUN2SCw4QkFBOEI7SUFDOUIsOENBQThDO0lBQzlDLE1BQU0sQ0FBQ0MsZUFBZUMsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBZ0I7SUFDMUQsc0ZBQXNGO0lBQ3RGLGdJQUFnSTtJQUNoSSxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdYLG9EQUFhQSxDQUN2RE0sTUFDQSxDQUFDTTtZQUFPLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFO1FBQ3pCLE9BQVFEO1lBQ04sS0FBSztnQkFBTztvQkFDVixPQUFPOzJCQUFJRDt3QkFBT0U7cUJBQVE7Z0JBQzVCO1lBQ0EsS0FBSztnQkFBVTtvQkFDYixPQUFPRixNQUFNRyxNQUFNLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsRUFBRSxLQUFLSDtnQkFDMUM7WUFDQSxLQUFLO2dCQUFRO29CQUNYLE9BQU9GLE1BQU1NLEdBQUcsQ0FBQyxDQUFDRjt3QkFDaEIsSUFBSUEsSUFBSUMsRUFBRSxLQUFLSCxRQUFRSyxLQUFLLEVBQUU7NEJBQzVCLE9BQU87Z0NBQUUsR0FBR0gsR0FBRztnQ0FBRSxHQUFHRixRQUFRTSxNQUFNOzRCQUFDO3dCQUNyQzt3QkFDQSxPQUFPSjtvQkFDVDtnQkFDRjtZQUNBO2dCQUFTO29CQUNQLE9BQU9KO2dCQUNUO1FBQ0Y7SUFDRjtJQUdGLGVBQWVTLGFBQWFELE1BQXFCO1FBQy9DVCxrQkFBa0I7WUFBRUUsUUFBUTtZQUFPQyxTQUFTTTtRQUFPO1FBQ25ELE1BQU1FLGVBQWVuQixrRUFBb0JBLENBQUNvQixTQUFTLENBQUNIO1FBQ3BELElBQUksQ0FBQ0UsYUFBYUUsT0FBTyxFQUFFO1lBQ3pCLE9BQU87Z0JBQUVDLFNBQVM7WUFBa0I7UUFDdEM7UUFFQSxnQ0FBZ0M7UUFDaEMsTUFBTUMsUUFBUSxNQUFNL0Isd0RBQU1BLENBQUN5QjtRQUMzQixJQUFJTSxrQkFBQUEsNEJBQUFBLE1BQU9ELE9BQU8sRUFBRTtZQUNsQnZCLHlDQUFLQSxDQUFDd0IsS0FBSyxDQUFDQSxNQUFNRCxPQUFPO1FBQzNCO0lBQ0Y7SUFFQSxTQUFTRSxrQkFBa0JWLEVBQWE7UUFDdENSLFNBQVNRO0lBQ1g7SUFDQSxNQUFNVyxjQUFjbEIsZUFBZW1CLElBQUksQ0FBQyxDQUFDYixNQUFRQSxJQUFJQyxFQUFFLEtBQUtUO0lBQzVELE1BQU1zQixlQUFlcEIsZUFBZXFCLE1BQU07SUFFMUMsZUFBZUMsa0JBQWtCZixFQUFhO1FBQzVDTixrQkFBa0I7WUFBRUUsUUFBUTtZQUFVQyxTQUFTRztRQUFHO1FBQ2xELE1BQU1yQiwyREFBU0EsQ0FBQ3FCO1FBQ2hCUixTQUFTO0lBQ1g7SUFDQSxlQUFld0IsY0FBY2QsS0FBYSxFQUFFQyxNQUFxQjtRQUMvRFQsa0JBQWtCO1lBQUVFLFFBQVE7WUFBUUMsU0FBUztnQkFBRUs7Z0JBQU9DO1lBQU87UUFBRTtRQUMvRCxNQUFNTSxRQUFRLE1BQU03Qix5REFBT0EsQ0FBQ3NCLE9BQU9DO1FBQ25DLElBQUlNLGtCQUFBQSw0QkFBQUEsTUFBT0QsT0FBTyxFQUFFO1lBQ2xCdkIseUNBQUtBLENBQUN3QixLQUFLLENBQUNBLE1BQU1ELE9BQU87UUFDM0I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDckIsWUFBWThCLFFBQVE7UUFDbkJDLE9BQU87WUFDTEMsTUFBTTFCO1lBQ05GO1lBQ0FtQjtZQUNBQztZQUNBRTtZQUNBRTtZQUNBWDtZQUNBWTtRQUNGO2tCQUVDMUI7Ozs7OztBQUdQO0dBckZ3QkY7O1FBV3NCTCxnREFBYUE7OztLQVhuQ0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb250ZXh0L1BldHNDb250ZXh0LnRzeD80ZDZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBhZGRQZXQsIGRlbGV0ZVBldCwgZWRpdFBldCB9IGZyb20gXCJAL2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBQZXQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgVFBldEVzc2VudGlhbCwgVFJlYWN0Tm9kZSB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlT3B0aW1pc3RpYywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwic29ubmVyXCI7XHJcbmltcG9ydCB7IHBldEZvcm1ab2RWYWxpZGF0aW9uIH0gZnJvbSBcIkAvbGliL3ZhbGlkYXRpb25zXCI7XHJcblxyXG50eXBlIFRQZXRzQ29udGV4dFByb3ZpZGUgPSB7XHJcbiAgZGF0YTogUGV0W107XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufTtcclxudHlwZSBUUGV0c0NvbnRleCA9IHtcclxuICBwZXRzOiBQZXRbXTtcclxuICBzZWxlY3RlZFBldElkOiBzdHJpbmcgfCBudWxsO1xyXG4gIGhhbmRsZUNoYW5nZVBldElkOiAoaWQ6IFBldFtcImlkXCJdKSA9PiB2b2lkO1xyXG4gIGhhbmRsZUNoZWNrb3V0UGV0OiAoaWQ6IFBldFtcImlkXCJdKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gIGhhbmRsZUFkZFBldDogKG5ld1BldDogVFBldEVzc2VudGlhbCkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBoYW5kbGVFZGl0UGV0OiAocGV0SWQ6IFBldFtcImlkXCJdLCBuZXdQZXQ6IFRQZXRFc3NlbnRpYWwpID0+IFByb21pc2U8dm9pZD47XHJcbiAgc2VsZWN0ZWRQZXQ6IFBldCB8IHVuZGVmaW5lZDtcclxuICBudW1iZXJPZlBlcnM6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQZXRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VFBldHNDb250ZXggfCBudWxsPihudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBldHNDb250ZXh0UHJvdmlkZXIoe1xyXG4gIGRhdGEsXHJcbiAgY2hpbGRyZW4sXHJcbn06IFRQZXRzQ29udGV4dFByb3ZpZGUpIHtcclxuICAvLyDQv9C+0YHQu9C1IHJldmFsaWRhdGVQYXRoKFwiL2FwcC9kYXNoYm9hcmRcIiwgXCJsYXlvdXRcIik7INCyIGFjdGlvbnMudHNcclxuICAvL9CyIERhdGEg0L/RgNC40YXQvtC00Y/RgiDQvdC+0LLRltC1INC00LDQvdC90ZbQtSDQv9C+INC30LDQv9GA0L7RgdGDIC4g0J3QviDQv9C+0YHQutC+0LvRjNC60L4gdXNlU3RhdGUg0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXRgtGB0Y8g0L7QtNC40L0g0YDQsNC3INC90L7QstGW0LUg0LTQsNC90L3RltC1INC+0L0g0L3QtSDQv9C+0LvRg9GH0LDQtdGCXHJcbiAgLy8g0L/QvtGU0YLQvtC80YMg0LjRgdC/0L7Qu9GM0YPQtdC8INGB0LDQvNGDINC00LDRgtGDXHJcbiAgLy8gY29uc3QgW3BldHMsIHNldFBldHNEYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBldElkLCBzZXRQZXRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICAvLy8g0L7Qv9GC0LjQvNC40YHRgtC40YfQvdC+0LUg0L7QsdC90L7QstC70LXQvdC40LUg0L/QtdGA0LLRltC5INCw0YDQs9GD0LzQtdC90YIgLShpbml0aWFsU3RhdGUpICzQstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L3RgiAt0YTRg9C90LrRhtC40Y9cclxuICAvLyDQpNGD0L3QutGG0Y8g0LIg0LrQsNGH0LXRgdGC0LLQtdGCINCw0YDQs9GD0LzQtdC90YLQsCDQv9C+INGB0YPRgtC4INC40LzQtdC10YIgcHJldlN0YXRlINC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0L3QuNC8IC7QktGC0L7RgNC+0Lkt0L7Qv9C40YLQuNC80LjRh9GC0LjRh9C90YvQtSDQtNCw0L3QvdGL0LUg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQvtCx0L3QvtCy0LjRgtGMIFVJXHJcbiAgY29uc3QgW29wdGltaXN0aWNQZXRzLCBzZXRPcHRpbWlzdGljUGV0c10gPSB1c2VPcHRpbWlzdGljKFxyXG4gICAgZGF0YSxcclxuICAgIChzdGF0ZSwgeyBhY3Rpb24sIHBheWxvYWQgfSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgIGNhc2UgXCJhZGRcIjoge1xyXG4gICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgcGF5bG9hZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcigocGV0KSA9PiBwZXQuaWQgIT09IHBheWxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiZWRpdFwiOiB7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKChwZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBldC5pZCA9PT0gcGF5bG9hZC5wZXRJZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLnBldCwgLi4ucGF5bG9hZC5uZXdQZXQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGV0O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBZGRQZXQobmV3UGV0OiBUUGV0RXNzZW50aWFsKSB7XHJcbiAgICBzZXRPcHRpbWlzdGljUGV0cyh7IGFjdGlvbjogXCJhZGRcIiwgcGF5bG9hZDogbmV3UGV0IH0pO1xyXG4gICAgY29uc3QgdmFsaWRhdGVkUGV0ID0gcGV0Rm9ybVpvZFZhbGlkYXRpb24uc2FmZVBhcnNlKG5ld1BldCk7XHJcbiAgICBpZiAoIXZhbGlkYXRlZFBldC5zdWNjZXNzKSB7XHJcbiAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU29tZXRoaW5nIFdyb25nXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZFBldChuZXdQZXQpIC0gU2VydmVyIGFjdGlvblxyXG4gICAgY29uc3QgZXJyb3IgPSBhd2FpdCBhZGRQZXQobmV3UGV0KTtcclxuICAgIGlmIChlcnJvcj8ubWVzc2FnZSkge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVBldElkKGlkOiBQZXRbXCJpZFwiXSkge1xyXG4gICAgc2V0UGV0SWQoaWQpO1xyXG4gIH1cclxuICBjb25zdCBzZWxlY3RlZFBldCA9IG9wdGltaXN0aWNQZXRzLmZpbmQoKHBldCkgPT4gcGV0LmlkID09PSBzZWxlY3RlZFBldElkKTtcclxuICBjb25zdCBudW1iZXJPZlBlcnMgPSBvcHRpbWlzdGljUGV0cy5sZW5ndGg7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoZWNrb3V0UGV0KGlkOiBQZXRbXCJpZFwiXSkge1xyXG4gICAgc2V0T3B0aW1pc3RpY1BldHMoeyBhY3Rpb246IFwicmVtb3ZlXCIsIHBheWxvYWQ6IGlkIH0pO1xyXG4gICAgYXdhaXQgZGVsZXRlUGV0KGlkKTtcclxuICAgIHNldFBldElkKG51bGwpO1xyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVFZGl0UGV0KHBldElkOiBzdHJpbmcsIG5ld1BldDogVFBldEVzc2VudGlhbCkge1xyXG4gICAgc2V0T3B0aW1pc3RpY1BldHMoeyBhY3Rpb246IFwiZWRpdFwiLCBwYXlsb2FkOiB7IHBldElkLCBuZXdQZXQgfSB9KTtcclxuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgZWRpdFBldChwZXRJZCwgbmV3UGV0KTtcclxuICAgIGlmIChlcnJvcj8ubWVzc2FnZSkge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGV0c0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBwZXRzOiBvcHRpbWlzdGljUGV0cyxcclxuICAgICAgICBzZWxlY3RlZFBldElkLFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZVBldElkLFxyXG4gICAgICAgIHNlbGVjdGVkUGV0LFxyXG4gICAgICAgIG51bWJlck9mUGVycyxcclxuICAgICAgICBoYW5kbGVDaGVja291dFBldCxcclxuICAgICAgICBoYW5kbGVBZGRQZXQsXHJcbiAgICAgICAgaGFuZGxlRWRpdFBldCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9QZXRzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJhZGRQZXQiLCJkZWxldGVQZXQiLCJlZGl0UGV0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlT3B0aW1pc3RpYyIsInVzZVN0YXRlIiwidG9hc3QiLCJwZXRGb3JtWm9kVmFsaWRhdGlvbiIsIlBldHNDb250ZXh0IiwiUGV0c0NvbnRleHRQcm92aWRlciIsImRhdGEiLCJjaGlsZHJlbiIsInNlbGVjdGVkUGV0SWQiLCJzZXRQZXRJZCIsIm9wdGltaXN0aWNQZXRzIiwic2V0T3B0aW1pc3RpY1BldHMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmaWx0ZXIiLCJwZXQiLCJpZCIsIm1hcCIsInBldElkIiwibmV3UGV0IiwiaGFuZGxlQWRkUGV0IiwidmFsaWRhdGVkUGV0Iiwic2FmZVBhcnNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnJvciIsImhhbmRsZUNoYW5nZVBldElkIiwic2VsZWN0ZWRQZXQiLCJmaW5kIiwibnVtYmVyT2ZQZXJzIiwibGVuZ3RoIiwiaGFuZGxlQ2hlY2tvdXRQZXQiLCJoYW5kbGVFZGl0UGV0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInBldHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/context/PetsContext.tsx\n"));

/***/ })

});