import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './Timer.css';
import logo from '../logo.svg';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.defaultSeconds = 1500;
    this.defaultLogoSpin = 'App-logo-rotation';
    this.state = { 
      seconds: this.defaultSeconds,
      started: false,
      logoSpin: ''
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
    this.setState({ 
      started: true,
      logoSpin: this.defaultLogoSpin
    });
    this.interval = setInterval(() => this.tick(), 1000);
  }
  
  stopTimer() {
    this.setState({ 
      started: false,
      logoSpin: null
     });
    clearInterval(this.interval);
  }

  resetTimer() {
    this.stopTimer();
    this.setState({ seconds: this.defaultSeconds});
  }

  render() {
    return (
      <div className="App">
        <Container>
        <Row>
          <Col>
            <img className={`App-logo ${this.state.logoSpin}`} src={logo}/>
          </Col>
        </Row>
        <Row>
          <Col>
          <p 
            class="timer"
          >
            {this.fmtMSS(this.state.seconds)}
          </p>
          </Col>
        </Row>
        <div className="buttons-box">
        <Row>
          <Col>
          <Button 
            className="buttons" 
            block
            size="lg"
            color="success"
            onClick={this.startTimer}
            disabled={this.state.started}
          >
            Start
          </Button>
          </Col>
        </Row>
        <Row  className="top-buffer">
          <Col>
          <Button 
          className="buttons"
          block
          color="danger"
          size="lg"
          onClick={this.stopTimer}
          disabled={!this.state.started}
          >
            Stop
          </Button>
          </Col>

          <Col>
          <Button 
            className="buttons" 
            block
            color="secondary"
            size="lg"
            onClick={this.resetTimer}
            disabled={this.state.started}
          >
            Reset
          </Button>
          </Col>
        </Row>
    
        </div>
        </Container>
      </div>
    );
  }
}

export default Timer;
