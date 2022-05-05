const refs = {
  openModalCardBtn: document.querySelector('[data-modal-card-open]'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalCardBtn.addEventListener('click', e => {
  const cardItem = e.target.closest('.filmList__item');
  if (cardItem) {
    toggleModal();
  }
});
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
