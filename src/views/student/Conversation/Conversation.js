import React, { Component } from 'react';
import ConversationView from './ConversationView';
import { getStudentConversations } from '../../../server/railscope';

class Conversation extends Component {
  loadConversations (id) {
    var self = this;
    getStudentConversations(id, (data) => {
      self.setState({
        conversation_attendances: data,
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
    this.loadConversations(this.props.params.id);
  }

  render () {
    if (this.state.loading) {
      return (
        <div>loading...</div>
      )
    } else {
      return (
        <ConversationView conversation_attendances={this.state.conversation_attendances} />
      );
    }
  }
}

export default Conversation;
