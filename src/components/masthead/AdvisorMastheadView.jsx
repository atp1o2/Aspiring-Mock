import React from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';

const AdvisorMastheadView = ({identity, destroyIdentity}) => (
  <Nav pullRight>
    <Link to={`Advisors/${identity.profile_id}/Conversations`}>
      Conversations
    </Link>
    <Link to={`Advisors/${identity.profile_id}/Profile`}>
      Profile
    </Link>
    <Link to={`Advisors/${identity.profile_id}/Account`}>
      Account
    </Link>
    <a onClick={()=>destroyIdentity()}>
      Logout
    </a>
  </Nav>
);

export default AdvisorMastheadView;
