import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Notification from './Notification';
import ButtonBox from './ButtonBox';
import LogoSpin from './LogoSpin';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 4,
      started: false,
      send: false,
      title: ''
    };

    this.handleNotification = this.handleNotification.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleNotification(flag) {
    this.setState({
      send: flag
    });
  }

  formatMinute(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }
  
  tick() {
    this.setState(state => ({
      seconds: state.seconds - 1
    }));

    if (this.state.seconds <= 0) {
      this.stopTimer();
      this.setState({
        send: true
      });
    }
  }

  startTimer() {
    this.setState({
      started: true
    });
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stopTimer() {
    this.setState({
      started: false
    });
    clearInterval(this.interval);
  }

  resetTimer() {
    this.stopTimer();
    this.setState({ seconds: 1500 });
  }

  render() {    
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <LogoSpin
                isStarted={this.state.started}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <p
                className="timer"
              >
                {this.formatMinute(this.state.seconds)}
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <ButtonBox
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                isStarted={this.state.started}
                resetTimer={this.resetTimer}
                seconds={this.state.seconds}
              />
            </Col>
          </Row>
        </Container>

        <Notification
          send={this.state.send} 
          handleNotification={this.handleNotification} 
          />
      </div>
    );
  }
}

export default Timer;
