import React, { Component } from 'react';
import { Link } from 'react-router';

class MastheadView extends Component {
  render () {
    return (
      <div className="masthead">
        <div className="container">
          <h1>Masthead</h1>
          <Link to="Student/Advisors">Advisors</Link>
          <Link to="Student/Profile">Profile</Link>
        </div>
      </div>
    );
  }
}

export default MastheadView;
