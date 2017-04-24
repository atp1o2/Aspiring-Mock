import React, { Component } from 'react';
import RecruitStudentsView from './RecruitStudentsView';
import FakeData from '../../../server/fake_students';

class RecruitStudents extends Component {
  render () {
    return (
      <RecruitStudentsView data={FakeData} />
    );
  }
}

export default RecruitStudents;
