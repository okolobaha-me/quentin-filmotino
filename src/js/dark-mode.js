import Darkmode from 'darkmode-js';

const options = {
  bottom: '40px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '40px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#e6e6e6', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#e6e6e6', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

const refs = {
  teamModalButton: document.querySelector('[data-team-modal-open]'),
  modal: document.querySelector('.modal-team'),
  icon: document.querySelector('.modal-team__close-button'),
  title: document.querySelector('.modal-team__title'),
  fill: document.querySelectorAll('.modal-team__item'),
  name: document.querySelectorAll('.modal-team__item-name'),
  info: document.querySelectorAll('.modal-team__item-info'),
};

refs.teamModalButton.addEventListener('click', () => {
  if (darkmode.isActivated()) {
    refs.modal.classList.add('modal-bg--black');
    refs.title.classList.add('modal-text--black');
    refs.icon.classList.add('modal-text--black');
    refs.fill.forEach(element => {
      element.classList.add('modal-bg--black');
    });
    refs.name.forEach(element => {
      element.classList.add('modal-text--black');
    });
    refs.info.forEach(element => {
      element.classList.add('modal-text--black');
    });
  } else {
    refs.modal.classList.remove('modal-bg--black');
    refs.title.classList.remove('modal-text--black');
    refs.icon.classList.remove('modal-text--black');
    refs.fill.forEach(element => {
      element.classList.remove('modal-bg--black');
    });
    refs.name.forEach(element => {
      element.classList.remove('modal-text--black');
    });
    refs.info.forEach(element => {
      element.classList.remove('modal-text--black');
    });
  }
});
