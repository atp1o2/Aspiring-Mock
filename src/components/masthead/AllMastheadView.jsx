import React from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';

const AllMastheadView = props => (
  <Nav pullRight>
    <Link to="Log-In">
      Login
    </Link>
    <span>|Recruiters|</span>
    <Link to="Recruiters/1/Recruit">
      Recruit
    </Link>
    <Link to="Recruiters/1/Account">
      Account
    </Link>
    <span>|Advisors|</span>
    <Link to="Advisors/40/Conversations">
      Conversations
    </Link>
    <Link to="Advisors/40/Profile">
      Profile
    </Link>
    <Link to="Advisors/40/Account">
      Account
    </Link>
    <span>|Students|</span>
    <Link to="Students/5/Advisors">
      Advisors
    </Link>
    <Link to="Students/5/Conversations">
      Conversations
    </Link>
    <Link to="Students/5/Profile">
      Profile
    </Link>
    <Link to="Students/5/Account">
      Account
    </Link>
    <a onClick={()=>this.props.destroyIdentity()}>
      Logout
    </a>
  </Nav>
);

export default AllMastheadView;
