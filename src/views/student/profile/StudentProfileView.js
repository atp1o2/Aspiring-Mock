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
  .summary {
    margin: 0 auto;
    max-width: 70rem;
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
    const educationList = this.props.educations.map((education) =>
      <Col xs={3} key={education.id} className="col-centered">
        <EducationCard education={education} />
      </Col>
    )
    const experienceList = this.props.experiences.map((experience) =>
      <Col xs={3} key={experience.id} className="col-centered">
        <ExperienceCard experience={experience} />
      </Col>
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
            <p>Status: {this.props.student.status ? this.props.student.status : "Exploring Careers"}</p>
            <p>Summary:</p>
            <div className="summary">
              <p>{this.props.student.summary}</p>
            </div>
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
