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

.ship-container {
    width: min(500px, 98%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.6rem;
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

.ship .cell {
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV;AACJ;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf;AACJ;;AAEA;IACI,qGAAqG;IACrG,4BAA4B;IAC5B,cAAc;IACd,iBAAiB;IACjB,gCAAgC;IAChC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB;6CACyC;IACzC,YAAY;IACZ,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,4BAA4B;IAC5B,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,8CAA8C;IAC9C,uBAAuB;IACvB,WAAW;IACX,wBAAwB;AAC5B;;AAEA;IACI,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,4BAA4B;IAC5B,wBAAwB;IACxB;AACJ;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,4BAA4B;IAC5B,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,iBAAiB;AACnB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box\n}\n\n:root {\n    background: #222;\n    font-size: 18px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\n}\n\n.container {\n    background: linear-gradient(178deg, hsl(46, 50%, 75%), hsl(36, 44%, 64%) 12%, hsl(36, 40%, 43%) 108%);\n    background-repeat: no-repeat;\n    margin: 0 auto;\n    min-height: 100vh;\n    width: clamp(430px, 95%, 1280px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.6rem;\n}\n\nh1 {\n    letter-spacing: 0.1rem;\n    text-align: center;\n    margin-top: 0.5rem;\n}\n\n.marquee {\n    padding: 0.5rem;\n    color: #333;\n    background: #fefefe;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 0.25rem;\n    box-shadow: inset 2px 2px 4px #888,\n                inset -2px -2px 2px lightgray;\n    width: 400px;\n    height: 4rem;\n    font-size: 1.2rem;\n}\n\n.button#start {\n    padding: 5px 8px;\n    border-radius: 10px;\n    box-shadow: 1px 1px 4px #888;\n    font-weight: bold;\n    background: #fff;\n    border: 1px solid black;\n}\n\n.ship-container {\n    width: min(500px, 98%);\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 0.6rem;\n}\n\n.boards-container {\n    width: min(98%, 920px);\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 412px);\n    justify-content: center;\n    gap: 0.8rem;\n    padding: 0.25rem 0.75rem;\n}\n\n#p2 .cell:hover {\n    background-color: rgba(20, 20, 20, 0.05);\n    cursor: pointer;\n}\n\n.board-container {\n    border: 6px solid #222;\n    border-radius: 6px;\n    box-shadow: 1px 2px 4px #888;\n    letter-spacing: 0.025rem;\n    background-color: skyblue\n}\n\n.board-header {\n    height: 40px;\n    background: #ddd;\n    padding: 4px;\n    font-size: 1.3rem;\n    font-weight: bold;\n    border-bottom: 3px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    background: inherit;\n    height: min-content;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.cell {\n    height: 40px;\n    width: 40px;\n    outline: 1px dotted black;\n    border-radius: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.ship .cell {\n    background-color: #888;;\n    color: #fefefe;\n    font-weight: bold;\n    outline: 1px solid #444;\n    box-shadow: 1px 2px 3px #555;\n}\n\n.marker {\n    width: 55%;\n    height: 55%;\n    border-radius: 50%;\n    box-shadow: 0px 1px 4px #333;\n}\n\n.log-container {\n    background: #111;\n    width: min(98%, 600px);\n    height: 196px;\n    border: 2px solid #eee;\n    border-radius: 4px;\n    box-shadow: 1px 1px 4px #888;\n    letter-spacing: 0.025rem;\n    margin-bottom: 0.25rem;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n}\n\n.log-header {\n    color: #fefefe;\n    font-family: monospace;\n    text-align: center;\n    padding: 0.1rem;\n    border-bottom: 1px solid #eee;\n}\n\n.log {\n    color: hsl(310, 100%, 88%);\n    font-size: 0.85rem;\n    padding: 3px 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    overflow: hidden;\n}\n\n.log-span {\n    font-weight: bold;\n}\n\n.log-line-sunk {\n  font-style: italic;\n  color: yellow;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
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
        ship.style.left = pageX - ship.offsetWidth / 7 + 'px';
        ship.style.top = pageY - ship.offsetHeight / 2 + 'px';
      }
  
      moveAt(event.pageX, event.pageY);
  
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY)
      }
  
      document.addEventListener('mousemove', onMouseMove);
      window.addEventListener('keydown', (e) => {
        if (e.key === 'r' && orientation === 'vertical') orientation = ''
        else orientation = 'vertical'
      })
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQjs7QUFFdEIsZ0JBQWdCLG1CQUFPLENBQUMsbUNBQVc7QUFDbkMsYUFBYSxtQkFBTyxDQUFDLHFDQUFZOztBQUVqQzs7QUFFQTs7QUFFQSwyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZGlzcGxheS1oZWxwZXJzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2dhbWVwbGF5LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL3NoaXAtcGxhY2VtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtd2VicGFjay1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXdlYnBhY2stYmFzaWMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS13ZWJwYWNrLWJhc2ljLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XG59XG5cbjpyb290IHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWZcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3OGRlZywgaHNsKDQ2LCA1MCUsIDc1JSksIGhzbCgzNiwgNDQlLCA2NCUpIDEyJSwgaHNsKDM2LCA0MCUsIDQzJSkgMTA4JSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogY2xhbXAoNDMwcHgsIDk1JSwgMTI4MHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNnJlbTtcbn1cblxuaDEge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLm1hcnF1ZWUge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDRweCAjODg4LFxuICAgICAgICAgICAgICAgIGluc2V0IC0ycHggLTJweCAycHggbGlnaHRncmF5O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5idXR0b24jc3RhcnQge1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjODg4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5zaGlwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1pbig1MDBweCwgOTglKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNnJlbTtcbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICAgIHdpZHRoOiBtaW4oOTglLCA5MjBweCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNDEycHgpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMC44cmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbn1cblxuI3AyIC5jZWxsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuMDUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiA2cHggc29saWQgIzIyMjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggIzg4ODtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZVxufVxuXG4uYm9hcmQtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jZWxsIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hpcCAuY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODs7XG4gICAgY29sb3I6ICNmZWZlZmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICM0NDQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggIzU1NTtcbn1cblxuLm1hcmtlciB7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggIzMzMztcbn1cblxuLmxvZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICMxMTE7XG4gICAgd2lkdGg6IG1pbig5OCUsIDYwMHB4KTtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICM4ODg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbn1cblxuLmxvZy1oZWFkZXIge1xuICAgIGNvbG9yOiAjZmVmZWZlO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmxvZyB7XG4gICAgY29sb3I6IGhzbCgzMTAsIDEwMCUsIDg4JSk7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxvZy1zcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZy1saW5lLXN1bmsge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiB5ZWxsb3c7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxxR0FBcUc7SUFDckcsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qjs2Q0FDeUM7SUFDekMsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZlxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3OGRlZywgaHNsKDQ2LCA1MCUsIDc1JSksIGhzbCgzNiwgNDQlLCA2NCUpIDEyJSwgaHNsKDM2LCA0MCUsIDQzJSkgMTA4JSk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IGNsYW1wKDQzMHB4LCA5NSUsIDEyODBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC42cmVtO1xcbn1cXG5cXG5oMSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4ubWFycXVlZSB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNHB4ICM4ODgsXFxuICAgICAgICAgICAgICAgIGluc2V0IC0ycHggLTJweCAycHggbGlnaHRncmF5O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5idXR0b24jc3RhcnQge1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjODg4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDk4JSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMC42cmVtO1xcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtaW4oOTglLCA5MjBweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MTJweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xcbn1cXG5cXG4jcDIgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuMDUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMjIyO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggNHB4ICM4ODg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZVxcbn1cXG5cXG4uYm9hcmQtaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwIC5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODs7XFxuICAgIGNvbG9yOiAjZmVmZWZlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICM0NDQ7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4ICM1NTU7XFxufVxcblxcbi5tYXJrZXIge1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBoZWlnaHQ6IDU1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAjMzMzO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICMxMTE7XFxuICAgIHdpZHRoOiBtaW4oOTglLCA2MDBweCk7XFxuICAgIGhlaWdodDogMTk2cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggIzg4ODtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmxvZy1oZWFkZXIge1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbn1cXG5cXG4ubG9nIHtcXG4gICAgY29sb3I6IGhzbCgzMTAsIDEwMCUsIDg4JSk7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgcGFkZGluZzogM3B4IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxvZy1zcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2ctbGluZS1zdW5rIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiB5ZWxsb3c7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29scyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG5cbmNvbnN0IHJvdyA9IChyb3dDb29yZCkgPT4ge1xuICAgIGlmIChyb3dDb29yZCA+IDEwIHx8IHJvd0Nvb3JkIDwgMSkgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRzIScpXG4gICAgcmV0dXJuIHJvd0Nvb3JkIC0gMTtcbn1cblxuY29uc3QgY29sdW1uID0gKGNvbHVtbkNvb3JkKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gY29scy5pbmRleE9mKGNvbHVtbkNvb3JkKTtcbiAgXG4gIGlmIChpbmRleCA+IDkgfHwgaW5kZXggPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZHMhJylcbiAgcmV0dXJuIGluZGV4XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyByb3csIGNvbHVtbiwgY29scyB9IiwiY29uc3QgeyBpc09jY3VwaWVkIH0gPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbmNvbnN0IHsgY29scywgcm93LCBjb2x1bW4gfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUVsZW1lbnQgKGVsZW1lbnQsIGNsYXNzZXMsIGlkKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKGNsYXNzZXMpIGNsYXNzZXMuZm9yRWFjaCh2YWx1ZSA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsdWUpKVxuICAgIGlmIChpZCkgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGlkKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKS5yZWFkQm9hcmQoKTtcbiAgICBjb25zdCBkb21Cb2FyZCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnYm9hcmQnXSwgaWQpO1xuICAgIGxldCBuZXdDZWxsXG4gICAgYm9hcmQuZm9yRWFjaChib2FyZFJvdyA9PiBib2FyZFJvdy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaWQgPT09ICdwMScpIG5ld0NlbGwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ2NlbGwnLCAnZHJvcHBhYmxlJ10pO2Vsc2UgbmV3Q2VsbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnY2VsbCddKTtcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHNbaW5kZXhdO1xuICAgICAgICBuZXdDZWxsLmRhdGFzZXQucm93ID0gYm9hcmQuaW5kZXhPZihib2FyZFJvdykgKyAxO1xuICAgICAgICBkb21Cb2FyZC5hcHBlbmRDaGlsZChuZXdDZWxsKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGRvbUJvYXJkXG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSBmdW5jdGlvbiBjcmVhdGVTaGlwT25EaXNwbGF5KGlkLCBsZW5ndGgpIHtcbiAgICBjb25zdCBuZXdTaGlwID0gY3JlYXRlRE9NRWxlbWVudCgnZGl2JywgWydzaGlwJ10sIGlkKTtcbiAgICBuZXdTaGlwLnN0eWxlLmN1cnNvciA9IFwibW92ZVwiXG4gICAgbmV3U2hpcC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICBsZXQgbiA9IDBcbiAgICB3aGlsZSAobGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmV3Q2VsbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnY2VsbCddKTtcbiAgICAgIGlmIChuIDwgMykgbmV3Q2VsbC50ZXh0Q29udGVudCA9IGlkLnRvU3RyaW5nKCkuc3Vic3RyaW5nKG4sIG4gKyAxKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgbmV3U2hpcC5hcHBlbmRDaGlsZChuZXdDZWxsKVxuICAgICAgbGVuZ3RoLS07XG4gICAgICBuKys7XG4gICAgfVxuICAgIHJldHVybiBuZXdTaGlwO1xufVxuXG5jb25zdCByZW5kZXJDZWxscyA9IChnYW1lYm9hcmQsIGRvbUJvYXJkLCBzaG93U2hpcHMgPSB0cnVlKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQucmVhZEJvYXJkKCk7XG4gICAgbGV0IG5ld0NlbGw7XG4gICAgd2hpbGUgKGRvbUJvYXJkLmZpcnN0Q2hpbGQpIGRvbUJvYXJkLnJlbW92ZUNoaWxkKGRvbUJvYXJkLmxhc3RDaGlsZCk7XG4gICAgYm9hcmQuZm9yRWFjaChib2FyZFJvdyA9PiBib2FyZFJvdy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZG9tQm9hcmQuaWQgPT09ICdwMicpIG5ld0NlbGwgPSBjcmVhdGVET01FbGVtZW50KCdkaXYnLCBbJ2NlbGwnXSk7XG4gICAgICAgIGVsc2UgbmV3Q2VsbCA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnY2VsbCcsICdkcm9wcGFibGUnXSk7XG4gICAgICAgIG5ld0NlbGwuZGF0YXNldC5jb2x1bW4gPSBjb2xzW2luZGV4XTtcbiAgICAgICAgbmV3Q2VsbC5kYXRhc2V0LnJvdyA9IGJvYXJkLmluZGV4T2YoYm9hcmRSb3cpICsgMTtcbiAgICAgICAgaWYgKGlzT2NjdXBpZWQoY2VsbCkpIHtcbiAgICAgICAgICAgIGlmIChzaG93U2hpcHMpIG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4ODgnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsID09PSAnWCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcmtlciA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnbWFya2VyJ10pO1xuICAgICAgICAgICAgbmV3TWFya2VyLmRhdGFzZXQuY29sdW1uID0gY29sc1tpbmRleF07XG4gICAgICAgICAgICBuZXdNYXJrZXIuZGF0YXNldC5yb3cgPSBib2FyZC5pbmRleE9mKGJvYXJkUm93KSArIDE7XG4gICAgICAgICAgICBuZXdNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDYwLCAyMCknO1xuICAgICAgICAgICAgbmV3Q2VsbC5hcHBlbmRDaGlsZChuZXdNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsID09PSAnTycpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01hcmtlciA9IGNyZWF0ZURPTUVsZW1lbnQoJ2RpdicsIFsnbWFya2VyJ10pO1xuICAgICAgICAgICAgbmV3TWFya2VyLmRhdGFzZXQuY29sdW1uID0gY29sc1tpbmRleF07XG4gICAgICAgICAgICBuZXdNYXJrZXIuZGF0YXNldC5yb3cgPSBib2FyZC5pbmRleE9mKGJvYXJkUm93KSArIDE7XG4gICAgICAgICAgICBuZXdNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlZWUnO1xuICAgICAgICAgICAgbmV3Q2VsbC5hcHBlbmRDaGlsZChuZXdNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIGRvbUJvYXJkLmFwcGVuZENoaWxkKG5ld0NlbGwpO1xuICAgIH0pKTtcbn1cblxuY29uc3QgYWRkVG9Mb2cgPSAocGxheWVyLCBjZWxsLCBvcHBvbmVudCwgb3BwQm9hcmQsIHNoaXBTdW5rLCBkb21Mb2cpID0+IHtcbiAgICBjb25zdCBhdHRhY2tlZENlbGwgPSBvcHBCb2FyZC5yZWFkQm9hcmQoKVtyb3coY2VsbFsxXSldW2NvbHVtbihjZWxsWzBdKV07XG5cbiAgICBjb25zdCBuZXdMaW5lID0gY3JlYXRlRE9NRWxlbWVudCgncCcsIFsnbG9nLWxpbmUnXSk7XG4gICAgbmV3TGluZS50ZXh0Q29udGVudCA9IGAke3BsYXllci5nZXROYW1lKCl9IGF0dGFja2VkICR7Y2VsbC5qb2luKCcsICcpfSAuLi4gaXQncyBhIGA7XG4gICAgY29uc3Qgc3BhbiA9IGNyZWF0ZURPTUVsZW1lbnQoJ3NwYW4nLCBbJ2xvZy1zcGFuJ10pO1xuICAgIGlmIChhdHRhY2tlZENlbGwgPT09ICdYJykge1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ0hJVCEnO1xuICAgICAgICBzcGFuLnN0eWxlLmNvbG9yID0gJ3JnYigyNTUsIDYwLCAyMCknO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrZWRDZWxsID09PSAnTycpIHtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICdNSVNTISc7XG4gICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSAnI2VlZSdcbiAgICB9XG4gICAgbmV3TGluZS5hcHBlbmRDaGlsZChzcGFuKVxuICAgIGRvbUxvZy5hcHBlbmRDaGlsZChuZXdMaW5lKTtcbiAgICBpZiAoc2hpcFN1bmspIHtcbiAgICAgICAgY29uc3Qgc3Vua0xpbmUgPSBjcmVhdGVET01FbGVtZW50KCdwJywgWydsb2ctbGluZS1zdW5rJ10pXG4gICAgICAgIHN1bmtMaW5lLnRleHRDb250ZW50ID0gYCR7b3Bwb25lbnQuZ2V0UG9zc2Vzc2l2ZSgpfSAke3NoaXBTdW5rfSBoYXMgYmVlbiBzdW5rIWA7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBkb21Mb2cuYXBwZW5kQ2hpbGQoc3Vua0xpbmUpfSwgMTUwKSAgIFxuICAgIH1cbn1cblxuY29uc3QgY2hhbmdlTWFycXVlZSA9ICh0ZXh0Q29udGVudCwgZG9tTm9kZSwgc2l6ZSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0ZXh0Q29udGVudC50b1N0cmluZygpO1xuICAgIGNvbnN0IG5vZGUgPSBkb21Ob2RlO1xuICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdFcnJvcicpKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAnb3JhbmdlcmVkJ1xuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gbWVzc2FnZSArICcgVHJ5IGFnYWluLic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgIG5vZGUuc3R5bGUuY29sb3IgPSAnIzMzMyc7XG4gICAgfVxuICAgIG5vZGUuc3R5bGUuZm9udFNpemUgPSBgJHtzaXplfXB4YDtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNyZWF0ZURPTUVsZW1lbnQsIHJlbmRlckJvYXJkLCByZW5kZXJDZWxscywgYWRkVG9Mb2csIGNoYW5nZU1hcnF1ZWUsIGNyZWF0ZVNoaXAgfSIsImNvbnN0IHsgcmVuZGVyQm9hcmQsIHJlbmRlckNlbGxzLCBhZGRUb0xvZywgY2hhbmdlTWFycXVlZSwgY3JlYXRlU2hpcCB9ID0gcmVxdWlyZSgnLi9kaXNwbGF5LWhlbHBlcnMnKTtcblxuY29uc3QgbWFycXVlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXJxdWVlJylcbmNvbnN0IHAxQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxQ29udGFpbmVyJylcbmNvbnN0IHAyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyQ29udGFpbmVyJylcbmNvbnN0IHAxSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxSGVhZGVyJylcbmNvbnN0IHAySGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AySGVhZGVyJylcbmNvbnN0IGdhbWVsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nJylcbmNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKVxubGV0IHAxQm9hcmQ7XG5sZXQgcDJCb2FyZDtcblxuY29uc3QgRGlzcGxheSA9IHsgIFxuICAgIHJlbmRlckJvYXJkcyAoKSB7XG4gICAgICAgIHdoaWxlIChwMUNvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDEnKSkpIHtcbiAgICAgICAgICAgIHAxQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMScpKTtcbiAgICAgICAgfVxuICAgICAgICBwMUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJCb2FyZCgncDEnKSk7XG4gICAgICAgIHdoaWxlIChwMkNvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDInKSkpIHtcbiAgICAgICAgICAgIHAyQ29udGFpbmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMicpKTtcbiAgICAgICAgfSBcbiAgICAgICAgcDJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyQm9hcmQoJ3AyJykpO1xuICAgICAgICBwMUhlYWRlci50ZXh0Q29udGVudCA9ICdZb3UnO1xuICAgICAgICBwMkhlYWRlci50ZXh0Q29udGVudCA9ICdDb21wdXRlcic7XG4gICAgICAgIGdhbWVsb2cudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgcDFCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMScpO1xuICAgICAgICBwMkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AyJyk7XG4gICAgfSxcbiAgICBcbiAgICBzdGFydEdhbWUgKCkge1xuICAgICAgICB0aGlzLnJlbmRlckJvYXJkcygpO1xuICAgICAgICB0aGlzLnJlbmRlclNoaXBzKCk7XG4gICAgICAgIG1hcnF1ZWUudGV4dENvbnRlbnQgPSAnUGxhY2UgeW91ciBzaGlwcyBieSBkcmFnZ2luZyB0aGVtIG9udG8geW91ciBib2FyZCAocHJlc3MgUiB0byByb3RhdGUpLidcbiAgICAgICAgbWFycXVlZS5zdHlsZS5mb250U2l6ZSA9ICcyMHB4JztcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICAgICAgY3JlYXRlU2hpcCgnQ2FycmllcicsIDUpLFxuICAgICAgICAgICAgY3JlYXRlU2hpcCgnQmF0dGxlc2hpcCcsIDQpLFxuICAgICAgICAgICAgY3JlYXRlU2hpcCgnQ3J1aXNlcicsIDMpLFxuICAgICAgICAgICAgY3JlYXRlU2hpcCgnU3VibWFyaW5lJywgMyksXG4gICAgICAgICAgICBjcmVhdGVTaGlwKCdEZXN0cm95ZXInLCAyKVxuICAgICAgICBdO1xuICAgICAgICB3aGlsZSAoc2hpcENvbnRhaW5lci5maXJzdENoaWxkKSBzaGlwQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNoaXBDb250YWluZXIubGFzdENoaWxkKTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcCkpXG4gICAgfSxcblxuICAgIHAxVXBkYXRlQm9hcmQgKGJvYXJkKSB7IHJlbmRlckNlbGxzKGJvYXJkLCBwMUJvYXJkKSB9LFxuICAgIHAyVXBkYXRlQm9hcmQgKGJvYXJkKSB7IHJlbmRlckNlbGxzKGJvYXJkLCBwMkJvYXJkLCBmYWxzZSkgfSxcbiAgICB1cGRhdGVEaXNwbGF5IChwbGF5ZXIsIGNlbGwsIG9wcG9uZW50LCBvcHBCb2FyZCwgc2hpcFN1bmspIHtcbiAgICAgICAgdGhpcy51cGRhdGVNYXJxdWVlKGAke29wcG9uZW50LmdldFBvc3Nlc3NpdmUoKX0gdHVybmAsIDI2KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhZGRUb0xvZyhwbGF5ZXIsIGNlbGwsIG9wcG9uZW50LCBvcHBCb2FyZCwgc2hpcFN1bmssIGdhbWVsb2cpO1xuICAgICAgICB9LCAxMDApOyAgXG4gICAgfSxcbiAgICB1cGRhdGVNYXJxdWVlICh0ZXh0LCBzaXplKSB7XG4gICAgICAgIGNoYW5nZU1hcnF1ZWUodGV4dCwgbWFycXVlZSwgc2l6ZSk7XG4gICAgfSxcbiAgICBnYW1lT3Zlcih3aW5uZXIpIHsgbWFycXVlZS50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7d2lubmVyLmdldE5hbWUoKX1gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5O1xuIiwiY29uc3QgeyByb3csIGNvbHVtbiB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuY29uc3QgeyBjaGVja0NvbGxpc2lvbnMsIGlzT2NjdXBpZWQgfSA9IHJlcXVpcmUgKCcuL2hlbHBlcnMnKVxuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIChmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1JvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIG5ld1Jvdy5wdXNoKFwiIFwiKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkLnB1c2gobmV3Um93KTtcbiAgICB9XG4gIH0pKCk7XG4gIFxuICBjb25zdCByZWFkQm9hcmQgPSAoKSA9PiBib2FyZDtcbiAgY29uc3QgYWxsU2hpcHMgPSBbXTtcbiAgY29uc3QgZ2V0QWxsU2hpcHMgPSAoKSA9PiBhbGxTaGlwcztcblxuICBmdW5jdGlvbiBhbGxTaGlwc1N1bmsgKCkge1xuICAgIGlmIChhbGxTaGlwcy5sZW5ndGggPCA1KSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGFsbFNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAuaXNTdW5rKCkpLmxlbmd0aCA9PT0gNTsgXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcE9iaiwgeCwgeSwgb3JpZW50YXRpb24pIHtcbiAgICBpZiAoYWxsU2hpcHMubGVuZ3RoID4gNCkgdGhyb3cgbmV3IEVycm9yICgnU2hpcCBsaW1pdCBleGNlZWRlZC4nKVxuICAgIGxldCBjb2xJbmRleCA9IGNvbHVtbih4KTtcbiAgICBsZXQgcm93SW5kZXggPSByb3coeSk7XG4gICBcbiAgICB0cnkge1xuICAgICAgKGNoZWNrQ29sbGlzaW9ucyhib2FyZCwgeCwgeSwgb3JpZW50YXRpb24sIHNoaXBPYmopKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgXG4gICAgYWxsU2hpcHMucHVzaChzaGlwT2JqKTtcbiAgICBpZihvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcE9iai5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBib2FyZFtyb3dJbmRleF1bY29sSW5kZXhdID0gc2hpcE9iajtcbiAgICAgICAgcm93SW5kZXgrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcE9iai5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBib2FyZFtyb3dJbmRleF1bY29sSW5kZXhdID0gc2hpcE9iajtcbiAgICAgICAgY29sSW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBsZXQgc3Vua1NoaXAgPSBudWxsO1xuICAgIGNvbnN0IGF0dGFja2VkQ2VsbCA9IGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXTtcbiAgICBpZiAoYXR0YWNrZWRDZWxsID09PSBcIlhcIiB8fCBhdHRhY2tlZENlbGwgPT09IFwiT1wiKSB0aHJvdyBuZXcgRXJyb3IoJ0NlbGwgYWxyZWFkeSBoaXQhJylcbiAgICBlbHNlIGlmIChpc09jY3VwaWVkKGF0dGFja2VkQ2VsbCkpIHtcbiAgICAgIGF0dGFja2VkQ2VsbC5oaXQoKTtcbiAgICAgIGlmIChhdHRhY2tlZENlbGwuaXNTdW5rKCkpIHN1bmtTaGlwID0gYXR0YWNrZWRDZWxsLm5hbWVcbiAgICAgIGJvYXJkW3Jvdyh5KV1bY29sdW1uKHgpXSA9IFwiWFwiO1xuICAgIH0gZWxzZSBib2FyZFtyb3coeSldW2NvbHVtbih4KV0gPSBcIk9cIjtcbiAgICBcbiAgICByZXR1cm4geyBjZWxsOiBbeCwgeV0sIHN1bmtTaGlwIH07XG4gIH1cblxuICByZXR1cm4geyByZWFkQm9hcmQsIHJlY2VpdmVBdHRhY2ssIHBsYWNlU2hpcCwgYWxsU2hpcHNTdW5rLCBnZXRBbGxTaGlwcyB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuY29uc3QgeyBzdGFydFBsYWNlbWVudFBoYXNlLCBwbGFjZW1lbnRQaGFzZU92ZXIgfSA9IHJlcXVpcmUoJy4vc2hpcC1wbGFjZW1lbnQnKVxuY29uc3QgRGlzcGxheSA9IHJlcXVpcmUoJy4vZGlzcGxheScpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuZnVuY3Rpb24gR2FtZSgpIHtcbiAgRGlzcGxheS5zdGFydEdhbWUoKTtcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcignWW91Jyk7XG4gIGNvbnN0IHBsYXllcjIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgdHJ1ZSk7XG4gIGNvbnN0IHAxQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgcDJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcjE7XG4gIHN0YXJ0UGxhY2VtZW50UGhhc2UoKTtcbiAgY29uc3QgcDJEaXNwbGF5Qm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDInKTtcbiAgcGxheWVyMS5wbGFjZVNoaXBzKHAxQm9hcmQpXG4gIHBsYXllcjIucGxhY2VTaGlwcyhwMkJvYXJkLCAncmFuZG9tJyk7XG4gIERpc3BsYXkucDJVcGRhdGVCb2FyZChwMkJvYXJkKTtcblxuICBmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiBwMkJvYXJkLmFsbFNoaXBzU3VuaygpIHx8IHAxQm9hcmQuYWxsU2hpcHNTdW5rKCk7XG4gIH1cblxuICBwMkRpc3BsYXlCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHBsYWNlbWVudFBoYXNlT3ZlcigpICYmIGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEgJiYgIWlzR2FtZU92ZXIoKSkge1xuICAgICAgICBjb25zdCBkYXRhID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICAgICAgY29uc3QgY2VsbEF0dGFja2VkID0gcDJCb2FyZC5yZWNlaXZlQXR0YWNrKGRhdGEuY29sdW1uLCBkYXRhLnJvdyk7XG4gICAgICAgIERpc3BsYXkucDJVcGRhdGVCb2FyZChwMkJvYXJkKTtcbiAgICAgICAgRGlzcGxheS51cGRhdGVEaXNwbGF5KHBsYXllcjEsIGNlbGxBdHRhY2tlZC5jZWxsLCBwbGF5ZXIyLCBwMkJvYXJkLCBjZWxsQXR0YWNrZWQuc3Vua1NoaXApO1xuICAgICAgICBpZiAoaXNHYW1lT3ZlcigpKSByZXR1cm4gRGlzcGxheS5nYW1lT3ZlcihwbGF5ZXIxKVxuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hvaWNlID0gcGxheWVyMi5yYW5kb21BdHRhY2socDFCb2FyZCk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gcDFCb2FyZC5yZWNlaXZlQXR0YWNrKGNob2ljZVswXSwgY2hvaWNlWzFdKTtcbiAgICAgICAgRGlzcGxheS5wMVVwZGF0ZUJvYXJkKHAxQm9hcmQpO1xuICAgICAgICBEaXNwbGF5LnVwZGF0ZURpc3BsYXkocGxheWVyMiwgY29tcHV0ZXJBdHRhY2suY2VsbCwgcGxheWVyMSwgcDFCb2FyZCwgY29tcHV0ZXJBdHRhY2suc3Vua1NoaXApO1xuICAgICAgICBpZiAoaXNHYW1lT3ZlcigpKSByZXR1cm4gRGlzcGxheS5nYW1lT3ZlcihwbGF5ZXIyKTtcbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjE7XG4gICAgfSwgNTAwKVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJjb25zdCB7IHJvdywgY29sdW1uIH0gPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJylcblxuZnVuY3Rpb24gaXNPY2N1cGllZChjZWxsKSB7XG4gIHJldHVybiB0eXBlb2YgY2VsbCA9PT0gJ29iamVjdCc7XG59XG5cbmNvbnN0IGNoZWNrQ29sbGlzaW9ucyA9IGZ1bmN0aW9uIGNoZWNrRm9yU2hpcFBsYWNlbWVudENvbGxpc2lvbnMoYm9hcmQsIHgsIHksIG9yaWVudGF0aW9uLCBzaGlwKSB7XG4gIGNvbnN0IHNoaXBTbG90ID0gW107XG4gIGxldCBjb2xDaGVjayA9IGNvbHVtbih4KTtcbiAgbGV0IHJvd0NoZWNrID0gcm93KHkpO1xuXG4gIGlmKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcC5nZXRTaGlwTGVuZ3RoKCk7IGkrKykge1xuICAgICAgaWYgKGNvbENoZWNrID4gOSB8fCByb3dDaGVjayA+IDkpIHRocm93IG5ldyBFcnJvcignT3V0IG9mIGJvdW5kcyEnKVxuICAgICAgc2hpcFNsb3QucHVzaChib2FyZFtyb3dDaGVja11bY29sQ2hlY2tdKTtcbiAgICAgIHJvd0NoZWNrKys7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXAuZ2V0U2hpcExlbmd0aCgpOyBpKyspIHtcbiAgICAgIGlmIChjb2xDaGVjayA+IDkgfHwgcm93Q2hlY2sgPiA5KSB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZHMhJylcbiAgICAgIHNoaXBTbG90LnB1c2goYm9hcmRbcm93Q2hlY2tdW2NvbENoZWNrXSk7XG4gICAgICBjb2xDaGVjaysrO1xuICAgIH1cbiAgfVxuICBcbiAgaWYgKHNoaXBTbG90LmZpbmQoaXNPY2N1cGllZCkpIHRocm93IG5ldyBFcnJvcignU2hpcCBDb2xsaXNpb24hJyk7XG4gIHJldHVybiBFcnJvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGNoZWNrQ29sbGlzaW9ucywgaXNPY2N1cGllZCB9XG4iLCJjb25zdCB7IGlzT2NjdXBpZWQgfSA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuY29uc3QgeyBwbGFjZUFsbFNoaXBzLCBwbGFjZVJhbmRvbVNoaXBzIH0gPSByZXF1aXJlKCcuL3NoaXAtcGxhY2VtZW50JylcbmNvbnN0IHsgY29scyB9ID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSwgY29tcHV0ZXIgPSBmYWxzZSkge1xuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICAgIGNvbnN0IGdldFBvc3Nlc3NpdmUgPSAoKSA9PiBuYW1lID09PSAnWW91JyA/ICdZb3VyJyA6IGAke25hbWV9J3NgO1xuICAgIGNvbnN0IGlzQ29tcHV0ZXIgPSAoKSA9PiBjb21wdXRlciA9PT0gdHJ1ZTtcblxuICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IChib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBvcHBCb2FyZCA9IGJvYXJkLnJlYWRCb2FyZCgpO1xuICAgICAgICBjb25zdCBhdHRhY2thYmxlQ2VsbHMgPSBbXTtcbiAgICAgICAgb3BwQm9hcmQuZm9yRWFjaChvcHBSb3cgPT4gb3BwUm93LmZvckVhY2goKGNlbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihpc09jY3VwaWVkKGNlbGwpIHx8IGNlbGwgPT09ICcgJykgYXR0YWNrYWJsZUNlbGxzLnB1c2goW2NvbHNbaW5kZXhdLCBvcHBCb2FyZC5pbmRleE9mKG9wcFJvdykgKyAxXSlcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBjaG9zZW5DZWxsID0gYXR0YWNrYWJsZUNlbGxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF0dGFja2FibGVDZWxscy5sZW5ndGgpXVxuXG4gICAgICAgIHJldHVybiBjaG9zZW5DZWxsO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkLCByYW5kb20gPSBmYWxzZSkgPT4ge1xuICAgICAgICBpZiAoIXJhbmRvbSkgcGxhY2VBbGxTaGlwcyhib2FyZCk7XG4gICAgICAgIGVsc2UgcGxhY2VSYW5kb21TaGlwcyhib2FyZCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldE5hbWUsIGdldFBvc3Nlc3NpdmUsIGlzQ29tcHV0ZXIsIHJhbmRvbUF0dGFjaywgcGxhY2VTaGlwcyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyXG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5jb25zdCBEaXNwbGF5ID0gcmVxdWlyZSgnLi9kaXNwbGF5Jyk7XG5jb25zdCB7IGNvbHMgfSA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuY29uc3QgYWxsU2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdDcnVpc2VyJywgJ1N1Ym1hcmluZScsICdEZXN0cm95ZXInXTtcbmxldCBwbGFjZW1lbnRQaGFzZSA9IHRydWU7XG5mdW5jdGlvbiBzdGFydFBsYWNlbWVudFBoYXNlICgpIHsgcGxhY2VtZW50UGhhc2UgPSB0cnVlIH1cbmNvbnN0IHBsYWNlbWVudFBoYXNlT3ZlciA9ICgpID0+ICFwbGFjZW1lbnRQaGFzZVxuXG5mdW5jdGlvbiBwbGFjZUFsbFNoaXBzIChib2FyZCkge1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJylcbiAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICBzaGlwLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgICAgIGxldCBvcmllbnRhdGlvbiA9ICcnXG4gICAgICBzaGlwLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHNoaXAuc3R5bGUuekluZGV4ID0gMTA7XG4gIFxuICAgICAgZnVuY3Rpb24gbW92ZUF0KHBhZ2VYLCBwYWdlWSkge1xuICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBwYWdlWCAtIHNoaXAub2Zmc2V0V2lkdGggLyA3ICsgJ3B4JztcbiAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBwYWdlWSAtIHNoaXAub2Zmc2V0SGVpZ2h0IC8gMiArICdweCc7XG4gICAgICB9XG4gIFxuICAgICAgbW92ZUF0KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSk7XG4gIFxuICAgICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgbW92ZUF0KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSlcbiAgICAgIH1cbiAgXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ3InICYmIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSBvcmllbnRhdGlvbiA9ICcnXG4gICAgICAgIGVsc2Ugb3JpZW50YXRpb24gPSAndmVydGljYWwnXG4gICAgICB9KVxuICBcbiAgICAgIHNoaXAub25tb3VzZXVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNoaXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb25zdCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICBzaGlwLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG4gICAgICAgIGlmKCFlbGVtQmVsb3cuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wcGFibGUnKSkgcmV0dXJuOyAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYWNlZFNoaXAgPSBib2FyZC5wbGFjZVNoaXAoU2hpcChzaGlwLmlkKSwgZWxlbUJlbG93LmRhdGFzZXQuY29sdW1uLCBlbGVtQmVsb3cuZGF0YXNldC5yb3csIG9yaWVudGF0aW9uKTtcbiAgICAgICAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICBEaXNwbGF5LnAxVXBkYXRlQm9hcmQoYm9hcmQpO1xuICAgICAgICAgIHNoaXBDb250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcCk7XG4gICAgICAgICAgRGlzcGxheS51cGRhdGVNYXJxdWVlKCdQbGFjZSB5b3VyIHNoaXBzIGJ5IGRyYWdnaW5nIHRoZW0gb250byB5b3VyIGJvYXJkIChwcmVzcyBSIHRvIHJvdGF0ZSkuJywgMjApXG4gICAgICAgICAgaWYgKCFzaGlwQ29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgcGxhY2VtZW50UGhhc2UgPSBmYWxzZTtcbiAgICAgICAgICAgIERpc3BsYXkudXBkYXRlTWFycXVlZShcIllvdSdyZSB1cCwgQWRtaXJhbCEgQ2hvb3NlIGEgY2VsbCBvbiB5b3VyIG9wcG9uZW50J3MgYm9hcmQgdG8gYXR0YWNrLlwiLCAyMClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIERpc3BsYXkudXBkYXRlTWFycXVlZShwbGFjZWRTaGlwLCAyNCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwbGFjZVJhbmRvbVNoaXBzIChib2FyZCwgaW5kZXggPSAwKSB7XG4gIGlmIChpbmRleCA+PSBhbGxTaGlwcy5sZW5ndGgpIHJldHVybjtcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBbJ2hvcml6b25hbCcsICd2ZXJ0aWNhbCddW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXTtcbiAgY29uc3QgY29sID0gY29sc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICBjb25zdCBwbGFjZWRTaGlwID0gYm9hcmQucGxhY2VTaGlwKFNoaXAoYWxsU2hpcHNbaW5kZXhdKSwgY29sLCByb3csIG9yaWVudGF0aW9uKTtcbiAgaWYgKHBsYWNlZFNoaXAgPT09IHRydWUpIHBsYWNlUmFuZG9tU2hpcHMoYm9hcmQsICsraW5kZXgpO1xuICBlbHNlIHBsYWNlUmFuZG9tU2hpcHMoYm9hcmQsIGluZGV4KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcGxhY2VBbGxTaGlwcywgcGxhY2VSYW5kb21TaGlwcywgc3RhcnRQbGFjZW1lbnRQaGFzZSwgcGxhY2VtZW50UGhhc2VPdmVyIH07IiwiY29uc3QgU2hpcCA9IChuYW1lKSA9PiB7XG4gIGxldCBzaGlwTGVuZ3RoO1xuXG4gIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgKCdDYXJyaWVyJyk6XG4gICAgICBzaGlwTGVuZ3RoID0gNTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKCdCYXR0bGVzaGlwJyk6XG4gICAgICBzaGlwTGVuZ3RoID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgKCdDcnVpc2VyJyk6XG4gICAgY2FzZSAoJ1N1Ym1hcmluZScpOlxuICAgICAgc2hpcExlbmd0aCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlICgnRGVzdHJveWVyJyk6XG4gICAgICBzaGlwTGVuZ3RoID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKCdVbmV4cGVjdGVkIHNoaXAgbmFtZS4nKVxuICB9XG5cbiAgbGV0IGhpdHMgPSAwO1xuICBjb25zdCByZWFkSGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGdldFNoaXBMZW5ndGggPSAoKSA9PiBzaGlwTGVuZ3RoO1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRzID09PSBzaGlwTGVuZ3RoO1xuICBjb25zdCBoaXQgPSAoKSA9PiB7IFxuICAgIGlmICghaXNTdW5rKCkpIGhpdHMgKz0gMTtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWUsIHJlYWRIaXRzLCBnZXRTaGlwTGVuZ3RoLCBoaXQsIGlzU3VuayB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgRGlzcGxheSA9IHJlcXVpcmUoJy4vZGlzcGxheScpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vZ2FtZXBsYXknKTtcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc3RhcnQnKVxuXG5EaXNwbGF5LnJlbmRlckJvYXJkcygpO1xuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEdhbWUpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9