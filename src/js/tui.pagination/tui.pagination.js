import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from '../API/api-service';
const servicePagination = new ApiService();
import refs from '../render/refs';
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  //e.preventDefault();
  return e.target.elements.searchFilm.value;
}

export function createPagination(request /*totalPages,*/) {
  //request заполняется вручную и используется для логики
  const options = {
    totalItems: /*totalPages*/ 20000,
    itemsPerPage: 16,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };

  const pagination = new Pagination(refs.containerRef, options);

  if (request === 'query') {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      const q = onFormSubmit();
      servicePagination.getFilmsByQuery(currentPage, { query: q }).then(r => console.log(r));
    });
  } else {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      servicePagination.getPopularFilms({ page: currentPage }).then(r => console.log(r));
    });
  }
}
