import React, { Component } from 'react';
import LanguagesFormView from './LanguagesFormView';

let data = {
  language: 'Javascript'
}

class LanguagesForm extends Component {
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
      <LanguagesFormView
        user={data}
      />
    );
  }
}

export default LanguagesForm;
