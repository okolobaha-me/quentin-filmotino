const refs = {
  openModalCardBtn: document.querySelector('[data-modal-card-open]'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalCardBtn.addEventListener('click', e => {
  const cardItem = e.target.closest('.filmList__item');
  if (cardItem) {
    addModal();
  }
});
refs.openModalBtn.addEventListener('click', addModal);
refs.closeModalBtn.addEventListener('click', removeModal);

function addModal() {
  refs.modal.classList.remove('is-hidden');
}

function removeModal() {
  refs.modal.classList.add('is-hidden');
}
