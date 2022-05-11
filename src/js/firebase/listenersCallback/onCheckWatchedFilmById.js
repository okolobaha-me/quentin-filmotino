import { auth } from '../firebase';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export async function onCheckWatchedFilmById(e) {
  //   if (!auth.currentUser) {
  //     return alert('signIn, please');
  //   }

  // Нужно получить id фильма
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
  if (idFilmsArray.includes('id фильма')) {
    // добавить стили на кнопку, если такой фильм уже есть в списке
  }
}
