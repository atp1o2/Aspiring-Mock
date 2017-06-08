import React, { Component } from 'react';
import {validateSchoolEmail} from '../../../server/railscope';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Button from '../../../components/Button';

class Registration extends Component {
  constructor (props) {
    super(props);
    this.state = {email: '', password: '', passwordConfirmation:'', firstName: '', lastName: '', emailValid: false};
    this.submit = this.submit.bind(this);
    this.handle = this.handle.bind(this);
    this.passwordsMatch = this.passwordsMatch.bind(this);
    this.checkEmailValid = this.checkEmailValid.bind(this);
    this.emailRegex = this.emailRegex.bind(this);
    this.emailValid = this.emailValid.bind(this);
    this.formValid = this.formValid.bind(this);
  }

  submit(){
    if (this.formValid()) this.props.submit(this.state);
  }

  handle(field, e){
    this.setState({...this.state, [field]: e.target.value});
  }

  passwordsMatch(){
    const {password, passwordConfirmation} = this.state;
    return password === passwordConfirmation && password.length > 0;
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.email !== this.props.email){
      this.setState({...this.state, email: this.props.email});
    }
    if (prevState.email !== this.state.email){
      this.checkEmailValid();
    }
  }

  checkEmailValid(){
    if (this.props.validateEmail){
      validateSchoolEmail(
        this.state.email,
        (response)=>{
          this.setState({...this.state, emailValid: response.valid && this.emailRegex()});
        },
        (response)=>{
          this.setState({...this.state, emailValid: false});
        }
      );
    } else {
      this.setState({...this.state, emailValid: this.emailRegex()});
    }
  }

  emailRegex(){
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const valid = re.test(this.state.email);
      return valid;
  }

  emailValid(){
    return this.state.emailValid;
  }

  formValid(){
    const {passwordsMatch, emailValid} = this;
    const valid = passwordsMatch() && emailValid();
    return valid;
  }

  render () {
    const {handle, formValid, submit, checkEmailValid, emailValid} = this;
    if (this.props.failed){
      return(<div>There was an error creating your account. Please try again.</div>);
    } else if (this.props.successful) {
      return(<div>Account successfully created.</div>);
    } else {
      const emailInput = (
        <FormGroup>
          <ControlLabel>Email:</ControlLabel>
          <FormControl
            type='text'
            value={this.state.email}
            onChange={(e)=>{handle('email', e);}}>
          </FormControl>
          {emailValid() ? '✓' : 'x'}
        </FormGroup>
      );

      const emailField = this.props.email ? <div>Email: {this.props.email}</div> : emailInput;

      return(
        <div>
          <FormGroup>
            <ControlLabel>First Name:</ControlLabel>
            <FormControl
              type='text'
              value={this.state.firstName}
              onChange={(e)=>{handle('firstName', e)}}>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Last Name:</ControlLabel>
            <FormControl
              type='text'
              value={this.state.lastName}
              onChange={(e)=>{handle('lastName', e)}}>
            </FormControl>
          </FormGroup>

          {emailField}

          <FormGroup>
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              type='password'
              value={this.state.password}
              onChange={(e)=>{handle('password',e)}}>
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Confirm Password:</ControlLabel>
            <FormControl
              type='password'
              value={this.state.passwordConfirmation}
              onChange={(e)=>{handle('passwordConfirmation',e)}}>
            </FormControl>
          </FormGroup>
          <Button className="mt-2" onClick={()=>{submit()}} disabled={!formValid()}>Submit</Button>
        </div>
      );
    }
  }
}

export default Registration;
