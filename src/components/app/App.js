import React, { Component } from 'react';
import './App.css';
import Pokedex from '../pokedex/Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="https://fontmeme.com/pt/fonte-de-pokemon/"><img src="https://fontmeme.com/permalink/200605/9856df398274eae43948de8cd5b6c798.png" alt="fonte-de-pokemon" border="0" /></a>
        </div>
        <div className="App-intro">
          <Pokedex />
        </div>
      </div>
    );
  }
}

export default App;
