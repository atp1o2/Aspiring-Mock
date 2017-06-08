import React, { Component } from 'react';
import { Link } from 'react-router';
import { postAdvisorInvite, getFullRecruiter } from '../../../server/railscope';

class RecruiterInvite extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      recruiter: {email: ''},
      success: false,
      failure: false,
      company: {id: null},
      code: ''
    }
    this.emailChange = this.emailChange.bind(this);
    this.companyChange = this.companyChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount () {
    this.loadRecruiter(this.props.params.id);
  }

  loadRecruiter (id) {
    getFullRecruiter(id, (data) => {
      console.log(data)
      this.setState({ ...this.state, recruiter: data });
    })
  }

  emailChange(e){
    this.setState({...this.state, email: e.target.value});
    console.log(this.state.recruiter)
  }

  companyChange(e){
    this.setState({...this.state, company_id: e.target.value});
  }

  submit(){
    this.setState({...this.state, loading: true, success: false, failure: false})
    postAdvisorInvite({recruiter_id: this.state.recruiter.id, company_id: this.state.company.id, email: this.state.email},
      (data)=>this.setState({...this.state, loading: false, success: true, failure: false, invite: data}),
      (data)=>this.setState({...this.state, loading: false, success: false, failure: true})
    )
  }

  render () {
    const aspireAdmin = this.state.recruiter.email.split('@')[1] === 'joinaspire.co';
    return (
        <div>
          Email: <br/>
          <input value={this.state.email} onChange={(e)=>this.emailChange(e)}></input><br/>
          {aspireAdmin ? <div>Company ID: <input value={this.state.company_id} onChange={(e)=>this.companyChange(e)}></input></div> : null}
          <button onClick={this.submit} disabled={this.state.email === ''}>Invite</button><br/>
          {this.state.loading ? 'Creating and sending invite. Please wait.' : null}
          {this.state.success ? 'Success!' : null}
          {this.state.success ? <div><Link to={`advisor_invite/${this.state.invite.code}`}>Click here to see what the advisor will see</Link></div> : null}
          {this.state.failure ? 'There was a problem sending this Advisor invite. Please try again.' : null}
        </div>
      );
  }
}

export default RecruiterInvite;
