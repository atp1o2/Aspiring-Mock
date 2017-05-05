import React, { Component } from 'react';
import EducationCardView from './EducationCardView';
import { getEducation, getSchool, getMajor } from '../../server/railscope';

class EducationCard extends Component {
  loadEducation (id, callback) {
    var self = this;
    getEducation(id, (data) => {
      self.setState({
        education: data
      })
      callback.apply(this, [data.major_id, data.school_id]);
    })
  }

  loadSchoolMajor (school, major) {
    var self = this;
    getSchool(school, (school) => {
      self.setState({
        school: school
      })
    })
    getMajor(major, (major) => {
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
    this.loadEducation(this.props.education.id, this.loadSchoolMajor);
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
