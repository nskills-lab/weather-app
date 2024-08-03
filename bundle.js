/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Inconsolata-Regular.ttf */ "./src/styles/Inconsolata-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --main-box-shadow: #030712 0px 13px 27px -5px, #fed7aa 1px 8px 16px -8px;
    --main-border-radius: .5rem;
    --main-light-color: #f0f9ff;
    --main-dark-color: #030712;
}

@font-face {
    font-family: 'Inconsolata';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}

body{
    margin: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    font-family: 'Inconsolata';
    color: var(--main-light-color);
 
}

.container{
    display: flex;
    width: 100%;
    height: 100%;
    background-image: linear-gradient( #7dd3fc, #7dd3fc,#fed7aa,#fed7aa, #fdba74, #fb923c, #0f172a, #020617, #0f172a);
    flex-direction: column;
    align-items: center;
}

.content{
    width: 100vw;
}

#header-section{
    width: 100vw;
    height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

h2{
    position: relative;
    left: 20px;
    color: var(--main-light-color);
}

#form-container{
    display: flex;
    height: 60%;
    flex-direction: column;
    justify-content: flex-start;
    width: 600px;
}

#search-options-form{
    width: 500px;
    height: 100%;
}

#error{
    margin-top: 8px;
    color: red;
    border-color: red;
}

input#search{
    width: 300px;
    outline: 0;
    border: 0;
    box-shadow: var(--main-box-shadow);
    border-radius: var(--main-border-radius);
    opacity: .7;
    font-family: 'Inconsolata';
    font-size: 1rem;
    height:  30px;;
}

button{
    box-shadow: var(--main-box-shadow);
    border-radius: var(--main-border-radius);
    border: none;
    font-size: 1rem;
    width: 35px;
    height: 30px;
}

#button-search{
    background-color: var(--main-light-color);
    position: relative;
    left: 10px;
}

img{
    max-width: 60px;
    max-height: 60px;
}

button[data-temp-scale]{
    background-color: var(--main-dark-color);
    color: var(--main-light-color);
}

button.off{
    opacity: .5;
    background-color: var(--main-light-color);
    color: var(--main-dark-color);
}

button:hover{
    transform: scale(1.1);
    cursor: pointer;
}

#today{
    min-height: 50%;
    width: 60%;
    color: var(--main-dark-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

#location-name{
    font-size: 3rem;
    font-weight: bold;
    height:  25%;
    width: 30%;
    text-align: center;
}

#weather-content{
    height:  100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

[data-weekly-card-temp-icon="now"]{
    margin: 20px 0;
}

div[data-weekly-card-temp='now']{
    font-size: 2.2rem;
}

#weather-desc{
    font-size: 1.5rem;
}

#weekly{
    min-height: 42%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

div[data-weekly-card]{
    height: 60%;
    width: 13%;
    border-radius: var(--main-border-radius);
    display: flex;
    flex-direction: column;
    box-shadow: var(--main-box-shadow);
    align-items: center;
    justify-content: center;
}

div[data-weekly-card-date]{
    font-size: 1.5rem;
    font-weight: bold;
    justify-self:  flex-start;
    margin-bottom: 10px;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,wEAAwE;IACxE,2BAA2B;IAC3B,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,+DAAsD;AAC1D;;AAEA;IACI,SAAS;IACT,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,8BAA8B;;AAElC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,iHAAiH;IACjH,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,SAAS;IACT,kCAAkC;IAClC,wCAAwC;IACxC,WAAW;IACX,0BAA0B;IAC1B,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,kCAAkC;IAClC,wCAAwC;IACxC,YAAY;IACZ,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,yCAAyC;IACzC,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,UAAU;IACV,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,kCAAkC;IAClC,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;AACvB","sourcesContent":[":root{\n    --main-box-shadow: #030712 0px 13px 27px -5px, #fed7aa 1px 8px 16px -8px;\n    --main-border-radius: .5rem;\n    --main-light-color: #f0f9ff;\n    --main-dark-color: #030712;\n}\n\n@font-face {\n    font-family: 'Inconsolata';\n    src: url(\"Inconsolata-Regular.ttf\") format(\"truetype\");\n}\n\nbody{\n    margin: 0;\n    box-sizing: border-box;\n    width: 100vw;\n    height: 100vh;\n    font-family: 'Inconsolata';\n    color: var(--main-light-color);\n \n}\n\n.container{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient( #7dd3fc, #7dd3fc,#fed7aa,#fed7aa, #fdba74, #fb923c, #0f172a, #020617, #0f172a);\n    flex-direction: column;\n    align-items: center;\n}\n\n.content{\n    width: 100vw;\n}\n\n#header-section{\n    width: 100vw;\n    height: 250px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\nh2{\n    position: relative;\n    left: 20px;\n    color: var(--main-light-color);\n}\n\n#form-container{\n    display: flex;\n    height: 60%;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 600px;\n}\n\n#search-options-form{\n    width: 500px;\n    height: 100%;\n}\n\n#error{\n    margin-top: 8px;\n    color: red;\n    border-color: red;\n}\n\ninput#search{\n    width: 300px;\n    outline: 0;\n    border: 0;\n    box-shadow: var(--main-box-shadow);\n    border-radius: var(--main-border-radius);\n    opacity: .7;\n    font-family: 'Inconsolata';\n    font-size: 1rem;\n    height:  30px;;\n}\n\nbutton{\n    box-shadow: var(--main-box-shadow);\n    border-radius: var(--main-border-radius);\n    border: none;\n    font-size: 1rem;\n    width: 35px;\n    height: 30px;\n}\n\n#button-search{\n    background-color: var(--main-light-color);\n    position: relative;\n    left: 10px;\n}\n\nimg{\n    max-width: 60px;\n    max-height: 60px;\n}\n\nbutton[data-temp-scale]{\n    background-color: var(--main-dark-color);\n    color: var(--main-light-color);\n}\n\nbutton.off{\n    opacity: .5;\n    background-color: var(--main-light-color);\n    color: var(--main-dark-color);\n}\n\nbutton:hover{\n    transform: scale(1.1);\n    cursor: pointer;\n}\n\n#today{\n    min-height: 50%;\n    width: 60%;\n    color: var(--main-dark-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#location-name{\n    font-size: 3rem;\n    font-weight: bold;\n    height:  25%;\n    width: 30%;\n    text-align: center;\n}\n\n#weather-content{\n    height:  100%;\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n[data-weekly-card-temp-icon=\"now\"]{\n    margin: 20px 0;\n}\n\ndiv[data-weekly-card-temp='now']{\n    font-size: 2.2rem;\n}\n\n#weather-desc{\n    font-size: 1.5rem;\n}\n\n#weekly{\n    min-height: 42%;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\ndiv[data-weekly-card]{\n    height: 60%;\n    width: 13%;\n    border-radius: var(--main-border-radius);\n    display: flex;\n    flex-direction: column;\n    box-shadow: var(--main-box-shadow);\n    align-items: center;\n    justify-content: center;\n}\n\ndiv[data-weekly-card-date]{\n    font-size: 1.5rem;\n    font-weight: bold;\n    justify-self:  flex-start;\n    margin-bottom: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */

/**
   * Remove the margin in all browsers.
   */

body {
  margin: 0;
}

/**
   * Render the \`main\` element consistently in IE.
   */

main {
  display: block;
}

/**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */

/**
   * Remove the gray background on active links in IE 10.
   */

a {
  background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

b,
strong {
  font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */

small {
  font-size: 80%;
}

/**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
     ========================================================================== */

/**
   * Remove the border on images inside links in IE 10.
   */

img {
  border-style: none;
}

/* Forms
     ========================================================================== */

/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

progress {
  vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */

textarea {
  overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */

/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

details {
  display: block;
}

/*
   * Add the correct display in all browsers.
   */

summary {
  display: list-item;
}

/* Misc
     ========================================================================== */

/**
   * Add the correct display in IE 10+.
   */

template {
  display: none;
}

/**
   * Add the correct display in IE 10.
   */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,SAAS;AACX;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;IAGI;;AAEJ;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,6BAA6B;AAC/B;;AAEA;;;IAGI;;AAEJ;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;IAEI;;AAEJ;;EAEE,mBAAmB;AACrB;;AAEA;;;IAGI;;AAEJ;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;IAEI;;AAEJ;;;;EAIE,0BAA0B;AAC5B;;AAEA;;IAEI;;AAEJ;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;;;;EAIE,8BAA8B;AAChC;;AAEA;;IAEI;;AAEJ;EACE,8BAA8B;AAChC;;AAEA;;;;;IAKI;;AAEJ;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;IAEI;;AAEJ;;EAEE,YAAY;AACd;;AAEA;;;IAGI;;AAEJ;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;;IAGI;;AAEJ;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA;;IAEI;;AAEJ;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/api/clients/timelineWeather.js":
/*!********************************************!*\
  !*** ./src/api/clients/timelineWeather.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timelineWeatherClient: () => (/* binding */ timelineWeatherClient)
/* harmony export */ });
class TimelineWeatherClient {
  key = 'JAL6N8TXYGWG3VZSGAS6BM3JE'
  endpoint = () => {
    return 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'
  }
}

const timelineWeatherClient = new TimelineWeatherClient()


/***/ }),

/***/ "./src/components/forecastDisplay.js":
/*!*******************************************!*\
  !*** ./src/components/forecastDisplay.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forecastDisplay: () => (/* binding */ forecastDisplay)
