import React, { Component } from 'react';
import { getAllCompanies, postWorkExperience, updateWorkExperience, getAllCities, getAllStates, getCompany, getCity, getState } from '../../server/railscope';
import { Form, Row, Col } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import Select from '../Select';
import TextArea from '../TextArea';
import Button from '../Button';
import { getYearMonth } from '../../helpers/ParseTimestamp';
import { allStates } from '../../helpers/allStates';
import { Months, Years } from '../../helpers/monthsYears';

// import { getCityState } from '../../helpers/getCityState';



class ExperienceForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      company_name: '',
      title: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      current: '',
      url: '',
      summary: '',
      city: '',
      state: '',
      all_companies: '',
      all_states: '',
      all_cities: '',
      loading: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount () {
    this.setState({
      user: this.props.user,
      all_cities: this.props.all_cities,
      all_states: this.props.all_states,
      all_companies: this.props.all_companies,
    })
  }

  loadCity (id, callback) {
    var self = this;
    getCity(id, (data) => {
      self.setState({
        city: data.name
      })
      callback.apply(this, [data.state_id]);
    })
  }

  loadState (id) {
    var self = this;
    getState(id, (data) => {
      self.setState({
        state: data.name
      })
    })
  }

  loadCompany (id) {
    var self = this;
    getCompany(id, (data) => {
      self.setState({
        company_name: data.name,
      })
    })
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
        all_cities: data,
        loading: false,
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

    const start_date = new Date(this.state.start_year, Months.indexOf(this.state.start_month));
    const end_date = new Date(this.state.end_year, Months.indexOf(this.state.end_month));

    const formPayload = {
      work_experience: {
        user_id: this.state.user.user_id,
        title: this.state.title,
        summary: this.state.summary,
        start_date: start_date,
        end_date: end_date,
        current: this.state.current,
      }
    };
    formPayload.work_experience[company_key] = company_val;
    formPayload.work_experience[city_key] = city_val;
    const payload = formPayload;
    postWorkExperience(payload, (data) => {
      this.props.addNewExperienceToView(data);
    });
    this.handleClearForm(e);
    this.loadAllCompanies();
  }

  handleClearForm (e) {
    e.preventDefault();
    this.setState({
      company_name: '',
      title: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      city: '',
      state: '',
      current: '',
      url: '',
      summary: ''
    });
  }

  render () {
    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
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
            <Col xs={8}>
              <SingleInput
                label={"City"}
                name={"city"}
                type={"text"}
                content={this.state.city}
                onChange={this.handleInputChange} />
            </Col>
            <Col xs={4}>
              <Select
                label={"State"}
                name={"state"}
                selectOption={this.state.state}
                onChange={this.handleInputChange}
                options={allStates} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={3}>
              <Select
                label={"Start Date"}
                name={"start_month"}
                selectOption={"Month"}
                content={this.state.start_month}
                options={Months}
                onChange={this.handleInputChange} />
            </Col>
            <Col xs={6} sm={2}>
                <Select
                label="&nbsp;"
                name={"start_year"}
                content={this.state.start_year}
                selectOption={"Year"}
                options={Years.reverse()}
                onChange={this.handleInputChange} />
            </Col>
            <Col xs={6} sm={3}>
              <Select
                label={"End Date"}
                name={"end_month"}
                selectOption={"Month"}
                options={Months}
                content={this.state.end_month}
                onChange={this.handleInputChange} />
            </Col>
            <Col xs={6} sm={2}>
              <Select
                label="&nbsp;"
                name={"end_year"}
                options={Years.reverse()}
                selectOption={"Year"}
                content={this.state.end_year}
                onChange={this.handleInputChange} />
            </Col>
            {/*}
            <Col xs={2}>
              <SingleInput
                name={"current"}
                label={"Current"}
                type={"checkbox"}
                onChange={this.handleInputChange}
                checked={true}
                content={"checked"} />
            </Col>
          {*/}
          </Row>
          <TextArea
            label={"Summary"}
            rows={4}
            name={"summary"}
            content={this.state.summary}
            onChange={this.handleInputChange} />
          <Button type="submit">Save</Button>
        </Form>
      );
    }
  }
}

export default ExperienceForm;
