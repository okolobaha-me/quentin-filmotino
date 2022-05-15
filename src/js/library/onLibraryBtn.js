import { auth } from '../firebase/firebase';
import { Notify } from 'notiflix';
import { refs } from '../firebase/firebaseRefs';

import { onGetQueueFilms } from '../firebase/listenersCallback/onGetQueueFilms';
import { onGetWatchedFilms } from '../firebase/listenersCallback/onGetWatchedFilms';
import { createPaginationFB } from '../tui.pagination/fb.pagination';

export function onLibraryBtn(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }
  console.log('click');
  renderWatchedFilms();
}

export function onWatchedBtn(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }
  renderWatchedFilms();
}

export function onQueueBtn(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }
  renderQueueFilms();
}

async function renderWatchedFilms() {
  await onGetWatchedFilms().then(array => {
    createPaginationFB(array);
  });
  console.log('renderWatchedFilms');
}

async function renderQueueFilms() {
  await onGetQueueFilms().then(array => {
    createPaginationFB(array);
  });
  console.log('renderQueueFilms');
}
