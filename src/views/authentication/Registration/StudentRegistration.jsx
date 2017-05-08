import React, { Component } from 'react';
import Registration from './Registration';
import postStudent from '../../server/railscope';

class StudentRegistration extends Component {
  constructor(props){
    super(props);
    this.state = {successful: false, failed: false}
    this.submitStudent = this.submitStudent.bind(this);
  }

  submitStudent({firstName, lastName, email, password, passwordConfirmation}) {
    const userAttributes = {
      'first_name': firstName,
      'last_name': lastName,
      email,
      password,
      'password_confirmation': passwordConfirmation,
    };
    const student = {
      'user_attributes': userAttributes,
    };
    postStudent(student, (response)=>{
      this.setState({successful: true});
    }, (response)=>{
      this.setState({failed: true});
    });
  }

  render() {
      <Registration
        submit={(state)=>submitStudent(state)}
        successful={this.state.successful}
        failed={this.state.failed}
      />
  }
}
