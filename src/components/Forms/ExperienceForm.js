import React, { Component } from 'react';
import { getAllCompanies, postWorkExperience, getAllCities, getAllStates } from '../../server/railscope';
import { Form, Row, Col } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import TextArea from '../TextArea';
import RadioOrCheckbox from '../RadioOrCheckbox';

import Button from '../Button';

class ExperienceForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      company_name: '',
      title: '',
      start_date: '',
      end_date: '',
      current: [],
      url: '',
      summary: '',
      city: '',
      state: '',
      all_companies: '',
      all_states: '',
      all_cities: '',
      loading: true
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  loadAllCompanies () {
    var self = this;
    getAllCompanies((data) => {
      self.setState({
        all_companies: data
      })
    })
  }
  loadAllCities () {
    var self = this;
    getAllCities((data) => {
      self.setState({
        all_cities: data
      })
    })
  }
  loadAllStates () {
    var self = this;
    getAllStates((data) => {
      self.setState({
        all_states: data
      })
    })
  }

  componentDidMount () {
    this.loadAllCompanies();
    this.loadAllStates();
    this.loadAllCities();
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
    if (newSelectionArray[0] === "Current") {
      newSelectionArray = true;
    }
    this.setState({ current: newSelectionArray });
  }
  // Lift into helper
  checkRecords (list, key, value) {
    let object;
    list.some((element) => {
      if (element[key] === value) {
        return object = element
      }
    })
    return object;
  }

  handleFormSubmit (e) {
    e.preventDefault();
    let company_key, company_val, city_key, city_val;
    const checkCompany = this.checkRecords(this.state.all_companies, 'name', this.state.company_name);
    const checkCity = this.checkRecords(this.state.all_cities, 'name', this.state.city);
    const checkState = this.checkRecords(this.state.all_states, 'name', this.state.state);

    // Lift into helper
    if (checkCompany) {
      company_key = "company_id";
      company_val = checkCompany.id;
    }
    else {
      company_key = "company_attributes";
      company_val = {"name": this.state.company_name};
    }

    if (checkCity) {
      city_key = "city_id";
      city_val = checkCity.id;
    }
    else {
      city_key = "city_attributes";
      city_val = {"name": this.state.city, "state_id": checkState.id};
    }

    // needs to check for city_id and state_id
    const formPayload = {
      work_experience: {
        user_id: this.state.user.user_id,
        title: this.state.title,
        summary: this.state.summary,
        start_date: this.state.start_date + "-01 00:00:00",
        end_date: this.state.end_date + "-01 00:00:00",
        current: this.state.current,
      }
    };
    formPayload.work_experience[company_key] = company_val;
    // City is not being saved
    formPayload.work_experience[city_key] = city_val;
    const payload = formPayload;
    postWorkExperience(payload);
    this.handleClearForm(e);
    this.loadAllCompanies();
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      company_name: '',
      title: '',
      start_date: '',
      end_date: '',
      city: '',
      state: '',
      current: '',
      url: '',
      summary: ''
    });
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <SingleInput
          label={"Company Name"}
          name={"company_name"}
          type={"text"}
          content={this.state.company_name}
          onChange={this.handleInputChange} />
        <SingleInput
          label={"Job Title"}
          name={"title"}
          type={"text"}
          content={this.state.title}
          onChange={this.handleInputChange} />
        <Row>
          <Col xs={8} sm={10}>
            <SingleInput
              label={"City"}
              name={"city"}
              type={"text"}
              content={this.state.city}
              onChange={this.handleInputChange} />
          </Col>
          <Col xs={4} sm={2}>
            <SingleInput
              label={"State"}
              name={"state"}
              type={"text"}
              placeholder={"CA"}
              content={this.state.state}
              onChange={this.handleInputChange} />
          </Col>
        </Row>
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
        <TextArea
          label={"Summary"}
          rows={6}
          name={"summary"}
          content={this.state.summary}
          onChange={this.handleInputChange} />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default ExperienceForm;
