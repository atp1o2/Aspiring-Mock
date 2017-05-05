import React, { Component } from 'react';
import ConversationCardView from './ConversationCardView';
import { getConversation, getFullAdvisor } from '../../server/railscope';

class ConversationCard extends Component {
  loadConversation (id, callback) {
    var self = this;
    getConversation(id, (data) => {
      self.setState({
        conversation: data,
        loading: false
      })
      callback.apply(this, [data.advisor_id]);
    })
  }

  loadFullAdvisor (id) {
    var self = this;
    getFullAdvisor(id, (data) => {
      self.setState({
        advisor: data,
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
    this.loadConversation(this.props.conversation.conversation_id, this.loadFullAdvisor)
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>)
    } else {
      return (
        <ConversationCardView
          advisor={this.state.advisor}
          conversation={this.state.conversation} />
      )
    }
  };
}

export default ConversationCard;
