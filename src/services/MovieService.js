import ApiService from './ApiService';

const ENDPOINTS = {
    MOVIES: '/api/movies',
    LIKES: '/api/likes',
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
}

export const movieService = new MovieService();
