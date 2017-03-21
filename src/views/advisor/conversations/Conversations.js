import React, { Component } from 'react';
import ConversationView from './ConversationsView';
import Store from '../../../store/store';

class Conversation extends Component {
  render () {
    return (
      <ConversationView />
    );
  }
}

export default Conversation;
