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
  lastName: "de la Taste",
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
  lastName: "de Baynast",
  img: "arnaud.jpeg",
  job: "Directeur général",
  sentence: "Non mais là faut être plus sérieux"
}, {
  name: "Arthur",
  lastName: "Legrand",
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
}, {
  name: "Rodolphe",
  lastName: "Trancart",
  img: "rodolphe.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !"
}, {
  name: "Sacha",
  lastName: "Bellaiche",
  img: "sacha.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !"
}, {
  name: "Tanguy",
  lastName: "Foujols",
  img: "tanguy.png",
  job: "Consultant",
  sentence: "J'en peux pluus !"
}, {
  name: "Thibaut",
  lastName: "Barondeau",
  img: "thibaut.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !"
}, {
  name: "Tristan",
  lastName: "Puech",
  img: "tristan.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !"
}, {
  name: "Xudong",
  lastName: "Zhang",
  img: "xudong.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !"
}, {
  name: "Sophie-Laetitia",
  lastName: "Roux",
  img: "sophie-laetitia.jpeg",
  job: "Consultante senior",
  sentence: "J'en peux pluus !"
}];

// DOM items selection
const buttons = document.querySelectorAll(".button");
let photo = document.getElementById("colleague-photo");
const sentence = document.getElementById("colleague-sentence");
const job = document.getElementById("job");
const trombi = document.querySelector(".trombi");
const trombiBlock1 = document.getElementById("trombi-block-1");
const compteurNumber = document.getElementById("compteur-number");
const scoreDiv = document.getElementById("score");

// Get an aleatory number
function getRandomInt(max, idToAVoid) {
  randomInt = Math.floor(Math.random() * Math.floor(max));
  while (randomInt == idToAVoid) {
    randomInt = Math.floor(Math.random() * Math.floor(max));
  }
  return randomInt;
}

// Get an array of three aleatory numbers
function getRandomIntArray(max, colleague) {
  idToAvoid = team.indexOf(colleague);

  number1 = getRandomInt(max, idToAvoid);
  number2 = getRandomInt(max, idToAvoid);
  number3 = getRandomInt(max, idToAvoid);
  while (number1 == number2) {
    number2 = getRandomInt(max, idToAvoid);
  }
  while (number3 == number2 || number3 == number1) {
    number3 = getRandomInt(max, idToAvoid);
  }
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

// Function to display the new colleague
function colleagueDisplay(colleague) {
  photo.src = `/assets/${colleague.img}`;
  photo.setAttribute("data-lastname", colleague.lastName);
  sentence.innerText = colleague.sentence;
  job.innerText = colleague.job;
}

// Function to display the new buttons
function namesDisplay(colleague) {
  // Colleagues selection
  ids = getRandomIntArray(team.length, colleague);
  colleagues = shuffle([team[ids[0]], team[ids[1]], team[ids[2]], colleague]);
  // Update buttons
  let i = 0;
  buttons.forEach(function (button) {
    button.querySelector(".name").innerText = colleagues[i].name;
    button.querySelector(".last-name").innerText = colleagues[i].lastName;
    i++;
  });
}

function scoreDisplay(score) {
  scoreDiv.innerText = score;
}

function selectColleague(team) {
  id = getRandomInt(team.length, -1);
  colleague = team[id];
  return colleague;
}

let teamPop = team;
let round = 1;
let score = 0;
// Dynamism when click on a button
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {

    colleagueName = photo.dataset.lastname.toLowerCase();
    nameClicked = this.querySelector(".last-name").innerText.toLowerCase();

    if (colleagueName == nameClicked) {
      if (round != team.length) {
        // Colleague selection
        colleague = selectColleague(teamPop);
        // Display the new colleague
        colleagueDisplay(colleague);
        // Display the new buttons
        namesDisplay(colleague);
        teamPop = teamPop.filter(function (e) {
          return e !== colleague;
        });
        round++;
        score++;
        scoreDisplay(score);
        compteurNumber.innerText = round;

        ///////////////
        // ANIMATION //
        ///////////////

        // New colleague animation
        trombiBlock1.classList.add('fadein');
        setTimeout(function () {
          trombiBlock1.classList.remove('fadein');
        }, 600);

        // Button animation
        this.classList.add('pulse');
        setTimeout(function () {
          button.classList.remove('pulse');
        }, 600);

        // Name and last name animations
        names = document.querySelectorAll(".name");
        lastNames = document.querySelectorAll(".last-name");

        names.forEach(function (name) {
          name.classList.add('fadein');
          setTimeout(function () {
            name.classList.remove('fadein');
          }, 600);
        });

        lastNames.forEach(function (lastName) {
          lastName.classList.add('fadein');
          setTimeout(function () {
            lastName.classList.remove('fadein');
          }, 600);

          // Point animation
          this.querySelector('.point').classList.add('display');
          setTimeout(function () {
            button.classList.remove('display');
          }, 600);
        });
      } else {}
      // Implementer la logique de fin de jeu
      // End of first ifelse
    } else {
      // Decrementing score
      score--;
      scoreDisplay(score);
      // Shaking button
      this.classList.add('shake');
      setTimeout(function () {
        button.classList.remove('shake');
      }, 300);
    }
  });
});

// id = getRandomInt(11);
// colleague = team[id];
// colleagueDisplay(colleague);
// namesDisplay(colleague);


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
//# sourceMappingURL=trombinoscope-558deee20ac129ee6396.js.map