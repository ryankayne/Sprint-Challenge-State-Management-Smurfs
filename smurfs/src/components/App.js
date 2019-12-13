import React, { Component } from "react";
import "./App.css";

import Smurf from '../components/Smurf';
import SmurfForm from './SmurfForm';
import ShowSmurf from './ShowSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurf />
        <SmurfForm />
        <ShowSmurf />
      </div>
    );
  }
}

export default App;
