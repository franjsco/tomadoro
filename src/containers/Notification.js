import React, { Component } from 'react';
import WebNotification from 'react-web-notification';
import sound from '../assets/sound.mp3';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ignore: true,
      title: ''
    };

    this.handlePermissionGranted = this.handlePermissionGranted.bind(this);
    this.handlePermissionDenied = this.handlePermissionDenied.bind(this);
    this.handleNotSupported = this.handleNotSupported.bind(this);
    this.sendNotification = this.sendNotification.bind(this);
    this.handleNotificationOnShow = this.handleNotificationOnShow.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidUpdate() {
    if(this.props.send) {
      this.sendNotification()
      this.props.handleNotification(false)
    };
  }

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

  handleNotificationOnError(e, tag) {
    console.log(e, 'Notification error tag:' + tag);
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
      sound: { sound }
    };

    this.setState({
      title: title,
      options: options
    });
  }

  playSound() {
    document.getElementById('sound').play();
  }

  render() {
    return(
      <div>
        <WebNotification
          ignore={this.state.ignore}
          onPermissionGranted={this.handlePermissionGranted}
          onPermissionDenied={this.handlePermissionDenied}
          notSupported={this.handleNotSupported}
          onError={this.onError}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
          onShow={this.handleNotificationOnShow}
        >
        </WebNotification>

        <audio id='sound' preload='auto'>
          <source src={sound} type='audio/mpeg' />
          <embed hidden src={sound} />
        </audio>
    </div>
    );
  }
}

export default Notification;