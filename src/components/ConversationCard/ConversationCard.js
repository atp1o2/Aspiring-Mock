import React, { Component } from 'react';
import ConversationCardView from './ConversationCardView';
import { getResource, getFullUser } from '../../server/railscope';

class ConversationCard extends Component {
  loadConversation (resource, callback) {
    var self = this;
    getResource(resource, (conversation) => {
      self.setState({
        conversation: conversation,
        loading: false
      })
      var user = {
        id: conversation.advisor_id,
        role: 'advisors'
      }
      callback.apply(this, [user])
    })
  }

  loadFullUser (user) {
    var self = this;
    getFullUser(user, (user) => {
      self.setState({
        advisor: user,
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
    var resource = {
      id: this.props.conversation.conversation_id,
      name: 'conversations'
    }
    this.loadConversation(resource, this.loadFullUser)
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
