import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ComponentOne from './components/componentOne/ComponentOne';
import ComponentTwo from './components/componentTwo/ComponentTwo';


var routes = (
  <Route>
    <IndexRoute path="/" component={ComponentOne} />
    <Route path="/view1" component={ComponentOne} />
    <Route path="/view2" component={ComponentTwo} />
  </Route>
);

export default routes;
