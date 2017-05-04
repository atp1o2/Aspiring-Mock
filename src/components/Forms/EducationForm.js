import React, { Component } from 'react';
import { getFullUser } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import Button from '../Button';

class ProfileForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      school: '',
      major: '',
      degree: '',
      end_date: '',
      gpa: '',
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
      school: this.state.school,
      major: this.state.major,
      degree: this.state.degree,
      end_date: this.state.end_date,
      gpa: this.state.gpa
    };
    console.log('Send this in a POST request:', formPayload);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      school: '',
      major: '',
      degree: '',
      end_date: '',
      gpa: ''
    });
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <SingleInput
          label={"School"}
          name={"school"}
          type={"text"}
          content={this.state.school}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Degree"}
          name={"degree"}
          type={"text"}
          content={this.state.degree}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Major"}
          name={"major"}
          type={"text"}
          content={this.state.major}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Graduation Date"}
          name={"end_date"}
          type={"month"}
          content={this.state.end_date}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"G.P.A."}
          name={"gpa"}
          type={"number"}
          content={this.state.gpa}
          onChange={this.handleInputChange} />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default ProfileForm;
