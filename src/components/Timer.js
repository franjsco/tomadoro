import React from "react";
import PropTypes from 'prop-types';

import { formatMinute } from '../utils';

const timer = props => {
  const style = {
    fontSize: "120px",
    fontWeight: "normal",
    textShadow: "0 2px 2px #1f1f1f"
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
