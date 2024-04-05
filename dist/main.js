/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

:root {
    background: #222;
    font-size: 18px;
}

.container {
    background: #888;
    margin: 0 auto;
    min-height: 100vh;
    width: min(95%, 1280px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
}

h1 {
    letter-spacing: 0.1rem;
    text-align: center;
    margin-top: 0.5rem;
}

.marquee {
    padding: 0.35rem;
    color: #222;
    background: lightyellow;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    box-shadow: inset 2px 2px 4px #555,
                inset -2px -2px 4px lightgray;
    width: 400px;
    height: 4rem;
    font-size: 1.2rem;
}

.button#start {
    padding: 4px 6px;
    border-radius: 6px;
    background: #fff;
    border: 1px solid black;
}

.boards-container {
    background: inherit;
    width: min(96%, 890px);
    display: grid;
    grid-template-columns: repeat(auto-fit, 420px);
    justify-content: center;
    gap: 0.75rem;
    padding: 0.25rem 0.75rem;
}

.board-container {
    border: 6px solid #222;
    border-radius: 5px;
    letter-spacing: 0.025rem;
}

.board-header {
    height: 40px;
    background: #e2e2e2;
    padding: 4px;
    font-size: 1.3rem;
    font-weight: bold;
    border-bottom: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.board {
    background: skyblue;
    height: 420px;
    display: flex;
    flex-wrap: wrap;
}

.cell {
    height: 10%;
    width: 10%;
    border: 1px dotted black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.marker {
    width: 60%;
    height: 60%;
    border-radius: 50%;
    box-shadow: 1px 1px 4px #444;
}

.log-container {
    background: #111;
    width: min(98%, 600px);
    height: 196px;
    border: 2px solid #eee;
    border-radius: 3px;
    letter-spacing: 0.025rem;
    margin-bottom: 0.25rem;
    display: grid;
    grid-template-rows: min-content 1fr;
}

.log-header {
    color: #fefefe;
    font-family: monospace;
    text-align: center;
    padding: 0.1rem;
    border-bottom: 1px solid #eee;
}

.log {
    color: hsl(313, 100%, 85%);
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    padding: 3px 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
}

.log-span {
    font-weight: bold;
}

.log-line-sunk {
  font-style: italic;
  color: yellow;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB;6CACyC;IACzC,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;IAC1B,8CAA8C;IAC9C,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n:root {\n    background: #222;\n    font-size: 18px;\n}\n\n.container {\n    background: #888;\n    margin: 0 auto;\n    min-height: 100vh;\n    width: min(95%, 1280px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.6rem;\n}\n\nh1 {\n    letter-spacing: 0.1rem;\n    text-align: center;\n    margin-top: 0.5rem;\n}\n\n.marquee {\n    padding: 0.35rem;\n    color: #222;\n    background: lightyellow;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 0.25rem;\n    box-shadow: inset 2px 2px 4px #555,\n                inset -2px -2px 4px lightgray;\n    width: 400px;\n    height: 4rem;\n    font-size: 1.2rem;\n}\n\n.button#start {\n    padding: 4px 6px;\n    border-radius: 6px;\n    background: #fff;\n    border: 1px solid black;\n}\n\n.boards-container {\n    background: inherit;\n    width: min(96%, 890px);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 420px);\n    justify-content: center;\n    gap: 0.75rem;\n    padding: 0.25rem 0.75rem;\n}\n\n.board-container {\n    border: 6px solid #222;\n    border-radius: 5px;\n    letter-spacing: 0.025rem;\n}\n\n.board-header {\n    height: 40px;\n    background: #e2e2e2;\n    padding: 4px;\n    font-size: 1.3rem;\n    font-weight: bold;\n    border-bottom: 3px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    background: skyblue;\n    height: 420px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.cell {\n    height: 10%;\n    width: 10%;\n    border: 1px dotted black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.marker {\n    width: 60%;\n    height: 60%;\n    border-radius: 50%;\n    box-shadow: 1px 1px 4px #444;\n}\n\n.log-container {\n    background: #111;\n    width: min(98%, 600px);\n    height: 196px;\n    border: 2px solid #eee;\n    border-radius: 3px;\n    letter-spacing: 0.025rem;\n    margin-bottom: 0.25rem;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.log-header {\n    color: #fefefe;\n    font-family: monospace;\n    text-align: center;\n    padding: 0.1rem;\n    border-bottom: 1px solid #eee;\n}\n\n.log {\n    color: hsl(313, 100%, 85%);\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 0.85rem;\n    padding: 3px 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n}\n\n.log-span {\n    font-weight: bold;\n}\n\n.log-line-sunk {\n  font-style: italic;\n  color: yellow;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/conversions.js":
/*!****************************!*\
  !*** ./src/conversions.js ***!
  \****************************/
/***/ ((module) => {

const cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const row = (rowCoord) => {
    if (rowCoord > 10 || rowCoord < 1) throw new Error('Out of bounds!')
    return rowCoord - 1;
}

const column = (columnCoord) => {
  const index = cols.indexOf(columnCoord);
  
  if (index > 9 || index < 0) throw new Error('Out of bounds!')
  return index
}

module.exports = { row, column, cols }

/***/ }),

/***/ "./src/display-helpers.js":
/*!********************************!*\
  !*** ./src/display-helpers.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { isOccupied } = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
const { cols, row, column } = __webpack_require__(/*! ./conversions */ "./src/conversions.js");
const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

function createDOMElement (element, classes, id) {
    const newElement = document.createElement(element);
    if (classes) classes.forEach(value => newElement.classList.add(value))
    if (id) newElement.setAttribute('id', id);

    return newElement;
}

const renderBoard = (id) => {
    const board = Gameboard().readBoard();
    const domBoard = createDOMElement('div', ['board'], id);
    board.forEach(boardRow => boardRow.forEach((cell, index) => {
        const newCell = createDOMElement('div', ['cell'])
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(boardRow) + 1;
        domBoard.appendChild(newCell);
    }));
    return domBoard
}

const renderCells = (gameboard, domBoard, color) => {
    const board = gameboard.readBoard();
    while (domBoard.firstChild) domBoard.removeChild(domBoard.lastChild);
    board.forEach(boardRow => boardRow.forEach((cell, index) => {
        const newCell = createDOMElement('div', ['cell'])
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(boardRow) + 1;
        if (isOccupied(cell)) {
            if (color) newCell.style.backgroundColor = color
            else newCell.style.backgroundColor = '#777';
        }
        if (cell === 'X') {
            const newMarker = createDOMElement('div', ['marker']);
            newMarker.dataset.column = cols[index];
            newMarker.dataset.row = board.indexOf(boardRow) + 1;
            newMarker.style.backgroundColor = 'rgb(255, 60, 20)';
            newCell.appendChild(newMarker);
        }
        if (cell === 'O') {
            const newMarker = createDOMElement('div', ['marker']);
            newMarker.dataset.column = cols[index];
            newMarker.dataset.row = board.indexOf(boardRow) + 1;
            newMarker.style.backgroundColor = '#eee';
            newCell.appendChild(newMarker);
        }
        domBoard.appendChild(newCell);
    }));
}

const addToLog = (player, cell, opponent, oppBoard, shipSunk, domLog) => {
    const attackedCell = oppBoard.readBoard()[row(cell[1])][column(cell[0])];

    const newLine = createDOMElement('p', ['log-line']);
    newLine.textContent = `${player.getName()} attacked ${cell.join(', ')} ... it's a `;
    const span = createDOMElement('span', ['log-span']);
    if (attackedCell === 'X') {
        span.textContent = 'HIT!';
        span.style.color = 'rgb(255, 60, 20)';
    } else if (attackedCell === 'O') {
        span.textContent = 'MISS!';
        span.style.color = '#eee'
    }
    newLine.appendChild(span)
    domLog.appendChild(newLine);
    if (shipSunk) {
        const sunkLine = createDOMElement('p', ['log-line-sunk'])
        sunkLine.textContent = `${opponent.getPossessive()} ${shipSunk} has been sunk!`;
        setTimeout(() => { domLog.appendChild(sunkLine)}, 150)   
    }
}

const changeMarquee = (textContent, domNode) => {
    const node = domNode;
    node.textContent = textContent;
    node.style.fontSize = '30px'
    return node;
}

module.exports = { createDOMElement, renderBoard, renderCells, addToLog, changeMarquee }

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { renderBoard, renderCells, addToLog, changeMarquee } = __webpack_require__(/*! ./display-helpers */ "./src/display-helpers.js");

const marquee = document.querySelector('.marquee')
const p1Container = document.getElementById('p1Container')
const p2Container = document.getElementById('p2Container')
const p1Header = document.getElementById('p1Header')
const p2Header = document.getElementById('p2Header')
const gamelog = document.querySelector('.log')
let p1Board;
let p2Board;

const Display = () => {  
    const renderBoards = () => {
        while (p1Container.contains(document.getElementById('p1'))) {
            p1Container.removeChild(document.getElementById('p1'));
        }
        p1Container.appendChild(renderBoard('p1'));
        while (p2Container.contains(document.getElementById('p2'))) {
            p2Container.removeChild(document.getElementById('p2'));
        }
        p2Container.appendChild(renderBoard('p2'));
        p1Header.textContent = 'You';
        p2Header.textContent = 'Computer';
        gamelog.textContent = '';
        p1Board = document.getElementById('p1');
        p2Board = document.getElementById('p2');
    }
    const startGame = () => {
        renderBoards();
        marquee.textContent = "You're up, Admiral! Choose a cell on your opponent's board to attack."
    }
    const p1UpdateBoard = (board) => renderCells(board, p1Board);
    const p2UpdateBoard = (board) => renderCells(board, p2Board, 'skyblue');
    const updateDisplay = (player, cell, opponent, oppBoard, shipSunk) => {
        changeMarquee(`${opponent.getPossessive()} turn`, marquee);
        setTimeout(() => {
            addToLog(player, cell, opponent, oppBoard, shipSunk, gamelog);
        }, 100);  
    }
    function gameOver(winner) { marquee.textContent = `Winner: ${winner.getName()}` }

    return { renderBoards, startGame, p1UpdateBoard, p2UpdateBoard, updateDisplay, gameOver }
}

module.exports = Display;


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js")
const { row, column } = __webpack_require__(/*! ./conversions */ "./src/conversions.js");
const { checkCollisions, isOccupied } = __webpack_require__ (/*! ./helpers */ "./src/helpers.js")

const Gameboard = () => {
  const board = [];
  (function createBoard() {
    for (let i = 0; i < 10; i++) {
      const newRow = [];
      for (let j = 0; j < 10; j++) {
        newRow.push(" ");
      }
      board.push(newRow);
    }
  })();

  const carrier = Ship('Carrier', 5);
  const battleship = Ship('Battleship', 4);
  const cruiser = Ship('Cruiser', 3);
  const submarine = Ship('Submarine', 3);
  const destroyer = Ship('Destroyer', 2);

  // For development use to test whether all ships are sunk
  
  const allShips = [carrier, battleship, cruiser, submarine, destroyer];
  const getAllShips = () => allShips;

  const allShipsSunk = () =>
    carrier.isSunk() && battleship.isSunk() && cruiser.isSunk() && submarine.isSunk() && destroyer.isSunk();

  const readBoard = () => board;

  function placeShip(ship, x, y, orientation) {
    let newShip;
    let colIndex = column(x);
    let rowIndex = row(y);

    switch (ship) {
      case 'Carrier':
        newShip = carrier;
        break;
      case 'Battleship':
        newShip = battleship;
        break;
      case 'Cruiser':
        newShip = cruiser;
        break;
      case 'Submarine':
        newShip = submarine;
        break;
      default:
        newShip = destroyer;
    }

    if (checkCollisions(board, x, y, orientation, newShip)) throw new Error('Ship Collision!')

    if(orientation === 'vertical') {
      for (let i = 1; i <= newShip.getShipLength(); i++) {
        board[rowIndex][colIndex] = newShip;
        rowIndex++;
      }
    } else {
      for (let i = 1; i <= newShip.getShipLength(); i++) {
        board[rowIndex][colIndex] = newShip;
        colIndex++;
      }
    }
  }

  function receiveAttack(x, y) {
    let sunkShip = null;
    const cell = board[row(y)][column(x)];
    if (cell === "X" || cell === "O") throw new Error('Cell already hit!')
    else if (isOccupied(cell)) {
      cell.hit();
      if (cell.isSunk()) sunkShip = cell.getName()
      board[row(y)][column(x)] = "X";
    } else board[row(y)][column(x)] = "O";
    
    return { cell: [x, y], sunkShip };
  }

  return { readBoard, receiveAttack, placeShip, allShipsSunk, getAllShips };
};

module.exports = Gameboard;


/***/ }),

/***/ "./src/gameplay.js":
/*!*************************!*\
  !*** ./src/gameplay.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Player = __webpack_require__(/*! ./player */ "./src/player.js");
