import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '../Button';
import styled from 'styled-components';
import Brand from '../../styles/variables';
import DefaultProfile from '../../img/default_profile.png';
import { Link } from 'react-router';

const RecruitStudentCard = styled.div`
  border: ${Brand.greyBorder};
  border-bottom: 1px solid silver;
  width: auto;
  height: auto;
  margin: 2rem 0;
  padding: 2rem;
  p, td {
    color: ${Brand.grey};
  }
  table {
    margin: 0 auto;
    text-align: left;
  }
  img {
    height: 16rem;
    width: 16rem;
    margin: 1rem;
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

    padding: 2rem 4rem;
    table {
      margin-bottom: 2rem;
    }
    .border-right {
      border: none;
    }
    .summary {
      padding: 0 5rem;
    }
  }
`;

class RecruitStudentCardView extends Component {
  render () {
    let avatarImg = this.props.student.avatar ? this.props.student.avatar : DefaultProfile;
    return (
      <RecruitStudentCard>
        <Row>
          <Col sm={12} md={2}>
            <Link to={`Students/${this.props.student.id}/Profile`}>
              <img src={avatarImg} alt="Profile" />
            </Link>
          </Col>
          <Col sm={12} md={5} className="border-right">
            <Link to={`Students/${this.props.student.id}/Profile`}>
              <h2>{this.props.student.first_name} {this.props.student.last_name}</h2>
            </Link>
            <table>
              <tbody>
                <tr>
                  <td>Education</td>
                  <td className="bold">{this.props.school.name}</td>
                </tr>
                <tr>
                  <td>Major</td>
                  <td className="bold">{this.props.major.name}</td>
                </tr>
                <tr>
                  <td>Graduation</td>
                  <td className="bold">this.props.major.graduation</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td className="bold">this.props.student.status</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col sm={12} md={5} className="summary">
            <p className="bold">Summary</p>
            <p>{this.props.student.summary}<a href="#">... Read More</a></p>
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
