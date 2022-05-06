const refs = {
  openModalCardBtn: document.querySelector('[data-modal-card-open]'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalCard: document.querySelector('[data-modal-card]'),
  body: document.querySelector('body'),
};

const values = Object.values(refs);

if (!values.includes(null)) {
  refs.openModalCardBtn.addEventListener('click', e => {
    const cardItem = e.target.closest('.filmList__item');
    if (cardItem) {
      refs.modalCard.classList.remove('is-hidden');
      // addModal();
    }
  });
  refs.openModalBtn.addEventListener('click', addModal);
  refs.closeModalBtn.addEventListener('click', removeModal);

  function addModal() {
    // if (refs.modal) {
    refs.modal.classList.remove('is-hidden');
    // }
  }

  function removeModal() {
    // if (refs.modal) {
    refs.modal.classList.add('is-hidden');
    // }
  }
}

// function bodyLock() {
//   const lockPaddingValue = window.innerWidth - modal.offsetWidth + 'px';
// }

// забрати можливість скролити
// табом проходитися
// однакова модалка
