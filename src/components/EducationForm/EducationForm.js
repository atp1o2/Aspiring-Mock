import React, { Component } from 'react';
import EducationFormView from './EducationFormView';

let data = {
  college: 'UC Davis',
  degree:'B.S.',
  major: 'Biochemistry',
  gpa: '4.1',
  graduation: '2014-08',
  club: 'UCD Kendo'
}


class EducationForm extends Component {
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
      <EducationFormView
        user={data}
        saveState={this.saveState}
      />
    );
  }
}

export default EducationForm;
