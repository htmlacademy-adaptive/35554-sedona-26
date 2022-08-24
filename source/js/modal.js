let modal = document.querySelector('.modal');
let modalCorrect = document.querySelector('.modal--correct')
let modalButton = document.querySelector('.modal__button');
let modalButtonCorrect = document.querySelector('.modal__button--correct');

modalButton.addEventListener('click', function () {
  modal.classList.add('modal-close');
})

modalButtonCorrect.addEventListener('click', function () {
  modalCorrect.classList.add('modal-close');
})

