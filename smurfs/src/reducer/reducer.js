import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions/actions';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_SMURF_START:
        return {
            ...state,
            error: '',
            isFetching: true,
        };
        case FETCH_SMURF_SUCCESS:
        return {
            ...state,
            error: '',
            isFetching: false,
            smurf: action.payload
            }
        case FETCH_SMURF_FAILURE:
        return {
            ...state,
            error: action.payload,
            isFetching: false,
        }
        default:
        return state
    }
}

export default reducer;