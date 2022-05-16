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
