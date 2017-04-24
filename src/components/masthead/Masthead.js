import React, { Component } from 'react';
import MastheadView from './MastheadView';

let data = {
  type: "advisor"
}

class Masthead extends Component {
  render () {
    return <MastheadView user={data} />
  };
}

export default Masthead;
