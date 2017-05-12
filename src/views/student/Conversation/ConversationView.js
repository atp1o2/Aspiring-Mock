import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import ConversationCard from '../../../components/ConversationCard/ConversationCard';

class ConversationView extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      conversation_attendances: []
    })
    this.removeConversationFromView = this.removeConversationFromView.bind(this);
  }

  componentDidMount () {
    this.setState({
      conversation_attendances: this.props.conversation_attendances,
    })
  }

  removeConversationFromView (id) {
    this.setState({
      ...this.state,
      conversation_attendances: this.state.conversation_attendances.filter((object) => {
        return object.id !== id
      })
    })
  }

  render () {
    const upcomingConversationList = this.state.conversation_attendances.map((conversation) =>
      <Row key={conversation.id}>
        <ConversationCard
          removeConversation={this.removeConversationFromView}
          conversation={conversation} />
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
