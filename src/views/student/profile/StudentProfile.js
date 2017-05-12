import React, { Component } from 'react';
import StudentProfileView from './StudentProfileView';
import { getFullStudent } from '../../../server/railscope';

class StudentProfile extends Component {
  loadFullStudent (id, callback) {
    var self = this;
    getFullStudent(id, (data) => {
      self.setState({
        student: data,
        educations: data.educations,
        work_experiences: data.work_experiences,
        schools: data.schools,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      student: '',
      educations: [],
      work_experiences: [],
      schools: [],
      loading: true,
    }
  }

  componentDidMount () {
    this.loadFullStudent(this.props.params.id);
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>);
    }
    else {
      return (
        <StudentProfileView
          student={this.state.student}
          educations={this.state.educations}
          schools={this.state.schools}
          work_experiences={this.state.work_experiences} />
      )
    }
  }
}

export default StudentProfile;
