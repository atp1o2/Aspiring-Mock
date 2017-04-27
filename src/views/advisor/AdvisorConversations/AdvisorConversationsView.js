import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import AdvisorConversationCard from '../../../components/AdvisorConversationCard/AdvisorConversationCard';

class AdvisorConversationView extends Component {
  render () {
    let upcomingConversationList = [];
    this.props.data.map((convo) =>
      upcomingConversationList.push(
        <Row>
          <AdvisorConversationCard data={convo} />
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
          {upcomingConversationList}
        </Row>

        <Row>
          <h1>Past Conversations</h1>
          <hr className="yellow"/>
        </Row>
        <Row>
          {upcomingConversationList}
        </Row>
      </Grid>
    );
  }
}

export default AdvisorConversationView;