/* harmony export */ });
/* harmony import */ var _utils_dateUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dateUtils.js */ "./src/utils/dateUtils.js");
/* harmony import */ var _temperature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temperature.js */ "./src/components/temperature.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.js */ "./src/components/icons.js");
/* harmony import */ var _tempScaleToggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tempScaleToggle.js */ "./src/components/tempScaleToggle.js");
/* harmony import */ var _utils_localStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/localStorage.js */ "./src/utils/localStorage.js");





class ForecastDisplay {
  renderWeatherData(weather) {
    document.querySelectorAll('[data-day]').forEach((dayCard) => {
      const day = Number(dayCard.dataset.day)
      const weatherDatum = weather[day]
      const formattedDate = weatherDatum.date
      const weekDay = _utils_dateUtils_js__WEBPACK_IMPORTED_MODULE_0__.appUtils.getDate(formattedDate)
      const locationName = document.getElementById('location-name')
      locationName.innerText = _utils_dateUtils_js__WEBPACK_IMPORTED_MODULE_0__.appUtils.capitalize(weather[7].city)
      _temperature_js__WEBPACK_IMPORTED_MODULE_1__.temperature.renderTemps(weather, dayCard)
      _icons_js__WEBPACK_IMPORTED_MODULE_2__.icons.renderWeatherIcons(weather, dayCard)

      if (day !== 0) {
        const dateEl = dayCard.querySelector('[data-weekly-card-date]')
        dateEl.innerText = `${weekDay}`
      }
    })
    const currentEl = document.querySelector('[data-weekly-card-temp-scale]')
    currentEl.dataset.weeklyCardTempScale = weather[8].scale
    _tempScaleToggle_js__WEBPACK_IMPORTED_MODULE_3__.tempScale.updateToggle(weather[8].scale)
  }

  updateTempScaleDisplay(tempScale) {
    const localStorageForecast = (0,_utils_localStorage_js__WEBPACK_IMPORTED_MODULE_4__.getFromLocalStorage)()
    document.querySelectorAll('[data-day]').forEach((dayCard) => {
      _temperature_js__WEBPACK_IMPORTED_MODULE_1__.temperature.convertTempUpdateData(
        localStorageForecast,
        dayCard,
        tempScale
      )
      _temperature_js__WEBPACK_IMPORTED_MODULE_1__.temperature.renderTemps(localStorageForecast, dayCard)
    })
    _tempScaleToggle_js__WEBPACK_IMPORTED_MODULE_3__.tempScale.updateToggle(tempScale)
    const currentEl = document.querySelector('[data-weekly-card-temp-scale]')
    currentEl.dataset.weeklyCardTempScale = tempScale
    localStorageForecast[8].scale = tempScale
    ;(0,_utils_localStorage_js__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)(localStorageForecast)
  }
}

const forecastDisplay = new ForecastDisplay()


/***/ }),

/***/ "./src/components/icons.js":
/*!*********************************!*\
  !*** ./src/components/icons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icons: () => (/* binding */ icons)
/* harmony export */ });
class Icons {
  #ICON_FILE_NAME = new Map([
    ['snow', 'icon-snow.svg'],
    ['rain', 'icon-rain.svg'],
    ['fog', 'icon-fog.svg'],
    ['wind', 'icon-wind.svg'],
    ['cloudy', 'icon-cloudy.svg'],
    ['partly-cloudy-day', 'icon-partly-cloudy.svg'],
    ['partly-cloudy-night', 'icon-partly-cloudy-night.svg'],
    ['clear-day', 'icon-clear-day.svg'],
    ['clear-night', 'icon-clear-night.svg'],
  ])

  #getIconFilePath(iconName) {
    return `styles/icons/${this.#ICON_FILE_NAME.get(iconName)}`
  }

  renderWeatherIcons(weather, dayCard) {
    const day = Number(dayCard.dataset.day)
    const weatherDatum = weather[day]
    let iconEl
    if (day === 0) {
      iconEl = dayCard.querySelector('[data-weekly-card-temp-icon="now"]')
      iconEl.querySelector('img').src = this.#getIconFilePath(weatherDatum.icon)
    } else {
      iconEl = dayCard.querySelector('[data-weekly-card-temp-icon]')
    }

    iconEl.querySelector('img').src = this.#getIconFilePath(weatherDatum.icon)
  }
}

const icons = new Icons()


/***/ }),

/***/ "./src/components/tempScaleToggle.js":
/*!*******************************************!*\
  !*** ./src/components/tempScaleToggle.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tempScale: () => (/* binding */ tempScale)
/* harmony export */ });
class TempScale {
  updateToggle(selectedTempScale) {
    const scaleBtns = document.querySelectorAll('[data-temp-scale]')
    scaleBtns.forEach((btn) => {
      if (btn.dataset.tempScale === selectedTempScale) {
        const classes = [...btn.classList]
        if (classes.includes('off')) {
          btn.classList.remove('off')
        }
      } else {
        const classes = [...btn.classList]
        if (!classes.includes('off')) {
          btn.classList.toggle('off')
        }
      }
    })
  }
}

const tempScale = new TempScale()


/***/ }),

/***/ "./src/components/temperature.js":
/*!***************************************!*\
  !*** ./src/components/temperature.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   temperature: () => (/* binding */ temperature)
/* harmony export */ });
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _utils_dateUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dateUtils.js */ "./src/utils/dateUtils.js");


class Temperature {
  #updateTempElementVal(element, temp, attr = '') {
    element.innerText = `${attr} ${temp}${_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.DEGREE_SIGN}`
    element.dataset.tempValue = temp
  }

  renderTemps(weather, dayCard) {
    const day = Number(dayCard.dataset.day)
    const weatherDatum = weather[day]
    if (day === 0) {
      const todayTempEl = dayCard.querySelector('[data-weekly-card-temp="now"]')
      this.#updateTempElementVal(todayTempEl, weatherDatum.currentTemp)
    }
    // Setting the highest temp of the day attributes
    const tempHighEl = dayCard.querySelector('[data-weekly-card-temp="high"]')
    this.#updateTempElementVal(tempHighEl, weatherDatum.high, 'H')

    // Setting the lowest temp of the day attributes
    const tempLowEl = dayCard.querySelector('[data-weekly-card-temp="low"]')
    this.#updateTempElementVal(tempLowEl, weatherDatum.low, 'L')
  }

  convertTempUpdateData(tempData, dayCard, tempScale) {
    const day = Number(dayCard.dataset.day)
    const weatherDatum = tempData[day]
    let convertedDegree = 0
    if (day === '0') {
      convertedDegree = _utils_dateUtils_js__WEBPACK_IMPORTED_MODULE_1__.appUtils.convertTemp(
        tempScale,
        Number(tempData[day].currentTemp)
      )
      weatherDatum.currentTemp = convertedDegree
    }
    convertedDegree = _utils_dateUtils_js__WEBPACK_IMPORTED_MODULE_1__.appUtils.convertTemp(
      tempScale,
      Number(tempData[day].high)
    )
    tempData[day].high = convertedDegree
    convertedDegree = _utils_dateUtils_js__WEBPACK_IMPORTED_MODULE_1__.appUtils.convertTemp(tempScale, Number(tempData[day].low))
    tempData[day].low = convertedDegree
    return tempData
  }
}

const temperature = new Temperature()


/***/ }),

