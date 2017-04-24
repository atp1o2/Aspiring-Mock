import React, { Component } from 'react';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Brand from '../../styles/variables';
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
`;

class MastheadView extends Component {
  render () {
    this.props.user.type = "recruiter";
    let linkList;
    if (this.props.user.type === "student") {
      linkList = (
        <Nav eventKey={0} pullRight>
          <NavItem href="https://explore.careerscope.com/" target="_blank">Explore</NavItem>
          <LinkContainer to="How-it-Works">
            <NavItem eventKey={1}>How it Works</NavItem>
          </LinkContainer>
          <LinkContainer to="Student/1/Advisors">
            <NavItem eventKey={4}>Advisors</NavItem>
          </LinkContainer>
          <LinkContainer to="Student/1/Conversations">
            <NavItem eventKey={5}>Conversations</NavItem>
          </LinkContainer>
          <LinkContainer to="Student/1/Profile">
            <NavItem eventKey={6}>Profile</NavItem>
          </LinkContainer>
          <LinkContainer to="Logout">
            <NavItem eventKey={7}>Logout</NavItem>
          </LinkContainer>
        </Nav>
      )
    } else if (this.props.user.type === "advisor") {
      linkList = (
        <Nav eventKey={0} pullRight>
          <LinkContainer to="Advisor/1/Conversations">
            <NavItem eventKey={1}>Conversations</NavItem>
          </LinkContainer>
          <LinkContainer to="Advisor/1/Profile">
            <NavItem eventKey={2}>Profile</NavItem>
          </LinkContainer>
          <LinkContainer to="Advisor/1/Account">
            <NavItem eventKey={3}>Account</NavItem>
          </LinkContainer>
          <LinkContainer to="Logout">
            <NavItem eventKey={5}>Logout</NavItem>
          </LinkContainer>
        </Nav>
      )
    } else if (this.props.user.type === "recruiter") {
      linkList = (
        <Nav eventKey={0} pullRight onSelect={this.onSelect}>
          <LinkContainer to="Recruiter/1/Recruit">
            <NavItem eventKey={1}>Recruit</NavItem>
          </LinkContainer>
          <LinkContainer to="Recruiter/1/Account">
            <NavItem eventKey={3}>Account</NavItem>
          </LinkContainer>
          <LinkContainer to="Logout">
            <NavItem eventKey={5}>Logout</NavItem>
          </LinkContainer>
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