const Display = __webpack_require__(/*! ./display */ "./src/display.js");
const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

function Game() {
  Display().startGame();
  const player1 = Player('You');
  const player2 = Player('Computer', true);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  let currentPlayer = player1;
  
  placeAllShips();     
  Display().p1UpdateBoard(p1Board);
  Display().p2UpdateBoard(p2Board);

  function isGameOver() {
    return p2Board.allShipsSunk() || p1Board.allShipsSunk();
  }

  const p1DisplayBoard = document.getElementById('p1');
  const p2DisplayBoard = document.getElementById('p2')

  p2DisplayBoard.addEventListener('click', (e) => {
    if (currentPlayer === player1 && !isGameOver()) {
        const cellAttacked = p2Board.receiveAttack(e.target.dataset.column, e.target.dataset.row);
        Display().p2UpdateBoard(p2Board);
        Display().updateDisplay(player1, cellAttacked.cell, player2, p2Board, cellAttacked.sunkShip);
        if (isGameOver()) {
            return Display().gameOver(player1)
        }
        currentPlayer = player2;
    } else {
        return null
    }
    setTimeout(() => {
        const choice = player2.randomAttack(p1Board);
        const computerAttack = p1Board.receiveAttack(choice[0], choice[1]);
        Display().p1UpdateBoard(p1Board);
        Display().updateDisplay(player2, computerAttack.cell, player1, p1Board, computerAttack.sunkShip);
        if (isGameOver()) {
            return Display().gameOver(player2);
        }
        currentPlayer = player1;
    }, 500)
  })

  function placeAllShips() {
    p1Board.placeShip('Destroyer', 'B', 2);
    p1Board.placeShip('Carrier', 'C', 9);
    p1Board.placeShip('Cruiser', 'A', 3, 'vertical');
    p1Board.placeShip('Battleship', 'F', 4, 'vertical');
    p1Board.placeShip('Submarine', 'H', 1, 'vertical');
    p2Board.placeShip('Destroyer', 'A', 2);
    p2Board.placeShip('Carrier', 'B', 10);
    p2Board.placeShip('Cruiser', 'J', 1, 'vertical');
    p2Board.placeShip('Battleship', 'E', 5, 'vertical');
    p2Board.placeShip('Submarine', 'H', 1, 'vertical');
  };
}