/***/ "./src/containers/forecast.js":
/*!************************************!*\
  !*** ./src/containers/forecast.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForecastService)
/* harmony export */ });
/* harmony import */ var _api_clients_timelineWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/clients/timelineWeather.js */ "./src/api/clients/timelineWeather.js");

/**
 * ForecastService Container is reponsible for fetching forecast data and
 * passing it on to components for rendering.
 */
class ForecastService {
  static async fetchweekly({ location, date1, date2 } = {}) {
    const today = new Date()
    const dateStart =
      date1 ??
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    today.setDate(today.getDate() + 6)
    const dateEnd =
      date2 ??
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    const locationToSearch = location ?? 'New York'
    const URL =
      _api_clients_timelineWeather_js__WEBPACK_IMPORTED_MODULE_0__.timelineWeatherClient.endpoint() +
      `/${locationToSearch}/${dateStart}/${dateEnd}?key=${_api_clients_timelineWeather_js__WEBPACK_IMPORTED_MODULE_0__.timelineWeatherClient.key}&IconSet=icons1`
    const response = await fetch(URL, { mode: 'cors' })
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status)
    }
    const { currentConditions, days } = await response.json()

    return { currentConditions, days }
  }

  static extractWeatherData(forecastRes) {
    let weatherToSave = []
    for (let day = 0; day < 7; day++) {
      weatherToSave[day] = {}
      let dailyWeather = forecastRes.days[day]

      weatherToSave[day]['date'] = dailyWeather.datetime.replaceAll('-', ',')
      if (day === 0) {
        weatherToSave[day]['currentTemp'] = forecastRes.currentConditions.temp
        weatherToSave[day]['icon'] = forecastRes.currentConditions.icon
      }
      weatherToSave[day]['desc'] = dailyWeather.conditions.split(',')[0]
      weatherToSave[day]['high'] = dailyWeather.tempmax
      weatherToSave[day]['low'] = dailyWeather.tempmin
      weatherToSave[day]['icon'] = dailyWeather.icon
    }
    return weatherToSave
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/app.js */ "./src/views/app.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _styles_icons_icon_clear_day_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/icons/icon-clear-day.svg */ "./src/styles/icons/icon-clear-day.svg");
/* harmony import */ var _styles_icons_icon_clear_night_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/icons/icon-clear-night.svg */ "./src/styles/icons/icon-clear-night.svg");
/* harmony import */ var _styles_icons_icon_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/icons/icon-cloudy.svg */ "./src/styles/icons/icon-cloudy.svg");
/* harmony import */ var _styles_icons_icon_fog_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/icons/icon-fog.svg */ "./src/styles/icons/icon-fog.svg");
/* harmony import */ var _styles_icons_icon_partly_cloudy_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/icons/icon-partly-cloudy.svg */ "./src/styles/icons/icon-partly-cloudy.svg");
/* harmony import */ var _styles_icons_icon_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/icons/icon-partly-cloudy-night.svg */ "./src/styles/icons/icon-partly-cloudy-night.svg");
/* harmony import */ var _styles_icons_icon_rain_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/icons/icon-rain.svg */ "./src/styles/icons/icon-rain.svg");
/* harmony import */ var _styles_icons_icon_snow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/icons/icon-snow.svg */ "./src/styles/icons/icon-snow.svg");
/* harmony import */ var _styles_icons_icon_wind_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/icons/icon-wind.svg */ "./src/styles/icons/icon-wind.svg");













await _views_app_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaultDisplay()
document.addEventListener('click', _views_app_js__WEBPACK_IMPORTED_MODULE_0__["default"].switchTimeScales)
document
  .getElementById('search-options-form')
  .addEventListener('submit', _views_app_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayWeatherForLocation)

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constants: () => (/* binding */ constants)
/* harmony export */ });
class Constants {
  WEEKDAYS = new Map([
    [0, 'Sun'],
    [1, 'Mon'],
    [2, 'Tue'],
    [3, 'Wed'],
    [4, 'Thu'],
    [5, 'Fri'],
    [6, 'Sat'],
  ])

  DEGREE_SIGN = '°'
}
const constants = new Constants()


/***/ }),

/***/ "./src/utils/dateUtils.js":
/*!********************************!*\
  !*** ./src/utils/dateUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appUtils: () => (/* binding */ appUtils)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./src/utils/constants.js");

class AppUtils {
  getDate(dateStr) {
    const date = new Date(dateStr)
    const dayOfTheWeek = _constants_js__WEBPACK_IMPORTED_MODULE_0__.constants.WEEKDAYS.get(date.getDay())
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDate()
    return `${dayOfTheWeek} ${month} ${day}`
  }

  convertTemp(tempScale, degree) {
    let temp
    if (tempScale === 'celsius') {
      temp = (degree - 32) / (9 / 5)
    }
    if (tempScale === 'fahrenheit') {
      temp = degree * 1.8 + 32
    }
    return Math.round(temp * 10) / 10
  }

  capitalize(string) {
    const strArr = string.trim().toLowerCase().split(' ')
    const everyFirstLetterCapStr = strArr
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ')
    return everyFirstLetterCapStr
  }
}

const appUtils = new AppUtils()


/***/ }),

/***/ "./src/utils/localStorage.js":
/*!***********************************!*\
  !*** ./src/utils/localStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
function saveToLocalStorage(forecast) {
  localStorage.setItem('weatherApp', JSON.stringify(forecast))
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem('weatherApp'))
}


/***/ }),

/***/ "./src/views/app.js":
/*!**************************!*\
  !*** ./src/views/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var _containers_forecast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/forecast.js */ "./src/containers/forecast.js");
/* harmony import */ var _components_forecastDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/forecastDisplay.js */ "./src/components/forecastDisplay.js");
/* harmony import */ var _utils_localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/localStorage.js */ "./src/utils/localStorage.js");



const errorEl = document.getElementById('error')

class AppController {
  static switchTimeScales(event) {
    if (event.target.matches('button')) {
      const selectedTempScale = event.target.dataset.tempScale
      const currentEl = document.querySelector('[data-weekly-card-temp-scale]')
      const currentScaleValue = currentEl.dataset.weeklyCardTempScale
      if (currentScaleValue === selectedTempScale) return
      _components_forecastDisplay_js__WEBPACK_IMPORTED_MODULE_1__.forecastDisplay.updateTempScaleDisplay(selectedTempScale)
    }
  }

  static async defaultDisplay(prevCity = 'New York') {
    const weather = await _containers_forecast_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchweekly({ location: prevCity })
    const parsedForcastData = _containers_forecast_js__WEBPACK_IMPORTED_MODULE_0__["default"].extractWeatherData(weather)
    parsedForcastData.push({ city: prevCity })
    parsedForcastData.push({ scale: 'fahrenheit' })
    _components_forecastDisplay_js__WEBPACK_IMPORTED_MODULE_1__.forecastDisplay.renderWeatherData(parsedForcastData)
    ;(0,_utils_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(parsedForcastData)
  }

  static async displayWeatherForLocation(event) {
    event.preventDefault()
    errorEl.innerText = ''
    const prevCity = (0,_utils_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)()[7].city
    const input = document.getElementById('search')
    let cityToSearch = input.value
    try {
      if (cityToSearch.length === 0) {
        throw new Error("Name can't be blank!")
      }
      const forecast = await _containers_forecast_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetchweekly({
        location: cityToSearch,
      })
      const parsedForcastData = _containers_forecast_js__WEBPACK_IMPORTED_MODULE_0__["default"].extractWeatherData(forecast)
      parsedForcastData.push({ city: cityToSearch })
      parsedForcastData.push({ scale: 'fahrenheit' })
      _components_forecastDisplay_js__WEBPACK_IMPORTED_MODULE_1__.forecastDisplay.renderWeatherData(parsedForcastData)
      ;(0,_utils_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(parsedForcastData)
    } catch (error) {
      if (error.message.match('HTTP')) {
        errorEl.innerText = 'Invalid request! Please try again.'
      } else {
        errorEl.innerText = error.message
      }
      await AppController.defaultDisplay(prevCity)
    }
  }
}


/***/ }),

/***/ "./src/styles/Inconsolata-Regular.ttf":
/*!********************************************!*\
  !*** ./src/styles/Inconsolata-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f60ac7422fec304dc1d6.ttf";

/***/ }),

/***/ "./src/styles/icons/icon-clear-day.svg":
/*!*********************************************!*\
  !*** ./src/styles/icons/icon-clear-day.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b195d08c2355c3c35795.svg";

/***/ }),

