import React, { Component } from 'react';
import Registration from './Registration';
import postAdvisor from '../../server/railscope';

class AdvisorRegistration extends Component {
  constructor(props){
    super(props);
    this.state = {successful: false, failed: false}
    this.submitAdvisor = this.submitAdvisor.bind(this);
  }

  submitAdvisor({firstName, lastName, email, password, passwordConfirmation}) {
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
    postAdvisor(student, (response)=>{
      this.setState({successful: true});
    }, (response)=>{
      this.setState({failed: true});
    });
  }

  render() {
      <Registration
        submit={(state)=>submitAdvisor(state)}
        successful={this.state.successful}
        failed={this.state.failed}
      />
  }
}

export default AdvisorRegistration;
