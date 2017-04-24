import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Dev
import Components from './views/Components';
import Forms from './views/Forms';

// Advisor
import AdvisorConversations from './views/advisor/AdvisorConversations/AdvisorConversations';
import AdvisorProfile from './views/advisor/profile/AdvisorProfile';
import EditAdvisorProfile from './views/advisor/editProfile/EditAdvisorProfile';
import AdvisorSettings from './views/advisor/settings/AdvisorSettings';
import StudentView from './views/advisor/studentView/StudentView';

// Student
import AvailableAdvisors from './views/student/availableAdvisors/AvailableAdvisors';
import StudentProfile from './views/student/profile/StudentProfile';
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

    <Route path='Advisor/:id'>
      <Route path='Conversations' component={AdvisorConversations} />
      <Route path='Profile' component={AdvisorProfile} />
      <Route path='StudentView' component={StudentView} />
      <Route path='Conversations' component={EditAdvisorProfile} />
      <Route path='Account' component={AdvisorSettings} />
    </Route>

    <Route path='Student/:id'>
      <Route path='Advisors' component={AvailableAdvisors} />
      <Route path='Conversations' component={Conversation} />
      <Route path='Profile' component={StudentProfile} />
    </Route>
  </Route>
);

export default routes;
