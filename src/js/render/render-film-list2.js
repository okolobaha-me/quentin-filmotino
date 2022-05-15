import { getGenres } from '../API/convertIdtoGenre';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function showMovies(data) {
  const arr = Array.isArray(data) ? data : data.results;

  return arr
    .map(
      ({
        title,
        name,
        poster_path,
        vote_average,
        release_date,
        genre_ids,
        first_air_date,
        id,
        genres,
      }) => {
        const date = first_air_date || release_date;

        const g = genre_ids || genres;

        return `
        <li class="filmList__item" id="${id}">
        <div class="filmList__link">
          <div class="filmList__poster">
            <picture>
              <img
                src="${IMG_URL + poster_path}"
                alt="${title}"
              />
            </picture>
          </div>
          <h2 class="filmList__title">${title || name}</h2>
          <div class="filmList__info">
            <p class="filmList__text">
              <span class="filmList__genge">${getGenres(g)}</span> |
              <span class="filmList__releaseDate">${date ? date.slice(0, 4) : ''}</span>
            </p>
            <p class="filmList__voteAverage">${vote_average}</p>
          </div>
        </div>
        </li>
        `;
      },
    )
    .join('');
}
