import React, { Component } from 'react';
import EducationCardView from './EducationCardView';
import { getResource } from '../../server/railscope';

class EducationCard extends Component {
  loadResource (resource, callback) {
    var self = this;
    getResource(resource, (record) => {
      self.setState({
        education: record
      })
      var major = {
        id: record.major_id,
        name: 'majors'
      }
      var school = {
        id: record.school_id,
        name: 'schools'
      }
      callback.apply(this, [school, major]);
    })
  }

  loadEducation (school, major) {
    var self = this;
    getResource(school, (school) => {
      self.setState({
        school: school
      })
    })
    getResource(major, (major) => {
      self.setState({
        major: major,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      education: '',
      school: '',
      major: '',
      loading: true
    }
  }

  componentDidMount () {
    var resource = {
      id: this.props.education.id,
      name: "educations"
    }
    this.loadResource(resource, this.loadEducation);
  }

  render () {
    return (
      <EducationCardView
        education={this.state.education}
        school={this.state.school}
        major={this.state.major} />
    );
  };
}

export default EducationCard;
