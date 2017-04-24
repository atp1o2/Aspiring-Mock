import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import ProfileCard from '../../../components/ProfileCard';
import RequestCard from '../../../components/RequestCard/RequestCard';

let advisorData = [
  {
    name: "Daenerys Targaryen",
    title: "Mother of Dragons",
    company: "Dothraki Inc.",
    avatar: "",
    conversations: [
      {
        availableDate: "4/30/2017",
        availableTime: "01:00PM PST",
        availableSpots: 7,
      },
      {
        availableDate: "4/30/2017",
        availableTime: "01:00PM PST",
        availableSpots: 7,
      },
      {
        availableDate: "4/30/2017",
        availableTime: "01:00PM PST",
        availableSpots: 7,
      },
    ]
  },
  {
    name: "Jon Snow",
    title: "Watch Commander",
    company: "The Watch",
    avatar: "",
    conversations: [
      {
        availableDate: "4/30/2017",
        availableTime: "01:00PM PST",
        availableSpots: 4,
      },
      {
        availableDate: "4/30/2017",
        availableTime: "01:00PM PST",
        availableSpots: 4,
      }
    ]
  },
  {
    name: "Ned Stark",
    title: "Warden of the North",
    company: "House Stark",
    avatar: "",
    conversations: [
      {
        availableDate: "4/30/2017",
        availableTime: "01:00PM PST",
        availableSpots: 6,
      }
    ]
  },
  {
    name: "Baslish Litter Finger",
    title: "Sneaky Instigator",
    company: "The Sparrow",
    avatar: "",
    conversations: []
  }
];

const AdvisorsStyle = styled.div`
  .row {
    margin: 3rem 0;
  }
`;

class AvailableAdvisorsView extends Component {
  render () {
    let advisorsList = [];
    advisorData.map((advisor) =>
      advisorsList.push(
        <div>
          <Row>
            <Col xs={12} sm={6} smOffset={3} md={3} mdOffset={0}>
              <ProfileCard user={advisor} />
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
        <Grid>
          <Row className="text-center">
            <h1>Advisors</h1>
            <Link to="#">All </Link>
            <Link to="#">Business </Link>
            <Link to="#">Engineering</Link>
            <hr />
          </Row>
          {advisorsList}
        </Grid>
      </AdvisorsStyle>
    );
  }
}

export default AvailableAdvisorsView;
