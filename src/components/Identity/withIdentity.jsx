import React, {PropTypes} from 'react';

const withIdentity = WrappedComponent => Wrapper.bind(null, WrappedComponent)
const Wrapper = (WrappedComponent, props, context) => {
    <WrappedComponent
      {...props}
      identity={context.identity}
      setIdentity={context.setIdentity}
      destroyIdentity={context.destroyIdentity}
    />
  }
Wrapper.contextTypes = {
  identity: PropTypes.object,
  setIdentity: PropTypes.func,
  destroyIdentity: PropTypes.func,
}

export default withIdentity;
