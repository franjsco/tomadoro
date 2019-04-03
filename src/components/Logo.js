import React, { Component } from 'react';
import logoSVG from '../logo.svg';
import './Logo.css';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.defaultClassName = 'App-logo-rotation';
    }

  render() {
    return (
      <img
        className={`App-logo ${this.props.isStarted ? this.defaultClassName: ''}`}
        src={logoSVG}
        alt="Tomato"
        title="Click on the tomato to change modes"
        onClick={this.props.switchMode}
      ></img>
    )
  }

}

export default Logo;