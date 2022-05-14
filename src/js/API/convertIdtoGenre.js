import genres from './getGenres';

export const getGenresNames = function (genreIds) {
  const genresNames = [];
  console.log(genreIds);
  for (let genreId of Object.values(genreIds)) {
    genres.genres.forEach(genre => {
      if (genreId === genre.id) {
        genresNames.push(genre.name);
      }
    });
  }
  const genre2 = genresNames.slice(0, 2);
  if (genresNames.length > 2) {
    genre2.push('Others');
  }
  return genre2.join(', ');
};