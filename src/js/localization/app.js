import { languages } from './languages';

const selectLng = document.querySelectorAll('[data-lang]');
const selected = document.querySelector('.lang__selected');
const searchInput = document.querySelector('.search-input');

const allLang = ['en', 'uk'];

selectLng.forEach(lng => {
  lng.addEventListener('click', e => {
    changeURLLanguage(e.target.title);
  });
});

function changeURLLanguage(lang) {
  location.href = `${window.location.pathname}#${lang}`;
  location.reload();
}

export function changeLanguage() {
  const hash = window.location.hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = `${window.location.pathname}#uk`;
    location.reload();
  }

  document.documentElement.setAttribute('lang', hash);

  selectLng.forEach(lng => {
    if (hash === 'en') {
      selected.classList.add('lng-enS');
    }

    if (lng.title === hash) {
      selected.innerText = lng.textContent;
    }
  });

  const keys = Object.keys(languages);
  keys.forEach(key => {
    const element = document.querySelector('.lng-' + key);
    const developers = document.querySelectorAll('.lng-developer');

    if (key === 'input') {
      searchInput.placeholder = languages[key][hash];
    }

    if (element) {
      element.innerHTML = languages[key][hash];
    }

    developers.forEach(developer => {
      developer.innerHTML = languages['developer'][hash];
    });
  });
}

changeLanguage();
