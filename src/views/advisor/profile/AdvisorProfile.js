import React, { Component } from 'react';
import AdvisorProfileView from './AdvisorProfileView';
import { getFullAdvisor, getCompany, getIndustry } from '../../../server/railscope';

class AdvisorProfile extends Component {
  loadFullAdvisor (id, callback) {
    var self = this;
    getFullAdvisor(id, (data) => {
      self.setState({
        advisor: data
      })
      callback.apply(this, [data.company_id, data.industry_id]);
    })
  }

  loadDetails (company_id, industry_id) {
    var self = this;
    getCompany(company_id, (data) => {
      self.setState({
        company: data,
      })
    })
    getIndustry(industry_id, (data) => {
      self.setState({
        industry: data.name,
        loading: false
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      advisor: '',
      company: '',
      industry: '',
      loading: true
    }
  }

  componentDidMount () {
    this.loadFullAdvisor(this.props.params.id, this.loadDetails);
  }

  render () {
    if (this.state.loading) {
      return (<div>loading...</div>)
    }
    else {
      return (
        <AdvisorProfileView
          advisor={this.state.advisor}
          industry={this.state.industry}
          company={this.state.company} />
      );
    }
  }
}

export default AdvisorProfile;
