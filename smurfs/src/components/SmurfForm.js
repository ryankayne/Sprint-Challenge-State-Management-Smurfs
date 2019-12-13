import React, { useState } from "react";
import { connect } from 'react-redux';

import { addSmurf } from '../actions/actions';

function NewSmurf(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [height, setHeight] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == '') {
            return (
                alert('Please add your name!')
            )
        }
        if (age == '') {
            return (
                alert("Please add your age!")
            )
        }
        if (height == '') {
            return (
                alert('Please add how tall the smurf is!')
            )
        }
        props.addSmurf({
            name: name,
            age: age,
            height: height,
        });
        // setName('')
        // setAge('')
        // setHeight('')
    }

    const handleNameChange = e => {
        e.preventDefault();
        setName(e.target.value)
    }
    const handleAgeChange = e => {
        e.preventDefault();
        setAge(e.target.value)
    }

    const handleHeightChange = e => {
        e.preventDefault();
        setHeight(e.target.value)
    }

    return (
        <div onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='name' placeholder='Name' name='Name' value={name} onChange={handleNameChange} />
            <label>Age: </label>
            <input type='number' placeholder='Age' name='Age' value={age} onChange={handleAgeChange} />
            <label>Height:  </label>
            <input type='number' placeholder='Height' name='Height' value={height} onChange={handleHeightChange} />
            <button onClick={handleSubmit}>Add Smurf</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurfs: state.smurfs
    }
}
const mapDispatchToProps = {
    addSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSmurf);