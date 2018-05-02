import React, { Component } from 'react';

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

export default HelloWorld;
