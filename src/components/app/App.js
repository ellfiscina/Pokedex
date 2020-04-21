import React, { Component } from 'react';
import './App.css';
import Pokedex from '../pokedex/Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Pokedex</h2>
        </div>
        <div className="App-intro">
          <Pokedex />
        </div>
      </div>
    );
  }
}

export default App;
