import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import './ButtonBox.css';

class ButtonBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="button-box">
        <Row>
          <Col>
            <Button
              className="button"
              block
              size="lg"
              color="success"
              onClick={this.props.startTimer}
              disabled={this.props.isStarted}
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
              className="button"
              block
              color="danger"
              size="lg"
              onClick={this.props.stopTimer}
              disabled={!this.props.isStarted}
            >
              STOP
             </Button>
          </Col>

          <Col>
              <Button
                className="button"
                block
                color="secondary"
                size="lg"
                onClick={this.props.resetTimer}
                disabled={this.props.isStarted}
              >
                RESET
                </Button>
            </Col>
        </Row>
      </div>
        );
      }
    }
    
    export default ButtonBox;