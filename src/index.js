import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import routes from './router';
import Main from './views/Main';
import './styles/app.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      {routes}
    </Route>
  </Router>,
  document.getElementById('root')
)
