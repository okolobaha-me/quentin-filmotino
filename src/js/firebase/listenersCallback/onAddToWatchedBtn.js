import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, update } from 'firebase/database';

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
    update(ref(db), updates);
  }
  addFilmToWatched(filmId);
  console.log('сохранили');
  // Добавить стили после добавления фильма
}
