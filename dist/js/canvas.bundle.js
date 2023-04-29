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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "47624c61f6296a8076be12ba060174df.png");

/***/ }),

/***/ "./src/img/background2.png":
/*!*********************************!*\
  !*** ./src/img/background2.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4a5e305a8cf0a83554cdb6928f16912e.png");

/***/ }),

/***/ "./src/img/door.png":
/*!**************************!*\
  !*** ./src/img/door.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7fc8c80d18e73cc5ebc801be695f66a8.png");

/***/ }),

/***/ "./src/img/door2.png":
/*!***************************!*\
  !*** ./src/img/door2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7fc8c80d18e73cc5ebc801be695f66a8.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6e902050bf0ff785cb59f245550059d0.png");

/***/ }),

/***/ "./src/img/hills2.png":
/*!****************************!*\
  !*** ./src/img/hills2.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "347f82a94beababb2dc60b162572d08d.png");

/***/ }),

/***/ "./src/img/platform2.png":
/*!*******************************!*\
  !*** ./src/img/platform2.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "35e10ce50c6f1e86578383ba2bbfb1c1.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e494d981adb48f0f111b2848636940d5.png");

/***/ }),

/***/ "./src/img/platformSmallTall2.png":
/*!****************************************!*\
  !*** ./src/img/platformSmallTall2.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c7ab7ba86c726fe6b3d9340260786f3b.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_platform2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/platform2.png */ "./src/img/platform2.png");
/* harmony import */ var _img_hills2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/hills2.png */ "./src/img/hills2.png");
/* harmony import */ var _img_background2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/background2.png */ "./src/img/background2.png");
/* harmony import */ var _img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/platformSmallTall2.png */ "./src/img/platformSmallTall2.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_door_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/door.png */ "./src/img/door.png");
/* harmony import */ var _img_door2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/door2.png */ "./src/img/door2.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }















var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.2;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 5;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
        left: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_10__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        left: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
        cropWidth: 340,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right || this.currentSprite === this.sprites.stand.left)) this.frames = 0;else if (this.frames > 29 && (this.currentSprite === this.sprites.run.right || this.currentSprite === this.sprites.run.left)) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var doorImage = createImage(_img_door_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
var door2Image = createImage(_img_door2_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
var platformImage2 = createImage(_img_platform2_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var platformSmallTallImage2 = createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  doorImage = createImage(_img_door_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 200,
    y: 370,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300 - 2,
    y: 370,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 490 - 2,
    y: 370,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 600 - 2,
    y: 370,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 700 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 + 900 - 2,
    y: 370,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 + 1000 - 2,
    y: 270,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 10 + 600 - 2,
    y: 170,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 + 600 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 470,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 12 + 433 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 470,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 13 + 350 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 370,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 14 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 370,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 15 + 250 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 270,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 16 + 200 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 170,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 17 + 150 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 170,
    image: createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: platformImage.width * 18 + 300 - 2,
    y: 370,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new GenericObject({
    x: 7400,
    y: 180,
    image: createImage(_img_door_png__WEBPACK_IMPORTED_MODULE_12__["default"])
  })];
  scrollOffset = 0;
}

function init2() {
  door2Image = createImage(_img_door2_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
  platformImage2 = createImage(_img_platform2_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width2 * 4 + 300 - 2 + platformImage2.width - platformSmallTallImage2.width,
    y: 270,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: -1,
    y: 470,
    image: platformImage2
  }), new Platform({
    x: 950,
    y: 270,
    image: platformImage2
  }), new Platform({
    x: platformImage2.width - 3,
    y: 270,
    image: platformImage2
  }), new Platform({
    x: platformImage2.width * 3 + 20,
    y: 470,
    image: platformImage2
  }), new Platform({
    x: platformImage2.width * 4 + 0 - 2 + platformImage2.width - platformSmallTallImage2.width,
    y: 370,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 5 + 0 - 60 + platformImage2.width - platformSmallTallImage2.width,
    y: 270,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 6 + 0 - 90 + platformImage2.width - platformSmallTallImage2.width,
    y: 170,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 7 + 0 - 180 + platformImage2.width - platformSmallTallImage2.width,
    y: 70,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 8 + 20,
    y: 470,
    image: platformImage2
  }), new Platform({
    x: platformImage2.width * 9 + 220,
    y: 470,
    image: platformImage2
  }), new Platform({
    x: platformImage2.width * 10 + 0 + platformImage2.width - platformSmallTallImage2.width,
    y: 370,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 11 - 50 + platformImage2.width - platformSmallTallImage2.width,
    y: 270,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 12 + 0 - 120 + platformImage2.width - platformSmallTallImage2.width,
    y: 170,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 13 + 0 - 140 + platformImage2.width - platformSmallTallImage2.width,
    y: 470,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 14 - 200 + platformImage2.width - platformSmallTallImage2.width,
    y: 370,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  }), new Platform({
    x: platformImage2.width * 15 - 260 + platformImage2.width - platformSmallTallImage2.width,
    y: 270,
    image: createImage(_img_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_background2_png__WEBPACK_IMPORTED_MODULE_6__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_img_hills2_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new GenericObject({
    x: 5850,
    y: 180,
    image: createImage(_img_door2_png__WEBPACK_IMPORTED_MODULE_13__["default"])
  })];
  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (GenericObject) {
    GenericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (GenericObject) {
        GenericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (GenericObject) {
        GenericObject.position.x += player.speed * 0.66;
      });
    }
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  if (keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  if (scrollOffset > platformImage.width * 18 + 200 - 2) {
    init2();
  }

  if (player.position.x >= platformImage2.width * 15 - 260 + platformImage2.width - platformSmallTallImage2.width) {
    init();
  }

  if (player.position.y > canvas.height) {
    init();
  }

  if (player.position.x > _img_door_png__WEBPACK_IMPORTED_MODULE_12__["default"].x) {}
}

init();
animate();
addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  //console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 87:
      console.log('up');
      player.velocity.y -= 25;
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  //console.log(keyCode)
  switch (keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      break;

    case 87:
      console.log('up');
      break;
  } //console.log(keys.right.pressed)

});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map