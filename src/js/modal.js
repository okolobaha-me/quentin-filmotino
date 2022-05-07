const refs = {
  openModalButtons: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelectorAll('[data-modal-close]'),
  modals: document.querySelectorAll('[data-modal]'),
  body: document.querySelector('body'),
  team: document.querySelector('.modal-team'),
  film: document.querySelector('.film-modal'),
};

// function closeModal(){

//   refs.closeModalBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const backdrop = btn.closest('[data-modal]');
//       backdrop.classList.add('is-hidden');
//       bodyUnlock();
//     });
//   });

//   window.onclick = event => {
//     refs.modals.forEach(modal => {
//       if (event.target === modal) {
//         if (!modal.classList.contains('is-hidden')) {
//           modal.classList.add('is-hidden');
//           bodyUnlock();
//         }
//       }
//     });
//   };

//   function onKeypress(e) {
//     if (e.code === 'Escape') {
//       refs.modals.forEach(modal => {
//         if (!modal.classList.contains('is-hidden')) {
//           modal.classList.add('is-hidden');
//           bodyUnlock();
//         }
//       });
//     }
//   }
// }

refs.closeModalBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const backdrop = btn.closest('[data-modal]');
    backdrop.classList.add('is-hidden');
    bodyUnlock();
  });
});

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

function openModal(button) {
  const backdrop = document.querySelector(button.dataset.target);
  backdrop.classList.remove('is-hidden');
  bodyLock();
}

window.onclick = event => {
  refs.modals.forEach(modal => {
    if (event.target === modal) {
      if (!modal.classList.contains('is-hidden')) {
        modal.classList.add('is-hidden');
        bodyUnlock();
      }
    }
  });
};

function bodyLock() {
  const lockPaddingValue = window.innerWidth - refs.body.offsetWidth + 'px';

  // refs.modals.forEach(modal => {
  //   if (!modal.classList.contains('is-hidden')) {
  //     modal.style.paddingRight = lockPaddingValue;
  //   }
  // });
  refs.team.style.paddingRight = lockPaddingValue;
  // refs.film.style.paddingRight = lockPaddingValue;

  refs.body.style.paddingRight = lockPaddingValue;
  refs.body.classList.add('lock');
}

function bodyUnlock() {
  // refs.modals.forEach(modal => {
  //   if (modal.classList.contains('is-hidden')) {
  //     modal.style.paddingRight = '0px';
  //   }
  // });
  refs.team.style.paddingRight = '0px';
  // refs.film.style.paddingRight = '0px';

  refs.body.style.paddingRight = '0px';
  refs.body.classList.remove('lock');
}

window.addEventListener('keydown', onKeypress);

function onKeypress(e) {
  if (e.code === 'Escape') {
    refs.modals.forEach(modal => {
      if (!modal.classList.contains('is-hidden')) {
        modal.classList.add('is-hidden');
        bodyUnlock();
      }
    });
  }
}

// добавити клас lock і залишити id="team-modal" почистити слухача
// 64 рядочки
