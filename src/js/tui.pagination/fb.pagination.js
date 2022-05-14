import Pagination from 'tui-pagination';
import refs from '../render/refs';
import showMovies from '../render/render-film-list2.js';
/*
const arrMovie = [
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 4,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 7,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 9,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
  {
    adult: false,
    backdrop_path: '/fMiEp00v8gGWEceL4QeLu6H6z69.jpg',
    genre_ids: (5)[(28, 12, 18, 14, 36)],
    id: 639933,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'The Northman',
    overview:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    popularity: 641.782,
    poster_path: '/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
    release_date: '2022-04-07',
    title: 'The Northman',
    video: false,
    vote_average: 7.6,
    vote_count: 598,
  },
];*/

function createPaginationFB(arr) {
  const options = {
    totalItems: arr.length,
    itemsPerPage: 3,
    visiblePages: 3,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };
  const firstPageCreate = newPageArr(arr, 1);
  //const markup = тут будет функция рендера( firstPageCreate);
  //refs.galleryRef.insertAdjacentHTML('beforeend', markup);

  const pagination = new Pagination(refs.containerRef, options);
  let newArr = arr;
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    const listMovie = newPageArr(newArr, currentPage);

    console.log(listMovie);

    refs.galleryRef.innerHTML = '';
    //const markup = тут будет функция рендера(listMovie);
    //refs.galleryRef.insertAdjacentHTML('beforeend', markup);
  });
}

function newPageArr(arr, page) {
  const perPage = 3;
  const newArr = arr.slice(perPage * (page - 1), perPage * page);
  return newArr;
}
//createPaginationFB(arrMovie);
