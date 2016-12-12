import * as React from 'react';
import * as Router from 'react-router';
import { connect } from 'react-redux';
import * as ReduxRouter from 'react-router-redux';

import {Container, Row, Column} from '../components/layout';

import { loginUser, getUserDetails } from '../actions/session';

interface IAuthPageProps extends React.Props<any> {
  location: Router.LocationDescriptor;
  session: any;
  login: (code: string, route: string) => any;
};

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location,
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (code: string, route: string) => 
      dispatch(loginUser(code))
        .then(() => dispatch(getUserDetails()))
        .then(() => dispatch(ReduxRouter.push(route === '' ? '/' : route))),
  };
}

class AuthPage extends React.Component<IAuthPageProps, void> {
  componentWillMount() {
    const { location, login, session } = this.props;
    let code = (location.query as any).code;
    const route = session.get('route', '');
    login(code, route);
  }

  render() {
    return (
      <Container>
        <Row>
          <Column size={12}>
            <h2 className="caps">Processing Sign-in</h2>
            <p>
              Please Wait...
            </p>
          </Column>
        </Row>
      </Container>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);
