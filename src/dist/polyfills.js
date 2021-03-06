"use strict";
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
exports.__esModule = true;
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
require("core-js/es/symbol");
require("core-js/es/object");
require("core-js/es/function");
require("core-js/es/parse-int");
require("core-js/es/parse-float");
require("core-js/es/number");
require("core-js/es/math");
require("core-js/es/string");
require("core-js/es/date");
require("core-js/es/array");
require("core-js/es/regexp");
require("core-js/es/map");
require("core-js/es/set");
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
require("classlist.js"); // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
require("web-animations-js"); // Run `npm install --save webå-animations-js`.
/** Evergreen browsers require these. **/
require("core-js/es/reflect");
// import 'core-js/es7/reflect';
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
require("web-animations-js"); // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
