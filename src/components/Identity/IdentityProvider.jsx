import React, {PropTypes} from 'react';

export default class IdentityProvider extends Component {
  constructor (props) {
    super(props);
    let identity = JSON.parse(localStorage.getItem("identity"));
    if (identity){
      this.state.identity = identity;
    }
    this.setIdentity = this.setIdentity.bind(this);
    this.destroyIdentity = this.destroyIdentity.bind(this);
  }

  static childContextTypes = {
    identity: PropTypes.object,
    setIdentity: PropTypes.func,
    destroyIdentity: PropTypes.func,
  };

  setIdentity(identity){
    this.setState({...this.state, identity: identity});
    localStorage.setItem("identity", JSON.stringify(identity));
  }

  destroyIdentity(){
    setIdentity(null);
  }

  getChildContext() {
    return {
      identity: this.state.identity,
      setIdentity: this.setIdentity,
      destroyIdentity: this.destroyIdentity,
    };
  }

  render () {
    <div>{this.props.children}</div>
  }
}
