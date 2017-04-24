import React, { Component } from 'react';
import AdvisorConversationCardView from './AdvisorConversationCardView';

class AdvisorConversationCard extends Component {
  render () {
    return (
      <AdvisorConversationCardView data={this.props.data} />
    )
  };
}

export default AdvisorConversationCard;
