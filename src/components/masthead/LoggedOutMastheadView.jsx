import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';

const LoggedOutMastheadView = props => (
  <Nav pullRight>
    <Link to="Log-In">
      Login
    </Link>
  </Nav>
);

export default LoggedOutMastheadView;
