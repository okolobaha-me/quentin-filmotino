export function refs() {
  return {
    signInBtn: document.querySelector('.signIn'),
    firebaseuiAuthContainer: document.querySelector('#firebaseui-auth-container'),
    signOutBtn: document.querySelector('.signOut'),
    addToWatchedBtn: document.querySelector('[data-action="addToWatched"]'),
    addToQueueBtn: document.querySelector('[data-action="addToQueue"]'),
    libraryBtn: document.querySelector('[aria-label="Кнопка на мою бібліотеку"]'),
  };
}
