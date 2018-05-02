import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  linkClicked = (event) => {
    this.setState({
      clicked: true
    });
  }

  render () {
    if (this.state.clicked === false) {
    return (
      <div id="two-tags">
        <h1>Hello {this.props.name}!</h1>
        <a href="#" id="click" onClick={this.linkClicked}>Click Me</a>
      </div>
    );
  } else {
    return (
      <div id="two-tags">
        <h1>Hello {this.props.name}</h1>
        <span>You clicked the link</span>
      </div>
    );
  }
  }
}

export default HelloWorld;
