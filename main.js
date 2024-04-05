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
    vertical-align: middle;
    border-radius: 0.25rem;
    box-shadow: inset 2px 2px 4px #555,
                inset -2px -2px 4px lightgray;
    width: 400px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;IACtB;6CACyC;IACzC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;IAC1B,8CAA8C;IAC9C,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n:root {\n    background: #222;\n    font-size: 18px;\n}\n\n.container {\n    background: #888;\n    margin: 0 auto;\n    min-height: 100vh;\n    width: min(95%, 1280px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.6rem;\n}\n\nh1 {\n    letter-spacing: 0.1rem;\n    text-align: center;\n    margin-top: 0.5rem;\n}\n\n.marquee {\n    padding: 0.35rem;\n    color: #222;\n    background: lightyellow;\n    text-align: center;\n    vertical-align: middle;\n    border-radius: 0.25rem;\n    box-shadow: inset 2px 2px 4px #555,\n                inset -2px -2px 4px lightgray;\n    width: 400px;\n    font-size: 1.2rem;\n}\n\n.button#start {\n    padding: 4px 6px;\n    border-radius: 6px;\n    background: #fff;\n    border: 1px solid black;\n}\n\n.boards-container {\n    background: inherit;\n    width: min(96%, 890px);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 420px);\n    justify-content: center;\n    gap: 0.75rem;\n    padding: 0.25rem 0.75rem;\n}\n\n.board-container {\n    border: 6px solid #222;\n    border-radius: 5px;\n    letter-spacing: 0.025rem;\n}\n\n.board-header {\n    height: 40px;\n    background: #e2e2e2;\n    padding: 4px;\n    font-size: 1.3rem;\n    font-weight: bold;\n    border-bottom: 3px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    background: skyblue;\n    height: 420px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.cell {\n    height: 10%;\n    width: 10%;\n    border: 1px dotted black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.marker {\n    width: 60%;\n    height: 60%;\n    border-radius: 50%;\n    box-shadow: 1px 1px 4px #444;\n}\n\n.log-container {\n    background: #111;\n    width: min(98%, 600px);\n    height: 196px;\n    border: 2px solid #eee;\n    border-radius: 3px;\n    letter-spacing: 0.025rem;\n    margin-bottom: 0.25rem;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.log-header {\n    color: #fefefe;\n    font-family: monospace;\n    text-align: center;\n    padding: 0.1rem;\n    border-bottom: 1px solid #eee;\n}\n\n.log {\n    color: hsl(313, 100%, 85%);\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 0.85rem;\n    padding: 3px 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n}\n\n.log-span {\n    font-weight: bold;\n}\n\n.log-line-sunk {\n  font-style: italic;\n  color: yellow;\n}"],"sourceRoot":""}]);
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
            newMarker.style.backgroundColor = 'rgb(255, 60, 20)';
            newCell.appendChild(newMarker);
        }
        if (cell === 'O') {
            const newMarker = createDOMElement('div', ['marker']);
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

const Display = {
    marquee: document.querySelector('.marquee'),
    p1Container: document.getElementById('p1Container'),
    p2Container: document.getElementById('p2Container'),
    p1Header: document.getElementById('p1Header'),
    p2Header: document.getElementById('p2Header'),
    gamelog: document.querySelector('.log'),
    p1Board: renderBoard('p1'),
    p2Board: renderBoard('p2'),
    
    renderBoards () {
        this.p1Container.appendChild(this.p1Board);
        this.p2Container.appendChild(this.p2Board);
        this.p1Header.textContent = 'You';
        this.p2Header.textContent = 'Computer';
    },

    p1UpdateBoard (board) {
      renderCells(board, this.p1Board);
    },

    p2UpdateBoard (board) {
      renderCells(board, this.p2Board, 'skyblue');
    },

    updateDisplay (player, cell, opponent, oppBoard, shipSunk) {
        console.log(cell);
        console.log(opponent)
        changeMarquee(`${opponent.getPossessive()} turn`, this.marquee);
        setTimeout(() => {
            addToLog(player, cell, opponent, oppBoard, shipSunk, this.gamelog);
        }, 100);
        
    },

    clearLog () {
        this.gamelog.textContent = '';
    },

    //updateLog (player, cell, oppBoard, shipSunk) {
      //  ;
    //},

    gameOver (winner) {
        this.marquee.textContent = `Winner: ${winner.getName()}`
    }
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
  Display.clearLog();
  const player1 = Player(1, 'You');
  const player2 = Player(2, 'Computer', true);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  let currentPlayer = player1;
  const p1DisplayBoard = document.getElementById('p1');
  const p2DisplayBoard = document.getElementById('p2')
  placeAllShips();     
  Display.p1UpdateBoard(p1Board);
  Display.p2UpdateBoard(p2Board);

  function isGameOver() {
    return p2Board.allShipsSunk() || p1Board.allShipsSunk();
  }

  p2DisplayBoard.addEventListener('click', (e) => {
    if (currentPlayer === player1 && !isGameOver()) {
        const cellAttacked = p2Board.receiveAttack(e.target.dataset.column, e.target.dataset.row);
        Display.p2UpdateBoard(p2Board);
        Display.updateDisplay(player1, cellAttacked.cell, player2, p2Board, cellAttacked.shipSunk);
        if (isGameOver()) {
            return Display.gameOver(player1)
        }
        currentPlayer = player2;
    } else {
        return null
    }
    setTimeout(() => {
        const choice = player2.randomAttack(p1Board);
        const computerAttack = p1Board.receiveAttack(choice[0], choice[1]);
        Display.p1UpdateBoard(p1Board);
        Display.updateDisplay(player2, computerAttack.cell, player1, p1Board, computerAttack.shipSunk);
        if (isGameOver()) {
            return Display.gameOver(player2);
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

function Player(id, name, computer = false) {
    const getId = () => id;
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

    return { getId, getName, getPossessive, isComputer, randomAttack }
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

Display.renderBoards();

startButton.addEventListener('click', () => Game())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLG1CQUFPLENBQUMscUNBQVk7O0FBRWpDOztBQUVBOztBQUVBLG1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9kaXNwbGF5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZ2FtZXBsYXkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbjpyb290IHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzg4ODtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogbWluKDk1JSwgMTI4MHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNnJlbTtcbn1cblxuaDEge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLm1hcnF1ZWUge1xuICAgIHBhZGRpbmc6IDAuMzVyZW07XG4gICAgY29sb3I6ICMyMjI7XG4gICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAjNTU1LFxuICAgICAgICAgICAgICAgIGluc2V0IC0ycHggLTJweCA0cHggbGlnaHRncmF5O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmJ1dHRvbiNzdGFydCB7XG4gICAgcGFkZGluZzogNHB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IG1pbig5NiUsIDg5MHB4KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MjBweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiA2cHggc29saWQgIzIyMjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xufVxuXG4uYm9hcmQtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI2UyZTJlMjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jZWxsIHtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICB3aWR0aDogMTAlO1xuICAgIGJvcmRlcjogMXB4IGRvdHRlZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYXJrZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICM0NDQ7XG59XG5cbi5sb2ctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgIHdpZHRoOiBtaW4oOTglLCA2MDBweCk7XG4gICAgaGVpZ2h0OiAxOTZweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xufVxuXG4ubG9nLWhlYWRlciB7XG4gICAgY29sb3I6ICNmZWZlZmU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuXG4ubG9nIHtcbiAgICBjb2xvcjogaHNsKDMxMywgMTAwJSwgODUlKTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sb2ctc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2ctbGluZS1zdW5rIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogeWVsbG93O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCOzZDQUN5QztJQUN6QyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOENBQThDO0lBQzlDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjODg4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBtaW4oOTUlLCAxMjgwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1hcnF1ZWUge1xcbiAgICBwYWRkaW5nOiAwLjM1cmVtO1xcbiAgICBjb2xvcjogIzIyMjtcXG4gICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA0cHggIzU1NSxcXG4gICAgICAgICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDRweCBsaWdodGdyYXk7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5idXR0b24jc3RhcnQge1xcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiBtaW4oOTYlLCA4OTBweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MjBweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNzVyZW07XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMyMjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xcbn1cXG5cXG4uYm9hcmQtaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG4gICAgaGVpZ2h0OiA0MjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggIzQ0NDtcXG59XFxuXFxuLmxvZy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xcbiAgICB3aWR0aDogbWluKDk4JSwgNjAwcHgpO1xcbiAgICBoZWlnaHQ6IDE5NnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5sb2ctaGVhZGVyIHtcXG4gICAgY29sb3I6ICNmZWZlZmU7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4xcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG59XFxuXFxuLmxvZyB7XFxuICAgIGNvbG9yOiBoc2woMzEzLCAxMDAlLCA4NSUpO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5sb2ctc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubG9nLWxpbmUtc3VuayB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogeWVsbG93O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb2xzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcblxuY29uc3Qgcm93ID0gKHJvd0Nvb3JkKSA9PiB7XG4gICAgaWYgKHJvd0Nvb3JkID4gMTAgfHwgcm93Q29vcmQgPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZHMhJylcbiAgICByZXR1cm4gcm93Q29vcmQgLSAxO1xufVxuXG5jb25zdCBjb2x1bW4gPSAoY29sdW1uQ29vcmQpID0+IHtcbiAgY29uc3QgaW5kZXggPSBjb2xzLmluZGV4T2YoY29sdW1uQ29vcmQpO1xuICBcbiAgaWYgKGluZGV4ID4gOSB8fCBpbmRleCA8IDApIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kcyEnKVxuICByZXR1cm4gaW5kZXhcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHJvdywgY29sdW1uLCBjb2xzIH0iLCJjb25zdCB7IGlzT2NjdXBpZWQgfSA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuY29uc3QgeyBjb2xzLCByb3csIGNvbHVtbiB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCAoZWxlbWVudCwgY2xhc3NlcywgaWQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoY2xhc3NlcykgY2xhc3Nlcy5mb3JFYWNoKHZhbHVlID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWx1ZSkpXG4gICAgaWYgKGlkKSBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpLnJlYWRCb2FyZCgpO1xuICAgIGNvbnN0IGRvbUJvYXJkID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydib2FyZCddLCBpZCk7XG4gICAgYm9hcmQuZm9yRWFjaChib2FyZFJvdyA9PiBib2FyZFJvdy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDZWxsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydjZWxsJ10pXG4gICAgICAgIG5ld0NlbGwuZGF0YXNldC5jb2x1bW4gPSBjb2xzW2luZGV4XTtcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LnJvdyA9IGJvYXJkLmluZGV4T2YoYm9hcmRSb3cpICsgMTtcbiAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQobmV3Q2VsbCk7XG4gICAgfSkpO1xuICAgIHJldHVybiBkb21Cb2FyZFxufVxuXG5jb25zdCByZW5kZXJDZWxscyA9IChnYW1lYm9hcmQsIGRvbUJvYXJkLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkLnJlYWRCb2FyZCgpO1xuICAgIHdoaWxlIChkb21Cb2FyZC5maXJzdENoaWxkKSBkb21Cb2FyZC5yZW1vdmVDaGlsZChkb21Cb2FyZC5sYXN0Q2hpbGQpO1xuICAgIGJvYXJkLmZvckVhY2goYm9hcmRSb3cgPT4gYm9hcmRSb3cuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2VsbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnY2VsbCddKVxuICAgICAgICBuZXdDZWxsLmRhdGFzZXQuY29sdW1uID0gY29sc1tpbmRleF07XG4gICAgICAgIG5ld0NlbGwuZGF0YXNldC5yb3cgPSBib2FyZC5pbmRleE9mKGJvYXJkUm93KSArIDE7XG4gICAgICAgIGlmIChpc09jY3VwaWVkKGNlbGwpKSB7XG4gICAgICAgICAgICBpZiAoY29sb3IpIG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JcbiAgICAgICAgICAgIGVsc2UgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzc3Nyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgPT09ICdYJykge1xuICAgICAgICAgICAgY29uc3QgbmV3TWFya2VyID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydtYXJrZXInXSk7XG4gICAgICAgICAgICBuZXdNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDYwLCAyMCknO1xuICAgICAgICAgICAgbmV3Q2VsbC5hcHBlbmRDaGlsZChuZXdNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsID09PSAnTycpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcmtlciA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnbWFya2VyJ10pO1xuICAgICAgICAgICAgbmV3TWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWVlJztcbiAgICAgICAgICAgIG5ld0NlbGwuYXBwZW5kQ2hpbGQobmV3TWFya2VyKTtcbiAgICAgICAgfVxuICAgICAgICBkb21Cb2FyZC5hcHBlbmRDaGlsZChuZXdDZWxsKTtcbiAgICB9KSk7XG59XG5cbmNvbnN0IGFkZFRvTG9nID0gKHBsYXllciwgY2VsbCwgb3Bwb25lbnQsIG9wcEJvYXJkLCBzaGlwU3VuaywgZG9tTG9nKSA9PiB7XG5cbiAgICBjb25zdCBhdHRhY2tlZENlbGwgPSBvcHBCb2FyZC5yZWFkQm9hcmQoKVtyb3coY2VsbFsxXSldW2NvbHVtbihjZWxsWzBdKV07XG5cbiAgICBjb25zdCBuZXdMaW5lID0gY3JlYXRlRE9NRWxlbWVudCgncCcsIFsnbG9nLWxpbmUnXSk7XG4gICAgbmV3TGluZS50ZXh0Q29udGVudCA9IGAke3BsYXllci5nZXROYW1lKCl9IGF0dGFja2VkICR7Y2VsbC5qb2luKCcsICcpfSAuLi4gaXQncyBhIGA7XG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NwYW4nLCBbJ2xvZy1zcGFuJ10pO1xuICAgIGlmIChhdHRhY2tlZENlbGwgPT09ICdYJykge1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ0hJVCEnO1xuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gJ3JnYigyNTUsIDYwLCAyMCknO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrZWRDZWxsID09PSAnTycpIHtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICdNSVNTISc7XG4gICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSAnI2VlZSdcbiAgICB9XG4gICAgbmV3TGluZS5hcHBlbmRDaGlsZChzcGFuKVxuICAgIGRvbUxvZy5hcHBlbmRDaGlsZChuZXdMaW5lKTtcbiAgICBpZiAoc2hpcFN1bmspIHtcbiAgICAgICAgY29uc3Qgc3Vua0xpbmUgPSBjcmVhdGVET01FbGVtZW50KCdwJywgWydsb2ctbGluZS1zdW5rJ10pXG4gICAgICAgIHN1bmtMaW5lLnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnQuZ2V0UG9zc2Vzc2l2ZSgpfSAke3NoaXBTdW5rfSBoYXMgYmVlbiBzdW5rIWA7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkb21Mb2cuYXBwZW5kQ2hpbGQoc3Vua0xpbmUpfSwgMTUwKSAgIFxuICAgIH1cbn1cblxuY29uc3QgY2hhbmdlTWFycXVlZSA9ICh0ZXh0Q29udGVudCwgZG9tTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBkb21Ob2RlO1xuICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNyZWF0ZURPTUVsZW1lbnQsIHJlbmRlckJvYXJkLCByZW5kZXJDZWxscywgYWRkVG9Mb2csIGNoYW5nZU1hcnF1ZWUgfSIsImNvbnN0IHsgcmVuZGVyQm9hcmQsIHJlbmRlckNlbGxzLCBhZGRUb0xvZywgY2hhbmdlTWFycXVlZSB9ID0gcmVxdWlyZSgnLi9kaXNwbGF5LWhlbHBlcnMnKTtcblxuY29uc3QgRGlzcGxheSA9IHtcbiAgICBtYXJxdWVlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFycXVlZScpLFxuICAgIHAxQ29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDFDb250YWluZXInKSxcbiAgICBwMkNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyQ29udGFpbmVyJyksXG4gICAgcDFIZWFkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMUhlYWRlcicpLFxuICAgIHAySGVhZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDJIZWFkZXInKSxcbiAgICBnYW1lbG9nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJyksXG4gICAgcDFCb2FyZDogcmVuZGVyQm9hcmQoJ3AxJyksXG4gICAgcDJCb2FyZDogcmVuZGVyQm9hcmQoJ3AyJyksXG4gICAgXG4gICAgcmVuZGVyQm9hcmRzICgpIHtcbiAgICAgICAgdGhpcy5wMUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnAxQm9hcmQpO1xuICAgICAgICB0aGlzLnAyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucDJCb2FyZCk7XG4gICAgICAgIHRoaXMucDFIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91JztcbiAgICAgICAgdGhpcy5wMkhlYWRlci50ZXh0Q29udGVudCA9ICdDb21wdXRlcic7XG4gICAgfSxcblxuICAgIHAxVXBkYXRlQm9hcmQgKGJvYXJkKSB7XG4gICAgICByZW5kZXJDZWxscyhib2FyZCwgdGhpcy5wMUJvYXJkKTtcbiAgICB9LFxuXG4gICAgcDJVcGRhdGVCb2FyZCAoYm9hcmQpIHtcbiAgICAgIHJlbmRlckNlbGxzKGJvYXJkLCB0aGlzLnAyQm9hcmQsICdza3libHVlJyk7XG4gICAgfSxcblxuICAgIHVwZGF0ZURpc3BsYXkgKHBsYXllciwgY2VsbCwgb3Bwb25lbnQsIG9wcEJvYXJkLCBzaGlwU3Vuaykge1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsKTtcbiAgICAgICAgY29uc29sZS5sb2cob3Bwb25lbnQpXG4gICAgICAgIGNoYW5nZU1hcnF1ZWUoYCR7b3Bwb25lbnQuZ2V0UG9zc2Vzc2l2ZSgpfSB0dXJuYCwgdGhpcy5tYXJxdWVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZGRUb0xvZyhwbGF5ZXIsIGNlbGwsIG9wcG9uZW50LCBvcHBCb2FyZCwgc2hpcFN1bmssIHRoaXMuZ2FtZWxvZyk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBjbGVhckxvZyAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZWxvZy50ZXh0Q29udGVudCA9ICcnO1xuICAgIH0sXG5cbiAgICAvL3VwZGF0ZUxvZyAocGxheWVyLCBjZWxsLCBvcHBCb2FyZCwgc2hpcFN1bmspIHtcbiAgICAgIC8vICA7XG4gICAgLy99LFxuXG4gICAgZ2FtZU92ZXIgKHdpbm5lcikge1xuICAgICAgICB0aGlzLm1hcnF1ZWUudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3dpbm5lci5nZXROYW1lKCl9YFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5O1xuIiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpXG5jb25zdCB7IHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5jb25zdCB7IGNoZWNrQ29sbGlzaW9ucywgaXNPY2N1cGllZCB9ID0gcmVxdWlyZSAoJy4vaGVscGVycycpXG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgKGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgbmV3Um93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbmV3Um93LnB1c2goXCIgXCIpO1xuICAgICAgfVxuICAgICAgYm9hcmQucHVzaChuZXdSb3cpO1xuICAgIH1cbiAgfSkoKTtcblxuICBjb25zdCBjYXJyaWVyID0gU2hpcCgnQ2FycmllcicsIDUpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCgnQmF0dGxlc2hpcCcsIDQpO1xuICBjb25zdCBjcnVpc2VyID0gU2hpcCgnQ3J1aXNlcicsIDMpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKCdTdWJtYXJpbmUnLCAzKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgnRGVzdHJveWVyJywgMik7XG5cbiAgLy8gRm9yIGRldmVsb3BtZW50IHVzZSB0byB0ZXN0IHdoZXRoZXIgYWxsIHNoaXBzIGFyZSBzdW5rXG4gIFxuICBjb25zdCBhbGxTaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG4gIGNvbnN0IGdldEFsbFNoaXBzID0gKCkgPT4gYWxsU2hpcHM7XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT5cbiAgICBjYXJyaWVyLmlzU3VuaygpICYmIGJhdHRsZXNoaXAuaXNTdW5rKCkgJiYgY3J1aXNlci5pc1N1bmsoKSAmJiBzdWJtYXJpbmUuaXNTdW5rKCkgJiYgZGVzdHJveWVyLmlzU3VuaygpO1xuXG4gIGNvbnN0IHJlYWRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgIGxldCBuZXdTaGlwO1xuICAgIGxldCBjb2xJbmRleCA9IGNvbHVtbih4KTtcbiAgICBsZXQgcm93SW5kZXggPSByb3coeSk7XG5cbiAgICBzd2l0Y2ggKHNoaXApIHtcbiAgICAgIGNhc2UgJ0NhcnJpZXInOlxuICAgICAgICBuZXdTaGlwID0gY2FycmllcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgICAgbmV3U2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ3J1aXNlcic6XG4gICAgICAgIG5ld1NoaXAgPSBjcnVpc2VyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1N1Ym1hcmluZSc6XG4gICAgICAgIG5ld1NoaXAgPSBzdWJtYXJpbmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbmV3U2hpcCA9IGRlc3Ryb3llcjtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tDb2xsaXNpb25zKGJvYXJkLCB4LCB5LCBvcmllbnRhdGlvbiwgbmV3U2hpcCkpIHRocm93IG5ldyBFcnJvcignU2hpcCBDb2xsaXNpb24hJylcblxuICAgIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuZXdTaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBuZXdTaGlwO1xuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuZXdTaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBuZXdTaGlwO1xuICAgICAgICBjb2xJbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGxldCBzdW5rU2hpcCA9IG51bGw7XG4gICAgY29uc3QgY2VsbCA9IGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXTtcbiAgICBpZiAoY2VsbCA9PT0gXCJYXCIgfHwgY2VsbCA9PT0gXCJPXCIpIHRocm93IG5ldyBFcnJvcignQ2VsbCBhbHJlYWR5IGhpdCEnKVxuICAgIGVsc2UgaWYgKGlzT2NjdXBpZWQoY2VsbCkpIHtcbiAgICAgIGNlbGwuaGl0KCk7XG4gICAgICBpZiAoY2VsbC5pc1N1bmsoKSkgc3Vua1NoaXAgPSBjZWxsLmdldE5hbWUoKVxuICAgICAgYm9hcmRbcm93KHkpXVtjb2x1bW4oeCldID0gXCJYXCI7XG4gICAgfSBlbHNlIGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXSA9IFwiT1wiO1xuICAgIHJldHVybiB7IGNlbGw6IFt4LCB5XSwgc3Vua1NoaXAgfTtcbiAgfVxuXG4gIHJldHVybiB7IHJlYWRCb2FyZCwgcmVjZWl2ZUF0dGFjaywgcGxhY2VTaGlwLCBhbGxTaGlwc1N1bmssIGdldEFsbFNoaXBzIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5mdW5jdGlvbiBHYW1lKCkge1xuICBEaXNwbGF5LmNsZWFyTG9nKCk7XG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoMSwgJ1lvdScpO1xuICBjb25zdCBwbGF5ZXIyID0gUGxheWVyKDIsICdDb21wdXRlcicsIHRydWUpO1xuICBjb25zdCBwMUJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHAyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxO1xuICBjb25zdCBwMURpc3BsYXlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMScpO1xuICBjb25zdCBwMkRpc3BsYXlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMicpXG4gIHBsYWNlQWxsU2hpcHMoKTsgICAgIFxuICBEaXNwbGF5LnAxVXBkYXRlQm9hcmQocDFCb2FyZCk7XG4gIERpc3BsYXkucDJVcGRhdGVCb2FyZChwMkJvYXJkKTtcblxuICBmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiBwMkJvYXJkLmFsbFNoaXBzU3VuaygpIHx8IHAxQm9hcmQuYWxsU2hpcHNTdW5rKCk7XG4gIH1cblxuICBwMkRpc3BsYXlCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgJiYgIWlzR2FtZU92ZXIoKSkge1xuICAgICAgICBjb25zdCBjZWxsQXR0YWNrZWQgPSBwMkJvYXJkLnJlY2VpdmVBdHRhY2soZS50YXJnZXQuZGF0YXNldC5jb2x1bW4sIGUudGFyZ2V0LmRhdGFzZXQucm93KTtcbiAgICAgICAgRGlzcGxheS5wMlVwZGF0ZUJvYXJkKHAyQm9hcmQpO1xuICAgICAgICBEaXNwbGF5LnVwZGF0ZURpc3BsYXkocGxheWVyMSwgY2VsbEF0dGFja2VkLmNlbGwsIHBsYXllcjIsIHAyQm9hcmQsIGNlbGxBdHRhY2tlZC5zaGlwU3Vuayk7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBEaXNwbGF5LmdhbWVPdmVyKHBsYXllcjEpXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNob2ljZSA9IHBsYXllcjIucmFuZG9tQXR0YWNrKHAxQm9hcmQpO1xuICAgICAgICBjb25zdCBjb21wdXRlckF0dGFjayA9IHAxQm9hcmQucmVjZWl2ZUF0dGFjayhjaG9pY2VbMF0sIGNob2ljZVsxXSk7XG4gICAgICAgIERpc3BsYXkucDFVcGRhdGVCb2FyZChwMUJvYXJkKTtcbiAgICAgICAgRGlzcGxheS51cGRhdGVEaXNwbGF5KHBsYXllcjIsIGNvbXB1dGVyQXR0YWNrLmNlbGwsIHBsYXllcjEsIHAxQm9hcmQsIGNvbXB1dGVyQXR0YWNrLnNoaXBTdW5rKTtcbiAgICAgICAgaWYgKGlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIERpc3BsYXkuZ2FtZU92ZXIocGxheWVyMik7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjE7XG4gICAgfSwgNTAwKVxuICB9KVxuXG4gIGZ1bmN0aW9uIHBsYWNlQWxsU2hpcHMoKSB7XG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsICdCJywgMik7XG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoJ0NhcnJpZXInLCAnQycsIDkpO1xuICAgIHAxQm9hcmQucGxhY2VTaGlwKCdDcnVpc2VyJywgJ0EnLCAzLCAndmVydGljYWwnKTtcbiAgICBwMUJvYXJkLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsICdGJywgNCwgJ3ZlcnRpY2FsJyk7XG4gICAgcDFCb2FyZC5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsICdIJywgMSwgJ3ZlcnRpY2FsJyk7XG4gICAgcDJCb2FyZC5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsICdBJywgMik7XG4gICAgcDJCb2FyZC5wbGFjZVNoaXAoJ0NhcnJpZXInLCAnQicsIDEwKTtcbiAgICBwMkJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsICdKJywgMSwgJ3ZlcnRpY2FsJyk7XG4gICAgcDJCb2FyZC5wbGFjZVNoaXAoJ0JhdHRsZXNoaXAnLCAnRScsIDUsICd2ZXJ0aWNhbCcpO1xuICAgIHAyQm9hcmQucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAnSCcsIDEsICd2ZXJ0aWNhbCcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJjb25zdCB7IHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJylcblxuZnVuY3Rpb24gaXNPY2N1cGllZChjZWxsKSB7XG4gIHJldHVybiB0eXBlb2YgY2VsbCA9PT0gJ29iamVjdCc7XG59XG5cbmNvbnN0IGNoZWNrQ29sbGlzaW9ucyA9IGZ1bmN0aW9uIGNoZWNrRm9yU2hpcFBsYWNlbWVudENvbGxpc2lvbnMoYm9hcmQsIHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKSB7XG4gIGNvbnN0IHNoaXBTbG90ID0gW107XG4gIGxldCBjb2xDaGVjayA9IGNvbHVtbih4KTtcbiAgbGV0IHJvd0NoZWNrID0gcm93KHkpO1xuXG4gIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5nZXRTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBTbG90LnB1c2goYm9hcmRbcm93Q2hlY2tdW2NvbENoZWNrXSk7XG4gICAgICByb3dDaGVjaysrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBzaGlwU2xvdC5wdXNoKGJvYXJkW3Jvd0NoZWNrXVtjb2xDaGVja10pO1xuICAgICAgY29sQ2hlY2srKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2hpcFNsb3QuZmluZChpc09jY3VwaWVkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNoZWNrQ29sbGlzaW9ucywgaXNPY2N1cGllZCB9XG4iLCJjb25zdCB7IGlzT2NjdXBpZWQgfSA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuY29uc3QgeyBjb2xzIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbmZ1bmN0aW9uIFBsYXllcihpZCwgbmFtZSwgY29tcHV0ZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3QgZ2V0UG9zc2Vzc2l2ZSA9ICgpID0+IG5hbWUgPT09ICdZb3UnID8gJ1lvdXInIDogYCR7bmFtZX0nc2A7XG4gICAgY29uc3QgaXNDb21wdXRlciA9ICgpID0+IGNvbXB1dGVyID09PSB0cnVlO1xuXG4gICAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wcEJvYXJkID0gYm9hcmQucmVhZEJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGF0dGFja2FibGVDZWxscyA9IFtdO1xuICAgICAgICBvcHBCb2FyZC5mb3JFYWNoKG9wcFJvdyA9PiBvcHBSb3cuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGlzT2NjdXBpZWQoY2VsbCkgfHwgY2VsbCA9PT0gJyAnKSBhdHRhY2thYmxlQ2VsbHMucHVzaChbY29sc1tpbmRleF0sIG9wcEJvYXJkLmluZGV4T2Yob3BwUm93KSArIDFdKVxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGNob3NlbkNlbGwgPSBhdHRhY2thYmxlQ2VsbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXR0YWNrYWJsZUNlbGxzLmxlbmd0aCldXG5cbiAgICAgICAgcmV0dXJuIGNob3NlbkNlbGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0SWQsIGdldE5hbWUsIGdldFBvc3Nlc3NpdmUsIGlzQ29tcHV0ZXIsIHJhbmRvbUF0dGFjayB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyXG4iLCJjb25zdCBTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG4gICAgbGV0IGhpdHMgPSAwO1xuXG4gICAgY29uc3QgZ2V0U2hpcExlbmd0aCA9ICgpID0+IHNoaXBMZW5ndGg7XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0cyA9PT0gc2hpcExlbmd0aDtcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7IFxuICAgICAgaWYgKCFpc1N1bmsoKSkgaGl0cyArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldE5hbWUsIGdldFNoaXBMZW5ndGgsIGhpdCwgaXNTdW5rIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9nYW1lcGxheScpO1xuXG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNzdGFydCcpXG5cbkRpc3BsYXkucmVuZGVyQm9hcmRzKCk7XG5cbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gR2FtZSgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==