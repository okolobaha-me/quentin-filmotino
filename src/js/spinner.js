let spinnerMaskRef = document.querySelector('.spinner_mask');

window.addEventListener('load', () => {
  {
    spinnerMaskRef.classList.remove('hide');
    spinnerMaskRef.style.display = 'flex';

    hide();
  }
});
async function hide() {
  spinnerMaskRef.classList.add('hide');
  spinnerMaskRef.style.display = 'none';
}
