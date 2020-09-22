import {
    SET_MOVIES,
    SET_SINGLE_MOVIE,
    SET_MOVIES_LIKE,
    SET_GENRES,
    SET_COMMENTS_FOR_MOVIE,
    SET_HOTEST_MOVIES,
    SET_RELATED_MOVIES,
    SET_USERS_MOVIE_LIST,
    INJECT_REACTION,
    PUT_MOVIE_FROM_OMDB,
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
    movieFromOMDB: {},
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
            return addPagination(state, action);
        case SET_HOTEST_MOVIES:
            return { ...state, hotestMovies: action.payload };
        case SET_RELATED_MOVIES:
            return { ...state, relatedMovies: action.payload };
        case SET_USERS_MOVIE_LIST:
            return { ...state, usersMovieList: action.payload };
        case INJECT_REACTION:
            console.log(state);
            console.log(action.payload);
            return injectReaction(state, action.payload);
        case PUT_MOVIE_FROM_OMDB:
            return { ...state, movieFromOMDB: action.payload };
        default:
            return state;
    }
};

const addPagination = (state, action) => {
    let newPaginate = action.payload;
    const allComs =
        state.comments.data === undefined
            ? newPaginate
            : state.comments.data.concat(newPaginate.data);
    newPaginate.data =
        state.comments.data === undefined ? newPaginate.data : allComs;
    return { ...state, comments: action.payload };
};

const injectReaction = (state, payload) => {
    let all = [...state.all];
    all.forEach((elem) => {
        if (elem.id === payload.movie_id) {
            elem.likes.push(payload);
        }
    });
    let singleMovie = Object.assign({}, state.singleMovie);
    if (state.singleMovie.id === payload.movie_id) {
        singleMovie.likes.push(payload);
    }
    const res = { ...state, all: all, singleMovie: singleMovie };
    return res;
};

export default movieReducer;
