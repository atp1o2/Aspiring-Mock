import React, { Component } from 'react';
import RecruitStudentCardView from './RecruitStudentCardView';
import { getFullUser, getResource } from '../../server/railscope';

class RecruitStudentCard extends Component {
  loadFullUser (user, callback) {
    var self = this;
    getFullUser(user, (user) => {
      self.setState({
        student: user
      })
      var major = {
        id: user.educations[0].major_id,
        name: 'majors'
      }
      var school = {
        id: user.educations[0].school_id,
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
      student: '',
      school: '',
      major: '',
      loading: true
    }
  }

  componentWillMount () {
    var user = {
      id: this.props.student.id,
      role: 'students'
    }
    this.loadFullUser(user, this.loadEducation);
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>);
    } else {
      return (
        <RecruitStudentCardView
          student={this.state.student}
          school={this.state.school}
          major={this.state.major} />
      );
    }
  };
}

export default RecruitStudentCard;
