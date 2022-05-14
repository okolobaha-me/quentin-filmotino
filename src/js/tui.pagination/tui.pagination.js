import Pagination from 'tui-pagination';
import ApiService from '../API/api-service';
import showMovies from '../render/render-film-list2.js';

const servicePagination = new ApiService();

console.log(servicePagination);

import refs from '../render/refs';

export function createPagination(q, total_results = 300) {
  const options = {
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };
  console.log(options);

  const pagination = new Pagination(refs.containerRef, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;

    if (q) {
      createPaginationBySearch(q, currentPage);
    } else {
      createPaginationByLoad(currentPage);
    }
  });
}

function createPaginationBySearch(q, currentPage) {
  servicePagination.getFilmsByQuery({ page: currentPage, query: q }).then(data => {
    const markup = showMovies(data);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup);
  });
  refs.galleryRef.innerHTML = '';
}

function createPaginationByLoad(currentPage) {
  servicePagination.getPopularFilms({ page: currentPage }).then(data => {
    const markup = showMovies(data);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup);
  });
  refs.galleryRef.innerHTML = '';
}

export function hidePagination() {
  refs.containerRef.classList.add('hide');
}
export function showPagination() {
  refs.containerRef.classList.remove('hide');
}
