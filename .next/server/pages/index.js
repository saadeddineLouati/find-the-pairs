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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Control.jsx":
/*!********************************!*\
  !*** ./components/Control.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\saad\\c4t-frontend-test\\find-the-pairs\\components\\Control.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"];


const menu = props => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(127);
      props.changeNumberOfPairs(6);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "6 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(127);
      props.changeNumberOfPairs(8);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "8 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(102);
      props.changeNumberOfPairs(10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "10 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(12);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "12 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(15);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "15 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(18);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "18 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(73.42);
      props.changeNumberOfPairs(21);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "21 pairs"));
};

function gameStatus(props) {
  const tryString = props.numberOfAttempts === 1 ? "try" : "tries";

  if (props.numberOfAttempts > 0) {
    return __jsx(StyledStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, "Tries: ", props.numberOfAttempts);
  } else {
    return __jsx(StyledStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 12
      }
    }, "Tries: ", 0);
  }
}

function Control(props) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, {
    animate: {
      scale: [1, 1.1, 1.2, 1.1, 1],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"]
    },
    transition: {
      duration: 0.5,
      delay: 1.4
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, "Score", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }), __jsx("span", {
      style: {
        marginLeft: '10px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, __jsx("b", {
      style: {
        color: '#2094fc'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, " ", props.numberOfFoundPairs || 0), " / ", props.numberOfPairs)), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }), __jsx("small", {
      style: {
        fontSize: '10px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, gameStatus(props))),
    bordered: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx(Title, {
    level: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "Options")), "Size: ", __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      width: '98px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, props.numberOfPairs, " pairs")), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      display: "block",
      marginTop: "20px"
    },
    type: "primary",
    size: "small",
    onClick: () => {
      props.resetGame();
      props.resetCards();
      props.shuffleCards();
      props.limitCards();
      props.duplicateCards();
      props.shuffleCards();
      setTimeout(() => {
        props.flipAllCards();
      }, 1500);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "Restart")));
}

const mapStateToProps = state => ({
  numberOfPairs: state.numberOfPairs,
  numberOfFoundPairs: state.numberOfFoundPairs,
  numberOfAttempts: state.numberOfAttempts
});

const mapDispatchToProps = dispatch => ({
  changeNumberOfPairs: number => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeNumberOfPairs"])(number)),
  changeWidth: width => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeWidth"])(width)),
  resetGame: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["resetGame"])()),
  resetCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["resetCards"])()),
  shuffleCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["shuffleCards"])()),
  duplicateCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["duplicateCards"])()),
  limitCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["limitCards"])()),
  flipAllCards: () => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["flipAllCards"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Control));
const ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Control__ControlContainer",
  componentId: "sc-1irs44c-0"
})(["position:relative;top:25%;transform:translateY(-25%);background:white;"]);
const StyledStatus = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "Control__StyledStatus",
  componentId: "sc-1irs44c-1"
})(["display:block;"]);

/***/ }),

/***/ "./components/Grid.jsx":
/*!*****************************!*\
  !*** ./components/Grid.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/constants/action-types */ "./redux/constants/action-types.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/index */ "./redux/actions/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\saad\\c4t-frontend-test\\find-the-pairs\\components\\Grid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Grid(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();
    setTimeout(() => {
      props.flipAllCards();
    }, 5000);
  }, [props.numberOfPairs]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.matching) {
      setTimeout(() => {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.numberOfFoundPairs === props.numberOfPairs) {
      setTimeout(() => {
        // alert("YOU WIN ");
        // setGameOver(true)
        antd__WEBPACK_IMPORTED_MODULE_6__["Modal"].success({
          content: 'Congrats, you WIN'
        });
      }, 500);
    }
  }, [props.numberOfFoundPairs]);
  return (//   grid Item
    __jsx(GridContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }
    }, props.cards.map((el, index) => {
      // matching  and isActive
      // matching and notActive
      if (el.isActive || el.timed) {
        return __jsx(ImageWrapper, {
          color: "#bbb",
          width: props.width,
          key: "div" + index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: el.src + index,
          "data-index": el.index,
          src: el.src,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }
        }));
      } else if (el.match) {
        return __jsx(ImageWrapper, {
          color: "transparent",
          width: props.width,
          key: "div" + index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }
        });
      } else {
        return __jsx(ImageWrapper2, {
          color: "#2094fc",
          width: props.width,
          key: "div" + index,
          onClick: () => {
            if (!props.matching) {
              props.flipCard(el.index);
            }
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }
        }, __jsx("h1", {
          style: {
            color: 'white',
            fontSize: '49px',
            padding: '15%'
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }
        }, "?"));
      }
    }))
  );
}

