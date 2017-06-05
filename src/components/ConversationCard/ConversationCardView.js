import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Button from '../Button';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import DefaultProfile from '../../img/default_profile.png';
import { getTime, getDate, getDay } from '../../helpers/ParseTimestamp';

const ConversationCard = styled.div`
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: auto
  height: auto;
  padding: 2rem;
  margin: 2rem 0;
  p {
    color: ${Brand.grey};
  }
  img {
    height: 14rem;
    width: 14rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
    margin-left: 1rem;
  }
  @media only screen and (max-width: 991px) {
    text-align: center;
  }
`;

class ConversationCardView extends Component {
  render () {
    let avatarImg = this.props.avatar ? this.props.avatar : DefaultProfile;
    let title = this.props.advisor.job_title ? this.props.advisor.job_title : "Advisor";
    return (
      <ConversationCard>
        <Row>
          <Col sm={12} md={4}>
            <Link to={`Advisors/${this.props.advisor.id}/Profile`}>
              <img src={avatarImg} alt="Advisor Profile" />
            </Link>
          </Col>
          <Col sm={12} md={4}>
            <Link to={`Advisors/${this.props.advisor.id}/Profile`}>
              <h3>{this.props.advisor.first_name} {this.props.advisor.last_name}</h3>
            </Link>
            <p>{title}</p>
            <p>{this.props.advisor.first_name}</p>
            <p>#tags</p>
          </Col>
          <Col sm={12} md={4}>
            <p className="bold">Appointment:</p>
            <p>{getDate(this.props.conversation.datetime)}</p>
            <p>{getDay(this.props.conversation.datetime)}, {getTime(this.props.conversation.datetime)}</p>
            <Button small>Contact</Button>
            <Button onClick={() => {this.props.onClick()}} small>Cancel</Button>
          </Col>
        </Row>
      </ConversationCard>
    );
  };
}

export default ConversationCardView;
