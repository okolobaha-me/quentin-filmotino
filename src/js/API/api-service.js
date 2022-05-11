import axios from 'axios';

const API_KEY = '79fb62b7e77dc5ee41dd0c1332d74198';
const BASE_URL = 'https://api.themoviedb.org';

export default class {
    constructor(elements = 20) {
        this.service = axios.create({
            baseURL: BASE_URL,
            params: {
                api_key: API_KEY,
            },
        });

        this.options = {
            urlPath: '',
            page: 1,
            perPage: elements,
        };
    };

    // **getFilm-funcs**

    getFilms = async () => {
        const response = await this.service.get(this.options.urlPath);
        
        response.data.page = this.options.page;
        response.data.results.length = this.options.perPage;

        return response.data;
    };

    getPopularFilms() {
        this.changeUrlPath('/3/trending/all/day');
        return this.getFilms();
    };

    getFilmsByQuery(q) {
        this.changeUrlPath(`3/search/movie?query=${q}`);
        return this.getFilms();
    };

    // **url-funcs**

    changeUrlPath(newPath) {
        this.options.urlPath = newPath;
    };

    resetUrlPath() {
        this.options.urlPath = '';
    };

    // **pag-funcs**

    increasePage() {
        this.options.page += 1;
    };

    decreasePage() {
        this.options.page -= 1;
    };

    resetPage() {
        this.options.page = 1;
    };

    // **get-set**

    
    get page() {
        return this.options.page;
    };

    set page(newPage) {
        this.options.page = newPage;
    };

    get urlPath() {
        return this.options.urlPath;
    };

    set urlPath(newPath) {
        this.options.urlPath = newPath;
    };
};