const mapStateToProps = state => ({
  numberOfPairs: state.numberOfPairs,
  numberOfAttempts: state.numberOfAttempts,
  numberOfFoundPairs: state.numberOfFoundPairs,
  cards: state.cards,
  clickCounter: state.clickCounter,
  matching: state.matching,
  width: state.width,
  matching: state.matching
});

const mapDispatchToProps = dispatch => ({
  shuffleCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["SHUFFLE"]
  }),
  limitCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["LIMIT_CARDS"]
  }),
  duplicateCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["DUPLICATE_CARDS"]
  }),
  resetCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["RESET_CARDS"]
  }),
  flipAllCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FLIP_ALL_CARDS"]
  }),
  flipCard: index => dispatch(Object(_redux_actions_index__WEBPACK_IMPORTED_MODULE_5__["flipCard"])(index))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Grid)); // ---------------------------------

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Grid__GridContainer",
  componentId: "dn76fs-0"
})(["width:641px;height:100vh;margin:0 auto;text-align:center;display:table-cell;"]);
const fade = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
const flipHorizontalBottom = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:rotateY(0);}to{transform:rotateY(-360deg);}"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Grid__ImageWrapper",
  componentId: "dn76fs-1"
})(["display:inline-block;margin-right:5px;margin-top:5px;width:", ";height:", ";background-color:", ";filter:drop-shadow(0px 0px 1px grey);border-radius:3px;overflow:hidden;animation:", " 0.7s linear;img,.blank{width:", ";height:", ";padding:1px;}"], props => props.width + "px", props => props.width + "px", props => props.color, fade, props => props.width + "px", props => props.width + "px");
const ImageWrapper2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Grid__ImageWrapper2",
  componentId: "dn76fs-2"
})(["display:inline-block;margin-right:5px;margin-top:5px;width:", ";height:", ";background-color:", ";filter:drop-shadow(0px 0px 1px grey);border-radius:3px;overflow:hidden;-webkit-animation:", " 0.7s cubic-bezier(0.455,0.030,0.515,0.955) both;animation:", " 0.7s cubic-bezier(0.455,0.030,0.515,0.955) both;img,.blank{width:", ";height:", ";padding:1px;}"], props => props.width + "px", props => props.width + "px", props => props.color, flipHorizontalBottom, flipHorizontalBottom, props => props.width + "px", props => props.width + "px");
ImageWrapper.defaultProps = {
  width: 125
};
ImageWrapper2.defaultProps = {
  width: 125
};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Control */ "./components/Control.jsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Grid */ "./components/Grid.jsx");
/* harmony import */ var _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/constants/action-types */ "./redux/constants/action-types.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "E:\\saad\\c4t-frontend-test\\find-the-pairs\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_2__["Typography"];

const {
  Content,
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];


function App(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    style: {
      width: "100%",
      margin: "0 auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].Typography, {
    style: {
      textAlignLast: "center"
    },
    animate: {
      scale: [1, 1.1, 1.2, 1.1, 1]
    },
    transition: {
      duration: 0.5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Find the pairs")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "center",
    align: "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
    animate: {
      scale: [1, 1.1, 1]
    },
    transition: {
      duration: 0.5,
      delay: 0.7
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_components_Control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }))));
}

const mapStateToProps = state => ({
  cards: state.cards,
  numberOfPairs: state.numberOfPairs
});

