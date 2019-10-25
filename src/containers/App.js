import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Notification from './Notification';
import Headbar from '../components/Headbar';
import Timer from '../components/Timer';
import Logo from '../components/Logo';
import Box from '../components/Box';
import Footer from '../components/Footer';
import { formatMinute } from '../utils';

import './App.css';
 
class App extends Component {
  constructor(props) {
    super(props);

    this.APP_NAME = 'tomadoro';
    this.POMODORO_SECONDS = 1500;
    this.BREAK_SECONDS = 300;

    this.state = {
      seconds: this.POMODORO_SECONDS,
      started: false,
      break: false,
      activePopupNotification: false, 
      sendNotificationFlag: false
    };
  }
 
  tick = () => {
    this.setState(state => ({ seconds: state.seconds - 1}));

    document.title = `(${formatMinute(this.state.seconds)}) ${this.APP_NAME}`;

    if (this.state.seconds === 0) {
      this.stopTimer();
      this.finishedTimer();
    }
  };

  startTimer = () => {
    this.setState({ started: true, activePopupNotification: true });
    
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stopTimer = () => {
    this.setState({ started: false});

    clearInterval(this.interval);
  }

  resetTimer = () => {
    if (this.state.break) {
      this.breakMode();
    } else {
      this.pomodoroMode();
    }

    document.title = this.APP_NAME;
  }

  finishedTimer = () => {
    this.setState({
      sendNotificationFlag: true
    });

    this.changeMode();
  }

  changeMode = () => {
    if (this.state.break && !this.state.started) {
      this.pomodoroMode();
    } else if (!this.state.break && !this.state.started) {
      this.breakMode();
    }
  }

  pomodoroMode = () => {
    this.setState({
      seconds: this.POMODORO_SECONDS,
      break: false
    });
  }

  breakMode = () => {
    this.setState({
      seconds: this.BREAK_SECONDS,
      break: true
    });
  }

  handleNotification = flag => {
    this.setState({
      sendNotificationFlag: flag
    });
  }

  render() {
    let notification = null;

    if (this.state.activePopupNotification) {
      notification = (
        <Notification
        send={this.state.sendNotificationFlag}
        handleNotification={this.handleNotification} />
      );
    }

    return (
      <div>
        {notification}
        <Headbar />
        <Container>
          <Row>
            <Col>
              <Logo
                isStarted={this.state.started}
                click={this.changeMode} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Timer seconds={this.state.seconds} />
            </Col>
          </Row>
          <Row>
            <Col
              sm={{ size: 10, offset: 1 }}
              md={{ size: 8, offset: 2 }}
              lg={{ size: 6, offset: 3 }} >
              <Box
                startButton={this.startTimer}
                stopButton={this.stopTimer}
                resetButton={this.resetTimer}
                isStarted={this.state.started}
                seconds={this.state.seconds} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;