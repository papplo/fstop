import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';

import Display from './components/light'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Display
            aperture={1.1}
            shutter={2000}
            iso={320}
            program={'A'}
            evComp={.66}
            />
        </div>
      </div>
    );
  }
}

export default App;
