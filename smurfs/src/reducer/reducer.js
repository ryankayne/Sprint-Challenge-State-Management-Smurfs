// import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions/actions';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case 'FETCH_SMURF_START':
        return {
            ...state,
            error: '',
            isFetching: true,
        };
        case 'FETCH_SMURF_SUCCESS':
            // console.log(action.payload)
        return {
            ...state,
            error: '',
            isFetching: false,
            smurfs: action.payload
        };
        case 'FETCH_SMURF_FAILURE':
        return {
            ...state,
            error: action.payload,
            isFetching: false,
        };
        case 'ADD_SMURF_START':
            return {
            ...state,
            error: '',
            };
        case 'ADD_SMURF_SUCCESS':
        return {
            ...state,
            error: '',
            smurfs: action.payload
        };
        case 'ADD_SMURF_FAILURE':
        return {
            ...state,
            error: action.payload
        };
        default:
        return state
    }
}

export default reducer;