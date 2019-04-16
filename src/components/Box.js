import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import './Box.css';

class Box extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="box">
        <Row>
          <Col xs="12">
            <Button
              className="button"
              block
              size="lg"
              color="success"
              onClick={this.props.startTimer}
              disabled={this.props.isStarted || this.props.seconds===0}
            >
              START
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Button
              className="button"
              color="danger"
              size="lg"
              onClick={this.props.stopTimer}
              disabled={!this.props.isStarted}
            >
              STOP
             </Button>
          </Col>
          <Col xs="6">
              <Button
                className="button"
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
    
    export default Box;