const mapDispatchToProps = dispatch => ({
  limitCards: () => dispatch({
    type: _redux_constants_action_types__WEBPACK_IMPORTED_MODULE_6__["LIMIT_CARDS"]
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

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

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cm9sLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJUaXRsZSIsIlR5cG9ncmFwaHkiLCJtZW51IiwicHJvcHMiLCJjaGFuZ2VXaWR0aCIsImNoYW5nZU51bWJlck9mUGFpcnMiLCJnYW1lU3RhdHVzIiwidHJ5U3RyaW5nIiwibnVtYmVyT2ZBdHRlbXB0cyIsIkNvbnRyb2wiLCJzY2FsZSIsImJvcmRlclJhZGl1cyIsImR1cmF0aW9uIiwiZGVsYXkiLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJudW1iZXJPZkZvdW5kUGFpcnMiLCJudW1iZXJPZlBhaXJzIiwiZm9udFNpemUiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJyZXNldEdhbWUiLCJyZXNldENhcmRzIiwic2h1ZmZsZUNhcmRzIiwibGltaXRDYXJkcyIsImR1cGxpY2F0ZUNhcmRzIiwic2V0VGltZW91dCIsImZsaXBBbGxDYXJkcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJudW1iZXIiLCJjb25uZWN0IiwiQ29udHJvbENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFN0YXR1cyIsInAiLCJHcmlkIiwidXNlRWZmZWN0IiwibWF0Y2hpbmciLCJNb2RhbCIsInN1Y2Nlc3MiLCJjb250ZW50IiwiY2FyZHMiLCJtYXAiLCJlbCIsImluZGV4IiwiaXNBY3RpdmUiLCJ0aW1lZCIsInNyYyIsIm1hdGNoIiwiZmxpcENhcmQiLCJwYWRkaW5nIiwiY2xpY2tDb3VudGVyIiwidHlwZSIsIlNIVUZGTEUiLCJMSU1JVF9DQVJEUyIsIkRVUExJQ0FURV9DQVJEUyIsIlJFU0VUX0NBUkRTIiwiRkxJUF9BTExfQ0FSRFMiLCJHcmlkQ29udGFpbmVyIiwiZmFkZSIsImtleWZyYW1lcyIsImZsaXBIb3Jpem9udGFsQm90dG9tIiwiSW1hZ2VXcmFwcGVyIiwiSW1hZ2VXcmFwcGVyMiIsImRlZmF1bHRQcm9wcyIsIkNvbnRlbnQiLCJTaWRlciIsIkxheW91dCIsIkFwcCIsIm1hcmdpbiIsInRleHRBbGlnbkxhc3QiLCJwYXlsb2FkIiwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyIsInN0YXJ0R2FtZSIsInBheWxhb2QiLCJTVEFSVF9HQU1FIiwiUkVTRVRfR0FNRSIsIkZMSVBfQ0FSRCIsIkNIQU5HRV9XSURUSCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlD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QUFHLFNBQWhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1vQixVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNbkIsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1vQixTQUFTLEdBQUcsV0FBbEI7QUFFQSxNQUFNQyxZQUFZLEdBQUcsY0FBckIsQzs7Ozs7Ozs7Ozs7QUNWUCxpQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgY2hhbmdlTnVtYmVyT2ZQYWlycyxcclxuICBjaGFuZ2VXaWR0aCxcclxuICByZXNldEdhbWUsXHJcbiAgcmVzZXRDYXJkcyxcclxuICBzaHVmZmxlQ2FyZHMsXHJcbiAgbGltaXRDYXJkcyxcclxuICBkdXBsaWNhdGVDYXJkcyxcclxuICBmbGlwQWxsQ2FyZHMsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgTWVudSwgQnV0dG9uLCBEcm9wZG93biwgQ2FyZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuXHJcbmNvbnN0IG1lbnUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCgxMjcpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycyg2KTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgNiBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDEyNyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA4IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoMTAyKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxMCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTIpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxMiBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxNSBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDg1LjMzKTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMTgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAxOCBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDczLjQyKTtcclxuXHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDIxKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgMjEgcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdhbWVTdGF0dXMocHJvcHMpIHtcclxuICBjb25zdCB0cnlTdHJpbmcgPSBwcm9wcy5udW1iZXJPZkF0dGVtcHRzID09PSAxID8gXCJ0cnlcIiA6IFwidHJpZXNcIjtcclxuICBpZiAocHJvcHMubnVtYmVyT2ZBdHRlbXB0cyA+IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRTdGF0dXM+XHJcbiAgICAgICAgey8qIHtwcm9wcy5udW1iZXJPZkZvdW5kUGFpcnN9L3twcm9wcy5udW1iZXJPZlBhaXJzfSAqL31cclxuICAgICAgICBUcmllczoge3Byb3BzLm51bWJlck9mQXR0ZW1wdHN9XHJcbiAgICAgICAgey8qIHt0cnlTdHJpbmd9LiAqL31cclxuICAgICAgPC9TdHlsZWRTdGF0dXM+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPFN0eWxlZFN0YXR1cz5cclxuICAgICAgVHJpZXM6IHswfVxyXG4gICAgPC9TdHlsZWRTdGF0dXM+O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLjEsIDEuMiwgMS4xLCAxXSxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFtcIjIwJVwiLCBcIjIwJVwiLCBcIjUwJVwiLCBcIjUwJVwiLCBcIjIwJVwiXSxcclxuICAgICAgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogMS40IH19XHJcbiAgICA+XHJcblxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIFNjb3JlXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGIgc3R5bGU9e3sgY29sb3I6ICcjMjA5NGZjJyB9fT4ge3Byb3BzLm51bWJlck9mRm91bmRQYWlycyB8fCAwfTwvYj4gLyB7cHJvcHMubnVtYmVyT2ZQYWlyc31cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBmb250U2l6ZTogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIHtnYW1lU3RhdHVzKHByb3BzKX1cclxuICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH0gYm9yZGVyZWQ9e2ZhbHNlfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSA+XHJcbiAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezV9PlxyXG4gICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgU2l6ZTogPERyb3Bkb3duIG92ZXJsYXk9e21lbnUocHJvcHMpfSBwbGFjZW1lbnQ9XCJib3R0b21DZW50ZXJcIiA+XHJcbiAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnOThweCcgfX0+e3Byb3BzLm51bWJlck9mUGFpcnN9IHBhaXJzPC9CdXR0b24+XHJcbiAgICAgICAgPC9Ecm9wZG93bj5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5yZXNldEdhbWUoKTtcclxuICAgICAgICAgICAgcHJvcHMucmVzZXRDYXJkcygpO1xyXG4gICAgICAgICAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuICAgICAgICAgICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgICAgICAgICBwcm9wcy5kdXBsaWNhdGVDYXJkcygpO1xyXG4gICAgICAgICAgICBwcm9wcy5zaHVmZmxlQ2FyZHMoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHByb3BzLmZsaXBBbGxDYXJkcygpO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVzdGFydFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIG51bWJlck9mRm91bmRQYWlyczogc3RhdGUubnVtYmVyT2ZGb3VuZFBhaXJzLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IHN0YXRlLm51bWJlck9mQXR0ZW1wdHMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGNoYW5nZU51bWJlck9mUGFpcnM6IChudW1iZXIpID0+IGRpc3BhdGNoKGNoYW5nZU51bWJlck9mUGFpcnMobnVtYmVyKSksXHJcbiAgY2hhbmdlV2lkdGg6ICh3aWR0aCkgPT4gZGlzcGF0Y2goY2hhbmdlV2lkdGgod2lkdGgpKSxcclxuICByZXNldEdhbWU6ICgpID0+IGRpc3BhdGNoKHJlc2V0R2FtZSgpKSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaChyZXNldENhcmRzKCkpLFxyXG4gIHNodWZmbGVDYXJkczogKCkgPT4gZGlzcGF0Y2goc2h1ZmZsZUNhcmRzKCkpLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaChkdXBsaWNhdGVDYXJkcygpKSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaChsaW1pdENhcmRzKCkpLFxyXG4gIGZsaXBBbGxDYXJkczogKCkgPT4gZGlzcGF0Y2goZmxpcEFsbENhcmRzKCkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvbnRyb2wpO1xyXG5jb25zdCBDb250cm9sQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyNSU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkU3RhdHVzID0gc3R5bGVkLnBgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBMSU1JVF9DQVJEUyxcclxuICBTSFVGRkxFLFxyXG4gIERVUExJQ0FURV9DQVJEUyxcclxuICBSRVNFVF9DQVJEUyxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbn0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5cclxuaW1wb3J0IHsgZmxpcENhcmQgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9pbmRleFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgIH0sIDUwMDApO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5tYXRjaGluZ10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLm51bWJlck9mRm91bmRQYWlycyA9PT0gcHJvcHMubnVtYmVyT2ZQYWlycykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBhbGVydChcIllPVSBXSU4gXCIpO1xyXG4gICAgICAgIC8vIHNldEdhbWVPdmVyKHRydWUpXHJcbiAgICAgICAgTW9kYWwuc3VjY2Vzcyh7XHJcbiAgICAgICAgICBjb250ZW50OiAnQ29uZ3JhdHMsIHlvdSBXSU4nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5udW1iZXJPZkZvdW5kUGFpcnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vICAgZ3JpZCBJdGVtXHJcbiAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAge3Byb3BzLmNhcmRzLm1hcCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgLy8gbWF0Y2hpbmcgIGFuZCBpc0FjdGl2ZVxyXG4gICAgICAgIC8vIG1hdGNoaW5nIGFuZCBub3RBY3RpdmVcclxuICAgICAgICBpZiAoZWwuaXNBY3RpdmUgfHwgZWwudGltZWQpIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVdyYXBwZXIgY29sb3I9XCIjYmJiXCIgd2lkdGg9e3Byb3BzLndpZHRofSBrZXk9e1wiZGl2XCIgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2VsLnNyYyArIGluZGV4fSBkYXRhLWluZGV4PXtlbC5pbmRleH0gc3JjPXtlbC5zcmN9IC8+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVsLm1hdGNoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgICAgICAgIGtleT17XCJkaXZcIiArIGluZGV4fVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8L0ltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVdyYXBwZXIyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjMjA5NGZjXCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5mbGlwQ2FyZChlbC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzQ5cHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzE1JSdcclxuICAgICAgICAgICAgICB9fT4/PC9oMT5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXIyPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IHN0YXRlLm51bWJlck9mQXR0ZW1wdHMsXHJcbiAgbnVtYmVyT2ZGb3VuZFBhaXJzOiBzdGF0ZS5udW1iZXJPZkZvdW5kUGFpcnMsXHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIGNsaWNrQ291bnRlcjogc3RhdGUuY2xpY2tDb3VudGVyLFxyXG4gIG1hdGNoaW5nOiBzdGF0ZS5tYXRjaGluZyxcclxuICB3aWR0aDogc3RhdGUud2lkdGgsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzaHVmZmxlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogU0hVRkZMRSB9KSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IERVUExJQ0FURV9DQVJEUyB9KSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUX0NBUkRTIH0pLFxyXG4gIGZsaXBBbGxDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGTElQX0FMTF9DQVJEUyB9KSxcclxuICBmbGlwQ2FyZDogKGluZGV4KSA9PiBkaXNwYXRjaChmbGlwQ2FyZChpbmRleCkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyaWQpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2NDFweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbmA7XHJcblxyXG5jb25zdCBmYWRlID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZmxpcEhvcml6b250YWxCb3R0b20gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMzYwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XHJcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggMXB4IGdyZXkpO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYW5pbWF0aW9uOiAke2ZhZGV9IDAuN3MgbGluZWFyO1xyXG5cclxuICBpbWcsXHJcbiAgLmJsYW5rIHtcclxuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gICAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlcjIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XHJcbiAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggMXB4IGdyZXkpO1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblx0LXdlYmtpdC1hbmltYXRpb246ICR7ZmxpcEhvcml6b250YWxCb3R0b219IDAuN3MgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzMCwgMC41MTUsIDAuOTU1KSBib3RoO1xyXG5cdCAgICAgICAgYW5pbWF0aW9uOiAke2ZsaXBIb3Jpem9udGFsQm90dG9tfSAwLjdzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMzAsIDAuNTE1LCAwLjk1NSkgYm90aDtcclxuXHJcbiAgaW1nLFxyXG4gIC5ibGFuayB7XHJcbiAgICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICAgIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLndpZHRoICsgXCJweFwifTtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuSW1hZ2VXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogMTI1LFxyXG59O1xyXG5cclxuSW1hZ2VXcmFwcGVyMi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6IDEyNSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IENvbCwgTGF5b3V0LCBSb3csIFR5cG9ncmFwaHkgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgQ29udHJvbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250cm9sXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCIuLi9jb21wb25lbnRzL0dyaWRcIjtcclxuY29uc3QgeyBUaXRsZSB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmltcG9ydCB7IExJTUlUX0NBUkRTIH0gZnJvbSBcIi4uL3JlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuY29uc3QgeyBDb250ZW50LCBTaWRlciB9ID0gTGF5b3V0O1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcblxyXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cclxuICAgICAgPG1vdGlvbi5UeXBvZ3JhcGh5IHN0eWxlPXt7IHRleHRBbGlnbkxhc3Q6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICBzY2FsZTogWzEsIDEuMSwgMS4yLCAxLjEsIDFdLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGl0bGU+XHJcbiAgICAgICAgICBGaW5kIHRoZSBwYWlyc1xyXG4gICAgICAgICAgPC9UaXRsZT5cclxuICAgICAgPC9tb3Rpb24uVHlwb2dyYXBoeT5cclxuICAgICAgPFJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJ0b3BcIj5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgICAgIHNjYWxlOiBbMSwgMS4xLCAxXSxcclxuICAgICAgICAgICAgfX0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogMC43IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxHcmlkIC8+XHJcbiAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPENvbnRyb2wgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogTElNSVRfQ0FSRFMgfSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcclxuIiwiaW1wb3J0IHtcclxuICBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIFNUQVJUX0dBTUUsXHJcbiAgRkxJUF9BTExfQ0FSRFMsXHJcbiAgRkxJUF9DQVJELFxyXG4gIENIQU5HRV9XSURUSCxcclxuICBSRVNFVF9HQU1FLFxyXG4gIExJTUlUX0NBUkRTLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTnVtYmVyT2ZQYWlycyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogQ0hBTkdFX05VTUJFUl9PRl9QQUlSUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKHBheWxhb2QpIHtcclxuICByZXR1cm4geyB0eXBlOiBTVEFSVF9HQU1FLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWUocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFJFU0VUX0dBTUUsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGVDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogU0hVRkZMRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGltaXRDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogTElNSVRfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGR1cGxpY2F0ZUNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBEVVBMSUNBVEVfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFJFU0VUX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwQWxsQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IEZMSVBfQUxMX0NBUkRTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwQ2FyZChwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRkxJUF9DQVJELCBwYXlsb2FkIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVdpZHRoKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBDSEFOR0VfV0lEVEgsIHBheWxvYWQgfTtcclxufVxyXG5cclxuLy8gc2h1ZmZsZSBjYXJkc1xyXG4vLyBsaW1pdCB0byB0aGUgbnVtYmVyIG9mIHBhaXJzXHJcbi8vICAgIChsaW1pdCB0aGUgbnVtYmVyIG9mIGxvb3BzICwgZG9udCBkZWxldGUpXHJcbi8vIG1pcnJvciBjYXJkc1xyXG4vLyBzaHVmZmxlIGNhcmRzXHJcbiIsImV4cG9ydCBjb25zdCBDSEFOR0VfTlVNQkVSX09GX1BBSVJTID0gXCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTXCI7XHJcbmV4cG9ydCBjb25zdCBTVEFSVF9HQU1FID0gXCJTVEFSVF9HQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTSFVGRkxFID0gXCJTSFVGRkxFXCI7XHJcbmV4cG9ydCBjb25zdCBMSU1JVF9DQVJEUyA9IFwiTElNSVRfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IERVUExJQ0FURV9DQVJEUyA9IFwiRFVQTElDQVRFX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJEUyA9IFwiUkVTRVRfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IFJFU0VUX0dBTUUgPSBcIlJFU0VUX0dBTUVcIjtcclxuZXhwb3J0IGNvbnN0IEZMSVBfQUxMX0NBUkRTID0gXCJGTElQX0FMTF9DQVJEU1wiO1xyXG5leHBvcnQgY29uc3QgRkxJUF9DQVJEID0gXCJGTElQX0NBUkRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfV0lEVEggPSBcIkNIQU5HRV9XSURUSFwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==