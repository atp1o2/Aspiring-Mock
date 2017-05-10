import React, { Component } from 'react';
import RequestCardView from './RequestCardView';
import { getAdvisorConversations } from '../../server/railscope';

class RequestCard extends Component {
  loadAdvisorConversations (id) {
    var self = this;
    getAdvisorConversations(id, (data) => {
      self.setState({
        conversations: data
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
    this.loadAdvisorConversations(this.props.advisor.id);
  }

  render () {
    return (
      <RequestCardView conversations={this.state.conversations} />
    )
  };
}

export default RequestCard;
