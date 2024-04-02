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
    background: #444;
    font-size: 18px;
}

.container {
    background: #efefef;
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
    padding: 0.25rem;
    color: #222;
    background: lightyellow;
    text-align: center;
    width: 400px;
    font-size: 1.2rem;
}

.button#start {
    padding: 2px 4px;
    border-radius: 5px;
}

.board-container {
    background: lightgray;
    width: min(96%, 890px);
    display: grid;
    grid-template-columns: repeat(auto-fit, 420px);
    justify-content: center;
    gap: 0.75rem;
    padding: 0.75rem;

}

.board {
    background: skyblue;
    height: 420px;
    border: 5px solid #222;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
}

.cell {
    height: 10%;
    width: 10%;
    border: 1px dotted black;
}

.log {
    background: #111;
    width: min(98%, 600px);
    height: 180px;
    border: 1px solid #dddddd;
    border-radius: 3px;
    color: rgb(251, 201, 255);
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    padding: 3px 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    margin-bottom: 0.25rem;
}

.log .log-span {
    font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;;AAEpB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;IACzB,8CAA8C;IAC9C,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n:root {\n    background: #444;\n    font-size: 18px;\n}\n\n.container {\n    background: #efefef;\n    margin: 0 auto;\n    min-height: 100vh;\n    width: min(95%, 1280px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.6rem;\n}\n\nh1 {\n    letter-spacing: 0.1rem;\n    text-align: center;\n    margin-top: 0.5rem;\n}\n\n.marquee {\n    padding: 0.25rem;\n    color: #222;\n    background: lightyellow;\n    text-align: center;\n    width: 400px;\n    font-size: 1.2rem;\n}\n\n.button#start {\n    padding: 2px 4px;\n    border-radius: 5px;\n}\n\n.board-container {\n    background: lightgray;\n    width: min(96%, 890px);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 420px);\n    justify-content: center;\n    gap: 0.75rem;\n    padding: 0.75rem;\n\n}\n\n.board {\n    background: skyblue;\n    height: 420px;\n    border: 5px solid #222;\n    border-radius: 5px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.cell {\n    height: 10%;\n    width: 10%;\n    border: 1px dotted black;\n}\n\n.log {\n    background: #111;\n    width: min(98%, 600px);\n    height: 180px;\n    border: 1px solid #dddddd;\n    border-radius: 3px;\n    color: rgb(251, 201, 255);\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 0.8rem;\n    padding: 3px 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n    margin-bottom: 0.25rem;\n}\n\n.log .log-span {\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
    if (classes) [...classes].forEach(value => newElement.classList.add(value))
    if (id) newElement.setAttribute('id', id);

    return newElement;
}

const renderBoard = (id) => {
    const board = Gameboard().readBoard();
    const domBoard = createDOMElement('div', ['board'], id);
    board.forEach(boardRow => boardRow.forEach(() => {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        domBoard.appendChild(newCell);
    }));
    return domBoard
}

const renderCells = (player, domBoard) => {
    const board = player.getBoard().readBoard();
    while (domBoard.firstChild) domBoard.removeChild(domBoard.lastChild);
    board.forEach(row => row.forEach((cell, index) => {
        const newCell = createDOMElement('div', ['cell'])
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(row) + 1;
        if (isOccupied(cell)) newCell.style.backgroundColor = '#777';
        if (cell === 'X') newCell.style.backgroundColor = 'red';
        if (cell === 'O') newCell.style.backgroundColor = 'lightgreen'
        domBoard.appendChild(newCell);
    }));
}

const addToLog = (player, cell, opponent, domLog) => {
    const attackedCell = opponent.getBoard().readBoard()[row(cell[1])][column(cell[0])];
    const newLine = createDOMElement('p', ['log-line']);
    newLine.textContent = `${player.displayName()} attacked ${cell.join(', ')} ... it's a `;
    const span = createDOMElement('span', ['log-span']);
    if (attackedCell === 'X') {
        span.textContent = 'HIT!';
        span.style.color = 'red';
    } else if (attackedCell === 'O') {
        span.textContent = 'MISS!';
        span.style.color = 'white'
    }
    newLine.appendChild(span);
    domLog.appendChild(newLine);
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
    container: document.querySelector('.board-container'),
    marquee: document.querySelector('.marquee'),
    p1Board: renderBoard('p1'),
    p2Board: renderBoard('p2'),
    gamelog: document.querySelector('.log'),

    renderBoards () {
        this.container.appendChild(this.p1Board);
        this.container.appendChild(this.p2Board);
    },

    updateBoard (player) {
        if (player.isComputer()) renderCells(player, this.p2Board);
        else renderCells(player, this.p1Board);
    },

    updateDisplay (player, cell, opponent) {
        this.updateBoard(opponent);
        this.updateLog(player, cell, opponent);
        this.updateMarquee(opponent);
    },

    updateLog (player, cell, opponent) {
        addToLog(player, cell, opponent, this.gamelog);
    },

    updateMarquee (player) {
        changeMarquee(`Turn: ${player.displayName()}`, this.marquee)
    },
    
    gameOver (winner) {
        this.marquee.textContent = `Winner: ${winner.displayName()}`
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
      for (let i = 1; i <= newShip.readShipLength(); i++) {
        board[rowIndex][colIndex] = newShip;
        rowIndex++;
      }
    } else {
      for (let i = 1; i <= newShip.readShipLength(); i++) {
        board[rowIndex][colIndex] = newShip;
        colIndex++;
      }
    }
  }

  function receiveAttack(x, y) {
    const cell = board[row(y)][column(x)];
    if (cell === "X" || cell === "O") throw new Error('Cell already hit!')
    else if (isOccupied(cell)) {
      cell.hit();
      board[row(y)][column(x)] = "X";
    } else board[row(y)][column(x)] = "O";
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

let players = [];
let activePlayer;

const getInactivePlayer = () => {
    if (activePlayer === players[0]) return players[1];
    return players[0];
}

function playerTurn(player) {
    const defender = getInactivePlayer();
    if (!player.isComputer() && !isGameOver()) {
        const oppCells = document.querySelectorAll('#p2 > .cell');
        oppCells.forEach(cell => cell.addEventListener('click', () => {
            const cellAttacked = player.attack(cell.dataset.column, cell.dataset.row, defender);
            Display.updateDisplay(player, cellAttacked, defender);
            activePlayer = defender
            playerTurn(activePlayer);      
        }))
    } else if (player.isComputer() && !isGameOver()) {
        setTimeout(() => {
        const cellAttacked = player.randomAttack(defender);
        Display.updateDisplay(player, cellAttacked, defender)
        activePlayer = defender;
        playerTurn(activePlayer);
        }, 500);
    } else Display.gameOver(activePlayer);
}

function placeAllShips() { 
    activePlayer.getBoard().placeShip('Destroyer', 'B', 2);
    activePlayer.getBoard().placeShip('Carrier', 'C', 9);
    activePlayer.getBoard().placeShip('Cruiser', 'A', 3, 'vertical');
    activePlayer.getBoard().placeShip('Battleship', 'F', 4, 'vertical');
    activePlayer.getBoard().placeShip('Submarine', 'H', 1, 'vertical');
    getInactivePlayer().getBoard().placeShip('Destroyer', 'A', 2);
    getInactivePlayer().getBoard().placeShip('Carrier', 'B', 10);
    getInactivePlayer().getBoard().placeShip('Cruiser', 'J', 1, 'vertical');
    getInactivePlayer().getBoard().placeShip('Battleship', 'E', 5, 'vertical');
    getInactivePlayer().getBoard().placeShip('Submarine', 'H', 1, 'vertical');
};

function isGameOver() {
    return getInactivePlayer().getBoard().allShipsSunk();
}

function Game() {
  players = [Player('You'), Player('Computer', true)];
  [activePlayer] = players;
  Display.renderBoards();
  placeAllShips();     
  Display.updateBoard(activePlayer);
  Display.updateBoard(getInactivePlayer());
  playerTurn(activePlayer);

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
    for (let i = 1; i <= ship.readShipLength(); i++) {
      shipSlot.push(board[rowCheck][colCheck]);
      rowCheck++;
    }
  } else {
    for (let i = 1; i <= ship.readShipLength(); i++) {
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
const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

function Player(name, computer = false, board = Gameboard()) {
    const displayName = () => name;

    const getBoard = () => board;

    const isComputer = () => computer === true

    const attack = (x, y, player) => {
        player.getBoard().receiveAttack(x, y)
        
        return [x, y];
    }

    const randomAttack = (player) => {
        const oppBoard = player.getBoard().readBoard();
        const attackableCells = [];

        oppBoard.forEach(oppRow => oppRow.forEach((cell, index) => {
            if(isOccupied(cell) || cell === ' ') attackableCells.push([cols[index], oppBoard.indexOf(oppRow) + 1])
        }));

        const chosenCell = attackableCells[Math.floor(Math.random() * attackableCells.length)]
        player.getBoard().receiveAttack(chosenCell[0], chosenCell[1])

        return chosenCell;
    }

    return { displayName, getBoard, isComputer, attack, randomAttack }
}

module.exports = Player


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const Ship = (name, length) => {
    const shipLength = length;
    let hits = 0;

    const readShipLength = () => shipLength;
    const readHits = () => hits;

    const isSunk = () => hits === shipLength;
    
    const hit = () => { 
      if (!isSunk()) hits += 1;
    }

    return { name, readShipLength, readHits, hit, isSunk }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9kaXNwbGF5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZ2FtZXBsYXkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbjpyb290IHtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogbWluKDk1JSwgMTI4MHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNnJlbTtcbn1cblxuaDEge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLm1hcnF1ZWUge1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgY29sb3I6ICMyMjI7XG4gICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmJ1dHRvbiNzdGFydCB7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICB3aWR0aDogbWluKDk2JSwgODkwcHgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDQyMHB4KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC43NXJlbTtcblxufVxuXG4uYm9hcmQge1xuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gICAgaGVpZ2h0OiA0MjBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMjIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNlbGwge1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiAxMCU7XG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xufVxuXG4ubG9nIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgIHdpZHRoOiBtaW4oOTglLCA2MDBweCk7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjb2xvcjogcmdiKDI1MSwgMjAxLCAyNTUpO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzogM3B4IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi5sb2cgLmxvZy1zcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBtaW4oOTUlLCAxMjgwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1hcnF1ZWUge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBjb2xvcjogIzIyMjtcXG4gICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmJ1dHRvbiNzdGFydCB7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gICAgd2lkdGg6IG1pbig5NiUsIDg5MHB4KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDQyMHB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC43NXJlbTtcXG4gICAgcGFkZGluZzogMC43NXJlbTtcXG5cXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG4gICAgaGVpZ2h0OiA0MjBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzIyMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCBibGFjaztcXG59XFxuXFxuLmxvZyB7XFxuICAgIGJhY2tncm91bmQ6ICMxMTE7XFxuICAgIHdpZHRoOiBtaW4oOTglLCA2MDBweCk7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHJnYigyNTEsIDIwMSwgMjU1KTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi5sb2cgLmxvZy1zcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbHMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuXG5jb25zdCByb3cgPSAocm93Q29vcmQpID0+IHtcbiAgICBpZiAocm93Q29vcmQgPiAxMCB8fCByb3dDb29yZCA8IDEpIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kcyEnKVxuICAgIHJldHVybiByb3dDb29yZCAtIDE7XG59XG5cbmNvbnN0IGNvbHVtbiA9IChjb2x1bW5Db29yZCkgPT4ge1xuICBjb25zdCBpbmRleCA9IGNvbHMuaW5kZXhPZihjb2x1bW5Db29yZCk7XG4gIFxuICBpZiAoaW5kZXggPiA5IHx8IGluZGV4IDwgMCkgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzIScpXG4gIHJldHVybiBpbmRleFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcm93LCBjb2x1bW4sIGNvbHMgfSIsImNvbnN0IHsgaXNPY2N1cGllZCB9ID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5jb25zdCB7IGNvbHMsIHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01FbGVtZW50IChlbGVtZW50LCBjbGFzc2VzLCBpZCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChjbGFzc2VzKSBbLi4uY2xhc3Nlc10uZm9yRWFjaCh2YWx1ZSA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsdWUpKVxuICAgIGlmIChpZCkgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKS5yZWFkQm9hcmQoKTtcbiAgICBjb25zdCBkb21Cb2FyZCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnYm9hcmQnXSwgaWQpO1xuICAgIGJvYXJkLmZvckVhY2goYm9hcmRSb3cgPT4gYm9hcmRSb3cuZm9yRWFjaCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKG5ld0NlbGwpO1xuICAgIH0pKTtcbiAgICByZXR1cm4gZG9tQm9hcmRcbn1cblxuY29uc3QgcmVuZGVyQ2VsbHMgPSAocGxheWVyLCBkb21Cb2FyZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdldEJvYXJkKCkucmVhZEJvYXJkKCk7XG4gICAgd2hpbGUgKGRvbUJvYXJkLmZpcnN0Q2hpbGQpIGRvbUJvYXJkLnJlbW92ZUNoaWxkKGRvbUJvYXJkLmxhc3RDaGlsZCk7XG4gICAgYm9hcmQuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NlbGwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ2NlbGwnXSlcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHNbaW5kZXhdO1xuICAgICAgICBuZXdDZWxsLmRhdGFzZXQucm93ID0gYm9hcmQuaW5kZXhPZihyb3cpICsgMTtcbiAgICAgICAgaWYgKGlzT2NjdXBpZWQoY2VsbCkpIG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM3NzcnO1xuICAgICAgICBpZiAoY2VsbCA9PT0gJ1gnKSBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICBpZiAoY2VsbCA9PT0gJ08nKSBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZWVuJ1xuICAgICAgICBkb21Cb2FyZC5hcHBlbmRDaGlsZChuZXdDZWxsKTtcbiAgICB9KSk7XG59XG5cbmNvbnN0IGFkZFRvTG9nID0gKHBsYXllciwgY2VsbCwgb3Bwb25lbnQsIGRvbUxvZykgPT4ge1xuICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IG9wcG9uZW50LmdldEJvYXJkKCkucmVhZEJvYXJkKClbcm93KGNlbGxbMV0pXVtjb2x1bW4oY2VsbFswXSldO1xuICAgIGNvbnN0IG5ld0xpbmUgPSBjcmVhdGVET01FbGVtZW50KCdwJywgWydsb2ctbGluZSddKTtcbiAgICBuZXdMaW5lLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmRpc3BsYXlOYW1lKCl9IGF0dGFja2VkICR7Y2VsbC5qb2luKCcsICcpfSAuLi4gaXQncyBhIGA7XG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NwYW4nLCBbJ2xvZy1zcGFuJ10pO1xuICAgIGlmIChhdHRhY2tlZENlbGwgPT09ICdYJykge1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ0hJVCEnO1xuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tlZENlbGwgPT09ICdPJykge1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ01JU1MhJztcbiAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcbiAgICB9XG4gICAgbmV3TGluZS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBkb21Mb2cuYXBwZW5kQ2hpbGQobmV3TGluZSk7XG59XG5cbmNvbnN0IGNoYW5nZU1hcnF1ZWUgPSAodGV4dENvbnRlbnQsIGRvbU5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gZG9tTm9kZTtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBjcmVhdGVET01FbGVtZW50LCByZW5kZXJCb2FyZCwgcmVuZGVyQ2VsbHMsIGFkZFRvTG9nLCBjaGFuZ2VNYXJxdWVlIH0iLCJjb25zdCB7IHJlbmRlckJvYXJkLCByZW5kZXJDZWxscywgYWRkVG9Mb2csIGNoYW5nZU1hcnF1ZWUgfSA9IHJlcXVpcmUoJy4vZGlzcGxheS1oZWxwZXJzJyk7XG5cbmNvbnN0IERpc3BsYXkgPSB7XG4gICAgY29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtY29udGFpbmVyJyksXG4gICAgbWFycXVlZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcnF1ZWUnKSxcbiAgICBwMUJvYXJkOiByZW5kZXJCb2FyZCgncDEnKSxcbiAgICBwMkJvYXJkOiByZW5kZXJCb2FyZCgncDInKSxcbiAgICBnYW1lbG9nOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJyksXG5cbiAgICByZW5kZXJCb2FyZHMgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnAxQm9hcmQpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnAyQm9hcmQpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVCb2FyZCAocGxheWVyKSB7XG4gICAgICAgIGlmIChwbGF5ZXIuaXNDb21wdXRlcigpKSByZW5kZXJDZWxscyhwbGF5ZXIsIHRoaXMucDJCb2FyZCk7XG4gICAgICAgIGVsc2UgcmVuZGVyQ2VsbHMocGxheWVyLCB0aGlzLnAxQm9hcmQpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVEaXNwbGF5IChwbGF5ZXIsIGNlbGwsIG9wcG9uZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm9hcmQob3Bwb25lbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxvZyhwbGF5ZXIsIGNlbGwsIG9wcG9uZW50KTtcbiAgICAgICAgdGhpcy51cGRhdGVNYXJxdWVlKG9wcG9uZW50KTtcbiAgICB9LFxuXG4gICAgdXBkYXRlTG9nIChwbGF5ZXIsIGNlbGwsIG9wcG9uZW50KSB7XG4gICAgICAgIGFkZFRvTG9nKHBsYXllciwgY2VsbCwgb3Bwb25lbnQsIHRoaXMuZ2FtZWxvZyk7XG4gICAgfSxcblxuICAgIHVwZGF0ZU1hcnF1ZWUgKHBsYXllcikge1xuICAgICAgICBjaGFuZ2VNYXJxdWVlKGBUdXJuOiAke3BsYXllci5kaXNwbGF5TmFtZSgpfWAsIHRoaXMubWFycXVlZSlcbiAgICB9LFxuICAgIFxuICAgIGdhbWVPdmVyICh3aW5uZXIpIHtcbiAgICAgICAgdGhpcy5tYXJxdWVlLnRleHRDb250ZW50ID0gYFdpbm5lcjogJHt3aW5uZXIuZGlzcGxheU5hbWUoKX1gXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXk7XG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJylcbmNvbnN0IHsgcm93LCBjb2x1bW4gfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IHsgY2hlY2tDb2xsaXNpb25zLCBpc09jY3VwaWVkIH0gPSByZXF1aXJlICgnLi9oZWxwZXJzJylcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICAoZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdSb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBuZXdSb3cucHVzaChcIiBcIik7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXNoKG5ld1Jvdyk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKCdDYXJyaWVyJywgNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKCdCYXR0bGVzaGlwJywgNCk7XG4gIGNvbnN0IGNydWlzZXIgPSBTaGlwKCdDcnVpc2VyJywgMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoJ1N1Ym1hcmluZScsIDMpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKCdEZXN0cm95ZXInLCAyKTtcblxuICAvLyBGb3IgZGV2ZWxvcG1lbnQgdXNlIHRvIHRlc3Qgd2hldGhlciBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgXG4gIGNvbnN0IGFsbFNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgY29uc3QgZ2V0QWxsU2hpcHMgPSAoKSA9PiBhbGxTaGlwcztcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PlxuICAgIGNhcnJpZXIuaXNTdW5rKCkgJiYgYmF0dGxlc2hpcC5pc1N1bmsoKSAmJiBjcnVpc2VyLmlzU3VuaygpICYmIHN1Ym1hcmluZS5pc1N1bmsoKSAmJiBkZXN0cm95ZXIuaXNTdW5rKCk7XG5cbiAgY29uc3QgcmVhZEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgbGV0IG5ld1NoaXA7XG4gICAgbGV0IGNvbEluZGV4ID0gY29sdW1uKHgpO1xuICAgIGxldCByb3dJbmRleCA9IHJvdyh5KTtcblxuICAgIHN3aXRjaCAoc2hpcCkge1xuICAgICAgY2FzZSAnQ2Fycmllcic6XG4gICAgICAgIG5ld1NoaXAgPSBjYXJyaWVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0JhdHRsZXNoaXAnOlxuICAgICAgICBuZXdTaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDcnVpc2VyJzpcbiAgICAgICAgbmV3U2hpcCA9IGNydWlzZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU3VibWFyaW5lJzpcbiAgICAgICAgbmV3U2hpcCA9IHN1Ym1hcmluZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuZXdTaGlwID0gZGVzdHJveWVyO1xuICAgIH1cblxuICAgIGlmIChjaGVja0NvbGxpc2lvbnMoYm9hcmQsIHgsIHksIG9yaWVudGF0aW9uLCBuZXdTaGlwKSkgdGhyb3cgbmV3IEVycm9yKCdTaGlwIENvbGxpc2lvbiEnKVxuXG4gICAgaWYob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5ld1NoaXAucmVhZFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBuZXdTaGlwO1xuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuZXdTaGlwLnJlYWRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBib2FyZFtyb3dJbmRleF1bY29sSW5kZXhdID0gbmV3U2hpcDtcbiAgICAgICAgY29sSW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBjZWxsID0gYm9hcmRbcm93KHkpXVtjb2x1bW4oeCldO1xuICAgIGlmIChjZWxsID09PSBcIlhcIiB8fCBjZWxsID09PSBcIk9cIikgdGhyb3cgbmV3IEVycm9yKCdDZWxsIGFscmVhZHkgaGl0IScpXG4gICAgZWxzZSBpZiAoaXNPY2N1cGllZChjZWxsKSkge1xuICAgICAgY2VsbC5oaXQoKTtcbiAgICAgIGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXSA9IFwiWFwiO1xuICAgIH0gZWxzZSBib2FyZFtyb3coeSldW2NvbHVtbih4KV0gPSBcIk9cIjtcbiAgfVxuXG4gIHJldHVybiB7IHJlYWRCb2FyZCwgcmVjZWl2ZUF0dGFjaywgcGxhY2VTaGlwLCBhbGxTaGlwc1N1bmssIGdldEFsbFNoaXBzIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5cbmxldCBwbGF5ZXJzID0gW107XG5sZXQgYWN0aXZlUGxheWVyO1xuXG5jb25zdCBnZXRJbmFjdGl2ZVBsYXllciA9ICgpID0+IHtcbiAgICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdKSByZXR1cm4gcGxheWVyc1sxXTtcbiAgICByZXR1cm4gcGxheWVyc1swXTtcbn1cblxuZnVuY3Rpb24gcGxheWVyVHVybihwbGF5ZXIpIHtcbiAgICBjb25zdCBkZWZlbmRlciA9IGdldEluYWN0aXZlUGxheWVyKCk7XG4gICAgaWYgKCFwbGF5ZXIuaXNDb21wdXRlcigpICYmICFpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgY29uc3Qgb3BwQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcDIgPiAuY2VsbCcpO1xuICAgICAgICBvcHBDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxBdHRhY2tlZCA9IHBsYXllci5hdHRhY2soY2VsbC5kYXRhc2V0LmNvbHVtbiwgY2VsbC5kYXRhc2V0LnJvdywgZGVmZW5kZXIpO1xuICAgICAgICAgICAgRGlzcGxheS51cGRhdGVEaXNwbGF5KHBsYXllciwgY2VsbEF0dGFja2VkLCBkZWZlbmRlcik7XG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBkZWZlbmRlclxuICAgICAgICAgICAgcGxheWVyVHVybihhY3RpdmVQbGF5ZXIpOyAgICAgIFxuICAgICAgICB9KSlcbiAgICB9IGVsc2UgaWYgKHBsYXllci5pc0NvbXB1dGVyKCkgJiYgIWlzR2FtZU92ZXIoKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbEF0dGFja2VkID0gcGxheWVyLnJhbmRvbUF0dGFjayhkZWZlbmRlcik7XG4gICAgICAgIERpc3BsYXkudXBkYXRlRGlzcGxheShwbGF5ZXIsIGNlbGxBdHRhY2tlZCwgZGVmZW5kZXIpXG4gICAgICAgIGFjdGl2ZVBsYXllciA9IGRlZmVuZGVyO1xuICAgICAgICBwbGF5ZXJUdXJuKGFjdGl2ZVBsYXllcik7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIERpc3BsYXkuZ2FtZU92ZXIoYWN0aXZlUGxheWVyKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VBbGxTaGlwcygpIHsgXG4gICAgYWN0aXZlUGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAnQicsIDIpO1xuICAgIGFjdGl2ZVBsYXllci5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnQ2FycmllcicsICdDJywgOSk7XG4gICAgYWN0aXZlUGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKCdDcnVpc2VyJywgJ0EnLCAzLCAndmVydGljYWwnKTtcbiAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ0JhdHRsZXNoaXAnLCAnRicsIDQsICd2ZXJ0aWNhbCcpO1xuICAgIGFjdGl2ZVBsYXllci5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnU3VibWFyaW5lJywgJ0gnLCAxLCAndmVydGljYWwnKTtcbiAgICBnZXRJbmFjdGl2ZVBsYXllcigpLmdldEJvYXJkKCkucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAnQScsIDIpO1xuICAgIGdldEluYWN0aXZlUGxheWVyKCkuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ0NhcnJpZXInLCAnQicsIDEwKTtcbiAgICBnZXRJbmFjdGl2ZVBsYXllcigpLmdldEJvYXJkKCkucGxhY2VTaGlwKCdDcnVpc2VyJywgJ0onLCAxLCAndmVydGljYWwnKTtcbiAgICBnZXRJbmFjdGl2ZVBsYXllcigpLmdldEJvYXJkKCkucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgJ0UnLCA1LCAndmVydGljYWwnKTtcbiAgICBnZXRJbmFjdGl2ZVBsYXllcigpLmdldEJvYXJkKCkucGxhY2VTaGlwKCdTdWJtYXJpbmUnLCAnSCcsIDEsICd2ZXJ0aWNhbCcpO1xufTtcblxuZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gZ2V0SW5hY3RpdmVQbGF5ZXIoKS5nZXRCb2FyZCgpLmFsbFNoaXBzU3VuaygpO1xufVxuXG5mdW5jdGlvbiBHYW1lKCkge1xuICBwbGF5ZXJzID0gW1BsYXllcignWW91JyksIFBsYXllcignQ29tcHV0ZXInLCB0cnVlKV07XG4gIFthY3RpdmVQbGF5ZXJdID0gcGxheWVycztcbiAgRGlzcGxheS5yZW5kZXJCb2FyZHMoKTtcbiAgcGxhY2VBbGxTaGlwcygpOyAgICAgXG4gIERpc3BsYXkudXBkYXRlQm9hcmQoYWN0aXZlUGxheWVyKTtcbiAgRGlzcGxheS51cGRhdGVCb2FyZChnZXRJbmFjdGl2ZVBsYXllcigpKTtcbiAgcGxheWVyVHVybihhY3RpdmVQbGF5ZXIpO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjb25zdCB7IHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJylcblxuZnVuY3Rpb24gaXNPY2N1cGllZChjZWxsKSB7XG4gIHJldHVybiB0eXBlb2YgY2VsbCA9PT0gJ29iamVjdCc7XG59XG5cbmNvbnN0IGNoZWNrQ29sbGlzaW9ucyA9IGZ1bmN0aW9uIGNoZWNrRm9yU2hpcFBsYWNlbWVudENvbGxpc2lvbnMoYm9hcmQsIHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKSB7XG4gIGNvbnN0IHNoaXBTbG90ID0gW107XG4gIGxldCBjb2xDaGVjayA9IGNvbHVtbih4KTtcbiAgbGV0IHJvd0NoZWNrID0gcm93KHkpO1xuXG4gIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5yZWFkU2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgIHNoaXBTbG90LnB1c2goYm9hcmRbcm93Q2hlY2tdW2NvbENoZWNrXSk7XG4gICAgICByb3dDaGVjaysrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLnJlYWRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgc2hpcFNsb3QucHVzaChib2FyZFtyb3dDaGVja11bY29sQ2hlY2tdKTtcbiAgICAgIGNvbENoZWNrKys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNoaXBTbG90LmZpbmQoaXNPY2N1cGllZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBjaGVja0NvbGxpc2lvbnMsIGlzT2NjdXBpZWQgfVxuIiwiY29uc3QgeyBpc09jY3VwaWVkIH0gPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbmNvbnN0IHsgY29scyB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuZnVuY3Rpb24gUGxheWVyKG5hbWUsIGNvbXB1dGVyID0gZmFsc2UsIGJvYXJkID0gR2FtZWJvYXJkKCkpIHtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gICAgY29uc3QgaXNDb21wdXRlciA9ICgpID0+IGNvbXB1dGVyID09PSB0cnVlXG5cbiAgICBjb25zdCBhdHRhY2sgPSAoeCwgeSwgcGxheWVyKSA9PiB7XG4gICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soeCwgeSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tQXR0YWNrID0gKHBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCBvcHBCb2FyZCA9IHBsYXllci5nZXRCb2FyZCgpLnJlYWRCb2FyZCgpO1xuICAgICAgICBjb25zdCBhdHRhY2thYmxlQ2VsbHMgPSBbXTtcblxuICAgICAgICBvcHBCb2FyZC5mb3JFYWNoKG9wcFJvdyA9PiBvcHBSb3cuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGlzT2NjdXBpZWQoY2VsbCkgfHwgY2VsbCA9PT0gJyAnKSBhdHRhY2thYmxlQ2VsbHMucHVzaChbY29sc1tpbmRleF0sIG9wcEJvYXJkLmluZGV4T2Yob3BwUm93KSArIDFdKVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgY2hvc2VuQ2VsbCA9IGF0dGFja2FibGVDZWxsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdHRhY2thYmxlQ2VsbHMubGVuZ3RoKV1cbiAgICAgICAgcGxheWVyLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayhjaG9zZW5DZWxsWzBdLCBjaG9zZW5DZWxsWzFdKVxuXG4gICAgICAgIHJldHVybiBjaG9zZW5DZWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXlOYW1lLCBnZXRCb2FyZCwgaXNDb21wdXRlciwgYXR0YWNrLCByYW5kb21BdHRhY2sgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclxuIiwiY29uc3QgU2hpcCA9IChuYW1lLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICAgIGxldCBoaXRzID0gMDtcblxuICAgIGNvbnN0IHJlYWRTaGlwTGVuZ3RoID0gKCkgPT4gc2hpcExlbmd0aDtcbiAgICBjb25zdCByZWFkSGl0cyA9ICgpID0+IGhpdHM7XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRzID09PSBzaGlwTGVuZ3RoO1xuICAgIFxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHsgXG4gICAgICBpZiAoIWlzU3VuaygpKSBoaXRzICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbmFtZSwgcmVhZFNoaXBMZW5ndGgsIHJlYWRIaXRzLCBoaXQsIGlzU3VuayB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgRGlzcGxheSA9IHJlcXVpcmUoJy4vZGlzcGxheScpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vZ2FtZXBsYXknKTtcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc3RhcnQnKVxuXG5EaXNwbGF5LnJlbmRlckJvYXJkcygpO1xuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEdhbWUoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=