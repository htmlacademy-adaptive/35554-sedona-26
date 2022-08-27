let navMainVisible = document.querySelector('#visible');
let navMainInvisible = document.querySelector('#invisible');
let navMainList = document.querySelector('.main-navigation__list');
let navToggle = document.querySelector('.main-navigation__toggle');

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
