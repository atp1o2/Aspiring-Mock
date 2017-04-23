import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import AccountForm from '../components/AccountForm/AccountForm';
import CitizenshipForm from '../components/CitizenshipForm/CitizenshipForm';
import EducationForm from '../components/EducationForm/EducationForm';
import ExperienceForm from '../components/ExperienceForm/ExperienceForm';
import IndustryForm from '../components/IndustryForm/IndustryForm';
import LanguagesForm from '../components/LanguagesForm/LanguagesForm';
import ProfileForm from '../components/ProfileForm/ProfileForm';

class Forms extends Component {
  render () {
    return (
      <div>
        <Grid>
          <h1>Forms</h1>
          <hr />
          <Row>
            <h2>Account Info Form</h2>
            <AccountForm />
          </Row>
          <Row>
            <h2>Profile Form</h2>
            <ProfileForm />
          </Row>
          <Row>
            <h2>Experience Form</h2>
            <ExperienceForm />
          </Row>
          <Row>
            <h2>Education Form</h2>
            <EducationForm />
          </Row>
          <Row>
            <h2>Citizenship Form</h2>
            <CitizenshipForm />
          </Row>
          <Row>
            <h2>Industry Form</h2>
            <IndustryForm />
          </Row>
          <Row>
            <h2>Language Form</h2>
            <LanguagesForm />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Forms;
