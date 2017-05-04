import React, { Component } from 'react';
import AdvisorConversationsView from './AdvisorConversationsView';
import { getConversations } from '../../../server/railscope';

class AdvisorConversations extends Component {
  loadConversations (user) {
    var self = this;
    getConversations(user, (conversations) => {
      self.setState({
        conversations: conversations,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      conversations: [],
      loading: true
    }
  }

  componentDidMount () {
    var user = {
      id: this.props.params.id,
      role: 'advisors'
    }
    this.loadConversations(user);
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>);
    } else {
      return (<AdvisorConversationsView conversations={this.state.conversations} />);
    }
  }
}

export default AdvisorConversations;
