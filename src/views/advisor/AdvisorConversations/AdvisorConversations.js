import React, { Component } from 'react';
import AdvisorConversationsView from './AdvisorConversationsView';
import { getAdvisorConversations } from '../../../server/railscope';

class AdvisorConversations extends Component {
  loadAdvisorConversations (id) {
    var self = this;
    getAdvisorConversations(id, (data) => {
      self.setState({
        conversations: data,
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
    this.loadAdvisorConversations(this.props.params.id);
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
