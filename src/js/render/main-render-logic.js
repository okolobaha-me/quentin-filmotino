import refs from './refs';
import { createPagination, hidePagination, showPagination } from '../tui.pagination/tui.pagination';

import ApiService from '../API/api-service';

import showMovies from './render-film-list2.js';

const service = new ApiService();

let language = window.location.hash;
language = language.substring(1);

window.addEventListener('load', onSiteLoad);
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.searchFilm.value;

  if (query.trim() === '') {
    return;
  }
  resetMarkup();
  service.getFilmsByQuery({ query: query, language }).then(data => {
    const totalResults = service.getTotalResults(data);
    const hasClass = refs.notificationText.classList.contains('--hidden');

    if (totalResults === 0) {
      if (hasClass) {
        refs.notificationText.classList.remove('--hidden')
      }
      hidePagination();
      return;
    };
    if (!hasClass) {
      refs.notificationText.classList.add('--hidden');
    };
    const markup = showMovies(data);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup);
    showPagination(); 
    createPagination(query, totalResults);
  });
  refs.containerQRef.innerHTML = '';
  refs.containerWRef.innerHTML = '';
}

export function onSiteLoad(e) {
  resetMarkup();
  let language = window.location.hash;
  language = language.substring(1);

  service.getPopularFilms({ language }).then(data => {
    if (data.total_results === 0) {
      return;
    }
    const markup = showMovies(data);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup); 
    createPagination('', service.getTotalResults(data));
  });
  refs.containerQRef.innerHTML = '';
  refs.containerWRef.innerHTML = '';
}

export function resetMarkup() {
  refs.galleryRef.innerHTML = '';
}
