import genres from './getGenres';

export const getGenresNames = function (genreIds) {
  const genresNames = [];
  let language = window.location.hash;
  language = language.substring(1);
  console.log(genreIds);
  for (let genreId of Object.values(genreIds)) {
    genres.genres.forEach(genre => {
      if (language === 'uk') {
        genresNames.push(genre.nameUk);
      }
      if (language === 'en') {
        genresNames.push(genre.nameEn);
      }
    });
  }
  const genre2 = genresNames.slice(0, 2);
  if (genresNames.length > 2 && language === 'en') {
    genre2.push('Others');
  }
  if (genresNames.length > 2 && language === 'uk') {
    genre2.push('Інші');
  }
  return genre2.join(', ');
};