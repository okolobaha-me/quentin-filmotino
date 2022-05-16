import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export async function onGetQueueFilms(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }

  const queueFilmsRef = ref(db, 'users/' + auth.currentUser.uid + '/films/queue');
  const filmsArray = await get(queueFilmsRef).then(snapshot => {
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
