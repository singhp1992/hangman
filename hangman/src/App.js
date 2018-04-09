import React, { Component } from 'react';
import Projects from './components/projects'
import Alphabet from './components/alphabetButton'
import './App.css';
import logo from './stickFigure.jpeg'
import store from './store'
import picture from './hangman.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <logo />
        <h1>Hangman</h1>
        <Projects />
        <Alphabet />
        <store />
        <picture />
      </div>
    );
  }
}

export default App;
