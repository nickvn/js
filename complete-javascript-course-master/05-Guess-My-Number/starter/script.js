'use strict';

console.log('/////// SELECTING AN ELEMENT ///////');
// console.log(document.querySelector('.message')); // shows entire <p class="...
// console.log(document.querySelector('.message').textContent); //just shows content inside on it

// console.log('/////// CHANGING AN ELEMENT ///////');
// //document.querySelector('.message').textContent = 'yay correct number';
// console.log(document.querySelector('.message').textContent); //just shows content inside on it
// document.querySelector('.number').textContent = 13; //set content in .number to 23
// document.querySelector('.score').textContent = 10; //set content in .score to 10
// document.querySelector('.guess').value = 23; //set content in .guess to 23
// console.log(document.querySelector('.guess').value); //view 23 on console

console.log('/////// CHANGING AN ELEMENT ON CLICK ///////');
//have to use an event listener like onclick
/*
Math.trunc() --- remove the decimals
Math.random() * 5 + 1 --- random number from 0 - 5
Number(xxxx) --- turn xxxx into an integer
typeof --- show type of variable
document.querySelector('.xxxx').textContent = 'yyyy' OR vairable --- find.xxxx and replace the content with yyyy
document.querySelector('.xxxx').addEventListener(click, function()) --- run the function on .xxxx click
document.querySelector('.xxxx').value); // get value of xxxx
console.log(document.querySelector('.guess').value); // show value of .guess input field

*/
let score = 20;
let secretnumber = Math.trunc(Math.random() * 20 + 1); // set random number in a variable
let highScore = 0;

//create a function to replace all the document.querySelector(`xxxx`).textContent = yyyy
function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  //on.check element, add click listener, create function
  console.log(document.querySelector('.guess').value); // show value of .guess input field

  displayMessage(`no match.`); // EXAMPLE // change text in .message to "no match"
  let guess = Number(document.querySelector('.guess').value); // set guess to the value of .guess and convert it to a number

  console.log(typeof guess); //print type of the varaible
  // short way of saying if guess   is not 0 since it's an integer / same as if guess !== 0
  //if (guess = 0 or false)
  if (!guess) {
    displayMessage(`no number`); // EXAMPLE; //set message to no number instead of yay!
  }
  //WHEN PLAYER WINS
  else if (guess === secretnumber) {
    // if the number chosen matches the given number

    displayMessage(`MATCH!`); // EXAMPLE; //show MATCH
    document.querySelector('body').style.background = `#ff0000`; // change background to red
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = secretnumber; //make the content of .number = the random number
    score++;
    //SET HIGH SCORES
    document.querySelector('.score').textContent = score;
    score > highScore ? (highScore = score) : (highScore = highScore);
    document.querySelector(`.highscore`).textContent = highScore;
  }
  //WHEN GUESS IS WRONG
  else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? `too high` : `too low`);
      score--;
      document.querySelector('.score').textContent = score;
    }
    //WHEN GAME OVER
    else document.querySelector('.message').textContent = 'you lost the game';
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(`body`).style.background = `#000`;
  displayMessage(`LETS GO AGAIN!!`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});

let score = 20; // declaring a variable

//creating a function to stop code repeatition
function displayMessage(xxxxxx) {
  document.querySelector(`.whateverClass`).textContent = xxxxxx;
}

document.querySelector('.check').addEventListener('click', function () {
  //on.check element, add click listener, create function
  console.log(document.querySelector('.guess').value); // show value of .guess input field

  displayMessage(`no match.`); // EXAMPLE // change text in .message to "no match"
  let guess = Number(document.querySelector('.guess').value); // set guess to the value of .guess and convert it to a number

  console.log(typeof guess); //print type of the varaible
  // short way of saying if guess   is not 0 since it's an integer / same as if guess !== 0
  //if (guess = 0 or false)
  if (!guess) {
    displayMessage(`no number`); // EXAMPLE; //set message to no number instead of yay!
  }
  //WHEN PLAYER WINS
  else if (guess === secretnumber) {
    // if the number chosen matches the given number

    displayMessage(`MATCH!`); // EXAMPLE; //show MATCH
    document.querySelector('body').style.background = `#ff0000`; // change background to red
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = secretnumber; //make the content of .number = the random number
    score++;
    //SET HIGH SCORES
    document.querySelector('.score').textContent = score;
    score > highScore ? (highScore = score) : (highScore = highScore);
    document.querySelector(`.highscore`).textContent = highScore;
  }
  //WHEN GUESS IS WRONG
  else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? `too high` : `too low`);
      score--;
      document.querySelector('.score').textContent = score;
    }
    //WHEN GAME OVER
    else document.querySelector('.message').textContent = 'you lost the game';
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(`body`).style.background = `#000`;
  displayMessage(`LETS GO AGAIN!!`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
