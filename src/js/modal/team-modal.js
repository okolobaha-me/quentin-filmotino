const refs = {
  openModalBtn: document.querySelector('[data-team-modal-open]'),
  closeModalBtn: document.querySelector('[data-team-modal-close]'),
  modal: document.querySelector('[data-team-modal]'),
  body: document.querySelector('body'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);

function onOpenModal() {
  refs.modal.classList.remove('is-hidden');
  bodyLock();

  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('click', onCheckClick);
}

function onCloseModal() {
  refs.modal.classList.add('is-hidden');
  bodyUnlock();

  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('click', onCheckClick);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onCheckClick(e) {
  if (e.target === refs.modal) {
    onCloseModal();
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - refs.body.offsetWidth + 'px';

  refs.body.style.paddingRight = lockPaddingValue;
  refs.body.classList.add('lock');
}

function bodyUnlock() {
  refs.body.style.paddingRight = '0px';
  refs.body.classList.remove('lock');
}
