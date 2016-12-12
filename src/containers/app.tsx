import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logoutUser, getUserDetails } from '../actions/session';
import Button from '../components/button';
import Content from '../components/content';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';

import { goToAuth } from '../api/auth/';

import DevTools from './dev-tools';
declare const __DEV__: boolean; // from webpack

interface IAppProps extends React.Props<any> {
  session: any;
  location: any;
  router: any;
  logout: () => void;
  getUser: () => void;
};

function mapStateToProps(state, ownProps) {
  return {
    session: state.session,
    location: ownProps.location
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
    const token = session.get('token', false);
    const isLoggedIn = token;
    if (!session.get('user') && isLoggedIn) {
      getUser();
    }
  }

  render() {
    const { children, session, location, logout } = this.props;
    const token = session.get('token', false);
    const isLoggedIn = token;
    const contactName = session.getIn(['user', 'ContactName'], null);

    return (
      <div>
        <Navigator testid="navigator">
          <Logo />
          <ul className="nav navbar-nav">
            <NavigatorItem
              isActive={location.pathname === '/'} 
              to="/">
              Counter
            </NavigatorItem>
            <NavigatorItem  
              isActive={location.pathname === '/about'} 
              to="/about">
              About Us
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
        { __DEV__ ? <DevTools /> : null }
      </div>
    );
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
