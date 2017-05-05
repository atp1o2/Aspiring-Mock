import React, { Component } from 'react';
import ProfileCardView from './ProfileCardView';
import { getFullAdvisor } from '../../server/railscope';

class ProfileCard extends Component {
  loadFullAdvisor (id) {
    var self = this;
    getFullAdvisor(id, (data) => {
      self.setState({
        user: data,
        company: data.company,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      user: '',
      company: '',
      loading: true
    }
  }

  componentDidMount () {
    this.loadFullAdvisor(this.props.advisor.id);
  }

  render () {
    return (
      <ProfileCardView
        user={this.state.user}
        company={this.state.company} />
    );
  };
}

export default ProfileCard;
