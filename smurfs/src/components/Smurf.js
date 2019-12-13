import React from 'react';
import { connect } from 'react-redux';

import { getSmurf } from '../actions/actions';

export function Smurf (props) {
    console.log(props);
    const fetchSmurf = e => {
        e.preventDefault();
        // console.log(props);
        props.getSmurf();
    };
    return (
        <>
        <h1>Smurf Get</h1>
        <div>
            {props.smurfs.map(smurf => (
                <h4 key={smurf.url}>{smurf.name}</h4>
            ))}
        </div>
        {props.error && <p className='error'>{props.error}</p>}
        <button onClick={fetchSmurf}>Fetch Smurf</button> 
        </>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {
    smurfs: state.smurfs,
    error: state.error
    }
};

export default connect(
    mapStateToProps, 
    { getSmurf }
)(Smurf);
