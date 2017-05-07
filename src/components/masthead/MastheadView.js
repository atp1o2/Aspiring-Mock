import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import BrandLogo from '../../img/CareerScope-Logo.png';
import withIdentity from '../Identity/withIdentity';
import AdvisorMastheadView from './AdvisorMastheadView';
import StudentMastheadView from './StudentMastheadView';
import RecruiterMastheadView from './RecruiterMastheadView';
import AllMastheadView from './AllMastheadView';
// import LoggedOutMastheadView from './LoggedOutMastheadView';

const Masthead = styled.nav`
  height: auto;
  width: 98%;
  .container {
    width: 100%;
  }
  .navbar {
    box-shadow: none;
  }
  img {
    max-height: 45px;
    max-width: 100%;
  }
  ul {
    margin-top: 3rem;
  }
  a {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 485px) {
    .mobile-hide {
      display: none;
    }
    text-align: center;
  }
`;

const mastheadSwitcher = (props) => {
  const role = props.identity ? props.identity.role : null;
  switch (role) {
    case 'student':
      return <StudentMastheadView {...props} />
    case 'advisor':
      return <AdvisorMastheadView {...props} />
    case 'recruiter':
      return <RecruiterMastheadView {...props} />
    default:
      return <AllMastheadView />
  }
}

class MastheadView extends Component {
  render () {
    return (
      <Masthead>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src={BrandLogo} alt="CareerScope-Logo"/></a>
            </Navbar.Brand>
          </Navbar.Header>
          {mastheadSwitcher(this.props)}
        </Navbar>
      </Masthead>
    );
  }
}

const MastheadViewWithIdentity = withIdentity(MastheadView);
export default MastheadViewWithIdentity;
