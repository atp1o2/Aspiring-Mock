import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import AdvisorConversationCard from '../../../components/AdvisorConversationCard/AdvisorConversationCard';
import Button from '../../../components/Button';

class AdvisorConversationView extends Component {
  render () {
    let upcomingConversationList = [];
    this.props.conversations.map((conversation) =>
      upcomingConversationList.push(
        <Row key={conversation.id}>
          <AdvisorConversationCard conversation={conversation} />
        </Row>
      )
    )

    return (
      <Grid className="text-center">
        <Row>
          <h1>Upcoming Conversations</h1>
          <hr className="yellow"/>
        </Row>
        <Row>
          <Button>Add Conversation Slot</Button>
        </Row>
        <Row>
          {upcomingConversationList}
        </Row>

        <Row>
          <h1>Past Conversations</h1>
          <hr className="yellow"/>
        </Row>
        <Row>
          // todo
        </Row>
      </Grid>
    );
  }
}

export default AdvisorConversationView;
