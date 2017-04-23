import React, { Component } from 'react';
import CitizenshipFormView from './CitizenshipFormView';

let data = {
  citizenship: 'US Citizen'
}

class CitizenshipForm extends Component {
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
      <CitizenshipFormView
        user={data}
      />
    );
  }
}

export default CitizenshipForm;
