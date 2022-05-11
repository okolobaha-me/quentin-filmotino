import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, remove } from 'firebase/database';
import { onAddToQueueBtn } from './onAddToQueueBtn';

export function onRemoveFromQueue(e) {
  if (!auth.currentUser) {
    alert('signIn, please');
    return;
  }
  const filmId = e.target.dataset.id;

  const removeFilmRef = ref(db, 'users/' + `${auth.currentUser.uid}` + '/films/queue/' + filmId);
  remove(removeFilmRef);
  console.log('удалили');

  e.target.removeEventListener('click', onRemoveFromQueue);
  e.target.textContent = 'add to watched';
  e.target.addEventListener('click', onAddToQueueBtn);
}
