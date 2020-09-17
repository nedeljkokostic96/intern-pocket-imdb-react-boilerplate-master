import { all, takeLatest } from 'redux-saga/effects';
import {
    LOGIN,
    REGISTER,
    GET_MOVIES,
    GET_SINGLE_MOVIE,
    GET_MOVIES_LIKE,
    ADD_REACTION,
    INCREMENT_VIEWS,
    GET_GENRES,
    GET_MOVIES_BY_GENRE,
} from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import {
    moviesGet,
    getSingleMovie,
    getMoviesLike,
    addReaction,
    incrementViews,
    genresGet,
    getMoviesByGenre,
} from './MovieSagas';

export default function* rootSaga() {
    yield all([
        takeLatest(LOGIN, userLogin),
        takeLatest(REGISTER, userRegister),
        takeLatest(GET_MOVIES, moviesGet),
        takeLatest(GET_SINGLE_MOVIE, getSingleMovie),
        takeLatest(GET_MOVIES_LIKE, getMoviesLike),
        takeLatest(ADD_REACTION, addReaction),
        takeLatest(INCREMENT_VIEWS, incrementViews),
        takeLatest(GET_GENRES, genresGet),
        takeLatest(GET_MOVIES_BY_GENRE, getMoviesByGenre),
    ]);
}
