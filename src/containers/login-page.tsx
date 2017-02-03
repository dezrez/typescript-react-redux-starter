import * as React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Column} from '../components/layout';

import { SessionActions } from '../actions/session';
import { authenticationService } from '../api/auth/';

interface ILoginPageProps extends React.Props<any> {
  session: any;
  location: any;
  setRedirectRoute: (route: string) => void;
};

function mapStateToProps(state, ownProps) {
  return {
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setRedirectRoute: (route): void => dispatch(SessionActions.setRedirect(route))
  };
}

class LoginPage extends React.Component<ILoginPageProps, void> {
  componentWillMount() {
    const {location, setRedirectRoute, session} = this.props;
    if (!session.isLoading) {
      setRedirectRoute(location.query.redirect);
    }
  }

  render() {
    authenticationService.goToAuth();
    return (
      <Container>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
