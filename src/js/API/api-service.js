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
            perPage: 20,
        };
    };

    getFilms = async () => {
        const response = await this.service.get(this.options.urlPath);
        
        response.data.page = this.options.page;
        response.data.results.length = this.options.perPage;

        return response.data;
    };

    resetUrlPath() {
        this.options.urlPath = '';
    };

    increasePage() {
        this.options.page += 1;
    };

    decreasePage() {
        this.options.page -= 1;
    };

    resetPage() {
        this.options.page = 1;
    };
    
    
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