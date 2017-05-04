import React, { Component } from 'react';
import ConversationAttendeesView from './ConversationAttendeesView';
import { getResource } from '../../../server/railscope';

class ConversationAttendees extends Component {
  loadConversations (user) {
    var self = this;
    getResource(user, (conversation) => {
      self.setState({
        conversation: conversation,
        students: conversation.students,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      conversation: '',
      students: [],
      loading: true
    }
  }

  componentWillMount () {
    var user = {
      id: this.props.params.conversation_id,
      name: 'conversations'
    }
    this.loadConversations(user);
  }

  render () {
    return (
      <ConversationAttendeesView
        students={this.state.students}
        conversation={this.state.conversation} />
    );
  }
}

export default ConversationAttendees;
