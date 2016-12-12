import * as React from 'react';
import { connect } from 'react-redux';
import {Container, Row, Column} from '../components/layout';

import {setRedirect} from '../actions/session';
import { goToAuth } from '../api/auth/';

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
    setRedirectRoute: (route): void => dispatch(setRedirect(route))
  };
}

class LoginPage extends React.Component<ILoginPageProps, void> {
  componentWillMount() {
    const {location, setRedirectRoute, session} = this.props;
    if (!session.get('isLoading', false)) {
      setRedirectRoute(location.query.redirect);
    }
  }

  render() {
    goToAuth();
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
