import React, {Component, PropTypes} from 'react';

export default class IdentityProvider extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    let identity = JSON.parse(localStorage.getItem("identity"));
    if (identity){
      this.state = {identity};
    }
    this.setIdentity = this.setIdentity.bind(this);
    this.destroyIdentity = this.destroyIdentity.bind(this);
  }

  setIdentity(identity){
    this.setState({...this.state, identity: identity});
    localStorage.setItem("identity", JSON.stringify(identity));
  }

  destroyIdentity(){
    this.setIdentity(null);
  }

  getChildContext() {
    return {
      identity: this.state.identity,
      setIdentity: this.setIdentity,
      destroyIdentity: this.destroyIdentity,
    };
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

IdentityProvider.childContextTypes = {
  identity: PropTypes.object,
  setIdentity: PropTypes.func,
  destroyIdentity: PropTypes.func,
};