module.exports = Game;


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { row, column } = __webpack_require__(/*! ./conversions */ "./src/conversions.js")

function isOccupied(cell) {
  return typeof cell === 'object';
}

const checkCollisions = function checkForShipPlacementCollisions(board, x, y, orientation, ship) {
  const shipSlot = [];
  let colCheck = column(x);
  let rowCheck = row(y);

  if(orientation === 'vertical') {
    for (let i = 1; i <= ship.getShipLength; i++) {
      shipSlot.push(board[rowCheck][colCheck]);
      rowCheck++;
    }
  } else {
    for (let i = 1; i <= ship.getShipLength(); i++) {
      shipSlot.push(board[rowCheck][colCheck]);
      colCheck++;
    }
  }

  return shipSlot.find(isOccupied);
}

module.exports = { checkCollisions, isOccupied }


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { isOccupied } = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
const { cols } = __webpack_require__(/*! ./conversions */ "./src/conversions.js");

function Player(name, computer = false) {
    const getName = () => name;
    const getPossessive = () => name === 'You' ? 'Your' : `${name}'s`;
    const isComputer = () => computer === true;

    const randomAttack = (board) => {
        const oppBoard = board.readBoard();
        const attackableCells = [];
        oppBoard.forEach(oppRow => oppRow.forEach((cell, index) => {
            if(isOccupied(cell) || cell === ' ') attackableCells.push([cols[index], oppBoard.indexOf(oppRow) + 1])
        }));
        const chosenCell = attackableCells[Math.floor(Math.random() * attackableCells.length)]

        return chosenCell;
    }

    return { getName, getPossessive, isComputer, randomAttack }
}

