import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/actions';

const ShowSmurf = (props) => {
    console.log(props.smurf)

    const [remove, setRemove] = useState(false)
    console.log(remove)
  
      useEffect(() => {
          props.getSmurf();
        }, []);
        useEffect(() => {
          props.getSmurf();
        }, [remove]);
  
        if(props.smurf !== undefined) {
      return (
        <>
        <div>
        {props.smurf.map((smurfs) => {
           console.log(smurfs.id)
            return <div
               key={smurfs.id}>
              <h2>{smurfs.name}</h2>
              <h4>Age: {smurfs.age}</h4>
              <h4>Height: {smurfs.height}</h4>
              <button onClick={() => setRemove(!remove)} onClick={()=>props.removeSmurf(smurfs)}>Remove Smurf</button>
            </div>
          })}
          </div>
          </>
      )
    }
    return(<div>Loading...</div>)
  }

function mapStateToProps(state) {
    console.log(state)
    return {
        smurfs: state.smurf
    }
  }
  
  const mapDispatchToProps = {
      getSmurf,
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ShowSmurf);