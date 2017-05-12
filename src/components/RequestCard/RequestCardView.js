import React, { Component } from 'react';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import Button from '../Button';
import { Col } from 'react-bootstrap';
import { getTime, getDate, getDay } from '../../helpers/ParseTimestamp';

const Card = styled.div`
  .col-centered {
    float: none;
    display: inline-table;
  }
  .base {
    margin: 0 1rem;
    margin-bottom: 1rem;
    color: ${Brand.grey};
    text-align: center;
    border: ${Brand.greyBorder};
    border-bottom: 1px solid silver;
    height: 20rem;
    min-width: 25rem;
    max-width: 25rem;
    padding: 2rem 1rem;
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
        <Col sm={12} md={6} mdOffset={3} lg={3} lgOffset={0} className="base col-centered">
          <div>
            <h4>Let this advisor know you would like to chat.</h4>
            <Button small>Request</Button>
          </div>
        </Col>
      )
    } else {
      convoList = this.props.conversations.map((conversation) =>
        <Col sm={12} md={6} mdOffset={3} lg={3} lgOffset={0} className="base col-centered" key={conversation.id}>
            <div key={conversation.id}>
              <p>{getDay(conversation.date)}, {getDate(conversation.date)}</p>
              {
                conversation.capacity - conversation.conversation_attendances.length <= 0 ? (
                  <div>
                    <h2 className="ma-3">Full</h2>
                    <p></p>
                    <Button small disabled>{getTime(conversation.date)}</Button>
                  </div>
                ) : (
                  <div>
                    <h2>{conversation.capacity - conversation.conversation_attendances.length}</h2>
                    <p>Spots Available</p>
                    <Button type="submit" onClick={() => {this.props.onClick(conversation)}} small>{getTime(conversation.date)}</Button>
                  </div>
                )
              }
            </div>
          </Col>
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
