import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ConversationCard from '../../../components/ConversationCard/ConversationCard';

class ConversationView extends Component {
  render () {
    const upcomingConversationList = this.props.conversations.map((conversation) =>
      <Row key={conversation.id}>
        <ConversationCard conversation={conversation} />
      </Row>
    )

    return (
      <Grid>
        <Row className="text-center">
          <h1>Your Upcoming Conversations</h1>
          <hr className="yellow" />
        </Row>
        <div>
          {
            upcomingConversationList.length === 0 ?  (
              <h4 className="text-center">No Conversations Booked</h4>
              ) : (
                upcomingConversationList
              )
          }
        </div>
      </Grid>
    );
  }
}

export default ConversationView;
