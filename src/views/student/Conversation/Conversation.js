import React, { Component } from 'react';
import ConversationView from './ConversationView';
import { getStudentConversationsAttendances } from '../../../server/railscope';

class Conversation extends Component {
  loadConversationsAttendance (student_id) {
    var self = this;
    getStudentConversationsAttendances(student_id, (conversation_attendances) => {
      self.setState({
        conversation_attendances: conversation_attendances,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      conversation_attendances: [],
      loading: true
    }
  }

  componentDidMount () {
    this.loadConversationsAttendance(this.props.params.id);
  }

  render () {
    if (this.state.loading) {
      return (
        <div>loading...</div>
      )
    } else {
      return (
        <ConversationView data={this.state.conversation_attendances} />
      );
    }
  }
}

export default Conversation;
