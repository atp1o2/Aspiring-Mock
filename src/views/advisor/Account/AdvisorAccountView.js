import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ExperienceForm from '../../../components/ExperienceForm/ExperienceForm';
import EducationForm from '../../../components/EducationForm/EducationForm';
import IndustryForm from '../../../components/IndustryForm/IndustryForm';
import LanguagesForm from '../../../components/LanguagesForm/LanguagesForm';
import AccountForm from '../../../components/AccountForm/AccountForm';
import Button from '../../../components/Button';

class AdvisorAccountView extends Component {
  render () {
    return (
      <Grid>
        <Row className="text-center">
          <h1>[first_name] Profile</h1>
          <Button>Student View</Button>
          <hr />
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
            <p className="h2">Industry</p>
            <IndustryForm />
          </Col>
          <Col md={6}>
            <p className="h2">Languages</p>
            <LanguagesForm />
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={3}>
            <AccountForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AdvisorAccountView;
