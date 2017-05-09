import React, { Component } from 'react';
import { getAdvisorAmas } from '../../server/railscope';
import withIdentity from '../Identity/withIdentity';
import AmaView from './AmaView';

class Ama extends Component {
  constructor (props) {
    super(props);
    this.state = {
      logged_user: '',
      advisor: '',
      role: '',
      amas: '',
      loading: true,
    }
  }

  componentDidMount () {
    this.loadAmas(this.props.advisor.id)
    this.setState({
      logged_user: this.props.identity,
      advisor: this.props.advisor,
      role: this.props.identity.role
    })
  }

  loadAmas (id) {
    var self = this;
    getAdvisorAmas(id, (data) => {
      self.setState({
        amas: data.shift(),
        loading: false
      })
    })
  }

  render () {
    // console.log('AMA instance', this.state.amas);
    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      return (
        <AmaView
          logged_user={this.state.logged_user}
          advisor={this.state.advisor}
          amas={this.state.amas} />
      )
    }
  }
}

const AmaWithIdentity = withIdentity(Ama);
export default AmaWithIdentity;
