'use strict';
/*
.player
.player-0
.player-1
.player--active
.player--0
.player--1
.name
#name--0, #name--1
.score
#score--0. #score--1
.current
.current-label
.current-score
.current--0
.current--1
.btn btn--new
.btn btn--roll
.btn--hold
*/

// SELECTING ELEMENTS
const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`);
const current0Element = document.getElementById(`current--0`);
const current1Element = document.getElementById(`current--1`);
const diceElement = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const scores = [0, 0];
const player0Element = document.querySelector(`.player--0`);
const player1Element = document.querySelector(`.player--1`);
let currentScore = 0;
let activePlayer = 0;

function switchPlayer() {
  // switch to next player - if 0 then make 1, else change to 0
  currentScore = currentScore + dice;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle(`player--active`);
  player1Element.classList.toggle(`player--active`);
}

// STARTING CONDITIONS
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add(`hidden`);

// ROLL DICE FUNCTIONALITY
btnRoll.addEventListener(`click`, function () {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  // display dice
  diceElement.classList.remove(`hidden`);
  diceElement.src = `dice-${dice}.png`;

  // check for rolled 1
  if (dice !== 1) {
    currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener(`click`, function () {
  // add current score
  // check score is already >= 100
  // finish game
  // if not swith players
  scores[activePlayer] = scores[activePlayer] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  activePlayer = activePlayer === 0 ? 1 : 0;
});

function endgame() {
  console.log(`GAME OVER!`);
  document.querySelector(`.btn--hold`).style.display = none;
  document.getElementById(`.btn--roll`).style.display = none;
}
