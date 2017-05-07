import React from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';

const RecruiterMastheadView = ({identity, destroyIdentity}) => (
  <Nav pullRight>
    <Link to="Recruiters/1/Recruit">
      Recruit
    </Link>
    <Link to="Recruiters/1/Account">
      Account
    </Link>
    <a onClick={()=>destroyIdentity()}>
      Logout
    </a>
  </Nav>
);

export default RecruiterMastheadView;
