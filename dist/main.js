/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Roboto, sans serif';\r\n  src: url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #b3dadb;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: -0.5rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.botHeader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.menuItems {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 42%;\r\n  margin-right: 1.5rem;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.logo {\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  width: 160px;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.Shows {\r\n  display: grid;\r\n  gap: 12px;\r\n  padding: 1.5rem;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 1px solid #000;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.movie-title {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.movie-image {\r\n  width: 200px;\r\n}\r\n\r\n.userInterAct {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\n.likesCont {\r\n  display: flex;\r\n  align-items: baseline;\r\n}\r\n\r\n.fa-heart {\r\n  margin-right: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: #f00;\r\n  transform: scale(1.25);\r\n  transition: all 0.5s;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 5%;\r\n  left: 5%;\r\n  border-radius: 10px;\r\n  overflow: scroll;\r\n}\r\n\r\n.show-container {\r\n  padding: 1rem;\r\n  background-color: #0dbae6;\r\n}\r\n\r\n.close-btn {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  color: #f00;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.show-info {\r\n  display: flex;\r\n  column-gap: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.details > h1 {\r\n  margin-top: 0;\r\n}\r\n\r\n.meta {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.meta span {\r\n  font-weight: bold;\r\n}\r\n\r\n.left-side,\r\n.right-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.comments-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30%;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: solid 2px #000;\r\n  padding: 10px;\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 10px 0 0;\r\n  border-radius: 6px;\r\n}\r\n\r\n#submit-btn {\r\n  margin-top: 1.4rem;\r\n  max-width: 5rem;\r\n  text-align: center;\r\n  align-self: center;\r\n  padding: 4px 8px;\r\n  border-radius: 4px;\r\n  border: 1px solid #000;\r\n  background-color: #0dbae6;\r\n  box-shadow: 2px 2px 2px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover,\r\n#submit-btn:hover {\r\n  background-color: #2c8ce6;\r\n  box-shadow: 1px 1px 2px;\r\n}\r\n\r\n.comment-btn {\r\n  margin-top: 0;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n  border-top: 1px solid #000;\r\n  margin-top: 4rem;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.licence {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.dev {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  align-items: baseline;\r\n  padding-left: 1.5rem;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.media-links {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n}\r\n\r\n.fab {\r\n  color: #2c8ce6;\r\n  font-size: large;\r\n  cursor: pointer;\r\n}\r\n\r\n.fab:hover {\r\n  background-color: #2c8ce6;\r\n  transform: scale(1.125);\r\n  transition: all 0.4s;\r\n}\r\n\r\n#ump {\r\n  font-size: 1.5rem;\r\n  padding-left: 1rem;\r\n  font-weight: 800;\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\r\n  h2 {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 320px) and (max-width: 767px) {\r\n  .Shows {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  .menuItems {\r\n    width: 80%;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n  }\r\n\r\n  h3 {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .dev > h3 {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,sEAAsE;AACxE;;AAEA;EACE,SAAS;EACT,UAAU;EACV,iCAAiC;EACjC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;EACV,oBAAoB;EACpB,iCAAiC;EACjC,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,QAAQ;EACR,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;;EAEE,sBAAsB;EACtB,aAAa;EACb,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;EACzB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;;EAEE,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,0BAA0B;EAC1B,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE;IACE,iBAAiB;IACjB,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,aAAa;IACb,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,UAAU;IACV,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["@font-face {\r\n  font-family: 'Roboto, sans serif';\r\n  src: url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n  background-color: #b3dadb;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: -0.5rem;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.botHeader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.menuItems {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 42%;\r\n  margin-right: 1.5rem;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.logo {\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  width: 160px;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.Shows {\r\n  display: grid;\r\n  gap: 12px;\r\n  padding: 1.5rem;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 1px solid #000;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.movie-title {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.movie-image {\r\n  width: 200px;\r\n}\r\n\r\n.userInterAct {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 0.5rem;\r\n  width: 90%;\r\n}\r\n\r\n.likesCont {\r\n  display: flex;\r\n  align-items: baseline;\r\n}\r\n\r\n.fa-heart {\r\n  margin-right: 0.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: #f00;\r\n  transform: scale(1.25);\r\n  transition: all 0.5s;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 5%;\r\n  left: 5%;\r\n  border-radius: 10px;\r\n  overflow: scroll;\r\n}\r\n\r\n.show-container {\r\n  padding: 1rem;\r\n  background-color: #0dbae6;\r\n}\r\n\r\n.close-btn {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  color: #f00;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.show-info {\r\n  display: flex;\r\n  column-gap: 2rem;\r\n  padding-right: 2rem;\r\n}\r\n\r\n.details > h1 {\r\n  margin-top: 0;\r\n}\r\n\r\n.meta {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.meta span {\r\n  font-weight: bold;\r\n}\r\n\r\n.left-side,\r\n.right-side {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.comments-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30%;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: solid 2px #000;\r\n  padding: 10px;\r\n  font-family: 'Roboto', sans-serif;\r\n  margin: 10px 0 0;\r\n  border-radius: 6px;\r\n}\r\n\r\n#submit-btn {\r\n  margin-top: 1.4rem;\r\n  max-width: 5rem;\r\n  text-align: center;\r\n  align-self: center;\r\n  padding: 4px 8px;\r\n  border-radius: 4px;\r\n  border: 1px solid #000;\r\n  background-color: #0dbae6;\r\n  box-shadow: 2px 2px 2px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover,\r\n#submit-btn:hover {\r\n  background-color: #2c8ce6;\r\n  box-shadow: 1px 1px 2px;\r\n}\r\n\r\n.comment-btn {\r\n  margin-top: 0;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: baseline;\r\n  border-top: 1px solid #000;\r\n  margin-top: 4rem;\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.licence {\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.dev {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  align-items: baseline;\r\n  padding-left: 1.5rem;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.media-links {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n}\r\n\r\n.fab {\r\n  color: #2c8ce6;\r\n  font-size: large;\r\n  cursor: pointer;\r\n}\r\n\r\n.fab:hover {\r\n  background-color: #2c8ce6;\r\n  transform: scale(1.125);\r\n  transition: all 0.4s;\r\n}\r\n\r\n#ump {\r\n  font-size: 1.5rem;\r\n  padding-left: 1rem;\r\n  font-weight: 800;\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\r\n  h2 {\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 320px) and (max-width: 767px) {\r\n  .Shows {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  .menuItems {\r\n    width: 80%;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n  }\r\n\r\n  h3 {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .dev > h3 {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayComments": () => (/* binding */ displayComments),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "submitComment": () => (/* binding */ submitComment)
/* harmony export */ });
function submitComment(itemId, userName, userComment) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: `'${itemId}'`, username: userName, comment: userComment }),
  })
    .then((res) => res.ok)
    .then((data) => (data));
}

