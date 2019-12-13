import React, { Component } from "react";
import "./App.css";

import Smurf from '../components/Smurf';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurf />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
