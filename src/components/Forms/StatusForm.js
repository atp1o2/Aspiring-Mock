import React, { Component } from 'react';
// import { getFullUser } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import TextArea from '../TextArea';
import Select from '../Select';
import Button from '../Button';

class ProfileForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: '',
      summary: '',
      links: '',
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount () {
    this.setState({
      status: this.props.student.status,
      summary: this.props.student.summary,
      links: '',
      loading: false
    })
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
      status: this.state.status,
      summary: this.state.summary,
      links: this.state.links
    };
    console.log('Send this in a POST request:', formPayload);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      status: '',
      summary: '',
      links: '',
    });
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Select
          label={"Status"}
          name={"status"}
          onChange={this.handleInputChange}
          selectOption={this.state.status}
          options={['exploring', 'seeking', 'employed']} />
        <TextArea
          label={"Summary"}
          rows={6}
          name={"summary"}
          content={this.state.summary}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Links"}
          name={"links"}
          type={"text"}
          content={this.state.links}
          onChange={this.handleInputChange} />
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default ProfileForm;
