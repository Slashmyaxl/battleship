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
    background: hsl(36, 55%, 70%);
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
    padding: 0.35rem;
    color: #222;
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
    padding: 4px 6px;
    border-radius: 6px;
    box-shadow: 1px 1px 4px #888;
    font-weight: bold;
    background: #fff;
    border: 1px solid black;
}

.ship-container {
    width: min(500px, 98%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.35rem;
}

.ship {
    display: flex;
    cursor: move;
}

.boards-container {
    background: inherit;
    width: min(98%, 920px);
    display: grid;
    grid-template-columns: repeat(auto-fit, 412px);
    justify-content: center;
    gap: 0.8rem;
    padding: 0.25rem 0.75rem;
}

.boards-container .cell:hover {
    background-color: rgba(20, 20, 20, 0.05)
}

#p2 .cell:hover {
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

.ship .cell {
    background-color: #666;
    outline: none;
}

.marker {
    width: 58%;
    height: 58%;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf;AACJ;;AAEA;IACI,6BAA6B;IAC7B,cAAc;IACd,iBAAiB;IACjB,gCAAgC;IAChC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB;6CACyC;IACzC,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,WAAW;IACX,wBAAwB;AAC5B;;AAEA;IACI;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,4BAA4B;IAC5B,wBAAwB;IACxB;AACJ;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,4BAA4B;IAC5B,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;IAC1B,8CAA8C;IAC9C,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n:root {\n    background: #222;\n    font-size: 18px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\n}\n\n.container {\n    background: hsl(36, 55%, 70%);\n    margin: 0 auto;\n    min-height: 100vh;\n    width: clamp(430px, 95%, 1280px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.6rem;\n}\n\nh1 {\n    letter-spacing: 0.1rem;\n    text-align: center;\n    margin-top: 0.5rem;\n}\n\n.marquee {\n    padding: 0.35rem;\n    color: #222;\n    background: #fefefe;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 0.25rem;\n    box-shadow: inset 2px 2px 4px #888,\n                inset -2px -2px 2px lightgray;\n    width: 400px;\n    height: 4rem;\n    font-size: 1.2rem;\n}\n\n.button#start {\n    padding: 4px 6px;\n    border-radius: 6px;\n    box-shadow: 1px 1px 4px #888;\n    font-weight: bold;\n    background: #fff;\n    border: 1px solid black;\n}\n\n.ship-container {\n    width: min(500px, 98%);\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 0.35rem;\n}\n\n.ship {\n    display: flex;\n    cursor: move;\n}\n\n.boards-container {\n    background: inherit;\n    width: min(98%, 920px);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 412px);\n    justify-content: center;\n    gap: 0.8rem;\n    padding: 0.25rem 0.75rem;\n}\n\n.boards-container .cell:hover {\n    background-color: rgba(20, 20, 20, 0.05)\n}\n\n#p2 .cell:hover {\n    cursor: pointer;\n}\n\n.board-container {\n    border: 6px solid #222;\n    border-radius: 6px;\n    box-shadow: 1px 2px 4px #888;\n    letter-spacing: 0.025rem;\n    background-color: skyblue\n}\n\n.board-header {\n    height: 40px;\n    background: #ddd;\n    padding: 4px;\n    font-size: 1.3rem;\n    font-weight: bold;\n    border-bottom: 3px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    background: inherit;\n    height: min-content;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.cell {\n    height: 40px;\n    width: 40px;\n    outline: 1px dotted black;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.ship .cell {\n    background-color: #666;\n    outline: none;\n}\n\n.marker {\n    width: 58%;\n    height: 58%;\n    border-radius: 50%;\n    box-shadow: 0px 1px 4px #333;\n}\n\n.log-container {\n    background: #111;\n    width: min(98%, 600px);\n    height: 196px;\n    border: 2px solid #eee;\n    border-radius: 4px;\n    box-shadow: 1px 1px 4px #888;\n    letter-spacing: 0.025rem;\n    margin-bottom: 0.25rem;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.log-header {\n    color: #fefefe;\n    font-family: monospace;\n    text-align: center;\n    padding: 0.1rem;\n    border-bottom: 1px solid #eee;\n}\n\n.log {\n    color: hsl(310, 100%, 88%);\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 0.85rem;\n    padding: 3px 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n}\n\n.log-span {\n    font-weight: bold;\n}\n\n.log-line-sunk {\n  font-style: italic;\n  color: yellow;\n}"],"sourceRoot":""}]);
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

const createShip = function createShipOnDisplay(id, length) {
    const newShip = createDOMElement('div', ['ship'], id);
    while (length > 0) {
    newShip.appendChild(createDOMElement('div', ['cell']));
    length--;
    }
    return newShip;
}

const renderCells = (gameboard, domBoard, showShips = true) => {
    const board = gameboard.readBoard();
    while (domBoard.firstChild) domBoard.removeChild(domBoard.lastChild);
    board.forEach(boardRow => boardRow.forEach((cell, index) => {
        const newCell = createDOMElement('div', ['cell'])
        newCell.dataset.column = cols[index];
        newCell.dataset.row = board.indexOf(boardRow) + 1;
        if (isOccupied(cell)) {
            if (showShips) newCell.style.backgroundColor = '#666';
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
    node.style.fontSize = '22px'
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
        marquee.textContent = 'Place your ships (press R to rotate).'
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
        changeMarquee(`${opponent.getPossessive()} turn`, marquee);
        setTimeout(() => {
            addToLog(player, cell, opponent, oppBoard, shipSunk, gamelog);
        }, 100);  
    },
    updateMarquee (text) {
        changeMarquee(text, marquee);
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
const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js")
const Display = __webpack_require__(/*! ./display */ "./src/display.js");
const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const allShips = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer']

async function Game() {
  Display.startGame();
  const player1 = Player('You');
  const player2 = Player('Computer', true);
  const p1Board = Gameboard();
  const p2Board = Gameboard();
  let currentPlayer = player1;
  
  const p1DisplayBoard = document.getElementById('p1');
  const p2DisplayBoard = document.getElementById('p2')
  
  placePlayerShips();
  Display.p1UpdateBoard(p1Board);
  placeComputerShips();
  Display.p2UpdateBoard(p2Board);

  function isGameOver() {
    return p2Board.allShipsSunk() || p1Board.allShipsSunk();
  }

  p2DisplayBoard.addEventListener('click', (e) => {
    if (currentPlayer === player1 && !isGameOver()) {
        const cellAttacked = p2Board.receiveAttack(e.target.dataset.column, e.target.dataset.row);
        Display.p2UpdateBoard(p2Board);
        Display.updateDisplay(player1, cellAttacked.cell, player2, p2Board, cellAttacked.sunkShip);
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
        Display.updateDisplay(player2, computerAttack.cell, player1, p1Board, computerAttack.sunkShip);
        if (isGameOver()) {
            return Display.gameOver(player2);
        }
        currentPlayer = player1;
    }, 500)
  })

  function placePlayerShips(index = 0) {
    if (index >= allShips.length) return;
    const currentShip = Ship(allShips[index]);
    let orientation = 'vertical';

    window.addEventListener('keydown', (e) => {
      if (e.key === 'r' && orientation === 'vertical') orientation = ''
      else orientation = 'vertical'
    })

    p1DisplayBoard.addEventListener('click', (e) => {
      const data = e.target.dataset;
      const placedShip = p1Board.placeShip(currentShip, data.column, data.row, orientation);
      if (placedShip === true) {
        Display.p1UpdateBoard(p1Board);
        placePlayerShips(++index)
      } else {
        Display.updateMarquee(placedShip);
        placePlayerShips(index);
      }
    }, { once: true });

  }

  function placeComputerShips () {
    p2Board.placeShip(Ship(allShips[0]), 'A', 2);
    p2Board.placeShip(Ship(allShips[1]), 'B', 10);
    p2Board.placeShip(Ship(allShips[2]), 'J', 1, 'vertical');
    p2Board.placeShip(Ship(allShips[3]), 'E', 5, 'vertical');
    p2Board.placeShip(Ship(allShips[4]), 'H', 1, 'vertical');
  }
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2Rpc3BsYXktaGVscGVycy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9nYW1lcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbn1cblxuOnJvb3Qge1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZlxufVxuXG4uY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMzYsIDU1JSwgNzAlKTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogY2xhbXAoNDMwcHgsIDk1JSwgMTI4MHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNnJlbTtcbn1cblxuaDEge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLm1hcnF1ZWUge1xuICAgIHBhZGRpbmc6IDAuMzVyZW07XG4gICAgY29sb3I6ICMyMjI7XG4gICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA0cHggIzg4OCxcbiAgICAgICAgICAgICAgICBpbnNldCAtMnB4IC0ycHggMnB4IGxpZ2h0Z3JheTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uYnV0dG9uI3N0YXJ0IHtcbiAgICBwYWRkaW5nOiA0cHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjODg4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5zaGlwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1pbig1MDBweCwgOTglKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuMzVyZW07XG59XG5cbi5zaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogbW92ZTtcbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IG1pbig5OCUsIDkyMHB4KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MTJweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjhyZW07XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xufVxuXG4uYm9hcmRzLWNvbnRhaW5lciAuY2VsbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjA1KVxufVxuXG4jcDIgLmNlbGw6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiA2cHggc29saWQgIzIyMjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggIzg4ODtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZVxufVxuXG4uYm9hcmQtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jZWxsIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hpcCAuY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWFya2VyIHtcbiAgICB3aWR0aDogNTglO1xuICAgIGhlaWdodDogNTglO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAjMzMzO1xufVxuXG4ubG9nLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzExMTtcbiAgICB3aWR0aDogbWluKDk4JSwgNjAwcHgpO1xuICAgIGhlaWdodDogMTk2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggIzg4ODtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xufVxuXG4ubG9nLWhlYWRlciB7XG4gICAgY29sb3I6ICNmZWZlZmU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuXG4ubG9nIHtcbiAgICBjb2xvcjogaHNsKDMxMCwgMTAwJSwgODglKTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sb2ctc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2ctbGluZS1zdW5rIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogeWVsbG93O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCOzZDQUN5QztJQUN6QyxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxufVxcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWZcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IGhzbCgzNiwgNTUlLCA3MCUpO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBjbGFtcCg0MzBweCwgOTUlLCAxMjgwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1hcnF1ZWUge1xcbiAgICBwYWRkaW5nOiAwLjM1cmVtO1xcbiAgICBjb2xvcjogIzIyMjtcXG4gICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCA0cHggIzg4OCxcXG4gICAgICAgICAgICAgICAgaW5zZXQgLTJweCAtMnB4IDJweCBsaWdodGdyYXk7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmJ1dHRvbiNzdGFydCB7XFxuICAgIHBhZGRpbmc6IDRweCA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggIzg4ODtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWluKDUwMHB4LCA5OCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDAuMzVyZW07XFxufVxcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiBtaW4oOTglLCA5MjBweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MTJweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgMC4wNSlcXG59XFxuXFxuI3AyIC5jZWxsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzIyMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAjODg4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWVcXG59XFxuXFxuLmJvYXJkLWhlYWRlciB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZDogI2RkZDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcCAuY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5tYXJrZXIge1xcbiAgICB3aWR0aDogNTglO1xcbiAgICBoZWlnaHQ6IDU4JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAjMzMzO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICMxMTE7XFxuICAgIHdpZHRoOiBtaW4oOTglLCA2MDBweCk7XFxuICAgIGhlaWdodDogMTk2cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggIzg4ODtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmxvZy1oZWFkZXIge1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbn1cXG5cXG4ubG9nIHtcXG4gICAgY29sb3I6IGhzbCgzMTAsIDEwMCUsIDg4JSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgcGFkZGluZzogM3B4IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxvZy1zcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2ctbGluZS1zdW5rIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbHMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdO1xuXG5jb25zdCByb3cgPSAocm93Q29vcmQpID0+IHtcbiAgICBpZiAocm93Q29vcmQgPiAxMCB8fCByb3dDb29yZCA8IDEpIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kcyEnKVxuICAgIHJldHVybiByb3dDb29yZCAtIDE7XG59XG5cbmNvbnN0IGNvbHVtbiA9IChjb2x1bW5Db29yZCkgPT4ge1xuICBjb25zdCBpbmRleCA9IGNvbHMuaW5kZXhPZihjb2x1bW5Db29yZCk7XG4gIFxuICBpZiAoaW5kZXggPiA5IHx8IGluZGV4IDwgMCkgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzIScpXG4gIHJldHVybiBpbmRleFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcm93LCBjb2x1bW4sIGNvbHMgfSIsImNvbnN0IHsgaXNPY2N1cGllZCB9ID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5jb25zdCB7IGNvbHMsIHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01FbGVtZW50IChlbGVtZW50LCBjbGFzc2VzLCBpZCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChjbGFzc2VzKSBjbGFzc2VzLmZvckVhY2godmFsdWUgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbHVlKSlcbiAgICBpZiAoaWQpIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcblxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5jb25zdCByZW5kZXJCb2FyZCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCkucmVhZEJvYXJkKCk7XG4gICAgY29uc3QgZG9tQm9hcmQgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ2JvYXJkJ10sIGlkKTtcbiAgICBib2FyZC5mb3JFYWNoKGJvYXJkUm93ID0+IGJvYXJkUm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NlbGwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ2NlbGwnXSlcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHNbaW5kZXhdO1xuICAgICAgICBuZXdDZWxsLmRhdGFzZXQucm93ID0gYm9hcmQuaW5kZXhPZihib2FyZFJvdykgKyAxO1xuICAgICAgICBkb21Cb2FyZC5hcHBlbmRDaGlsZChuZXdDZWxsKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGRvbUJvYXJkXG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSBmdW5jdGlvbiBjcmVhdGVTaGlwT25EaXNwbGF5KGlkLCBsZW5ndGgpIHtcbiAgICBjb25zdCBuZXdTaGlwID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydzaGlwJ10sIGlkKTtcbiAgICB3aGlsZSAobGVuZ3RoID4gMCkge1xuICAgIG5ld1NoaXAuYXBwZW5kQ2hpbGQoY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydjZWxsJ10pKTtcbiAgICBsZW5ndGgtLTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1NoaXA7XG59XG5cbmNvbnN0IHJlbmRlckNlbGxzID0gKGdhbWVib2FyZCwgZG9tQm9hcmQsIHNob3dTaGlwcyA9IHRydWUpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5yZWFkQm9hcmQoKTtcbiAgICB3aGlsZSAoZG9tQm9hcmQuZmlyc3RDaGlsZCkgZG9tQm9hcmQucmVtb3ZlQ2hpbGQoZG9tQm9hcmQubGFzdENoaWxkKTtcbiAgICBib2FyZC5mb3JFYWNoKGJvYXJkUm93ID0+IGJvYXJkUm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NlbGwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ2NlbGwnXSlcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHNbaW5kZXhdO1xuICAgICAgICBuZXdDZWxsLmRhdGFzZXQucm93ID0gYm9hcmQuaW5kZXhPZihib2FyZFJvdykgKyAxO1xuICAgICAgICBpZiAoaXNPY2N1cGllZChjZWxsKSkge1xuICAgICAgICAgICAgaWYgKHNob3dTaGlwcykgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY2Nic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgPT09ICdYJykge1xuICAgICAgICAgICAgY29uc3QgbmV3TWFya2VyID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydtYXJrZXInXSk7XG4gICAgICAgICAgICBuZXdNYXJrZXIuZGF0YXNldC5jb2x1bW4gPSBjb2xzW2luZGV4XTtcbiAgICAgICAgICAgIG5ld01hcmtlci5kYXRhc2V0LnJvdyA9IGJvYXJkLmluZGV4T2YoYm9hcmRSb3cpICsgMTtcbiAgICAgICAgICAgIG5ld01hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDI1NSwgNjAsIDIwKSc7XG4gICAgICAgICAgICBuZXdDZWxsLmFwcGVuZENoaWxkKG5ld01hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNlbGwgPT09ICdPJykge1xuICAgICAgICAgICAgY29uc3QgbmV3TWFya2VyID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydtYXJrZXInXSk7XG4gICAgICAgICAgICBuZXdNYXJrZXIuZGF0YXNldC5jb2x1bW4gPSBjb2xzW2luZGV4XTtcbiAgICAgICAgICAgIG5ld01hcmtlci5kYXRhc2V0LnJvdyA9IGJvYXJkLmluZGV4T2YoYm9hcmRSb3cpICsgMTtcbiAgICAgICAgICAgIG5ld01hcmtlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlZSc7XG4gICAgICAgICAgICBuZXdDZWxsLmFwcGVuZENoaWxkKG5ld01hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgZG9tQm9hcmQuYXBwZW5kQ2hpbGQobmV3Q2VsbCk7XG4gICAgfSkpO1xufVxuXG5jb25zdCBhZGRUb0xvZyA9IChwbGF5ZXIsIGNlbGwsIG9wcG9uZW50LCBvcHBCb2FyZCwgc2hpcFN1bmssIGRvbUxvZykgPT4ge1xuICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IG9wcEJvYXJkLnJlYWRCb2FyZCgpW3JvdyhjZWxsWzFdKV1bY29sdW1uKGNlbGxbMF0pXTtcblxuICAgIGNvbnN0IG5ld0xpbmUgPSBjcmVhdGVET01FbGVtZW50KCdwJywgWydsb2ctbGluZSddKTtcbiAgICBuZXdMaW5lLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmdldE5hbWUoKX0gYXR0YWNrZWQgJHtjZWxsLmpvaW4oJywgJyl9IC4uLiBpdCdzIGEgYDtcbiAgICBjb25zdCBzcGFuID0gY3JlYXRlRE9NRWxlbWVudCgnc3BhbicsIFsnbG9nLXNwYW4nXSk7XG4gICAgaWYgKGF0dGFja2VkQ2VsbCA9PT0gJ1gnKSB7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSAnSElUISc7XG4gICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSAncmdiKDI1NSwgNjAsIDIwKSc7XG4gICAgfSBlbHNlIGlmIChhdHRhY2tlZENlbGwgPT09ICdPJykge1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ01JU1MhJztcbiAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9ICcjZWVlJ1xuICAgIH1cbiAgICBuZXdMaW5lLmFwcGVuZENoaWxkKHNwYW4pXG4gICAgZG9tTG9nLmFwcGVuZENoaWxkKG5ld0xpbmUpO1xuICAgIGlmIChzaGlwU3Vuaykge1xuICAgICAgICBjb25zdCBzdW5rTGluZSA9IGNyZWF0ZURPTUVsZW1lbnQoJ3AnLCBbJ2xvZy1saW5lLXN1bmsnXSlcbiAgICAgICAgc3Vua0xpbmUudGV4dENvbnRlbnQgPSBgJHtvcHBvbmVudC5nZXRQb3NzZXNzaXZlKCl9ICR7c2hpcFN1bmt9IGhhcyBiZWVuIHN1bmshYDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGRvbUxvZy5hcHBlbmRDaGlsZChzdW5rTGluZSl9LCAxNTApICAgXG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VNYXJxdWVlID0gKHRleHRDb250ZW50LCBkb21Ob2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGRvbU5vZGU7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIG5vZGUuc3R5bGUuZm9udFNpemUgPSAnMjJweCdcbiAgICByZXR1cm4gbm9kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNyZWF0ZURPTUVsZW1lbnQsIHJlbmRlckJvYXJkLCByZW5kZXJDZWxscywgYWRkVG9Mb2csIGNoYW5nZU1hcnF1ZWUsIGNyZWF0ZVNoaXAgfSIsImNvbnN0IHsgcmVuZGVyQm9hcmQsIHJlbmRlckNlbGxzLCBhZGRUb0xvZywgY2hhbmdlTWFycXVlZSwgY3JlYXRlU2hpcCB9ID0gcmVxdWlyZSgnLi9kaXNwbGF5LWhlbHBlcnMnKTtcblxuY29uc3QgbWFycXVlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXJxdWVlJylcbmNvbnN0IHAxQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxQ29udGFpbmVyJylcbmNvbnN0IHAyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyQ29udGFpbmVyJylcbmNvbnN0IHAxSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxSGVhZGVyJylcbmNvbnN0IHAySGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AySGVhZGVyJylcbmNvbnN0IGdhbWVsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJylcbmNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKVxubGV0IHAxQm9hcmQ7XG5sZXQgcDJCb2FyZDtcblxuY29uc3QgRGlzcGxheSA9IHsgIFxuICAgIHJlbmRlckJvYXJkcyAoKSB7XG4gICAgICAgIHdoaWxlIChwMUNvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDEnKSkpIHtcbiAgICAgICAgICAgIHAxQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMScpKTtcbiAgICAgICAgfVxuICAgICAgICBwMUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJCb2FyZCgncDEnKSk7XG4gICAgICAgIHdoaWxlIChwMkNvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDInKSkpIHtcbiAgICAgICAgICAgIHAyQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMicpKTtcbiAgICAgICAgfSBcbiAgICAgICAgcDJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQoJ3AyJykpO1xuICAgICAgICBwMUhlYWRlci50ZXh0Q29udGVudCA9ICdZb3UnO1xuICAgICAgICBwMkhlYWRlci50ZXh0Q29udGVudCA9ICdDb21wdXRlcic7XG4gICAgICAgIGdhbWVsb2cudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgcDFCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMScpO1xuICAgICAgICBwMkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyJyk7XG4gICAgfSxcbiAgICBcbiAgICBzdGFydEdhbWUgKCkge1xuICAgICAgICB0aGlzLnJlbmRlckJvYXJkcygpO1xuICAgICAgICB0aGlzLnJlbmRlclNoaXBzKCk7XG4gICAgICAgIG1hcnF1ZWUudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBzaGlwcyAocHJlc3MgUiB0byByb3RhdGUpLidcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICAgICAgY3JlYXRlU2hpcCgnQ2FycmllcicsIDUpLFxuICAgICAgICAgICAgY3JlYXRlU2hpcCgnQmF0dGxlc2hpcCcsIDQpLFxuICAgICAgICAgICAgY3JlYXRlU2hpcCgnQ3J1aXNlcicsIDMpLFxuICAgICAgICAgICAgY3JlYXRlU2hpcCgnU3VibWFyaW5lJywgMyksXG4gICAgICAgICAgICBjcmVhdGVTaGlwKCdEZXN0cm95ZXInLCAyKVxuICAgICAgICBdO1xuICAgICAgICB3aGlsZSAoc2hpcENvbnRhaW5lci5maXJzdENoaWxkKSBzaGlwQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNoaXBDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCkpXG4gICAgfSxcblxuICAgIHAxVXBkYXRlQm9hcmQgKGJvYXJkKSB7IHJlbmRlckNlbGxzKGJvYXJkLCBwMUJvYXJkKSB9LFxuICAgIHAyVXBkYXRlQm9hcmQgKGJvYXJkKSB7IHJlbmRlckNlbGxzKGJvYXJkLCBwMkJvYXJkLCBmYWxzZSkgfSxcbiAgICB1cGRhdGVEaXNwbGF5IChwbGF5ZXIsIGNlbGwsIG9wcG9uZW50LCBvcHBCb2FyZCwgc2hpcFN1bmspIHtcbiAgICAgICAgY2hhbmdlTWFycXVlZShgJHtvcHBvbmVudC5nZXRQb3NzZXNzaXZlKCl9IHR1cm5gLCBtYXJxdWVlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZGRUb0xvZyhwbGF5ZXIsIGNlbGwsIG9wcG9uZW50LCBvcHBCb2FyZCwgc2hpcFN1bmssIGdhbWVsb2cpO1xuICAgICAgICB9LCAxMDApOyAgXG4gICAgfSxcbiAgICB1cGRhdGVNYXJxdWVlICh0ZXh0KSB7XG4gICAgICAgIGNoYW5nZU1hcnF1ZWUodGV4dCwgbWFycXVlZSk7XG4gICAgfSxcbiAgICBnYW1lT3Zlcih3aW5uZXIpIHsgbWFycXVlZS50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7d2lubmVyLmdldE5hbWUoKX1gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5O1xuIiwiY29uc3QgeyByb3csIGNvbHVtbiB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuY29uc3QgeyBjaGVja0NvbGxpc2lvbnMsIGlzT2NjdXBpZWQgfSA9IHJlcXVpcmUgKCcuL2hlbHBlcnMnKVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIChmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1JvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIG5ld1Jvdy5wdXNoKFwiIFwiKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLnB1c2gobmV3Um93KTtcbiAgICB9XG4gIH0pKCk7XG4gIFxuICBjb25zdCByZWFkQm9hcmQgPSAoKSA9PiBib2FyZDtcbiAgY29uc3QgYWxsU2hpcHMgPSBbXTtcbiAgY29uc3QgZ2V0QWxsU2hpcHMgPSAoKSA9PiBhbGxTaGlwcztcblxuICBmdW5jdGlvbiBhbGxTaGlwc1N1bmsgKCkge1xuICAgIGlmIChhbGxTaGlwcy5sZW5ndGggPCA1KSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGFsbFNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAuaXNTdW5rKCkpLmxlbmd0aCA9PT0gNTsgXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcE9iaiwgeCwgeSwgb3JpZW50YXRpb24pIHtcbiAgICBpZiAoYWxsU2hpcHMubGVuZ3RoID4gNCkgdGhyb3cgbmV3IEVycm9yICgnU2hpcCBsaW1pdCBleGNlZWRlZC4nKVxuICAgIGxldCBjb2xJbmRleCA9IGNvbHVtbih4KTtcbiAgICBsZXQgcm93SW5kZXggPSByb3coeSk7XG4gICBcbiAgICB0cnkge1xuICAgICAgKGNoZWNrQ29sbGlzaW9ucyhib2FyZCwgeCwgeSwgb3JpZW50YXRpb24sIHNoaXBPYmopKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgXG4gICAgYWxsU2hpcHMucHVzaChzaGlwT2JqKTtcbiAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcE9iai5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBib2FyZFtyb3dJbmRleF1bY29sSW5kZXhdID0gc2hpcE9iajtcbiAgICAgICAgcm93SW5kZXgrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcE9iai5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBib2FyZFtyb3dJbmRleF1bY29sSW5kZXhdID0gc2hpcE9iajtcbiAgICAgICAgY29sSW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBsZXQgc3Vua1NoaXAgPSBudWxsO1xuICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXTtcbiAgICBpZiAoYXR0YWNrZWRDZWxsID09PSBcIlhcIiB8fCBhdHRhY2tlZENlbGwgPT09IFwiT1wiKSB0aHJvdyBuZXcgRXJyb3IoJ0NlbGwgYWxyZWFkeSBoaXQhJylcbiAgICBlbHNlIGlmIChpc09jY3VwaWVkKGF0dGFja2VkQ2VsbCkpIHtcbiAgICAgIGF0dGFja2VkQ2VsbC5oaXQoKTtcbiAgICAgIGlmIChhdHRhY2tlZENlbGwuaXNTdW5rKCkpIHN1bmtTaGlwID0gYXR0YWNrZWRDZWxsLm5hbWVcbiAgICAgIGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXSA9IFwiWFwiO1xuICAgIH0gZWxzZSBib2FyZFtyb3coeSldW2NvbHVtbih4KV0gPSBcIk9cIjtcbiAgICBcbiAgICByZXR1cm4geyBjZWxsOiBbeCwgeV0sIHN1bmtTaGlwIH07XG4gIH1cblxuICByZXR1cm4geyByZWFkQm9hcmQsIHJlY2VpdmVBdHRhY2ssIHBsYWNlU2hpcCwgYWxsU2hpcHNTdW5rLCBnZXRBbGxTaGlwcyB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpXG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5jb25zdCBhbGxTaGlwcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0NydWlzZXInLCAnU3VibWFyaW5lJywgJ0Rlc3Ryb3llciddXG5cbmFzeW5jIGZ1bmN0aW9uIEdhbWUoKSB7XG4gIERpc3BsYXkuc3RhcnRHYW1lKCk7XG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ1lvdScpO1xuICBjb25zdCBwbGF5ZXIyID0gUGxheWVyKCdDb21wdXRlcicsIHRydWUpO1xuICBjb25zdCBwMUJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHAyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxO1xuICBcbiAgY29uc3QgcDFEaXNwbGF5Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDEnKTtcbiAgY29uc3QgcDJEaXNwbGF5Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDInKVxuICBcbiAgcGxhY2VQbGF5ZXJTaGlwcygpO1xuICBEaXNwbGF5LnAxVXBkYXRlQm9hcmQocDFCb2FyZCk7XG4gIHBsYWNlQ29tcHV0ZXJTaGlwcygpO1xuICBEaXNwbGF5LnAyVXBkYXRlQm9hcmQocDJCb2FyZCk7XG5cbiAgZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gcDJCb2FyZC5hbGxTaGlwc1N1bmsoKSB8fCBwMUJvYXJkLmFsbFNoaXBzU3VuaygpO1xuICB9XG5cbiAgcDJEaXNwbGF5Qm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIxICYmICFpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgY29uc3QgY2VsbEF0dGFja2VkID0gcDJCb2FyZC5yZWNlaXZlQXR0YWNrKGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uLCBlLnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgICAgIERpc3BsYXkucDJVcGRhdGVCb2FyZChwMkJvYXJkKTtcbiAgICAgICAgRGlzcGxheS51cGRhdGVEaXNwbGF5KHBsYXllcjEsIGNlbGxBdHRhY2tlZC5jZWxsLCBwbGF5ZXIyLCBwMkJvYXJkLCBjZWxsQXR0YWNrZWQuc3Vua1NoaXApO1xuICAgICAgICBpZiAoaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gRGlzcGxheS5nYW1lT3ZlcihwbGF5ZXIxKVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBjaG9pY2UgPSBwbGF5ZXIyLnJhbmRvbUF0dGFjayhwMUJvYXJkKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSBwMUJvYXJkLnJlY2VpdmVBdHRhY2soY2hvaWNlWzBdLCBjaG9pY2VbMV0pO1xuICAgICAgICBEaXNwbGF5LnAxVXBkYXRlQm9hcmQocDFCb2FyZCk7XG4gICAgICAgIERpc3BsYXkudXBkYXRlRGlzcGxheShwbGF5ZXIyLCBjb21wdXRlckF0dGFjay5jZWxsLCBwbGF5ZXIxLCBwMUJvYXJkLCBjb21wdXRlckF0dGFjay5zdW5rU2hpcCk7XG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBEaXNwbGF5LmdhbWVPdmVyKHBsYXllcjIpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxO1xuICAgIH0sIDUwMClcbiAgfSlcblxuICBmdW5jdGlvbiBwbGFjZVBsYXllclNoaXBzKGluZGV4ID0gMCkge1xuICAgIGlmIChpbmRleCA+PSBhbGxTaGlwcy5sZW5ndGgpIHJldHVybjtcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IFNoaXAoYWxsU2hpcHNbaW5kZXhdKTtcbiAgICBsZXQgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAncicgJiYgb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIG9yaWVudGF0aW9uID0gJydcbiAgICAgIGVsc2Ugb3JpZW50YXRpb24gPSAndmVydGljYWwnXG4gICAgfSlcblxuICAgIHAxRGlzcGxheUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgICAgY29uc3QgcGxhY2VkU2hpcCA9IHAxQm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBkYXRhLmNvbHVtbiwgZGF0YS5yb3csIG9yaWVudGF0aW9uKTtcbiAgICAgIGlmIChwbGFjZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICAgIERpc3BsYXkucDFVcGRhdGVCb2FyZChwMUJvYXJkKTtcbiAgICAgICAgcGxhY2VQbGF5ZXJTaGlwcygrK2luZGV4KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRGlzcGxheS51cGRhdGVNYXJxdWVlKHBsYWNlZFNoaXApO1xuICAgICAgICBwbGFjZVBsYXllclNoaXBzKGluZGV4KTtcbiAgICAgIH1cbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcyAoKSB7XG4gICAgcDJCb2FyZC5wbGFjZVNoaXAoU2hpcChhbGxTaGlwc1swXSksICdBJywgMik7XG4gICAgcDJCb2FyZC5wbGFjZVNoaXAoU2hpcChhbGxTaGlwc1sxXSksICdCJywgMTApO1xuICAgIHAyQm9hcmQucGxhY2VTaGlwKFNoaXAoYWxsU2hpcHNbMl0pLCAnSicsIDEsICd2ZXJ0aWNhbCcpO1xuICAgIHAyQm9hcmQucGxhY2VTaGlwKFNoaXAoYWxsU2hpcHNbM10pLCAnRScsIDUsICd2ZXJ0aWNhbCcpO1xuICAgIHAyQm9hcmQucGxhY2VTaGlwKFNoaXAoYWxsU2hpcHNbNF0pLCAnSCcsIDEsICd2ZXJ0aWNhbCcpO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbiIsImNvbnN0IHsgcm93LCBjb2x1bW4gfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKVxuXG5mdW5jdGlvbiBpc09jY3VwaWVkKGNlbGwpIHtcbiAgcmV0dXJuIHR5cGVvZiBjZWxsID09PSAnb2JqZWN0Jztcbn1cblxuY29uc3QgY2hlY2tDb2xsaXNpb25zID0gZnVuY3Rpb24gY2hlY2tGb3JTaGlwUGxhY2VtZW50Q29sbGlzaW9ucyhib2FyZCwgeCwgeSwgb3JpZW50YXRpb24sIHNoaXApIHtcbiAgY29uc3Qgc2hpcFNsb3QgPSBbXTtcbiAgbGV0IGNvbENoZWNrID0gY29sdW1uKHgpO1xuICBsZXQgcm93Q2hlY2sgPSByb3coeSk7XG5cbiAgaWYob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwLmdldFNoaXBMZW5ndGgoKTsgaSsrKSB7XG4gICAgICBpZiAoY29sQ2hlY2sgPiA5IHx8IHJvd0NoZWNrID4gOSkgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzIScpXG4gICAgICBzaGlwU2xvdC5wdXNoKGJvYXJkW3Jvd0NoZWNrXVtjb2xDaGVja10pO1xuICAgICAgcm93Q2hlY2srKztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgaWYgKGNvbENoZWNrID4gOSB8fCByb3dDaGVjayA+IDkpIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kcyEnKVxuICAgICAgc2hpcFNsb3QucHVzaChib2FyZFtyb3dDaGVja11bY29sQ2hlY2tdKTtcbiAgICAgIGNvbENoZWNrKys7XG4gICAgfVxuICB9XG4gIFxuICBpZiAoc2hpcFNsb3QuZmluZChpc09jY3VwaWVkKSkgdGhyb3cgbmV3IEVycm9yKCdTaGlwIENvbGxpc2lvbiEnKTtcbiAgcmV0dXJuIEVycm9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgY2hlY2tDb2xsaXNpb25zLCBpc09jY3VwaWVkIH1cbiIsImNvbnN0IHsgaXNPY2N1cGllZCB9ID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5jb25zdCB7IGNvbHMgfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuZnVuY3Rpb24gUGxheWVyKG5hbWUsIGNvbXB1dGVyID0gZmFsc2UpIHtcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgICBjb25zdCBnZXRQb3NzZXNzaXZlID0gKCkgPT4gbmFtZSA9PT0gJ1lvdScgPyAnWW91cicgOiBgJHtuYW1lfSdzYDtcbiAgICBjb25zdCBpc0NvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXIgPT09IHRydWU7XG5cbiAgICBjb25zdCByYW5kb21BdHRhY2sgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3Qgb3BwQm9hcmQgPSBib2FyZC5yZWFkQm9hcmQoKTtcbiAgICAgICAgY29uc3QgYXR0YWNrYWJsZUNlbGxzID0gW107XG4gICAgICAgIG9wcEJvYXJkLmZvckVhY2gob3BwUm93ID0+IG9wcFJvdy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYoaXNPY2N1cGllZChjZWxsKSB8fCBjZWxsID09PSAnICcpIGF0dGFja2FibGVDZWxscy5wdXNoKFtjb2xzW2luZGV4XSwgb3BwQm9hcmQuaW5kZXhPZihvcHBSb3cpICsgMV0pXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgY2hvc2VuQ2VsbCA9IGF0dGFja2FibGVDZWxsc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdHRhY2thYmxlQ2VsbHMubGVuZ3RoKV1cblxuICAgICAgICByZXR1cm4gY2hvc2VuQ2VsbDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXROYW1lLCBnZXRQb3NzZXNzaXZlLCBpc0NvbXB1dGVyLCByYW5kb21BdHRhY2sgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllclxuIiwiY29uc3QgU2hpcCA9IChuYW1lKSA9PiB7XG4gIGxldCBzaGlwTGVuZ3RoO1xuXG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgKCdDYXJyaWVyJyk6XG4gICAgICBzaGlwTGVuZ3RoID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKCdCYXR0bGVzaGlwJyk6XG4gICAgICBzaGlwTGVuZ3RoID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKCdDcnVpc2VyJyk6XG4gICAgY2FzZSAoJ1N1Ym1hcmluZScpOlxuICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgnRGVzdHJveWVyJyk6XG4gICAgICBzaGlwTGVuZ3RoID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKCdVbmV4cGVjdGVkIHNoaXAgbmFtZS4nKVxuICB9XG5cbiAgbGV0IGhpdHMgPSAwO1xuICBjb25zdCByZWFkSGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGdldFNoaXBMZW5ndGggPSAoKSA9PiBzaGlwTGVuZ3RoO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRzID09PSBzaGlwTGVuZ3RoO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7IFxuICAgIGlmICghaXNTdW5rKCkpIGhpdHMgKz0gMTtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWUsIHJlYWRIaXRzLCBnZXRTaGlwTGVuZ3RoLCBoaXQsIGlzU3VuayB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgRGlzcGxheSA9IHJlcXVpcmUoJy4vZGlzcGxheScpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vZ2FtZXBsYXknKTtcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc3RhcnQnKVxuXG5EaXNwbGF5LnJlbmRlckJvYXJkcygpO1xuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEdhbWUpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9