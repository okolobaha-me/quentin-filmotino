import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export async function onGetWatchedFilms(e) {
  if (!auth.currentUser) {
    return alert('signIn, please');
  }
  const watchedFilmsRef = ref(db, 'users/' + auth.currentUser.uid + '/films/watched');
  const filmsArray = await get(watchedFilmsRef).then(snapshot => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      console.log('No data available');
    }
  });
  console.log(filmsArray);
}