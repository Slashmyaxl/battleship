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
const { cols } = __webpack_require__(/*! ./conversions */ "./src/conversions.js");
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
    board.forEach(row => row.forEach(() => {
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

module.exports = { createDOMElement, renderBoard, renderCells }

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { renderBoard, renderCells } = __webpack_require__(/*! ./display-helpers */ "./src/display-helpers.js");


const Display =  {
    container: document.querySelector('.board-container'),
    marquee: document.querySelector('.marquee'),
    p1Board: renderBoard('p1'),
    p2Board: renderBoard('p2'),
    gamelog: document.querySelector('.log'),

    renderDisplay () {
        this.container.appendChild(this.p1Board);
        this.container.appendChild(this.p2Board);
    },

    updateDisplay (player) {
        if (player.isComputer()) renderCells(player, this.p2Board);
        else renderCells(player, this.p1Board)
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

const players = [Player('You'), Player('Computer', true)];
let activePlayer = players[0];

const getInactivePlayer = () => {
    if (activePlayer === players[0]) return players[1];
    return players[0];
}

function playerTurn(player) {
    const defender = getInactivePlayer();
    if (!player.isComputer()) {
        const oppCells = document.querySelectorAll('#p2 > .cell');
        oppCells.forEach(cell => cell.addEventListener('click', () => {
            player.attack(cell.dataset.column, cell.dataset.row, defender);
            Display.updateDisplay(defender);
            activePlayer = defender
            playerTurn(activePlayer);      
        }))
    } else {
        player.randomAttack(defender);
        Display.updateDisplay(defender);
        activePlayer = defender;
        playerTurn(activePlayer);
    }
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

function gameplay() {

  placeAllShips();     
  Display.updateDisplay(activePlayer);
  Display.updateDisplay(getInactivePlayer());
  playerTurn(activePlayer);

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


const Display = __webpack_require__(/*! ./display */ "./src/display.js");
const gameplay = __webpack_require__(/*! ./gameplay */ "./src/gameplay.js");

const startButton = document.querySelector('button#start')

Display.renderDisplay();

console.log(Display);

startButton.addEventListener('click', () => gameplay())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRXRCLGdCQUFnQixtQkFBTyxDQUFDLG1DQUFXO0FBQ25DLGlCQUFpQixtQkFBTyxDQUFDLHFDQUFZOztBQUVyQzs7QUFFQTs7QUFFQTs7QUFFQSx1RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZGlzcGxheS1oZWxwZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2dhbWVwbGF5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxufVxuXG46cm9vdCB7XG4gICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IG1pbig5NSUsIDEyODBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZyZW07XG59XG5cbmgxIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5tYXJxdWVlIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi5idXR0b24jc3RhcnQge1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgd2lkdGg6IG1pbig5NiUsIDg5MHB4KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MjBweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG5cbn1cblxuLmJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgaGVpZ2h0OiA0MjBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMjIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNlbGwge1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiAxMCU7XG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xufVxuXG4ubG9nIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgIHdpZHRoOiBtaW4oOTglLCA2MDBweCk7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBtaW4oOTUlLCAxMjgwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1hcnF1ZWUge1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcbiAgICBjb2xvcjogIzIyMjtcXG4gICAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uYnV0dG9uI3N0YXJ0IHtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xcbiAgICB3aWR0aDogbWluKDk2JSwgODkwcHgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNDIwcHgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcblxcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxuICAgIGhlaWdodDogNDIwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMyMjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XFxufVxcblxcbi5sb2cge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xcbiAgICB3aWR0aDogbWluKDk4JSwgNjAwcHgpO1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbHMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuXG5jb25zdCByb3cgPSAocm93Q29vcmQpID0+IHtcbiAgICBpZiAocm93Q29vcmQgPiAxMCB8fCByb3dDb29yZCA8IDEpIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kcyEnKVxuICAgIHJldHVybiByb3dDb29yZCAtIDE7XG59XG5cbmNvbnN0IGNvbHVtbiA9IChjb2x1bW5Db29yZCkgPT4ge1xuICBjb25zdCBpbmRleCA9IGNvbHMuaW5kZXhPZihjb2x1bW5Db29yZCk7XG4gIFxuICBpZiAoaW5kZXggPiA5IHx8IGluZGV4IDwgMCkgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzIScpXG4gIHJldHVybiBpbmRleFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcm93LCBjb2x1bW4sIGNvbHMgfSIsImNvbnN0IHsgaXNPY2N1cGllZCB9ID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5jb25zdCB7IGNvbHMgfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUVsZW1lbnQgKGVsZW1lbnQsIGNsYXNzZXMsIGlkKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKGNsYXNzZXMpIFsuLi5jbGFzc2VzXS5mb3JFYWNoKHZhbHVlID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWx1ZSkpXG4gICAgaWYgKGlkKSBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpLnJlYWRCb2FyZCgpO1xuICAgIGNvbnN0IGRvbUJvYXJkID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydib2FyZCddLCBpZCk7XG4gICAgYm9hcmQuZm9yRWFjaChyb3cgPT4gcm93LmZvckVhY2goKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICBkb21Cb2FyZC5hcHBlbmRDaGlsZChuZXdDZWxsKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGRvbUJvYXJkXG59XG5cbmNvbnN0IHJlbmRlckNlbGxzID0gKHBsYXllciwgZG9tQm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nZXRCb2FyZCgpLnJlYWRCb2FyZCgpO1xuICAgIHdoaWxlIChkb21Cb2FyZC5maXJzdENoaWxkKSBkb21Cb2FyZC5yZW1vdmVDaGlsZChkb21Cb2FyZC5sYXN0Q2hpbGQpO1xuICAgIGJvYXJkLmZvckVhY2gocm93ID0+IHJvdy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDZWxsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydjZWxsJ10pXG4gICAgICAgIG5ld0NlbGwuZGF0YXNldC5jb2x1bW4gPSBjb2xzW2luZGV4XTtcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LnJvdyA9IGJvYXJkLmluZGV4T2Yocm93KSArIDE7XG4gICAgICAgIGlmIChpc09jY3VwaWVkKGNlbGwpKSBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNzc3JztcbiAgICAgICAgaWYgKGNlbGwgPT09ICdYJykgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgaWYgKGNlbGwgPT09ICdPJykgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmVlbidcbiAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQobmV3Q2VsbCk7XG4gICAgfSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgY3JlYXRlRE9NRWxlbWVudCwgcmVuZGVyQm9hcmQsIHJlbmRlckNlbGxzIH0iLCJjb25zdCB7IHJlbmRlckJvYXJkLCByZW5kZXJDZWxscyB9ID0gcmVxdWlyZSgnLi9kaXNwbGF5LWhlbHBlcnMnKTtcblxuXG5jb25zdCBEaXNwbGF5ID0gIHtcbiAgICBjb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZC1jb250YWluZXInKSxcbiAgICBtYXJxdWVlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFycXVlZScpLFxuICAgIHAxQm9hcmQ6IHJlbmRlckJvYXJkKCdwMScpLFxuICAgIHAyQm9hcmQ6IHJlbmRlckJvYXJkKCdwMicpLFxuICAgIGdhbWVsb2c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2cnKSxcblxuICAgIHJlbmRlckRpc3BsYXkgKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnAxQm9hcmQpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnAyQm9hcmQpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVEaXNwbGF5IChwbGF5ZXIpIHtcbiAgICAgICAgaWYgKHBsYXllci5pc0NvbXB1dGVyKCkpIHJlbmRlckNlbGxzKHBsYXllciwgdGhpcy5wMkJvYXJkKTtcbiAgICAgICAgZWxzZSByZW5kZXJDZWxscyhwbGF5ZXIsIHRoaXMucDFCb2FyZClcbiAgICB9XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXk7XG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJylcbmNvbnN0IHsgcm93LCBjb2x1bW4gfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IHsgY2hlY2tDb2xsaXNpb25zLCBpc09jY3VwaWVkIH0gPSByZXF1aXJlICgnLi9oZWxwZXJzJylcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICAoZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdSb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBuZXdSb3cucHVzaChcIiBcIik7XG4gICAgICB9XG4gICAgICBib2FyZC5wdXNoKG5ld1Jvdyk7XG4gICAgfVxuICB9KSgpO1xuXG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwKCdDYXJyaWVyJywgNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKCdCYXR0bGVzaGlwJywgNCk7XG4gIGNvbnN0IGNydWlzZXIgPSBTaGlwKCdDcnVpc2VyJywgMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoJ1N1Ym1hcmluZScsIDMpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwKCdEZXN0cm95ZXInLCAyKTtcblxuICAvLyBGb3IgZGV2ZWxvcG1lbnQgdXNlIHRvIHRlc3Qgd2hldGhlciBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgXG4gIGNvbnN0IGFsbFNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgY29uc3QgZ2V0QWxsU2hpcHMgPSAoKSA9PiBhbGxTaGlwcztcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PlxuICAgIGNhcnJpZXIuaXNTdW5rKCkgJiYgYmF0dGxlc2hpcC5pc1N1bmsoKSAmJiBjcnVpc2VyLmlzU3VuaygpICYmIHN1Ym1hcmluZS5pc1N1bmsoKSAmJiBkZXN0cm95ZXIuaXNTdW5rKCk7XG5cbiAgY29uc3QgcmVhZEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgbGV0IG5ld1NoaXA7XG4gICAgbGV0IGNvbEluZGV4ID0gY29sdW1uKHgpO1xuICAgIGxldCByb3dJbmRleCA9IHJvdyh5KTtcblxuICAgIHN3aXRjaCAoc2hpcCkge1xuICAgICAgY2FzZSAnQ2Fycmllcic6XG4gICAgICAgIG5ld1NoaXAgPSBjYXJyaWVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0JhdHRsZXNoaXAnOlxuICAgICAgICBuZXdTaGlwID0gYmF0dGxlc2hpcDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDcnVpc2VyJzpcbiAgICAgICAgbmV3U2hpcCA9IGNydWlzZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnU3VibWFyaW5lJzpcbiAgICAgICAgbmV3U2hpcCA9IHN1Ym1hcmluZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuZXdTaGlwID0gZGVzdHJveWVyO1xuICAgIH1cblxuICAgIGlmIChjaGVja0NvbGxpc2lvbnMoYm9hcmQsIHgsIHksIG9yaWVudGF0aW9uLCBuZXdTaGlwKSkgdGhyb3cgbmV3IEVycm9yKCdTaGlwIENvbGxpc2lvbiEnKVxuXG4gICAgaWYob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG5ld1NoaXAucmVhZFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBuZXdTaGlwO1xuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuZXdTaGlwLnJlYWRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBib2FyZFtyb3dJbmRleF1bY29sSW5kZXhdID0gbmV3U2hpcDtcbiAgICAgICAgY29sSW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBjZWxsID0gYm9hcmRbcm93KHkpXVtjb2x1bW4oeCldO1xuICAgIGlmIChjZWxsID09PSBcIlhcIiB8fCBjZWxsID09PSBcIk9cIikgdGhyb3cgbmV3IEVycm9yKCdDZWxsIGFscmVhZHkgaGl0IScpXG4gICAgZWxzZSBpZiAoaXNPY2N1cGllZChjZWxsKSkge1xuICAgICAgY2VsbC5oaXQoKTtcbiAgICAgIGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXSA9IFwiWFwiO1xuICAgIH0gZWxzZSBib2FyZFtyb3coeSldW2NvbHVtbih4KV0gPSBcIk9cIjtcbiAgfVxuXG4gIHJldHVybiB7IHJlYWRCb2FyZCwgcmVjZWl2ZUF0dGFjaywgcGxhY2VTaGlwLCBhbGxTaGlwc1N1bmssIGdldEFsbFNoaXBzIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5cbmNvbnN0IHBsYXllcnMgPSBbUGxheWVyKCdZb3UnKSwgUGxheWVyKCdDb21wdXRlcicsIHRydWUpXTtcbmxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuXG5jb25zdCBnZXRJbmFjdGl2ZVBsYXllciA9ICgpID0+IHtcbiAgICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdKSByZXR1cm4gcGxheWVyc1sxXTtcbiAgICByZXR1cm4gcGxheWVyc1swXTtcbn1cblxuZnVuY3Rpb24gcGxheWVyVHVybihwbGF5ZXIpIHtcbiAgICBjb25zdCBkZWZlbmRlciA9IGdldEluYWN0aXZlUGxheWVyKCk7XG4gICAgaWYgKCFwbGF5ZXIuaXNDb21wdXRlcigpKSB7XG4gICAgICAgIGNvbnN0IG9wcENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3AyID4gLmNlbGwnKTtcbiAgICAgICAgb3BwQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIuYXR0YWNrKGNlbGwuZGF0YXNldC5jb2x1bW4sIGNlbGwuZGF0YXNldC5yb3csIGRlZmVuZGVyKTtcbiAgICAgICAgICAgIERpc3BsYXkudXBkYXRlRGlzcGxheShkZWZlbmRlcik7XG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBkZWZlbmRlclxuICAgICAgICAgICAgcGxheWVyVHVybihhY3RpdmVQbGF5ZXIpOyAgICAgIFxuICAgICAgICB9KSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIucmFuZG9tQXR0YWNrKGRlZmVuZGVyKTtcbiAgICAgICAgRGlzcGxheS51cGRhdGVEaXNwbGF5KGRlZmVuZGVyKTtcbiAgICAgICAgYWN0aXZlUGxheWVyID0gZGVmZW5kZXI7XG4gICAgICAgIHBsYXllclR1cm4oYWN0aXZlUGxheWVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlQWxsU2hpcHMoKSB7IFxuICAgIGFjdGl2ZVBsYXllci5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnRGVzdHJveWVyJywgJ0InLCAyKTtcbiAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ0NhcnJpZXInLCAnQycsIDkpO1xuICAgIGFjdGl2ZVBsYXllci5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnQ3J1aXNlcicsICdBJywgMywgJ3ZlcnRpY2FsJyk7XG4gICAgYWN0aXZlUGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKCdCYXR0bGVzaGlwJywgJ0YnLCA0LCAndmVydGljYWwnKTtcbiAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoJ1N1Ym1hcmluZScsICdIJywgMSwgJ3ZlcnRpY2FsJyk7XG4gICAgZ2V0SW5hY3RpdmVQbGF5ZXIoKS5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnRGVzdHJveWVyJywgJ0EnLCAyKTtcbiAgICBnZXRJbmFjdGl2ZVBsYXllcigpLmdldEJvYXJkKCkucGxhY2VTaGlwKCdDYXJyaWVyJywgJ0InLCAxMCk7XG4gICAgZ2V0SW5hY3RpdmVQbGF5ZXIoKS5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnQ3J1aXNlcicsICdKJywgMSwgJ3ZlcnRpY2FsJyk7XG4gICAgZ2V0SW5hY3RpdmVQbGF5ZXIoKS5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnQmF0dGxlc2hpcCcsICdFJywgNSwgJ3ZlcnRpY2FsJyk7XG4gICAgZ2V0SW5hY3RpdmVQbGF5ZXIoKS5nZXRCb2FyZCgpLnBsYWNlU2hpcCgnU3VibWFyaW5lJywgJ0gnLCAxLCAndmVydGljYWwnKTtcbn07XG5cbmZ1bmN0aW9uIGdhbWVwbGF5KCkge1xuXG4gIHBsYWNlQWxsU2hpcHMoKTsgICAgIFxuICBEaXNwbGF5LnVwZGF0ZURpc3BsYXkoYWN0aXZlUGxheWVyKTtcbiAgRGlzcGxheS51cGRhdGVEaXNwbGF5KGdldEluYWN0aXZlUGxheWVyKCkpO1xuICBwbGF5ZXJUdXJuKGFjdGl2ZVBsYXllcik7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lcGxheTsiLCJjb25zdCB7IHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJylcblxuZnVuY3Rpb24gaXNPY2N1cGllZChjZWxsKSB7XG4gIHJldHVybiB0eXBlb2YgY2VsbCA9PT0gJ29iamVjdCc7XG59XG5cbmNvbnN0IGNoZWNrQ29sbGlzaW9ucyA9IGZ1bmN0aW9uIGNoZWNrRm9yU2hpcFBsYWNlbWVudENvbGxpc2lvbnMoYm9hcmQsIHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKSB7XG4gIGNvbnN0IHNoaXBTbG90ID0gW107XG4gIGxldCBjb2xDaGVjayA9IGNvbHVtbih4KTtcbiAgbGV0IHJvd0NoZWNrID0gcm93KHkpO1xuXG4gIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5yZWFkU2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgIHNoaXBTbG90LnB1c2goYm9hcmRbcm93Q2hlY2tdW2NvbENoZWNrXSk7XG4gICAgICByb3dDaGVjaysrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLnJlYWRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgc2hpcFNsb3QucHVzaChib2FyZFtyb3dDaGVja11bY29sQ2hlY2tdKTtcbiAgICAgIGNvbENoZWNrKys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNoaXBTbG90LmZpbmQoaXNPY2N1cGllZCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBjaGVja0NvbGxpc2lvbnMsIGlzT2NjdXBpZWQgfVxuIiwiY29uc3QgeyBpc09jY3VwaWVkIH0gPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbmNvbnN0IHsgY29scyB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuZnVuY3Rpb24gUGxheWVyKG5hbWUsIGNvbXB1dGVyID0gZmFsc2UsIGJvYXJkID0gR2FtZWJvYXJkKCkpIHtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gICAgY29uc3QgaXNDb21wdXRlciA9ICgpID0+IGNvbXB1dGVyID09PSB0cnVlXG5cbiAgICBjb25zdCBhdHRhY2sgPSAoeCwgeSwgcGxheWVyKSA9PiB7XG4gICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soeCwgeSlcbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21BdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wcEJvYXJkID0gcGxheWVyLmdldEJvYXJkKCkucmVhZEJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGF0dGFja2FibGVDZWxscyA9IFtdO1xuXG4gICAgICAgIG9wcEJvYXJkLmZvckVhY2gob3BwUm93ID0+IG9wcFJvdy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYoaXNPY2N1cGllZChjZWxsKSB8fCBjZWxsID09PSAnICcpIGF0dGFja2FibGVDZWxscy5wdXNoKFtjb2xzW2luZGV4XSwgb3BwQm9hcmQuaW5kZXhPZihvcHBSb3cpICsgMV0pXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCBjaG9zZW5DZWxsID0gYXR0YWNrYWJsZUNlbGxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF0dGFja2FibGVDZWxscy5sZW5ndGgpXVxuICAgICAgICBwbGF5ZXIuZ2V0Qm9hcmQoKS5yZWNlaXZlQXR0YWNrKGNob3NlbkNlbGxbMF0sIGNob3NlbkNlbGxbMV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGlzcGxheU5hbWUsIGdldEJvYXJkLCBpc0NvbXB1dGVyLCBhdHRhY2ssIHJhbmRvbUF0dGFjayB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyXG4iLCJjb25zdCBTaGlwID0gKG5hbWUsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBsZW5ndGg7XG4gICAgbGV0IGhpdHMgPSAwO1xuXG4gICAgY29uc3QgcmVhZFNoaXBMZW5ndGggPSAoKSA9PiBzaGlwTGVuZ3RoO1xuICAgIGNvbnN0IHJlYWRIaXRzID0gKCkgPT4gaGl0cztcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdHMgPT09IHNoaXBMZW5ndGg7XG4gICAgXG4gICAgY29uc3QgaGl0ID0gKCkgPT4geyBcbiAgICAgIGlmICghaXNTdW5rKCkpIGhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBuYW1lLCByZWFkU2hpcExlbmd0aCwgcmVhZEhpdHMsIGhpdCwgaXNTdW5rIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5jb25zdCBnYW1lcGxheSA9IHJlcXVpcmUoJy4vZ2FtZXBsYXknKTtcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc3RhcnQnKVxuXG5EaXNwbGF5LnJlbmRlckRpc3BsYXkoKTtcblxuY29uc29sZS5sb2coRGlzcGxheSk7XG5cbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2FtZXBsYXkoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=