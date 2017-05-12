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
  .row {
    margin: 3rem 0;
  }
  .summary {
    margin-top: 1rem;
  }
  .education {
    margin-bottom: 8rem;
  }
  button {
    margin: 5rem 0;
  }
  table {
    text-align: left;
  }
  td:first-child {
    padding-right: 1rem;
  }

  img {
    height: 18rem;
    width: 18rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
  }

  @media only screen and (max-width: 991px) {
    .col-centered {
      float: none;
      margin: 0 auto;
      display: inline-table;
    }
    table {
      margin: 0 auto;
    }
    .education {
      text-align: center;
    }
    .contact-button {
      text-align: center;
    }
    text-align: center;
    padding: 2rem 2rem;
    .summary {
      padding: 0 5rem;
    }
  }
`;

class StudentProfileView extends Component {
  render () {
    let avatarImg = this.props.student.img_url ?  this.props.student.img_url : DefaultProfile;
    const educationList = this.props.educations.map((education) =>
      <Col key={education.id} className="col-centered">
        <EducationCard education={education} />
      </Col>
    )
    const experienceList = this.props.work_experiences.map((experience) =>
      <Col key={experience.id} className="col-centered">
        <ExperienceCard experience={experience} />
      </Col>
    )
    return (
      <Profile>
        <h2 className="text-center">Student Profile</h2>
        <hr />
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={4}>
              <div>
                <img src={avatarImg} alt="Profile Card" />
              </div>
              <h3>{this.props.student.first_name} {this.props.student.last_name}</h3>
            </Col>
            <Col xs={12} sm={12} md={8} className="summary">
              <p className="h3">Summary</p>
              <p>{this.props.student.summary}</p>
            </Col>
          </Row>

          <Row className="education">
            <Col xs={12} sm={12} md={4}>
              <table>
                <tbody>
                  <tr>
                    <td>Status:</td>
                    <td className="bold">{this.props.student.status ? this.props.student.status : "Exploring Careers"}</td>
                  </tr>
                  <tr>
                    <td className="">Degree:</td>
                    <td className="bold">{this.props.educations[0]["degree_type"]}</td>
                  </tr>
                  <tr>
                    <td className="">School:</td>
                    <td className="bold">{this.props.schools[0]["name"]}</td>
                  </tr>
                  <tr>
                    <td className="">Industry:</td>
                    <td className="bold">#Biomedical Cyborg Engineering</td>
                  </tr>
                </tbody>
              </table>
              <div className="contact-button">
                <Button>Contact</Button>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8}>
              <h3>Education</h3>
              <hr />
              {educationList}
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={8} mdOffset={4}>
              <h3>Work Experience</h3>
              <hr />
              {experienceList}
            </Col>
          </Row>
        </Grid>
      </Profile>
    );
  }
}

export default StudentProfileView;
