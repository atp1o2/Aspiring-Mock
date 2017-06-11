import React, { Component } from 'react';
import IdentityProvider from '../../../components/Identity/IdentityProvider';
import withIdentity from '../../../components/Identity/withIdentity';
import { Link, withRouter } from 'react-router';
import { postUserToken, getFullUser } from '../../../server/railscope';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Button from '../../../components/Button';
import { RoleSwitcher } from '../../../helpers/RoleSwitcher';


class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {email: '', password: 'password', invalidLogin: false};
    this.login = this.login.bind(this);
  }

  login(email){
    postUserToken({auth: {email, password: 'password'}}, (identityObject)=>{
      this.setState({...this.state, invalidLogin: false});
      const token = identityObject.jwt;
      const identityArray = token.split('.');
      const {exp: expiration, sub: userId} = JSON.parse(atob(identityArray[1]));
      getFullUser(userId, (user) => {
        console.log(user);
        const identityData = {...user, expiration, token};
        this.props.setIdentity(identityData);
        let role = RoleSwitcher(identityData.role)
        this.props.router.push(`${role}/${identityData.profile_id}/Profile`);
      });
    }, (response)=>{
      console.log(response);
      console.log('failed');
      this.setState({...this.state, invalidLogin: true});
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
        <h3 className="text-center">Login</h3>
        <FormGroup className="mt-3">
          <ControlLabel>Email:</ControlLabel>
          <FormControl
            type='text'
            value={this.state.email}
            onChange={(e)=>{this.handleEmail(e)}}>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password:</ControlLabel>
            <FormControl
              type='password'
              value={this.state.password}
              onChange={(e)=>{this.handlePassword(e)}}>
            </FormControl>
        </FormGroup>
        <Button className="mt-2" onClick={()=>{this.login(this.state.email)}}>Login!</Button>
        <p><Link>Forgot Password?</Link></p>

        {this.state.invalidLogin ? <div>The Email or Password doesn't match our records, please try a different set of credentials.</div> : null}
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

export default withRouter(LoginWithIdentity);
