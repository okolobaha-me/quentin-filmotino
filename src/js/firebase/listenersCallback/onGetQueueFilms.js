import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export async function onGetQueueFilms(e) {
  if (!auth.currentUser) {
    return alert('signIn, please');
  }
  const queueFilmsRef = ref(db, 'users/' + auth.currentUser.uid + '/films/queue');
  const filmsArray = await get(queueFilmsRef).then(snapshot => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      console.log('No data available');
    }
  });
  console.log(filmsArray);
}
