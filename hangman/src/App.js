import React, { Component } from 'react';
import Projects from './components/projects'
import './App.css';

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

//what i took out from the div class name above
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
