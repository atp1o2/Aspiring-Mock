import React, { Component } from 'react';
import RequestCardView from './RequestCardView';
import { getAdvisorConversations, joinConversationAttendances } from '../../server/railscope';
import withIdentity from '../Identity/withIdentity';

class RequestCard extends Component {
  loadAdvisorConversations (id) {
    var self = this;
    getAdvisorConversations(id, (data) => {
      self.setState({
        conversations: data
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      conversations: [],
    }
    this.joinConversation = this.joinConversation.bind(this);
  }

  componentDidMount () {
    this.loadAdvisorConversations(this.props.advisor.id);
  }

  joinConversation (conversation) {
    const payload = {
      conversation_attendance: {
        student_id: this.props.identity.profile_id,
        conversation_id: conversation.id,
      }
    }
    joinConversationAttendances(conversation.id, payload);
  }

  render () {
    return (
      <RequestCardView
        onClick={this.joinConversation}
        conversations={this.state.conversations} />
    )
  };
}

const RequestCardWithIdentity = withIdentity(RequestCard);
export default RequestCardWithIdentity;
