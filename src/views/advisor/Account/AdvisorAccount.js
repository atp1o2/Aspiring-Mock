import React, { Component } from 'react';
import { getFullAdvisor } from '../../../server/railscope';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import AccountForm from '../../../components/Forms/AccountForm';
import ExperienceForm from '../../../components/Forms/ExperienceForm';
import SummaryForm from '../../../components/Forms/SummaryForm';
import LinksForm from '../../../components/Forms/LinksForm';

const FormStyle = styled.div`
  .section {
    margin-bottom: 10rem;
  }
  .h2 {
    margin-bottom: 3rem;
  }
`;

class AdvisorAccount extends Component {
  loadFullUser (id) {
    var self = this;
    getFullAdvisor(id, (data) => {
      self.setState({
        advisor: data,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      advisor: '',
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
            <Row>
              <h1 className="text-center">Profile Settings</h1>
              <hr />
            </Row>
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
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <p className="h2">Experience</p>
                <ExperienceForm user={this.state.advisor} />
              </Col>
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

export default AdvisorAccount;