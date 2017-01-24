import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logoutUser, getUserDetails } from '../actions/session';
import Button from '../components/button';
import Content from '../components/content';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';

import { IAppState } from '../reducers';
import { ISession } from '../reducers/session';

import { goToAuth } from '../api/auth/';

declare const __DEV__: boolean; // from webpack

interface IAppProps extends React.Props<any> {
  session: ISession;
  location: any;
  router: any;
  user: any;
  logout: () => void;
  getUser: () => void;
};

function mapStateToProps(state: IAppState, ownProps) {
  return {
    session: state.session,
    location: ownProps.location,
    user: state.session.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutUser()),
    getUser: () => dispatch(getUserDetails())
  };
}

class App extends React.Component<IAppProps, void> {
  componentWillMount() {
    const { session, getUser } = this.props;
    const token = session.token;
    const isLoggedIn = token;
    if (!session.user && isLoggedIn) {
      getUser();
    }
  }

  render() {
    const { children, session, location, logout, user } = this.props;
    const token = session.token;
    const isLoggedIn = token;
    let contactName = null;
    if (user) {
      contactName = user.ContactName;
    }

    return (
      <div>
        <Navigator testid="navigator">
          <Logo />
          <ul className="nav navbar-nav">
            <NavigatorItem
              isActive={location.pathname} 
              to="/">
              Counter
            </NavigatorItem>
            <NavigatorItem  
              isActive={location.pathname} 
              to="/about">
              About Us
            </NavigatorItem>
            <NavigatorItem  
              isActive={location.pathname} 
              to="/about/counter">
              Sub Counter
            </NavigatorItem>
            <NavigatorItem  
              isActive={location.pathname} 
              to="/about/counter/about">
              Sub Sub About Us
            </NavigatorItem>
            <NavigatorItem  
              isActive={location.pathname} 
              to="/about/counter/about/counter">
              Sub Sub Sub Counter
            </NavigatorItem>
            <NavigatorItem  
              isActive={location.pathname} 
              to="/reconcile">
              Reconcile
            </NavigatorItem>
          </ul>

          <ul className="nav navbar-nav float-xs-right">
            <NavigatorItem>
              { contactName ? contactName : 'Welcome' }
            </NavigatorItem>
            
            <form className="pl-1 form-inline float-xs-right">
              <button className="btn btn-outline-danger" onClick={logout}>
                Logout
              </button>
            </form>
          </ul>
        </Navigator>
        <Content isVisible={true}>
          { children }
        </Content>
      </div>
    );
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
