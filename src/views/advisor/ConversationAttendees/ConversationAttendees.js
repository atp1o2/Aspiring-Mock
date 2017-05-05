import React, { Component } from 'react';
import ConversationAttendeesView from './ConversationAttendeesView';
import { getConversation } from '../../../server/railscope';

class ConversationAttendees extends Component {
  loadConversation (id) {
    var self = this;
    getConversation(id, (data) => {
      self.setState({
        conversation: data,
        students: data.students,
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
    this.loadConversation(this.props.params.conversation_id);
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
