import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, remove } from 'firebase/database';
import { onAddToWatchedBtn } from './onAddToWatchedBtn';

let language = window.location.hash;
language = language.substring(1);

export function onRemoveFromWatched(e) {
  if (!auth.currentUser) {
    alert('signIn, please');
    return;
  }
  const filmId = e.target.dataset.id;

  const removeFilmRef = ref(db, 'users/' + `${auth.currentUser.uid}` + '/films/watched/' + filmId);
  remove(removeFilmRef)
    .then(success => {
      e.target.removeEventListener('click', onRemoveFromWatched);
      if (language === 'uk') {
        e.target.textContent = 'Додати до переглянутих';
      }

      if (language === 'en') {
        e.target.textContent = 'Add to watched';
      }
      e.target.addEventListener('click', onAddToWatchedBtn);
    })
    .catch(error => console.log(error));
}
