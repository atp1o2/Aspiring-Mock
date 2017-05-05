import React, { Component } from 'react';
import { getFullRecruiter } from '../../../server/railscope';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import AccountForm from '../../../components/Forms/AccountForm';

const FormStyle = styled.div`
  .section {
    margin-bottom: 10rem;
  }
  .h2 {
    margin-bottom: 3rem;
  }
`;

class AdvisorAccount extends Component {
  loadRecruiter (id) {
    var self = this;
    getFullRecruiter(id, (data) => {
      self.setState({
        recruiter: data,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      recruiter: '',
      loading: true
    }
  }

  componentDidMount () {
    this.loadRecruiter(this.props.params.id);
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
              <h1 className="text-center">Account</h1>
              <hr />
            </Row>
            <Row className="section">
              <Col sm={12} smOffset={0} md={10} mdOffset={1}>
                <AccountForm user={this.state.recruiter} />
              </Col>
            </Row>
          </Grid>
        </FormStyle>
      )
    }
  }
}

export default AdvisorAccount;
