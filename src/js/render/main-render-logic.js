import refs from './refs';

import ApiService from '../API/api-service';

// import renderFilmList from './render-film-list.js';

const service = new ApiService;

window.addEventListener('load', onSiteLoad);
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.searchFilm.value;
   
    console.log('Фильмы по запросу');
    getFilmsByUrl(`3/search/movie?query=${query}`);
}

function onSiteLoad(e) {
    console.log('Фильмы, приходящие, при загрузке страницы');
    getFilmsByUrl('/3/trending/all/day'); 
};


function getFilmsByUrl(url) {
    service.urlPath = url;
    service.getFilms().then((data) => {
        console.log(data);
    });
};