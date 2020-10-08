module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./antd.css":
/*!******************!*\
  !*** ./antd.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/index */ "./redux/index.js");
/* harmony import */ var _antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../antd.css */ "./antd.css");
/* harmony import */ var _antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antd_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\saad\\c4t-frontend-test\\find-the-pairs\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => __jsx(Component, _extends({}, pageProps, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 45
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (_redux_index__WEBPACK_IMPORTED_MODULE_1__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: changeNumberOfPairs, startGame, resetGame, shuffleCards, limitCards, duplicateCards, resetCards, flipAllCards, flipCard, changeWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNumberOfPairs", function() { return changeNumberOfPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGame", function() { return resetGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleCards", function() { return shuffleCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitCards", function() { return limitCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateCards", function() { return duplicateCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return resetCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipAllCards", function() { return flipAllCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipCard", function() { return flipCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeWidth", function() { return changeWidth; });
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");

function changeNumberOfPairs(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NUMBER_OF_PAIRS"],
    payload
  };
}
function startGame(paylaod) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["START_GAME"],
    payload
  };
}
function resetGame(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_GAME"],
    payload
  };
}
function shuffleCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE"],
    payload
  };
}
function limitCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["LIMIT_CARDS"],
    payload
  };
}
function duplicateCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"],
    payload
  };
}
function resetCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_CARDS"],
    payload
  };
}
function flipAllCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_ALL_CARDS"],
    payload
  };
}
function flipCard(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_CARD"],
    payload
  };
}
function changeWidth(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_WIDTH"],
    payload
  };
} // shuffle cards
// limit to the number of pairs
//    (limit the number of loops , dont delete)
// mirror cards
// shuffle cards

/***/ }),

/***/ "./redux/constants/action-types.js":
/*!*****************************************!*\
  !*** ./redux/constants/action-types.js ***!
  \*****************************************/
/*! exports provided: CHANGE_NUMBER_OF_PAIRS, START_GAME, SHUFFLE, LIMIT_CARDS, DUPLICATE_CARDS, RESET_CARDS, RESET_GAME, FLIP_ALL_CARDS, FLIP_CARD, CHANGE_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NUMBER_OF_PAIRS", function() { return CHANGE_NUMBER_OF_PAIRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_GAME", function() { return START_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHUFFLE", function() { return SHUFFLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT_CARDS", function() { return LIMIT_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_CARDS", function() { return DUPLICATE_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CARDS", function() { return RESET_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_GAME", function() { return RESET_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_ALL_CARDS", function() { return FLIP_ALL_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_CARD", function() { return FLIP_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_WIDTH", function() { return CHANGE_WIDTH; });
const CHANGE_NUMBER_OF_PAIRS = "CHANGE_NUMBER_OF_PAIRS";
const START_GAME = "START_GAME";
const SHUFFLE = "SHUFFLE";
const LIMIT_CARDS = "LIMIT_CARDS";
const DUPLICATE_CARDS = "DUPLICATE_CARDS";
const RESET_CARDS = "RESET_CARDS";
const RESET_GAME = "RESET_GAME";
const FLIP_ALL_CARDS = "FLIP_ALL_CARDS";
const FLIP_CARD = "FLIP_CARD";
const CHANGE_WIDTH = "CHANGE_WIDTH";

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ "./redux/reducers/index.js");


 // create a makeStore function

const makeStore = context => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"]); // export an assembled wrapper


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ "./redux/constants/action-types.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const clone = __webpack_require__(/*! rfdc */ "rfdc")();

