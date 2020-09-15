import ApiService from './ApiService';

const ENDPOINTS = {
    MOVIES: '/api/movies',
};

class MovieService extends ApiService {
    getMovies = () => {
        return this.apiClient.get(ENDPOINTS.MOVIES);
    };

    getSingleMovie = (id) => {
        return this.apiClient.get(ENDPOINTS.MOVIES + '/' + id);
    };
}

export const movieService = new MovieService();
