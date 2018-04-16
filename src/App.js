import React, { Component } from 'react';
import Barchart from './app/components/Barchart';
import Linechart from './app/components/Linechart';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Linechart/>
      <Barchart/>
      </div>
    );
  }
}

export default App;
