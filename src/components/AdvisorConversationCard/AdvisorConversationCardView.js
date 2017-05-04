import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Button from '../Button';
import styled from 'styled-components';
import Brand from '../../styles/variables';

const AdvisorConversationCard = styled.div`
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: auto;
  height: auto;
  margin: 2rem 0;
  padding: 2rem;
  text-align: center;
  p h3 {
    color: ${Brand.grey};
  }
`;

class AdvisorConversationCardView extends Component {
  render () {
    return (
      <AdvisorConversationCard>
        <Row>
          <Col xs={12} sm={4}>
            <p className="bold">Appointment:</p>
            <p>Date: {this.props.conversation.date}</p>
            <p>Time: {this.props.conversation.date}</p>
            <p>Day: {this.props.conversation.date}</p>
          </Col>
          <Col className="center" xs={12} sm={4}>
            <p className="bold">Attendees</p>
            <h3><Link to={`Advisors/${this.props.conversation.advisor_id}/Conversations/${this.props.conversation.id}`}>{this.props.conversation.conversation_attendances.length} / {this.props.conversation.capacity}</Link></h3>
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
