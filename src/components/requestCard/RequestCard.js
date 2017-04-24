import React, { Component } from 'react';
import RequestCardView from './RequestCardView';

// Needs advisor ID to pull correct data from store

class RequestCard extends Component {
  render () {
    // let advisorId = this.props.advisorId;

    return (
      <RequestCardView data={this.props.data} />
    )
  };
}

export default RequestCard;
