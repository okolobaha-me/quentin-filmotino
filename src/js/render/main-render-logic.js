import refs from './refs';

import ApiService from '../API/api-service';
import {convertIdInGenre} from '../API/convertIdtoGenre';
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
// import renderFilmList from './render-film-list.js';

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

function showMovies(data){
  main.innerHTML = '';

  data.forEach(movie => {
      const {title, poster_path, vote_average, release_date, genre_ids} = movie;

      let movieGenres = [];
      for (let i = 0; i < genre_ids.length; i += 1) {
      let genre = convertIdInGenre(genre_ids[i]);
      movieGenres.push(genre);
      };


      const movieEl = document.createElement('li');
      movieEl.classList.add('filmList__item');
      movieEl.innerHTML = `
      <div class="filmList__link">
        <div class="filmList__poster">
          <picture>
            <img
              src="${IMG_URL+poster_path}"
              alt="${title}"
            />
          </picture>
        </div>
        <h2 class="filmList__title">${title}</h2>
        <div class="filmList__info">
          <p class="filmList__text">
            <span class="filmList__genge">${movieGenres}</span> |
            <span class="filmList__releaseDate">${release_date}</span>
          </p>
          <p class="filmList__voteAverage">${vote_average}</p>
        </div>
      </div>
      `

      main.appendChild(movieEl);
  })
}

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


