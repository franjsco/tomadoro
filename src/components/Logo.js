import React from 'react';
import PropTypes from 'prop-types';

import logoSVG from '../assets/logo.svg';
import './Logo.css';

const logo = props => {
  const logoRotationClass = 'App-logo-rotation';

  return (
    <img 
        className={`App-logo ${props.isStarted ? logoRotationClass: ''}`}
        src={logoSVG}
        alt="Tomato"
        title="Click on the tomato to change modes"
        onClick={props.click} 
      ></img>
  )
}

logo.propTypes = {
  isStarted: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
}; 

export default logo;