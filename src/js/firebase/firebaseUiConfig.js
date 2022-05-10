import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

import { refs } from './firebaseRefs';
const { firebaseuiAuthContainer, signInBtn, signOutBtn } = refs();

import { auth } from './firebase';
import { db } from './firebase';
import { ref, update } from 'firebase/database';

export const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      var user = authResult.user;
      var credential = authResult.credential;
      var isNewUser = authResult.additionalUserInfo.isNewUser;
      var providerId = authResult.additionalUserInfo.providerId;
      var operationType = authResult.operationType;

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

      //===========Сюда запихать визуальные изменения при успешном входе/регистрации
      // закрываем модалку с регистрацией
      // меняем кнопку signIn => signOut
      // добавляем слушателя событий на кнопку signOut (callback: onSignOutBtn)
      firebaseuiAuthContainer.classList.toggle('is-hidden');
      signInBtn.classList.toggle('visually-hidden');
      signOutBtn.classList.toggle('visually-hidden');
    },
    signInFailure: function (error) {
      // Ошибка при регистрации/аутентификации
    },
    uiShown: function () {
      // можно выключить спинер, если он включается при открытии модалки или еще что-то придумать)
      // console.log('uiShown');
    },
  },
};
