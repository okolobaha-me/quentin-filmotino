// Firebase import --------------------------------------------------------
import { initializeApp } from 'firebase/app';
// Firebase auth import ---------------------------------------------------
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
// firebaseui import -----------------------------------------
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { uiConfig } from './firebaseUiConfig';
// firebase Realtime Database import -----------------------------------------
import { getDatabase, ref, set, push, get, update, remove, onValue, off } from 'firebase/database';

// refs import -----------------------------------------
import { refs } from './firebaseRefs';
const { signInBtn, firebaseuiAuthContainer, signOutBtn, addToWatchedBtn, addToQueueBtn } = refs();
// listeners import -----------------------------------------
import { onSignOutBtn } from './listenersCallback/onSignOutBtn';
import { onSignInBtn } from './listenersCallback/onSignInBtn';
import { checkAuthOnLoad } from './listenersCallback/checkAuthOnLoad';
import { onAddToWatchedBtn } from './listenersCallback/onAddToWatchedBtn';
import { onAddToQueueBtn } from './listenersCallback/onAddToQueueBtn';
import { onGetWatchedFilms } from './listenersCallback/onGetWatchedFilms';
import { onGetQueueFilms } from './listenersCallback/onGetQueueFilms';
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

// DELETE
document.querySelector('.statusBtn').addEventListener('click', onStatusBtn);
function onStatusBtn(e) {
  console.log(auth.currentUser);
}

// Проверка статуса аутентификации при загрузке
window.addEventListener('load', checkAuthOnLoad);

// Добавление фильма к списку просмотреных
addToWatchedBtn.addEventListener('click', onAddToWatchedBtn);

// Добавление фильма к очереди на просмотр
addToQueueBtn.addEventListener('click', onAddToQueueBtn);

// Получаем фильмы из списка просмотреных
// onGetWatchedFilms
// document.querySelector('.testBtn').addEventListener('click', onGetWatchedFilms);

// Получаем фильмы из очереди на просмотреных
// onGetQueueFilms
// document.querySelector('.testBtn').addEventListener('click', onGetQueueFilms);
