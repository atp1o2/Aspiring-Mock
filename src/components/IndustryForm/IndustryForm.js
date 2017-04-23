import React, { Component } from 'react';
import IndustryFormView from './IndustryFormView';

let data = {
  industry: 'tech'
}

class IndustryForm extends Component {
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
      <IndustryFormView
        user={data}
      />
    );
  }
}

export default IndustryForm;
