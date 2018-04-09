import React, { Component } from 'react';
import Projects from './components/projects'
import Alphabet from './components/alphabetButton'
import './App.css';
import logo from './stick figure.jpeg'
import store from './store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        <Projects />
        <Alphabet />
      </div>
    );
  }
}

export default App;
