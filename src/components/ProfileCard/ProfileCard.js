import React, { Component } from 'react';
import ProfileCardView from './ProfileCardView';
import { getFullUser } from '../../server/railscope';

class ProfileCard extends Component {
  loadFullUser (user) {
    var self = this;
    getFullUser(user, (user) => {
      self.setState({
        user: user,
        company: user.company,
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
    var user = {
      id: this.props.advisor.id,
      role: "advisors"
    }
    this.loadFullUser(user);
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
