import React from 'react';
import { Route, IndexRoute } from 'react-router';

//Registration
import StudentRegistration from './views/authentication/Registration/StudentRegistration';
import AdvisorRegistration from './views/authentication/Registration/AdvisorRegistration';

//Authentication
import EmailVerification from './views/authentication/Registration/EmailVerification';

// Recruiter
import RecruiterAccount from './views/recruiter/RecruiterAccount/RecruiterAccount';
import RecruitStudents from './views/recruiter/RecruitStudents/RecruitStudents';
import RecruiterInvite from './views/recruiter/RecruiterInvite/RecruiterInvite';

// Advisor
import AdvisorLanding from './views/advisor/AdvisorLanding/AdvisorLanding';
import AdvisorConversations from './views/advisor/AdvisorConversations/AdvisorConversations';
import ConversationAttendees from './views/advisor/ConversationAttendees/ConversationAttendees';
import AdvisorAccount from './views/advisor/Account/AdvisorAccount';
import AdvisorProfile from './views/advisor/Profile/AdvisorProfile';

// Student
import AvailableAdvisors from './views/student/availableAdvisors/AvailableAdvisors';
import StudentAccount from './views/student/Account/StudentAccount';
import StudentProfile from './views/student/Profile/StudentProfile';
import Conversation from './views/student/Conversation/Conversation';

// Static
import Dmca from './views/static/Dmca';
import Faq from './views/static/Faq';
import HowItWorks from './views/static/HowItWorks';
import Mission from './views/static/Mission';
import PrivatePolicy from './views/static/PrivatePolicy';
import PrivatePolicyStudent from './views/static/PrivatePolicyStudent';
import Terms from './views/static/Terms';
import TermsStudent from './views/static/TermsStudent';
import LogIn from './views/authentication/LogIn/LogIn';

var routes = (
  <Route>
    <IndexRoute component={AdvisorLanding} />

    <Route path='Log-In' component={LogIn} />
    <Route path='DMCA' component={Dmca} />
    <Route path='FAQ' component={Faq} />
    <Route path='How-it-Works' component={HowItWorks} />
    <Route path='Mission' component={Mission} />
    <Route path='Terms-of-Use' component={Terms} />
    <Route path='Terms-of-Use-Student' component={TermsStudent} />
    <Route path='Private-Policy' component={PrivatePolicy} />
    <Route path='Private-Policy-Student' component={PrivatePolicyStudent} />

    <Route path='email_verification/:id' component={EmailVerification} />
    <Route path='advisor_invite/:id' component={AdvisorRegistration} />
    <Route path='student_registration' component={StudentRegistration} />

    <Route path='Company' component={AdvisorLanding} />

    <Route path='Recruiters/:id'>
      <Route path='Recruit' component={RecruitStudents} />
      <Route path='Profile' component={RecruiterAccount} />
      <Route path='Account' component={RecruiterAccount} />
      <Route path='Invite' component={RecruiterInvite} />
    </Route>

    <Route path='Advisors/:id'>
      <Route path='Conversations' component={AdvisorConversations} />
      <Route path='Conversations/:conversation_id' component={ConversationAttendees} />
      <Route path='Profile' component={AdvisorProfile} />
      <Route path='Account' component={AdvisorAccount} />
    </Route>

    <Route path='Students/:id'>
      <Route path='Advisors' component={AvailableAdvisors} />
      <Route path='Conversations' component={Conversation} />
      <Route path='Profile' component={StudentProfile} />
      <Route path='Account' component={StudentAccount} />

    </Route>
  </Route>
);

export default routes;
