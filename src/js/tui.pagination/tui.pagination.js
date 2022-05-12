import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from '../API/api-service';
const servicePagination = new ApiService();
import refs from '../render/refs';

export function createPagination(q) {
  const options = {
    totalItems: 20000,
    itemsPerPage: 16,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };

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
  servicePagination.getFilmsByQuery({ page: currentPage, query: q }).then(r => console.log(r));
}

function createPaginationByLoad(currentPage) {
  servicePagination.getPopularFilms({ page: currentPage }).then(r => console.log(r));
}
