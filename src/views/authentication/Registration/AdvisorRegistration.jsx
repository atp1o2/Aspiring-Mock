import React, { Component } from 'react';
import Registration from './Registration';
import {postAdvisor, getAdvisorInvite} from '../../../server/railscope';

class AdvisorRegistration extends Component {
  constructor(props){
    super(props);
    this.state = {successful: false, failed: false, invite: {email: ''}}
    this.submitAdvisor = this.submitAdvisor.bind(this);
  }

  componentDidMount () {
    this.loadInvite(this.props.params.id);
  }

  loadInvite (id) {
    var self = this;
    getAdvisorInvite(id, (data) => {
      console.log(data)
      self.setState({
        invite: data,
      })
    })
  }

  submitAdvisor({firstName, lastName, email, password, passwordConfirmation}) {
    const userAttributes = {
      'first_name': firstName,
      'last_name': lastName,
      password,
      'password_confirmation': passwordConfirmation,
    };
    const advisor = {
      'user_attributes': userAttributes,
    };
    postAdvisor({advisor, code: this.props.params.id}, (response)=>{
      this.setState({successful: true});
    }, (response)=>{
      this.setState({failed: true});
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Advisor Registration</h2>
        <Registration
          submit={(state)=>this.submitAdvisor(state)}
          successful={this.state.successful}
          failed={this.state.failed}
          email={this.state.invite.email}
        />
      </div>
    );
  }
}

export default AdvisorRegistration;
