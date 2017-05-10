import React, { Component } from 'react';
import AdvisorProfileView from './AdvisorProfileView';
import { getFullAdvisor, getCompany } from '../../../server/railscope';

class AdvisorProfile extends Component {
  loadFullAdvisor (id, callback) {
    var self = this;
    getFullAdvisor(id, (data) => {
      self.setState({
        advisor: data
      })
      callback.apply(this, [data.company_id]);
    })
  }

  loadCompany (id) {
    var self = this;
    getCompany(id, (data) => {
      self.setState({
        company: data,
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
    this.loadFullAdvisor(this.props.params.id, this.loadCompany);
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
