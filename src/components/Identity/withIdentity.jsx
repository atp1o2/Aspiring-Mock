import React, {PropTypes} from 'react';

const withIdentity = (WrappedComponent) => {
  const Wrapper = (props, context) => {
    const newProps = {...props, ...context}
    return <WrappedComponent {...newProps}/>

  }

  Wrapper.contextTypes = {
    identity: PropTypes.object,
    setIdentity: PropTypes.func,
    destroyIdentity: PropTypes.func,
  };

  return Wrapper

}

export default withIdentity;
