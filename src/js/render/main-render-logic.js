import refs from './refs';
import { createPagination, hidePagination, showPagination } from '../tui.pagination/tui.pagination';

import ApiService from '../API/api-service';

import showMovies from './render-film-list2.js';
import { Notify } from 'notiflix';

const service = new ApiService();

let language = window.location.hash.substring(1);

window.addEventListener('load', onSiteLoad);
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.searchFilm.value;

  if (query.trim() === '') {
    return;
  }
  resetMarkup();
  hidePagination();

  service.getFilmsByQuery({ query: query, language }).then(data => {
    const totalResults = service.getTotalResults(data);

    if (totalResults === 0) {
      if (language === 'uk') {
        Notify.failure(
          'Нічого не знайдено. Введіть, будь ласка, правильну назву фільму та спробуйте ще раз',
        );
      }

      if (language === 'en') {
        Notify.failure('Search result not successful. Enter the correct movie name and try again');
      }

      return;
    }

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
