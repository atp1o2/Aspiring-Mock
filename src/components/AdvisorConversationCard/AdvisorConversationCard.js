import React, { Component } from 'react';
import AdvisorConversationCardView from './AdvisorConversationCardView';

// Needs advisor ID to pull correct data from store

// redux function that pulls data from store with ID as argument
// Checks if advisor has made appointments, else return false

let data = {
  name: "Jon Snow",
  title: "Watch Commander",
  company: "The Wall",
  availableDate: "4/30/2017",
  availableTime: "12:00PM PST",
  attendees: "6",
  availableSpots: "7"
}

class AdvisorConversationCard extends Component {
  render () {
    let advisorId = this.props.advisorId;
    // reduxFunction (advisorId) {return data object}

    return (
      <AdvisorConversationCardView data={data} />
    )
  };
}

export default AdvisorConversationCard;
