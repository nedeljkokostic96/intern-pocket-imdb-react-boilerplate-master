import { SET_MOVIES, SET_SINGLE_MOVIE } from '../actions/ActionTypes';

const initialState = {
    all: [],
    singleMovie: {},
};
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return { ...state, all: action.payload };
        case SET_SINGLE_MOVIE:
            return { ...state, singleMovie: action.payload };
        default:
            return state;
    }
};

export default movieReducer;
