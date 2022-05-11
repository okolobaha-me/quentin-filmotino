import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, remove } from 'firebase/database';
import { onAddToWatchedBtn } from './onAddToWatchedBtn';

export function onRemoveFromWatched(e) {
  if (!auth.currentUser) {
    alert('signIn, please');
    return;
  }
  const filmId = e.target.dataset.id;

  const removeFilmRef = ref(db, 'users/' + `${auth.currentUser.uid}` + '/films/watched/' + filmId);
  remove(removeFilmRef);
  console.log('удалили');

  e.target.removeEventListener('click', onRemoveFromWatched);
  e.target.textContent = 'add to watched';
  e.target.addEventListener('click', onAddToWatchedBtn);
}