/***/ "./src/styles/icons/icon-clear-night.svg":
/*!***********************************************!*\
  !*** ./src/styles/icons/icon-clear-night.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4aa1b3d2fa4998dcf22e.svg";

/***/ }),

/***/ "./src/styles/icons/icon-cloudy.svg":
/*!******************************************!*\
  !*** ./src/styles/icons/icon-cloudy.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e6c3784b7a7a21921c7.svg";

/***/ }),

/***/ "./src/styles/icons/icon-fog.svg":
/*!***************************************!*\
  !*** ./src/styles/icons/icon-fog.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cc8f5d9c154ae8dc827.svg";

/***/ }),

/***/ "./src/styles/icons/icon-partly-cloudy-night.svg":
/*!*******************************************************!*\
  !*** ./src/styles/icons/icon-partly-cloudy-night.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1059f557c65092d78d2.svg";

/***/ }),

/***/ "./src/styles/icons/icon-partly-cloudy.svg":
/*!*************************************************!*\
  !*** ./src/styles/icons/icon-partly-cloudy.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fa7a9be8c2514bb400b.svg";

/***/ }),

/***/ "./src/styles/icons/icon-rain.svg":
/*!****************************************!*\
  !*** ./src/styles/icons/icon-rain.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b793e1b78044f71bc5a.svg";

/***/ }),

/***/ "./src/styles/icons/icon-snow.svg":
/*!****************************************!*\
  !*** ./src/styles/icons/icon-snow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "812ed6441ee7ae26c3a8.svg";

/***/ }),