const initialState = {
  width: 127,
  numberOfPairs: 6,
  numberOfFoundPairs: 0,
  numberOfAttempts: 0,
  isLoading: true,
  clickCounter: 0,
  matching: false,
  matchingCard: null,
  cards: [{
    src: "/images/pair-1.jpg",
    isActive: false
  }, {
    src: "/images/pair-2.jpg",
    isActive: false
  }, {
    src: "/images/pair-3.jpg",
    isActive: false
  }, {
    src: "/images/pair-4.jpg",
    isActive: false
  }, {
    src: "/images/pair-5.jpg",
    isActive: false
  }, {
    src: "/images/pair-6.jpg",
    isActive: false
  }, {
    src: "/images/pair-7.jpg",
    isActive: false
  }, {
    src: "/images/pair-8.jpg",
    isActive: false
  }, {
    src: "/images/pair-9.jpg",
    isActive: false
  }, {
    src: "/images/pair-10.jpg",
    isActive: false
  }, {
    src: "/images/pair-11.jpg",
    isActive: false
  }, {
    src: "/images/pair-12.jpg",
    isActive: false
  }, {
    src: "/images/pair-13.jpg",
    isActive: false
  }, {
    src: "/images/pair-14.jpg",
    isActive: false
  }, {
    src: "/images/pair-15.jpg",
    isActive: false
  }, {
    src: "/images/pair-16.jpg",
    isActive: false
  }, {
    src: "/images/pair-17.jpg",
    isActive: false
  }, {
    src: "/images/pair-18.jpg",
    isActive: false
  }, {
    src: "/images/pair-19.jpg",
    isActive: false
  }, {
    src: "/images/pair-20.jpg",
    isActive: false
  }, {
    src: "/images/pair-21.jpg",
    isActive: false
  }]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NUMBER_OF_PAIRS"]:
      let numberOfPairs = action.payload;
      return Object.assign({}, state, {
        numberOfPairs
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_WIDTH"]:
      let width = action.payload;
      return Object.assign({}, state, {
        width
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_GAME"]:
      {
        let numberOfPairs = state.numberOfPairs;
        return Object.assign({}, initialState, {
          numberOfPairs
        });
      }
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["START_GAME"]:
      return Object.assign({}, state, {
        isPlaying: true
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_CARDS"]:
      let initialCards = initialState.cards;
      return Object.assign({}, state, {
        cards: initialCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE"]:
      let array = state.cards;
      let len = array.length - 1;

      for (let i = len; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return Object.assign({}, state, {
        cards: [...array]
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["LIMIT_CARDS"]:
      let limitedCards = state.cards;
      limitedCards.splice(state.numberOfPairs);
      return Object.assign({}, state, {
        cards: [...limitedCards]
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"]:
      let duplicatedCards1 = clone(state.cards);
      let duplicatedCards2 = clone(state.cards);
      let newDuplicatedCards = [...duplicatedCards1, ...duplicatedCards2];
      newDuplicatedCards.forEach((el, index) => {
        el.index = index;
        el.isActive = true;
        el.match = false;
      });
      return Object.assign({}, state, {
        cards: newDuplicatedCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_ALL_CARDS"]:
      let flipedCards = state.cards;
      flipedCards.forEach((el, index) => {
        if (el.match === false) {
          el.isActive = false;
        } else if (el.match === true) {
          el.timed = false;
        }
      });
      return Object.assign({}, state, {
        cards: [...flipedCards],
        matching: false,
        isPlaying: true
      });

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_CARD"]:
      let flippedCardIndex = state.cards.findIndex(el => el.index === action.payload);
      let numberOfFoundPairs = state.numberOfFoundPairs;
      let allCards = clone(state.cards); // flip first card and remember it

      if (state.clickCounter === 0) {
        let newCounter = state.clickCounter;
        newCounter++;
        let allCards = clone(state.cards);
        allCards.forEach(el => {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        });
        let firstFlippedCard = allCards[flippedCardIndex];
        return Object.assign({}, state, {
          cards: [...allCards],
          clickCounter: newCounter,
          matchingCard: firstFlippedCard
        });
      } else if (state.clickCounter === 1) {
        let newCounter = 0;
        let numberOfAttempts = state.numberOfAttempts;
        numberOfAttempts++; // flip Second Card

        allCards.forEach(el => {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        }); // does the two cards match ?

        if (state.matchingCard.src === allCards[flippedCardIndex].src) {
          allCards.forEach(el => {
            if (el.src === state.matchingCard.src) {
              el.match = true;
              el.isActive = false;
              el.timed = true;
            }
          });
          numberOfFoundPairs++;
        }

        return Object.assign({}, state, {
          cards: [...allCards],
          clickCounter: newCounter,
          matching: true,
          matchingCard: initialState.matchingCard,
          numberOfFoundPairs,
          numberOfAttempts,
          isPlaying: false
        });
      } // flip second card and change match:true for both


      break;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rfdc":
/*!***********************!*\
  !*** external "rfdc" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rfdc");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJmZGNcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjaGFuZ2VOdW1iZXJPZlBhaXJzIiwicGF5bG9hZCIsInR5cGUiLCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTIiwic3RhcnRHYW1lIiwicGF5bGFvZCIsIlNUQVJUX0dBTUUiLCJyZXNldEdhbWUiLCJSRVNFVF9HQU1FIiwic2h1ZmZsZUNhcmRzIiwiU0hVRkZMRSIsImxpbWl0Q2FyZHMiLCJMSU1JVF9DQVJEUyIsImR1cGxpY2F0ZUNhcmRzIiwiRFVQTElDQVRFX0NBUkRTIiwicmVzZXRDYXJkcyIsIlJFU0VUX0NBUkRTIiwiZmxpcEFsbENhcmRzIiwiRkxJUF9BTExfQ0FSRFMiLCJmbGlwQ2FyZCIsIkZMSVBfQ0FSRCIsImNoYW5nZVdpZHRoIiwiQ0hBTkdFX1dJRFRIIiwibWFrZVN0b3JlIiwiY29udGV4dCIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJjbG9uZSIsInJlcXVpcmUiLCJpbml0aWFsU3RhdGUiLCJ3aWR0aCIsIm51bWJlck9mUGFpcnMiLCJudW1iZXJPZkZvdW5kUGFpcnMiLCJudW1iZXJPZkF0dGVtcHRzIiwiaXNMb2FkaW5nIiwiY2xpY2tDb3VudGVyIiwibWF0Y2hpbmciLCJtYXRjaGluZ0NhcmQiLCJjYXJkcyIsInNyYyIsImlzQWN0aXZlIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNQbGF5aW5nIiwiaW5pdGlhbENhcmRzIiwiYXJyYXkiLCJsZW4iLCJsZW5ndGgiLCJpIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJsaW1pdGVkQ2FyZHMiLCJzcGxpY2UiLCJkdXBsaWNhdGVkQ2FyZHMxIiwiZHVwbGljYXRlZENhcmRzMiIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImZvckVhY2giLCJlbCIsImluZGV4IiwibWF0Y2giLCJmbGlwZWRDYXJkcyIsInRpbWVkIiwiZmxpcHBlZENhcmRJbmRleCIsImZpbmRJbmRleCIsImFsbENhcmRzIiwibmV3Q291bnRlciIsImZpcnN0RmxpcHBlZENhcmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFF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LElBQVg7QUFDQUYsZ0JBQUUsQ0FBQ3ZCLFFBQUgsR0FBYyxLQUFkO0FBQ0F1QixnQkFBRSxDQUFDSSxLQUFILEdBQVcsSUFBWDtBQUNEO0FBQ0YsV0FORDtBQVFBbkMsNEJBQWtCO0FBQ25COztBQUVELGVBQU9ZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLEtBQWxCLEVBQXlCO0FBQzlCSCxlQUFLLEVBQUUsQ0FBQyxHQUFHZ0MsUUFBSixDQUR1QjtBQUU5Qm5DLHNCQUFZLEVBQUVvQyxVQUZnQjtBQUc5Qm5DLGtCQUFRLEVBQUUsSUFIb0I7QUFJOUJDLHNCQUFZLEVBQUVSLFlBQVksQ0FBQ1EsWUFKRztBQUs5QkwsNEJBTDhCO0FBTTlCQywwQkFOOEI7QUFPOUJhLG1CQUFTLEVBQUU7QUFQbUIsU0FBekIsQ0FBUDtBQVNELE9BN0RILENBK0RFOzs7QUFFQTs7QUFDRjtBQUNFLGFBQU9MLEtBQVA7QUFoSko7QUFrSkQ7O0FBRWNqQiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZRQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L2luZGV4XCI7XHJcbmltcG9ydCBcIi4uL2FudGQuY3NzXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCB7XHJcbiAgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBTVEFSVF9HQU1FLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG4gIEZMSVBfQ0FSRCxcclxuICBDSEFOR0VfV0lEVEgsXHJcbiAgUkVTRVRfR0FNRSxcclxuICBMSU1JVF9DQVJEUyxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU51bWJlck9mUGFpcnMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZShwYXlsYW9kKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogU1RBUlRfR0FNRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBSRVNFVF9HQU1FLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFNIVUZGTEUsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbWl0Q2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IExJTUlUX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGVDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRFVQTElDQVRFX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBSRVNFVF9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxpcEFsbENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBGTElQX0FMTF9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxpcENhcmQocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IEZMSVBfQ0FSRCwgcGF5bG9hZCB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VXaWR0aChwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQ0hBTkdFX1dJRFRILCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbi8vIHNodWZmbGUgY2FyZHNcclxuLy8gbGltaXQgdG8gdGhlIG51bWJlciBvZiBwYWlyc1xyXG4vLyAgICAobGltaXQgdGhlIG51bWJlciBvZiBsb29wcyAsIGRvbnQgZGVsZXRlKVxyXG4vLyBtaXJyb3IgY2FyZHNcclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4iLCJleHBvcnQgY29uc3QgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyA9IFwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSU1wiO1xyXG5leHBvcnQgY29uc3QgU1RBUlRfR0FNRSA9IFwiU1RBUlRfR0FNRVwiO1xyXG5leHBvcnQgY29uc3QgU0hVRkZMRSA9IFwiU0hVRkZMRVwiO1xyXG5leHBvcnQgY29uc3QgTElNSVRfQ0FSRFMgPSBcIkxJTUlUX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBEVVBMSUNBVEVfQ0FSRFMgPSBcIkRVUExJQ0FURV9DQVJEU1wiO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSRFMgPSBcIlJFU0VUX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9HQU1FID0gXCJSRVNFVF9HQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBGTElQX0FMTF9DQVJEUyA9IFwiRkxJUF9BTExfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IEZMSVBfQ0FSRCA9IFwiRkxJUF9DQVJEXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1dJRFRIID0gXCJDSEFOR0VfV0lEVEhcIjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciwgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBMSU1JVF9DQVJEUyxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbiAgQ0hBTkdFX1dJRFRILFxyXG4gIFJFU0VUX0dBTUUsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwicmZkY1wiKSgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHdpZHRoOiAxMjcsXHJcbiAgbnVtYmVyT2ZQYWlyczogNixcclxuICBudW1iZXJPZkZvdW5kUGFpcnM6IDAsXHJcbiAgbnVtYmVyT2ZBdHRlbXB0czogMCxcclxuICBpc0xvYWRpbmc6IHRydWUsXHJcbiAgY2xpY2tDb3VudGVyOiAwLFxyXG4gIG1hdGNoaW5nOiBmYWxzZSxcclxuICBtYXRjaGluZ0NhcmQ6IG51bGwsXHJcbiAgY2FyZHM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9wYWlyLTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci00LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9wYWlyLTUuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItNi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci03LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9wYWlyLTguanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItOS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xMC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xMS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xMi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xMy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xNC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xNS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xNi5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xNy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xOC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0xOS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0yMC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0yMS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTlVNQkVSX09GX1BBSVJTOlxyXG4gICAgICBsZXQgbnVtYmVyT2ZQYWlycyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBudW1iZXJPZlBhaXJzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9XSURUSDpcclxuICAgICAgbGV0IHdpZHRoID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0dBTUU6XHJcbiAgICAgIHtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZQYWlycyA9IHN0YXRlLm51bWJlck9mUGFpcnM7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZSwgeyBudW1iZXJPZlBhaXJzIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTVEFSVF9HQU1FOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNQbGF5aW5nOiB0cnVlIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVTRVRfQ0FSRFM6XHJcbiAgICAgIGxldCBpbml0aWFsQ2FyZHMgPSBpbml0aWFsU3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IGluaXRpYWxDYXJkcyB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNIVUZGTEU6XHJcbiAgICAgIGxldCBhcnJheSA9IHN0YXRlLmNhcmRzO1xyXG4gICAgICBsZXQgbGVuID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IGxlbjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4uYXJyYXldIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElNSVRfQ0FSRFM6XHJcbiAgICAgIGxldCBsaW1pdGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuXHJcbiAgICAgIGxpbWl0ZWRDYXJkcy5zcGxpY2Uoc3RhdGUubnVtYmVyT2ZQYWlycyk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgY2FyZHM6IFsuLi5saW1pdGVkQ2FyZHNdIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRFVQTElDQVRFX0NBUkRTOlxyXG4gICAgICBsZXQgZHVwbGljYXRlZENhcmRzMSA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczIgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICBsZXQgbmV3RHVwbGljYXRlZENhcmRzID0gWy4uLmR1cGxpY2F0ZWRDYXJkczEsIC4uLmR1cGxpY2F0ZWRDYXJkczJdO1xyXG4gICAgICBuZXdEdXBsaWNhdGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuaW5kZXggPSBpbmRleDtcclxuICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWwubWF0Y2ggPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogbmV3RHVwbGljYXRlZENhcmRzLFxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZMSVBfQUxMX0NBUkRTOlxyXG4gICAgICBsZXQgZmxpcGVkQ2FyZHMgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgZmxpcGVkQ2FyZHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsLm1hdGNoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsLm1hdGNoID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBlbC50aW1lZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGNhcmRzOiBbLi4uZmxpcGVkQ2FyZHNdLFxyXG4gICAgICAgIG1hdGNoaW5nOiBmYWxzZSxcclxuICAgICAgICBpc1BsYXlpbmc6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgY2FzZSBGTElQX0NBUkQ6XHJcbiAgICAgIGxldCBmbGlwcGVkQ2FyZEluZGV4ID0gc3RhdGUuY2FyZHMuZmluZEluZGV4KFxyXG4gICAgICAgIChlbCkgPT4gZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBsZXQgbnVtYmVyT2ZGb3VuZFBhaXJzID0gc3RhdGUubnVtYmVyT2ZGb3VuZFBhaXJzO1xyXG5cclxuICAgICAgbGV0IGFsbENhcmRzID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG4gICAgICAvLyBmbGlwIGZpcnN0IGNhcmQgYW5kIHJlbWVtYmVyIGl0XHJcbiAgICAgIGlmIChzdGF0ZS5jbGlja0NvdW50ZXIgPT09IDApIHtcclxuICAgICAgICBsZXQgbmV3Q291bnRlciA9IHN0YXRlLmNsaWNrQ291bnRlcjtcclxuICAgICAgICBuZXdDb3VudGVyKys7XHJcblxyXG4gICAgICAgIGxldCBhbGxDYXJkcyA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuXHJcbiAgICAgICAgYWxsQ2FyZHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgIGlmIChlbC5pbmRleCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZmlyc3RGbGlwcGVkQ2FyZCA9IGFsbENhcmRzW2ZsaXBwZWRDYXJkSW5kZXhdO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgY2FyZHM6IFsuLi5hbGxDYXJkc10sXHJcbiAgICAgICAgICBjbGlja0NvdW50ZXI6IG5ld0NvdW50ZXIsXHJcbiAgICAgICAgICBtYXRjaGluZ0NhcmQ6IGZpcnN0RmxpcHBlZENhcmQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUuY2xpY2tDb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSAwO1xyXG4gICAgICAgIGxldCBudW1iZXJPZkF0dGVtcHRzID0gc3RhdGUubnVtYmVyT2ZBdHRlbXB0cztcclxuICAgICAgICBudW1iZXJPZkF0dGVtcHRzKys7XHJcblxyXG4gICAgICAgIC8vIGZsaXAgU2Vjb25kIENhcmRcclxuICAgICAgICBhbGxDYXJkcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICBlbC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRvZXMgdGhlIHR3byBjYXJkcyBtYXRjaCA/XHJcbiAgICAgICAgaWYgKHN0YXRlLm1hdGNoaW5nQ2FyZC5zcmMgPT09IGFsbENhcmRzW2ZsaXBwZWRDYXJkSW5kZXhdLnNyYykge1xyXG4gICAgICAgICAgYWxsQ2FyZHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsLnNyYyA9PT0gc3RhdGUubWF0Y2hpbmdDYXJkLnNyYykge1xyXG4gICAgICAgICAgICAgIGVsLm1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBlbC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGVsLnRpbWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbnVtYmVyT2ZGb3VuZFBhaXJzKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4uYWxsQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgbWF0Y2hpbmc6IHRydWUsXHJcbiAgICAgICAgICBtYXRjaGluZ0NhcmQ6IGluaXRpYWxTdGF0ZS5tYXRjaGluZ0NhcmQsXHJcbiAgICAgICAgICBudW1iZXJPZkZvdW5kUGFpcnMsXHJcbiAgICAgICAgICBudW1iZXJPZkF0dGVtcHRzLFxyXG4gICAgICAgICAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZmxpcCBzZWNvbmQgY2FyZCBhbmQgY2hhbmdlIG1hdGNoOnRydWUgZm9yIGJvdGhcclxuXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZmRjXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=