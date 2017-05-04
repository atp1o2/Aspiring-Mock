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
      language: '',
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
      language: e.target.value
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const formPayload = {
      language: this.state.language
    };
    console.log('Send this in a POST request:', formPayload);
    this.handleClearForm(e);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      language: ''
    });
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <SingleInput
          label="Language"
          name="language"
          type="text"
          content={this.state.language}
          placeholder={'Spanish, Javascript, Latin...'}
          onChange={this.handleInputChange} />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default LanguageForm;
