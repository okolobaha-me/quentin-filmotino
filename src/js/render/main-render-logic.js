import refs from './refs';

import ApiService from '../API/api-service';
import renderFilmList from './render-film-list.js';

const service = new ApiService();

window.addEventListener('load', onSiteLoad);
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.searchFilm.value;

  if (query.trim() === '') {
    return;
  }

  // resetMarkup();
  refs.galleryRef.innerHTML = '<h1>здесь будут фильмы по запросу ;)</h1>'; // <========== удалить после рендера
  console.log(`Фильмы по запросу ${query}:`);
  service.getFilmsByQuery({ query: query }).then(data => {
    if (data.total_results === 0) {
      console.log('запросов не найдено');
      return;
    }
    console.log(data); // <========== подставить рендер renderFilmList(data)
  });
}

function onSiteLoad(e) {
  resetMarkup();
  refs.galleryRef.innerHTML = '<h1>здесь будут популярные за день фильмы ;)</h1>'; // <========== удалить после рендера
  console.log('Фильмы, приходящие, при загрузке страницы');
  service.getPopularFilms({}).then(data => {
    if (data.total_results === 0) {
      console.log('запросов не найдено');
      return;
    }
    console.log(data); // <========== подставить рендер renderFilmList(data)
  });
}

function resetMarkup() {
  refs.galleryRef.innerHTML = '';
}
