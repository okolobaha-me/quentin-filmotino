import { auth } from '../firebase';

import { refs } from '../firebaseRefs';
const { signInBtn, signOutBtn } = refs();

export function checkAuthOnLoad(e) {
  console.log('checkAuthOnLoad');
  console.log(auth.currentUser);
  setTimeout(e => {
    if (auth.currentUser) {
      console.log('if checkAuthOnLoad');
      signInBtn.classList.toggle('visually-hidden');
      signOutBtn.classList.toggle('visually-hidden');
    }
  }, 500);

  //   if (auth.currentUser) {
  //     console.log('if checkAuthOnLoad');
  //     signInBtn.classList.toggle('visually-hidden');
  //     signOutBtn.classList.toggle('visually-hidden');
  //   }
}
