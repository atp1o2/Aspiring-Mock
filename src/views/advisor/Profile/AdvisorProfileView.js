import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Brand from '../../../styles/variables';
import DefaultProfile from '../../../img/default_profile.png';
import RequestCard from '../../../components/RequestCard/RequestCard';
import Ama from '../../../components/Ama/Ama';

const Profile = styled.div`
  min-height: auto;
  margin-top: 10rem;
  text-align: center;
  .row {
    margin-bottom: 3rem;
  }
  .summary {
    min-height: 25rem;
  }
  img {
    padding: 1rem;
    border: 1px solid ${Brand.yellow};
    height: 19rem;
    width: 19rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
    margin: 2rem 0;
  }
`;

class AdvisorProfileView extends Component {
  render () {
    let avatarImg = this.props.advisor.img_url ?  this.props.advisor.img_url : DefaultProfile;
    return (
      <Profile>
        <Grid>
          <Row>
            <Col xs={12} sm={3}>
              <div>
                <img src={avatarImg} alt="Advisor Profile Avatar" />
              </div>
              <h3>{this.props.advisor.first_name} {this.props.advisor.last_name}</h3>
              <p className="bold">{this.props.company.name}</p>
              <p>{this.props.advisor.job_title ? this.props.advisor.job_title : "Advisor"}</p>
              <p>{this.props.company.url}</p>
              <p>Industries:</p>
              <p>#Tech</p>
              <p>#Business</p>
              <p>#Law</p>
              <p>#Health</p>
            </Col>
            <Col xs={12} sm={9}>
              <div className="summary">
                <h3>Summary</h3>
                <hr />
                <p>{this.props.company.summary}</p>
              </div>
              <RequestCard advisor={this.props.advisor} />
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={10} smOffset={2}>
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
