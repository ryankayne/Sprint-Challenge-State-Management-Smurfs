import axios from 'axios';

// export const FETCH_SMURF_START = 'FETCH_SMURF_START';
// export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
// export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const getSmurf = () => dispatch => {
    // console.log('Getting smurf');
    dispatch({ type: 'FETCH_SMURF_START' });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: res.data})
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ 
                type: 'FETCH_SMURF_FAILURE', 
                payload: `${err.response.status} ${err.response.data}` })
        })
    };

export const addSmurf = (newSmurf) => dispatch => {
    console.log(newSmurf);
    dispatch({ type: 'ADD_SMURF_START' });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res);
            dispatch({type: 'ADD_SMURF_SUCCESS', payload: res.data})
            })
            .catch(error => {
                console.log(error);
                dispatch({type: 'ADD_SMURF_FAILURE', payload: error.res})
            });
    }


export function removeSmurf(removedSmurf) {
    return dispatch => {
        dispatch({type: 'REMOVE_SMURF', payload: removedSmurf})
        axios
         .delete(`http://localhost:3333/smurfs/${removedSmurf.id}`)
         .then((res) =>{
             console.log(res)
         })
    }
}