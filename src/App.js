import React, { Component } from 'react';
import Timer from './components/Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>tomadoro</h1>
       
       <Timer />
      </div>
    );
  }
}

export default App;
