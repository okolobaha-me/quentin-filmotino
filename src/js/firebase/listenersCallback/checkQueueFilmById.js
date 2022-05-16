import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export async function checkQueueFilmById(id) {
  const queueFilmsRef = ref(db, 'users/' + auth.currentUser.uid + '/films/queue');
  const idFilmsArray = await get(queueFilmsRef).then(snapshot => {
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
