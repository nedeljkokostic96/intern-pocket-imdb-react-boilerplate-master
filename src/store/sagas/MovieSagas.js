import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovies, setSingleMovie } from '../actions/MovieActions';

export function* moviesGet() {
    try {
        const { data } = yield call(movieService.getMovies);

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
