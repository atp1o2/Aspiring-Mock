import React, { Component } from 'react';
import IdentityProvider from '../../../components/Identity/IdentityProvider';
import withIdentity from '../../../components/Identity/withIdentity';
import { postUserToken, getUser } from '../../../server/railscope';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {email: '', password: 'password'};
    this.login = this.login.bind(this);
  }

  login(email){
    postUserToken(email, 'password', (identityObject)=>{
      const token = identityObject.jwt;
      const identityArray = token.split('.');
      const {exp: expiration, sub: userId} = JSON.parse(atob(identityArray[1]));
      getUser(userId, (user) => {
        const identityData = {...user, expiration, token};
        this.props.setIdentity(identityData);
      });
    });
  }

  handleEmail(e){
    this.setState({email: e.target.value});
  }

  handlePassword(e){
    this.setState({email: e.target.value});
  }

  render () {
    return(
      <div>
        Email:
        <input type='text' value={this.state.email} onChange={(e)=>{this.handleEmail(e)}}></input><br/>
        Password:
        <input type='password' value={this.state.password} onChange={(e)=>{this.handlePassword(e)}}></input><br/>
        <button onClick={()=>{this.login(this.state.email)}}>Login!</button>
      </div>
    );
  }
}

const LoginWithIdentity = withIdentity(Login);
const WrappedByProvider = props => (
  <IdentityProvider>
    <LoginWithIdentity/>
  </IdentityProvider>
);

export default LoginWithIdentity;
