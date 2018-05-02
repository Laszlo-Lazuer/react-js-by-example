import React, { Component } from 'react';
import './App.css';

class CreditCardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    };
  }

  process(number) {
    let type = this.checkType(number);
    let text = this.insertSpaces(number);

    text = text.trim();

    return {
      text: text,
      type: type
    };
  }

  insertSpaces(text) {
    return text.replace(/(.{4})/g, '$1 ');
  }

  checkType(text) {
    let types = this.props.types;

    for (var type in types) {
      if (text.match(types[type])) {
        return type;
      }
    }
    return '';
  }

  handleChange = (e) => {
    let newValue = e.target.value;
    let newNumber = this.filterWhiteSpace(newValue);
    this.setState({
      number: newNumber
    });
  }

  filterWhiteSpace(text) {
    return text.replace(/\s/g, '');
  }

  render() {
    let {
      text: text,
      type: type
    } = this.process(this.state.number);

    return (
      <div>
        <h1>Credit Card Input Type identifier & Formatter</h1>
        <span>CC:  </span>
        <input type='text' value={text} onChange={this.handleChange}/>
        <br />
        <span>Type:</span>
        <input type='text' value={type} readOnly />
      </div>
    );
  }
}

let types = {
  Visa: /^4/,
  MasterCard: /^5[1-5]/,
  "American Express": /^3[47]/
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreditCardInput types={types} />
      </div>
    );
  }
}

export default App;
