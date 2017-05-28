import React, { Component } from 'react';
import { updateStudent } from '../../server/railscope';
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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount () {
    this.setState({
      status: this.props.student.status,
      summary: this.props.student.summary,
      links: '',
      us_citizen: '',
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
    // us_citizen needs helper to set correct bools
    e.preventDefault();
    const formPayload = {
      student: {
        id: this.props.student.id,
        // no_sponsorship: this.state.student.us_citizen,
        // us_citizen: this.state.student.us_citizen,
        no_sponsorship: true,
        us_citizen: true,
        status: this.state.status,
        summary: this.state.summary,
        links: this.state.links
      }
    };
    updateStudent(this.props.student.id, formPayload);
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
          {/*}
        <SingleInput
          label={"Links"}
          name={"links"}
          type={"text"}
          content={this.state.links}
          onChange={this.handleInputChange} />
        {*/}
        <Select
          label={"Citizenship"}
          name={"citizenship"}
          selectOption={this.state.citizenship}
          options={['US Citizen', 'No Sponsorship Needed', 'Other']}
          onChange={this.handleInputChange} />
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default ProfileForm;
