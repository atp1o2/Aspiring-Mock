import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class EducationFormView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      college: this.props.user.college || '',
      degree: this.props.user.degree || '',
      major: this.props.user.major|| '',
      gpa: this.props.user.gpa || '',
      graduation: this.props.user.graduation || '',
      club: this.props.user.club || '',
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
          controlId="college"
          validationState={this.getValidationState()}>
          <ControlLabel>College</ControlLabel>
          <FormControl
            name="college"
            type="text"
            defaultValue={this.state.college}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="degree"
          validationState={this.getValidationState()}>
          <ControlLabel>Degree</ControlLabel>
          <FormControl
            name="degree"
            componentClass="select"
            defaultValue={this.state.degree}
            onChange={this.handleInputChange}>
            <option>--</option>
            <option>In Progress</option>
            <option>B.S.</option>
            <option>Masters</option>
            <option>Ph.D</option>
          </FormControl>
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="major"
          validationState={this.getValidationState()}>
          <ControlLabel>Major</ControlLabel>
          <FormControl
            type="text"
            name="major"
            defaultValue={this.state.major}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="graduation"
          validationState={this.getValidationState()}>
          <ControlLabel>Graduation Date</ControlLabel>
          <FormControl
            name="graduation"
            type="month"
            defaultValue={this.state.graduation}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="gpa"
          validationState={this.getValidationState()}>
          <ControlLabel>G.P.A.</ControlLabel>
          <FormControl
            name="gpa"
            type="number"
            placeholder="0.00"
            defaultValue={this.state.gpa}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
        <FormGroup
          controlId="club"
          validationState={this.getValidationState()}>
          <ControlLabel>Club</ControlLabel>
          <FormControl
            name="club"
            type="text"
            defaultValue={this.state.club}
            onChange={this.handleInputChange} />
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    );
  }
}

export default EducationFormView;
