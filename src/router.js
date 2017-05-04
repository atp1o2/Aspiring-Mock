import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Dev
import Components from './views/Components';
import Forms from './views/Forms';

// Recruiter
import RecruiterAccount from './views/recruiter/RecruiterAccount/RecruiterAccount';
import RecruitStudents from './views/recruiter/RecruitStudents/RecruitStudents';

// Advisor
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

var routes = (
  <Route>
    <Route path="Components" component={Components} />
    <Route path="Forms" component={Forms} />

    <IndexRoute component={AvailableAdvisors} />

    <Route path='DMCA' component={Dmca} />
    <Route path='FAQ' component={Faq} />
    <Route path='How-it-Works' component={HowItWorks} />
    <Route path='Mission' component={Mission} />
    <Route path='Terms-of-Use' component={Terms} />
    <Route path='Terms-of-Use-Student' component={TermsStudent} />
    <Route path='Private-Policy' component={PrivatePolicy} />
    <Route path='Private-Policy-Student' component={PrivatePolicyStudent} />

    <Route path='Recruiters/:id'>
      <Route path='Recruit' component={RecruitStudents} />
      <Route path='Account' component={RecruiterAccount} />
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
