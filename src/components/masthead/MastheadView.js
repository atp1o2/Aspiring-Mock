import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import BrandLogo from '../../img/CareerScope-Logo.png';

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
    margin-top: 1rem;
  }
  a {
    margin: 0 1rem;
  }
`;

class MastheadView extends Component {
  render () {
    // this.props.user.type = "recruiter";
    let linkList;
    if (this.props.user.type === "student") {
      linkList = (
        <Nav pullRight>
          <Link to="https://explore.careerscope.com/">Explore</Link>
          <Link to="How-it-Works">
            How it Works
          </Link>
          <Link to="Student/1/Advisors">
            Advisors
          </Link>
          <Link to="Student/1/Conversations">
            Conversations
          </Link>
          <Link to="Student/1/Profile">
            Profile
          </Link>
          <Link to="Logout">
            Logout
          </Link>
        </Nav>
      )
    } else if (this.props.user.type === "advisor") {
      linkList = (
        <Nav pullRight>
          <Link to="Advisor/1/Conversations">
            Conversations
          </Link>
          <Link to="Advisor/1/Profile">
            Profile
          </Link>
          <Link to="Advisor/1/Account">
            Account
          </Link>
          <Link to="Logout">
            Logout
          </Link>
        </Nav>
      )
    } else if (this.props.user.type === "recruiter") {
      linkList = (
        <Nav pullRight>
          <Link to="Recruiter/1/Recruit">
            Recruit
          </Link>
          <Link to="Recruiter/1/Account">
            Account
          </Link>
          <Link to="Logout">
            Logout
          </Link>
        </Nav>
      )
    }

    return (
      <Masthead>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src={BrandLogo} alt="CareerScope-Logo"/></a>
            </Navbar.Brand>
          </Navbar.Header>
          {linkList}
        </Navbar>
      </Masthead>
    );
  }
}

export default MastheadView;
