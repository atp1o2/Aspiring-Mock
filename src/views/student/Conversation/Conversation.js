import React, { Component } from 'react';
import ConversationView from './ConversationView';
import FakeData from '../../../server/upcoming_conversations';

class Conversation extends Component {
  render () {
    return (
      <ConversationView data={FakeData} />
    );
  }
}

export default Conversation;
