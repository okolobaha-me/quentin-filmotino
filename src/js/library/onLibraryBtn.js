import { auth } from '../firebase/firebase';
import { Notify } from 'notiflix';
import { refs } from '../firebase/firebaseRefs';
import Ref from '../render/refs';
import { onGetQueueFilms } from '../firebase/listenersCallback/onGetQueueFilms';
import { onGetWatchedFilms } from '../firebase/listenersCallback/onGetWatchedFilms';
import { createPaginationFB } from '../tui.pagination/fb.pagination';
import { ref } from 'firebase/database';

const gallery = document.querySelector('.filmList');

export function onLibraryBtn(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }
  // console.log('click');
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
    if (!array) {
      gallery.innerHTML = libraryStr;
      return;
    }
    createPaginationFB(array, 1, Ref.containerWRef);
  });
  Ref.containerQRef.innerHTML = '';
  Ref.containerRef.innerHTML = ''; // console.log('renderWatchedFilms');
}

async function renderQueueFilms() {
  await onGetQueueFilms().then(array => {
    if (!array) {
      gallery.innerHTML = libraryStr;

      return;
    }

    createPaginationFB(array, 1, Ref.containerQRef);
    Ref.containerRef.innerHTML = '';
    Ref.containerWRef.innerHTML = '';
  });
  // console.log('renderQueueFilms');
}

const libraryStr = `<li>
  <h2 style="text-align: center; font-size: 40px">Please, add movies to the library...</h2>
</li>`;
