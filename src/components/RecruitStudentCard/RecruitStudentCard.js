import React, { Component } from 'react';
import RecruitStudentCardView from './RecruitStudentCardView';
import { getFullStudent, getMajor, getSchool } from '../../server/railscope';

class RecruitStudentCard extends Component {
  loadStudent (id, callback) {
    var self = this;
    getFullStudent(id, (student) => {
      self.setState({
        student: student,
        educations: student.educations
      })
      callback.apply(this, [student.educations[0].school_id, student.educations[0].major_id]);
    })
  }

  loadEducation (school_id, major_id) {
    var self = this;
    getSchool(school_id, (school) => {
      self.setState({
        school: school
      })
    })
    getMajor(major_id, (major) => {
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
      educations: '',
      school: '',
      major: '',
      loading: true
    }
  }

  componentWillMount () {
    this.loadStudent(this.props.student.id, this.loadEducation);
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
