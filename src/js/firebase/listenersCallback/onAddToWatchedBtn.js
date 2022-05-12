import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, update } from 'firebase/database';
import { onRemoveFromWatched } from './onRemoveFromWatched';

export function onAddToWatchedBtn(e) {
  if (!auth.currentUser) {
    alert('signIn, please');
    return;
  }
  const filmId = e.target.dataset.id;

  function addFilmToWatched(filmId) {
    const filmObj = { info: 'ТУТ БУДЕТ РЕЗУЛЬТАТ ОТ ЗАПРОСА ПО ID' };

    const updates = {};

    updates['users/' + `${auth.currentUser.uid}` + '/films/watched/' + filmId] = filmObj;
    update(ref(db), updates)
      .then(success => {
        e.target.removeEventListener('click', onAddToWatchedBtn);
        e.target.textContent = 'remove from watched';
        e.target.addEventListener('click', onRemoveFromWatched);
        console.log('сохранили');
      })
      .catch(error => console.log(error));
  }
  addFilmToWatched(filmId);
}

// remove from watched
