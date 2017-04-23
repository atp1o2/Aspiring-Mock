import React, { Component } from 'react';
import AccountFormView from './AccountFormView';

let data = {
  first_name: 'Andrew',
  last_name: 'Pham',
  email: 'test@email.com',
  password: 'admin',
  password_confirm: 'admin'
}

class AccountForm extends Component {
  constructor (props) {
    super(props);
    this.saveState = this.saveState.bind(this);
  }

  saveState (newState) {
    console.log("STATE SAVED!")
    console.log(newState);
  }

  render () {
    return (
      <AccountFormView
        user={data}
        saveState={this.saveState}
      />
    );
  }
}

export default AccountForm;
