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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***********************************************!*\
  !*** ./app/javascript/packs/trombinoscope.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {


const buttons = document.querySelectorAll(".button");
// Top cities definition
const topCities = [["Londres, ", "LON", "GB", "Royaume-Uni"], ["Rome, ", "ROM", "IT", "Italie"], ["Barcelone, ", "BCN", "ES", "Espagne"], ["Istanbul, ", "IST", "TR", "Turquie"]];

buttons.forEach(function (button) {

  button.addEventListener('click', changeNames(button));
});

function changeNames() {
  name = document.querySelectorAll("p")[0].text;
  lastName = document.querySelectorAll("p")[1].text;
  console.log(name);
};

// function toggleButton () {
//   // Items selection
//   const toggleButton = document.getElementById("switch");
//   const priceView = document.querySelector(".weekends-container-price-view");
//   const calendarView = document.querySelector(".mobile-cards-container-parent");

//   const mobileButton = document.querySelector(".mobile-button-calendar-view");
//   const mobileButtonText = document.querySelector(".mobile-button-calendar-view h5");

//   // const viewType = document.querySelector(".toggle-button-view")


//   mobileButton.addEventListener('click', function() {
//     if(mobileButton.innerText.includes("date")) {
//       priceView.style.display = 'none';
//       calendarView.style.display = 'flex';
//       mobileButton.innerHTML = '<h5> <i class="fa fa-globe-americas"></i> Vue par destination </h5>'
//       // priceView.scrollIntoView({
//       //   behavior: 'smooth'
//       // });
//       // window.scrollBy({
//       //   top: -2000, // could be negative value
//       //   left: 0,
//       //   behavior: 'smooth'
//       // });
//     } else {
//       priceView.style.display = 'flex';
//       calendarView.style.display = 'none';
//       mobileButton.innerHTML = '<h5> <i class="fa fa-calendar"></i> Vue par date </h5>'
//       // calendarView.scrollIntoView({
//       //   behavior: 'smooth'
//       // });
//       // window.scrollBy({
//       //   top: -2000, // could be negative value
//       //   left: 0,
//       //   behavior: 'smooth'
//       // });
//     }
//   });

//   toggleButton.addEventListener('change', function() {
//       if(this.checked) {
//         priceView.style.display = 'none';
//         calendarView.style.display = 'flex';
//         // viewType.innerHTML = 'Par semaine <i class="fa fa-calendar"></i> </p>'
//       } else {
//         priceView.style.display = 'flex';
//         calendarView.style.display = 'none';
//         // viewType.innerHTML = 'Par prix <i class="fa fa-euro-sign"></i></p>'
//       }
//   });
// };

// export { toggleButton };

/***/ })
/******/ ]);
//# sourceMappingURL=trombinoscope-bf6d4de3d79647f4c975.js.map