const API_KEY = 'api_key=79fb62b7e77dc5ee41dd0c1332d74198';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' +API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const main = document.getElementsByClassName('filmList');

getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        // showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, release_date, genre_ids} = movie;
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
              <span class="filmList__genge">${genre_ids}</span> |
              <span class="filmList__releaseDate">${release_date}</span>
            </p>
            <p class="filmList__voteAverage">${vote_average}</p>
          </div>
        </div>
        `

        main.appendChild(movieEl);
    })
}

