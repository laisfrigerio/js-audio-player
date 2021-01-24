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
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/scripts/audios.js":
/*!*************************************!*\
  !*** ./resources/scripts/audios.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar basePath = '../audios';\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Rolling in the deep',\n  image: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png',\n  isSingle: true,\n  song: \"\".concat(basePath, \"/21/rolling-in-the-deep-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Rumor has it',\n  image: null,\n  isSingle: true,\n  song: \"\".concat(basePath, \"/21/rumor-has-it-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Set fire to the rain',\n  image: null,\n  isSingle: true,\n  song: \"\".concat(basePath, \"/21/set-fire-to-the-rain-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Someone like you',\n  image: null,\n  isSingle: true,\n  song: \"\".concat(basePath, \"/21/someone-like-you-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Hello',\n  image: null,\n  isSingle: true,\n  song: \"\".concat(basePath, \"/25/adele-hello.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'All I ask',\n  image: null,\n  isSingle: false,\n  song: \"\".concat(basePath, \"/25/all-i-ask-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'I miss you',\n  image: null,\n  isSingle: false,\n  song: \"\".concat(basePath, \"/25/i-miss-you-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Love in the dark',\n  image: null,\n  isSingle: false,\n  song: \"\".concat(basePath, \"/25/love-in-the-dark-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Million Years ago',\n  image: null,\n  isSingle: false,\n  song: \"\".concat(basePath, \"/25/million-years-ago-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Remedy',\n  image: null,\n  isSingle: false,\n  song: \"\".concat(basePath, \"/25/remedy-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'River lea',\n  image: null,\n  isSingle: false,\n  song: \"\".concat(basePath, \"/25/river-lea-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Send My Love (to Your new Lover)',\n  image: null,\n  isSingle: true,\n  song: \"\".concat(basePath, \"/25/send-my-love-to-your-new-lover-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Sweestest devotion',\n  image: null,\n  isSingle: false,\n  song: \"\".concat(basePath, \"/25/sweetest-devotion-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'Water under the bridge',\n  image: null,\n  isSingle: true,\n  song: \"\".concat(basePath, \"/25/water-under-the-bridge-adele.mp3\")\n}, {\n  album: '21',\n  author: 'Adele',\n  year: '2011',\n  title: 'When we are young',\n  image: null,\n  isSingle: true,\n  song: \"\".concat(basePath, \"/25/when-we-were-young-adele.mp3\")\n}]);\n\n//# sourceURL=webpack:///./resources/scripts/audios.js?");

/***/ }),

/***/ "./resources/scripts/index.js":
/*!************************************!*\
  !*** ./resources/scripts/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _audios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audios */ \"./resources/scripts/audios.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./resources/scripts/player.js\");\n\n\nvar player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_audios__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nplayer.start();\n\n//# sourceURL=webpack:///./resources/scripts/index.js?");

/***/ }),

/***/ "./resources/scripts/player.js":
/*!*************************************!*\
  !*** ./resources/scripts/player.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./resources/scripts/variables.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\n * Class Player\n */\n\nvar Player = /*#__PURE__*/function () {\n  /**\n   * Receive data audio\n   * @method constructor\n   */\n  function Player(data) {\n    _classCallCheck(this, Player);\n\n    this.data = data;\n\n    if (Array.isArray(data) && data.length > 0) {\n      this.current = data[0];\n    }\n\n    this.audio = document.querySelector(_variables__WEBPACK_IMPORTED_MODULE_0__[\"audio\"]);\n    this.cardImage = document.querySelector(_variables__WEBPACK_IMPORTED_MODULE_0__[\"cardImage\"]);\n    this.songAuthor = document.querySelector(_variables__WEBPACK_IMPORTED_MODULE_0__[\"songAuthor\"]);\n    this.songName = document.querySelector(_variables__WEBPACK_IMPORTED_MODULE_0__[\"songName\"]);\n  }\n  /**\n   * Play next song of track list\n   * @method next\n   */\n\n\n  _createClass(Player, [{\n    key: \"next\",\n    value: function next() {}\n    /**\n     * Stop audio\n     * @method pause\n     */\n\n  }, {\n    key: \"pause\",\n    value: function pause() {}\n    /**\n     * Start audio\n     * @method play\n     */\n\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.audio.load();\n      this.audio.play();\n    }\n    /**\n     * Play previous song of track list\n     * @method previous\n     */\n\n  }, {\n    key: \"previous\",\n    value: function previous() {}\n    /**\n     * Initialize the player with first song of data audio (song, author name, song name, etc)\n     * @method start\n     */\n\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.audio.setAttribute('src', this.current.song);\n      this.songAuthor.innerText = this.current.author;\n      this.songName.innerText = this.current.title;\n\n      if (this.current.image) {\n        this.cardImage.setAttribute('src', this.current.image);\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/scripts/player.js?");

/***/ }),

/***/ "./resources/scripts/variables.js":
/*!****************************************!*\
  !*** ./resources/scripts/variables.js ***!
  \****************************************/
/*! exports provided: audio, cardImage, songAuthor, songName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"audio\", function() { return audio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cardImage\", function() { return cardImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"songAuthor\", function() { return songAuthor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"songName\", function() { return songName; });\nvar audio = \"#audio\";\nvar cardImage = \"#card-image\";\nvar songAuthor = \"#song-author\";\nvar songName = \"#song-name\";\n\n//# sourceURL=webpack:///./resources/scripts/variables.js?");

/***/ })

/******/ });