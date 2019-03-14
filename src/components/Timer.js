import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Timer.css';

class Timer extends Component {


  constructor(props) {
    super(props);
    this.defaultSeconds = 1500;
    this.state = { 
      seconds: this.defaultSeconds,
      started: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  
  fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

  tick() {
    this.setState(state => ({
      seconds: state.seconds -1
    }));
  }

  startTimer() {
    this.setState({ started: true })
    this.interval = setInterval(() => this.tick(), 1000);
  }
  
  stopTimer() {
    this.setState({ started: false });
    clearInterval(this.interval);
  }

  resetTimer() {
    this.stopTimer();
    this.setState({ seconds: this.defaultSeconds});
  }

  render() {
    return (
      <div className="App">
        
        <p class="timer">{this.fmtMSS(this.state.seconds)}</p>
        
        <Button 
          size="lg"
          color="success"
          onClick={this.startTimer}
          disabled={this.state.started}
        >
          START
        </Button>

        <Button 
          color="danger"
          size="lg"
          onClick={this.stopTimer}
          disabled={!this.state.started}
        >
          STOP
        </Button>

        <Button
          color="secondary"
          size="lg"
          onClick={this.resetTimer}
          disabled={this.state.started}
        >
          RESET
        </Button>
      </div>
    );
  }
}

export default Timer;
