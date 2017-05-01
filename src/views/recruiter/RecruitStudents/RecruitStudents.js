import React, { Component } from 'react';
import RecruitStudentsView from './RecruitStudentsView';
import { getAllStudents, getCompany } from '../../../server/railscope';

class RecruitStudents extends Component {
  loadAllStudents () {
    var self = this;
    getAllStudents((students) => {
      self.setState({
        students: students,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      students: [],
      loading: true
    }
  }

  componentWillMount () {
    this.loadAllStudents();
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>);
    } else {
      return (<RecruitStudentsView students={this.state.students} />);
    }
  }
}

export default RecruitStudents;

