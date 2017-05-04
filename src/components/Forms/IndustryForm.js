import React, { Component } from 'react';
// import { getFullUser } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import Button from '../Button';

class IndustryForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      industry: '',
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount () {
    this.setState({
      user: this.props.user
    })
  }

  handleInputChange (e) {
    // validations go here
    this.setState({
      industry: e.target.value
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const formPayload = {
      industry: this.state.industry
    };
    console.log('Send this in a POST request:', formPayload);
    this.handleClearForm(e);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      industry: ''
    });
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <SingleInput
          label="Industry"
          name="industry"
          type="text"
          content={''}
          placeholder={'Business'}
          onChange={this.handleInputChange} />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default IndustryForm;
