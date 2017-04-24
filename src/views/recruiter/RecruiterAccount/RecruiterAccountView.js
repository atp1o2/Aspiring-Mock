import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AccountForm from '../../../components/AccountForm/AccountForm';

class RecruiterAccountView extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col>
            <p className="h2 text-center">Account Settings</p>
            <hr />
          </Col>
          <Col md={6} mdOffset={3}>
            <AccountForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RecruiterAccountView;
