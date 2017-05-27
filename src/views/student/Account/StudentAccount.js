import React, { Component } from 'react';
import withIdentity from '../../../components/Identity/withIdentity';
import { getFullStudent, getAllCompanies, getAllCities, getAllStates } from '../../../server/railscope';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import StatusForm from '../../../components/Forms/StatusForm';
import AccountForm from '../../../components/Forms/AccountForm';
import ExperienceForm from '../../../components/Forms/ExperienceForm';
import EditExperienceForm from '../../../components/Forms/EditExperienceForm';
import EducationForm from '../../../components/Forms/EducationForm';

const FormStyle = styled.div`
  .section {
    margin-bottom: 10rem;
  }
  .h2 {
    margin-bottom: 3rem;
  }
`;

class StudentAccount extends Component {
  constructor (props) {
    super(props);
    this.state = {
      student: '',
      work_experiences: [],
      all_cities: [],
      all_states: [],
      all_companies: [],
      loading: true
    }
    this.addNewExperienceToView = this.addNewExperienceToView.bind(this);
    this.removeExperienceFromView = this.removeExperienceFromView.bind(this);
  }

  componentDidMount () {
    this.loadAllStates();
    this.loadAllCities();
    this.loadAllCompanies();
    this.loadFullStudent(this.props.identity.profile_id);
  }

  loadFullStudent (id, callback) {
    var self = this;
    getFullStudent(id, (data) => {
      self.setState({
        student: data,
        work_experiences: data.work_experiences,
        loading: false,
      })
    })
  }
  loadAllCities () {
    var self = this;
    getAllCities((data) => {
      self.setState({
        all_cities: data,
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
  loadAllCompanies () {
    var self = this;
    getAllCompanies((data) => {
      self.setState({
        all_companies: data,
      })
    })
  }

  removeExperienceFromView (id) {
    this.setState({
      ...this.state,
      work_experiences: this.state.work_experiences.filter((object) => {
        return object.id !== id
      })
    })
  }

  addNewExperienceToView (experience) {
    this.setState({
      ...this.state,
        work_experiences: this.state.work_experiences.concat(experience)
    })
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>);
    }
    else {
      let experienceList;
      experienceList = this.state.work_experiences.map((experience) =>
        <Col key={experience.id} sm={12} smOffset={0} md={10} mdOffset={1}>
          <EditExperienceForm
            user={this.state.student}
            experience={experience}
            removeExperienceFromView={this.removeExperienceFromView}
            all_companies={this.state.all_companies}
            all_states={this.state.all_states}
            all_cities={this.state.all_cities}
            />
        </Col>
      )
      return (
        <FormStyle>
          <Grid>
            <Row className="text-center">
              <h1>Profile Settings</h1>
              <hr />
            </Row>
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <p className="h2">General</p>
                <StatusForm student={this.state.student} />
              </Col>
            </Row>
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <p className="h2">Education</p>
                <EducationForm user={this.state.student} />
              </Col>
            </Row>
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <p className="h2">Experience</p>
                <ExperienceForm
                  user={this.state.student}
                  addNewExperienceToView={this.addNewExperienceToView}
                  all_companies={this.state.all_companies}
                  all_states={this.state.all_states}
                  all_cities={this.state.all_cities} />
              </Col>
            </Row>
            <Row>
              {experienceList}
            </Row>
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <p className="h2">Account Info</p>
                <AccountForm user={this.state.student} />
              </Col>
            </Row>
          </Grid>
        </FormStyle>
      )
    }
  }
}

const StudentAccountwithIdentity = withIdentity(StudentAccount);
export default StudentAccountwithIdentity;
