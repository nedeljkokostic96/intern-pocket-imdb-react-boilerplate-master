import {
    SET_MOVIES,
    SET_SINGLE_MOVIE,
    SET_MOVIES_LIKE,
    SET_GENRES,
    SET_COMMENTS_FOR_MOVIE,
    SET_HOTEST_MOVIES,
    SET_RELATED_MOVIES,
    SET_USERS_MOVIE_LIST,
} from '../actions/ActionTypes';

const initialState = {
    all: [],
    singleMovie: {},
    moviesLike: [],
    genres: [],
    comments: [],
    hotestMovies: [],
    relatedMovies: [],
    usersMovieList: [],
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
        case SET_COMMENTS_FOR_MOVIE:
            let newPaginate = action.payload;
            const allComs =
                state.comments.data === undefined
                    ? newPaginate
                    : state.comments.data.concat(newPaginate.data);
            newPaginate.data =
                state.comments.data === undefined ? newPaginate.data : allComs;
            return { ...state, comments: action.payload };
        case SET_HOTEST_MOVIES:
            return { ...state, hotestMovies: action.payload };
        case SET_RELATED_MOVIES:
            return { ...state, relatedMovies: action.payload };
        case SET_USERS_MOVIE_LIST:
            return { ...state, usersMovieList: action.payload };
        default:
            return state;
    }
};

export default movieReducer;
