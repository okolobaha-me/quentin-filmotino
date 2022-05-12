/*import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getFilmsByUrl } from '../render/main-render-logic';
import ApiService from '../API/api-service';
const service = new ApiService();
import refs from '../render/refs';

export function createPagination(request, query) {
  //request заполняется вручную и используется для логики
  const options = {
    totalItems: 20000,
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
      service.getMoviesByQueryPagination(currentPage, query).then(r => console.log(r));
    });
  } else {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      service.getPopularFilms(currentPage).then(r => console.log(r));
    });
  }
}

//getMoviesByQueryPagination(page, query) {
/*return fetch(
  `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&page=${page}&language=${langs}`,
);
*/
