import refs from './header-refs';

import ApiService from '../API/api-service';

import renderFilmList from './render-film-list.js';

const service = new ApiService;

window.addEventListener('load', onSiteLoad);

function onSiteLoad(e) {
    service.urlPath = '3/trending/all/day';
    service.getFilms().then((data) => {
        console.log(data);
        renderFilmList(data);
    });
};