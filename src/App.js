import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomForm from './components/CustomForm';
import formConfig from './service/data';

class App extends Component {

  constructor(){
    super();
    this.state = {
      model: formConfig
    }
  }

  render() {
    return (
      <div className="App">
        <CustomForm model={this.state.model} />
      </div>
    );
  }
}

export default App;
