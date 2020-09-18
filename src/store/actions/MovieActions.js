import {
    GET_MOVIES,
    SET_MOVIES,
    GET_SINGLE_MOVIE,
    SET_SINGLE_MOVIE,
    GET_MOVIES_LIKE,
    SET_MOVIES_LIKE,
    ADD_REACTION,
    INCREMENT_VIEWS,
    GET_GENRES,
    SET_GENRES,
    GET_MOVIES_BY_GENRE,
    ADD_COMMENT,
    GET_COMMENTS_FOR_MOVIE,
    SET_COMMENTS_FOR_MOVIE,
    GET_HOTEST_MOVIES,
    SET_HOTEST_MOVIES,
    GET_RELATED_MOVIES,
    SET_RELATED_MOVIES,
    GET_USERS_MOVIE_LIST,
    SET_USERS_MOVIE_LIST,
    MARK_MOVIE_AS_WATCHED,
    ADD_MOVIE_TO_LIST,
    REMOVE_MOVIE_FROM_LIST,
} from './ActionTypes';

export const getMovies = (payload) => {
    return {
        type: GET_MOVIES,
        payload,
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

export const getMoviesLike = (payload) => {
    return {
        type: GET_MOVIES_LIKE,
        payload,
    };
};

export const setMoviesLike = (payload) => {
    return {
        type: SET_MOVIES_LIKE,
        payload,
    };
};

export const addReaction = (payload) => {
    return {
        type: ADD_REACTION,
        payload,
    };
};

export const incrementViews = (payload) => {
    return {
        type: INCREMENT_VIEWS,
        payload,
    };
};

export const getGenres = () => {
    return {
        type: GET_GENRES,
    };
};

export const setGenres = (payload) => {
    return {
        type: SET_GENRES,
        payload,
    };
};

export const getMoviesByGenre = (payload) => {
    return {
        type: GET_MOVIES_BY_GENRE,
        payload,
    };
};

export const addComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload,
    };
};

export const getCommentsForMovie = (payload) => {
    return {
        type: GET_COMMENTS_FOR_MOVIE,
        payload,
    };
};

export const setCommentsForMovie = (payload) => {
    return {
        type: SET_COMMENTS_FOR_MOVIE,
        payload,
    };
};

export const getHotestMovies = (payload) => {
    return {
        type: GET_HOTEST_MOVIES,
        payload,
    };
};

export const setHotestMovies = (payload) => {
    return {
        type: SET_HOTEST_MOVIES,
        payload,
    };
};

export const getRelatedMovies = (payload) => {
    return {
        type: GET_RELATED_MOVIES,
        payload,
    };
};

export const setRelatedMovies = (payload) => {
    return {
        type: SET_RELATED_MOVIES,
        payload,
    };
};

export const getUsersMovieList = () => {
    return {
        type: GET_USERS_MOVIE_LIST,
    };
};

export const setUsersMovieList = (payload) => {
    return {
        type: SET_USERS_MOVIE_LIST,
        payload,
    };
};

export const markMovieAsWatched = (payload) => {
    return {
        type: MARK_MOVIE_AS_WATCHED,
        payload,
    };
};

export const addMovieToList = (payload) => {
    return {
        type: ADD_MOVIE_TO_LIST,
        payload,
    };
};

export const removeMovieFromList = (payload) => {
    return {
        type: REMOVE_MOVIE_FROM_LIST,
        payload,
    };
};
