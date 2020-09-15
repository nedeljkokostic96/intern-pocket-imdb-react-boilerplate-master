import {
    GET_MOVIES,
    SET_MOVIES,
    GET_SINGLE_MOVIE,
    SET_SINGLE_MOVIE,
} from './ActionTypes';

export const getMovies = () => {
    return {
        type: GET_MOVIES,
    };
};

export const setMovies = (payload) => {
    return {
        type: SET_MOVIES,
        payload,
    };
};

export const getSingleMovie = (payload) => {
    return {
        type: GET_SINGLE_MOVIE,
        payload,
    };
};

export const setSingleMovie = (payload) => {
    return {
        type: SET_SINGLE_MOVIE,
        payload,
    };
};
