import React, { Component } from 'react';
import MastheadView from './MastheadView';

let data = {
  type: "student"
}

class Masthead extends Component {
  render () {
    return <MastheadView user={data} />
  };
}

export default Masthead;
