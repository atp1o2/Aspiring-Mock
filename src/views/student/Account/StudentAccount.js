import React, { Component } from 'react';
import { getFullStudent } from '../../../server/railscope';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import StatusForm from '../../../components/Forms/StatusForm';
import AccountForm from '../../../components/Forms/AccountForm';
import ExperienceForm from '../../../components/Forms/ExperienceForm';
import EducationForm from '../../../components/Forms/EducationForm';
import CitizenshipForm from '../../../components/Forms/CitizenshipForm';
import LanguageForm from '../../../components/Forms/LanguageForm';

const FormStyle = styled.div`
  .section {
    margin-bottom: 10rem;
  }
  .h2 {
    margin-bottom: 3rem;
  }
`;

class StudentAccount extends Component {
  loadFullUser (id) {
    var self = this;
    getFullStudent(id, (data) => {
      self.setState({
        student: data,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      student: '',
      loading: true
    }
  }

  componentDidMount () {
    this.loadFullUser(this.props.params.id);
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>);
    }
    else {
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
                <ExperienceForm user={this.state.student} />
              </Col>
            </Row>
            <Row className="section">
              <Col sm={12} md={10} mdOffset={1}>
                <p className="h2">Miscellaneous</p>
              </Col>
              <Col sm={5} smOffset={1}>
                <CitizenshipForm user={this.state.student} />
              </Col>
              <Col sm={5}>
                <p></p>
                <LanguageForm user={this.state.student} />
              </Col>
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

export default StudentAccount;
