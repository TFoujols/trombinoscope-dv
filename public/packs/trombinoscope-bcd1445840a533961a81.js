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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/*!***********************************************!*\
  !*** ./app/javascript/packs/trombinoscope.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

const team = [{
  name: "Romain",
  lastName: "Bury",
  img: "romain.jpeg",
  job: "Consultant senior",
  sentence: "Texte de bury"
}, {
  name: "François",
  lastName: "De La Taste",
  img: "francois.jpeg",
  job: "Product Manager",
  sentence: "Je ne te cache pas que"
}, {
  name: "Alice",
  lastName: "Wu",
  img: "alice.jpeg",
  job: "Consultante senior",
  sentence: "Laisse la"
}, {
  name: "Morgane",
  lastName: "Veaute",
  img: "morgane.jpeg",
  job: "Consultante",
  sentence: "text morgane"
}, {
  name: "Marie",
  lastName: "Cointe",
  img: "marie.jpeg",
  job: "Consultante",
  sentence: "text marie"
}, {
  name: "Paul-Henri",
  lastName: "Magnien",
  img: "paul-henri.jpeg",
  job: "Directeur associé",
  sentence: "Je te cache pas qu'il y a encore un peu de travail..."
}, {
  name: "Abdellah",
  lastName: "Moutaçalli",
  img: "abdellah.jpeg",
  job: "Directeur associé",
  sentence: "La Reine des Neiges est merveilleuse !"
}, {
  name: "Arnaud",
  lastName: "De Baynast",
  img: "arnaud.jpeg",
  job: "Directeur général",
  sentence: "Non mais là faut être plus sérieux"
}, {
  name: "Arthur",
  lastName: "XXXXX",
  img: "arthur.jpeg",
  job: "Consultant",
  sentence: "Tellement STRRRAAAAT !"
}, {
  name: "Kevin",
  lastName: "Dreux",
  img: "kevin.jpeg",
  job: "Consultant senior",
  sentence: "Total c'est"
}, {
  name: "Nathalie",
  lastName: "Boyer",
  img: "nathalie.jpeg",
  job: "Contrôleuse de gestion",
  sentence: "J'en peux pluus !"
}];

// DOM items selection
const buttons = document.querySelectorAll(".button");
const photo = document.getElementById("colleague-photo");
const sentence = document.getElementById("colleague-sentence");
const job = document.getElementById("job");

// Get an aleatory number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Get an array of three aleatory numbers
function getRandomIntArray(max) {
  number1 = getRandomInt(max);
  number2 = getRandomInt(max);
  number3 = getRandomInt(max);
  return [number1, number2, number3];
}

// Shuffle an array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

// Display colleague DOM informations
function colleagueDisplay(colleague) {
  photo.src = `/assets/${colleague.img}`;
  photo.setAttribute("data-lastname", colleague.lastName);
  sentence.innerText = colleague.sentence;
  job.innerText = colleague.job;
}

// Update the buttons
function namesDisplay(colleague) {
  // Colleagues selection
  ids = getRandomIntArray(11);
  colleagues = shuffle([team[ids[0]], team[ids[1]], colleague]);
  // Update buttons
  let i = 0;
  buttons.forEach(function (button) {
    button.querySelector(".name").innerText = colleagues[i].name;
    button.querySelector(".last-name").innerText = colleagues[i].lastName;
    i++;
  });
}

// Dynamism when click ona button
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {

    // console.log(photo.dataset.lastname.toLowerCase());
    // console.log(this.querySelector(".last-name").innerText.toLowerCase());

    id = getRandomInt(11);
    colleague = team[id];
    colleagueDisplay(colleague);
    namesDisplay(colleague);
    //if (this.document.querySelector(".last-name").innerText.lowercase ==  ) {

    //}
  });
});

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

/******/ });
//# sourceMappingURL=trombinoscope-bcd1445840a533961a81.js.map