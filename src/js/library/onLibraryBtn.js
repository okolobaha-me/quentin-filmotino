import { auth } from '../firebase/firebase';
import { Notify } from 'notiflix';
import { refs } from '../firebase/firebaseRefs';
const { watchedBtn, queueBtn, libraryBtn } = refs();
import Ref from '../render/refs';
import { createPaginationFB } from '../tui.pagination/fb.pagination';
import { off, ref } from 'firebase/database';
import { db } from '../firebase/firebase';
import { onValue } from 'firebase/database';
import { onSiteLoad } from '../render/main-render-logic';

const gallery = document.querySelector('.filmList');

const language = window.location.hash.substring(1);

export function onLibraryBtn(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }
  removeListeners();
  const onValueRefWatched = ref(db, 'users/' + auth.currentUser.uid + '/films/watched');
  onValue(onValueRefWatched, renderWatchedFilms);
  enableAllBtn();
  e.target.disabled = true;
}

export function onWatchedBtn(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }

  const onValueRefWatched = ref(db, 'users/' + auth.currentUser.uid + '/films/watched');
  removeListeners();
  onValue(onValueRefWatched, renderWatchedFilms);
  enableAllBtn();
  e.target.disabled = true;
}

export function onQueueBtn(e) {
  if (!auth.currentUser) {
    Notify.failure('SignIn, please.');
    return;
  }
  removeListeners();
  const onValueRefQueue = ref(db, 'users/' + auth.currentUser.uid + '/films/queue');
  onValue(onValueRefQueue, renderQueueFilms);
  enableAllBtn();
  e.target.disabled = true;
}

export function onHomeBtn() {
  onSiteLoad();
  enableAllBtn();
  if (auth.currentUser) {
    removeListeners();
  }
}

async function renderWatchedFilms(snapshot) {
  await snapshotFn(snapshot).then(array => {
    if (!array) {
      gallery.innerHTML = libraryStr;
      return;
    }
    createPaginationFB(array, 1, Ref.containerWRef);
  });

  Ref.containerQRef.innerHTML = '';
  Ref.containerRef.innerHTML = '';
}

async function renderQueueFilms(snapshot) {
  await snapshotFn(snapshot).then(array => {
    if (!array) {
      gallery.innerHTML = libraryStr;
      return;
    }

    createPaginationFB(array, 1, Ref.containerQRef);
    Ref.containerRef.innerHTML = '';
    Ref.containerWRef.innerHTML = '';
  });
}

const libraryStr =
  language === 'uk'
    ? `<li><h2 style="text-align: center; font-size: 40px">Будь ласка, додайте фільми в бібліотеку...</h2></li>`
    : `<li> <h2 style="text-align: center; font-size: 40px">Please, add movies to the library...</h2></li>`;

async function snapshotFn(snapshot) {
  const filmsArray = await getValue(snapshot);
  const uaFilms = [];
  const enFilms = [];
  if (!filmsArray) {
    return;
  }
  filmsArray.forEach(id => {
    uaFilms.push(id.ua);
  });
  filmsArray.forEach(id => {
    enFilms.push(id.en);
  });

  const hash = window.location.hash.substring(1);

  if (hash === 'en') {
    return enFilms;
  }

  return uaFilms;
}

function getValue(snapshot) {
  if (snapshot.exists()) {
    return Object.values(snapshot.val());
  }
}

function removeListeners() {
  const onValueRefQueue = ref(db, 'users/' + auth.currentUser.uid + '/films/queue');
  const onValueRefWatched = ref(db, 'users/' + auth.currentUser.uid + '/films/watched');
  off(onValueRefQueue);
  off(onValueRefWatched);
}

function enableAllBtn() {
  watchedBtn.disabled = false;
  queueBtn.disabled = false;
  libraryBtn.disabled = false;
}
