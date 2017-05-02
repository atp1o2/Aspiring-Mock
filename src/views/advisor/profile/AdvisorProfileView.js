import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Brand from '../../../styles/variables';
import DefaultProfile from '../../../img/default_profile.png';
import RequestCard from '../../../components/RequestCard/RequestCard';

const Profile = styled.div`
  min-height: auto;
  margin-top: 10rem;
  text-align: center;
  .row {
    margin: 3rem 0;
  }
  img {
    padding: 1rem;
    border: 1px solid ${Brand.yellow};
    margin-top: -3rem;
    height: 19rem;
    width: 19rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
  }
`;

class AdvisorProfileView extends Component {
  render () {
    let avatarImg = this.props.advisor.img_url ?  this.props.advisor.img_url : DefaultProfile;
    return (
      <Profile>
        <Grid>
          <Row>
            <div>
              <img src={avatarImg} alt="Advisor Profile Avatar" />
            </div>
          </Row>
            <h3>{this.props.advisor.first_name} {this.props.advisor.last_name}</h3>
            <h4>{this.props.company.name}</h4>
            <p>{this.props.advisor.job_title ? this.props.advisor.job_title : "Advisor"}</p>
            <p>{this.props.company.summary}</p>
            <p>{this.props.company.url}</p>
          <Row className="text-center">
            <RequestCard advisor={this.props.advisor} />
          </Row>
          <Row>
            <h3>Ask Me Anything</h3>
            <hr />
            <Row>
              AMA TODO
            </Row>
          </Row>
        </Grid>
      </Profile>
    );
  }
}

export default AdvisorProfileView;
