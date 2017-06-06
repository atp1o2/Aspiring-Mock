import React from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';

const RecruiterMastheadView = ({identity, destroyIdentity}) => (
  <Nav pullRight>
    <Link to={`Recruiters/${identity.profile_id}/Recruit`}>
      Recruit
    </Link>
    <Link to={`Recruiters/${identity.profile_id}/Account`}>
      Account
    </Link>
    <Link to="/" onClick={()=>destroyIdentity()}>
      Logout
    </Link>
  </Nav>
);

export default RecruiterMastheadView;
