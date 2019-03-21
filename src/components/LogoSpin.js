import React, { Component } from 'react';
import logo from '../logo.svg';
import './LogoSpin.css';

class LogoSpin extends Component {
  constructor(props) {
    super(props);
    this.defaultClassName = 'App-logo-rotation';
    }

  render() {
    return (
      <img
        className={`App-logo ${this.props.isStarted ? this.defaultClassName: ''}`}
        src={logo}
        alt="Tomato"
      ></img>
    )
  }

}

export default LogoSpin;