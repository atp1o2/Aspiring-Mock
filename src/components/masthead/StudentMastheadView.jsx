import React from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';

const StudentMastheadView = ({identity, destroyIdentity}) => (
  <Nav pullRight>
    <Link to="https://explore.careerscope.com/" className="mobile-hide">
      Explore
    </Link>
    <Link to="How-it-Works" className="mobile-hide">
      How it Works
    </Link>
    <Link to={`Students/${identity.profile_id}/Advisors`}>
      Advisors
    </Link>
    <Link to={`Students/${identity.profile_id}/Conversations`}>
      Conversations
    </Link>
    <Link to={`Students/${identity.profile_id}/Profile`}>
      Profile
    </Link>
    <Link to={`Students/${identity.profile_id}/Account`}>
      Account
    </Link>
    <Link to="/" onClick={()=>destroyIdentity()}>
      Logout
    </Link>
  </Nav>
);

export default StudentMastheadView;
