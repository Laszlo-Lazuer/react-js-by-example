import React, { Component } from 'react';

class HelloWorld extends Component {
  linkClicked(event) {
    console.log(event);
  }

  render () {
    return (
      <div id="two-tags">
        <h1>Hello {this.props.name}!</h1>
        <a href="#" id="click" onClick={this.linkClicked}>Click Me</a>
      </div>
    )
  }
}

export default HelloWorld;
