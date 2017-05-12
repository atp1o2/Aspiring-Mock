import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AdvisorConversationCard from '../../../components/AdvisorConversationCard/AdvisorConversationCard';
import NewConversationForm from '../../../components/Forms/NewConversationForm';

class AdvisorConversationView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      conversations: [],
      loading: false,
    }
    this.addNewConversationToView = this.addNewConversationToView.bind(this);
    this.removeConversationFromView = this.removeConversationFromView.bind(this);
  }

  componentDidMount () {
    this.setState({
      conversations: this.props.conversations,
    })
  }

  removeConversationFromView (id) {
    this.setState({
      ...this.state,
      conversations: this.state.conversations.filter((object) => {
        return object.id !== id
      })
    })
  }

  addNewConversationToView (conversation) {
    this.setState({
      ...this.state,
        conversations: this.state.conversations.concat(conversation)
    })
  }

  render () {
    const upcomingConversationList = this.state.conversations.reverse().map((conversation) =>
      <Row key={conversation.id}>
        <AdvisorConversationCard
          removeConversationFromView={this.removeConversationFromView}
          conversation={conversation} />
      </Row>
    )

    if (this.state.loading) {
      return (<div>Loading</div>)
    } else
    {
      return (
        <Grid className="text-center">
          <Row>
            <h1>Upcoming Conversations</h1>
            <hr className="yellow"/>
          </Row>
          <Row className="mt-3">
            <Col xs={12} xsOffset={0} sm={8} smOffset={2}>
              <NewConversationForm
              addNewConversationToView={this.addNewConversationToView}
              advisor={this.props.advisor} />
            </Col>
          </Row>
          <Row className="mt-3">
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
}

export default AdvisorConversationView;
