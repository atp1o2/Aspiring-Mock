import React, { Component } from 'react';
import ExperienceCardView from './ExperienceCardView';
import { getResource } from '../../server/railscope';

// This component is currently using FakeData fields
// Needs to be updated with API

class ExperienceCard extends Component {
  // loadResource (resource) {
  //   var self = this;
  //   getResource(resource, (user) => {
  //     self.setState({
  //       company: company,
  //       loading: false
  //     })
  //   })
  // }

  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     company: '',
  //     loading: true
  //   }
  // }

  // componentDidMount () {
  //   var resource = {
  //     id: this.props.exerience.id,
  //     name: "work_experiences"
  //   }
  //   this.loadFullUser(resource);
  // }

  render () {
    return (
      <ExperienceCardView
        experience={this.props.experience} />
    );
  };
}

export default ExperienceCard;
