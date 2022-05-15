// Firebase import --------------------------------------------------------
import { initializeApp } from 'firebase/app';
// Firebase auth import ---------------------------------------------------
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
// firebaseui import -----------------------------------------
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
// firebase Realtime Database import -----------------------------------------
import { getDatabase } from 'firebase/database';

// refs import -----------------------------------------
import { refs } from './firebaseRefs';
const { signInBtn, signOutBtn, libraryBtn } = refs();
// listeners import -----------------------------------------
import { onSignOutBtn } from './listenersCallback/onSignOutBtn';
import { onSignInBtn } from './listenersCallback/onSignInBtn';

// создание приложения firebase
const app = initializeApp(firebaseConfig);
// подключение аутентификации
export const auth = getAuth(app);
// создание Realtime Database
export const db = getDatabase(app);

// firebaseUi create
export const ui = new firebaseui.auth.AuthUI(auth);

// Статус аутентификации сохраняется на одну сессию
setPersistence(auth, browserSessionPersistence); // Session, Local, None

// Вызов окна регистрации/аутентификации
signInBtn.addEventListener('click', onSignInBtn);

// singOut
signOutBtn.addEventListener('click', onSignOutBtn);

// Проверка статуса аутентификации при загрузке
onAuthStateChanged(auth, function (user) {
  if (user) {
    signInBtn.classList.toggle('visually-hidden');
    signOutBtn.classList.toggle('visually-hidden');
    libraryBtn.classList.toggle('visually-hidden');
  }
});
