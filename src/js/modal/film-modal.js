import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Api from '../API/api-service';
// import {checkQueueFilmById} from '../firebase/listenersCallback/checkQueueFilmById';
// import {checkWatchedFilmById} from '../firebase/listenersCallback/checkWatchedFilmById';
// import {onAddToQueueBtn} from '../firebase/listenersCallback/onAddToQueueBtn';
// import {onAddToWatchedBtn} from '../firebase/listenersCallback/onAddToWatchedBtn';
// import {onRemoveFromQueue} from '../firebase/listenersCallback/onRemoveFromQueue';
// import {onRemoveFromWatched} from '../firebase/listenersCallback/onRemoveFromWatched';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const api = new Api();

const refs = {
  openModalCards: document.querySelector('[data-film-modal-open]'),
  modal: document.querySelector('[data-film-modal]'),
  body: document.querySelector('body'),
};

refs.openModalCards.addEventListener('click', onCheckClickUl);

function onCheckClickUl(e) {
  const cardItem = e.target.closest('.filmList__item');

  if (!cardItem) {
    return;
  }

  const id = cardItem.id;

  onOpenModal(id);
}

async function onOpenModal(id) {
  api
    .getFilmById({ id })
    .then(renderModal)
    .then(() => {
      refs.modal.classList.remove('is-hidden');
      bodyLock();

      window.addEventListener('keydown', onEscKeyPress);
      window.addEventListener('click', onCheckClickBody);
      addListenerToCloseBtn();
      // checkFilm(id);
    });
  // .catch(() => Notify.info("Unfortunately, this movie hasn't description yet"));
}

// function checkFilm(id) {
//   const isWatched = checkWatchedFilmById(id);
//   const isQueue = checkQueueFilmById(id);

//   const addToQueueBtn = document.querySelector('[data-action="addToQueue"]');
//   const addToWatchedBtn = document.querySelector('[data-action="addToWatched"]');

//   if (isWatched) {
//     addToWatchedBtn.addEventListener('click', onRemoveFromWatched);
//     addToWatchedBtn.textContent = 'remove from watched';
//   } else {
//     addToWatchedBtn.addEventListener('click', onAddToWatchedBtn);
//     addToWatchedBtn.textContent = 'add to watched';
//   }

//   if (isQueue) {
//     addToQueueBtn.addEventListener('click', onRemoveFromQueue);
//     addToQueueBtn.textContent = 'remove from queue';
//   } else {
//     addToQueueBtn.addEventListener('click', onAddToQueueBtn);
//     addToQueueBtn.textContent = 'add to queue';
//   }
// }

function onCloseModal() {
  refs.modal.innerHTML = '';
  refs.modal.classList.add('is-hidden');
  bodyUnlock();

  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('click', onCheckClickBody);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onCheckClickBody(e) {
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

function addListenerToCloseBtn() {
  refs.closeModalBtn = document.querySelector('[data-film-modal-close]');
  refs.closeModalBtn.addEventListener('click', onCloseModal);
}

function renderModal({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  overview,
  id,
  genres,
}) {
  let filmGenres = '';

  genres.map(genre => {
    filmGenres += `${genre.name}, `;
  });

  filmGenres = filmGenres.slice(0, -2);

  const markup = `
  <div class="modal-film">
    <button class="modal__btn" data-film-modal-close type="button">
      <svg class="cross">
        <use href="/sprite.0943b6b7.svg#cross" width="14" height="14"></use>
      </svg>
    </button>
    <div class="modal__img-wrapper">
      <img
        class="modal__img-wrapper img"
        src="${IMG_URL + poster_path}"
        alt="${title}"
        width="375px"
        height="478px"
      />
    </div>
    <div class="modal__content-wrapper">
      <h2 class="modal__tittle">${title}</h2>
      <div class="movie-description">
        <div class="movie-description__left">
          <p class="movie-description__options movie-description__options-grey">Vote / Votes</p>
          <p class="movie-description__options movie-description__options-grey">Popularity</p>
          <p class="movie-description__options movie-description__options-grey">Original Title</p>
          <p class="movie-description__options movie-description__options-grey">Genre</p>
        </div>

        <div class="movie-description__right">
          <p class="movie-description__options"><span class="orange">${vote_average} </span> / ${vote_count}</p>
          <p class="movie-description__options">${popularity}</p>
          <p class="movie-description__options uppercase">${original_title}</p>
          <p class="movie-description__options">${filmGenres}</p>
        </div>
      </div>
      <div class="view">
        <h3 class="view__tittle">About</h3>
        <p class="view__text">
          ${overview}
        </p>
      </div>
      <div class="btn-wrapper">
        <!-- В кнопки нужно добавлять ID фильма  -->
        <button class="btn btn-orange" type="button" data-action="addToWatched" data-id="${id}">
          add to Watched
        </button>
        <button class="btn btn-white" type="button" data-action="addToQueue" data-id="${id}">
          add to queue
        </button>
      </div>
    </div>
  </div>
`;
  refs.modal.innerHTML = markup;
}
