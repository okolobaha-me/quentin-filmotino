const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelectorAll('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

refs.closeModalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const backdrop = btn.closest('[data-modal]');
    backdrop.classList.add('is-hidden');
    bodyUnlock();
  });
});

refs.openModalBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    if (btn.nodeName === 'UL') {
      const cardItem = e.target.closest('.filmList__item');

      if (!cardItem) {
        return;
      }
    }
    bodyLock();
    const backdrop = document.querySelector(btn.dataset.target);
    backdrop.classList.remove('is-hidden');
  });
});

window.onclick = event => {
  if (event.target === refs.modal) {
    refs.modal.classList.add('is-hidden');
    bodyUnlock();
  }
};

function bodyLock() {
  // const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  // refs.body.style.paddingRight = lockPaddingValue;
  refs.body.classList.add('lock');
}

function bodyUnlock() {
  // refs.body.style.paddingRight = '0px';
  refs.body.classList.remove('lock');
}
