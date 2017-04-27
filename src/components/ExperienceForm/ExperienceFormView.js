import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class ExperienceFormView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      company: this.props.user.company || '',
      position: this.props.user.position || '',
      city: this.props.user.city || '',
      start_date: this.props.user.start_date || '',
      end_date: this.props.user.end_date || '',
      current: this.props.user.current || '',
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
      <div>
        <Form>
          <FormGroup
            controlId="company"
            validationState={this.getValidationState()}>
            <ControlLabel>Company</ControlLabel>
            <FormControl
              name="company"
              type="text"
              defaultValue={this.state.company}
              onChange={this.handleInputChange}>
            </FormControl>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup
            controlId="position"
            validationState={this.getValidationState()}>
            <ControlLabel>Position</ControlLabel>
            <FormControl
              type="text"
              name="position"
              defaultValue={this.state.position}
              onChange={this.handleInputChange}/>
            <FormControl.Feedback />
          </FormGroup>
          <ControlLabel>Time Period</ControlLabel>
        </Form>
        <Form inline>
          <FormGroup
            controlId="start_date"
            validationState={this.getValidationState()}>
            <DatePicker
              name="start_date"
              defaultValue={this.state.start_date}
              onChange={this.handleInputChange}/>
            <FormControl.Feedback />
          </FormGroup>
          <span> - </span>
          <FormGroup
            controlId="end_date"
            validationState={this.getValidationState()}>
            <DatePicker
              name="end_date"
              defaultValue={this.state.end_date}
              onChange={this.handleInputChange}/>
          </FormGroup>
          <br />
          <Checkbox> Current</Checkbox>
        </Form>
      </div>
    );
  }
}

export default ExperienceFormView;
