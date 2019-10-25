import React from "react";
import PropTypes from 'prop-types';

import { formatMinute } from '../utils';

const timer = props => {
  const style = {
    fontSize: "110px",
    fontWeight: "normal",
    color: "white",
    textShadow: "0 2px 3px #8a8888"
  };

  return (
    <div style={style} >
      { formatMinute(props.seconds) }
    </div>
  )
  ;
};

timer.propTypes = {
  seconds: PropTypes.number.isRequired
};


export default timer;
