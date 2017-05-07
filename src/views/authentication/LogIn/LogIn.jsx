import React, { Component } from 'react';
import LogInData from './LogInExample';
import LogInForm from './LogInForm';

const LogIn = props => (
  <div>
    <LogInForm /><br/>
    <LogInData />
  </div>
);

export default LogIn;
