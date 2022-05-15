function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}

loadData().then(() => {
  let preloaderEL = document.getElementById('preloader');
  preloaderEL.classList.add('preloader-hide');

  let spinner = document.getElementById('spinner-box');
  spinner.classList.add('spinner-box--hide');
});
