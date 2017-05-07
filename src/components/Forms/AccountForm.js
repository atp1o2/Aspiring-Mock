import React, { Component } from 'react';
import { updateUser } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import Button from '../Button';

class AccountForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      old_password: '',
      new_password: '',
      password_confirm: '',
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  componentDidMount () {
    this.setState({
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      // old_password: this.props.user.,
      // new_password: this.props.user.,
      // password_confirm: this.props.user.,
      loading: true
    })
  }

  handlePasswordChange (e) {
    // validations go here
    // No password change functionality yet
    this.setState({
      password: e.target.value
    });
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const formPayload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
    };
      // password: this.state.password
    console.log('Send this in a POST request:', formPayload);
    updateUser(this.props.user.user_id, formPayload);
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <SingleInput
          label={"First Name"}
          name={"first_name"}
          type={"text"}
          content={this.state.first_name}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Last Name"}
          name={"last_name"}
          type={"text"}
          content={this.state.last_name}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Email"}
          name={"email"}
          type={"text"}
          content={this.state.email}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Password"}
          name={"password"}
          type={"password"}
          content={this.state.new_password}
          onChange={this.handlePasswordChange} />
        <SingleInput
          label={"Password (confirm)"}
          name={"password_confirm"}
          type={"password"}
          content={this.state.password_confirm}
          onChange={this.handlePasswordChange} />
        <Button type="submit">Update</Button>
      </Form>
    );
  }
}

export default AccountForm;
