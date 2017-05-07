import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';

const AdvisorMastheadView = ({identity, destroyIdentity}) => (
  <Nav pullRight>
    <Link to="Advisors/40/Conversations">
      Conversations
    </Link>
    <Link to="Advisors/40/Profile">
      Profile
    </Link>
    <Link to="Advisors/40/Account">
      Account
    </Link>
    <a onClick={()=>destroyIdentity()}>
      Logout
    </a>
  </Nav>
);

export default AdvisorMastheadView;
