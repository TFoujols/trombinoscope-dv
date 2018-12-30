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

const loadingDiv = document.getElementById("loading-container");
const gameDiv = document.getElementById("game-container");
const title1 = document.querySelector(".header h1");
const title2 = document.querySelector(".header h2");

setTimeout(function () {
  title2.classList.add('visible');
}, 1100);

setTimeout(function () {
  title1.classList.add('visible');
}, 1400);

setTimeout(function () {
  loadingDiv.parentNode.removeChild(loadingDiv);

  gameDiv.classList.add('visible');
}, 1400);

const team = [{
  name: "Romain",
  lastName: "Bury",
  img: "romain.jpeg",
  job: "Senior Consultant",
  sentence: "Texte de bury",
  id: 0
}, {
  name: "François",
  lastName: "de la Taste",
  img: "francois.jpeg",
  job: "Product Manager",
  sentence: "Je ne te cache pas que",
  id: 1
}, {
  name: "Alice",
  lastName: "Wu",
  img: "alice.jpeg",
  job: "Senior Consultant",
  sentence: "Laisse la",
  id: 2
}, {
  name: "Morgane",
  lastName: "Veaute",
  img: "morgane.jpeg",
  job: "Consultant",
  sentence: "text morgane",
  id: 3
}, {
  name: "Marie",
  lastName: "Cointe",
  img: "marie.jpeg",
  job: "Consultant",
  sentence: "text marie",
  id: 4
}, {
  name: "Paul-Henri",
  lastName: "Magnien",
  img: "paul-henri.jpeg",
  job: "Associate Director",
  sentence: "Je te cache pas qu'il y a encore un peu de travail...",
  id: 5
}, {
  name: "Abdellah",
  lastName: "Moutaçalli",
  img: "abdellah.jpeg",
  job: "Associate Director",
  sentence: "La Reine des Neiges est merveilleuse !",
  id: 6
}, {
  name: "Arnaud",
  lastName: "de Baynast",
  img: "arnaud.jpeg",
  job: "CEO",
  sentence: "Non mais là faut être plus sérieux",
  id: 7
}, {
  name: "Arthur",
  lastName: "Legrand",
  img: "arthur.jpeg",
  job: "Consultant",
  sentence: "Tellement STRRRAAAAT !",
  id: 8
}, {
  name: "Kevin",
  lastName: "Dreux",
  img: "kevin.jpeg",
  job: "Senior Consultant",
  sentence: "Total c'est",
  id: 9
}, {
  name: "Nathalie",
  lastName: "Boyer",
  img: "nathalie.jpeg",
  job: "Financial Controller",
  sentence: "J'en peux pluus !",
  id: 10
}, {
  name: "Rodolphe",
  lastName: "Trancart",
  img: "rodolphe.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !",
  id: 11
}, {
  name: "Sacha",
  lastName: "Bellaiche",
  img: "sacha.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !",
  id: 12
}, {
  name: "Tanguy",
  lastName: "Foujols",
  img: "tanguy.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !",
  id: 13
}, {
  name: "Thibaut",
  lastName: "Barondeau",
  img: "thibaut.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !",
  id: 14
}, {
  name: "Tristan",
  lastName: "Puech",
  img: "tristan.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !",
  id: 15
}, {
  name: "Xudong",
  lastName: "Zhang",
  img: "xudong.jpeg",
  job: "Consultant",
  sentence: "J'en peux pluus !",
  id: 16
}, {
  name: "Sophie-Laetitia",
  lastName: "Roux",
  img: "sophie-laetitia.jpeg",
  job: "Senior Consultant",
  sentence: "J'en peux pluus !",
  id: 17
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
const scoreSpan = document.getElementById("modal-score");
//const forgottenColleaguesImg = document.querySelectorAll(".forgotten-colleagues .photo");
const forgottenColleaguesDiv = document.querySelector(".forgotten-colleagues");
//const endModal = document.getElementById("endModal");
const retryButtons = document.querySelectorAll(".retry");

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
  photo.setAttribute("data-id", colleague.id);
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

function initialize() {
  teamPop = team;
  round = 1;
  score = 0;
  forgottenColleagues = [];
  uniqueForgottenColleagues = [];
  // Colleague selection
  colleague = selectColleague(teamPop);
  // Display the new colleague
  colleagueDisplay(colleague);
  // Display the new buttons
  namesDisplay(colleague);
  // Display the round
  compteurNumber.innerText = round;
  scoreDisplay(score);
  // Remove the displayed colleague
  teamPop = teamPop.filter(function (e) {
    return e !== colleague;
  });
}

function startgame() {
  // Initialize the game
  teamPop = team;
  round = 1;
  score = 0;
  forgottenColleagues = [];
  uniqueForgottenColleagues = [];
  // Colleague selection
  colleague = selectColleague(teamPop);
  // Display the new colleague
  colleagueDisplay(colleague);
  // Display the new buttons
  namesDisplay(colleague);
  // Display the round
  compteurNumber.innerText = round;
  scoreDisplay(score);
  // Remove the displayed colleague
  teamPop = teamPop.filter(function (e) {
    return e !== colleague;
  });

  // Dynamism when click on a button
  buttons.forEach(function (button) {
    button.addEventListener('click', function earnPoint(e) {

      colleagueId = photo.dataset.id;
      colleagueName = photo.dataset.lastname.toLowerCase();
      nameClicked = this.querySelector(".last-name").innerText.toLowerCase();

      if (colleagueName == nameClicked) {

        if (round < team.length) {
          round++;
          score++;
          scoreDisplay(score);
          compteurNumber.innerText = round;

          teamPop = teamPop.filter(function (e) {
            return e !== colleague;
          });

          // Colleague selection
          colleague = selectColleague(teamPop);
          // Display the new colleague
          colleagueDisplay(colleague);
          // Display the new buttons
          namesDisplay(colleague);

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
          });

          // Point animation
          this.querySelector('.point').innerText = '+1';
          this.querySelector('.point').classList.add('positive', 'display');
          setTimeout(function () {
            button.querySelector('.point').classList.remove('positive', 'display');
          }, 800);
        } else {
          // Last score implementation
          score++;
          scoreDisplay(score);
          // Display of the final modal
          this.setAttribute("data-toggle", "modal");
          if (score == team.length) {
            this.setAttribute("data-target", "#endPerfectModal");
          } else {
            // Display score
            scoreSpan.innerText = score;

            // Display forgotten colleagues
            uniqueForgottenColleagues = shuffle(Array.from(new Set(forgottenColleagues)));

            uniqueForgottenColleagues.forEach(function (id) {
              colleague = team[id];
              forgottenColleaguesDiv.innerHTML += `<div class="forgotten-colleague"><img class="photo" src="/assets/${colleague.img}"><p class="name"> ${colleague.name} </p></div>`;
            });

            // Display the modal
            this.setAttribute("data-target", "#endModal");
          }
          setTimeout(function () {
            button.removeAttribute("data-toggle");
            button.removeAttribute("data-target");
          }, 300);
          // Restart the game
          setTimeout(function () {
            initialize();
          }, 800);
        } // End of first ifelse
      } else {
        // Decrementing score
        score--;
        scoreDisplay(score);

        // Shaking button
        this.classList.add('shake');
        setTimeout(function () {
          button.classList.remove('shake');
        }, 300);

        // Save the forgotten colleague
        forgottenColleagues.push(colleagueId);
        console.log(forgottenColleagues);

        // Point animation
        this.querySelector('.point').innerText = '-1';
        this.querySelector('.point').classList.add('negative', 'display');
        setTimeout(function () {
          button.querySelector('.point').classList.remove('negative', 'display');
        }, 800);
      }
    });
  });
}

// Start the game
let teamPop = team;
let round = 1;
let score = 0;
let forgottenColleagues = [];
let uniqueForgottenColleagues = [];
startgame();
// Restart the game on click
retryButtons.forEach(function (retryButton) {
  retryButton.addEventListener('click', function (e) {
    initialize();
    // Clean the end modal
    forgottenColleaguesDiv.innerHTML = '';
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
//# sourceMappingURL=trombinoscope-8be21efe082d2c4fe453.js.map