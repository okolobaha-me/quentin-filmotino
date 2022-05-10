import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { getFilmsByUrl } from '../render/main-render-logic';
import ApiService from '../API/api-service';
const service = new ApiService();

const container = document.getElementById('tui-pagination-container');

const options = {
  page: 1,
  totalItems: '',
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  totalPages: '',
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
          '<span class="tui-ico-first">1</span>' +
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
          options.totalPages +
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

export function makePagination(response) {
  options.totalPages = response.totalPage;
  options.totalItems = response.totalItems;

  const pagination = new Pagination(container, options);
  pagination.on('afterMove', event => {
    options.page = event.page;
    onPaginClick(event.page);
  });
}

function onPaginClick(pages) {
  getFilmsByUrl(`/3/trending/all/day?page=${pages}`);
}
