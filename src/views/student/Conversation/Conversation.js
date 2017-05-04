import React, { Component } from 'react';
import ConversationView from './ConversationView';
import { getConversations } from '../../../server/railscope';

class Conversation extends Component {
  loadConversations (user) {
    var self = this;
    getConversations(user, (conversations) => {
      self.setState({
        conversations: conversations,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      conversations: [],
      loading: true
    }
  }

  componentDidMount () {
    var user = {
      id: this.props.params.id,
      role: 'students'
    }
    this.loadConversations(user);
  }

  render () {
    if (this.state.loading) {
      return (
        <div>loading...</div>
      )
    } else {
      return (
        <ConversationView conversations={this.state.conversations} />
      );
    }
  }
}

export default Conversation;
