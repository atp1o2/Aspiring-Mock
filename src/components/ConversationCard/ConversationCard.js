import React, { Component } from 'react';
import ConversationCardView from './ConversationCardView';
import { getConversation, getFullAdvisor, deleteConversationAttendance } from '../../server/railscope';

class ConversationCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      conversation: '',
      advisor: '',
      loading: true
    }
    this.leaveConversation = this.leaveConversation.bind(this);
  }

  componentWillMount () {
    this.loadConversation(this.props.conversation.conversation_id, this.loadFullAdvisor)
  }

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

  leaveConversation () {
    const result = confirm("Would you like to leave this conversation with " + this.state.advisor.first_name + " " + this.state.advisor.last_name + "?")
    if (result) {
      deleteConversationAttendance(this.props.conversation.id);
    }
    this.props.removeConversation(this.props.conversation.id);
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>)
    } else {
      return (
        <ConversationCardView
          onClick={this.leaveConversation}
          advisor={this.state.advisor}
          conversation={this.state.conversation} />
      )
    }
  };
}

export default ConversationCard;
