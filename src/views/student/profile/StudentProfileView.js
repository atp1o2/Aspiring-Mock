import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ExperienceForm from '../../../components/ExperienceForm/ExperienceForm';
import ProfileForm from '../../../components/ProfileForm/ProfileForm';
import CitizenshipForm from '../../../components/CitizenshipForm/CitizenshipForm';
import EducationForm from '../../../components/EducationForm/EducationForm';
import AccountForm from '../../../components/AccountForm/AccountForm';

class StudentProfileView extends Component {
  render () {
    return (
      <Grid>
        <Row className="text-center">
          <h1>[first_name] Profile</h1>
          <hr />
        </Row>
        <Row>
          <Col md={6}>
            <p className="h2">Status</p>
            <ProfileForm />
          </Col>
          <Col md={6}>
            <p className="h2">Mini Profile</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p className="h2">Experience</p>
            <ExperienceForm />
          </Col>
          <Col md={6}>
            <p className="h2">View Experience Cards</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p className="h2">Education</p>
            <EducationForm />
          </Col>
          <Col md={6}>
            <p className="h2">View Education Cards</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p className="h2">Citizenship</p>
            <CitizenshipForm />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p className="h2">Account Info</p>
            <AccountForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default StudentProfileView;
