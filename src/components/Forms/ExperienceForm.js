import React, { Component } from 'react';
// import { getFullUser } from '../../server/railscope';
import { Form, Row, Col } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import RadioOrCheckbox from '../RadioOrCheckbox';

import Button from '../Button';

class ExperienceForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      name: '',
      job_title: '',
      start_date: '',
      end_date: '',
      current: [],
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount () {
    this.setState({
      user: this.props.user
    })
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSelection (e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.current.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.current.filter(s => s !== newSelection)
    }
    else {
      newSelectionArray = [...this.state.current, newSelection];
    }
      this.setState({ current: newSelectionArray });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    const formPayload = {
      name: this.state.name,
      job_title: this.state.job_title,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      current: this.state.current
    };
    console.log('Send this in a POST request:', formPayload);
    this.handleClearForm(e);
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      name: '',
      job_title: '',
      start_date: '',
      end_date: '',
      current: '',
    });
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <SingleInput
          label={"Company Name"}
          name={"name"}
          type={"text"}
          content={this.state.name}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Job Title"}
          name={"job_title"}
          type={"text"}
          content={this.state.job_title}
          onChange={this.handleInputChange} />
        <Row>
          <Col xs={5}>
            <SingleInput
              label={"Start Date"}
              name={"start_date"}
              type={"month"}
              content={this.state.start_date}
              onChange={this.handleInputChange} />
          </Col>
          <Col xs={5}>
            <SingleInput
              label={"End Date"}
              name={"end_date"}
              type={"month"}
              content={this.state.end_date}
              onChange={this.handleInputChange} />
          </Col>
          <Col xs={2} className="mt-1">
            <RadioOrCheckbox
              name={'current'}
              type={'checkbox'}
              onChange={this.handleSelection}
              options={["Current"]}
              selectedOptions={this.state.current} />
          </Col>
        </Row>
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default ExperienceForm;
