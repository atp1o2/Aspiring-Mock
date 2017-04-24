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

class AvailableAdvisorsView extends Component {
  render () {
    let advisorsList = [];
    this.props.data.map((advisor) =>
      advisorsList.push(
        <div>
          <Row className="advisor-row">
            <Col xs={12} sm={6} smOffset={3} md={3} mdOffset={0}>
              <ProfileCard data={advisor} />
            </Col>
            { (advisor.conversations.length === 0) ? (
              <Col xs={10} xsOffset={1} sm={4} smOffset={0} md={3}>
                <RequestCard />
              </Col>
            ) : (
              advisor.conversations.map((convoDetails) =>
              <Col xs={10} xsOffset={1} sm={4} smOffset={0} md={3}>
                <RequestCard data={convoDetails} />
              </Col>
            )
            )}
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
