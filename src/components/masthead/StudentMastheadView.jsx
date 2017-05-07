import React from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';

const StudentMastheadView = ({identity, destroyIdentity}) => (
  <Nav pullRight>
    <Link to="https://explore.careerscope.com/" className="mobile-hide">Explore</Link>
    <Link to="How-it-Works" className="mobile-hide">
      How it Works
    </Link>
    <Link to="Students/5/Advisors">
      Advisors
    </Link>
    <Link to="Students/5/Conversations">
      Conversations
    </Link>
    <Link to="Students/5/Account">
      Profile
    </Link>
    <a onClick={()=>destroyIdentity()}>
      Logout
    </a>
  </Nav>
);

export default StudentMastheadView;
