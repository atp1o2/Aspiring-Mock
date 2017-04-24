import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import ConversationCard from '../../../components/ConversationCard/ConversationCard';

class ConversationView extends Component {
  render () {
    let upcomingConversationList = [];
    this.props.data.map((conversation) =>
      upcomingConversationList.push(
        <Row>
          <ConversationCard data={conversation} />
        </Row>
      )
    )

    return (
      <Grid>
        <Row className="text-center">
          <h1>Your Upcoming Conversations</h1>
          <hr />
        </Row>
        {upcomingConversationList}
      </Grid>
    );
  }
}

export default ConversationView;