function displayComments(itemId) {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments?item_id='${itemId}'`)
    .then((res) => res.json())
    .then((data) => {
      const commentsList = document.querySelector('.comments-list');
      for (let i = 0; i < data.length; i += 1) {
        const singleComment = document.createElement('p');
        singleComment.innerText = `${data[i].creation_date}, ${data[i].username}: ${data[i].comment}`;
        singleComment.classList.add('single-comment');
        commentsList.appendChild(singleComment);
      }
      const allComments = document.getElementsByClassName('single-comment');
      const counter = allComments.length;
      const commentsCounter = document.getElementsByClassName('comments-count');
      commentsCounter[0].innerText = `(${counter})`;
    });
}

function getComments(itemId) {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments?item_id='${itemId}'`)
    .then((res) => res.json())
    .then((data) => {
      const commentsList = document.querySelector('.comments-list');
      const singleComment = document.createElement('p');
      singleComment.innerText = `${data[itemId].creation_date}, ${data[itemId].username}: ${data[itemId].comment}`;
      commentsList.appendChild(singleComment);
    });
  displayComments(itemId);
}


/***/ }),

/***/ "./src/getMoviez.js":
/*!**************************!*\
  !*** ./src/getMoviez.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModal": () => (/* binding */ createModal),
/* harmony export */   "default": () => (/* binding */ getShows),
/* harmony export */   "showsList": () => (/* binding */ showsList)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/comments.js");


