import React, { Component } from 'react';
import withIdentity from '../../../components/Identity/withIdentity';
import { getFullAdvisor, getAllCompanies, getAllCities, getAllStates } from '../../../server/railscope';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import AccountForm from '../../../components/Forms/AccountForm';
import ExperienceForm from '../../../components/Forms/ExperienceForm';
import SummaryForm from '../../../components/Forms/SummaryForm';
import LinksForm from '../../../components/Forms/LinksForm';
import EditExperienceForm from '../../../components/Forms/EditExperienceForm';

const FormStyle = styled.div`
  .section {
    margin-bottom: 10rem;
  }
  .h2 {
    margin-bottom: 3rem;
  }
`;

class AdvisorAccount extends Component {
  constructor (props) {
    super(props);
    this.state = {
      advisor: '',
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
    this.loadFullUser(this.props.identity.profile_id);
  }

  loadFullUser (id) {
    var self = this;
    getFullAdvisor(id, (data) => {
      self.setState({
        advisor: data,
        work_experiences: data.work_experiences,
        loading: false
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
    console.log("removeExperienceFromView hit")
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
            user={this.state.advisor}
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
            <Row>
              <h1 className="text-center">Profile Settings</h1>
              <hr />
            </Row>
            {/*}
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <p className="h2">General</p>
                <SummaryForm
                placeholder={"Tell students something about yourself!"}
                user={this.state.advisor} />
              </Col>
            </Row>
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <LinksForm user={this.state.advisor} />
              </Col>
            </Row>
          {*/}
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <p className="h2">Experience</p>
                <ExperienceForm
                  addNewExperienceToView={this.addNewExperienceToView}
                  all_companies={this.state.all_companies}
                  all_states={this.state.all_states}
                  all_cities={this.state.all_cities}
                  user={this.state.advisor} />
              </Col>
            </Row>
            <Row>
              {experienceList}
            </Row>
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <p className="h2">Account Info</p>
                <AccountForm user={this.state.advisor} />
              </Col>
            </Row>
          </Grid>
        </FormStyle>
      )
    }
  }
}

const AdvisorAccountwithIdentity = withIdentity(AdvisorAccount);
export default AdvisorAccountwithIdentity;
