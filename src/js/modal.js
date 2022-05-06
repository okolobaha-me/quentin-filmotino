// const refs = {
//   openModalCardBtn: document.querySelector('[data-modal-card-open]'),
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
//   modalCard: document.querySelector('[data-modal-card]'),
//   body: document.querySelector('body'),
// };

const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelectorAll('[data-modal-close]'),
};

refs.closeModalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const backdrop = btn.closest('[data-modal]');
    backdrop.classList.add('is-hidden');
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

    const backdrop = document.querySelector(btn.dataset.target);
    backdrop.classList.remove('is-hidden');
  });
});

// забрати можливість скролити
// табом проходитися
// однакова модалка
