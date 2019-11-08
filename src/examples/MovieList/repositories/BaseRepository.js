import {stringify} from 'query-string';

class BaseRepository {
    apiBase = 'https://api.themoviedb.org/3';

    getContent(path, params = {}) {
        const defaultParams = {
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            // region: 'TR',
            //append
        };
        const requestParams = {...defaultParams, ...params};
        const myRequest = `${this.apiBase}${path}?${stringify(requestParams)}`;

        return fetch(myRequest)
            .then(response => response.json())
    }
}

export default BaseRepository;
