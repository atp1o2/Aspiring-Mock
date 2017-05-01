import React, { Component } from 'react';
import RequestCardView from './RequestCardView';
import { getConversations } from '../../server/railscope';

class RequestCard extends Component {
  loadConversations (user) {
    var self = this;
    getConversations(user, (conversations) => {
      self.setState({
        conversations: conversations
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      conversations: []
    }
  }

  componentDidMount () {
    var user = {
      id: this.props.advisor.id,
      role: 'advisors'
    }
    this.loadConversations(user);
  }

  render () {
    return (
      <RequestCardView conversations={this.state.conversations} />
    )
  };
}

export default RequestCard;
