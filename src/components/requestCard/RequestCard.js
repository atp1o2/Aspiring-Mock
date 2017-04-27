import React, { Component } from 'react';
import RequestCardView from './RequestCardView';
import { getConversations } from '../../server/railscope';

class RequestCard extends Component {
  loadConversations (id) {
    var self = this;
    getConversations(id, (conversations) => {
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
    this.loadConversations(this.props.advisor.id);
  }

  render () {
    return (
      <RequestCardView conversations={this.state.conversations} />
    )
  };
}

export default RequestCard;
