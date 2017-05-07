import React, { Component } from 'react';
import withIdentity from '../../../components/Identity/withIdentity';

const LogInExample = props => (
  <div>
    LOG IN DATA<br/>
    {props.identity.email}<br/>
    {props.identity.first_name}<br/>
    {props.identity.last_name}<br/>
    {props.identity.role}<br/>
    {props.identity.id}<br/>
  </div>
);

const wrapped = withIdentity(LogInExample);

export default wrapped;
