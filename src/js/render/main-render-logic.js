import refs from './refs';

import ApiService from '../API/api-service';
import {convertIdInGenre} from '../API/convertIdtoGenre';
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
// import renderFilmList from './render-film-list.js';
// import render-film-list2 from './render-film-list2.js';

const service = new ApiService;

window.addEventListener('load', onSiteLoad);
refs.formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.searchFilm.value;

    if (query.trim() === '') {
        return;
    }
    
    resetMarkup();
    console.log(`Фильмы по запросу ${query}:`);
    refs.galleryRef.innerHTML = '<h1>здесь будут фильмы по запросу ;)</h1>'
    service.getFilmsByQuery(query).then(data => {
        if (data.total_results === 0) {
            console.log('запросов не найдено')
            return
        };
        console.log(data);
    });
}

function onSiteLoad(e) {
    resetMarkup();
    refs.galleryRef.innerHTML = '<h1>здесь будут популярные за день фильмы ;)</h1>'
    console.log('Фильмы, приходящие, при загрузке страницы');
    getFilmsByUrl('/3/trending/all/day'); 
    service.getPopularFilms().then(data => {
      if (data.total_results === 0) {
          console.log('запросов не найдено')
          return
      };
      console.log(data);
  });
};

function getFilmsByUrl(url) {
    service.urlPath = url;
    service.getFilms().then((data) => {
        console.log(data.results);
        showMovies(data.results);
    });
};


function resetMarkup() {
    refs.galleryRef.innerHTML = '';
};


