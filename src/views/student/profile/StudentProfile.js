import React, { Component } from 'react';
import StudentProfileView from './StudentProfileView';
import { getStudent } from '../../../server/railscope';

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
      <StudentProfileView data={this.state.student} />
    );
  }
}

export default StudentProfile;
