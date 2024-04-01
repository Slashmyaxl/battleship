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
    background: lightblue;
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
    border: 2px solid #ddd;
    border-radius: 3px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,YAAY;IACZ,gBAAgB;;AAEpB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n:root {\n    background: #444;\n    font-size: 18px;\n}\n\n.container {\n    background: #efefef;\n    margin: 0 auto;\n    min-height: 100vh;\n    width: min(95%, 1280px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.6rem;\n}\n\nh1 {\n    letter-spacing: 0.1rem;\n    text-align: center;\n    margin-top: 0.5rem;\n}\n\n.marquee {\n    padding: 0.25rem;\n    color: #222;\n    background: lightyellow;\n    text-align: center;\n    width: 400px;\n}\n\n.button#start {\n    padding: 2px 4px;\n    border-radius: 5px;\n}\n\n.board-container {\n    background: lightgray;\n    width: min(96%, 890px);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 420px);\n    justify-content: center;\n    gap: 0.75rem;\n    padding: 0.75rem;\n\n}\n\n.board {\n    background: lightblue;\n    height: 420px;\n    border: 5px solid #222;\n    border-radius: 5px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.cell {\n    height: 10%;\n    width: 10%;\n    border: 1px dotted black;\n}\n\n.log {\n    background: #111;\n    width: min(98%, 600px);\n    height: 180px;\n    border: 2px solid #ddd;\n    border-radius: 3px;\n}"],"sourceRoot":""}]);
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
const { cols } = __webpack_require__(/*! ./conversions */ "./src/conversions.js")

function createDOMElement (element, classes, id) {
    const newElement = document.createElement(element);
    if (classes) [...classes].forEach(value => newElement.classList.add(value))
    if (id) newElement.setAttribute('id', id);

    return newElement;
}

const renderBoard = (board, domBoard) => {
    while (domBoard.firstChild) domBoard.removeChild(domBoard.lastChild);
    board.forEach(row => row.forEach((cell, index) => {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(row) + 1;
        if (isOccupied(cell)) newCell.style.backgroundColor = '#aaa';
        domBoard.appendChild(newCell);
    }))
}

module.exports = { createDOMElement, renderBoard }

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createDOMElement } = __webpack_require__(/*! ./display-helpers */ "./src/display-helpers.js")

const p1Board = createDOMElement('div', ['board'], 'p1')
const p2Board = createDOMElement('div', ['board'], 'p2')

const renderDisplay = () => {
    const container = document.querySelector('.board-container');
    container.appendChild(p1Board);
    container.appendChild(p2Board);
}

module.exports = { renderDisplay, p1Board, p2Board };


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
const { renderBoard } = __webpack_require__(/*! ./display-helpers */ "./src/display-helpers.js");
const { p1Board, p2Board } = __webpack_require__ (/*! ./display */ "./src/display.js")

function gameplay() {
    const players = [Player('You'), Player('Computer', true)]
    let activePlayer = players[0];

    renderBoard(players[0].getBoard().readBoard(), p1Board);
    renderBoard(players[1].getBoard().readBoard(), p2Board);

    const getPlayers = () => players;

    function inactivePlayer()  {
        if (activePlayer === players[0]) return players[1];
        return players[0];
    }

    function placeAllShips() { 
        activePlayer.getBoard().placeShip('Destroyer', 'B', 2);
        activePlayer.getBoard().placeShip('Carrier', 'C', 9);
        activePlayer.getBoard().placeShip('Cruiser', 'A', 1, 'vertical');
        activePlayer.getBoard().placeShip('Battleship', 'E', 5, 'vertical');
        activePlayer.getBoard().placeShip('Submarine', 'H', 1, 'vertical');
        inactivePlayer().getBoard().placeShip('Destroyer', 'A', 2);
        inactivePlayer().getBoard().placeShip('Carrier', 'B', 9);
        inactivePlayer().getBoard().placeShip('Cruiser', 'J', 1, 'vertical');
        inactivePlayer().getBoard().placeShip('Battleship', 'E', 5, 'vertical');
        inactivePlayer().getBoard().placeShip('Submarine', 'H', 1, 'vertical');
    };

    function startGame() {
        placeAllShips();
        renderBoard(players[0].getBoard().readBoard(), p1Board);
        renderBoard(players[1].getBoard().readBoard(), p2Board); 
    }

    const switchPlayer = () => {
        if (activePlayer === players[0]) activePlayer = players[1];
        else activePlayer = players[0];
    }

    function playerTurn(x, y) {
        if (!activePlayer.isComputer()) activePlayer.attack(x, y, inactivePlayer());
        else activePlayer.randomAttack(inactivePlayer())
    }

    return { getPlayers, startGame }
}

