import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Brand from '../../../styles/variables';
import DefaultProfile from '../../../img/default_profile.png';
import RequestCard from '../../../components/RequestCard/RequestCard';
import Ama from '../../../components/Ama/Ama';
import ExperienceCard from '../../../components/ExperienceCard/ExperienceCard';


const Profile = styled.div`
  min-height: auto;
  margin-top: 10rem;
  .row {
    margin-bottom: 3rem;
  }
  img {
    padding: 1rem;
    border: 1px solid ${Brand.yellow};
    height: 19rem;
    width: 19rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
    margin: 2rem 0;
  }
  .sidebar {
    .sidebar-text {
      margin-left: 1rem;
    }
    .sidebar-small {
      max-width: 18rem;
      text-align: left;
    }
  }
`;

class AdvisorProfileView extends Component {
  render () {
    let avatarImg = this.props.advisor.img_url ?  this.props.advisor.img_url : DefaultProfile;
    const experienceList = this.props.advisor.work_experiences.reverse().map((experience) =>
      <Col key={experience.id} className="col-centered">
        <ExperienceCard experience={experience} />
      </Col>
    )
    return (
      <Profile>
        <Grid>
          <Row>
            <Col xs={12} sm={3} className="sidebar">
              <div>
                <img src={avatarImg} alt="Advisor Profile Avatar" />
              </div>
              <div clasName="sidebar-text">
                <h3>{this.props.advisor.first_name} {this.props.advisor.last_name}</h3>
                <p className="bold">{this.props.company.name}</p>
                <p>{this.props.advisor.job_title ? this.props.advisor.job_title : "Advisor"}</p>
                <p>{this.props.company.url}</p>
                <p>Industry: {this.props.industry}</p>
              </div>
              <div className="mt-2">
                <h4>Experience</h4>
                {experienceList}
              </div>
            </Col>
            <Col xs={12} sm={9} className="text-center">
              <h3>Conversations</h3>
              <hr />
              <RequestCard advisor={this.props.advisor} />
            </Col>
            <Col xs={12} sm={9} className="mt-2 text-center">
              <h3>Ask Me Anything</h3>
              <hr />
              <Ama advisor={this.props.advisor} />
            </Col>
          </Row>
        </Grid>
      </Profile>
    );
  }
}

export default AdvisorProfileView;
