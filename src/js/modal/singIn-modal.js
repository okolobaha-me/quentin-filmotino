const refs = {
  modal: document.querySelector('[data-singin-modal]'),
  body: document.querySelector('body'),
  signInBtn: document.querySelector('.signIn'),
};

refs.signInBtn.addEventListener('click', onOpenModal);

function onOpenModal() {
  bodyLock();

  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('click', onCheckClick);
}

export function onCloseModal() {
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
