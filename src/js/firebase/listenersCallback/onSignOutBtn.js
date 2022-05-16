import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { refs } from '../firebaseRefs';
const { signInBtn, signOutBtn, libraryBtn } = refs();
import { onHomeBtn } from '../../library/onLibraryBtn';

export function onSignOutBtn(e) {
  signOut(auth)
    .then(e => {
      console.log('onSignOutBtn');
      signInBtn.classList.toggle('visually-hidden');
      signOutBtn.classList.toggle('visually-hidden');
      libraryBtn.classList.toggle('visually-hidden');
      onHomeBtn();
    })
    .catch(e => {
      console.log('error off');
    });
}
