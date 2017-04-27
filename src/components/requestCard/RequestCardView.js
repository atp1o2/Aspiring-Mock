import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import Button from '../Button';
import { Col } from 'react-bootstrap';


const Card = styled.div`
  .base {
    color: ${Brand.grey};
    text-align: center;
    border: ${Brand.greyBorder};
    border-bottom: 1px solid silver;
    height: 20rem;
    padding: 2rem 1rem;
    margin-top: 3rem;
    h4 {
      line-height: 2;
    }
  }
`;

class RequestCardView extends Component {
  render () {
    let convoList;
    if (this.props.conversations.length === 0) {
      convoList = (
        <Col sm={12} md={6} mdOffset={3} lg={3} lgOffset={0} className="base">
          <div>
            <h4>Let this advisor know you would like to chat.</h4>
            <Button small>Request</Button>
          </div>
        </Col>
      )
    } else {
      convoList = [];
      this.props.conversations.map((conversation) =>
        convoList.push(
          <Col sm={12} md={6} mdOffset={3} lg={3} lgOffset={0} className="base" key={conversation.id}>
            <div key={conversation.id}>
              <p>{conversation.date}</p>
              {
                conversation.capacity - conversation.conversation_attendances.length <= 0 ? (
                  <div>
                    <h2 className="ma-3">Full</h2>
                    <p></p>
                    <Button small disabled>{conversation.date}</Button>
                  </div>
                ) : (
                  <div>
                    <h2>{conversation.capacity - conversation.conversation_attendances.length}</h2>
                    <p>Spots Available</p>
                    <Button small>{conversation.date}</Button>
                  </div>
                )
              }
            </div>
          </Col>
        )
      )
    };
    return (
      <Card>
        {convoList}
      </Card>
    );
  };
}

export default RequestCardView;
