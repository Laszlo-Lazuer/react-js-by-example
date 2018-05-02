import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
  render () {
    return (
      <div id="two-tags">
        <h1>Hello {this.props.name}!</h1>
        <a href="#" id="click">Click Me</a>
      </div>
    )
  }
}

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
