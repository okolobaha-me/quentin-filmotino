import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css';

import { refs } from './firebaseRefs';
const { firebaseuiAuthContainer } = refs();

import { db } from './firebase';
import { ref, update, off } from 'firebase/database';

import { Notify } from 'notiflix';

import { onCloseModal } from '../modal/singIn-modal';

export const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      const user = authResult.user;
      const isNewUser = authResult.additionalUserInfo.isNewUser;

      if (isNewUser) {
        function createNewUser() {
          const userObj = {
            ID: user.uid,
            email: user.email,
            name: user.displayName,
          };
          const updates = {};

          updates['users/' + user.uid + '/userInfo/'] = userObj;
          update(ref(db), updates);
        }
        createNewUser();
      }
      firebaseuiAuthContainer.classList.toggle('is-hidden');
      onCloseModal();
      const onValueRefQueue = ref(db, 'users/' + user.uid + '/films/queue');
      const onValueRefWatched = ref(db, 'users/' + user.uid + '/films/watched');
      off(onValueRefQueue);
      off(onValueRefWatched);
    },
    signInFailure: function (error) {
      Notify.failure('Ups, something went wrong, try again later');
    },
    uiShown: function () {
      // можно выключить спинер, если он включается при открытии модалки или еще что-то придумать)
    },
  },
};
