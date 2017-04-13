import React, { Component } from 'react';
import ProfileCardView from './ProfileCardView';

// Needs advisor ID to pull correct data from store
let data = {
  name: "Daenerys Targaryen",
  title: "Mother of Dragons",
  avatar: ""
}

class ProfileCard extends Component {
  render () {
    return <ProfileCardView
      name={data.name}
      title={data.title}
      avatar={data.avatar}
    />
  };
}

export default ProfileCard;
