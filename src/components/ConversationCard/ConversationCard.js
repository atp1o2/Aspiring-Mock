import React, { Component } from 'react';
import ConversationCardView from './ConversationCardView';

class ConversationCard extends Component {
  render () {
    return (
      <ConversationCardView data={this.props.data} />
    )
  };
}

export default ConversationCard;
