import { ADD_PERSON, REMOVE_PERSON } from '../actions';

const initialState = {
    people: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return { ...state, people: [...state.people, action.payload.person] };
        case REMOVE_PERSON:
            return { ...state, people: state.people.filter(e => e.id !== action.payload.id) };
        default:
            return state;
    }
};

export default reducer;
