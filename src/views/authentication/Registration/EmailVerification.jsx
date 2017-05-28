import React from 'react';
import {putEmailVerification} from '../../../server/railscope';

class EmailVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, confirmed: false, error: false};
  }

  componentDidMount(){
    this.setState({...this.state, loading: true});
    putEmailVerification(
      this.props.params.id,
      {},
      (response)=>{
        console.log('success');
        this.setState({...this.state, confirmed: true, loading: false});
        console.log(response);
      },
      (response)=>{
        console.log('failed');
        this.setState({...this.state, failed: true, loading: false});
        console.log(response);
      }
    );
  }

  render() {
    const {loading, confirmed, failed} = this.state;
    if (loading) return <div>Verifying email. Please wait.</div>;
    if (confirmed) return <div>Your email has been successfully verified.</div>;
    if (failed) return <div>There was a slight hiccup with our server. Please try again in a bit.</div>;
    return <div></div>;
  }
}

export default EmailVerification;
