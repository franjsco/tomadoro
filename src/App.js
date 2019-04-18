import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from './components/Logo';
import Box from './components/Box';
import Notification from './components/Notification';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.appName = 'tomadoro';
    this.pomodoroSeconds = 1500;
    this.breakSeconds = 300;
    
    this.state = {
      startClickNotification: false, // TODO: refactoring identificativo 
      seconds: 0,
      started: false,
      break: false,
      sendNotification: false
    };

    // binding
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.terminatedTimer = this.terminatedTimer.bind(this);
    this.pomodoroMode = this.pomodoroMode.bind(this);
    this.breakMode = this.breakMode.bind(this);
    this.switchMode = this.switchMode.bind(this);
    this.formatMinute = this.formatMinute.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
  }

  componentWillMount() {
    this.pomodoroMode();
  }

  formatMinute(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds -1
    }));

    document.title = `(${this.formatMinute(this.state.seconds)}) ${this.appName}`;
    
    if (this.state.seconds === 0) {
      this.stopTimer();
      this.terminatedTimer();
    }
  }

  startTimer() {
    this.setState({
      started: true,
      startClickNotification: true
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

  terminatedTimer() {
    this.setState({
      sendNotification: true
    });

    this.switchMode();
  }

  pomodoroMode() {
    this.setState({
      seconds: this.pomodoroSeconds,
      break: false
    });
  }

  breakMode() {
    this.setState({
      seconds: this.breakSeconds,
      break: true
    });
  }
  
  switchMode() { // TODO: refactoring naming
    if(this.state.break && !this.state.started) {
      this.pomodoroMode();
    } else if(!this.state.break && !this.state.started) {
      this.breakMode();
    }
  }

  handleNotification(flag) {
    this.setState({
      sendNotification: flag
    });
  }

  render() {    
    return (
      <div className="App">
        <div className="App-header">
          tomadoro
        </div>
        
        <Container>
          <Row>
            <Col>
              <Logo
                isStarted={this.state.started}
                switchMode={this.switchMode}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="timer">
                {this.formatMinute(this.state.seconds)}
              </p>
            </Col>
          </Row>

          <Row>
            <Col 
              sm={{size: 10, offset: 1}} 
              md={{size: 8, offset: 2}} 
              lg={{ size: 6, offset: 3 }}
            >
              <Box 
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                isStarted={this.state.started}
                resetTimer={this.resetTimer}
                seconds={this.state.seconds}
              />
            </Col>
          </Row>
        </Container>

        { // notification
        this.state.startClickNotification ? (
          <Notification 
          send={this.state.sendNotification}
          handleNotification={this.handleNotification} />) 
        : ''}

        <div className="footer">
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
