import Pagination from 'tui-pagination';
import refs from '../render/refs';
import showMovies from '../render/render-film-list2.js';

export function createPaginationFB(arr, page = 1, container) {
  const options = {
    totalItems: arr.length,
    itemsPerPage: 6,
    visiblePages: 3,
    page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected darkmode-ignore">{{page}}</strong>',
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
  const firstPageCreate = newPageArr(arr, 1);
  refs.galleryRef.innerHTML = '';
  const markup = showMovies(firstPageCreate);
  refs.galleryRef.innerHTML = markup;

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', event => {
    let mask = document.querySelector('.spinner_mask');

    mask.classList.remove('hide');
    mask.style.display = 'flex';
    setTimeout(() => {
      mask.style.display = 'none';
    }, 600);

    const currentPage = event.page;
    const listMovie = newPageArr(arr, currentPage);

    refs.galleryRef.innerHTML = '';
    const markup = showMovies(listMovie);
    refs.galleryRef.innerHTML = markup;
  });
}

function newPageArr(arr, page) {
  const perPage = 6;
  const newArr = arr.slice(perPage * (page - 1), perPage * page);
  return newArr;
}