/***/ "./src/styles/icons/icon-wind.svg":
/*!****************************************!*\
  !*** ./src/styles/icons/icon-wind.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce9482b3719e752b5c99.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxtR0FBbUcsTUFBTSxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsc1ZBQXNWLHVCQUF1QiwyQ0FBMkMsVUFBVSxvS0FBb0ssY0FBYyxHQUFHLDRFQUE0RSxtQkFBbUIsR0FBRyw0SkFBNEosbUJBQW1CLHFCQUFxQixHQUFHLDROQUE0Tiw2QkFBNkIsc0JBQXNCLDhCQUE4QixVQUFVLDZKQUE2Six1Q0FBdUMsMkJBQTJCLFVBQVUsK0xBQStMLGtDQUFrQyxHQUFHLGdLQUFnSyx5QkFBeUIsdUNBQXVDLDhDQUE4QyxVQUFVLDZGQUE2Rix3QkFBd0IsR0FBRywyS0FBMkssdUNBQXVDLDJCQUEyQixVQUFVLDBFQUEwRSxtQkFBbUIsR0FBRywwSEFBMEgsbUJBQW1CLG1CQUFtQix1QkFBdUIsNkJBQTZCLEdBQUcsU0FBUyxvQkFBb0IsR0FBRyxTQUFTLGdCQUFnQixHQUFHLDJMQUEyTCx1QkFBdUIsR0FBRyxvUUFBb1EsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsc0JBQXNCLFVBQVUscUdBQXFHLGlDQUFpQyxHQUFHLDBLQUEwSyxvQ0FBb0MsR0FBRyw2SkFBNkosK0JBQStCLEdBQUcsbU5BQW1OLHVCQUF1QixlQUFlLEdBQUcsNE1BQTRNLG1DQUFtQyxHQUFHLGtFQUFrRSxtQ0FBbUMsR0FBRyxrUkFBa1IsNEJBQTRCLDJCQUEyQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixnQ0FBZ0MsVUFBVSxvR0FBb0csNkJBQTZCLEdBQUcsbUZBQW1GLG1CQUFtQixHQUFHLDhJQUE4SSw0QkFBNEIsdUJBQXVCLFVBQVUsNExBQTRMLGlCQUFpQixHQUFHLDZJQUE2SSxtQ0FBbUMsaUNBQWlDLFVBQVUsOEhBQThILDZCQUE2QixHQUFHLG1MQUFtTCxnQ0FBZ0MsMEJBQTBCLFVBQVUsNExBQTRMLG1CQUFtQixHQUFHLHlFQUF5RSx1QkFBdUIsR0FBRyxvS0FBb0ssa0JBQWtCLEdBQUcsb0VBQW9FLGtCQUFrQixHQUFHLHFCQUFxQjtBQUNyaFI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN0VzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLHFGQUFPLFVBQVUscUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDBGQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsMEZBQU8sSUFBSSwwRkFBTyxVQUFVLDBGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQeUM7QUFDRjtBQUNaO0FBQzJCO0FBSTVCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBUTtBQUM5QjtBQUNBLCtCQUErQix5REFBUTtBQUN2QyxNQUFNLHdEQUFXO0FBQ2pCLE1BQU0sNENBQUs7O0FBRVg7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLDBEQUFTO0FBQ2I7O0FBRUE7QUFDQSxpQ0FBaUMsMkVBQW1CO0FBQ3BEO0FBQ0EsTUFBTSx3REFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVc7QUFDakIsS0FBSztBQUNMLElBQUksMERBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUFrQjtBQUN0QjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7QUNoRFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7O0FDaENQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkIwQztBQUNEO0FBQ2hEO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTSxFQUFFLEtBQUssRUFBRSwwREFBUyxhQUFhO0FBQ2hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUNrRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsNkJBQTZCLHlCQUF5QixJQUFJO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CLEdBQUcscUJBQXFCLEdBQUcsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CLEdBQUcscUJBQXFCLEdBQUcsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQSxNQUFNLGtGQUFxQjtBQUMzQixVQUFVLGlCQUFpQixHQUFHLFVBQVUsR0FBRyxRQUFRLE9BQU8sa0ZBQXFCLEtBQUs7QUFDcEYsd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7O0FBRXRDLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDMEM7QUFDaEI7QUFDSztBQUNXO0FBQ0U7QUFDTDtBQUNIO0FBQ1U7QUFDTTtBQUNmO0FBQ0E7QUFDQTs7QUFFckMsTUFBTSxxREFBYTtBQUNuQixtQ0FBbUMscURBQWE7QUFDaEQ7QUFDQTtBQUNBLDhCQUE4QixxREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JtQztBQUMxQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVM7QUFDbEMsbURBQW1ELGdCQUFnQjtBQUNuRTtBQUNBLGNBQWMsY0FBYyxFQUFFLE9BQU8sRUFBRSxJQUFJO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVEO0FBQ1c7QUFJakM7QUFDakM7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJFQUFlO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsK0RBQWUsZUFBZSxvQkFBb0I7QUFDNUUsOEJBQThCLCtEQUFlO0FBQzdDLDZCQUE2QixnQkFBZ0I7QUFDN0MsNkJBQTZCLHFCQUFxQjtBQUNsRCxJQUFJLDJFQUFlO0FBQ25CLElBQUksMkVBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyRUFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtEQUFlO0FBQzVDO0FBQ0EsT0FBTztBQUNQLGdDQUFnQywrREFBZTtBQUMvQywrQkFBK0Isb0JBQW9CO0FBQ25ELCtCQUErQixxQkFBcUI7QUFDcEQsTUFBTSwyRUFBZTtBQUNyQixNQUFNLDJFQUFrQjtBQUN4QixNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxDQUFDO1dBQ0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBLHNHQUFzRztXQUN0RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7Ozs7O1dDaEVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz80M2Y0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpL2NsaWVudHMvdGltZWxpbmVXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZm9yZWNhc3REaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy90ZW1wU2NhbGVUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy90ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb250YWluZXJzL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9kYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbHMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZpZXdzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJJbmNvbnNvbGF0YS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1tYWluLWJveC1zaGFkb3c6ICMwMzA3MTIgMHB4IDEzcHggMjdweCAtNXB4LCAjZmVkN2FhIDFweCA4cHggMTZweCAtOHB4O1xuICAgIC0tbWFpbi1ib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAtLW1haW4tbGlnaHQtY29sb3I6ICNmMGY5ZmY7XG4gICAgLS1tYWluLWRhcmstY29sb3I6ICMwMzA3MTI7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5ib2R5e1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcbiBcbn1cblxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICM3ZGQzZmMsICM3ZGQzZmMsI2ZlZDdhYSwjZmVkN2FhLCAjZmRiYTc0LCAjZmI5MjNjLCAjMGYxNzJhLCAjMDIwNjE3LCAjMGYxNzJhKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50e1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuI2hlYWRlci1zZWN0aW9ue1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuaDJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtY29sb3IpO1xufVxuXG4jZm9ybS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB3aWR0aDogNjAwcHg7XG59XG5cbiNzZWFyY2gtb3B0aW9ucy1mb3Jte1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNlcnJvcntcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuaW5wdXQjc2VhcmNoe1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tYWluLWJveC1zaGFkb3cpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XG4gICAgb3BhY2l0eTogLjc7XG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YSc7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGhlaWdodDogIDMwcHg7O1xufVxuXG5idXR0b257XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1ib3gtc2hhZG93KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jYnV0dG9uLXNlYXJjaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTBweDtcbn1cblxuaW1ne1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xufVxuXG5idXR0b25bZGF0YS10ZW1wLXNjYWxlXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcbn1cblxuYnV0dG9uLm9mZntcbiAgICBvcGFjaXR5OiAuNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN0b2RheXtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNsb2NhdGlvbi1uYW1le1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6ICAyNSU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN3ZWF0aGVyLWNvbnRlbnR7XG4gICAgaGVpZ2h0OiAgMTAwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuW2RhdGEtd2Vla2x5LWNhcmQtdGVtcC1pY29uPVwibm93XCJde1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG5kaXZbZGF0YS13ZWVrbHktY2FyZC10ZW1wPSdub3cnXXtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbn1cblxuI3dlYXRoZXItZGVzY3tcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuI3dlZWtseXtcbiAgICBtaW4taGVpZ2h0OiA0MiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5kaXZbZGF0YS13ZWVrbHktY2FyZF17XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgd2lkdGg6IDEzJTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tYWluLWJveC1zaGFkb3cpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpdltkYXRhLXdlZWtseS1jYXJkLWRhdGVde1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGp1c3RpZnktc2VsZjogIGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3RUFBd0U7SUFDeEUsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsK0RBQXNEO0FBQzFEOztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw4QkFBOEI7O0FBRWxDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUhBQWlIO0lBQ2pILHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tbWFpbi1ib3gtc2hhZG93OiAjMDMwNzEyIDBweCAxM3B4IDI3cHggLTVweCwgI2ZlZDdhYSAxcHggOHB4IDE2cHggLThweDtcXG4gICAgLS1tYWluLWJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICAtLW1haW4tbGlnaHQtY29sb3I6ICNmMGY5ZmY7XFxuICAgIC0tbWFpbi1kYXJrLWNvbG9yOiAjMDMwNzEyO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YSc7XFxuICAgIHNyYzogdXJsKFxcXCJJbmNvbnNvbGF0YS1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuIFxcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICM3ZGQzZmMsICM3ZGQzZmMsI2ZlZDdhYSwjZmVkN2FhLCAjZmRiYTc0LCAjZmI5MjNjLCAjMGYxNzJhLCAjMDIwNjE3LCAjMGYxNzJhKTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuI2hlYWRlci1zZWN0aW9ue1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG5oMntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4jc2VhcmNoLW9wdGlvbnMtZm9ybXtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNlcnJvcntcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuaW5wdXQjc2VhcmNoe1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWFpbi1ib3gtc2hhZG93KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcXG4gICAgb3BhY2l0eTogLjc7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGhlaWdodDogIDMwcHg7O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLW1haW4tYm94LXNoYWRvdyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jYnV0dG9uLXNlYXJjaHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMTBweDtcXG59XFxuXFxuaW1ne1xcbiAgICBtYXgtd2lkdGg6IDYwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbmJ1dHRvbltkYXRhLXRlbXAtc2NhbGVde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWRhcmstY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5vZmZ7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tZGFyay1jb2xvcik7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RheXtcXG4gICAgbWluLWhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2NhdGlvbi1uYW1le1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBoZWlnaHQ6ICAyNSU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItY29udGVudHtcXG4gICAgaGVpZ2h0OiAgMTAwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbltkYXRhLXdlZWtseS1jYXJkLXRlbXAtaWNvbj1cXFwibm93XFxcIl17XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG5kaXZbZGF0YS13ZWVrbHktY2FyZC10ZW1wPSdub3cnXXtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbiN3ZWF0aGVyLWRlc2N7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4jd2Vla2x5e1xcbiAgICBtaW4taGVpZ2h0OiA0MiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5kaXZbZGF0YS13ZWVrbHktY2FyZF17XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICB3aWR0aDogMTMlO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1tYWluLWJveC1zaGFkb3cpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGl2W2RhdGEtd2Vla2x5LWNhcmQtZGF0ZV17XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAganVzdGlmeS1zZWxmOiAgZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICAgKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gICAqL1xuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAgICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gICAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAgICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gICAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICAgKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAgICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICAgKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICAgKiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICAgKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAgICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICAgKi9cblxuYnV0dG9uLFxuaW5wdXQge1xuICAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAgICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICAgKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gICAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAgICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICAgKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gICAqICAgIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAgICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAgICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gICAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAgICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gICAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICAgKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICAgKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICAgKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAgICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICAgKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gICAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztJQUVJOztBQUVKOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxNQUFNO0VBQ04saUJBQWlCO0FBQ25COztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxNQUFNO0VBQ04sb0JBQW9CO0FBQ3RCOztBQUVBOztJQUVJOztBQUVKOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztJQUVJOztBQUVKOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7SUFFSTs7QUFFSjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7SUFLSTs7QUFFSjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0lBRUk7O0FBRUo7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztJQUVJOztBQUVKO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUaW1lbGluZVdlYXRoZXJDbGllbnQge1xuICBrZXkgPSAnSkFMNk44VFhZR1dHM1ZaU0dBUzZCTTNKRSdcbiAgZW5kcG9pbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuICdodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZSdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdGltZWxpbmVXZWF0aGVyQ2xpZW50ID0gbmV3IFRpbWVsaW5lV2VhdGhlckNsaWVudCgpXG4iLCJpbXBvcnQgeyBhcHBVdGlscyB9IGZyb20gJy4uL3V0aWxzL2RhdGVVdGlscy5qcydcbmltcG9ydCB7IHRlbXBlcmF0dXJlIH0gZnJvbSAnLi90ZW1wZXJhdHVyZS5qcydcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnLi9pY29ucy5qcydcbmltcG9ydCB7IHRlbXBTY2FsZSBhcyBUZW1wU2NhbGUgfSBmcm9tICcuL3RlbXBTY2FsZVRvZ2dsZS5qcydcbmltcG9ydCB7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSxcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbn0gZnJvbSAnLi4vdXRpbHMvbG9jYWxTdG9yYWdlLmpzJ1xuY2xhc3MgRm9yZWNhc3REaXNwbGF5IHtcbiAgcmVuZGVyV2VhdGhlckRhdGEod2VhdGhlcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRheV0nKS5mb3JFYWNoKChkYXlDYXJkKSA9PiB7XG4gICAgICBjb25zdCBkYXkgPSBOdW1iZXIoZGF5Q2FyZC5kYXRhc2V0LmRheSlcbiAgICAgIGNvbnN0IHdlYXRoZXJEYXR1bSA9IHdlYXRoZXJbZGF5XVxuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHdlYXRoZXJEYXR1bS5kYXRlXG4gICAgICBjb25zdCB3ZWVrRGF5ID0gYXBwVXRpbHMuZ2V0RGF0ZShmb3JtYXR0ZWREYXRlKVxuICAgICAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLW5hbWUnKVxuICAgICAgbG9jYXRpb25OYW1lLmlubmVyVGV4dCA9IGFwcFV0aWxzLmNhcGl0YWxpemUod2VhdGhlcls3XS5jaXR5KVxuICAgICAgdGVtcGVyYXR1cmUucmVuZGVyVGVtcHMod2VhdGhlciwgZGF5Q2FyZClcbiAgICAgIGljb25zLnJlbmRlcldlYXRoZXJJY29ucyh3ZWF0aGVyLCBkYXlDYXJkKVxuXG4gICAgICBpZiAoZGF5ICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGRhdGVFbCA9IGRheUNhcmQucXVlcnlTZWxlY3RvcignW2RhdGEtd2Vla2x5LWNhcmQtZGF0ZV0nKVxuICAgICAgICBkYXRlRWwuaW5uZXJUZXh0ID0gYCR7d2Vla0RheX1gXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBjdXJyZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWVrbHktY2FyZC10ZW1wLXNjYWxlXScpXG4gICAgY3VycmVudEVsLmRhdGFzZXQud2Vla2x5Q2FyZFRlbXBTY2FsZSA9IHdlYXRoZXJbOF0uc2NhbGVcbiAgICBUZW1wU2NhbGUudXBkYXRlVG9nZ2xlKHdlYXRoZXJbOF0uc2NhbGUpXG4gIH1cblxuICB1cGRhdGVUZW1wU2NhbGVEaXNwbGF5KHRlbXBTY2FsZSkge1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZUZvcmVjYXN0ID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGF5XScpLmZvckVhY2goKGRheUNhcmQpID0+IHtcbiAgICAgIHRlbXBlcmF0dXJlLmNvbnZlcnRUZW1wVXBkYXRlRGF0YShcbiAgICAgICAgbG9jYWxTdG9yYWdlRm9yZWNhc3QsXG4gICAgICAgIGRheUNhcmQsXG4gICAgICAgIHRlbXBTY2FsZVxuICAgICAgKVxuICAgICAgdGVtcGVyYXR1cmUucmVuZGVyVGVtcHMobG9jYWxTdG9yYWdlRm9yZWNhc3QsIGRheUNhcmQpXG4gICAgfSlcbiAgICBUZW1wU2NhbGUudXBkYXRlVG9nZ2xlKHRlbXBTY2FsZSlcbiAgICBjb25zdCBjdXJyZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWVrbHktY2FyZC10ZW1wLXNjYWxlXScpXG4gICAgY3VycmVudEVsLmRhdGFzZXQud2Vla2x5Q2FyZFRlbXBTY2FsZSA9IHRlbXBTY2FsZVxuICAgIGxvY2FsU3RvcmFnZUZvcmVjYXN0WzhdLnNjYWxlID0gdGVtcFNjYWxlXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUZvcmVjYXN0KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmb3JlY2FzdERpc3BsYXkgPSBuZXcgRm9yZWNhc3REaXNwbGF5KClcbiIsImNsYXNzIEljb25zIHtcbiAgI0lDT05fRklMRV9OQU1FID0gbmV3IE1hcChbXG4gICAgWydzbm93JywgJ2ljb24tc25vdy5zdmcnXSxcbiAgICBbJ3JhaW4nLCAnaWNvbi1yYWluLnN2ZyddLFxuICAgIFsnZm9nJywgJ2ljb24tZm9nLnN2ZyddLFxuICAgIFsnd2luZCcsICdpY29uLXdpbmQuc3ZnJ10sXG4gICAgWydjbG91ZHknLCAnaWNvbi1jbG91ZHkuc3ZnJ10sXG4gICAgWydwYXJ0bHktY2xvdWR5LWRheScsICdpY29uLXBhcnRseS1jbG91ZHkuc3ZnJ10sXG4gICAgWydwYXJ0bHktY2xvdWR5LW5pZ2h0JywgJ2ljb24tcGFydGx5LWNsb3VkeS1uaWdodC5zdmcnXSxcbiAgICBbJ2NsZWFyLWRheScsICdpY29uLWNsZWFyLWRheS5zdmcnXSxcbiAgICBbJ2NsZWFyLW5pZ2h0JywgJ2ljb24tY2xlYXItbmlnaHQuc3ZnJ10sXG4gIF0pXG5cbiAgI2dldEljb25GaWxlUGF0aChpY29uTmFtZSkge1xuICAgIHJldHVybiBgc3R5bGVzL2ljb25zLyR7dGhpcy4jSUNPTl9GSUxFX05BTUUuZ2V0KGljb25OYW1lKX1gXG4gIH1cblxuICByZW5kZXJXZWF0aGVySWNvbnMod2VhdGhlciwgZGF5Q2FyZCkge1xuICAgIGNvbnN0IGRheSA9IE51bWJlcihkYXlDYXJkLmRhdGFzZXQuZGF5KVxuICAgIGNvbnN0IHdlYXRoZXJEYXR1bSA9IHdlYXRoZXJbZGF5XVxuICAgIGxldCBpY29uRWxcbiAgICBpZiAoZGF5ID09PSAwKSB7XG4gICAgICBpY29uRWwgPSBkYXlDYXJkLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXdlZWtseS1jYXJkLXRlbXAtaWNvbj1cIm5vd1wiXScpXG4gICAgICBpY29uRWwucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gdGhpcy4jZ2V0SWNvbkZpbGVQYXRoKHdlYXRoZXJEYXR1bS5pY29uKVxuICAgIH0gZWxzZSB7XG4gICAgICBpY29uRWwgPSBkYXlDYXJkLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXdlZWtseS1jYXJkLXRlbXAtaWNvbl0nKVxuICAgIH1cblxuICAgIGljb25FbC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSB0aGlzLiNnZXRJY29uRmlsZVBhdGgod2VhdGhlckRhdHVtLmljb24pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGljb25zID0gbmV3IEljb25zKClcbiIsImNsYXNzIFRlbXBTY2FsZSB7XG4gIHVwZGF0ZVRvZ2dsZShzZWxlY3RlZFRlbXBTY2FsZSkge1xuICAgIGNvbnN0IHNjYWxlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRlbXAtc2NhbGVdJylcbiAgICBzY2FsZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBpZiAoYnRuLmRhdGFzZXQudGVtcFNjYWxlID09PSBzZWxlY3RlZFRlbXBTY2FsZSkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gWy4uLmJ0bi5jbGFzc0xpc3RdXG4gICAgICAgIGlmIChjbGFzc2VzLmluY2x1ZGVzKCdvZmYnKSkge1xuICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvZmYnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gWy4uLmJ0bi5jbGFzc0xpc3RdXG4gICAgICAgIGlmICghY2xhc3Nlcy5pbmNsdWRlcygnb2ZmJykpIHtcbiAgICAgICAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb2ZmJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRlbXBTY2FsZSA9IG5ldyBUZW1wU2NhbGUoKVxuIiwiaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJ1xuaW1wb3J0IHsgYXBwVXRpbHMgfSBmcm9tICcuLi91dGlscy9kYXRlVXRpbHMuanMnXG5jbGFzcyBUZW1wZXJhdHVyZSB7XG4gICN1cGRhdGVUZW1wRWxlbWVudFZhbChlbGVtZW50LCB0ZW1wLCBhdHRyID0gJycpIHtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IGAke2F0dHJ9ICR7dGVtcH0ke2NvbnN0YW50cy5ERUdSRUVfU0lHTn1gXG4gICAgZWxlbWVudC5kYXRhc2V0LnRlbXBWYWx1ZSA9IHRlbXBcbiAgfVxuXG4gIHJlbmRlclRlbXBzKHdlYXRoZXIsIGRheUNhcmQpIHtcbiAgICBjb25zdCBkYXkgPSBOdW1iZXIoZGF5Q2FyZC5kYXRhc2V0LmRheSlcbiAgICBjb25zdCB3ZWF0aGVyRGF0dW0gPSB3ZWF0aGVyW2RheV1cbiAgICBpZiAoZGF5ID09PSAwKSB7XG4gICAgICBjb25zdCB0b2RheVRlbXBFbCA9IGRheUNhcmQucXVlcnlTZWxlY3RvcignW2RhdGEtd2Vla2x5LWNhcmQtdGVtcD1cIm5vd1wiXScpXG4gICAgICB0aGlzLiN1cGRhdGVUZW1wRWxlbWVudFZhbCh0b2RheVRlbXBFbCwgd2VhdGhlckRhdHVtLmN1cnJlbnRUZW1wKVxuICAgIH1cbiAgICAvLyBTZXR0aW5nIHRoZSBoaWdoZXN0IHRlbXAgb2YgdGhlIGRheSBhdHRyaWJ1dGVzXG4gICAgY29uc3QgdGVtcEhpZ2hFbCA9IGRheUNhcmQucXVlcnlTZWxlY3RvcignW2RhdGEtd2Vla2x5LWNhcmQtdGVtcD1cImhpZ2hcIl0nKVxuICAgIHRoaXMuI3VwZGF0ZVRlbXBFbGVtZW50VmFsKHRlbXBIaWdoRWwsIHdlYXRoZXJEYXR1bS5oaWdoLCAnSCcpXG5cbiAgICAvLyBTZXR0aW5nIHRoZSBsb3dlc3QgdGVtcCBvZiB0aGUgZGF5IGF0dHJpYnV0ZXNcbiAgICBjb25zdCB0ZW1wTG93RWwgPSBkYXlDYXJkLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXdlZWtseS1jYXJkLXRlbXA9XCJsb3dcIl0nKVxuICAgIHRoaXMuI3VwZGF0ZVRlbXBFbGVtZW50VmFsKHRlbXBMb3dFbCwgd2VhdGhlckRhdHVtLmxvdywgJ0wnKVxuICB9XG5cbiAgY29udmVydFRlbXBVcGRhdGVEYXRhKHRlbXBEYXRhLCBkYXlDYXJkLCB0ZW1wU2NhbGUpIHtcbiAgICBjb25zdCBkYXkgPSBOdW1iZXIoZGF5Q2FyZC5kYXRhc2V0LmRheSlcbiAgICBjb25zdCB3ZWF0aGVyRGF0dW0gPSB0ZW1wRGF0YVtkYXldXG4gICAgbGV0IGNvbnZlcnRlZERlZ3JlZSA9IDBcbiAgICBpZiAoZGF5ID09PSAnMCcpIHtcbiAgICAgIGNvbnZlcnRlZERlZ3JlZSA9IGFwcFV0aWxzLmNvbnZlcnRUZW1wKFxuICAgICAgICB0ZW1wU2NhbGUsXG4gICAgICAgIE51bWJlcih0ZW1wRGF0YVtkYXldLmN1cnJlbnRUZW1wKVxuICAgICAgKVxuICAgICAgd2VhdGhlckRhdHVtLmN1cnJlbnRUZW1wID0gY29udmVydGVkRGVncmVlXG4gICAgfVxuICAgIGNvbnZlcnRlZERlZ3JlZSA9IGFwcFV0aWxzLmNvbnZlcnRUZW1wKFxuICAgICAgdGVtcFNjYWxlLFxuICAgICAgTnVtYmVyKHRlbXBEYXRhW2RheV0uaGlnaClcbiAgICApXG4gICAgdGVtcERhdGFbZGF5XS5oaWdoID0gY29udmVydGVkRGVncmVlXG4gICAgY29udmVydGVkRGVncmVlID0gYXBwVXRpbHMuY29udmVydFRlbXAodGVtcFNjYWxlLCBOdW1iZXIodGVtcERhdGFbZGF5XS5sb3cpKVxuICAgIHRlbXBEYXRhW2RheV0ubG93ID0gY29udmVydGVkRGVncmVlXG4gICAgcmV0dXJuIHRlbXBEYXRhXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRlbXBlcmF0dXJlID0gbmV3IFRlbXBlcmF0dXJlKClcbiIsImltcG9ydCB7IHRpbWVsaW5lV2VhdGhlckNsaWVudCB9IGZyb20gJy4uL2FwaS9jbGllbnRzL3RpbWVsaW5lV2VhdGhlci5qcydcbi8qKlxuICogRm9yZWNhc3RTZXJ2aWNlIENvbnRhaW5lciBpcyByZXBvbnNpYmxlIGZvciBmZXRjaGluZyBmb3JlY2FzdCBkYXRhIGFuZFxuICogcGFzc2luZyBpdCBvbiB0byBjb21wb25lbnRzIGZvciByZW5kZXJpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0U2VydmljZSB7XG4gIHN0YXRpYyBhc3luYyBmZXRjaHdlZWtseSh7IGxvY2F0aW9uLCBkYXRlMSwgZGF0ZTIgfSA9IHt9KSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgZGF0ZVN0YXJ0ID1cbiAgICAgIGRhdGUxID8/XG4gICAgICBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke3RvZGF5LmdldE1vbnRoKCkgKyAxfS0ke3RvZGF5LmdldERhdGUoKX1gXG4gICAgdG9kYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA2KVxuICAgIGNvbnN0IGRhdGVFbmQgPVxuICAgICAgZGF0ZTIgPz9cbiAgICAgIGAke3RvZGF5LmdldEZ1bGxZZWFyKCl9LSR7dG9kYXkuZ2V0TW9udGgoKSArIDF9LSR7dG9kYXkuZ2V0RGF0ZSgpfWBcbiAgICBjb25zdCBsb2NhdGlvblRvU2VhcmNoID0gbG9jYXRpb24gPz8gJ05ldyBZb3JrJ1xuICAgIGNvbnN0IFVSTCA9XG4gICAgICB0aW1lbGluZVdlYXRoZXJDbGllbnQuZW5kcG9pbnQoKSArXG4gICAgICBgLyR7bG9jYXRpb25Ub1NlYXJjaH0vJHtkYXRlU3RhcnR9LyR7ZGF0ZUVuZH0/a2V5PSR7dGltZWxpbmVXZWF0aGVyQ2xpZW50LmtleX0mSWNvblNldD1pY29uczFgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIHN0YXR1cyAnICsgcmVzcG9uc2Uuc3RhdHVzKVxuICAgIH1cbiAgICBjb25zdCB7IGN1cnJlbnRDb25kaXRpb25zLCBkYXlzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIHJldHVybiB7IGN1cnJlbnRDb25kaXRpb25zLCBkYXlzIH1cbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0V2VhdGhlckRhdGEoZm9yZWNhc3RSZXMpIHtcbiAgICBsZXQgd2VhdGhlclRvU2F2ZSA9IFtdXG4gICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcbiAgICAgIHdlYXRoZXJUb1NhdmVbZGF5XSA9IHt9XG4gICAgICBsZXQgZGFpbHlXZWF0aGVyID0gZm9yZWNhc3RSZXMuZGF5c1tkYXldXG5cbiAgICAgIHdlYXRoZXJUb1NhdmVbZGF5XVsnZGF0ZSddID0gZGFpbHlXZWF0aGVyLmRhdGV0aW1lLnJlcGxhY2VBbGwoJy0nLCAnLCcpXG4gICAgICBpZiAoZGF5ID09PSAwKSB7XG4gICAgICAgIHdlYXRoZXJUb1NhdmVbZGF5XVsnY3VycmVudFRlbXAnXSA9IGZvcmVjYXN0UmVzLmN1cnJlbnRDb25kaXRpb25zLnRlbXBcbiAgICAgICAgd2VhdGhlclRvU2F2ZVtkYXldWydpY29uJ10gPSBmb3JlY2FzdFJlcy5jdXJyZW50Q29uZGl0aW9ucy5pY29uXG4gICAgICB9XG4gICAgICB3ZWF0aGVyVG9TYXZlW2RheV1bJ2Rlc2MnXSA9IGRhaWx5V2VhdGhlci5jb25kaXRpb25zLnNwbGl0KCcsJylbMF1cbiAgICAgIHdlYXRoZXJUb1NhdmVbZGF5XVsnaGlnaCddID0gZGFpbHlXZWF0aGVyLnRlbXBtYXhcbiAgICAgIHdlYXRoZXJUb1NhdmVbZGF5XVsnbG93J10gPSBkYWlseVdlYXRoZXIudGVtcG1pblxuICAgICAgd2VhdGhlclRvU2F2ZVtkYXldWydpY29uJ10gPSBkYWlseVdlYXRoZXIuaWNvblxuICAgIH1cbiAgICByZXR1cm4gd2VhdGhlclRvU2F2ZVxuICB9XG59XG4iLCJpbXBvcnQgQXBwQ29udHJvbGxlciBmcm9tICcuL3ZpZXdzL2FwcC5qcydcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnXG5pbXBvcnQgJy4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnXG5pbXBvcnQgJy4vc3R5bGVzL2ljb25zL2ljb24tY2xlYXItZGF5LnN2ZydcbmltcG9ydCAnLi9zdHlsZXMvaWNvbnMvaWNvbi1jbGVhci1uaWdodC5zdmcnXG5pbXBvcnQgJy4vc3R5bGVzL2ljb25zL2ljb24tY2xvdWR5LnN2ZydcbmltcG9ydCAnLi9zdHlsZXMvaWNvbnMvaWNvbi1mb2cuc3ZnJ1xuaW1wb3J0ICcuL3N0eWxlcy9pY29ucy9pY29uLXBhcnRseS1jbG91ZHkuc3ZnJ1xuaW1wb3J0ICcuL3N0eWxlcy9pY29ucy9pY29uLXBhcnRseS1jbG91ZHktbmlnaHQuc3ZnJ1xuaW1wb3J0ICcuL3N0eWxlcy9pY29ucy9pY29uLXJhaW4uc3ZnJ1xuaW1wb3J0ICcuL3N0eWxlcy9pY29ucy9pY29uLXNub3cuc3ZnJ1xuaW1wb3J0ICcuL3N0eWxlcy9pY29ucy9pY29uLXdpbmQuc3ZnJ1xuXG5hd2FpdCBBcHBDb250cm9sbGVyLmRlZmF1bHREaXNwbGF5KClcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwQ29udHJvbGxlci5zd2l0Y2hUaW1lU2NhbGVzKVxuZG9jdW1lbnRcbiAgLmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtb3B0aW9ucy1mb3JtJylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIEFwcENvbnRyb2xsZXIuZGlzcGxheVdlYXRoZXJGb3JMb2NhdGlvbilcbiIsImNsYXNzIENvbnN0YW50cyB7XG4gIFdFRUtEQVlTID0gbmV3IE1hcChbXG4gICAgWzAsICdTdW4nXSxcbiAgICBbMSwgJ01vbiddLFxuICAgIFsyLCAnVHVlJ10sXG4gICAgWzMsICdXZWQnXSxcbiAgICBbNCwgJ1RodSddLFxuICAgIFs1LCAnRnJpJ10sXG4gICAgWzYsICdTYXQnXSxcbiAgXSlcblxuICBERUdSRUVfU0lHTiA9ICfCsCdcbn1cbmV4cG9ydCBjb25zdCBjb25zdGFudHMgPSBuZXcgQ29uc3RhbnRzKClcbiIsImltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzLmpzJ1xuY2xhc3MgQXBwVXRpbHMge1xuICBnZXREYXRlKGRhdGVTdHIpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cilcbiAgICBjb25zdCBkYXlPZlRoZVdlZWsgPSBjb25zdGFudHMuV0VFS0RBWVMuZ2V0KGRhdGUuZ2V0RGF5KCkpXG4gICAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ3Nob3J0JyB9KVxuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gICAgcmV0dXJuIGAke2RheU9mVGhlV2Vla30gJHttb250aH0gJHtkYXl9YFxuICB9XG5cbiAgY29udmVydFRlbXAodGVtcFNjYWxlLCBkZWdyZWUpIHtcbiAgICBsZXQgdGVtcFxuICAgIGlmICh0ZW1wU2NhbGUgPT09ICdjZWxzaXVzJykge1xuICAgICAgdGVtcCA9IChkZWdyZWUgLSAzMikgLyAoOSAvIDUpXG4gICAgfVxuICAgIGlmICh0ZW1wU2NhbGUgPT09ICdmYWhyZW5oZWl0Jykge1xuICAgICAgdGVtcCA9IGRlZ3JlZSAqIDEuOCArIDMyXG4gICAgfVxuICAgIHJldHVybiBNYXRoLnJvdW5kKHRlbXAgKiAxMCkgLyAxMFxuICB9XG5cbiAgY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICBjb25zdCBzdHJBcnIgPSBzdHJpbmcudHJpbSgpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKVxuICAgIGNvbnN0IGV2ZXJ5Rmlyc3RMZXR0ZXJDYXBTdHIgPSBzdHJBcnJcbiAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgICAuam9pbignICcpXG4gICAgcmV0dXJuIGV2ZXJ5Rmlyc3RMZXR0ZXJDYXBTdHJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXBwVXRpbHMgPSBuZXcgQXBwVXRpbHMoKVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZShmb3JlY2FzdCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2VhdGhlckFwcCcsIEpTT04uc3RyaW5naWZ5KGZvcmVjYXN0KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3ZWF0aGVyQXBwJykpXG59XG4iLCJpbXBvcnQgRm9yZWNhc3RTZXJ2aWNlIGZyb20gJy4uL2NvbnRhaW5lcnMvZm9yZWNhc3QuanMnXG5pbXBvcnQgeyBmb3JlY2FzdERpc3BsYXkgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZvcmVjYXN0RGlzcGxheS5qcydcbmltcG9ydCB7XG4gIGdldEZyb21Mb2NhbFN0b3JhZ2UsXG4gIHNhdmVUb0xvY2FsU3RvcmFnZSxcbn0gZnJvbSAnLi4vdXRpbHMvbG9jYWxTdG9yYWdlLmpzJ1xuY29uc3QgZXJyb3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcicpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuICBzdGF0aWMgc3dpdGNoVGltZVNjYWxlcyhldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnYnV0dG9uJykpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVGVtcFNjYWxlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGVtcFNjYWxlXG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13ZWVrbHktY2FyZC10ZW1wLXNjYWxlXScpXG4gICAgICBjb25zdCBjdXJyZW50U2NhbGVWYWx1ZSA9IGN1cnJlbnRFbC5kYXRhc2V0LndlZWtseUNhcmRUZW1wU2NhbGVcbiAgICAgIGlmIChjdXJyZW50U2NhbGVWYWx1ZSA9PT0gc2VsZWN0ZWRUZW1wU2NhbGUpIHJldHVyblxuICAgICAgZm9yZWNhc3REaXNwbGF5LnVwZGF0ZVRlbXBTY2FsZURpc3BsYXkoc2VsZWN0ZWRUZW1wU2NhbGUpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGRlZmF1bHREaXNwbGF5KHByZXZDaXR5ID0gJ05ldyBZb3JrJykge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBGb3JlY2FzdFNlcnZpY2UuZmV0Y2h3ZWVrbHkoeyBsb2NhdGlvbjogcHJldkNpdHkgfSlcbiAgICBjb25zdCBwYXJzZWRGb3JjYXN0RGF0YSA9IEZvcmVjYXN0U2VydmljZS5leHRyYWN0V2VhdGhlckRhdGEod2VhdGhlcilcbiAgICBwYXJzZWRGb3JjYXN0RGF0YS5wdXNoKHsgY2l0eTogcHJldkNpdHkgfSlcbiAgICBwYXJzZWRGb3JjYXN0RGF0YS5wdXNoKHsgc2NhbGU6ICdmYWhyZW5oZWl0JyB9KVxuICAgIGZvcmVjYXN0RGlzcGxheS5yZW5kZXJXZWF0aGVyRGF0YShwYXJzZWRGb3JjYXN0RGF0YSlcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UocGFyc2VkRm9yY2FzdERhdGEpXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZGlzcGxheVdlYXRoZXJGb3JMb2NhdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBlcnJvckVsLmlubmVyVGV4dCA9ICcnXG4gICAgY29uc3QgcHJldkNpdHkgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKClbN10uY2l0eVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpXG4gICAgbGV0IGNpdHlUb1NlYXJjaCA9IGlucHV0LnZhbHVlXG4gICAgdHJ5IHtcbiAgICAgIGlmIChjaXR5VG9TZWFyY2gubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5hbWUgY2FuJ3QgYmUgYmxhbmshXCIpXG4gICAgICB9XG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IEZvcmVjYXN0U2VydmljZS5mZXRjaHdlZWtseSh7XG4gICAgICAgIGxvY2F0aW9uOiBjaXR5VG9TZWFyY2gsXG4gICAgICB9KVxuICAgICAgY29uc3QgcGFyc2VkRm9yY2FzdERhdGEgPSBGb3JlY2FzdFNlcnZpY2UuZXh0cmFjdFdlYXRoZXJEYXRhKGZvcmVjYXN0KVxuICAgICAgcGFyc2VkRm9yY2FzdERhdGEucHVzaCh7IGNpdHk6IGNpdHlUb1NlYXJjaCB9KVxuICAgICAgcGFyc2VkRm9yY2FzdERhdGEucHVzaCh7IHNjYWxlOiAnZmFocmVuaGVpdCcgfSlcbiAgICAgIGZvcmVjYXN0RGlzcGxheS5yZW5kZXJXZWF0aGVyRGF0YShwYXJzZWRGb3JjYXN0RGF0YSlcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZShwYXJzZWRGb3JjYXN0RGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UubWF0Y2goJ0hUVFAnKSkge1xuICAgICAgICBlcnJvckVsLmlubmVyVGV4dCA9ICdJbnZhbGlkIHJlcXVlc3QhIFBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JFbC5pbm5lclRleHQgPSBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgICBhd2FpdCBBcHBDb250cm9sbGVyLmRlZmF1bHREaXNwbGF5KHByZXZDaXR5KVxuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9