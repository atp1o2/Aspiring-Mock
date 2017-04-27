import React, { Component } from 'react';
import RecruitStudentCardView from './RecruitStudentCardView';

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
    return (
      <RecruitStudentCardView data={data} />
    )
  };
}

export default RecruitStudentCard;
