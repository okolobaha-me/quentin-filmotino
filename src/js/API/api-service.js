import axios from 'axios';
const API_KEY = '79fb62b7e77dc5ee41dd0c1332d74198';
const BASE_URL = 'https://api.themoviedb.org';

export default class {
  constructor() {
    this.service = axios.create({
      baseURL: BASE_URL,
      params: {
        api_key: API_KEY,
      },
    });

    this.options = {
      urlPath: '',
      page: 1,
      perPage: 24,
    };
  }

  // **getFilm-funcs**

  async getFilms() {
    const response = await this.service.get(this.options.urlPath);

    response.data.results.length = this.options.perPage;
    return response.data;
  }

  getPopularFilms({ page = this.options.page, language = 'en' } = {}) {
    const url = `/3/trending/all/day?page=${page}&language=${language}`;

    this.changeUrlPath(url);
    return this.getFilms();
  }

  getFilmsByQuery({ query = '', page = this.options.page, language = 'en' } = {}) {
    const url = `3/search/movie?query=${query}&page=${page}&language=${language}`;

    this.changeUrlPath(url);
    return this.getFilms();
  }

  async getFilmById({ id = null, language = 'en' } = {}) {
    const url = `/3/movie/${id}?language=${language}`;

    this.changeUrlPath(url);

    const response = await this.service.get(this.options.urlPath);
    return response.data;
  }

  // **url-funcs**

  changeUrlPath(newPath) {
    this.options.urlPath = newPath;
  }

  resetUrlPath() {
    this.options.urlPath = '';
  }

  // **pag-funcs**

  increasePage() {
    this.options.page += 1;
  }

  decreasePage() {
    this.options.page -= 1;
  }

  resetPage() {
    this.options.page = 1;
  }

  getTotalResults(obj) {
    return obj.total_results;
  }

  // **get-set**

  get page() {
    return this.options.page;
  }

  set page(newPage) {
    this.options.page = newPage;
  }

  get urlPath() {
    return this.options.urlPath;
  }

  set urlPath(newPath) {
    this.options.urlPath = newPath;
  }
}
