
let spinnerMaskRef = document.querySelector('.spinner_mask');

window.addEventListener('load', () => {
  spinnerMaskRef.classList.add('hide');
  setTimeout(() => {
    spinnerMaskRef.style.display = 'none';
  }, 700);
});


