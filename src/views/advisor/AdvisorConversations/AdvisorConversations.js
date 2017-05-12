import React, { Component } from 'react';
import AdvisorConversationsView from './AdvisorConversationsView';
import { getFullAdvisor, getAdvisorConversations } from '../../../server/railscope';
import withIdentity from '../../../components/Identity/withIdentity';


class AdvisorConversations extends Component {
  constructor (props) {
    super(props);
    this.state = {
      conversations: [],
      advisor: '',
      loading: true
    }
  }

  componentDidMount () {
    this.loadFullAdvisor(this.props.identity.profile_id, this.loadAdvisorConversations);
  }

  loadFullAdvisor (id, callback) {
    var self = this;
    getFullAdvisor(id, (data) => {
      self.setState({
        advisor: data,
      })
      callback.apply(this, [id]);
    })
  }

  loadAdvisorConversations (id) {
    var self = this;
    getAdvisorConversations(id, (data) => {
      self.setState({
        conversations: data,
        loading: false
      })
    })
  }

  render () {
    if (this.state.loading) {
      return (<div>Forbidden. You are not this advisor.</div>);
    } else if (this.props.identity.profile_id === this.state.advisor.id) {
      return (
        <AdvisorConversationsView
          conversations={this.state.conversations}
          advisor={this.state.advisor} />);
    }
  }
}

const AdvisorConversationsWithIdentity = withIdentity(AdvisorConversations);
export default AdvisorConversationsWithIdentity;
