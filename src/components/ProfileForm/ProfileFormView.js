import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Button from '../Button.js';

class ProfileFormView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: this.props.user.status || '',
      summary: this.props.user.summary || '',
      links: this.props.user.links || '',
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
    const {status, summary, links} = this.state;
    const isEnabled = status.length > 0 && summary.length > 0;

    return (
      <Form>
        <FormGroup
          controlId="status"
          validationState={this.getValidationState()}>
          <ControlLabel>Status</ControlLabel>
          <FormControl
            componentClass="select"
            name="status"
            defaultValue={this.state.status}
            onChange={this.handleInputChange}>
            <option>Seeking Opportunities</option>
            <option>Currently Employed</option>
            <option>Exploring Careers</option>
          </FormControl>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="summary"
          validationState={this.getValidationState()}>
          <ControlLabel>Summary</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="summary"
            defaultValue={this.state.summary}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="links"
          validationState={this.getValidationState()}>
          <ControlLabel>Links</ControlLabel>
          <FormControl
            name="links"
            type="text"
            defaultValue={this.state.links}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    );
  }
}

export default ProfileFormView;
