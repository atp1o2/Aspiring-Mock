import React, { Component } from 'react';
import StudentProfileView from './StudentProfileView';
import FakeData from '../../../server/upcoming_conversations';

import { getAllStudents, getStudent } from '../../../server/railscope';

let data = FakeData

class StudentProfile extends Component {

  loadStudent (id) {
    var self = this;
    getStudent(id, (student) => {
      self.setState({
        student: student
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      student: ''
    }
  }

  componentDidMount () {
    this.loadStudent(1)
  }

  render () {
    return (
      <StudentProfileView data={data} />
    );
  }
}

export default StudentProfile;
