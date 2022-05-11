import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getFilmsByUrl } from '../render/main-render-logic';
import ApiService from '../API/api-service';
const service = new ApiService();
import { refs } from '../render/refs';

const { formRef, inputRef, btnRef, containerRef } = refs();

export function createPagination(totalItems, itemsPerPage, page, query) {
  const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
    page: page,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  const pagination = new Pagination(containerRef, options);
  if (request === 'query') {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      //дальше делаем запрос на сервер с currentPage и query(что вводится в инпут) и отрисовываем разметку
    });
  } else {
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      //дальше делаем запрос на сервер с currentPage и отрисовываем разметку
    });
  }
}
