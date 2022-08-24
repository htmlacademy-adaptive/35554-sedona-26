let modal = document.querySelectorAll('.modal');
let modalButton = document.querySelector('.modal__button');

modalButton.addEventListener('click', function () {
  if (modal.classList.contains('modal-close')) {
    modal.classList.remove('modal-close');
  } else {
    modal.classList.add('modal-close');
  }
})
