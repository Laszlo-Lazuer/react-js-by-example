import React, { Component } from 'react';
import './App.css';
import HelloWorld from './helloWorld/helloWorld.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="Peter" />
      </div>
    );
  }
}

export default App;
