import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export async function onGetWatchedFilms(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }
  const watchedFilmsRef = ref(db, 'users/' + auth.currentUser.uid + '/films/watched');
  const filmsArray = await get(watchedFilmsRef).then(snapshot => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      // console.log('No data available');
    }
  });

  const uaFilms = [];
  const enFilms = [];
  if (!filmsArray) {
    return;
  }
  filmsArray.forEach(id => {
    uaFilms.push(id.ua);
  });
  filmsArray.forEach(id => {
    enFilms.push(id.en);
  });

  let hash = window.location.hash;
  hash = hash.substring(1);

  if (hash === 'en') {
    // console.log(enFilms);
    return enFilms;
  }
  // console.log(uaFilms);
  return uaFilms;
}
