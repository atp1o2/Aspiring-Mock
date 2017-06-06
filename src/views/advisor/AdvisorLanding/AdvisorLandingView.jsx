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
  .tabs {
    margin-top: 5rem;
    border: 1px solid grey;
    padding: 2rem;
    border-bottom: none;
  }
`;

const FormBox = styled.div`
  border: 1px solid grey;
  padding: 5rem;
  h2 {
    margin-bottom: 4rem;
  }
`;

class AdvisorLandingView extends Component {
  constructor (props) {
    super(props);
    this.handleTabs = this.handleTabs.bind(this);
    this.state = {
      form: 'Login',
    }
  }

  handleTabs (e) {
    e.preventDefault();
    let form = e.target.innerHTML;
    this.setState({
      form: form,
    })
  }

  render () {
    return (
      <Grid>
        <Landing>
          <Row className="text-center">
            <Col>
              <h1>Aspire</h1>
              <h3>Advisors & Recruiters</h3>
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={6} className="pa-0">
              <a id="tab-switcher" href="Login" onClick={this.handleTabs}><div className="tabs">Login</div></a>
            </Col>
            <Col xs={6} className="pa-0">
              <a id="tab-switcher" href="Registration" onClick={this.handleTabs}><div className="tabs">Register</div></a>
            </Col>
          </Row>
          <Row>
            <FormBox>
              { (this.state.form === "Login") ? <LogIn /> : <AdvisorRegistration /> }
            </FormBox>
          </Row>
        </Landing>
      </Grid>
    )
  }
}

export default AdvisorLandingView;
