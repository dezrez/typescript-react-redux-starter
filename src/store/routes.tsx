import * as React from 'react';
import { IndexRedirect, Route } from 'react-router';

import App from '../containers/app';
import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';
import AuthPage from '../containers/auth-page';
import LoginPage from '../containers/login-page';

import { routerActions } from 'react-router-redux';

import {UserAuthWrapper} from 'redux-auth-wrapper';
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.session,
  authenticatingSelector: state => state.session.toJS().isLoading,
  redirectAction: routerActions.replace,
  predicate: session => session.get('token', false),
  wrapperDisplayName: 'UserIsAuthenticated'
});

const Authenticated = UserIsAuthenticated((props) => props.children);

export default (
  <Route path="/" component={ App }>
    <IndexRedirect to="/counter" />
    <Route component={Authenticated}>
      <Route path="counter" component={CounterPage}/>
      <Route path="about" component={AboutPage}/>
    </Route>
    <Route path="login" component={LoginPage}/>
    <Route path="auth" component={AuthPage}/>
  </Route>
);
