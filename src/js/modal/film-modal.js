import Api from '../API/api-service';
import { changeLanguage } from '../localization/app';
import { checkQueueFilmById } from '../firebase/listenersCallback/checkQueueFilmById';
import { checkWatchedFilmById } from '../firebase/listenersCallback/checkWatchedFilmById';
import { onAddToQueueBtn } from '../firebase/listenersCallback/onAddToQueueBtn';
import { onAddToWatchedBtn } from '../firebase/listenersCallback/onAddToWatchedBtn';
import { onRemoveFromQueue } from '../firebase/listenersCallback/onRemoveFromQueue';
import { onRemoveFromWatched } from '../firebase/listenersCallback/onRemoveFromWatched';
import { auth } from '../firebase/firebase';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const api = new Api();

const language = window.location.hash.substring(1);

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
    .getFilmById({ id, language })
    .then(renderModal)
    .then(() => {
      refs.modal.classList.remove('is-hidden');
      bodyLock();

      window.addEventListener('keydown', onEscKeyPress);
      window.addEventListener('click', onCheckClickBody);
      addListenerToCloseBtn();
      changeLanguage();
    })
    .catch(console.log);
}

function checkFilm(id) {
  const isAuth = checkAuth();

  refs.addToQueueBtn = document.querySelector('[data-action="addToQueue"]');
  refs.addToWatchedBtn = document.querySelector('[data-action="addToWatched"]');

  if (!isAuth) {
    refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtn);
    refs.addToQueueBtn.addEventListener('click', onAddToQueueBtn);
  }

  if (isAuth) {
    const isWatched = checkWatchedFilmById(id);

    isWatched.then(status => {
      if (status) {
        refs.addToWatchedBtn.addEventListener('click', onRemoveFromWatched);
        if (language === 'uk') {
          refs.addToWatchedBtn.textContent = '???????????????? ?? ????????????????????????';
        }

        if (language === 'en') {
          refs.addToWatchedBtn.textContent = 'remove from watched';
        }
      }
      if (!status) {
        refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtn);
        if (language === 'uk') {
          refs.addToWatchedBtn.textContent = '???????????? ???? ????????????????????????';
        }

        if (language === 'en') {
          refs.addToWatchedBtn.textContent = 'Add to watched';
        }
      }
    });

    const isQueue = checkQueueFilmById(id);
    isQueue.then(status => {
      if (status) {
        refs.addToQueueBtn.addEventListener('click', onRemoveFromQueue);
        if (language === 'uk') {
          refs.addToQueueBtn.textContent = '???????????????? ?? ??????????';
        }

        if (language === 'en') {
          refs.addToQueueBtn.textContent = 'remove from queue';
        }
      }
      if (!status) {
        refs.addToQueueBtn.addEventListener('click', onAddToQueueBtn);
        if (language === 'uk') {
          refs.addToQueueBtn.textContent = '???????????? ???? ??????????';
        }

        if (language === 'en') {
          refs.addToQueueBtn.textContent = 'Add to queue';
        }
      }
    });
  }
}

function checkAuth() {
  if (!auth.currentUser) {
    return;
  }
  return true;
}

function onCloseModal() {
  const isAuth = checkAuth();

  if (isAuth) {
    refs.addToWatchedBtn.removeEventListener('click', onRemoveFromWatched);
    refs.addToWatchedBtn.removeEventListener('click', onAddToWatchedBtn);
    refs.addToQueueBtn.removeEventListener('click', onRemoveFromQueue);
    refs.addToQueueBtn.removeEventListener('click', onAddToQueueBtn);
  }

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
  name,
}) {
  let filmGenres = '';

  genres.map(genre => {
    filmGenres += `${genre.name}, `;
  });

  filmGenres = filmGenres.slice(0, -2);

  const markup = `
  <div class="modal-film">
    <button class="modal__btn" data-film-modal-close type="button">
      <span class="material-symbols-outlined">
close
</span>
    </button>
    <div class="modal__img-wrapper">
      <img
        class="modal__img-wrapper img"
        src="${
          poster_path
            ? IMG_URL + poster_path
            : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
        }"
        alt="${title}"
        width="375px"
        height="478px"
      />
    </div>
    <div class="modal__content-wrapper">
      <h2 class="modal__tittle">${title || name}</h2>
      <table>
  <tr class="modal__param">
    <td class="modal__param-tittle lng-vote">Vote / Votes</td>
    <td class="modal__param-value">
      <div class="modal__film-votes">
        <span class="param__value-vote">${vote_average}</span> /
        <span class="param__value-votes">${vote_count}</span>
      </div>
    </td>
  </tr>
  <tr class="modal__param">
    <td class="modal__param-tittle lng-popularity">Popularity</td>
    <td class="modal__param-value">${popularity}</td>
  </tr>
  <tr class="modal__param">
    <td class="modal__param-tittle lng-titleFilm">Original Title</td>
    <td class="modal__param-value  uppercase">${original_title || name}</td>
  </tr>
  <tr class="modal__param">
    <td class="modal__param-tittle lng-genre">Genre</td>
    <td class="modal__param-value">${filmGenres}</td>
  </tr>
</table>
     <div class="view">
        <h3 class="view__tittle lng-about">About</h3>
        <p class="view__text">
          ${overview}
        </p>
      </div>
      <div class="btn-wrapper">
        <!-- ?? ???????????? ?????????? ?????????????????? ID ????????????  -->
        <button class="btn btn-orange lng-addToWatched" type="button" data-action="addToWatched" data-id="${id}">
          add to Watched
        </button>
        <button class="btn btn-white lng-addToQueue" type="button" data-action="addToQueue" data-id="${id}">
          add to queue
        </button>
      </div>


      </div>
    </div>
`;
  refs.modal.innerHTML = markup;

  checkFilm(id);
}
