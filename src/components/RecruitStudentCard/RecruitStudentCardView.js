import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Button from '../Button';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import DefaultProfile from '../../img/default_profile.png';

const RecruitStudentCard = styled.div`
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: auto;
  height: auto;
  p, td {
    color: ${Brand.grey};
  }
  img {
    height: 12rem;
    width: 12rem;
    box-shadow: 0 9px 12px 0 ${Brand.grey};
  }
  .border-right {
    border-right: ${Brand.greyBorder};
  }
  td:first-child {
    font-size: 14px;
    padding-right: 2rem;
  }
  tr > td {
    padding-bottom: 0.6rem;
  }
  @media only screen and (max-width: 991px) {
    text-align: center;
    max-width: 40rem;
    padding: 2rem 4rem;
    table {
      margin: 0 auto;
    }
    .border-right {
      border: none;
    }
  }
`;

class RecruitStudentCardView extends Component {
  render () {
    let avatarImg = this.props.data.avatar ? this.props.avatar : DefaultProfile;
    return (
      <RecruitStudentCard>
        <Row>
          <Col sm={12} md={3}>
            <img src={avatarImg} alt="Profile" />
          </Col>
          <Col sm={12} md={4} className="border-right">
            <h1>{this.props.data.name}</h1>
            <table>
              <tbody>
                <tr>
                  <td>Education</td>
                  <td className="bold">{this.props.data.education}</td>
                </tr>
                <tr>
                  <td>Major</td>
                  <td className="bold">{this.props.data.major}</td>
                </tr>
                <tr>
                  <td>Graduation</td>
                  <td className="bold">{this.props.data.graduation}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td className="bold">{this.props.data.status}</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col sm={12} md={5}>
            <p className="bold">Summary</p>
            <p>{this.props.data.summary}<a href="#">... Read More</a></p>
            <div className="center">
              <Button small>Hide</Button>
              <Button small>Contact</Button>
            </div>
          </Col>
        </Row>
      </RecruitStudentCard>
    );
  };
}

export default RecruitStudentCardView;
