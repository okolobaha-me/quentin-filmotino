const refs = {
  openModalButtons: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelectorAll('[data-modal-close]'),
  modals: document.querySelectorAll('[data-modal]'),
  body: document.querySelector('body'),
};

window.addEventListener('keydown', onKeypress);

refs.openModalButtons.forEach(button => {
  button.addEventListener('click', e => {
    if (button.nodeName === 'UL') {
      const cardItem = e.target.closest('.filmList__item');

      if (!cardItem) {
        return;
      }
    }
    openModal(button);
  });
});

refs.closeModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    refs.modals.forEach(modal => {
      if (modal === button.closest('[data-modal]')) {
        closeModal(modal);
      }
    });
  });
});

window.onclick = e => {
  refs.modals.forEach(modal => {
    if (e.target === modal) {
      if (!modal.classList.contains('is-hidden')) {
        closeModal(modal);
      }
    }
  });
};

function onKeypress(e) {
  if (e.code === 'Escape') {
    refs.modals.forEach(modal => {
      if (!modal.classList.contains('is-hidden')) {
        closeModal(modal);
      }
    });
  }
}

function openModal(button) {
  const modal = document.querySelector(button.dataset.target);
  modal.classList.remove('is-hidden');
  bodyLock();
}

function closeModal(modal) {
  modal.classList.add('is-hidden');
  bodyUnlock();
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
