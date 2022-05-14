import refs from './refs';
import { createPagination, hidePagination, showPagination } from '../tui.pagination/tui.pagination';

import ApiService from '../API/api-service';

import showMovies from './render-film-list2.js';

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
      hidePagination();
      return;
    }
    console.log(data);
    const markup = showMovies(data);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup);
    showPagination(); // <========== подставить рендер renderFilmList(data)
    createPagination(query);
  });
}

function onSiteLoad(e) {
  resetMarkup();
  // <========== удалить после рендера
  console.log('Фильмы, приходящие, при загрузке страницы');
  service.getPopularFilms({}).then(data => {
    if (data.total_results === 0) {
      console.log('запросов не найдено');
      return;
    }
    console.log(data);
    const markup = showMovies(data);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup); // <========== подставить рендер renderFilmList(data)
  });
  createPagination();
}

export function resetMarkup() {
  refs.galleryRef.innerHTML = '';
}
