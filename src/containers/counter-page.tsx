import * as React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/counter';
import Counter from '../components/counter';

import {IAppState} from '../reducers';

import {Container, Row, Column} from '../components/layout';

interface ICounterPageProps extends React.Props<any> {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

function mapStateToProps(state: IAppState) {
  return {
    counter: state.counter.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: (): void => dispatch(increment()),
    decreaseCounter: (): void => dispatch(decrement()),
  };
}

class CounterPage extends React.Component<ICounterPageProps, void> {
  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;

    return (
      <Container testid="counter">
        <Row>
          <Column size={12}>
            <h2
              data-testid="counter-heading"
              className="center caps"
              id="qa-counter-heading">
              Counter
            </h2>

            <Counter
              counter={ counter }
              increment={ increaseCounter }
              decrement={ decreaseCounter } />
          </Column>
        </Row>
    </Container>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
