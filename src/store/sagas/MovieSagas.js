import { call, put } from 'redux-saga/effects';
import { movieService } from '../../services/MovieService';
import {
    setMovies,
    setSingleMovie,
    setMoviesLike,
    setGenres,
    setCommentsForMovie,
    setHotestMovies,
    setRelatedMovies,
    setUsersMovieList,
    putMovieFromOMDB,
} from '../actions/MovieActions';

export function* moviesGet({ payload }) {
    try {
        const data = yield call(movieService.getMovies, payload.page);
        yield put(setMovies(data.data));
    } catch (error) {
        console.log({ error }); /*eslint-disable-line*/
    }
}

export function* getSingleMovie({ payload }) {
    try {
        const { data } = yield call(movieService.getSingleMovie, payload.id);
        yield put(setSingleMovie(data[0]));
    } catch (error) {
        console.log(error);
    }
}

export function* getMoviesLike({ payload }) {
    try {
        const { data } = yield call(movieService.getMoviesLike, payload.title);
        yield put(setMoviesLike(data === '' ? [] : data));
    } catch (error) {
        console.log(error);
    }
}

export function* addReaction({ payload }) {
    try {
        const { data } = yield call(movieService.addReaction, payload);
        // console.log(payload);
        // if (parseInt(payload.page) > 0) {
        //     yield put(getMovies({ page: payload.page }));
        //     return;
        // }
        // yield put(push('/movies/' + payload.movieId));
        // if (data) {
        //     yield put(injectReaction(data.like));
        // }
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export function* incrementViews({ payload }) {
    try {
        const { data } = yield call(movieService.incrementViews, payload);
        if (!data.status) {
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

export function* genresGet() {
    try {
        const { data } = yield call(movieService.getGenres);
        yield put(setGenres(data));
    } catch (error) {
        console.log(error);
    }
}

export function* getMoviesByGenre({ payload }) {
    try {
        const { data } = yield call(movieService.getMoviesByGenre, payload);
        console.log(data);
        yield put(setMovies(data));
    } catch (error) {
        console.log(error);
    }
}

export function* addComment({ payload }) {
    try {
        const { data } = yield call(movieService.addComment, payload);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export function* getCommentsForMovie({ payload }) {
    try {
        const { data } = yield call(movieService.getCommentsForMovie, payload);
        yield put(setCommentsForMovie(data));
    } catch (error) {
        console.log(error);
    }
}

export function* getHotestMovies({ payload }) {
    try {
        const { data } = yield call(movieService.getHotestMovies, payload);
        yield put(setHotestMovies(data));
    } catch (error) {
        console.log(error);
    }
}

export function* getRelatedMovies({ payload }) {
    try {
        const { data } = yield call(movieService.getRelatedMovies, payload);
        yield put(setRelatedMovies(data));
    } catch (error) {
        console.log(error);
    }
}

export function* getMovieListForUser() {
    try {
        const { data } = yield call(movieService.getUsersMovieList);
        yield put(setUsersMovieList(data));
    } catch (error) {
        console.log(error);
    }
}

export function* markMovieAsWatched({ payload }) {
    try {
        const { data } = yield call(movieService.markMovieAsWatched, payload);
        console.log(data);
        yield put(setUsersMovieList(data));
    } catch (error) {
        console.log(error);
    }
}

export function* addMovieToList({ payload }) {
    try {
        const { data } = yield call(movieService.addMovieToList, payload);
        yield put(setUsersMovieList(data));
    } catch (error) {
        console.log(error);
    }
}

export function* removeMovieFromList({ payload }) {
    try {
        const { data } = yield call(movieService.removeMovieFromList, payload);
        yield put(setUsersMovieList(data));
    } catch (error) {
        console.log(error);
    }
}

export function* addMovie({ payload }) {
    try {
        const { data } = yield call(movieService.addMovie, payload);
        if (data.status) {
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

export function* getMovieFromOMDB({ payload }) {
    try {
        const response = yield call(movieService.getMovieFromOMDB, payload);
        yield put(putMovieFromOMDB(response));
    } catch (error) {
        console.log(error);
    }
}
