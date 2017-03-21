import React from 'react';
import ComponentOneView from './ComponentTwoView';
import Store from '../../store/store';

var ComponentTwo = React.createClass({
  render () {
    return (
      <ComponentOneView />
    );
  }
})

export default ComponentTwo;
