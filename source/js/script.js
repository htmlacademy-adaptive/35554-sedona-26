let navMain = document.querySelector('.main-navigation');
let navMainVisible = document.querySelector('#visible');
let navMainInvisible = document.querySelector('#invisible');
let navMainList = document.querySelector('.main-navigation__list');
let navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMainVisible.classList.contains('main-navigation__icon--visible')) {
    navMainVisible.classList.remove('main-navigation__icon--visible');
    navMainVisible.classList.add('main-navigation__icon--invisible');
  } else {
    navMainVisible.classList.add('main-navigation__icon--visible');
    navMainVisible.classList.remove('main-navigation__icon--invisible')
  }
  if (navMainInvisible.classList.contains('main-navigation__icon--visible')) {
    navMainInvisible.classList.remove('main-navigation__icon--visible');
    navMainInvisible.classList.add('main-navigation__icon--invisible');
  } else {
    navMainInvisible.classList.add('main-navigation__icon--visible');
    navMainInvisible.classList.remove('main-navigation__icon--invisible')
  }
  navMainList.classList.toggle('main-navigation__list--visible')
});

// Modal

let modal = document.querySelector('.modal');
let modalCorrect = document.querySelector('.modal--correct')
let modalButton = document.querySelector('.modal__button');
let modalButtonCorrect = document.querySelector('.modal__button--correct');

modalButton.addEventListener('click', function () {
  modal.classList.add('modal-close');
});

modalButtonCorrect.addEventListener('click', function () {
  modalCorrect.classList.add('modal-close');
});
