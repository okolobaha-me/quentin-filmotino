import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, update } from 'firebase/database';
import { onRemoveFromQueue } from './onRemoveFromQueue';
import ApiService from '../../API/api-service';
import { Notify } from 'notiflix';

const service = new ApiService();

export async function onAddToQueueBtn(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }
  const filmId = e.target.dataset.id;

  async function addFilmToWatched(filmId) {
    const filmObjEn = await service.getFilmById({ id: filmId, language: 'en' });
    const filmObjUa = await service.getFilmById({ id: filmId, language: 'uk' });

    const updates = {};

    updates['users/' + `${auth.currentUser.uid}` + '/films/queue/' + filmId + '/en'] = filmObjEn;
    updates['users/' + `${auth.currentUser.uid}` + '/films/queue/' + filmId + '/ua'] = filmObjUa;
    update(ref(db), updates)
      .then(success => {
        e.target.removeEventListener('click', onAddToQueueBtn);
        e.target.textContent = 'remove from queue';
        e.target.addEventListener('click', onRemoveFromQueue);
        console.log('сохранили');
      })
      .catch(error => console.log(error));
  }
  addFilmToWatched(filmId);
}
