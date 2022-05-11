import refs from './refs';

import ApiService from '../API/api-service';

// import renderFilmList from './render-film-list.js';

const service = new ApiService;

window.addEventListener('load', onSiteLoad);
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.searchFilm.value;
    
    resetMarkup();
    console.log('Фильмы по запросу');
    service.getFilmsByQuery(query).then(console.log);
}

function onSiteLoad(e) {
    resetMarkup();
    refs.galleryRef.innerHTML = '<h1>здесь будут популярные за день фильмы ;)</h1>'
    console.log('Фильмы, приходящие, при загрузке страницы');
    service.getPopularFilms().then(console.log);
};

function resetMarkup() {
    refs.galleryRef.innerHTML = '';
};