import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Button from '../Button';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import DefaultProfile from '../../img/default_profile.png';

const ConversationCard = styled.div`
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: auto;
  height: auto;
  p {
    color: ${Brand.grey};
  }
  img {
    height: 10rem;
    width: 10rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
    margin-left: 1rem;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;

class ConversationCardView extends Component {
  render () {
    let avatarImg = this.props.avatar ? this.props.avatar : DefaultProfile;
    return (
      <ConversationCard>
        <Row>
          <Col sm={12} md={4}>
            <img src={avatarImg} alt="Advisor Profile" />
          </Col>
          <Col sm={12} md={4}>
            <h3>{this.props.data.name}</h3>
            <p>{this.props.data.title}</p>
            <p>{this.props.data.company}</p>
            <p>#tags</p>
          </Col>
          <Col sm={12} md={4}>
            <p className="bold">Appointment:</p>
            <p>{this.props.data.availableDate}</p>
            <p>{this.props.data.availableTime}</p>
            <Button small>Contact</Button>
            <Button small>Cancel</Button>
          </Col>
        </Row>
      </ConversationCard>
    );
  };
}

export default ConversationCardView;
