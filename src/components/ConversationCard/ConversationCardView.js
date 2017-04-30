import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '../Button';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import DefaultProfile from '../../img/default_profile.png';
import { getFullAdvisor } from '../../server/railscope';

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
  loadAdvisor (id) {
    var self = this;
    getFullAdvisor(id, (advisor) => {
      self.setState({
        advisor: advisor,
        loading: false
      })
    })
  }

  // Cheated
  // This should be in ConversationCard.js container
  // HELP: setup a promise(?) to return Advisor after Conversation loads
  constructor (props) {
    super(props);
    this.state = {
      advisor: '',
      loading: true
    }
  }

  componentWillMount () {
    this.loadAdvisor(this.props.conversation.advisor_id);
  }

  render () {
    let avatarImg = this.props.avatar ? this.props.avatar : DefaultProfile;
    let title = this.state.advisor.job_title ? this.state.advisor.job_title : "Advisor";
    return (
      <ConversationCard>
        <Row>
          <Col sm={12} md={4}>
            <img src={avatarImg} alt="Advisor Profile" />
          </Col>
          <Col sm={12} md={4}>
            <h3>{this.state.advisor.first_name} {this.state.advisor.last_name}</h3>
            <p>{title}</p>
            <p>{this.state.advisor.first_name}</p>
            <p>#tags</p>
          </Col>
          <Col sm={12} md={4}>
            <p className="bold">Appointment:</p>
            <p>{this.props.conversation.date}</p>
            <p>{this.props.conversation.date}</p>
            <Button small>Contact</Button>
            <Button small>Cancel</Button>
          </Col>
        </Row>
      </ConversationCard>
    );
  };
}

export default ConversationCardView;
