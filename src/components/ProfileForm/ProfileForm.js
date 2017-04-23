import React, { Component } from 'react';
import ProfileFormView from './ProfileFormView';

let data = {
  status: 'Currently Employed',
  summary:'I really like sticking my finger into the peanut butter jar slowly.',
  links: 'www.phamster.com'
}

class ProfileForm extends Component {
  constructor (props) {
    super(props);
    this.saveState = this.saveState.bind(this);
  }

  saveState (newState) {
    console.log("STATE SAVED!")
    console.log(newState);
  }

  render () {
    return (
      <ProfileFormView
        user={data}
        saveState={this.saveState}
      />
    );
  }
}

export default ProfileForm;
