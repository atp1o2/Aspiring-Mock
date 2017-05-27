import React, { Component } from 'react';
import ExperienceCardView from './ExperienceCardView';
import { getCompany, getCity, getState } from '../../server/railscope';

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

  loadCity (id, callback) {
    var self = this;
    getCity(id, (data) => {
      self.setState({
        city: data.name
      })
      callback.apply(this, [data.state_id]);
    })
  }

  loadState (id) {
    var self = this;
    getState(id, (data) => {
      self.setState({
        state: data.name
      })
    })
  }

  constructor (props) {
    super(props);
    this.state = {
      company: '',
      city: '',
      state: '',
      loading: true
    }
  }

  componentDidMount () {
    this.loadCompany(this.props.experience.company_id);
    this.loadCity(this.props.experience.city_id, this.loadState);
  }

  render () {
    return (
      <ExperienceCardView
        company={this.state.company}
        city={this.state.city}
        state={this.state.state}
        experience={this.props.experience} />
    );
  };
}

export default ExperienceCard;
