/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generateJokes.js":
/*!******************************!*\
  !*** ./src/generateJokes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction display() {\n  btnSend.onclick = function () {\n    fetch('https://openlibrary.org/subjects/' + searchInput.value + '.json').then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      var _loop = function _loop(i) {\n        var separatore2 = document.createElement('div');\n        divOne.append(separatore2);\n        separatore2.setAttribute(\"class\", \"separator2\");\n        var container = document.createElement('div');\n        divOne.append(container);\n        container.setAttribute('class', 'container flex-column');\n        var cover = document.createElement('img');\n        cover.setAttribute('class', 'img-cover p-2');\n        cover.setAttribute('src', 'https://covers.openlibrary.org/b/id/' + response.works[i].cover_id + '-M.jpg');\n        container.append(cover);\n        var title = document.createElement('h2');\n        title.innerText = response.works[i].title;\n        container.append(title);\n        title.setAttribute('class', 'text-center');\n        var authors = document.createElement('h3');\n        authors.innerText = response.works[i].authors[0].name;\n        container.append(authors);\n        authors.setAttribute('class', 'text-center mt-1');\n        var btndisplay = document.createElement('button');\n        container.append(btndisplay);\n        btndisplay.setAttribute(\"class\", \"button\");\n        btndisplay.setAttribute(\"id\", \"button\");\n        btndisplay.textContent = \"leggi la descrizione\";\n        btndisplay.onclick = function (e) {\n          fetch('https://openlibrary.org' + response.works[i].key + '.json').then(function (response) {\n            return response.json();\n          }).then(function (response) {\n            var description = document.createElement(\"p\");\n            description.innerHTML = response.description;\n            authors.append(description);\n          });\n        };\n      };\n      for (var i = 0; i < 15; i++) {\n        _loop(i);\n      }\n    })[\"catch\"](function (error) {\n      // handle error\n      console.log(error);\n    }).then(function () {\n      // always executed\n    });\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://progetto/./src/generateJokes.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateJokes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateJokes */ \"./src/generateJokes.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\n\nconsole.log((0,_generateJokes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack://progetto/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ! Reset */\\nbody, html {\\n  font-family: \\\"Intro\\\", Arial, Helvetica, sans-serif;\\n  font-size: 16px;\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n*, *:before, *:after {\\n  box-sizing: border-box;\\n}\\n\\nh1, h2, h3, h4, h5, h6, p, ol, ul {\\n  margin: 0 0 1rem 0;\\n  padding: 0;\\n}\\n\\nol, ul {\\n  list-style-type: none;\\n}\\n\\nimg {\\n  height: auto;\\n}\\n\\nh1 {\\n  font-size: 4rem;\\n}\\n\\nh2 {\\n  font-size: 3rem;\\n}\\n\\nh3 {\\n  font-size: 2rem;\\n}\\n\\nh4 {\\n  font-size: 1rem;\\n}\\n\\nh5 {\\n  font-size: 0.8rem;\\n}\\n\\nh6 {\\n  font-size: 0.6rem;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n/* ! Grid System */\\n.grid {\\n  margin: 0 auto;\\n  padding: 0 15px;\\n  display: flex;\\n  flex-flow: column;\\n  flex-wrap: wrap;\\n}\\n\\n.grid--center {\\n  justify-content: center;\\n}\\n\\n.col {\\n  flex: 1;\\n}\\n\\n[class*=col-] {\\n  position: relative;\\n  padding: 0 15px;\\n}\\n\\n.grid .grid [class*=col-] {\\n  padding: 0px;\\n}\\n\\n.col-20 {\\n  width: 20%;\\n}\\n\\n.col-25 {\\n  width: 25%;\\n}\\n\\n.col-30 {\\n  width: 30%;\\n}\\n\\n.col-33 {\\n  width: 33.33%;\\n}\\n\\n.col-50 {\\n  width: 50%;\\n}\\n\\n.col-70 {\\n  width: 70%;\\n}\\n\\n.col-80 {\\n  width: 80%;\\n}\\n\\n.col-100 {\\n  width: 100%;\\n}\\n\\n@media (max-width: 991px) {\\n  .tab-20 {\\n    width: 20%;\\n  }\\n  .tab-25 {\\n    width: 25%;\\n  }\\n  .tab-33 {\\n    width: 33.33%;\\n  }\\n  .tab-50 {\\n    width: 50%;\\n  }\\n  .tab-100 {\\n    width: 100%;\\n  }\\n}\\n@media (max-width: 768px) {\\n  [class*=col-] {\\n    width: 100%;\\n  }\\n  .sma-20 {\\n    width: 20%;\\n  }\\n  .sma-25 {\\n    width: 25%;\\n  }\\n  .sma-33 {\\n    width: 33.33%;\\n  }\\n  .sma-50 {\\n    width: 50%;\\n  }\\n  .sma-100 {\\n    width: 100%;\\n  }\\n}\\n/* Menu */\\n:root {\\n  --menu-bg: #2C3D55;\\n  --menu-color: #fff;\\n}\\n\\n.header {\\n  background-color: var(--menu-bg);\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 9999;\\n  width: 100%;\\n  padding: 10px 15px;\\n}\\n\\n.header__content {\\n  max-width: 1200px;\\n  width: 100%;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.header__logo,\\n.header__quick {\\n  display: flex;\\n  align-items: center;\\n  color: var(--menu-color);\\n}\\n\\n.header__menu {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.header__menu li {\\n  display: inline-block;\\n}\\n\\n.header__menu li a {\\n  color: var(--menu-color);\\n  opacity: 0.8;\\n  display: block;\\n  padding: 16px;\\n  font-size: 15px;\\n}\\n\\n@media (max-width: 768px) {\\n  .header__menu {\\n    position: absolute;\\n    top: 60px;\\n    left: 0;\\n    background-color: var(--menu-bg);\\n    width: 100%;\\n    height: 100vh;\\n    height: 0vh;\\n    overflow: hidden;\\n    transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);\\n  }\\n  .header__menu li {\\n    width: 100%;\\n    border-bottom: 1px solid #444;\\n  }\\n  .menu-open .header__menu {\\n    height: 100vh;\\n    padding: 3%;\\n  }\\n  .icon-hamburger {\\n    height: 50px;\\n    width: 40px;\\n    margin-left: 20px;\\n    padding-top: 5px;\\n  }\\n  .icon-hamburger span {\\n    height: 2px;\\n    width: 30px;\\n    background: var(--menu-color);\\n    position: relative;\\n    display: block;\\n    margin-top: 11px;\\n    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\\n  }\\n  .menu-open .icon-hamburger span:nth-child(1) {\\n    transform: rotate(45deg) translateY(9px);\\n  }\\n  .menu-open .icon-hamburger span:nth-child(2) {\\n    transform: rotate(-45deg) translateY(-9px);\\n  }\\n  .header__quick {\\n    display: flex;\\n    justify-content: flex-end;\\n    width: 50%;\\n  }\\n}\\n/* ! Title System */\\nh1, .text-1 {\\n  font-size: 3.5rem;\\n  margin-bottom: 0.5rem;\\n}\\n\\nh2, .text-2 {\\n  font-size: 2.4rem;\\n  margin-bottom: 1rem;\\n}\\n\\nh3, .text-3 {\\n  font-size: 1.8rem;\\n}\\n\\nh4, p, .text-4 {\\n  font-size: 1rem;\\n  margin-bottom: 1rem;\\n  line-height: 1.5;\\n}\\n\\na {\\n  color: #fffffe;\\n}\\n\\n.button {\\n  font-size: 1rem;\\n  text-transform: uppercase;\\n  background: #333;\\n  color: #fff;\\n  text-decoration: none;\\n  padding: 14px 25px;\\n  display: inline-block;\\n  border-radius: 4px;\\n  font-weight: 700;\\n  width: 50%;\\n  margin: 0 auto;\\n}\\n\\n.button:hover {\\n  background: #444;\\n}\\n\\n.card {\\n  padding: 20px;\\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\\n  border-radius: 10px;\\n  overflow: hidden;\\n  margin: 0 15px 30px 15px;\\n  min-height: 450px;\\n}\\n\\n.card__img {\\n  min-height: 200px;\\n  display: block;\\n  background-position: center center;\\n  background-size: cover;\\n  margin: -20px -20px 20px -20px;\\n}\\n\\n/* ! Helpers  */\\n.mt-0 {\\n  margin-top: 0;\\n}\\n\\n.mt-1 {\\n  margin-top: 10px;\\n}\\n\\n.mt-2 {\\n  margin-top: 20px;\\n}\\n\\n.mt-3 {\\n  margin-top: 40px;\\n}\\n\\n.mt-4 {\\n  margin-top: 100px;\\n}\\n\\n.mb-0 {\\n  margin-bottom: 0;\\n}\\n\\n.mb-1 {\\n  margin-bottom: 10px;\\n}\\n\\n.mb-2 {\\n  margin-bottom: 20px;\\n}\\n\\n.mb-3 {\\n  margin-bottom: 40px;\\n}\\n\\n.mb-4 {\\n  margin-bottom: 100px;\\n}\\n\\n.p-0 {\\n  padding: 0;\\n}\\n\\n.p-1 {\\n  padding: 10px;\\n}\\n\\n.p-2 {\\n  padding: 20px;\\n}\\n\\n.p-3 {\\n  padding: 40px;\\n}\\n\\n.p-4 {\\n  padding: 100px;\\n}\\n\\n.pt-1 {\\n  padding-top: 10px;\\n}\\n\\n.pt-3 {\\n  padding-top: 20px;\\n}\\n\\n.pt-3 {\\n  padding-top: 40px;\\n}\\n\\n.pt-4 {\\n  padding-top: 15vh;\\n}\\n\\n.pb-1 {\\n  padding-bottom: 10px;\\n}\\n\\n.pb-2 {\\n  padding-bottom: 20px;\\n}\\n\\n.pb-3 {\\n  padding-bottom: 40px;\\n}\\n\\n.pb-4 {\\n  padding-bottom: 15vh;\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.align-center {\\n  margin: 1vh auto;\\n}\\n\\n.text-right {\\n  text-align: right;\\n}\\n\\n.text-left {\\n  text-align: left;\\n}\\n\\n.flex-row {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.flex-column {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.spacer {\\n  height: 7.7vh;\\n}\\n\\n.bg-black {\\n  background-color: #252525;\\n}\\n\\n.bg-sfondoMenu {\\n  background-color: #2C3D55;\\n}\\n\\n.bg-celeste {\\n  background-color: #abd1c6;\\n}\\n\\n.bg-bianco {\\n  background-color: #fffffe;\\n}\\n\\n.border-radius {\\n  border-radius: 10px;\\n}\\n\\n.img-res {\\n  width: 100%;\\n  height: auto;\\n  margin-bottom: 20px;\\n  vertical-align: middle;\\n}\\n\\n.heroSection {\\n  background-color: #536271;\\n  height: 40vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n#searchInput {\\n  /* height: 4vh;\\n  width: 12vw; */\\n  width: 320px;\\n  height: 45px;\\n  border: 1px solid #2C3D55;\\n  border-radius: 25px;\\n  margin-left: 30px;\\n  padding: 0px 10px;\\n  font-size: 17px;\\n}\\n\\n#btn-searchId {\\n  width: 50px;\\n  height: 25px;\\n  position: relative;\\n  top: 0px;\\n  left: -40px;\\n}\\n\\n.search-img {\\n  width: 25px;\\n  height: 25px;\\n  position: relative;\\n  top: 5px;\\n  left: -40px;\\n}\\n\\n.gridLibri {\\n  height: auto;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: flex-start;\\n  align-items: center;\\n}\\n\\n.separator {\\n  height: 40px;\\n}\\n\\n.container {\\n  display: flex;\\n  flex-direction: column;\\n  height: auto;\\n  width: 50%;\\n  justify-content: space-between;\\n}\\n\\n.img-cover {\\n  height: 60vh;\\n  width: 50%;\\n  margin: 0 auto;\\n}\\n\\n.separator2 {\\n  height: 2vh;\\n}\\n\\n@media (max-width: 768px) {\\n  .spacer {\\n    height: 8vh;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://progetto/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://progetto/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://progetto/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://progetto/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://progetto/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://progetto/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://progetto/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://progetto/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://progetto/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://progetto/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;