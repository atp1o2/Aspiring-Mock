import React, { Component } from 'react';
import StudentProfileView from './StudentProfileView';
// import { getFullUser } from '../../../server/railscope';

class StudentProfile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      student: ''
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <StudentProfileView data={this.state.student} />
    );
  }
}

export default StudentProfile;
