import React, { Component } from 'react';
import Projects from './components/projects'
import './App.css';
import logo from './stick figure.jpeg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman </h1>
        <letterSlots />
        <Projects />
      </div>
    );
  }
}

export default App;
