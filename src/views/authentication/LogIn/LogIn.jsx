import React from 'react';
import IdentityProvider from '../../../components/Identity/IdentityProvider';
import withIdentity from '../../../components/Identity/withIdentity';
import {postUserToken, getUser} from '../../../server/railscope'

class Login extends Component {
  constructor (props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(email){
    postUserToken(email, 'password', (identityString)=>{
      const identityArray = identityString.split('.');
      const {exp: expiration, sub: userId} = JSON.parse(atob(identityArray[1]));
      getUser(userId, (user) => {
        const identityData = {...user, expiration, token: identiyString};
        this.props.setIdentity(identityData);
      });
    });
  }

  handle(e){
    this.setState({email: e.target.value});
  }

  render () {
    <div>
      Email: <br/>
      <input value={this.state.email} onChange={(e)=>{handle(e)}}></input><br/>
      <button onClick={()=>{login(this.state.email)}}>Login!</button>
    </div>
  }
}

const LoginWithIdentity = withIdentity(Login);
const WrappedByProvider = props => (
  <IdentityProvider>
    <LoginWithIdentity/>
  </IdentityProvider>
);

export default WrappedByProvider;
