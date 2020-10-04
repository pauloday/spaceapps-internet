/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/paul/code/spaceapps-internet/client/app.jsx: Unexpected token (3:1)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReact\\u001b[39m from \\u001b[32m'react'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReactDOM\\u001b[39m from \\u001b[32m'react-dom'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 3 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[36mimport\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m  \\u001b[33mBrowserRouter\\u001b[39m as \\u001b[33mRouter\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Object._raise (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:757:17)\\n    at Object.raiseWithData (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:750:17)\\n    at Object.raise (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:744:17)\\n    at Object.unexpected (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:8834:16)\\n    at Object.jsxParseIdentifier (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:4422:12)\\n    at Object.jsxParseNamespacedName (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:4432:23)\\n    at Object.jsxParseElementName (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:4443:21)\\n    at Object.jsxParseOpeningElementAt (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:4529:22)\\n    at Object.jsxParseElementAt (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:4562:33)\\n    at Object.jsxParseElement (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:4636:17)\\n    at Object.parseExprAtom (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:4643:19)\\n    at Object.parseExprSubscripts (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:9688:23)\\n    at Object.parseMaybeUnary (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:9668:21)\\n    at Object.parseExprOps (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:9538:23)\\n    at Object.parseMaybeConditional (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:9511:23)\\n    at Object.parseMaybeAssign (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:9466:21)\\n    at Object.parseExpression (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:9418:23)\\n    at Object.parseStatementContent (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:11339:23)\\n    at Object.parseStatement (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:11210:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:11785:25)\\n    at Object.parseBlockBody (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:11771:10)\\n    at Object.parseTopLevel (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:11141:10)\\n    at Object.parse (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:12843:10)\\n    at parse (/home/paul/code/spaceapps-internet/node_modules/@babel/parser/lib/index.js:12896:38)\\n    at parser (/home/paul/code/spaceapps-internet/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/paul/code/spaceapps-internet/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/paul/code/spaceapps-internet/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\");\n\n//# sourceURL=webpack:///./client/app.jsx?");

/***/ })

/******/ });