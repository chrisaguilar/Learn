import { STORE_RESULT, DELETE_RESULT } from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_RESULT:
            return { ...state, results: [...state.results, { id: new Date(), value: action.payload.result }] };
        case DELETE_RESULT:
            return { ...state, results: state.results.filter(e => e.id !== action.payload.id) };
        default:
            return state;
    }
};

export default reducer;
