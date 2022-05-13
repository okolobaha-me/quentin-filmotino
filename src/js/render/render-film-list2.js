import {convertIdInGenre, movieGenresIfEmpty} from '../API/convertIdtoGenre';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


  export default function showMovies(data){
    console.log('data', data);
    const arr = data.results
    return arr.map(
         ({title, name, poster_path, vote_average, release_date, genre_ids}) => {
  
        let movieGenres = [];
        for (let i = 0; i < genre_ids.length; i += 1) {
        let genre = convertIdInGenre(genre_ids[i]);
        movieGenres.push(genre);
        };
        return `
        <li class="filmList__item">
        <div class="filmList__link">
          <div class="filmList__poster">
            <picture>
              <img
                src="${IMG_URL+poster_path}"
                alt="${title}"
              />
            </picture>
          </div>
          <h2 class="filmList__title">${title||name}</h2>
          <div class="filmList__info">
            <p class="filmList__text">
              <span class="filmList__genge">${movieGenresIfEmpty(movieGenres)}</span> |
              <span class="filmList__releaseDate">${release_date ? release_date.slice(0, 4):''}</span>
            </p>
            <p class="filmList__voteAverage">${vote_average}</p>
          </div>
        </div>
        </li>
        `;
    },) .join('');
  }

  
