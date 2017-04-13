import React, { Component } from 'react';
import { Row, Column } from 'hedron';
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
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;

class AdvisorConversationCardView extends Component {
  render () {
    return (
      <AdvisorConversationCard>
        <Row>
          <Column xs={12} sm={4}>
            <p className="bold">Appointment:</p>
            <p>{this.props.data.availableDate}</p>
            <p>Friday</p>
            <p>{this.props.data.availableTime}</p>
          </Column>
          <Column className="center" xs={12} sm={4}>
            <p className="bold">Attendees</p>
            <h3><a href="#list of students">{this.props.data.attendees} / {this.props.data.availableSpots}</a></h3>
          </Column>
          <Column className="center mt-1" xs={12} sm={4}>
            <Button small>Edit Time</Button>
            <Button small className="mt-1">Cancel Appointment</Button>
          </Column>
        </Row>
      </AdvisorConversationCard>
    );
  };
}

export default AdvisorConversationCardView;
