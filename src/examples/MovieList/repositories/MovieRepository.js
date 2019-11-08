import BaseRepository from './BaseRepository';

class MovieRepository extends BaseRepository {
    getNowPlaying(params) {
        const defaultParams = {};
        return this.getContent('/movie/now_playing', {...defaultParams, ...params})
    }
}

export default new MovieRepository();
