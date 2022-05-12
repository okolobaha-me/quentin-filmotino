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
    };
  }

  getFilms = async () => {
    const response = await this.service.get(this.options.urlPath);
    return response.data;
  };

  getFilmsByQuery(q) {}

  resetUrlPath() {
    this.options.urlPath = '';
  }

  get urlPath() {
    return this.options.urlPath;
  }

  set urlPath(newPath) {
    this.options.urlPath = newPath;
  }
}
