import ApiService from './ApiService';

const ENDPOINTS = {
    MOVIES: '/api/movies',
    LIKES: '/api/likes',
    GENRES: '/api/genres',
    COMMENTS: '/api/comments',
    WATCHLIST: '/api/watchlists',
    OMDB: 'http://www.omdbapi.com/?apikey=48ae78b7&t=',
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

    getHotestMovies = (payload) => {
        return this.apiClient.get(
            ENDPOINTS.MOVIES + '/hotest/' + payload.numberOfHotest
        );
    };

    getRelatedMovies = (payload) => {
        return this.apiClient.get(
            ENDPOINTS.MOVIES + '/related/' + payload.movieId
        );
    };

    getUsersMovieList = () => {
        return this.apiClient.get(ENDPOINTS.WATCHLIST);
    };

    markMovieAsWatched = (payload) => {
        return this.apiClient.patch(
            ENDPOINTS.WATCHLIST + '/' + payload.watchId
        );
    };

    addMovieToList = (payload) => {
        return this.apiClient.post(ENDPOINTS.WATCHLIST, payload);
    };

    removeMovieFromList = (payload) => {
        return this.apiClient.delete(
            ENDPOINTS.WATCHLIST + '/' + payload.watchId
        );
    };

    addMovie = (payload) => {
        console.log(payload);
        return this.apiClient.post(ENDPOINTS.MOVIES, payload);
    };

    getMovieFromOMDB = async (payload) => {
        const header = this.apiClient.defaults.headers['Authorization'];
        this.api.removeHeaders(['Authorization']);
        let { data } = await this.apiClient.get(ENDPOINTS.OMDB + payload.title);
        let result = {};
        if (data.Response !== 'False') {
            const title = data.Title;
            let rawGenre = data.Genre;
            const genre = rawGenre.split(',')[0].toLowerCase();
            const image_url = data.Poster;
            const description = data.Plot;
            result = {
                title: title,
                genre: genre,
                image_url: image_url,
                description: description,
            };
        }
        this.api.attachHeaders({ Authorization: header });
        return result;
    };
}

export const movieService = new MovieService();
