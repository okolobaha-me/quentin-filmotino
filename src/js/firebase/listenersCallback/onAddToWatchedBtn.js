import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, update } from 'firebase/database';
import { onRemoveFromWatched } from './onRemoveFromWatched';
import ApiService from '../../API/api-service';
import { Notify } from 'notiflix';

const service = new ApiService();

let language = window.location.hash;
language = language.substring(1);

export async function onAddToWatchedBtn(e) {
  if (!auth.currentUser) {
    if (language === 'uk') {
      Notify.failure('Увійдіть в акаунт, будь ласка.');
    }

    if (language === 'en') {
      Notify.failure('SignIn, please.');
    }

    return;
  }
  const filmId = e.target.dataset.id;

  async function addFilmToWatched(filmId) {
    const filmObjEn = await service.getFilmById({ id: filmId, language: 'en' });
    const filmObjUa = await service.getFilmById({ id: filmId, language: 'uk' });

    const updates = {};

    updates['users/' + `${auth.currentUser.uid}` + '/films/watched/' + filmId + '/en'] = filmObjEn;
    updates['users/' + `${auth.currentUser.uid}` + '/films/watched/' + filmId + '/ua'] = filmObjUa;
    update(ref(db), updates)
      .then(success => {
        e.target.removeEventListener('click', onAddToWatchedBtn);
        if (language === 'uk') {
          e.target.textContent = 'Видалити з переглянутих';
        }

        if (language === 'en') {
          e.target.textContent = 'remove from watched';
        }
        e.target.addEventListener('click', onRemoveFromWatched);
      })
      .catch(error => console.log(error));
  }
  addFilmToWatched(filmId);
}
