import { all, takeLatest } from 'redux-saga/effects';
import {
    LOGIN,
    REGISTER,
    GET_MOVIES,
    GET_SINGLE_MOVIE,
} from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { moviesGet, getSingleMovie } from './MovieSagas';

export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, userLogin),
        takeLatest(REGISTER, userRegister),
        takeLatest(GET_MOVIES, moviesGet),
        takeLatest(GET_SINGLE_MOVIE, getSingleMovie),
    ]);
}
