import React, { Component } from 'react';
import AdvisorConversationCardView from './AdvisorConversationCardView';
import { deleteConversation } from '../../server/railscope';

// REFACTOR
// Instead of rendering the list of cards in the view
// render the list here
class AdvisorConversationCard extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (id) {
    console.log('convo id', id)

      deleteConversation(id);
      this.props.removeConversationFromView(id)

  }

  render () {
    console.log('new convo added', this.props.conversation.id)

    return (
      <AdvisorConversationCardView
        onClick={this.handleClick}
        conversation={this.props.conversation} />
    )
  };
}

export default AdvisorConversationCard;
