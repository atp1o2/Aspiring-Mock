import React, { Component } from 'react';
import InlineEdit from 'react-edit-inline';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import { FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';
import SingleInput from '../SingleInput';
import Select from '../Select';
import Button from '../Button';
import { getYearMonth, getMonthYear } from '../../helpers/ParseTimestamp';
import { allStates } from '../../helpers/allStates';
import { Months, Years } from '../../helpers/monthsYears';
import { getCompany, getCity, getState, updateWorkExperience, deleteExperience } from '../../server/railscope';

const CardStyle = styled.div`
  border: ${Brand.greyBorder};
  padding: 3rem;
  margin-bottom: 1rem;
  min-height: 45rem;
  .form-group:hover {
    .glyph {
      visibility: visible;
    }
  }
  input {
    margin-bottom: 1.5rem;
  }

  .borderless {
    border: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  label {
    color: ${Brand.grey}
  }
  .labeless {
    display: none;
  }
`;

class EditExperienceForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      company_name: '',
      original_company_name: '',
      name: '',
      title: '',
      start_month: '',
      start_year: '',
      end_month: '',
      end_year: '',
      current: '',
      url: '',
      summary: '',
      city: '',
      original_city: '',
      original_state: '',
      state: '',
      all_states: '',
      all_cities: '',
      all_companies: '',
      edit_mode: '',
      borderless: 'borderless',
      labeless: 'labeless',
      editing: false,
      loading: true,
    }
    this.dataChanged = this.dataChanged.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.editMode = this.editMode.bind(this);
  }

  componentDidMount () {
    const start_date = getMonthYear(this.props.experience.start_date);
    const end_date = getMonthYear(this.props.experience.end_date);
    this.loadCity(this.props.experience.city_id, this.loadState);
    this.loadCompany(this.props.experience.company_id);
    this.setState({
      user: this.props.user,
      title: this.props.experience.title,
      start_month: Months[start_date.split('/')[0]],
      start_year: start_date.split('/')[1],
      end_month: Months[end_date.split('/')[0]],
      end_year: end_date.split('/')[1],
      current: this.props.experience.current,
      url: this.props.experience.url,
      summary: this.props.experience.summary,
      all_cities: this.props.all_cities,
      all_states: this.props.all_states,
      all_companies: this.props.all_companies,
    })
  }

  loadCompany (id) {
    var self = this;
    getCompany(id, (data) => {
      self.setState({
        company_name: data.name,
        original_company_name: data.name,
        loading: false
      })
    })
  }
  loadCity (id, callback) {
    var self = this;
    getCity(id, (data) => {
      self.setState({
        city: data.name,
        original_city: data.name
      })
      callback.apply(this, [data.state_id]);
    })
  }
  loadState (id) {
    var self = this;
    getState(id, (data) => {
      self.setState({
        state: data.name,
        original_state: data.name,
      })
    })
  }

  editMode () {
    this.setState({
      edit_mode: "form-control",
      borderless: '',
      labeless: '',
      editing: true,
    })
  }

  dataChanged (event) {
    const key = Object.keys(event)[0];
    const value = event[key];
    this.setState({
      ...event,
      editing: true,
      edit_mode: "form-control",
      borderless: '',
      key: value
    })
  }

  handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      ...event,
      editing: true,
      edit_mode: "form-control",
      borderless: '',
      [name]: value,
    });
  }

  // Select inputs doesn't reset to original values
  cancelEdit () {
    this.setState({
      editing: false,
      edit_mode: '',
      borderless: 'borderless',
      labeless: 'labeless',
      company_name: this.state.original_company_name,
      title: this.props.experience.title,
      current: this.props.experience.current,
      url: this.props.experience.url,
      summary: this.props.experience.summary,
      city: this.state.original_city,
      state: this.state.original_state,
    })
  }

  deleteExperience () {
    const result = confirm("Would you like to delete your work experience at " + this.state.company_name + "?");
    if (result) {
      deleteExperience(this.props.experience.id);
      this.props.removeExperienceFromView(this.props.experience.id);
    }
  }

  checkRecords (list, key, value) {
    let object;
    list.some((element) => {
      if (element[key] === value) {
        return object = element
      }
    })
    return object;
  }

  updateExperience () {
    let company_key, company_val, city_key, city_val;
    const checkCompany = this.checkRecords(this.props.all_companies, 'name', this.state.company_name);
    const checkCity = this.checkRecords(this.props.all_cities, 'name', this.state.city);
    const checkState = this.checkRecords(this.props.all_states, 'name', this.state.state);

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

    this.setState({
      borderless: 'borderless',
      edit_mode: '',
      editing: false,
    })
    const start_date = new Date(this.state.start_year, Months.indexOf(this.state.start_month));
    const end_date = new Date(this.state.end_year, Months.indexOf(this.state.end_month));

    const formPayload = {
      work_experience: {
        id: this.props.experience.id,
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
    updateWorkExperience(this.props.experience.id, payload, (data) => {
      console.log("Successfully patched data: ", data);
    });
  }

  customValidateText(text) {
    return (text.length > 0 && text.length < 64);
  }

  render () {
    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      const editButtons = (
        <span>
          <Button small onClick={this.updateExperience}>Save</Button>
          <Button small onClick={this.deleteExperience}>Delete</Button>
          <Button small onClick={this.cancelEdit}>Cancel</Button>
        </span>
      )
      return (
        <CardStyle>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <ControlLabel className={this.state.labeless}>Company</ControlLabel><br />
                <InlineEdit
                  className={"h3 " + this.state.edit_mode}
                  validate={this.customValidateText}
                  editing={this.state.editing}
                  activeClassName="form-control h3"
                  text={this.state.company_name}
                  paramName="company_name"
                  change={this.dataChanged}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel className={this.state.labeless}>Title</ControlLabel><br />
                <InlineEdit
                  className={"h4 " + this.state.edit_mode}
                  activeClassName="form-control mt-1"
                  validate={this.customValidateText}
                  text={this.state.title}
                  paramName="title"
                  change={this.dataChanged}
                />
              </FormGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={5}>
              <FormGroup>
                <ControlLabel>City</ControlLabel><br />
                <InlineEdit
                  className={this.state.edit_mode}
                  activeClassName="form-control"
                  validate={this.customValidateText}
                  text={this.state.city}
                  paramName="city"
                  change={this.dataChanged}
                />
              </FormGroup>
            </Col>
            <Col xs={5}>
              <FormGroup>
                <Select
                  label={"State"}
                  className={this.state.borderless + " " + this.state.edit_mode}
                  name={"state"}
                  selectOption={this.state.state}
                  onChange={this.handleInputChange}
                  options={allStates} />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Row>
              <Col xs={6} sm={3}>
                <Select
                  label={"Start Date"}
                  className={this.state.borderless + " " + this.state.edit_mode}
                  name={"start_month"}
                  selectOption={this.state.start_month}
                  options={Months}
                  onChange={this.handleInputChange} />
              </Col>
              <Col xs={6} sm={2}>
                  <Select
                  label="&nbsp;"
                  className={this.state.borderless + " " + this.state.edit_mode}
                  name={"start_year"}
                  selectOption={this.state.start_year}
                  options={Years.reverse()}
                  onChange={this.handleInputChange} />
              </Col>
              <Col xs={6} sm={3}>
                <Select
                  label={"End Date"}
                  className={this.state.borderless + " " + this.state.edit_mode}
                  name={"end_month"}
                  selectOption={this.state.end_month}
                  options={Months}
                  onChange={this.handleInputChange} />
              </Col>
              <Col xs={6} sm={2}>
                <Select
                  label="&nbsp;"
                  className={this.state.borderless + " " + this.state.edit_mode}
                  name={"end_year"}
                  options={Years.reverse()}
                  selectOption={this.state.end_year}
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
          </FormGroup>
          <FormGroup>
            <ControlLabel>Summary</ControlLabel><br />
            <InlineEdit
              className={this.state.edit_mode}
              activeClassName="form-control"
              validate={this.customValidateText}
              text={this.state.summary}
              paramName="summary"
              change={this.dataChanged}
              rows={5}
            />
          </FormGroup>

          {this.state.editing ? editButtons : <Button small onClick={this.editMode}>Edit</Button>}
        </CardStyle>
      )
    }
  }
}

export default EditExperienceForm;
