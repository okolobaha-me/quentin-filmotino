// Firebase import --------------------------------------------------------
import { initializeApp } from 'firebase/app';
// Firebase auth import ---------------------------------------------------
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  browserNonePersistence,
} from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
// firebaseui import -----------------------------------------
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { uiConfig } from './firebaseUiConfig';

// refs import -----------------------------------------
import { refs } from './firebaseRefs';
const { signInBtn, firebaseuiAuthContainer, signOutBtn } = refs();
// listeners import -----------------------------------------
import { onSignOutBtn } from './listenersCallback/onSignOutBtn';
import { onSignInBtn } from './listenersCallback/onSignInBtn';
import { checkAuthOnLoad } from './listenersCallback/checkAuthOnLoad';
// создание приложения firebase
const app = initializeApp(firebaseConfig);
// подключение аутентификации
export const auth = getAuth(app);
// firebaseUi create
export const ui = new firebaseui.auth.AuthUI(auth);

// Вызов окна регистрации/аутентификации
signInBtn.addEventListener('click', onSignInBtn);

// singOut
signOutBtn.addEventListener('click', onSignOutBtn);

// DELETE
document.querySelector('.statusBtn').addEventListener('click', onStatusBtn);
function onStatusBtn(e) {
  console.log(auth.currentUser);
}

window.addEventListener('load', checkAuthOnLoad);
