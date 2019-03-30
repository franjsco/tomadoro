import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Notification from './Notification';
import ButtonBox from './ButtonBox';
import LogoSpin from './LogoSpin';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.appName = 'tomadoro';
    this.state = {
      seconds: 0,
      started: false,
      break: false,
      sendNotification: false
    };

    this.handleNotification = this.handleNotification.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.finishedTimer = this.finishedTimer.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.pomodoroMode = this.pomodoroMode.bind(this);
    this.breakMode = this.breakMode.bind(this);

  }

  componentWillMount() {
    this.pomodoroMode();
  }


  handleNotification(flag) {
    this.setState({
      sendNotification: flag
    });
  }

  formatMinute(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }
  
  tick() {
    this.setState(state => ({
      seconds: state.seconds - 1
    }));

    document.title=`(${this.formatMinute(this.state.seconds)}) ${this.appName}`; 

    if (this.state.seconds === 0) {
      this.stopTimer();
      this.finishedTimer();
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
    if(this.state.break) {
      this.breakMode();
    } else {
      this.pomodoroMode();
    }

    document.title = this.appName;
  }

  finishedTimer() {
    this.setState({
      sendNotification: true,
    });
    this.switchMode();
  }

  switchMode() {
    if(this.state.break && !this.state.started) {
      this.pomodoroMode();
    } else if(!this.state.break && !this.state.started) {
      this.breakMode();
    }
  }


  pomodoroMode() {
    const pomodoroSeconds = 1500;
    this.setState({
      seconds: pomodoroSeconds,
      break: false
    });
  }

  breakMode() {
    const breakSeconds = 300
    this.setState({
      seconds: breakSeconds,
      break: true
    })
  }

  render() {    
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <LogoSpin
                isStarted={this.state.started}
                switchMode={this.switchMode}
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
          send={this.state.sendNotification} 
          handleNotification={this.handleNotification} 
          />
      </div>
    );
  }
}

export default Timer;
