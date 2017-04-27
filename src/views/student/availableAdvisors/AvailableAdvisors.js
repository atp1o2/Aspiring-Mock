import React, { Component } from 'react';
import AvailableAdvisorsView from './AvailableAdvisorsView';
import FakeData from '../../../server/fake_data';
import { getAllAdvisors } from '../../../server/railscope';


// let advisorData = FakeData;

class AvailableAdvisors extends Component {
  loadAllAdvisors () {
    var self = this;
    getAllAdvisors((advisorList) => {
      self.setState({
        advisorsList: advisorList
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      advisorsList: []
    }
  }

  componentDidMount () {
    this.loadAllAdvisors()
  }

  render () {
    return (
      <AvailableAdvisorsView data={this.state.advisorsList} />
    );
  }
}

export default AvailableAdvisors;
