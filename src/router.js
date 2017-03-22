import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Advisor
import Conversations from './views/advisor/conversations/Conversations';
import AdvisorProfile from './views/advisor/profile/AdvisorProfile';
import EditAdvisorProfile from './views/advisor/editProfile/EditAdvisorProfile';
import AdvisorSettings from './views/advisor/settings/AdvisorSettings';
import StudentView from './views/advisor/studentView/StudentView';

// Student
import AvailableAdvisors from './views/student/availableAdvisors/AvailableAdvisors';
import StudentProfile from './views/student/profile/StudentProfile';
import EditStudentProfile from './views/student/editProfile/EditStudentProfile';

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
    <IndexRoute component={AvailableAdvisors} />

    <Route path='DMCA' component={Dmca} />
    <Route path='FAQ' component={Faq} />
    <Route path='How-it-Works' component={HowItWorks} />
    <Route path='Mission' component={Mission} />
    <Route path='Terms-of-Use' component={Terms} />
    <Route path='Terms-of-Use-Student' component={TermsStudent} />
    <Route path='Private-Policy' component={PrivatePolicy} />
    <Route path='Private-Policy-Student' component={PrivatePolicyStudent} />

    <Route path='Advisor/:id'>
      <Route path='Conversations' component={Conversations} />
      <Route path='Profile' component={AdvisorProfile} />
      <Route path='StudentView' component={StudentView} />
      <Route path='EditProfile' component={EditAdvisorProfile} />
      <Route path='Settings' component={AdvisorSettings} />
    </Route>

    <Route path='Student/:id'>
      <Route path='Advisors' component={AvailableAdvisors} />
      <Route path='Profile' component={StudentProfile} />
      <Route path='EditProfile' component={EditStudentProfile} />
    </Route>
  </Route>
);

export default routes;
