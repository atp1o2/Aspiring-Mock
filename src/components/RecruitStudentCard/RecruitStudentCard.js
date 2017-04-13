import React, { Component } from 'react';
import RecruitStudentCardView from './RecruitStudentCardView';
// Needs advisor ID to pull correct data from store

// redux function that pulls data from store with ID as argument
// Checks if advisor has made appointments, else return false

let data = {
  name: "Eddard Stark",
  education: "Winter is coming.",
  major: "Lord of Winterfell",
  graduation: "November 2014",
  status: "Dead",
  summary: "Lord of Winterfell and Warden of the North. The childhood friend of Robert Baratheon, Eddard was a key player in Robert's rebellion, helping to win the throne from the Targaryens. He is married to Catelyn (Tully) Stark."
}

class RecruitStudentCard extends Component {
  render () {
    let advisorId = this.props.advisorId;
    // reduxFunction (advisorId) {return data object}

    return (
      <RecruitStudentCardView data={data} />
    )
  };
}

export default RecruitStudentCard;
