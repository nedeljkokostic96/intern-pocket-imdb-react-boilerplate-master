import { call, put } from 'redux-saga/effects';
import { movieService } from '../../services/MovieService';
import {
    setMovies,
    setSingleMovie,
    setMoviesLike,
    setGenres,
    setCommentsForMovie,
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
        console.log(data);
        if (data.status) {
            //getMovies({ page: 1 });
            console.log(data);
        }
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
        if (data.status) {
            console.log(data);
        }
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
