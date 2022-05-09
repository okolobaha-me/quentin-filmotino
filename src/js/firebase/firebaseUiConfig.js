import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

import { refs } from './firebaseRefs';
const { firebaseuiAuthContainer, signInBtn, signOutBtn } = refs();

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
        // Если новый пользователь можно создать ячейку в базе данных
      }

      //===========Сюда запихать визуальные изменения при успешном входе/регистрации
      // закрываем модалку с регистрацией
      // меняем кнопку signIn => signOut
      // добавляем слушателя событий на кнопку signOut (callback: onSignOutBtn)
      firebaseuiAuthContainer.classList.toggle('visually-hidden');
      signInBtn.classList.toggle('visually-hidden');
      signOutBtn.classList.toggle('visually-hidden');
    },
    signInFailure: function (error) {
      // Ошибка при регистрации/аутентификации
    },
    uiShown: function () {
      // можно выключить спинер, если он включается при открытии модалки или еще что-то придумать)
      console.log('uiShown');
    },
  },
};