const showsList = [];
const frontmoviez = document.querySelector('.Shows');
const modalPopUp = document.querySelector('.modal');
const popShow = (arr) => {
  frontmoviez.innerHTML = '';
  arr.forEach((movie) => {
    const eachMovie = `
    <div class=movie id=${movie.id}>
      <h2 class="movie-title">${movie.name}</h2>
      <img class="movie-image" src=${movie.image.medium}>
      <div class= "userInterAct">
        <button class="comment-btn" value="${movie.id}">Comment</button>
        <i class="fas fa-heart" data-id="${movie.id}"></i>
      </div>
    </div>`;
    frontmoviez.insertAdjacentHTML('beforeend', eachMovie);
  });
};

function convertDate(date) {
  const yyyy = date.getFullYear().toString();
  const mm = (date.getMonth() + 1).toString();
  const dd = date.getDate().toString();
  const mmChars = mm.split('');
  const ddChars = dd.split('');
  return `${yyyy}-${mmChars[1] ? mm : `0${mmChars[0]}`}-${ddChars[1] ? dd : `0${ddChars[0]}`}`;
}

function createModal(showID) {
  const closeBtn = document.getElementsByClassName('close-btn');
  modalPopUp.style.display = 'block';
  modalPopUp.style.width = '90vw';
  modalPopUp.style.height = '90vh';
  modalPopUp.style.backgroundColor = '#F6F6F6';
  const content = `
  <div class="show-container">
    <span class="close-btn">×</span>
    <div class="show-info">
      <div class="poster">
        <img src="${showsList[showID].image.medium}", alt="movie poster">
      </div>
      <div class="details">
        <h1>${showsList[showID].name}</h1>
        <h2>Summary:</h2>
        <p>${showsList[showID].summary}</p>
        <div class="meta">
          <div class="left-side">
            <span>Language: ${showsList[showID].language}</span>
            <span>Genre: ${showsList[showID].genres[0]}, ${showsList[showID].genres[1]}, ${showsList[showID].genres[2]}</span>
          </div>
          <div class="right-side">
            <span>Rating: ${showsList[showID].rating.average}</span>
            <span>Premiered: ${showsList[showID].premiered}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="comments-section">
      <h2 class="comments-title">Comments <span class="comments-count" data-id=${showID + 1}></span></h2>
      <div class="comments-list"></div>
      <h3>Add a new comment</h3>
      <form id="form" data-id=${showID + 1}>
        <input type="text" placeholder="Your name" id="name" data-id=${showID + 1}>
        <textarea id="comment-text" data-id=${showID + 1} placeholder="Your comment" maxlength="500" rows="4"></textarea>
        <button id="submit-btn" type="submit" data-id=${showID + 1}>Comment</button>
      </form>
    </div>
  </div>
  `;
  modalPopUp.innerHTML = content;
  closeBtn[0].addEventListener('click', () => {
    modalPopUp.style.display = 'none';
  });
  const newPost = document.getElementById('form');
  newPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('name').value;
    const comment = document.getElementById('comment-text').value;
    // Post the comment on the DOM
    const singleComment = document.createElement('p');
    const todaysDate = new Date();
    const currentDate = convertDate(todaysDate);
    singleComment.innerText = `${currentDate}, ${userName}: ${comment}`;
    singleComment.classList.add('single-comment');
    const commentsList = document.querySelector('.comments-list');
    commentsList.appendChild(singleComment);
    // Update the comments counter
    const allComments = document.getElementsByClassName('single-comment');
    const counter = allComments.length;
    const commentsCounter = document.getElementsByClassName('comments-count');
    commentsCounter[0].innerText = `(${counter})`;
    // Submit the comment to API
    (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.submitComment)(`'${showID}'`, userName, comment);
    document.getElementById('name').value = '';
    document.getElementById('comment-text').value = '';
  });
  showID += 1;
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.displayComments)(`'${showID}'`);
}

