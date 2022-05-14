import Pagination from 'tui-pagination';
import refs from '../render/refs';
import showMovies from '../render/render-film-list2.js';

function createPaginationFB(arr) {
  const options = {
    totalItems: arr.length,
    itemsPerPage: 9,
    visiblePages: 3,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };
  const pagination = new Pagination(refs.containerRef, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;

    const listMovie = newPageArr(arr, currentPage);

    const markup = showMovies(listMovie);
    refs.galleryRef.insertAdjacentHTML('beforeend', markup);
  });
}

function newPageArr(arr, page) {
  const perPage = 9;
  const newArr = arr.slice(perPage * (page - 1), perPage * page);
  return newArr;
}
