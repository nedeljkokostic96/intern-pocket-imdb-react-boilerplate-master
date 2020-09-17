import {
    SET_MOVIES,
    SET_SINGLE_MOVIE,
    SET_MOVIES_LIKE,
    SET_GENRES,
} from '../actions/ActionTypes';

const initialState = {
    all: [],
    singleMovie: {},
    moviesLike: [],
    genres: [],
};
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return { ...state, all: action.payload };
        case SET_SINGLE_MOVIE:
            return { ...state, singleMovie: action.payload };
        case SET_MOVIES_LIKE:
            return { ...state, moviesLike: action.payload };
        case SET_GENRES:
            return { ...state, genres: action.payload };
        default:
            return state;
    }
};

export default movieReducer;
