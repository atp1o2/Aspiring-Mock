import React, { Component } from 'react';
import AvailableAdvisorsView from './AvailableAdvisorsView';
import { getAllUsers } from '../../../server/railscope';

class AvailableAdvisors extends Component {
  loadAllUsers (role) {
    var self = this;
    getAllUsers(role, (users) => {
      self.setState({
        advisorsList: users
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      advisorsList: []
    }
  }

  componentWillMount () {
    this.loadAllUsers("advisors");
  }

  render () {
    return (
      <AvailableAdvisorsView data={this.state.advisorsList} />
    );
  }
}

export default AvailableAdvisors;
