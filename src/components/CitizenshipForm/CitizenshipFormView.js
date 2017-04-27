import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class CitizenshipFormView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      citizenship: this.props.user.citizenship || ''
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
          controlId="citizenship"
          validationState={this.getValidationState()}>
          <ControlLabel>Citizenship</ControlLabel>
          <FormControl
            componentClass="select"
            name="citizenship"
            defaultValue={this.state.citizenship}
            onChange={this.handleInputChange}>
            <option>--</option>
            <option>US Citizen</option>
            <option>Sponsorship Needed</option>
            <option>Self Sponsored</option>
          </FormControl>
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    );
  }
}

export default CitizenshipFormView;
