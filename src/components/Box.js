import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';


const box = props => {
  const buttonStyle = {
    fontSize: '16px',
    fontWeight: 'lighter',
    height: '50px',
    borderRadius: '30px',
    width: '100%',
    margin: '4px 0px 4px 0px'
  };

  const boxStyle = {
    padding: '6px',
    backgroundColor: 'white',
    borderRadius: '6px',
    borderBottom: '16px solid #c84132',
    boxShadow: '0 2px 3px #8a8888'
  };

  return (
    <div style={boxStyle}>
        <Row>
          <Col xs="12">
            <Button
              style={buttonStyle}
              block
              size="lg"
              color="success"
              onClick={props.startButton}
              disabled={props.isStarted || props.seconds===0}>
              START
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Button
              style={buttonStyle}
              color="danger"
              size="lg"
              onClick={props.stopButton}
              disabled={!props.isStarted}>
              STOP
             </Button>
          </Col>
          <Col xs="6">
              <Button
                style={buttonStyle}
                color="secondary"
                size="lg"
                onClick={props.resetButton}
                disabled={props.isStarted}>
                RESET
                </Button>
            </Col>
        </Row>
      </div>
  );
}

box.propTypes = {
  startButton: PropTypes.func.isRequired,
  stopButton: PropTypes.func.isRequired,
  resetButton: PropTypes.func.isRequired,
  isStarted: PropTypes.bool.isRequired,
  seconds: PropTypes.number.isRequired
};

export default box;