import refs from './refs';

import ApiService from '../API/api-service';

// import renderFilmList from './render-film-list.js';

const service = new ApiService;

window.addEventListener('load', onSiteLoad);
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.searchFilm.value;
    const url = `3/search/movie?query=${query}`;
    
    resetMarkup();
    refs.galleryRef.innerHTML = '<h1>здесь будут приходящие фильмы ;)</h1>';    // **delete**
    console.log('Фильмы по запросу');
    getFilmsByUrl(url);
}

function onSiteLoad(e) {
    const url = '/3/trending/all/day';

    resetMarkup();
    refs.galleryRef.innerHTML = '<h1>здесь будут популярные за день фильмы ;)</h1>'
    console.log('Фильмы, приходящие, при загрузке страницы');
    getFilmsByUrl(url); 
};


function getFilmsByUrl(url) {
    service.urlPath = url;
    service.getFilms().then((data) => {
        console.log(data);
    });
};

function resetMarkup() {
    refs.galleryRef.innerHTML = '';
};