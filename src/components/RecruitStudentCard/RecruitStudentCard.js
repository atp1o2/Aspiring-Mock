import React, { Component } from 'react';
import RecruitStudentCardView from './RecruitStudentCardView';
import { getFullStudent, getMajor } from '../../server/railscope';

class RecruitStudentCard extends Component {
  loadFullStudent (id, callback) {
    var self = this;
    getFullStudent(id, (user) => {
      self.setState({
        student: user,
        school: user.schools[0],
        education: user.educations[0]
      })
      callback.apply(this, [user.educations[0].major_id]);
    })
  }

  loadMajor (id) {
    var self = this;
    getMajor(id, (major) => {
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
      education: '',
      major: '',
      loading: true
    }
  }

  componentWillMount () {
    this.loadFullStudent(this.props.student.id, this.loadMajor);
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>);
    } else {
      return (
        <RecruitStudentCardView
          student={this.state.student}
          school={this.state.school}
          major={this.state.major}
          education={this.state.education} />
      );
    }
  };
}

export default RecruitStudentCard;
