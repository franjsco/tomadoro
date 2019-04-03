import React, { Component } from 'react';
import Timer from './components/Timer';
import ButtonBox from './components/ButtonBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="App-header"
        >
          tomadoro
        </div>
        
        <div>
          <Timer />
        </div>

        <div
          className="footer"
        >
          <p>
            <a href="https://github.com/frab1t/tomadoro">tomadoro</a>{` `}
            by <a href="https://twitter.com/frab1t">@frab1t</a> (Francesco Esposito)
          </p>
        </div>
      </div>
    );
  }
}

export default App;
