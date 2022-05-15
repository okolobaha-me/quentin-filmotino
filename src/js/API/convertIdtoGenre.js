import genres from './getGenres';





const str = `${getGenres(genres)}`;

export function getGenres(list) {
  if (!list.length) return '';
  let language = window.location.hash;
  language = language.substring(1);
  console.log(language);
  // const lan = getLang();
  const g = [];
  for (const re of list) {
    if (g.length === 2) {
      g.push('...');
      break;
    }
    // if (если нету такого id) continue
    console.log(re)
    console.log(genres[re.toString()])
    g.push(genres[re][language]);
  }
  return g.map(g => `${g}`).join(', ');
}

