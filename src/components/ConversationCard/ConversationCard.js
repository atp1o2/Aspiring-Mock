import React, { Component } from 'react';
import ConversationCardView from './ConversationCardView';
import { getConversation } from '../../server/railscope';

class ConversationCard extends Component {
  loadConversation (id) {
    var self = this;
    getConversation(id, (conversation) => {
      self.setState({
        conversation: conversation,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      conversation: '',
      advisor: '',
      loading: true
    }
  }

  componentWillMount () {
    this.loadConversation(this.props.data.conversation_id)
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>)
    } else {
      return (<ConversationCardView conversation={this.state.conversation} />)
    }
  };
}

export default ConversationCard;
