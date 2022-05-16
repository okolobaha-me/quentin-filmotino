import Pagination from 'tui-pagination';
import ApiService from '../API/api-service';
import showMovies from '../render/render-film-list2.js';

const servicePagination = new ApiService();

let language = window.location.hash;
language = language.substring(1);

import refs from '../render/refs';

export function createPagination(q, total_results) {
  const options = {
    totalItems: total_results,
    itemsPerPage: 24,
    visiblePages: 5,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    usageStatistics: false,

    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton: type => {
        let template = '';

        if (type.type === 'first') {
          template =
            '<a href="#" class=" tui-page-btn tui-first custom-class-first">' +
            '<span class="tui-ico-first"><<</span>' +
            '</a>';
        }
        if (type.type === 'prev') {
          template =
            '<a href="#" class="arrow tui-page-btn tui-prev custom-class-prev tui-first-child">' +
            '<span class="material-icons">arrow_back</span>' +
            '</a>';
        }

        if (type.type === 'next') {
          template =
            '<a href="#" class="arrow tui-page-btn tui-next custom-class-next">' +
            '<span class="material-icons">arrow_forward</span>' +
            '</a>';
        }

        if (type.type === 'last') {
          template =
            '<a href="#" class=" tui-page-btn tui-last custom-class-last">' +
            '<span class="tui-ico-last">' +
            '>>' +
            '</span>' +
            '</a>';
        }

        return template;
      },
      disabledMoveButton:
        '<span class=" visually-hidden tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip dots">' +
        '<span class="material-icons">more_horiz</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(refs.containerRef, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;

    if (q) {
      createPaginationBySearch(q, currentPage, language);
    } else {
      createPaginationByLoad(currentPage, language);
    }
  });
}

function createPaginationBySearch(q, currentPage, language) {
  servicePagination
    .getFilmsByQuery({ page: currentPage, query: q, language: language })
    .then(data => {
      const markup = showMovies(data);
      refs.galleryRef.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.error(error));
  refs.galleryRef.innerHTML = '';
}

function createPaginationByLoad(currentPage, language) {
  servicePagination
    .getPopularFilms({ page: currentPage, language: language })
    .then(data => {
      const markup = showMovies(data);
      refs.galleryRef.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.error(error));
  refs.galleryRef.innerHTML = '';
}

export function hidePagination() {
  refs.containerRef.classList.add('hide');
}
export function showPagination() {
  refs.containerRef.classList.remove('hide');
}
