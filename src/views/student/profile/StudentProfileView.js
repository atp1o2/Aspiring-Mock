import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Brand from '../../../styles/variables';
import DefaultProfile from '../../../img/default_profile.png';
import EducationCard from '../../../components/EducationCard/EducationCard';
import ExperienceCard from '../../../components/ExperienceCard/ExperienceCard';
import Button from '../../../components/Button';

const Profile = styled.div`
  min-height: auto;
  margin-top: 10rem;
  text-align: center;
  .row {
    margin: 3rem 0;
  }
  .col-centered {
    float: none;
    margin: 0 auto;
    display: inline-table;
  }
  img {
    margin-top: -3rem;
    height: 18rem;
    width: 18rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
  }
`;


class StudentProfileView extends Component {
  render () {
    let avatarImg = this.props.student.img_url ?  this.props.student.img_url : DefaultProfile;
    let educationList = [];
    let experienceList = [];
    this.props.educations.map((education) =>
      educationList.push(
        <Col xs={3} key={education.id} className="col-centered">
          <EducationCard education={education} />
        </Col>
      )
    )
    this.props.experiences.map((experience) =>
      experienceList.push(
        <Col xs={3} key={experience.id} className="col-centered">
          <ExperienceCard experience={experience} />
        </Col>
      )
    )
    return (
      <Profile>
        <Grid>
          <Row>
            <div>
              <img src={avatarImg} alt="Profile Card" />
            </div>
          </Row>
            <h3>{this.props.student.first_name} {this.props.student.last_name}</h3>
            <h4>this.props.student.status</h4>
            <p>{this.props.student.summary}</p>
            <p>Sponsorship: {this.props.student.us_citizen ? "US Citizen" : "Other"}</p>
            <Button>Contact</Button>
          <Row className="text-center">
            <h3>Education</h3>
            <hr />
            <Row>
              {educationList}
            </Row>
          </Row>
          <Row>
            <h3>Work Experience</h3>
            <hr />
            <Row>
              {experienceList}
            </Row>
          </Row>
        </Grid>
      </Profile>
    );
  }
}

export default StudentProfileView;
