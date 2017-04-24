import React, { Component } from 'react';
import ConversationView from './ConversationView';
import FakeData from '../../../server/upcoming_conversations';

let data = FakeData

class Conversation extends Component {
  render () {
    return (
      <ConversationView data={FakeData} />
    );
  }
}

export default Conversation;
