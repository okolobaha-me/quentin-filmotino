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

  export default function () {}