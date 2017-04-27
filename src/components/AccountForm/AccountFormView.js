import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Button from '../Button.js';

class AccountFormView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: this.props.user.first_name || '',
      last_name: this.props.user.last_name || '',
      email: this.props.user.email || '',
      password: this.props.user.password || '',
      password_confirm: this.props.user.password_confirm || ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getValidationState () {
    // Should check if the field is populated
    // const length = this.state.value.length;
    // if (length > 10) return 'success';
    // else if (length > 5) return 'warning';
    // else if (length > 0) return 'error';
  }

  handleClick (e) {
    e.preventDefault();
    console.log(this.state)
    this.props.saveState(this.state);
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    // lift this into a helper function
    // const {first_name, email, password, password_confirm} = this.state;
    const {first_name, email} = this.state;
    const isEnabled = email.length > 0 && first_name.length > 0;

    return (
      <Form>
        <FormGroup
          controlId="first_name"
          validationState={this.getValidationState()}>
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            name="first_name"
            type="text"
            defaultValue={this.state.first_name}
            onChange={this.handleInputChange}>
          </FormControl>
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="last_name"
          validationState={this.getValidationState()}>
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            name="last_name"
            type="text"
            defaultValue={this.state.last_name}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            name="email"
            type="email"
            defaultValue={this.state.email}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="password"
          validationState={this.getValidationState()}>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            name="password"
            type="password"
            defaultValue={this.state.password}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="password_confirm"
          validationState={this.getValidationState()}>
          <ControlLabel>Password (confim)</ControlLabel>
          <FormControl
            name="password_confirm"
            type="password"
            defaultValue={this.state.password_confirm}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <Button onClick={this.handleClick} disabled={!isEnabled}>Submit</Button>
      </Form>
    );
  }
}

// AccountFormView.propTypes = {
//     first_name: PropTypes.string.isRequired,
//     last_name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     password_confirm: PropTypes.string.isRequired,
//   }

export default AccountFormView;
