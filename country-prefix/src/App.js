import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="form-horizontal">
          <div class="form-group">
            <label for="selectbox" class="col-sm-3 control-label">Country</label>
            <div class="col-sm-3">
              <select class="form-control" id="selectbox"> <option value="Poland">Poland</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="input-text" class="col-sm-3 control-label">Phone number</label>
            <div class="col-sm-3">
              <div class="input-group">
                <span class="input-group-addon">+48</span>
                <input type="text" class="form-control" id="input-text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
