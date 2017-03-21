import React, { Component } from 'react';
import { Link } from 'react-router';

class MastheadView extends Component {
  render () {
    return (
      <div className="masthead">
        <div className="container">
          <h1>Masthead</h1>
          <Link to="view1">View1</Link>
          <Link to="view2">View2</Link>
        </div>
      </div>
    );
  }
}

export default MastheadView;
