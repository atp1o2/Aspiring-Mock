import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import ProfileCard from '../../../components/ProfileCard';
import RequestCard from '../../../components/RequestCard/RequestCard';

const AdvisorsStyle = styled.div`
  .advisor-row {
    margin: 3rem 0;
  }
`;

// on size
// needs to return first 10 on land
// If user clicks for the next page of advisors
// load next 10 advisors

class AvailableAdvisorsView extends Component {
  render () {
    let advisorsList = [];
    let size = 10;
    this.props.data.slice(0, size).map((advisor) =>
      advisorsList.push(
        <div>
          <Row className="advisor-row">
            <Col sm={12} md={6} mdOffset={3} lg={3} lgOffset={0}>
              <ProfileCard data={advisor} />
            </Col>
            <RequestCard advisor={advisor} />
          </Row>
          <hr />
        </div>
      )
  )
    return (
      <AdvisorsStyle>
        <Grid className="text-center">
          <Row>
            <h1>Advisors</h1>
            <hr />
          </Row>
          <Row>
            <Link to="#">All </Link>
            <Link to="#">Business </Link>
            <Link to="#">Engineering</Link>
          </Row>
          {advisorsList}
        </Grid>
      </AdvisorsStyle>
    );
  }
}

export default AvailableAdvisorsView;
