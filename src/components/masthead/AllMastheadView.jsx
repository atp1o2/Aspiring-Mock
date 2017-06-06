import React from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';

const AllMastheadView = props => (
  <Nav pullRight>
    <Link to="https://explore.careerscope.com/" className="mobile-hide">
      Explore
    </Link>
    <Link to="How-it-Works" className="mobile-hide">
      How it Works
    </Link>
  </Nav>
);

export default AllMastheadView;
