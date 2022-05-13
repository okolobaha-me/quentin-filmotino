const axios = require('axios');


const API_KEY = '79fb62b7e77dc5ee41dd0c1332d74198';
const STORAGE_KEY = 'genres';

saveLocalStorage();

async function fetchGenres () {
    URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';
    try {
        const { data } = await axios.get(`${URL}${API_KEY}&language=en-US`);
        return data.genres ;
    } catch (error) {
        console.log(error);
    };
};

function saveLocalStorage() {
    fetchGenres()
        .then((genres) => {            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(genres));
    });
};

export function convertIdInGenre(id) {
    let  arr = localStorage.getItem(STORAGE_KEY)
    for (const el of JSON.parse(arr)) {
        if (el.id === id) {
            return el.name;
        };
    };
};

export function movieGenresIfEmpty(arr) {
    let string = ', Other';
    if (arr) {
        if (arr.length === 0) {
        return 'Genre unavailable';
    }   else 
        if (arr.length <= 2) {
        return arr.slice().join(', ');
    } else {
        return arr.slice(0, 2).join(', ') + string.toLowerCase();
        };
    }  
};