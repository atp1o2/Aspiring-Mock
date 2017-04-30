import React, { Component } from 'react';
import AdvisorConversationCardView from './AdvisorConversationCardView';

class AdvisorConversationCard extends Component {
  render () {
    return (
      <AdvisorConversationCardView conversation={this.props.conversation} />
    )
  };
}

export default AdvisorConversationCard;