async function getShows() {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  for (let i = 0; i < 16; i += 1) {
    showsList.push(data[i]);
  }
  popShow(showsList);
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((btn) => {
    const ID = btn.value;
    btn.addEventListener('click', () => {
      createModal(ID - 1);
    });
  });
  return showsList;
}

/***/ }),

/***/ "./src/logoImg.jpg":
/*!*************************!*\
  !*** ./src/logoImg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5478a81c4745fdb038db.jpg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logoImg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logoImg.jpg */ "./src/logoImg.jpg");
/* harmony import */ var _getMoviez_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMoviez.js */ "./src/getMoviez.js");




// Add logo img

const element = document.querySelector('.logoContainer');
const mylogo = new Image();
mylogo.className = 'logo';
mylogo.src = _logoImg_jpg__WEBPACK_IMPORTED_MODULE_1__;

element.append(mylogo);

(0,_getMoviez_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxxQ0FBcUMsd0NBQXdDLDZFQUE2RSxLQUFLLGNBQWMsZ0JBQWdCLGlCQUFpQix3Q0FBd0MsZ0NBQWdDLEtBQUssaUJBQWlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHFDQUFxQywwQkFBMEIsc0JBQXNCLEtBQUssb0JBQW9CLG9CQUFvQixxQ0FBcUMsa0JBQWtCLEtBQUssb0JBQW9CLHVCQUF1QixvQkFBb0IscUNBQXFDLDBCQUEwQixpQkFBaUIsMkJBQTJCLHdDQUF3Qyx1QkFBdUIsd0JBQXdCLEtBQUssZUFBZSxvQkFBb0IseUJBQXlCLG1CQUFtQix3QkFBd0IsS0FBSyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixzQkFBc0IsNkNBQTZDLEtBQUssZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDZCQUE2QiwyQkFBMkIsS0FBSyxzQkFBc0IsMENBQTBDLEtBQUssc0JBQXNCLG1CQUFtQixLQUFLLHVCQUF1QixvQkFBb0IscUNBQXFDLHlCQUF5QixpQkFBaUIsS0FBSyxvQkFBb0Isb0JBQW9CLDRCQUE0QixLQUFLLG1CQUFtQiwyQkFBMkIsc0JBQXNCLEtBQUsseUJBQXlCLGtCQUFrQiw2QkFBNkIsMkJBQTJCLEtBQUssZ0JBQWdCLG9CQUFvQixzQkFBc0IsaUJBQWlCLGNBQWMsZUFBZSwwQkFBMEIsdUJBQXVCLEtBQUsseUJBQXlCLG9CQUFvQixnQ0FBZ0MsS0FBSyxvQkFBb0Isb0JBQW9CLGdDQUFnQyxrQkFBa0Isc0JBQXNCLHVCQUF1QixzQkFBc0Isd0NBQXdDLEtBQUssb0JBQW9CLG9CQUFvQix1QkFBdUIsMEJBQTBCLEtBQUssdUJBQXVCLG9CQUFvQixLQUFLLGVBQWUsb0JBQW9CLHFDQUFxQyxLQUFLLG9CQUFvQix3QkFBd0IsS0FBSyxvQ0FBb0Msb0JBQW9CLDZCQUE2QixvQkFBb0IsS0FBSywyQkFBMkIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyxlQUFlLG9CQUFvQiw2QkFBNkIsaUJBQWlCLEtBQUssNEJBQTRCLDZCQUE2QixvQkFBb0Isd0NBQXdDLHVCQUF1Qix5QkFBeUIsS0FBSyxxQkFBcUIseUJBQXlCLHNCQUFzQix5QkFBeUIseUJBQXlCLHVCQUF1Qix5QkFBeUIsNkJBQTZCLGdDQUFnQyw4QkFBOEIsc0JBQXNCLEtBQUssNENBQTRDLGdDQUFnQyw4QkFBOEIsS0FBSyxzQkFBc0Isb0JBQW9CLEtBQUssaUJBQWlCLG9CQUFvQiw4QkFBOEIsNEJBQTRCLGlDQUFpQyx1QkFBdUIsd0JBQXdCLEtBQUssa0JBQWtCLDBDQUEwQyxLQUFLLGNBQWMsb0JBQW9CLDhCQUE4Qiw0QkFBNEIsMkJBQTJCLGtCQUFrQixLQUFLLHNCQUFzQixvQkFBb0IscUNBQXFDLGdCQUFnQixLQUFLLGNBQWMscUJBQXFCLHVCQUF1QixzQkFBc0IsS0FBSyxvQkFBb0IsZ0NBQWdDLDhCQUE4QiwyQkFBMkIsS0FBSyxjQUFjLHdCQUF3Qix5QkFBeUIsdUJBQXVCLEtBQUssMkVBQTJFLFVBQVUsMEJBQTBCLHlCQUF5QixPQUFPLEtBQUssMEVBQTBFLGNBQWMsc0JBQXNCLHdCQUF3QixzQ0FBc0MsT0FBTyxzQkFBc0IsbUJBQW1CLHdCQUF3Qix5QkFBeUIsT0FBTyxjQUFjLDBCQUEwQix5QkFBeUIsT0FBTyxxQkFBcUIsMEJBQTBCLE9BQU8sS0FBSyx1QkFBdUI7QUFDL3VXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRCwyQkFBMkIsYUFBYSxPQUFPLDhDQUE4QztBQUM3RixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDBIQUEwSCxPQUFPO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQSxxQ0FBcUMsc0JBQXNCLElBQUksaUJBQWlCLElBQUksZ0JBQWdCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pELEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUCwwSEFBMEgsT0FBTztBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyQkFBMkIsSUFBSSxzQkFBc0IsSUFBSSxxQkFBcUI7QUFDakg7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEMrRDtBQUMvRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkMsZ0NBQWdDLFdBQVc7QUFDM0MscUNBQXFDLG1CQUFtQjtBQUN4RDtBQUNBLDZDQUE2QyxTQUFTO0FBQ3RELDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLLEdBQUcsc0JBQXNCLFdBQVcsRUFBRSxHQUFHLHNCQUFzQixXQUFXLEVBQUU7QUFDN0Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQSw4QkFBOEIsMkJBQTJCO0FBQ3pELDJCQUEyQiw0QkFBNEIsSUFBSSw0QkFBNEIsSUFBSSw0QkFBNEI7QUFDdkg7QUFDQTtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0QsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLFdBQVc7QUFDNUY7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDLHVFQUF1RSxXQUFXO0FBQ2xGLDhDQUE4QyxZQUFZO0FBQzFELHdEQUF3RCxXQUFXO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxZQUFZLElBQUksU0FBUyxJQUFJLFFBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBLElBQUksMkRBQWEsS0FBSyxPQUFPO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLDZEQUFlLEtBQUssT0FBTztBQUM3QjtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ3JIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUNBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EseURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9nZXRNb3ZpZXouanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8sIHNhbnMgc2VyaWYnO1xcclxcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZGFkYjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjVyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90SGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDIlO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMTYwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLlNob3dzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJJbnRlckFjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzQ29udCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2YwMDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdG9wOiA1JTtcXHJcXG4gIGxlZnQ6IDUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmFlNjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGNvbG9yOiAjZjAwO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sdW1uLWdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzID4gaDEge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1ldGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1ldGEgc3BhbiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtc2lkZSxcXHJcXG4ucmlnaHQtc2lkZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCAjMDAwO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnRuIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEuNHJlbTtcXHJcXG4gIG1heC13aWR0aDogNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmFlNjtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIsXFxyXFxuI3N1Ym1pdC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOGNlNjtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpY2VuY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZWRpYS1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFiIHtcXHJcXG4gIGNvbG9yOiAjMmM4Y2U2O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM4Y2U2O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyNSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuI3VtcCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXHJcXG4gIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgLlNob3dzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51SXRlbXMge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRldiA+IGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQ0FBaUM7RUFDakMsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLCBzYW5zIHNlcmlmJztcXHJcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2RhZGI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiAtMC41cmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdEhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbXMge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQyJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5TaG93cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWFnZSB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi51c2VySW50ZXJBY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5saWtlc0NvbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmMDA7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICBsZWZ0OiA1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZGJhZTY7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBjb2xvcjogI2YwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyA+IGgxIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5tZXRhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tZXRhIHNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNpZGUsXFxyXFxuLnJpZ2h0LXNpZGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggIzAwMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDEwcHggMCAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAxLjRyZW07XFxyXFxuICBtYXgtd2lkdGg6IDVyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZGJhZTY7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyLFxcclxcbiNzdWJtaXQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzhjZTY7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgcGFkZGluZzogMCAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5saWNlbmNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaWEtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhYiB7XFxyXFxuICBjb2xvcjogIzJjOGNlNjtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjOGNlNjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xMjUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxyXFxufVxcclxcblxcclxcbiN1bXAge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIC5TaG93cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudUl0ZW1zIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXYgPiBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBzdWJtaXRDb21tZW50KGl0ZW1JZCwgdXNlck5hbWUsIHVzZXJDb21tZW50KSB7XHJcbiAgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3AwVXBhcDdac2UyZThKcTkySTF4L2NvbW1lbnRzJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogYCcke2l0ZW1JZH0nYCwgdXNlcm5hbWU6IHVzZXJOYW1lLCBjb21tZW50OiB1c2VyQ29tbWVudCB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLm9rKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IChkYXRhKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29tbWVudHMoaXRlbUlkKSB7XHJcbiAgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3AwVXBhcDdac2UyZThKcTkySTF4L2NvbW1lbnRzP2l0ZW1faWQ9JyR7aXRlbUlkfSdgKVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1saXN0Jyk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHNpbmdsZUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgc2luZ2xlQ29tbWVudC5pbm5lclRleHQgPSBgJHtkYXRhW2ldLmNyZWF0aW9uX2RhdGV9LCAke2RhdGFbaV0udXNlcm5hbWV9OiAke2RhdGFbaV0uY29tbWVudH1gO1xyXG4gICAgICAgIHNpbmdsZUNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLWNvbW1lbnQnKTtcclxuICAgICAgICBjb21tZW50c0xpc3QuYXBwZW5kQ2hpbGQoc2luZ2xlQ29tbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWxsQ29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaW5nbGUtY29tbWVudCcpO1xyXG4gICAgICBjb25zdCBjb3VudGVyID0gYWxsQ29tbWVudHMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBjb21tZW50c0NvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21tZW50cy1jb3VudCcpO1xyXG4gICAgICBjb21tZW50c0NvdW50ZXJbMF0uaW5uZXJUZXh0ID0gYCgke2NvdW50ZXJ9KWA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1lbnRzKGl0ZW1JZCkge1xyXG4gIGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9wMFVwYXA3WnNlMmU4SnE5MkkxeC9jb21tZW50cz9pdGVtX2lkPScke2l0ZW1JZH0nYClcclxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBjb21tZW50c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtbGlzdCcpO1xyXG4gICAgICBjb25zdCBzaW5nbGVDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBzaW5nbGVDb21tZW50LmlubmVyVGV4dCA9IGAke2RhdGFbaXRlbUlkXS5jcmVhdGlvbl9kYXRlfSwgJHtkYXRhW2l0ZW1JZF0udXNlcm5hbWV9OiAke2RhdGFbaXRlbUlkXS5jb21tZW50fWA7XHJcbiAgICAgIGNvbW1lbnRzTGlzdC5hcHBlbmRDaGlsZChzaW5nbGVDb21tZW50KTtcclxuICAgIH0pO1xyXG4gIGRpc3BsYXlDb21tZW50cyhpdGVtSWQpO1xyXG59XHJcbiIsImltcG9ydCB7IHN1Ym1pdENvbW1lbnQsIGRpc3BsYXlDb21tZW50cyB9IGZyb20gJy4vY29tbWVudHMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dzTGlzdCA9IFtdO1xyXG5jb25zdCBmcm9udG1vdmlleiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5TaG93cycpO1xyXG5jb25zdCBtb2RhbFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IHBvcFNob3cgPSAoYXJyKSA9PiB7XHJcbiAgZnJvbnRtb3ZpZXouaW5uZXJIVE1MID0gJyc7XHJcbiAgYXJyLmZvckVhY2goKG1vdmllKSA9PiB7XHJcbiAgICBjb25zdCBlYWNoTW92aWUgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPW1vdmllIGlkPSR7bW92aWUuaWR9PlxyXG4gICAgICA8aDIgY2xhc3M9XCJtb3ZpZS10aXRsZVwiPiR7bW92aWUubmFtZX08L2gyPlxyXG4gICAgICA8aW1nIGNsYXNzPVwibW92aWUtaW1hZ2VcIiBzcmM9JHttb3ZpZS5pbWFnZS5tZWRpdW19PlxyXG4gICAgICA8ZGl2IGNsYXNzPSBcInVzZXJJbnRlckFjdFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50LWJ0blwiIHZhbHVlPVwiJHttb3ZpZS5pZH1cIj5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIiBkYXRhLWlkPVwiJHttb3ZpZS5pZH1cIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIGZyb250bW92aWV6Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZWFjaE1vdmllKTtcclxuICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGUpIHtcclxuICBjb25zdCB5eXl5ID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgbW0gPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcclxuICBjb25zdCBkZCA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgbW1DaGFycyA9IG1tLnNwbGl0KCcnKTtcclxuICBjb25zdCBkZENoYXJzID0gZGQuc3BsaXQoJycpO1xyXG4gIHJldHVybiBgJHt5eXl5fS0ke21tQ2hhcnNbMV0gPyBtbSA6IGAwJHttbUNoYXJzWzBdfWB9LSR7ZGRDaGFyc1sxXSA/IGRkIDogYDAke2RkQ2hhcnNbMF19YH1gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWwoc2hvd0lEKSB7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZS1idG4nKTtcclxuICBtb2RhbFBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIG1vZGFsUG9wVXAuc3R5bGUud2lkdGggPSAnOTB2dyc7XHJcbiAgbW9kYWxQb3BVcC5zdHlsZS5oZWlnaHQgPSAnOTB2aCc7XHJcbiAgbW9kYWxQb3BVcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y2RjZGNic7XHJcbiAgY29uc3QgY29udGVudCA9IGBcclxuICA8ZGl2IGNsYXNzPVwic2hvdy1jb250YWluZXJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtYnRuXCI+w5c8L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2hvdy1pbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0ZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7c2hvd3NMaXN0W3Nob3dJRF0uaW1hZ2UubWVkaXVtfVwiLCBhbHQ9XCJtb3ZpZSBwb3N0ZXJcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgPGgxPiR7c2hvd3NMaXN0W3Nob3dJRF0ubmFtZX08L2gxPlxyXG4gICAgICAgIDxoMj5TdW1tYXJ5OjwvaDI+XHJcbiAgICAgICAgPHA+JHtzaG93c0xpc3Rbc2hvd0lEXS5zdW1tYXJ5fTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWV0YVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5MYW5ndWFnZTogJHtzaG93c0xpc3Rbc2hvd0lEXS5sYW5ndWFnZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPkdlbnJlOiAke3Nob3dzTGlzdFtzaG93SURdLmdlbnJlc1swXX0sICR7c2hvd3NMaXN0W3Nob3dJRF0uZ2VucmVzWzFdfSwgJHtzaG93c0xpc3Rbc2hvd0lEXS5nZW5yZXNbMl19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtc2lkZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5SYXRpbmc6ICR7c2hvd3NMaXN0W3Nob3dJRF0ucmF0aW5nLmF2ZXJhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5QcmVtaWVyZWQ6ICR7c2hvd3NMaXN0W3Nob3dJRF0ucHJlbWllcmVkfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLXNlY3Rpb25cIj5cclxuICAgICAgPGgyIGNsYXNzPVwiY29tbWVudHMtdGl0bGVcIj5Db21tZW50cyA8c3BhbiBjbGFzcz1cImNvbW1lbnRzLWNvdW50XCIgZGF0YS1pZD0ke3Nob3dJRCArIDF9Pjwvc3Bhbj48L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtbGlzdFwiPjwvZGl2PlxyXG4gICAgICA8aDM+QWRkIGEgbmV3IGNvbW1lbnQ8L2gzPlxyXG4gICAgICA8Zm9ybSBpZD1cImZvcm1cIiBkYXRhLWlkPSR7c2hvd0lEICsgMX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBpZD1cIm5hbWVcIiBkYXRhLWlkPSR7c2hvd0lEICsgMX0+XHJcbiAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudC10ZXh0XCIgZGF0YS1pZD0ke3Nob3dJRCArIDF9IHBsYWNlaG9sZGVyPVwiWW91ciBjb21tZW50XCIgbWF4bGVuZ3RoPVwiNTAwXCIgcm93cz1cIjRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiIGRhdGEtaWQ9JHtzaG93SUQgKyAxfT5Db21tZW50PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgbW9kYWxQb3BVcC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIGNsb3NlQnRuWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW9kYWxQb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG4gIGNvbnN0IG5ld1Bvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG4gIG5ld1Bvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC10ZXh0JykudmFsdWU7XHJcbiAgICAvLyBQb3N0IHRoZSBjb21tZW50IG9uIHRoZSBET01cclxuICAgIGNvbnN0IHNpbmdsZUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gY29udmVydERhdGUodG9kYXlzRGF0ZSk7XHJcbiAgICBzaW5nbGVDb21tZW50LmlubmVyVGV4dCA9IGAke2N1cnJlbnREYXRlfSwgJHt1c2VyTmFtZX06ICR7Y29tbWVudH1gO1xyXG4gICAgc2luZ2xlQ29tbWVudC5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtY29tbWVudCcpO1xyXG4gICAgY29uc3QgY29tbWVudHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWxpc3QnKTtcclxuICAgIGNvbW1lbnRzTGlzdC5hcHBlbmRDaGlsZChzaW5nbGVDb21tZW50KTtcclxuICAgIC8vIFVwZGF0ZSB0aGUgY29tbWVudHMgY291bnRlclxyXG4gICAgY29uc3QgYWxsQ29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaW5nbGUtY29tbWVudCcpO1xyXG4gICAgY29uc3QgY291bnRlciA9IGFsbENvbW1lbnRzLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbW1lbnRzQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbW1lbnRzLWNvdW50Jyk7XHJcbiAgICBjb21tZW50c0NvdW50ZXJbMF0uaW5uZXJUZXh0ID0gYCgke2NvdW50ZXJ9KWA7XHJcbiAgICAvLyBTdWJtaXQgdGhlIGNvbW1lbnQgdG8gQVBJXHJcbiAgICBzdWJtaXRDb21tZW50KGAnJHtzaG93SUR9J2AsIHVzZXJOYW1lLCBjb21tZW50KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50LXRleHQnKS52YWx1ZSA9ICcnO1xyXG4gIH0pO1xyXG4gIHNob3dJRCArPSAxO1xyXG4gIGRpc3BsYXlDb21tZW50cyhgJyR7c2hvd0lEfSdgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0U2hvd3MoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpICs9IDEpIHtcclxuICAgIHNob3dzTGlzdC5wdXNoKGRhdGFbaV0pO1xyXG4gIH1cclxuICBwb3BTaG93KHNob3dzTGlzdCk7XHJcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcclxuICBjb21tZW50QnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGNvbnN0IElEID0gYnRuLnZhbHVlO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjcmVhdGVNb2RhbChJRCAtIDEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNob3dzTGlzdDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vbG9nb0ltZy5qcGcnO1xyXG5pbXBvcnQgZ2V0U2hvd3MgZnJvbSAnLi9nZXRNb3ZpZXouanMnO1xyXG5cclxuLy8gQWRkIGxvZ28gaW1nXHJcblxyXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ29Db250YWluZXInKTtcclxuY29uc3QgbXlsb2dvID0gbmV3IEltYWdlKCk7XHJcbm15bG9nby5jbGFzc05hbWUgPSAnbG9nbyc7XHJcbm15bG9nby5zcmMgPSBsb2dvO1xyXG5cclxuZWxlbWVudC5hcHBlbmQobXlsb2dvKTtcclxuXHJcbmdldFNob3dzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==