import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import {
    setMovies,
    setSingleMovie,
    setMoviesLike,
} from '../actions/MovieActions';

export function* moviesGet({ payload }) {
    try {
        const { data } = yield call(movieService.getMovies, payload.page);

        yield put(setMovies(data));
    } catch (error) {
        console.log({ error }); /*eslint-disable-line*/
    }
}

export function* getSingleMovie({ payload }) {
    try {
        const { data } = yield call(movieService.getSingleMovie, payload.id);

        yield put(setSingleMovie(data));
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
