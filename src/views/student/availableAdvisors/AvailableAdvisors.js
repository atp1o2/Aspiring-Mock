import React, { Component } from 'react';
import AvailableAdvisorsView from './AvailableAdvisorsView';
import { getAllAdvisors } from '../../../server/railscope';

class AvailableAdvisors extends Component {
  loadAllAdvisors () {
    var self = this;
    getAllAdvisors((users) => {
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
    this.loadAllAdvisors();
  }

  render () {
    return (
      <AvailableAdvisorsView data={this.state.advisorsList} />
    );
  }
}

export default AvailableAdvisors;
