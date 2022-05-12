/*import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from '../API/api-service';
const service = new ApiService();
import refs from '../render/refs';

export function createPagination(request, totalPages, query) {
  //request заполняется вручную и используется для логики
  const options = {
    totalItems: totalPages,
    itemsPerPage: 20,
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
      service./*будет твоя функция*/ /*(currentPage, query).then(r => console.log(r));
    });
  } else {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      service.getPopularFilms(currentPage).then(r => console.log(r));
    });
  }
}*/
