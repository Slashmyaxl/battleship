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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

.container {
    background: linear-gradient(178deg, hsl(46, 50%, 75%), hsl(36, 44%, 64%) 12%, hsl(36, 40%, 43%) 108%);
    background-repeat: no-repeat;
    margin: 0 auto;
    min-height: 100vh;
    width: clamp(430px, 95%, 1280px);
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
    padding: 0.5rem;
    color: #333;
    background: #fefefe;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    box-shadow: inset 2px 2px 4px #888,
                inset -2px -2px 2px lightgray;
    width: 400px;
    height: 4rem;
    font-size: 1.2rem;
}

.button#start {
    padding: 5px 8px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px #888;
    font-weight: bold;
    background: #fff;
    border: 1px solid black;
}

.button#start:active {
  transform: translateX(1px) translateY(1px); 
  box-shadow: 0 0 2px #888;
}

.button#start:hover {
  cursor: pointer;
  background-color: rgb(146, 252, 155);
}

.ship-container {
    width: min(500px, 98%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.ship:hover {
    transform: translate(-1px, -2px);
}

.rotated {
    transform-origin: 20px 20px;
    transform: rotate(90deg);
}

.boards-container {
    width: min(98%, 920px);
    display: grid;
    grid-template-columns: repeat(auto-fit, 412px);
    justify-content: center;
    gap: 0.8rem;
    padding: 0.25rem 0.75rem;
}

#p2 .cell:hover {
    background-color: rgba(20, 20, 20, 0.05);
    cursor: pointer;
}

.board-container {
    border: 6px solid #222;
    border-radius: 6px;
    box-shadow: 1px 2px 4px #888;
    letter-spacing: 0.025rem;
    background-color: skyblue
}

.board-header {
    height: 40px;
    background: #ddd;
    padding: 4px;
    font-size: 1.3rem;
    font-weight: bold;
    border-bottom: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.board {
    background: inherit;
    height: min-content;
    display: flex;
    flex-wrap: wrap;
}

.cell {
    height: 40px;
    width: 40px;
    outline: 1px dotted black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ship > .cell {
    background-color: #888;;
    color: #fefefe;
    font-weight: bold;
    outline: 1px solid #444;
    box-shadow: 1px 2px 3px #555;
}

.marker {
    width: 55%;
    height: 55%;
    border-radius: 50%;
    box-shadow: 0px 1px 4px #333;
}

.log-container {
    background: #111;
    width: min(98%, 600px);
    height: 196px;
    border: 2px solid #eee;
    border-radius: 4px;
    box-shadow: 1px 1px 4px #888;
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
    color: hsl(310, 100%, 88%);
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
  font-weight: bold;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf;AACJ;;AAEA;IACI,qGAAqG;IACrG,4BAA4B;IAC5B,cAAc;IACd,iBAAiB;IACjB,gCAAgC;IAChC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB;6CACyC;IACzC,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,4BAA4B;IAC5B,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;EACE,0CAA0C;EAC1C,wBAAwB;AAC1B;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,WAAW;IACX,wBAAwB;AAC5B;;AAEA;IACI,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,4BAA4B;IAC5B,wBAAwB;IACxB;AACJ;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,4BAA4B;IAC5B,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n:root {\n    background: #222;\n    font-size: 18px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\n}\n\n.container {\n    background: linear-gradient(178deg, hsl(46, 50%, 75%), hsl(36, 44%, 64%) 12%, hsl(36, 40%, 43%) 108%);\n    background-repeat: no-repeat;\n    margin: 0 auto;\n    min-height: 100vh;\n    width: clamp(430px, 95%, 1280px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.6rem;\n}\n\nh1 {\n    letter-spacing: 0.1rem;\n    text-align: center;\n    margin-top: 0.5rem;\n}\n\n.marquee {\n    padding: 0.5rem;\n    color: #333;\n    background: #fefefe;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 0.25rem;\n    box-shadow: inset 2px 2px 4px #888,\n                inset -2px -2px 2px lightgray;\n    width: 400px;\n    height: 4rem;\n    font-size: 1.2rem;\n}\n\n.button#start {\n    padding: 5px 8px;\n    border-radius: 10px;\n    box-shadow: 1px 1px 4px #888;\n    font-weight: bold;\n    background: #fff;\n    border: 1px solid black;\n}\n\n.button#start:active {\n  transform: translateX(1px) translateY(1px); \n  box-shadow: 0 0 2px #888;\n}\n\n.button#start:hover {\n  cursor: pointer;\n  background-color: rgb(146, 252, 155);\n}\n\n.ship-container {\n    width: min(500px, 98%);\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 0.6rem;\n}\n\n.ship:hover {\n    transform: translate(-1px, -2px);\n}\n\n.rotated {\n    transform-origin: 20px 20px;\n    transform: rotate(90deg);\n}\n\n.boards-container {\n    width: min(98%, 920px);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 412px);\n    justify-content: center;\n    gap: 0.8rem;\n    padding: 0.25rem 0.75rem;\n}\n\n#p2 .cell:hover {\n    background-color: rgba(20, 20, 20, 0.05);\n    cursor: pointer;\n}\n\n.board-container {\n    border: 6px solid #222;\n    border-radius: 6px;\n    box-shadow: 1px 2px 4px #888;\n    letter-spacing: 0.025rem;\n    background-color: skyblue\n}\n\n.board-header {\n    height: 40px;\n    background: #ddd;\n    padding: 4px;\n    font-size: 1.3rem;\n    font-weight: bold;\n    border-bottom: 3px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    background: inherit;\n    height: min-content;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.cell {\n    height: 40px;\n    width: 40px;\n    outline: 1px dotted black;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.ship > .cell {\n    background-color: #888;;\n    color: #fefefe;\n    font-weight: bold;\n    outline: 1px solid #444;\n    box-shadow: 1px 2px 3px #555;\n}\n\n.marker {\n    width: 55%;\n    height: 55%;\n    border-radius: 50%;\n    box-shadow: 0px 1px 4px #333;\n}\n\n.log-container {\n    background: #111;\n    width: min(98%, 600px);\n    height: 196px;\n    border: 2px solid #eee;\n    border-radius: 4px;\n    box-shadow: 1px 1px 4px #888;\n    letter-spacing: 0.025rem;\n    margin-bottom: 0.25rem;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.log-header {\n    color: #fefefe;\n    font-family: monospace;\n    text-align: center;\n    padding: 0.1rem;\n    border-bottom: 1px solid #eee;\n}\n\n.log {\n    color: hsl(310, 100%, 88%);\n    font-size: 0.85rem;\n    padding: 3px 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n}\n\n.log-span {\n  font-weight: bold;\n}\n\n.log-line-sunk {\n  font-style: italic;\n  color: yellow;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
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
    let newCell
    board.forEach(boardRow => boardRow.forEach((cell, index) => {
        if (id === 'p1') newCell = createDOMElement('div', ['cell', 'droppable']);else newCell = createDOMElement('div', ['cell']);
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(boardRow) + 1;
        domBoard.appendChild(newCell);
    }));
    return domBoard
}

const createShip = function createShipOnDisplay(id, length) {
    const newShip = createDOMElement('div', ['ship'], id);
    newShip.style.cursor = "move"
    newShip.style.display = "flex"
    let n = 0
    while (length > 0) {
      const newCell = createDOMElement('div', ['cell']);
      if (n < 3) newCell.textContent = id.toString().substring(n, n + 1).toUpperCase();
      newShip.appendChild(newCell)
      length--;
      n++;
    }
    return newShip;
}

const renderCells = (gameboard, domBoard, showShips = true) => {
    const board = gameboard.readBoard();
    let newCell;
    while (domBoard.firstChild) domBoard.removeChild(domBoard.lastChild);
    board.forEach(boardRow => boardRow.forEach((cell, index) => {
        if (domBoard.id === 'p2') newCell = createDOMElement('div', ['cell']);
        else newCell = createDOMElement('div', ['cell', 'droppable']);
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(boardRow) + 1;
        if (isOccupied(cell)) {
            if (showShips) newCell.style.backgroundColor = '#888';
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

const changeMarquee = (textContent, domNode, size) => {
    const message = textContent.toString();
    const node = domNode;
    if (message.includes('Error')) {
        node.style.color = 'orangered'
        node.textContent = message + ' Try again.';
    } else {
        node.textContent = message;
        node.style.color = '#333';
    }
    node.style.fontSize = `${size}px`;
    return node;
}

module.exports = { createDOMElement, renderBoard, renderCells, addToLog, changeMarquee, createShip }

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { renderBoard, renderCells, addToLog, changeMarquee, createShip } = __webpack_require__(/*! ./display-helpers */ "./src/display-helpers.js");

const marquee = document.querySelector('.marquee')
const p1Container = document.getElementById('p1Container')
const p2Container = document.getElementById('p2Container')
const p1Header = document.getElementById('p1Header')
const p2Header = document.getElementById('p2Header')
const gamelog = document.querySelector('.log')
const shipContainer = document.querySelector('.ship-container')
let p1Board;
let p2Board;

const Display = {  
    renderBoards () {
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
    },
    
    startGame () {
        this.renderBoards();
        this.renderShips();
        marquee.textContent = 'Place your ships by dragging them onto your board (press R to rotate).'
        marquee.style.fontSize = '20px';
    },

    renderShips() {
        const ships = [
            createShip('Carrier', 5),
            createShip('Battleship', 4),
            createShip('Cruiser', 3),
            createShip('Submarine', 3),
            createShip('Destroyer', 2)
        ];
        while (shipContainer.firstChild) shipContainer.removeChild(shipContainer.lastChild);
        ships.forEach(ship => shipContainer.appendChild(ship))
    },

    p1UpdateBoard (board) { renderCells(board, p1Board) },
    p2UpdateBoard (board) { renderCells(board, p2Board, false) },
    updateDisplay (player, cell, opponent, oppBoard, shipSunk) {
        this.updateMarquee(`${opponent.getPossessive()} turn`, 26);
        setTimeout(() => {
            addToLog(player, cell, opponent, oppBoard, shipSunk, gamelog);
        }, 100);  
    },
    updateMarquee (text, size) {
        changeMarquee(text, marquee, size);
    },
    gameOver(winner) { marquee.textContent = `Winner: ${winner.getName()}` }
}

module.exports = Display;


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
  
  const readBoard = () => board;
  const allShips = [];
  const getAllShips = () => allShips;

  function allShipsSunk () {
    if (allShips.length < 5) return false;
    return allShips.filter(ship => ship.isSunk()).length === 5; 
  }

  function placeShip(shipObj, x, y, orientation) {
    if (allShips.length > 4) throw new Error ('Ship limit exceeded.')
    let colIndex = column(x);
    let rowIndex = row(y);
   
    try {
      (checkCollisions(board, x, y, orientation, shipObj))
    } catch (error) {
      return error;
    }
   
    allShips.push(shipObj);
    if(orientation === 'vertical') {
      for (let i = 1; i <= shipObj.getShipLength(); i++) {
        board[rowIndex][colIndex] = shipObj;
        rowIndex++;
      }
    } else {
      for (let i = 1; i <= shipObj.getShipLength(); i++) {
        board[rowIndex][colIndex] = shipObj;
        colIndex++;
      }
    }
    return true;
  }

  function receiveAttack(x, y) {
    let sunkShip = null;
    const attackedCell = board[row(y)][column(x)];
    if (attackedCell === "X" || attackedCell === "O") throw new Error('Cell already hit!')
    else if (isOccupied(attackedCell)) {
      attackedCell.hit();
      if (attackedCell.isSunk()) sunkShip = attackedCell.name
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
const { startPlacementPhase, placementPhaseOver } = __webpack_require__(/*! ./ship-placement */ "./src/ship-placement.js")
const Display = __webpack_require__(/*! ./display */ "./src/display.js");
const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

function Game() {
  Display.startGame();
  const player1 = Player('You');
  const player2 = Player('Computer', true);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  let currentPlayer = player1;
  startPlacementPhase();
  const p2DisplayBoard = document.getElementById('p2');
  player1.placeShips(p1Board)
  player2.placeShips(p2Board, 'random');
  Display.p2UpdateBoard(p2Board);

  function isGameOver() {
    return p2Board.allShipsSunk() || p1Board.allShipsSunk();
  }

  p2DisplayBoard.addEventListener('click', (e) => {
    if (placementPhaseOver() && currentPlayer === player1 && !isGameOver()) {
        const data = e.target.dataset;
        const cellAttacked = p2Board.receiveAttack(data.column, data.row);
        Display.p2UpdateBoard(p2Board);
        Display.updateDisplay(player1, cellAttacked.cell, player2, p2Board, cellAttacked.sunkShip);
        if (isGameOver()) return Display.gameOver(player1)
        currentPlayer = player2;
    } else {
        return null
    }
    setTimeout(() => {
        const choice = player2.randomAttack(p1Board);
        const computerAttack = p1Board.receiveAttack(choice[0], choice[1]);
        Display.p1UpdateBoard(p1Board);
        Display.updateDisplay(player2, computerAttack.cell, player1, p1Board, computerAttack.sunkShip);
        if (isGameOver()) return Display.gameOver(player2);
        currentPlayer = player1;
    }, 500)
  })
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
    for (let i = 1; i <= ship.getShipLength(); i++) {
      if (colCheck > 9 || rowCheck > 9) throw new Error('Out of bounds!')
      shipSlot.push(board[rowCheck][colCheck]);
      rowCheck++;
    }
  } else {
    for (let i = 1; i <= ship.getShipLength(); i++) {
      if (colCheck > 9 || rowCheck > 9) throw new Error('Out of bounds!')
      shipSlot.push(board[rowCheck][colCheck]);
      colCheck++;
    }
  }
  
  if (shipSlot.find(isOccupied)) throw new Error('Ship Collision!');
  return Error;
}

module.exports = { checkCollisions, isOccupied }


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { isOccupied } = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
const { placeAllShips, placeRandomShips } = __webpack_require__(/*! ./ship-placement */ "./src/ship-placement.js")
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
    };

    const placeShips = (board, random = false) => {
        if (!random) placeAllShips(board);
        else placeRandomShips(board);
    };

    return { getName, getPossessive, isComputer, randomAttack, placeShips }
}

module.exports = Player


/***/ }),

/***/ "./src/ship-placement.js":
/*!*******************************!*\
  !*** ./src/ship-placement.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");
const Display = __webpack_require__(/*! ./display */ "./src/display.js");
const { cols } = __webpack_require__(/*! ./conversions */ "./src/conversions.js");

const allShips = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
let placementPhase = true;
function startPlacementPhase () { placementPhase = true }
const placementPhaseOver = () => !placementPhase

function placeAllShips (board) {
  const ships = document.querySelectorAll('.ship')
  ships.forEach(ship => {
    ship.onmousedown = function(event) {
      const shipContainer = document.querySelector('.ship-container');
      let orientation = ''
      ship.style.position = 'absolute';
      ship.style.zIndex = 10;
  
      function moveAt(pageX, pageY) {
        ship.style.left = pageX - 20 + 'px';
        ship.style.top = pageY - ship.offsetHeight / 2 + 'px';
      }
  
      moveAt(event.pageX, event.pageY);
  
      function onMouseMove(event2) {
        moveAt(event2.pageX, event2.pageY)
      }

      function rotateShip(event3) {
        if (event3.key === 'r' && orientation !== 'vertical') {
          orientation = 'vertical';
          ship.classList.add('rotated')
        }
        else {
          orientation = '';
          ship.classList.remove('rotated')
        }
      }
  
      document.addEventListener('mousemove', onMouseMove);
      window.addEventListener('keydown', rotateShip)
  
      ship.onmouseup = (event) => {
        ship.style.display = "none";
        const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ship.style.display = "flex";
        document.removeEventListener('mousemove', onMouseMove)
        if(!elemBelow.classList.contains('droppable')) return;        
        const placedShip = board.placeShip(Ship(ship.id), elemBelow.dataset.column, elemBelow.dataset.row, orientation);
        if (placedShip === true) {
          Display.p1UpdateBoard(board);
          shipContainer.removeChild(ship);
          Display.updateMarquee('Place your ships by dragging them onto your board (press R to rotate).', 20)
          if (!shipContainer.hasChildNodes()) {
            placementPhase = false;
            Display.updateMarquee("You're up, Admiral! Choose a cell on your opponent's board to attack.", 20)
          }
        } else {
        ship.style.position = 'static';
        ship.classList.remove('rotated');
        window.removeEventListener('keydown', rotateShip)
        Display.updateMarquee(placedShip, 24);
        }
      }
    }
  });
}

function placeRandomShips (board, index = 0) {
  if (index >= allShips.length) return;
  const orientation = ['horizonal', 'vertical'][Math.floor(Math.random() * 2)];
  const col = cols[Math.floor(Math.random() * 10)];
  const row = Math.floor(Math.random() * 10) + 1;
  const placedShip = board.placeShip(Ship(allShips[index]), col, row, orientation);
  if (placedShip === true) placeRandomShips(board, ++index);
  else placeRandomShips(board, index)
}

module.exports = { placeAllShips, placeRandomShips, startPlacementPhase, placementPhaseOver };

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const Ship = (name) => {
  let shipLength;

  switch (name) {
    case ('Carrier'):
      shipLength = 5;
      break;
    case ('Battleship'):
      shipLength = 4;
      break;
    case ('Cruiser'):
    case ('Submarine'):
      shipLength = 3;
      break;
    case ('Destroyer'):
      shipLength = 2;
      break;
    default:
      throw new Error ('Unexpected ship name.')
  }

  let hits = 0;
  const readHits = () => hits;
  const getShipLength = () => shipLength;
  const isSunk = () => hits === shipLength;
  const hit = () => { 
    if (!isSunk()) hits += 1;
  }

  return { name, readHits, getShipLength, hit, isSunk }
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

startButton.addEventListener('click', Game)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sT0FBTyxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLDZCQUE2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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7Ozs7Ozs7Ozs7QUMvRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRXRCLGdCQUFnQixtQkFBTyxDQUFDLG1DQUFXO0FBQ25DLGFBQWEsbUJBQU8sQ0FBQyxxQ0FBWTs7QUFFakM7O0FBRUE7O0FBRUEsMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2Rpc3BsYXktaGVscGVycy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9zaGlwLXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxufVxuXG46cm9vdCB7XG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmXG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzhkZWcsIGhzbCg0NiwgNTAlLCA3NSUpLCBoc2woMzYsIDQ0JSwgNjQlKSAxMiUsIGhzbCgzNiwgNDAlLCA0MyUpIDEwOCUpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IGNsYW1wKDQzMHB4LCA5NSUsIDEyODBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZyZW07XG59XG5cbmgxIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5tYXJxdWVlIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA0cHggIzg4OCxcbiAgICAgICAgICAgICAgICBpbnNldCAtMnB4IC0ycHggMnB4IGxpZ2h0Z3JheTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYnV0dG9uI3N0YXJ0IHtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggIzg4ODtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYnV0dG9uI3N0YXJ0OmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpIHRyYW5zbGF0ZVkoMXB4KTsgXG4gIGJveC1zaGFkb3c6IDAgMCAycHggIzg4ODtcbn1cblxuLmJ1dHRvbiNzdGFydDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NiwgMjUyLCAxNTUpO1xufVxuXG4uc2hpcC1jb250YWluZXIge1xuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDk4JSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAwLjZyZW07XG59XG5cbi5zaGlwOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KTtcbn1cblxuLnJvdGF0ZWQge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDIwcHggMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogbWluKDk4JSwgOTIwcHgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDQxMnB4KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG59XG5cbiNwMiAuY2VsbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjA1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICAgIGJvcmRlcjogNnB4IHNvbGlkICMyMjI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggNHB4ICM4ODg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWVcbn1cblxuLmJvYXJkLWhlYWRlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib2FyZCB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2VsbCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNoaXAgPiAuY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODs7XG4gICAgY29sb3I6ICNmZWZlZmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICM0NDQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggIzU1NTtcbn1cblxuLm1hcmtlciB7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggIzMzMztcbn1cblxuLmxvZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICMxMTE7XG4gICAgd2lkdGg6IG1pbig5OCUsIDYwMHB4KTtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICM4ODg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLmxvZy1oZWFkZXIge1xuICAgIGNvbG9yOiAjZmVmZWZlO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmxvZyB7XG4gICAgY29sb3I6IGhzbCgzMTAsIDEwMCUsIDg4JSk7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxvZy1zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2ctbGluZS1zdW5rIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogeWVsbG93O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0kscUdBQXFHO0lBQ3JHLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEI7NkNBQ3lDO0lBQ3pDLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxufVxcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWZcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNzhkZWcsIGhzbCg0NiwgNTAlLCA3NSUpLCBoc2woMzYsIDQ0JSwgNjQlKSAxMiUsIGhzbCgzNiwgNDAlLCA0MyUpIDEwOCUpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBjbGFtcCg0MzBweCwgOTUlLCAxMjgwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1hcnF1ZWUge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAjODg4LFxcbiAgICAgICAgICAgICAgICBpbnNldCAtMnB4IC0ycHggMnB4IGxpZ2h0Z3JheTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYnV0dG9uI3N0YXJ0IHtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggIzg4ODtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uYnV0dG9uI3N0YXJ0OmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSB0cmFuc2xhdGVZKDFweCk7IFxcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjODg4O1xcbn1cXG5cXG4uYnV0dG9uI3N0YXJ0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDYsIDI1MiwgMTU1KTtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IG1pbig1MDBweCwgOTglKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAwLjZyZW07XFxufVxcblxcbi5zaGlwOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCk7XFxufVxcblxcbi5yb3RhdGVkIHtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMjBweCAyMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IG1pbig5OCUsIDkyMHB4KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDQxMnB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC44cmVtO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XFxufVxcblxcbiNwMiAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgMC4wNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogNnB4IHNvbGlkICMyMjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggIzg4ODtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlXFxufVxcblxcbi5ib2FyZC1oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAgPiAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7O1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCAjNTU1O1xcbn1cXG5cXG4ubWFya2VyIHtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgaGVpZ2h0OiA1NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggIzMzMztcXG59XFxuXFxuLmxvZy1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xcbiAgICB3aWR0aDogbWluKDk4JSwgNjAwcHgpO1xcbiAgICBoZWlnaHQ6IDE5NnB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICM4ODg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5sb2ctaGVhZGVyIHtcXG4gICAgY29sb3I6ICNmZWZlZmU7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4xcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG59XFxuXFxuLmxvZyB7XFxuICAgIGNvbG9yOiBoc2woMzEwLCAxMDAlLCA4OCUpO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5sb2ctc3BhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxvZy1saW5lLXN1bmsge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6IHllbGxvdztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb2xzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXTtcblxuY29uc3Qgcm93ID0gKHJvd0Nvb3JkKSA9PiB7XG4gICAgaWYgKHJvd0Nvb3JkID4gMTAgfHwgcm93Q29vcmQgPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZHMhJylcbiAgICByZXR1cm4gcm93Q29vcmQgLSAxO1xufVxuXG5jb25zdCBjb2x1bW4gPSAoY29sdW1uQ29vcmQpID0+IHtcbiAgY29uc3QgaW5kZXggPSBjb2xzLmluZGV4T2YoY29sdW1uQ29vcmQpO1xuICBcbiAgaWYgKGluZGV4ID4gOSB8fCBpbmRleCA8IDApIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kcyEnKVxuICByZXR1cm4gaW5kZXhcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHJvdywgY29sdW1uLCBjb2xzIH0iLCJjb25zdCB7IGlzT2NjdXBpZWQgfSA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuY29uc3QgeyBjb2xzLCByb3csIGNvbHVtbiB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuZnVuY3Rpb24gY3JlYXRlRE9NRWxlbWVudCAoZWxlbWVudCwgY2xhc3NlcywgaWQpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoY2xhc3NlcykgY2xhc3Nlcy5mb3JFYWNoKHZhbHVlID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCh2YWx1ZSkpXG4gICAgaWYgKGlkKSBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpLnJlYWRCb2FyZCgpO1xuICAgIGNvbnN0IGRvbUJvYXJkID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydib2FyZCddLCBpZCk7XG4gICAgbGV0IG5ld0NlbGxcbiAgICBib2FyZC5mb3JFYWNoKGJvYXJkUm93ID0+IGJvYXJkUm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpZCA9PT0gJ3AxJykgbmV3Q2VsbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnY2VsbCcsICdkcm9wcGFibGUnXSk7ZWxzZSBuZXdDZWxsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydjZWxsJ10pO1xuICAgICAgICBuZXdDZWxsLmRhdGFzZXQuY29sdW1uID0gY29sc1tpbmRleF07XG4gICAgICAgIG5ld0NlbGwuZGF0YXNldC5yb3cgPSBib2FyZC5pbmRleE9mKGJvYXJkUm93KSArIDE7XG4gICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKG5ld0NlbGwpO1xuICAgIH0pKTtcbiAgICByZXR1cm4gZG9tQm9hcmRcbn1cblxuY29uc3QgY3JlYXRlU2hpcCA9IGZ1bmN0aW9uIGNyZWF0ZVNoaXBPbkRpc3BsYXkoaWQsIGxlbmd0aCkge1xuICAgIGNvbnN0IG5ld1NoaXAgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ3NoaXAnXSwgaWQpO1xuICAgIG5ld1NoaXAuc3R5bGUuY3Vyc29yID0gXCJtb3ZlXCJcbiAgICBuZXdTaGlwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIGxldCBuID0gMFxuICAgIHdoaWxlIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuZXdDZWxsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydjZWxsJ10pO1xuICAgICAgaWYgKG4gPCAzKSBuZXdDZWxsLnRleHRDb250ZW50ID0gaWQudG9TdHJpbmcoKS5zdWJzdHJpbmcobiwgbiArIDEpLnRvVXBwZXJDYXNlKCk7XG4gICAgICBuZXdTaGlwLmFwcGVuZENoaWxkKG5ld0NlbGwpXG4gICAgICBsZW5ndGgtLTtcbiAgICAgIG4rKztcbiAgICB9XG4gICAgcmV0dXJuIG5ld1NoaXA7XG59XG5cbmNvbnN0IHJlbmRlckNlbGxzID0gKGdhbWVib2FyZCwgZG9tQm9hcmQsIHNob3dTaGlwcyA9IHRydWUpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5yZWFkQm9hcmQoKTtcbiAgICBsZXQgbmV3Q2VsbDtcbiAgICB3aGlsZSAoZG9tQm9hcmQuZmlyc3RDaGlsZCkgZG9tQm9hcmQucmVtb3ZlQ2hpbGQoZG9tQm9hcmQubGFzdENoaWxkKTtcbiAgICBib2FyZC5mb3JFYWNoKGJvYXJkUm93ID0+IGJvYXJkUm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChkb21Cb2FyZC5pZCA9PT0gJ3AyJykgbmV3Q2VsbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnY2VsbCddKTtcbiAgICAgICAgZWxzZSBuZXdDZWxsID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydjZWxsJywgJ2Ryb3BwYWJsZSddKTtcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHNbaW5kZXhdO1xuICAgICAgICBuZXdDZWxsLmRhdGFzZXQucm93ID0gYm9hcmQuaW5kZXhPZihib2FyZFJvdykgKyAxO1xuICAgICAgICBpZiAoaXNPY2N1cGllZChjZWxsKSkge1xuICAgICAgICAgICAgaWYgKHNob3dTaGlwcykgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzg4OCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgPT09ICdYJykge1xuICAgICAgICAgICAgY29uc3QgbmV3TWFya2VyID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydtYXJrZXInXSk7XG4gICAgICAgICAgICBuZXdNYXJrZXIuZGF0YXNldC5jb2x1bW4gPSBjb2xzW2luZGV4XTtcbiAgICAgICAgICAgIG5ld01hcmtlci5kYXRhc2V0LnJvdyA9IGJvYXJkLmluZGV4T2YoYm9hcmRSb3cpICsgMTtcbiAgICAgICAgICAgIG5ld01hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI1NSwgNjAsIDIwKSc7XG4gICAgICAgICAgICBuZXdDZWxsLmFwcGVuZENoaWxkKG5ld01hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgPT09ICdPJykge1xuICAgICAgICAgICAgY29uc3QgbmV3TWFya2VyID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydtYXJrZXInXSk7XG4gICAgICAgICAgICBuZXdNYXJrZXIuZGF0YXNldC5jb2x1bW4gPSBjb2xzW2luZGV4XTtcbiAgICAgICAgICAgIG5ld01hcmtlci5kYXRhc2V0LnJvdyA9IGJvYXJkLmluZGV4T2YoYm9hcmRSb3cpICsgMTtcbiAgICAgICAgICAgIG5ld01hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlZSc7XG4gICAgICAgICAgICBuZXdDZWxsLmFwcGVuZENoaWxkKG5ld01hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQobmV3Q2VsbCk7XG4gICAgfSkpO1xufVxuXG5jb25zdCBhZGRUb0xvZyA9IChwbGF5ZXIsIGNlbGwsIG9wcG9uZW50LCBvcHBCb2FyZCwgc2hpcFN1bmssIGRvbUxvZykgPT4ge1xuICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IG9wcEJvYXJkLnJlYWRCb2FyZCgpW3JvdyhjZWxsWzFdKV1bY29sdW1uKGNlbGxbMF0pXTtcblxuICAgIGNvbnN0IG5ld0xpbmUgPSBjcmVhdGVET01FbGVtZW50KCdwJywgWydsb2ctbGluZSddKTtcbiAgICBuZXdMaW5lLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmdldE5hbWUoKX0gYXR0YWNrZWQgJHtjZWxsLmpvaW4oJywgJyl9IC4uLiBpdCdzIGEgYDtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlRE9NRWxlbWVudCgnc3BhbicsIFsnbG9nLXNwYW4nXSk7XG4gICAgaWYgKGF0dGFja2VkQ2VsbCA9PT0gJ1gnKSB7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSAnSElUISc7XG4gICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSAncmdiKDI1NSwgNjAsIDIwKSc7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tlZENlbGwgPT09ICdPJykge1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ01JU1MhJztcbiAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9ICcjZWVlJ1xuICAgIH1cbiAgICBuZXdMaW5lLmFwcGVuZENoaWxkKHNwYW4pXG4gICAgZG9tTG9nLmFwcGVuZENoaWxkKG5ld0xpbmUpO1xuICAgIGlmIChzaGlwU3Vuaykge1xuICAgICAgICBjb25zdCBzdW5rTGluZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ3AnLCBbJ2xvZy1saW5lLXN1bmsnXSlcbiAgICAgICAgc3Vua0xpbmUudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudC5nZXRQb3NzZXNzaXZlKCl9ICR7c2hpcFN1bmt9IGhhcyBiZWVuIHN1bmshYDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRvbUxvZy5hcHBlbmRDaGlsZChzdW5rTGluZSl9LCAxNTApICAgXG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VNYXJxdWVlID0gKHRleHRDb250ZW50LCBkb21Ob2RlLCBzaXplKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRleHRDb250ZW50LnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgbm9kZSA9IGRvbU5vZGU7XG4gICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ0Vycm9yJykpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5jb2xvciA9ICdvcmFuZ2VyZWQnXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBtZXNzYWdlICsgJyBUcnkgYWdhaW4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgbm9kZS5zdHlsZS5jb2xvciA9ICcjMzMzJztcbiAgICB9XG4gICAgbm9kZS5zdHlsZS5mb250U2l6ZSA9IGAke3NpemV9cHhgO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgY3JlYXRlRE9NRWxlbWVudCwgcmVuZGVyQm9hcmQsIHJlbmRlckNlbGxzLCBhZGRUb0xvZywgY2hhbmdlTWFycXVlZSwgY3JlYXRlU2hpcCB9IiwiY29uc3QgeyByZW5kZXJCb2FyZCwgcmVuZGVyQ2VsbHMsIGFkZFRvTG9nLCBjaGFuZ2VNYXJxdWVlLCBjcmVhdGVTaGlwIH0gPSByZXF1aXJlKCcuL2Rpc3BsYXktaGVscGVycycpO1xuXG5jb25zdCBtYXJxdWVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcnF1ZWUnKVxuY29uc3QgcDFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDFDb250YWluZXInKVxuY29uc3QgcDJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDJDb250YWluZXInKVxuY29uc3QgcDFIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDFIZWFkZXInKVxuY29uc3QgcDJIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDJIZWFkZXInKVxuY29uc3QgZ2FtZWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2cnKVxuY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpXG5sZXQgcDFCb2FyZDtcbmxldCBwMkJvYXJkO1xuXG5jb25zdCBEaXNwbGF5ID0geyAgXG4gICAgcmVuZGVyQm9hcmRzICgpIHtcbiAgICAgICAgd2hpbGUgKHAxQ29udGFpbmVyLmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMScpKSkge1xuICAgICAgICAgICAgcDFDb250YWluZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxJykpO1xuICAgICAgICB9XG4gICAgICAgIHAxQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckJvYXJkKCdwMScpKTtcbiAgICAgICAgd2hpbGUgKHAyQ29udGFpbmVyLmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMicpKSkge1xuICAgICAgICAgICAgcDJDb250YWluZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyJykpO1xuICAgICAgICB9IFxuICAgICAgICBwMkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJCb2FyZCgncDInKSk7XG4gICAgICAgIHAxSGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdSc7XG4gICAgICAgIHAySGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyJztcbiAgICAgICAgZ2FtZWxvZy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBwMUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxJyk7XG4gICAgICAgIHAyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDInKTtcbiAgICB9LFxuICAgIFxuICAgIHN0YXJ0R2FtZSAoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyQm9hcmRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyU2hpcHMoKTtcbiAgICAgICAgbWFycXVlZS50ZXh0Q29udGVudCA9ICdQbGFjZSB5b3VyIHNoaXBzIGJ5IGRyYWdnaW5nIHRoZW0gb250byB5b3VyIGJvYXJkIChwcmVzcyBSIHRvIHJvdGF0ZSkuJ1xuICAgICAgICBtYXJxdWVlLnN0eWxlLmZvbnRTaXplID0gJzIwcHgnO1xuICAgIH0sXG5cbiAgICByZW5kZXJTaGlwcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgICAgICBjcmVhdGVTaGlwKCdDYXJyaWVyJywgNSksXG4gICAgICAgICAgICBjcmVhdGVTaGlwKCdCYXR0bGVzaGlwJywgNCksXG4gICAgICAgICAgICBjcmVhdGVTaGlwKCdDcnVpc2VyJywgMyksXG4gICAgICAgICAgICBjcmVhdGVTaGlwKCdTdWJtYXJpbmUnLCAzKSxcbiAgICAgICAgICAgIGNyZWF0ZVNoaXAoJ0Rlc3Ryb3llcicsIDIpXG4gICAgICAgIF07XG4gICAgICAgIHdoaWxlIChzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHNoaXBDb250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4gc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwKSlcbiAgICB9LFxuXG4gICAgcDFVcGRhdGVCb2FyZCAoYm9hcmQpIHsgcmVuZGVyQ2VsbHMoYm9hcmQsIHAxQm9hcmQpIH0sXG4gICAgcDJVcGRhdGVCb2FyZCAoYm9hcmQpIHsgcmVuZGVyQ2VsbHMoYm9hcmQsIHAyQm9hcmQsIGZhbHNlKSB9LFxuICAgIHVwZGF0ZURpc3BsYXkgKHBsYXllciwgY2VsbCwgb3Bwb25lbnQsIG9wcEJvYXJkLCBzaGlwU3Vuaykge1xuICAgICAgICB0aGlzLnVwZGF0ZU1hcnF1ZWUoYCR7b3Bwb25lbnQuZ2V0UG9zc2Vzc2l2ZSgpfSB0dXJuYCwgMjYpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFkZFRvTG9nKHBsYXllciwgY2VsbCwgb3Bwb25lbnQsIG9wcEJvYXJkLCBzaGlwU3VuaywgZ2FtZWxvZyk7XG4gICAgICAgIH0sIDEwMCk7ICBcbiAgICB9LFxuICAgIHVwZGF0ZU1hcnF1ZWUgKHRleHQsIHNpemUpIHtcbiAgICAgICAgY2hhbmdlTWFycXVlZSh0ZXh0LCBtYXJxdWVlLCBzaXplKTtcbiAgICB9LFxuICAgIGdhbWVPdmVyKHdpbm5lcikgeyBtYXJxdWVlLnRleHRDb250ZW50ID0gYFdpbm5lcjogJHt3aW5uZXIuZ2V0TmFtZSgpfWAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXk7XG4iLCJjb25zdCB7IHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5jb25zdCB7IGNoZWNrQ29sbGlzaW9ucywgaXNPY2N1cGllZCB9ID0gcmVxdWlyZSAoJy4vaGVscGVycycpXG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgKGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgbmV3Um93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbmV3Um93LnB1c2goXCIgXCIpO1xuICAgICAgfVxuICAgICAgYm9hcmQucHVzaChuZXdSb3cpO1xuICAgIH1cbiAgfSkoKTtcbiAgXG4gIGNvbnN0IHJlYWRCb2FyZCA9ICgpID0+IGJvYXJkO1xuICBjb25zdCBhbGxTaGlwcyA9IFtdO1xuICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IGFsbFNoaXBzO1xuXG4gIGZ1bmN0aW9uIGFsbFNoaXBzU3VuayAoKSB7XG4gICAgaWYgKGFsbFNoaXBzLmxlbmd0aCA8IDUpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gYWxsU2hpcHMuZmlsdGVyKHNoaXAgPT4gc2hpcC5pc1N1bmsoKSkubGVuZ3RoID09PSA1OyBcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwT2JqLCB4LCB5LCBvcmllbnRhdGlvbikge1xuICAgIGlmIChhbGxTaGlwcy5sZW5ndGggPiA0KSB0aHJvdyBuZXcgRXJyb3IgKCdTaGlwIGxpbWl0IGV4Y2VlZGVkLicpXG4gICAgbGV0IGNvbEluZGV4ID0gY29sdW1uKHgpO1xuICAgIGxldCByb3dJbmRleCA9IHJvdyh5KTtcbiAgIFxuICAgIHRyeSB7XG4gICAgICAoY2hlY2tDb2xsaXNpb25zKGJvYXJkLCB4LCB5LCBvcmllbnRhdGlvbiwgc2hpcE9iaikpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gICBcbiAgICBhbGxTaGlwcy5wdXNoKHNoaXBPYmopO1xuICAgIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwT2JqLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBzaGlwT2JqO1xuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwT2JqLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3Jvd0luZGV4XVtjb2xJbmRleF0gPSBzaGlwT2JqO1xuICAgICAgICBjb2xJbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGxldCBzdW5rU2hpcCA9IG51bGw7XG4gICAgY29uc3QgYXR0YWNrZWRDZWxsID0gYm9hcmRbcm93KHkpXVtjb2x1bW4oeCldO1xuICAgIGlmIChhdHRhY2tlZENlbGwgPT09IFwiWFwiIHx8IGF0dGFja2VkQ2VsbCA9PT0gXCJPXCIpIHRocm93IG5ldyBFcnJvcignQ2VsbCBhbHJlYWR5IGhpdCEnKVxuICAgIGVsc2UgaWYgKGlzT2NjdXBpZWQoYXR0YWNrZWRDZWxsKSkge1xuICAgICAgYXR0YWNrZWRDZWxsLmhpdCgpO1xuICAgICAgaWYgKGF0dGFja2VkQ2VsbC5pc1N1bmsoKSkgc3Vua1NoaXAgPSBhdHRhY2tlZENlbGwubmFtZVxuICAgICAgYm9hcmRbcm93KHkpXVtjb2x1bW4oeCldID0gXCJYXCI7XG4gICAgfSBlbHNlIGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXSA9IFwiT1wiO1xuICAgIFxuICAgIHJldHVybiB7IGNlbGw6IFt4LCB5XSwgc3Vua1NoaXAgfTtcbiAgfVxuXG4gIHJldHVybiB7IHJlYWRCb2FyZCwgcmVjZWl2ZUF0dGFjaywgcGxhY2VTaGlwLCBhbGxTaGlwc1N1bmssIGdldEFsbFNoaXBzIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCB7IHN0YXJ0UGxhY2VtZW50UGhhc2UsIHBsYWNlbWVudFBoYXNlT3ZlciB9ID0gcmVxdWlyZSgnLi9zaGlwLXBsYWNlbWVudCcpXG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5mdW5jdGlvbiBHYW1lKCkge1xuICBEaXNwbGF5LnN0YXJ0R2FtZSgpO1xuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKCdZb3UnKTtcbiAgY29uc3QgcGxheWVyMiA9IFBsYXllcignQ29tcHV0ZXInLCB0cnVlKTtcbiAgY29uc3QgcDFCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwMkJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcbiAgc3RhcnRQbGFjZW1lbnRQaGFzZSgpO1xuICBjb25zdCBwMkRpc3BsYXlCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMicpO1xuICBwbGF5ZXIxLnBsYWNlU2hpcHMocDFCb2FyZClcbiAgcGxheWVyMi5wbGFjZVNoaXBzKHAyQm9hcmQsICdyYW5kb20nKTtcbiAgRGlzcGxheS5wMlVwZGF0ZUJvYXJkKHAyQm9hcmQpO1xuXG4gIGZ1bmN0aW9uIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHAyQm9hcmQuYWxsU2hpcHNTdW5rKCkgfHwgcDFCb2FyZC5hbGxTaGlwc1N1bmsoKTtcbiAgfVxuXG4gIHAyRGlzcGxheUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAocGxhY2VtZW50UGhhc2VPdmVyKCkgJiYgY3VycmVudFBsYXllciA9PT0gcGxheWVyMSAmJiAhaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgICBjb25zdCBjZWxsQXR0YWNrZWQgPSBwMkJvYXJkLnJlY2VpdmVBdHRhY2soZGF0YS5jb2x1bW4sIGRhdGEucm93KTtcbiAgICAgICAgRGlzcGxheS5wMlVwZGF0ZUJvYXJkKHAyQm9hcmQpO1xuICAgICAgICBEaXNwbGF5LnVwZGF0ZURpc3BsYXkocGxheWVyMSwgY2VsbEF0dGFja2VkLmNlbGwsIHBsYXllcjIsIHAyQm9hcmQsIGNlbGxBdHRhY2tlZC5zdW5rU2hpcCk7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHJldHVybiBEaXNwbGF5LmdhbWVPdmVyKHBsYXllcjEpXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBjaG9pY2UgPSBwbGF5ZXIyLnJhbmRvbUF0dGFjayhwMUJvYXJkKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSBwMUJvYXJkLnJlY2VpdmVBdHRhY2soY2hvaWNlWzBdLCBjaG9pY2VbMV0pO1xuICAgICAgICBEaXNwbGF5LnAxVXBkYXRlQm9hcmQocDFCb2FyZCk7XG4gICAgICAgIERpc3BsYXkudXBkYXRlRGlzcGxheShwbGF5ZXIyLCBjb21wdXRlckF0dGFjay5jZWxsLCBwbGF5ZXIxLCBwMUJvYXJkLCBjb21wdXRlckF0dGFjay5zdW5rU2hpcCk7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHJldHVybiBEaXNwbGF5LmdhbWVPdmVyKHBsYXllcjIpO1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyMTtcbiAgICB9LCA1MDApXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbiIsImNvbnN0IHsgcm93LCBjb2x1bW4gfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKVxuXG5mdW5jdGlvbiBpc09jY3VwaWVkKGNlbGwpIHtcbiAgcmV0dXJuIHR5cGVvZiBjZWxsID09PSAnb2JqZWN0Jztcbn1cblxuY29uc3QgY2hlY2tDb2xsaXNpb25zID0gZnVuY3Rpb24gY2hlY2tGb3JTaGlwUGxhY2VtZW50Q29sbGlzaW9ucyhib2FyZCwgeCwgeSwgb3JpZW50YXRpb24sIHNoaXApIHtcbiAgY29uc3Qgc2hpcFNsb3QgPSBbXTtcbiAgbGV0IGNvbENoZWNrID0gY29sdW1uKHgpO1xuICBsZXQgcm93Q2hlY2sgPSByb3coeSk7XG5cbiAgaWYob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBpZiAoY29sQ2hlY2sgPiA5IHx8IHJvd0NoZWNrID4gOSkgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzIScpXG4gICAgICBzaGlwU2xvdC5wdXNoKGJvYXJkW3Jvd0NoZWNrXVtjb2xDaGVja10pO1xuICAgICAgcm93Q2hlY2srKztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgaWYgKGNvbENoZWNrID4gOSB8fCByb3dDaGVjayA+IDkpIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kcyEnKVxuICAgICAgc2hpcFNsb3QucHVzaChib2FyZFtyb3dDaGVja11bY29sQ2hlY2tdKTtcbiAgICAgIGNvbENoZWNrKys7XG4gICAgfVxuICB9XG4gIFxuICBpZiAoc2hpcFNsb3QuZmluZChpc09jY3VwaWVkKSkgdGhyb3cgbmV3IEVycm9yKCdTaGlwIENvbGxpc2lvbiEnKTtcbiAgcmV0dXJuIEVycm9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgY2hlY2tDb2xsaXNpb25zLCBpc09jY3VwaWVkIH1cbiIsImNvbnN0IHsgaXNPY2N1cGllZCB9ID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5jb25zdCB7IHBsYWNlQWxsU2hpcHMsIHBsYWNlUmFuZG9tU2hpcHMgfSA9IHJlcXVpcmUoJy4vc2hpcC1wbGFjZW1lbnQnKVxuY29uc3QgeyBjb2xzIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lLCBjb21wdXRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gICAgY29uc3QgZ2V0UG9zc2Vzc2l2ZSA9ICgpID0+IG5hbWUgPT09ICdZb3UnID8gJ1lvdXInIDogYCR7bmFtZX0nc2A7XG4gICAgY29uc3QgaXNDb21wdXRlciA9ICgpID0+IGNvbXB1dGVyID09PSB0cnVlO1xuXG4gICAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wcEJvYXJkID0gYm9hcmQucmVhZEJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGF0dGFja2FibGVDZWxscyA9IFtdO1xuICAgICAgICBvcHBCb2FyZC5mb3JFYWNoKG9wcFJvdyA9PiBvcHBSb3cuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGlzT2NjdXBpZWQoY2VsbCkgfHwgY2VsbCA9PT0gJyAnKSBhdHRhY2thYmxlQ2VsbHMucHVzaChbY29sc1tpbmRleF0sIG9wcEJvYXJkLmluZGV4T2Yob3BwUm93KSArIDFdKVxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGNob3NlbkNlbGwgPSBhdHRhY2thYmxlQ2VsbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXR0YWNrYWJsZUNlbGxzLmxlbmd0aCldXG5cbiAgICAgICAgcmV0dXJuIGNob3NlbkNlbGw7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcHMgPSAoYm9hcmQsIHJhbmRvbSA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmICghcmFuZG9tKSBwbGFjZUFsbFNoaXBzKGJvYXJkKTtcbiAgICAgICAgZWxzZSBwbGFjZVJhbmRvbVNoaXBzKGJvYXJkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0UG9zc2Vzc2l2ZSwgaXNDb21wdXRlciwgcmFuZG9tQXR0YWNrLCBwbGFjZVNoaXBzIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXJcbiIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcbmNvbnN0IERpc3BsYXkgPSByZXF1aXJlKCcuL2Rpc3BsYXknKTtcbmNvbnN0IHsgY29scyB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuXG5jb25zdCBhbGxTaGlwcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0NydWlzZXInLCAnU3VibWFyaW5lJywgJ0Rlc3Ryb3llciddO1xubGV0IHBsYWNlbWVudFBoYXNlID0gdHJ1ZTtcbmZ1bmN0aW9uIHN0YXJ0UGxhY2VtZW50UGhhc2UgKCkgeyBwbGFjZW1lbnRQaGFzZSA9IHRydWUgfVxuY29uc3QgcGxhY2VtZW50UGhhc2VPdmVyID0gKCkgPT4gIXBsYWNlbWVudFBoYXNlXG5cbmZ1bmN0aW9uIHBsYWNlQWxsU2hpcHMgKGJvYXJkKSB7XG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKVxuICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgIHNoaXAub25tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgICAgbGV0IG9yaWVudGF0aW9uID0gJydcbiAgICAgIHNoaXAuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgc2hpcC5zdHlsZS56SW5kZXggPSAxMDtcbiAgXG4gICAgICBmdW5jdGlvbiBtb3ZlQXQocGFnZVgsIHBhZ2VZKSB7XG4gICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IHBhZ2VYIC0gMjAgKyAncHgnO1xuICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IHBhZ2VZIC0gc2hpcC5vZmZzZXRIZWlnaHQgLyAyICsgJ3B4JztcbiAgICAgIH1cbiAgXG4gICAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKTtcbiAgXG4gICAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudDIpIHtcbiAgICAgICAgbW92ZUF0KGV2ZW50Mi5wYWdlWCwgZXZlbnQyLnBhZ2VZKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByb3RhdGVTaGlwKGV2ZW50Mykge1xuICAgICAgICBpZiAoZXZlbnQzLmtleSA9PT0gJ3InICYmIG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgncm90YXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgb3JpZW50YXRpb24gPSAnJztcbiAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZWQnKVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCByb3RhdGVTaGlwKVxuICBcbiAgICAgIHNoaXAub25tb3VzZXVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNoaXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb25zdCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICBzaGlwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG4gICAgICAgIGlmKCFlbGVtQmVsb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wcGFibGUnKSkgcmV0dXJuOyAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBib2FyZC5wbGFjZVNoaXAoU2hpcChzaGlwLmlkKSwgZWxlbUJlbG93LmRhdGFzZXQuY29sdW1uLCBlbGVtQmVsb3cuZGF0YXNldC5yb3csIG9yaWVudGF0aW9uKTtcbiAgICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICBEaXNwbGF5LnAxVXBkYXRlQm9hcmQoYm9hcmQpO1xuICAgICAgICAgIHNoaXBDb250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcCk7XG4gICAgICAgICAgRGlzcGxheS51cGRhdGVNYXJxdWVlKCdQbGFjZSB5b3VyIHNoaXBzIGJ5IGRyYWdnaW5nIHRoZW0gb250byB5b3VyIGJvYXJkIChwcmVzcyBSIHRvIHJvdGF0ZSkuJywgMjApXG4gICAgICAgICAgaWYgKCFzaGlwQ29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgcGxhY2VtZW50UGhhc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIERpc3BsYXkudXBkYXRlTWFycXVlZShcIllvdSdyZSB1cCwgQWRtaXJhbCEgQ2hvb3NlIGEgY2VsbCBvbiB5b3VyIG9wcG9uZW50J3MgYm9hcmQgdG8gYXR0YWNrLlwiLCAyMClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGVkJyk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcm90YXRlU2hpcClcbiAgICAgICAgRGlzcGxheS51cGRhdGVNYXJxdWVlKHBsYWNlZFNoaXAsIDI0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlUmFuZG9tU2hpcHMgKGJvYXJkLCBpbmRleCA9IDApIHtcbiAgaWYgKGluZGV4ID49IGFsbFNoaXBzLmxlbmd0aCkgcmV0dXJuO1xuICBjb25zdCBvcmllbnRhdGlvbiA9IFsnaG9yaXpvbmFsJywgJ3ZlcnRpY2FsJ11bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuICBjb25zdCBjb2wgPSBjb2xzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gIGNvbnN0IHBsYWNlZFNoaXAgPSBib2FyZC5wbGFjZVNoaXAoU2hpcChhbGxTaGlwc1tpbmRleF0pLCBjb2wsIHJvdywgb3JpZW50YXRpb24pO1xuICBpZiAocGxhY2VkU2hpcCA9PT0gdHJ1ZSkgcGxhY2VSYW5kb21TaGlwcyhib2FyZCwgKytpbmRleCk7XG4gIGVsc2UgcGxhY2VSYW5kb21TaGlwcyhib2FyZCwgaW5kZXgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBwbGFjZUFsbFNoaXBzLCBwbGFjZVJhbmRvbVNoaXBzLCBzdGFydFBsYWNlbWVudFBoYXNlLCBwbGFjZW1lbnRQaGFzZU92ZXIgfTsiLCJjb25zdCBTaGlwID0gKG5hbWUpID0+IHtcbiAgbGV0IHNoaXBMZW5ndGg7XG5cbiAgc3dpdGNoIChuYW1lKSB7XG4gICAgY2FzZSAoJ0NhcnJpZXInKTpcbiAgICAgIHNoaXBMZW5ndGggPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoJ0JhdHRsZXNoaXAnKTpcbiAgICAgIHNoaXBMZW5ndGggPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAoJ0NydWlzZXInKTpcbiAgICBjYXNlICgnU3VibWFyaW5lJyk6XG4gICAgICBzaGlwTGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKCdEZXN0cm95ZXInKTpcbiAgICAgIHNoaXBMZW5ndGggPSAyO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvciAoJ1VuZXhwZWN0ZWQgc2hpcCBuYW1lLicpXG4gIH1cblxuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IHJlYWRIaXRzID0gKCkgPT4gaGl0cztcbiAgY29uc3QgZ2V0U2hpcExlbmd0aCA9ICgpID0+IHNoaXBMZW5ndGg7XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IGhpdHMgPT09IHNoaXBMZW5ndGg7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHsgXG4gICAgaWYgKCFpc1N1bmsoKSkgaGl0cyArPSAxO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgcmVhZEhpdHMsIGdldFNoaXBMZW5ndGgsIGhpdCwgaXNTdW5rIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5jb25zdCBHYW1lID0gcmVxdWlyZSgnLi9nYW1lcGxheScpO1xuXG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNzdGFydCcpXG5cbkRpc3BsYXkucmVuZGVyQm9hcmRzKCk7XG5cbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgR2FtZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=