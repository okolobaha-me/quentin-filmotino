import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, remove } from 'firebase/database';
import { onAddToQueueBtn } from './onAddToQueueBtn';

const language = window.location.hash.substring(1);

export function onRemoveFromQueue(e) {
  if (!auth.currentUser) {
    alert('signIn, please');
    return;
  }
  const filmId = e.target.dataset.id;

  const removeFilmRef = ref(db, 'users/' + `${auth.currentUser.uid}` + '/films/queue/' + filmId);
  remove(removeFilmRef)
    .then(success => {
      e.target.removeEventListener('click', onRemoveFromQueue);
      if (language === 'uk') {
        e.target.textContent = 'Додати до черги';
      }

      if (language === 'en') {
        e.target.textContent = 'Add to queue';
      }
      e.target.addEventListener('click', onAddToQueueBtn);
    })
    .catch(error => console.log(error));
}
