import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Button from '../Button';
import styled from 'styled-components';
import Brand from '../../styles/variables';

const AdvisorConversationCard = styled.div`
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: auto;
  height: auto;
  p h3 {
    color: ${Brand.grey};
  }
  @media only screen and (max-width: 991px) {
    text-align: center;
    max-width: 25rem;
    padding: 2rem;
  }
`;

class AdvisorConversationCardView extends Component {
  render () {
    return (
      <AdvisorConversationCard>
        <Row>
          <Col xs={12} sm={4}>
            <p className="bold">Appointment:</p>
            <p>{this.props.data.availableDate}</p>
            <p>Friday</p>
            <p>{this.props.data.availableTime}</p>
          </Col>
          <Col className="center" xs={12} sm={4}>
            <p className="bold">Attendees</p>
            <h3><a href="#list of students">{this.props.data.attendees} / {this.props.data.availableSpots}</a></h3>
          </Col>
          <Col className="center mt-1" xs={12} sm={4}>
            <Button small>Edit Time</Button>
            <Button small className="mt-1">Cancel</Button>
          </Col>
        </Row>
      </AdvisorConversationCard>
    );
  };
}

export default AdvisorConversationCardView;
