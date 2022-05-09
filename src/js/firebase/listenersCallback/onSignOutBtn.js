import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

import { refs } from '../firebaseRefs';
const { signInBtn, signOutBtn } = refs();

export function onSignOutBtn(e) {
  signOut(auth)
    .then(e => {
      console.log('onSignOutBtn');
      signInBtn.classList.toggle('visually-hidden');
      signOutBtn.classList.toggle('visually-hidden');
    })
    .catch(e => {
      console.log('error off');
    });
}
