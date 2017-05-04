import React, { Component } from 'react';
import StudentAccountView from './StudentAccountView';
// import { getFullUser } from '../../../server/railscope';

class StudentAccount extends Component {
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
      <StudentAccountView data={this.state.student} />
    );
  }
}

export default StudentAccount;
