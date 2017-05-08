import React, { Component } from 'react';

class Registration extends Component {
  constructor (props) {
    super(props);
    const {email, firstName, lastName} = props
    this.state = {email: '', password: '', passwordConfirmation:'', firstName: '', lastName: ''};
    this.setState({...this.state, email, firstName, lastName});
    this.submit = this.submit.bind(this);
    this.handle = this.handle.bind(this);
    this.passwordsMatch = this.passwordsMatch.bind(this);
    this.formValid = this.formValid.bind(this);
  }

  submit(){
    this.props.postRegistration(this.state);
  }

  handle(field, e){
    this.setState({...this.state, [field]: e.target.value});
  }

  passwordsMatch(){
    const {password, passwordConfirmation} = this.state;
    return password === passwordConfirmation;
  }

  formValid(){
    const {passwordsMatch} = this;
    const valid = passwordsMatch();
    return valid;
  }

  render () {
    if (this.props.failed){
      return(<div>There was an error creating your account. Please try again.</div>);
    } else if (this.props.successful) {
      return(<div>Account successfully created.</div>);
    } else {
      return(
        <div>
          First Name:
          <input type='text' value={this.state.email} onChange={(e)=>{this.handle('firstName', e)}}></input><br/>
          Last Name:
          <input type='text' value={this.state.email} onChange={(e)=>{this.handle('lastName', e)}}></input><br/>
          Email:
          <input type='text' value={this.state.email} onChange={(e)=>{this.handle('email', e)}}></input><br/>
          Password:
          <input type='password' value={this.state.password} onChange={(e)=>{this.handle('password',e)}}></input><br/>
          Confirm Password:
          <input type='password' value={this.state.passwordConfirmation} onChange={(e)=>{this.handle('passwordConfirmation',e)}}></input><br/>
          <button onClick={()=>{this.submit()}} disabled={!formValid()}>Submit</button>
        </div>
      );
    }
  }
}

export default Registration;
