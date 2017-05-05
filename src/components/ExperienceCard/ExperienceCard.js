import React, { Component } from 'react';
import ExperienceCardView from './ExperienceCardView';
import { getCompany } from '../../server/railscope';

class ExperienceCard extends Component {
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
      company: '',
      loading: true
    }
  }

  componentDidMount () {
    this.loadCompany(this.props.experience.company_id);
  }

  render () {
    return (
      <ExperienceCardView
        company={this.state.company}
        experience={this.props.experience} />
    );
  };
}

export default ExperienceCard;