module.exports = Player


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const Ship = (name, length) => {
    const getName = () => name;
    const shipLength = length;
    let hits = 0;

    const getShipLength = () => shipLength;
    const isSunk = () => hits === shipLength;
    const hit = () => { 
      if (!isSunk()) hits += 1;
    }

    return { getName, getShipLength, hit, isSunk }
}

module.exports = Ship;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const Display = __webpack_require__(/*! ./display */ "./src/display.js");
const Game = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");

const startButton = document.querySelector('button#start')

Display().renderBoards();

startButton.addEventListener('click', Game)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ0FzQjs7QUFFdEIsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsYUFBYSxtQkFBTyxDQUFDLHFDQUFZOztBQUVqQzs7QUFFQTs7QUFFQSwyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZGlzcGxheS1oZWxwZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2dhbWVwbGF5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxufVxuXG46cm9vdCB7XG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICM4ODg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IG1pbig5NSUsIDEyODBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZyZW07XG59XG5cbmgxIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5tYXJxdWVlIHtcbiAgICBwYWRkaW5nOiAwLjM1cmVtO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAjNTU1LFxuICAgICAgICAgICAgICAgIGluc2V0IC0ycHggLTJweCA0cHggbGlnaHRncmF5O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5idXR0b24jc3RhcnQge1xuICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIHdpZHRoOiBtaW4oOTYlLCA4OTBweCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNDIwcHgpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMC43NXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICAgIGJvcmRlcjogNnB4IHNvbGlkICMyMjI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNXJlbTtcbn1cblxuLmJvYXJkLWhlYWRlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZCB7XG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2VsbCB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFya2VyIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjNDQ0O1xufVxuXG4ubG9nLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzExMTtcbiAgICB3aWR0aDogbWluKDk4JSwgNjAwcHgpO1xuICAgIGhlaWdodDogMTk2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLmxvZy1oZWFkZXIge1xuICAgIGNvbG9yOiAjZmVmZWZlO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmxvZyB7XG4gICAgY29sb3I6IGhzbCgzMTMsIDEwMCUsIDg1JSk7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgcGFkZGluZzogM3B4IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubG9nLXNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nLWxpbmUtc3VuayB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHllbGxvdztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCOzZDQUN5QztJQUN6QyxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxufVxcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzg4ODtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogbWluKDk1JSwgMTI4MHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjZyZW07XFxufVxcblxcbmgxIHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi5tYXJxdWVlIHtcXG4gICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgY29sb3I6ICMyMjI7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAjNTU1LFxcbiAgICAgICAgICAgICAgICBpbnNldCAtMnB4IC0ycHggNHB4IGxpZ2h0Z3JheTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYnV0dG9uI3N0YXJ0IHtcXG4gICAgcGFkZGluZzogNHB4IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICB3aWR0aDogbWluKDk2JSwgODkwcHgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNDIwcHgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMjIyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNXJlbTtcXG59XFxuXFxuLmJvYXJkLWhlYWRlciB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogI2UyZTJlMjtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XFxuICAgIGhlaWdodDogNDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1hcmtlciB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICM0NDQ7XFxufVxcblxcbi5sb2ctY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzExMTtcXG4gICAgd2lkdGg6IG1pbig5OCUsIDYwMHB4KTtcXG4gICAgaGVpZ2h0OiAxOTZweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbn1cXG5cXG4ubG9nLWhlYWRlciB7XFxuICAgIGNvbG9yOiAjZmVmZWZlO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxufVxcblxcbi5sb2cge1xcbiAgICBjb2xvcjogaHNsKDMxMywgMTAwJSwgODUlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubG9nLXNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxvZy1saW5lLXN1bmsge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHllbGxvdztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29scyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG5cbmNvbnN0IHJvdyA9IChyb3dDb29yZCkgPT4ge1xuICAgIGlmIChyb3dDb29yZCA+IDEwIHx8IHJvd0Nvb3JkIDwgMSkgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzIScpXG4gICAgcmV0dXJuIHJvd0Nvb3JkIC0gMTtcbn1cblxuY29uc3QgY29sdW1uID0gKGNvbHVtbkNvb3JkKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gY29scy5pbmRleE9mKGNvbHVtbkNvb3JkKTtcbiAgXG4gIGlmIChpbmRleCA+IDkgfHwgaW5kZXggPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZHMhJylcbiAgcmV0dXJuIGluZGV4XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyByb3csIGNvbHVtbiwgY29scyB9IiwiY29uc3QgeyBpc09jY3VwaWVkIH0gPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbmNvbnN0IHsgY29scywgcm93LCBjb2x1bW4gfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUVsZW1lbnQgKGVsZW1lbnQsIGNsYXNzZXMsIGlkKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKGNsYXNzZXMpIGNsYXNzZXMuZm9yRWFjaCh2YWx1ZSA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsdWUpKVxuICAgIGlmIChpZCkgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKS5yZWFkQm9hcmQoKTtcbiAgICBjb25zdCBkb21Cb2FyZCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnYm9hcmQnXSwgaWQpO1xuICAgIGJvYXJkLmZvckVhY2goYm9hcmRSb3cgPT4gYm9hcmRSb3cuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2VsbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnY2VsbCddKVxuICAgICAgICBuZXdDZWxsLmRhdGFzZXQuY29sdW1uID0gY29sc1tpbmRleF07XG4gICAgICAgIG5ld0NlbGwuZGF0YXNldC5yb3cgPSBib2FyZC5pbmRleE9mKGJvYXJkUm93KSArIDE7XG4gICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKG5ld0NlbGwpO1xuICAgIH0pKTtcbiAgICByZXR1cm4gZG9tQm9hcmRcbn1cblxuY29uc3QgcmVuZGVyQ2VsbHMgPSAoZ2FtZWJvYXJkLCBkb21Cb2FyZCwgY29sb3IpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5yZWFkQm9hcmQoKTtcbiAgICB3aGlsZSAoZG9tQm9hcmQuZmlyc3RDaGlsZCkgZG9tQm9hcmQucmVtb3ZlQ2hpbGQoZG9tQm9hcmQubGFzdENoaWxkKTtcbiAgICBib2FyZC5mb3JFYWNoKGJvYXJkUm93ID0+IGJvYXJkUm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NlbGwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ2NlbGwnXSlcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHNbaW5kZXhdO1xuICAgICAgICBuZXdDZWxsLmRhdGFzZXQucm93ID0gYm9hcmQuaW5kZXhPZihib2FyZFJvdykgKyAxO1xuICAgICAgICBpZiAoaXNPY2N1cGllZChjZWxsKSkge1xuICAgICAgICAgICAgaWYgKGNvbG9yKSBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG4gICAgICAgICAgICBlbHNlIG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM3NzcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsID09PSAnWCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcmtlciA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnbWFya2VyJ10pO1xuICAgICAgICAgICAgbmV3TWFya2VyLmRhdGFzZXQuY29sdW1uID0gY29sc1tpbmRleF07XG4gICAgICAgICAgICBuZXdNYXJrZXIuZGF0YXNldC5yb3cgPSBib2FyZC5pbmRleE9mKGJvYXJkUm93KSArIDE7XG4gICAgICAgICAgICBuZXdNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDYwLCAyMCknO1xuICAgICAgICAgICAgbmV3Q2VsbC5hcHBlbmRDaGlsZChuZXdNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsID09PSAnTycpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcmtlciA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnbWFya2VyJ10pO1xuICAgICAgICAgICAgbmV3TWFya2VyLmRhdGFzZXQuY29sdW1uID0gY29sc1tpbmRleF07XG4gICAgICAgICAgICBuZXdNYXJrZXIuZGF0YXNldC5yb3cgPSBib2FyZC5pbmRleE9mKGJvYXJkUm93KSArIDE7XG4gICAgICAgICAgICBuZXdNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZWUnO1xuICAgICAgICAgICAgbmV3Q2VsbC5hcHBlbmRDaGlsZChuZXdNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKG5ld0NlbGwpO1xuICAgIH0pKTtcbn1cblxuY29uc3QgYWRkVG9Mb2cgPSAocGxheWVyLCBjZWxsLCBvcHBvbmVudCwgb3BwQm9hcmQsIHNoaXBTdW5rLCBkb21Mb2cpID0+IHtcbiAgICBjb25zdCBhdHRhY2tlZENlbGwgPSBvcHBCb2FyZC5yZWFkQm9hcmQoKVtyb3coY2VsbFsxXSldW2NvbHVtbihjZWxsWzBdKV07XG5cbiAgICBjb25zdCBuZXdMaW5lID0gY3JlYXRlRE9NRWxlbWVudCgncCcsIFsnbG9nLWxpbmUnXSk7XG4gICAgbmV3TGluZS50ZXh0Q29udGVudCA9IGAke3BsYXllci5nZXROYW1lKCl9IGF0dGFja2VkICR7Y2VsbC5qb2luKCcsICcpfSAuLi4gaXQncyBhIGA7XG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NwYW4nLCBbJ2xvZy1zcGFuJ10pO1xuICAgIGlmIChhdHRhY2tlZENlbGwgPT09ICdYJykge1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ0hJVCEnO1xuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gJ3JnYigyNTUsIDYwLCAyMCknO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrZWRDZWxsID09PSAnTycpIHtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICdNSVNTISc7XG4gICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSAnI2VlZSdcbiAgICB9XG4gICAgbmV3TGluZS5hcHBlbmRDaGlsZChzcGFuKVxuICAgIGRvbUxvZy5hcHBlbmRDaGlsZChuZXdMaW5lKTtcbiAgICBpZiAoc2hpcFN1bmspIHtcbiAgICAgICAgY29uc3Qgc3Vua0xpbmUgPSBjcmVhdGVET01FbGVtZW50KCdwJywgWydsb2ctbGluZS1zdW5rJ10pXG4gICAgICAgIHN1bmtMaW5lLnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnQuZ2V0UG9zc2Vzc2l2ZSgpfSAke3NoaXBTdW5rfSBoYXMgYmVlbiBzdW5rIWA7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkb21Mb2cuYXBwZW5kQ2hpbGQoc3Vua0xpbmUpfSwgMTUwKSAgIFxuICAgIH1cbn1cblxuY29uc3QgY2hhbmdlTWFycXVlZSA9ICh0ZXh0Q29udGVudCwgZG9tTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb21Ob2RlO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBub2RlLnN0eWxlLmZvbnRTaXplID0gJzMwcHgnXG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBjcmVhdGVET01FbGVtZW50LCByZW5kZXJCb2FyZCwgcmVuZGVyQ2VsbHMsIGFkZFRvTG9nLCBjaGFuZ2VNYXJxdWVlIH0iLCJjb25zdCB7IHJlbmRlckJvYXJkLCByZW5kZXJDZWxscywgYWRkVG9Mb2csIGNoYW5nZU1hcnF1ZWUgfSA9IHJlcXVpcmUoJy4vZGlzcGxheS1oZWxwZXJzJyk7XG5cbmNvbnN0IG1hcnF1ZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFycXVlZScpXG5jb25zdCBwMUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMUNvbnRhaW5lcicpXG5jb25zdCBwMkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMkNvbnRhaW5lcicpXG5jb25zdCBwMUhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMUhlYWRlcicpXG5jb25zdCBwMkhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMkhlYWRlcicpXG5jb25zdCBnYW1lbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZycpXG5sZXQgcDFCb2FyZDtcbmxldCBwMkJvYXJkO1xuXG5jb25zdCBEaXNwbGF5ID0gKCkgPT4geyAgXG4gICAgY29uc3QgcmVuZGVyQm9hcmRzID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAocDFDb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxJykpKSB7XG4gICAgICAgICAgICBwMUNvbnRhaW5lci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDEnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcDFDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQoJ3AxJykpO1xuICAgICAgICB3aGlsZSAocDJDb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyJykpKSB7XG4gICAgICAgICAgICBwMkNvbnRhaW5lci5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDInKSk7XG4gICAgICAgIH1cbiAgICAgICAgcDJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQoJ3AyJykpO1xuICAgICAgICBwMUhlYWRlci50ZXh0Q29udGVudCA9ICdZb3UnO1xuICAgICAgICBwMkhlYWRlci50ZXh0Q29udGVudCA9ICdDb21wdXRlcic7XG4gICAgICAgIGdhbWVsb2cudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgcDFCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMScpO1xuICAgICAgICBwMkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyJyk7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgcmVuZGVyQm9hcmRzKCk7XG4gICAgICAgIG1hcnF1ZWUudGV4dENvbnRlbnQgPSBcIllvdSdyZSB1cCwgQWRtaXJhbCEgQ2hvb3NlIGEgY2VsbCBvbiB5b3VyIG9wcG9uZW50J3MgYm9hcmQgdG8gYXR0YWNrLlwiXG4gICAgfVxuICAgIGNvbnN0IHAxVXBkYXRlQm9hcmQgPSAoYm9hcmQpID0+IHJlbmRlckNlbGxzKGJvYXJkLCBwMUJvYXJkKTtcbiAgICBjb25zdCBwMlVwZGF0ZUJvYXJkID0gKGJvYXJkKSA9PiByZW5kZXJDZWxscyhib2FyZCwgcDJCb2FyZCwgJ3NreWJsdWUnKTtcbiAgICBjb25zdCB1cGRhdGVEaXNwbGF5ID0gKHBsYXllciwgY2VsbCwgb3Bwb25lbnQsIG9wcEJvYXJkLCBzaGlwU3VuaykgPT4ge1xuICAgICAgICBjaGFuZ2VNYXJxdWVlKGAke29wcG9uZW50LmdldFBvc3Nlc3NpdmUoKX0gdHVybmAsIG1hcnF1ZWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFkZFRvTG9nKHBsYXllciwgY2VsbCwgb3Bwb25lbnQsIG9wcEJvYXJkLCBzaGlwU3VuaywgZ2FtZWxvZyk7XG4gICAgICAgIH0sIDEwMCk7ICBcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2FtZU92ZXIod2lubmVyKSB7IG1hcnF1ZWUudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3dpbm5lci5nZXROYW1lKCl9YCB9XG5cbiAgICByZXR1cm4geyByZW5kZXJCb2FyZHMsIHN0YXJ0R2FtZSwgcDFVcGRhdGVCb2FyZCwgcDJVcGRhdGVCb2FyZCwgdXBkYXRlRGlzcGxheSwgZ2FtZU92ZXIgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXk7XG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJylcbmNvbnN0IHsgcm93LCBjb2x1bW4gfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IHsgY2hlY2tDb2xsaXNpb25zLCBpc09jY3VwaWVkIH0gPSByZXF1aXJlICgnLi9oZWxwZXJzJylcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICAoZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdSb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBuZXdSb3cucHVzaChcIiBcIik7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXNoKG5ld1Jvdyk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKCdDYXJyaWVyJywgNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKCdCYXR0bGVzaGlwJywgNCk7XG4gIGNvbnN0IGNydWlzZXIgPSBTaGlwKCdDcnVpc2VyJywgMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoJ1N1Ym1hcmluZScsIDMpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKCdEZXN0cm95ZXInLCAyKTtcblxuICAvLyBGb3IgZGV2ZWxvcG1lbnQgdXNlIHRvIHRlc3Qgd2hldGhlciBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgXG4gIGNvbnN0IGFsbFNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgY29uc3QgZ2V0QWxsU2hpcHMgPSAoKSA9PiBhbGxTaGlwcztcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PlxuICAgIGNhcnJpZXIuaXNTdW5rKCkgJiYgYmF0dGxlc2hpcC5pc1N1bmsoKSAmJiBjcnVpc2VyLmlzU3VuaygpICYmIHN1Ym1hcmluZS5pc1N1bmsoKSAmJiBkZXN0cm95ZXIuaXNTdW5rKCk7XG5cbiAgY29uc3QgcmVhZEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgbGV0IG5ld1NoaXA7XG4gICAgbGV0IGNvbEluZGV4ID0gY29sdW1uKHgpO1xuICAgIGxldCByb3dJbmRleCA9IHJvdyh5KTtcblxuICAgIHN3aXRjaCAoc2hpcCkge1xuICAgICAgY2FzZSAnQ2Fycmllcic6XG4gICAgICAgIG5ld1NoaXAgPSBjYXJyaWVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0JhdHRsZXNoaXAnOlxuICAgICAgICBuZXdTaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDcnVpc2VyJzpcbiAgICAgICAgbmV3U2hpcCA9IGNydWlzZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU3VibWFyaW5lJzpcbiAgICAgICAgbmV3U2hpcCA9IHN1Ym1hcmluZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuZXdTaGlwID0gZGVzdHJveWVyO1xuICAgIH1cblxuICAgIGlmIChjaGVja0NvbGxpc2lvbnMoYm9hcmQsIHgsIHksIG9yaWVudGF0aW9uLCBuZXdTaGlwKSkgdGhyb3cgbmV3IEVycm9yKCdTaGlwIENvbGxpc2lvbiEnKVxuXG4gICAgaWYob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5ld1NoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgYm9hcmRbcm93SW5kZXhdW2NvbEluZGV4XSA9IG5ld1NoaXA7XG4gICAgICAgIHJvd0luZGV4Kys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5ld1NoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgYm9hcmRbcm93SW5kZXhdW2NvbEluZGV4XSA9IG5ld1NoaXA7XG4gICAgICAgIGNvbEluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgbGV0IHN1bmtTaGlwID0gbnVsbDtcbiAgICBjb25zdCBjZWxsID0gYm9hcmRbcm93KHkpXVtjb2x1bW4oeCldO1xuICAgIGlmIChjZWxsID09PSBcIlhcIiB8fCBjZWxsID09PSBcIk9cIikgdGhyb3cgbmV3IEVycm9yKCdDZWxsIGFscmVhZHkgaGl0IScpXG4gICAgZWxzZSBpZiAoaXNPY2N1cGllZChjZWxsKSkge1xuICAgICAgY2VsbC5oaXQoKTtcbiAgICAgIGlmIChjZWxsLmlzU3VuaygpKSBzdW5rU2hpcCA9IGNlbGwuZ2V0TmFtZSgpXG4gICAgICBib2FyZFtyb3coeSldW2NvbHVtbih4KV0gPSBcIlhcIjtcbiAgICB9IGVsc2UgYm9hcmRbcm93KHkpXVtjb2x1bW4oeCldID0gXCJPXCI7XG4gICAgXG4gICAgcmV0dXJuIHsgY2VsbDogW3gsIHldLCBzdW5rU2hpcCB9O1xuICB9XG5cbiAgcmV0dXJuIHsgcmVhZEJvYXJkLCByZWNlaXZlQXR0YWNrLCBwbGFjZVNoaXAsIGFsbFNoaXBzU3VuaywgZ2V0QWxsU2hpcHMgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbmNvbnN0IERpc3BsYXkgPSByZXF1aXJlKCcuL2Rpc3BsYXknKTtcbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmZ1bmN0aW9uIEdhbWUoKSB7XG4gIERpc3BsYXkoKS5zdGFydEdhbWUoKTtcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcignWW91Jyk7XG4gIGNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgdHJ1ZSk7XG4gIGNvbnN0IHAxQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcDJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcjE7XG4gIFxuICBwbGFjZUFsbFNoaXBzKCk7ICAgICBcbiAgRGlzcGxheSgpLnAxVXBkYXRlQm9hcmQocDFCb2FyZCk7XG4gIERpc3BsYXkoKS5wMlVwZGF0ZUJvYXJkKHAyQm9hcmQpO1xuXG4gIGZ1bmN0aW9uIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHAyQm9hcmQuYWxsU2hpcHNTdW5rKCkgfHwgcDFCb2FyZC5hbGxTaGlwc1N1bmsoKTtcbiAgfVxuXG4gIGNvbnN0IHAxRGlzcGxheUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxJyk7XG4gIGNvbnN0IHAyRGlzcGxheUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyJylcblxuICBwMkRpc3BsYXlCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgJiYgIWlzR2FtZU92ZXIoKSkge1xuICAgICAgICBjb25zdCBjZWxsQXR0YWNrZWQgPSBwMkJvYXJkLnJlY2VpdmVBdHRhY2soZS50YXJnZXQuZGF0YXNldC5jb2x1bW4sIGUudGFyZ2V0LmRhdGFzZXQucm93KTtcbiAgICAgICAgRGlzcGxheSgpLnAyVXBkYXRlQm9hcmQocDJCb2FyZCk7XG4gICAgICAgIERpc3BsYXkoKS51cGRhdGVEaXNwbGF5KHBsYXllcjEsIGNlbGxBdHRhY2tlZC5jZWxsLCBwbGF5ZXIyLCBwMkJvYXJkLCBjZWxsQXR0YWNrZWQuc3Vua1NoaXApO1xuICAgICAgICBpZiAoaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gRGlzcGxheSgpLmdhbWVPdmVyKHBsYXllcjEpXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNob2ljZSA9IHBsYXllcjIucmFuZG9tQXR0YWNrKHAxQm9hcmQpO1xuICAgICAgICBjb25zdCBjb21wdXRlckF0dGFjayA9IHAxQm9hcmQucmVjZWl2ZUF0dGFjayhjaG9pY2VbMF0sIGNob2ljZVsxXSk7XG4gICAgICAgIERpc3BsYXkoKS5wMVVwZGF0ZUJvYXJkKHAxQm9hcmQpO1xuICAgICAgICBEaXNwbGF5KCkudXBkYXRlRGlzcGxheShwbGF5ZXIyLCBjb21wdXRlckF0dGFjay5jZWxsLCBwbGF5ZXIxLCBwMUJvYXJkLCBjb21wdXRlckF0dGFjay5zdW5rU2hpcCk7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBEaXNwbGF5KCkuZ2FtZU92ZXIocGxheWVyMik7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjE7XG4gICAgfSwgNTAwKVxuICB9KVxuXG4gIGZ1bmN0aW9uIHBsYWNlQWxsU2hpcHMoKSB7XG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsICdCJywgMik7XG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoJ0NhcnJpZXInLCAnQycsIDkpO1xuICAgIHAxQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgJ0EnLCAzLCAndmVydGljYWwnKTtcbiAgICBwMUJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsICdGJywgNCwgJ3ZlcnRpY2FsJyk7XG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsICdIJywgMSwgJ3ZlcnRpY2FsJyk7XG4gICAgcDJCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsICdBJywgMik7XG4gICAgcDJCb2FyZC5wbGFjZVNoaXAoJ0NhcnJpZXInLCAnQicsIDEwKTtcbiAgICBwMkJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsICdKJywgMSwgJ3ZlcnRpY2FsJyk7XG4gICAgcDJCb2FyZC5wbGFjZVNoaXAoJ0JhdHRsZXNoaXAnLCAnRScsIDUsICd2ZXJ0aWNhbCcpO1xuICAgIHAyQm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAnSCcsIDEsICd2ZXJ0aWNhbCcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJjb25zdCB7IHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJylcblxuZnVuY3Rpb24gaXNPY2N1cGllZChjZWxsKSB7XG4gIHJldHVybiB0eXBlb2YgY2VsbCA9PT0gJ29iamVjdCc7XG59XG5cbmNvbnN0IGNoZWNrQ29sbGlzaW9ucyA9IGZ1bmN0aW9uIGNoZWNrRm9yU2hpcFBsYWNlbWVudENvbGxpc2lvbnMoYm9hcmQsIHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKSB7XG4gIGNvbnN0IHNoaXBTbG90ID0gW107XG4gIGxldCBjb2xDaGVjayA9IGNvbHVtbih4KTtcbiAgbGV0IHJvd0NoZWNrID0gcm93KHkpO1xuXG4gIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5nZXRTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBTbG90LnB1c2goYm9hcmRbcm93Q2hlY2tdW2NvbENoZWNrXSk7XG4gICAgICByb3dDaGVjaysrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBzaGlwU2xvdC5wdXNoKGJvYXJkW3Jvd0NoZWNrXVtjb2xDaGVja10pO1xuICAgICAgY29sQ2hlY2srKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2hpcFNsb3QuZmluZChpc09jY3VwaWVkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNoZWNrQ29sbGlzaW9ucywgaXNPY2N1cGllZCB9XG4iLCJjb25zdCB7IGlzT2NjdXBpZWQgfSA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuY29uc3QgeyBjb2xzIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lLCBjb21wdXRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3QgZ2V0UG9zc2Vzc2l2ZSA9ICgpID0+IG5hbWUgPT09ICdZb3UnID8gJ1lvdXInIDogYCR7bmFtZX0nc2A7XG4gICAgY29uc3QgaXNDb21wdXRlciA9ICgpID0+IGNvbXB1dGVyID09PSB0cnVlO1xuXG4gICAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wcEJvYXJkID0gYm9hcmQucmVhZEJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGF0dGFja2FibGVDZWxscyA9IFtdO1xuICAgICAgICBvcHBCb2FyZC5mb3JFYWNoKG9wcFJvdyA9PiBvcHBSb3cuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGlzT2NjdXBpZWQoY2VsbCkgfHwgY2VsbCA9PT0gJyAnKSBhdHRhY2thYmxlQ2VsbHMucHVzaChbY29sc1tpbmRleF0sIG9wcEJvYXJkLmluZGV4T2Yob3BwUm93KSArIDFdKVxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGNob3NlbkNlbGwgPSBhdHRhY2thYmxlQ2VsbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXR0YWNrYWJsZUNlbGxzLmxlbmd0aCldXG5cbiAgICAgICAgcmV0dXJuIGNob3NlbkNlbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0UG9zc2Vzc2l2ZSwgaXNDb21wdXRlciwgcmFuZG9tQXR0YWNrIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJcbiIsImNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgICBsZXQgaGl0cyA9IDA7XG5cbiAgICBjb25zdCBnZXRTaGlwTGVuZ3RoID0gKCkgPT4gc2hpcExlbmd0aDtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRzID09PSBzaGlwTGVuZ3RoO1xuICAgIGNvbnN0IGhpdCA9ICgpID0+IHsgXG4gICAgICBpZiAoIWlzU3VuaygpKSBoaXRzICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0U2hpcExlbmd0aCwgaGl0LCBpc1N1bmsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IERpc3BsYXkgPSByZXF1aXJlKCcuL2Rpc3BsYXknKTtcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL2dhbWVwbGF5Jyk7XG5cbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3N0YXJ0JylcblxuRGlzcGxheSgpLnJlbmRlckJvYXJkcygpO1xuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEdhbWUpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9