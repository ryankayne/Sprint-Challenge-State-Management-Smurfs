import React from 'react';
import { connect } from 'react-redux';

import { getSmurf } from '../actions/actions';

const Smurf = props => {
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
    };

    return (
        <>
        <h1>Smurf Get</h1>
        <div>
            {props.smurf.map(smurf => (
                <h4 key={smurf.url}>{smurf.name}</h4>
            ))}
        </div>
        {props.error && <p className='error'>{props.error}</p>}
        <button onClick={fetchSmurf}>Fetch Smurf</button> 
        </>
    )
}

const mapStateToProps = state => ({
    smurf: state.smurf,
    error: state.error
});

export default connect(
    mapStateToProps, 
    { getSmurf }
)(Smurf);
