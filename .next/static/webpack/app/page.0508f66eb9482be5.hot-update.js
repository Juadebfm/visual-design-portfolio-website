"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/work/projectDetails.ts":
/*!***********************************************!*\
  !*** ./app/components/work/projectDetails.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: function() { return /* binding */ projects; }\n/* harmony export */ });\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/si */ \"(app-pages-browser)/./node_modules/react-icons/si/index.esm.js\");\n\nconst projects = [\n    {\n        id: 0,\n        name: \"BusinessDay FX Website\",\n        description: \"This is a FX Exchange, market-data and market news website, a subsidiary of Bussiness Day Nigeria.\",\n        technologies: [\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiTypescript,\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiReact,\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiNextdotjs,\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiTailwindcss,\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiFramer\n        ],\n        techNames: [\n            \"TypeScript\",\n            \"React\",\n            \"Next.js\",\n            \"Tailwind CSS\",\n            \"Framer Motion\"\n        ],\n        techLinks: [\n            \"https://www.typescriptlang.org/\",\n            \"https://reactjs.org/\",\n            \"https://nextjs.org/\",\n            \"https://tailwindcss.com/\",\n            \"https://www.framer.com/motion/\"\n        ],\n        github: \"https://github.com/Juadebfm/bdfx.git\",\n        demo: \"bdfx-b6kl.vercel.app/\",\n        image: \"/projects/bsd.png\",\n        available: true\n    },\n    {\n        id: 1,\n        name: \"BMT X SCFN\",\n        description: \"This project was built as a collaborative effort with the Trestlestack Team including myself (Frontend), Yusuf Adebayo (Product Designer), Martins ****(Project Manager & Backend), and Mr Cyril Okeleke (Admin Dashboard)\",\n        technologies: [\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiTypescript,\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiReact,\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiNextdotjs,\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiTailwindcss,\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiFramer\n        ],\n        techNames: [\n            \"TypeScript\",\n            \"React\",\n            \"Next.js\",\n            \"Tailwind CSS\",\n            \"Framer Motion\"\n        ],\n        techLinks: [\n            \"https://www.typescriptlang.org/\",\n            \"https://reactjs.org/\",\n            \"https://nextjs.org/\",\n            \"https://tailwindcss.com/\",\n            \"https://www.framer.com/motion/\"\n        ],\n        github: \"https://github.com/Juadebfm/bmt.git\",\n        demo: \"https://scfn-luth-transplant.sicklecellfoundation.com/\",\n        image: \"/projects/B.png\",\n        available: true\n    },\n    {\n        id: 2,\n        name: \"Coming Soon\",\n        description: \"I'm currently working on a couple of projects. I'll update this section as soon as I'm done.\",\n        technologies: [\n            react_icons_si__WEBPACK_IMPORTED_MODULE_0__.SiZig\n        ],\n        techNames: [\n            \"Zig\"\n        ],\n        techLinks: [\n            \"https://www.ziglang.org/\"\n        ],\n        github: \"https://github.com/nuIIpointerexception/\",\n        demo: \"https://github.com/nuIIpointerexception/\",\n        image: \"/projects/construction.webp\",\n        available: false\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3dvcmsvcHJvamVjdERldGFpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFjd0I7QUFnQmpCLE1BQU1NLFdBQVc7SUFDdEI7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQ0U7UUFDRkMsY0FBYztZQUFDTix3REFBWUE7WUFBRUYsbURBQU9BO1lBQUVELHVEQUFXQTtZQUFFRSx5REFBYUE7WUFBRUgsb0RBQVFBO1NBQUM7UUFDM0VXLFdBQVc7WUFDVDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsV0FBVztZQUNUO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxXQUFXO0lBQ2I7SUFDQTtRQUNFVCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxjQUFjO1lBQUNOLHdEQUFZQTtZQUFFRixtREFBT0E7WUFBRUQsdURBQVdBO1lBQUVFLHlEQUFhQTtZQUFFSCxvREFBUUE7U0FBQztRQUMzRVcsV0FBVztZQUNUO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtRQUNEQyxXQUFXO1lBQ1Q7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO1FBQ0RDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFdBQVc7SUFDYjtJQUVBO1FBQ0VULElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUNFO1FBQ0ZDLGNBQWM7WUFBQ0wsaURBQUtBO1NBQUM7UUFDckJNLFdBQVc7WUFBQztTQUFNO1FBQ2xCQyxXQUFXO1lBQUM7U0FBMkI7UUFDdkNDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFdBQVc7SUFDYjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvd29yay9wcm9qZWN0RGV0YWlscy50cz8yMDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNpSmF2YXNjcmlwdCxcbiAgU2lIdG1sNSxcbiAgU2lDc3MzLFxuICBTaUZpZ21hLFxuICBTaUZyYW1lcixcbiAgU2lHaXRodWIsXG4gIFNpTmVvdmltLFxuICBTaU5leHRkb3RqcyxcbiAgU2lSZWFjdCxcbiAgU2lSdXN0LFxuICBTaVRhaWx3aW5kY3NzLFxuICBTaVR5cGVzY3JpcHQsXG4gIFNpWmlnLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcInJlYWN0LWljb25zXCI7XG5cbmV4cG9ydCB0eXBlIFByb2plY3RQcm9wcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICB0ZWNobm9sb2dpZXM6IEljb25UeXBlW107XG4gIHRlY2hOYW1lczogc3RyaW5nW107XG4gIHRlY2hMaW5rczogc3RyaW5nW107XG4gIGdpdGh1Yjogc3RyaW5nO1xuICBkZW1vOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGF2YWlsYWJsZTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6IFwiQnVzaW5lc3NEYXkgRlggV2Vic2l0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIGEgRlggRXhjaGFuZ2UsIG1hcmtldC1kYXRhIGFuZCBtYXJrZXQgbmV3cyB3ZWJzaXRlLCBhIHN1YnNpZGlhcnkgb2YgQnVzc2luZXNzIERheSBOaWdlcmlhLlwiLFxuICAgIHRlY2hub2xvZ2llczogW1NpVHlwZXNjcmlwdCwgU2lSZWFjdCwgU2lOZXh0ZG90anMsIFNpVGFpbHdpbmRjc3MsIFNpRnJhbWVyXSxcbiAgICB0ZWNoTmFtZXM6IFtcbiAgICAgIFwiVHlwZVNjcmlwdFwiLFxuICAgICAgXCJSZWFjdFwiLFxuICAgICAgXCJOZXh0LmpzXCIsXG4gICAgICBcIlRhaWx3aW5kIENTU1wiLFxuICAgICAgXCJGcmFtZXIgTW90aW9uXCIsXG4gICAgXSxcbiAgICB0ZWNoTGlua3M6IFtcbiAgICAgIFwiaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL1wiLFxuICAgICAgXCJodHRwczovL3JlYWN0anMub3JnL1wiLFxuICAgICAgXCJodHRwczovL25leHRqcy5vcmcvXCIsXG4gICAgICBcImh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL1wiLFxuICAgICAgXCJodHRwczovL3d3dy5mcmFtZXIuY29tL21vdGlvbi9cIixcbiAgICBdLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vSnVhZGViZm0vYmRmeC5naXRcIixcbiAgICBkZW1vOiBcImJkZngtYjZrbC52ZXJjZWwuYXBwL1wiLFxuICAgIGltYWdlOiBcIi9wcm9qZWN0cy9ic2QucG5nXCIsXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJCTVQgWCBTQ0ZOXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgcHJvamVjdCB3YXMgYnVpbHQgYXMgYSBjb2xsYWJvcmF0aXZlIGVmZm9ydCB3aXRoIHRoZSBUcmVzdGxlc3RhY2sgVGVhbSBpbmNsdWRpbmcgbXlzZWxmIChGcm9udGVuZCksIFl1c3VmIEFkZWJheW8gKFByb2R1Y3QgRGVzaWduZXIpLCBNYXJ0aW5zICoqKiooUHJvamVjdCBNYW5hZ2VyICYgQmFja2VuZCksIGFuZCBNciBDeXJpbCBPa2VsZWtlIChBZG1pbiBEYXNoYm9hcmQpXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbU2lUeXBlc2NyaXB0LCBTaVJlYWN0LCBTaU5leHRkb3RqcywgU2lUYWlsd2luZGNzcywgU2lGcmFtZXJdLFxuICAgIHRlY2hOYW1lczogW1xuICAgICAgXCJUeXBlU2NyaXB0XCIsXG4gICAgICBcIlJlYWN0XCIsXG4gICAgICBcIk5leHQuanNcIixcbiAgICAgIFwiVGFpbHdpbmQgQ1NTXCIsXG4gICAgICBcIkZyYW1lciBNb3Rpb25cIixcbiAgICBdLFxuICAgIHRlY2hMaW5rczogW1xuICAgICAgXCJodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvXCIsXG4gICAgICBcImh0dHBzOi8vcmVhY3Rqcy5vcmcvXCIsXG4gICAgICBcImh0dHBzOi8vbmV4dGpzLm9yZy9cIixcbiAgICAgIFwiaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vXCIsXG4gICAgICBcImh0dHBzOi8vd3d3LmZyYW1lci5jb20vbW90aW9uL1wiLFxuICAgIF0sXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9KdWFkZWJmbS9ibXQuZ2l0XCIsXG4gICAgZGVtbzogXCJodHRwczovL3NjZm4tbHV0aC10cmFuc3BsYW50LnNpY2tsZWNlbGxmb3VuZGF0aW9uLmNvbS9cIixcbiAgICBpbWFnZTogXCIvcHJvamVjdHMvQi5wbmdcIixcbiAgICBhdmFpbGFibGU6IHRydWUsXG4gIH0sXG5cbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiQ29taW5nIFNvb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSdtIGN1cnJlbnRseSB3b3JraW5nIG9uIGEgY291cGxlIG9mIHByb2plY3RzLiBJJ2xsIHVwZGF0ZSB0aGlzIHNlY3Rpb24gYXMgc29vbiBhcyBJJ20gZG9uZS5cIixcbiAgICB0ZWNobm9sb2dpZXM6IFtTaVppZ10sXG4gICAgdGVjaE5hbWVzOiBbXCJaaWdcIl0sXG4gICAgdGVjaExpbmtzOiBbXCJodHRwczovL3d3dy56aWdsYW5nLm9yZy9cIl0sXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9udUlJcG9pbnRlcmV4Y2VwdGlvbi9cIixcbiAgICBkZW1vOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9udUlJcG9pbnRlcmV4Y2VwdGlvbi9cIixcbiAgICBpbWFnZTogXCIvcHJvamVjdHMvY29uc3RydWN0aW9uLndlYnBcIixcbiAgICBhdmFpbGFibGU6IGZhbHNlLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJTaUZyYW1lciIsIlNpTmV4dGRvdGpzIiwiU2lSZWFjdCIsIlNpVGFpbHdpbmRjc3MiLCJTaVR5cGVzY3JpcHQiLCJTaVppZyIsInByb2plY3RzIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ0ZWNobm9sb2dpZXMiLCJ0ZWNoTmFtZXMiLCJ0ZWNoTGlua3MiLCJnaXRodWIiLCJkZW1vIiwiaW1hZ2UiLCJhdmFpbGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/work/projectDetails.ts\n"));

/***/ })

});