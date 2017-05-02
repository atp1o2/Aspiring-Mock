import React, { Component } from 'react';
import AdvisorProfileView from './AdvisorProfileView';
import { getFullUser, getResource } from '../../../server/railscope';

class AdvisorProfile extends Component {
  loadFullUser (user, callback) {
    var self = this;
    getFullUser(user, (user) => {
      self.setState({
        advisor: user
      })
      var resource = {
        id: user.company_id,
        name: 'companies'
      }
      callback.apply(this, [resource]);
    })
  }

  loadResource (resource) {
    var self = this;
    getResource(resource, (company) => {
      self.setState({
        company: company,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      advisor: '',
      company: '',
      loading: true
    }
  }

  componentDidMount () {
    var user = {
      id: this.props.params.id,
      role: 'advisors'
    }
    this.loadFullUser(user, this.loadResource);
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>)
    }
    else {
      return (
        <AdvisorProfileView
          advisor={this.state.advisor}
          company={this.state.company} />
      );
    }
  }
}

export default AdvisorProfile;
