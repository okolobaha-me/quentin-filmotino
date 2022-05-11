import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export async function onCheckWatchedFilmById(e) {
  //   if (!auth.currentUser) {
  //     return alert('signIn, please');
  //   }

  // Нужно получить id фильма
  const filmId = 'тут должен быть путь на ID фильма'; // filmId = e.target.dataset.id;

  const watchedFilmsRef = ref(db, 'users/' + auth.currentUser.uid + '/films/watched');
  const idFilmsArray = await get(watchedFilmsRef).then(snapshot => {
    if (snapshot.exists()) {
      return Object.keys(snapshot.val());
    } else {
      console.log('No data available');
      return;
    }
  });
  console.log(idFilmsArray);
  if (idFilmsArray.includes(filmId)) {
    return true;
  }
  return false;
}
