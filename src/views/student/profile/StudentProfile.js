import React, { Component } from 'react';
import StudentProfileView from './StudentProfileView';
import { getFullUser } from '../../../server/railscope';

class StudentProfile extends Component {
  loadFullUser (user, callback) {
    var self = this;
    getFullUser(user, (user) => {
      self.setState({
        student: user,
        educations: user.educations,
        // experiences: user.work_experiences,
        // fake data until railscope is seeded/updated
        experiences: [{name: 'apple', city:'Menlo Park', start:'1/1/2017', end:'12/31/2017', summary: "I worked at apple!"}, {name: 'Fruit Stand', city:'Anywhere', start:'1/1/2017', end:'12/31/2017', summary: "Then I followed my passion and sold fruit."}, {name: 'apple', city:'Menlo Park', start:'1/1/2017', end:'12/31/2017', summary: "I worked at apple!"}, {name: 'Fruit Stand', city:'Anywhere', start:'1/1/2017', end:'12/31/2017', summary: "Then I followed my passion and sold fruit."}, {name: 'apple', city:'Menlo Park', start:'1/1/2017', end:'12/31/2017', summary: "I worked at apple!"}, {name: 'Fruit Stand', city:'Anywhere', start:'1/1/2017', end:'12/31/2017', summary: "Then I followed my passion and sold fruit."}],
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      student: '',
      educations: [],
      experiences: [],
      loading: true
    }
  }

  componentDidMount () {
    var user = {
      id: this.props.params.id,
      role: 'students'
    }
    this.loadFullUser(user);
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
          experiences={this.state.experiences} />
      )
    }
  }
}

export default StudentProfile;
