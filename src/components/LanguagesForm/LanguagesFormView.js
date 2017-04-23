import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Button from '../Button.js';

class LanguagesFormView extends Component {
    constructor (props) {
    super(props);
    this.state = {
      language: this.props.user.language || '',
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
    // const {status, summary, links} = this.state;
    // const isEnabled = status.length > 0 && summary.length > 0;

    return (
      <Form>
        <FormGroup
          controlId="language"
          validationState={this.getValidationState()}>
          <ControlLabel>Language</ControlLabel>
          <FormControl
            name="language"
            type="text"
            defaultValue={this.state.language}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    );
  }
}

export default LanguagesFormView;
