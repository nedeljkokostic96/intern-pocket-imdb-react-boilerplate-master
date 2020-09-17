import ApiService from './ApiService';

const ENDPOINTS = {
    MOVIES: '/api/movies',
    LIKES: '/api/likes',
    GENRES: '/api/genres',
    COMMENTS: '/api/comments',
};

class MovieService extends ApiService {
    getMovies = (page) => {
        return this.apiClient.get(ENDPOINTS.MOVIES + '?page=' + page);
    };

    getSingleMovie = (id) => {
        return this.apiClient.get(ENDPOINTS.MOVIES + '/' + id);
    };

    getMoviesLike = (title) => {
        return this.apiClient.get(ENDPOINTS.MOVIES + '/like/' + title);
    };

    addReaction = (payload) => {
        return this.apiClient.post(ENDPOINTS.LIKES, payload);
    };

    incrementViews = (payload) => {
        return this.apiClient.put(
            ENDPOINTS.MOVIES + '/views/' + payload.movieId
        );
    };

    getGenres = () => {
        return this.apiClient.get(ENDPOINTS.GENRES);
    };

    getMoviesByGenre = (payload) => {
        const url =
            parseInt(payload.genreId) > 0
                ? ENDPOINTS.MOVIES + '/genre/' + payload.genreId
                : ENDPOINTS.MOVIES + '?page=1';
        return this.apiClient.get(url);
    };

    addComment = (payload) => {
        return this.apiClient.post(ENDPOINTS.COMMENTS, payload);
    };

    getCommentsForMovie = (payload) => {
        return this.apiClient.get(
            ENDPOINTS.COMMENTS +
                '/movie/' +
                payload.movieId +
                '?page=' +
                payload.page
        );
    };
}

export const movieService = new MovieService();
