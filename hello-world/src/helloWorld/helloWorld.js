import React, { Component } from 'react';

class OneTimeClickLink extends Component {
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

  render() {
    if (this.state.clicked === false) {
    return (
        <a href="#" id="click" onClick={this.linkClicked}>Click Me</a>
    );
  } else {
    return (
        <span>You clicked the link</span>
    );
  }
  }
}


class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  linkClicked = (event) => {
    this.setState({
      clicked: true
    });
  }

  render () {
    return (
        <h1>Hello {this.props.name}!</h1>
    );
  }
}

class HelloWorldApp extends Component {
  render() {
    return (
      <div>
        <HelloWorld name='Laszlo' />
        <OneTimeClickLink />
      </div>
    );
  }
}

export default HelloWorldApp;
