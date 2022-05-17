import genres from './getGenres';

const str = `${getGenres(genres)}`;

export function getGenres(list) {
  if (!list.length) return '';
  const language = window.location.hash.substring(1);
  const g = [];

  for (const re of list) {
    if (g.length === 2) {
      g.push('...');
      break;
    }

    if (typeof re === 'object') {
      g.push(re.name);
      continue;
    }

    if (!genres[re]) continue;

    g.push(genres[re][language]);
  }

  return g.map(g => `${g}`).join(', ');
}
