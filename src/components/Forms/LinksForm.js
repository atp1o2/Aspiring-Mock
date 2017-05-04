import React, { Component } from 'react';
// import { getFullUser } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import Button from '../Button';

class LanguageForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      links: '',
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
      links: e.target.value
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const formPayload = {
      links: this.state.links
    };
    console.log('Send this in a POST request:', formPayload);
    this.handleClearForm(e);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      links: ''
    });
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <SingleInput
          label="Links"
          name="links"
          type="text"
          content={''}
          placeholder={'LinkedIn, Personal Websites, Projects...'}
          onChange={this.handleInputChange} />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default LanguageForm;
