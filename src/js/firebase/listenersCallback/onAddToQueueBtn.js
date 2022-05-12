import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, update } from 'firebase/database';
import { onRemoveFromQueue } from './onRemoveFromQueue';

export function onAddToQueueBtn(e) {
  if (!auth.currentUser) {
    alert('signIn, please');
    return;
  }
  const filmId = e.target.dataset.id;

  function addFilmToWatched(filmId) {
    const filmObj = { info: 'ТУТ БУДЕТ РЕЗУЛЬТАТ ОТ ЗАПРОСА ПО ID' };

    const updates = {};

    updates['users/' + `${auth.currentUser.uid}` + '/films/queue/' + filmId] = filmObj;
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
