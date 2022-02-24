'use strict';

// functions                    ---
// document.querySelector()     ---
// document.querySelectorAll()  ---
// console.log()                ---

function selectModal(something) {}
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
// multiple items with that class so loads them all into btnsOpenModal as an array

// no need for { } because just one statement follows
// btnsOpenModal.length = 3 because there are 3 elements with the class .show-modal
// for every one of them, print the text content of it to the console (Show Modal *whatever number*)

// OPEN MODAL
const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

// CLOSE MODAL
const closeModal = function closeModal() {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// CLOSING WITH ESC KEY
document.addEventListener(`keydown`, function (anyName) {
  if (anyName.key === `Escape` && !modal.classList.contains(`hidden`)) {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
  }
});
