import React, { Component } from 'react';
import RequestCardView from './RequestCardView';

// Needs advisor ID to pull correct data from store

// redux function that pulls data from store with ID as argument
// Checks if advisor has made appointments, else return false

let data = {
  availableDate: "4/30/2017",
  availableTime: "12:00PM PST",
  availableSpots: "7"
}

class RequestCard extends Component {
  render () {
    let advisorId = this.props.advisorId;
    // reduxFunction (advisorId) {return data object}

    return (
      <RequestCardView data={data} />
    )
  };
}

export default RequestCard;
