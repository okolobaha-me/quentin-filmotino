import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export async function checkWatchedFilmById(id) {
  const watchedFilmsRef = ref(db, 'users/' + auth.currentUser.uid + '/films/watched');
  const idFilmsArray = await get(watchedFilmsRef).then(snapshot => {
    if (snapshot.exists()) {
      return Object.keys(snapshot.val());
    } else {
      return;
    }
  });
  if (idFilmsArray && idFilmsArray.includes(`${id}`)) {
    return true;
  }
  return false;
}
