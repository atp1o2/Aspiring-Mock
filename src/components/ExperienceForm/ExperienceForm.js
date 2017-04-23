import React, { Component } from 'react';
import ExperienceFormView from './ExperienceFormView';

let data = {
  company: 'Careerscope',
  position: 'Web Dev',
  city: 'San Jose',
  start_date: '2016-11-19T12:00:00.000Z',
  end_date: '2016-12-19T12:00:00.000Z',
  current: true
}

class ExperienceForm extends Component {
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
      <ExperienceFormView
        user={data}
        saveState={this.saveState}
      />
    );
  }
}

export default ExperienceForm;
