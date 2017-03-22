import React, { Component } from 'react';

class Mission extends Component {
  render () {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <p className="h1">Mission</p>
            <hr className="hr-gray" />
            <p>At CareerScope, our mission is to re-define your career discovery experience. We make it easy and accessible for you to connect with industry leaders on a more personal level. The esteemed advisors on our platform engage with one clear purpose: to provide insightful, actionable advice on your career goals.</p>
            <p>Whether you are deciding on an internship opportunity, choosing your next elective or simply learning what a career entails, we are providing the guidance you need to uncover the path to your own success. You have excelled at everything you set out to accomplish, it's time to discover <span class="next">what is next</span>.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
