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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*MENU HEADER*/
let btn = document.querySelector('.btn_mobile');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.icon-cancel');

function menuOpen(btn, menu) {
    btn.addEventListener('click', () => {
        menu.classList.add('active');
    });
}
menuOpen(btn, menu);
// function menuCansel(menuClose) {
//     menuClose.addEventListener('click', () => {
//         this.classList.toggle('active');
//     });
// }
// menuCansel(menuClose);


/*slider*/
// let sliderText = document.querySelectorAll('.slider_text');
// let sliderImg = document.querySelectorAll('.img');
// let yak = 0;
// let timer = null;
//
//
// function lastElem(arr, int, boll) {
//     if (boll) {
//         return (arr[int + 1]) ? int + 1 : 0;
//     } else {
//         return (arr[int - 1]) ? int - 1 : arr.length - 1;
//     }
// }
//
// function autoSlider(boll, int) {
//     for (let i = 0; i < sliderText.length; i++) {
//         sliderText[i].classList.remove('active');
//
//     }
//     for (let i = 0; i < sliderImg.length; i++) {
//         sliderImg[i].classList.remove('active');
//
//     }
//     if (arguments.length < 2) {
//         yak = lastElem( sliderText,sliderImg, yak, boll);
//         sliderText[yak].classList.add('active');
//         sliderImg[yak].classList.add('active');
//     }
//     else {
//         yak = int;
//         sliderText[int].classList.add('active');
//         sliderImg[int].classList.add('active');
//     }
// }
//
// function defult() {
//     timer = setInterval(() => {
//         autoSlider(true);
//     }, 5000);
// }
//
// sliderText[0].classList.add('active');
// sliderImg[0].classList.add('active');
//
// defult();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map