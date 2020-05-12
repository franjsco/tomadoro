import React from 'react';
import { Button, Row, Col, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';


const box = props => {
  const buttonStyle = {
    fontSize: '20px',
    height: '54px',
    borderRadius: '24px',
    width: '100%',
    margin: '4px 0px 4px 0px'
  };

  const boxStyle = {
    padding: '2px',
    borderRadius: '14px',
    background: 'rgb(0,0,0, 0.4)'
  };

  
  return (
    <Card style={boxStyle}>
      <CardBody>
      <Row>
          <Col xs="12">
            <Button
              style={buttonStyle}
              block
              size="lg"
              color="success"
              onClick={props.startButton}
              disabled={props.isStarted || props.seconds===0}>
              Start
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
              Stop
             </Button>
          </Col>
          <Col xs="6">
              <Button
                style={buttonStyle}
                color="secondary"
                size="lg"
                onClick={props.resetButton}
                disabled={props.isStarted}>
                Reset
                </Button>
            </Col>
        </Row>
      </CardBody>
    </Card>
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