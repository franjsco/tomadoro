import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import './Timer.css';
import logo from '../logo.svg';
import Notification from 'react-web-notification';
import sound from '../sound.mp3';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.defaultSeconds = 4;
    this.defaultLogoSpin = 'App-logo-rotation';
    this.state = { 
      seconds: this.defaultSeconds,
      started: false,
      logoSpin: '',
      ignore: true,
      title: ''
    };

    // binding
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);

    this.handlePermissionGranted = this.handlePermissionGranted.bind(this);
    this.handlePermissionDenied = this.handlePermissionDenied.bind(this);
    this.handleNotSupported = this.handleNotSupported.bind(this);
    this.sendNotification = this.sendNotification.bind(this);
    this.handleNotificationOnShow = this.handleNotificationOnShow.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  
  formatMinute(s){
    return ( s - ( s%=60 )) / 60 + ( 9 < s ?':':':0') +s;
  }

  // handleNotification
  handlePermissionGranted() {
    this.setState({
      ignore: false
    });
  }

  handlePermissionDenied() {
    this.setState({
      ignore: true
    });
  }

  handleNotSupported() {
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnError(e, tag){
    console.log(e, 'Notification error tag:' + tag);
  }

  playSound(){
    document.getElementById('sound').play();
  }

  handleNotificationOnShow() {
    this.playSound();
  }

  sendNotification() {
    if (this.state.ignore) {
      return;
    }

    const title = 'tomadoro';
    const body = 'Time is Up! 🍅';
    const tag = Date.now();

    const options = {
      tag: tag,
      body: body,
      lang: 'en',
      sound: {sound}
    };

    this.setState({
      title: title,
      options: options
    });
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds -1
    }));

    if (this.state.seconds <= 0) {
      this.sendNotification();
      this.stopTimer();
      this.resetTimer();
    }
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
            <img 
              className={`App-logo ${this.state.logoSpin}`} 
              src={logo}
              alt="Tomato"
            >
            </img>
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
            START
          </Button>
          </Col>
        </Row>
        <Row  
          className="top-margin"
        >
          <Col>
          <Button
          className="buttons"
          block
          color="danger"
          size="lg"
          onClick={this.stopTimer}
          disabled={!this.state.started}
          >
            STOP
          </Button>
          </Col>

          <Col>
          <Button
            className="buttons" 
            block
            color="secondary"
            size="lg"
            onClick={this.resetTimer}
            disabled={this.state.started || this.state.seconds === this.defaultSeconds}
          >
            RESET
          </Button>
          </Col>
        </Row>
    
        </div>
        </Container>
        <Notification
          ignore={this.state.ignore}
          onPermissionGranted = {this.handlePermissionGranted}
          onPermissionDenied = {this.handlePermissionDenied}
          notSupported = {this.handleNotSupported}
          onError = {this.onError}
          timeout = {5000}
          title = {this.state.title}
          options = {this.state.options}
          onShow = {this.handleNotificationOnShow}
        >
        </Notification>

        <audio id='sound' preload='auto'>
          <source src={sound} type='audio/mpeg' />
          <embed hidden src={sound} />
        </audio>
      </div>
    );
  }
}

export default Timer;
