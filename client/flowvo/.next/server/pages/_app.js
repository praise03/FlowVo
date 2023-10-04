/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.js":
/*!*************************************!*\
  !*** ./src/contexts/AuthContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @onflow/fcl */ \"@onflow/fcl\");\n/* harmony import */ var _onflow_fcl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// import { checkIsInitialized, IS_INITIALIZED } from \"../flow/scripts\";\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AuthContext);\nfunction AuthProvider({ children }) {\n    // Create a state variable to keep track of the currentUser\n    const [currentUser, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        loggedIn: false,\n        addr: undefined\n    });\n    // Create a state variable to represent if a user's account\n    // has been initialized or not\n    // const [isInitialized, setIsInitialized] = useState(false);\n    // Use FCL to subscribe to changes in the user (login, logout, etc)\n    // Tell FCL to call `setUser` and update our state variables\n    // if anything changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>_onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.currentUser.subscribe(setUser), []);\n    // If currentUser is set, i.e. user is logged in\n    // check whether their account is initialized or not\n    // useEffect(() => {\n    //   if (currentUser.addr) {\n    //     checkInit();\n    //   }\n    // }, [currentUser]);\n    // Helper function to log the user out of the dApp\n    const logOut = async ()=>{\n        _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.unauthenticate();\n        setUser({\n            loggedIn: false,\n            addr: undefined\n        });\n    };\n    // Helper function to log the user in to the dApp\n    // p.s. this feels even easier than RainbowKit, eh?\n    const logIn = ()=>{\n        _onflow_fcl__WEBPACK_IMPORTED_MODULE_1__.logIn();\n    };\n    // Use the `checkIsInitialized` script we wrote earlier\n    // and update the state variable as necessary\n    // const checkInit = async () => {\n    //   const isInit = await checkIsInitialized(currentUser.addr);\n    //   setIsInitialized(isInit);\n    // };\n    // Build the object of everything we want to expose through \n    // the context\n    const value = {\n        currentUser,\n        logOut,\n        logIn\n    };\n    // Return the Context Provider with the value set\n    // Render all children of the component inside of it\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\web3\\\\Flow\\\\FlowVo\\\\client\\\\flowvo\\\\src\\\\contexts\\\\AuthContext.js\",\n        lineNumber: 62,\n        columnNumber: 12\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNvQztBQUN2RSx3RUFBd0U7QUFFakUsTUFBTUssNEJBQWNKLG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUV0QyxNQUFNSyxVQUFVLElBQU1KLGlEQUFVQSxDQUFDRyxhQUFhO0FBRXRDLFNBQVNFLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBRTdDLDJEQUEyRDtJQUMzRCxNQUFNLENBQUNDLGFBQWFDLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7UUFDdENPLFVBQVU7UUFDVkMsTUFBTUM7SUFDUjtJQUNBLDJEQUEyRDtJQUMzRCw4QkFBOEI7SUFDOUIsNkRBQTZEO0lBRTdELG1FQUFtRTtJQUNuRSw0REFBNEQ7SUFDNUQsc0JBQXNCO0lBQ3RCVixnREFBU0EsQ0FBQyxJQUFNSCxvREFBZSxDQUFDYyxTQUFTLENBQUNKLFVBQVUsRUFBRTtJQUV0RCxnREFBZ0Q7SUFDaEQsb0RBQW9EO0lBQ3BELG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixxQkFBcUI7SUFFckIsa0RBQWtEO0lBQ2xELE1BQU1LLFNBQVM7UUFDYmYsdURBQWtCO1FBQ2xCVSxRQUFRO1lBQUVDLFVBQVU7WUFBT0MsTUFBTUM7UUFBVTtJQUM3QztJQUVBLGlEQUFpRDtJQUNqRCxtREFBbUQ7SUFDbkQsTUFBTUksUUFBUTtRQUNaakIsOENBQVM7SUFDWDtJQUVBLHVEQUF1RDtJQUN2RCw2Q0FBNkM7SUFDN0Msa0NBQWtDO0lBQ2xDLCtEQUErRDtJQUMvRCw4QkFBOEI7SUFDOUIsS0FBSztJQUVMLDREQUE0RDtJQUM1RCxjQUFjO0lBQ2QsTUFBTWtCLFFBQVE7UUFDWlQ7UUFDQU07UUFDQUU7SUFDRjtJQUVBLGlEQUFpRDtJQUNqRCxvREFBb0Q7SUFDcEQscUJBQU8sOERBQUNaLFlBQVljLFFBQVE7UUFBQ0QsT0FBT0E7a0JBQVFWOzs7Ozs7QUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG93dm8vLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQuanM/Nzg3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmY2wgZnJvbSBcIkBvbmZsb3cvZmNsXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgY2hlY2tJc0luaXRpYWxpemVkLCBJU19JTklUSUFMSVpFRCB9IGZyb20gXCIuLi9mbG93L3NjcmlwdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBzdGF0ZSB2YXJpYWJsZSB0byBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50VXNlclxyXG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgbG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICBhZGRyOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuICAgIC8vIENyZWF0ZSBhIHN0YXRlIHZhcmlhYmxlIHRvIHJlcHJlc2VudCBpZiBhIHVzZXIncyBhY2NvdW50XHJcbiAgICAvLyBoYXMgYmVlbiBpbml0aWFsaXplZCBvciBub3RcclxuICAgIC8vIGNvbnN0IFtpc0luaXRpYWxpemVkLCBzZXRJc0luaXRpYWxpemVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICAgIC8vIFVzZSBGQ0wgdG8gc3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIHVzZXIgKGxvZ2luLCBsb2dvdXQsIGV0YylcclxuICAgIC8vIFRlbGwgRkNMIHRvIGNhbGwgYHNldFVzZXJgIGFuZCB1cGRhdGUgb3VyIHN0YXRlIHZhcmlhYmxlc1xyXG4gICAgLy8gaWYgYW55dGhpbmcgY2hhbmdlc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IGZjbC5jdXJyZW50VXNlci5zdWJzY3JpYmUoc2V0VXNlciksIFtdKTtcclxuICBcclxuICAgIC8vIElmIGN1cnJlbnRVc2VyIGlzIHNldCwgaS5lLiB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGVpciBhY2NvdW50IGlzIGluaXRpYWxpemVkIG9yIG5vdFxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgaWYgKGN1cnJlbnRVc2VyLmFkZHIpIHtcclxuICAgIC8vICAgICBjaGVja0luaXQoKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSwgW2N1cnJlbnRVc2VyXSk7XHJcbiAgXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gbG9nIHRoZSB1c2VyIG91dCBvZiB0aGUgZEFwcFxyXG4gICAgY29uc3QgbG9nT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmY2wudW5hdXRoZW50aWNhdGUoKTtcclxuICAgICAgc2V0VXNlcih7IGxvZ2dlZEluOiBmYWxzZSwgYWRkcjogdW5kZWZpbmVkIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBsb2cgdGhlIHVzZXIgaW4gdG8gdGhlIGRBcHBcclxuICAgIC8vIHAucy4gdGhpcyBmZWVscyBldmVuIGVhc2llciB0aGFuIFJhaW5ib3dLaXQsIGVoP1xyXG4gICAgY29uc3QgbG9nSW4gPSAoKSA9PiB7XHJcbiAgICAgIGZjbC5sb2dJbigpO1xyXG4gICAgfTtcclxuICBcclxuICAgIC8vIFVzZSB0aGUgYGNoZWNrSXNJbml0aWFsaXplZGAgc2NyaXB0IHdlIHdyb3RlIGVhcmxpZXJcclxuICAgIC8vIGFuZCB1cGRhdGUgdGhlIHN0YXRlIHZhcmlhYmxlIGFzIG5lY2Vzc2FyeVxyXG4gICAgLy8gY29uc3QgY2hlY2tJbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCBpc0luaXQgPSBhd2FpdCBjaGVja0lzSW5pdGlhbGl6ZWQoY3VycmVudFVzZXIuYWRkcik7XHJcbiAgICAvLyAgIHNldElzSW5pdGlhbGl6ZWQoaXNJbml0KTtcclxuICAgIC8vIH07XHJcbiAgXHJcbiAgICAvLyBCdWlsZCB0aGUgb2JqZWN0IG9mIGV2ZXJ5dGhpbmcgd2Ugd2FudCB0byBleHBvc2UgdGhyb3VnaCBcclxuICAgIC8vIHRoZSBjb250ZXh0XHJcbiAgICBjb25zdCB2YWx1ZSA9IHtcclxuICAgICAgY3VycmVudFVzZXIsXHJcbiAgICAgIGxvZ091dCxcclxuICAgICAgbG9nSW4sXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgLy8gUmV0dXJuIHRoZSBDb250ZXh0IFByb3ZpZGVyIHdpdGggdGhlIHZhbHVlIHNldFxyXG4gICAgLy8gUmVuZGVyIGFsbCBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50IGluc2lkZSBvZiBpdFxyXG4gICAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcclxuICB9Il0sIm5hbWVzIjpbImZjbCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsInVzZUF1dGgiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRVc2VyIiwic2V0VXNlciIsImxvZ2dlZEluIiwiYWRkciIsInVuZGVmaW5lZCIsInN1YnNjcmliZSIsImxvZ091dCIsInVuYXV0aGVudGljYXRlIiwibG9nSW4iLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\web3\\\\Flow\\\\FlowVo\\\\client\\\\flowvo\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\web3\\\\Flow\\\\FlowVo\\\\client\\\\flowvo\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBRWQsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsNkRBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvd3ZvLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@onflow/fcl":
/*!******************************!*\
  !*** external "@onflow/fcl" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@onflow/fcl");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();