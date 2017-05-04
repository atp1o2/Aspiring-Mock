import React, { Component } from 'react';
// import { getFullUser } from '../../server/railscope';
import { Form } from 'react-bootstrap';
import TextArea from '../TextArea';
import Button from '../Button';

class SummaryForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      summary: '',
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
      summary: e.target.value
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const formPayload = {
      summary: this.state.summary
    };
    console.log('Send this in a POST request:', formPayload);
    this.handleClearForm(e);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      summary: ''
    });
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <TextArea
          label="Summary"
          name="summary"
          type="text"
          rows={6}
          content={this.state.summary}
          placeholder={this.props.placeholder ? this.props.placeholder : "Tell us about yourself!"}
          onChange={this.handleInputChange} />
        <Button type="submit">Save</Button>
      </Form>
    );
  }
}

export default SummaryForm;
