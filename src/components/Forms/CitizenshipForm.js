import React, { Component } from 'react';
// import { getFullUser } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import Select from '../Select';
import Button from '../Button';

class IndustryForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      citizenship: '',
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
      citizenship: e.target.value
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const formPayload = {
      citizenship: this.state.citizenship
    };
    console.log('Send this in a POST request:', formPayload);
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Select
          label="Citizenship"
          name="citizenship"
          type="text"
          selectOption={this.state.citizenship}
          options={['US Citizen', 'No Sponsorship Needed', 'Other']}
          onChange={this.handleInputChange} />
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default IndustryForm;