module.exports = gameplay;

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
    }

    const randomAttack = (player) => {
        const oppBoard = player.getBoard().readBoard();
        const attackableCells = [];

        oppBoard.forEach(oppRow => oppRow.forEach((cell, index) => {
            if(isOccupied(cell) || cell === ' ') attackableCells.push([cols[index], oppBoard.indexOf(oppRow) + 1])
        }));

        const chosenCell = attackableCells[Math.floor(Math.random() * attackableCells.length)]
        player.getBoard().receiveAttack(chosenCell[0], chosenCell[1])
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


const { renderDisplay } = __webpack_require__(/*! ./display */ "./src/display.js");
const gameplay = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");

const startButton = document.querySelector('button#start')

renderDisplay();
gameplay();

startButton.addEventListener('click', () => gameplay().startGame())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjs7QUFFdEIsUUFBUSxnQkFBZ0IsRUFBRSxtQkFBTyxDQUFDLG1DQUFXO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLHFDQUFZOztBQUVyQzs7QUFFQTtBQUNBOztBQUVBLG1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9kaXNwbGF5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZ2FtZXBsYXkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbjpyb290IHtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogbWluKDk1JSwgMTI4MHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNnJlbTtcbn1cblxuaDEge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLm1hcnF1ZWUge1xuICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgY29sb3I6ICMyMjI7XG4gICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA0MDBweDtcbn1cblxuLmJ1dHRvbiNzdGFydCB7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICB3aWR0aDogbWluKDk2JSwgODkwcHgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDQyMHB4KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDAuNzVyZW07XG4gICAgcGFkZGluZzogMC43NXJlbTtcblxufVxuXG4uYm9hcmQge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMyMjI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2VsbCB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XG59XG5cbi5sb2cge1xuICAgIGJhY2tncm91bmQ6ICMxMTE7XG4gICAgd2lkdGg6IG1pbig5OCUsIDYwMHB4KTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcbn1cXG5cXG46cm9vdCB7XFxuICAgIGJhY2tncm91bmQ6ICM0NDQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IG1pbig5NSUsIDEyODBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC42cmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4ubWFycXVlZSB7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxuICAgIGNvbG9yOiAjMjIyO1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5idXR0b24jc3RhcnQge1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxuICAgIHdpZHRoOiBtaW4oOTYlLCA4OTBweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MjBweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNzVyZW07XFxuICAgIHBhZGRpbmc6IDAuNzVyZW07XFxuXFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG4gICAgaGVpZ2h0OiA0MjBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzIyMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCBibGFjaztcXG59XFxuXFxuLmxvZyB7XFxuICAgIGJhY2tncm91bmQ6ICMxMTE7XFxuICAgIHdpZHRoOiBtaW4oOTglLCA2MDBweCk7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29scyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG5cbmNvbnN0IHJvdyA9IChyb3dDb29yZCkgPT4ge1xuICAgIGlmIChyb3dDb29yZCA+IDEwIHx8IHJvd0Nvb3JkIDwgMSkgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzIScpXG4gICAgcmV0dXJuIHJvd0Nvb3JkIC0gMTtcbn1cblxuY29uc3QgY29sdW1uID0gKGNvbHVtbkNvb3JkKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gY29scy5pbmRleE9mKGNvbHVtbkNvb3JkKTtcbiAgXG4gIGlmIChpbmRleCA+IDkgfHwgaW5kZXggPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZHMhJylcbiAgcmV0dXJuIGluZGV4XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyByb3csIGNvbHVtbiwgY29scyB9IiwiY29uc3QgeyBpc09jY3VwaWVkIH0gPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbmNvbnN0IHsgY29scyB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpXG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUVsZW1lbnQgKGVsZW1lbnQsIGNsYXNzZXMsIGlkKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKGNsYXNzZXMpIFsuLi5jbGFzc2VzXS5mb3JFYWNoKHZhbHVlID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWx1ZSkpXG4gICAgaWYgKGlkKSBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoYm9hcmQsIGRvbUJvYXJkKSA9PiB7XG4gICAgd2hpbGUgKGRvbUJvYXJkLmZpcnN0Q2hpbGQpIGRvbUJvYXJkLnJlbW92ZUNoaWxkKGRvbUJvYXJkLmxhc3RDaGlsZCk7XG4gICAgYm9hcmQuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3Q2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIG5ld0NlbGwuZGF0YXNldC5jb2x1bW4gPSBjb2xzW2luZGV4XTtcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LnJvdyA9IGJvYXJkLmluZGV4T2Yocm93KSArIDE7XG4gICAgICAgIGlmIChpc09jY3VwaWVkKGNlbGwpKSBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYWFhJztcbiAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQobmV3Q2VsbCk7XG4gICAgfSkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBjcmVhdGVET01FbGVtZW50LCByZW5kZXJCb2FyZCB9IiwiY29uc3QgeyBjcmVhdGVET01FbGVtZW50IH0gPSByZXF1aXJlKCcuL2Rpc3BsYXktaGVscGVycycpXG5cbmNvbnN0IHAxQm9hcmQgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ2JvYXJkJ10sICdwMScpXG5jb25zdCBwMkJvYXJkID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydib2FyZCddLCAncDInKVxuXG5jb25zdCByZW5kZXJEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1jb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocDFCb2FyZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHAyQm9hcmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyRGlzcGxheSwgcDFCb2FyZCwgcDJCb2FyZCB9O1xuIiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpXG5jb25zdCB7IHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5jb25zdCB7IGNoZWNrQ29sbGlzaW9ucywgaXNPY2N1cGllZCB9ID0gcmVxdWlyZSAoJy4vaGVscGVycycpXG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgKGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgbmV3Um93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbmV3Um93LnB1c2goXCIgXCIpO1xuICAgICAgfVxuICAgICAgYm9hcmQucHVzaChuZXdSb3cpO1xuICAgIH1cbiAgfSkoKTtcblxuICBjb25zdCBjYXJyaWVyID0gU2hpcCgnQ2FycmllcicsIDUpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCgnQmF0dGxlc2hpcCcsIDQpO1xuICBjb25zdCBjcnVpc2VyID0gU2hpcCgnQ3J1aXNlcicsIDMpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwKCdTdWJtYXJpbmUnLCAzKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgnRGVzdHJveWVyJywgMik7XG5cbiAgLy8gRm9yIGRldmVsb3BtZW50IHVzZSB0byB0ZXN0IHdoZXRoZXIgYWxsIHNoaXBzIGFyZSBzdW5rXG4gIFxuICBjb25zdCBhbGxTaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl07XG4gIGNvbnN0IGdldEFsbFNoaXBzID0gKCkgPT4gYWxsU2hpcHM7XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT5cbiAgICBjYXJyaWVyLmlzU3VuaygpICYmIGJhdHRsZXNoaXAuaXNTdW5rKCkgJiYgY3J1aXNlci5pc1N1bmsoKSAmJiBzdWJtYXJpbmUuaXNTdW5rKCkgJiYgZGVzdHJveWVyLmlzU3VuaygpO1xuXG4gIGNvbnN0IHJlYWRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgIGxldCBuZXdTaGlwO1xuICAgIGxldCBjb2xJbmRleCA9IGNvbHVtbih4KTtcbiAgICBsZXQgcm93SW5kZXggPSByb3coeSk7XG5cbiAgICBzd2l0Y2ggKHNoaXApIHtcbiAgICAgIGNhc2UgJ0NhcnJpZXInOlxuICAgICAgICBuZXdTaGlwID0gY2FycmllcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgICAgbmV3U2hpcCA9IGJhdHRsZXNoaXA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ3J1aXNlcic6XG4gICAgICAgIG5ld1NoaXAgPSBjcnVpc2VyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1N1Ym1hcmluZSc6XG4gICAgICAgIG5ld1NoaXAgPSBzdWJtYXJpbmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbmV3U2hpcCA9IGRlc3Ryb3llcjtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tDb2xsaXNpb25zKGJvYXJkLCB4LCB5LCBvcmllbnRhdGlvbiwgbmV3U2hpcCkpIHRocm93IG5ldyBFcnJvcignU2hpcCBDb2xsaXNpb24hJylcblxuICAgIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuZXdTaGlwLnJlYWRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBib2FyZFtyb3dJbmRleF1bY29sSW5kZXhdID0gbmV3U2hpcDtcbiAgICAgICAgcm93SW5kZXgrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbmV3U2hpcC5yZWFkU2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgYm9hcmRbcm93SW5kZXhdW2NvbEluZGV4XSA9IG5ld1NoaXA7XG4gICAgICAgIGNvbEluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3QgY2VsbCA9IGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXTtcbiAgICBpZiAoY2VsbCA9PT0gXCJYXCIgfHwgY2VsbCA9PT0gXCJPXCIpIHRocm93IG5ldyBFcnJvcignQ2VsbCBhbHJlYWR5IGhpdCEnKVxuICAgIGVsc2UgaWYgKGlzT2NjdXBpZWQoY2VsbCkpIHtcbiAgICAgIGNlbGwuaGl0KCk7XG4gICAgICBib2FyZFtyb3coeSldW2NvbHVtbih4KV0gPSBcIlhcIjtcbiAgICB9IGVsc2UgYm9hcmRbcm93KHkpXVtjb2x1bW4oeCldID0gXCJPXCI7XG4gIH1cblxuICByZXR1cm4geyByZWFkQm9hcmQsIHJlY2VpdmVBdHRhY2ssIHBsYWNlU2hpcCwgYWxsU2hpcHNTdW5rLCBnZXRBbGxTaGlwcyB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuY29uc3QgeyByZW5kZXJCb2FyZCB9ID0gcmVxdWlyZSgnLi9kaXNwbGF5LWhlbHBlcnMnKTtcbmNvbnN0IHsgcDFCb2FyZCwgcDJCb2FyZCB9ID0gcmVxdWlyZSAoJy4vZGlzcGxheScpXG5cbmZ1bmN0aW9uIGdhbWVwbGF5KCkge1xuICAgIGNvbnN0IHBsYXllcnMgPSBbUGxheWVyKCdZb3UnKSwgUGxheWVyKCdDb21wdXRlcicsIHRydWUpXVxuICAgIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuXG4gICAgcmVuZGVyQm9hcmQocGxheWVyc1swXS5nZXRCb2FyZCgpLnJlYWRCb2FyZCgpLCBwMUJvYXJkKTtcbiAgICByZW5kZXJCb2FyZChwbGF5ZXJzWzFdLmdldEJvYXJkKCkucmVhZEJvYXJkKCksIHAyQm9hcmQpO1xuXG4gICAgY29uc3QgZ2V0UGxheWVycyA9ICgpID0+IHBsYXllcnM7XG5cbiAgICBmdW5jdGlvbiBpbmFjdGl2ZVBsYXllcigpICB7XG4gICAgICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0pIHJldHVybiBwbGF5ZXJzWzFdO1xuICAgICAgICByZXR1cm4gcGxheWVyc1swXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZUFsbFNoaXBzKCkgeyBcbiAgICAgICAgYWN0aXZlUGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKCdEZXN0cm95ZXInLCAnQicsIDIpO1xuICAgICAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ0NhcnJpZXInLCAnQycsIDkpO1xuICAgICAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ0NydWlzZXInLCAnQScsIDEsICd2ZXJ0aWNhbCcpO1xuICAgICAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ0JhdHRsZXNoaXAnLCAnRScsIDUsICd2ZXJ0aWNhbCcpO1xuICAgICAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsICdIJywgMSwgJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGluYWN0aXZlUGxheWVyKCkuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ0Rlc3Ryb3llcicsICdBJywgMik7XG4gICAgICAgIGluYWN0aXZlUGxheWVyKCkuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ0NhcnJpZXInLCAnQicsIDkpO1xuICAgICAgICBpbmFjdGl2ZVBsYXllcigpLmdldEJvYXJkKCkucGxhY2VTaGlwKCdDcnVpc2VyJywgJ0onLCAxLCAndmVydGljYWwnKTtcbiAgICAgICAgaW5hY3RpdmVQbGF5ZXIoKS5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsICdFJywgNSwgJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGluYWN0aXZlUGxheWVyKCkuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsICdIJywgMSwgJ3ZlcnRpY2FsJyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgcGxhY2VBbGxTaGlwcygpO1xuICAgICAgICByZW5kZXJCb2FyZChwbGF5ZXJzWzBdLmdldEJvYXJkKCkucmVhZEJvYXJkKCksIHAxQm9hcmQpO1xuICAgICAgICByZW5kZXJCb2FyZChwbGF5ZXJzWzFdLmdldEJvYXJkKCkucmVhZEJvYXJkKCksIHAyQm9hcmQpOyBcbiAgICB9XG5cbiAgICBjb25zdCBzd2l0Y2hQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0pIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMV07XG4gICAgICAgIGVsc2UgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5ZXJUdXJuKHgsIHkpIHtcbiAgICAgICAgaWYgKCFhY3RpdmVQbGF5ZXIuaXNDb21wdXRlcigpKSBhY3RpdmVQbGF5ZXIuYXR0YWNrKHgsIHksIGluYWN0aXZlUGxheWVyKCkpO1xuICAgICAgICBlbHNlIGFjdGl2ZVBsYXllci5yYW5kb21BdHRhY2soaW5hY3RpdmVQbGF5ZXIoKSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRQbGF5ZXJzLCBzdGFydEdhbWUgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVwbGF5OyIsImNvbnN0IHsgcm93LCBjb2x1bW4gfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKVxuXG5mdW5jdGlvbiBpc09jY3VwaWVkKGNlbGwpIHtcbiAgcmV0dXJuIHR5cGVvZiBjZWxsID09PSAnb2JqZWN0Jztcbn1cblxuY29uc3QgY2hlY2tDb2xsaXNpb25zID0gZnVuY3Rpb24gY2hlY2tGb3JTaGlwUGxhY2VtZW50Q29sbGlzaW9ucyhib2FyZCwgeCwgeSwgb3JpZW50YXRpb24sIHNoaXApIHtcbiAgY29uc3Qgc2hpcFNsb3QgPSBbXTtcbiAgbGV0IGNvbENoZWNrID0gY29sdW1uKHgpO1xuICBsZXQgcm93Q2hlY2sgPSByb3coeSk7XG5cbiAgaWYob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLnJlYWRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgc2hpcFNsb3QucHVzaChib2FyZFtyb3dDaGVja11bY29sQ2hlY2tdKTtcbiAgICAgIHJvd0NoZWNrKys7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXAucmVhZFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBzaGlwU2xvdC5wdXNoKGJvYXJkW3Jvd0NoZWNrXVtjb2xDaGVja10pO1xuICAgICAgY29sQ2hlY2srKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2hpcFNsb3QuZmluZChpc09jY3VwaWVkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNoZWNrQ29sbGlzaW9ucywgaXNPY2N1cGllZCB9XG4iLCJjb25zdCB7IGlzT2NjdXBpZWQgfSA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuY29uc3QgeyBjb2xzIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSwgY29tcHV0ZXIgPSBmYWxzZSwgYm9hcmQgPSBHYW1lYm9hcmQoKSkge1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gKCkgPT4gbmFtZTtcblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgICBjb25zdCBpc0NvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXIgPT09IHRydWVcblxuICAgIGNvbnN0IGF0dGFjayA9ICh4LCB5LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgcGxheWVyLmdldEJvYXJkKCkucmVjZWl2ZUF0dGFjayh4LCB5KVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3Qgb3BwQm9hcmQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5yZWFkQm9hcmQoKTtcbiAgICAgICAgY29uc3QgYXR0YWNrYWJsZUNlbGxzID0gW107XG5cbiAgICAgICAgb3BwQm9hcmQuZm9yRWFjaChvcHBSb3cgPT4gb3BwUm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihpc09jY3VwaWVkKGNlbGwpIHx8IGNlbGwgPT09ICcgJykgYXR0YWNrYWJsZUNlbGxzLnB1c2goW2NvbHNbaW5kZXhdLCBvcHBCb2FyZC5pbmRleE9mKG9wcFJvdykgKyAxXSlcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGNob3NlbkNlbGwgPSBhdHRhY2thYmxlQ2VsbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXR0YWNrYWJsZUNlbGxzLmxlbmd0aCldXG4gICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soY2hvc2VuQ2VsbFswXSwgY2hvc2VuQ2VsbFsxXSlcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5TmFtZSwgZ2V0Qm9hcmQsIGlzQ29tcHV0ZXIsIGF0dGFjaywgcmFuZG9tQXR0YWNrIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJcbiIsImNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IGxlbmd0aDtcbiAgICBsZXQgaGl0cyA9IDA7XG5cbiAgICBjb25zdCByZWFkU2hpcExlbmd0aCA9ICgpID0+IHNoaXBMZW5ndGg7XG4gICAgY29uc3QgcmVhZEhpdHMgPSAoKSA9PiBoaXRzO1xuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0cyA9PT0gc2hpcExlbmd0aDtcbiAgICBcbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7IFxuICAgICAgaWYgKCFpc1N1bmsoKSkgaGl0cyArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWUsIHJlYWRTaGlwTGVuZ3RoLCByZWFkSGl0cywgaGl0LCBpc1N1bmsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHsgcmVuZGVyRGlzcGxheSB9ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5jb25zdCBnYW1lcGxheSA9IHJlcXVpcmUoJy4vZ2FtZXBsYXknKTtcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc3RhcnQnKVxuXG5yZW5kZXJEaXNwbGF5KCk7XG5nYW1lcGxheSgpO1xuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdhbWVwbGF5KCkuc3RhcnRHYW1lKCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9