import React, { Component } from 'react';
import StudentProfileView from './StudentProfileView';
import FakeData from '../../../server/upcoming_conversations';

let data = FakeData

class StudentProfile extends Component {
  render () {
    return (
      <StudentProfileView data={data} />
    );
  }
}

export default StudentProfile;
