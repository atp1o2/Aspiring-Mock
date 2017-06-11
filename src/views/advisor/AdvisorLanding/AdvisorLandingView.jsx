import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import AdvisorRegistration from '../../authentication/Registration/AdvisorRegistration';
import StudentRegistration from '../../authentication/Registration/StudentRegistration';
import LogIn from '../../authentication/LogIn/LogIn';

const Landing = styled.div`
  margin: auto;
  width: 50%;
  margin-top: 5rem;
  margin-bottom: 10rem;
`;

const FormBox = styled.div`
  border: 1px solid grey;
  padding: 5rem;
  margin-top: 5rem;
  h2 {
    margin-bottom: 4rem;
  }
`;

class AdvisorLandingView extends Component {
  render () {
    return (
      <Grid>
        <Landing>
          <Row className="text-center">
            <h2>Advisors & Recruiters</h2>
          </Row>
          <Row>
            <FormBox>
              <LogIn />
            </FormBox>
          </Row>
        </Landing>
      </Grid>
    )
  }
}

export default AdvisorLandingView;
