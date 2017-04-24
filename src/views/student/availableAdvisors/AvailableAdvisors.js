import React, { Component } from 'react';
import AvailableAdvisorsView from './AvailableAdvisorsView';
import FakeData from '../../../server/fake_data';

let advisorData = FakeData;

class AvailableAdvisors extends Component {
  render () {
    return (
      <AvailableAdvisorsView data={advisorData} />
    );
  }
}

export default AvailableAdvisors;
