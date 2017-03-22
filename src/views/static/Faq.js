import React, { Component } from 'react';

class Faq extends Component {
  render () {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <p className="h1">FAQ</p>
            <hr className="hr-gray" />
            <p className="h5">Who are the advisors?</p>
            <p>Each advisor is a working professional with several years of industry experience. They are happily taking time out of their day to meet with you and answer your questions about their careers.</p>
            <p className="h5">Is this an interview?</p>
            <p>Not by any means. The advisors are not evaluating your aptitude in these conversations. They are on the platform purely to provide you with guidance.</p>
            <p className="h5">Can I use an advisor as a reference?</p>
            <p>Since the advisors are not evaluating you, they can’t be a good reference or put in the good word for you. During a formal interview you can mention that you spoke with an advisor as a talking point for questions or discussion, but do not list the advisor as a reference.</p>
            <p className="h5">Are there recruiters on the platform?</p>
            <p>Every available advisor listed is an industry professional who can answer the in-depth questions recruiters can’t. That said, they may not be aware of specific opportunities within their company. If you’d like to find out about job opportunities, please visit the company careers page for more information. </p>
            <p className="h5">How will my profile information be used?</p>
            <p>Your profile information helps the advisors understand their audience and prepare for the conversation. We also use the information along with your conversation feedback to recommend other advisors, career insights and job opportunities. University Relations teams from companies you’ve expressed interest in can also view your profile and reach out to you with job opportunities.</p>
            <p className="h5">What does the request button do?</p>
            <p>The request button let’s us know when there is more demand for a particular advisor, company or industry. We make an effort to increase the availability of in-demand advisors and notify you when new office hours are posted. </p>
            <p className="h5">Do I need to prepare for the conversation?</p>
            <p>We encourage you to review the advisor’s profile and form a few questions beforehand.</p>
            <p className="h5">Are the conversations recorded?</p>
            <p>For quality assurance we review conversations from time to time but do not make them publicly available. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
