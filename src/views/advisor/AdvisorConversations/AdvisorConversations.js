import React, { Component } from 'react';
import AdvisorConversationsView from './AdvisorConversationsView';
import FakeData from '../../../server/upcoming_conversations';

class AdvisorConversations extends Component {
  render () {
    return (
      <AdvisorConversationsView data={FakeData} />
    );
  }
}

export default AdvisorConversations;
