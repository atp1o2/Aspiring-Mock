import React, { Component } from 'react';

class HowItWorks extends Component {
  render () {
    return (
      <div className="container">
        <p className="h1 text-center">How it Works</p>
        <hr className="hr-gray" />
        <div className="row mb40">
          <div className="col-md-12 col-lg-6">
            <p className="h2">Select an Advisor</p>
            Once you select an advisor to speak with, you will be prompted to provide some information about yourself. The information helps the conversation run more smoothly and efficiently. You can always edit the information in your account. After you book you will receive a confirmation email with a link to join the video call and information on how to prepare, which can also be found here.
          </div>
          <div className="col-md-12 col-lg-6">
            <img className="img-responsive" src="img/advisor-screen.png" alt="Advisors" />
          </div>
        </div>
        <div className="row mb40">
          <div className="col-lg-6 push-lg-6">
            <p className="h2">Join Group Video Call</p>
            The conversations themselves are 30-minutes in length with up to 7 other students from across the country. The advisor begins by introducing themselves and their background before opening up the discussion for questions. Relax, these sessions are purely for your benefit and you will not be evaluated based on your questions.
          </div>
          <div className="col-lg-6 pull-lg-6">
            <img className="img-responsive center-block" src="img/video-chat.png" alt="Video Conference" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 mt48">
            <p className="h2">Provide Feedback</p>
            After the conversation, we gather your feedback on the conversation quality and your interest levels in that career and company. Based on your responses we can make recommendations for career opportunities or other conversations you might be interested in. We are constantly striving to improve our product with you in mind and your feedback is highly appreciated.
          </div>
          <div className="col-md-12 col-lg-6">
            <img className="img-responsive" src="img/feedback.PNG" alt="Feedback" />
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
